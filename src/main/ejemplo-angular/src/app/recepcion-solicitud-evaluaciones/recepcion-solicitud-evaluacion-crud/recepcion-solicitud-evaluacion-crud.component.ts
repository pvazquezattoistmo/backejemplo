import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { ViewChild, NgZone, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input, Output } from "@angular/core";
import { GlobalesService } from "../../shared/globales.service";
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { CoreService } from "../../shared/core.service";
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from "../../shared/file.service";
import { RecepcionSolicitudEvaluacion } from "../shared/recepcion-solicitud-evaluacion";
import { RecepcionSolicitudEvaluacionService } from "../shared/recepcion-solicitud-evaluacion.service";
import { ConfigurarRecepcionSolicitudEvaluacion } from "../shared/configurar-recepcion-solicitud-evaluacion";
import { Usuario } from "../../usuarios/shared/usuario";
import { UsuarioService } from "../../usuarios/shared/usuario.service";
import { UsuarioBtcService } from "../../usuario-btcs/shared/usuario-btc.service";
import { UsuarioBtc } from "../../usuario-btcs/shared/usuario-btc";
import { PerfilRedIsssteService } from "../../perfil-red-issstes/shared/perfil-red-issste.service";
import { PerfilRedIssste } from "../../perfil-red-issstes/shared/perfil-red-issste";
//import { PerfilBtcService } from "../../perfil-btcs/shared/perfil-btc.service";
//import { PerfilBtc } from "../../perfil-btcs/shared/perfil-btc";
import { HospitalService } from "../../hospitales/shared/hospital.service";
import { Hospital } from "../../hospitales/shared/hospital";
import { EntidadFederativaService } from "../../entidad-federativas/shared/entidad-federativa.service";
import { EntidadFederativa } from "../../entidad-federativas/shared/entidad-federativa";
import { PerfilService } from "../../perfiles/shared/perfil.service";
import { Perfil } from "../../perfiles/shared/perfil";
import { SolicitudEvaluacionCorneal } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal";
import { SolicitudEvaluacionCornealService } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service";
import { CausaMuerteService } from "../../causa-muertes/shared/causa-muerte.service";
import { CausaMuerte } from "../../causa-muertes/shared/causa-muerte";

declare var $: any;
declare var bootbox: any;
@Component({
  selector: "app-recepcion-solicitud-evaluacion-crud",
  templateUrl: "./recepcion-solicitud-evaluacion-crud.component.html",
  styleUrls: ["./recepcion-solicitud-evaluacion-crud.component.css"],
  providers: [
    GlobalesService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    FileService,
    RecepcionSolicitudEvaluacionService,
    UsuarioService,
    EntidadFederativaService,
    PerfilRedIsssteService,
    //PerfilBtcService,
    HospitalService,
    UsuarioBtcService,
    PerfilService,
    SolicitudEvaluacionCornealService,
    CausaMuerteService
  ]
})
export class RecepcionSolicitudEvaluacionCrudComponent implements OnInit {
  public opcionRecepcionSolicitudEvaluacion = 0;
  public validosRecepcionSolicitudEvaluacion: any = {
    id: false,
    horaRecepcion: false,
    registroTejido: false,
    fechaBaja: false,
    tejidoCorneaDerecha: false,
    fechaRegistro: false,
    estatusProceso: false,
    expedienteFisico: false,
    idbtcCi: false,
    tejidoCorneaIzquierda: false,
    idbtcCd: false,
    fechaActualizacion: false,
    fechaRecepcion: false,
    status: false,
    usuarioUltMov: false,
    idsolicitudEvaluacionCorneal: false
  };

  @Input() ocultarConjuntosRecepcionSolicitudEvaluacion: boolean = false;
  @Input() nombre: string = "";
  public permisosTabla = {
    tabla: "recepcionSolicitudEvaluacion",
    permiso: 0,
    etiqueta: ""
  };
  public permisosAtributos = [];
  public permisosConjuntos = [];
  //  public perfil: Perfil;
  public accion = 0;
  usuariologueado;
  public recepcionSolicitudEvaluacionLazy: boolean = false;
  public recepcionSolicitudEvaluacionPermisos: boolean = false;
  @Input() public validaciones: boolean = false;
  @Output() validacionesChange = new EventEmitter<boolean>();
  public perfil: Perfil;
  @Input()
  public recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
  @Output() recepcionSolicitudEvaluacionChange = new EventEmitter<
    RecepcionSolicitudEvaluacion
  >();
  @Output() recepcionSolicitudEvaluacionTablaChange = new EventEmitter<
    RecepcionSolicitudEvaluacion
  >();
  public lista_recepcionSolicitudEvaluaciones: RecepcionSolicitudEvaluacion[] = [];
  public configuracionRecepcionSolicitudEvaluacion: ConfigurarRecepcionSolicitudEvaluacion;
  public recepcionSolicitudEvaluacionBuscar: boolean;
  public recepcionSolicitudEvaluacionSeleccion: boolean;
  public recepcionSolicitudEvaluacionAgregar: boolean;
  public recepcionSolicitudEvaluacionActualizar: boolean;
  public recepcionSolicitudEvaluacionEliminar: boolean;
  public recepcionSolicitudEvaluacionGuardar: boolean;
  public recepcionSolicitudEvaluacionCancelar: boolean;
  public usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion: Usuario = new Usuario();
  public lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario: Usuario[] = [];
  public usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEditar: boolean = false;
  public idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
  public lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal: SolicitudEvaluacionCorneal[] = [];
  public idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEditar: boolean = false;

  public usuarioLogueado: Usuario;
  @Input()
  public solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();

  @Input() public viewModeEvaluacion: boolean;

  @Input() public enableIzquierda = true;
  @Input() public enableDerecha = true;

  get recepcionSolicitudEvaluacionOcultarConjuntos() {
    if (this.ocultarConjuntosRecepcionSolicitudEvaluacion) return true;
    return !this.recepcionSolicitudEvaluacionActualizar;
  }

  ngOnChanges(changes) {
    if (
      changes.recepcionSolicitudEvaluacion &&
      changes.recepcionSolicitudEvaluacion.currentValue == null &&
      this.recepcionSolicitudEvaluacion == null
    )
      this.recepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
    else {
      var aux: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
      if (this.recepcionSolicitudEvaluacion)
        aux.from(this.recepcionSolicitudEvaluacion);
      if (aux.isOk && aux.isOk()) {
        this.accion = 7;
        this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionGuardar = false;
        this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = this.recepcionSolicitudEvaluacionCancelar = true;
        this.permisosacciones();
        var thiss: any;
        thiss = this;
        if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
      } else {
        this.accion = 2;
        this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
        this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionCancelar = true;
      }
    }
  }
  obtenerPermisos() {
    var id_expe = -1;
    var tablas = [
      "recepcionSolicitudEvaluacion",
      "usuario",
      "usuarioBtc",
      "perfilRedIssste",
      "perfilBtc",
      "hospital",
      "entidadFederativa",
      "perfil",
      "solicitudEvaluacionCorneal",
      "causaMuerte"
    ];
    var parametros: any = {
      id_usu: this.usuariologueado.id,
      tablas: tablas,
      id_exp: id_expe
    };
    this.recepcionSolicitudEvaluacionPermisos = false;
    this.coreService.permisos(parametros, this.evtCorePermisos, this);
  }

  constructor(
    public globalesService: GlobalesService,
    public zone: NgZone,
    public fileservice: FileService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coreService: CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public recepcionSolicitudEvaluacion_service: RecepcionSolicitudEvaluacionService,
    public usuario_service: UsuarioService,
    public usuarioBtc_service: UsuarioBtcService,
    public perfilRedIssste_service: PerfilRedIsssteService,
    //public perfilBtc_service: PerfilBtcService,
    public hospital_service: HospitalService,
    public entidadFederativa_service: EntidadFederativaService,
    public perfil_service: PerfilService,
    public solicitudEvaluacionCorneal_service: SolicitudEvaluacionCornealService,
    public causaMuerte_service: CausaMuerteService,
    public activatedRoute: ActivatedRoute
  ) {
    this.usuariologueado = globalesService.dameUsuario();
    var discon = "";
    if (this.usuariologueado) {
      if (this.usuariologueado.perfil) {
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        this.obtenerPermisos();
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
      }
    }
    this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
    this.configuracionRecepcionSolicitudEvaluacion = new ConfigurarRecepcionSolicitudEvaluacion();
    //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovRecepcionSolicitudEvaluacionUsuario, this);
    // this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(this.evtGetIdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal, this);

    this.limpiarCampos();
  }

  //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
  evtCorePermisos(permisos, obj) {
    obj.recepcionSolicitudEvaluacionPermisos = true;
    if (
      permisos &&
      permisos.recepcionSolicitudEvaluacion &&
      permisos.recepcionSolicitudEvaluacion.PermisoAtributo &&
      permisos.recepcionSolicitudEvaluacion.PermisoAtributo.length > 0
    ) {
      obj.permisosAtributos =
        permisos.recepcionSolicitudEvaluacion.PermisoAtributo;
    } else {
      obj.usuariologueado =   obj.globalesService.dameUsuario();
      ;
    }
    if (
      permisos &&
      permisos.recepcionSolicitudEvaluacion &&
      permisos.recepcionSolicitudEvaluacion.PermisoConjunto &&
      permisos.recepcionSolicitudEvaluacion.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos =
        permisos.recepcionSolicitudEvaluacion.PermisoConjunto;
    }
    if (
      permisos &&
      permisos.recepcionSolicitudEvaluacion &&
      permisos.recepcionSolicitudEvaluacion.PermisoTabla &&
      permisos.recepcionSolicitudEvaluacion.PermisoTabla.length > 0
    ) {
      obj.permisosTabla = permisos.recepcionSolicitudEvaluacion.PermisoTabla[0];
      obj.permisosaccionesInicio();
    }
    if (
      permisos &&
      permisos.usuario &&
      permisos.usuario.PermisoAtributo &&
      permisos.usuario.PermisoAtributo.length > 0
    ) {
     //obj.configuracion$1=
        permisos.usuario.PermisoAtributo;
      obj.permisosAtributos.push(permisos.usuario.PermisoAtributo);
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
     //obj.configuracion$1=
        permisos.usuario.PermisoTabla[0];
     // obj.permisosTabla.push(permisos.usuario.PermisoTabla[0]);
    }
    if (
      permisos &&
      permisos.solicitudEvaluacionCorneal &&
      permisos.solicitudEvaluacionCorneal.PermisoAtributo &&
      permisos.solicitudEvaluacionCorneal.PermisoAtributo.length > 0
    ) {
     //obj.configuracion$1=
        permisos.solicitudEvaluacionCorneal.PermisoAtributo;
      obj.permisosAtributos.push(
        permisos.solicitudEvaluacionCorneal.PermisoAtributo
      );
    }
    if (
      permisos &&
      permisos.solicitudEvaluacionCorneal &&
      permisos.solicitudEvaluacionCorneal.PermisoAtributo &&
      permisos.solicitudEvaluacionCorneal.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos.push(
        permisos.solicitudEvaluacionCorneal.PermisoConjunto
      );
    }
    if (
      permisos &&
      permisos.solicitudEvaluacionCorneal &&
      permisos.solicitudEvaluacionCorneal.PermisoTabla &&
      permisos.solicitudEvaluacionCorneal.PermisoTabla.length > 0
    ) {
     //obj.configuracion$1=
        permisos.solicitudEvaluacionCorneal.PermisoTabla[0];
     // obj.permisosTabla.push(
     //   permisos.solicitudEvaluacionCorneal.PermisoTabla[0]
     // );
    }

    if (obj.configurarTablasConjuntos) obj.configurarTablasConjuntos();
  }
  //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

  evtGetUsuarioUltMovRecepcionSolicitudEvaluacionUsuario(
    lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario,
    obj
  ) {
    obj.lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario = lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario;
    obj.actualizar_UsuarioUltMovRecepcionSolicitudEvaluacionUsuario();
  }
  evtGetIdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal(
    lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal,
    obj
  ) {
    obj.lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal = lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal;
    obj.actualizar_IdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal();
  }

  actualizar_UsuarioUltMovRecepcionSolicitudEvaluacionUsuario() {
    if (this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion)
      for (let eleme of this
        .lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario)
        if (
          eleme.id ==
          this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion.id
        ) {
          this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion = eleme;
          break;
        }
  }
  actualizar_IdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal() {
    if (
      this
        .idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion
    )
      for (let eleme of this
        .lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal)
        if (
          eleme.id ==
          this
            .idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion
            .id
        ) {
          this.idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion = eleme;
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
    return this.validosRecepcionSolicitudEvaluacion["id"];
  }
  get validaIds() {
    return this.validosRecepcionSolicitudEvaluacion["id"];
  }
  get validaHoraRecepcion() {
    return this.validosRecepcionSolicitudEvaluacion["horaRecepcion"];
  }
  get validaRegistroTejido() {
    return this.validosRecepcionSolicitudEvaluacion["registroTejido"];
  }
  get validaFechaBaja() {
    return this.validosRecepcionSolicitudEvaluacion["fechaBaja"];
  }
  get validaTejidoCorneaDerecha() {
    return this.validosRecepcionSolicitudEvaluacion["tejidoCorneaDerecha"];
  }
  get validaFechaRegistro() {
    return this.validosRecepcionSolicitudEvaluacion["fechaRegistro"];
  }
  get validaEstatusProceso() {
    return this.validosRecepcionSolicitudEvaluacion["estatusProceso"];
  }
  get validaExpedienteFisico() {
    return this.validosRecepcionSolicitudEvaluacion["expedienteFisico"];
  }
  get validaIdbtcCi() {
    return this.validosRecepcionSolicitudEvaluacion["idbtcCi"];
  }
  get validaTejidoCorneaIzquierda() {
    return this.validosRecepcionSolicitudEvaluacion["tejidoCorneaIzquierda"];
  }
  get validaIdbtcCd() {
    return this.validosRecepcionSolicitudEvaluacion["idbtcCd"];
  }
  get validaFechaActualizacion() {
    return this.validosRecepcionSolicitudEvaluacion["fechaActualizacion"];
  }
  get validaFechaRecepcion() {
    return this.validosRecepcionSolicitudEvaluacion["fechaRecepcion"];
  }
  get validaStatus() {
    return this.validosRecepcionSolicitudEvaluacion["status"];
  }
  get validaUsuarioUltMov() {
    return this.validosRecepcionSolicitudEvaluacion["usuarioUltMov"];
  }
  get validaIdsolicitudEvaluacionCorneal() {
    return this.validosRecepcionSolicitudEvaluacion[
      "idsolicitudEvaluacionCorneal"
    ];
  }

  get validaTodosc() {
    var salida =
      this.validaId &&
      this.validaHoraRecepcion &&
      this.validaRegistroTejido &&
      this.validaFechaBaja &&
      this.validaTejidoCorneaDerecha &&
      this.validaFechaRegistro &&
      this.validaEstatusProceso &&
      this.validaExpedienteFisico &&
      this.validaIdbtcCi &&
      this.validaTejidoCorneaIzquierda &&
      this.validaIdbtcCd &&
      this.validaFechaActualizacion &&
      this.validaFechaRecepcion &&
      this.validaStatus &&
      this.validaUsuarioUltMov &&
      this.validaIdsolicitudEvaluacionCorneal;
    if (salida != this.validaciones) this.validacionesChange.emit(salida);
    return salida;
  }

  obtenerRecepcionSolicitudEvaluaciones(lista, objeto) {
    objeto.lista_recepcionSolicitudEvaluaciones = lista;
    if (lista && lista.length > 0) {
      objeto.recepcionSolicitudEvaluacion.from(lista[0]);
      objeto.evtRecepcionSolicitudEvaluacionSeleccionado(
        objeto.recepcionSolicitudEvaluacion
      );
      if (objeto.configuarCombosObjetos) objeto.configuarCombosObjetos();
    }
  }
  evn_lazy_recepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion, objeto) {
    objeto.solicitudEvaluacionCorneal = recepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal;
    (objeto.solicitudEvaluacionCorneal.datosProcuracionCorneal);

    objeto.enableIzquierda = null;
    objeto.enableDerecha = null;
    objeto.solicitudEvaluacionCorneal.datosProcuracionCorneal.forEach(element => {
      if (element.tipo === 1) {
        objeto.enableIzquierda = true;
      }
      if (element.tipo === 2) {
         objeto.enableDerecha = true;
      }
    });

    objeto.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
    objeto.recepcionSolicitudEvaluacionChange.emit(
      objeto.recepcionSolicitudEvaluacion
    );
    objeto.configuarCombosObjetos();
    objeto.recepcionSolicitudEvaluacionLazy = true;
  }
  /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
  get datosReporteRecepcionSolicitudEvaluacionWord() {
    return !(
      this.recepcionSolicitudEvaluacionActualizar &&
      this.recepcionSolicitudEvaluacionLazy &&
      this.globalesService.preporteWord(this, "recepcionSolicitudEvaluacion")
    );
  }
  get datosReporteRecepcionSolicitudEvaluacionExcel() {
    return !(
      this.recepcionSolicitudEvaluacionActualizar &&
      this.recepcionSolicitudEvaluacionLazy &&
      this.globalesService.preporteExcel(this, "recepcionSolicitudEvaluacion")
    );
  }
  get datosReporteRecepcionSolicitudEvaluacionPdf() {
    return !(
      this.recepcionSolicitudEvaluacionActualizar &&
      this.recepcionSolicitudEvaluacionLazy &&
      this.globalesService.preportePdf(this, "recepcionSolicitudEvaluacion")
    );
  }
  reporteRecepcionSolicitudEvaluacionExcel(form: any) {
    var nombre: string = "RecepcionSolicitudEvaluacion.xlsx";
    var path: string = "file/reporteExcel";
    var parametros = {};
    parametros["entradas"] = {
      recepcionSolicitudEvaluacion: this.recepcionSolicitudEvaluacion
    };
    parametros["plantilla"] = "RecepcionSolicitudEvaluacion.xlsx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteRecepcionSolicitudEvaluacionWord(form: any) {
    var nombre: string = "RecepcionSolicitudEvaluacion.docx";
    var path: string = "file/reporteWord";
    var parametros = {};
    parametros["entradas"] = {
      recepcionSolicitudEvaluacion: this.recepcionSolicitudEvaluacion
    };
    parametros["plantilla"] = "RecepcionSolicitudEvaluacion.docx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteRecepcionSolicitudEvaluacionPdf(form: any) {
    var nombre: string = "RecepcionSolicitudEvaluacion.docx";
    var path: string = "file/reportePdf";
    var parametros = {};
    parametros["entradas"] = {
      recepcionSolicitudEvaluacion: this.recepcionSolicitudEvaluacion
    };
    parametros["plantilla"] = "RecepcionSolicitudEvaluacion.docx";
    parametros["salida"] = "RecepcionSolicitudEvaluacion.pdf";
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

  accionesBuscar() {
    this.accion = 1;
    this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
    this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionCancelar = true;
  }
  buscarRecepcionSolicitudEvaluacionFront(form: any) {
    this.accionesBuscar();
    var vrecepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
    vrecepcionSolicitudEvaluacion.from(this.recepcionSolicitudEvaluacion);
    this.configuracionRecepcionSolicitudEvaluacion = new ConfigurarRecepcionSolicitudEvaluacion();
    this.configuracionRecepcionSolicitudEvaluacion.permisosTabla = {
      tabla: "recepcionSolicitudEvaluacion",
      permiso: 8
    };
    this.configuracionRecepcionSolicitudEvaluacion.titulo =
      "Buscar " + this.permisosTabla.etiqueta;
    this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta = vrecepcionSolicitudEvaluacion;
    this.permisosacciones();
    $("#buscarRecepcionSolicitudEvaluacion_" + this.nombre).modal();
  }
  buscarRecepcionSolicitudEvaluacionBack(
    recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion
  ) {
    this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesByDto(
      recepcionSolicitudEvaluacion,
      this.eventoSrvRecepcionSolicitudEvaluacionBuscar,
      this
    );
  }
  eventoSrvRecepcionSolicitudEvaluacionBuscar(lista, objeto) {
    objeto.lista_recepcionSolicitudEvaluaciones = lista;
    if (lista && lista.length > 0) {
      objeto.recepcionSolicitudEvaluacion = lista[0];
      objeto.recepcionSolicitudEvaluacionLazy = false;
      objeto.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(
        objeto.recepcionSolicitudEvaluacion,
        objeto.evn_lazy_recepcionSolicitudEvaluacion,
        objeto
      );
    }
  }
  guardarRecepcionSolicitudEvaluacionFront(form: any) {
    this.accion = 5; // ********************************************************************************************** maquina
    this.guardarRecepcionSolicitudEvaluacionBack(
      this.recepcionSolicitudEvaluacion
    );
    this.accionesBuscar(); // ********************************************************************************* maquina
    this.permisosacciones();
  }
  guardarRecepcionSolicitudEvaluacionBack(
    recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion
  ) {
    if (recepcionSolicitudEvaluacion.usuarioUltMov == null)
      recepcionSolicitudEvaluacion.usuarioUltMov = this.globalesService.dameUsuario();
    if (
      recepcionSolicitudEvaluacion.status == null ||
      recepcionSolicitudEvaluacion.status == ""
    )
      recepcionSolicitudEvaluacion.status = 1;
    this.recepcionSolicitudEvaluacion_service.guardarRecepcionSolicitudEvaluacion(
      recepcionSolicitudEvaluacion,
      this.eventoSrvRecepcionSolicitudEvaluacionGuardar,
      this
    );
  }
  eventoSrvRecepcionSolicitudEvaluacionGuardar(
    recepcionSolicitudEvaluacion,
    obj
  ) {
    obj.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
    bootbox.alert("Datos guardados con éxito");
    var aux: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
    aux.from(recepcionSolicitudEvaluacion);
    obj.recepcionSolicitudEvaluacionChange.emit(aux);
    obj.recepcionSolicitudEvaluacionTablaChange.emit(aux);
    obj.recepcionSolicitudEvaluacionLazy = false;
    obj.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(
      obj.recepcionSolicitudEvaluacion,
      obj.evn_lazy_recepcionSolicitudEvaluacion,
      obj
    );
    obj.accionesActualizar();
  }
  actualizarRecepcionSolicitudEvaluacionFront(form: any) {
    this.accion = 3; // ************************************************************************************* maquina
    this.actualizarRecepcionSolicitudEvaluacionBack(
      this.recepcionSolicitudEvaluacion
    );
    this.accionesBuscar(); // ***************************************************************************** maquina
    this.permisosacciones();
  }
  actualizarRecepcionSolicitudEvaluacionBack(
    recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion
  ) {
    //recepcionSolicitudEvaluacion.usuarioUltMov = this.globalesService.dameUsuario();
    this.recepcionSolicitudEvaluacion_service.actualizarRecepcionSolicitudEvaluacion(
      recepcionSolicitudEvaluacion,
      this.eventoSrvRecepcionSolicitudEvaluacionActualizar,
      this
    );
  }
  eventoSrvRecepcionSolicitudEvaluacionActualizar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos actualizados con éxito");
      var aux: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.recepcionSolicitudEvaluacionLazy = false;
      obj.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(
        obj.recepcionSolicitudEvaluacion,
        obj.evn_lazy_recepcionSolicitudEvaluacion,
        obj
      );
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
      aux.from(obj.recepcionSolicitudEvaluacion);
      obj.recepcionSolicitudEvaluacionChange.emit(aux);
      obj.recepcionSolicitudEvaluacionTablaChange.emit(aux);
      obj.accionesActualizar();
    }
  }
  eliminarRecepcionSolicitudEvaluacionFront(form: any) {
    this.accion = 4;
    this.eliminarRecepcionSolicitudEvaluacionBack(
      this.recepcionSolicitudEvaluacion
    );
    this.permisosacciones();
    this.accionesBuscar();
  }
  eliminarRecepcionSolicitudEvaluacionBack(
    recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion
  ) {
    recepcionSolicitudEvaluacion.usuarioUltMov = this.globalesService.dameUsuario();
    this.recepcionSolicitudEvaluacion_service.eliminarRecepcionSolicitudEvaluacion(
      recepcionSolicitudEvaluacion,
      this.eventoSrvRecepcionSolicitudEvaluacionEliminar,
      this
    );
  }
  eventoSrvRecepcionSolicitudEvaluacionEliminar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos eliminados con éxito");
      obj.recepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
      obj.recepcionSolicitudEvaluacionChange.emit(
        obj.recepcionSolicitudEvaluacion
      );
      obj.recepcionSolicitudEvaluacionTablaChange.emit(
        obj.recepcionSolicitudEvaluacion
      );
      obj.limpiarCampos();
    }
  }
  cancelarRecepcionSolicitudEvaluacionFront(form: any) {
    this.accion = 6;
    this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
    this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = true;
    this.permisosacciones();
  }
  nuevoRecepcionSolicitudEvaluacionFront(form: any) {
    this.accion = 2;
    bootbox.confirm({
      message: "¿Deseas limpiar los campos de ingreso?",
      buttons: {
        confirm: {
          label: "Si",
          className: "btn-success"
        },
        cancel: {
          label: "No",
          className: "btn-danger"
        }
      },
      callback: function(result) {
        if (result) this.limpiarCampos();
        this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
        this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionCancelar = true;
      }.bind(this)
    });
  }

  configuarCombosObjetos() {
    this.lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario = [];
/*     this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovRecepcionSolicitudEvaluacionUsuario,
      this
    );
    this.lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal = [];
    this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(
      this
        .evtGetIdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal,
      this
    ); */
  }
  configurarTablasConjuntos() {}

  accionesActualizar() {
    this.accion = 7;
    this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionGuardar = false;
    this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = this.recepcionSolicitudEvaluacionCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
  }
  evtRecepcionSolicitudEvaluacionSeleccionado(recepcionSolicitudEvaluacion) {
    this.recepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
    this.recepcionSolicitudEvaluacion.from(recepcionSolicitudEvaluacion);
    this.recepcionSolicitudEvaluacionLazy = false;
    this.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(
      this.recepcionSolicitudEvaluacion,
      this.evn_lazy_recepcionSolicitudEvaluacion,
      this
    );
    this.accion = 7;
    this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionGuardar = false;
    this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = this.recepcionSolicitudEvaluacionCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
    $("#buscarRecepcionSolicitudEvaluacion_" + this.nombre).modal("hide");
  }
  ngOnInit() {
    this.accion = 0; // *********************************************************************************************************** maquina
    this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false; // ******************** maquina
    this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = true; // ************************************************************************************* maquina
    this.permisosacciones();
    this.usuarioLogueado = this.globalesService.dameUsuario();
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    if (id && !this.viewModeEvaluacion) {
      this.recepcionSolicitudEvaluacion.id = id;
      this.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(
        this.recepcionSolicitudEvaluacion,
        this.evn_lazy_recepcionSolicitudEvaluacion,
        this
      );
    }
  }

  permisosacciones() {
    if (this.recepcionSolicitudEvaluacionBuscar)
      this.recepcionSolicitudEvaluacionBuscar = this.globalesService.pbuscar(
        this,
        "recepcionSolicitudEvaluacion"
      );
    if (this.recepcionSolicitudEvaluacionActualizar)
      this.recepcionSolicitudEvaluacionActualizar =
        this.globalesService.pacutalizar(
          this,
          "recepcionSolicitudEvaluacion"
        ) && this.globalesService.pbuscar(this, "recepcionSolicitudEvaluacion");
    if (this.recepcionSolicitudEvaluacionEliminar)
      this.recepcionSolicitudEvaluacionEliminar =
        this.globalesService.peliminar(this, "recepcionSolicitudEvaluacion") &&
        this.globalesService.pbuscar(this, "recepcionSolicitudEvaluacion");
    if (this.recepcionSolicitudEvaluacionAgregar)
      this.recepcionSolicitudEvaluacionAgregar = this.globalesService.pagregar(
        this,
        "recepcionSolicitudEvaluacion"
      );
  }
  permisosaccionesInicio() {
    this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false; // *************************** maquina
    this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = true; // ************************************************************************************* maquina
    this.accion = 0; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  limpiarCampos() {
    this.recepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();

    this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion = new Usuario();
    this.idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion = new SolicitudEvaluacionCorneal();

    this.recepcionSolicitudEvaluacionChange.emit(
      this.recepcionSolicitudEvaluacion
    );
    this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false; // *************************** maquina
    this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = true; // ************************************************************************************* maquina
    this.accion = 6; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }

  doSave() {
    if (this.recepcionSolicitudEvaluacion.expedienteFisico === true) {
      this.recepcionSolicitudEvaluacion.expedienteFisico = 1;
    } else if (this.recepcionSolicitudEvaluacion.expedienteFisico === false) {
      this.recepcionSolicitudEvaluacion.expedienteFisico = 0;
    }

    if (this.recepcionSolicitudEvaluacion.registroTejido === true) {
      this.recepcionSolicitudEvaluacion.registroTejido = 1;
    } else if (this.recepcionSolicitudEvaluacion.registroTejido === false) {
      this.recepcionSolicitudEvaluacion.registroTejido = 0;
    }

    if (this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === true) {
      this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda = 1;
    } else if (
      this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === false
    ) {
      this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda = 0;
    }

    if (this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === true) {
      this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha = 1;
    } else if (
      this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === false
    ) {
      this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha = 0;
    }
    this.usuarioLogueado = this.globalesService.dameUsuario();
    this.recepcionSolicitudEvaluacion.idUsuarioRecibe = {
      id: this.usuarioLogueado.id
    };
    this.recepcionSolicitudEvaluacion.usuarioUltMov = {};
    this.recepcionSolicitudEvaluacion.usuarioUltMov.id = this.usuarioLogueado.id;
    this.recepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion( this.recepcionSolicitudEvaluacion);
    this.actualizarRecepcionSolicitudEvaluacionBack(
      this.recepcionSolicitudEvaluacion
    );
  }

  evn_lazy_solicitudEvaluacionCorneal(solicitudEvaluacionCorneal, objeto) {
    objeto.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
    objeto.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionByIdsolicitudEvaluacionCorneal(
      objeto.solicitudEvaluacionCorneal,
      objeto.evn_lazy_recepcionSolicitudEvaluacion,
      objeto
    );
    // objeto.solicitudEvaluacionCornealChange.emit(
    //   objeto.solicitudEvaluacionCorneal
    // );
    // objeto.configuarCombosObjetos();
    // objeto.solicitudEvaluacionCornealLazy = true;
  }

  doGenerarIdBTC() {
    if (this.recepcionSolicitudEvaluacion.expedienteFisico === true) {
      this.recepcionSolicitudEvaluacion.expedienteFisico = 1;
    } else if (this.recepcionSolicitudEvaluacion.expedienteFisico === false) {
      this.recepcionSolicitudEvaluacion.expedienteFisico = 0;
    }

    if (this.recepcionSolicitudEvaluacion.registroTejido === true) {
      this.recepcionSolicitudEvaluacion.registroTejido = 1;
    } else if (this.recepcionSolicitudEvaluacion.registroTejido === false) {
      this.recepcionSolicitudEvaluacion.registroTejido = 0;
    }

    if (this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === true) {
      this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda = 1;
    } else if (
      this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === false
    ) {
      this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda = 0;
    }

    if (this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === true) {
      this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha = 1;
    } else if (
      this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === false
    ) {
      this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha = 0;
    }
    if ( (this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === 0 || this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === null)
      &&  (this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === 0 || this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === null)){
      bootbox.alert('Es necesario seleccionar un tejido para generar ID BTC');
      return ;
    }
    this.recepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal( this.solicitudEvaluacionCorneal);
    this.recepcionSolicitudEvaluacion.usuarioUltMov = {};
    this.recepcionSolicitudEvaluacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
    this.recepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion(this.recepcionSolicitudEvaluacion);
    this.recepcionSolicitudEvaluacion_service.generarIdsBTC(
      this.recepcionSolicitudEvaluacion,
      this.eventoSrvGenerarIdsBTC,
      this
    );
  }

  eventoSrvGenerarIdsBTC(retorno, obj) {
    if (retorno) {
      bootbox.alert("Los ids se han generado con éxito");
      var aux: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.recepcionSolicitudEvaluacionLazy = false;
      obj.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(
        obj.recepcionSolicitudEvaluacion,
        obj.evn_lazy_recepcionSolicitudEvaluacion,
        obj
      );
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
      aux.from(obj.recepcionSolicitudEvaluacion);
      obj.recepcionSolicitudEvaluacionChange.emit(aux);
      obj.recepcionSolicitudEvaluacionTablaChange.emit(aux);
      obj.accionesActualizar();
    }
  }

  doImprimirEtiqueta() {
    if (this.recepcionSolicitudEvaluacion.idbtcCd && this.recepcionSolicitudEvaluacion.idbtcCi) {
      this.doImprimirAmbas();
    } else if(this.recepcionSolicitudEvaluacion.idbtcCd) {
      this.imprimirDerecha();
    } else if(this.recepcionSolicitudEvaluacion.idbtcCi) {
      this.imprimirIzquierda();
    }
  }

  imprimirIzquierda(){
    bootbox.dialog({
      message: "¿Que etiqueta desea imprimir?",
      buttons: {
        ok: {
          label: "Córnea Izquierda",
          className: "btn-primary",
          callback: function() {
            var path: string = 'file/etiquetaBTC';
            var otros: string = 'Etiquetas';
            var parametros: any = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 1 };
            var nombre: string = 'Etiquetas.pdf';
            this.fileservice.downloadFile(nombre, otros, path, parametros);
          }.bind(this)
        }
      }
    });
  }

  imprimirDerecha(){
    bootbox.dialog({
      message: "¿Que etiqueta desea imprimir?",
      buttons: {
        ok: {
          label: "Córnea Derecha",
          className: "btn-primary",
          callback: function() {
            var path: string = 'file/etiquetaBTC';
            var otros: string = 'Etiquetas';
            var parametros: any = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 2 };
            var nombre: string = 'Etiquetas.pdf';
            this.fileservice.downloadFile(nombre, otros, path, parametros);
          }.bind(this)
        }
      }
    });
  }

  doImprimirAmbas() {
    bootbox.dialog({
      message: "¿Que etiqueta desea imprimir?",
      buttons: {
        confirm: {
          label: "Córnea Derecha",
          className: "btn-primary",
          callback: function() {
            var path: string = 'file/etiquetaBTC';
            var otros: string = 'Etiquetas';
            var parametros: any = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 2 };
            var nombre: string = 'Etiquetas.pdf';
            this.fileservice.downloadFile(nombre, otros, path, parametros);
          }.bind(this)
        },
        ok: {
          label: "Córnea Izquierda",
          className: "btn-primary",
          callback: function() {
            var path: string = 'file/etiquetaBTC';
            var otros: string = 'Etiquetas';
            var parametros: any = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 1 };
            var nombre: string = 'Etiquetas.pdf';
            this.fileservice.downloadFile(nombre, otros, path, parametros);
          }.bind(this)
        },
        cancel: {
          label: "Ambas",
          className: "btn-primary",
          callback: function() {
            var path: string = 'file/etiquetaBTC';
            var otros: string = 'Etiquetas';
            var nombre: string = 'Etiquetas.pdf';
            var parametros: any = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 1 };
            this.fileservice.downloadFile(nombre, otros, path, parametros);
            var parametros: any = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 2};
            this.fileservice.downloadFile(nombre, otros, path, parametros);
          }.bind(this)
        }
      }
    });
  }
}
