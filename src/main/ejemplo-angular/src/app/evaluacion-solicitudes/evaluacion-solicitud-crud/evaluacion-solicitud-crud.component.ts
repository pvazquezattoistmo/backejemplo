import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { EvaluacionSolicitud } from '../shared/evaluacion-solicitud';
import { EvaluacionSolicitudService } from '../shared/evaluacion-solicitud.service';
import { ConfigurarEvaluacionSolicitud } from '../shared/configurar-evaluacion-solicitud'
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
import { RecepcionSolicitudEvaluacion } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion';
import { RecepcionSolicitudEvaluacionService } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service';
import { SolicitudEvaluacionCornealService } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service';
import { SolicitudEvaluacionCorneal } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal';
import { CausaMuerteService } from '../../causa-muertes/shared/causa-muerte.service';
import { CausaMuerte } from '../../causa-muertes/shared/causa-muerte';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-evaluacion-solicitud-crud',
    templateUrl: './evaluacion-solicitud-crud.component.html',
    styleUrls: ['./evaluacion-solicitud-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                EvaluacionSolicitudService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                RecepcionSolicitudEvaluacionService,
                CausaMuerteService,
                SolicitudEvaluacionCornealService
	]
})
export class EvaluacionSolicitudCrudComponent implements OnInit {
    public opcionEvaluacionSolicitud  =0;
    public validosEvaluacionSolicitud :any ={
        id:false,
        status:false,
        usuarioUltMov:false,
        idrecepcionSolicitudEvaluacion:false,

    };

    @Input() ocultarConjuntosEvaluacionSolicitud: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "evaluacionSolicitud", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public evaluacionSolicitudLazy: boolean =false;
    public evaluacionSolicitudPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public evaluacionSolicitud: EvaluacionSolicitud = new EvaluacionSolicitud();
    @Output() evaluacionSolicitudChange = new EventEmitter<EvaluacionSolicitud>();
    @Output() evaluacionSolicitudTablaChange = new EventEmitter<EvaluacionSolicitud>();
    public lista_evaluacionSolicitudes: EvaluacionSolicitud[]=[];
    public configuracionEvaluacionSolicitud: ConfigurarEvaluacionSolicitud;
    public evaluacionSolicitudBuscar: boolean
    public evaluacionSolicitudSeleccion: boolean
    public evaluacionSolicitudAgregar: boolean
    public evaluacionSolicitudActualizar: boolean
    public evaluacionSolicitudEliminar: boolean;
    public evaluacionSolicitudGuardar: boolean;
    public evaluacionSolicitudCancelar: boolean;
    public usuarioUltMovEvaluacionSolicitudUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovEvaluacionSolicitudUsuario: Usuario[]=[];
    public usuarioUltMovEvaluacionSolicitudUsuarioEditar:boolean =false;
    public idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
    public lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion[]=[];
    public idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEditar:boolean =false;

    get evaluacionSolicitudOcultarConjuntos(){
        if (this.ocultarConjuntosEvaluacionSolicitud)
           return true
        return  !this.evaluacionSolicitudActualizar;
    }

    ngOnChanges(changes) {
        if (changes.evaluacionSolicitud && changes.evaluacionSolicitud.currentValue == null &&
            this.evaluacionSolicitud == null) this.evaluacionSolicitud = new EvaluacionSolicitud();
        else {
            var aux :EvaluacionSolicitud = new EvaluacionSolicitud();
            if (this.evaluacionSolicitud)
                aux.from(this.evaluacionSolicitud)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudGuardar = false;
                this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = this.evaluacionSolicitudCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudBuscar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
                    this.evaluacionSolicitudGuardar = this.evaluacionSolicitudCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "evaluacionSolicitud",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "recepcionSolicitudEvaluacion",
                                "solicitudEvaluacionCorneal",
                                "causaMuerte",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.evaluacionSolicitudPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public evaluacionSolicitud_service: EvaluacionSolicitudService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,
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
        this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
        this.configuracionEvaluacionSolicitud = new ConfigurarEvaluacionSolicitud();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEvaluacionSolicitudUsuario, this);
        this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesActivos(this.evtGetIdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.evaluacionSolicitudPermisos =true;
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo&& permisos.evaluacionSolicitud.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.evaluacionSolicitud.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoConjunto && permisos.evaluacionSolicitud.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.evaluacionSolicitud.PermisoConjunto ;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoTabla && permisos.evaluacionSolicitud.PermisoTabla.length>0){
            obj.permisosTabla = permisos.evaluacionSolicitud.PermisoTabla[0] ;
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
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoAtributo&& permisos.recepcionSolicitudEvaluacion.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.recepcionSolicitudEvaluacion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.recepcionSolicitudEvaluacion.PermisoAtributo) ;
        }
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoAtributo&& permisos.recepcionSolicitudEvaluacion.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.recepcionSolicitudEvaluacion.PermisoConjunto) ;
        }
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoTabla && permisos.recepcionSolicitudEvaluacion.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.recepcionSolicitudEvaluacion.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.recepcionSolicitudEvaluacion.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovEvaluacionSolicitudUsuario(lista_usuarioUltMovEvaluacionSolicitudUsuario, obj) {
        obj.lista_usuarioUltMovEvaluacionSolicitudUsuario = lista_usuarioUltMovEvaluacionSolicitudUsuario;
        obj.actualizar_UsuarioUltMovEvaluacionSolicitudUsuario();
    }
    evtGetIdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion(lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion, obj) {
        obj.lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion = lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion;
        obj.actualizar_IdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion();
    }


    actualizar_UsuarioUltMovEvaluacionSolicitudUsuario() {
        if ( this.usuarioUltMovEvaluacionSolicitudUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovEvaluacionSolicitudUsuario)
                if (eleme.id == this.usuarioUltMovEvaluacionSolicitudUsuarioEleccion.id){
                    this.usuarioUltMovEvaluacionSolicitudUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion() {
        if ( this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion)
            for (let eleme of this.lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion)
                if (eleme.id == this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion.id){
                    this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosEvaluacionSolicitud['id'];
    }
    get validaIds() {
        return this.validosEvaluacionSolicitud['id'];
    }
    get validaStatus() {
        return this.validosEvaluacionSolicitud['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosEvaluacionSolicitud['usuarioUltMov'];
    }
    get validaIdrecepcionSolicitudEvaluacion() {
        return this.validosEvaluacionSolicitud['idrecepcionSolicitudEvaluacion'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaStatus && this.validaUsuarioUltMov && this.validaIdrecepcionSolicitudEvaluacion;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerEvaluacionSolicitudes(lista, objeto) {
        objeto.lista_evaluacionSolicitudes = lista;
        if (lista && lista.length > 0) {
            objeto.evaluacionSolicitud.from(lista[0]);
            objeto.evtEvaluacionSolicitudSeleccionado(objeto.evaluacionSolicitud);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_evaluacionSolicitud(evaluacionSolicitud, objeto) {
        objeto.evaluacionSolicitud = evaluacionSolicitud;
        objeto.evaluacionSolicitudChange.emit(objeto.evaluacionSolicitud);
        objeto.configuarCombosObjetos();
        objeto.evaluacionSolicitudLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteEvaluacionSolicitudWord(){
        return ! (this.evaluacionSolicitudActualizar && this.evaluacionSolicitudLazy && this.globalesService.preporteWord(this,"evaluacionSolicitud"));
    }
    get datosReporteEvaluacionSolicitudExcel(){
        return ! (this.evaluacionSolicitudActualizar && this.evaluacionSolicitudLazy && this.globalesService.preporteExcel(this,"evaluacionSolicitud"));
    }
    get datosReporteEvaluacionSolicitudPdf(){
        return ! (this.evaluacionSolicitudActualizar && this.evaluacionSolicitudLazy && this.globalesService.preportePdf(this,"evaluacionSolicitud"));
    }
    reporteEvaluacionSolicitudExcel(){
        var nombre:string = "EvaluacionSolicitud.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "evaluacionSolicitud": this.evaluacionSolicitud};
        parametros["plantilla"]="EvaluacionSolicitud.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteEvaluacionSolicitudWord(){
        var nombre:string = "EvaluacionSolicitud.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "evaluacionSolicitud": this.evaluacionSolicitud};
        parametros["plantilla"]="EvaluacionSolicitud.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteEvaluacionSolicitudPdf(){
        var nombre:string = "EvaluacionSolicitud.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "evaluacionSolicitud": this.evaluacionSolicitud};
        parametros["plantilla"]="EvaluacionSolicitud.docx";
        parametros["salida"]="EvaluacionSolicitud.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudCancelar = true;
    }
    buscarEvaluacionSolicitudFront() {
        this.accionesBuscar();
        var vevaluacionSolicitud: EvaluacionSolicitud = new EvaluacionSolicitud();
        vevaluacionSolicitud.from(this.evaluacionSolicitud);
        this.configuracionEvaluacionSolicitud = new ConfigurarEvaluacionSolicitud();
        this.configuracionEvaluacionSolicitud.permisosTabla = { "tabla": "evaluacionSolicitud", "permiso": 8 };
        this.configuracionEvaluacionSolicitud.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta = vevaluacionSolicitud;
        this.permisosacciones();
        $("#buscarEvaluacionSolicitud_"+this.nombre).modal();
    }
    buscarEvaluacionSolicitudBack(evaluacionSolicitud: EvaluacionSolicitud) {
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesByDto(evaluacionSolicitud, this.eventoSrvEvaluacionSolicitudBuscar, this);
    }
    eventoSrvEvaluacionSolicitudBuscar(lista, objeto) {
        objeto.lista_evaluacionSolicitudes = lista;
        if (lista && lista.length > 0) {
            objeto.evaluacionSolicitud = lista[0];
            objeto.evaluacionSolicitudLazy =false;
            objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(objeto.evaluacionSolicitud, objeto.evn_lazy_evaluacionSolicitud, objeto);
        }
    }
    guardarEvaluacionSolicitudFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarEvaluacionSolicitudBack(this.evaluacionSolicitud);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarEvaluacionSolicitudBack(evaluacionSolicitud: EvaluacionSolicitud) {
        if (evaluacionSolicitud.usuarioUltMov == null ) evaluacionSolicitud.usuarioUltMov = this.globalesService.dameUsuario();
        if (evaluacionSolicitud.status == null || evaluacionSolicitud.status == "" ) evaluacionSolicitud.status = 1;
        this.evaluacionSolicitud_service.guardarEvaluacionSolicitud(evaluacionSolicitud, this.eventoSrvEvaluacionSolicitudGuardar, this);
    }
    eventoSrvEvaluacionSolicitudGuardar(evaluacionSolicitud, obj) {
        obj.evaluacionSolicitud = evaluacionSolicitud;
        bootbox.alert("Datos guardados con éxito");
        var aux: EvaluacionSolicitud = new EvaluacionSolicitud();
        aux.from(evaluacionSolicitud);
        obj.evaluacionSolicitudChange.emit(aux);
        obj.evaluacionSolicitudTablaChange.emit(aux);
        obj.evaluacionSolicitudLazy =false;
        obj.evaluacionSolicitud_service.lazyEvaluacionSolicitud(obj.evaluacionSolicitud, obj.evn_lazy_evaluacionSolicitud, obj);
        obj.accionesActualizar();

    }
    actualizarEvaluacionSolicitudFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarEvaluacionSolicitudBack(this.evaluacionSolicitud);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarEvaluacionSolicitudBack(evaluacionSolicitud: EvaluacionSolicitud) {
        evaluacionSolicitud.usuarioUltMov = this.globalesService.dameUsuario();
        this.evaluacionSolicitud_service.actualizarEvaluacionSolicitud(evaluacionSolicitud, this.eventoSrvEvaluacionSolicitudActualizar, this);
    }
    eventoSrvEvaluacionSolicitudActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: EvaluacionSolicitud = new EvaluacionSolicitud();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.evaluacionSolicitudLazy = false;
            obj.evaluacionSolicitud_service.lazyEvaluacionSolicitud(obj.evaluacionSolicitud, obj.evn_lazy_evaluacionSolicitud, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.evaluacionSolicitud);
            obj.evaluacionSolicitudChange.emit(aux);
            obj.evaluacionSolicitudTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarEvaluacionSolicitudFront() {
        this.accion = 4;
        this.eliminarEvaluacionSolicitudBack(this.evaluacionSolicitud);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarEvaluacionSolicitudBack(evaluacionSolicitud: EvaluacionSolicitud) {
        evaluacionSolicitud.usuarioUltMov = this.globalesService.dameUsuario();
        this.evaluacionSolicitud_service.eliminarEvaluacionSolicitud(evaluacionSolicitud, this.eventoSrvEvaluacionSolicitudEliminar, this);
    }
    eventoSrvEvaluacionSolicitudEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.evaluacionSolicitud = new EvaluacionSolicitud();
            obj.evaluacionSolicitudChange.emit(obj.evaluacionSolicitud);
            obj.evaluacionSolicitudTablaChange.emit(obj.evaluacionSolicitud);
            obj.limpiarCampos() ;
        }
    }
    cancelarEvaluacionSolicitudFront() {
        this.accion = 6;
        this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = true;
        this.permisosacciones();
    }
    nuevoEvaluacionSolicitudFront() {
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
                this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudBuscar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
                this.evaluacionSolicitudGuardar = this.evaluacionSolicitudCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovEvaluacionSolicitudUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEvaluacionSolicitudUsuario, this);
        this.lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion = [];
        this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesActivos(this.evtGetIdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudGuardar = false;
        this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = this.evaluacionSolicitudCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtEvaluacionSolicitudSeleccionado(evaluacionSolicitud) {
        this.evaluacionSolicitud = new EvaluacionSolicitud();
        this.evaluacionSolicitud.from(evaluacionSolicitud);
        this.evaluacionSolicitudLazy =false;
        this.evaluacionSolicitud_service.lazyEvaluacionSolicitud(this.evaluacionSolicitud, this.evn_lazy_evaluacionSolicitud, this);
        this.accion = 7;
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudGuardar = false;
        this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = this.evaluacionSolicitudCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarEvaluacionSolicitud_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;        // ******************** maquina
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.evaluacionSolicitudBuscar) this.evaluacionSolicitudBuscar = this.globalesService.pbuscar(this,"evaluacionSolicitud");
        if (this.evaluacionSolicitudActualizar) this.evaluacionSolicitudActualizar = (this.globalesService.pacutalizar(this,"evaluacionSolicitud") && this.globalesService.pbuscar(this,"evaluacionSolicitud"));
        if (this.evaluacionSolicitudEliminar) this.evaluacionSolicitudEliminar = (this.globalesService.peliminar(this,"evaluacionSolicitud") && this.globalesService.pbuscar(this,"evaluacionSolicitud"));
        if (this.evaluacionSolicitudAgregar) this.evaluacionSolicitudAgregar = this.globalesService.pagregar(this,"evaluacionSolicitud");
    }
    permisosaccionesInicio() {
        this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false; // *************************** maquina
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.evaluacionSolicitud = new EvaluacionSolicitud();

        this.usuarioUltMovEvaluacionSolicitudUsuarioEleccion= new Usuario();
        this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion= new RecepcionSolicitudEvaluacion();

        this.evaluacionSolicitudChange.emit(this.evaluacionSolicitud);
        this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false; // *************************** maquina
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
