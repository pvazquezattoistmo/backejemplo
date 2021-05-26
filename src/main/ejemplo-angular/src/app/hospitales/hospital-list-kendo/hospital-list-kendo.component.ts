import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { Hospital } from '../shared/hospital'
import { ConfigurarHospital } from '../shared/configurar-hospital'
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
    selector: 'app-hospital-list-kendo',
    templateUrl: './hospital-list-kendo.component.html',
    styleUrls: ['./hospital-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class HospitalListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public hospitalSeleccionado: Hospital = new Hospital();
    public dataSource: any;
    public grid: any;
    @Input() configuracionHospital: ConfigurarHospital = new ConfigurarHospital();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("hospitalSeleccionado") evtHospitalSeleccionado: EventEmitter<Hospital> = new EventEmitter<Hospital>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "hospital";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'hospital'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'hospital'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionHospital.titulo.indexOf("Catálogo")!= -1){
            this.configuracionHospital.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionHospital && changes.configuracionHospital.currentValue &&
            (changes.configuracionHospital.previousValue instanceof ConfigurarHospital)) {
            if (changes.configuracionHospital.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionHospital.currentValue.permisosAtributos;
            if (changes.configuracionHospital.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionHospital.currentValue.permisosTabla;
            if ($("#grid_hospital_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_hospital_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionHospital.permisosAtributos &&
            this.configuracionHospital.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "hospital",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Hospital'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Hospital'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Hospital'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionHospital.permisosAtributos)
            this.permisosAtributos=this.configuracionHospital.permisosAtributos;
        if (this.configuracionHospital.permisosTabla)
            this.permisosTabla=this.configuracionHospital.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.hospital && permisos.hospital.PermisoAtributo&& permisos.hospital.PermisoAtributo.length>0
            && !obj.configuracionHospital.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.hospital.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.Hospital.PermisoAtributo ;
        }
        if (permisos && permisos.hospital && permisos.hospital.PermisoTabla && permisos.hospital.PermisoTabla.length>0
            && !obj.configuracionHospital.permisosTabla){
            obj.globalesService.evtTablas (permisos.hospital.PermisoTabla,obj);

//            obj.permisosTabla = permisos.Hospital.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_hospital_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionHospital.campoAgEl != null
            && this.configuracionHospital.hospitalConsulta
            && this.configuracionHospital.hospitalConsulta.isOk
            && !this.configuracionHospital.hospitalConsulta.isOk())
            return;
        if (this.configuracionHospital.hospitalConsulta) {
            if (!this.configuracionHospital.campoAgEl && this.configuracionHospital.hospitalConsulta instanceof Hospital)
                this.configuracionHospital.rutaLista = this.crudServiceBaseUrl + "/getHospitalesByDto";
            this.lista = this.configuracionHospital.lecturaP(completar,this.configuracionHospital.hospitalConsulta);
            if (this.configuracionHospital.campoAgEl) {
                this.rutaAgregar = this.configuracionHospital.agregarP(function(){}, this.configuracionHospital.campoAgEl);
                this.rutaEliminar = this.configuracionHospital.eliminarP(function(){}, this.configuracionHospital.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionHospital.agregarP(completar, this.configuracionHospital.hospitalConsulta);
                this.rutaEliminar = this.configuracionHospital.eliminarP(completar, this.configuracionHospital.hospitalConsulta);
            }
        } else {
            this.lista = this.configuracionHospital.lectura();
            this.rutaAgregar = this.configuracionHospital.agregar();
            this.rutaEliminar = this.configuracionHospital.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"hospital", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"hospital", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"hospital", "redIssste")) {
            campos["redIssste"] = { editable: this.globalesService.aenable(this,"hospital", "redIssste"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"hospital", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"hospital", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"hospital", "rnt")) {
            campos["rnt"] = { editable: this.globalesService.aenable(this,"hospital", "rnt"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"hospital", "establecimiento")) {
            campos["establecimiento"] = { editable: this.globalesService.aenable(this,"hospital", "establecimiento"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"hospital", "identidadFederativa")) {
          campos["identidadFederativa"] = { editable: this.globalesService.aenable(this,"hospital", "identidadFederativa"), nullable: true , type: "object" , defaultValue: {"id": "" , "nombre": "" }  };
      }
        if (this.globalesService.avisible(this,"hospital", "dependencia")) {
            campos["dependencia"] = { editable: this.globalesService.aenable(this,"hospital", "dependencia"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"hospital", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"hospital", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"hospital", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"hospital", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"hospital", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"hospital", "fechaBaja"), nullable: true , type:"date" };
        }

        if (this.globalesService.avisible(this,"hospital", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"hospital", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"hospital", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"hospital", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionHospital.rutaActualizar,
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
            if (self.configuracionHospital.campoAgEl) {
                if (self.configuracionHospital.tipocampoAgEl == "HospitalHospital")
                    self.configuracionHospital.campoAgEl.hospital2 = options.models[0];
                else
                    self.configuracionHospital.campoAgEl.hospital = options.models[0];
                return JSON.stringify(self.configuracionHospital.campoAgEl);
            }else
            if (est.options[operation].data.models.hospital) {
                est.options[operation].data.models.hospital2 = options.models[0];
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
        if (this.globalesService.avisible(this,"hospital", "id")) {
            columnas.push({ field: "id", title: "ID"  , width: 37 , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"hospital", "redIssste")) {
            columnas.push({ field: "redIssste", title: this.globalesService.aetiqueta(this,"hospital", "redIssste")  });
        }
        if (this.globalesService.avisible(this,"hospital", "nombre")) {
            columnas.push({ field: "nombre", title: "Nombre del Hospital" , width: 250, editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"hospital", "rnt")) {
            columnas.push({ field: "rnt", title: "RNT" , width: 55, editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"hospital", "establecimiento")) {
            columnas.push({ field: "establecimiento", title: "Establecimiento" , width: 250, editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"hospital", "identidadFederativa")) {
          columnas.push({ field: "identidadFederativa", title: "Estado" , width: 165, editor: identidadFederativaDropDownEditor , template: " #if (identidadFederativa){#   #=identidadFederativa.nombre# # } # "  });
      }
        if (this.globalesService.avisible(this,"hospital", "dependencia")) {
            columnas.push({ field: "dependencia", title: "Dependencia" , width: 125, editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"hospital", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"hospital", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"hospital", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"hospital", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"hospital", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"hospital", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }

        if (this.globalesService.avisible(this,"hospital", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"hospital", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"hospital", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"hospital", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"hospital")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"hospital")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"hospital")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"hospital")  && this.configuracionHospital.hospitalConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: 90
        });
        if (this.grid) $("#grid_hospital_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_hospital_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionHospital.altoComponente,
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
        this.grid = $("#grid_hospital_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutaidentidadFederativa = this.urlprovider.serverURL + "entidadFederativa/getEntidadFederativasActivos";
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";

        function identidadFederativaDropDownEditor(container, options) {
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
                                url: rutaidentidadFederativa,
                                contentType: "application/json",
                                type: "POST",
                            }
                        }
                    }
                });
        }
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
        //        this.grid = $("#grid_hospital_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.hospitalSeleccionado = new Hospital();
        gridac.hospitalSeleccionado.from(dataItem);
        gridac.evtHospitalSeleccionado.emit(gridac.hospitalSeleccionado);
        (gridac.hospitalSeleccionado);
    }


}
