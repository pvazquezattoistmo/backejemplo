import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { PermisoAtributo } from '../shared/permiso-atributo'
import { ConfigurarPermisoAtributo } from '../shared/configurar-permiso-atributo'
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
    selector: 'app-permiso-atributo-list-kendo',
    templateUrl: './permiso-atributo-list-kendo.component.html',
    styleUrls: ['./permiso-atributo-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class PermisoAtributoListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public permisoAtributoSeleccionado: PermisoAtributo = new PermisoAtributo();
    public dataSource: any;
    public grid: any;
    @Input() configuracionPermisoAtributo: ConfigurarPermisoAtributo = new ConfigurarPermisoAtributo();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("permisoAtributoSeleccionado") evtPermisoAtributoSeleccionado: EventEmitter<PermisoAtributo> = new EventEmitter<PermisoAtributo>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "permisoAtributo";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoAtributo'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoAtributo'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionPermisoAtributo.titulo.indexOf("Catálogo")!= -1){
            this.configuracionPermisoAtributo.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionPermisoAtributo && changes.configuracionPermisoAtributo.currentValue &&
            (changes.configuracionPermisoAtributo.previousValue instanceof ConfigurarPermisoAtributo)) {
            if (changes.configuracionPermisoAtributo.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionPermisoAtributo.currentValue.permisosAtributos;
            if (changes.configuracionPermisoAtributo.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionPermisoAtributo.currentValue.permisosTabla;
            if ($("#grid_permisoAtributo_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_permisoAtributo_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionPermisoAtributo.permisosAtributos &&
            this.configuracionPermisoAtributo.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "permisoAtributo",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoAtributo'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoAtributo'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoAtributo'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionPermisoAtributo.permisosAtributos)
            this.permisosAtributos=this.configuracionPermisoAtributo.permisosAtributos;
        if (this.configuracionPermisoAtributo.permisosTabla)
            this.permisosTabla=this.configuracionPermisoAtributo.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoAtributo&& permisos.permisoAtributo.PermisoAtributo.length>0
            && !obj.configuracionPermisoAtributo.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.permisoAtributo.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.PermisoAtributo.PermisoAtributo ;
        }
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoTabla && permisos.permisoAtributo.PermisoTabla.length>0
            && !obj.configuracionPermisoAtributo.permisosTabla){
            obj.globalesService.evtTablas (permisos.permisoAtributo.PermisoTabla,obj);

//            obj.permisosTabla = permisos.PermisoAtributo.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_permisoAtributo_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionPermisoAtributo.campoAgEl != null
            && this.configuracionPermisoAtributo.permisoAtributoConsulta
            && this.configuracionPermisoAtributo.permisoAtributoConsulta.isOk
            && !this.configuracionPermisoAtributo.permisoAtributoConsulta.isOk())
            return;
        if (this.configuracionPermisoAtributo.permisoAtributoConsulta) {
            if (!this.configuracionPermisoAtributo.campoAgEl && this.configuracionPermisoAtributo.permisoAtributoConsulta instanceof PermisoAtributo)
                this.configuracionPermisoAtributo.rutaLista = this.crudServiceBaseUrl + "/getPermisoAtributosByDto";
            this.lista = this.configuracionPermisoAtributo.lecturaP(completar,this.configuracionPermisoAtributo.permisoAtributoConsulta);
            if (this.configuracionPermisoAtributo.campoAgEl) {
                this.rutaAgregar = this.configuracionPermisoAtributo.agregarP(function(){}, this.configuracionPermisoAtributo.campoAgEl);
                this.rutaEliminar = this.configuracionPermisoAtributo.eliminarP(function(){}, this.configuracionPermisoAtributo.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionPermisoAtributo.agregarP(completar, this.configuracionPermisoAtributo.permisoAtributoConsulta);
                this.rutaEliminar = this.configuracionPermisoAtributo.eliminarP(completar, this.configuracionPermisoAtributo.permisoAtributoConsulta);
            }
        } else {
            this.lista = this.configuracionPermisoAtributo.lectura();
            this.rutaAgregar = this.configuracionPermisoAtributo.agregar();
            this.rutaEliminar = this.configuracionPermisoAtributo.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"permisoAtributo", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"permisoAtributo", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "tabla")) {
            campos["tabla"] = { editable: this.globalesService.aenable(this,"permisoAtributo", "tabla"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "atributo")) {
            campos["atributo"] = { editable: this.globalesService.aenable(this,"permisoAtributo", "atributo"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "permiso")) {
            campos["permiso"] = { editable: this.globalesService.aenable(this,"permisoAtributo", "permiso"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"permisoAtributo", "status"), nullable: true , defaultValue: "1"  };
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "etiqueta")) {
            campos["etiqueta"] = { editable: this.globalesService.aenable(this,"permisoAtributo", "etiqueta"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "validacion")) {
            campos["validacion"] = { editable: this.globalesService.aenable(this,"permisoAtributo", "validacion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "mensaje")) {
            campos["mensaje"] = { editable: this.globalesService.aenable(this,"permisoAtributo", "mensaje"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "usuario")) {
            campos["usuario"] = { editable: this.globalesService.aenable(this,"permisoAtributo", "usuario"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"permisoAtributo", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionPermisoAtributo.rutaActualizar,
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
            if (self.configuracionPermisoAtributo.campoAgEl) {
                if (self.configuracionPermisoAtributo.tipocampoAgEl == "PermisoAtributoPermisoAtributo")
                    self.configuracionPermisoAtributo.campoAgEl.permisoAtributo2 = options.models[0];
                else
                    self.configuracionPermisoAtributo.campoAgEl.permisoAtributo = options.models[0];
                return JSON.stringify(self.configuracionPermisoAtributo.campoAgEl);
            }else
            if (est.options[operation].data.models.permisoAtributo) {
                est.options[operation].data.models.permisoAtributo2 = options.models[0];
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
        if (this.globalesService.avisible(this,"permisoAtributo", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"permisoAtributo", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "tabla")) {
            columnas.push({ field: "tabla", title: this.globalesService.aetiqueta(this,"permisoAtributo", "tabla") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "atributo")) {
            columnas.push({ field: "atributo", title: this.globalesService.aetiqueta(this,"permisoAtributo", "atributo") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "permiso")) {
            columnas.push({ field: "permiso", title: this.globalesService.aetiqueta(this,"permisoAtributo", "permiso")  });
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"permisoAtributo", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "etiqueta")) {
            columnas.push({ field: "etiqueta", title: this.globalesService.aetiqueta(this,"permisoAtributo", "etiqueta") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "validacion")) {
            columnas.push({ field: "validacion", title: this.globalesService.aetiqueta(this,"permisoAtributo", "validacion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "mensaje")) {
            columnas.push({ field: "mensaje", title: this.globalesService.aetiqueta(this,"permisoAtributo", "mensaje") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "usuario")) {
            columnas.push({ field: "usuario", title: this.globalesService.aetiqueta(this,"permisoAtributo", "usuario") , editor: usuarioDropDownEditor , template: " #if (usuario){#   #=usuario.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"permisoAtributo", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"permisoAtributo", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"permisoAtributo")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"permisoAtributo")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"permisoAtributo")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"permisoAtributo")  && this.configuracionPermisoAtributo.permisoAtributoConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_permisoAtributo_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_permisoAtributo_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionPermisoAtributo.altoComponente,
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
        this.grid = $("#grid_permisoAtributo_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutausuario = this.urlprovider.serverURL + "usuario/getUsuariosActivos";

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
        function usuarioDropDownEditor(container, options) {
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
                                url: rutausuario,
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
        //        this.grid = $("#grid_permisoAtributo_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.permisoAtributoSeleccionado = new PermisoAtributo();
        gridac.permisoAtributoSeleccionado.from(dataItem);
        gridac.evtPermisoAtributoSeleccionado.emit(gridac.permisoAtributoSeleccionado);
        (gridac.permisoAtributoSeleccionado);
    }


}
