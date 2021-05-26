import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { UsuarioBtc } from '../shared/usuario-btc'
import { ConfigurarUsuarioBtc } from '../shared/configurar-usuario-btc'
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
    selector: 'app-usuario-btc-list-kendo',
    templateUrl: './usuario-btc-list-kendo.component.html',
    styleUrls: ['./usuario-btc-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class UsuarioBtcListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public usuarioBtcSeleccionado: UsuarioBtc = new UsuarioBtc();
    public dataSource: any;
    public grid: any;
    @Input() configuracionUsuarioBtc: ConfigurarUsuarioBtc = new ConfigurarUsuarioBtc();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("usuarioBtcSeleccionado") evtUsuarioBtcSeleccionado: EventEmitter<UsuarioBtc> = new EventEmitter<UsuarioBtc>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "usuarioBtc";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'usuarioBtc'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'usuarioBtc'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionUsuarioBtc.titulo.indexOf("Catálogo")!= -1){
            this.configuracionUsuarioBtc.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionUsuarioBtc && changes.configuracionUsuarioBtc.currentValue &&
            (changes.configuracionUsuarioBtc.previousValue instanceof ConfigurarUsuarioBtc)) {
            if (changes.configuracionUsuarioBtc.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionUsuarioBtc.currentValue.permisosAtributos;
            if (changes.configuracionUsuarioBtc.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionUsuarioBtc.currentValue.permisosTabla;
            if ($("#grid_usuarioBtc_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_usuarioBtc_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionUsuarioBtc.permisosAtributos &&
            this.configuracionUsuarioBtc.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "usuarioBtc",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'UsuarioBtc'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'UsuarioBtc'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'UsuarioBtc'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionUsuarioBtc.permisosAtributos)
            this.permisosAtributos=this.configuracionUsuarioBtc.permisosAtributos;
        if (this.configuracionUsuarioBtc.permisosTabla)
            this.permisosTabla=this.configuracionUsuarioBtc.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.usuarioBtc && permisos.usuarioBtc.PermisoAtributo&& permisos.usuarioBtc.PermisoAtributo.length>0
            && !obj.configuracionUsuarioBtc.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.usuarioBtc.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.UsuarioBtc.PermisoAtributo ;
        }
        if (permisos && permisos.usuarioBtc && permisos.usuarioBtc.PermisoTabla && permisos.usuarioBtc.PermisoTabla.length>0
            && !obj.configuracionUsuarioBtc.permisosTabla){
            obj.globalesService.evtTablas (permisos.usuarioBtc.PermisoTabla,obj);

//            obj.permisosTabla = permisos.UsuarioBtc.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_usuarioBtc_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionUsuarioBtc.campoAgEl != null
            && this.configuracionUsuarioBtc.usuarioBtcConsulta
            && this.configuracionUsuarioBtc.usuarioBtcConsulta.isOk
            && !this.configuracionUsuarioBtc.usuarioBtcConsulta.isOk())
            return;
        if (this.configuracionUsuarioBtc.usuarioBtcConsulta) {
            if (!this.configuracionUsuarioBtc.campoAgEl && this.configuracionUsuarioBtc.usuarioBtcConsulta instanceof UsuarioBtc)
                this.configuracionUsuarioBtc.rutaLista = this.crudServiceBaseUrl + "/getUsuarioBtcsByDto";
            this.lista = this.configuracionUsuarioBtc.lecturaP(completar,this.configuracionUsuarioBtc.usuarioBtcConsulta);
            if (this.configuracionUsuarioBtc.campoAgEl) {
                this.rutaAgregar = this.configuracionUsuarioBtc.agregarP(function(){}, this.configuracionUsuarioBtc.campoAgEl);
                this.rutaEliminar = this.configuracionUsuarioBtc.eliminarP(function(){}, this.configuracionUsuarioBtc.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionUsuarioBtc.agregarP(completar, this.configuracionUsuarioBtc.usuarioBtcConsulta);
                this.rutaEliminar = this.configuracionUsuarioBtc.eliminarP(completar, this.configuracionUsuarioBtc.usuarioBtcConsulta);
            }
        } else {
            this.lista = this.configuracionUsuarioBtc.lectura();
            this.rutaAgregar = this.configuracionUsuarioBtc.agregar();
            this.rutaEliminar = this.configuracionUsuarioBtc.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"usuarioBtc", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"usuarioBtc", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "idhospital")) {
            campos["idhospital"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "idhospital"), nullable: true , type: "object" , defaultValue: { "id": "", "rnt": "" }  };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "primerApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "segundoApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "correoElectronico")) {
            campos["correoElectronico"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "correoElectronico"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "idcargo")) {
            campos["idcargo"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "idcargo"), nullable: true , type: "object" , defaultValue: { "id": "" , "descripcion": "" }  };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "idperfilRedIssste")) {
            campos["idperfilRedIssste"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "idperfilRedIssste"), nullable: true , type: "object" , defaultValue: { "id": "" , "nombre": "" }  };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"usuarioBtc", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionUsuarioBtc.rutaActualizar,
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
            if (self.configuracionUsuarioBtc.campoAgEl) {
                if (self.configuracionUsuarioBtc.tipocampoAgEl == "UsuarioBtcUsuarioBtc")
                    self.configuracionUsuarioBtc.campoAgEl.usuarioBtc2 = options.models[0];
                else
                    self.configuracionUsuarioBtc.campoAgEl.usuarioBtc = options.models[0];
                return JSON.stringify(self.configuracionUsuarioBtc.campoAgEl);
            }else
            if (est.options[operation].data.models.usuarioBtc) {
                est.options[operation].data.models.usuarioBtc2 = options.models[0];
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
        if (this.globalesService.avisible(this,"usuarioBtc", "id")) {
            columnas.push({ field: "id", title: "ID"  , width: 37 , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "idhospital")) {
            columnas.push({ field: "idhospital", title: "RNT procedente" , width: 65 , editor: idhospitalDropDownEditor , template: " #if (idhospital){#   #=idhospital.rnt# # } # "  });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "nombre")) {
            columnas.push({ field: "nombre", title: "Nombre" , width: 140 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: "Primer Apellido" , width: 150 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: "Segundo Apellido" , width: 160 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "correoElectronico")) {
            columnas.push({ field: "correoElectronico", title: "Correo Electrónico" , width: 170 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"usuarioBtc", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"usuarioBtc", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"usuarioBtc", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "idcargo")) {
            columnas.push({ field: "idcargo", title: "Cargo" , width: 205 , editor: idcargoDropDownEditor , template: " #if (idcargo){#   #=idcargo.descripcion# # } # "  });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "idperfilRedIssste")) {
            columnas.push({ field: "idperfilRedIssste", title: "Perfil" , width: 205 , editor: idperfilRedIsssteDropDownEditor , template: " #if (idperfilRedIssste){#   #=idperfilRedIssste.nombre# # } # "  });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"usuarioBtc", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"usuarioBtc", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"usuarioBtc", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"usuarioBtc")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"usuarioBtc")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"usuarioBtc")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"usuarioBtc")  && this.configuracionUsuarioBtc.usuarioBtcConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: 90
        });
        if (this.grid) $("#grid_usuarioBtc_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_usuarioBtc_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionUsuarioBtc.altoComponente,
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
        this.grid = $("#grid_usuarioBtc_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidperfilRedIssste = this.urlprovider.serverURL + "perfilRedIssste/getPerfilRedIssstesActivos";
        var rutaidcargo = this.urlprovider.serverURL + "catalogoCargo/getCatalogoCargosActivos";
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
        function idperfilRedIsssteDropDownEditor(container, options) {
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
                                url: rutaidperfilRedIssste,
                                contentType: "application/json",
                                type: "POST",
                            }
                        }
                    }
                });
        }
        function idcargoDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "descripcion",
                    dataValueField: "id",
                    filter: "contains",
                    minLength: 5,                    dataSource: {
                        transport: {
                            read: {
                                url: rutaidcargo,
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
                    dataTextField: "rnt",
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
        //        this.grid = $("#grid_usuarioBtc_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.usuarioBtcSeleccionado = new UsuarioBtc();
        gridac.usuarioBtcSeleccionado.from(dataItem);
        gridac.evtUsuarioBtcSeleccionado.emit(gridac.usuarioBtcSeleccionado);
        (gridac.usuarioBtcSeleccionado);
    }


}
