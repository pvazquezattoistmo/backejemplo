import { Component, OnInit } from '@angular/core';
import { DatoProcuracionCorneal } from '../shared/dato-procuracion-corneal';
import { GlobalesService } from '../../shared/globales.service';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';

declare var $: any;
declare var DataTable: any;

@Component({
    selector: 'app-dato-procuracion-corneal-table',
    templateUrl: './dato-procuracion-corneal-table.component.html',
    styleUrls: ['./dato-procuracion-corneal-table.component.css'],
    providers:[GlobalesService,
               PermisoAtributoService,
               PermisoTablaService,
               ]
})
export class DatoProcuracionCornealTableComponent implements OnInit {
    public primero: boolean = true;
    public datoProcuracionCornealSeleccionado: DatoProcuracionCorneal;
    public usuariologueado;
    public permisosAtributos = [];
    public permisosTabla = { "tabla": "datoProcuracionCorneal", "permiso": 0, "etiqueta": "" };
    public permisoFecha: any = [{"etiqueta": "Fecha Inicio", "validacion": null, "permiso": 7, "tabla": "datoProcuracionCorneal", "atributo": "fechaInicio"},
    {"etiqueta": "Fecha Fin", "validacion": null, "permiso": 7, "tabla": "datoProcuracionCorneal", "atributo": "fechaFin" }];
    public permisoFolio: any = [{"etiqueta": "Folio de Solicitud de Evaluacion Corneal", "validacion": null, "permiso": 7, "tabla": "datoProcuracionCorneal", "atributo": "folioSolicitud"}];
    public permisoIdCenatra: any = [{"etiqueta": "id Cenatra", "validacion": null, "permiso": 7, "tabla": "datoProcuracionCorneal", "atributo": "idcenatra"}];
    public ptabla: boolean = false;
    public pattr: boolean = false;
    public fechaValidaInicio: boolean = false;
    public fechaSeleccionInicio: Date;
    public fechaValidaFinal: boolean = false;
    public fechaSeleccionFin: Date;
    public idcenatra;
    //public folioValido: boolean = false;
    public folioDato: string;
    public url;

    constructor(public globalesService: GlobalesService,
        public permisoAtributoService: PermisoAtributoService,
        public permisoTablaService: PermisoTablaService,
        public urlProvider: URLProvider
    ) {
        this.url = this.urlProvider;
        this.datoProcuracionCornealSeleccionado = new DatoProcuracionCorneal();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'datoProcuracionCorneal'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    evtTablas(lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'datoProcuracionCorneal'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    }
    evtAtributos(lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function() {  obj.getColumnas(obj); }, 500);
        }
    }
    get muestraTabla() {
        return this.ptabla && this.pattr;
    }
    getColumnas(obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        //if (!this.avisible("datoProcuracionCorneal", "id"))
            //columnasNoVisibles.push(0);
        columnas.push({ "data": "folioSolicitud" } );
        columnas.push({ "data": "idcenatra" } );
        columnas.push({ "data": "nombre" } );
        columnas.push({ "data": "primerApellido" } );
        columnas.push({ "data": "segundoApellido" } );
        columnas.push({
             data: function(oObj) {
               return "<button class='btn btn-primary' onclick='borrar'><span class='glyphicon glyphicon-pencil'></span></button>";
             }
           });
           columnas.push({
             data: function(oObj) {
               return "<button class='btn btn-primary' onclick='borrar'><span class='glyphicon glyphicon-trash'></span></button>";
             }
           });
        /*columnas.push({
                "data": function(oObj) {
		     if (oObj.idsolicitudEvaluacionCorneal)
                    	return "<span style=\"cursor: pointer\">"+ oObj.idsolicitudEvaluacionCorneal.folioSolicitud +"</span>";
		     return "";
                }
        });*/
        /*//if (!this.avisible("datoProcuracionCorneal", "idcenatra"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "idcenatra" } );
        //if (!this.avisible("datoProcuracionCorneal", "tipo"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "tipo" } );
        //if (!this.avisible("datoProcuracionCorneal", "fechaInicio"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "fechaInicio" } );
        if (!this.avisible("datoProcuracionCorneal", "fechaFin"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "fechaFin" } );
        if (!this.avisible("datoProcuracionCorneal", "horaInicio"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "horaInicio" } );
        if (!this.avisible("datoProcuracionCorneal", "horaFin"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "horaFin" } );
        if (!this.avisible("datoProcuracionCorneal", "fechaRegistro"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaRegistro" } );
        if (!this.avisible("datoProcuracionCorneal", "fechaActualizacion"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaActualizacion" } );
        if (!this.avisible("datoProcuracionCorneal", "fechaBaja"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "fechaBaja" } );
        if (!this.avisible("datoProcuracionCorneal", "usuarioUltMov"))
            columnasNoVisibles.push(11);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.usuarioUltMov)
                    	return "<span style=\"cursor: pointer\">"+ oObj.usuarioUltMov.username +"</span>";
		     return "";
                }
        });
        if (!this.avisible("datoProcuracionCorneal", "status"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "status" } );

        if (self.pacutalizar("datoProcuracionCorneal"))
            columnas.push({
                "data": function(oObj) {
                    return "<span style=\"cursor: pointer\">Editar</span>";
                }
            });*/
        var novisibles: any;
        novisibles = [
            {
                "targets": columnasNoVisibles,
                "visible": false,
                "searchable": false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_datoProcuracionCorneal').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function(settings, json) {
                var xs = $("#tabla_datoProcuracionCorneal_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function() {
                        self.datoProcuracionCornealSeleccionado = new DatoProcuracionCorneal();
                        self.primero = false;
                    });
            },
            /*"ajax": {
                "url": self.urlProvider.serverURL+"datoProcuracionCorneal/getDatoProcuracionCorneales",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },*/
            "columns": columnas,

        });
        this.llenadoInicial();
        $('#tabla_datoProcuracionCorneal tbody').on('click', 'td', function() {
            if (this.cellIndex == $(this).parent().find("td").length-1) {
                var data = $('#tabla_datoProcuracionCorneal').DataTable().row(this).data();
                self.datoProcuracionCornealSeleccionado = new DatoProcuracionCorneal();
                self.datoProcuracionCornealSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_datoProcuracionCorneal').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });

    }
    ngOnInit() {
    }
    cambio_datoProcuracionCorneal(datoProcuracionCorneal) {
        $('#tabla_datoProcuracionCorneal').DataTable().ajax.reload(null, false);
           this.primero =true;
    }
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S
    // **********************************************************************************
    // **********************************************************************************
    paux(tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    }
    preporteWord(tabla) { return this.paux(tabla, 64); }
    preporteExcel(tabla) { return this.paux(tabla, 32); }
    preportePdf(tabla) { return this.paux(tabla, 16); }
    pbuscar(tabla) { return this.paux(tabla, 8); }
    pacutalizar(tabla) { return this.paux(tabla, 4); }
    peliminar(tabla) { return this.paux(tabla, 2); }
    pagregar(tabla) { return this.paux(tabla, 1); }
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    aetiqueta(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    }
    avalidacion(tabla, atributo) {
        var salida = ".*";
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                if (elemento.validacion)
                    return elemento.validacion;
                else return salida;
            }
        }
        return salida;
    }
    amensaje(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    }
    aeditable(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    }
    arequerido(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    }
    avisible(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    }
    aenable(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    }
    // **********************************************************************************
    // **********************************************************************************

    llenadoInicial(){
        let dato = {};
       //this.tabla
        //.clear()
        //.draw();
        let tabla = $('#tabla_datoProcuracionCorneal').DataTable();
        tabla
        .clear()
        .draw();
        $.ajax({
            "url": this.url.serverURL+"datoProcuracionCorneal/getDatoProcuracionCornealesByFiltro",
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {

                //let tabla = $('#tabla_solicitudEvaluCornealProcurador').DataTable();
                data.forEach(function(enty) {
                       var obj:any = {};
                        obj.folioSolicitud = enty.idsolicitudEvaluacionCorneal.folioSolicitud;
                        obj.idcenatra = enty.idcenatra;
                        obj.nombre = enty.idsolicitudEvaluacionCorneal.nombre;
                        obj.primerApellido = enty.idsolicitudEvaluacionCorneal.primerApellido;
                        obj.segundoApellido = enty.idsolicitudEvaluacionCorneal.segundoApellido;
                        /*obj.status = enty.status;
                        obj.hospitalSolicitanteCaja = enty.hospitalSolicitanteCaja;
                        obj.usuarioUltMov = enty.usuarioUltMov;
                        obj.datoReceptorSolicitante = enty.datoReceptorSolicitante;
                        obj.catalogoEstadoSolicitante = enty.catalogoEstadoSolicitante;*/
                      tabla.row.add(obj).draw(false);
                    //this.tabla.row.add(entry).draw();
                    //.rows.add( entry ).draw(false);
                });
                //this.tabla.rows.add( [data] ).draw();
                //$('#target').html(data.msg);
            },

            data: JSON.stringify(dato)
        });
    }

    buscarByfiltere(){
        let dato = { "fechaInicio":this.fechaSeleccionInicio, "fechaFin":this.fechaSeleccionFin,"folio":this.folioDato,"idCenatra":this.idcenatra };
       //this.tabla
        //.clear()
        //.draw();
        let tabla = $('#tabla_datoProcuracionCorneal').DataTable();
        tabla
        .clear()
        .draw();
        $.ajax({
            "url": this.url.serverURL+"datoProcuracionCorneal/getDatoProcuracionCornealesByFiltro",
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {

                //let tabla = $('#tabla_solicitudEvaluCornealProcurador').DataTable();
                data.forEach(function(enty) {
                       var obj:any = {};
                        obj.folioSolicitud = enty.idsolicitudEvaluacionCorneal.folioSolicitud;
                        obj.idcenatra = enty.idcenatra;
                        obj.nombre = enty.idsolicitudEvaluacionCorneal.nombre;
                        obj.primerApellido = enty.idsolicitudEvaluacionCorneal.primerApellido;
                        obj.segundoApellido = enty.idsolicitudEvaluacionCorneal.segundoApellido;
                        /*obj.status = enty.status;
                        obj.hospitalSolicitanteCaja = enty.hospitalSolicitanteCaja;
                        obj.usuarioUltMov = enty.usuarioUltMov;
                        obj.datoReceptorSolicitante = enty.datoReceptorSolicitante;
                        obj.catalogoEstadoSolicitante = enty.catalogoEstadoSolicitante;*/
                      tabla.row.add(obj).draw(false);
                    //this.tabla.row.add(entry).draw();
                    //.rows.add( entry ).draw(false);
                });
                //this.tabla.rows.add( [data] ).draw();
                //$('#target').html(data.msg);
            },

            data: JSON.stringify(dato)
        });
    }


}
