import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { PermisoTabla } from '../shared/permiso-tabla'
import { ConfigurarPermisoTabla } from '../shared/configurar-permiso-tabla'
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
    selector: 'app-permiso-tabla-list-kendo',
    templateUrl: './permiso-tabla-list-kendo.component.html',
    styleUrls: ['./permiso-tabla-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class PermisoTablaListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public permisoTablaSeleccionado: PermisoTabla = new PermisoTabla();
    public dataSource: any;
    public grid: any;
    @Input() configuracionPermisoTabla: ConfigurarPermisoTabla = new ConfigurarPermisoTabla();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("permisoTablaSeleccionado") evtPermisoTablaSeleccionado: EventEmitter<PermisoTabla> = new EventEmitter<PermisoTabla>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "permisoTabla";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoTabla'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoTabla'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionPermisoTabla.titulo.indexOf("Catálogo")!= -1){
            this.configuracionPermisoTabla.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionPermisoTabla && changes.configuracionPermisoTabla.currentValue &&
            (changes.configuracionPermisoTabla.previousValue instanceof ConfigurarPermisoTabla)) {
            if (changes.configuracionPermisoTabla.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionPermisoTabla.currentValue.permisosAtributos;
            if (changes.configuracionPermisoTabla.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionPermisoTabla.currentValue.permisosTabla;
            if ($("#grid_permisoTabla_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_permisoTabla_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionPermisoTabla.permisosAtributos &&
            this.configuracionPermisoTabla.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "permisoTabla",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoTabla'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoTabla'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoTabla'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionPermisoTabla.permisosAtributos)
            this.permisosAtributos=this.configuracionPermisoTabla.permisosAtributos;
        if (this.configuracionPermisoTabla.permisosTabla)
            this.permisosTabla=this.configuracionPermisoTabla.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoAtributo&& permisos.permisoTabla.PermisoAtributo.length>0
            && !obj.configuracionPermisoTabla.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.permisoTabla.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.PermisoTabla.PermisoAtributo ;
        }
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoTabla && permisos.permisoTabla.PermisoTabla.length>0
            && !obj.configuracionPermisoTabla.permisosTabla){
            obj.globalesService.evtTablas (permisos.permisoTabla.PermisoTabla,obj);

//            obj.permisosTabla = permisos.PermisoTabla.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_permisoTabla_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionPermisoTabla.campoAgEl != null
            && this.configuracionPermisoTabla.permisoTablaConsulta
            && this.configuracionPermisoTabla.permisoTablaConsulta.isOk
            && !this.configuracionPermisoTabla.permisoTablaConsulta.isOk())
            return;
        if (this.configuracionPermisoTabla.permisoTablaConsulta) {
            if (!this.configuracionPermisoTabla.campoAgEl && this.configuracionPermisoTabla.permisoTablaConsulta instanceof PermisoTabla)
                this.configuracionPermisoTabla.rutaLista = this.crudServiceBaseUrl + "/getPermisoTablasByDto";
            this.lista = this.configuracionPermisoTabla.lecturaP(completar,this.configuracionPermisoTabla.permisoTablaConsulta);
            if (this.configuracionPermisoTabla.campoAgEl) {
                this.rutaAgregar = this.configuracionPermisoTabla.agregarP(function(){}, this.configuracionPermisoTabla.campoAgEl);
                this.rutaEliminar = this.configuracionPermisoTabla.eliminarP(function(){}, this.configuracionPermisoTabla.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionPermisoTabla.agregarP(completar, this.configuracionPermisoTabla.permisoTablaConsulta);
                this.rutaEliminar = this.configuracionPermisoTabla.eliminarP(completar, this.configuracionPermisoTabla.permisoTablaConsulta);
            }
        } else {
            this.lista = this.configuracionPermisoTabla.lectura();
            this.rutaAgregar = this.configuracionPermisoTabla.agregar();
            this.rutaEliminar = this.configuracionPermisoTabla.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"permisoTabla", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"permisoTabla", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"permisoTabla", "tabla")) {
            campos["tabla"] = { editable: this.globalesService.aenable(this,"permisoTabla", "tabla"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoTabla", "permiso")) {
            campos["permiso"] = { editable: this.globalesService.aenable(this,"permisoTabla", "permiso"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"permisoTabla", "etiqueta")) {
            campos["etiqueta"] = { editable: this.globalesService.aenable(this,"permisoTabla", "etiqueta"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"permisoTabla", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"permisoTabla", "status"), nullable: true , defaultValue: "1"  };
        }
        if (this.globalesService.avisible(this,"permisoTabla", "usuario")) {
            campos["usuario"] = { editable: this.globalesService.aenable(this,"permisoTabla", "usuario"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"permisoTabla", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"permisoTabla", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionPermisoTabla.rutaActualizar,
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
            if (self.configuracionPermisoTabla.campoAgEl) {
                if (self.configuracionPermisoTabla.tipocampoAgEl == "PermisoTablaPermisoTabla")
                    self.configuracionPermisoTabla.campoAgEl.permisoTabla2 = options.models[0];
                else
                    self.configuracionPermisoTabla.campoAgEl.permisoTabla = options.models[0];
                return JSON.stringify(self.configuracionPermisoTabla.campoAgEl);
            }else
            if (est.options[operation].data.models.permisoTabla) {
                est.options[operation].data.models.permisoTabla2 = options.models[0];
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
        if (this.globalesService.avisible(this,"permisoTabla", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"permisoTabla", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"permisoTabla", "tabla")) {
            columnas.push({ field: "tabla", title: this.globalesService.aetiqueta(this,"permisoTabla", "tabla") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoTabla", "permiso")) {
            columnas.push({ field: "permiso", title: this.globalesService.aetiqueta(this,"permisoTabla", "permiso")  });
        }
        if (this.globalesService.avisible(this,"permisoTabla", "etiqueta")) {
            columnas.push({ field: "etiqueta", title: this.globalesService.aetiqueta(this,"permisoTabla", "etiqueta") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"permisoTabla", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"permisoTabla", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this,"permisoTabla", "usuario")) {
            columnas.push({ field: "usuario", title: this.globalesService.aetiqueta(this,"permisoTabla", "usuario") , editor: usuarioDropDownEditor , template: " #if (usuario){#   #=usuario.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"permisoTabla", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"permisoTabla", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"permisoTabla")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"permisoTabla")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"permisoTabla")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"permisoTabla")  && this.configuracionPermisoTabla.permisoTablaConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_permisoTabla_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_permisoTabla_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionPermisoTabla.altoComponente,
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
        this.grid = $("#grid_permisoTabla_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_permisoTabla_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.permisoTablaSeleccionado = new PermisoTabla();
        gridac.permisoTablaSeleccionado.from(dataItem);
        gridac.evtPermisoTablaSeleccionado.emit(gridac.permisoTablaSeleccionado);
        (gridac.permisoTablaSeleccionado);
    }


}
