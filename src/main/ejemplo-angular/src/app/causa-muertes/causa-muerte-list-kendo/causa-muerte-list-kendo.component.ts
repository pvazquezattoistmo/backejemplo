import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { CausaMuerte } from '../shared/causa-muerte'
import { ConfigurarCausaMuerte } from '../shared/configurar-causa-muerte'
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
    selector: 'app-causa-muerte-list-kendo',
    templateUrl: './causa-muerte-list-kendo.component.html',
    styleUrls: ['./causa-muerte-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class CausaMuerteListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public causaMuerteSeleccionado: CausaMuerte = new CausaMuerte();
    public dataSource: any;
    public grid: any;
    @Input() configuracionCausaMuerte: ConfigurarCausaMuerte = new ConfigurarCausaMuerte();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("causaMuerteSeleccionado") evtCausaMuerteSeleccionado: EventEmitter<CausaMuerte> = new EventEmitter<CausaMuerte>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "causaMuerte";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'causaMuerte'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'causaMuerte'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionCausaMuerte.titulo.indexOf("Catálogo")!= -1){
            this.configuracionCausaMuerte.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionCausaMuerte && changes.configuracionCausaMuerte.currentValue &&
            (changes.configuracionCausaMuerte.previousValue instanceof ConfigurarCausaMuerte)) {
            if (changes.configuracionCausaMuerte.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionCausaMuerte.currentValue.permisosAtributos;
            if (changes.configuracionCausaMuerte.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionCausaMuerte.currentValue.permisosTabla;
            if ($("#grid_causaMuerte_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_causaMuerte_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionCausaMuerte.permisosAtributos &&
            this.configuracionCausaMuerte.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "causaMuerte",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CausaMuerte'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CausaMuerte'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CausaMuerte'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionCausaMuerte.permisosAtributos)
            this.permisosAtributos=this.configuracionCausaMuerte.permisosAtributos;
        if (this.configuracionCausaMuerte.permisosTabla)
            this.permisosTabla=this.configuracionCausaMuerte.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoAtributo&& permisos.causaMuerte.PermisoAtributo.length>0
            && !obj.configuracionCausaMuerte.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.causaMuerte.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.CausaMuerte.PermisoAtributo ;
        }
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoTabla && permisos.causaMuerte.PermisoTabla.length>0
            && !obj.configuracionCausaMuerte.permisosTabla){
            obj.globalesService.evtTablas (permisos.causaMuerte.PermisoTabla,obj);

//            obj.permisosTabla = permisos.CausaMuerte.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_causaMuerte_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionCausaMuerte.campoAgEl != null
            && this.configuracionCausaMuerte.causaMuerteConsulta
            && this.configuracionCausaMuerte.causaMuerteConsulta.isOk
            && !this.configuracionCausaMuerte.causaMuerteConsulta.isOk())
            return;
        if (this.configuracionCausaMuerte.causaMuerteConsulta) {
            if (!this.configuracionCausaMuerte.campoAgEl && this.configuracionCausaMuerte.causaMuerteConsulta instanceof CausaMuerte)
                this.configuracionCausaMuerte.rutaLista = this.crudServiceBaseUrl + "/getCausaMuertesByDto";
            this.lista = this.configuracionCausaMuerte.lecturaP(completar,this.configuracionCausaMuerte.causaMuerteConsulta);
            if (this.configuracionCausaMuerte.campoAgEl) {
                this.rutaAgregar = this.configuracionCausaMuerte.agregarP(function(){}, this.configuracionCausaMuerte.campoAgEl);
                this.rutaEliminar = this.configuracionCausaMuerte.eliminarP(function(){}, this.configuracionCausaMuerte.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionCausaMuerte.agregarP(completar, this.configuracionCausaMuerte.causaMuerteConsulta);
                this.rutaEliminar = this.configuracionCausaMuerte.eliminarP(completar, this.configuracionCausaMuerte.causaMuerteConsulta);
            }
        } else {
            this.lista = this.configuracionCausaMuerte.lectura();
            this.rutaAgregar = this.configuracionCausaMuerte.agregar();
            this.rutaEliminar = this.configuracionCausaMuerte.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"causaMuerte", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"causaMuerte", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"causaMuerte", "tipoCausaMuerte")) {
            campos["tipoCausaMuerte"] = { editable: this.globalesService.aenable(this,"causaMuerte", "tipoCausaMuerte"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"causaMuerte", "descripcion")) {
            campos["descripcion"] = { editable: this.globalesService.aenable(this,"causaMuerte", "descripcion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"causaMuerte", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"causaMuerte", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"causaMuerte", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"causaMuerte", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"causaMuerte", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"causaMuerte", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"causaMuerte", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"causaMuerte", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"causaMuerte", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"causaMuerte", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionCausaMuerte.rutaActualizar,
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
            if (self.configuracionCausaMuerte.campoAgEl) {
                if (self.configuracionCausaMuerte.tipocampoAgEl == "CausaMuerteCausaMuerte")
                    self.configuracionCausaMuerte.campoAgEl.causaMuerte2 = options.models[0];
                else
                    self.configuracionCausaMuerte.campoAgEl.causaMuerte = options.models[0];
                return JSON.stringify(self.configuracionCausaMuerte.campoAgEl);
            }else
            if (est.options[operation].data.models.causaMuerte) {
                est.options[operation].data.models.causaMuerte2 = options.models[0];
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
        if (this.globalesService.avisible(this,"causaMuerte", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"causaMuerte", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"causaMuerte", "tipoCausaMuerte")) {
            columnas.push({ field: "tipoCausaMuerte", title: this.globalesService.aetiqueta(this,"causaMuerte", "tipoCausaMuerte")  });
        }
        if (this.globalesService.avisible(this,"causaMuerte", "descripcion")) {
            columnas.push({ field: "descripcion", title: this.globalesService.aetiqueta(this,"causaMuerte", "descripcion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"causaMuerte", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"causaMuerte", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"causaMuerte", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"causaMuerte", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"causaMuerte", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"causaMuerte", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"causaMuerte", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"causaMuerte", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"causaMuerte", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"causaMuerte", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"causaMuerte")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"causaMuerte")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"causaMuerte")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"causaMuerte")  && this.configuracionCausaMuerte.causaMuerteConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_causaMuerte_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_causaMuerte_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionCausaMuerte.altoComponente,
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
        this.grid = $("#grid_causaMuerte_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";

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

    }

    showDetails(e) {
        e.preventDefault();
        //        this.grid = $("#grid_causaMuerte_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.causaMuerteSeleccionado = new CausaMuerte();
        gridac.causaMuerteSeleccionado.from(dataItem);
        gridac.evtCausaMuerteSeleccionado.emit(gridac.causaMuerteSeleccionado);
        (gridac.causaMuerteSeleccionado);
    }


}
