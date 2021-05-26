import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { SolicitudEvaluacionCorneal } from '../shared/solicitud-evaluacion-corneal'
import { ConfigurarSolicitudEvaluacionCorneal } from '../shared/configurar-solicitud-evaluacion-corneal'
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
    selector: 'app-solicitud-evaluacion-corneal-list-kendo',
    templateUrl: './solicitud-evaluacion-corneal-list-kendo.component.html',
    styleUrls: ['./solicitud-evaluacion-corneal-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class SolicitudEvaluacionCornealListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public solicitudEvaluacionCornealSeleccionado: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
    public dataSource: any;
    public grid: any;
    @Input() configuracionSolicitudEvaluacionCorneal: ConfigurarSolicitudEvaluacionCorneal = new ConfigurarSolicitudEvaluacionCorneal();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("solicitudEvaluacionCornealSeleccionado") evtSolicitudEvaluacionCornealSeleccionado: EventEmitter<SolicitudEvaluacionCorneal> = new EventEmitter<SolicitudEvaluacionCorneal>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudEvaluacionCorneal";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudEvaluacionCorneal'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudEvaluacionCorneal'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionSolicitudEvaluacionCorneal.titulo.indexOf("Catálogo")!= -1){
            this.configuracionSolicitudEvaluacionCorneal.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionSolicitudEvaluacionCorneal && changes.configuracionSolicitudEvaluacionCorneal.currentValue &&
            (changes.configuracionSolicitudEvaluacionCorneal.previousValue instanceof ConfigurarSolicitudEvaluacionCorneal)) {
            if (changes.configuracionSolicitudEvaluacionCorneal.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionSolicitudEvaluacionCorneal.currentValue.permisosAtributos;
            if (changes.configuracionSolicitudEvaluacionCorneal.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionSolicitudEvaluacionCorneal.currentValue.permisosTabla;
            if ($("#grid_solicitudEvaluacionCorneal_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_solicitudEvaluacionCorneal_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionSolicitudEvaluacionCorneal.permisosAtributos &&
            this.configuracionSolicitudEvaluacionCorneal.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "solicitudEvaluacionCorneal",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudEvaluacionCorneal'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudEvaluacionCorneal'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudEvaluacionCorneal'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionSolicitudEvaluacionCorneal.permisosAtributos)
            this.permisosAtributos=this.configuracionSolicitudEvaluacionCorneal.permisosAtributos;
        if (this.configuracionSolicitudEvaluacionCorneal.permisosTabla)
            this.permisosTabla=this.configuracionSolicitudEvaluacionCorneal.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoAtributo&& permisos.solicitudEvaluacionCorneal.PermisoAtributo.length>0
            && !obj.configuracionSolicitudEvaluacionCorneal.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.solicitudEvaluacionCorneal.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.SolicitudEvaluacionCorneal.PermisoAtributo ;
        }
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoTabla && permisos.solicitudEvaluacionCorneal.PermisoTabla.length>0
            && !obj.configuracionSolicitudEvaluacionCorneal.permisosTabla){
            obj.globalesService.evtTablas (permisos.solicitudEvaluacionCorneal.PermisoTabla,obj);

//            obj.permisosTabla = permisos.SolicitudEvaluacionCorneal.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_solicitudEvaluacionCorneal_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionSolicitudEvaluacionCorneal.campoAgEl != null
            && this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta
            && this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta.isOk
            && !this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta.isOk())
            return;
        if (this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta) {
            if (!this.configuracionSolicitudEvaluacionCorneal.campoAgEl && this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta instanceof SolicitudEvaluacionCorneal)
                this.configuracionSolicitudEvaluacionCorneal.rutaLista = this.crudServiceBaseUrl + "/getSolicitudEvaluacionCornealesByDto";
            this.lista = this.configuracionSolicitudEvaluacionCorneal.lecturaP(completar,this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta);
            if (this.configuracionSolicitudEvaluacionCorneal.campoAgEl) {
                this.rutaAgregar = this.configuracionSolicitudEvaluacionCorneal.agregarP(function(){}, this.configuracionSolicitudEvaluacionCorneal.campoAgEl);
                this.rutaEliminar = this.configuracionSolicitudEvaluacionCorneal.eliminarP(function(){}, this.configuracionSolicitudEvaluacionCorneal.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionSolicitudEvaluacionCorneal.agregarP(completar, this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta);
                this.rutaEliminar = this.configuracionSolicitudEvaluacionCorneal.eliminarP(completar, this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta);
            }
        } else {
            this.lista = this.configuracionSolicitudEvaluacionCorneal.lectura();
            this.rutaAgregar = this.configuracionSolicitudEvaluacionCorneal.agregar();
            this.rutaEliminar = this.configuracionSolicitudEvaluacionCorneal.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "folioSolicitud")) {
            campos["folioSolicitud"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "folioSolicitud"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "primerApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "segundoApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "numeroExpediente")) {
            campos["numeroExpediente"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "numeroExpediente"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "edad")) {
            campos["edad"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "edad"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "fechaMuerte")) {
            campos["fechaMuerte"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "fechaMuerte"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "horaMuerte")) {
            campos["horaMuerte"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "horaMuerte"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "horaInicioRefrigracion")) {
            campos["horaInicioRefrigracion"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "horaInicioRefrigracion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "temperaturaRefrigeracion")) {
            campos["temperaturaRefrigeracion"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "temperaturaRefrigeracion"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "conservacionTemperaturaAmbiente")) {
            campos["conservacionTemperaturaAmbiente"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "conservacionTemperaturaAmbiente"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "idcausaMuerte")) {
            campos["idcausaMuerte"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "idcausaMuerte"), nullable: true , type: "object" , defaultValue: { "id": "" , "descripcion": "" }  };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "estatusProceso"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"solicitudEvaluacionCorneal", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionSolicitudEvaluacionCorneal.rutaActualizar,
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
                        if (elem.fechaMuerte && typeof elem.fechaMuerte === "number") {
                            elem.fechaMuerte = kendo.parseDate(new Date(elem.fechaMuerte), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.horaInicioRefrigracion && typeof elem.horaInicioRefrigracion === "number") {
                            elem.horaInicioRefrigracion = kendo.parseDate(new Date(elem.horaInicioRefrigracion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.horaMuerte && typeof elem.horaMuerte === "number") {
                            elem.horaMuerte = kendo.parseDate(new Date(elem.horaMuerte), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionSolicitudEvaluacionCorneal.campoAgEl) {
                if (self.configuracionSolicitudEvaluacionCorneal.tipocampoAgEl == "SolicitudEvaluacionCornealSolicitudEvaluacionCorneal")
                    self.configuracionSolicitudEvaluacionCorneal.campoAgEl.solicitudEvaluacionCorneal2 = options.models[0];
                else
                    self.configuracionSolicitudEvaluacionCorneal.campoAgEl.solicitudEvaluacionCorneal = options.models[0];
                return JSON.stringify(self.configuracionSolicitudEvaluacionCorneal.campoAgEl);
            }else
            if (est.options[operation].data.models.solicitudEvaluacionCorneal) {
                est.options[operation].data.models.solicitudEvaluacionCorneal2 = options.models[0];
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
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "folioSolicitud")) {
            columnas.push({ field: "folioSolicitud", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "folioSolicitud") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "nombre") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "primerApellido") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "segundoApellido") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "numeroExpediente")) {
            columnas.push({ field: "numeroExpediente", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "numeroExpediente") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "edad")) {
            columnas.push({ field: "edad", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "edad")  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "fechaMuerte")) {
            columnas.push({ field: "fechaMuerte", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "fechaMuerte") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "horaMuerte")) {
            columnas.push({ field: "horaMuerte", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "horaMuerte") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "horaInicioRefrigracion")) {
            columnas.push({ field: "horaInicioRefrigracion", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "horaInicioRefrigracion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "temperaturaRefrigeracion")) {
            columnas.push({ field: "temperaturaRefrigeracion", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "temperaturaRefrigeracion")  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "conservacionTemperaturaAmbiente")) {
            columnas.push({ field: "conservacionTemperaturaAmbiente", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "conservacionTemperaturaAmbiente")  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "idcausaMuerte")) {
            columnas.push({ field: "idcausaMuerte", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "idcausaMuerte") , editor: idcausaMuerteDropDownEditor , template: " #if (idcausaMuerte){#   #=idcausaMuerte.descripcion# # } # "  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "estatusProceso")  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"solicitudEvaluacionCorneal", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"solicitudEvaluacionCorneal", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"solicitudEvaluacionCorneal")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"solicitudEvaluacionCorneal")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"solicitudEvaluacionCorneal")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"solicitudEvaluacionCorneal")  && this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_solicitudEvaluacionCorneal_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_solicitudEvaluacionCorneal_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionSolicitudEvaluacionCorneal.altoComponente,
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
        this.grid = $("#grid_solicitudEvaluacionCorneal_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidcausaMuerte = this.urlprovider.serverURL + "causaMuerte/getCausaMuertesActivos";

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
        function idcausaMuerteDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "tipoCausaMuerte",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidcausaMuerte,
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
        //        this.grid = $("#grid_solicitudEvaluacionCorneal_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.solicitudEvaluacionCornealSeleccionado = new SolicitudEvaluacionCorneal();
        gridac.solicitudEvaluacionCornealSeleccionado.from(dataItem);
        gridac.evtSolicitudEvaluacionCornealSeleccionado.emit(gridac.solicitudEvaluacionCornealSeleccionado);
        (gridac.solicitudEvaluacionCornealSeleccionado);
    }


}
