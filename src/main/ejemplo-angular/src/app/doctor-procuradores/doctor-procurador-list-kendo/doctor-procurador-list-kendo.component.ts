import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { DoctorProcurador } from '../shared/doctor-procurador'
import { ConfigurarDoctorProcurador } from '../shared/configurar-doctor-procurador'
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
    selector: 'app-doctor-procurador-list-kendo',
    templateUrl: './doctor-procurador-list-kendo.component.html',
    styleUrls: ['./doctor-procurador-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class DoctorProcuradorListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public doctorProcuradorSeleccionado: DoctorProcurador = new DoctorProcurador();
    public dataSource: any;
    public grid: any;
    @Input() configuracionDoctorProcurador: ConfigurarDoctorProcurador = new ConfigurarDoctorProcurador();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("doctorProcuradorSeleccionado") evtDoctorProcuradorSeleccionado: EventEmitter<DoctorProcurador> = new EventEmitter<DoctorProcurador>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "doctorProcurador";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'doctorProcurador'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'doctorProcurador'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionDoctorProcurador.titulo.indexOf("Catálogo")!= -1){
            this.configuracionDoctorProcurador.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDoctorProcurador && changes.configuracionDoctorProcurador.currentValue &&
            (changes.configuracionDoctorProcurador.previousValue instanceof ConfigurarDoctorProcurador)) {
            if (changes.configuracionDoctorProcurador.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionDoctorProcurador.currentValue.permisosAtributos;
            if (changes.configuracionDoctorProcurador.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionDoctorProcurador.currentValue.permisosTabla;
            if ($("#grid_doctorProcurador_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_doctorProcurador_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionDoctorProcurador.permisosAtributos &&
            this.configuracionDoctorProcurador.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "doctorProcurador",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorProcurador'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorProcurador'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorProcurador'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionDoctorProcurador.permisosAtributos)
            this.permisosAtributos=this.configuracionDoctorProcurador.permisosAtributos;
        if (this.configuracionDoctorProcurador.permisosTabla)
            this.permisosTabla=this.configuracionDoctorProcurador.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoAtributo&& permisos.doctorProcurador.PermisoAtributo.length>0
            && !obj.configuracionDoctorProcurador.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.doctorProcurador.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.DoctorProcurador.PermisoAtributo ;
        }
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoTabla && permisos.doctorProcurador.PermisoTabla.length>0
            && !obj.configuracionDoctorProcurador.permisosTabla){
            obj.globalesService.evtTablas (permisos.doctorProcurador.PermisoTabla,obj);

//            obj.permisosTabla = permisos.DoctorProcurador.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_doctorProcurador_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionDoctorProcurador.campoAgEl != null
            && this.configuracionDoctorProcurador.doctorProcuradorConsulta
            && this.configuracionDoctorProcurador.doctorProcuradorConsulta.isOk
            && !this.configuracionDoctorProcurador.doctorProcuradorConsulta.isOk())
            return;
        if (this.configuracionDoctorProcurador.doctorProcuradorConsulta) {
            if (!this.configuracionDoctorProcurador.campoAgEl && this.configuracionDoctorProcurador.doctorProcuradorConsulta instanceof DoctorProcurador)
                this.configuracionDoctorProcurador.rutaLista = this.crudServiceBaseUrl + "/getDoctorProcuradoresByDto";
            this.lista = this.configuracionDoctorProcurador.lecturaP(completar,this.configuracionDoctorProcurador.doctorProcuradorConsulta);
            if (this.configuracionDoctorProcurador.campoAgEl) {
                this.rutaAgregar = this.configuracionDoctorProcurador.agregarP(function(){}, this.configuracionDoctorProcurador.campoAgEl);
                this.rutaEliminar = this.configuracionDoctorProcurador.eliminarP(function(){}, this.configuracionDoctorProcurador.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionDoctorProcurador.agregarP(completar, this.configuracionDoctorProcurador.doctorProcuradorConsulta);
                this.rutaEliminar = this.configuracionDoctorProcurador.eliminarP(completar, this.configuracionDoctorProcurador.doctorProcuradorConsulta);
            }
        } else {
            this.lista = this.configuracionDoctorProcurador.lectura();
            this.rutaAgregar = this.configuracionDoctorProcurador.agregar();
            this.rutaEliminar = this.configuracionDoctorProcurador.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"doctorProcurador", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"doctorProcurador", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "idhospital")) {
            campos["idhospital"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "idhospital"), nullable: true , type: "object" , defaultValue: { "id": "" , "rnt": "" }  };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "primerApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "segundoApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "correoElectronico")) {
            campos["correoElectronico"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "correoElectronico"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"doctorProcurador", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDoctorProcurador.rutaActualizar,
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
            if (self.configuracionDoctorProcurador.campoAgEl) {
                if (self.configuracionDoctorProcurador.tipocampoAgEl == "DoctorProcuradorDoctorProcurador")
                    self.configuracionDoctorProcurador.campoAgEl.doctorProcurador2 = options.models[0];
                else
                    self.configuracionDoctorProcurador.campoAgEl.doctorProcurador = options.models[0];
                return JSON.stringify(self.configuracionDoctorProcurador.campoAgEl);
            }else
            if (est.options[operation].data.models.doctorProcurador) {
                est.options[operation].data.models.doctorProcurador2 = options.models[0];
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
        if (this.globalesService.avisible(this,"doctorProcurador", "id")) {
            columnas.push({ field: "id", title: "ID"  , width: 40 , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "idhospital")) {
            columnas.push({ field: "idhospital", title: "RNT Procedente" , width: 65 , editor: idhospitalDropDownEditor , template: " #if (idhospital){#   #=idhospital.rnt# # } # "  });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "nombre")) {
            columnas.push({ field: "nombre", title: "Nombre" , width: 130 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: "Primer Apellido" , width: 150 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: "Segundo Apellido" , width: 160 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "correoElectronico")) {
            columnas.push({ field: "correoElectronico", title: "Correo Electrónico" , width: 170 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"doctorProcurador", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"doctorProcurador", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"doctorProcurador", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"doctorProcurador", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"doctorProcurador", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"doctorProcurador", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"doctorProcurador")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"doctorProcurador")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"doctorProcurador")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"doctorProcurador")  && this.configuracionDoctorProcurador.doctorProcuradorConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: 90
        });
        if (this.grid) $("#grid_doctorProcurador_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_doctorProcurador_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDoctorProcurador.altoComponente,
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
        this.grid = $("#grid_doctorProcurador_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
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
        //        this.grid = $("#grid_doctorProcurador_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.doctorProcuradorSeleccionado = new DoctorProcurador();
        gridac.doctorProcuradorSeleccionado.from(dataItem);
        gridac.evtDoctorProcuradorSeleccionado.emit(gridac.doctorProcuradorSeleccionado);
        (gridac.doctorProcuradorSeleccionado);
    }


}
