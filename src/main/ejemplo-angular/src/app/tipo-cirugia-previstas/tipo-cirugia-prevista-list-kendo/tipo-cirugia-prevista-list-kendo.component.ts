import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { TipoCirugiaPrevista } from '../shared/tipo-cirugia-prevista'
import { ConfigurarTipoCirugiaPrevista } from '../shared/configurar-tipo-cirugia-prevista'
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
    selector: 'app-tipo-cirugia-prevista-list-kendo',
    templateUrl: './tipo-cirugia-prevista-list-kendo.component.html',
    styleUrls: ['./tipo-cirugia-prevista-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class TipoCirugiaPrevistaListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public tipoCirugiaPrevistaSeleccionado: TipoCirugiaPrevista = new TipoCirugiaPrevista();
    public dataSource: any;
    public grid: any;
    @Input() configuracionTipoCirugiaPrevista: ConfigurarTipoCirugiaPrevista = new ConfigurarTipoCirugiaPrevista();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("tipoCirugiaPrevistaSeleccionado") evtTipoCirugiaPrevistaSeleccionado: EventEmitter<TipoCirugiaPrevista> = new EventEmitter<TipoCirugiaPrevista>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "tipoCirugiaPrevista";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'tipoCirugiaPrevista'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'tipoCirugiaPrevista'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionTipoCirugiaPrevista.titulo.indexOf("Catálogo")!= -1){
            this.configuracionTipoCirugiaPrevista.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionTipoCirugiaPrevista && changes.configuracionTipoCirugiaPrevista.currentValue &&
            (changes.configuracionTipoCirugiaPrevista.previousValue instanceof ConfigurarTipoCirugiaPrevista)) {
            if (changes.configuracionTipoCirugiaPrevista.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionTipoCirugiaPrevista.currentValue.permisosAtributos;
            if (changes.configuracionTipoCirugiaPrevista.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionTipoCirugiaPrevista.currentValue.permisosTabla;
            if ($("#grid_tipoCirugiaPrevista_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_tipoCirugiaPrevista_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionTipoCirugiaPrevista.permisosAtributos &&
            this.configuracionTipoCirugiaPrevista.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "tipoCirugiaPrevista",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'TipoCirugiaPrevista'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'TipoCirugiaPrevista'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'TipoCirugiaPrevista'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionTipoCirugiaPrevista.permisosAtributos)
            this.permisosAtributos=this.configuracionTipoCirugiaPrevista.permisosAtributos;
        if (this.configuracionTipoCirugiaPrevista.permisosTabla)
            this.permisosTabla=this.configuracionTipoCirugiaPrevista.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.tipoCirugiaPrevista && permisos.tipoCirugiaPrevista.PermisoAtributo&& permisos.tipoCirugiaPrevista.PermisoAtributo.length>0
            && !obj.configuracionTipoCirugiaPrevista.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.tipoCirugiaPrevista.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.TipoCirugiaPrevista.PermisoAtributo ;
        }
        if (permisos && permisos.tipoCirugiaPrevista && permisos.tipoCirugiaPrevista.PermisoTabla && permisos.tipoCirugiaPrevista.PermisoTabla.length>0
            && !obj.configuracionTipoCirugiaPrevista.permisosTabla){
            obj.globalesService.evtTablas (permisos.tipoCirugiaPrevista.PermisoTabla,obj);

//            obj.permisosTabla = permisos.TipoCirugiaPrevista.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_tipoCirugiaPrevista_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionTipoCirugiaPrevista.campoAgEl != null
            && this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta
            && this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta.isOk
            && !this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta.isOk())
            return;
        if (this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta) {
            if (!this.configuracionTipoCirugiaPrevista.campoAgEl && this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta instanceof TipoCirugiaPrevista)
                this.configuracionTipoCirugiaPrevista.rutaLista = this.crudServiceBaseUrl + "/getTipoCirugiaPrevistasByDto";
            this.lista = this.configuracionTipoCirugiaPrevista.lecturaP(completar,this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta);
            if (this.configuracionTipoCirugiaPrevista.campoAgEl) {
                this.rutaAgregar = this.configuracionTipoCirugiaPrevista.agregarP(function(){}, this.configuracionTipoCirugiaPrevista.campoAgEl);
                this.rutaEliminar = this.configuracionTipoCirugiaPrevista.eliminarP(function(){}, this.configuracionTipoCirugiaPrevista.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionTipoCirugiaPrevista.agregarP(completar, this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta);
                this.rutaEliminar = this.configuracionTipoCirugiaPrevista.eliminarP(completar, this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta);
            }
        } else {
            this.lista = this.configuracionTipoCirugiaPrevista.lectura();
            this.rutaAgregar = this.configuracionTipoCirugiaPrevista.agregar();
            this.rutaEliminar = this.configuracionTipoCirugiaPrevista.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "idsolicitudTejidoCorneal")) {
            campos["idsolicitudTejidoCorneal"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "idsolicitudTejidoCorneal"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "qp")) {
            campos["qp"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "qp"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "dsaek")) {
            campos["dsaek"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "dsaek"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "dalk")) {
            campos["dalk"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "dalk"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "dmek")) {
            campos["dmek"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "dmek"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "otra")) {
            campos["otra"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "otra"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"tipoCirugiaPrevista", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionTipoCirugiaPrevista.rutaActualizar,
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
            if (self.configuracionTipoCirugiaPrevista.campoAgEl) {
                if (self.configuracionTipoCirugiaPrevista.tipocampoAgEl == "TipoCirugiaPrevistaTipoCirugiaPrevista")
                    self.configuracionTipoCirugiaPrevista.campoAgEl.tipoCirugiaPrevista2 = options.models[0];
                else
                    self.configuracionTipoCirugiaPrevista.campoAgEl.tipoCirugiaPrevista = options.models[0];
                return JSON.stringify(self.configuracionTipoCirugiaPrevista.campoAgEl);
            }else
            if (est.options[operation].data.models.tipoCirugiaPrevista) {
                est.options[operation].data.models.tipoCirugiaPrevista2 = options.models[0];
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
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "idsolicitudTejidoCorneal")) {
            columnas.push({ field: "idsolicitudTejidoCorneal", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "idsolicitudTejidoCorneal") , editor: idsolicitudTejidoCornealDropDownEditor , template: " #if (idsolicitudTejidoCorneal){#   #=idsolicitudTejidoCorneal.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "qp")) {
            columnas.push({ field: "qp", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "qp")  });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "dsaek")) {
            columnas.push({ field: "dsaek", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "dsaek")  });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "dalk")) {
            columnas.push({ field: "dalk", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "dalk")  });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "dmek")) {
            columnas.push({ field: "dmek", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "dmek")  });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "otra")) {
            columnas.push({ field: "otra", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "otra") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"tipoCirugiaPrevista", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"tipoCirugiaPrevista", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"tipoCirugiaPrevista")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"tipoCirugiaPrevista")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"tipoCirugiaPrevista")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"tipoCirugiaPrevista")  && this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_tipoCirugiaPrevista_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_tipoCirugiaPrevista_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionTipoCirugiaPrevista.altoComponente,
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
        this.grid = $("#grid_tipoCirugiaPrevista_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudTejidoCorneal = this.urlprovider.serverURL + "solicitudTejidoCorneal/getSolicitudTejidoCornealesActivos";

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
        function idsolicitudTejidoCornealDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "folioSolicitudTejidoCorneal",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidsolicitudTejidoCorneal,
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
        //        this.grid = $("#grid_tipoCirugiaPrevista_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.tipoCirugiaPrevistaSeleccionado = new TipoCirugiaPrevista();
        gridac.tipoCirugiaPrevistaSeleccionado.from(dataItem);
        gridac.evtTipoCirugiaPrevistaSeleccionado.emit(gridac.tipoCirugiaPrevistaSeleccionado);
        (gridac.tipoCirugiaPrevistaSeleccionado);
    }


}
