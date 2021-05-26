import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { EstudioLaboratorio } from '../shared/estudio-laboratorio'
import { ConfigurarEstudioLaboratorio } from '../shared/configurar-estudio-laboratorio'
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
    selector: 'app-estudio-laboratorio-list-kendo',
    templateUrl: './estudio-laboratorio-list-kendo.component.html',
    styleUrls: ['./estudio-laboratorio-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class EstudioLaboratorioListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public estudioLaboratorioSeleccionado: EstudioLaboratorio = new EstudioLaboratorio();
    public dataSource: any;
    public grid: any;
    @Input() configuracionEstudioLaboratorio: ConfigurarEstudioLaboratorio = new ConfigurarEstudioLaboratorio();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("estudioLaboratorioSeleccionado") evtEstudioLaboratorioSeleccionado: EventEmitter<EstudioLaboratorio> = new EventEmitter<EstudioLaboratorio>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "estudioLaboratorio";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'estudioLaboratorio'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'estudioLaboratorio'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionEstudioLaboratorio.titulo.indexOf("Catálogo")!= -1){
            this.configuracionEstudioLaboratorio.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionEstudioLaboratorio && changes.configuracionEstudioLaboratorio.currentValue &&
            (changes.configuracionEstudioLaboratorio.previousValue instanceof ConfigurarEstudioLaboratorio)) {
            if (changes.configuracionEstudioLaboratorio.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionEstudioLaboratorio.currentValue.permisosAtributos;
            if (changes.configuracionEstudioLaboratorio.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionEstudioLaboratorio.currentValue.permisosTabla;
            if ($("#grid_estudioLaboratorio_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_estudioLaboratorio_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionEstudioLaboratorio.permisosAtributos &&
            this.configuracionEstudioLaboratorio.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "estudioLaboratorio",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EstudioLaboratorio'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EstudioLaboratorio'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EstudioLaboratorio'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionEstudioLaboratorio.permisosAtributos)
            this.permisosAtributos=this.configuracionEstudioLaboratorio.permisosAtributos;
        if (this.configuracionEstudioLaboratorio.permisosTabla)
            this.permisosTabla=this.configuracionEstudioLaboratorio.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoAtributo&& permisos.estudioLaboratorio.PermisoAtributo.length>0
            && !obj.configuracionEstudioLaboratorio.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.estudioLaboratorio.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.EstudioLaboratorio.PermisoAtributo ;
        }
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoTabla && permisos.estudioLaboratorio.PermisoTabla.length>0
            && !obj.configuracionEstudioLaboratorio.permisosTabla){
            obj.globalesService.evtTablas (permisos.estudioLaboratorio.PermisoTabla,obj);

//            obj.permisosTabla = permisos.EstudioLaboratorio.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_estudioLaboratorio_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionEstudioLaboratorio.campoAgEl != null
            && this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta
            && this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta.isOk
            && !this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta.isOk())
            return;
        if (this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta) {
            if (!this.configuracionEstudioLaboratorio.campoAgEl && this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta instanceof EstudioLaboratorio)
                this.configuracionEstudioLaboratorio.rutaLista = this.crudServiceBaseUrl + "/getEstudioLaboratoriosByDto";
            this.lista = this.configuracionEstudioLaboratorio.lecturaP(completar,this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta);
            if (this.configuracionEstudioLaboratorio.campoAgEl) {
                this.rutaAgregar = this.configuracionEstudioLaboratorio.agregarP(function(){}, this.configuracionEstudioLaboratorio.campoAgEl);
                this.rutaEliminar = this.configuracionEstudioLaboratorio.eliminarP(function(){}, this.configuracionEstudioLaboratorio.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionEstudioLaboratorio.agregarP(completar, this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta);
                this.rutaEliminar = this.configuracionEstudioLaboratorio.eliminarP(completar, this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta);
            }
        } else {
            this.lista = this.configuracionEstudioLaboratorio.lectura();
            this.rutaAgregar = this.configuracionEstudioLaboratorio.agregar();
            this.rutaEliminar = this.configuracionEstudioLaboratorio.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"estudioLaboratorio", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"estudioLaboratorio", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "idevaluacionSolicitud")) {
            campos["idevaluacionSolicitud"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "idevaluacionSolicitud"), nullable: true , type: "object" , defaultValue: { "id": "" , "status": "" }  };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "tipoCornea")) {
            campos["tipoCornea"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "tipoCornea"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "cicatriceLeucoma")) {
            campos["cicatriceLeucoma"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "cicatriceLeucoma"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "brilloCorneal")) {
            campos["brilloCorneal"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "brilloCorneal"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "cuerpoExtrano")) {
            campos["cuerpoExtrano"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "cuerpoExtrano"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "erocioneUlcera")) {
            campos["erocioneUlcera"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "erocioneUlcera"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "valoracion")) {
            campos["valoracion"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "valoracion"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "observacion")) {
            campos["observacion"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "observacion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"estudioLaboratorio", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionEstudioLaboratorio.rutaActualizar,
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
            if (self.configuracionEstudioLaboratorio.campoAgEl) {
                if (self.configuracionEstudioLaboratorio.tipocampoAgEl == "EstudioLaboratorioEstudioLaboratorio")
                    self.configuracionEstudioLaboratorio.campoAgEl.estudioLaboratorio2 = options.models[0];
                else
                    self.configuracionEstudioLaboratorio.campoAgEl.estudioLaboratorio = options.models[0];
                return JSON.stringify(self.configuracionEstudioLaboratorio.campoAgEl);
            }else
            if (est.options[operation].data.models.estudioLaboratorio) {
                est.options[operation].data.models.estudioLaboratorio2 = options.models[0];
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
        if (this.globalesService.avisible(this,"estudioLaboratorio", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "idevaluacionSolicitud")) {
            columnas.push({ field: "idevaluacionSolicitud", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "idevaluacionSolicitud") , editor: idevaluacionSolicitudDropDownEditor , template: " #if (idevaluacionSolicitud){#   #=idevaluacionSolicitud.status# # } # "  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "tipoCornea")) {
            columnas.push({ field: "tipoCornea", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "tipoCornea")  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "cicatriceLeucoma")) {
            columnas.push({ field: "cicatriceLeucoma", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "cicatriceLeucoma")  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "brilloCorneal")) {
            columnas.push({ field: "brilloCorneal", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "brilloCorneal")  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "cuerpoExtrano")) {
            columnas.push({ field: "cuerpoExtrano", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "cuerpoExtrano")  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "erocioneUlcera")) {
            columnas.push({ field: "erocioneUlcera", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "erocioneUlcera")  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "valoracion")) {
            columnas.push({ field: "valoracion", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "valoracion")  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "observacion")) {
            columnas.push({ field: "observacion", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "observacion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"estudioLaboratorio", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"estudioLaboratorio", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"estudioLaboratorio")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"estudioLaboratorio")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"estudioLaboratorio")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"estudioLaboratorio")  && this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_estudioLaboratorio_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_estudioLaboratorio_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionEstudioLaboratorio.altoComponente,
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
        this.grid = $("#grid_estudioLaboratorio_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_estudioLaboratorio_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.estudioLaboratorioSeleccionado = new EstudioLaboratorio();
        gridac.estudioLaboratorioSeleccionado.from(dataItem);
        gridac.evtEstudioLaboratorioSeleccionado.emit(gridac.estudioLaboratorioSeleccionado);
        (gridac.estudioLaboratorioSeleccionado);
    }


}
