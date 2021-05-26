import { Component, OnInit } from '@angular/core';
import { GestionMuestraMicrobiologia } from '../shared/gestion-muestra-microbiologia';
import { GlobalesService } from '../../shared/globales.service';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';

declare var $: any;
declare var DataTable: any;

@Component({
    selector: 'app-gestion-muestra-microbiologia-table',
    templateUrl: './gestion-muestra-microbiologia-table.component.html',
    styleUrls: ['./gestion-muestra-microbiologia-table.component.css'],
    providers:[GlobalesService, 
               PermisoAtributoService,
               PermisoTablaService,
               ] 
})
export class GestionMuestraMicrobiologiaTableComponent implements OnInit {
    public primero: boolean = true;
    public gestionMuestraMicrobiologiaSeleccionado: GestionMuestraMicrobiologia;
    public usuariologueado;
    public permisosAtributos = [];
    public permisosTabla = { "tabla": "gestionMuestraMicrobiologia", "permiso": 0, "etiqueta": "" };
    public ptabla: boolean = false;
    public pattr: boolean = false;
    constructor(public globalesService: GlobalesService,
        public permisoAtributoService: PermisoAtributoService,
        public permisoTablaService: PermisoTablaService,
        public urlProvider: URLProvider
    ) {
        this.gestionMuestraMicrobiologiaSeleccionado = new GestionMuestraMicrobiologia();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'gestionMuestraMicrobiologia'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    evtTablas(lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'gestionMuestraMicrobiologia'";
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
        if (!this.avisible("gestionMuestraMicrobiologia", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "idoficioDonacion"))
            columnasNoVisibles.push(1);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.idoficioDonacion)
                    	return "<span style=\"cursor: pointer\">"+ oObj.idoficioDonacion.botonCorneal +"</span>";
		     return "";	
                }
        });
        if (!this.avisible("gestionMuestraMicrobiologia", "revision"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "revision" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "almacenMuestra"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "almacenMuestra" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "almacenHora"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "almacenHora" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "envio"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "envio" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "fechaInicioRevision"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaInicioRevision" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "horaInicioRevision"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "horaInicioRevision" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "comentario"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "comentario" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "fechaRegistro"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaRegistro" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "fechaActualizacion"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "fechaActualizacion" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "fechaBaja"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "fechaBaja" } );
        if (!this.avisible("gestionMuestraMicrobiologia", "usuarioUltMov"))
            columnasNoVisibles.push(12);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.usuarioUltMov)
                    	return "<span style=\"cursor: pointer\">"+ oObj.usuarioUltMov.username +"</span>";
		     return "";	
                }
        });
        if (!this.avisible("gestionMuestraMicrobiologia", "status"))
            columnasNoVisibles.push(13);
        columnas.push({ "data": "status" } );

        if (self.pacutalizar("gestionMuestraMicrobiologia"))
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
        var tabla = $('#tabla_gestionMuestraMicrobiologia').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function(settings, json) {
                var xs = $("#tabla_gestionMuestraMicrobiologia_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function() {
                        self.gestionMuestraMicrobiologiaSeleccionado = new GestionMuestraMicrobiologia();
                        self.primero = false;
                    });
            },
            "ajax": {
                "url": self.urlProvider.serverURL+"gestionMuestraMicrobiologia/getGestionMuestraMicrobiologias",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,

        });
        $('#tabla_gestionMuestraMicrobiologia tbody').on('click', 'td', function() {
            if (this.cellIndex == $(this).parent().find("td").length-1) {
                var data = $('#tabla_gestionMuestraMicrobiologia').DataTable().row(this).data();
                self.gestionMuestraMicrobiologiaSeleccionado = new GestionMuestraMicrobiologia();
                self.gestionMuestraMicrobiologiaSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_gestionMuestraMicrobiologia').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    
    }
    ngOnInit() {
    }
    cambio_gestionMuestraMicrobiologia(gestionMuestraMicrobiologia) {
        $('#tabla_gestionMuestraMicrobiologia').DataTable().ajax.reload(null, false);
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
