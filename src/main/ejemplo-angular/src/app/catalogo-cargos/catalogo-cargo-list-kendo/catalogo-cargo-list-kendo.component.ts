import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { CatalogoCargo } from '../shared/catalogo-cargo'
import { ConfigurarCatalogoCargo } from '../shared/configurar-catalogo-cargo'
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
    selector: 'app-catalogo-cargo-list-kendo',
    templateUrl: './catalogo-cargo-list-kendo.component.html',
    styleUrls: ['./catalogo-cargo-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class CatalogoCargoListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public catalogoCargoSeleccionado: CatalogoCargo = new CatalogoCargo();
    public dataSource: any;
    public grid: any;
    @Input() configuracionCatalogoCargo: ConfigurarCatalogoCargo = new ConfigurarCatalogoCargo();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("catalogoCargoSeleccionado") evtCatalogoCargoSeleccionado: EventEmitter<CatalogoCargo> = new EventEmitter<CatalogoCargo>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "catalogoCargo";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'catalogoCargo'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'catalogoCargo'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionCatalogoCargo.titulo.indexOf("Catálogo")!= -1){
            this.configuracionCatalogoCargo.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionCatalogoCargo && changes.configuracionCatalogoCargo.currentValue &&
            (changes.configuracionCatalogoCargo.previousValue instanceof ConfigurarCatalogoCargo)) {
            if (changes.configuracionCatalogoCargo.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionCatalogoCargo.currentValue.permisosAtributos;
            if (changes.configuracionCatalogoCargo.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionCatalogoCargo.currentValue.permisosTabla;
            if ($("#grid_catalogoCargo_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_catalogoCargo_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionCatalogoCargo.permisosAtributos &&
            this.configuracionCatalogoCargo.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "catalogoCargo",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CatalogoCargo'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CatalogoCargo'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CatalogoCargo'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionCatalogoCargo.permisosAtributos)
            this.permisosAtributos=this.configuracionCatalogoCargo.permisosAtributos;
        if (this.configuracionCatalogoCargo.permisosTabla)
            this.permisosTabla=this.configuracionCatalogoCargo.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoAtributo&& permisos.catalogoCargo.PermisoAtributo.length>0
            && !obj.configuracionCatalogoCargo.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.catalogoCargo.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.CatalogoCargo.PermisoAtributo ;
        }
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoTabla && permisos.catalogoCargo.PermisoTabla.length>0
            && !obj.configuracionCatalogoCargo.permisosTabla){
            obj.globalesService.evtTablas (permisos.catalogoCargo.PermisoTabla,obj);

//            obj.permisosTabla = permisos.CatalogoCargo.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_catalogoCargo_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionCatalogoCargo.campoAgEl != null
            && this.configuracionCatalogoCargo.catalogoCargoConsulta
            && this.configuracionCatalogoCargo.catalogoCargoConsulta.isOk
            && !this.configuracionCatalogoCargo.catalogoCargoConsulta.isOk())
            return;
        if (this.configuracionCatalogoCargo.catalogoCargoConsulta) {
            if (!this.configuracionCatalogoCargo.campoAgEl && this.configuracionCatalogoCargo.catalogoCargoConsulta instanceof CatalogoCargo)
                this.configuracionCatalogoCargo.rutaLista = this.crudServiceBaseUrl + "/getCatalogoCargosByDto";
            this.lista = this.configuracionCatalogoCargo.lecturaP(completar,this.configuracionCatalogoCargo.catalogoCargoConsulta);
            if (this.configuracionCatalogoCargo.campoAgEl) {
                this.rutaAgregar = this.configuracionCatalogoCargo.agregarP(function(){}, this.configuracionCatalogoCargo.campoAgEl);
                this.rutaEliminar = this.configuracionCatalogoCargo.eliminarP(function(){}, this.configuracionCatalogoCargo.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionCatalogoCargo.agregarP(completar, this.configuracionCatalogoCargo.catalogoCargoConsulta);
                this.rutaEliminar = this.configuracionCatalogoCargo.eliminarP(completar, this.configuracionCatalogoCargo.catalogoCargoConsulta);
            }
        } else {
            this.lista = this.configuracionCatalogoCargo.lectura();
            this.rutaAgregar = this.configuracionCatalogoCargo.agregar();
            this.rutaEliminar = this.configuracionCatalogoCargo.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"catalogoCargo", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"catalogoCargo", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "descripcion")) {
            campos["descripcion"] = { editable: this.globalesService.aenable(this,"catalogoCargo", "descripcion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"catalogoCargo", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"catalogoCargo", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"catalogoCargo", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"catalogoCargo", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"catalogoCargo", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionCatalogoCargo.rutaActualizar,
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
                        if (elem.fechaActualizacion && typeof elem.fechaActualizacion === "number") {
                            elem.fechaActualizacion = kendo.parseDate(new Date(elem.fechaActualizacion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRegistro && typeof elem.fechaRegistro === "number") {
                            elem.fechaRegistro = kendo.parseDate(new Date(elem.fechaRegistro), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionCatalogoCargo.campoAgEl) {
                if (self.configuracionCatalogoCargo.tipocampoAgEl == "CatalogoCargoCatalogoCargo")
                    self.configuracionCatalogoCargo.campoAgEl.catalogoCargo2 = options.models[0];
                else
                    self.configuracionCatalogoCargo.campoAgEl.catalogoCargo = options.models[0];
                return JSON.stringify(self.configuracionCatalogoCargo.campoAgEl);
            }else
            if (est.options[operation].data.models.catalogoCargo) {
                est.options[operation].data.models.catalogoCargo2 = options.models[0];
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
        if (this.globalesService.avisible(this,"catalogoCargo", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"catalogoCargo", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "descripcion")) {
            columnas.push({ field: "descripcion", title: this.globalesService.aetiqueta(this,"catalogoCargo", "descripcion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"catalogoCargo", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"catalogoCargo", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"catalogoCargo", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"catalogoCargo", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"catalogoCargo", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"catalogoCargo", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"catalogoCargo")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"catalogoCargo")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"catalogoCargo")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"catalogoCargo")  && this.configuracionCatalogoCargo.catalogoCargoConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_catalogoCargo_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_catalogoCargo_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionCatalogoCargo.altoComponente,
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
        this.grid = $("#grid_catalogoCargo_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";

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

    }

    showDetails(e) {
        e.preventDefault();
        //        this.grid = $("#grid_catalogoCargo_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.catalogoCargoSeleccionado = new CatalogoCargo();
        gridac.catalogoCargoSeleccionado.from(dataItem);
        gridac.evtCatalogoCargoSeleccionado.emit(gridac.catalogoCargoSeleccionado);
        (gridac.catalogoCargoSeleccionado);
    }


}
