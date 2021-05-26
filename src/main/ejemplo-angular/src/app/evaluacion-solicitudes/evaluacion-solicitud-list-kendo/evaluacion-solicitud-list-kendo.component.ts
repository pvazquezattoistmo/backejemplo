import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { EvaluacionSolicitud } from '../shared/evaluacion-solicitud'
import { ConfigurarEvaluacionSolicitud } from '../shared/configurar-evaluacion-solicitud'
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
    selector: 'app-evaluacion-solicitud-list-kendo',
    templateUrl: './evaluacion-solicitud-list-kendo.component.html',
    styleUrls: ['./evaluacion-solicitud-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class EvaluacionSolicitudListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public evaluacionSolicitudSeleccionado: EvaluacionSolicitud = new EvaluacionSolicitud();
    public dataSource: any;
    public grid: any;
    @Input() configuracionEvaluacionSolicitud: ConfigurarEvaluacionSolicitud = new ConfigurarEvaluacionSolicitud();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("evaluacionSolicitudSeleccionado") evtEvaluacionSolicitudSeleccionado: EventEmitter<EvaluacionSolicitud> = new EventEmitter<EvaluacionSolicitud>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "evaluacionSolicitud";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'evaluacionSolicitud'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'evaluacionSolicitud'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionEvaluacionSolicitud.titulo.indexOf("Catálogo")!= -1){
            this.configuracionEvaluacionSolicitud.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionEvaluacionSolicitud && changes.configuracionEvaluacionSolicitud.currentValue &&
            (changes.configuracionEvaluacionSolicitud.previousValue instanceof ConfigurarEvaluacionSolicitud)) {
            if (changes.configuracionEvaluacionSolicitud.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionEvaluacionSolicitud.currentValue.permisosAtributos;
            if (changes.configuracionEvaluacionSolicitud.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionEvaluacionSolicitud.currentValue.permisosTabla;
            if ($("#grid_evaluacionSolicitud_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_evaluacionSolicitud_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionEvaluacionSolicitud.permisosAtributos &&
            this.configuracionEvaluacionSolicitud.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "evaluacionSolicitud",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EvaluacionSolicitud'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EvaluacionSolicitud'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EvaluacionSolicitud'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionEvaluacionSolicitud.permisosAtributos)
            this.permisosAtributos=this.configuracionEvaluacionSolicitud.permisosAtributos;
        if (this.configuracionEvaluacionSolicitud.permisosTabla)
            this.permisosTabla=this.configuracionEvaluacionSolicitud.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo&& permisos.evaluacionSolicitud.PermisoAtributo.length>0
            && !obj.configuracionEvaluacionSolicitud.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.evaluacionSolicitud.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.EvaluacionSolicitud.PermisoAtributo ;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoTabla && permisos.evaluacionSolicitud.PermisoTabla.length>0
            && !obj.configuracionEvaluacionSolicitud.permisosTabla){
            obj.globalesService.evtTablas (permisos.evaluacionSolicitud.PermisoTabla,obj);

//            obj.permisosTabla = permisos.EvaluacionSolicitud.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_evaluacionSolicitud_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionEvaluacionSolicitud.campoAgEl != null
            && this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta
            && this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta.isOk
            && !this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta.isOk())
            return;
        if (this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta) {
            if (!this.configuracionEvaluacionSolicitud.campoAgEl && this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta instanceof EvaluacionSolicitud)
                this.configuracionEvaluacionSolicitud.rutaLista = this.crudServiceBaseUrl + "/getEvaluacionSolicitudesByDto";
            this.lista = this.configuracionEvaluacionSolicitud.lecturaP(completar,this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta);
            if (this.configuracionEvaluacionSolicitud.campoAgEl) {
                this.rutaAgregar = this.configuracionEvaluacionSolicitud.agregarP(function(){}, this.configuracionEvaluacionSolicitud.campoAgEl);
                this.rutaEliminar = this.configuracionEvaluacionSolicitud.eliminarP(function(){}, this.configuracionEvaluacionSolicitud.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionEvaluacionSolicitud.agregarP(completar, this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta);
                this.rutaEliminar = this.configuracionEvaluacionSolicitud.eliminarP(completar, this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta);
            }
        } else {
            this.lista = this.configuracionEvaluacionSolicitud.lectura();
            this.rutaAgregar = this.configuracionEvaluacionSolicitud.agregar();
            this.rutaEliminar = this.configuracionEvaluacionSolicitud.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"evaluacionSolicitud", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"evaluacionSolicitud", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"evaluacionSolicitud", "idrecepcionSolicitudEvaluacion")) {
            campos["idrecepcionSolicitudEvaluacion"] = { editable: this.globalesService.aenable(this,"evaluacionSolicitud", "idrecepcionSolicitudEvaluacion"), nullable: true , type: "object" , defaultValue: { "id": "" , "horaRecepcion": "" }  };
        }
        if (this.globalesService.avisible(this,"evaluacionSolicitud", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"evaluacionSolicitud", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"evaluacionSolicitud", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"evaluacionSolicitud", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionEvaluacionSolicitud.rutaActualizar,
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
            if (self.configuracionEvaluacionSolicitud.campoAgEl) {
                if (self.configuracionEvaluacionSolicitud.tipocampoAgEl == "EvaluacionSolicitudEvaluacionSolicitud")
                    self.configuracionEvaluacionSolicitud.campoAgEl.evaluacionSolicitud2 = options.models[0];
                else
                    self.configuracionEvaluacionSolicitud.campoAgEl.evaluacionSolicitud = options.models[0];
                return JSON.stringify(self.configuracionEvaluacionSolicitud.campoAgEl);
            }else
            if (est.options[operation].data.models.evaluacionSolicitud) {
                est.options[operation].data.models.evaluacionSolicitud2 = options.models[0];
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
        if (this.globalesService.avisible(this,"evaluacionSolicitud", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"evaluacionSolicitud", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"evaluacionSolicitud", "idrecepcionSolicitudEvaluacion")) {
            columnas.push({ field: "idrecepcionSolicitudEvaluacion", title: this.globalesService.aetiqueta(this,"evaluacionSolicitud", "idrecepcionSolicitudEvaluacion") , editor: idrecepcionSolicitudEvaluacionDropDownEditor , template: " #if (idrecepcionSolicitudEvaluacion){#   #=idrecepcionSolicitudEvaluacion.horaRecepcion# # } # "  });
        }
        if (this.globalesService.avisible(this,"evaluacionSolicitud", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"evaluacionSolicitud", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"evaluacionSolicitud", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"evaluacionSolicitud", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"evaluacionSolicitud")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"evaluacionSolicitud")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"evaluacionSolicitud")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"evaluacionSolicitud")  && this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_evaluacionSolicitud_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_evaluacionSolicitud_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionEvaluacionSolicitud.altoComponente,
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
        this.grid = $("#grid_evaluacionSolicitud_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidrecepcionSolicitudEvaluacion = this.urlprovider.serverURL + "recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesActivos";

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
        function idrecepcionSolicitudEvaluacionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "expedienteFisico",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidrecepcionSolicitudEvaluacion,
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
        //        this.grid = $("#grid_evaluacionSolicitud_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.evaluacionSolicitudSeleccionado = new EvaluacionSolicitud();
        gridac.evaluacionSolicitudSeleccionado.from(dataItem);
        gridac.evtEvaluacionSolicitudSeleccionado.emit(gridac.evaluacionSolicitudSeleccionado);
        (gridac.evaluacionSolicitudSeleccionado);
    }


}
