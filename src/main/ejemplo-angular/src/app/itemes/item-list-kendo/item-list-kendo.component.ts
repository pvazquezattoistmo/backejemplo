import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { Item } from '../shared/item'
import { ConfigurarItem } from '../shared/configurar-item'
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
    selector: 'app-item-list-kendo',
    templateUrl: './item-list-kendo.component.html',
    styleUrls: ['./item-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class ItemListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public itemSeleccionado: Item = new Item();
    public dataSource: any;
    public grid: any;
    @Input() configuracionItem: ConfigurarItem = new ConfigurarItem();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("itemSeleccionado") evtItemSeleccionado: EventEmitter<Item> = new EventEmitter<Item>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "item";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'item'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'item'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionItem.titulo.indexOf("Catálogo")!= -1){
            this.configuracionItem.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionItem && changes.configuracionItem.currentValue &&
            (changes.configuracionItem.previousValue instanceof ConfigurarItem)) {
            if (changes.configuracionItem.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionItem.currentValue.permisosAtributos;
            if (changes.configuracionItem.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionItem.currentValue.permisosTabla;
            if ($("#grid_item_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_item_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionItem.permisosAtributos &&
            this.configuracionItem.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "item",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Item'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Item'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Item'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionItem.permisosAtributos)
            this.permisosAtributos=this.configuracionItem.permisosAtributos;
        if (this.configuracionItem.permisosTabla)
            this.permisosTabla=this.configuracionItem.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.item && permisos.item.PermisoAtributo&& permisos.item.PermisoAtributo.length>0
            && !obj.configuracionItem.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.item.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.Item.PermisoAtributo ;
        }
        if (permisos && permisos.item && permisos.item.PermisoTabla && permisos.item.PermisoTabla.length>0
            && !obj.configuracionItem.permisosTabla){
            obj.globalesService.evtTablas (permisos.item.PermisoTabla,obj);

//            obj.permisosTabla = permisos.Item.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_item_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionItem.campoAgEl != null
            && this.configuracionItem.itemConsulta
            && this.configuracionItem.itemConsulta.isOk
            && !this.configuracionItem.itemConsulta.isOk())
            return;
        if (this.configuracionItem.itemConsulta) {
            if (!this.configuracionItem.campoAgEl && this.configuracionItem.itemConsulta instanceof Item)
                this.configuracionItem.rutaLista = this.crudServiceBaseUrl + "/getItemesByDto";
            this.lista = this.configuracionItem.lecturaP(completar,this.configuracionItem.itemConsulta);
            if (this.configuracionItem.campoAgEl) {
                this.rutaAgregar = this.configuracionItem.agregarP(function(){}, this.configuracionItem.campoAgEl);
                this.rutaEliminar = this.configuracionItem.eliminarP(function(){}, this.configuracionItem.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionItem.agregarP(completar, this.configuracionItem.itemConsulta);
                this.rutaEliminar = this.configuracionItem.eliminarP(completar, this.configuracionItem.itemConsulta);
            }
        } else {
            this.lista = this.configuracionItem.lectura();
            this.rutaAgregar = this.configuracionItem.agregar();
            this.rutaEliminar = this.configuracionItem.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"item", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"item", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"item", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"item", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"item", "ruta")) {
            campos["ruta"] = { editable: this.globalesService.aenable(this,"item", "ruta"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"item", "principal")) {
            campos["principal"] = { editable: this.globalesService.aenable(this,"item", "principal"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"item", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"item", "status"), nullable: true , defaultValue: "1"  };
        }
        if (this.globalesService.avisible(this,"item", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"item", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionItem.rutaActualizar,
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
            if (self.configuracionItem.campoAgEl) {
                if (self.configuracionItem.tipocampoAgEl == "ItemItem")
                    self.configuracionItem.campoAgEl.item2 = options.models[0];
                else
                    self.configuracionItem.campoAgEl.item = options.models[0];
                return JSON.stringify(self.configuracionItem.campoAgEl);
            }else
            if (est.options[operation].data.models.item) {
                est.options[operation].data.models.item2 = options.models[0];
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
        if (this.globalesService.avisible(this,"item", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"item", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"item", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this,"item", "nombre") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"item", "ruta")) {
            columnas.push({ field: "ruta", title: this.globalesService.aetiqueta(this,"item", "ruta") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"item", "principal")) {
            columnas.push({ field: "principal", title: this.globalesService.aetiqueta(this,"item", "principal")  });
        }
        if (this.globalesService.avisible(this,"item", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"item", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this,"item", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"item", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"item")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"item")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"item")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"item")  && this.configuracionItem.itemConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_item_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_item_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionItem.altoComponente,
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
        this.grid = $("#grid_item_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_item_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.itemSeleccionado = new Item();
        gridac.itemSeleccionado.from(dataItem);
        gridac.evtItemSeleccionado.emit(gridac.itemSeleccionado);
        (gridac.itemSeleccionado);
    }


}
