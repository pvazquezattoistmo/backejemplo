import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { AlmacenTejido } from '../shared/almacen-tejido'
import { ConfigurarAlmacenTejido } from '../shared/configurar-almacen-tejido'
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
    selector: 'app-almacen-tejido-list-kendo',
    templateUrl: './almacen-tejido-list-kendo.component.html',
    styleUrls: ['./almacen-tejido-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class AlmacenTejidoListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public almacenTejidoSeleccionado: AlmacenTejido = new AlmacenTejido();
    public dataSource: any;
    public grid: any;
    @Input() configuracionAlmacenTejido: ConfigurarAlmacenTejido = new ConfigurarAlmacenTejido();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("almacenTejidoSeleccionado") evtAlmacenTejidoSeleccionado: EventEmitter<AlmacenTejido> = new EventEmitter<AlmacenTejido>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "almacenTejido";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'almacenTejido'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'almacenTejido'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionAlmacenTejido.titulo.indexOf("Catálogo")!= -1){
            this.configuracionAlmacenTejido.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionAlmacenTejido && changes.configuracionAlmacenTejido.currentValue &&
            (changes.configuracionAlmacenTejido.previousValue instanceof ConfigurarAlmacenTejido)) {
            if (changes.configuracionAlmacenTejido.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionAlmacenTejido.currentValue.permisosAtributos;
            if (changes.configuracionAlmacenTejido.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionAlmacenTejido.currentValue.permisosTabla;
            if ($("#grid_almacenTejido_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_almacenTejido_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionAlmacenTejido.permisosAtributos &&
            this.configuracionAlmacenTejido.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "almacenTejido",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'AlmacenTejido'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'AlmacenTejido'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'AlmacenTejido'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionAlmacenTejido.permisosAtributos)
            this.permisosAtributos=this.configuracionAlmacenTejido.permisosAtributos;
        if (this.configuracionAlmacenTejido.permisosTabla)
            this.permisosTabla=this.configuracionAlmacenTejido.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoAtributo&& permisos.almacenTejido.PermisoAtributo.length>0
            && !obj.configuracionAlmacenTejido.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.almacenTejido.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.AlmacenTejido.PermisoAtributo ;
        }
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoTabla && permisos.almacenTejido.PermisoTabla.length>0
            && !obj.configuracionAlmacenTejido.permisosTabla){
            obj.globalesService.evtTablas (permisos.almacenTejido.PermisoTabla,obj);

//            obj.permisosTabla = permisos.AlmacenTejido.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_almacenTejido_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionAlmacenTejido.campoAgEl != null
            && this.configuracionAlmacenTejido.almacenTejidoConsulta
            && this.configuracionAlmacenTejido.almacenTejidoConsulta.isOk
            && !this.configuracionAlmacenTejido.almacenTejidoConsulta.isOk())
            return;
        if (this.configuracionAlmacenTejido.almacenTejidoConsulta) {
            if (!this.configuracionAlmacenTejido.campoAgEl && this.configuracionAlmacenTejido.almacenTejidoConsulta instanceof AlmacenTejido)
                this.configuracionAlmacenTejido.rutaLista = this.crudServiceBaseUrl + "/getAlmacenTejidosByDto";
            this.lista = this.configuracionAlmacenTejido.lecturaP(completar,this.configuracionAlmacenTejido.almacenTejidoConsulta);
            if (this.configuracionAlmacenTejido.campoAgEl) {
                this.rutaAgregar = this.configuracionAlmacenTejido.agregarP(function(){}, this.configuracionAlmacenTejido.campoAgEl);
                this.rutaEliminar = this.configuracionAlmacenTejido.eliminarP(function(){}, this.configuracionAlmacenTejido.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionAlmacenTejido.agregarP(completar, this.configuracionAlmacenTejido.almacenTejidoConsulta);
                this.rutaEliminar = this.configuracionAlmacenTejido.eliminarP(completar, this.configuracionAlmacenTejido.almacenTejidoConsulta);
            }
        } else {
            this.lista = this.configuracionAlmacenTejido.lectura();
            this.rutaAgregar = this.configuracionAlmacenTejido.agregar();
            this.rutaEliminar = this.configuracionAlmacenTejido.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"almacenTejido", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"almacenTejido", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "idoficioDonacion")) {
            campos["idoficioDonacion"] = { editable: this.globalesService.aenable(this,"almacenTejido", "idoficioDonacion"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "ubicacion")) {
            campos["ubicacion"] = { editable: this.globalesService.aenable(this,"almacenTejido", "ubicacion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "temperaturaRefrigeracion")) {
            campos["temperaturaRefrigeracion"] = { editable: this.globalesService.aenable(this,"almacenTejido", "temperaturaRefrigeracion"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "horaRefrigeracion")) {
            campos["horaRefrigeracion"] = { editable: this.globalesService.aenable(this,"almacenTejido", "horaRefrigeracion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "comentario")) {
            campos["comentario"] = { editable: this.globalesService.aenable(this,"almacenTejido", "comentario"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"almacenTejido", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"almacenTejido", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"almacenTejido", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this,"almacenTejido", "estatusProceso"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"almacenTejido", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"almacenTejido", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"almacenTejido", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionAlmacenTejido.rutaActualizar,
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
                        if (elem.horaRefrigeracion && typeof elem.horaRefrigeracion === "number") {
                            elem.horaRefrigeracion = kendo.parseDate(new Date(elem.horaRefrigeracion), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionAlmacenTejido.campoAgEl) {
                if (self.configuracionAlmacenTejido.tipocampoAgEl == "AlmacenTejidoAlmacenTejido")
                    self.configuracionAlmacenTejido.campoAgEl.almacenTejido2 = options.models[0];
                else
                    self.configuracionAlmacenTejido.campoAgEl.almacenTejido = options.models[0];
                return JSON.stringify(self.configuracionAlmacenTejido.campoAgEl);
            }else
            if (est.options[operation].data.models.almacenTejido) {
                est.options[operation].data.models.almacenTejido2 = options.models[0];
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
        if (this.globalesService.avisible(this,"almacenTejido", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"almacenTejido", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "idoficioDonacion")) {
            columnas.push({ field: "idoficioDonacion", title: this.globalesService.aetiqueta(this,"almacenTejido", "idoficioDonacion") , editor: idoficioDonacionDropDownEditor , template: " #if (idoficioDonacion){#   #=idoficioDonacion.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "ubicacion")) {
            columnas.push({ field: "ubicacion", title: this.globalesService.aetiqueta(this,"almacenTejido", "ubicacion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "temperaturaRefrigeracion")) {
            columnas.push({ field: "temperaturaRefrigeracion", title: this.globalesService.aetiqueta(this,"almacenTejido", "temperaturaRefrigeracion")  });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "horaRefrigeracion")) {
            columnas.push({ field: "horaRefrigeracion", title: this.globalesService.aetiqueta(this,"almacenTejido", "horaRefrigeracion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "comentario")) {
            columnas.push({ field: "comentario", title: this.globalesService.aetiqueta(this,"almacenTejido", "comentario") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"almacenTejido", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"almacenTejido", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"almacenTejido", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this,"almacenTejido", "estatusProceso")  });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"almacenTejido", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"almacenTejido", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"almacenTejido", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"almacenTejido")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"almacenTejido")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"almacenTejido")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"almacenTejido")  && this.configuracionAlmacenTejido.almacenTejidoConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_almacenTejido_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_almacenTejido_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionAlmacenTejido.altoComponente,
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
        this.grid = $("#grid_almacenTejido_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_almacenTejido_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.almacenTejidoSeleccionado = new AlmacenTejido();
        gridac.almacenTejidoSeleccionado.from(dataItem);
        gridac.evtAlmacenTejidoSeleccionado.emit(gridac.almacenTejidoSeleccionado);
        (gridac.almacenTejidoSeleccionado);
    }


}
