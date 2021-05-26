import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { EntidadFederativa } from '../shared/entidad-federativa'
import { ConfigurarEntidadFederativa } from '../shared/configurar-entidad-federativa'
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
    selector: 'app-entidad-federativa-list-kendo',
    templateUrl: './entidad-federativa-list-kendo.component.html',
    styleUrls: ['./entidad-federativa-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class EntidadFederativaListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public entidadFederativaSeleccionado: EntidadFederativa = new EntidadFederativa();
    public dataSource: any;
    public grid: any;
    @Input() configuracionEntidadFederativa: ConfigurarEntidadFederativa = new ConfigurarEntidadFederativa();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("entidadFederativaSeleccionado") evtEntidadFederativaSeleccionado: EventEmitter<EntidadFederativa> = new EventEmitter<EntidadFederativa>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "entidadFederativa";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'entidadFederativa'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'entidadFederativa'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionEntidadFederativa.titulo.indexOf("Catálogo")!= -1){
            this.configuracionEntidadFederativa.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionEntidadFederativa && changes.configuracionEntidadFederativa.currentValue &&
            (changes.configuracionEntidadFederativa.previousValue instanceof ConfigurarEntidadFederativa)) {
            if (changes.configuracionEntidadFederativa.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionEntidadFederativa.currentValue.permisosAtributos;
            if (changes.configuracionEntidadFederativa.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionEntidadFederativa.currentValue.permisosTabla;
            if ($("#grid_entidadFederativa_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_entidadFederativa_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionEntidadFederativa.permisosAtributos &&
            this.configuracionEntidadFederativa.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "entidadFederativa",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EntidadFederativa'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EntidadFederativa'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EntidadFederativa'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionEntidadFederativa.permisosAtributos)
            this.permisosAtributos=this.configuracionEntidadFederativa.permisosAtributos;
        if (this.configuracionEntidadFederativa.permisosTabla)
            this.permisosTabla=this.configuracionEntidadFederativa.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.entidadFederativa && permisos.entidadFederativa.PermisoAtributo&& permisos.entidadFederativa.PermisoAtributo.length>0
            && !obj.configuracionEntidadFederativa.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.entidadFederativa.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.EntidadFederativa.PermisoAtributo ;
        }
        if (permisos && permisos.entidadFederativa && permisos.entidadFederativa.PermisoTabla && permisos.entidadFederativa.PermisoTabla.length>0
            && !obj.configuracionEntidadFederativa.permisosTabla){
            obj.globalesService.evtTablas (permisos.entidadFederativa.PermisoTabla,obj);

//            obj.permisosTabla = permisos.EntidadFederativa.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_entidadFederativa_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionEntidadFederativa.campoAgEl != null
            && this.configuracionEntidadFederativa.entidadFederativaConsulta
            && this.configuracionEntidadFederativa.entidadFederativaConsulta.isOk
            && !this.configuracionEntidadFederativa.entidadFederativaConsulta.isOk())
            return;
        if (this.configuracionEntidadFederativa.entidadFederativaConsulta) {
            if (!this.configuracionEntidadFederativa.campoAgEl && this.configuracionEntidadFederativa.entidadFederativaConsulta instanceof EntidadFederativa)
                this.configuracionEntidadFederativa.rutaLista = this.crudServiceBaseUrl + "/getEntidadFederativasByDto";
            this.lista = this.configuracionEntidadFederativa.lecturaP(completar,this.configuracionEntidadFederativa.entidadFederativaConsulta);
            if (this.configuracionEntidadFederativa.campoAgEl) {
                this.rutaAgregar = this.configuracionEntidadFederativa.agregarP(function(){}, this.configuracionEntidadFederativa.campoAgEl);
                this.rutaEliminar = this.configuracionEntidadFederativa.eliminarP(function(){}, this.configuracionEntidadFederativa.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionEntidadFederativa.agregarP(completar, this.configuracionEntidadFederativa.entidadFederativaConsulta);
                this.rutaEliminar = this.configuracionEntidadFederativa.eliminarP(completar, this.configuracionEntidadFederativa.entidadFederativaConsulta);
            }
        } else {
            this.lista = this.configuracionEntidadFederativa.lectura();
            this.rutaAgregar = this.configuracionEntidadFederativa.agregar();
            this.rutaEliminar = this.configuracionEntidadFederativa.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"entidadFederativa", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"entidadFederativa", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"entidadFederativa", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "abreviatura")) {
            campos["abreviatura"] = { editable: this.globalesService.aenable(this,"entidadFederativa", "abreviatura"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"entidadFederativa", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"entidadFederativa", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"entidadFederativa", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"entidadFederativa", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"entidadFederativa", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionEntidadFederativa.rutaActualizar,
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
            if (self.configuracionEntidadFederativa.campoAgEl) {
                if (self.configuracionEntidadFederativa.tipocampoAgEl == "EntidadFederativaEntidadFederativa")
                    self.configuracionEntidadFederativa.campoAgEl.entidadFederativa2 = options.models[0];
                else
                    self.configuracionEntidadFederativa.campoAgEl.entidadFederativa = options.models[0];
                return JSON.stringify(self.configuracionEntidadFederativa.campoAgEl);
            }else
            if (est.options[operation].data.models.entidadFederativa) {
                est.options[operation].data.models.entidadFederativa2 = options.models[0];
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
        if (this.globalesService.avisible(this,"entidadFederativa", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"entidadFederativa", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this,"entidadFederativa", "nombre") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "abreviatura")) {
            columnas.push({ field: "abreviatura", title: this.globalesService.aetiqueta(this,"entidadFederativa", "abreviatura") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"entidadFederativa", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"entidadFederativa", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"entidadFederativa", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"entidadFederativa", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"entidadFederativa", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"entidadFederativa", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"entidadFederativa")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"entidadFederativa")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"entidadFederativa")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"entidadFederativa")  && this.configuracionEntidadFederativa.entidadFederativaConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_entidadFederativa_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_entidadFederativa_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionEntidadFederativa.altoComponente,
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
        this.grid = $("#grid_entidadFederativa_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_entidadFederativa_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.entidadFederativaSeleccionado = new EntidadFederativa();
        gridac.entidadFederativaSeleccionado.from(dataItem);
        gridac.evtEntidadFederativaSeleccionado.emit(gridac.entidadFederativaSeleccionado);
        (gridac.entidadFederativaSeleccionado);
    }


}
