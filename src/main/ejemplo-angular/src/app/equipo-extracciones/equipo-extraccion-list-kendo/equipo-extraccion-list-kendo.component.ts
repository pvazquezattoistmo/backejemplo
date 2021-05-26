import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { EquipoExtraccion } from '../shared/equipo-extraccion'
import { ConfigurarEquipoExtraccion } from '../shared/configurar-equipo-extraccion'
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
    selector: 'app-equipo-extraccion-list-kendo',
    templateUrl: './equipo-extraccion-list-kendo.component.html',
    styleUrls: ['./equipo-extraccion-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class EquipoExtraccionListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public equipoExtraccionSeleccionado: EquipoExtraccion = new EquipoExtraccion();
    public dataSource: any;
    public grid: any;
    @Input() configuracionEquipoExtraccion: ConfigurarEquipoExtraccion = new ConfigurarEquipoExtraccion();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("equipoExtraccionSeleccionado") evtEquipoExtraccionSeleccionado: EventEmitter<EquipoExtraccion> = new EventEmitter<EquipoExtraccion>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "equipoExtraccion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'equipoExtraccion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'equipoExtraccion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionEquipoExtraccion.titulo.indexOf("Catálogo")!= -1){
            this.configuracionEquipoExtraccion.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionEquipoExtraccion && changes.configuracionEquipoExtraccion.currentValue &&
            (changes.configuracionEquipoExtraccion.previousValue instanceof ConfigurarEquipoExtraccion)) {
            if (changes.configuracionEquipoExtraccion.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionEquipoExtraccion.currentValue.permisosAtributos;
            if (changes.configuracionEquipoExtraccion.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionEquipoExtraccion.currentValue.permisosTabla;
            if ($("#grid_equipoExtraccion_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_equipoExtraccion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionEquipoExtraccion.permisosAtributos &&
            this.configuracionEquipoExtraccion.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "equipoExtraccion",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EquipoExtraccion'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EquipoExtraccion'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EquipoExtraccion'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionEquipoExtraccion.permisosAtributos)
            this.permisosAtributos=this.configuracionEquipoExtraccion.permisosAtributos;
        if (this.configuracionEquipoExtraccion.permisosTabla)
            this.permisosTabla=this.configuracionEquipoExtraccion.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoAtributo&& permisos.equipoExtraccion.PermisoAtributo.length>0
            && !obj.configuracionEquipoExtraccion.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.equipoExtraccion.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.EquipoExtraccion.PermisoAtributo ;
        }
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoTabla && permisos.equipoExtraccion.PermisoTabla.length>0
            && !obj.configuracionEquipoExtraccion.permisosTabla){
            obj.globalesService.evtTablas (permisos.equipoExtraccion.PermisoTabla,obj);

//            obj.permisosTabla = permisos.EquipoExtraccion.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_equipoExtraccion_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionEquipoExtraccion.campoAgEl != null
            && this.configuracionEquipoExtraccion.equipoExtraccionConsulta
            && this.configuracionEquipoExtraccion.equipoExtraccionConsulta.isOk
            && !this.configuracionEquipoExtraccion.equipoExtraccionConsulta.isOk())
            return;
        if (this.configuracionEquipoExtraccion.equipoExtraccionConsulta) {
            if (!this.configuracionEquipoExtraccion.campoAgEl && this.configuracionEquipoExtraccion.equipoExtraccionConsulta instanceof EquipoExtraccion)
                this.configuracionEquipoExtraccion.rutaLista = this.crudServiceBaseUrl + "/getEquipoExtraccionesByDto";
            this.lista = this.configuracionEquipoExtraccion.lecturaP(completar,this.configuracionEquipoExtraccion.equipoExtraccionConsulta);
            if (this.configuracionEquipoExtraccion.campoAgEl) {
                this.rutaAgregar = this.configuracionEquipoExtraccion.agregarP(function(){}, this.configuracionEquipoExtraccion.campoAgEl);
                this.rutaEliminar = this.configuracionEquipoExtraccion.eliminarP(function(){}, this.configuracionEquipoExtraccion.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionEquipoExtraccion.agregarP(completar, this.configuracionEquipoExtraccion.equipoExtraccionConsulta);
                this.rutaEliminar = this.configuracionEquipoExtraccion.eliminarP(completar, this.configuracionEquipoExtraccion.equipoExtraccionConsulta);
            }
        } else {
            this.lista = this.configuracionEquipoExtraccion.lectura();
            this.rutaAgregar = this.configuracionEquipoExtraccion.agregar();
            this.rutaEliminar = this.configuracionEquipoExtraccion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"equipoExtraccion", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"equipoExtraccion", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "idregistroExtraccion")) {
            campos["idregistroExtraccion"] = { editable: this.globalesService.aenable(this,"equipoExtraccion", "idregistroExtraccion"), nullable: true , type: "object" , defaultValue: { "id": "" , "fechaBaja": "" }  };
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"equipoExtraccion", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this,"equipoExtraccion", "primerApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this,"equipoExtraccion", "segundoApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"equipoExtraccion", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"equipoExtraccion", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"equipoExtraccion", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"equipoExtraccion", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"equipoExtraccion", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionEquipoExtraccion.rutaActualizar,
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
            if (self.configuracionEquipoExtraccion.campoAgEl) {
                if (self.configuracionEquipoExtraccion.tipocampoAgEl == "EquipoExtraccionEquipoExtraccion")
                    self.configuracionEquipoExtraccion.campoAgEl.equipoExtraccion2 = options.models[0];
                else
                    self.configuracionEquipoExtraccion.campoAgEl.equipoExtraccion = options.models[0];
                return JSON.stringify(self.configuracionEquipoExtraccion.campoAgEl);
            }else
            if (est.options[operation].data.models.equipoExtraccion) {
                est.options[operation].data.models.equipoExtraccion2 = options.models[0];
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
        if (this.globalesService.avisible(this,"equipoExtraccion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "idregistroExtraccion")) {
            columnas.push({ field: "idregistroExtraccion", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "idregistroExtraccion") , editor: idregistroExtraccionDropDownEditor , template: " #if (idregistroExtraccion){#   #=idregistroExtraccion.fechaBaja# # } # "  });
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "nombre") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "primerApellido") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "segundoApellido") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"equipoExtraccion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"equipoExtraccion", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"equipoExtraccion")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"equipoExtraccion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"equipoExtraccion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"equipoExtraccion")  && this.configuracionEquipoExtraccion.equipoExtraccionConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_equipoExtraccion_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_equipoExtraccion_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionEquipoExtraccion.altoComponente,
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
        this.grid = $("#grid_equipoExtraccion_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidregistroExtraccion = this.urlprovider.serverURL + "registroExtraccion/getRegistroExtraccionesActivos";

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
        function idregistroExtraccionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "tipoDonanteMultiorganico",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidregistroExtraccion,
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
        //        this.grid = $("#grid_equipoExtraccion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.equipoExtraccionSeleccionado = new EquipoExtraccion();
        gridac.equipoExtraccionSeleccionado.from(dataItem);
        gridac.evtEquipoExtraccionSeleccionado.emit(gridac.equipoExtraccionSeleccionado);
        (gridac.equipoExtraccionSeleccionado);
    }


}
