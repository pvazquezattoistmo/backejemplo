import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { GestionMuestraMicrobiologia } from '../shared/gestion-muestra-microbiologia';
import { GestionMuestraMicrobiologiaService } from '../shared/gestion-muestra-microbiologia.service';
import { ConfigurarGestionMuestraMicrobiologia } from '../shared/configurar-gestion-muestra-microbiologia'
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
import { OficioDonacion } from '../../oficio-donaciones/shared/oficio-donacion';
import { OficioDonacionService } from '../../oficio-donaciones/shared/oficio-donacion.service';
import { RecepcionSolicitudEvaluacionService } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service';
import { RecepcionSolicitudEvaluacion } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion';
import { SolicitudEvaluacionCornealService } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service';
import { SolicitudEvaluacionCorneal } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal';
import { CausaMuerteService } from '../../causa-muertes/shared/causa-muerte.service';
import { CausaMuerte } from '../../causa-muertes/shared/causa-muerte';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-gestion-muestra-microbiologia-crud',
    templateUrl: './gestion-muestra-microbiologia-crud.component.html',
    styleUrls: ['./gestion-muestra-microbiologia-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                GestionMuestraMicrobiologiaService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                OficioDonacionService,
                CausaMuerteService,
                SolicitudEvaluacionCornealService,
                RecepcionSolicitudEvaluacionService
	]
})
export class GestionMuestraMicrobiologiaCrudComponent implements OnInit {
    public opcionGestionMuestraMicrobiologia  =0;
    public validosGestionMuestraMicrobiologia :any ={
        id:false,
        envio:false,
        horaInicioRevision:false,
        fechaBaja:false,
        fechaInicioRevision:false,
        fechaRegistro:false,
        almacenHora:false,
        fechaActualizacion:false,
        comentario:true,
        almacenMuestra:false,
        revision:false,
        status:false,
        usuarioUltMov:false,
        idoficioDonacion:false,

    };

    @Input() ocultarConjuntosGestionMuestraMicrobiologia: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "gestionMuestraMicrobiologia", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public gestionMuestraMicrobiologiaLazy: boolean =false;
    public gestionMuestraMicrobiologiaPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public gestionMuestraMicrobiologia: GestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
    @Output() gestionMuestraMicrobiologiaChange = new EventEmitter<GestionMuestraMicrobiologia>();
    @Output() gestionMuestraMicrobiologiaTablaChange = new EventEmitter<GestionMuestraMicrobiologia>();
    public lista_gestionMuestraMicrobiologias: GestionMuestraMicrobiologia[]=[];
    public configuracionGestionMuestraMicrobiologia: ConfigurarGestionMuestraMicrobiologia;
    public gestionMuestraMicrobiologiaBuscar: boolean
    public gestionMuestraMicrobiologiaSeleccion: boolean
    public gestionMuestraMicrobiologiaAgregar: boolean
    public gestionMuestraMicrobiologiaActualizar: boolean
    public gestionMuestraMicrobiologiaEliminar: boolean;
    public gestionMuestraMicrobiologiaGuardar: boolean;
    public gestionMuestraMicrobiologiaCancelar: boolean;
    public usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario: Usuario[]=[];
    public usuarioUltMovGestionMuestraMicrobiologiaUsuarioEditar:boolean =false;
    public idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion: OficioDonacion = new OficioDonacion();
    public lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion: OficioDonacion[]=[];
    public idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEditar:boolean =false;
    @Input() enable: boolean;
    get gestionMuestraMicrobiologiaOcultarConjuntos(){
        if (this.ocultarConjuntosGestionMuestraMicrobiologia)
           return true
        return  !this.gestionMuestraMicrobiologiaActualizar;
    }

    ngOnChanges(changes) {
        if (changes.gestionMuestraMicrobiologia && changes.gestionMuestraMicrobiologia.currentValue == null &&
            this.gestionMuestraMicrobiologia == null) this.gestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
        else {
            var aux :GestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
            if (this.gestionMuestraMicrobiologia)
                aux.from(this.gestionMuestraMicrobiologia)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaGuardar = false;
                this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = this.gestionMuestraMicrobiologiaCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
                    this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "gestionMuestraMicrobiologia",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "oficioDonacion",
                                "recepcionSolicitudEvaluacion",
                                "solicitudEvaluacionCorneal",
                                "causaMuerte",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.gestionMuestraMicrobiologiaPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public gestionMuestraMicrobiologia_service: GestionMuestraMicrobiologiaService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,
                public oficioDonacion_service: OficioDonacionService,

                public recepcionSolicitudEvaluacion_service: RecepcionSolicitudEvaluacionService,

                public solicitudEvaluacionCorneal_service: SolicitudEvaluacionCornealService,

                public causaMuerte_service: CausaMuerteService,

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
        this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
        this.configuracionGestionMuestraMicrobiologia = new ConfigurarGestionMuestraMicrobiologia();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovGestionMuestraMicrobiologiaUsuario, this);
        //this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.gestionMuestraMicrobiologiaPermisos =true;
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoAtributo&& permisos.gestionMuestraMicrobiologia.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.gestionMuestraMicrobiologia.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoConjunto && permisos.gestionMuestraMicrobiologia.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.gestionMuestraMicrobiologia.PermisoConjunto ;
        }
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoTabla && permisos.gestionMuestraMicrobiologia.PermisoTabla.length>0){
            obj.permisosTabla = permisos.gestionMuestraMicrobiologia.PermisoTabla[0] ;
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
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoAtributo&& permisos.oficioDonacion.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.oficioDonacion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.oficioDonacion.PermisoAtributo) ;
        }
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoAtributo&& permisos.oficioDonacion.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.oficioDonacion.PermisoConjunto) ;
        }
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoTabla && permisos.oficioDonacion.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.oficioDonacion.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.oficioDonacion.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovGestionMuestraMicrobiologiaUsuario(lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario, obj) {
        obj.lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario = lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario;
        obj.actualizar_UsuarioUltMovGestionMuestraMicrobiologiaUsuario();
    }
    evtGetIdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion(lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion, obj) {
        obj.lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion = lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion;
        obj.actualizar_IdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion();
    }


    actualizar_UsuarioUltMovGestionMuestraMicrobiologiaUsuario() {
        if ( this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario)
                if (eleme.id == this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion.id){
                    this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion() {
        if ( this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion)
            for (let eleme of this.lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion)
                if (eleme.id == this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion.id){
                    this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosGestionMuestraMicrobiologia['id'];
    }
    get validaIds() {
        return this.validosGestionMuestraMicrobiologia['id'];
    }
    get validaEnvio() {
        return this.validosGestionMuestraMicrobiologia['envio'];
    }
    get validaHoraInicioRevision() {
        return this.validosGestionMuestraMicrobiologia['horaInicioRevision'];
    }
    get validaFechaBaja() {
        return this.validosGestionMuestraMicrobiologia['fechaBaja'];
    }
    get validaFechaInicioRevision() {
        return this.validosGestionMuestraMicrobiologia['fechaInicioRevision'];
    }
    get validaFechaRegistro() {
        return this.validosGestionMuestraMicrobiologia['fechaRegistro'];
    }
    get validaAlmacenHora() {
        return this.validosGestionMuestraMicrobiologia['almacenHora'];
    }
    get validaFechaActualizacion() {
        return this.validosGestionMuestraMicrobiologia['fechaActualizacion'];
    }
    get validaComentario() {
        return this.validosGestionMuestraMicrobiologia['comentario'];
    }
    get validaAlmacenMuestra() {
        return this.validosGestionMuestraMicrobiologia['almacenMuestra'];
    }
    get validaRevision() {
        return this.validosGestionMuestraMicrobiologia['revision'];
    }
    get validaStatus() {
        return this.validosGestionMuestraMicrobiologia['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosGestionMuestraMicrobiologia['usuarioUltMov'];
    }
    get validaIdoficioDonacion() {
        return this.validosGestionMuestraMicrobiologia['idoficioDonacion'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaEnvio && this.validaHoraInicioRevision && this.validaFechaBaja && this.validaFechaInicioRevision && this.validaFechaRegistro && this.validaAlmacenHora && this.validaFechaActualizacion && this.validaComentario && this.validaAlmacenMuestra && this.validaRevision && this.validaStatus && this.validaUsuarioUltMov && this.validaIdoficioDonacion;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerGestionMuestraMicrobiologias(lista, objeto) {
        objeto.lista_gestionMuestraMicrobiologias = lista;
        if (lista && lista.length > 0) {
            objeto.gestionMuestraMicrobiologia.from(lista[0]);
            objeto.evtGestionMuestraMicrobiologiaSeleccionado(objeto.gestionMuestraMicrobiologia);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_gestionMuestraMicrobiologia(gestionMuestraMicrobiologia, objeto) {
        objeto.gestionMuestraMicrobiologia = gestionMuestraMicrobiologia;
        objeto.gestionMuestraMicrobiologiaChange.emit(objeto.gestionMuestraMicrobiologia);
        objeto.configuarCombosObjetos();
        objeto.gestionMuestraMicrobiologiaLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteGestionMuestraMicrobiologiaWord(){
        return ! (this.gestionMuestraMicrobiologiaActualizar && this.gestionMuestraMicrobiologiaLazy && this.globalesService.preporteWord(this,"gestionMuestraMicrobiologia"));
    }
    get datosReporteGestionMuestraMicrobiologiaExcel(){
        return ! (this.gestionMuestraMicrobiologiaActualizar && this.gestionMuestraMicrobiologiaLazy && this.globalesService.preporteExcel(this,"gestionMuestraMicrobiologia"));
    }
    get datosReporteGestionMuestraMicrobiologiaPdf(){
        return ! (this.gestionMuestraMicrobiologiaActualizar && this.gestionMuestraMicrobiologiaLazy && this.globalesService.preportePdf(this,"gestionMuestraMicrobiologia"));
    }
    reporteGestionMuestraMicrobiologiaExcel(form: any){
        var nombre:string = "GestionMuestraMicrobiologia.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "gestionMuestraMicrobiologia": this.gestionMuestraMicrobiologia};
        parametros["plantilla"]="GestionMuestraMicrobiologia.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteGestionMuestraMicrobiologiaWord(form: any){
        var nombre:string = "GestionMuestraMicrobiologia.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "gestionMuestraMicrobiologia": this.gestionMuestraMicrobiologia};
        parametros["plantilla"]="GestionMuestraMicrobiologia.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteGestionMuestraMicrobiologiaPdf(form: any){
        var nombre:string = "GestionMuestraMicrobiologia.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "gestionMuestraMicrobiologia": this.gestionMuestraMicrobiologia};
        parametros["plantilla"]="GestionMuestraMicrobiologia.docx";
        parametros["salida"]="GestionMuestraMicrobiologia.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaCancelar = true;
    }
    buscarGestionMuestraMicrobiologiaFront(form: any) {
        this.accionesBuscar();
        var vgestionMuestraMicrobiologia: GestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
        vgestionMuestraMicrobiologia.from(this.gestionMuestraMicrobiologia);
        this.configuracionGestionMuestraMicrobiologia = new ConfigurarGestionMuestraMicrobiologia();
        this.configuracionGestionMuestraMicrobiologia.permisosTabla = { "tabla": "gestionMuestraMicrobiologia", "permiso": 8 };
        this.configuracionGestionMuestraMicrobiologia.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta = vgestionMuestraMicrobiologia;
        this.permisosacciones();
        $("#buscarGestionMuestraMicrobiologia_"+this.nombre).modal();
    }
    buscarGestionMuestraMicrobiologiaBack(gestionMuestraMicrobiologia: GestionMuestraMicrobiologia) {
        this.gestionMuestraMicrobiologia_service.getGestionMuestraMicrobiologiasByDto(gestionMuestraMicrobiologia, this.eventoSrvGestionMuestraMicrobiologiaBuscar, this);
    }
    eventoSrvGestionMuestraMicrobiologiaBuscar(lista, objeto) {
        objeto.lista_gestionMuestraMicrobiologias = lista;
        if (lista && lista.length > 0) {
            objeto.gestionMuestraMicrobiologia = lista[0];
            objeto.gestionMuestraMicrobiologiaLazy =false;
            objeto.gestionMuestraMicrobiologia_service.lazyGestionMuestraMicrobiologia(objeto.gestionMuestraMicrobiologia, objeto.evn_lazy_gestionMuestraMicrobiologia, objeto);
        }
    }
    guardarGestionMuestraMicrobiologiaFront(form: any) {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarGestionMuestraMicrobiologiaBack(this.gestionMuestraMicrobiologia);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarGestionMuestraMicrobiologiaBack(gestionMuestraMicrobiologia: GestionMuestraMicrobiologia) {
        if (gestionMuestraMicrobiologia.usuarioUltMov == null ) gestionMuestraMicrobiologia.usuarioUltMov = this.globalesService.dameUsuario();
        if (gestionMuestraMicrobiologia.status == null || gestionMuestraMicrobiologia.status == "" ) gestionMuestraMicrobiologia.status = 1;
        this.gestionMuestraMicrobiologia_service.guardarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.eventoSrvGestionMuestraMicrobiologiaGuardar, this);
    }
    eventoSrvGestionMuestraMicrobiologiaGuardar(gestionMuestraMicrobiologia, obj) {
        obj.gestionMuestraMicrobiologia = gestionMuestraMicrobiologia;
        bootbox.alert("Datos guardados con éxito");
        var aux: GestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
        aux.from(gestionMuestraMicrobiologia);
        obj.gestionMuestraMicrobiologiaChange.emit(aux);
        obj.gestionMuestraMicrobiologiaTablaChange.emit(aux);
        obj.gestionMuestraMicrobiologiaLazy =false;
        obj.gestionMuestraMicrobiologia_service.lazyGestionMuestraMicrobiologia(obj.gestionMuestraMicrobiologia, obj.evn_lazy_gestionMuestraMicrobiologia, obj);
        obj.accionesActualizar();

    }
    actualizarGestionMuestraMicrobiologiaFront(form: any) {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarGestionMuestraMicrobiologiaBack(this.gestionMuestraMicrobiologia);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarGestionMuestraMicrobiologiaBack(gestionMuestraMicrobiologia: GestionMuestraMicrobiologia) {
        gestionMuestraMicrobiologia.usuarioUltMov = this.globalesService.dameUsuario();
        this.gestionMuestraMicrobiologia_service.actualizarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.eventoSrvGestionMuestraMicrobiologiaActualizar, this);
    }
    eventoSrvGestionMuestraMicrobiologiaActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: GestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.gestionMuestraMicrobiologiaLazy = false;
            obj.gestionMuestraMicrobiologia_service.lazyGestionMuestraMicrobiologia(obj.gestionMuestraMicrobiologia, obj.evn_lazy_gestionMuestraMicrobiologia, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.gestionMuestraMicrobiologia);
            obj.gestionMuestraMicrobiologiaChange.emit(aux);
            obj.gestionMuestraMicrobiologiaTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarGestionMuestraMicrobiologiaFront(form: any) {
        this.accion = 4;
        this.eliminarGestionMuestraMicrobiologiaBack(this.gestionMuestraMicrobiologia);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarGestionMuestraMicrobiologiaBack(gestionMuestraMicrobiologia: GestionMuestraMicrobiologia) {
        gestionMuestraMicrobiologia.usuarioUltMov = this.globalesService.dameUsuario();
        this.gestionMuestraMicrobiologia_service.eliminarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.eventoSrvGestionMuestraMicrobiologiaEliminar, this);
    }
    eventoSrvGestionMuestraMicrobiologiaEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.gestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
            obj.gestionMuestraMicrobiologiaChange.emit(obj.gestionMuestraMicrobiologia);
            obj.gestionMuestraMicrobiologiaTablaChange.emit(obj.gestionMuestraMicrobiologia);
            obj.limpiarCampos() ;
        }
    }
    cancelarGestionMuestraMicrobiologiaFront(form: any) {
        this.accion = 6;
        this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = true;
        this.permisosacciones();
    }
    nuevoGestionMuestraMicrobiologiaFront(form: any) {
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
                this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
                this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovGestionMuestraMicrobiologiaUsuario, this);
        this.lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion = [];
        this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaGuardar = false;
        this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = this.gestionMuestraMicrobiologiaCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtGestionMuestraMicrobiologiaSeleccionado(gestionMuestraMicrobiologia) {
        this.gestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
        this.gestionMuestraMicrobiologia.from(gestionMuestraMicrobiologia);
        this.gestionMuestraMicrobiologiaLazy =false;
        this.gestionMuestraMicrobiologia_service.lazyGestionMuestraMicrobiologia(this.gestionMuestraMicrobiologia, this.evn_lazy_gestionMuestraMicrobiologia, this);
        this.accion = 7;
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaGuardar = false;
        this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = this.gestionMuestraMicrobiologiaCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarGestionMuestraMicrobiologia_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;        // ******************** maquina
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.gestionMuestraMicrobiologiaBuscar) this.gestionMuestraMicrobiologiaBuscar = this.globalesService.pbuscar(this,"gestionMuestraMicrobiologia");
        if (this.gestionMuestraMicrobiologiaActualizar) this.gestionMuestraMicrobiologiaActualizar = (this.globalesService.pacutalizar(this,"gestionMuestraMicrobiologia") && this.globalesService.pbuscar(this,"gestionMuestraMicrobiologia"));
        if (this.gestionMuestraMicrobiologiaEliminar) this.gestionMuestraMicrobiologiaEliminar = (this.globalesService.peliminar(this,"gestionMuestraMicrobiologia") && this.globalesService.pbuscar(this,"gestionMuestraMicrobiologia"));
        if (this.gestionMuestraMicrobiologiaAgregar) this.gestionMuestraMicrobiologiaAgregar = this.globalesService.pagregar(this,"gestionMuestraMicrobiologia");
    }
    permisosaccionesInicio() {
        this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false; // *************************** maquina
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.gestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();

        this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion= new Usuario();
        this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion= new OficioDonacion();

        this.gestionMuestraMicrobiologiaChange.emit(this.gestionMuestraMicrobiologia);
        this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false; // *************************** maquina
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
