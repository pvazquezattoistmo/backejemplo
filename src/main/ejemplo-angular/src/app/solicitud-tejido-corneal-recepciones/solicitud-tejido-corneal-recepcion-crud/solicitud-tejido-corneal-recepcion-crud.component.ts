import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { SolicitudTejidoCornealRecepcion } from '../shared/solicitud-tejido-corneal-recepcion';
import { SolicitudTejidoCornealRecepcionService } from '../shared/solicitud-tejido-corneal-recepcion.service';
import { ConfigurarSolicitudTejidoCornealRecepcion } from '../shared/configurar-solicitud-tejido-corneal-recepcion'
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
import { SolicitudTejidoCorneal } from '../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal';
import { SolicitudTejidoCornealService } from '../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service';
import { DoctorSolicitanteService } from '../../doctor-solicitantes/shared/doctor-solicitante.service';
import { DoctorSolicitante } from '../../doctor-solicitantes/shared/doctor-solicitante';
import { CatalogoCargoService } from '../../catalogo-cargos/shared/catalogo-cargo.service';
import { CatalogoCargo } from '../../catalogo-cargos/shared/catalogo-cargo';


import { TipoCirugiaPrevista } from '../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista';
import { TipoCirugiaPrevistaService } from '../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-solicitud-tejido-corneal-recepcion-crud',
    templateUrl: './solicitud-tejido-corneal-recepcion-crud.component.html',
    styleUrls: ['./solicitud-tejido-corneal-recepcion-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                SolicitudTejidoCornealRecepcionService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                SolicitudTejidoCornealService,
                TipoCirugiaPrevistaService,
                CatalogoCargoService,
                DoctorSolicitanteService
	]
})
export class SolicitudTejidoCornealRecepcionCrudComponent implements OnInit {
    @Input() public opcionSolicitudTejidoCornealRecepcion  =0;
    @Input() public llamado  ="";
    @Output() public opcionSolicitudTejidoCornealRecepcionChange  = new EventEmitter<number>();
    public validosSolicitudTejidoCornealRecepcion :any ={
        id:false,
        estatusProceso:false,
        status:false,
        usuarioUltMov:false,
        idsolicitudTejidoCorneal:false,

    };

    @Input() ocultarConjuntosSolicitudTejidoCornealRecepcion: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "solicitudTejidoCornealRecepcion", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public solicitudTejidoCornealRecepcionLazy: boolean =false;
    public solicitudTejidoCornealRecepcionPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
    @Output() solicitudTejidoCornealRecepcionChange = new EventEmitter<SolicitudTejidoCornealRecepcion>();
    @Output() solicitudTejidoCornealRecepcionTablaChange = new EventEmitter<SolicitudTejidoCornealRecepcion>();
    public lista_solicitudTejidoCornealRecepciones: SolicitudTejidoCornealRecepcion[]=[];
    public configuracionSolicitudTejidoCornealRecepcion: ConfigurarSolicitudTejidoCornealRecepcion;
    public solicitudTejidoCornealRecepcionBuscar: boolean
    public solicitudTejidoCornealRecepcionSeleccion: boolean
    public solicitudTejidoCornealRecepcionAgregar: boolean
    public solicitudTejidoCornealRecepcionActualizar: boolean
    public solicitudTejidoCornealRecepcionEliminar: boolean;
    public solicitudTejidoCornealRecepcionGuardar: boolean;
    public solicitudTejidoCornealRecepcionCancelar: boolean;
    public usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario: Usuario[]=[];
    public usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEditar:boolean =false;
    public idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
    public lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal: SolicitudTejidoCorneal[]=[];
    public idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEditar:boolean =false;
    @Input() public tipoCirugiaPrevista: TipoCirugiaPrevista = new TipoCirugiaPrevista();
    @Output() tipoCirugiaPrevistaChange = new EventEmitter<TipoCirugiaPrevista>();
    public tipoCirugiaPrevistaLazy: boolean =false;

    get solicitudTejidoCornealRecepcionOcultarConjuntos(){
        if (this.ocultarConjuntosSolicitudTejidoCornealRecepcion)
           return true
        return  !this.solicitudTejidoCornealRecepcionActualizar;
    }

    ngOnChanges(changes) {
        if (changes.solicitudTejidoCornealRecepcion && changes.solicitudTejidoCornealRecepcion.currentValue == null &&
            this.solicitudTejidoCornealRecepcion == null) this.solicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
        else {
            var aux :SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
            if (this.solicitudTejidoCornealRecepcion)
                aux.from(this.solicitudTejidoCornealRecepcion);
                this.solicitudTejidoCornealRecepcionChange.emit(this.solicitudTejidoCornealRecepcion);
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionGuardar = false;
                this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = this.solicitudTejidoCornealRecepcionCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                this.buscarTipoCirugiaPrevistaBack(aux.idsolicitudTejidoCorneal.id);
                }else{
                    this.accion = 2;
                    this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
                    this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionCancelar = true;
            }
        }
    }

    buscarTipoCirugiaPrevistaBack(idsolicitudTejidoCorneal) {
        this.tipoCirugiaPrevista_service.getTipoCirugiaPrevistaByIdSolicitudTejidoCorneal(idsolicitudTejidoCorneal, this.eventoSrvTipoCirugiaPrevistaBuscar, this);
    }

    eventoSrvTipoCirugiaPrevistaBuscar(lista, objeto) {
        objeto.tipoCirugiaPrevista = lista;
        if (lista && lista.length > 0) {
            objeto.tipoCirugiaPrevista = lista[0];
            objeto.tipoCirugiaPrevistaLazy =false;
            objeto.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(objeto.tipoCirugiaPrevista, objeto.evn_lazy_tipoCirugiaPrevista, objeto);
        }
    }
    evn_lazy_tipoCirugiaPrevista(tipoCirugiaPrevista, objeto) {
        objeto.tipoCirugiaPrevista = tipoCirugiaPrevista;
        objeto.tipoCirugiaPrevistaChange.emit(objeto.tipoCirugiaPrevista);
        //objeto.configuarCombosObjetos();
        objeto.tipoCirugiaPrevistaLazy =true;
    }

    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "solicitudTejidoCornealRecepcion",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "solicitudTejidoCorneal",
                                "doctorSolicitante",
                                "catalogoCargo",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.solicitudTejidoCornealRecepcionPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public solicitudTejidoCornealRecepcion_service: SolicitudTejidoCornealRecepcionService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,
                public solicitudTejidoCorneal_service: SolicitudTejidoCornealService,

                public doctorSolicitante_service: DoctorSolicitanteService,

                public catalogoCargo_service: CatalogoCargoService,

                public tipoCirugiaPrevista_service: TipoCirugiaPrevistaService,

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
        this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
        this.configuracionSolicitudTejidoCornealRecepcion = new ConfigurarSolicitudTejidoCornealRecepcion();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealRecepcionUsuario, this);
        this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesActivos(this.evtGetIdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.solicitudTejidoCornealRecepcionPermisos =true;
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo&& permisos.solicitudTejidoCornealRecepcion.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.solicitudTejidoCornealRecepcion.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoConjunto && permisos.solicitudTejidoCornealRecepcion.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.solicitudTejidoCornealRecepcion.PermisoConjunto ;
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoTabla && permisos.solicitudTejidoCornealRecepcion.PermisoTabla.length>0){
            obj.permisosTabla = permisos.solicitudTejidoCornealRecepcion.PermisoTabla[0] ;
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo&& permisos.usuario.PermisoAtributo.length>0){
            //obj.configuracionUsuarioUltMov.permisosAtributos = permisos.usuario.PermisoAtributo ;
            //obj.permisosAtributos.push(permisos.usuario.PermisoAtributo) ;
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo&& permisos.usuario.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.usuario.PermisoConjunto) ;
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoTabla && permisos.usuario.PermisoTabla.length>0){
            //obj.configuracionUsuarioUltMov.permisosTabla = permisos.usuario.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
        }
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoAtributo&& permisos.solicitudTejidoCorneal.PermisoAtributo.length>0){
            //obj.configuracionIdsolicitudTejidoCorneal.permisosAtributos = permisos.solicitudTejidoCorneal.PermisoAtributo ;
            //obj.permisosAtributos.push(permisos.solicitudTejidoCorneal.PermisoAtributo) ;
        }
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoAtributo&& permisos.solicitudTejidoCorneal.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.solicitudTejidoCorneal.PermisoConjunto) ;
        }
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoTabla && permisos.solicitudTejidoCorneal.PermisoTabla.length>0){
            //obj.configuracionIdsolicitudTejidoCorneal.permisosTabla = permisos.solicitudTejidoCorneal.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.solicitudTejidoCorneal.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovSolicitudTejidoCornealRecepcionUsuario(lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario, obj) {
        obj.lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario = lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario;
        obj.actualizar_UsuarioUltMovSolicitudTejidoCornealRecepcionUsuario();
    }
    evtGetIdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal(lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal, obj) {
        obj.lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal = lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal;
        obj.actualizar_IdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal();
    }


    actualizar_UsuarioUltMovSolicitudTejidoCornealRecepcionUsuario() {
        if ( this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario)
                if (eleme.id == this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion.id){
                    this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal() {
        if ( this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion)
            for (let eleme of this.lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal)
                if (eleme.id == this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion.id){
                    this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosSolicitudTejidoCornealRecepcion['id'];
    }
    get validaIds() {
        return this.validosSolicitudTejidoCornealRecepcion['id'];
    }
    get validaEstatusProceso() {
        return this.validosSolicitudTejidoCornealRecepcion['estatusProceso'];
    }
    get validaStatus() {
        return this.validosSolicitudTejidoCornealRecepcion['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosSolicitudTejidoCornealRecepcion['usuarioUltMov'];
    }
    get validaIdsolicitudTejidoCorneal() {
        return this.validosSolicitudTejidoCornealRecepcion['idsolicitudTejidoCorneal'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaEstatusProceso && this.validaStatus && this.validaUsuarioUltMov && this.validaIdsolicitudTejidoCorneal;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerSolicitudTejidoCornealRecepciones(lista, objeto) {
        objeto.lista_solicitudTejidoCornealRecepciones = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCornealRecepcion.from(lista[0]);
            objeto.evtSolicitudTejidoCornealRecepcionSeleccionado(objeto.solicitudTejidoCornealRecepcion);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_solicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, objeto) {
        objeto.solicitudTejidoCornealRecepcion = solicitudTejidoCornealRecepcion;
        objeto.solicitudTejidoCornealRecepcionChange.emit(objeto.solicitudTejidoCornealRecepcion);
        objeto.configuarCombosObjetos();
        objeto.solicitudTejidoCornealRecepcionLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteSolicitudTejidoCornealRecepcionWord(){
        return ! (this.solicitudTejidoCornealRecepcionActualizar && this.solicitudTejidoCornealRecepcionLazy && this.globalesService.preporteWord(this,"solicitudTejidoCornealRecepcion"));
    }
    get datosReporteSolicitudTejidoCornealRecepcionExcel(){
        return ! (this.solicitudTejidoCornealRecepcionActualizar && this.solicitudTejidoCornealRecepcionLazy && this.globalesService.preporteExcel(this,"solicitudTejidoCornealRecepcion"));
    }
    get datosReporteSolicitudTejidoCornealRecepcionPdf(){
        return ! (this.solicitudTejidoCornealRecepcionActualizar && this.solicitudTejidoCornealRecepcionLazy && this.globalesService.preportePdf(this,"solicitudTejidoCornealRecepcion"));
    }
    reporteSolicitudTejidoCornealRecepcionExcel(){
        var nombre:string = "SolicitudTejidoCornealRecepcion.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "solicitudTejidoCornealRecepcion": this.solicitudTejidoCornealRecepcion};
        parametros["plantilla"]="SolicitudTejidoCornealRecepcion.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteSolicitudTejidoCornealRecepcionWord(){
        var nombre:string = "SolicitudTejidoCornealRecepcion.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "solicitudTejidoCornealRecepcion": this.solicitudTejidoCornealRecepcion};
        parametros["plantilla"]="SolicitudTejidoCornealRecepcion.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteSolicitudTejidoCornealRecepcionPdf(){
        var nombre:string = "SolicitudTejidoCornealRecepcion.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "solicitudTejidoCornealRecepcion": this.solicitudTejidoCornealRecepcion};
        parametros["plantilla"]="SolicitudTejidoCornealRecepcion.docx";
        parametros["salida"]="SolicitudTejidoCornealRecepcion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionCancelar = true;
    }
    buscarSolicitudTejidoCornealRecepcionFront() {
        this.accionesBuscar();
        var vsolicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
        vsolicitudTejidoCornealRecepcion.from(this.solicitudTejidoCornealRecepcion);
        this.configuracionSolicitudTejidoCornealRecepcion = new ConfigurarSolicitudTejidoCornealRecepcion();
        this.configuracionSolicitudTejidoCornealRecepcion.permisosTabla = { "tabla": "solicitudTejidoCornealRecepcion", "permiso": 8 };
        this.configuracionSolicitudTejidoCornealRecepcion.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta = vsolicitudTejidoCornealRecepcion;
        this.permisosacciones();
        $("#buscarSolicitudTejidoCornealRecepcion_"+this.nombre).modal();
    }
    buscarSolicitudTejidoCornealRecepcionBack(solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion) {
        this.solicitudTejidoCornealRecepcion_service.getSolicitudTejidoCornealRecepcionesByDto(solicitudTejidoCornealRecepcion, this.eventoSrvSolicitudTejidoCornealRecepcionBuscar, this);
    }
    eventoSrvSolicitudTejidoCornealRecepcionBuscar(lista, objeto) {
        objeto.lista_solicitudTejidoCornealRecepciones = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCornealRecepcion = lista[0];
            objeto.solicitudTejidoCornealRecepcionLazy =false;
            objeto.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(objeto.solicitudTejidoCornealRecepcion, objeto.evn_lazy_solicitudTejidoCornealRecepcion, objeto);
        }
    }
    guardarSolicitudTejidoCornealRecepcionFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarSolicitudTejidoCornealRecepcionBack(this.solicitudTejidoCornealRecepcion);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarSolicitudTejidoCornealRecepcionBack(solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion) {
        if (solicitudTejidoCornealRecepcion.usuarioUltMov == null ) solicitudTejidoCornealRecepcion.usuarioUltMov = this.globalesService.dameUsuario();
        if (solicitudTejidoCornealRecepcion.status == null || solicitudTejidoCornealRecepcion.status == "" ) solicitudTejidoCornealRecepcion.status = 1;
        this.solicitudTejidoCornealRecepcion_service.guardarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.eventoSrvSolicitudTejidoCornealRecepcionGuardar, this);
    }
    eventoSrvSolicitudTejidoCornealRecepcionGuardar(solicitudTejidoCornealRecepcion, obj) {
        obj.solicitudTejidoCornealRecepcion = solicitudTejidoCornealRecepcion;
        bootbox.alert("Datos guardados con éxito");
        var aux: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
        aux.from(solicitudTejidoCornealRecepcion);
        obj.solicitudTejidoCornealRecepcionChange.emit(aux);
        obj.solicitudTejidoCornealRecepcionTablaChange.emit(aux);
        obj.solicitudTejidoCornealRecepcionLazy =false;
        obj.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(obj.solicitudTejidoCornealRecepcion, obj.evn_lazy_solicitudTejidoCornealRecepcion, obj);
        obj.accionesActualizar();

    }
    actualizarSolicitudTejidoCornealRecepcionFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarSolicitudTejidoCornealRecepcionBack(this.solicitudTejidoCornealRecepcion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarSolicitudTejidoCornealRecepcionBack(solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion) {
        solicitudTejidoCornealRecepcion.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudTejidoCornealRecepcion_service.actualizarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.eventoSrvSolicitudTejidoCornealRecepcionActualizar, this);
    }
    eventoSrvSolicitudTejidoCornealRecepcionActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.solicitudTejidoCornealRecepcionLazy = false;
            obj.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(obj.solicitudTejidoCornealRecepcion, obj.evn_lazy_solicitudTejidoCornealRecepcion, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.solicitudTejidoCornealRecepcion);
            obj.solicitudTejidoCornealRecepcionChange.emit(aux);
            obj.solicitudTejidoCornealRecepcionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarSolicitudTejidoCornealRecepcionFront() {
        this.accion = 4;
        this.eliminarSolicitudTejidoCornealRecepcionBack(this.solicitudTejidoCornealRecepcion);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarSolicitudTejidoCornealRecepcionBack(solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion) {
        solicitudTejidoCornealRecepcion.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudTejidoCornealRecepcion_service.eliminarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.eventoSrvSolicitudTejidoCornealRecepcionEliminar, this);
    }
    eventoSrvSolicitudTejidoCornealRecepcionEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.solicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
            obj.solicitudTejidoCornealRecepcionChange.emit(obj.solicitudTejidoCornealRecepcion);
            obj.solicitudTejidoCornealRecepcionTablaChange.emit(obj.solicitudTejidoCornealRecepcion);
            obj.limpiarCampos() ;
        }
    }
    cancelarSolicitudTejidoCornealRecepcionFront() {
        this.accion = 6;
        this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = true;
        this.permisosacciones();
    }
    nuevoSolicitudTejidoCornealRecepcionFront() {
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
                this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
                this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealRecepcionUsuario, this);
        this.lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal = [];
        this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesActivos(this.evtGetIdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionGuardar = false;
        this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = this.solicitudTejidoCornealRecepcionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtSolicitudTejidoCornealRecepcionSeleccionado(solicitudTejidoCornealRecepcion) {
        this.solicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
        this.solicitudTejidoCornealRecepcion.from(solicitudTejidoCornealRecepcion);
        this.solicitudTejidoCornealRecepcionLazy =false;
        this.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(this.solicitudTejidoCornealRecepcion, this.evn_lazy_solicitudTejidoCornealRecepcion, this);
        this.accion = 7;
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionGuardar = false;
        this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = this.solicitudTejidoCornealRecepcionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarSolicitudTejidoCornealRecepcion_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;        // ******************** maquina
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.solicitudTejidoCornealRecepcionBuscar) this.solicitudTejidoCornealRecepcionBuscar = this.globalesService.pbuscar(this,"solicitudTejidoCornealRecepcion");
        if (this.solicitudTejidoCornealRecepcionActualizar) this.solicitudTejidoCornealRecepcionActualizar = (this.globalesService.pacutalizar(this,"solicitudTejidoCornealRecepcion") && this.globalesService.pbuscar(this,"solicitudTejidoCornealRecepcion"));
        if (this.solicitudTejidoCornealRecepcionEliminar) this.solicitudTejidoCornealRecepcionEliminar = (this.globalesService.peliminar(this,"solicitudTejidoCornealRecepcion") && this.globalesService.pbuscar(this,"solicitudTejidoCornealRecepcion"));
        if (this.solicitudTejidoCornealRecepcionAgregar) this.solicitudTejidoCornealRecepcionAgregar = this.globalesService.pagregar(this,"solicitudTejidoCornealRecepcion");
    }
    permisosaccionesInicio() {
        this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.solicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();

        this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion= new Usuario();
        this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion= new SolicitudTejidoCorneal();

        this.solicitudTejidoCornealRecepcionChange.emit(this.solicitudTejidoCornealRecepcion);
        this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    nose(){
        let s = this.solicitudTejidoCornealRecepcion;
    }
}
