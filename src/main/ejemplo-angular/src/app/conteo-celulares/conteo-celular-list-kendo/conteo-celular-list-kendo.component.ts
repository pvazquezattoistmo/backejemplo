import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { URLProvider } from '../../shared/url-provider'
import { GlobalesService } from '../../shared/globales.service';
import { ConteoCelular } from '../shared/conteo-celular'
import { ConfigurarConteoCelular } from '../shared/configurar-conteo-celular'
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
    selector: 'app-conteo-celular-list-kendo',
    templateUrl: './conteo-celular-list-kendo.component.html',
    styleUrls: ['./conteo-celular-list-kendo.component.css'],
    providers: [
//             PermisoTablaService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
//                PermisoAtributoService
               ]

})
export class ConteoCelularListKendoComponent implements OnInit {
    public usuariologueado;
    public crudServiceBaseUrl;
    public permisosAtributos = [];
    public permisosTabla={ "tabla": "", "permiso": 0, "etiqueta": "" };
    public conteoCelularSeleccionado: ConteoCelular = new ConteoCelular();
    public dataSource: any;
    public grid: any;
    @Input() configuracionConteoCelular: ConfigurarConteoCelular = new ConfigurarConteoCelular();
    @Input() nombregrid: string = "";
    public lista;
    public rutaAgregar;
    public rutaEliminar;
    @Output("conteoCelularSeleccionado") evtConteoCelularSeleccionado: EventEmitter<ConteoCelular> = new EventEmitter<ConteoCelular>();

    constructor(public urlprovider: URLProvider ,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               public globalesService: GlobalesService,
//               public permisoTablaService: PermisoTablaService,
//               public permisoAtributoService: PermisoAtributoService
                 ) {
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "conteoCelular";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'conteoCelular'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'conteoCelular'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }

    actualizaTituloInicial(){
        if (this.configuracionConteoCelular.titulo.indexOf("Catálogo")!= -1){
            this.configuracionConteoCelular.titulo = "Catálogo "+this.permisosTabla.etiqueta;
        }
    }

    ngOnChanges(changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionConteoCelular && changes.configuracionConteoCelular.currentValue &&
            (changes.configuracionConteoCelular.previousValue instanceof ConfigurarConteoCelular)) {
            if (changes.configuracionConteoCelular.currentValue.permisosAtributos)
                this.permisosAtributos=changes.configuracionConteoCelular.currentValue.permisosAtributos;
            if (changes.configuracionConteoCelular.currentValue.permisosTabla)
                this.permisosTabla=changes.configuracionConteoCelular.currentValue.permisosTabla;
            if ($("#grid_conteoCelular_"+this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    }

    ngOnInit() {
        self["grid_conteoCelular_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var  ejecutarpermisos : boolean = true;
        if (this.configuracionConteoCelular.permisosAtributos &&
            this.configuracionConteoCelular.permisosTabla)
            ejecutarpermisos =false;
        if (this.usuariologueado && ejecutarpermisos){
            if (this.usuariologueado.perfil){
                  var tablas= [
                                "conteoCelular",
                               ];
                  var parametros:any ={
                      "id_usu": this.usuariologueado.id,
                      "tablas":tablas,
		      "id_exp": -1

                  };
                  this.coreService.permisos(parametros,this.evtCorePermisos,this);
//                discon="with perfil.id = "+this.usuariologueado.perfil.id;
//                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'ConteoCelular'";
//                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'ConteoCelular'";
//                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'ConteoCelular'";
//                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
//                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
//                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
             }
        }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

        if (this.configuracionConteoCelular.permisosAtributos)
            this.permisosAtributos=this.configuracionConteoCelular.permisosAtributos;
        if (this.configuracionConteoCelular.permisosTabla)
            this.permisosTabla=this.configuracionConteoCelular.permisosTabla;
        this.configuraGrid();
    }
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        if (permisos && permisos.conteoCelular && permisos.conteoCelular.PermisoAtributo&& permisos.conteoCelular.PermisoAtributo.length>0
            && !obj.configuracionConteoCelular.permisosAtributos){
            obj.globalesService.evtAtributos (permisos.conteoCelular.PermisoAtributo,obj);
//            obj.permisosAtributos = permisos.ConteoCelular.PermisoAtributo ;
        }
        if (permisos && permisos.conteoCelular && permisos.conteoCelular.PermisoTabla && permisos.conteoCelular.PermisoTabla.length>0
            && !obj.configuracionConteoCelular.permisosTabla){
            obj.globalesService.evtTablas (permisos.conteoCelular.PermisoTabla,obj);

//            obj.permisosTabla = permisos.ConteoCelular.PermisoTabla[0] ;
//            obj.permisosaccionesInicio();
        }
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    configuraGrid(){
        if ( $("#grid_conteoCelular_"+this.nombregrid).data("kendoGrid")) {
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
        if (this.configuracionConteoCelular.campoAgEl != null
            && this.configuracionConteoCelular.conteoCelularConsulta
            && this.configuracionConteoCelular.conteoCelularConsulta.isOk
            && !this.configuracionConteoCelular.conteoCelularConsulta.isOk())
            return;
        if (this.configuracionConteoCelular.conteoCelularConsulta) {
            if (!this.configuracionConteoCelular.campoAgEl && this.configuracionConteoCelular.conteoCelularConsulta instanceof ConteoCelular)
                this.configuracionConteoCelular.rutaLista = this.crudServiceBaseUrl + "/getConteoCelularesByDto";
            this.lista = this.configuracionConteoCelular.lecturaP(completar,this.configuracionConteoCelular.conteoCelularConsulta);
            if (this.configuracionConteoCelular.campoAgEl) {
                this.rutaAgregar = this.configuracionConteoCelular.agregarP(function(){}, this.configuracionConteoCelular.campoAgEl);
                this.rutaEliminar = this.configuracionConteoCelular.eliminarP(function(){}, this.configuracionConteoCelular.campoAgEl);
            } else {
                this.rutaAgregar = this.configuracionConteoCelular.agregarP(completar, this.configuracionConteoCelular.conteoCelularConsulta);
                this.rutaEliminar = this.configuracionConteoCelular.eliminarP(completar, this.configuracionConteoCelular.conteoCelularConsulta);
            }
        } else {
            this.lista = this.configuracionConteoCelular.lectura();
            this.rutaAgregar = this.configuracionConteoCelular.agregar();
            this.rutaEliminar = this.configuracionConteoCelular.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this,"conteoCelular", "id")) {
            modelo["id"] = "id";
        }

        var campos = {};
        if (this.globalesService.avisible(this,"conteoCelular", "id")) {
            campos["id"] = { editable: false, nullable: true , type:"number" };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "idevaluacionSolicitud")) {
            campos["idevaluacionSolicitud"] = { editable: this.globalesService.aenable(this,"conteoCelular", "idevaluacionSolicitud"), nullable: true , type: "object" , defaultValue: { "id": "" , "status": "" }  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "numeroCelular")) {
            campos["numeroCelular"] = { editable: this.globalesService.aenable(this,"conteoCelular", "numeroCelular"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "idnumeroCelula")) {
            campos["idnumeroCelula"] = { editable: this.globalesService.aenable(this,"conteoCelular", "idnumeroCelula"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "hexagonalidad")) {
            campos["hexagonalidad"] = { editable: this.globalesService.aenable(this,"conteoCelular", "hexagonalidad"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "mayor60")) {
            campos["mayor60"] = { editable: this.globalesService.aenable(this,"conteoCelular", "mayor60"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "plemorfismo")) {
            campos["plemorfismo"] = { editable: this.globalesService.aenable(this,"conteoCelular", "plemorfismo"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "cvtamano")) {
            campos["cvtamano"] = { editable: this.globalesService.aenable(this,"conteoCelular", "cvtamano"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "normalMenor33")) {
            campos["normalMenor33"] = { editable: this.globalesService.aenable(this,"conteoCelular", "normalMenor33"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "polimegatismo")) {
            campos["polimegatismo"] = { editable: this.globalesService.aenable(this,"conteoCelular", "polimegatismo"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "paquimetria")) {
            campos["paquimetria"] = { editable: this.globalesService.aenable(this,"conteoCelular", "paquimetria"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "idpaquimetria")) {
            campos["idpaquimetria"] = { editable: this.globalesService.aenable(this,"conteoCelular", "idpaquimetria"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "homogeneidad")) {
            campos["homogeneidad"] = { editable: this.globalesService.aenable(this,"conteoCelular", "homogeneidad"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "numeroCampo")) {
            campos["numeroCampo"] = { editable: this.globalesService.aenable(this,"conteoCelular", "numeroCampo"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "gutta")) {
            campos["gutta"] = { editable: this.globalesService.aenable(this,"conteoCelular", "gutta"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "pliegue")) {
            campos["pliegue"] = { editable: this.globalesService.aenable(this,"conteoCelular", "pliegue"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "estriaRotura")) {
            campos["estriaRotura"] = { editable: this.globalesService.aenable(this,"conteoCelular", "estriaRotura"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "deposito")) {
            campos["deposito"] = { editable: this.globalesService.aenable(this,"conteoCelular", "deposito"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "discontinuidad")) {
            campos["discontinuidad"] = { editable: this.globalesService.aenable(this,"conteoCelular", "discontinuidad"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "otra")) {
            campos["otra"] = { editable: this.globalesService.aenable(this,"conteoCelular", "otra"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "otraDescripcion")) {
            campos["otraDescripcion"] = { editable: this.globalesService.aenable(this,"conteoCelular", "otraDescripcion"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "zonaCelular")) {
            campos["zonaCelular"] = { editable: this.globalesService.aenable(this,"conteoCelular", "zonaCelular"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "valoracionCi")) {
            campos["valoracionCi"] = { editable: this.globalesService.aenable(this,"conteoCelular", "valoracionCi"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "valoracionCd")) {
            campos["valoracionCd"] = { editable: this.globalesService.aenable(this,"conteoCelular", "valoracionCd"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "observacionCd")) {
            campos["observacionCd"] = { editable: this.globalesService.aenable(this,"conteoCelular", "observacionCd"), nullable: true  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "valoracionFinalEndotelioCi")) {
            campos["valoracionFinalEndotelioCi"] = { editable: this.globalesService.aenable(this,"conteoCelular", "valoracionFinalEndotelioCi"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "valoracionFinalEndotelioCd")) {
            campos["valoracionFinalEndotelioCd"] = { editable: this.globalesService.aenable(this,"conteoCelular", "valoracionFinalEndotelioCd"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "responsableMicroscopio")) {
            campos["responsableMicroscopio"] = { editable: this.globalesService.aenable(this,"conteoCelular", "responsableMicroscopio"), nullable: true , type:"string" };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this,"conteoCelular", "fechaRegistro"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this,"conteoCelular", "fechaActualizacion"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this,"conteoCelular", "fechaBaja"), nullable: true , type:"date" };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this,"conteoCelular", "usuarioUltMov"), nullable: true , type: "object" , defaultValue: { "id": "" , "password": "" }  };
        }
        if (this.globalesService.avisible(this,"conteoCelular", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this,"conteoCelular", "status"), nullable: true , type:"string", defaultValue: "1"  };
        }

        modelo["fields"] = campos;
        var slf = this;

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionConteoCelular.rutaActualizar,
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
            if (self.configuracionConteoCelular.campoAgEl) {
                if (self.configuracionConteoCelular.tipocampoAgEl == "ConteoCelularConteoCelular")
                    self.configuracionConteoCelular.campoAgEl.conteoCelular2 = options.models[0];
                else
                    self.configuracionConteoCelular.campoAgEl.conteoCelular = options.models[0];
                return JSON.stringify(self.configuracionConteoCelular.campoAgEl);
            }else
            if (est.options[operation].data.models.conteoCelular) {
                est.options[operation].data.models.conteoCelular2 = options.models[0];
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
        if (this.globalesService.avisible(this,"conteoCelular", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this,"conteoCelular", "id")  , editor: this.globalesService.txtNumero  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "idevaluacionSolicitud")) {
            columnas.push({ field: "idevaluacionSolicitud", title: this.globalesService.aetiqueta(this,"conteoCelular", "idevaluacionSolicitud") , editor: idevaluacionSolicitudDropDownEditor , template: " #if (idevaluacionSolicitud){#   #=idevaluacionSolicitud.status# # } # "  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "numeroCelular")) {
            columnas.push({ field: "numeroCelular", title: this.globalesService.aetiqueta(this,"conteoCelular", "numeroCelular")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "idnumeroCelula")) {
            columnas.push({ field: "idnumeroCelula", title: this.globalesService.aetiqueta(this,"conteoCelular", "idnumeroCelula")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "hexagonalidad")) {
            columnas.push({ field: "hexagonalidad", title: this.globalesService.aetiqueta(this,"conteoCelular", "hexagonalidad")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "mayor60")) {
            columnas.push({ field: "mayor60", title: this.globalesService.aetiqueta(this,"conteoCelular", "mayor60")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "plemorfismo")) {
            columnas.push({ field: "plemorfismo", title: this.globalesService.aetiqueta(this,"conteoCelular", "plemorfismo")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "cvtamano")) {
            columnas.push({ field: "cvtamano", title: this.globalesService.aetiqueta(this,"conteoCelular", "cvtamano")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "normalMenor33")) {
            columnas.push({ field: "normalMenor33", title: this.globalesService.aetiqueta(this,"conteoCelular", "normalMenor33")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "polimegatismo")) {
            columnas.push({ field: "polimegatismo", title: this.globalesService.aetiqueta(this,"conteoCelular", "polimegatismo")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "paquimetria")) {
            columnas.push({ field: "paquimetria", title: this.globalesService.aetiqueta(this,"conteoCelular", "paquimetria")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "idpaquimetria")) {
            columnas.push({ field: "idpaquimetria", title: this.globalesService.aetiqueta(this,"conteoCelular", "idpaquimetria")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "homogeneidad")) {
            columnas.push({ field: "homogeneidad", title: this.globalesService.aetiqueta(this,"conteoCelular", "homogeneidad")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "numeroCampo")) {
            columnas.push({ field: "numeroCampo", title: this.globalesService.aetiqueta(this,"conteoCelular", "numeroCampo")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "gutta")) {
            columnas.push({ field: "gutta", title: this.globalesService.aetiqueta(this,"conteoCelular", "gutta")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "pliegue")) {
            columnas.push({ field: "pliegue", title: this.globalesService.aetiqueta(this,"conteoCelular", "pliegue")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "estriaRotura")) {
            columnas.push({ field: "estriaRotura", title: this.globalesService.aetiqueta(this,"conteoCelular", "estriaRotura")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "deposito")) {
            columnas.push({ field: "deposito", title: this.globalesService.aetiqueta(this,"conteoCelular", "deposito")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "discontinuidad")) {
            columnas.push({ field: "discontinuidad", title: this.globalesService.aetiqueta(this,"conteoCelular", "discontinuidad")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "otra")) {
            columnas.push({ field: "otra", title: this.globalesService.aetiqueta(this,"conteoCelular", "otra")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "otraDescripcion")) {
            columnas.push({ field: "otraDescripcion", title: this.globalesService.aetiqueta(this,"conteoCelular", "otraDescripcion") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "zonaCelular")) {
            columnas.push({ field: "zonaCelular", title: this.globalesService.aetiqueta(this,"conteoCelular", "zonaCelular")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "valoracionCi")) {
            columnas.push({ field: "valoracionCi", title: this.globalesService.aetiqueta(this,"conteoCelular", "valoracionCi")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "valoracionCd")) {
            columnas.push({ field: "valoracionCd", title: this.globalesService.aetiqueta(this,"conteoCelular", "valoracionCd")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "observacionCd")) {
            columnas.push({ field: "observacionCd", title: this.globalesService.aetiqueta(this,"conteoCelular", "observacionCd")  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "valoracionFinalEndotelioCi")) {
            columnas.push({ field: "valoracionFinalEndotelioCi", title: this.globalesService.aetiqueta(this,"conteoCelular", "valoracionFinalEndotelioCi") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "valoracionFinalEndotelioCd")) {
            columnas.push({ field: "valoracionFinalEndotelioCd", title: this.globalesService.aetiqueta(this,"conteoCelular", "valoracionFinalEndotelioCd") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "responsableMicroscopio")) {
            columnas.push({ field: "responsableMicroscopio", title: this.globalesService.aetiqueta(this,"conteoCelular", "responsableMicroscopio") , editor: this.globalesService.txtTexto  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this,"conteoCelular", "fechaRegistro") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this,"conteoCelular", "fechaActualizacion") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this,"conteoCelular", "fechaBaja") , type:"date",
                  editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this,"conteoCelular", "usuarioUltMov") , editor: usuarioUltMovDropDownEditor , template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # "  });
        }
        if (this.globalesService.avisible(this,"conteoCelular", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this,"conteoCelular", "status") , editor: this.globalesService.estadoDropDownEditor,
                  template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }

        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this,"conteoCelular")) op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this,"conteoCelular")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this,"conteoCelular")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this,"conteoCelular")  && this.configuracionConteoCelular.conteoCelularConsulta != null ) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid) $("#grid_conteoCelular_"+this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_conteoCelular_"+this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionConteoCelular.altoComponente,
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
        this.grid = $("#grid_conteoCelular_"+this.nombregrid).data("kendoGrid");
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
        //        this.grid = $("#grid_conteoCelular_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        let gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.conteoCelularSeleccionado = new ConteoCelular();
        gridac.conteoCelularSeleccionado.from(dataItem);
        gridac.evtConteoCelularSeleccionado.emit(gridac.conteoCelularSeleccionado);
        (gridac.conteoCelularSeleccionado);
    }


}
