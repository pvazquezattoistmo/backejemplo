import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { GestionMuestraMicrobiologia } from '../shared/gestion-muestra-microbiologia'
import { ConfigurarGestionMuestraMicrobiologia } from '../shared/configurar-gestion-muestra-microbiologia'
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
    selector: 'app-gestion-muestra-microbiologia-list-kendo',
    templateUrl: './gestion-muestra-microbiologia-list-kendo.component.html',
    styleUrls: ['./gestion-muestra-microbiologia-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class GestionMuestraMicrobiologiaListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public gestionMuestraMicrobiologiaSeleccionado: GestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
    public dataSource: any;
    public grid: any;
    @Input() configuracionGestionMuestraMicrobiologia: ConfigurarGestionMuestraMicrobiologia = new ConfigurarGestionMuestraMicrobiologia();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("gestionMuestraMicrobiologiaSeleccionado") evtGestionMuestraMicrobiologiaSeleccionado: EventEmitter<GestionMuestraMicrobiologia> = new EventEmitter<GestionMuestraMicrobiologia>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "gestionMuestraMicrobiologia";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'gestionMuestraMicrobiologia'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'gestionMuestraMicrobiologia'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionGestionMuestraMicrobiologia.titulo.indexOf("Catálogo")!= -1){
            this.configuracionGestionMuestraMicrobiologia.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionGestionMuestraMicrobiologia && changes.configuracionGestionMuestraMicrobiologia.currentValue &&
            (changes.configuracionGestionMuestraMicrobiologia.previousValue instanceof ConfigurarGestionMuestraMicrobiologia)) {
            if (changes.configuracionGestionMuestraMicrobiologia.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionGestionMuestraMicrobiologia.currentValue.permisosAtributos;
            if (changes.configuracionGestionMuestraMicrobiologia.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionGestionMuestraMicrobiologia.currentValue.permisosTabla;
            if ($("#grid_gestionMuestraMicrobiologia_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_gestionMuestraMicrobiologia_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionGestionMuestraMicrobiologia.permisosAtributos &&
            this.configuracionGestionMuestraMicrobiologia.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "gestionMuestraMicrobiologia",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'GestionMuestraMicrobiologia'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'GestionMuestraMicrobiologia'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'GestionMuestraMicrobiologia'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionGestionMuestraMicrobiologia.permisosAtributos)
            this.permisosAtributos=this.configuracionGestionMuestraMicrobiologia.permisosAtributos;
        if (this.configuracionGestionMuestraMicrobiologia.permisosTabla)
            this.permisosTabla=this.configuracionGestionMuestraMicrobiologia.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoAtributo&& permisos.gestionMuestraMicrobiologia.PermisoAtributo.length>0
            && !obj.configuracionGestionMuestraMicrobiologia.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.gestionMuestraMicrobiologia.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.GestionMuestraMicrobiologia.PermisoAtributo ;
        }
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoTabla && permisos.gestionMuestraMicrobiologia.PermisoTabla.length>0
            && !obj.configuracionGestionMuestraMicrobiologia.permisosTabla){
            obj.globalesService.evtTablas (permisos.gestionMuestraMicrobiologia.PermisoTabla,obj);

//            obj.permisosTabla = permisos.GestionMuestraMicrobiologia.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_gestionMuestraMicrobiologia_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionGestionMuestraMicrobiologia.campoAgEl != null
            && this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta
            && this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta.isOk
            && !this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta.isOk())
            return;
        if (this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta) {
            if (!this.configuracionGestionMuestraMicrobiologia.campoAgEl && this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta instanceof GestionMuestraMicrobiologia)
                this.configuracionGestionMuestraMicrobiologia.rutaLista = this.crudServiceBaseUrl + "/getGestionMuestraMicrobiologiasByDto";
            this.lista = this.configuracionGestionMuestraMicrobiologia.lecturaP(completar,this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta);
            if (this.configuracionGestionMuestraMicrobiologia.campoAgEl) {
                this.rutaAgregar = this.configuracionGestionMuestraMicrobiologia.agregarP(function(){}, this.configuracionGestionMuestraMicrobiologia.campoAgEl);
                this.rutaEliminar = this.configuracionGestionMuestraMicrobiologia.eliminarP(function(){}, this.configuracionGestionMuestraMicrobiologia.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionGestionMuestraMicrobiologia.agregarP(completar, this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta);
                this.rutaEliminar = this.configuracionGestionMuestraMicrobiologia.eliminarP(completar, this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta);
            }
        } else {
            this.lista = this.configuracionGestionMuestraMicrobiologia.lectura();
            this.rutaAgregar = this.configuracionGestionMuestraMicrobiologia.agregar();
            this.rutaEliminar = this.configuracionGestionMuestraMicrobiologia.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "idoficioDonacion")) {
            campos["idoficioDonacion"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "idoficioDonacion"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "revision")) {
            campos["revision"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "revision"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "almacenMuestra")) {
            campos["almacenMuestra"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "almacenMuestra"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "almacenHora")) {
            campos["almacenHora"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "almacenHora"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "envio")) {
            campos["envio"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "envio"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "fechaInicioRevision")) {
            campos["fechaInicioRevision"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "fechaInicioRevision"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "horaInicioRevision")) {
            campos["horaInicioRevision"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "horaInicioRevision"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "comentario")) {
            campos["comentario"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "comentario"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"gestionMuestraMicrobiologia", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionGestionMuestraMicrobiologia.rutaActualizar,
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
                        if (elem.horaInicioRevision && typeof elem.horaInicioRevision === "number") {
                            elem.horaInicioRevision = kendo.parseDate(new Date(elem.horaInicioRevision), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaBaja && typeof elem.fechaBaja === "number") {
                            elem.fechaBaja = kendo.parseDate(new Date(elem.fechaBaja), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaInicioRevision && typeof elem.fechaInicioRevision === "number") {
                            elem.fechaInicioRevision = kendo.parseDate(new Date(elem.fechaInicioRevision), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRegistro && typeof elem.fechaRegistro === "number") {
                            elem.fechaRegistro = kendo.parseDate(new Date(elem.fechaRegistro), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.almacenHora && typeof elem.almacenHora === "number") {
                            elem.almacenHora = kendo.parseDate(new Date(elem.almacenHora), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionGestionMuestraMicrobiologia.campoAgEl) {
                if (self.configuracionGestionMuestraMicrobiologia.tipocampoAgEl == "GestionMuestraMicrobiologiaGestionMuestraMicrobiologia")
                    self.configuracionGestionMuestraMicrobiologia.campoAgEl.gestionMuestraMicrobiologia2 = options.models[0];
                else
                    self.configuracionGestionMuestraMicrobiologia.campoAgEl.gestionMuestraMicrobiologia = options.models[0];
                return JSON.stringify(self.configuracionGestionMuestraMicrobiologia.campoAgEl);
            }else
            if (est.options[operation].data.models.gestionMuestraMicrobiologia) {
                est.options[operation].data.models.gestionMuestraMicrobiologia2 = options.models[0];
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
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "idoficioDonacion")) {
            columnas.push({ field: "idoficioDonacion", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "idoficioDonacion") , editor: idoficioDonacionDropDownEditor , template: " #if (idoficioDonacion){#   #=idoficioDonacion.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "revision")) {
            columnas.push({ field: "revision", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "revision")  });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "almacenMuestra")) {
            columnas.push({ field: "almacenMuestra", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "almacenMuestra")  });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "almacenHora")) {
            columnas.push({ field: "almacenHora", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "almacenHora") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "envio")) {
            columnas.push({ field: "envio", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "envio")  });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "fechaInicioRevision")) {
            columnas.push({ field: "fechaInicioRevision", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "fechaInicioRevision") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "horaInicioRevision")) {
            columnas.push({ field: "horaInicioRevision", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "horaInicioRevision") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "comentario")) {
            columnas.push({ field: "comentario", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "comentario") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"gestionMuestraMicrobiologia", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"gestionMuestraMicrobiologia", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"gestionMuestraMicrobiologia")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"gestionMuestraMicrobiologia")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"gestionMuestraMicrobiologia")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"gestionMuestraMicrobiologia")  && this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_gestionMuestraMicrobiologia_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_gestionMuestraMicrobiologia_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionGestionMuestraMicrobiologia.altoComponente,
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
        this.grid = $("#grid_gestionMuestraMicrobiologia_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_gestionMuestraMicrobiologia_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.gestionMuestraMicrobiologiaSeleccionado = new GestionMuestraMicrobiologia();
        gridac.gestionMuestraMicrobiologiaSeleccionado.from(dataItem);
        gridac.evtGestionMuestraMicrobiologiaSeleccionado.emit(gridac.gestionMuestraMicrobiologiaSeleccionado);
        (gridac.gestionMuestraMicrobiologiaSeleccionado);
    }


}
