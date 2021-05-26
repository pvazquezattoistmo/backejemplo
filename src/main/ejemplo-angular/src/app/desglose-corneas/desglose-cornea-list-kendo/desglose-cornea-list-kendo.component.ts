import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { DesgloseCornea } from '../shared/desglose-cornea'
import { ConfigurarDesgloseCornea } from '../shared/configurar-desglose-cornea'
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
    selector: 'app-desglose-cornea-list-kendo',
    templateUrl: './desglose-cornea-list-kendo.component.html',
    styleUrls: ['./desglose-cornea-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class DesgloseCorneaListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public desgloseCorneaSeleccionado: DesgloseCornea = new DesgloseCornea();
    public dataSource: any;
    public grid: any;
    @Input() configuracionDesgloseCornea: ConfigurarDesgloseCornea = new ConfigurarDesgloseCornea();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("desgloseCorneaSeleccionado") evtDesgloseCorneaSeleccionado: EventEmitter<DesgloseCornea> = new EventEmitter<DesgloseCornea>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "desgloseCornea";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'desgloseCornea'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'desgloseCornea'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionDesgloseCornea.titulo.indexOf("Catálogo")!= -1){
            this.configuracionDesgloseCornea.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDesgloseCornea && changes.configuracionDesgloseCornea.currentValue &&
            (changes.configuracionDesgloseCornea.previousValue instanceof ConfigurarDesgloseCornea)) {
            if (changes.configuracionDesgloseCornea.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionDesgloseCornea.currentValue.permisosAtributos;
            if (changes.configuracionDesgloseCornea.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionDesgloseCornea.currentValue.permisosTabla;
            if ($("#grid_desgloseCornea_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_desgloseCornea_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionDesgloseCornea.permisosAtributos &&
            this.configuracionDesgloseCornea.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "desgloseCornea",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DesgloseCornea'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DesgloseCornea'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DesgloseCornea'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionDesgloseCornea.permisosAtributos)
            this.permisosAtributos=this.configuracionDesgloseCornea.permisosAtributos;
        if (this.configuracionDesgloseCornea.permisosTabla)
            this.permisosTabla=this.configuracionDesgloseCornea.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoAtributo&& permisos.desgloseCornea.PermisoAtributo.length>0
            && !obj.configuracionDesgloseCornea.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.desgloseCornea.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.DesgloseCornea.PermisoAtributo ;
        }
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoTabla && permisos.desgloseCornea.PermisoTabla.length>0
            && !obj.configuracionDesgloseCornea.permisosTabla){
            obj.globalesService.evtTablas (permisos.desgloseCornea.PermisoTabla,obj);

//            obj.permisosTabla = permisos.DesgloseCornea.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_desgloseCornea_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionDesgloseCornea.campoAgEl != null
            && this.configuracionDesgloseCornea.desgloseCorneaConsulta
            && this.configuracionDesgloseCornea.desgloseCorneaConsulta.isOk
            && !this.configuracionDesgloseCornea.desgloseCorneaConsulta.isOk())
            return;
        if (this.configuracionDesgloseCornea.desgloseCorneaConsulta) {
            if (!this.configuracionDesgloseCornea.campoAgEl && this.configuracionDesgloseCornea.desgloseCorneaConsulta instanceof DesgloseCornea)
                this.configuracionDesgloseCornea.rutaLista = this.crudServiceBaseUrl + "/getDesgloseCorneasByDto";
            this.lista = this.configuracionDesgloseCornea.lecturaP(completar,this.configuracionDesgloseCornea.desgloseCorneaConsulta);
            if (this.configuracionDesgloseCornea.campoAgEl) {
                this.rutaAgregar = this.configuracionDesgloseCornea.agregarP(function(){}, this.configuracionDesgloseCornea.campoAgEl);
                this.rutaEliminar = this.configuracionDesgloseCornea.eliminarP(function(){}, this.configuracionDesgloseCornea.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionDesgloseCornea.agregarP(completar, this.configuracionDesgloseCornea.desgloseCorneaConsulta);
                this.rutaEliminar = this.configuracionDesgloseCornea.eliminarP(completar, this.configuracionDesgloseCornea.desgloseCorneaConsulta);
            }
        } else {
            this.lista = this.configuracionDesgloseCornea.lectura();
            this.rutaAgregar = this.configuracionDesgloseCornea.agregar();
            this.rutaEliminar = this.configuracionDesgloseCornea.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"desgloseCornea", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"desgloseCornea", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "idevaluacionSolicitud")) {
            campos["idevaluacionSolicitud"] = { editable: this.globalesService.aenable(this,"desgloseCornea", "idevaluacionSolicitud"), nullable: true , type: "object" , defaultValue: { "id": "" , "status": "" }  };
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "descripcion")) {
            campos["descripcion"] = { editable: this.globalesService.aenable(this,"desgloseCornea", "descripcion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "idadicional")) {
            campos["idadicional"] = { editable: this.globalesService.aenable(this,"desgloseCornea", "idadicional"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"desgloseCornea", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"desgloseCornea", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDesgloseCornea.rutaActualizar,
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
            if (self.configuracionDesgloseCornea.campoAgEl) {
                if (self.configuracionDesgloseCornea.tipocampoAgEl == "DesgloseCorneaDesgloseCornea")
                    self.configuracionDesgloseCornea.campoAgEl.desgloseCornea2 = options.models[0];
                else
                    self.configuracionDesgloseCornea.campoAgEl.desgloseCornea = options.models[0];
                return JSON.stringify(self.configuracionDesgloseCornea.campoAgEl);
            }else
            if (est.options[operation].data.models.desgloseCornea) {
                est.options[operation].data.models.desgloseCornea2 = options.models[0];
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
        if (this.globalesService.avisible(this,"desgloseCornea", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"desgloseCornea", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "idevaluacionSolicitud")) {
            columnas.push({ field: "idevaluacionSolicitud", title: this.globalesService.aetiqueta(this,"desgloseCornea", "idevaluacionSolicitud") , editor: idevaluacionSolicitudDropDownEditor , template: " #if (idevaluacionSolicitud){#   #=idevaluacionSolicitud.status# # } # "  });
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "descripcion")) {
            columnas.push({ field: "descripcion", title: this.globalesService.aetiqueta(this,"desgloseCornea", "descripcion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "idadicional")) {
            columnas.push({ field: "idadicional", title: this.globalesService.aetiqueta(this,"desgloseCornea", "idadicional") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"desgloseCornea", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"desgloseCornea", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"desgloseCornea", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"desgloseCornea")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"desgloseCornea")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"desgloseCornea")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"desgloseCornea")  && this.configuracionDesgloseCornea.desgloseCorneaConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_desgloseCornea_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_desgloseCornea_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDesgloseCornea.altoComponente,
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
        this.grid = $("#grid_desgloseCornea_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidevaluacionSolicitud = this.urlprovider.serverURL + "evaluacionSolicitud/getEvaluacionSolicitudesActivos";

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
        function idevaluacionSolicitudDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "status",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidevaluacionSolicitud,
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
        //        this.grid = $("#grid_desgloseCornea_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.desgloseCorneaSeleccionado = new DesgloseCornea();
        gridac.desgloseCorneaSeleccionado.from(dataItem);
        gridac.evtDesgloseCorneaSeleccionado.emit(gridac.desgloseCorneaSeleccionado);
        (gridac.desgloseCorneaSeleccionado);
    }


}
