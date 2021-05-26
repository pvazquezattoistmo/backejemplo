import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { PerfilRedIssste } from '../shared/perfil-red-issste'
import { ConfigurarPerfilRedIssste } from '../shared/configurar-perfil-red-issste'
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
    selector: 'app-perfil-red-issste-list-kendo',
    templateUrl: './perfil-red-issste-list-kendo.component.html',
    styleUrls: ['./perfil-red-issste-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class PerfilRedIsssteListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public perfilRedIsssteSeleccionado: PerfilRedIssste = new PerfilRedIssste();
    public dataSource: any;
    public grid: any;
    @Input() configuracionPerfilRedIssste: ConfigurarPerfilRedIssste = new ConfigurarPerfilRedIssste();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("perfilRedIsssteSeleccionado") evtPerfilRedIsssteSeleccionado: EventEmitter<PerfilRedIssste> = new EventEmitter<PerfilRedIssste>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "perfilRedIssste";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'perfilRedIssste'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'perfilRedIssste'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionPerfilRedIssste.titulo.indexOf("Catálogo")!= -1){
            this.configuracionPerfilRedIssste.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionPerfilRedIssste && changes.configuracionPerfilRedIssste.currentValue &&
            (changes.configuracionPerfilRedIssste.previousValue instanceof ConfigurarPerfilRedIssste)) {
            if (changes.configuracionPerfilRedIssste.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionPerfilRedIssste.currentValue.permisosAtributos;
            if (changes.configuracionPerfilRedIssste.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionPerfilRedIssste.currentValue.permisosTabla;
            if ($("#grid_perfilRedIssste_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_perfilRedIssste_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionPerfilRedIssste.permisosAtributos &&
            this.configuracionPerfilRedIssste.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "perfilRedIssste",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PerfilRedIssste'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PerfilRedIssste'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PerfilRedIssste'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionPerfilRedIssste.permisosAtributos)
            this.permisosAtributos=this.configuracionPerfilRedIssste.permisosAtributos;
        if (this.configuracionPerfilRedIssste.permisosTabla)
            this.permisosTabla=this.configuracionPerfilRedIssste.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.perfilRedIssste && permisos.perfilRedIssste.PermisoAtributo&& permisos.perfilRedIssste.PermisoAtributo.length>0
            && !obj.configuracionPerfilRedIssste.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.perfilRedIssste.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.PerfilRedIssste.PermisoAtributo ;
        }
        if (permisos && permisos.perfilRedIssste && permisos.perfilRedIssste.PermisoTabla && permisos.perfilRedIssste.PermisoTabla.length>0
            && !obj.configuracionPerfilRedIssste.permisosTabla){
            obj.globalesService.evtTablas (permisos.perfilRedIssste.PermisoTabla,obj);

//            obj.permisosTabla = permisos.PerfilRedIssste.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_perfilRedIssste_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionPerfilRedIssste.campoAgEl != null
            && this.configuracionPerfilRedIssste.perfilRedIsssteConsulta
            && this.configuracionPerfilRedIssste.perfilRedIsssteConsulta.isOk
            && !this.configuracionPerfilRedIssste.perfilRedIsssteConsulta.isOk())
            return;
        if (this.configuracionPerfilRedIssste.perfilRedIsssteConsulta) {
            if (!this.configuracionPerfilRedIssste.campoAgEl && this.configuracionPerfilRedIssste.perfilRedIsssteConsulta instanceof PerfilRedIssste)
                this.configuracionPerfilRedIssste.rutaLista = this.crudServiceBaseUrl + "/getPerfilRedIssstesByDto";
            this.lista = this.configuracionPerfilRedIssste.lecturaP(completar,this.configuracionPerfilRedIssste.perfilRedIsssteConsulta);
            if (this.configuracionPerfilRedIssste.campoAgEl) {
                this.rutaAgregar = this.configuracionPerfilRedIssste.agregarP(function(){}, this.configuracionPerfilRedIssste.campoAgEl);
                this.rutaEliminar = this.configuracionPerfilRedIssste.eliminarP(function(){}, this.configuracionPerfilRedIssste.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionPerfilRedIssste.agregarP(completar, this.configuracionPerfilRedIssste.perfilRedIsssteConsulta);
                this.rutaEliminar = this.configuracionPerfilRedIssste.eliminarP(completar, this.configuracionPerfilRedIssste.perfilRedIsssteConsulta);
            }
        } else {
            this.lista = this.configuracionPerfilRedIssste.lectura();
            this.rutaAgregar = this.configuracionPerfilRedIssste.agregar();
            this.rutaEliminar = this.configuracionPerfilRedIssste.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"perfilRedIssste", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"perfilRedIssste", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"perfilRedIssste", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "tipoPerfil")) {
            campos["tipoPerfil"] = { editable: this.globalesService.aenable(this,"perfilRedIssste", "tipoPerfil"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"perfilRedIssste", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"perfilRedIssste", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"perfilRedIssste", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"perfilRedIssste", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"perfilRedIssste", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionPerfilRedIssste.rutaActualizar,
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
            if (self.configuracionPerfilRedIssste.campoAgEl) {
                if (self.configuracionPerfilRedIssste.tipocampoAgEl == "PerfilRedIssstePerfilRedIssste")
                    self.configuracionPerfilRedIssste.campoAgEl.perfilRedIssste2 = options.models[0];
                else
                    self.configuracionPerfilRedIssste.campoAgEl.perfilRedIssste = options.models[0];
                return JSON.stringify(self.configuracionPerfilRedIssste.campoAgEl);
            }else
            if (est.options[operation].data.models.perfilRedIssste) {
                est.options[operation].data.models.perfilRedIssste2 = options.models[0];
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
        if (this.globalesService.avisible(this,"perfilRedIssste", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"perfilRedIssste", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this,"perfilRedIssste", "nombre") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "tipoPerfil")) {
            columnas.push({ field: "tipoPerfil", title: this.globalesService.aetiqueta(this,"perfilRedIssste", "tipoPerfil")  });
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"perfilRedIssste", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"perfilRedIssste", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"perfilRedIssste", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"perfilRedIssste", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"perfilRedIssste", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"perfilRedIssste", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"perfilRedIssste")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"perfilRedIssste")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"perfilRedIssste")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"perfilRedIssste")  && this.configuracionPerfilRedIssste.perfilRedIsssteConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_perfilRedIssste_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_perfilRedIssste_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionPerfilRedIssste.altoComponente,
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
        this.grid = $("#grid_perfilRedIssste_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_perfilRedIssste_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.perfilRedIsssteSeleccionado = new PerfilRedIssste();
        gridac.perfilRedIsssteSeleccionado.from(dataItem);
        gridac.evtPerfilRedIsssteSeleccionado.emit(gridac.perfilRedIsssteSeleccionado);
        (gridac.perfilRedIsssteSeleccionado);
    }


}
