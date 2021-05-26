import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { CoreService } from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service';
import { TipoCirugiaPrevista } from '../shared/tipo-cirugia-prevista';
import { TipoCirugiaPrevistaService } from '../shared/tipo-cirugia-prevista.service';
import { ConfigurarTipoCirugiaPrevista } from '../shared/configurar-tipo-cirugia-prevista';
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

declare var $: any;
declare var bootbox: any;
@Component({
  selector: 'app-tipo-cirugia-prevista-crud',
  templateUrl: './tipo-cirugia-prevista-crud.component.html',
  styleUrls: ['./tipo-cirugia-prevista-crud.component.css'],
  providers: [
    GlobalesService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    FileService,
    TipoCirugiaPrevistaService,
    UsuarioService,
    EntidadFederativaService,
    PerfilRedIsssteService,
    HospitalService,
    UsuarioBtcService,
    PerfilService,
    SolicitudTejidoCornealService,
    CatalogoCargoService,
    DoctorSolicitanteService
  ]
})
export class TipoCirugiaPrevistaCrudComponent implements OnInit {
  public opcionTipoCirugiaPrevista = 0;
  public validosTipoCirugiaPrevista: any = {
    id: false,
    dmek: false,
    otra: true,
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

  @Input() ocultarConjuntosTipoCirugiaPrevista: boolean = false;
  @Input() nombre: string = '';
  public permisosTabla = { tabla: 'tipoCirugiaPrevista', permiso: 0, etiqueta: '' };
  public permisosAtributos = [];
  public permisosConjuntos = [];
  //  public perfil: Perfil;
  public accion = 0;
  usuariologueado;
  public tipoCirugiaPrevistaLazy: boolean = false;
  public tipoCirugiaPrevistaPermisos: boolean = false;
  @Input() public validaciones: boolean = false;
  @Input() public desactiva: boolean = false;
  @Output() validacionesChange = new EventEmitter<boolean>();
  public perfil: Perfil;
  @Input() public tipoCirugiaPrevista: TipoCirugiaPrevista = new TipoCirugiaPrevista();
  @Output() tipoCirugiaPrevistaChange = new EventEmitter<TipoCirugiaPrevista>();
  @Output() tipoCirugiaPrevistaTablaChange = new EventEmitter<TipoCirugiaPrevista>();
  public lista_tipoCirugiaPrevistas: TipoCirugiaPrevista[] = [];
  public configuracionTipoCirugiaPrevista: ConfigurarTipoCirugiaPrevista;
  public tipoCirugiaPrevistaBuscar: boolean;
  public tipoCirugiaPrevistaSeleccion: boolean;
  public tipoCirugiaPrevistaAgregar: boolean;
  public tipoCirugiaPrevistaActualizar: boolean;
  public tipoCirugiaPrevistaEliminar: boolean;
  public tipoCirugiaPrevistaGuardar: boolean;
  public tipoCirugiaPrevistaCancelar: boolean;
  public usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion: Usuario = new Usuario();
  public lista_usuarioUltMovTipoCirugiaPrevistaUsuario: Usuario[] = [];
  public usuarioUltMovTipoCirugiaPrevistaUsuarioEditar: boolean = false;
  public idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
  public lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal: SolicitudTejidoCorneal[] = [];
  public idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEditar: boolean = false;
  @Input() etiquetaGeneral;
  @Input() otracheck : number;
  @Input() public isDisabled: boolean;

  get tipoCirugiaPrevistaOcultarConjuntos() {
    if (this.ocultarConjuntosTipoCirugiaPrevista) return true;
    return !this.tipoCirugiaPrevistaActualizar;
  }

  ngOnChanges(changes) {
    if (
      changes.tipoCirugiaPrevista &&
      changes.tipoCirugiaPrevista.currentValue == null &&
      this.tipoCirugiaPrevista == null
    )
      this.tipoCirugiaPrevista = new TipoCirugiaPrevista();
    else {
      var aux: TipoCirugiaPrevista = new TipoCirugiaPrevista();
      if (this.tipoCirugiaPrevista) aux.from(this.tipoCirugiaPrevista);
      if (aux.isOk && aux.isOk()) {
        this.accion = 7;
        this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaGuardar = false;
        this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = this.tipoCirugiaPrevistaCancelar = true;
        this.permisosacciones();
        var thiss: any;
        thiss = this;
        if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
      } else {
        this.accion = 2;
        this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
        this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaCancelar = true;
      }
    }
    if (changes.desactiva) {
      if (this.desactiva)
        this.desactivaTodos();
      else {
            this.obtenerPermisos();
      }
    }
  }
  obtenerPermisos() {
    var id_expe = -1;
    var tablas = [
      'tipoCirugiaPrevista',
      'usuario',
      'usuarioBtc',
      'perfilRedIssste',
      'perfilBtc',
      'hospital',
      'entidadFederativa',
      'perfil',
      'solicitudTejidoCorneal',
      'doctorSolicitante',
      'catalogoCargo'
    ];
    var parametros: any = {
      id_usu: this.usuariologueado.id,
      tablas: tablas,
      id_exp: id_expe
    };
    this.tipoCirugiaPrevistaPermisos = false;
    this.coreService.permisos(parametros, this.evtCorePermisos, this);
  }

  constructor(
    public globalesService: GlobalesService,
    public zone: NgZone,
    public fileservice: FileService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coreService: CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public tipoCirugiaPrevista_service: TipoCirugiaPrevistaService,
    public usuario_service: UsuarioService,
    public usuarioBtc_service: UsuarioBtcService,
    public perfilRedIssste_service: PerfilRedIsssteService,
    public hospital_service: HospitalService,
    public entidadFederativa_service: EntidadFederativaService,
    public perfil_service: PerfilService,
    public solicitudTejidoCorneal_service: SolicitudTejidoCornealService,
    public doctorSolicitante_service: DoctorSolicitanteService,
    public catalogoCargo_service: CatalogoCargoService
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
    this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
    this.configuracionTipoCirugiaPrevista = new ConfigurarTipoCirugiaPrevista();
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovTipoCirugiaPrevistaUsuario,
      this
    );
    this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesActivos(
      this.evtGetIdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal,
      this
    );

    this.limpiarCampos();
  }

  //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
  evtCorePermisos(permisos, obj) {
    obj.tipoCirugiaPrevistaPermisos = true;
    if (
      permisos &&
      permisos.tipoCirugiaPrevista &&
      permisos.tipoCirugiaPrevista.PermisoAtributo &&
      permisos.tipoCirugiaPrevista.PermisoAtributo.length > 0
    ) {
      obj.permisosAtributos = permisos.tipoCirugiaPrevista.PermisoAtributo;
    } else {
      obj.usuariologueado = undefined;
    }
    if (
      permisos &&
      permisos.tipoCirugiaPrevista &&
      permisos.tipoCirugiaPrevista.PermisoConjunto &&
      permisos.tipoCirugiaPrevista.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos = permisos.tipoCirugiaPrevista.PermisoConjunto;
    }
    if (
      permisos &&
      permisos.tipoCirugiaPrevista &&
      permisos.tipoCirugiaPrevista.PermisoTabla &&
      permisos.tipoCirugiaPrevista.PermisoTabla.length > 0
    ) {
      obj.permisosTabla = permisos.tipoCirugiaPrevista.PermisoTabla[0];
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
      permisos.solicitudTejidoCorneal &&
      permisos.solicitudTejidoCorneal.PermisoAtributo &&
      permisos.solicitudTejidoCorneal.PermisoAtributo.length > 0
    ) {
      //obj.configuracionIdsolicitudTejidoCorneal.permisosAtributos = permisos.solicitudTejidoCorneal.PermisoAtributo ;
      //obj.permisosAtributos.push(permisos.solicitudTejidoCorneal.PermisoAtributo) ;
    }
    if (
      permisos &&
      permisos.solicitudTejidoCorneal &&
      permisos.solicitudTejidoCorneal.PermisoAtributo &&
      permisos.solicitudTejidoCorneal.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos.push(permisos.solicitudTejidoCorneal.PermisoConjunto);
    }
    if (
      permisos &&
      permisos.solicitudTejidoCorneal &&
      permisos.solicitudTejidoCorneal.PermisoTabla &&
      permisos.solicitudTejidoCorneal.PermisoTabla.length > 0
    ) {
      //obj.configuracionIdsolicitudTejidoCorneal.permisosTabla = permisos.solicitudTejidoCorneal.PermisoTabla[0] ;
      //obj.permisosTabla.push(permisos.solicitudTejidoCorneal.PermisoTabla[0] );
    }

    if (obj.configurarTablasConjuntos) obj.configurarTablasConjuntos();
  }
  //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

  evtGetUsuarioUltMovTipoCirugiaPrevistaUsuario(
    lista_usuarioUltMovTipoCirugiaPrevistaUsuario,
    obj
  ) {
    obj.lista_usuarioUltMovTipoCirugiaPrevistaUsuario = lista_usuarioUltMovTipoCirugiaPrevistaUsuario;
    obj.actualizar_UsuarioUltMovTipoCirugiaPrevistaUsuario();
  }
  evtGetIdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal(
    lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal,
    obj
  ) {
    obj.lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal = lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal;
    obj.actualizar_IdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal();
  }

  actualizar_UsuarioUltMovTipoCirugiaPrevistaUsuario() {
    if (this.usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion)
      for (let eleme of this.lista_usuarioUltMovTipoCirugiaPrevistaUsuario)
        if (eleme.id == this.usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion.id) {
          this.usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion = eleme;
          break;
        }
  }
  actualizar_IdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal() {
    if (this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion)
      for (let eleme of this
        .lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal)
        if (
          eleme.id ==
          this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion.id
        ) {
          this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion = eleme;
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
    return this.validosTipoCirugiaPrevista['id'];
  }
  get validaIds() {
    return this.validosTipoCirugiaPrevista['id'];
  }
  get validaDmek() {
    return this.validosTipoCirugiaPrevista['dmek'];
  }
  get validaOtra() {
    return this.validosTipoCirugiaPrevista['otra'];
  }
  get validaFechaBaja() {
    return this.validosTipoCirugiaPrevista['fechaBaja'];
  }
  get validaDalk() {
    return this.validosTipoCirugiaPrevista['dalk'];
  }
  get validaFechaRegistro() {
    return this.validosTipoCirugiaPrevista['fechaRegistro'];
  }
  get validaFechaActualizacion() {
    return this.validosTipoCirugiaPrevista['fechaActualizacion'];
  }
  get validaDsaek() {
    return this.validosTipoCirugiaPrevista['dsaek'];
  }
  get validaQp() {
    return this.validosTipoCirugiaPrevista['qp'];
  }
  get validaStatus() {
    return this.validosTipoCirugiaPrevista['status'];
  }
  get validaUsuarioUltMov() {
    return this.validosTipoCirugiaPrevista['usuarioUltMov'];
  }
  get validaIdsolicitudTejidoCorneal() {
    return this.validosTipoCirugiaPrevista['idsolicitudTejidoCorneal'];
  }

  get validaTodosc() {
    var salida =
      this.validaId &&
      this.validaDmek &&
      this.validaOtra &&
      this.validaFechaBaja &&
      this.validaDalk &&
      this.validaFechaRegistro &&
      this.validaFechaActualizacion &&
      this.validaDsaek &&
      this.validaQp &&
      this.validaStatus &&
      this.validaUsuarioUltMov &&
      this.validaIdsolicitudTejidoCorneal;
    if (salida != this.validaciones) this.validacionesChange.emit(salida);
    return salida;
  }

  obtenerTipoCirugiaPrevistas(lista, objeto) {
    objeto.lista_tipoCirugiaPrevistas = lista;
    if (lista && lista.length > 0) {
      objeto.tipoCirugiaPrevista.from(lista[0]);
      objeto.evtTipoCirugiaPrevistaSeleccionado(objeto.tipoCirugiaPrevista);
      if (objeto.configuarCombosObjetos) objeto.configuarCombosObjetos();
    }
  }
  evn_lazy_tipoCirugiaPrevista(tipoCirugiaPrevista, objeto) {
    objeto.tipoCirugiaPrevista = tipoCirugiaPrevista;
    objeto.tipoCirugiaPrevistaChange.emit(objeto.tipoCirugiaPrevista);
    objeto.configuarCombosObjetos();
    objeto.tipoCirugiaPrevistaLazy = true;
  }
  /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
  get datosReporteTipoCirugiaPrevistaWord() {
    return !(
      this.tipoCirugiaPrevistaActualizar &&
      this.tipoCirugiaPrevistaLazy &&
      this.globalesService.preporteWord(this, 'tipoCirugiaPrevista')
    );
  }
  get datosReporteTipoCirugiaPrevistaExcel() {
    return !(
      this.tipoCirugiaPrevistaActualizar &&
      this.tipoCirugiaPrevistaLazy &&
      this.globalesService.preporteExcel(this, 'tipoCirugiaPrevista')
    );
  }
  get datosReporteTipoCirugiaPrevistaPdf() {
    return !(
      this.tipoCirugiaPrevistaActualizar &&
      this.tipoCirugiaPrevistaLazy &&
      this.globalesService.preportePdf(this, 'tipoCirugiaPrevista')
    );
  }
  reporteTipoCirugiaPrevistaExcel(form: any) {
    var nombre: string = 'TipoCirugiaPrevista.xlsx';
    var path: string = 'file/reporteExcel';
    var parametros = {};
    parametros['entradas'] = { tipoCirugiaPrevista: this.tipoCirugiaPrevista };
    parametros['plantilla'] = 'TipoCirugiaPrevista.xlsx';
    parametros['salida'] = nombre;
    this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
  }
  reporteTipoCirugiaPrevistaWord(form: any) {
    var nombre: string = 'TipoCirugiaPrevista.docx';
    var path: string = 'file/reporteWord';
    var parametros = {};
    parametros['entradas'] = { tipoCirugiaPrevista: this.tipoCirugiaPrevista };
    parametros['plantilla'] = 'TipoCirugiaPrevista.docx';
    parametros['salida'] = nombre;
    this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
  }
  reporteTipoCirugiaPrevistaPdf(form: any) {
    var nombre: string = 'TipoCirugiaPrevista.docx';
    var path: string = 'file/reportePdf';
    var parametros = {};
    parametros['entradas'] = { tipoCirugiaPrevista: this.tipoCirugiaPrevista };
    parametros['plantilla'] = 'TipoCirugiaPrevista.docx';
    parametros['salida'] = 'TipoCirugiaPrevista.pdf';
    this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
  }
  /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

  accionesBuscar() {
    this.accion = 1;
    this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
    this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaCancelar = true;
  }
  buscarTipoCirugiaPrevistaFront(form: any) {
    this.accionesBuscar();
    var vtipoCirugiaPrevista: TipoCirugiaPrevista = new TipoCirugiaPrevista();
    vtipoCirugiaPrevista.from(this.tipoCirugiaPrevista);
    this.configuracionTipoCirugiaPrevista = new ConfigurarTipoCirugiaPrevista();
    this.configuracionTipoCirugiaPrevista.permisosTabla = {
      tabla: 'tipoCirugiaPrevista',
      permiso: 8
    };
    this.configuracionTipoCirugiaPrevista.titulo = 'Buscar ' + this.permisosTabla.etiqueta;
    this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta = vtipoCirugiaPrevista;
    this.permisosacciones();
    $('#buscarTipoCirugiaPrevista_' + this.nombre).modal();
  }
  buscarTipoCirugiaPrevistaBack(tipoCirugiaPrevista: TipoCirugiaPrevista) {
    this.tipoCirugiaPrevista_service.getTipoCirugiaPrevistasByDto(
      tipoCirugiaPrevista,
      this.eventoSrvTipoCirugiaPrevistaBuscar,
      this
    );
  }
  eventoSrvTipoCirugiaPrevistaBuscar(lista, objeto) {
    objeto.lista_tipoCirugiaPrevistas = lista;
    if (lista && lista.length > 0) {
      objeto.tipoCirugiaPrevista = lista[0];
      objeto.tipoCirugiaPrevistaLazy = false;
      objeto.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(
        objeto.tipoCirugiaPrevista,
        objeto.evn_lazy_tipoCirugiaPrevista,
        objeto
      );
    }
  }
  guardarTipoCirugiaPrevistaFront(form: any) {
    this.accion = 5; // ********************************************************************************************** maquina
    this.guardarTipoCirugiaPrevistaBack(this.tipoCirugiaPrevista);
    this.accionesBuscar(); // ********************************************************************************* maquina
    this.permisosacciones();
  }
  guardarTipoCirugiaPrevistaBack(tipoCirugiaPrevista: TipoCirugiaPrevista) {
    if (tipoCirugiaPrevista.usuarioUltMov == null)
      tipoCirugiaPrevista.usuarioUltMov = this.globalesService.dameUsuario();
    if (tipoCirugiaPrevista.status == null || tipoCirugiaPrevista.status == '')
      tipoCirugiaPrevista.status = 1;
    this.tipoCirugiaPrevista_service.guardarTipoCirugiaPrevista(
      tipoCirugiaPrevista,
      this.eventoSrvTipoCirugiaPrevistaGuardar,
      this
    );
  }
  eventoSrvTipoCirugiaPrevistaGuardar(tipoCirugiaPrevista, obj) {
    obj.tipoCirugiaPrevista = tipoCirugiaPrevista;
    bootbox.alert('Datos guardados con éxito');
    var aux: TipoCirugiaPrevista = new TipoCirugiaPrevista();
    aux.from(tipoCirugiaPrevista);
    obj.tipoCirugiaPrevistaChange.emit(aux);
    obj.tipoCirugiaPrevistaTablaChange.emit(aux);
    obj.tipoCirugiaPrevistaLazy = false;
    obj.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(
      obj.tipoCirugiaPrevista,
      obj.evn_lazy_tipoCirugiaPrevista,
      obj
    );
    obj.accionesActualizar();
  }
  actualizarTipoCirugiaPrevistaFront(form: any) {
    this.accion = 3; // ************************************************************************************* maquina
    this.actualizarTipoCirugiaPrevistaBack(this.tipoCirugiaPrevista);
    this.accionesBuscar(); // ***************************************************************************** maquina
    this.permisosacciones();
  }
  actualizarTipoCirugiaPrevistaBack(tipoCirugiaPrevista: TipoCirugiaPrevista) {
    tipoCirugiaPrevista.usuarioUltMov = this.globalesService.dameUsuario();
    this.tipoCirugiaPrevista_service.actualizarTipoCirugiaPrevista(
      tipoCirugiaPrevista,
      this.eventoSrvTipoCirugiaPrevistaActualizar,
      this
    );
  }
  eventoSrvTipoCirugiaPrevistaActualizar(retorno, obj) {
    if (retorno) {
      bootbox.alert('Datos actualizados con éxito');
      var aux: TipoCirugiaPrevista = new TipoCirugiaPrevista();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.tipoCirugiaPrevistaLazy = false;
      obj.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(
        obj.tipoCirugiaPrevista,
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
  eliminarTipoCirugiaPrevistaFront(form: any) {
    this.accion = 4;
    this.eliminarTipoCirugiaPrevistaBack(this.tipoCirugiaPrevista);
    this.permisosacciones();
    this.accionesBuscar();
  }
  eliminarTipoCirugiaPrevistaBack(tipoCirugiaPrevista: TipoCirugiaPrevista) {
    tipoCirugiaPrevista.usuarioUltMov = this.globalesService.dameUsuario();
    this.tipoCirugiaPrevista_service.eliminarTipoCirugiaPrevista(
      tipoCirugiaPrevista,
      this.eventoSrvTipoCirugiaPrevistaEliminar,
      this
    );
  }
  eventoSrvTipoCirugiaPrevistaEliminar(retorno, obj) {
    if (retorno) {
      bootbox.alert('Datos eliminados con éxito');
      obj.tipoCirugiaPrevista = new TipoCirugiaPrevista();
      obj.tipoCirugiaPrevistaChange.emit(obj.tipoCirugiaPrevista);
      obj.tipoCirugiaPrevistaTablaChange.emit(obj.tipoCirugiaPrevista);
      obj.limpiarCampos();
    }
  }
  cancelarTipoCirugiaPrevistaFront(form: any) {
    this.accion = 6;
    this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
    this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = true;
    this.permisosacciones();
  }
  nuevoTipoCirugiaPrevistaFront(form: any) {
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
        this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
        this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaCancelar = true;
      }.bind(this)
    });
  }

  configuarCombosObjetos() {
    this.lista_usuarioUltMovTipoCirugiaPrevistaUsuario = [];
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovTipoCirugiaPrevistaUsuario,
      this
    );
    this.lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal = [];
    this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesActivos(
      this.evtGetIdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal,
      this
    );
  }
  configurarTablasConjuntos() {}

  accionesActualizar() {
    this.accion = 7;
    this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaGuardar = false;
    this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = this.tipoCirugiaPrevistaCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
  }
  evtTipoCirugiaPrevistaSeleccionado(tipoCirugiaPrevista) {
    this.tipoCirugiaPrevista = new TipoCirugiaPrevista();
    this.tipoCirugiaPrevista.from(tipoCirugiaPrevista);
    this.tipoCirugiaPrevistaLazy = false;
    this.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(
      this.tipoCirugiaPrevista,
      this.evn_lazy_tipoCirugiaPrevista,
      this
    );
    this.accion = 7;
    this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaGuardar = false;
    this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = this.tipoCirugiaPrevistaCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
    $('#buscarTipoCirugiaPrevista_' + this.nombre).modal('hide');
  }
  ngOnInit() {
    this.accion = 0; // *********************************************************************************************************** maquina
    this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false; // ******************** maquina
    this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = true; // ************************************************************************************* maquina
    this.permisosacciones();
  }

  permisosacciones() {
    if (this.tipoCirugiaPrevistaBuscar)
      this.tipoCirugiaPrevistaBuscar = this.globalesService.pbuscar(this, 'tipoCirugiaPrevista');
    if (this.tipoCirugiaPrevistaActualizar)
      this.tipoCirugiaPrevistaActualizar =
        this.globalesService.pacutalizar(this, 'tipoCirugiaPrevista') &&
        this.globalesService.pbuscar(this, 'tipoCirugiaPrevista');
    if (this.tipoCirugiaPrevistaEliminar)
      this.tipoCirugiaPrevistaEliminar =
        this.globalesService.peliminar(this, 'tipoCirugiaPrevista') &&
        this.globalesService.pbuscar(this, 'tipoCirugiaPrevista');
    if (this.tipoCirugiaPrevistaAgregar)
      this.tipoCirugiaPrevistaAgregar = this.globalesService.pagregar(this, 'tipoCirugiaPrevista');
  }
  permisosaccionesInicio() {
    this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false; // *************************** maquina
    this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = true; // ************************************************************************************* maquina
    this.accion = 0; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  limpiarCampos() {
    this.tipoCirugiaPrevista = new TipoCirugiaPrevista();

    this.usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion = new Usuario();
    this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion = new SolicitudTejidoCorneal();

    this.tipoCirugiaPrevistaChange.emit(this.tipoCirugiaPrevista);
    this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false; // *************************** maquina
    this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = true; // ************************************************************************************* maquina
    this.accion = 6; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  desactivaTodos() {
    for (let ind = 0; ind < this.permisosAtributos.length; ind++) {
      this.permisosAtributos[ind].permiso = this.permisosAtributos[ind].permiso & 14;
    }
  }
}
