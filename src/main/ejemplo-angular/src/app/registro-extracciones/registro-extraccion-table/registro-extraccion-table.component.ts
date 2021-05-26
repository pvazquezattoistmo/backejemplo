import { Component, OnInit } from '@angular/core';
import { RegistroExtraccion } from '../shared/registro-extraccion';
import { GlobalesService } from '../../shared/globales.service';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';

declare var $: any;
declare var DataTable: any;

@Component({
    selector: 'app-registro-extraccion-table',
    templateUrl: './registro-extraccion-table.component.html',
    styleUrls: ['./registro-extraccion-table.component.css'],
    providers:[GlobalesService, 
               PermisoAtributoService,
               PermisoTablaService,
               ] 
})
export class RegistroExtraccionTableComponent implements OnInit {
    public primero: boolean = true;
    public registroExtraccionSeleccionado: RegistroExtraccion;
    public usuariologueado;
    public permisosAtributos = [];
    public permisosTabla = { "tabla": "registroExtraccion", "permiso": 0, "etiqueta": "" };
    public ptabla: boolean = false;
    public pattr: boolean = false;
    constructor(public globalesService: GlobalesService,
        public permisoAtributoService: PermisoAtributoService,
        public permisoTablaService: PermisoTablaService,
        public urlProvider: URLProvider
    ) {
        this.registroExtraccionSeleccionado = new RegistroExtraccion();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'registroExtraccion'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    evtTablas(lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'registroExtraccion'";
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
        if (!this.avisible("registroExtraccion", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" } );
        if (!this.avisible("registroExtraccion", "idsolicitudEvaluacionCorneal"))
            columnasNoVisibles.push(1);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.idsolicitudEvaluacionCorneal)
                    	return "<span style=\"cursor: pointer\">"+ oObj.idsolicitudEvaluacionCorneal.folioSolicitud +"</span>";
		     return "";	
                }
        });
        if (!this.avisible("registroExtraccion", "tipoDonanteMultiorganico"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "tipoDonanteMultiorganico" } );
        if (!this.avisible("registroExtraccion", "telefonoContacto"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "telefonoContacto" } );
        if (!this.avisible("registroExtraccion", "panelViral"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "panelViral" } );
        if (!this.avisible("registroExtraccion", "observacion"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "observacion" } );
        if (!this.avisible("registroExtraccion", "fechaRegistro"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaRegistro" } );
        if (!this.avisible("registroExtraccion", "fechaActualizacion"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaActualizacion" } );
        if (!this.avisible("registroExtraccion", "fechaBaja"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaBaja" } );
        if (!this.avisible("registroExtraccion", "usuarioUltMov"))
            columnasNoVisibles.push(9);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.usuarioUltMov)
                    	return "<span style=\"cursor: pointer\">"+ oObj.usuarioUltMov.username +"</span>";
		     return "";	
                }
        });
        if (!this.avisible("registroExtraccion", "status"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "status" } );

        if (self.pacutalizar("registroExtraccion"))
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
        var tabla = $('#tabla_registroExtraccion').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function(settings, json) {
                var xs = $("#tabla_registroExtraccion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function() {
                        self.registroExtraccionSeleccionado = new RegistroExtraccion();
                        self.primero = false;
                    });
            },
            "ajax": {
                "url": self.urlProvider.serverURL+"registroExtraccion/getRegistroExtracciones",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,

        });
        $('#tabla_registroExtraccion tbody').on('click', 'td', function() {
            if (this.cellIndex == $(this).parent().find("td").length-1) {
                var data = $('#tabla_registroExtraccion').DataTable().row(this).data();
                self.registroExtraccionSeleccionado = new RegistroExtraccion();
                self.registroExtraccionSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_registroExtraccion').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    
    }
    ngOnInit() {
    }
    cambio_registroExtraccion(registroExtraccion) {
        $('#tabla_registroExtraccion').DataTable().ajax.reload(null, false);
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
