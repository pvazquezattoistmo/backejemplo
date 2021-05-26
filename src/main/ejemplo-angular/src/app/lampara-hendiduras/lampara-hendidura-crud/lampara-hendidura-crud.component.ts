import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { LamparaHendidura } from '../shared/lampara-hendidura';
import { LamparaHendiduraService } from '../shared/lampara-hendidura.service';
import { ConfigurarLamparaHendidura } from '../shared/configurar-lampara-hendidura'
import { Usuario } from '../../usuarios/shared/usuario';
import { UsuarioService } from '../../usuarios/shared/usuario.service';
import { UsuarioBtcService } from '../../usuario-btcs/shared/usuario-btc.service';
import { UsuarioBtc } from '../../usuario-btcs/shared/usuario-btc';
import { PerfilRedIsssteService } from '../../perfil-red-issstes/shared/perfil-red-issste.service';
import { PerfilRedIssste } from '../../perfil-red-issstes/shared/perfil-red-issste';
////import { PerfilBtcService } from '../../perfil-btcs/shared/perfil-btc.service';
//import { PerfilBtc } from '../../perfil-btcs/shared/perfil-btc';
import { HospitalService } from '../../hospitales/shared/hospital.service';
import { Hospital } from '../../hospitales/shared/hospital';
import { EntidadFederativaService } from '../../entidad-federativas/shared/entidad-federativa.service';
import { EntidadFederativa } from '../../entidad-federativas/shared/entidad-federativa';
import { PerfilService } from '../../perfiles/shared/perfil.service';
import { Perfil } from '../../perfiles/shared/perfil';
import { EvaluacionSolicitud } from '../../evaluacion-solicitudes/shared/evaluacion-solicitud';
import { EvaluacionSolicitudService } from '../../evaluacion-solicitudes/shared/evaluacion-solicitud.service';
import { RecepcionSolicitudEvaluacionService } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service';
import { RecepcionSolicitudEvaluacion } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion';
import { SolicitudEvaluacionCornealService } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service';
import { SolicitudEvaluacionCorneal } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal';
import { CausaMuerteService } from '../../causa-muertes/shared/causa-muerte.service';
import { CausaMuerte } from '../../causa-muertes/shared/causa-muerte';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-lampara-hendidura-crud',
    templateUrl: './lampara-hendidura-crud.component.html',
    styleUrls: ['./lampara-hendidura-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                LamparaHendiduraService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                EvaluacionSolicitudService,
                CausaMuerteService,
                SolicitudEvaluacionCornealService,
                RecepcionSolicitudEvaluacionService
	]
})
export class LamparaHendiduraCrudComponent implements OnInit {
    public opcionLamparaHendidura  =0;
    public validosLamparaHendidura :any ={
        id:false,
        fechaBaja:false,
        fechaRegistro:false,
        opacidadEstromal:false,
        arcoSenil:false,
        tipoCornea:false,
        desecacion:false,
        microcornea:false,
        fechaActualizacion:false,
        danoEndotelial:false,
        observacion:true,
        pliegueEstria:false,
        status:false,
        usuarioUltMov:false,
        idevaluacionSolicitud:false,

    };

    @Input() ocultarConjuntosLamparaHendidura: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "lamparaHendidura", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public lamparaHendiduraLazy: boolean =false;
    public lamparaHendiduraPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public lamparaHendidura: LamparaHendidura = new LamparaHendidura();
    @Output() lamparaHendiduraChange = new EventEmitter<LamparaHendidura>();
    @Output() lamparaHendiduraTablaChange = new EventEmitter<LamparaHendidura>();
    public lista_lamparaHendiduras: LamparaHendidura[]=[];
    public configuracionLamparaHendidura: ConfigurarLamparaHendidura;
    public lamparaHendiduraBuscar: boolean
    public lamparaHendiduraSeleccion: boolean
    public lamparaHendiduraAgregar: boolean
    public lamparaHendiduraActualizar: boolean
    public lamparaHendiduraEliminar: boolean;
    public lamparaHendiduraGuardar: boolean;
    public lamparaHendiduraCancelar: boolean;
    public usuarioUltMovLamparaHendiduraUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovLamparaHendiduraUsuario: Usuario[]=[];
    public usuarioUltMovLamparaHendiduraUsuarioEditar:boolean =false;
    public idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion: EvaluacionSolicitud = new EvaluacionSolicitud();
    public lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud: EvaluacionSolicitud[]=[];
    public idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEditar:boolean =false;
    public evaluacionSolicitud: EvaluacionSolicitud = new EvaluacionSolicitud();
    @Input() public lamparaHendiduraDerecha: LamparaHendidura = new LamparaHendidura();
    @Input() public viewModeEvaluacion: boolean;
    get lamparaHendiduraOcultarConjuntos(){
        if (this.ocultarConjuntosLamparaHendidura)
           return true
        return  !this.lamparaHendiduraActualizar;
    }

    ngOnChanges(changes) {
        if (changes.lamparaHendidura && changes.lamparaHendidura.currentValue == null &&
            this.lamparaHendidura == null) this.lamparaHendidura = new LamparaHendidura();
        else {
            var aux :LamparaHendidura = new LamparaHendidura();
            if (this.lamparaHendidura)
                aux.from(this.lamparaHendidura)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraSeleccion = this.lamparaHendiduraGuardar = false;
                this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = this.lamparaHendiduraCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.lamparaHendiduraSeleccion = this.lamparaHendiduraAgregar = this.lamparaHendiduraBuscar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
                    this.lamparaHendiduraGuardar = this.lamparaHendiduraCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "lamparaHendidura",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "evaluacionSolicitud",
                                "recepcionSolicitudEvaluacion",
                                "solicitudEvaluacionCorneal",
                                "causaMuerte",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.lamparaHendiduraPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public lamparaHendidura_service: LamparaHendiduraService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,
                public evaluacionSolicitud_service: EvaluacionSolicitudService,

                public recepcionSolicitudEvaluacion_service: RecepcionSolicitudEvaluacionService,

                public solicitudEvaluacionCorneal_service: SolicitudEvaluacionCornealService,

                public causaMuerte_service: CausaMuerteService,
                public activatedRoute: ActivatedRoute,
                ) {
        this.usuariologueado = globalesService.dameUsuario();
        var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
               this.obtenerPermisos();
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
             }
        }
        this.lamparaHendiduraSeleccion = this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
        this.configuracionLamparaHendidura = new ConfigurarLamparaHendidura();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovLamparaHendiduraUsuario, this);
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.lamparaHendiduraPermisos =true;
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoAtributo&& permisos.lamparaHendidura.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.lamparaHendidura.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoConjunto && permisos.lamparaHendidura.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.lamparaHendidura.PermisoConjunto ;
        }
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoTabla && permisos.lamparaHendidura.PermisoTabla.length>0){
            obj.permisosTabla = permisos.lamparaHendidura.PermisoTabla[0] ;
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo&& permisos.usuario.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.usuario.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.usuario.PermisoAtributo) ;
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo&& permisos.usuario.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.usuario.PermisoConjunto) ;
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoTabla && permisos.usuario.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.usuario.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo&& permisos.evaluacionSolicitud.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.evaluacionSolicitud.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.evaluacionSolicitud.PermisoAtributo) ;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo&& permisos.evaluacionSolicitud.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.evaluacionSolicitud.PermisoConjunto) ;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoTabla && permisos.evaluacionSolicitud.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.evaluacionSolicitud.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.evaluacionSolicitud.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovLamparaHendiduraUsuario(lista_usuarioUltMovLamparaHendiduraUsuario, obj) {
        obj.lista_usuarioUltMovLamparaHendiduraUsuario = lista_usuarioUltMovLamparaHendiduraUsuario;
        obj.actualizar_UsuarioUltMovLamparaHendiduraUsuario();
    }
    evtGetIdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud(lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud, obj) {
        obj.lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud = lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud;
        obj.actualizar_IdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud();
    }


    actualizar_UsuarioUltMovLamparaHendiduraUsuario() {
        if ( this.usuarioUltMovLamparaHendiduraUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovLamparaHendiduraUsuario)
                if (eleme.id == this.usuarioUltMovLamparaHendiduraUsuarioEleccion.id){
                    this.usuarioUltMovLamparaHendiduraUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud() {
        if ( this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion)
            for (let eleme of this.lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud)
                if (eleme.id == this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion.id){
                    this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosLamparaHendidura['id'];
    }
    get validaIds() {
        return this.validosLamparaHendidura['id'];
    }
    get validaFechaBaja() {
        return this.validosLamparaHendidura['fechaBaja'];
    }
    get validaFechaRegistro() {
        return this.validosLamparaHendidura['fechaRegistro'];
    }
    get validaOpacidadEstromal() {
        return this.validosLamparaHendidura['opacidadEstromal'];
    }
    get validaArcoSenil() {
        return this.validosLamparaHendidura['arcoSenil'];
    }
    get validaTipoCornea() {
        return this.validosLamparaHendidura['tipoCornea'];
    }
    get validaDesecacion() {
        return this.validosLamparaHendidura['desecacion'];
    }
    get validaMicrocornea() {
        return this.validosLamparaHendidura['microcornea'];
    }
    get validaFechaActualizacion() {
        return this.validosLamparaHendidura['fechaActualizacion'];
    }
    get validaDanoEndotelial() {
        return this.validosLamparaHendidura['danoEndotelial'];
    }
    get validaObservacion() {
        return this.validosLamparaHendidura['observacion'];
    }
    get validaPliegueEstria() {
        return this.validosLamparaHendidura['pliegueEstria'];
    }
    get validaStatus() {
        return this.validosLamparaHendidura['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosLamparaHendidura['usuarioUltMov'];
    }
    get validaIdevaluacionSolicitud() {
        return this.validosLamparaHendidura['idevaluacionSolicitud'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaFechaRegistro && this.validaOpacidadEstromal && this.validaArcoSenil && this.validaTipoCornea && this.validaDesecacion && this.validaMicrocornea && this.validaFechaActualizacion && this.validaDanoEndotelial && this.validaObservacion && this.validaPliegueEstria && this.validaStatus && this.validaUsuarioUltMov && this.validaIdevaluacionSolicitud;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerLamparaHendiduras(lista, objeto) {
        objeto.lista_lamparaHendiduras = lista;
        if (lista && lista.length > 0) {
            objeto.lamparaHendidura.from(lista[0]);
            objeto.evtLamparaHendiduraSeleccionado(objeto.lamparaHendidura);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_lamparaHendidura(lamparaHendidura, objeto) {
        objeto.lamparaHendidura = lamparaHendidura;
        objeto.lamparaHendiduraChange.emit(objeto.lamparaHendidura);
        objeto.configuarCombosObjetos();
        objeto.lamparaHendiduraLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteLamparaHendiduraWord(){
        return ! (this.lamparaHendiduraActualizar && this.lamparaHendiduraLazy && this.globalesService.preporteWord(this,"lamparaHendidura"));
    }
    get datosReporteLamparaHendiduraExcel(){
        return ! (this.lamparaHendiduraActualizar && this.lamparaHendiduraLazy && this.globalesService.preporteExcel(this,"lamparaHendidura"));
    }
    get datosReporteLamparaHendiduraPdf(){
        return ! (this.lamparaHendiduraActualizar && this.lamparaHendiduraLazy && this.globalesService.preportePdf(this,"lamparaHendidura"));
    }
    reporteLamparaHendiduraExcel(form: any){
        var nombre:string = "LamparaHendidura.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "lamparaHendidura": this.lamparaHendidura};
        parametros["plantilla"]="LamparaHendidura.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteLamparaHendiduraWord(form: any){
        var nombre:string = "LamparaHendidura.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "lamparaHendidura": this.lamparaHendidura};
        parametros["plantilla"]="LamparaHendidura.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteLamparaHendiduraPdf(form: any){
        var nombre:string = "LamparaHendidura.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "lamparaHendidura": this.lamparaHendidura};
        parametros["plantilla"]="LamparaHendidura.docx";
        parametros["salida"]="LamparaHendidura.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraCancelar = true;
    }
    buscarLamparaHendiduraFront(form: any) {
        this.accionesBuscar();
        var vlamparaHendidura: LamparaHendidura = new LamparaHendidura();
        vlamparaHendidura.from(this.lamparaHendidura);
        this.configuracionLamparaHendidura = new ConfigurarLamparaHendidura();
        this.configuracionLamparaHendidura.permisosTabla = { "tabla": "lamparaHendidura", "permiso": 8 };
        this.configuracionLamparaHendidura.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionLamparaHendidura.lamparaHendiduraConsulta = vlamparaHendidura;
        this.permisosacciones();
        $("#buscarLamparaHendidura_"+this.nombre).modal();
    }
    buscarLamparaHendiduraBack(lamparaHendidura: LamparaHendidura) {
        this.lamparaHendidura_service.getLamparaHendidurasByDto(lamparaHendidura, this.eventoSrvLamparaHendiduraBuscar, this);
    }
    eventoSrvLamparaHendiduraBuscar(lista, objeto) {
        objeto.lista_lamparaHendiduras = lista;
        if (lista && lista.length > 0) {
            objeto.lamparaHendidura = lista[0];
            objeto.lamparaHendiduraLazy =false;
            objeto.lamparaHendidura_service.lazyLamparaHendidura(objeto.lamparaHendidura, objeto.evn_lazy_lamparaHendidura, objeto);
        }
    }
    guardarLamparaHendiduraFront(form: any) {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarLamparaHendiduraBack(this.lamparaHendidura);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarLamparaHendiduraBack(lamparaHendidura: LamparaHendidura) {
        if (lamparaHendidura.usuarioUltMov == null ) lamparaHendidura.usuarioUltMov = this.globalesService.dameUsuario();
        if (lamparaHendidura.status == null || lamparaHendidura.status == "" ) lamparaHendidura.status = 1;
        this.lamparaHendidura_service.guardarLamparaHendidura(lamparaHendidura, this.eventoSrvLamparaHendiduraGuardar, this);
    }
    eventoSrvLamparaHendiduraGuardar(lamparaHendidura, obj) {
        obj.lamparaHendidura = lamparaHendidura;
        bootbox.alert("Datos guardados con éxito");
        var aux: LamparaHendidura = new LamparaHendidura();
        aux.from(lamparaHendidura);
        obj.lamparaHendiduraChange.emit(aux);
        obj.lamparaHendiduraTablaChange.emit(aux);
        obj.lamparaHendiduraLazy =false;
        obj.lamparaHendidura_service.lazyLamparaHendidura(obj.lamparaHendidura, obj.evn_lazy_lamparaHendidura, obj);
        obj.accionesActualizar();

    }
    actualizarLamparaHendiduraFront(form: any) {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarLamparaHendiduraBack(this.lamparaHendidura);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarLamparaHendiduraBack(lamparaHendidura: LamparaHendidura) {
        lamparaHendidura.usuarioUltMov = this.globalesService.dameUsuario();
        this.lamparaHendidura_service.actualizarLamparaHendidura(lamparaHendidura, this.eventoSrvLamparaHendiduraActualizar, this);
    }
    eventoSrvLamparaHendiduraActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: LamparaHendidura = new LamparaHendidura();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.lamparaHendiduraLazy = false;
            obj.lamparaHendidura_service.lazyLamparaHendidura(obj.lamparaHendidura, obj.evn_lazy_lamparaHendidura, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.lamparaHendidura);
            obj.lamparaHendiduraChange.emit(aux);
            obj.lamparaHendiduraTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarLamparaHendiduraFront(form: any) {
        this.accion = 4;
        this.eliminarLamparaHendiduraBack(this.lamparaHendidura);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarLamparaHendiduraBack(lamparaHendidura: LamparaHendidura) {
        lamparaHendidura.usuarioUltMov = this.globalesService.dameUsuario();
        this.lamparaHendidura_service.eliminarLamparaHendidura(lamparaHendidura, this.eventoSrvLamparaHendiduraEliminar, this);
    }
    eventoSrvLamparaHendiduraEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.lamparaHendidura = new LamparaHendidura();
            obj.lamparaHendiduraChange.emit(obj.lamparaHendidura);
            obj.lamparaHendiduraTablaChange.emit(obj.lamparaHendidura);
            obj.limpiarCampos() ;
        }
    }
    cancelarLamparaHendiduraFront(form: any) {
        this.accion = 6;
        this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = true;
        this.permisosacciones();
    }
    nuevoLamparaHendiduraFront(form: any) {
        this.accion = 2;
        bootbox.confirm({
            message: "¿Deseas limpiar los campos de ingreso?",
            buttons: {
                confirm: {
                    label: 'Si',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function(result) {
                if (result)
                    this.limpiarCampos();
                this.lamparaHendiduraSeleccion = this.lamparaHendiduraAgregar = this.lamparaHendiduraBuscar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
                this.lamparaHendiduraGuardar = this.lamparaHendiduraCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovLamparaHendiduraUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovLamparaHendiduraUsuario, this);
        this.lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud = [];
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraSeleccion = this.lamparaHendiduraGuardar = false;
        this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = this.lamparaHendiduraCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtLamparaHendiduraSeleccionado(lamparaHendidura) {
        this.lamparaHendidura = new LamparaHendidura();
        this.lamparaHendidura.from(lamparaHendidura);
        this.lamparaHendiduraLazy =false;
        this.lamparaHendidura_service.lazyLamparaHendidura(this.lamparaHendidura, this.evn_lazy_lamparaHendidura, this);
        this.accion = 7;
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraSeleccion = this.lamparaHendiduraGuardar = false;
        this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = this.lamparaHendiduraCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarLamparaHendidura_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.lamparaHendiduraSeleccion = this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;        // ******************** maquina
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
        let id = this.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
          this.evaluacionSolicitud.id = id;
          this.evaluacionSolicitud_service.lazyEvaluacionSolicitud(
            this.evaluacionSolicitud,
            this.evn_lazy_evaluacionSolicitud,
            this
          );
        }
    }

    permisosacciones() {
        if (this.lamparaHendiduraBuscar) this.lamparaHendiduraBuscar = this.globalesService.pbuscar(this,"lamparaHendidura");
        if (this.lamparaHendiduraActualizar) this.lamparaHendiduraActualizar = (this.globalesService.pacutalizar(this,"lamparaHendidura") && this.globalesService.pbuscar(this,"lamparaHendidura"));
        if (this.lamparaHendiduraEliminar) this.lamparaHendiduraEliminar = (this.globalesService.peliminar(this,"lamparaHendidura") && this.globalesService.pbuscar(this,"lamparaHendidura"));
        if (this.lamparaHendiduraAgregar) this.lamparaHendiduraAgregar = this.globalesService.pagregar(this,"lamparaHendidura");
    }
    permisosaccionesInicio() {
        this.lamparaHendiduraSeleccion = this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false; // *************************** maquina
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.lamparaHendidura = new LamparaHendidura();

        this.usuarioUltMovLamparaHendiduraUsuarioEleccion= new Usuario();
        this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion= new EvaluacionSolicitud();

        this.lamparaHendiduraChange.emit(this.lamparaHendidura);
        this.lamparaHendiduraSeleccion = this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false; // *************************** maquina
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }

    evn_lazy_evaluacionSolicitud(evaluacionSolicitud: EvaluacionSolicitud, objeto) {
      (evaluacionSolicitud);
      objeto.evaluacionSolicitud = evaluacionSolicitud;
      if (evaluacionSolicitud.lamparasHendidura) {
        evaluacionSolicitud.lamparasHendidura.forEach(element => {
          if (element.tipoCornea === 1) {
            objeto.lamparaHendidura = element;
          } else if (element.tipoCornea === 2) {
            objeto.lamparaHendiduraDerecha = element;
          }
        });
      }
    }

    doSave() {
      let lamparas = [];
      let isUpdate = false;
      if (this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCd) {
        this.lamparaHendiduraDerecha.tipoCornea = 2;
        this.lamparaHendiduraDerecha.idevaluacionSolicitud = {};
        this.lamparaHendiduraDerecha.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
        this.lamparaHendiduraDerecha.usuarioUltMov = {};
        this.lamparaHendiduraDerecha.usuarioUltMov.id = this.globalesService.dameUsuario().id;
        if (this.lamparaHendiduraDerecha.id) {
          isUpdate = true;
        }
        lamparas.push(this.lamparaHendiduraDerecha);
      }
      if (this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCi) {
        this.lamparaHendidura.tipoCornea = 1;
        this.lamparaHendidura.idevaluacionSolicitud = {};
        this.lamparaHendidura.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
        this.lamparaHendidura.usuarioUltMov = {};
        this.lamparaHendidura.usuarioUltMov.id = this.globalesService.dameUsuario().id;
        if (this.lamparaHendidura.id) {
          isUpdate = true;
        }
        lamparas.push(this.lamparaHendidura);
      }
      if (isUpdate) {
        this.lamparaHendidura_service.actualizarListaLamparaHendidura(lamparas, this.evn_guardarLamparas, this);
      } else {
        this.lamparaHendidura_service.guardarListaLamparaHendidura(lamparas, this.evn_guardarLamparas, this);
      }
    }

    evn_guardarLamparas(ev, objeto) {
      const id = objeto.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
          let ev = new EvaluacionSolicitud();
          ev.id = id;
          objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(
            ev,
            objeto.evn_lazy_evaluacionSolicitud,
            objeto
          );
        }
      bootbox.alert("Datos guardados con éxito");
    }
}
