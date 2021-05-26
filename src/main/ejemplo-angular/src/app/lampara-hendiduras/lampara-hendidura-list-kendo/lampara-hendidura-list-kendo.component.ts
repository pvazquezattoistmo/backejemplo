import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { LamparaHendidura } from '../shared/lampara-hendidura'
import { ConfigurarLamparaHendidura } from '../shared/configurar-lampara-hendidura'
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
    selector: 'app-lampara-hendidura-list-kendo',
    templateUrl: './lampara-hendidura-list-kendo.component.html',
    styleUrls: ['./lampara-hendidura-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class LamparaHendiduraListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public lamparaHendiduraSeleccionado: LamparaHendidura = new LamparaHendidura();
    public dataSource: any;
    public grid: any;
    @Input() configuracionLamparaHendidura: ConfigurarLamparaHendidura = new ConfigurarLamparaHendidura();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("lamparaHendiduraSeleccionado") evtLamparaHendiduraSeleccionado: EventEmitter<LamparaHendidura> = new EventEmitter<LamparaHendidura>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "lamparaHendidura";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'lamparaHendidura'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'lamparaHendidura'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionLamparaHendidura.titulo.indexOf("Catálogo")!= -1){
            this.configuracionLamparaHendidura.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionLamparaHendidura && changes.configuracionLamparaHendidura.currentValue &&
            (changes.configuracionLamparaHendidura.previousValue instanceof ConfigurarLamparaHendidura)) {
            if (changes.configuracionLamparaHendidura.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionLamparaHendidura.currentValue.permisosAtributos;
            if (changes.configuracionLamparaHendidura.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionLamparaHendidura.currentValue.permisosTabla;
            if ($("#grid_lamparaHendidura_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_lamparaHendidura_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionLamparaHendidura.permisosAtributos &&
            this.configuracionLamparaHendidura.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "lamparaHendidura",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'LamparaHendidura'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'LamparaHendidura'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'LamparaHendidura'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionLamparaHendidura.permisosAtributos)
            this.permisosAtributos=this.configuracionLamparaHendidura.permisosAtributos;
        if (this.configuracionLamparaHendidura.permisosTabla)
            this.permisosTabla=this.configuracionLamparaHendidura.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoAtributo&& permisos.lamparaHendidura.PermisoAtributo.length>0
            && !obj.configuracionLamparaHendidura.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.lamparaHendidura.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.LamparaHendidura.PermisoAtributo ;
        }
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoTabla && permisos.lamparaHendidura.PermisoTabla.length>0
            && !obj.configuracionLamparaHendidura.permisosTabla){
            obj.globalesService.evtTablas (permisos.lamparaHendidura.PermisoTabla,obj);

//            obj.permisosTabla = permisos.LamparaHendidura.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_lamparaHendidura_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionLamparaHendidura.campoAgEl != null
            && this.configuracionLamparaHendidura.lamparaHendiduraConsulta
            && this.configuracionLamparaHendidura.lamparaHendiduraConsulta.isOk
            && !this.configuracionLamparaHendidura.lamparaHendiduraConsulta.isOk())
            return;
        if (this.configuracionLamparaHendidura.lamparaHendiduraConsulta) {
            if (!this.configuracionLamparaHendidura.campoAgEl && this.configuracionLamparaHendidura.lamparaHendiduraConsulta instanceof LamparaHendidura)
                this.configuracionLamparaHendidura.rutaLista = this.crudServiceBaseUrl + "/getLamparaHendidurasByDto";
            this.lista = this.configuracionLamparaHendidura.lecturaP(completar,this.configuracionLamparaHendidura.lamparaHendiduraConsulta);
            if (this.configuracionLamparaHendidura.campoAgEl) {
                this.rutaAgregar = this.configuracionLamparaHendidura.agregarP(function(){}, this.configuracionLamparaHendidura.campoAgEl);
                this.rutaEliminar = this.configuracionLamparaHendidura.eliminarP(function(){}, this.configuracionLamparaHendidura.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionLamparaHendidura.agregarP(completar, this.configuracionLamparaHendidura.lamparaHendiduraConsulta);
                this.rutaEliminar = this.configuracionLamparaHendidura.eliminarP(completar, this.configuracionLamparaHendidura.lamparaHendiduraConsulta);
            }
        } else {
            this.lista = this.configuracionLamparaHendidura.lectura();
            this.rutaAgregar = this.configuracionLamparaHendidura.agregar();
            this.rutaEliminar = this.configuracionLamparaHendidura.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"lamparaHendidura", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"lamparaHendidura", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "idevaluacionSolicitud")) {
            campos["idevaluacionSolicitud"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "idevaluacionSolicitud"), nullable: true , type: "object" , defaultValue: { "id": "" , "status": "" }  };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "tipoCornea")) {
            campos["tipoCornea"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "tipoCornea"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "microcornea")) {
            campos["microcornea"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "microcornea"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "arcoSenil")) {
            campos["arcoSenil"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "arcoSenil"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "desecacion")) {
            campos["desecacion"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "desecacion"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "opacidadEstromal")) {
            campos["opacidadEstromal"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "opacidadEstromal"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "danoEndotelial")) {
            campos["danoEndotelial"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "danoEndotelial"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "pliegueEstria")) {
            campos["pliegueEstria"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "pliegueEstria"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "observacion")) {
            campos["observacion"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "observacion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"lamparaHendidura", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionLamparaHendidura.rutaActualizar,
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
            if (self.configuracionLamparaHendidura.campoAgEl) {
                if (self.configuracionLamparaHendidura.tipocampoAgEl == "LamparaHendiduraLamparaHendidura")
                    self.configuracionLamparaHendidura.campoAgEl.lamparaHendidura2 = options.models[0];
                else
                    self.configuracionLamparaHendidura.campoAgEl.lamparaHendidura = options.models[0];
                return JSON.stringify(self.configuracionLamparaHendidura.campoAgEl);
            }else
            if (est.options[operation].data.models.lamparaHendidura) {
                est.options[operation].data.models.lamparaHendidura2 = options.models[0];
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
        if (this.globalesService.avisible(this,"lamparaHendidura", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "idevaluacionSolicitud")) {
            columnas.push({ field: "idevaluacionSolicitud", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "idevaluacionSolicitud") , editor: idevaluacionSolicitudDropDownEditor , template: " #if (idevaluacionSolicitud){#   #=idevaluacionSolicitud.status# # } # "  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "tipoCornea")) {
            columnas.push({ field: "tipoCornea", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "tipoCornea")  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "microcornea")) {
            columnas.push({ field: "microcornea", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "microcornea")  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "arcoSenil")) {
            columnas.push({ field: "arcoSenil", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "arcoSenil")  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "desecacion")) {
            columnas.push({ field: "desecacion", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "desecacion")  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "opacidadEstromal")) {
            columnas.push({ field: "opacidadEstromal", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "opacidadEstromal")  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "danoEndotelial")) {
            columnas.push({ field: "danoEndotelial", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "danoEndotelial")  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "pliegueEstria")) {
            columnas.push({ field: "pliegueEstria", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "pliegueEstria")  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "observacion")) {
            columnas.push({ field: "observacion", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "observacion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"lamparaHendidura", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"lamparaHendidura", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"lamparaHendidura")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"lamparaHendidura")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"lamparaHendidura")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"lamparaHendidura")  && this.configuracionLamparaHendidura.lamparaHendiduraConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_lamparaHendidura_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_lamparaHendidura_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionLamparaHendidura.altoComponente,
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
        this.grid = $("#grid_lamparaHendidura_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidevaluacionSolicitud = this.urlprovider.serverURL + "evaluacionSolicitud/getEvaluacionSolicitudesActivos";

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
        function idevaluacionSolicitudDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "status",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidevaluacionSolicitud,
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
        //        this.grid = $("#grid_lamparaHendidura_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.lamparaHendiduraSeleccionado = new LamparaHendidura();
        gridac.lamparaHendiduraSeleccionado.from(dataItem);
        gridac.evtLamparaHendiduraSeleccionado.emit(gridac.lamparaHendiduraSeleccionado);
        (gridac.lamparaHendiduraSeleccionado);
    }


}
