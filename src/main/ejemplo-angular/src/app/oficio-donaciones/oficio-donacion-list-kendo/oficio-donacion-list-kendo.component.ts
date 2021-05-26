import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { OficioDonacion } from '../shared/oficio-donacion'
import { ConfigurarOficioDonacion } from '../shared/configurar-oficio-donacion'
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
    selector: 'app-oficio-donacion-list-kendo',
    templateUrl: './oficio-donacion-list-kendo.component.html',
    styleUrls: ['./oficio-donacion-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class OficioDonacionListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public oficioDonacionSeleccionado: OficioDonacion = new OficioDonacion();
    public dataSource: any;
    public grid: any;
    @Input() configuracionOficioDonacion: ConfigurarOficioDonacion = new ConfigurarOficioDonacion();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("oficioDonacionSeleccionado") evtOficioDonacionSeleccionado: EventEmitter<OficioDonacion> = new EventEmitter<OficioDonacion>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "oficioDonacion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'oficioDonacion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'oficioDonacion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionOficioDonacion.titulo.indexOf("Catálogo")!= -1){
            this.configuracionOficioDonacion.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionOficioDonacion && changes.configuracionOficioDonacion.currentValue &&
            (changes.configuracionOficioDonacion.previousValue instanceof ConfigurarOficioDonacion)) {
            if (changes.configuracionOficioDonacion.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionOficioDonacion.currentValue.permisosAtributos;
            if (changes.configuracionOficioDonacion.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionOficioDonacion.currentValue.permisosTabla;
            if ($("#grid_oficioDonacion_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_oficioDonacion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionOficioDonacion.permisosAtributos &&
            this.configuracionOficioDonacion.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "oficioDonacion",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'OficioDonacion'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'OficioDonacion'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'OficioDonacion'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionOficioDonacion.permisosAtributos)
            this.permisosAtributos=this.configuracionOficioDonacion.permisosAtributos;
        if (this.configuracionOficioDonacion.permisosTabla)
            this.permisosTabla=this.configuracionOficioDonacion.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoAtributo&& permisos.oficioDonacion.PermisoAtributo.length>0
            && !obj.configuracionOficioDonacion.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.oficioDonacion.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.OficioDonacion.PermisoAtributo ;
        }
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoTabla && permisos.oficioDonacion.PermisoTabla.length>0
            && !obj.configuracionOficioDonacion.permisosTabla){
            obj.globalesService.evtTablas (permisos.oficioDonacion.PermisoTabla,obj);

//            obj.permisosTabla = permisos.OficioDonacion.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_oficioDonacion_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionOficioDonacion.campoAgEl != null
            && this.configuracionOficioDonacion.oficioDonacionConsulta
            && this.configuracionOficioDonacion.oficioDonacionConsulta.isOk
            && !this.configuracionOficioDonacion.oficioDonacionConsulta.isOk())
            return;
        if (this.configuracionOficioDonacion.oficioDonacionConsulta) {
            if (!this.configuracionOficioDonacion.campoAgEl && this.configuracionOficioDonacion.oficioDonacionConsulta instanceof OficioDonacion)
                this.configuracionOficioDonacion.rutaLista = this.crudServiceBaseUrl + "/getOficioDonacionesByDto";
            this.lista = this.configuracionOficioDonacion.lecturaP(completar,this.configuracionOficioDonacion.oficioDonacionConsulta);
            if (this.configuracionOficioDonacion.campoAgEl) {
                this.rutaAgregar = this.configuracionOficioDonacion.agregarP(function(){}, this.configuracionOficioDonacion.campoAgEl);
                this.rutaEliminar = this.configuracionOficioDonacion.eliminarP(function(){}, this.configuracionOficioDonacion.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionOficioDonacion.agregarP(completar, this.configuracionOficioDonacion.oficioDonacionConsulta);
                this.rutaEliminar = this.configuracionOficioDonacion.eliminarP(completar, this.configuracionOficioDonacion.oficioDonacionConsulta);
            }
        } else {
            this.lista = this.configuracionOficioDonacion.lectura();
            this.rutaAgregar = this.configuracionOficioDonacion.agregar();
            this.rutaEliminar = this.configuracionOficioDonacion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"oficioDonacion", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"oficioDonacion", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "idrecepcionSolicitudEvaluacion")) {
            campos["idrecepcionSolicitudEvaluacion"] = { editable: this.globalesService.aenable(this,"oficioDonacion", "idrecepcionSolicitudEvaluacion"), nullable: true , type: "object" , defaultValue: { "id": "" , "horaRecepcion": "" }  };
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "botonCorneal")) {
            campos["botonCorneal"] = { editable: this.globalesService.aenable(this,"oficioDonacion", "botonCorneal"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "microbiologiaCorneal")) {
            campos["microbiologiaCorneal"] = { editable: this.globalesService.aenable(this,"oficioDonacion", "microbiologiaCorneal"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "incidenciaTejido")) {
            campos["incidenciaTejido"] = { editable: this.globalesService.aenable(this,"oficioDonacion", "incidenciaTejido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"oficioDonacion", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"oficioDonacion", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"oficioDonacion", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"oficioDonacion", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"oficioDonacion", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionOficioDonacion.rutaActualizar,
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
            if (self.configuracionOficioDonacion.campoAgEl) {
                if (self.configuracionOficioDonacion.tipocampoAgEl == "OficioDonacionOficioDonacion")
                    self.configuracionOficioDonacion.campoAgEl.oficioDonacion2 = options.models[0];
                else
                    self.configuracionOficioDonacion.campoAgEl.oficioDonacion = options.models[0];
                return JSON.stringify(self.configuracionOficioDonacion.campoAgEl);
            }else
            if (est.options[operation].data.models.oficioDonacion) {
                est.options[operation].data.models.oficioDonacion2 = options.models[0];
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
        if (this.globalesService.avisible(this,"oficioDonacion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"oficioDonacion", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "idrecepcionSolicitudEvaluacion")) {
            columnas.push({ field: "idrecepcionSolicitudEvaluacion", title: this.globalesService.aetiqueta(this,"oficioDonacion", "idrecepcionSolicitudEvaluacion") , editor: idrecepcionSolicitudEvaluacionDropDownEditor , template: " #if (idrecepcionSolicitudEvaluacion){#   #=idrecepcionSolicitudEvaluacion.horaRecepcion# # } # "  });
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "botonCorneal")) {
            columnas.push({ field: "botonCorneal", title: this.globalesService.aetiqueta(this,"oficioDonacion", "botonCorneal")  });
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "microbiologiaCorneal")) {
            columnas.push({ field: "microbiologiaCorneal", title: this.globalesService.aetiqueta(this,"oficioDonacion", "microbiologiaCorneal")  });
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "incidenciaTejido")) {
            columnas.push({ field: "incidenciaTejido", title: this.globalesService.aetiqueta(this,"oficioDonacion", "incidenciaTejido") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"oficioDonacion", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"oficioDonacion", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"oficioDonacion", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"oficioDonacion", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"oficioDonacion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"oficioDonacion", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"oficioDonacion")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"oficioDonacion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"oficioDonacion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"oficioDonacion")  && this.configuracionOficioDonacion.oficioDonacionConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_oficioDonacion_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_oficioDonacion_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionOficioDonacion.altoComponente,
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
        this.grid = $("#grid_oficioDonacion_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_oficioDonacion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.oficioDonacionSeleccionado = new OficioDonacion();
        gridac.oficioDonacionSeleccionado.from(dataItem);
        gridac.evtOficioDonacionSeleccionado.emit(gridac.oficioDonacionSeleccionado);
        (gridac.oficioDonacionSeleccionado);
    }


}
