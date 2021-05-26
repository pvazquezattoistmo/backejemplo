import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { CoreService } from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service';
import { SolicitudTejidoCorneal } from '../shared/solicitud-tejido-corneal';
import { SolicitudTejidoCornealService } from '../shared/solicitud-tejido-corneal.service';
import { ConfigurarSolicitudTejidoCorneal } from '../shared/configurar-solicitud-tejido-corneal';
import { Usuario } from '../../usuarios/shared/usuario';
import { UsuarioService } from '../../usuarios/shared/usuario.service';
import { UsuarioBtcService } from '../../usuario-btcs/shared/usuario-btc.service';
import { UsuarioBtc } from '../../usuario-btcs/shared/usuario-btc';
import { PerfilRedIsssteService } from '../../perfil-red-issstes/shared/perfil-red-issste.service';
import { PerfilRedIssste } from '../../perfil-red-issstes/shared/perfil-red-issste';
import { HospitalService } from '../../hospitales/shared/hospital.service';
import { Hospital } from '../../hospitales/shared/hospital';
import { EntidadFederativaService } from '../../entidad-federativas/shared/entidad-federativa.service';
import { EntidadFederativa } from '../../entidad-federativas/shared/entidad-federativa';
import { PerfilService } from '../../perfiles/shared/perfil.service';
import { Perfil } from '../../perfiles/shared/perfil';
import { DoctorSolicitante } from '../../doctor-solicitantes/shared/doctor-solicitante';
import { DoctorSolicitanteService } from '../../doctor-solicitantes/shared/doctor-solicitante.service';
import { CatalogoCargoService } from '../../catalogo-cargos/shared/catalogo-cargo.service';
import { CatalogoCargo } from '../../catalogo-cargos/shared/catalogo-cargo';
import { TipoCirugiaPrevista } from '../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista';
import { TipoCirugiaPrevistaService } from '../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service';

import { SolicitudTejidoCornealRecepcion } from '../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion';
import { SolicitudTejidoCornealRecepcionService } from '../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.service';

declare var $: any;
declare var bootbox: any;
@Component({
  selector: 'app-solicitud-tejido-corneal-crud',
  templateUrl: './solicitud-tejido-corneal-crud.component.html',
  styleUrls: ['./solicitud-tejido-corneal-crud.component.css'],
  providers: [
    GlobalesService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    FileService,
    SolicitudTejidoCornealService,
    UsuarioService,
    EntidadFederativaService,
    PerfilRedIsssteService,
    HospitalService,
    UsuarioBtcService,
    PerfilService,
    DoctorSolicitanteService,
    CatalogoCargoService,
    TipoCirugiaPrevistaService,
    SolicitudTejidoCornealRecepcionService
  ]
})
export class SolicitudTejidoCornealCrudComponent implements OnInit {
  public opcionSolicitudTejidoCorneal = 0;
  public mensajerror: string = '';
  public validosSolicitudTejidoCorneal: any = {
    id: false,
    fechaBaja: false,
    fechaRegistro: false,
    estatusProceso: false,
    segundoApellidoReceptor: false,
    fechaTentativaCirugia: false,
    nombreReceptor: false,
    numeroExpedienteReceptor: false,
    sexoReceptor: false,
    folioSolicitudTejidoCorneal: false,
    diagnostico: true,
    fechaActualizacion: false,
    edadReceptor: false,
    caracteristicaCornea: true,
    corneaSolicitada: false,
    primerApellidoReceptor: false,
    status: false,
    usuarioUltMov: false,
    iddoctorResponsableSolicitud: false,
    idhospital: false
  };

  public validosTipoCirugiaPrevista: any = {
    id: false,
    dmek: false,
    otra: false,
    fechaBaja: false,
    dalk: false,
    fechaRegistro: false,
    fechaActualizacion: false,
    dsaek: false,
    qp: false,
    status: false,
    usuarioUltMov: false,
    idsolicitudTejidoCorneal: false
  };
  @Input()
  public idEntrada = null;

  @Input() ocultarConjuntosSolicitudTejidoCorneal: boolean = false;
  @Input() nombre: string = '';
  public permisosTabla = { tabla: 'solicitudTejidoCorneal', permiso: 0, etiqueta: '' };
  public permisosAtributos = [];
  public permisosConjuntos = [];
  //  public perfil: Perfil;
  public accion = 0;
  usuariologueado;
  public solicitudTejidoCornealLazy: boolean = false;
  public solicitudTejidoCornealPermisos: boolean = false;

  public tipoCirugiaPrevistaLazy: boolean = false;
  public tipoCirugiaPrevistaPermisos: boolean = false;
  @Input() public validaciones: boolean = false;
  @Output() validacionesChange = new EventEmitter<boolean>();
  public perfil: Perfil;
  @Input() public solicitudTejidoCorneal: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
  @Output() solicitudTejidoCornealChange = new EventEmitter<SolicitudTejidoCorneal>();
  @Output() solicitudTejidoCornealTablaChange = new EventEmitter<SolicitudTejidoCorneal>();
  public lista_solicitudTejidoCorneales: SolicitudTejidoCorneal[] = [];
  public configuracionSolicitudTejidoCorneal: ConfigurarSolicitudTejidoCorneal;
  public solicitudTejidoCornealBuscar: boolean;
  public solicitudTejidoCornealSeleccion: boolean;
  public solicitudTejidoCornealAgregar: boolean;
  public solicitudTejidoCornealActualizar: boolean;
  public solicitudTejidoCornealEliminar: boolean;
  public solicitudTejidoCornealGuardar: boolean;
  public solicitudTejidoCornealCancelar: boolean;
  public usuarioUltMovSolicitudTejidoCornealUsuarioEleccion: Usuario = new Usuario();
  public lista_usuarioUltMovSolicitudTejidoCornealUsuario: Usuario[] = [];
  public usuarioUltMovSolicitudTejidoCornealUsuarioEditar: boolean = false;
  public iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEleccion: DoctorSolicitante = new DoctorSolicitante();
  public lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante: DoctorSolicitante[] = [];
  public iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEditar: boolean = false;
  public idhospitalSolicitudTejidoCornealHospitalEleccion: Hospital = new Hospital();
  public lista_idhospitalSolicitudTejidoCornealHospital: Hospital[] = [];
  public idhospitalSolicitudTejidoCornealHospitalEditar: boolean = false;
  public solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
  @Input() public tipoCirugiaPrevista: TipoCirugiaPrevista = new TipoCirugiaPrevista();
  @Output() tipoCirugiaPrevistaChange = new EventEmitter<TipoCirugiaPrevista>();
  @Output() tipoCirugiaPrevistaTablaChange = new EventEmitter<TipoCirugiaPrevista>();
  @Input() otracheck : number = 0;
  @Input() public isDisabled: boolean = true;

  get solicitudTejidoCornealOcultarConjuntos() {
    if (this.ocultarConjuntosSolicitudTejidoCorneal) return true;
    return !this.solicitudTejidoCornealActualizar;
  }

  ngOnChanges(changes) {
    if (changes.idEntrada && changes.idEntrada.currentValue != null) {
      this.buscaIdParametro(changes.idEntrada.currentValue );
    }
    if (
      changes.solicitudTejidoCorneal &&
      changes.solicitudTejidoCorneal.currentValue == null &&
      this.solicitudTejidoCorneal == null
    )
      this.solicitudTejidoCorneal = new SolicitudTejidoCorneal();
    else {
      var aux: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
      if (this.solicitudTejidoCorneal) aux.from(this.solicitudTejidoCorneal);
      if (aux.isOk && aux.isOk()) {
        this.accion = 7;
        this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealGuardar = false;
        this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = this.solicitudTejidoCornealCancelar = true;
        this.permisosacciones();
        var thiss: any;
        thiss = this;
        if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
      } else {
        this.accion = 2;
        this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
        this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealCancelar = true;
      }
    }
    if (
      this.solicitudTejidoCornealRecepcion &&
      this.solicitudTejidoCornealRecepcion.estatusProceso &&
      this.solicitudTejidoCornealRecepcion.estatusProceso == 1
    ) {
      this.desactivaTodos();
    }
  }
  obtenerPermisos() {
    var id_expe = -1;
    var tablas = [
      'solicitudTejidoCorneal',
      'usuario',
      'usuarioBtc',
      'perfilRedIssste',
      'hospital',
      'entidadFederativa',
      'perfil',
      'doctorSolicitante',
      'catalogoCargo'
    ];
    var parametros: any = {
      id_usu: this.usuariologueado.id,
      tablas: tablas,
      id_exp: id_expe
    };
    this.solicitudTejidoCornealPermisos = false;
    this.coreService.permisos(parametros, this.evtCorePermisos, this);
  }

  constructor(
    public globalesService: GlobalesService,
    public route: ActivatedRoute,
    public zone: NgZone,
    public fileservice: FileService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coreService: CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public solicitudTejidoCorneal_service: SolicitudTejidoCornealService,
    public usuario_service: UsuarioService,
    public usuarioBtc_service: UsuarioBtcService,
    public perfilRedIssste_service: PerfilRedIsssteService,
    public hospital_service: HospitalService,
    public entidadFederativa_service: EntidadFederativaService,
    public perfil_service: PerfilService,
    public doctorSolicitante_service: DoctorSolicitanteService,
    public catalogoCargo_service: CatalogoCargoService,
    public tipoCirugiaPrevista_services: TipoCirugiaPrevistaService,
    public solicitudTejidoCornealRecepcion_service: SolicitudTejidoCornealRecepcionService,
    public router: Router
  ) {
    this.usuariologueado = globalesService.dameUsuario();
    var discon = '';
    if (this.usuariologueado) {
      if (this.usuariologueado.perfil) {
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        this.obtenerPermisos();
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
      }
    }
    this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
    this.configuracionSolicitudTejidoCorneal = new ConfigurarSolicitudTejidoCorneal();
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovSolicitudTejidoCornealUsuario,
      this
    );
    this.doctorSolicitante_service.getDoctorSolicitantesActivos(
      this.evtGetIddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante,
      this
    );
    this.hospital_service.getHospitalesActivos(
      this.evtGetIdhospitalSolicitudTejidoCornealHospital,
      this
    );

    this.limpiarCampos();
  }

  //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
  evtCorePermisos(permisos, obj) {
    obj.solicitudTejidoCornealPermisos = true;
    if (
      permisos &&
      permisos.solicitudTejidoCorneal &&
      permisos.solicitudTejidoCorneal.PermisoAtributo &&
      permisos.solicitudTejidoCorneal.PermisoAtributo.length > 0
    ) {
      obj.permisosAtributos = permisos.solicitudTejidoCorneal.PermisoAtributo;
    } else {
      obj.usuariologueado = undefined;
    }
    if (
      permisos &&
      permisos.solicitudTejidoCorneal &&
      permisos.solicitudTejidoCorneal.PermisoConjunto &&
      permisos.solicitudTejidoCorneal.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos = permisos.solicitudTejidoCorneal.PermisoConjunto;
    }
    if (
      permisos &&
      permisos.solicitudTejidoCorneal &&
      permisos.solicitudTejidoCorneal.PermisoTabla &&
      permisos.solicitudTejidoCorneal.PermisoTabla.length > 0
    ) {
      obj.permisosTabla = permisos.solicitudTejidoCorneal.PermisoTabla[0];
      obj.permisosaccionesInicio();
    }
    if (
      permisos &&
      permisos.usuario &&
      permisos.usuario.PermisoAtributo &&
      permisos.usuario.PermisoAtributo.length > 0
    ) {
      //obj.configuracionUsuarioUltMov.permisosAtributos = permisos.usuario.PermisoAtributo ;
      //obj.permisosAtributos.push(permisos.usuario.PermisoAtributo) ;
    }
    if (
      permisos &&
      permisos.usuario &&
      permisos.usuario.PermisoAtributo &&
      permisos.usuario.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos.push(permisos.usuario.PermisoConjunto);
    }
    if (
      permisos &&
      permisos.usuario &&
      permisos.usuario.PermisoTabla &&
      permisos.usuario.PermisoTabla.length > 0
    ) {
      //obj.configuracionUsuarioUltMov.permisosTabla = permisos.usuario.PermisoTabla[0] ;
      //obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
    }
    if (
      permisos &&
      permisos.doctorSolicitante &&
      permisos.doctorSolicitante.PermisoAtributo &&
      permisos.doctorSolicitante.PermisoAtributo.length > 0
    ) {
      //obj.configuracionIddoctorResponsableSolicitud.permisosAtributos = permisos.doctorSolicitante.PermisoAtributo ;
      //obj.permisosAtributos.push(permisos.doctorSolicitante.PermisoAtributo) ;
    }
    if (
      permisos &&
      permisos.doctorSolicitante &&
      permisos.doctorSolicitante.PermisoAtributo &&
      permisos.doctorSolicitante.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos.push(permisos.doctorSolicitante.PermisoConjunto);
    }
    if (
      permisos &&
      permisos.doctorSolicitante &&
      permisos.doctorSolicitante.PermisoTabla &&
      permisos.doctorSolicitante.PermisoTabla.length > 0
    ) {
      //obj.configuracionIddoctorResponsableSolicitud.permisosTabla = permisos.doctorSolicitante.PermisoTabla[0] ;
      //obj.permisosTabla.push(permisos.doctorSolicitante.PermisoTabla[0] );
    }
    if (
      permisos &&
      permisos.hospital &&
      permisos.hospital.PermisoAtributo &&
      permisos.hospital.PermisoAtributo.length > 0
    ) {
      //obj.configuracionIdhospital.permisosAtributos = permisos.hospital.PermisoAtributo ;
      //obj.permisosAtributos.push(permisos.hospital.PermisoAtributo) ;
    }
    if (
      permisos &&
      permisos.hospital &&
      permisos.hospital.PermisoAtributo &&
      permisos.hospital.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos.push(permisos.hospital.PermisoConjunto);
    }
    if (
      permisos &&
      permisos.hospital &&
      permisos.hospital.PermisoTabla &&
      permisos.hospital.PermisoTabla.length > 0
    ) {
      //obj.configuracionIdhospital.permisosTabla = permisos.hospital.PermisoTabla[0] ;
      //obj.permisosTabla.push(permisos.hospital.PermisoTabla[0] );
    }

    if (obj.configurarTablasConjuntos) obj.configurarTablasConjuntos();
  }
  //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

  evtGetUsuarioUltMovSolicitudTejidoCornealUsuario(
    lista_usuarioUltMovSolicitudTejidoCornealUsuario,
    obj
  ) {
    obj.lista_usuarioUltMovSolicitudTejidoCornealUsuario = lista_usuarioUltMovSolicitudTejidoCornealUsuario;
    obj.actualizar_UsuarioUltMovSolicitudTejidoCornealUsuario();
  }
  evtGetIddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante(
    lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante,
    obj
  ) {
    obj.lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante = lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante;
    obj.actualizar_IddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante();
  }
  evtGetIdhospitalSolicitudTejidoCornealHospital(
    lista_idhospitalSolicitudTejidoCornealHospital,
    obj
  ) {
    obj.lista_idhospitalSolicitudTejidoCornealHospital = lista_idhospitalSolicitudTejidoCornealHospital;
    obj.actualizar_IdhospitalSolicitudTejidoCornealHospital();
  }

  actualizar_UsuarioUltMovSolicitudTejidoCornealUsuario() {
    if (this.usuarioUltMovSolicitudTejidoCornealUsuarioEleccion)
      for (let eleme of this.lista_usuarioUltMovSolicitudTejidoCornealUsuario)
        if (eleme.id == this.usuarioUltMovSolicitudTejidoCornealUsuarioEleccion.id) {
          this.usuarioUltMovSolicitudTejidoCornealUsuarioEleccion = eleme;
          break;
        }
  }
  actualizar_IddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante() {
    if (this.solicitudTejidoCorneal.iddoctorResponsableSolicitud)
      for (let eleme of this
        .lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante)
        if (eleme.id == this.solicitudTejidoCorneal.iddoctorResponsableSolicitud.id) {
          this.solicitudTejidoCorneal.iddoctorResponsableSolicitud = eleme;
          break;
        }
  }
  actualizar_IdhospitalSolicitudTejidoCornealHospital() {
    if (this.solicitudTejidoCorneal.idhospital)
      for (let eleme of this.lista_idhospitalSolicitudTejidoCornealHospital)
        if (eleme.id == this.solicitudTejidoCorneal.idhospital.id) {
          this.solicitudTejidoCorneal.idhospital = eleme;
          break;
        }
  }

  ngDoCheck() {}

  validaAcciones(vall) {
    return (
      this.accion == 0 ||
      this.accion == 1 ||
      this.accion == 4 ||
      this.accion == 6 ||
      (this.accion == 7 && vall) ||
      (this.accion == 2 && vall) ||
      (this.accion == 3 && vall) ||
      (this.accion == 5 && vall)
    );
  }

  get validaId() {
    return this.validosSolicitudTejidoCorneal['id'];
  }
  get validaIds() {
    return this.validosSolicitudTejidoCorneal['id'];
  }
  get validaFechaBaja() {
    return this.validosSolicitudTejidoCorneal['fechaBaja'];
  }
  get validaFechaRegistro() {
    return this.validosSolicitudTejidoCorneal['fechaRegistro'];
  }
  get validaEstatusProceso() {
    return this.validosSolicitudTejidoCorneal['estatusProceso'];
  }
  get validaSegundoApellidoReceptor() {
    return this.validosSolicitudTejidoCorneal['segundoApellidoReceptor'];
  }
  get validaFechaTentativaCirugia() {
    if (this.solicitudTejidoCorneal.fechaTentativaCirugia == null){
      return false;
    } else {
      return true;
    }
    //return this.validosSolicitudTejidoCorneal['fechaTentativaCirugia'];
  }
  get validaNombreReceptor() {
    return this.validosSolicitudTejidoCorneal['nombreReceptor'];
  }
  get validaNumeroExpedienteReceptor() {
    return this.validosSolicitudTejidoCorneal['numeroExpedienteReceptor'];
  }
  get validaSexoReceptor() {
    if(this.solicitudTejidoCorneal.sexoReceptor == null){
      return false;
    } else {
      return true;
    }
    //return this.validosSolicitudTejidoCorneal['sexoReceptor'];
  }
  get validaFolioSolicitudTejidoCorneal() {
    return this.validosSolicitudTejidoCorneal['folioSolicitudTejidoCorneal'];
  }
  get validaDiagnostico() {
    return this.validosSolicitudTejidoCorneal['diagnostico'];
  }
  get validaFechaActualizacion() {
    return this.validosSolicitudTejidoCorneal['fechaActualizacion'];
  }
  get validaEdadReceptor() {
    return this.validosSolicitudTejidoCorneal['edadReceptor'];
  }
  get validaCaracteristicaCornea() {
    return this.validosSolicitudTejidoCorneal['caracteristicaCornea'];
  }
  get validaCorneaSolicitada() {
    //("this.solicitudTejidoCorneal.corneaSolicitada "+ this.solicitudTejidoCorneal.corneaSolicitada);
    if(this.solicitudTejidoCorneal.corneaSolicitada == 1 || this.solicitudTejidoCorneal.corneaSolicitada == 2){
      //("cornea true");
      return true;
    } else {
      //("cornea false");
      return false;
    }
    // return this.validosSolicitudTejidoCorneal['corneaSolicitada'];
  }
  get validaPrimerApellidoReceptor() {
    return this.validosSolicitudTejidoCorneal['primerApellidoReceptor'];
  }
  get validaStatus() {
    return this.validosSolicitudTejidoCorneal['status'];
  }
  get validaUsuarioUltMov() {
    return this.validosSolicitudTejidoCorneal['usuarioUltMov'];
  }
  get validaIddoctorResponsableSolicitud() {
    if (this.solicitudTejidoCorneal.iddoctorResponsableSolicitud == null) {
      return false;
    } else {
      return true;
    }

    //return this.validosSolicitudTejidoCorneal['iddoctorResponsableSolicitud'];
  }
  get validaIdhospital() {
    if (this.solicitudTejidoCorneal.idhospital == null) {
      return false;
    } else {
      return true;
    }
    //return this.validosSolicitudTejidoCorneal['idhospital'];
  }

  get validaTodosc() {
    this.mensajerror = '';
    var salida =
      // this.validaId &&
      // this.validaFechaBaja &&
      // this.validaFechaRegistro &&
      // this.validaEstatusProceso &&
      this.validaSegundoApellidoReceptor &&
      this.validaFechaTentativaCirugia &&
      this.validaNombreReceptor &&
      this.validaNumeroExpedienteReceptor &&
      this.validaSexoReceptor &&
      // this.validaFolioSolicitudTejidoCorneal &&
      this.validaDiagnostico &&
      // this.validaFechaActualizacion &&
      this.solicitudTejidoCorneal.edadReceptor !== null &&
      this.validaCaracteristicaCornea &&
      this.validaCorneaSolicitada &&
      this.validaPrimerApellidoReceptor &&
      // this.validaStatus &&
      // this.validaUsuarioUltMov &&
      this.validaIddoctorResponsableSolicitud &&
      this.validaIdhospital;
    if (salida != this.validaciones) this.validacionesChange.emit(salida);
    return salida;
  }

  get validaGuardado() {
    this.mensajerror = '';
    var salida =
      // this.validaId &&
      // this.validaFechaBaja &&
      // this.validaFechaRegistro &&
      // this.validaEstatusProceso &&
      //this.validaSegundoApellidoReceptor &&
      //this.validaFechaTentativaCirugia &&
      // this.validaNombreReceptor &&
      // this.validaNumeroExpedienteReceptor &&
      // this.validaSexoReceptor &&
      // this.validaFolioSolicitudTejidoCorneal &&
      //this.validaDiagnostico &&
      // this.validaFechaActualizacion &&
      // this.validaEdadReceptor &&
      // this.validaCaracteristicaCornea &&
      // this.validaCorneaSolicitada &&
      // this.validaPrimerApellidoReceptor &&
      // this.validaStatus &&
      // this.validaUsuarioUltMov &&
      //this.validaIddoctorResponsableSolicitud &&
      this.validaIdhospital;
    if (salida != this.validaciones) this.validacionesChange.emit(salida);
    return salida;
  }

  obtenerSolicitudTejidoCorneales(lista, objeto) {
    objeto.lista_solicitudTejidoCorneales = lista;
    if (lista && lista.length > 0) {
      objeto.solicitudTejidoCorneal.from(lista[0]);
      objeto.evtSolicitudTejidoCornealSeleccionado(objeto.solicitudTejidoCorneal);
      if (objeto.configuarCombosObjetos) objeto.configuarCombosObjetos();
    }
  }
  evn_lazy_solicitudTejidoCorneal(solicitudTejidoCorneal, objeto) {
    objeto.solicitudTejidoCorneal = solicitudTejidoCorneal;
    objeto.solicitudTejidoCorneal.corneaSolicitada += '';

    objeto.solicitudTejidoCornealChange.emit(objeto.solicitudTejidoCorneal);
    objeto.configuarCombosObjetos();
    objeto.solicitudTejidoCornealLazy = true;
    if (objeto.descActivar) objeto.desactivaTodos();
  }
  /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
  get datosReporteSolicitudTejidoCornealWord() {
    return !(
      this.solicitudTejidoCornealActualizar &&
      this.solicitudTejidoCornealLazy &&
      this.globalesService.preporteWord(this, 'solicitudTejidoCorneal')
    );
  }
  get datosReporteSolicitudTejidoCornealExcel() {
    return !(
      this.solicitudTejidoCornealActualizar &&
      this.solicitudTejidoCornealLazy &&
      this.globalesService.preporteExcel(this, 'solicitudTejidoCorneal')
    );
  }
  get datosReporteSolicitudTejidoCornealPdf() {
    return !(
      this.solicitudTejidoCornealActualizar &&
      this.solicitudTejidoCornealLazy &&
      this.globalesService.preportePdf(this, 'solicitudTejidoCorneal')
    );
  }
  reporteSolicitudTejidoCornealExcel(form: any) {
    var nombre: string = 'SolicitudTejidoCorneal.xlsx';
    var path: string = 'file/reporteExcel';
    var parametros = {};
    parametros['entradas'] = { solicitudTejidoCorneal: this.solicitudTejidoCorneal };
    parametros['plantilla'] = 'SolicitudTejidoCorneal.xlsx';
    parametros['salida'] = nombre;
    this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
  }
  reporteSolicitudTejidoCornealWord(form: any) {
    var nombre: string = 'SolicitudTejidoCorneal.docx';
    var path: string = 'file/reporteWord';
    var parametros = {};
    parametros['entradas'] = { solicitudTejidoCorneal: this.solicitudTejidoCorneal };
    parametros['plantilla'] = 'SolicitudTejidoCorneal.docx';
    parametros['salida'] = nombre;
    this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
  }
  reporteSolicitudTejidoCornealPdf(form: any) {
    var nombre: string = 'SolicitudTejidoCorneal.docx';
    var path: string = 'file/reportePdf';
    var parametros = {};
    parametros['entradas'] = { solicitudTejidoCorneal: this.solicitudTejidoCorneal };
    parametros['plantilla'] = 'SolicitudTejidoCorneal.docx';
    parametros['salida'] = 'SolicitudTejidoCorneal.pdf';
    this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
  }
  /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

  accionesBuscar() {
    this.accion = 1;
    this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
    this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealCancelar = true;
  }
  buscarSolicitudTejidoCornealFront(form: any) {
    this.accionesBuscar();
    var vsolicitudTejidoCorneal: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
    vsolicitudTejidoCorneal.from(this.solicitudTejidoCorneal);
    this.configuracionSolicitudTejidoCorneal = new ConfigurarSolicitudTejidoCorneal();
    this.configuracionSolicitudTejidoCorneal.permisosTabla = {
      tabla: 'solicitudTejidoCorneal',
      permiso: 8
    };
    this.configuracionSolicitudTejidoCorneal.titulo = 'Buscar ' + this.permisosTabla.etiqueta;
    this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta = vsolicitudTejidoCorneal;
    this.permisosacciones();
    $('#buscarSolicitudTejidoCorneal_' + this.nombre).modal();
  }
  buscarSolicitudTejidoCornealBack(solicitudTejidoCorneal: SolicitudTejidoCorneal) {
    this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesByDto(
      new SolicitudTejidoCorneal(solicitudTejidoCorneal),
      this.eventoSrvSolicitudTejidoCornealBuscar,
      this
    );
  }
  eventoSrvSolicitudTejidoCornealBuscar(lista, objeto) {
    objeto.lista_solicitudTejidoCorneales = lista;
    if (lista && lista.length > 0) {
      objeto.solicitudTejidoCorneal = lista[0];
      objeto.solicitudTejidoCornealLazy = false;
      objeto.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(
        new SolicitudTejidoCorneal(objeto.solicitudTejidoCorneal),
        objeto.evn_lazy_solicitudTejidoCorneal,
        objeto
      );
    }
  }
  guardarSolicitudTejidoCornealFront(form: any) {
    if (this.validaGuardado) {
      let continuar = false;
      bootbox.confirm({
        message: '¿Los datos se almacenarán, desea realizar esta acción?',
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
        callback: function (result) {
          if (result) {
            this.solicitudTejidoCorneal = new SolicitudTejidoCorneal(this.solicitudTejidoCorneal);

            this.accion = 5; // ********************************************************************************************** maquina
            if (this.solicitudTejidoCorneal.id == null) {
              this.solicitudTejidoCorneal.estatusProceso = 1;
              this.guardarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
              this.accionesBuscar(); // ********************************************************************************* maquina
              this.permisosacciones();
            } else {
              this.accion = 3; // ************************************************************************************* maquina
              if (
                this.solicitudTejidoCorneal.id != null &&
                (this.solicitudTejidoCorneal.estatusProceso === 1 ||
                  this.solicitudTejidoCorneal.estatusProceso == null)
              ) {
                this.actualizarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
                this.accionesBuscar(); // ***************************************************************************** maquina
                this.permisosacciones();
              } else {
                bootbox.alert('Solo se puede actualizar cuando la solicitud aún no se ha enviado');
              }
            }
          }
        }.bind(this)
      });
    } else {
      if (!this.validaIdhospital)
        this.mensajerror += '\n<br/>Hospital Solicitante*';
      ("MENSAJE ERROR: " + this.mensajerror);

      bootbox.alert('<strong>Faltan datos Requeridos*</strong>\n' + this.mensajerror);
    }
  }
  enviarSolicitudTejidoCornealFront(form: any) {
    //("validaciones: " + this.validaTodosc);
    //("this.validaSegundoApellidoReceptor: " + this.validaSegundoApellidoReceptor);
    //("this.validaFechaTentativaCirugia: " + this.validaFechaTentativaCirugia);
    //("fechaTentativaCirugia: " + this.solicitudTejidoCorneal.fechaTentativaCirugia);
    //("this.validaNombreReceptor: " + this.validaNombreReceptor);
    //("this.validaPrimerApellidoReceptor: " + this.validaPrimerApellidoReceptor);
    //("this.validaNumeroExpedienteReceptor: " + this.validaNumeroExpedienteReceptor);
    //("this.validaSexoReceptor: " + this.validaSexoReceptor);
    //("SexoReceptor: " + this.solicitudTejidoCorneal.sexoReceptor);
    //("this.validaDiagnostico: " + this.validaDiagnostico);
    //("this.validaEdadReceptor: " + this.validaEdadReceptor);
    //("this.validaCaracteristicaCornea: " + this.validaCaracteristicaCornea);
    //("this.validaCorneaSolicitada: " + this.validaCorneaSolicitada);
    //("CorneaSolicitada: " + this.solicitudTejidoCorneal.corneaSolicitada);
    //("this.validaIddoctorResponsableSolicitud: " + this.validaIddoctorResponsableSolicitud);
    //("iddoctorResponsableSolicitud: " + this.solicitudTejidoCorneal.iddoctorResponsableSolicitud);
    //("this.validaIdhospital: " + this.validaIdhospital);
    //("idhospital: " + this.solicitudTejidoCorneal.idhospital);
    // No se validan eston campos
    // ("this.validaFolioSolicitudTejidoCorneal: " + this.validaFolioSolicitudTejidoCorneal);
    // ("this.validaEstatusProceso: " + this.validaEstatusProceso);
    // ("this.validaId: " + this.validaId);
    // ("this.validaFechaBaja: " + this.validaFechaBaja);
    // ("this.validaFechaRegistro: " + this.validaFechaRegistro);
    // ("this.validaFechaActualizacion: " + this.validaFechaActualizacion);
    // ("this.validaStatus: " + this.validaStatus);
    // ("this.validaUsuarioUltMov: " + this.validaUsuarioUltMov);
    if (this.validaTodosc) {
      this.solicitudTejidoCornealRecepcion.estatusProceso = 2;
      this.solicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal = this.solicitudTejidoCorneal;
      this.guardarSolicitudTejidoCornealRecepcionBack(this.solicitudTejidoCornealRecepcion);
      this.solicitudTejidoCorneal.estatusProceso = 2;
      this.actualizarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
      this.accionesBuscar(); // ***************************************************************************** maquina
      this.permisosacciones();
    } else {
      if (!this.validaIdhospital)
        this.mensajerror += '\n<br/>Hospital Solicitante*';
      if (!this.validaIddoctorResponsableSolicitud)
        this.mensajerror += '\n<br/>Nombre del Oftalmólogo Responsable y/o Coordinador*';
      if (!this.validaNombreReceptor)
        this.mensajerror += '\n<br/>Nombre(s)*';
      if (!this.validaPrimerApellidoReceptor)
        this.mensajerror += '\n<br/>Primer Apellido*';
      if (!this.validaSegundoApellidoReceptor)
        this.mensajerror += '\n<br/>Segundo Apellido*';
      if (this.solicitudTejidoCorneal.edadReceptor == null)
        this.mensajerror += '\n<br/>Edad*';
      if (!this.validaNumeroExpedienteReceptor)
        this.mensajerror += '\n<br/>Número Expediente*';
      if (!this.validaSexoReceptor)
        this.mensajerror += '\n<br/>Sexo*';
      if (!this.validaDiagnostico)
        this.mensajerror += '\n<br/>Diagnostico*';
      if (!this.validaFechaTentativaCirugia)
        this.mensajerror += '\n<br/>Fecha Tentativa Cirugía*';
      if (!this.validaCorneaSolicitada)
        this.mensajerror += '\n<br/>Córnea Solicitada*';
      if (!this.validaCaracteristicaCornea)
        this.mensajerror += '\n<br/>Característica de la Córnea*';
      ("MENSAJE ERROR: " + this.mensajerror);

      bootbox.alert('<strong>Faltan datos Requeridos*</strong>\n' + this.mensajerror);
    }
  }
  guardarSolicitudTejidoCornealRecepcionBack(
    solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion
  ) {
    if (solicitudTejidoCornealRecepcion.usuarioUltMov == null)
      solicitudTejidoCornealRecepcion.usuarioUltMov = this.globalesService.dameUsuario();
    if (
      solicitudTejidoCornealRecepcion.status == null ||
      solicitudTejidoCornealRecepcion.status == ''
    )
      solicitudTejidoCornealRecepcion.status = 1;
    this.solicitudTejidoCornealRecepcion_service.guardarSolicitudTejidoCornealRecepcion(
      new SolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion),
      this.eventoSrvSolicitudTejidoCornealRecepcionGuardar,
      this
    );
  }
  eventoSrvSolicitudTejidoCornealRecepcionGuardar(solicitudTejidoCornealRecepcion, obj) {
    obj.solicitudTejidoCornealRecepcion = solicitudTejidoCornealRecepcion;
    //bootbox.alert("Datos guardados con éxito");
    //var aux: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
    //aux.from(solicitudTejidoCornealRecepcion);
    //obj.solicitudTejidoCornealRecepcionChange.emit(aux);
    //obj.solicitudTejidoCornealRecepcionTablaChange.emit(aux);
    //obj.solicitudTejidoCornealRecepcionLazy =false;
    //obj.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(obj.solicitudTejidoCornealRecepcion, obj.evn_lazy_solicitudTejidoCornealRecepcion, obj);
    //obj.accionesActualizar();
  }
  guardarSolicitudTejidoCornealBack(solicitudTejidoCorneal: SolicitudTejidoCorneal) {
    if (solicitudTejidoCorneal.usuarioUltMov == null)
      solicitudTejidoCorneal.usuarioUltMov = this.globalesService.dameUsuario();
    if (solicitudTejidoCorneal.status == null || solicitudTejidoCorneal.status == '')
      solicitudTejidoCorneal.status = 1;
    solicitudTejidoCorneal.fechaRegistro = new Date();
    this.solicitudTejidoCorneal_service.guardarSolicitudTejidoCorneal(
      new SolicitudTejidoCorneal(solicitudTejidoCorneal),
      this.eventoSrvSolicitudTejidoCornealGuardar,
      this
    );
  }
  guardarTipoCirugiaBack(tipoCirugiaPrevista: TipoCirugiaPrevista, obj) {
    if (tipoCirugiaPrevista.usuarioUltMov == null)
      tipoCirugiaPrevista.usuarioUltMov = obj.globalesService.dameUsuario();
    if (tipoCirugiaPrevista.status == null || tipoCirugiaPrevista.status == '')
      tipoCirugiaPrevista.status = 1;
    obj.tipoCirugiaPrevista_services.guardarTipoCirugiaPrevista(
      new TipoCirugiaPrevista(tipoCirugiaPrevista),
      obj.eventoSrvTipoCirugiaPrevistaGuardar,
      obj
    );
  }
  eventoSrvSolicitudTejidoCornealGuardar(solicitudTejidoCorneal, obj) {
    obj.solicitudTejidoCorneal = solicitudTejidoCorneal;
    obj.solicitudTejidoCorneal.corneaSolicitada += '';
    bootbox.alert('Datos guardados con éxito');
    var aux: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
    aux.from(solicitudTejidoCorneal);
    obj.solicitudTejidoCornealChange.emit(aux);
    obj.solicitudTejidoCornealTablaChange.emit(aux);
    obj.solicitudTejidoCornealLazy = false;
    obj.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(
      new SolicitudTejidoCorneal(obj.solicitudTejidoCorneal),
      obj.evn_lazy_solicitudTejidoCorneal,
      obj
    );
    obj.accionesActualizar();
    obj.tipoCirugiaPrevista.idsolicitudTejidoCorneal = obj.solicitudTejidoCorneal;
    obj.guardarTipoCirugiaBack(obj.tipoCirugiaPrevista, obj);
  }
  eventoSrvTipoCirugiaPrevistaGuardar(tipoCirugiaPrevista, obj) {
    obj.tipoCirugiaPrevista = tipoCirugiaPrevista;
    //bootbox.alert("Datos guardados con éxito");
    var aux: TipoCirugiaPrevista = new TipoCirugiaPrevista();
    aux.from(tipoCirugiaPrevista);
    obj.tipoCirugiaPrevistaChange.emit(aux);
    obj.tipoCirugiaPrevistaTablaChange.emit(aux);
    obj.tipoCirugiaPrevistaLazy = false;
    if(tipoCirugiaPrevista.otra != null){
      obj.otracheck=1;
      obj.isDisabled = false;
    }



    /*     obj.solicitudTejidoCorneal.tipoCirugiaPrevista = tipoCirugiaPrevista;
    var aux2: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
    aux2.from(obj.solicitudTejidoCorneal);

    obj.solicitudTejidoCorneal_service.actualizarSolicitudTejidoCorneal(
      aux2,
      obj.eventoSrvSolicitudTejidoCornealActualizar,
      obj
    );
 */
    /*     obj.actualizarSolicitudTejidoCornealBack(obj.solicitudTejidoCorneal); */
    obj.tipoCirugiaPrevista_services.lazyTipoCirugiaPrevista(
      new TipoCirugiaPrevista(aux),
      obj.evn_lazy_tipoCirugiaPrevista,
      obj
    );
    //obj.accionesActualizar();
  }
  evn_lazy_tipoCirugiaPrevista(tipoCirugiaPrevista, objeto) {
    objeto.tipoCirugiaPrevista = tipoCirugiaPrevista;
    objeto.tipoCirugiaPrevistaChange.emit(objeto.tipoCirugiaPrevista);
    objeto.configuarCombosObjetos();
    objeto.tipoCirugiaPrevistaLazy = true;
  }
  actualizarSolicitudTejidoCornealFront(form: any) {
    this.accion = 3; // ************************************************************************************* maquina
    this.actualizarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
    this.accionesBuscar(); // ***************************************************************************** maquina
    this.permisosacciones();
  }
  actualizarSolicitudTejidoCornealBack(solicitudTejidoCorneal: SolicitudTejidoCorneal) {
    solicitudTejidoCorneal.usuarioUltMov = this.globalesService.dameUsuario();
    if (this.tipoCirugiaPrevista && this.tipoCirugiaPrevista.id != null) {
      this.actualizarTipoCirugiaPrevistaBack(this.tipoCirugiaPrevista);
    } else {
      this.tipoCirugiaPrevista.idsolicitudTejidoCorneal = this.solicitudTejidoCorneal;
      this.guardarTipoCirugiaBack(this.tipoCirugiaPrevista, this);
    }
    this.solicitudTejidoCorneal_service.actualizarSolicitudTejidoCorneal(
      new SolicitudTejidoCorneal(solicitudTejidoCorneal),
      this.eventoSrvSolicitudTejidoCornealActualizar,
      this
    );
  }
  eventoSrvSolicitudTejidoCornealActualizar(retorno, obj) {
    if (retorno) {
      if(obj.solicitudTejidoCornealRecepcion.estatusProceso == 2){
        bootbox.alert('Solicitud enviada a Recepción');
      }else{
        bootbox.alert('Datos actualizados con Éxito');
      }

      var aux: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.solicitudTejidoCornealLazy = false;
      obj.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(
        new SolicitudTejidoCorneal(obj.solicitudTejidoCorneal),
        obj.evn_lazy_solicitudTejidoCorneal,
        obj
      );
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
      aux.from(obj.solicitudTejidoCorneal);
      obj.solicitudTejidoCornealChange.emit(aux);
      obj.solicitudTejidoCornealTablaChange.emit(aux);
      obj.accionesActualizar();
      //obj.desactivaTodos();
    }
  }
  actualizarTipoCirugiaPrevistaBack(tipoCirugiaPrevista: TipoCirugiaPrevista) {
    tipoCirugiaPrevista.usuarioUltMov = this.globalesService.dameUsuario();
    this.tipoCirugiaPrevista_services.actualizarTipoCirugiaPrevista(
      new TipoCirugiaPrevista(tipoCirugiaPrevista),
      this.eventoSrvTipoCirugiaPrevistaActualizar,
      this
    );
  }
  eventoSrvTipoCirugiaPrevistaActualizar(retorno, obj) {
    if (retorno) {
      /* bootbox.alert('Datos actualizados con éxito'); */
      var aux: TipoCirugiaPrevista = new TipoCirugiaPrevista();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.tipoCirugiaPrevistaLazy = false;
      obj.tipoCirugiaPrevista_services.lazyTipoCirugiaPrevista(
        new TipoCirugiaPrevista(obj.tipoCirugiaPrevista),
        obj.evn_lazy_tipoCirugiaPrevista,
        obj
      );
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
      aux.from(obj.tipoCirugiaPrevista);
      obj.tipoCirugiaPrevistaChange.emit(aux);
      obj.tipoCirugiaPrevistaTablaChange.emit(aux);
      obj.accionesActualizar();
    }
  }

  eliminarSolicitudTejidoCornealFront(form: any) {
    this.accion = 4;
    this.eliminarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
    this.permisosacciones();
    this.accionesBuscar();
  }
  eliminarSolicitudTejidoCornealBack(solicitudTejidoCorneal: SolicitudTejidoCorneal) {
    solicitudTejidoCorneal.usuarioUltMov = this.globalesService.dameUsuario();
    this.solicitudTejidoCorneal_service.eliminarSolicitudTejidoCorneal(
      new SolicitudTejidoCorneal(solicitudTejidoCorneal),
      this.eventoSrvSolicitudTejidoCornealEliminar,
      this
    );
  }
  eventoSrvSolicitudTejidoCornealEliminar(retorno, obj) {
    if (retorno) {
      bootbox.alert('Datos eliminados con éxito');
      obj.solicitudTejidoCorneal = new SolicitudTejidoCorneal();
      obj.solicitudTejidoCornealChange.emit(obj.solicitudTejidoCorneal);
      obj.solicitudTejidoCornealTablaChange.emit(obj.solicitudTejidoCorneal);
      obj.limpiarCampos();
    }
  }
  cancelarSolicitudTejidoCornealFront(form: any) {
    this.accion = 6;
    this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
    this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = true;
    this.permisosacciones();
  }
  nuevoSolicitudTejidoCornealFront(form: any) {
    this.accion = 2;
    bootbox.confirm({
      message: '¿Deseas limpiar los campos de ingreso?',
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
        if (result) this.limpiarCampos();
        this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
        this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealCancelar = true;
      }.bind(this)
    });
  }

  configuarCombosObjetos() {
    this.lista_usuarioUltMovSolicitudTejidoCornealUsuario = [];
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovSolicitudTejidoCornealUsuario,
      this
    );
    this.lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante = [];
    this.doctorSolicitante_service.getDoctorSolicitantesActivos(
      this.evtGetIddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante,
      this
    );
    this.lista_idhospitalSolicitudTejidoCornealHospital = [];
    this.hospital_service.getHospitalesActivos(
      this.evtGetIdhospitalSolicitudTejidoCornealHospital,
      this
    );
  }
  configurarTablasConjuntos() {}

  accionesActualizar() {
    this.accion = 7;
    this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealGuardar = false;
    this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = this.solicitudTejidoCornealCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
  }
  evtSolicitudTejidoCornealSeleccionado(solicitudTejidoCorneal) {
    this.solicitudTejidoCorneal = new SolicitudTejidoCorneal();
    this.solicitudTejidoCorneal.from(solicitudTejidoCorneal);
    this.solicitudTejidoCornealLazy = false;
    this.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(
      new SolicitudTejidoCorneal(this.solicitudTejidoCorneal),
      this.evn_lazy_solicitudTejidoCorneal,
      this
    );
    this.accion = 7;
    this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealGuardar = false;
    this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = this.solicitudTejidoCornealCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
    $('#buscarSolicitudTejidoCorneal_' + this.nombre).modal('hide');
  }
  ngOnInit() {
    this.accion = 0; // *********************************************************************************************************** maquina
    this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false; // ******************** maquina
    this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = true; // ************************************************************************************* maquina
    this.permisosacciones();
    let id = this.route.snapshot.paramMap.get('id');
    this.buscaIdParametro(id);
    (id);
  }
  buscaIdParametro(id) {
    if (id != null) {
      this.solicitudTejidoCorneal.id = id;
      this.solicitudTejidoCornealLazy = false;
      this.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(
        new SolicitudTejidoCorneal(this.solicitudTejidoCorneal),
        this.evn_lazy_solicitudTejidoCorneal,
        this
      );
      this.tipoCirugiaPrevista_services.getTipoCirugiaPrevistaByIdSolicitudTejidoCorneal(
        id,
        this.eventoSrvTipoCirugiaPrevistaGuardar,
        this
      );
    }
  }
  permisosacciones() {
    if (this.solicitudTejidoCornealBuscar)
      this.solicitudTejidoCornealBuscar = this.globalesService.pbuscar(
        this,
        'solicitudTejidoCorneal'
      );
    if (this.solicitudTejidoCornealActualizar)
      this.solicitudTejidoCornealActualizar =
        this.globalesService.pacutalizar(this, 'solicitudTejidoCorneal') &&
        this.globalesService.pbuscar(this, 'solicitudTejidoCorneal');
    if (this.solicitudTejidoCornealEliminar)
      this.solicitudTejidoCornealEliminar =
        this.globalesService.peliminar(this, 'solicitudTejidoCorneal') &&
        this.globalesService.pbuscar(this, 'solicitudTejidoCorneal');
    if (this.solicitudTejidoCornealAgregar)
      this.solicitudTejidoCornealAgregar = this.globalesService.pagregar(
        this,
        'solicitudTejidoCorneal'
      );
  }
  permisosaccionesInicio() {
    this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false; // *************************** maquina
    this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = true; // ************************************************************************************* maquina
    this.accion = 0; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  limpiarCampos() {

     if (this.usuariologueado) {
      if (this.usuariologueado.perfil) {
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        this.obtenerPermisos();
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
      }
    }
    this.solicitudTejidoCorneal = new SolicitudTejidoCorneal();
    this.tipoCirugiaPrevista = new TipoCirugiaPrevista();
    this.usuarioUltMovSolicitudTejidoCornealUsuarioEleccion = new Usuario();
    this.iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEleccion = new DoctorSolicitante();
    this.idhospitalSolicitudTejidoCornealHospitalEleccion = new Hospital();
    this.solicitudTejidoCornealChange.emit(this.solicitudTejidoCorneal);
    this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false; // *************************** maquina
    this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = true; // ************************************************************************************* maquina
    this.accion = 6; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  imprimirSolicitudTejido() {
    if (this.solicitudTejidoCorneal && this.solicitudTejidoCorneal.id != null) {
      var path: string = 'file/reporteSolicitud';
      var otros: string = 'ReporteSolicitudTejido';
      var parametros: any = { id: this.solicitudTejidoCorneal.id };
      var nombre: string = 'ReporteSolicitud.pdf';
      this.fileservice.downloadFile(nombre, otros, path, parametros);
    }
  }
  desactivaTodos() {
    ("permisosAtributos: " + this.permisosAtributos);
    for (let ind = 0; ind < this.permisosAtributos.length; ind++) {
      ("permisosAtributos.length: " + this.permisosAtributos.length);
      ("this.permisosAtributos[ind].permiso 1: " + this.permisosAtributos[ind].permiso);
      this.permisosAtributos[ind].permiso = this.permisosAtributos[ind].permiso & 14;
      ("this.permisosAtributos[ind].permiso 2: " + this.permisosAtributos[ind].permiso);
    }
  }
  get descActivar(): boolean {
    //("Campos Activos");
    return (
      this.solicitudTejidoCorneal.estatusProceso != null &&
      this.solicitudTejidoCorneal.estatusProceso == 2
    );
  }
  get descActivarHosp(): boolean {
    //("Campo Activo Hospital");
    return (
      this.solicitudTejidoCorneal.estatusProceso != null &&
      (this.solicitudTejidoCorneal.estatusProceso == 1 || this.solicitudTejidoCorneal.estatusProceso == 2)
    );
  }

  nuevo() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.router.navigateByUrl('solicitud-tejido-corneal-crud');
    } else {
      this.limpiarCampos();
    }
  }
}
