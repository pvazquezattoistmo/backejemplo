import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { PermisoConjunto } from '../shared/permiso-conjunto'
import { ConfigurarPermisoConjunto } from '../shared/configurar-permiso-conjunto'
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
    selector: 'app-permiso-conjunto-list-kendo',
    templateUrl: './permiso-conjunto-list-kendo.component.html',
    styleUrls: ['./permiso-conjunto-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class PermisoConjuntoListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public permisoConjuntoSeleccionado: PermisoConjunto = new PermisoConjunto();
    public dataSource: any;
    public grid: any;
    @Input() configuracionPermisoConjunto: ConfigurarPermisoConjunto = new ConfigurarPermisoConjunto();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("permisoConjuntoSeleccionado") evtPermisoConjuntoSeleccionado: EventEmitter<PermisoConjunto> = new EventEmitter<PermisoConjunto>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "permisoConjunto";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoConjunto'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoConjunto'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionPermisoConjunto.titulo.indexOf("Catálogo")!= -1){
            this.configuracionPermisoConjunto.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionPermisoConjunto && changes.configuracionPermisoConjunto.currentValue &&
            (changes.configuracionPermisoConjunto.previousValue instanceof ConfigurarPermisoConjunto)) {
            if (changes.configuracionPermisoConjunto.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionPermisoConjunto.currentValue.permisosAtributos;
            if (changes.configuracionPermisoConjunto.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionPermisoConjunto.currentValue.permisosTabla;
            if ($("#grid_permisoConjunto_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_permisoConjunto_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionPermisoConjunto.permisosAtributos &&
            this.configuracionPermisoConjunto.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "permisoConjunto",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoConjunto'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoConjunto'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoConjunto'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionPermisoConjunto.permisosAtributos)
            this.permisosAtributos=this.configuracionPermisoConjunto.permisosAtributos;
        if (this.configuracionPermisoConjunto.permisosTabla)
            this.permisosTabla=this.configuracionPermisoConjunto.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoAtributo&& permisos.permisoConjunto.PermisoAtributo.length>0
            && !obj.configuracionPermisoConjunto.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.permisoConjunto.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.PermisoConjunto.PermisoAtributo ;
        }
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoTabla && permisos.permisoConjunto.PermisoTabla.length>0
            && !obj.configuracionPermisoConjunto.permisosTabla){
            obj.globalesService.evtTablas (permisos.permisoConjunto.PermisoTabla,obj);

//            obj.permisosTabla = permisos.PermisoConjunto.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_permisoConjunto_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionPermisoConjunto.campoAgEl != null
            && this.configuracionPermisoConjunto.permisoConjuntoConsulta
            && this.configuracionPermisoConjunto.permisoConjuntoConsulta.isOk
            && !this.configuracionPermisoConjunto.permisoConjuntoConsulta.isOk())
            return;
        if (this.configuracionPermisoConjunto.permisoConjuntoConsulta) {
            if (!this.configuracionPermisoConjunto.campoAgEl && this.configuracionPermisoConjunto.permisoConjuntoConsulta instanceof PermisoConjunto)
                this.configuracionPermisoConjunto.rutaLista = this.crudServiceBaseUrl + "/getPermisoConjuntosByDto";
            this.lista = this.configuracionPermisoConjunto.lecturaP(completar,this.configuracionPermisoConjunto.permisoConjuntoConsulta);
            if (this.configuracionPermisoConjunto.campoAgEl) {
                this.rutaAgregar = this.configuracionPermisoConjunto.agregarP(function(){}, this.configuracionPermisoConjunto.campoAgEl);
                this.rutaEliminar = this.configuracionPermisoConjunto.eliminarP(function(){}, this.configuracionPermisoConjunto.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionPermisoConjunto.agregarP(completar, this.configuracionPermisoConjunto.permisoConjuntoConsulta);
                this.rutaEliminar = this.configuracionPermisoConjunto.eliminarP(completar, this.configuracionPermisoConjunto.permisoConjuntoConsulta);
            }
        } else {
            this.lista = this.configuracionPermisoConjunto.lectura();
            this.rutaAgregar = this.configuracionPermisoConjunto.agregar();
            this.rutaEliminar = this.configuracionPermisoConjunto.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"permisoConjunto", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"permisoConjunto", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "tabla")) {
            campos["tabla"] = { editable: this.globalesService.aenable(this,"permisoConjunto", "tabla"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "conjunto")) {
            campos["conjunto"] = { editable: this.globalesService.aenable(this,"permisoConjunto", "conjunto"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "permiso")) {
            campos["permiso"] = { editable: this.globalesService.aenable(this,"permisoConjunto", "permiso"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"permisoConjunto", "status"), nullable: true , defaultValue: "1"  };
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "etiqueta")) {
            campos["etiqueta"] = { editable: this.globalesService.aenable(this,"permisoConjunto", "etiqueta"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "usuario")) {
            campos["usuario"] = { editable: this.globalesService.aenable(this,"permisoConjunto", "usuario"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"permisoConjunto", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionPermisoConjunto.rutaActualizar,
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
            if (self.configuracionPermisoConjunto.campoAgEl) {
                if (self.configuracionPermisoConjunto.tipocampoAgEl == "PermisoConjuntoPermisoConjunto")
                    self.configuracionPermisoConjunto.campoAgEl.permisoConjunto2 = options.models[0];
                else
                    self.configuracionPermisoConjunto.campoAgEl.permisoConjunto = options.models[0];
                return JSON.stringify(self.configuracionPermisoConjunto.campoAgEl);
            }else
            if (est.options[operation].data.models.permisoConjunto) {
                est.options[operation].data.models.permisoConjunto2 = options.models[0];
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
        if (this.globalesService.avisible(this,"permisoConjunto", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"permisoConjunto", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "tabla")) {
            columnas.push({ field: "tabla", title: this.globalesService.aetiqueta(this,"permisoConjunto", "tabla") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "conjunto")) {
            columnas.push({ field: "conjunto", title: this.globalesService.aetiqueta(this,"permisoConjunto", "conjunto") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "permiso")) {
            columnas.push({ field: "permiso", title: this.globalesService.aetiqueta(this,"permisoConjunto", "permiso")  });
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"permisoConjunto", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "etiqueta")) {
            columnas.push({ field: "etiqueta", title: this.globalesService.aetiqueta(this,"permisoConjunto", "etiqueta") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "usuario")) {
            columnas.push({ field: "usuario", title: this.globalesService.aetiqueta(this,"permisoConjunto", "usuario") , editor: usuarioDropDownEditor , template: " #if (usuario){#   #=usuario.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"permisoConjunto", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"permisoConjunto", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"permisoConjunto")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"permisoConjunto")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"permisoConjunto")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"permisoConjunto")  && this.configuracionPermisoConjunto.permisoConjuntoConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_permisoConjunto_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_permisoConjunto_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionPermisoConjunto.altoComponente,
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
        this.grid = $("#grid_permisoConjunto_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_permisoConjunto_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.permisoConjuntoSeleccionado = new PermisoConjunto();
        gridac.permisoConjuntoSeleccionado.from(dataItem);
        gridac.evtPermisoConjuntoSeleccionado.emit(gridac.permisoConjuntoSeleccionado);
        (gridac.permisoConjuntoSeleccionado);
    }


}
