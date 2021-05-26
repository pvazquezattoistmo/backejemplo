import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { DatoProcuracionCorneal } from '../shared/dato-procuracion-corneal'
import { ConfigurarDatoProcuracionCorneal } from '../shared/configurar-dato-procuracion-corneal'
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
    selector: 'app-dato-procuracion-corneal-list-kendo',
    templateUrl: './dato-procuracion-corneal-list-kendo.component.html',
    styleUrls: ['./dato-procuracion-corneal-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class DatoProcuracionCornealListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public datoProcuracionCornealSeleccionado: DatoProcuracionCorneal = new DatoProcuracionCorneal();
    public dataSource: any;
    public grid: any;
    @Input() configuracionDatoProcuracionCorneal: ConfigurarDatoProcuracionCorneal = new ConfigurarDatoProcuracionCorneal();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("datoProcuracionCornealSeleccionado") evtDatoProcuracionCornealSeleccionado: EventEmitter<DatoProcuracionCorneal> = new EventEmitter<DatoProcuracionCorneal>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "datoProcuracionCorneal";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'datoProcuracionCorneal'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'datoProcuracionCorneal'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionDatoProcuracionCorneal.titulo.indexOf("Catálogo")!= -1){
            this.configuracionDatoProcuracionCorneal.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDatoProcuracionCorneal && changes.configuracionDatoProcuracionCorneal.currentValue &&
            (changes.configuracionDatoProcuracionCorneal.previousValue instanceof ConfigurarDatoProcuracionCorneal)) {
            if (changes.configuracionDatoProcuracionCorneal.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionDatoProcuracionCorneal.currentValue.permisosAtributos;
            if (changes.configuracionDatoProcuracionCorneal.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionDatoProcuracionCorneal.currentValue.permisosTabla;
            if ($("#grid_datoProcuracionCorneal_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_datoProcuracionCorneal_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionDatoProcuracionCorneal.permisosAtributos &&
            this.configuracionDatoProcuracionCorneal.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "datoProcuracionCorneal",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DatoProcuracionCorneal'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DatoProcuracionCorneal'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DatoProcuracionCorneal'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionDatoProcuracionCorneal.permisosAtributos)
            this.permisosAtributos=this.configuracionDatoProcuracionCorneal.permisosAtributos;
        if (this.configuracionDatoProcuracionCorneal.permisosTabla)
            this.permisosTabla=this.configuracionDatoProcuracionCorneal.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoAtributo&& permisos.datoProcuracionCorneal.PermisoAtributo.length>0
            && !obj.configuracionDatoProcuracionCorneal.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.datoProcuracionCorneal.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.DatoProcuracionCorneal.PermisoAtributo ;
        }
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoTabla && permisos.datoProcuracionCorneal.PermisoTabla.length>0
            && !obj.configuracionDatoProcuracionCorneal.permisosTabla){
            obj.globalesService.evtTablas (permisos.datoProcuracionCorneal.PermisoTabla,obj);

//            obj.permisosTabla = permisos.DatoProcuracionCorneal.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_datoProcuracionCorneal_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionDatoProcuracionCorneal.campoAgEl != null
            && this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta
            && this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta.isOk
            && !this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta.isOk())
            return;
        if (this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta) {
            if (!this.configuracionDatoProcuracionCorneal.campoAgEl && this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta instanceof DatoProcuracionCorneal)
                this.configuracionDatoProcuracionCorneal.rutaLista = this.crudServiceBaseUrl + "/getDatoProcuracionCornealesByDto";
            this.lista = this.configuracionDatoProcuracionCorneal.lecturaP(completar,this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta);
            if (this.configuracionDatoProcuracionCorneal.campoAgEl) {
                this.rutaAgregar = this.configuracionDatoProcuracionCorneal.agregarP(function(){}, this.configuracionDatoProcuracionCorneal.campoAgEl);
                this.rutaEliminar = this.configuracionDatoProcuracionCorneal.eliminarP(function(){}, this.configuracionDatoProcuracionCorneal.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionDatoProcuracionCorneal.agregarP(completar, this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta);
                this.rutaEliminar = this.configuracionDatoProcuracionCorneal.eliminarP(completar, this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta);
            }
        } else {
            this.lista = this.configuracionDatoProcuracionCorneal.lectura();
            this.rutaAgregar = this.configuracionDatoProcuracionCorneal.agregar();
            this.rutaEliminar = this.configuracionDatoProcuracionCorneal.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "idsolicitudEvaluacionCorneal")) {
            campos["idsolicitudEvaluacionCorneal"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "idsolicitudEvaluacionCorneal"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "idcenatra")) {
            campos["idcenatra"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "idcenatra"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "tipo")) {
            campos["tipo"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "tipo"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaInicio")) {
            campos["fechaInicio"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "fechaInicio"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaFin")) {
            campos["fechaFin"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "fechaFin"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "horaInicio")) {
            campos["horaInicio"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "horaInicio"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "horaFin")) {
            campos["horaFin"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "horaFin"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"datoProcuracionCorneal", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDatoProcuracionCorneal.rutaActualizar,
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
                        if (elem.horaFin && typeof elem.horaFin === "number") {
                            elem.horaFin = kendo.parseDate(new Date(elem.horaFin), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaBaja && typeof elem.fechaBaja === "number") {
                            elem.fechaBaja = kendo.parseDate(new Date(elem.fechaBaja), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaInicio && typeof elem.fechaInicio === "number") {
                            elem.fechaInicio = kendo.parseDate(new Date(elem.fechaInicio), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRegistro && typeof elem.fechaRegistro === "number") {
                            elem.fechaRegistro = kendo.parseDate(new Date(elem.fechaRegistro), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaActualizacion && typeof elem.fechaActualizacion === "number") {
                            elem.fechaActualizacion = kendo.parseDate(new Date(elem.fechaActualizacion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaFin && typeof elem.fechaFin === "number") {
                            elem.fechaFin = kendo.parseDate(new Date(elem.fechaFin), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.horaInicio && typeof elem.horaInicio === "number") {
                            elem.horaInicio = kendo.parseDate(new Date(elem.horaInicio), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionDatoProcuracionCorneal.campoAgEl) {
                if (self.configuracionDatoProcuracionCorneal.tipocampoAgEl == "DatoProcuracionCornealDatoProcuracionCorneal")
                    self.configuracionDatoProcuracionCorneal.campoAgEl.datoProcuracionCorneal2 = options.models[0];
                else
                    self.configuracionDatoProcuracionCorneal.campoAgEl.datoProcuracionCorneal = options.models[0];
                return JSON.stringify(self.configuracionDatoProcuracionCorneal.campoAgEl);
            }else
            if (est.options[operation].data.models.datoProcuracionCorneal) {
                est.options[operation].data.models.datoProcuracionCorneal2 = options.models[0];
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
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "idsolicitudEvaluacionCorneal")) {
            columnas.push({ field: "idsolicitudEvaluacionCorneal", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "idsolicitudEvaluacionCorneal") , editor: idsolicitudEvaluacionCornealDropDownEditor , template: " #if (idsolicitudEvaluacionCorneal){#   #=idsolicitudEvaluacionCorneal.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "idcenatra")) {
            columnas.push({ field: "idcenatra", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "idcenatra")  });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "tipo")) {
            columnas.push({ field: "tipo", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "tipo")  });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaInicio")) {
            columnas.push({ field: "fechaInicio", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "fechaInicio") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaFin")) {
            columnas.push({ field: "fechaFin", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "fechaFin") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "horaInicio")) {
            columnas.push({ field: "horaInicio", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "horaInicio") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "horaFin")) {
            columnas.push({ field: "horaFin", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "horaFin") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"datoProcuracionCorneal", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"datoProcuracionCorneal", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"datoProcuracionCorneal")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"datoProcuracionCorneal")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"datoProcuracionCorneal")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"datoProcuracionCorneal")  && this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_datoProcuracionCorneal_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_datoProcuracionCorneal_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDatoProcuracionCorneal.altoComponente,
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
        this.grid = $("#grid_datoProcuracionCorneal_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_datoProcuracionCorneal_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.datoProcuracionCornealSeleccionado = new DatoProcuracionCorneal();
        gridac.datoProcuracionCornealSeleccionado.from(dataItem);
        gridac.evtDatoProcuracionCornealSeleccionado.emit(gridac.datoProcuracionCornealSeleccionado);
        (gridac.datoProcuracionCornealSeleccionado);
    }


}
