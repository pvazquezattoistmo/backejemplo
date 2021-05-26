import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { SolicitudTejidoCornealAlmacen } from '../shared/solicitud-tejido-corneal-almacen';
import { SolicitudTejidoCornealAlmacenService } from '../shared/solicitud-tejido-corneal-almacen.service';
import { ConfigurarSolicitudTejidoCornealAlmacen } from '../shared/configurar-solicitud-tejido-corneal-almacen'
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
import { SolicitudTejidoCornealRecepcion } from '../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion';
import { SolicitudTejidoCornealRecepcionService } from '../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.service';
import { SolicitudTejidoCornealService } from '../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service';
import { SolicitudTejidoCorneal } from '../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal';
import { DoctorSolicitanteService } from '../../doctor-solicitantes/shared/doctor-solicitante.service';
import { DoctorSolicitante } from '../../doctor-solicitantes/shared/doctor-solicitante';
import { CatalogoCargoService } from '../../catalogo-cargos/shared/catalogo-cargo.service';
import { CatalogoCargo } from '../../catalogo-cargos/shared/catalogo-cargo';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-solicitud-tejido-corneal-almacen-crud',
    templateUrl: './solicitud-tejido-corneal-almacen-crud.component.html',
    styleUrls: ['./solicitud-tejido-corneal-almacen-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                SolicitudTejidoCornealAlmacenService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                SolicitudTejidoCornealRecepcionService,
                CatalogoCargoService,
                DoctorSolicitanteService,
                SolicitudTejidoCornealService
	]
})
export class SolicitudTejidoCornealAlmacenCrudComponent implements OnInit {
    public opcionSolicitudTejidoCornealAlmacen  =0;
    public validosSolicitudTejidoCornealAlmacen :any ={
        id:false,
        fechaBaja:false,
        tejidoExistente:false,
        fechaRegistro:false,
        estatusProceso:false,
        fechaActualizacion:false,
        status:false,
        usuarioUltMov:false,
        idsolicitudTejidoCornealRecepcion:false,

    };

    @Input() ocultarConjuntosSolicitudTejidoCornealAlmacen: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "solicitudTejidoCornealAlmacen", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public solicitudTejidoCornealAlmacenLazy: boolean =false;
    public solicitudTejidoCornealAlmacenPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
    @Output() solicitudTejidoCornealAlmacenChange = new EventEmitter<SolicitudTejidoCornealAlmacen>();
    @Output() solicitudTejidoCornealAlmacenTablaChange = new EventEmitter<SolicitudTejidoCornealAlmacen>();
    public lista_solicitudTejidoCornealAlmacenes: SolicitudTejidoCornealAlmacen[]=[];
    public configuracionSolicitudTejidoCornealAlmacen: ConfigurarSolicitudTejidoCornealAlmacen;
    public solicitudTejidoCornealAlmacenBuscar: boolean
    public solicitudTejidoCornealAlmacenSeleccion: boolean
    public solicitudTejidoCornealAlmacenAgregar: boolean
    public solicitudTejidoCornealAlmacenActualizar: boolean
    public solicitudTejidoCornealAlmacenEliminar: boolean;
    public solicitudTejidoCornealAlmacenGuardar: boolean;
    public solicitudTejidoCornealAlmacenCancelar: boolean;
    public usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario: Usuario[]=[];
    public usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEditar:boolean =false;
    public idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
    public lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion[]=[];
    public idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEditar:boolean =false;

    get solicitudTejidoCornealAlmacenOcultarConjuntos(){
        if (this.ocultarConjuntosSolicitudTejidoCornealAlmacen)
           return true
        return  !this.solicitudTejidoCornealAlmacenActualizar;
    }

    ngOnChanges(changes) {
        if (changes.solicitudTejidoCornealAlmacen && changes.solicitudTejidoCornealAlmacen.currentValue == null &&
            this.solicitudTejidoCornealAlmacen == null) this.solicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
        else {
            var aux :SolicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
            if (this.solicitudTejidoCornealAlmacen)
                aux.from(this.solicitudTejidoCornealAlmacen)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenGuardar = false;
                this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = this.solicitudTejidoCornealAlmacenCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
                    this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "solicitudTejidoCornealAlmacen",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "solicitudTejidoCornealRecepcion",
                                "solicitudTejidoCorneal",
                                "doctorSolicitante",
                                "catalogoCargo",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.solicitudTejidoCornealAlmacenPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public solicitudTejidoCornealAlmacen_service: SolicitudTejidoCornealAlmacenService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,
                public solicitudTejidoCornealRecepcion_service: SolicitudTejidoCornealRecepcionService,

                public solicitudTejidoCorneal_service: SolicitudTejidoCornealService,

                public doctorSolicitante_service: DoctorSolicitanteService,

                public catalogoCargo_service: CatalogoCargoService,

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
        this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
        this.configuracionSolicitudTejidoCornealAlmacen = new ConfigurarSolicitudTejidoCornealAlmacen();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealAlmacenUsuario, this);
        this.solicitudTejidoCornealRecepcion_service.getSolicitudTejidoCornealRecepcionesActivos(this.evtGetIdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.solicitudTejidoCornealAlmacenPermisos =true;
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoAtributo&& permisos.solicitudTejidoCornealAlmacen.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.solicitudTejidoCornealAlmacen.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoConjunto && permisos.solicitudTejidoCornealAlmacen.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.solicitudTejidoCornealAlmacen.PermisoConjunto ;
        }
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoTabla && permisos.solicitudTejidoCornealAlmacen.PermisoTabla.length>0){
            obj.permisosTabla = permisos.solicitudTejidoCornealAlmacen.PermisoTabla[0] ;
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
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo&& permisos.solicitudTejidoCornealRecepcion.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.solicitudTejidoCornealRecepcion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.solicitudTejidoCornealRecepcion.PermisoAtributo) ;
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo&& permisos.solicitudTejidoCornealRecepcion.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.solicitudTejidoCornealRecepcion.PermisoConjunto) ;
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoTabla && permisos.solicitudTejidoCornealRecepcion.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.solicitudTejidoCornealRecepcion.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.solicitudTejidoCornealRecepcion.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovSolicitudTejidoCornealAlmacenUsuario(lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario, obj) {
        obj.lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario = lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario;
        obj.actualizar_UsuarioUltMovSolicitudTejidoCornealAlmacenUsuario();
    }
    evtGetIdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion(lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion, obj) {
        obj.lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion = lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion;
        obj.actualizar_IdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion();
    }


    actualizar_UsuarioUltMovSolicitudTejidoCornealAlmacenUsuario() {
        if ( this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario)
                if (eleme.id == this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion.id){
                    this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion() {
        if ( this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion)
            for (let eleme of this.lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion)
                if (eleme.id == this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion.id){
                    this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosSolicitudTejidoCornealAlmacen['id'];
    }
    get validaIds() {
        return this.validosSolicitudTejidoCornealAlmacen['id'];
    }
    get validaFechaBaja() {
        return this.validosSolicitudTejidoCornealAlmacen['fechaBaja'];
    }
    get validaTejidoExistente() {
        return this.validosSolicitudTejidoCornealAlmacen['tejidoExistente'];
    }
    get validaFechaRegistro() {
        return this.validosSolicitudTejidoCornealAlmacen['fechaRegistro'];
    }
    get validaEstatusProceso() {
        return this.validosSolicitudTejidoCornealAlmacen['estatusProceso'];
    }
    get validaFechaActualizacion() {
        return this.validosSolicitudTejidoCornealAlmacen['fechaActualizacion'];
    }
    get validaStatus() {
        return this.validosSolicitudTejidoCornealAlmacen['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosSolicitudTejidoCornealAlmacen['usuarioUltMov'];
    }
    get validaIdsolicitudTejidoCornealRecepcion() {
        return this.validosSolicitudTejidoCornealAlmacen['idsolicitudTejidoCornealRecepcion'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaTejidoExistente && this.validaFechaRegistro && this.validaEstatusProceso && this.validaFechaActualizacion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdsolicitudTejidoCornealRecepcion;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerSolicitudTejidoCornealAlmacenes(lista, objeto) {
        objeto.lista_solicitudTejidoCornealAlmacenes = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCornealAlmacen.from(lista[0]);
            objeto.evtSolicitudTejidoCornealAlmacenSeleccionado(objeto.solicitudTejidoCornealAlmacen);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_solicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, objeto) {
        objeto.solicitudTejidoCornealAlmacen = solicitudTejidoCornealAlmacen;
        objeto.solicitudTejidoCornealAlmacenChange.emit(objeto.solicitudTejidoCornealAlmacen);
        objeto.configuarCombosObjetos();
        objeto.solicitudTejidoCornealAlmacenLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteSolicitudTejidoCornealAlmacenWord(){
        return ! (this.solicitudTejidoCornealAlmacenActualizar && this.solicitudTejidoCornealAlmacenLazy && this.globalesService.preporteWord(this,"solicitudTejidoCornealAlmacen"));
    }
    get datosReporteSolicitudTejidoCornealAlmacenExcel(){
        return ! (this.solicitudTejidoCornealAlmacenActualizar && this.solicitudTejidoCornealAlmacenLazy && this.globalesService.preporteExcel(this,"solicitudTejidoCornealAlmacen"));
    }
    get datosReporteSolicitudTejidoCornealAlmacenPdf(){
        return ! (this.solicitudTejidoCornealAlmacenActualizar && this.solicitudTejidoCornealAlmacenLazy && this.globalesService.preportePdf(this,"solicitudTejidoCornealAlmacen"));
    }
    reporteSolicitudTejidoCornealAlmacenExcel(){
        var nombre:string = "SolicitudTejidoCornealAlmacen.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "solicitudTejidoCornealAlmacen": this.solicitudTejidoCornealAlmacen};
        parametros["plantilla"]="SolicitudTejidoCornealAlmacen.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteSolicitudTejidoCornealAlmacenWord(){
        var nombre:string = "SolicitudTejidoCornealAlmacen.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "solicitudTejidoCornealAlmacen": this.solicitudTejidoCornealAlmacen};
        parametros["plantilla"]="SolicitudTejidoCornealAlmacen.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteSolicitudTejidoCornealAlmacenPdf(){
        var nombre:string = "SolicitudTejidoCornealAlmacen.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "solicitudTejidoCornealAlmacen": this.solicitudTejidoCornealAlmacen};
        parametros["plantilla"]="SolicitudTejidoCornealAlmacen.docx";
        parametros["salida"]="SolicitudTejidoCornealAlmacen.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenCancelar = true;
    }
    buscarSolicitudTejidoCornealAlmacenFront() {
        this.accionesBuscar();
        var vsolicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
        vsolicitudTejidoCornealAlmacen.from(this.solicitudTejidoCornealAlmacen);
        this.configuracionSolicitudTejidoCornealAlmacen = new ConfigurarSolicitudTejidoCornealAlmacen();
        this.configuracionSolicitudTejidoCornealAlmacen.permisosTabla = { "tabla": "solicitudTejidoCornealAlmacen", "permiso": 8 };
        this.configuracionSolicitudTejidoCornealAlmacen.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta = vsolicitudTejidoCornealAlmacen;
        this.permisosacciones();
        $("#buscarSolicitudTejidoCornealAlmacen_"+this.nombre).modal();
    }
    buscarSolicitudTejidoCornealAlmacenBack(solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen) {
        this.solicitudTejidoCornealAlmacen_service.getSolicitudTejidoCornealAlmacenesByDto(solicitudTejidoCornealAlmacen, this.eventoSrvSolicitudTejidoCornealAlmacenBuscar, this);
    }
    eventoSrvSolicitudTejidoCornealAlmacenBuscar(lista, objeto) {
        objeto.lista_solicitudTejidoCornealAlmacenes = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCornealAlmacen = lista[0];
            objeto.solicitudTejidoCornealAlmacenLazy =false;
            objeto.solicitudTejidoCornealAlmacen_service.lazySolicitudTejidoCornealAlmacen(objeto.solicitudTejidoCornealAlmacen, objeto.evn_lazy_solicitudTejidoCornealAlmacen, objeto);
        }
    }
    guardarSolicitudTejidoCornealAlmacenFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarSolicitudTejidoCornealAlmacenBack(this.solicitudTejidoCornealAlmacen);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarSolicitudTejidoCornealAlmacenBack(solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen) {
        if (solicitudTejidoCornealAlmacen.usuarioUltMov == null ) solicitudTejidoCornealAlmacen.usuarioUltMov = this.globalesService.dameUsuario();
        if (solicitudTejidoCornealAlmacen.status == null || solicitudTejidoCornealAlmacen.status == "" ) solicitudTejidoCornealAlmacen.status = 1;
        this.solicitudTejidoCornealAlmacen_service.guardarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.eventoSrvSolicitudTejidoCornealAlmacenGuardar, this);
    }
    eventoSrvSolicitudTejidoCornealAlmacenGuardar(solicitudTejidoCornealAlmacen, obj) {
        obj.solicitudTejidoCornealAlmacen = solicitudTejidoCornealAlmacen;
        bootbox.alert("Datos guardados con éxito");
        var aux: SolicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
        aux.from(solicitudTejidoCornealAlmacen);
        obj.solicitudTejidoCornealAlmacenChange.emit(aux);
        obj.solicitudTejidoCornealAlmacenTablaChange.emit(aux);
        obj.solicitudTejidoCornealAlmacenLazy =false;
        obj.solicitudTejidoCornealAlmacen_service.lazySolicitudTejidoCornealAlmacen(obj.solicitudTejidoCornealAlmacen, obj.evn_lazy_solicitudTejidoCornealAlmacen, obj);
        obj.accionesActualizar();

    }
    actualizarSolicitudTejidoCornealAlmacenFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarSolicitudTejidoCornealAlmacenBack(this.solicitudTejidoCornealAlmacen);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarSolicitudTejidoCornealAlmacenBack(solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen) {
        solicitudTejidoCornealAlmacen.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudTejidoCornealAlmacen_service.actualizarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.eventoSrvSolicitudTejidoCornealAlmacenActualizar, this);
    }
    eventoSrvSolicitudTejidoCornealAlmacenActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: SolicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.solicitudTejidoCornealAlmacenLazy = false;
            obj.solicitudTejidoCornealAlmacen_service.lazySolicitudTejidoCornealAlmacen(obj.solicitudTejidoCornealAlmacen, obj.evn_lazy_solicitudTejidoCornealAlmacen, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.solicitudTejidoCornealAlmacen);
            obj.solicitudTejidoCornealAlmacenChange.emit(aux);
            obj.solicitudTejidoCornealAlmacenTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarSolicitudTejidoCornealAlmacenFront() {
        this.accion = 4;
        this.eliminarSolicitudTejidoCornealAlmacenBack(this.solicitudTejidoCornealAlmacen);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarSolicitudTejidoCornealAlmacenBack(solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen) {
        solicitudTejidoCornealAlmacen.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudTejidoCornealAlmacen_service.eliminarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.eventoSrvSolicitudTejidoCornealAlmacenEliminar, this);
    }
    eventoSrvSolicitudTejidoCornealAlmacenEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.solicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
            obj.solicitudTejidoCornealAlmacenChange.emit(obj.solicitudTejidoCornealAlmacen);
            obj.solicitudTejidoCornealAlmacenTablaChange.emit(obj.solicitudTejidoCornealAlmacen);
            obj.limpiarCampos() ;
        }
    }
    cancelarSolicitudTejidoCornealAlmacenFront() {
        this.accion = 6;
        this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = true;
        this.permisosacciones();
    }
    nuevoSolicitudTejidoCornealAlmacenFront() {
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
                this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
                this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealAlmacenUsuario, this);
        this.lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion = [];
        this.solicitudTejidoCornealRecepcion_service.getSolicitudTejidoCornealRecepcionesActivos(this.evtGetIdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenGuardar = false;
        this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = this.solicitudTejidoCornealAlmacenCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtSolicitudTejidoCornealAlmacenSeleccionado(solicitudTejidoCornealAlmacen) {
        this.solicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
        this.solicitudTejidoCornealAlmacen.from(solicitudTejidoCornealAlmacen);
        this.solicitudTejidoCornealAlmacenLazy =false;
        this.solicitudTejidoCornealAlmacen_service.lazySolicitudTejidoCornealAlmacen(this.solicitudTejidoCornealAlmacen, this.evn_lazy_solicitudTejidoCornealAlmacen, this);
        this.accion = 7;
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenGuardar = false;
        this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = this.solicitudTejidoCornealAlmacenCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarSolicitudTejidoCornealAlmacen_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;        // ******************** maquina
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.solicitudTejidoCornealAlmacenBuscar) this.solicitudTejidoCornealAlmacenBuscar = this.globalesService.pbuscar(this,"solicitudTejidoCornealAlmacen");
        if (this.solicitudTejidoCornealAlmacenActualizar) this.solicitudTejidoCornealAlmacenActualizar = (this.globalesService.pacutalizar(this,"solicitudTejidoCornealAlmacen") && this.globalesService.pbuscar(this,"solicitudTejidoCornealAlmacen"));
        if (this.solicitudTejidoCornealAlmacenEliminar) this.solicitudTejidoCornealAlmacenEliminar = (this.globalesService.peliminar(this,"solicitudTejidoCornealAlmacen") && this.globalesService.pbuscar(this,"solicitudTejidoCornealAlmacen"));
        if (this.solicitudTejidoCornealAlmacenAgregar) this.solicitudTejidoCornealAlmacenAgregar = this.globalesService.pagregar(this,"solicitudTejidoCornealAlmacen");
    }
    permisosaccionesInicio() {
        this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.solicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();

        this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion= new Usuario();
        this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion= new SolicitudTejidoCornealRecepcion();

        this.solicitudTejidoCornealAlmacenChange.emit(this.solicitudTejidoCornealAlmacen);
        this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
