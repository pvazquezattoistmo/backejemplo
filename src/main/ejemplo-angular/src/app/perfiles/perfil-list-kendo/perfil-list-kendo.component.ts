import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { Perfil } from '../shared/perfil'
import { ConfigurarPerfil } from '../shared/configurar-perfil'
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
    selector: 'app-perfil-list-kendo',
    templateUrl: './perfil-list-kendo.component.html',
    styleUrls: ['./perfil-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class PerfilListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public perfilSeleccionado: Perfil = new Perfil();
    public dataSource: any;
    public grid: any;
    @Input() configuracionPerfil: ConfigurarPerfil = new ConfigurarPerfil();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("perfilSeleccionado") evtPerfilSeleccionado: EventEmitter<Perfil> = new EventEmitter<Perfil>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "perfil";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'perfil'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'perfil'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionPerfil.titulo.indexOf("Catálogo")!= -1){
            this.configuracionPerfil.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionPerfil && changes.configuracionPerfil.currentValue &&
            (changes.configuracionPerfil.previousValue instanceof ConfigurarPerfil)) {
            if (changes.configuracionPerfil.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionPerfil.currentValue.permisosAtributos;
            if (changes.configuracionPerfil.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionPerfil.currentValue.permisosTabla;
            if ($("#grid_perfil_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_perfil_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionPerfil.permisosAtributos &&
            this.configuracionPerfil.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "perfil",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Perfil'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Perfil'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Perfil'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionPerfil.permisosAtributos)
            this.permisosAtributos=this.configuracionPerfil.permisosAtributos;
        if (this.configuracionPerfil.permisosTabla)
            this.permisosTabla=this.configuracionPerfil.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo&& permisos.perfil.PermisoAtributo.length>0
            && !obj.configuracionPerfil.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.perfil.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.Perfil.PermisoAtributo ;
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoTabla && permisos.perfil.PermisoTabla.length>0
            && !obj.configuracionPerfil.permisosTabla){
            obj.globalesService.evtTablas (permisos.perfil.PermisoTabla,obj);

//            obj.permisosTabla = permisos.Perfil.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_perfil_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionPerfil.campoAgEl != null
            && this.configuracionPerfil.perfilConsulta
            && this.configuracionPerfil.perfilConsulta.isOk
            && !this.configuracionPerfil.perfilConsulta.isOk())
            return;
        if (this.configuracionPerfil.perfilConsulta) {
            if (!this.configuracionPerfil.campoAgEl && this.configuracionPerfil.perfilConsulta instanceof Perfil)
                this.configuracionPerfil.rutaLista = this.crudServiceBaseUrl + "/getPerfilesByDto";
            this.lista = this.configuracionPerfil.lecturaP(completar,this.configuracionPerfil.perfilConsulta);
            if (this.configuracionPerfil.campoAgEl) {
                this.rutaAgregar = this.configuracionPerfil.agregarP(function(){}, this.configuracionPerfil.campoAgEl);
                this.rutaEliminar = this.configuracionPerfil.eliminarP(function(){}, this.configuracionPerfil.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionPerfil.agregarP(completar, this.configuracionPerfil.perfilConsulta);
                this.rutaEliminar = this.configuracionPerfil.eliminarP(completar, this.configuracionPerfil.perfilConsulta);
            }
        } else {
            this.lista = this.configuracionPerfil.lectura();
            this.rutaAgregar = this.configuracionPerfil.agregar();
            this.rutaEliminar = this.configuracionPerfil.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"perfil", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"perfil", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"perfil", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"perfil", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"perfil", "descripcion")) {
            campos["descripcion"] = { editable: this.globalesService.aenable(this,"perfil", "descripcion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"perfil", "ruta")) {
            campos["ruta"] = { editable: this.globalesService.aenable(this,"perfil", "ruta"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"perfil", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"perfil", "status"), nullable: true , defaultValue: "1"  };
        }
        if (this.globalesService.avisible(this,"perfil", "usuario")) {
            campos["usuario"] = { editable: this.globalesService.aenable(this,"perfil", "usuario"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"perfil", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"perfil", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionPerfil.rutaActualizar,
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
            if (self.configuracionPerfil.campoAgEl) {
                if (self.configuracionPerfil.tipocampoAgEl == "PerfilPerfil")
                    self.configuracionPerfil.campoAgEl.perfil2 = options.models[0];
                else
                    self.configuracionPerfil.campoAgEl.perfil = options.models[0];
                return JSON.stringify(self.configuracionPerfil.campoAgEl);
            }else
            if (est.options[operation].data.models.perfil) {
                est.options[operation].data.models.perfil2 = options.models[0];
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
        if (this.globalesService.avisible(this,"perfil", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"perfil", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"perfil", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this,"perfil", "nombre") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"perfil", "descripcion")) {
            columnas.push({ field: "descripcion", title: this.globalesService.aetiqueta(this,"perfil", "descripcion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"perfil", "ruta")) {
            columnas.push({ field: "ruta", title: this.globalesService.aetiqueta(this,"perfil", "ruta") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"perfil", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"perfil", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this,"perfil", "usuario")) {
            columnas.push({ field: "usuario", title: this.globalesService.aetiqueta(this,"perfil", "usuario") , editor: usuarioDropDownEditor , template: " #if (usuario){#   #=usuario.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"perfil", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"perfil", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"perfil")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"perfil")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"perfil")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"perfil")  && this.configuracionPerfil.perfilConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_perfil_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_perfil_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionPerfil.altoComponente,
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
        this.grid = $("#grid_perfil_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_perfil_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.perfilSeleccionado = new Perfil();
        gridac.perfilSeleccionado.from(dataItem);
        gridac.evtPerfilSeleccionado.emit(gridac.perfilSeleccionado);
        (gridac.perfilSeleccionado);
    }


}
