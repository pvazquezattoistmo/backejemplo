import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { DoctorSolicitante } from '../shared/doctor-solicitante'
import { ConfigurarDoctorSolicitante } from '../shared/configurar-doctor-solicitante'
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
    selector: 'app-doctor-solicitante-list-kendo',
    templateUrl: './doctor-solicitante-list-kendo.component.html',
    styleUrls: ['./doctor-solicitante-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class DoctorSolicitanteListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public doctorSolicitanteSeleccionado: DoctorSolicitante = new DoctorSolicitante();
    public dataSource: any;
    public grid: any;
    @Input() configuracionDoctorSolicitante: ConfigurarDoctorSolicitante = new ConfigurarDoctorSolicitante();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("doctorSolicitanteSeleccionado") evtDoctorSolicitanteSeleccionado: EventEmitter<DoctorSolicitante> = new EventEmitter<DoctorSolicitante>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "doctorSolicitante";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'doctorSolicitante'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'doctorSolicitante'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionDoctorSolicitante.titulo.indexOf("Catálogo")!= -1){
            this.configuracionDoctorSolicitante.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDoctorSolicitante && changes.configuracionDoctorSolicitante.currentValue &&
            (changes.configuracionDoctorSolicitante.previousValue instanceof ConfigurarDoctorSolicitante)) {
            if (changes.configuracionDoctorSolicitante.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionDoctorSolicitante.currentValue.permisosAtributos;
            if (changes.configuracionDoctorSolicitante.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionDoctorSolicitante.currentValue.permisosTabla;
            if ($("#grid_doctorSolicitante_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_doctorSolicitante_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionDoctorSolicitante.permisosAtributos &&
            this.configuracionDoctorSolicitante.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "doctorSolicitante",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorSolicitante'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorSolicitante'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorSolicitante'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionDoctorSolicitante.permisosAtributos)
            this.permisosAtributos=this.configuracionDoctorSolicitante.permisosAtributos;
        if (this.configuracionDoctorSolicitante.permisosTabla)
            this.permisosTabla=this.configuracionDoctorSolicitante.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoAtributo&& permisos.doctorSolicitante.PermisoAtributo.length>0
            && !obj.configuracionDoctorSolicitante.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.doctorSolicitante.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.DoctorSolicitante.PermisoAtributo ;
        }
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoTabla && permisos.doctorSolicitante.PermisoTabla.length>0
            && !obj.configuracionDoctorSolicitante.permisosTabla){
            obj.globalesService.evtTablas (permisos.doctorSolicitante.PermisoTabla,obj);

//            obj.permisosTabla = permisos.DoctorSolicitante.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_doctorSolicitante_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionDoctorSolicitante.campoAgEl != null
            && this.configuracionDoctorSolicitante.doctorSolicitanteConsulta
            && this.configuracionDoctorSolicitante.doctorSolicitanteConsulta.isOk
            && !this.configuracionDoctorSolicitante.doctorSolicitanteConsulta.isOk())
            return;
        if (this.configuracionDoctorSolicitante.doctorSolicitanteConsulta) {
            if (!this.configuracionDoctorSolicitante.campoAgEl && this.configuracionDoctorSolicitante.doctorSolicitanteConsulta instanceof DoctorSolicitante)
                this.configuracionDoctorSolicitante.rutaLista = this.crudServiceBaseUrl + "/getDoctorSolicitantesByDto";
            this.lista = this.configuracionDoctorSolicitante.lecturaP(completar,this.configuracionDoctorSolicitante.doctorSolicitanteConsulta);
            if (this.configuracionDoctorSolicitante.campoAgEl) {
                this.rutaAgregar = this.configuracionDoctorSolicitante.agregarP(function(){}, this.configuracionDoctorSolicitante.campoAgEl);
                this.rutaEliminar = this.configuracionDoctorSolicitante.eliminarP(function(){}, this.configuracionDoctorSolicitante.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionDoctorSolicitante.agregarP(completar, this.configuracionDoctorSolicitante.doctorSolicitanteConsulta);
                this.rutaEliminar = this.configuracionDoctorSolicitante.eliminarP(completar, this.configuracionDoctorSolicitante.doctorSolicitanteConsulta);
            }
        } else {
            this.lista = this.configuracionDoctorSolicitante.lectura();
            this.rutaAgregar = this.configuracionDoctorSolicitante.agregar();
            this.rutaEliminar = this.configuracionDoctorSolicitante.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"doctorSolicitante", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"doctorSolicitante", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "idhospital")) {
            campos["idhospital"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "idhospital"), nullable: true, type: "object" , defaultValue: { "id": "" , "rnt": "" }  };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "primerApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "segundoApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "correoElectronico")) {
            campos["correoElectronico"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "correoElectronico"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "telefono")) {
            campos["telefono"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "telefono"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "fechaBaja"), nullable: true , type:"date" };
        }
        // if (this.globalesService.avisible(this,"doctorSolicitante", "idhospital")) {
        //     campos["idhospital"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "idhospital"), nullable: true, type: "object" , defaultValue: { "id": "" , "rnt": "" }  };
        // }
        if (this.globalesService.avisible(this,"doctorSolicitante", "idcargo")) {
            campos["idcargo"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "idcargo"), nullable: true , type: "object" , defaultValue: { "id": "" , "descripcion": "" }  };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDoctorSolicitante.rutaActualizar,
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
            if (self.configuracionDoctorSolicitante.campoAgEl) {
                if (self.configuracionDoctorSolicitante.tipocampoAgEl == "DoctorSolicitanteDoctorSolicitante")
                    self.configuracionDoctorSolicitante.campoAgEl.doctorSolicitante2 = options.models[0];
                else
                    self.configuracionDoctorSolicitante.campoAgEl.doctorSolicitante = options.models[0];
                return JSON.stringify(self.configuracionDoctorSolicitante.campoAgEl);
            }else
            if (est.options[operation].data.models.doctorSolicitante) {
                est.options[operation].data.models.doctorSolicitante2 = options.models[0];
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
        if (this.globalesService.avisible(this,"doctorSolicitante", "id")) {
            columnas.push({ field: "id", title: "ID" , width: 40 , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "idhospital")) {
            columnas.push({ field: "idhospital", title: "RNT Procedente" , width: 65 , template: " #if (idhospital){#   #=idhospital.rnt# # } # "  });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "nombre")) {
            columnas.push({ field: "nombre", title: "Nombre" , width: 130 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: "Primer Apellido" , width: 150 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: "Segundo Apellido" , width: 160 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "correoElectronico")) {
            columnas.push({ field: "correoElectronico", title: "Correo Electrónico" , width: 170 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "telefono")) {
            columnas.push({ field: "telefono", title: "Teléfono" , width: 100 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"doctorSolicitante", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"doctorSolicitante", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"doctorSolicitante", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        // if (this.globalesService.avisible(this,"doctorSolicitante", "idhospital")) {
        //     columnas.push({ field: "idhospital", title: this.globalesService.aetiqueta(this,"doctorSolicitante", "idhospital") , template: " #if (idhospital){#   #=idhospital.rnt# # } # "  });
        // }
        if (this.globalesService.avisible(this,"doctorSolicitante", "idcargo")) {
            columnas.push({ field: "idcargo", title: "Cargo" , width: 130 , editor: idcargoDropDownEditor , template: " #if (idcargo){#   #=idcargo.descripcion# # } # "  });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"doctorSolicitante", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"doctorSolicitante", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"doctorSolicitante", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"doctorSolicitante")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"doctorSolicitante")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"doctorSolicitante")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"doctorSolicitante")  && this.configuracionDoctorSolicitante.doctorSolicitanteConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: 90
        });
        if (this.grid) $("#grid_doctorSolicitante_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_doctorSolicitante_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDoctorSolicitante.altoComponente,
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
        this.grid = $("#grid_doctorSolicitante_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidcargo = this.urlprovider.serverURL + "catalogoCargo/getCatalogoCargosActivos";

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

    }

    showDetails(e) {
        e.preventDefault();
        //        this.grid = $("#grid_doctorSolicitante_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.doctorSolicitanteSeleccionado = new DoctorSolicitante();
        gridac.doctorSolicitanteSeleccionado.from(dataItem);
        gridac.evtDoctorSolicitanteSeleccionado.emit(gridac.doctorSolicitanteSeleccionado);
        (gridac.doctorSolicitanteSeleccionado);
    }


}
