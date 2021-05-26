import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { Usuario } from '../shared/usuario'
import { ConfigurarUsuario } from '../shared/configurar-usuario'
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
    selector: 'app-usuario-list-kendo',
    templateUrl: './usuario-list-kendo.component.html',
    styleUrls: ['./usuario-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class UsuarioListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public usuarioSeleccionado: Usuario = new Usuario();
    public dataSource: any;
    public grid: any;
    @Input() configuracionUsuario: ConfigurarUsuario = new ConfigurarUsuario();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("usuarioSeleccionado") evtUsuarioSeleccionado: EventEmitter<Usuario> = new EventEmitter<Usuario>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "usuario";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'usuario'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'usuario'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionUsuario.titulo.indexOf("Catálogo")!= -1){
            this.configuracionUsuario.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionUsuario && changes.configuracionUsuario.currentValue &&
            (changes.configuracionUsuario.previousValue instanceof ConfigurarUsuario)) {
            if (changes.configuracionUsuario.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionUsuario.currentValue.permisosAtributos;
            if (changes.configuracionUsuario.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionUsuario.currentValue.permisosTabla;
            if ($("#grid_usuario_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_usuario_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionUsuario.permisosAtributos &&
            this.configuracionUsuario.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "usuario",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Usuario'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Usuario'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Usuario'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionUsuario.permisosAtributos)
            this.permisosAtributos=this.configuracionUsuario.permisosAtributos;
        if (this.configuracionUsuario.permisosTabla)
            this.permisosTabla=this.configuracionUsuario.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo&& permisos.usuario.PermisoAtributo.length>0
            && !obj.configuracionUsuario.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.usuario.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.Usuario.PermisoAtributo ;
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoTabla && permisos.usuario.PermisoTabla.length>0
            && !obj.configuracionUsuario.permisosTabla){
            obj.globalesService.evtTablas (permisos.usuario.PermisoTabla,obj);

//            obj.permisosTabla = permisos.Usuario.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_usuario_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionUsuario.campoAgEl != null
            && this.configuracionUsuario.usuarioConsulta
            && this.configuracionUsuario.usuarioConsulta.isOk
            && !this.configuracionUsuario.usuarioConsulta.isOk())
            return;
        if (this.configuracionUsuario.usuarioConsulta) {
            if (!this.configuracionUsuario.campoAgEl && this.configuracionUsuario.usuarioConsulta instanceof Usuario)
                this.configuracionUsuario.rutaLista = this.crudServiceBaseUrl + "/getUsuariosByDto";
            this.lista = this.configuracionUsuario.lecturaP(completar,this.configuracionUsuario.usuarioConsulta);
            if (this.configuracionUsuario.campoAgEl) {
                this.rutaAgregar = this.configuracionUsuario.agregarP(function(){}, this.configuracionUsuario.campoAgEl);
                this.rutaEliminar = this.configuracionUsuario.eliminarP(function(){}, this.configuracionUsuario.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionUsuario.agregarP(completar, this.configuracionUsuario.usuarioConsulta);
                this.rutaEliminar = this.configuracionUsuario.eliminarP(completar, this.configuracionUsuario.usuarioConsulta);
            }
        } else {
            this.lista = this.configuracionUsuario.lectura();
            this.rutaAgregar = this.configuracionUsuario.agregar();
            this.rutaEliminar = this.configuracionUsuario.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"usuario", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"usuario", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"usuario", "username")) {
            campos["username"] = { editable: this.globalesService.aenable(this,"usuario", "username"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuario", "password")) {
            campos["password"] = { editable: this.globalesService.aenable(this,"usuario", "password"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuario", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this,"usuario", "nombre"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuario", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this,"usuario", "primerApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuario", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this,"usuario", "segundoApellido"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuario", "correoElectronico")) {
            campos["correoElectronico"] = { editable: this.globalesService.aenable(this,"usuario", "correoElectronico"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"usuario", "perfil")) {
            campos["perfil"] = { editable: this.globalesService.aenable(this,"usuario", "perfil"), nullable: true , type: "object" , defaultValue: { "id": "" , "nombre": "" }  };
        }
        if (this.globalesService.avisible(this,"usuario", "idcargo")) {
            campos["idcargo"] = { editable: this.globalesService.aenable(this,"usuario", "idcargo"), nullable: true , type: "object" , defaultValue: { "id": "" , "descripcion": "" }  };
        }
        if (this.globalesService.avisible(this,"usuario", "idhospital")) {
            campos["idhospital"] = { editable: this.globalesService.aenable(this,"usuario", "idhospital"), nullable: true , type: "object" , defaultValue: { "id": "", "rnt": "" }  };
        }
        if (this.globalesService.avisible(this,"usuario", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"usuario", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"usuario", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"usuario", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"usuario", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"usuario", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"usuario", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"usuario", "status"), nullable: true , defaultValue: "1"  };
        }
        if (this.globalesService.avisible(this,"usuario", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"usuario", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionUsuario.rutaActualizar,
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
            if (self.configuracionUsuario.campoAgEl) {
                if (self.configuracionUsuario.tipocampoAgEl == "UsuarioUsuario")
                    self.configuracionUsuario.campoAgEl.usuario2 = options.models[0];
                else
                    self.configuracionUsuario.campoAgEl.usuario = options.models[0];
                return JSON.stringify(self.configuracionUsuario.campoAgEl);
            }else
            if (est.options[operation].data.models.usuario) {
                est.options[operation].data.models.usuario2 = options.models[0];
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
        if (this.globalesService.avisible(this,"usuario", "id")) {
            columnas.push({ field: "id", title: "ID"  , width: 37 , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"usuario", "username")) {
            columnas.push({ field: "username", title: "Usuario" , width: 140 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuario", "password")) {
            columnas.push({ field: "password", title: "Contraseña" , width: 140 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuario", "nombre")) {
            columnas.push({ field: "nombre", title: "Nombre" , width: 140 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuario", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: "Primer Apellido" , width: 150 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuario", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: "Segundo Apellido" , width: 160 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuario", "correoElectronico")) {
            columnas.push({ field: "correoElectronico", title: "Correo Electrónico" , width: 170 , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"usuario", "perfil")) {
            columnas.push({ field: "perfil", title: "Perfil" , width: 205 , editor: perfilDropDownEditor , template: " #if (perfil){#   #=perfil.nombre# # } # "  });
        }
        if (this.globalesService.avisible(this,"usuario", "idcargo")) {
            columnas.push({ field: "idcargo", title: "Cargo" , width: 205 , editor: idcargoDropDownEditor , template: " #if (idcargo){#   #=idcargo.descripcion# # } # "  });
        }
        if (this.globalesService.avisible(this,"usuario", "idhospital")) {
            columnas.push({ field: "idhospital", title: "RNT procedente" , width: 65 , editor: idhospitalDropDownEditor , template: " #if (idhospital){#   #=idhospital.rnt# # } # "  });
        }
        if (this.globalesService.avisible(this,"usuario", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"usuario", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"usuario", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"usuario", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"usuario", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"usuario", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"usuario", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"usuario", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this,"usuario", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"usuario", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"usuario")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"usuario")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"usuario")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"usuario")  && this.configuracionUsuario.usuarioConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: 90
        });
        if (this.grid) $("#grid_usuario_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_usuario_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionUsuario.altoComponente,
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
        this.grid = $("#grid_usuario_"+this.nombregrid).data("kendoGrid");
        this.grid.refresh();

        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaperfil = this.urlprovider.serverURL + "perfil/getPerfilesActivos";
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
        function perfilDropDownEditor(container, options) {
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
                                url: rutaperfil,
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
        //        this.grid = $("#grid_usuario_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.usuarioSeleccionado = new Usuario();
        gridac.usuarioSeleccionado.from(dataItem);
        gridac.evtUsuarioSeleccionado.emit(gridac.usuarioSeleccionado);
        (gridac.usuarioSeleccionado);
    }


}
