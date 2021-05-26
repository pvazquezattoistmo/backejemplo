import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { SolicitudTejidoCorneal } from '../shared/solicitud-tejido-corneal'
import { ConfigurarSolicitudTejidoCorneal } from '../shared/configurar-solicitud-tejido-corneal'
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
    selector: 'app-solicitud-tejido-corneal-list-kendo',
    templateUrl: './solicitud-tejido-corneal-list-kendo.component.html',
    styleUrls: ['./solicitud-tejido-corneal-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class SolicitudTejidoCornealListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public solicitudTejidoCornealSeleccionado: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
    public dataSource: any;
    public grid: any;
    @Input() configuracionSolicitudTejidoCorneal: ConfigurarSolicitudTejidoCorneal = new ConfigurarSolicitudTejidoCorneal();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("solicitudTejidoCornealSeleccionado") evtSolicitudTejidoCornealSeleccionado: EventEmitter<SolicitudTejidoCorneal> = new EventEmitter<SolicitudTejidoCorneal>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudTejidoCorneal";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCorneal'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCorneal'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionSolicitudTejidoCorneal.titulo.indexOf("Catálogo")!= -1){
            this.configuracionSolicitudTejidoCorneal.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionSolicitudTejidoCorneal && changes.configuracionSolicitudTejidoCorneal.currentValue &&
            (changes.configuracionSolicitudTejidoCorneal.previousValue instanceof ConfigurarSolicitudTejidoCorneal)) {
            if (changes.configuracionSolicitudTejidoCorneal.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionSolicitudTejidoCorneal.currentValue.permisosAtributos;
            if (changes.configuracionSolicitudTejidoCorneal.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionSolicitudTejidoCorneal.currentValue.permisosTabla;
            if ($("#grid_solicitudTejidoCorneal_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_solicitudTejidoCorneal_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionSolicitudTejidoCorneal.permisosAtributos &&
            this.configuracionSolicitudTejidoCorneal.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "solicitudTejidoCorneal",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCorneal'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCorneal'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCorneal'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionSolicitudTejidoCorneal.permisosAtributos)
            this.permisosAtributos=this.configuracionSolicitudTejidoCorneal.permisosAtributos;
        if (this.configuracionSolicitudTejidoCorneal.permisosTabla)
            this.permisosTabla=this.configuracionSolicitudTejidoCorneal.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoAtributo&& permisos.solicitudTejidoCorneal.PermisoAtributo.length>0
            && !obj.configuracionSolicitudTejidoCorneal.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.solicitudTejidoCorneal.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.SolicitudTejidoCorneal.PermisoAtributo ;
        }
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoTabla && permisos.solicitudTejidoCorneal.PermisoTabla.length>0
            && !obj.configuracionSolicitudTejidoCorneal.permisosTabla){
            obj.globalesService.evtTablas (permisos.solicitudTejidoCorneal.PermisoTabla,obj);

//            obj.permisosTabla = permisos.SolicitudTejidoCorneal.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_solicitudTejidoCorneal_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionSolicitudTejidoCorneal.campoAgEl != null
            && this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta
            && this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta.isOk
            && !this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta.isOk())
            return;
        if (this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta) {
            if (!this.configuracionSolicitudTejidoCorneal.campoAgEl && this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta instanceof SolicitudTejidoCorneal)
                this.configuracionSolicitudTejidoCorneal.rutaLista = this.crudServiceBaseUrl + "/getSolicitudTejidoCornealesByDto";
            this.lista = this.configuracionSolicitudTejidoCorneal.lecturaP(completar,this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta);
            if (this.configuracionSolicitudTejidoCorneal.campoAgEl) {
                this.rutaAgregar = this.configuracionSolicitudTejidoCorneal.agregarP(function(){}, this.configuracionSolicitudTejidoCorneal.campoAgEl);
                this.rutaEliminar = this.configuracionSolicitudTejidoCorneal.eliminarP(function(){}, this.configuracionSolicitudTejidoCorneal.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionSolicitudTejidoCorneal.agregarP(completar, this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta);
                this.rutaEliminar = this.configuracionSolicitudTejidoCorneal.eliminarP(completar, this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta);
            }
        } else {
            this.lista = this.configuracionSolicitudTejidoCorneal.lectura();
            this.rutaAgregar = this.configuracionSolicitudTejidoCorneal.agregar();
            this.rutaEliminar = this.configuracionSolicitudTejidoCorneal.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "folioSolicitudTejidoCorneal")) {
            campos["folioSolicitudTejidoCorneal"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "folioSolicitudTejidoCorneal"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "nombreReceptor")) {
            campos["nombreReceptor"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "nombreReceptor"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "primerApellidoReceptor")) {
            campos["primerApellidoReceptor"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "primerApellidoReceptor"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "segundoApellidoReceptor")) {
            campos["segundoApellidoReceptor"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "segundoApellidoReceptor"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "edadReceptor")) {
            campos["edadReceptor"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "edadReceptor"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "numeroExpedienteReceptor")) {
            campos["numeroExpedienteReceptor"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "numeroExpedienteReceptor"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "sexoReceptor")) {
            campos["sexoReceptor"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "sexoReceptor"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "diagnostico")) {
            campos["diagnostico"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "diagnostico"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "fechaTentativaCirugia")) {
            campos["fechaTentativaCirugia"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "fechaTentativaCirugia"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "corneaSolicitada")) {
            campos["corneaSolicitada"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "corneaSolicitada"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "caracteristicaCornea")) {
            campos["caracteristicaCornea"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "caracteristicaCornea"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "idhospital")) {
            campos["idhospital"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "idhospital"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "iddoctorResponsableSolicitud")) {
            campos["iddoctorResponsableSolicitud"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "iddoctorResponsableSolicitud"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "estatusProceso"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"solicitudTejidoCorneal", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionSolicitudTejidoCorneal.rutaActualizar,
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
                        if (elem.fechaTentativaCirugia && typeof elem.fechaTentativaCirugia === "number") {
                            elem.fechaTentativaCirugia = kendo.parseDate(new Date(elem.fechaTentativaCirugia), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionSolicitudTejidoCorneal.campoAgEl) {
                if (self.configuracionSolicitudTejidoCorneal.tipocampoAgEl == "SolicitudTejidoCornealSolicitudTejidoCorneal")
                    self.configuracionSolicitudTejidoCorneal.campoAgEl.solicitudTejidoCorneal2 = options.models[0];
                else
                    self.configuracionSolicitudTejidoCorneal.campoAgEl.solicitudTejidoCorneal = options.models[0];
                return JSON.stringify(self.configuracionSolicitudTejidoCorneal.campoAgEl);
            }else
            if (est.options[operation].data.models.solicitudTejidoCorneal) {
                est.options[operation].data.models.solicitudTejidoCorneal2 = options.models[0];
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
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "folioSolicitudTejidoCorneal")) {
            columnas.push({ field: "folioSolicitudTejidoCorneal", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "folioSolicitudTejidoCorneal") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "nombreReceptor")) {
            columnas.push({ field: "nombreReceptor", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "nombreReceptor") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "primerApellidoReceptor")) {
            columnas.push({ field: "primerApellidoReceptor", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "primerApellidoReceptor") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "segundoApellidoReceptor")) {
            columnas.push({ field: "segundoApellidoReceptor", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "segundoApellidoReceptor") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "edadReceptor")) {
            columnas.push({ field: "edadReceptor", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "edadReceptor")  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "numeroExpedienteReceptor")) {
            columnas.push({ field: "numeroExpedienteReceptor", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "numeroExpedienteReceptor") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "sexoReceptor")) {
            columnas.push({ field: "sexoReceptor", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "sexoReceptor") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "diagnostico")) {
            columnas.push({ field: "diagnostico", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "diagnostico") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "fechaTentativaCirugia")) {
            columnas.push({ field: "fechaTentativaCirugia", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "fechaTentativaCirugia") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "corneaSolicitada")) {
            columnas.push({ field: "corneaSolicitada", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "corneaSolicitada")  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "caracteristicaCornea")) {
            columnas.push({ field: "caracteristicaCornea", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "caracteristicaCornea") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "idhospital")) {
            columnas.push({ field: "idhospital", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "idhospital") , editor: idhospitalDropDownEditor , template: " #if (idhospital){#   #=idhospital.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "iddoctorResponsableSolicitud")) {
            columnas.push({ field: "iddoctorResponsableSolicitud", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "iddoctorResponsableSolicitud") , editor: iddoctorResponsableSolicitudDropDownEditor , template: " #if (iddoctorResponsableSolicitud){#   #=iddoctorResponsableSolicitud.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "estatusProceso")  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"solicitudTejidoCorneal", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"solicitudTejidoCorneal", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"solicitudTejidoCorneal")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"solicitudTejidoCorneal")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"solicitudTejidoCorneal")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"solicitudTejidoCorneal")  && this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_solicitudTejidoCorneal_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_solicitudTejidoCorneal_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionSolicitudTejidoCorneal.altoComponente,
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
        this.grid = $("#grid_solicitudTejidoCorneal_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaiddoctorResponsableSolicitud = this.urlprovider.serverURL + "doctorSolicitante/getDoctorSolicitantesActivos";
        var rutaidhospital = this.urlprovider.serverURL + "hospital/getHospitalesActivos";

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
        function iddoctorResponsableSolicitudDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "nombre",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaiddoctorResponsableSolicitud,
                                contentType: "application/json",
                                type: "POST",
                            }
                        }
                    }
                });
        }
        function idhospitalDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "redIssste",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidhospital,
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
        //        this.grid = $("#grid_solicitudTejidoCorneal_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.solicitudTejidoCornealSeleccionado = new SolicitudTejidoCorneal();
        gridac.solicitudTejidoCornealSeleccionado.from(dataItem);
        gridac.evtSolicitudTejidoCornealSeleccionado.emit(gridac.solicitudTejidoCornealSeleccionado);
        (gridac.solicitudTejidoCornealSeleccionado);
    }


}
