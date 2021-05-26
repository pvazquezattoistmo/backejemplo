import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { RecepcionSolicitudEvaluacion } from '../shared/recepcion-solicitud-evaluacion'
import { ConfigurarRecepcionSolicitudEvaluacion } from '../shared/configurar-recepcion-solicitud-evaluacion'
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
    selector: 'app-recepcion-solicitud-evaluacion-list-kendo',
    templateUrl: './recepcion-solicitud-evaluacion-list-kendo.component.html',
    styleUrls: ['./recepcion-solicitud-evaluacion-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class RecepcionSolicitudEvaluacionListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public recepcionSolicitudEvaluacionSeleccionado: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
    public dataSource: any;
    public grid: any;
    @Input() configuracionRecepcionSolicitudEvaluacion: ConfigurarRecepcionSolicitudEvaluacion = new ConfigurarRecepcionSolicitudEvaluacion();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("recepcionSolicitudEvaluacionSeleccionado") evtRecepcionSolicitudEvaluacionSeleccionado: EventEmitter<RecepcionSolicitudEvaluacion> = new EventEmitter<RecepcionSolicitudEvaluacion>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "recepcionSolicitudEvaluacion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'recepcionSolicitudEvaluacion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'recepcionSolicitudEvaluacion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionRecepcionSolicitudEvaluacion.titulo.indexOf("Catálogo")!= -1){
            this.configuracionRecepcionSolicitudEvaluacion.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionRecepcionSolicitudEvaluacion && changes.configuracionRecepcionSolicitudEvaluacion.currentValue &&
            (changes.configuracionRecepcionSolicitudEvaluacion.previousValue instanceof ConfigurarRecepcionSolicitudEvaluacion)) {
            if (changes.configuracionRecepcionSolicitudEvaluacion.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionRecepcionSolicitudEvaluacion.currentValue.permisosAtributos;
            if (changes.configuracionRecepcionSolicitudEvaluacion.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionRecepcionSolicitudEvaluacion.currentValue.permisosTabla;
            if ($("#grid_recepcionSolicitudEvaluacion_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_recepcionSolicitudEvaluacion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionRecepcionSolicitudEvaluacion.permisosAtributos &&
            this.configuracionRecepcionSolicitudEvaluacion.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "recepcionSolicitudEvaluacion",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RecepcionSolicitudEvaluacion'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RecepcionSolicitudEvaluacion'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RecepcionSolicitudEvaluacion'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionRecepcionSolicitudEvaluacion.permisosAtributos)
            this.permisosAtributos=this.configuracionRecepcionSolicitudEvaluacion.permisosAtributos;
        if (this.configuracionRecepcionSolicitudEvaluacion.permisosTabla)
            this.permisosTabla=this.configuracionRecepcionSolicitudEvaluacion.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoAtributo&& permisos.recepcionSolicitudEvaluacion.PermisoAtributo.length>0
            && !obj.configuracionRecepcionSolicitudEvaluacion.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.recepcionSolicitudEvaluacion.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.RecepcionSolicitudEvaluacion.PermisoAtributo ;
        }
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoTabla && permisos.recepcionSolicitudEvaluacion.PermisoTabla.length>0
            && !obj.configuracionRecepcionSolicitudEvaluacion.permisosTabla){
            obj.globalesService.evtTablas (permisos.recepcionSolicitudEvaluacion.PermisoTabla,obj);

//            obj.permisosTabla = permisos.RecepcionSolicitudEvaluacion.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_recepcionSolicitudEvaluacion_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionRecepcionSolicitudEvaluacion.campoAgEl != null
            && this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta
            && this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta.isOk
            && !this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta.isOk())
            return;
        if (this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta) {
            if (!this.configuracionRecepcionSolicitudEvaluacion.campoAgEl && this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta instanceof RecepcionSolicitudEvaluacion)
                this.configuracionRecepcionSolicitudEvaluacion.rutaLista = this.crudServiceBaseUrl + "/getRecepcionSolicitudEvaluacionesByDto";
            this.lista = this.configuracionRecepcionSolicitudEvaluacion.lecturaP(completar,this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta);
            if (this.configuracionRecepcionSolicitudEvaluacion.campoAgEl) {
                this.rutaAgregar = this.configuracionRecepcionSolicitudEvaluacion.agregarP(function(){}, this.configuracionRecepcionSolicitudEvaluacion.campoAgEl);
                this.rutaEliminar = this.configuracionRecepcionSolicitudEvaluacion.eliminarP(function(){}, this.configuracionRecepcionSolicitudEvaluacion.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionRecepcionSolicitudEvaluacion.agregarP(completar, this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta);
                this.rutaEliminar = this.configuracionRecepcionSolicitudEvaluacion.eliminarP(completar, this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta);
            }
        } else {
            this.lista = this.configuracionRecepcionSolicitudEvaluacion.lectura();
            this.rutaAgregar = this.configuracionRecepcionSolicitudEvaluacion.agregar();
            this.rutaEliminar = this.configuracionRecepcionSolicitudEvaluacion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "idsolicitudEvaluacionCorneal")) {
            campos["idsolicitudEvaluacionCorneal"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "idsolicitudEvaluacionCorneal"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "expedienteFisico")) {
            campos["expedienteFisico"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "expedienteFisico"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "registroTejido")) {
            campos["registroTejido"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "registroTejido"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "tejidoCorneaIzquierda")) {
            campos["tejidoCorneaIzquierda"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "tejidoCorneaIzquierda"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "tejidoCorneaDerecha")) {
            campos["tejidoCorneaDerecha"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "tejidoCorneaDerecha"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "fechaRecepcion")) {
            campos["fechaRecepcion"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "fechaRecepcion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "horaRecepcion")) {
            campos["horaRecepcion"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "horaRecepcion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "idbtcCd")) {
            campos["idbtcCd"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "idbtcCd"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "idbtcCi")) {
            campos["idbtcCi"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "idbtcCi"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "estatusProceso"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"recepcionSolicitudEvaluacion", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionRecepcionSolicitudEvaluacion.rutaActualizar,
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
                        if (elem.horaRecepcion && typeof elem.horaRecepcion === "number") {
                            elem.horaRecepcion = kendo.parseDate(new Date(elem.horaRecepcion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaBaja && typeof elem.fechaBaja === "number") {
                            elem.fechaBaja = kendo.parseDate(new Date(elem.fechaBaja), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRegistro && typeof elem.fechaRegistro === "number") {
                            elem.fechaRegistro = kendo.parseDate(new Date(elem.fechaRegistro), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaActualizacion && typeof elem.fechaActualizacion === "number") {
                            elem.fechaActualizacion = kendo.parseDate(new Date(elem.fechaActualizacion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRecepcion && typeof elem.fechaRecepcion === "number") {
                            elem.fechaRecepcion = kendo.parseDate(new Date(elem.fechaRecepcion), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionRecepcionSolicitudEvaluacion.campoAgEl) {
                if (self.configuracionRecepcionSolicitudEvaluacion.tipocampoAgEl == "RecepcionSolicitudEvaluacionRecepcionSolicitudEvaluacion")
                    self.configuracionRecepcionSolicitudEvaluacion.campoAgEl.recepcionSolicitudEvaluacion2 = options.models[0];
                else
                    self.configuracionRecepcionSolicitudEvaluacion.campoAgEl.recepcionSolicitudEvaluacion = options.models[0];
                return JSON.stringify(self.configuracionRecepcionSolicitudEvaluacion.campoAgEl);
            }else
            if (est.options[operation].data.models.recepcionSolicitudEvaluacion) {
                est.options[operation].data.models.recepcionSolicitudEvaluacion2 = options.models[0];
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
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "idsolicitudEvaluacionCorneal")) {
            columnas.push({ field: "idsolicitudEvaluacionCorneal", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "idsolicitudEvaluacionCorneal") , editor: idsolicitudEvaluacionCornealDropDownEditor , template: " #if (idsolicitudEvaluacionCorneal){#   #=idsolicitudEvaluacionCorneal.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "expedienteFisico")) {
            columnas.push({ field: "expedienteFisico", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "expedienteFisico")  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "registroTejido")) {
            columnas.push({ field: "registroTejido", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "registroTejido")  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "tejidoCorneaIzquierda")) {
            columnas.push({ field: "tejidoCorneaIzquierda", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "tejidoCorneaIzquierda")  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "tejidoCorneaDerecha")) {
            columnas.push({ field: "tejidoCorneaDerecha", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "tejidoCorneaDerecha")  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "fechaRecepcion")) {
            columnas.push({ field: "fechaRecepcion", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "fechaRecepcion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "horaRecepcion")) {
            columnas.push({ field: "horaRecepcion", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "horaRecepcion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "idbtcCd")) {
            columnas.push({ field: "idbtcCd", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "idbtcCd") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "idbtcCi")) {
            columnas.push({ field: "idbtcCi", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "idbtcCi") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "estatusProceso")  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"recepcionSolicitudEvaluacion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"recepcionSolicitudEvaluacion", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"recepcionSolicitudEvaluacion")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"recepcionSolicitudEvaluacion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"recepcionSolicitudEvaluacion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"recepcionSolicitudEvaluacion")  && this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_recepcionSolicitudEvaluacion_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_recepcionSolicitudEvaluacion_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionRecepcionSolicitudEvaluacion.altoComponente,
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
        this.grid = $("#grid_recepcionSolicitudEvaluacion_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudEvaluacionCorneal = this.urlprovider.serverURL + "solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesActivos1";

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
        function idsolicitudEvaluacionCornealDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "folioSolicitud",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidsolicitudEvaluacionCorneal,
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
        //        this.grid = $("#grid_recepcionSolicitudEvaluacion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.recepcionSolicitudEvaluacionSeleccionado = new RecepcionSolicitudEvaluacion();
        gridac.recepcionSolicitudEvaluacionSeleccionado.from(dataItem);
        gridac.evtRecepcionSolicitudEvaluacionSeleccionado.emit(gridac.recepcionSolicitudEvaluacionSeleccionado);
        (gridac.recepcionSolicitudEvaluacionSeleccionado);
    }


}
