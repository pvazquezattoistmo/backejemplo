import { AlmacenEvaluacionService } from "./../../almacen-evaluaciones/shared/almacen-evaluacion.service";
import { DesgloseCorneaService } from "./../../desglose-corneas/shared/desglose-cornea.service";
import { DesgloseCornea } from "./../../desglose-corneas/shared/desglose-cornea";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { ViewChild, NgZone, EventEmitter } from "@angular/core";
import { Component, OnInit, Input, Output } from "@angular/core";
import { GlobalesService } from "../../shared/globales.service";
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { CoreService } from "../../shared/core.service";
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from "../../shared/file.service";
import { ConteoCelular } from "../shared/conteo-celular";
import { ConteoCelularService } from "../shared/conteo-celular.service";
import { ConfigurarConteoCelular } from "../shared/configurar-conteo-celular";
import { Usuario } from "../../usuarios/shared/usuario";
import { UsuarioService } from "../../usuarios/shared/usuario.service";
import { UsuarioBtcService } from "../../usuario-btcs/shared/usuario-btc.service";
import { UsuarioBtc } from "../../usuario-btcs/shared/usuario-btc";
import { PerfilRedIsssteService } from "../../perfil-red-issstes/shared/perfil-red-issste.service";
import { PerfilRedIssste } from "../../perfil-red-issstes/shared/perfil-red-issste";
////import { PerfilBtcService } from '../../perfil-btcs/shared/perfil-btc.service';
//import { PerfilBtc } from '../../perfil-btcs/shared/perfil-btc';
import { HospitalService } from "../../hospitales/shared/hospital.service";
import { Hospital } from "../../hospitales/shared/hospital";
import { EntidadFederativaService } from "../../entidad-federativas/shared/entidad-federativa.service";
import { EntidadFederativa } from "../../entidad-federativas/shared/entidad-federativa";
import { PerfilService } from "../../perfiles/shared/perfil.service";
import { Perfil } from "../../perfiles/shared/perfil";
import { EvaluacionSolicitud } from "../../evaluacion-solicitudes/shared/evaluacion-solicitud";
import { EvaluacionSolicitudService } from "../../evaluacion-solicitudes/shared/evaluacion-solicitud.service";
import { RecepcionSolicitudEvaluacionService } from "../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service";
import { RecepcionSolicitudEvaluacion } from "../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion";
import { SolicitudEvaluacionCornealService } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service";
import { SolicitudEvaluacionCorneal } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal";
import { CausaMuerteService } from "../../causa-muertes/shared/causa-muerte.service";
import { CausaMuerte } from "../../causa-muertes/shared/causa-muerte";
import { ActivatedRoute } from "@angular/router";
import { AlmacenEvaluacion } from "../../almacen-evaluaciones/shared/almacen-evaluacion";
import { align } from "@progress/kendo-drawing";

declare var $: any;
declare var bootbox: any;
@Component({
  selector: "app-conteo-celular-crud",
  templateUrl: "./conteo-celular-crud.component.html",
  styleUrls: ["./conteo-celular-crud.component.css"],
  providers: [
    GlobalesService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    FileService,
    ConteoCelularService,
    UsuarioService,
    EntidadFederativaService,
    PerfilRedIsssteService,
    //                PerfilBtcService,
    HospitalService,
    UsuarioBtcService,
    PerfilService,
    EvaluacionSolicitudService,
    CausaMuerteService,
    SolicitudEvaluacionCornealService,
    RecepcionSolicitudEvaluacionService,
    DesgloseCorneaService
  ]
})
export class ConteoCelularCrudComponent implements OnInit {
  public opcionConteoCelular = 0;
  public validosConteoCelular: any = {
    id: false,
    idnumeroCelula: false,
    fechaBaja: false,
    discontinuidad: false,
    normalMenor33: false,
    numeroCampo: false,
    gutta: false,
    hexagonalidad: false,
    responsableMicroscopio: false,
    paquimetria: false,
    homogeneidad: false,
    zonaCelular: false,
    cvtamano: false,
    otraDescripcion: true,
    plemorfismo: false,
    numeroCelular: false,
    otra: false,
    pliegue: false,
    fechaRegistro: false,
    mayor60: false,
    deposito: false,
    observacionCd: false,
    idpaquimetria: false,
    valoracionCi: false,
    polimegatismo: false,
    fechaActualizacion: false,
    estriaRotura: false,
    valoracionFinalEndotelioCd: false,
    valoracionCd: false,
    valoracionFinalEndotelioCi: false,
    status: false,
    usuarioUltMov: false,
    idevaluacionSolicitud: false
  };

  @Input() ocultarConjuntosConteoCelular: boolean = false;
  @Input() idEvaluacion = null;
  @Input() nombre: string = "";
  public permisosTabla = { tabla: "conteoCelular", permiso: 0, etiqueta: "" };
  public permisosAtributos = [];
  public permisosConjuntos = [];
  //  public perfil: Perfil;
  public accion = 0;
  usuariologueado;
  public conteoCelularLazy: boolean = false;
  public conteoCelularPermisos: boolean = false;
  @Input() public validaciones: boolean = false;
  @Output() validacionesChange = new EventEmitter<boolean>();
  public perfil: Perfil;
  @Input() public conteoCelular: ConteoCelular = new ConteoCelular();
  @Output() conteoCelularChange = new EventEmitter<ConteoCelular>();
  @Output() conteoCelularTablaChange = new EventEmitter<ConteoCelular>();
  public lista_conteoCelulares: ConteoCelular[] = [];
  public configuracionConteoCelular: ConfigurarConteoCelular;
  public conteoCelularBuscar: boolean;
  public conteoCelularSeleccion: boolean;
  public conteoCelularAgregar: boolean;
  public conteoCelularActualizar: boolean;
  public conteoCelularEliminar: boolean;
  public conteoCelularGuardar: boolean;
  public conteoCelularCancelar: boolean;
  public usuarioUltMovConteoCelularUsuarioEleccion: Usuario = new Usuario();
  public lista_usuarioUltMovConteoCelularUsuario: Usuario[] = [];
  public usuarioUltMovConteoCelularUsuarioEditar: boolean = false;
  public idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion: EvaluacionSolicitud = new EvaluacionSolicitud();
  public lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud: EvaluacionSolicitud[] = [];
  public idevaluacionSolicitudConteoCelularEvaluacionSolicitudEditar: boolean = false;
  public evaluacionSolicitud: EvaluacionSolicitud = new EvaluacionSolicitud();
  @Input() public viewModeEvaluacion: boolean;
  @Input() public conteoCelularDerecha: ConteoCelular = new ConteoCelular();
  desgloseCorneaIzquierda: DesgloseCornea = new DesgloseCornea();
  desgloseCorneaDerecha: DesgloseCornea = new DesgloseCornea();
  @Input() listaDesgloseCorneaIzquierda: DesgloseCornea[] = [];
  @Input() listaDesgloseCorneaDerecha: DesgloseCornea[] = [];
  public modalActive = false;
  public tipoNotificacion: number;

  get conteoCelularOcultarConjuntos() {
    if (this.ocultarConjuntosConteoCelular) return true;
    return !this.conteoCelularActualizar;
  }

  ngOnChanges(changes) {
    if (changes.idEvaluacion && changes.idEvaluacion.currentValue != null) {
      this.viewModeEvaluacion = true;
      this.actualizaConteo(changes.idEvaluacion.currentValue);
    }

    if (
      changes.conteoCelular &&
      changes.conteoCelular.currentValue == null &&
      this.conteoCelular == null
    )
      this.conteoCelular = new ConteoCelular();
    else {
      var aux: ConteoCelular = new ConteoCelular();
      if (this.conteoCelular) aux.from(this.conteoCelular);
      if (aux.isOk && aux.isOk()) {
        this.accion = 7;
        this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularSeleccion = this.conteoCelularGuardar = false;
        this.conteoCelularActualizar = this.conteoCelularEliminar = this.conteoCelularCancelar = true;
        this.permisosacciones();
        var thiss: any;
        thiss = this;
        if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
      } else {
        this.accion = 2;
        this.conteoCelularSeleccion = this.conteoCelularAgregar = this.conteoCelularBuscar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
        this.conteoCelularGuardar = this.conteoCelularCancelar = true;
      }
    }
  }
  obtenerPermisos() {
    var id_expe = -1;
    var tablas = [
      "conteoCelular",
      "usuario",
      "usuarioBtc",
      "perfilRedIssste",
      "perfilBtc",
      "hospital",
      "entidadFederativa",
      "perfil",
      "evaluacionSolicitud",
      "recepcionSolicitudEvaluacion",
      "solicitudEvaluacionCorneal",
      "causaMuerte"
    ];
    var parametros: any = {
      id_usu: this.usuariologueado.id,
      tablas: tablas,
      id_exp: id_expe
    };
    this.conteoCelularPermisos = false;
    this.coreService.permisos(parametros, this.evtCorePermisos, this);
  }

  constructor(
    public globalesService: GlobalesService,
    public zone: NgZone,
    public fileservice: FileService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coreService: CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public conteoCelular_service: ConteoCelularService,
    public usuario_service: UsuarioService,
    public usuarioBtc_service: UsuarioBtcService,
    public perfilRedIssste_service: PerfilRedIsssteService,
    //                public perfilBtc_service: PerfilBtcService,

    public hospital_service: HospitalService,
    public entidadFederativa_service: EntidadFederativaService,
    public perfil_service: PerfilService,
    public evaluacionSolicitud_service: EvaluacionSolicitudService,
    public recepcionSolicitudEvaluacion_service: RecepcionSolicitudEvaluacionService,
    public solicitudEvaluacionCorneal_service: SolicitudEvaluacionCornealService,
    public causaMuerte_service: CausaMuerteService,
    public activatedRoute: ActivatedRoute,
    public desgloseCorneaService: DesgloseCorneaService,
    public almacenEvaluacionService: AlmacenEvaluacionService
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
    this.conteoCelularSeleccion = this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
    this.configuracionConteoCelular = new ConfigurarConteoCelular();
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovConteoCelularUsuario,
      this
    );
    this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(
      this.evtGetIdevaluacionSolicitudConteoCelularEvaluacionSolicitud,
      this
    );

    this.limpiarCampos();
  }

  //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
  evtCorePermisos(permisos, obj) {
    obj.conteoCelularPermisos = true;
    if (
      permisos &&
      permisos.conteoCelular &&
      permisos.conteoCelular.PermisoAtributo &&
      permisos.conteoCelular.PermisoAtributo.length > 0
    ) {
      obj.permisosAtributos = permisos.conteoCelular.PermisoAtributo;
    } else {
      obj.usuariologueado = undefined;
    }
    if (
      permisos &&
      permisos.conteoCelular &&
      permisos.conteoCelular.PermisoConjunto &&
      permisos.conteoCelular.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos = permisos.conteoCelular.PermisoConjunto;
    }
    if (
      permisos &&
      permisos.conteoCelular &&
      permisos.conteoCelular.PermisoTabla &&
      permisos.conteoCelular.PermisoTabla.length > 0
    ) {
      obj.permisosTabla = permisos.conteoCelular.PermisoTabla[0];
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
      permisos.evaluacionSolicitud &&
      permisos.evaluacionSolicitud.PermisoAtributo &&
      permisos.evaluacionSolicitud.PermisoAtributo.length > 0
    ) {
     //obj.configuracion$1=
        permisos.evaluacionSolicitud.PermisoAtributo;
      obj.permisosAtributos.push(permisos.evaluacionSolicitud.PermisoAtributo);
    }
    if (
      permisos &&
      permisos.evaluacionSolicitud &&
      permisos.evaluacionSolicitud.PermisoAtributo &&
      permisos.evaluacionSolicitud.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos.push(permisos.evaluacionSolicitud.PermisoConjunto);
    }
    if (
      permisos &&
      permisos.evaluacionSolicitud &&
      permisos.evaluacionSolicitud.PermisoTabla &&
      permisos.evaluacionSolicitud.PermisoTabla.length > 0
    ) {
     //obj.configuracion$1=
        permisos.evaluacionSolicitud.PermisoTabla[0];
     // obj.permisosTabla.push(permisos.evaluacionSolicitud.PermisoTabla[0]);
    }

    if (obj.configurarTablasConjuntos) obj.configurarTablasConjuntos();
  }
  //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

  evtGetUsuarioUltMovConteoCelularUsuario(
    lista_usuarioUltMovConteoCelularUsuario,
    obj
  ) {
    obj.lista_usuarioUltMovConteoCelularUsuario = lista_usuarioUltMovConteoCelularUsuario;
    obj.actualizar_UsuarioUltMovConteoCelularUsuario();
  }
  evtGetIdevaluacionSolicitudConteoCelularEvaluacionSolicitud(
    lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud,
    obj
  ) {
    obj.lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud = lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud;
    obj.actualizar_IdevaluacionSolicitudConteoCelularEvaluacionSolicitud();
  }

  actualizar_UsuarioUltMovConteoCelularUsuario() {
    if (this.usuarioUltMovConteoCelularUsuarioEleccion)
      for (let eleme of this.lista_usuarioUltMovConteoCelularUsuario)
        if (eleme.id == this.usuarioUltMovConteoCelularUsuarioEleccion.id) {
          this.usuarioUltMovConteoCelularUsuarioEleccion = eleme;
          break;
        }
  }
  actualizar_IdevaluacionSolicitudConteoCelularEvaluacionSolicitud() {
    if (this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion)
      for (let eleme of this
        .lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud)
        if (
          eleme.id ==
          this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion.id
        ) {
          this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion = eleme;
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
    return this.validosConteoCelular["id"];
  }
  get validaIds() {
    return this.validosConteoCelular["id"];
  }
  get validaIdnumeroCelula() {
    return this.validosConteoCelular["idnumeroCelula"];
  }
  get validaFechaBaja() {
    return this.validosConteoCelular["fechaBaja"];
  }
  get validaDiscontinuidad() {
    return this.validosConteoCelular["discontinuidad"];
  }
  get validaNormalMenor33() {
    return this.validosConteoCelular["normalMenor33"];
  }
  get validaNumeroCampo() {
    return this.validosConteoCelular["numeroCampo"];
  }
  get validaGutta() {
    return this.validosConteoCelular["gutta"];
  }
  get validaHexagonalidad() {
    return this.validosConteoCelular["hexagonalidad"];
  }
  get validaResponsableMicroscopio() {
    return this.validosConteoCelular["responsableMicroscopio"];
  }
  get validaPaquimetria() {
    return this.validosConteoCelular["paquimetria"];
  }
  get validaHomogeneidad() {
    return this.validosConteoCelular["homogeneidad"];
  }
  get validaZonaCelular() {
    return this.validosConteoCelular["zonaCelular"];
  }
  get validaCvtamano() {
    return this.validosConteoCelular["cvtamano"];
  }
  get validaOtraDescripcion() {
    return this.validosConteoCelular["otraDescripcion"];
  }
  get validaPlemorfismo() {
    return this.validosConteoCelular["plemorfismo"];
  }
  get validaNumeroCelular() {
    return this.validosConteoCelular["numeroCelular"];
  }
  get validaOtra() {
    return this.validosConteoCelular["otra"];
  }
  get validaPliegue() {
    return this.validosConteoCelular["pliegue"];
  }
  get validaFechaRegistro() {
    return this.validosConteoCelular["fechaRegistro"];
  }
  get validaMayor60() {
    return this.validosConteoCelular["mayor60"];
  }
  get validaDeposito() {
    return this.validosConteoCelular["deposito"];
  }
  get validaObservacionCd() {
    return this.validosConteoCelular["observacionCd"];
  }
  get validaIdpaquimetria() {
    return this.validosConteoCelular["idpaquimetria"];
  }
  get validaValoracionCi() {
    return this.validosConteoCelular["valoracionCi"];
  }
  get validaPolimegatismo() {
    return this.validosConteoCelular["polimegatismo"];
  }
  get validaFechaActualizacion() {
    return this.validosConteoCelular["fechaActualizacion"];
  }
  get validaEstriaRotura() {
    return this.validosConteoCelular["estriaRotura"];
  }
  get validaValoracionFinalEndotelioCd() {
    return this.validosConteoCelular["valoracionFinalEndotelioCd"];
  }
  get validaValoracionCd() {
    return this.validosConteoCelular["valoracionCd"];
  }
  get validaValoracionFinalEndotelioCi() {
    return this.validosConteoCelular["valoracionFinalEndotelioCi"];
  }
  get validaStatus() {
    return this.validosConteoCelular["status"];
  }
  get validaUsuarioUltMov() {
    return this.validosConteoCelular["usuarioUltMov"];
  }
  get validaIdevaluacionSolicitud() {
    return this.validosConteoCelular["idevaluacionSolicitud"];
  }

  get validaTodosc() {
    var salida =
      this.validaId &&
      this.validaIdnumeroCelula &&
      this.validaFechaBaja &&
      this.validaDiscontinuidad &&
      this.validaNormalMenor33 &&
      this.validaNumeroCampo &&
      this.validaGutta &&
      this.validaHexagonalidad &&
      this.validaResponsableMicroscopio &&
      this.validaPaquimetria &&
      this.validaHomogeneidad &&
      this.validaZonaCelular &&
      this.validaCvtamano &&
      this.validaOtraDescripcion &&
      this.validaPlemorfismo &&
      this.validaNumeroCelular &&
      this.validaOtra &&
      this.validaPliegue &&
      this.validaFechaRegistro &&
      this.validaMayor60 &&
      this.validaDeposito &&
      this.validaObservacionCd &&
      this.validaIdpaquimetria &&
      this.validaValoracionCi &&
      this.validaPolimegatismo &&
      this.validaFechaActualizacion &&
      this.validaEstriaRotura &&
      this.validaValoracionFinalEndotelioCd &&
      this.validaValoracionCd &&
      this.validaValoracionFinalEndotelioCi &&
      this.validaStatus &&
      this.validaUsuarioUltMov &&
      this.validaIdevaluacionSolicitud;
    if (salida != this.validaciones) this.validacionesChange.emit(salida);
    return salida;
  }

  obtenerConteoCelulares(lista, objeto) {
    objeto.lista_conteoCelulares = lista;
    if (lista && lista.length > 0) {
      objeto.conteoCelular.from(lista[0]);
      objeto.evtConteoCelularSeleccionado(objeto.conteoCelular);
      if (objeto.configuarCombosObjetos) objeto.configuarCombosObjetos();
    }
  }
  evn_lazy_conteoCelular(conteoCelular, objeto) {
    objeto.conteoCelular = conteoCelular;
    objeto.conteoCelularChange.emit(objeto.conteoCelular);
    objeto.configuarCombosObjetos();
    objeto.conteoCelularLazy = true;
  }
  /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
  get datosReporteConteoCelularWord() {
    return !(
      this.conteoCelularActualizar &&
      this.conteoCelularLazy &&
      this.globalesService.preporteWord(this, "conteoCelular")
    );
  }
  get datosReporteConteoCelularExcel() {
    return !(
      this.conteoCelularActualizar &&
      this.conteoCelularLazy &&
      this.globalesService.preporteExcel(this, "conteoCelular")
    );
  }
  get datosReporteConteoCelularPdf() {
    return !(
      this.conteoCelularActualizar &&
      this.conteoCelularLazy &&
      this.globalesService.preportePdf(this, "conteoCelular")
    );
  }
  reporteConteoCelularExcel(form: any) {
    var nombre: string = "ConteoCelular.xlsx";
    var path: string = "file/reporteExcel";
    var parametros = {};
    parametros["entradas"] = { conteoCelular: this.conteoCelular };
    parametros["plantilla"] = "ConteoCelular.xlsx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteConteoCelularWord(form: any) {
    var nombre: string = "ConteoCelular.docx";
    var path: string = "file/reporteWord";
    var parametros = {};
    parametros["entradas"] = { conteoCelular: this.conteoCelular };
    parametros["plantilla"] = "ConteoCelular.docx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteConteoCelularPdf(form: any) {
    var nombre: string = "ConteoCelular.docx";
    var path: string = "file/reportePdf";
    var parametros = {};
    parametros["entradas"] = { conteoCelular: this.conteoCelular };
    parametros["plantilla"] = "ConteoCelular.docx";
    parametros["salida"] = "ConteoCelular.pdf";
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
    this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
    this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularCancelar = true;
  }
  buscarConteoCelularFront(form: any) {
    this.accionesBuscar();
    var vconteoCelular: ConteoCelular = new ConteoCelular();
    vconteoCelular.from(this.conteoCelular);
    this.configuracionConteoCelular = new ConfigurarConteoCelular();
    this.configuracionConteoCelular.permisosTabla = {
      tabla: "conteoCelular",
      permiso: 8
    };
    this.configuracionConteoCelular.titulo =
      "Buscar " + this.permisosTabla.etiqueta;
    this.configuracionConteoCelular.conteoCelularConsulta = vconteoCelular;
    this.permisosacciones();
    $("#buscarConteoCelular_" + this.nombre).modal();
  }
  buscarConteoCelularBack(conteoCelular: ConteoCelular) {
    this.conteoCelular_service.getConteoCelularesByDto(
      conteoCelular,
      this.eventoSrvConteoCelularBuscar,
      this
    );
  }
  eventoSrvConteoCelularBuscar(lista, objeto) {
    objeto.lista_conteoCelulares = lista;
    if (lista && lista.length > 0) {
      objeto.conteoCelular = lista[0];
      objeto.conteoCelularLazy = false;
      objeto.conteoCelular_service.lazyConteoCelular(
        objeto.conteoCelular,
        objeto.evn_lazy_conteoCelular,
        objeto
      );
    }
  }
  guardarConteoCelularFront(form: any) {
    this.accion = 5; // ********************************************************************************************** maquina
    this.guardarConteoCelularBack(this.conteoCelular);
    this.accionesBuscar(); // ********************************************************************************* maquina
    this.permisosacciones();
  }
  guardarConteoCelularBack(conteoCelular: ConteoCelular) {
    if (conteoCelular.usuarioUltMov == null)
      conteoCelular.usuarioUltMov = this.globalesService.dameUsuario();
    if (conteoCelular.status == null || conteoCelular.status == "")
      conteoCelular.status = 1;
    this.conteoCelular_service.guardarConteoCelular(
      conteoCelular,
      this.eventoSrvConteoCelularGuardar,
      this
    );
  }
  eventoSrvConteoCelularGuardar(conteoCelular, obj) {
    obj.conteoCelular = conteoCelular;
    bootbox.alert("Datos guardados con éxito");
    var aux: ConteoCelular = new ConteoCelular();
    aux.from(conteoCelular);
    obj.conteoCelularChange.emit(aux);
    obj.conteoCelularTablaChange.emit(aux);
    obj.conteoCelularLazy = false;
    obj.conteoCelular_service.lazyConteoCelular(
      obj.conteoCelular,
      obj.evn_lazy_conteoCelular,
      obj
    );
    obj.accionesActualizar();
  }
  actualizarConteoCelularFront(form: any) {
    this.accion = 3; // ************************************************************************************* maquina
    this.actualizarConteoCelularBack(this.conteoCelular);
    this.accionesBuscar(); // ***************************************************************************** maquina
    this.permisosacciones();
  }
  actualizarConteoCelularBack(conteoCelular: ConteoCelular) {
    conteoCelular.usuarioUltMov = this.globalesService.dameUsuario();
    this.conteoCelular_service.actualizarConteoCelular(
      conteoCelular,
      this.eventoSrvConteoCelularActualizar,
      this
    );
  }
  eventoSrvConteoCelularActualizar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos actualizados con éxito");
      var aux: ConteoCelular = new ConteoCelular();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.conteoCelularLazy = false;
      obj.conteoCelular_service.lazyConteoCelular(
        obj.conteoCelular,
        obj.evn_lazy_conteoCelular,
        obj
      );
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
      aux.from(obj.conteoCelular);
      obj.conteoCelularChange.emit(aux);
      obj.conteoCelularTablaChange.emit(aux);
      obj.accionesActualizar();
    }
  }
  eliminarConteoCelularFront(form: any) {
    this.accion = 4;
    this.eliminarConteoCelularBack(this.conteoCelular);
    this.permisosacciones();
    this.accionesBuscar();
  }
  eliminarConteoCelularBack(conteoCelular: ConteoCelular) {
    conteoCelular.usuarioUltMov = this.globalesService.dameUsuario();
    this.conteoCelular_service.eliminarConteoCelular(
      conteoCelular,
      this.eventoSrvConteoCelularEliminar,
      this
    );
  }
  eventoSrvConteoCelularEliminar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos eliminados con éxito");
      obj.conteoCelular = new ConteoCelular();
      obj.conteoCelularChange.emit(obj.conteoCelular);
      obj.conteoCelularTablaChange.emit(obj.conteoCelular);
      obj.limpiarCampos();
    }
  }
  cancelarConteoCelularFront(form: any) {
    this.accion = 6;
    this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
    this.conteoCelularBuscar = this.conteoCelularAgregar = true;
    this.permisosacciones();
  }
  nuevoConteoCelularFront(form: any) {
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
        this.conteoCelularSeleccion = this.conteoCelularAgregar = this.conteoCelularBuscar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
        this.conteoCelularGuardar = this.conteoCelularCancelar = true;
      }.bind(this)
    });
  }

  configuarCombosObjetos() {
    this.lista_usuarioUltMovConteoCelularUsuario = [];
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovConteoCelularUsuario,
      this
    );
    this.lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud = [];
    this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(
      this.evtGetIdevaluacionSolicitudConteoCelularEvaluacionSolicitud,
      this
    );
  }
  configurarTablasConjuntos() {}

  accionesActualizar() {
    this.accion = 7;
    this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularSeleccion = this.conteoCelularGuardar = false;
    this.conteoCelularActualizar = this.conteoCelularEliminar = this.conteoCelularCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
  }
  evtConteoCelularSeleccionado(conteoCelular) {
    this.conteoCelular = new ConteoCelular();
    this.conteoCelular.from(conteoCelular);
    this.conteoCelularLazy = false;
    this.conteoCelular_service.lazyConteoCelular(
      this.conteoCelular,
      this.evn_lazy_conteoCelular,
      this
    );
    this.accion = 7;
    this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularSeleccion = this.conteoCelularGuardar = false;
    this.conteoCelularActualizar = this.conteoCelularEliminar = this.conteoCelularCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
    $("#buscarConteoCelular_" + this.nombre).modal("hide");
  }
  ngOnInit() {
    this.accion = 0; // *********************************************************************************************************** maquina
    this.conteoCelularSeleccion = this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false; // ******************** maquina
    this.conteoCelularBuscar = this.conteoCelularAgregar = true; // ************************************************************************************* maquina
    this.permisosacciones();
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.actualizaConteo(id);
  }
  actualizaConteo(id) {
    if (id != null) {
      this.evaluacionSolicitud.id = id;
      this.evaluacionSolicitud_service.lazyEvaluacionSolicitud(
        this.evaluacionSolicitud,
        this.evn_lazy_evaluacionSolicitud,
        this
      );
    }
  }
  permisosacciones() {
    if (this.conteoCelularBuscar)
      this.conteoCelularBuscar = this.globalesService.pbuscar(
        this,
        "conteoCelular"
      );
    if (this.conteoCelularActualizar)
      this.conteoCelularActualizar =
        this.globalesService.pacutalizar(this, "conteoCelular") &&
        this.globalesService.pbuscar(this, "conteoCelular");
    if (this.conteoCelularEliminar)
      this.conteoCelularEliminar =
        this.globalesService.peliminar(this, "conteoCelular") &&
        this.globalesService.pbuscar(this, "conteoCelular");
    if (this.conteoCelularAgregar)
      this.conteoCelularAgregar = this.globalesService.pagregar(
        this,
        "conteoCelular"
      );
  }
  permisosaccionesInicio() {
    this.conteoCelularSeleccion = this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false; // *************************** maquina
    this.conteoCelularBuscar = this.conteoCelularAgregar = true; // ************************************************************************************* maquina
    this.accion = 0; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  limpiarCampos() {
    this.conteoCelular = new ConteoCelular();

    this.usuarioUltMovConteoCelularUsuarioEleccion = new Usuario();
    this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion = new EvaluacionSolicitud();

    this.conteoCelularChange.emit(this.conteoCelular);
    this.conteoCelularSeleccion = this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false; // *************************** maquina
    this.conteoCelularBuscar = this.conteoCelularAgregar = true; // ************************************************************************************* maquina
    this.accion = 6; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }

  evn_lazy_evaluacionSolicitud(
    evaluacionSolicitud: EvaluacionSolicitud,
    objeto
  ) {
    (evaluacionSolicitud);
    objeto.evaluacionSolicitud = evaluacionSolicitud;
    if (evaluacionSolicitud.conteosCelular) {
      evaluacionSolicitud.conteosCelular.forEach(element => {
        if (element.tipoCornea === 1) {
          objeto.conteoCelular = element;
        } else if (element.tipoCornea === 2) {
          objeto.conteoCelularDerecha = element;
        }
      });
    }
    if (evaluacionSolicitud.desgloseCorneas) {
      objeto.listaDesgloseCorneaIzquierda = [];
      objeto.listaDesgloseCorneaDerecha = [];
      evaluacionSolicitud.desgloseCorneas.forEach(element => {
        if (element.tipoCornea === 1) {
          objeto.listaDesgloseCorneaIzquierda.push(element);
        } else {
          objeto.listaDesgloseCorneaDerecha.push(element);
        }
      });
    }
  }

  doSave() {
    bootbox.confirm({
      message: "¿Desea hacer un guardado parcial?",
      buttons: {
        confirm: {
          label: "Sí",
          className: "btn-primary"
        },
        cancel: {
          label: "No",
          className: ""
        }
      },
      callback: function(result) {
        if (result) {
          let conteos = [];
          let isUpdate = false;
          if (this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCd) {
            this.conteoCelularDerecha.numeroCampo = +this.conteoCelularDerecha
              .numeroCampo;
            this.conteoCelularDerecha.tipoCornea = 2;
            this.conteoCelularDerecha.idevaluacionSolicitud = {};
            this.conteoCelularDerecha.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
            this.conteoCelularDerecha.usuarioUltMov = {};
            this.conteoCelularDerecha.usuarioUltMov.id = this.globalesService.dameUsuario().id;
            if (this.conteoCelularDerecha.mayor60 === true) {
              this.conteoCelularDerecha.mayor60 = 1;
            } else {
              this.conteoCelularDerecha.mayor60 = 0;
            }
            if (this.conteoCelularDerecha.id) {
              isUpdate = true;
            }

            if (this.conteoCelularDerecha.normalMenor33 === true) {
              this.conteoCelularDerecha.normalMenor33 = 1;
            } else {
              this.conteoCelularDerecha.normalMenor33 = 0;
            }

            if (this.conteoCelularDerecha.gutta === true) {
              this.conteoCelularDerecha.gutta = 1;
            } else {
              this.conteoCelularDerecha.gutta = 0;
            }

            if (this.conteoCelularDerecha.pliegue === true) {
              this.conteoCelularDerecha.pliegue = 1;
            } else {
              this.conteoCelularDerecha.pliegue = 0;
            }

            if (this.conteoCelularDerecha.estriaRotura === true) {
              this.conteoCelularDerecha.estriaRotura = 1;
            } else {
              this.conteoCelularDerecha.estriaRotura = 0;
            }

            if (this.conteoCelularDerecha.deposito === true) {
              this.conteoCelularDerecha.deposito = 1;
            } else {
              this.conteoCelularDerecha.deposito = 0;
            }

            conteos.push(this.conteoCelularDerecha);
          }

          if (this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCi) {
            this.conteoCelular.numeroCampo = +this.conteoCelular.numeroCampo;
            this.conteoCelular.tipoCornea = 1;
            this.conteoCelular.idevaluacionSolicitud = {};
            this.conteoCelular.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
            this.conteoCelular.usuarioUltMov = {};
            this.conteoCelular.usuarioUltMov.id = this.globalesService.dameUsuario().id;
            if (this.conteoCelular.id) {
              isUpdate = true;
            }

            if (this.conteoCelular.mayor60 === true) {
              this.conteoCelular.mayor60 = 1;
            } else {
              this.conteoCelular.mayor60 = 0;
            }

            if (this.conteoCelular.normalMenor33 === true) {
              this.conteoCelular.normalMenor33 = 1;
            } else {
              this.conteoCelular.normalMenor33 = 0;
            }

            if (this.conteoCelular.gutta === true) {
              this.conteoCelular.gutta = 1;
            } else {
              this.conteoCelular.gutta = 0;
            }

            if (this.conteoCelular.pliegue === true) {
              this.conteoCelular.pliegue = 1;
            } else {
              this.conteoCelular.pliegue = 0;
            }

            if (this.conteoCelular.estriaRotura === true) {
              this.conteoCelular.estriaRotura = 1;
            } else {
              this.conteoCelular.estriaRotura = 0;
            }

            if (this.conteoCelular.deposito === true) {
              this.conteoCelular.deposito = 1;
            } else {
              this.conteoCelular.deposito = 0;
            }

            conteos.push(this.conteoCelular);
          }
          (conteos);
          if (isUpdate) {
            this.conteoCelular_service.actualizarListaConteoCelular(
              conteos,
              this.evn_guardarConteos,
              this
            );
          } else {
            this.conteoCelular_service.guardarListaConteoCelular(
              conteos,
              this.evn_guardarConteos,
              this
            );
          }
        }
      }.bind(this)
    });
  }

  evn_guardarConteos(ev, objeto) {
    const id = objeto.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      let ev = new EvaluacionSolicitud();
      ev.id = id;
      objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(
        ev,
        objeto.evn_lazy_evaluacionSolicitud,
        objeto
      );
    }
    bootbox.alert("Datos guardados con éxito");
  }

  saveDesgloseCorneaIzquierda() {
    this.desgloseCorneaIzquierda.tipoCornea = 1;
    this.desgloseCorneaIzquierda.idevaluacionSolicitud = {};
    this.desgloseCorneaIzquierda.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
    this.desgloseCorneaIzquierda.idevaluacionSolicitud.idrecepcionSolicitudEvaluacion = {
      idbtcCi: this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCi
    };
    this.desgloseCorneaIzquierda.usuarioUltMov = {};
    this.desgloseCorneaIzquierda.usuarioUltMov.id = this.globalesService.dameUsuario().id;
    this.desgloseCorneaService.guardarDesgloseCornea(
      this.desgloseCorneaIzquierda,
      this.evn_guardarDesglose,
      this
    );
    (this.desgloseCorneaIzquierda);
    this.desgloseCorneaIzquierda = new DesgloseCornea();
  }

  saveDesgloseCorneaDerecha() {
    this.desgloseCorneaDerecha.tipoCornea = 2;
    this.desgloseCorneaDerecha.idevaluacionSolicitud = {};
    this.desgloseCorneaDerecha.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
    this.desgloseCorneaDerecha.idevaluacionSolicitud.idrecepcionSolicitudEvaluacion = {
      idbtcCd: this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCd
    };
    this.desgloseCorneaDerecha.usuarioUltMov = {};
    this.desgloseCorneaDerecha.usuarioUltMov.id = this.globalesService.dameUsuario().id;
    this.desgloseCorneaService.guardarDesgloseCornea(
      this.desgloseCorneaDerecha,
      this.evn_guardarDesglose,
      this
    );
    (this.desgloseCorneaDerecha);
    this.desgloseCorneaDerecha = new DesgloseCornea();
  }

  evn_guardarDesglose(ev, objeto) {
    const id = objeto.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      let ev = new EvaluacionSolicitud();
      ev.id = id;
      objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(
        ev,
        objeto.evn_lazy_evaluacionSolicitud,
        objeto
      );
    }
    bootbox.alert("Id generado con éxito");
  }

  doEnviar() {
    bootbox.confirm({
      message: "¿Deseas enviar la solicitud de evaluación de tejido?",
      buttons: {
        confirm: {
          label: "Sí",
          className: "btn-primary"
        },
        cancel: {
          label: "No",
          className: ""
        }
      },
      callback: function(result) {
        if (result) {
          let almacenEvaluacion = new AlmacenEvaluacion();
          almacenEvaluacion.evaluacionSolicitud = new EvaluacionSolicitud();
          almacenEvaluacion.evaluacionSolicitud.id  = this.evaluacionSolicitud.id;
          almacenEvaluacion.usuarioUltMov = new Usuario();
          almacenEvaluacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
          almacenEvaluacion.status = 1;
          almacenEvaluacion.estatusProceso = 1;
          this.almacenEvaluacionService.guardarAlmacenEvaluacion(
           almacenEvaluacion,
            this.evn_guardarAlmacen,
            this
          );
        }
      }.bind(this)
    });
  }

  evn_guardarAlmacen(ev, objeto) {
    const id = objeto.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      let ev = new EvaluacionSolicitud();
      ev.id = id;
      objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(
        ev,
        objeto.evn_lazy_evaluacionSolicitud,
        objeto
      );
    }
    bootbox.alert("Solicitud Enviada a Almacén.");
  }

  doOpenModalEnviarNotificacion() {
    this.tipoNotificacion = null;
    this.modalActive = true;
  }

  doEnviarNotificacion() {
    this.modalActive = false;
    let notificacion = {tipoNotificacion: this.tipoNotificacion, evaluacionSolicitud: this.evaluacionSolicitud}
    this.conteoCelular_service.notificacionHospitalProcurador(
      notificacion,
      this.evn_notificacionHospital,
      this
    );
  }
  closeModal(): void {
    this.modalActive = false;
  }

  evn_notificacionHospital(ev, objeto) {
    bootbox.alert("Notificación enviada.");
  }

  doImprimir(){
    var path: string = 'file/registroRecepcion';
    var otros: string = 'registroRecepcion';
    var parametros: any = { id: this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal.id, tipoCornea: 2 };
    var nombre: string = 'registroRecepcion.pdf';
    this.fileservice.downloadFile(nombre, otros, path, parametros);
  }
}
