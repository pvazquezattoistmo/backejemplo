import { Component, OnInit } from '@angular/core';
import { SolicitudTejidoCorneal } from '../shared/solicitud-tejido-corneal';
import { GlobalesService } from '../../shared/globales.service';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';

declare var $: any;
declare var DataTable: any;

@Component({
    selector: 'app-solicitud-tejido-corneal-table-bandeja',
    templateUrl: './solicitud-tejido-corneal-table-bandeja.component.html',
    styleUrls: ['./solicitud-tejido-corneal-table-bandeja.component.css'],
    providers:[GlobalesService,
               PermisoAtributoService,
               PermisoTablaService,
               ]
})
export class SolicitudTejidoCornealTableBandejaComponent implements OnInit {
    public primero: boolean = true;
    public solicitudTejidoCornealSeleccionado: SolicitudTejidoCorneal;
    public usuariologueado;
    public permisosAtributos = [];
    public permisosTabla = { "tabla": "solicitudTejidoCorneal", "permiso": 0, "etiqueta": "" };
    public ptabla: boolean = false;
    public pattr: boolean = false;
    constructor(public globalesService: GlobalesService,
        public permisoAtributoService: PermisoAtributoService,
        public permisoTablaService: PermisoTablaService,
        public urlProvider: URLProvider
    ) {
        this.solicitudTejidoCornealSeleccionado = new SolicitudTejidoCorneal();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'solicitudTejidoCorneal'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    evtTablas(lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'solicitudTejidoCorneal'";
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
        if (!this.avisible("solicitudTejidoCorneal", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" } );
        if (!this.avisible("solicitudTejidoCorneal", "folioSolicitudTejidoCorneal"))
            columnasNoVisibles.push(1);
        columnas.push({ "data": "folioSolicitudTejidoCorneal" } );
        if (!this.avisible("solicitudTejidoCorneal", "nombreReceptor"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "nombreReceptor" } );
        if (!this.avisible("solicitudTejidoCorneal", "primerApellidoReceptor"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "primerApellidoReceptor" } );
        if (!this.avisible("solicitudTejidoCorneal", "segundoApellidoReceptor"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "segundoApellidoReceptor" } );
        if (!this.avisible("solicitudTejidoCorneal", "edadReceptor"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "edadReceptor" } );
        if (!this.avisible("solicitudTejidoCorneal", "numeroExpedienteReceptor"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "numeroExpedienteReceptor" } );
        if (!this.avisible("solicitudTejidoCorneal", "sexoReceptor"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "sexoReceptor" } );
        if (!this.avisible("solicitudTejidoCorneal", "diagnostico"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "diagnostico" } );
        if (!this.avisible("solicitudTejidoCorneal", "fechaTentativaCirugia"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaTentativaCirugia" } );
        if (!this.avisible("solicitudTejidoCorneal", "corneaSolicitada"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "corneaSolicitada" } );
        if (!this.avisible("solicitudTejidoCorneal", "caracteristicaCornea"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "caracteristicaCornea" } );
        if (!this.avisible("solicitudTejidoCorneal", "fechaRegistro"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "fechaRegistro" } );
        if (!this.avisible("solicitudTejidoCorneal", "fechaActualizacion"))
            columnasNoVisibles.push(13);
        columnas.push({ "data": "fechaActualizacion" } );
        if (!this.avisible("solicitudTejidoCorneal", "fechaBaja"))
            columnasNoVisibles.push(14);
        columnas.push({ "data": "fechaBaja" } );
        if (!this.avisible("solicitudTejidoCorneal", "idhospital"))
            columnasNoVisibles.push(15);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.idhospital)
                    	return "<span style=\"cursor: pointer\">"+ oObj.idhospital.redIssste +"</span>";
		     return "";
                }
        });
        if (!this.avisible("solicitudTejidoCorneal", "iddoctorResponsableSolicitud"))
            columnasNoVisibles.push(16);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.iddoctorResponsableSolicitud)
                    	return "<span style=\"cursor: pointer\">"+ oObj.iddoctorResponsableSolicitud.nombre +"</span>";
		     return "";
                }
        });
        if (!this.avisible("solicitudTejidoCorneal", "estatusProceso"))
            columnasNoVisibles.push(17);
        columnas.push({ "data": "estatusProceso" } );
        if (!this.avisible("solicitudTejidoCorneal", "usuarioUltMov"))
            columnasNoVisibles.push(18);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.usuarioUltMov)
                    	return "<span style=\"cursor: pointer\">"+ oObj.usuarioUltMov.username +"</span>";
		     return "";
                }
        });
        if (!this.avisible("solicitudTejidoCorneal", "status"))
            columnasNoVisibles.push(19);
        columnas.push({ "data": "status" } );

        if (self.pacutalizar("solicitudTejidoCorneal"))
            columnas.push({
                "data": function(oObj) {
                    return "<span style=\"cursor: pointer\">Editar</span>";
                }
            });
        var novisibles: any;
        novisibles = [
            {
                "targets": columnasNoVisibles,
                "visible": false,
                "searchable": false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_solicitudTejidoCorneal').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function(settings, json) {
                var xs = $("#tabla_solicitudTejidoCorneal_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function() {
                        self.solicitudTejidoCornealSeleccionado = new SolicitudTejidoCorneal();
                        self.primero = false;
                    });
            },
            "ajax": {
                "url": self.urlProvider.serverURL+"solicitudTejidoCorneal/getSolicitudTejidoCorneales",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,

        });
        $('#tabla_solicitudTejidoCorneal tbody').on('click', 'td', function() {
            if (this.cellIndex == $(this).parent().find("td").length-1) {
                var data = $('#tabla_solicitudTejidoCorneal').DataTable().row(this).data();
                self.solicitudTejidoCornealSeleccionado = new SolicitudTejidoCorneal();
                self.solicitudTejidoCornealSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_solicitudTejidoCorneal').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });

    }
    ngOnInit() {
    }
    cambio_solicitudTejidoCorneal(solicitudTejidoCorneal) {
        $('#tabla_solicitudTejidoCorneal').DataTable().ajax.reload(null, false);
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

}
