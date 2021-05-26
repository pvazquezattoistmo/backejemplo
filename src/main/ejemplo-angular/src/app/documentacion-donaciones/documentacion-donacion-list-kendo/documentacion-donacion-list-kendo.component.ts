import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { DocumentacionDonacion } from '../shared/documentacion-donacion'
import { ConfigurarDocumentacionDonacion } from '../shared/configurar-documentacion-donacion'
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
    selector: 'app-documentacion-donacion-list-kendo',
    templateUrl: './documentacion-donacion-list-kendo.component.html',
    styleUrls: ['./documentacion-donacion-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class DocumentacionDonacionListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public documentacionDonacionSeleccionado: DocumentacionDonacion = new DocumentacionDonacion();
    public dataSource: any;
    public grid: any;
    @Input() configuracionDocumentacionDonacion: ConfigurarDocumentacionDonacion = new ConfigurarDocumentacionDonacion();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("documentacionDonacionSeleccionado") evtDocumentacionDonacionSeleccionado: EventEmitter<DocumentacionDonacion> = new EventEmitter<DocumentacionDonacion>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "documentacionDonacion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'documentacionDonacion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'documentacionDonacion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionDocumentacionDonacion.titulo.indexOf("Catálogo")!= -1){
            this.configuracionDocumentacionDonacion.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDocumentacionDonacion && changes.configuracionDocumentacionDonacion.currentValue &&
            (changes.configuracionDocumentacionDonacion.previousValue instanceof ConfigurarDocumentacionDonacion)) {
            if (changes.configuracionDocumentacionDonacion.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionDocumentacionDonacion.currentValue.permisosAtributos;
            if (changes.configuracionDocumentacionDonacion.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionDocumentacionDonacion.currentValue.permisosTabla;
            if ($("#grid_documentacionDonacion_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_documentacionDonacion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionDocumentacionDonacion.permisosAtributos &&
            this.configuracionDocumentacionDonacion.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "documentacionDonacion",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DocumentacionDonacion'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DocumentacionDonacion'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DocumentacionDonacion'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionDocumentacionDonacion.permisosAtributos)
            this.permisosAtributos=this.configuracionDocumentacionDonacion.permisosAtributos;
        if (this.configuracionDocumentacionDonacion.permisosTabla)
            this.permisosTabla=this.configuracionDocumentacionDonacion.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoAtributo&& permisos.documentacionDonacion.PermisoAtributo.length>0
            && !obj.configuracionDocumentacionDonacion.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.documentacionDonacion.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.DocumentacionDonacion.PermisoAtributo ;
        }
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoTabla && permisos.documentacionDonacion.PermisoTabla.length>0
            && !obj.configuracionDocumentacionDonacion.permisosTabla){
            obj.globalesService.evtTablas (permisos.documentacionDonacion.PermisoTabla,obj);

//            obj.permisosTabla = permisos.DocumentacionDonacion.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_documentacionDonacion_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionDocumentacionDonacion.campoAgEl != null
            && this.configuracionDocumentacionDonacion.documentacionDonacionConsulta
            && this.configuracionDocumentacionDonacion.documentacionDonacionConsulta.isOk
            && !this.configuracionDocumentacionDonacion.documentacionDonacionConsulta.isOk())
            return;
        if (this.configuracionDocumentacionDonacion.documentacionDonacionConsulta) {
            if (!this.configuracionDocumentacionDonacion.campoAgEl && this.configuracionDocumentacionDonacion.documentacionDonacionConsulta instanceof DocumentacionDonacion)
                this.configuracionDocumentacionDonacion.rutaLista = this.crudServiceBaseUrl + "/getDocumentacionDonacionesByDto";
            this.lista = this.configuracionDocumentacionDonacion.lecturaP(completar,this.configuracionDocumentacionDonacion.documentacionDonacionConsulta);
            if (this.configuracionDocumentacionDonacion.campoAgEl) {
                this.rutaAgregar = this.configuracionDocumentacionDonacion.agregarP(function(){}, this.configuracionDocumentacionDonacion.campoAgEl);
                this.rutaEliminar = this.configuracionDocumentacionDonacion.eliminarP(function(){}, this.configuracionDocumentacionDonacion.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionDocumentacionDonacion.agregarP(completar, this.configuracionDocumentacionDonacion.documentacionDonacionConsulta);
                this.rutaEliminar = this.configuracionDocumentacionDonacion.eliminarP(completar, this.configuracionDocumentacionDonacion.documentacionDonacionConsulta);
            }
        } else {
            this.lista = this.configuracionDocumentacionDonacion.lectura();
            this.rutaAgregar = this.configuracionDocumentacionDonacion.agregar();
            this.rutaEliminar = this.configuracionDocumentacionDonacion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"documentacionDonacion", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"documentacionDonacion", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "idoficioDonacion")) {
            campos["idoficioDonacion"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "idoficioDonacion"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "consentimientoInformado")) {
            campos["consentimientoInformado"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "consentimientoInformado"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "panelViral")) {
            campos["panelViral"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "panelViral"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "certificadoMuerteEncefalico")) {
            campos["certificadoMuerteEncefalico"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "certificadoMuerteEncefalico"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "revisionLampara")) {
            campos["revisionLampara"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "revisionLampara"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "certificadoDefunsion")) {
            campos["certificadoDefunsion"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "certificadoDefunsion"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"documentacionDonacion", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDocumentacionDonacion.rutaActualizar,
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
            if (self.configuracionDocumentacionDonacion.campoAgEl) {
                if (self.configuracionDocumentacionDonacion.tipocampoAgEl == "DocumentacionDonacionDocumentacionDonacion")
                    self.configuracionDocumentacionDonacion.campoAgEl.documentacionDonacion2 = options.models[0];
                else
                    self.configuracionDocumentacionDonacion.campoAgEl.documentacionDonacion = options.models[0];
                return JSON.stringify(self.configuracionDocumentacionDonacion.campoAgEl);
            }else
            if (est.options[operation].data.models.documentacionDonacion) {
                est.options[operation].data.models.documentacionDonacion2 = options.models[0];
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
        if (this.globalesService.avisible(this,"documentacionDonacion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "idoficioDonacion")) {
            columnas.push({ field: "idoficioDonacion", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "idoficioDonacion") , editor: idoficioDonacionDropDownEditor , template: " #if (idoficioDonacion){#   #=idoficioDonacion.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "consentimientoInformado")) {
            columnas.push({ field: "consentimientoInformado", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "consentimientoInformado")  });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "panelViral")) {
            columnas.push({ field: "panelViral", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "panelViral")  });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "certificadoMuerteEncefalico")) {
            columnas.push({ field: "certificadoMuerteEncefalico", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "certificadoMuerteEncefalico")  });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "revisionLampara")) {
            columnas.push({ field: "revisionLampara", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "revisionLampara")  });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "certificadoDefunsion")) {
            columnas.push({ field: "certificadoDefunsion", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "certificadoDefunsion")  });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"documentacionDonacion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"documentacionDonacion", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"documentacionDonacion")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"documentacionDonacion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"documentacionDonacion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"documentacionDonacion")  && this.configuracionDocumentacionDonacion.documentacionDonacionConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_documentacionDonacion_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_documentacionDonacion_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDocumentacionDonacion.altoComponente,
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
        this.grid = $("#grid_documentacionDonacion_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidoficioDonacion = this.urlprovider.serverURL + "oficioDonacion/getOficioDonacionesActivos";

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
        function idoficioDonacionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "botonCorneal",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidoficioDonacion,
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
        //        this.grid = $("#grid_documentacionDonacion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.documentacionDonacionSeleccionado = new DocumentacionDonacion();
        gridac.documentacionDonacionSeleccionado.from(dataItem);
        gridac.evtDocumentacionDonacionSeleccionado.emit(gridac.documentacionDonacionSeleccionado);
        (gridac.documentacionDonacionSeleccionado);
    }


}
