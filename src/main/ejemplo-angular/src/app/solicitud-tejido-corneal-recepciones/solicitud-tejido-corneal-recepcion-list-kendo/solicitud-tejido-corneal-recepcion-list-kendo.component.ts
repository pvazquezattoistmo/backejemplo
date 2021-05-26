import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { SolicitudTejidoCornealRecepcion } from '../shared/solicitud-tejido-corneal-recepcion'
import { ConfigurarSolicitudTejidoCornealRecepcion } from '../shared/configurar-solicitud-tejido-corneal-recepcion'
/* import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service'; */
/* import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service'; */
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
declare var $: any;
declare var kendo: any;
declare var bootbox: any;

var self = {};
var usuariologueado;

@Component({
    selector: 'app-solicitud-tejido-corneal-recepcion-list-kendo',
    templateUrl: './solicitud-tejido-corneal-recepcion-list-kendo.component.html',
    styleUrls: ['./solicitud-tejido-corneal-recepcion-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class SolicitudTejidoCornealRecepcionListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public solicitudTejidoCornealRecepcionSeleccionado: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
    public dataSource: any;
    public grid: any;
    @Input() configuracionSolicitudTejidoCornealRecepcion: ConfigurarSolicitudTejidoCornealRecepcion = new ConfigurarSolicitudTejidoCornealRecepcion();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("solicitudTejidoCornealRecepcionSeleccionado") evtSolicitudTejidoCornealRecepcionSeleccionado: EventEmitter<SolicitudTejidoCornealRecepcion> = new EventEmitter<SolicitudTejidoCornealRecepcion>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudTejidoCornealRecepcion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCornealRecepcion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCornealRecepcion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionSolicitudTejidoCornealRecepcion.titulo.indexOf("Catálogo")!= -1){
            this.configuracionSolicitudTejidoCornealRecepcion.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionSolicitudTejidoCornealRecepcion && changes.configuracionSolicitudTejidoCornealRecepcion.currentValue &&
            (changes.configuracionSolicitudTejidoCornealRecepcion.previousValue instanceof ConfigurarSolicitudTejidoCornealRecepcion)) {
            if (changes.configuracionSolicitudTejidoCornealRecepcion.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionSolicitudTejidoCornealRecepcion.currentValue.permisosAtributos;
            if (changes.configuracionSolicitudTejidoCornealRecepcion.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionSolicitudTejidoCornealRecepcion.currentValue.permisosTabla;
            if ($("#grid_solicitudTejidoCornealRecepcion_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_solicitudTejidoCornealRecepcion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionSolicitudTejidoCornealRecepcion.permisosAtributos &&
            this.configuracionSolicitudTejidoCornealRecepcion.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "solicitudTejidoCornealRecepcion",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealRecepcion'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealRecepcion'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealRecepcion'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionSolicitudTejidoCornealRecepcion.permisosAtributos)
            this.permisosAtributos=this.configuracionSolicitudTejidoCornealRecepcion.permisosAtributos;
        if (this.configuracionSolicitudTejidoCornealRecepcion.permisosTabla)
            this.permisosTabla=this.configuracionSolicitudTejidoCornealRecepcion.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo&& permisos.solicitudTejidoCornealRecepcion.PermisoAtributo.length>0
            && !obj.configuracionSolicitudTejidoCornealRecepcion.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.solicitudTejidoCornealRecepcion.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.SolicitudTejidoCornealRecepcion.PermisoAtributo ;
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoTabla && permisos.solicitudTejidoCornealRecepcion.PermisoTabla.length>0
            && !obj.configuracionSolicitudTejidoCornealRecepcion.permisosTabla){
            obj.globalesService.evtTablas (permisos.solicitudTejidoCornealRecepcion.PermisoTabla,obj);

//            obj.permisosTabla = permisos.SolicitudTejidoCornealRecepcion.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_solicitudTejidoCornealRecepcion_"+this.nombregrid).data("kendoGrid")) {
        }else{
           setTimeout(() => {
              this.inicializaGrid();
              this.configuraGrid(); }, 300);
        }
    }
    sourcegrid() {
        function completar(e) {
            (e);
        };
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl != null
            && this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta
            && this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta.isOk
            && !this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta.isOk())
            return;
        if (this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta) {
            if (!this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl && this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta instanceof SolicitudTejidoCornealRecepcion)
                this.configuracionSolicitudTejidoCornealRecepcion.rutaLista = this.crudServiceBaseUrl + "/getSolicitudTejidoCornealRecepcionesByDto";
            this.lista = this.configuracionSolicitudTejidoCornealRecepcion.lecturaP(completar,this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta);
            if (this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl) {
                this.rutaAgregar = this.configuracionSolicitudTejidoCornealRecepcion.agregarP(function(){}, this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl);
                this.rutaEliminar = this.configuracionSolicitudTejidoCornealRecepcion.eliminarP(function(){}, this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionSolicitudTejidoCornealRecepcion.agregarP(completar, this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta);
                this.rutaEliminar = this.configuracionSolicitudTejidoCornealRecepcion.eliminarP(completar, this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta);
            }
        } else {
            this.lista = this.configuracionSolicitudTejidoCornealRecepcion.lectura();
            this.rutaAgregar = this.configuracionSolicitudTejidoCornealRecepcion.agregar();
            this.rutaEliminar = this.configuracionSolicitudTejidoCornealRecepcion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "idsolicitudTejidoCorneal")) {
            campos["idsolicitudTejidoCorneal"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealRecepcion", "idsolicitudTejidoCorneal"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealRecepcion", "estatusProceso"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealRecepcion", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealRecepcion", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionSolicitudTejidoCornealRecepcion.rutaActualizar,
                    contentType: "application/json",
                    type: "POST"
                },
                destroy: this.rutaEliminar,
                create: this.rutaAgregar,
                parameterMap: function(options, operation) {
                    if (options.models && operation === "read") {
                        if (typeof options.models === 'string')
                           return options.models;
                        return JSON.stringify(options.models);
                    } else
                        if (operation === "create" && options.models) {
                            if (options.models[0].status)
                                options.models[0].status = options.models[0].status.value;
                            return operacionesCompletas(options, operation, this,slf);
                        } else
                            if (operation === "update" && options.models) {
                                if (options.models[0].status)
                                    options.models[0].status = options.models[0].status.value;
                                options.models[0].usuarioUltMov = usuariologueado;
                                return JSON.stringify(options.models[0]);
                            } else
                                if (operation === "destroy" && options.models) {
                                    return operacionesCompletas(options, operation, this,slf);
                                }
                }
            },
            batch: true,
            pageSize: 10,
            schema: {
                parse: function(response) {
                    if (Object.prototype.toString.call(response) !== '[object Array]')
                        response = [response];
                    $.each(response, function(idx, elem) {

                    });
                   // self.grid.refresh();
                    return response;
                    },
                model: modelo ,
            },
            requestStart: function(e) {
                        ("request started");
                        },
            requestEnd: function(e) {
                        ("request started");
                        if (e.response){
                                if (e.type==='update'){
                                    bootbox.alert('El registro se ha actualizado con exito');
                                    }
                                 if (e.type==='create'){
                                    bootbox.alert('El registro se ha creado con exito');
                                    }
                                if (e.type==='destroy'){
                                    bootbox.alert('El registro se ha eliminado con exito');
                                    }
                            }
                       },
            error: function (e) {
                    bootbox.alert('Ha ocurrido una excepción en el sistema');
            }
        });
        function operacionesCompletas(options, operation, est,self) {
            options.models[0].usuarioUltMov = usuariologueado;
            if (self.configuracionSolicitudTejidoCornealRecepcion.campoAgEl) {
                if (self.configuracionSolicitudTejidoCornealRecepcion.tipocampoAgEl == "SolicitudTejidoCornealRecepcionSolicitudTejidoCornealRecepcion")
                    self.configuracionSolicitudTejidoCornealRecepcion.campoAgEl.solicitudTejidoCornealRecepcion2 = options.models[0];
                else
                    self.configuracionSolicitudTejidoCornealRecepcion.campoAgEl.solicitudTejidoCornealRecepcion = options.models[0];
                return JSON.stringify(self.configuracionSolicitudTejidoCornealRecepcion.campoAgEl);
            }else
            if (est.options[operation].data.models.solicitudTejidoCornealRecepcion) {
                est.options[operation].data.models.solicitudTejidoCornealRecepcion2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
     }
    inicializaGrid() {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealRecepcion", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "idsolicitudTejidoCorneal")) {
            columnas.push({ field: "idsolicitudTejidoCorneal", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealRecepcion", "idsolicitudTejidoCorneal") , editor: idsolicitudTejidoCornealDropDownEditor , template: " #if (idsolicitudTejidoCorneal){#   #=idsolicitudTejidoCorneal.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealRecepcion", "estatusProceso")  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealRecepcion", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealRecepcion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealRecepcion", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"solicitudTejidoCornealRecepcion")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"solicitudTejidoCornealRecepcion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"solicitudTejidoCornealRecepcion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"solicitudTejidoCornealRecepcion")  && this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_solicitudTejidoCornealRecepcion_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_solicitudTejidoCornealRecepcion_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionSolicitudTejidoCornealRecepcion.altoComponente,
            toolbar: op_agregar,
            columns: columnas,
            resizable: true,
            editable: {
                mode: "popup",
                window: {
                    resizable: true
                }
            }
        });
        this.grid = $("#grid_solicitudTejidoCornealRecepcion_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudTejidoCorneal = this.urlprovider.serverURL + "solicitudTejidoCorneal/getSolicitudTejidoCornealesActivos";

        function usuarioUltMovDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "username",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutausuarioUltMov,
                                contentType: "application/json",
                                type: "POST",
                            }
                        }
                    }
                });
        }
        function idsolicitudTejidoCornealDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "folioSolicitudTejidoCorneal",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidsolicitudTejidoCorneal,
                                contentType: "application/json",
                                type: "POST",
                            }
                        }
                    }
                });
        }

    }

    showDetails(e) {
        e.preventDefault();
        //        this.grid = $("#grid_solicitudTejidoCornealRecepcion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.solicitudTejidoCornealRecepcionSeleccionado = new SolicitudTejidoCornealRecepcion();
        gridac.solicitudTejidoCornealRecepcionSeleccionado.from(dataItem);
        gridac.evtSolicitudTejidoCornealRecepcionSeleccionado.emit(gridac.solicitudTejidoCornealRecepcionSeleccionado);
        (gridac.solicitudTejidoCornealRecepcionSeleccionado);
    }


}
