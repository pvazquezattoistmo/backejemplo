import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { AlmacenTejido } from '../shared/almacen-tejido';
import { AlmacenTejidoService } from '../shared/almacen-tejido.service';
import { ConfigurarAlmacenTejido } from '../shared/configurar-almacen-tejido'
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
    selector: 'app-almacen-tejido-crud',
    templateUrl: './almacen-tejido-crud.component.html',
    styleUrls: ['./almacen-tejido-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                AlmacenTejidoService,
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
export class AlmacenTejidoCrudComponent implements OnInit {
    public opcionAlmacenTejido  =0;
    public validosAlmacenTejido :any ={
        id:false,
        fechaBaja:false,
        ubicacion:true,
        fechaRegistro:false,
        horaRefrigeracion:false,
        fechaActualizacion:false,
        estatusProceso:false,
        comentario:true,
        temperaturaRefrigeracion:false,
        status:false,
        usuarioUltMov:false,
        idoficioDonacion:false,

    };

    @Input() ocultarConjuntosAlmacenTejido: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "almacenTejido", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public almacenTejidoLazy: boolean =false;
    public almacenTejidoPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public almacenTejido: AlmacenTejido = new AlmacenTejido();
    @Output() almacenTejidoChange = new EventEmitter<AlmacenTejido>();
    @Output() almacenTejidoTablaChange = new EventEmitter<AlmacenTejido>();
    public lista_almacenTejidos: AlmacenTejido[]=[];
    public configuracionAlmacenTejido: ConfigurarAlmacenTejido;
    public almacenTejidoBuscar: boolean
    public almacenTejidoSeleccion: boolean
    public almacenTejidoAgregar: boolean
    public almacenTejidoActualizar: boolean
    public almacenTejidoEliminar: boolean;
    public almacenTejidoGuardar: boolean;
    public almacenTejidoCancelar: boolean;
    public usuarioUltMovAlmacenTejidoUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovAlmacenTejidoUsuario: Usuario[]=[];
    public usuarioUltMovAlmacenTejidoUsuarioEditar:boolean =false;
    public idoficioDonacionAlmacenTejidoOficioDonacionEleccion: OficioDonacion = new OficioDonacion();
    public lista_idoficioDonacionAlmacenTejidoOficioDonacion: OficioDonacion[]=[];
    public idoficioDonacionAlmacenTejidoOficioDonacionEditar:boolean =false;
    @Input() enable: boolean;
    get almacenTejidoOcultarConjuntos(){
        if (this.ocultarConjuntosAlmacenTejido)
           return true
        return  !this.almacenTejidoActualizar;
    }

    ngOnChanges(changes) {
        if (changes.almacenTejido && changes.almacenTejido.currentValue == null &&
            this.almacenTejido == null) this.almacenTejido = new AlmacenTejido();
        else {
            var aux :AlmacenTejido = new AlmacenTejido();
            if (this.almacenTejido)
                aux.from(this.almacenTejido)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoSeleccion = this.almacenTejidoGuardar = false;
                this.almacenTejidoActualizar = this.almacenTejidoEliminar = this.almacenTejidoCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.almacenTejidoSeleccion = this.almacenTejidoAgregar = this.almacenTejidoBuscar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
                    this.almacenTejidoGuardar = this.almacenTejidoCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "almacenTejido",
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
      this.almacenTejidoPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public almacenTejido_service: AlmacenTejidoService,
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
        this.almacenTejidoSeleccion = this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
        this.configuracionAlmacenTejido = new ConfigurarAlmacenTejido();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovAlmacenTejidoUsuario, this);
        //this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionAlmacenTejidoOficioDonacion, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.almacenTejidoPermisos =true;
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoAtributo&& permisos.almacenTejido.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.almacenTejido.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoConjunto && permisos.almacenTejido.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.almacenTejido.PermisoConjunto ;
        }
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoTabla && permisos.almacenTejido.PermisoTabla.length>0){
            obj.permisosTabla = permisos.almacenTejido.PermisoTabla[0] ;
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


    evtGetUsuarioUltMovAlmacenTejidoUsuario(lista_usuarioUltMovAlmacenTejidoUsuario, obj) {
        obj.lista_usuarioUltMovAlmacenTejidoUsuario = lista_usuarioUltMovAlmacenTejidoUsuario;
        obj.actualizar_UsuarioUltMovAlmacenTejidoUsuario();
    }
    evtGetIdoficioDonacionAlmacenTejidoOficioDonacion(lista_idoficioDonacionAlmacenTejidoOficioDonacion, obj) {
        obj.lista_idoficioDonacionAlmacenTejidoOficioDonacion = lista_idoficioDonacionAlmacenTejidoOficioDonacion;
        obj.actualizar_IdoficioDonacionAlmacenTejidoOficioDonacion();
    }


    actualizar_UsuarioUltMovAlmacenTejidoUsuario() {
        if ( this.usuarioUltMovAlmacenTejidoUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovAlmacenTejidoUsuario)
                if (eleme.id == this.usuarioUltMovAlmacenTejidoUsuarioEleccion.id){
                    this.usuarioUltMovAlmacenTejidoUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdoficioDonacionAlmacenTejidoOficioDonacion() {
        if ( this.idoficioDonacionAlmacenTejidoOficioDonacionEleccion)
            for (let eleme of this.lista_idoficioDonacionAlmacenTejidoOficioDonacion)
                if (eleme.id == this.idoficioDonacionAlmacenTejidoOficioDonacionEleccion.id){
                    this.idoficioDonacionAlmacenTejidoOficioDonacionEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosAlmacenTejido['id'];
    }
    get validaIds() {
        return this.validosAlmacenTejido['id'];
    }
    get validaFechaBaja() {
        return this.validosAlmacenTejido['fechaBaja'];
    }
    get validaUbicacion() {
        return this.validosAlmacenTejido['ubicacion'];
    }
    get validaFechaRegistro() {
        return this.validosAlmacenTejido['fechaRegistro'];
    }
    get validaHoraRefrigeracion() {
        return this.validosAlmacenTejido['horaRefrigeracion'];
    }
    get validaFechaActualizacion() {
        return this.validosAlmacenTejido['fechaActualizacion'];
    }
    get validaEstatusProceso() {
        return this.validosAlmacenTejido['estatusProceso'];
    }
    get validaComentario() {
        return this.validosAlmacenTejido['comentario'];
    }
    get validaTemperaturaRefrigeracion() {
        return this.validosAlmacenTejido['temperaturaRefrigeracion'];
    }
    get validaStatus() {
        return this.validosAlmacenTejido['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosAlmacenTejido['usuarioUltMov'];
    }
    get validaIdoficioDonacion() {
        return this.validosAlmacenTejido['idoficioDonacion'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaUbicacion && this.validaFechaRegistro && this.validaHoraRefrigeracion && this.validaFechaActualizacion && this.validaEstatusProceso && this.validaComentario && this.validaTemperaturaRefrigeracion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdoficioDonacion;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerAlmacenTejidos(lista, objeto) {
        objeto.lista_almacenTejidos = lista;
        if (lista && lista.length > 0) {
            objeto.almacenTejido.from(lista[0]);
            objeto.evtAlmacenTejidoSeleccionado(objeto.almacenTejido);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_almacenTejido(almacenTejido, objeto) {
        objeto.almacenTejido = almacenTejido;
        objeto.almacenTejidoChange.emit(objeto.almacenTejido);
        objeto.configuarCombosObjetos();
        objeto.almacenTejidoLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteAlmacenTejidoWord(){
        return ! (this.almacenTejidoActualizar && this.almacenTejidoLazy && this.globalesService.preporteWord(this,"almacenTejido"));
    }
    get datosReporteAlmacenTejidoExcel(){
        return ! (this.almacenTejidoActualizar && this.almacenTejidoLazy && this.globalesService.preporteExcel(this,"almacenTejido"));
    }
    get datosReporteAlmacenTejidoPdf(){
        return ! (this.almacenTejidoActualizar && this.almacenTejidoLazy && this.globalesService.preportePdf(this,"almacenTejido"));
    }
    reporteAlmacenTejidoExcel(form: any){
        var nombre:string = "AlmacenTejido.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "almacenTejido": this.almacenTejido};
        parametros["plantilla"]="AlmacenTejido.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteAlmacenTejidoWord(form: any){
        var nombre:string = "AlmacenTejido.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "almacenTejido": this.almacenTejido};
        parametros["plantilla"]="AlmacenTejido.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteAlmacenTejidoPdf(form: any){
        var nombre:string = "AlmacenTejido.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "almacenTejido": this.almacenTejido};
        parametros["plantilla"]="AlmacenTejido.docx";
        parametros["salida"]="AlmacenTejido.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoCancelar = true;
    }
    buscarAlmacenTejidoFront(form: any) {
        this.accionesBuscar();
        var valmacenTejido: AlmacenTejido = new AlmacenTejido();
        valmacenTejido.from(this.almacenTejido);
        this.configuracionAlmacenTejido = new ConfigurarAlmacenTejido();
        this.configuracionAlmacenTejido.permisosTabla = { "tabla": "almacenTejido", "permiso": 8 };
        this.configuracionAlmacenTejido.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionAlmacenTejido.almacenTejidoConsulta = valmacenTejido;
        this.permisosacciones();
        $("#buscarAlmacenTejido_"+this.nombre).modal();
    }
    buscarAlmacenTejidoBack(almacenTejido: AlmacenTejido) {
        this.almacenTejido_service.getAlmacenTejidosByDto(almacenTejido, this.eventoSrvAlmacenTejidoBuscar, this);
    }
    eventoSrvAlmacenTejidoBuscar(lista, objeto) {
        objeto.lista_almacenTejidos = lista;
        if (lista && lista.length > 0) {
            objeto.almacenTejido = lista[0];
            objeto.almacenTejidoLazy =false;
            objeto.almacenTejido_service.lazyAlmacenTejido(objeto.almacenTejido, objeto.evn_lazy_almacenTejido, objeto);
        }
    }
    guardarAlmacenTejidoFront(form: any) {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarAlmacenTejidoBack(this.almacenTejido);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarAlmacenTejidoBack(almacenTejido: AlmacenTejido) {
        if (almacenTejido.usuarioUltMov == null ) almacenTejido.usuarioUltMov = this.globalesService.dameUsuario();
        if (almacenTejido.status == null || almacenTejido.status == "" ) almacenTejido.status = 1;
        this.almacenTejido_service.guardarAlmacenTejido(almacenTejido, this.eventoSrvAlmacenTejidoGuardar, this);
    }
    eventoSrvAlmacenTejidoGuardar(almacenTejido, obj) {
        obj.almacenTejido = almacenTejido;
        bootbox.alert("Datos guardados con éxito");
        var aux: AlmacenTejido = new AlmacenTejido();
        aux.from(almacenTejido);
        obj.almacenTejidoChange.emit(aux);
        obj.almacenTejidoTablaChange.emit(aux);
        obj.almacenTejidoLazy =false;
        obj.almacenTejido_service.lazyAlmacenTejido(obj.almacenTejido, obj.evn_lazy_almacenTejido, obj);
        obj.accionesActualizar();

    }
    actualizarAlmacenTejidoFront(form: any) {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarAlmacenTejidoBack(this.almacenTejido);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarAlmacenTejidoBack(almacenTejido: AlmacenTejido) {
        almacenTejido.usuarioUltMov = this.globalesService.dameUsuario();
        this.almacenTejido_service.actualizarAlmacenTejido(almacenTejido, this.eventoSrvAlmacenTejidoActualizar, this);
    }
    eventoSrvAlmacenTejidoActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: AlmacenTejido = new AlmacenTejido();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.almacenTejidoLazy = false;
            obj.almacenTejido_service.lazyAlmacenTejido(obj.almacenTejido, obj.evn_lazy_almacenTejido, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.almacenTejido);
            obj.almacenTejidoChange.emit(aux);
            obj.almacenTejidoTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarAlmacenTejidoFront(form: any) {
        this.accion = 4;
        this.eliminarAlmacenTejidoBack(this.almacenTejido);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarAlmacenTejidoBack(almacenTejido: AlmacenTejido) {
        almacenTejido.usuarioUltMov = this.globalesService.dameUsuario();
        this.almacenTejido_service.eliminarAlmacenTejido(almacenTejido, this.eventoSrvAlmacenTejidoEliminar, this);
    }
    eventoSrvAlmacenTejidoEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.almacenTejido = new AlmacenTejido();
            obj.almacenTejidoChange.emit(obj.almacenTejido);
            obj.almacenTejidoTablaChange.emit(obj.almacenTejido);
            obj.limpiarCampos() ;
        }
    }
    cancelarAlmacenTejidoFront(form: any) {
        this.accion = 6;
        this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = true;
        this.permisosacciones();
    }
    nuevoAlmacenTejidoFront(form: any) {
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
                this.almacenTejidoSeleccion = this.almacenTejidoAgregar = this.almacenTejidoBuscar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
                this.almacenTejidoGuardar = this.almacenTejidoCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovAlmacenTejidoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovAlmacenTejidoUsuario, this);
        this.lista_idoficioDonacionAlmacenTejidoOficioDonacion = [];
        this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionAlmacenTejidoOficioDonacion, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoSeleccion = this.almacenTejidoGuardar = false;
        this.almacenTejidoActualizar = this.almacenTejidoEliminar = this.almacenTejidoCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtAlmacenTejidoSeleccionado(almacenTejido) {
        this.almacenTejido = new AlmacenTejido();
        this.almacenTejido.from(almacenTejido);
        this.almacenTejidoLazy =false;
        this.almacenTejido_service.lazyAlmacenTejido(this.almacenTejido, this.evn_lazy_almacenTejido, this);
        this.accion = 7;
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoSeleccion = this.almacenTejidoGuardar = false;
        this.almacenTejidoActualizar = this.almacenTejidoEliminar = this.almacenTejidoCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarAlmacenTejido_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.almacenTejidoSeleccion = this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;        // ******************** maquina
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.almacenTejidoBuscar) this.almacenTejidoBuscar = this.globalesService.pbuscar(this,"almacenTejido");
        if (this.almacenTejidoActualizar) this.almacenTejidoActualizar = (this.globalesService.pacutalizar(this,"almacenTejido") && this.globalesService.pbuscar(this,"almacenTejido"));
        if (this.almacenTejidoEliminar) this.almacenTejidoEliminar = (this.globalesService.peliminar(this,"almacenTejido") && this.globalesService.pbuscar(this,"almacenTejido"));
        if (this.almacenTejidoAgregar) this.almacenTejidoAgregar = this.globalesService.pagregar(this,"almacenTejido");
    }
    permisosaccionesInicio() {
        this.almacenTejidoSeleccion = this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false; // *************************** maquina
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.almacenTejido = new AlmacenTejido();

        this.usuarioUltMovAlmacenTejidoUsuarioEleccion= new Usuario();
        this.idoficioDonacionAlmacenTejidoOficioDonacionEleccion= new OficioDonacion();

        this.almacenTejidoChange.emit(this.almacenTejido);
        this.almacenTejidoSeleccion = this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false; // *************************** maquina
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
