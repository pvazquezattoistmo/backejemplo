import { EvaluacionSolicitudService } from './../../evaluacion-solicitudes/shared/evaluacion-solicitud.service';
import { EvaluacionSolicitud } from './../../evaluacion-solicitudes/shared/evaluacion-solicitud';
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { ViewChild, NgZone, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input, Output } from "@angular/core";
import { GlobalesService } from "../../shared/globales.service";
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { CoreService } from "../../shared/core.service";
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from "../../shared/file.service";
import { OficioDonacion } from "../shared/oficio-donacion";
import { OficioDonacionService } from "../shared/oficio-donacion.service";
import { ConfigurarOficioDonacion } from "../shared/configurar-oficio-donacion";
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
import { RecepcionSolicitudEvaluacion } from "../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion";
import { RecepcionSolicitudEvaluacionService } from "../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service";
import { SolicitudEvaluacionCornealService } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service";
import { SolicitudEvaluacionCorneal } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal";
import { CausaMuerteService } from "../../causa-muertes/shared/causa-muerte.service";
import { CausaMuerte } from "../../causa-muertes/shared/causa-muerte";
import { AlmacenTejido } from "../../almacen-tejidos/shared/almacen-tejido";
import { GestionMuestraMicrobiologia } from "../../gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia";
import { DocumentacionDonacion } from "../../documentacion-donaciones/shared/documentacion-donacion";
import { CaracteristicaDonacion } from "../../caracteristica-donaciones/shared/caracteristica-donacion";

declare var $: any;
declare var bootbox: any;
@Component({
  selector: "app-oficio-donacion-crud",
  templateUrl: "./oficio-donacion-crud.component.html",
  styleUrls: ["./oficio-donacion-crud.component.css"],
  providers: [
    GlobalesService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    FileService,
    OficioDonacionService,
    UsuarioService,
    EntidadFederativaService,
    PerfilRedIsssteService,
    //                PerfilBtcService,
    HospitalService,
    UsuarioBtcService,
    PerfilService,
    RecepcionSolicitudEvaluacionService,
    CausaMuerteService,
    SolicitudEvaluacionCornealService,
    EvaluacionSolicitudService
  ]
})
export class OficioDonacionCrudComponent implements OnInit {
  public opcionOficioDonacion = 0;
  public validosOficioDonacion: any = {
    id: false,
    fechaBaja: false,
    incidenciaTejido: true,
    botonCorneal: false,
    fechaRegistro: false,
    fechaActualizacion: false,
    microbiologiaCorneal: false,
    status: false,
    usuarioUltMov: false,
    idrecepcionSolicitudEvaluacion: false
  };

  @Input() ocultarConjuntosOficioDonacion: boolean = false;
  @Input() nombre: string = "";
  public permisosTabla = { tabla: "oficioDonacion", permiso: 0, etiqueta: "" };
  public permisosAtributos = [];
  public permisosConjuntos = [];
  //  public perfil: Perfil;
  public accion = 0;
  usuariologueado;
  public oficioDonacionLazy: boolean = false;
  public oficioDonacionPermisos: boolean = false;
  @Input() public validaciones: boolean = false;
  @Output() validacionesChange = new EventEmitter<boolean>();
  public perfil: Perfil;
  @Input() public oficioDonacion: OficioDonacion = new OficioDonacion();
  @Output() oficioDonacionChange = new EventEmitter<OficioDonacion>();
  @Output() oficioDonacionTablaChange = new EventEmitter<OficioDonacion>();
  public lista_oficioDonaciones: OficioDonacion[] = [];
  public configuracionOficioDonacion: ConfigurarOficioDonacion;
  public oficioDonacionBuscar: boolean;
  public oficioDonacionSeleccion: boolean;
  public oficioDonacionAgregar: boolean;
  public oficioDonacionActualizar: boolean;
  public oficioDonacionEliminar: boolean;
  public oficioDonacionGuardar: boolean;
  public oficioDonacionCancelar: boolean;
  public usuarioUltMovOficioDonacionUsuarioEleccion: Usuario = new Usuario();
  public lista_usuarioUltMovOficioDonacionUsuario: Usuario[] = [];
  public usuarioUltMovOficioDonacionUsuarioEditar: boolean = false;
  public idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
  public lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion[] = [];
  public idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEditar: boolean = false;
  public recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
  @Input() almacenTejido: AlmacenTejido = new AlmacenTejido();
  @Input()
  gestionMuestraMicrobiologia: GestionMuestraMicrobiologia = new GestionMuestraMicrobiologia();
  @Input()
  documentacionDonacion: DocumentacionDonacion = new DocumentacionDonacion();
  @Input()
  caracteristicaDonacion: CaracteristicaDonacion = new CaracteristicaDonacion();

  get oficioDonacionOcultarConjuntos() {
    if (this.ocultarConjuntosOficioDonacion) return true;
    return !this.oficioDonacionActualizar;
  }

  ngOnChanges(changes) {
    if (
      changes.oficioDonacion &&
      changes.oficioDonacion.currentValue == null &&
      this.oficioDonacion == null
    )
      this.oficioDonacion = new OficioDonacion();
    else {
      var aux: OficioDonacion = new OficioDonacion();
      if (this.oficioDonacion) aux.from(this.oficioDonacion);
      if (aux.isOk && aux.isOk()) {
        this.accion = 7;
        this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionSeleccion = this.oficioDonacionGuardar = false;
        this.oficioDonacionActualizar = this.oficioDonacionEliminar = this.oficioDonacionCancelar = true;
        this.permisosacciones();
        var thiss: any;
        thiss = this;
        if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
      } else {
        this.accion = 2;
        this.oficioDonacionSeleccion = this.oficioDonacionAgregar = this.oficioDonacionBuscar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
        this.oficioDonacionGuardar = this.oficioDonacionCancelar = true;
      }
    }
  }
  obtenerPermisos() {
    var id_expe = -1;
    var tablas = [
      "oficioDonacion",
      "usuario",
      "usuarioBtc",
      "perfilRedIssste",
      "perfilBtc",
      "hospital",
      "entidadFederativa",
      "perfil",
      "recepcionSolicitudEvaluacion",
      "solicitudEvaluacionCorneal",
      "causaMuerte"
    ];
    var parametros: any = {
      id_usu: this.usuariologueado.id,
      tablas: tablas,
      id_exp: id_expe
    };
    this.oficioDonacionPermisos = false;
    this.coreService.permisos(parametros, this.evtCorePermisos, this);
  }

  constructor(
    public globalesService: GlobalesService,
    public zone: NgZone,
    public fileservice: FileService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coreService: CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public oficioDonacion_service: OficioDonacionService,
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
    public activatedRoute: ActivatedRoute,
    public evaluacionSolicitudService: EvaluacionSolicitudService
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
    this.oficioDonacionSeleccion = this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
    this.configuracionOficioDonacion = new ConfigurarOficioDonacion();
    //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovOficioDonacionUsuario, this);
    //this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesActivos(this.evtGetIdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion, this);

    this.limpiarCampos();
  }

  //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
  evtCorePermisos(permisos, obj) {
    obj.oficioDonacionPermisos = true;
    if (
      permisos &&
      permisos.oficioDonacion &&
      permisos.oficioDonacion.PermisoAtributo &&
      permisos.oficioDonacion.PermisoAtributo.length > 0
    ) {
      obj.permisosAtributos = permisos.oficioDonacion.PermisoAtributo;
    } else {
      obj.usuariologueado = undefined;
    }
    if (
      permisos &&
      permisos.oficioDonacion &&
      permisos.oficioDonacion.PermisoConjunto &&
      permisos.oficioDonacion.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos = permisos.oficioDonacion.PermisoConjunto;
    }
    if (
      permisos &&
      permisos.oficioDonacion &&
      permisos.oficioDonacion.PermisoTabla &&
      permisos.oficioDonacion.PermisoTabla.length > 0
    ) {
      obj.permisosTabla = permisos.oficioDonacion.PermisoTabla[0];
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
      permisos.recepcionSolicitudEvaluacion &&
      permisos.recepcionSolicitudEvaluacion.PermisoAtributo &&
      permisos.recepcionSolicitudEvaluacion.PermisoAtributo.length > 0
    ) {
     //obj.configuracion$1=
        permisos.recepcionSolicitudEvaluacion.PermisoAtributo;
      obj.permisosAtributos.push(
        permisos.recepcionSolicitudEvaluacion.PermisoAtributo
      );
    }
    if (
      permisos &&
      permisos.recepcionSolicitudEvaluacion &&
      permisos.recepcionSolicitudEvaluacion.PermisoAtributo &&
      permisos.recepcionSolicitudEvaluacion.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos.push(
        permisos.recepcionSolicitudEvaluacion.PermisoConjunto
      );
    }
    if (
      permisos &&
      permisos.recepcionSolicitudEvaluacion &&
      permisos.recepcionSolicitudEvaluacion.PermisoTabla &&
      permisos.recepcionSolicitudEvaluacion.PermisoTabla.length > 0
    ) {
     //obj.configuracion$1=
        permisos.recepcionSolicitudEvaluacion.PermisoTabla[0];
     // obj.permisosTabla.push(
//        permisos.recepcionSolicitudEvaluacion.PermisoTabla[0]
  //    );
    }

    if (obj.configurarTablasConjuntos) obj.configurarTablasConjuntos();
  }
  //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

  evtGetUsuarioUltMovOficioDonacionUsuario(
    lista_usuarioUltMovOficioDonacionUsuario,
    obj
  ) {
    obj.lista_usuarioUltMovOficioDonacionUsuario = lista_usuarioUltMovOficioDonacionUsuario;
    obj.actualizar_UsuarioUltMovOficioDonacionUsuario();
  }
  evtGetIdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion(
    lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion,
    obj
  ) {
    obj.lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion = lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion;
    obj.actualizar_IdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion();
  }

  actualizar_UsuarioUltMovOficioDonacionUsuario() {
    if (this.usuarioUltMovOficioDonacionUsuarioEleccion)
      for (let eleme of this.lista_usuarioUltMovOficioDonacionUsuario)
        if (eleme.id == this.usuarioUltMovOficioDonacionUsuarioEleccion.id) {
          this.usuarioUltMovOficioDonacionUsuarioEleccion = eleme;
          break;
        }
  }
  actualizar_IdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion() {
    if (
      this
        .idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion
    )
      for (let eleme of this
        .lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion)
        if (
          eleme.id ==
          this
            .idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion
            .id
        ) {
          this.idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion = eleme;
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
    return this.validosOficioDonacion["id"];
  }
  get validaIds() {
    return this.validosOficioDonacion["id"];
  }
  get validaFechaBaja() {
    return this.validosOficioDonacion["fechaBaja"];
  }
  get validaIncidenciaTejido() {
    return this.validosOficioDonacion["incidenciaTejido"];
  }
  get validaBotonCorneal() {
    return this.validosOficioDonacion["botonCorneal"];
  }
  get validaFechaRegistro() {
    return this.validosOficioDonacion["fechaRegistro"];
  }
  get validaFechaActualizacion() {
    return this.validosOficioDonacion["fechaActualizacion"];
  }
  get validaMicrobiologiaCorneal() {
    return this.validosOficioDonacion["microbiologiaCorneal"];
  }
  get validaStatus() {
    return this.validosOficioDonacion["status"];
  }
  get validaUsuarioUltMov() {
    return this.validosOficioDonacion["usuarioUltMov"];
  }
  get validaIdrecepcionSolicitudEvaluacion() {
    return this.validosOficioDonacion["idrecepcionSolicitudEvaluacion"];
  }

  get validaTodosc() {
    var salida =
      this.validaId &&
      this.validaFechaBaja &&
      this.validaIncidenciaTejido &&
      this.validaBotonCorneal &&
      this.validaFechaRegistro &&
      this.validaFechaActualizacion &&
      this.validaMicrobiologiaCorneal &&
      this.validaStatus &&
      this.validaUsuarioUltMov &&
      this.validaIdrecepcionSolicitudEvaluacion;
    if (salida != this.validaciones) this.validacionesChange.emit(salida);
    return salida;
  }

  obtenerOficioDonaciones(lista, objeto) {
    objeto.lista_oficioDonaciones = lista;
    if (lista && lista.length > 0) {
      objeto.oficioDonacion.from(lista[0]);
      objeto.evtOficioDonacionSeleccionado(objeto.oficioDonacion);
      if (objeto.configuarCombosObjetos) objeto.configuarCombosObjetos();
    }
  }
  evn_lazy_oficioDonacion(oficioDonacion, objeto) {
    objeto.oficioDonacion = oficioDonacion;
    objeto.almacenTejido = oficioDonacion.almacenTejido;
    objeto.gestionMuestraMicrobiologia =
      oficioDonacion.gestionMuestraMicrobiologia;
    objeto.documentacionDonacion = oficioDonacion.documentacionDonacion;
    objeto.caracteristicaDonacion = oficioDonacion.caracteristicaDonacion;
    objeto.oficioDonacionChange.emit(objeto.oficioDonacion);

    let id = objeto.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      objeto.recepcionSolicitudEvaluacion.id = id;
      objeto.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(
        objeto.recepcionSolicitudEvaluacion,
        objeto.evn_lazy_recepcionSolicitudEvaluacion,
        objeto
      );
    }

    objeto.configuarCombosObjetos();
    objeto.oficioDonacionLazy = true;
  }
  /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
  get datosReporteOficioDonacionWord() {
    return !(
      this.oficioDonacionActualizar &&
      this.oficioDonacionLazy &&
      this.globalesService.preporteWord(this, "oficioDonacion")
    );
  }
  get datosReporteOficioDonacionExcel() {
    return !(
      this.oficioDonacionActualizar &&
      this.oficioDonacionLazy &&
      this.globalesService.preporteExcel(this, "oficioDonacion")
    );
  }
  get datosReporteOficioDonacionPdf() {
    return !(
      this.oficioDonacionActualizar &&
      this.oficioDonacionLazy &&
      this.globalesService.preportePdf(this, "oficioDonacion")
    );
  }
  reporteOficioDonacionExcel(form: any) {
    var nombre: string = "OficioDonacion.xlsx";
    var path: string = "file/reporteExcel";
    var parametros = {};
    parametros["entradas"] = { oficioDonacion: this.oficioDonacion };
    parametros["plantilla"] = "OficioDonacion.xlsx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteOficioDonacionWord(form: any) {
    var nombre: string = "OficioDonacion.docx";
    var path: string = "file/reporteWord";
    var parametros = {};
    parametros["entradas"] = { oficioDonacion: this.oficioDonacion };
    parametros["plantilla"] = "OficioDonacion.docx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteOficioDonacionPdf(form: any) {
    var nombre: string = "OficioDonacion.docx";
    var path: string = "file/reportePdf";
    var parametros = {};
    parametros["entradas"] = { oficioDonacion: this.oficioDonacion };
    parametros["plantilla"] = "OficioDonacion.docx";
    parametros["salida"] = "OficioDonacion.pdf";
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
    this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
    this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionCancelar = true;
  }
  buscarOficioDonacionFront(form: any) {
    this.accionesBuscar();
    var voficioDonacion: OficioDonacion = new OficioDonacion();
    voficioDonacion.from(this.oficioDonacion);
    this.configuracionOficioDonacion = new ConfigurarOficioDonacion();
    this.configuracionOficioDonacion.permisosTabla = {
      tabla: "oficioDonacion",
      permiso: 8
    };
    this.configuracionOficioDonacion.titulo =
      "Buscar " + this.permisosTabla.etiqueta;
    this.configuracionOficioDonacion.oficioDonacionConsulta = voficioDonacion;
    this.permisosacciones();
    $("#buscarOficioDonacion_" + this.nombre).modal();
  }
  buscarOficioDonacionBack(oficioDonacion: OficioDonacion) {
    this.oficioDonacion_service.getOficioDonacionesByDto(
      oficioDonacion,
      this.eventoSrvOficioDonacionBuscar,
      this
    );
  }
  eventoSrvOficioDonacionBuscar(lista, objeto) {
    objeto.lista_oficioDonaciones = lista;
    if (lista && lista.length > 0) {
      objeto.oficioDonacion = lista[0];
      objeto.oficioDonacionLazy = false;
      objeto.oficioDonacion_service.lazyOficioDonacion(
        objeto.oficioDonacion,
        objeto.evn_lazy_oficioDonacion,
        objeto
      );
    }
  }
  guardarOficioDonacionFront(form: any) {
    this.accion = 5; // ********************************************************************************************** maquina
    this.guardarOficioDonacionBack(this.oficioDonacion);
    this.accionesBuscar(); // ********************************************************************************* maquina
    this.permisosacciones();
  }
  guardarOficioDonacionBack(oficioDonacion: OficioDonacion) {
    if (oficioDonacion.usuarioUltMov == null)
      oficioDonacion.usuarioUltMov = this.globalesService.dameUsuario();
    if (oficioDonacion.status == null || oficioDonacion.status == "")
      oficioDonacion.status = "1";
    this.oficioDonacion_service.guardarOficioDonacion(
      oficioDonacion,
      this.eventoSrvOficioDonacionGuardar,
      this
    );
  }
  eventoSrvOficioDonacionGuardar(oficioDonacion, obj) {
    obj.oficioDonacion = new OficioDonacion(oficioDonacion);
    bootbox.alert("Datos guardados con éxito");
    var aux: OficioDonacion = new OficioDonacion();
    aux.from(oficioDonacion);
    obj.oficioDonacionChange.emit(aux);
    obj.oficioDonacionTablaChange.emit(aux);
    obj.oficioDonacionLazy = false;
    obj.oficioDonacion_service.lazyOficioDonacion(
      obj.oficioDonacion,
      obj.evn_lazy_oficioDonacion,
      obj
    );
    obj.accionesActualizar();
  }
  actualizarOficioDonacionFront(form: any) {
    this.accion = 3; // ************************************************************************************* maquina
    this.actualizarOficioDonacionBack(this.oficioDonacion);
    this.accionesBuscar(); // ***************************************************************************** maquina
    this.permisosacciones();
  }
  actualizarOficioDonacionBack(oficioDonacion: OficioDonacion) {
    //oficioDonacion.usuarioUltMov = this.globalesService.dameUsuario();
    this.oficioDonacion_service.actualizarOficioDonacion(
      oficioDonacion,
      this.eventoSrvOficioDonacionActualizar,
      this
    );
  }
  eventoSrvOficioDonacionActualizar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos actualizados con éxito");
      var aux: OficioDonacion = new OficioDonacion();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.oficioDonacionLazy = false;
      obj.oficioDonacion_service.lazyOficioDonacion(
        new OficioDonacion(obj.oficioDonacion),
        obj.evn_lazy_oficioDonacion,
        obj
      );
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
      aux.from(obj.oficioDonacion);
      obj.oficioDonacionChange.emit(aux);
      obj.oficioDonacionTablaChange.emit(aux);
      obj.accionesActualizar();
    }
  }
  eliminarOficioDonacionFront(form: any) {
    this.accion = 4;
    this.eliminarOficioDonacionBack(this.oficioDonacion);
    this.permisosacciones();
    this.accionesBuscar();
  }
  eliminarOficioDonacionBack(oficioDonacion: OficioDonacion) {
    oficioDonacion.usuarioUltMov = this.globalesService.dameUsuario();
    this.oficioDonacion_service.eliminarOficioDonacion(
      oficioDonacion,
      this.eventoSrvOficioDonacionEliminar,
      this
    );
  }
  eventoSrvOficioDonacionEliminar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos eliminados con éxito");
      obj.oficioDonacion = new OficioDonacion();
      obj.oficioDonacionChange.emit(obj.oficioDonacion);
      obj.oficioDonacionTablaChange.emit(obj.oficioDonacion);
      obj.limpiarCampos();
    }
  }
  cancelarOficioDonacionFront(form: any) {
    this.accion = 6;
    this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
    this.oficioDonacionBuscar = this.oficioDonacionAgregar = true;
    this.permisosacciones();
  }
  nuevoOficioDonacionFront(form: any) {
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
        this.oficioDonacionSeleccion = this.oficioDonacionAgregar = this.oficioDonacionBuscar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
        this.oficioDonacionGuardar = this.oficioDonacionCancelar = true;
      }.bind(this)
    });
  }

  configuarCombosObjetos() {
    this.lista_usuarioUltMovOficioDonacionUsuario = [];
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovOficioDonacionUsuario,
      this
    );
    this.lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion = [];
    //this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesActivos(this.evtGetIdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion, this);
  }
  configurarTablasConjuntos() {}

  accionesActualizar() {
    this.accion = 7;
    this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionSeleccion = this.oficioDonacionGuardar = false;
    this.oficioDonacionActualizar = this.oficioDonacionEliminar = this.oficioDonacionCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
  }
  evtOficioDonacionSeleccionado(oficioDonacion) {
    this.oficioDonacion = new OficioDonacion();
    this.oficioDonacion.from(oficioDonacion);
    this.oficioDonacionLazy = false;
    this.oficioDonacion_service.lazyOficioDonacion(
      this.oficioDonacion,
      this.evn_lazy_oficioDonacion,
      this
    );
    this.accion = 7;
    this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionSeleccion = this.oficioDonacionGuardar = false;
    this.oficioDonacionActualizar = this.oficioDonacionEliminar = this.oficioDonacionCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
    $("#buscarOficioDonacion_" + this.nombre).modal("hide");
  }
  ngOnInit() {
    this.accion = 0; // *********************************************************************************************************** maquina
    this.oficioDonacionSeleccion = this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false; // ******************** maquina
    this.oficioDonacionBuscar = this.oficioDonacionAgregar = true; // ************************************************************************************* maquina
    this.permisosacciones();
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.recepcionSolicitudEvaluacion.id = id;
      this.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(
        this.recepcionSolicitudEvaluacion,
        this.evn_lazy_recepcionSolicitudEvaluacion,
        this
      );
    }
  }

  permisosacciones() {
    if (this.oficioDonacionBuscar)
      this.oficioDonacionBuscar = this.globalesService.pbuscar(
        this,
        "oficioDonacion"
      );
    if (this.oficioDonacionActualizar)
      this.oficioDonacionActualizar =
        this.globalesService.pacutalizar(this, "oficioDonacion") &&
        this.globalesService.pbuscar(this, "oficioDonacion");
    if (this.oficioDonacionEliminar)
      this.oficioDonacionEliminar =
        this.globalesService.peliminar(this, "oficioDonacion") &&
        this.globalesService.pbuscar(this, "oficioDonacion");
    if (this.oficioDonacionAgregar)
      this.oficioDonacionAgregar = this.globalesService.pagregar(
        this,
        "oficioDonacion"
      );
  }
  permisosaccionesInicio() {
    this.oficioDonacionSeleccion = this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false; // *************************** maquina
    this.oficioDonacionBuscar = this.oficioDonacionAgregar = true; // ************************************************************************************* maquina
    this.accion = 0; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  limpiarCampos() {
    this.oficioDonacion = new OficioDonacion();

    this.usuarioUltMovOficioDonacionUsuarioEleccion = new Usuario();
    this.idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion = new RecepcionSolicitudEvaluacion();

    this.oficioDonacionChange.emit(this.oficioDonacion);
    this.oficioDonacionSeleccion = this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false; // *************************** maquina
    this.oficioDonacionBuscar = this.oficioDonacionAgregar = true; // ************************************************************************************* maquina
    this.accion = 6; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }

  evn_lazy_recepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion, objeto) {
    objeto.recepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion);
    objeto.oficioDonacion_service.getOficioDonacionByIdrecepcionSolicitudEvaluacion(
      objeto.recepcionSolicitudEvaluacion ,
      objeto.evn_getOficioDonacionByIdRecepcion,
      objeto
    );
    // objeto.recepcionSolicitudEvaluacionChange.emit(
    //   objeto.recepcionSolicitudEvaluacion
    // );
    // objeto.configuarCombosObjetos();
    // objeto.recepcionSolicitudEvaluacionLazy = true;
  }

  evn_getOficioDonacionByIdRecepcion(oficio, objeto) {
    (oficio);
    if (oficio.id) {
      objeto.oficioDonacion = oficio;
      objeto.almacenTejido = oficio.almacenTejido;
      objeto.gestionMuestraMicrobiologia = oficio.gestionMuestraMicrobiologia;
      objeto.documentacionDonacion = oficio.documentacionDonacion;
      objeto.documentacionDonacion.idCenatraCi = objeto.recepcionSolicitudEvaluacion.idbtcCi;
      objeto.caracteristicaDonacion = oficio.caracteristicaDonacion;
    }

    (objeto.recepcionSolicitudEvaluacion.idbtcCi);
    if (objeto.recepcionSolicitudEvaluacion.idbtcCi) {
      const split =  (objeto.recepcionSolicitudEvaluacion.idbtcCi as string).split('/');
      objeto.documentacionDonacion.idCenatraCi = split[1];
      (split[1]);
    }
    if (objeto.recepcionSolicitudEvaluacion.idbtcCd) {
      const split =  (objeto.recepcionSolicitudEvaluacion.idbtcCd as string).split('/');
      objeto.documentacionDonacion.idCenatraCd = split[1];
    }
  }

  doSave() {
    this.oficioDonacion.idrecepcionSolicitudEvaluacion = {};
    this.oficioDonacion.idrecepcionSolicitudEvaluacion.id = this.recepcionSolicitudEvaluacion.id;
    this.oficioDonacion.idrecepcionSolicitudEvaluacion.idbtcCi = this.recepcionSolicitudEvaluacion.idbtcCi;
    this.oficioDonacion.idrecepcionSolicitudEvaluacion.idbtcCd = this.recepcionSolicitudEvaluacion.idbtcCd;
    this.oficioDonacion.documentacionDonacion = this.documentacionDonacion;
    this.oficioDonacion.caracteristicaDonacion = this.caracteristicaDonacion;
    this.oficioDonacion.gestionMuestraMicrobiologia = this.gestionMuestraMicrobiologia;
    this.oficioDonacion.almacenTejido = this.almacenTejido;
    this.oficioDonacion.almacenTejido.temperaturaRefrigeracion = this
      .almacenTejido.temperaturaRefrigeracion
      ? this.almacenTejido.temperaturaRefrigeracion.id
      : null;
    this.oficioDonacion.botonCorneal =
      this.oficioDonacion.botonCorneal != null
        ? this.oficioDonacion.botonCorneal
          ? 1
          : 0
        : null;
    this.oficioDonacion.microbiologiaCorneal =
      this.oficioDonacion.microbiologiaCorneal != null
        ? this.oficioDonacion.microbiologiaCorneal
          ? 1
          : 0
        : null;
    this.oficioDonacion.usuarioUltMov = {};
    this.oficioDonacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
    (this.oficioDonacion);
    if (this.oficioDonacion.id == null) {
      this.guardarOficioDonacionBack(this.oficioDonacion);
    } else {
      this.actualizarOficioDonacionBack(this.oficioDonacion);
    }
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
          let evaluacion = new EvaluacionSolicitud();
          evaluacion.idrecepcionSolicitudEvaluacion = this.recepcionSolicitudEvaluacion;
          evaluacion.usuarioUltMov = {};
          evaluacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
          (evaluacion);
          this.evaluacionSolicitudService.guardarEvaluacionSolicitud(
            evaluacion,
            this.evtEnviarAvaluacion,
            this
          );
        }
      }.bind(this)
    });
  }

  evtEnviarAvaluacion(evaluacion, obj){
    (evaluacion);
    obj.recepcionSolicitudEvaluacion.evaluacionSolicitud = evaluacion;
    bootbox.alert("Solicitud Enviada a Evaluación.");
  }
}
