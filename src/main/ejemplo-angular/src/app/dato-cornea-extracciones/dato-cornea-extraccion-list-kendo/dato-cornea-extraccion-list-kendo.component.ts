import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { DatoCorneaExtraccion } from '../shared/dato-cornea-extraccion'
import { ConfigurarDatoCorneaExtraccion } from '../shared/configurar-dato-cornea-extraccion'
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
    selector: 'app-dato-cornea-extraccion-list-kendo',
    templateUrl: './dato-cornea-extraccion-list-kendo.component.html',
    styleUrls: ['./dato-cornea-extraccion-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class DatoCorneaExtraccionListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public datoCorneaExtraccionSeleccionado: DatoCorneaExtraccion = new DatoCorneaExtraccion();
    public dataSource: any;
    public grid: any;
    @Input() configuracionDatoCorneaExtraccion: ConfigurarDatoCorneaExtraccion = new ConfigurarDatoCorneaExtraccion();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("datoCorneaExtraccionSeleccionado") evtDatoCorneaExtraccionSeleccionado: EventEmitter<DatoCorneaExtraccion> = new EventEmitter<DatoCorneaExtraccion>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "datoCorneaExtraccion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'datoCorneaExtraccion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'datoCorneaExtraccion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionDatoCorneaExtraccion.titulo.indexOf("Catálogo")!= -1){
            this.configuracionDatoCorneaExtraccion.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDatoCorneaExtraccion && changes.configuracionDatoCorneaExtraccion.currentValue &&
            (changes.configuracionDatoCorneaExtraccion.previousValue instanceof ConfigurarDatoCorneaExtraccion)) {
            if (changes.configuracionDatoCorneaExtraccion.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionDatoCorneaExtraccion.currentValue.permisosAtributos;
            if (changes.configuracionDatoCorneaExtraccion.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionDatoCorneaExtraccion.currentValue.permisosTabla;
            if ($("#grid_datoCorneaExtraccion_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_datoCorneaExtraccion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionDatoCorneaExtraccion.permisosAtributos &&
            this.configuracionDatoCorneaExtraccion.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "datoCorneaExtraccion",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DatoCorneaExtraccion'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DatoCorneaExtraccion'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DatoCorneaExtraccion'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionDatoCorneaExtraccion.permisosAtributos)
            this.permisosAtributos=this.configuracionDatoCorneaExtraccion.permisosAtributos;
        if (this.configuracionDatoCorneaExtraccion.permisosTabla)
            this.permisosTabla=this.configuracionDatoCorneaExtraccion.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.datoCorneaExtraccion && permisos.datoCorneaExtraccion.PermisoAtributo&& permisos.datoCorneaExtraccion.PermisoAtributo.length>0
            && !obj.configuracionDatoCorneaExtraccion.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.datoCorneaExtraccion.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.DatoCorneaExtraccion.PermisoAtributo ;
        }
        if (permisos && permisos.datoCorneaExtraccion && permisos.datoCorneaExtraccion.PermisoTabla && permisos.datoCorneaExtraccion.PermisoTabla.length>0
            && !obj.configuracionDatoCorneaExtraccion.permisosTabla){
            obj.globalesService.evtTablas (permisos.datoCorneaExtraccion.PermisoTabla,obj);

//            obj.permisosTabla = permisos.DatoCorneaExtraccion.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_datoCorneaExtraccion_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionDatoCorneaExtraccion.campoAgEl != null
            && this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta
            && this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta.isOk
            && !this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta.isOk())
            return;
        if (this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta) {
            if (!this.configuracionDatoCorneaExtraccion.campoAgEl && this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta instanceof DatoCorneaExtraccion)
                this.configuracionDatoCorneaExtraccion.rutaLista = this.crudServiceBaseUrl + "/getDatoCorneaExtraccionesByDto";
            this.lista = this.configuracionDatoCorneaExtraccion.lecturaP(completar,this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta);
            if (this.configuracionDatoCorneaExtraccion.campoAgEl) {
                this.rutaAgregar = this.configuracionDatoCorneaExtraccion.agregarP(function(){}, this.configuracionDatoCorneaExtraccion.campoAgEl);
                this.rutaEliminar = this.configuracionDatoCorneaExtraccion.eliminarP(function(){}, this.configuracionDatoCorneaExtraccion.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionDatoCorneaExtraccion.agregarP(completar, this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta);
                this.rutaEliminar = this.configuracionDatoCorneaExtraccion.eliminarP(completar, this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta);
            }
        } else {
            this.lista = this.configuracionDatoCorneaExtraccion.lectura();
            this.rutaAgregar = this.configuracionDatoCorneaExtraccion.agregar();
            this.rutaEliminar = this.configuracionDatoCorneaExtraccion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "idregistroExtraccion")) {
            campos["idregistroExtraccion"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "idregistroExtraccion"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "tipoCornea")) {
            campos["tipoCornea"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "tipoCornea"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "vobo")) {
            campos["vobo"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "vobo"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "cultivoPrevioProcuracion")) {
            campos["cultivoPrevioProcuracion"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "cultivoPrevioProcuracion"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "cultivoOptisol")) {
            campos["cultivoOptisol"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "cultivoOptisol"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"datoCorneaExtraccion", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDatoCorneaExtraccion.rutaActualizar,
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
            if (self.configuracionDatoCorneaExtraccion.campoAgEl) {
                if (self.configuracionDatoCorneaExtraccion.tipocampoAgEl == "DatoCorneaExtraccionDatoCorneaExtraccion")
                    self.configuracionDatoCorneaExtraccion.campoAgEl.datoCorneaExtraccion2 = options.models[0];
                else
                    self.configuracionDatoCorneaExtraccion.campoAgEl.datoCorneaExtraccion = options.models[0];
                return JSON.stringify(self.configuracionDatoCorneaExtraccion.campoAgEl);
            }else
            if (est.options[operation].data.models.datoCorneaExtraccion) {
                est.options[operation].data.models.datoCorneaExtraccion2 = options.models[0];
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
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "idregistroExtraccion")) {
            columnas.push({ field: "idregistroExtraccion", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "idregistroExtraccion") , editor: idregistroExtraccionDropDownEditor , template: " #if (idregistroExtraccion){#   #=idregistroExtraccion.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "tipoCornea")) {
            columnas.push({ field: "tipoCornea", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "tipoCornea")  });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "vobo")) {
            columnas.push({ field: "vobo", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "vobo")  });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "cultivoPrevioProcuracion")) {
            columnas.push({ field: "cultivoPrevioProcuracion", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "cultivoPrevioProcuracion")  });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "cultivoOptisol")) {
            columnas.push({ field: "cultivoOptisol", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "cultivoOptisol")  });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"datoCorneaExtraccion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"datoCorneaExtraccion", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"datoCorneaExtraccion")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"datoCorneaExtraccion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"datoCorneaExtraccion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"datoCorneaExtraccion")  && this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_datoCorneaExtraccion_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_datoCorneaExtraccion_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDatoCorneaExtraccion.altoComponente,
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
        this.grid = $("#grid_datoCorneaExtraccion_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidregistroExtraccion = this.urlprovider.serverURL + "registroExtraccion/getRegistroExtraccionesActivos";

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
        function idregistroExtraccionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "tipoDonanteMultiorganico",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidregistroExtraccion,
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
        //        this.grid = $("#grid_datoCorneaExtraccion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.datoCorneaExtraccionSeleccionado = new DatoCorneaExtraccion();
        gridac.datoCorneaExtraccionSeleccionado.from(dataItem);
        gridac.evtDatoCorneaExtraccionSeleccionado.emit(gridac.datoCorneaExtraccionSeleccionado);
        (gridac.datoCorneaExtraccionSeleccionado);
    }


}
