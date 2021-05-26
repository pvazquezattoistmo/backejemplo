import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { CaracteristicaDonacion } from '../shared/caracteristica-donacion';
import { CaracteristicaDonacionService } from '../shared/caracteristica-donacion.service';
import { ConfigurarCaracteristicaDonacion } from '../shared/configurar-caracteristica-donacion'
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
    selector: 'app-caracteristica-donacion-crud',
    templateUrl: './caracteristica-donacion-crud.component.html',
    styleUrls: ['./caracteristica-donacion-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                CaracteristicaDonacionService,
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
export class CaracteristicaDonacionCrudComponent implements OnInit {
    public opcionCaracteristicaDonacion  =0;
    public validosCaracteristicaDonacion :any ={
        id:false,
        fechaBaja:false,
        oiciCultivo:false,
        oici:false,
        odcdCultivo:false,
        odcd:false,
        fechaRegistro:false,
        fechaActualizacion:false,
        tiempoIsquemia:false,
        observacion:true,
        status:false,
        usuarioUltMov:false,
        idoficioDonacion:false,

    };

    @Input() ocultarConjuntosCaracteristicaDonacion: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "caracteristicaDonacion", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public caracteristicaDonacionLazy: boolean =false;
    public caracteristicaDonacionPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public caracteristicaDonacion: CaracteristicaDonacion = new CaracteristicaDonacion();
    @Output() caracteristicaDonacionChange = new EventEmitter<CaracteristicaDonacion>();
    @Output() caracteristicaDonacionTablaChange = new EventEmitter<CaracteristicaDonacion>();
    public lista_caracteristicaDonaciones: CaracteristicaDonacion[]=[];
    public configuracionCaracteristicaDonacion: ConfigurarCaracteristicaDonacion;
    public caracteristicaDonacionBuscar: boolean
    public caracteristicaDonacionSeleccion: boolean
    public caracteristicaDonacionAgregar: boolean
    public caracteristicaDonacionActualizar: boolean
    public caracteristicaDonacionEliminar: boolean;
    public caracteristicaDonacionGuardar: boolean;
    public caracteristicaDonacionCancelar: boolean;
    public usuarioUltMovCaracteristicaDonacionUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovCaracteristicaDonacionUsuario: Usuario[]=[];
    public usuarioUltMovCaracteristicaDonacionUsuarioEditar:boolean =false;
    public idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion: OficioDonacion = new OficioDonacion();
    public lista_idoficioDonacionCaracteristicaDonacionOficioDonacion: OficioDonacion[]=[];
    public idoficioDonacionCaracteristicaDonacionOficioDonacionEditar:boolean =false;
    @Input() enable: boolean;
    @Input() recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion;
    get caracteristicaDonacionOcultarConjuntos(){
        if (this.ocultarConjuntosCaracteristicaDonacion)
           return true
        return  !this.caracteristicaDonacionActualizar;
    }

    ngOnChanges(changes) {
        if (changes.caracteristicaDonacion && changes.caracteristicaDonacion.currentValue == null &&
            this.caracteristicaDonacion == null) this.caracteristicaDonacion = new CaracteristicaDonacion();
        else {
            var aux :CaracteristicaDonacion = new CaracteristicaDonacion();
            if (this.caracteristicaDonacion)
                aux.from(this.caracteristicaDonacion)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionGuardar = false;
                this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = this.caracteristicaDonacionCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionBuscar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
                    this.caracteristicaDonacionGuardar = this.caracteristicaDonacionCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "caracteristicaDonacion",
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
      this.caracteristicaDonacionPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public caracteristicaDonacion_service: CaracteristicaDonacionService,
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
        this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
        this.configuracionCaracteristicaDonacion = new ConfigurarCaracteristicaDonacion();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCaracteristicaDonacionUsuario, this);
        //this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionCaracteristicaDonacionOficioDonacion, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.caracteristicaDonacionPermisos =true;
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoAtributo&& permisos.caracteristicaDonacion.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.caracteristicaDonacion.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoConjunto && permisos.caracteristicaDonacion.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.caracteristicaDonacion.PermisoConjunto ;
        }
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoTabla && permisos.caracteristicaDonacion.PermisoTabla.length>0){
            obj.permisosTabla = permisos.caracteristicaDonacion.PermisoTabla[0] ;
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


    evtGetUsuarioUltMovCaracteristicaDonacionUsuario(lista_usuarioUltMovCaracteristicaDonacionUsuario, obj) {
        obj.lista_usuarioUltMovCaracteristicaDonacionUsuario = lista_usuarioUltMovCaracteristicaDonacionUsuario;
        obj.actualizar_UsuarioUltMovCaracteristicaDonacionUsuario();
    }
    evtGetIdoficioDonacionCaracteristicaDonacionOficioDonacion(lista_idoficioDonacionCaracteristicaDonacionOficioDonacion, obj) {
        obj.lista_idoficioDonacionCaracteristicaDonacionOficioDonacion = lista_idoficioDonacionCaracteristicaDonacionOficioDonacion;
        obj.actualizar_IdoficioDonacionCaracteristicaDonacionOficioDonacion();
    }


    actualizar_UsuarioUltMovCaracteristicaDonacionUsuario() {
        if ( this.usuarioUltMovCaracteristicaDonacionUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovCaracteristicaDonacionUsuario)
                if (eleme.id == this.usuarioUltMovCaracteristicaDonacionUsuarioEleccion.id){
                    this.usuarioUltMovCaracteristicaDonacionUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdoficioDonacionCaracteristicaDonacionOficioDonacion() {
        if ( this.idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion)
            for (let eleme of this.lista_idoficioDonacionCaracteristicaDonacionOficioDonacion)
                if (eleme.id == this.idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion.id){
                    this.idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosCaracteristicaDonacion['id'];
    }
    get validaIds() {
        return this.validosCaracteristicaDonacion['id'];
    }
    get validaFechaBaja() {
        return this.validosCaracteristicaDonacion['fechaBaja'];
    }
    get validaOiciCultivo() {
        return this.validosCaracteristicaDonacion['oiciCultivo'];
    }
    get validaOici() {
        return this.validosCaracteristicaDonacion['oici'];
    }
    get validaOdcdCultivo() {
        return this.validosCaracteristicaDonacion['odcdCultivo'];
    }
    get validaOdcd() {
        return this.validosCaracteristicaDonacion['odcd'];
    }
    get validaFechaRegistro() {
        return this.validosCaracteristicaDonacion['fechaRegistro'];
    }
    get validaFechaActualizacion() {
        return this.validosCaracteristicaDonacion['fechaActualizacion'];
    }
    get validaTiempoIsquemia() {
        return this.validosCaracteristicaDonacion['tiempoIsquemia'];
    }
    get validaObservacion() {
        return this.validosCaracteristicaDonacion['observacion'];
    }
    get validaStatus() {
        return this.validosCaracteristicaDonacion['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosCaracteristicaDonacion['usuarioUltMov'];
    }
    get validaIdoficioDonacion() {
        return this.validosCaracteristicaDonacion['idoficioDonacion'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaOiciCultivo && this.validaOici && this.validaOdcdCultivo && this.validaOdcd && this.validaFechaRegistro && this.validaFechaActualizacion && this.validaTiempoIsquemia && this.validaObservacion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdoficioDonacion;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerCaracteristicaDonaciones(lista, objeto) {
        objeto.lista_caracteristicaDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.caracteristicaDonacion.from(lista[0]);
            objeto.evtCaracteristicaDonacionSeleccionado(objeto.caracteristicaDonacion);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_caracteristicaDonacion(caracteristicaDonacion, objeto) {
        objeto.caracteristicaDonacion = caracteristicaDonacion;
        objeto.caracteristicaDonacionChange.emit(objeto.caracteristicaDonacion);
        objeto.configuarCombosObjetos();
        objeto.caracteristicaDonacionLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteCaracteristicaDonacionWord(){
        return ! (this.caracteristicaDonacionActualizar && this.caracteristicaDonacionLazy && this.globalesService.preporteWord(this,"caracteristicaDonacion"));
    }
    get datosReporteCaracteristicaDonacionExcel(){
        return ! (this.caracteristicaDonacionActualizar && this.caracteristicaDonacionLazy && this.globalesService.preporteExcel(this,"caracteristicaDonacion"));
    }
    get datosReporteCaracteristicaDonacionPdf(){
        return ! (this.caracteristicaDonacionActualizar && this.caracteristicaDonacionLazy && this.globalesService.preportePdf(this,"caracteristicaDonacion"));
    }
    reporteCaracteristicaDonacionExcel(form: any){
        var nombre:string = "CaracteristicaDonacion.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "caracteristicaDonacion": this.caracteristicaDonacion};
        parametros["plantilla"]="CaracteristicaDonacion.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteCaracteristicaDonacionWord(form: any){
        var nombre:string = "CaracteristicaDonacion.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "caracteristicaDonacion": this.caracteristicaDonacion};
        parametros["plantilla"]="CaracteristicaDonacion.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteCaracteristicaDonacionPdf(form: any){
        var nombre:string = "CaracteristicaDonacion.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "caracteristicaDonacion": this.caracteristicaDonacion};
        parametros["plantilla"]="CaracteristicaDonacion.docx";
        parametros["salida"]="CaracteristicaDonacion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionCancelar = true;
    }
    buscarCaracteristicaDonacionFront(form: any) {
        this.accionesBuscar();
        var vcaracteristicaDonacion: CaracteristicaDonacion = new CaracteristicaDonacion();
        vcaracteristicaDonacion.from(this.caracteristicaDonacion);
        this.configuracionCaracteristicaDonacion = new ConfigurarCaracteristicaDonacion();
        this.configuracionCaracteristicaDonacion.permisosTabla = { "tabla": "caracteristicaDonacion", "permiso": 8 };
        this.configuracionCaracteristicaDonacion.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta = vcaracteristicaDonacion;
        this.permisosacciones();
        $("#buscarCaracteristicaDonacion_"+this.nombre).modal();
    }
    buscarCaracteristicaDonacionBack(caracteristicaDonacion: CaracteristicaDonacion) {
        this.caracteristicaDonacion_service.getCaracteristicaDonacionesByDto(caracteristicaDonacion, this.eventoSrvCaracteristicaDonacionBuscar, this);
    }
    eventoSrvCaracteristicaDonacionBuscar(lista, objeto) {
        objeto.lista_caracteristicaDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.caracteristicaDonacion = lista[0];
            objeto.caracteristicaDonacionLazy =false;
            objeto.caracteristicaDonacion_service.lazyCaracteristicaDonacion(objeto.caracteristicaDonacion, objeto.evn_lazy_caracteristicaDonacion, objeto);
        }
    }
    guardarCaracteristicaDonacionFront(form: any) {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarCaracteristicaDonacionBack(this.caracteristicaDonacion);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarCaracteristicaDonacionBack(caracteristicaDonacion: CaracteristicaDonacion) {
        if (caracteristicaDonacion.usuarioUltMov == null ) caracteristicaDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        if (caracteristicaDonacion.status == null || caracteristicaDonacion.status == "" ) caracteristicaDonacion.status = 1;
        this.caracteristicaDonacion_service.guardarCaracteristicaDonacion(caracteristicaDonacion, this.eventoSrvCaracteristicaDonacionGuardar, this);
    }
    eventoSrvCaracteristicaDonacionGuardar(caracteristicaDonacion, obj) {
        obj.caracteristicaDonacion = caracteristicaDonacion;
        bootbox.alert("Datos guardados con éxito");
        var aux: CaracteristicaDonacion = new CaracteristicaDonacion();
        aux.from(caracteristicaDonacion);
        obj.caracteristicaDonacionChange.emit(aux);
        obj.caracteristicaDonacionTablaChange.emit(aux);
        obj.caracteristicaDonacionLazy =false;
        obj.caracteristicaDonacion_service.lazyCaracteristicaDonacion(obj.caracteristicaDonacion, obj.evn_lazy_caracteristicaDonacion, obj);
        obj.accionesActualizar();

    }
    actualizarCaracteristicaDonacionFront(form: any) {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarCaracteristicaDonacionBack(this.caracteristicaDonacion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarCaracteristicaDonacionBack(caracteristicaDonacion: CaracteristicaDonacion) {
        caracteristicaDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.caracteristicaDonacion_service.actualizarCaracteristicaDonacion(caracteristicaDonacion, this.eventoSrvCaracteristicaDonacionActualizar, this);
    }
    eventoSrvCaracteristicaDonacionActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: CaracteristicaDonacion = new CaracteristicaDonacion();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.caracteristicaDonacionLazy = false;
            obj.caracteristicaDonacion_service.lazyCaracteristicaDonacion(obj.caracteristicaDonacion, obj.evn_lazy_caracteristicaDonacion, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.caracteristicaDonacion);
            obj.caracteristicaDonacionChange.emit(aux);
            obj.caracteristicaDonacionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarCaracteristicaDonacionFront(form: any) {
        this.accion = 4;
        this.eliminarCaracteristicaDonacionBack(this.caracteristicaDonacion);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarCaracteristicaDonacionBack(caracteristicaDonacion: CaracteristicaDonacion) {
        caracteristicaDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.caracteristicaDonacion_service.eliminarCaracteristicaDonacion(caracteristicaDonacion, this.eventoSrvCaracteristicaDonacionEliminar, this);
    }
    eventoSrvCaracteristicaDonacionEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.caracteristicaDonacion = new CaracteristicaDonacion();
            obj.caracteristicaDonacionChange.emit(obj.caracteristicaDonacion);
            obj.caracteristicaDonacionTablaChange.emit(obj.caracteristicaDonacion);
            obj.limpiarCampos() ;
        }
    }
    cancelarCaracteristicaDonacionFront(form: any) {
        this.accion = 6;
        this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = true;
        this.permisosacciones();
    }
    nuevoCaracteristicaDonacionFront(form: any) {
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
                this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionBuscar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
                this.caracteristicaDonacionGuardar = this.caracteristicaDonacionCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovCaracteristicaDonacionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCaracteristicaDonacionUsuario, this);
        this.lista_idoficioDonacionCaracteristicaDonacionOficioDonacion = [];
        this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionCaracteristicaDonacionOficioDonacion, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionGuardar = false;
        this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = this.caracteristicaDonacionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtCaracteristicaDonacionSeleccionado(caracteristicaDonacion) {
        this.caracteristicaDonacion = new CaracteristicaDonacion();
        this.caracteristicaDonacion.from(caracteristicaDonacion);
        this.caracteristicaDonacionLazy =false;
        this.caracteristicaDonacion_service.lazyCaracteristicaDonacion(this.caracteristicaDonacion, this.evn_lazy_caracteristicaDonacion, this);
        this.accion = 7;
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionGuardar = false;
        this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = this.caracteristicaDonacionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarCaracteristicaDonacion_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;        // ******************** maquina
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.caracteristicaDonacionBuscar) this.caracteristicaDonacionBuscar = this.globalesService.pbuscar(this,"caracteristicaDonacion");
        if (this.caracteristicaDonacionActualizar) this.caracteristicaDonacionActualizar = (this.globalesService.pacutalizar(this,"caracteristicaDonacion") && this.globalesService.pbuscar(this,"caracteristicaDonacion"));
        if (this.caracteristicaDonacionEliminar) this.caracteristicaDonacionEliminar = (this.globalesService.peliminar(this,"caracteristicaDonacion") && this.globalesService.pbuscar(this,"caracteristicaDonacion"));
        if (this.caracteristicaDonacionAgregar) this.caracteristicaDonacionAgregar = this.globalesService.pagregar(this,"caracteristicaDonacion");
    }
    permisosaccionesInicio() {
        this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false; // *************************** maquina
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.caracteristicaDonacion = new CaracteristicaDonacion();

        this.usuarioUltMovCaracteristicaDonacionUsuarioEleccion= new Usuario();
        this.idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion= new OficioDonacion();

        this.caracteristicaDonacionChange.emit(this.caracteristicaDonacion);
        this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false; // *************************** maquina
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
