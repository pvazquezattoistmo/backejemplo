import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { DocumentacionDonacion } from '../shared/documentacion-donacion';
import { DocumentacionDonacionService } from '../shared/documentacion-donacion.service';
import { ConfigurarDocumentacionDonacion } from '../shared/configurar-documentacion-donacion'
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
    selector: 'app-documentacion-donacion-crud',
    templateUrl: './documentacion-donacion-crud.component.html',
    styleUrls: ['./documentacion-donacion-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                DocumentacionDonacionService,
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
export class DocumentacionDonacionCrudComponent implements OnInit {
    public opcionDocumentacionDonacion  =0;
    public validosDocumentacionDonacion :any ={
        id:false,
        fechaBaja:false,
        certificadoMuerteEncefalico:false,
        consentimientoInformado:false,
        fechaRegistro:false,
        panelViral:false,
        revisionLampara:false,
        fechaActualizacion:false,
        certificadoDefunsion:false,
        status:false,
        usuarioUltMov:false,
        idoficioDonacion:false,

    };

    @Input() ocultarConjuntosDocumentacionDonacion: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "documentacionDonacion", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public documentacionDonacionLazy: boolean =false;
    public documentacionDonacionPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public documentacionDonacion: DocumentacionDonacion = new DocumentacionDonacion();
    @Output() documentacionDonacionChange = new EventEmitter<DocumentacionDonacion>();
    @Output() documentacionDonacionTablaChange = new EventEmitter<DocumentacionDonacion>();
    public lista_documentacionDonaciones: DocumentacionDonacion[]=[];
    public configuracionDocumentacionDonacion: ConfigurarDocumentacionDonacion;
    public documentacionDonacionBuscar: boolean
    public documentacionDonacionSeleccion: boolean
    public documentacionDonacionAgregar: boolean
    public documentacionDonacionActualizar: boolean
    public documentacionDonacionEliminar: boolean;
    public documentacionDonacionGuardar: boolean;
    public documentacionDonacionCancelar: boolean;
    public usuarioUltMovDocumentacionDonacionUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovDocumentacionDonacionUsuario: Usuario[]=[];
    public usuarioUltMovDocumentacionDonacionUsuarioEditar:boolean =false;
    public idoficioDonacionDocumentacionDonacionOficioDonacionEleccion: OficioDonacion = new OficioDonacion();
    public lista_idoficioDonacionDocumentacionDonacionOficioDonacion: OficioDonacion[]=[];
    public idoficioDonacionDocumentacionDonacionOficioDonacionEditar:boolean =false;
    @Input() public recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion;
    @Input() enable: boolean;
    get documentacionDonacionOcultarConjuntos(){
        if (this.ocultarConjuntosDocumentacionDonacion)
           return true
        return  !this.documentacionDonacionActualizar;
    }

    ngOnChanges(changes) {
        if (changes.documentacionDonacion && changes.documentacionDonacion.currentValue == null &&
            this.documentacionDonacion == null) this.documentacionDonacion = new DocumentacionDonacion();
        else {
            var aux :DocumentacionDonacion = new DocumentacionDonacion();
            if (this.documentacionDonacion)
                aux.from(this.documentacionDonacion)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionSeleccion = this.documentacionDonacionGuardar = false;
                this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = this.documentacionDonacionCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.documentacionDonacionSeleccion = this.documentacionDonacionAgregar = this.documentacionDonacionBuscar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
                    this.documentacionDonacionGuardar = this.documentacionDonacionCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "documentacionDonacion",
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
      this.documentacionDonacionPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public documentacionDonacion_service: DocumentacionDonacionService,
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
        this.documentacionDonacionSeleccion = this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
        this.configuracionDocumentacionDonacion = new ConfigurarDocumentacionDonacion();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDocumentacionDonacionUsuario, this);
        //this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionDocumentacionDonacionOficioDonacion, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.documentacionDonacionPermisos =true;
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoAtributo&& permisos.documentacionDonacion.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.documentacionDonacion.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoConjunto && permisos.documentacionDonacion.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.documentacionDonacion.PermisoConjunto ;
        }
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoTabla && permisos.documentacionDonacion.PermisoTabla.length>0){
            obj.permisosTabla = permisos.documentacionDonacion.PermisoTabla[0] ;
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


    evtGetUsuarioUltMovDocumentacionDonacionUsuario(lista_usuarioUltMovDocumentacionDonacionUsuario, obj) {
        obj.lista_usuarioUltMovDocumentacionDonacionUsuario = lista_usuarioUltMovDocumentacionDonacionUsuario;
        obj.actualizar_UsuarioUltMovDocumentacionDonacionUsuario();
    }
    evtGetIdoficioDonacionDocumentacionDonacionOficioDonacion(lista_idoficioDonacionDocumentacionDonacionOficioDonacion, obj) {
        obj.lista_idoficioDonacionDocumentacionDonacionOficioDonacion = lista_idoficioDonacionDocumentacionDonacionOficioDonacion;
        obj.actualizar_IdoficioDonacionDocumentacionDonacionOficioDonacion();
    }


    actualizar_UsuarioUltMovDocumentacionDonacionUsuario() {
        if ( this.usuarioUltMovDocumentacionDonacionUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovDocumentacionDonacionUsuario)
                if (eleme.id == this.usuarioUltMovDocumentacionDonacionUsuarioEleccion.id){
                    this.usuarioUltMovDocumentacionDonacionUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdoficioDonacionDocumentacionDonacionOficioDonacion() {
        if ( this.idoficioDonacionDocumentacionDonacionOficioDonacionEleccion)
            for (let eleme of this.lista_idoficioDonacionDocumentacionDonacionOficioDonacion)
                if (eleme.id == this.idoficioDonacionDocumentacionDonacionOficioDonacionEleccion.id){
                    this.idoficioDonacionDocumentacionDonacionOficioDonacionEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosDocumentacionDonacion['id'];
    }
    get validaIds() {
        return this.validosDocumentacionDonacion['id'];
    }
    get validaFechaBaja() {
        return this.validosDocumentacionDonacion['fechaBaja'];
    }
    get validaCertificadoMuerteEncefalico() {
        return this.validosDocumentacionDonacion['certificadoMuerteEncefalico'];
    }
    get validaConsentimientoInformado() {
        return this.validosDocumentacionDonacion['consentimientoInformado'];
    }
    get validaFechaRegistro() {
        return this.validosDocumentacionDonacion['fechaRegistro'];
    }
    get validaPanelViral() {
        return this.validosDocumentacionDonacion['panelViral'];
    }
    get validaRevisionLampara() {
        return this.validosDocumentacionDonacion['revisionLampara'];
    }
    get validaFechaActualizacion() {
        return this.validosDocumentacionDonacion['fechaActualizacion'];
    }
    get validaCertificadoDefunsion() {
        return this.validosDocumentacionDonacion['certificadoDefunsion'];
    }
    get validaStatus() {
        return this.validosDocumentacionDonacion['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosDocumentacionDonacion['usuarioUltMov'];
    }
    get validaIdoficioDonacion() {
        return this.validosDocumentacionDonacion['idoficioDonacion'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaCertificadoMuerteEncefalico && this.validaConsentimientoInformado && this.validaFechaRegistro && this.validaPanelViral && this.validaRevisionLampara && this.validaFechaActualizacion && this.validaCertificadoDefunsion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdoficioDonacion;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerDocumentacionDonaciones(lista, objeto) {
        objeto.lista_documentacionDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.documentacionDonacion.from(lista[0]);
            objeto.evtDocumentacionDonacionSeleccionado(objeto.documentacionDonacion);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_documentacionDonacion(documentacionDonacion, objeto) {
        objeto.documentacionDonacion = documentacionDonacion;
        objeto.documentacionDonacionChange.emit(objeto.documentacionDonacion);
        objeto.configuarCombosObjetos();
        objeto.documentacionDonacionLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteDocumentacionDonacionWord(){
        return ! (this.documentacionDonacionActualizar && this.documentacionDonacionLazy && this.globalesService.preporteWord(this,"documentacionDonacion"));
    }
    get datosReporteDocumentacionDonacionExcel(){
        return ! (this.documentacionDonacionActualizar && this.documentacionDonacionLazy && this.globalesService.preporteExcel(this,"documentacionDonacion"));
    }
    get datosReporteDocumentacionDonacionPdf(){
        return ! (this.documentacionDonacionActualizar && this.documentacionDonacionLazy && this.globalesService.preportePdf(this,"documentacionDonacion"));
    }
    reporteDocumentacionDonacionExcel(form: any){
        var nombre:string = "DocumentacionDonacion.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "documentacionDonacion": this.documentacionDonacion};
        parametros["plantilla"]="DocumentacionDonacion.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDocumentacionDonacionWord(form: any){
        var nombre:string = "DocumentacionDonacion.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "documentacionDonacion": this.documentacionDonacion};
        parametros["plantilla"]="DocumentacionDonacion.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDocumentacionDonacionPdf(form: any){
        var nombre:string = "DocumentacionDonacion.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "documentacionDonacion": this.documentacionDonacion};
        parametros["plantilla"]="DocumentacionDonacion.docx";
        parametros["salida"]="DocumentacionDonacion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionCancelar = true;
    }
    buscarDocumentacionDonacionFront(form: any) {
        this.accionesBuscar();
        var vdocumentacionDonacion: DocumentacionDonacion = new DocumentacionDonacion();
        vdocumentacionDonacion.from(this.documentacionDonacion);
        this.configuracionDocumentacionDonacion = new ConfigurarDocumentacionDonacion();
        this.configuracionDocumentacionDonacion.permisosTabla = { "tabla": "documentacionDonacion", "permiso": 8 };
        this.configuracionDocumentacionDonacion.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionDocumentacionDonacion.documentacionDonacionConsulta = vdocumentacionDonacion;
        this.permisosacciones();
        $("#buscarDocumentacionDonacion_"+this.nombre).modal();
    }
    buscarDocumentacionDonacionBack(documentacionDonacion: DocumentacionDonacion) {
        this.documentacionDonacion_service.getDocumentacionDonacionesByDto(documentacionDonacion, this.eventoSrvDocumentacionDonacionBuscar, this);
    }
    eventoSrvDocumentacionDonacionBuscar(lista, objeto) {
        objeto.lista_documentacionDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.documentacionDonacion = lista[0];
            objeto.documentacionDonacionLazy =false;
            objeto.documentacionDonacion_service.lazyDocumentacionDonacion(objeto.documentacionDonacion, objeto.evn_lazy_documentacionDonacion, objeto);
        }
    }
    guardarDocumentacionDonacionFront(form: any) {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarDocumentacionDonacionBack(this.documentacionDonacion);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarDocumentacionDonacionBack(documentacionDonacion: DocumentacionDonacion) {
        if (documentacionDonacion.usuarioUltMov == null ) documentacionDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        if (documentacionDonacion.status == null || documentacionDonacion.status == "" ) documentacionDonacion.status = 1;
        this.documentacionDonacion_service.guardarDocumentacionDonacion(documentacionDonacion, this.eventoSrvDocumentacionDonacionGuardar, this);
    }
    eventoSrvDocumentacionDonacionGuardar(documentacionDonacion, obj) {
        obj.documentacionDonacion = documentacionDonacion;
        bootbox.alert("Datos guardados con éxito");
        var aux: DocumentacionDonacion = new DocumentacionDonacion();
        aux.from(documentacionDonacion);
        obj.documentacionDonacionChange.emit(aux);
        obj.documentacionDonacionTablaChange.emit(aux);
        obj.documentacionDonacionLazy =false;
        obj.documentacionDonacion_service.lazyDocumentacionDonacion(obj.documentacionDonacion, obj.evn_lazy_documentacionDonacion, obj);
        obj.accionesActualizar();

    }
    actualizarDocumentacionDonacionFront(form: any) {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarDocumentacionDonacionBack(this.documentacionDonacion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarDocumentacionDonacionBack(documentacionDonacion: DocumentacionDonacion) {
        documentacionDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.documentacionDonacion_service.actualizarDocumentacionDonacion(documentacionDonacion, this.eventoSrvDocumentacionDonacionActualizar, this);
    }
    eventoSrvDocumentacionDonacionActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: DocumentacionDonacion = new DocumentacionDonacion();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.documentacionDonacionLazy = false;
            obj.documentacionDonacion_service.lazyDocumentacionDonacion(obj.documentacionDonacion, obj.evn_lazy_documentacionDonacion, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.documentacionDonacion);
            obj.documentacionDonacionChange.emit(aux);
            obj.documentacionDonacionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarDocumentacionDonacionFront(form: any) {
        this.accion = 4;
        this.eliminarDocumentacionDonacionBack(this.documentacionDonacion);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarDocumentacionDonacionBack(documentacionDonacion: DocumentacionDonacion) {
        documentacionDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.documentacionDonacion_service.eliminarDocumentacionDonacion(documentacionDonacion, this.eventoSrvDocumentacionDonacionEliminar, this);
    }
    eventoSrvDocumentacionDonacionEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.documentacionDonacion = new DocumentacionDonacion();
            obj.documentacionDonacionChange.emit(obj.documentacionDonacion);
            obj.documentacionDonacionTablaChange.emit(obj.documentacionDonacion);
            obj.limpiarCampos() ;
        }
    }
    cancelarDocumentacionDonacionFront(form: any) {
        this.accion = 6;
        this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = true;
        this.permisosacciones();
    }
    nuevoDocumentacionDonacionFront(form: any) {
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
                this.documentacionDonacionSeleccion = this.documentacionDonacionAgregar = this.documentacionDonacionBuscar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
                this.documentacionDonacionGuardar = this.documentacionDonacionCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovDocumentacionDonacionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDocumentacionDonacionUsuario, this);
        this.lista_idoficioDonacionDocumentacionDonacionOficioDonacion = [];
        this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionDocumentacionDonacionOficioDonacion, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionSeleccion = this.documentacionDonacionGuardar = false;
        this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = this.documentacionDonacionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtDocumentacionDonacionSeleccionado(documentacionDonacion) {
        this.documentacionDonacion = new DocumentacionDonacion();
        this.documentacionDonacion.from(documentacionDonacion);
        this.documentacionDonacionLazy =false;
        this.documentacionDonacion_service.lazyDocumentacionDonacion(this.documentacionDonacion, this.evn_lazy_documentacionDonacion, this);
        this.accion = 7;
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionSeleccion = this.documentacionDonacionGuardar = false;
        this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = this.documentacionDonacionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDocumentacionDonacion_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.documentacionDonacionSeleccion = this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;        // ******************** maquina
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.documentacionDonacionBuscar) this.documentacionDonacionBuscar = this.globalesService.pbuscar(this,"documentacionDonacion");
        if (this.documentacionDonacionActualizar) this.documentacionDonacionActualizar = (this.globalesService.pacutalizar(this,"documentacionDonacion") && this.globalesService.pbuscar(this,"documentacionDonacion"));
        if (this.documentacionDonacionEliminar) this.documentacionDonacionEliminar = (this.globalesService.peliminar(this,"documentacionDonacion") && this.globalesService.pbuscar(this,"documentacionDonacion"));
        if (this.documentacionDonacionAgregar) this.documentacionDonacionAgregar = this.globalesService.pagregar(this,"documentacionDonacion");
    }
    permisosaccionesInicio() {
        this.documentacionDonacionSeleccion = this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false; // *************************** maquina
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.documentacionDonacion = new DocumentacionDonacion();

        this.usuarioUltMovDocumentacionDonacionUsuarioEleccion= new Usuario();
        this.idoficioDonacionDocumentacionDonacionOficioDonacionEleccion= new OficioDonacion();

        this.documentacionDonacionChange.emit(this.documentacionDonacion);
        this.documentacionDonacionSeleccion = this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false; // *************************** maquina
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
