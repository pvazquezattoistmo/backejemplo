import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { CaracteristicaDonacion } from '../shared/caracteristica-donacion'
import { ConfigurarCaracteristicaDonacion } from '../shared/configurar-caracteristica-donacion'
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
    selector: 'app-caracteristica-donacion-list-kendo',
    templateUrl: './caracteristica-donacion-list-kendo.component.html',
    styleUrls: ['./caracteristica-donacion-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class CaracteristicaDonacionListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public caracteristicaDonacionSeleccionado: CaracteristicaDonacion = new CaracteristicaDonacion();
    public dataSource: any;
    public grid: any;
    @Input() configuracionCaracteristicaDonacion: ConfigurarCaracteristicaDonacion = new ConfigurarCaracteristicaDonacion();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("caracteristicaDonacionSeleccionado") evtCaracteristicaDonacionSeleccionado: EventEmitter<CaracteristicaDonacion> = new EventEmitter<CaracteristicaDonacion>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "caracteristicaDonacion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'caracteristicaDonacion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'caracteristicaDonacion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionCaracteristicaDonacion.titulo.indexOf("Catálogo")!= -1){
            this.configuracionCaracteristicaDonacion.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionCaracteristicaDonacion && changes.configuracionCaracteristicaDonacion.currentValue &&
            (changes.configuracionCaracteristicaDonacion.previousValue instanceof ConfigurarCaracteristicaDonacion)) {
            if (changes.configuracionCaracteristicaDonacion.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionCaracteristicaDonacion.currentValue.permisosAtributos;
            if (changes.configuracionCaracteristicaDonacion.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionCaracteristicaDonacion.currentValue.permisosTabla;
            if ($("#grid_caracteristicaDonacion_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_caracteristicaDonacion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionCaracteristicaDonacion.permisosAtributos &&
            this.configuracionCaracteristicaDonacion.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "caracteristicaDonacion",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CaracteristicaDonacion'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CaracteristicaDonacion'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CaracteristicaDonacion'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionCaracteristicaDonacion.permisosAtributos)
            this.permisosAtributos=this.configuracionCaracteristicaDonacion.permisosAtributos;
        if (this.configuracionCaracteristicaDonacion.permisosTabla)
            this.permisosTabla=this.configuracionCaracteristicaDonacion.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoAtributo&& permisos.caracteristicaDonacion.PermisoAtributo.length>0
            && !obj.configuracionCaracteristicaDonacion.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.caracteristicaDonacion.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.CaracteristicaDonacion.PermisoAtributo ;
        }
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoTabla && permisos.caracteristicaDonacion.PermisoTabla.length>0
            && !obj.configuracionCaracteristicaDonacion.permisosTabla){
            obj.globalesService.evtTablas (permisos.caracteristicaDonacion.PermisoTabla,obj);

//            obj.permisosTabla = permisos.CaracteristicaDonacion.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_caracteristicaDonacion_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionCaracteristicaDonacion.campoAgEl != null
            && this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta
            && this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta.isOk
            && !this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta.isOk())
            return;
        if (this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta) {
            if (!this.configuracionCaracteristicaDonacion.campoAgEl && this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta instanceof CaracteristicaDonacion)
                this.configuracionCaracteristicaDonacion.rutaLista = this.crudServiceBaseUrl + "/getCaracteristicaDonacionesByDto";
            this.lista = this.configuracionCaracteristicaDonacion.lecturaP(completar,this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta);
            if (this.configuracionCaracteristicaDonacion.campoAgEl) {
                this.rutaAgregar = this.configuracionCaracteristicaDonacion.agregarP(function(){}, this.configuracionCaracteristicaDonacion.campoAgEl);
                this.rutaEliminar = this.configuracionCaracteristicaDonacion.eliminarP(function(){}, this.configuracionCaracteristicaDonacion.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionCaracteristicaDonacion.agregarP(completar, this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta);
                this.rutaEliminar = this.configuracionCaracteristicaDonacion.eliminarP(completar, this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta);
            }
        } else {
            this.lista = this.configuracionCaracteristicaDonacion.lectura();
            this.rutaAgregar = this.configuracionCaracteristicaDonacion.agregar();
            this.rutaEliminar = this.configuracionCaracteristicaDonacion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "idoficioDonacion")) {
            campos["idoficioDonacion"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "idoficioDonacion"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "tiempoIsquemia")) {
            campos["tiempoIsquemia"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "tiempoIsquemia"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "odcd")) {
            campos["odcd"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "odcd"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "oici")) {
            campos["oici"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "oici"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "odcdCultivo")) {
            campos["odcdCultivo"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "odcdCultivo"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "oiciCultivo")) {
            campos["oiciCultivo"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "oiciCultivo"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "observacion")) {
            campos["observacion"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "observacion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"caracteristicaDonacion", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionCaracteristicaDonacion.rutaActualizar,
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
            if (self.configuracionCaracteristicaDonacion.campoAgEl) {
                if (self.configuracionCaracteristicaDonacion.tipocampoAgEl == "CaracteristicaDonacionCaracteristicaDonacion")
                    self.configuracionCaracteristicaDonacion.campoAgEl.caracteristicaDonacion2 = options.models[0];
                else
                    self.configuracionCaracteristicaDonacion.campoAgEl.caracteristicaDonacion = options.models[0];
                return JSON.stringify(self.configuracionCaracteristicaDonacion.campoAgEl);
            }else
            if (est.options[operation].data.models.caracteristicaDonacion) {
                est.options[operation].data.models.caracteristicaDonacion2 = options.models[0];
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
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "idoficioDonacion")) {
            columnas.push({ field: "idoficioDonacion", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "idoficioDonacion") , editor: idoficioDonacionDropDownEditor , template: " #if (idoficioDonacion){#   #=idoficioDonacion.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "tiempoIsquemia")) {
            columnas.push({ field: "tiempoIsquemia", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "tiempoIsquemia")  });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "odcd")) {
            columnas.push({ field: "odcd", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "odcd")  });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "oici")) {
            columnas.push({ field: "oici", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "oici")  });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "odcdCultivo")) {
            columnas.push({ field: "odcdCultivo", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "odcdCultivo")  });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "oiciCultivo")) {
            columnas.push({ field: "oiciCultivo", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "oiciCultivo")  });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "observacion")) {
            columnas.push({ field: "observacion", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "observacion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"caracteristicaDonacion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"caracteristicaDonacion", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"caracteristicaDonacion")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"caracteristicaDonacion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"caracteristicaDonacion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"caracteristicaDonacion")  && this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_caracteristicaDonacion_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_caracteristicaDonacion_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionCaracteristicaDonacion.altoComponente,
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
        this.grid = $("#grid_caracteristicaDonacion_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_caracteristicaDonacion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.caracteristicaDonacionSeleccionado = new CaracteristicaDonacion();
        gridac.caracteristicaDonacionSeleccionado.from(dataItem);
        gridac.evtCaracteristicaDonacionSeleccionado.emit(gridac.caracteristicaDonacionSeleccionado);
        (gridac.caracteristicaDonacionSeleccionado);
    }


}
