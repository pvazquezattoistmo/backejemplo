import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { SolicitudTejidoCornealAlmacen } from '../shared/solicitud-tejido-corneal-almacen'
import { ConfigurarSolicitudTejidoCornealAlmacen } from '../shared/configurar-solicitud-tejido-corneal-almacen'
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
    selector: 'app-solicitud-tejido-corneal-almacen-list-kendo',
    templateUrl: './solicitud-tejido-corneal-almacen-list-kendo.component.html',
    styleUrls: ['./solicitud-tejido-corneal-almacen-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class SolicitudTejidoCornealAlmacenListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public solicitudTejidoCornealAlmacenSeleccionado: SolicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
    public dataSource: any;
    public grid: any;
    @Input() configuracionSolicitudTejidoCornealAlmacen: ConfigurarSolicitudTejidoCornealAlmacen = new ConfigurarSolicitudTejidoCornealAlmacen();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("solicitudTejidoCornealAlmacenSeleccionado") evtSolicitudTejidoCornealAlmacenSeleccionado: EventEmitter<SolicitudTejidoCornealAlmacen> = new EventEmitter<SolicitudTejidoCornealAlmacen>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudTejidoCornealAlmacen";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCornealAlmacen'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCornealAlmacen'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionSolicitudTejidoCornealAlmacen.titulo.indexOf("Catálogo")!= -1){
            this.configuracionSolicitudTejidoCornealAlmacen.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionSolicitudTejidoCornealAlmacen && changes.configuracionSolicitudTejidoCornealAlmacen.currentValue &&
            (changes.configuracionSolicitudTejidoCornealAlmacen.previousValue instanceof ConfigurarSolicitudTejidoCornealAlmacen)) {
            if (changes.configuracionSolicitudTejidoCornealAlmacen.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionSolicitudTejidoCornealAlmacen.currentValue.permisosAtributos;
            if (changes.configuracionSolicitudTejidoCornealAlmacen.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionSolicitudTejidoCornealAlmacen.currentValue.permisosTabla;
            if ($("#grid_solicitudTejidoCornealAlmacen_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_solicitudTejidoCornealAlmacen_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionSolicitudTejidoCornealAlmacen.permisosAtributos &&
            this.configuracionSolicitudTejidoCornealAlmacen.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "solicitudTejidoCornealAlmacen",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealAlmacen'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealAlmacen'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealAlmacen'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionSolicitudTejidoCornealAlmacen.permisosAtributos)
            this.permisosAtributos=this.configuracionSolicitudTejidoCornealAlmacen.permisosAtributos;
        if (this.configuracionSolicitudTejidoCornealAlmacen.permisosTabla)
            this.permisosTabla=this.configuracionSolicitudTejidoCornealAlmacen.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoAtributo&& permisos.solicitudTejidoCornealAlmacen.PermisoAtributo.length>0
            && !obj.configuracionSolicitudTejidoCornealAlmacen.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.solicitudTejidoCornealAlmacen.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.SolicitudTejidoCornealAlmacen.PermisoAtributo ;
        }
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoTabla && permisos.solicitudTejidoCornealAlmacen.PermisoTabla.length>0
            && !obj.configuracionSolicitudTejidoCornealAlmacen.permisosTabla){
            obj.globalesService.evtTablas (permisos.solicitudTejidoCornealAlmacen.PermisoTabla,obj);

//            obj.permisosTabla = permisos.SolicitudTejidoCornealAlmacen.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_solicitudTejidoCornealAlmacen_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl != null
            && this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta
            && this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta.isOk
            && !this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta.isOk())
            return;
        if (this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta) {
            if (!this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl && this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta instanceof SolicitudTejidoCornealAlmacen)
                this.configuracionSolicitudTejidoCornealAlmacen.rutaLista = this.crudServiceBaseUrl + "/getSolicitudTejidoCornealAlmacenesByDto";
            this.lista = this.configuracionSolicitudTejidoCornealAlmacen.lecturaP(completar,this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta);
            if (this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl) {
                this.rutaAgregar = this.configuracionSolicitudTejidoCornealAlmacen.agregarP(function(){}, this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl);
                this.rutaEliminar = this.configuracionSolicitudTejidoCornealAlmacen.eliminarP(function(){}, this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionSolicitudTejidoCornealAlmacen.agregarP(completar, this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta);
                this.rutaEliminar = this.configuracionSolicitudTejidoCornealAlmacen.eliminarP(completar, this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta);
            }
        } else {
            this.lista = this.configuracionSolicitudTejidoCornealAlmacen.lectura();
            this.rutaAgregar = this.configuracionSolicitudTejidoCornealAlmacen.agregar();
            this.rutaEliminar = this.configuracionSolicitudTejidoCornealAlmacen.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "idsolicitudTejidoCornealRecepcion")) {
            campos["idsolicitudTejidoCornealRecepcion"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealAlmacen", "idsolicitudTejidoCornealRecepcion"), nullable: true , type: "object" , defaultValue: { "id": "" , "estatusProceso": "" }  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "tejidoExistente")) {
            campos["tejidoExistente"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealAlmacen", "tejidoExistente"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealAlmacen", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealAlmacen", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealAlmacen", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealAlmacen", "estatusProceso"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealAlmacen", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCornealAlmacen", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionSolicitudTejidoCornealAlmacen.rutaActualizar,
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
                        if (elem.fechaBaja && typeof elem.fechaBaja === "number") {
                            elem.fechaBaja = kendo.parseDate(new Date(elem.fechaBaja), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRegistro && typeof elem.fechaRegistro === "number") {
                            elem.fechaRegistro = kendo.parseDate(new Date(elem.fechaRegistro), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaActualizacion && typeof elem.fechaActualizacion === "number") {
                            elem.fechaActualizacion = kendo.parseDate(new Date(elem.fechaActualizacion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }

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
            if (self.configuracionSolicitudTejidoCornealAlmacen.campoAgEl) {
                if (self.configuracionSolicitudTejidoCornealAlmacen.tipocampoAgEl == "SolicitudTejidoCornealAlmacenSolicitudTejidoCornealAlmacen")
                    self.configuracionSolicitudTejidoCornealAlmacen.campoAgEl.solicitudTejidoCornealAlmacen2 = options.models[0];
                else
                    self.configuracionSolicitudTejidoCornealAlmacen.campoAgEl.solicitudTejidoCornealAlmacen = options.models[0];
                return JSON.stringify(self.configuracionSolicitudTejidoCornealAlmacen.campoAgEl);
            }else
            if (est.options[operation].data.models.solicitudTejidoCornealAlmacen) {
                est.options[operation].data.models.solicitudTejidoCornealAlmacen2 = options.models[0];
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
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealAlmacen", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "idsolicitudTejidoCornealRecepcion")) {
            columnas.push({ field: "idsolicitudTejidoCornealRecepcion", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealAlmacen", "idsolicitudTejidoCornealRecepcion") , editor: idsolicitudTejidoCornealRecepcionDropDownEditor , template: " #if (idsolicitudTejidoCornealRecepcion){#   #=idsolicitudTejidoCornealRecepcion.estatusProceso# # } # "  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "tejidoExistente")) {
            columnas.push({ field: "tejidoExistente", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealAlmacen", "tejidoExistente")  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealAlmacen", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealAlmacen", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealAlmacen", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealAlmacen", "estatusProceso")  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealAlmacen", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCornealAlmacen", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"solicitudTejidoCornealAlmacen", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"solicitudTejidoCornealAlmacen")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"solicitudTejidoCornealAlmacen")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"solicitudTejidoCornealAlmacen")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"solicitudTejidoCornealAlmacen")  && this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_solicitudTejidoCornealAlmacen_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_solicitudTejidoCornealAlmacen_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionSolicitudTejidoCornealAlmacen.altoComponente,
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
        this.grid = $("#grid_solicitudTejidoCornealAlmacen_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudTejidoCornealRecepcion = this.urlprovider.serverURL + "solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesActivos";

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
        function idsolicitudTejidoCornealRecepcionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "estatusProceso",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidsolicitudTejidoCornealRecepcion,
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
        //        this.grid = $("#grid_solicitudTejidoCornealAlmacen_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.solicitudTejidoCornealAlmacenSeleccionado = new SolicitudTejidoCornealAlmacen();
        gridac.solicitudTejidoCornealAlmacenSeleccionado.from(dataItem);
        gridac.evtSolicitudTejidoCornealAlmacenSeleccionado.emit(gridac.solicitudTejidoCornealAlmacenSeleccionado);
        (gridac.solicitudTejidoCornealAlmacenSeleccionado);
    }


}
