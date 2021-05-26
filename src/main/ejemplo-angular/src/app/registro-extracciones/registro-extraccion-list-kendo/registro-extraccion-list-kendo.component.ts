import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { RegistroExtraccion } from '../shared/registro-extraccion'
import { ConfigurarRegistroExtraccion } from '../shared/configurar-registro-extraccion'
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
    selector: 'app-registro-extraccion-list-kendo',
    templateUrl: './registro-extraccion-list-kendo.component.html',
    styleUrls: ['./registro-extraccion-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class RegistroExtraccionListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public registroExtraccionSeleccionado: RegistroExtraccion = new RegistroExtraccion();
    public dataSource: any;
    public grid: any;
    @Input() configuracionRegistroExtraccion: ConfigurarRegistroExtraccion = new ConfigurarRegistroExtraccion();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("registroExtraccionSeleccionado") evtRegistroExtraccionSeleccionado: EventEmitter<RegistroExtraccion> = new EventEmitter<RegistroExtraccion>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "registroExtraccion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'registroExtraccion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'registroExtraccion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionRegistroExtraccion.titulo.indexOf("Catálogo")!= -1){
            this.configuracionRegistroExtraccion.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionRegistroExtraccion && changes.configuracionRegistroExtraccion.currentValue &&
            (changes.configuracionRegistroExtraccion.previousValue instanceof ConfigurarRegistroExtraccion)) {
            if (changes.configuracionRegistroExtraccion.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionRegistroExtraccion.currentValue.permisosAtributos;
            if (changes.configuracionRegistroExtraccion.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionRegistroExtraccion.currentValue.permisosTabla;
            if ($("#grid_registroExtraccion_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_registroExtraccion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionRegistroExtraccion.permisosAtributos &&
            this.configuracionRegistroExtraccion.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "registroExtraccion",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RegistroExtraccion'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RegistroExtraccion'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RegistroExtraccion'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionRegistroExtraccion.permisosAtributos)
            this.permisosAtributos=this.configuracionRegistroExtraccion.permisosAtributos;
        if (this.configuracionRegistroExtraccion.permisosTabla)
            this.permisosTabla=this.configuracionRegistroExtraccion.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoAtributo&& permisos.registroExtraccion.PermisoAtributo.length>0
            && !obj.configuracionRegistroExtraccion.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.registroExtraccion.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.RegistroExtraccion.PermisoAtributo ;
        }
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoTabla && permisos.registroExtraccion.PermisoTabla.length>0
            && !obj.configuracionRegistroExtraccion.permisosTabla){
            obj.globalesService.evtTablas (permisos.registroExtraccion.PermisoTabla,obj);

//            obj.permisosTabla = permisos.RegistroExtraccion.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_registroExtraccion_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionRegistroExtraccion.campoAgEl != null
            && this.configuracionRegistroExtraccion.registroExtraccionConsulta
            && this.configuracionRegistroExtraccion.registroExtraccionConsulta.isOk
            && !this.configuracionRegistroExtraccion.registroExtraccionConsulta.isOk())
            return;
        if (this.configuracionRegistroExtraccion.registroExtraccionConsulta) {
            if (!this.configuracionRegistroExtraccion.campoAgEl && this.configuracionRegistroExtraccion.registroExtraccionConsulta instanceof RegistroExtraccion)
                this.configuracionRegistroExtraccion.rutaLista = this.crudServiceBaseUrl + "/getRegistroExtraccionesByDto";
            this.lista = this.configuracionRegistroExtraccion.lecturaP(completar,this.configuracionRegistroExtraccion.registroExtraccionConsulta);
            if (this.configuracionRegistroExtraccion.campoAgEl) {
                this.rutaAgregar = this.configuracionRegistroExtraccion.agregarP(function(){}, this.configuracionRegistroExtraccion.campoAgEl);
                this.rutaEliminar = this.configuracionRegistroExtraccion.eliminarP(function(){}, this.configuracionRegistroExtraccion.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionRegistroExtraccion.agregarP(completar, this.configuracionRegistroExtraccion.registroExtraccionConsulta);
                this.rutaEliminar = this.configuracionRegistroExtraccion.eliminarP(completar, this.configuracionRegistroExtraccion.registroExtraccionConsulta);
            }
        } else {
            this.lista = this.configuracionRegistroExtraccion.lectura();
            this.rutaAgregar = this.configuracionRegistroExtraccion.agregar();
            this.rutaEliminar = this.configuracionRegistroExtraccion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"registroExtraccion", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"registroExtraccion", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "idsolicitudEvaluacionCorneal")) {
            campos["idsolicitudEvaluacionCorneal"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "idsolicitudEvaluacionCorneal"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "tipoDonanteMultiorganico")) {
            campos["tipoDonanteMultiorganico"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "tipoDonanteMultiorganico"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "telefonoContacto")) {
            campos["telefonoContacto"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "telefonoContacto"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "panelViral")) {
            campos["panelViral"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "panelViral"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "observacion")) {
            campos["observacion"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "observacion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"registroExtraccion", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionRegistroExtraccion.rutaActualizar,
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
            if (self.configuracionRegistroExtraccion.campoAgEl) {
                if (self.configuracionRegistroExtraccion.tipocampoAgEl == "RegistroExtraccionRegistroExtraccion")
                    self.configuracionRegistroExtraccion.campoAgEl.registroExtraccion2 = options.models[0];
                else
                    self.configuracionRegistroExtraccion.campoAgEl.registroExtraccion = options.models[0];
                return JSON.stringify(self.configuracionRegistroExtraccion.campoAgEl);
            }else
            if (est.options[operation].data.models.registroExtraccion) {
                est.options[operation].data.models.registroExtraccion2 = options.models[0];
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
        if (this.globalesService.avisible(this,"registroExtraccion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"registroExtraccion", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "idsolicitudEvaluacionCorneal")) {
            columnas.push({ field: "idsolicitudEvaluacionCorneal", title: this.globalesService.aetiqueta(this,"registroExtraccion", "idsolicitudEvaluacionCorneal") , editor: idsolicitudEvaluacionCornealDropDownEditor , template: " #if (idsolicitudEvaluacionCorneal){#   #=idsolicitudEvaluacionCorneal.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "tipoDonanteMultiorganico")) {
            columnas.push({ field: "tipoDonanteMultiorganico", title: this.globalesService.aetiqueta(this,"registroExtraccion", "tipoDonanteMultiorganico")  });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "telefonoContacto")) {
            columnas.push({ field: "telefonoContacto", title: this.globalesService.aetiqueta(this,"registroExtraccion", "telefonoContacto") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "panelViral")) {
            columnas.push({ field: "panelViral", title: this.globalesService.aetiqueta(this,"registroExtraccion", "panelViral")  });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "observacion")) {
            columnas.push({ field: "observacion", title: this.globalesService.aetiqueta(this,"registroExtraccion", "observacion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"registroExtraccion", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"registroExtraccion", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"registroExtraccion", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"registroExtraccion", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"registroExtraccion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"registroExtraccion", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"registroExtraccion")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"registroExtraccion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"registroExtraccion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"registroExtraccion")  && this.configuracionRegistroExtraccion.registroExtraccionConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_registroExtraccion_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_registroExtraccion_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionRegistroExtraccion.altoComponente,
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
        this.grid = $("#grid_registroExtraccion_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudEvaluacionCorneal = this.urlprovider.serverURL + "solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesActivos1";

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
        function idsolicitudEvaluacionCornealDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "folioSolicitud",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidsolicitudEvaluacionCorneal,
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
        //        this.grid = $("#grid_registroExtraccion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.registroExtraccionSeleccionado = new RegistroExtraccion();
        gridac.registroExtraccionSeleccionado.from(dataItem);
        gridac.evtRegistroExtraccionSeleccionado.emit(gridac.registroExtraccionSeleccionado);
        (gridac.registroExtraccionSeleccionado);
    }


}
