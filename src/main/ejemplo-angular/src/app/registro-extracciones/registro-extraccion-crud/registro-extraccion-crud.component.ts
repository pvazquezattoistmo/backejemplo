import { DatoProcuracionCorneal } from './../../dato-procuracion-corneales/shared/dato-procuracion-corneal';
import { CoordinadorExtraccion } from './../../coordinador-extracciones/shared/coordinador-extraccion';
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { ViewChild, NgZone, EventEmitter, ɵConsole } from "@angular/core";
import { Component, OnInit, Input, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalesService } from "../../shared/globales.service";
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { CoreService } from "../../shared/core.service";
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from "../../shared/file.service";
import { RegistroExtraccion } from "../shared/registro-extraccion";
import { RegistroExtraccionService } from "../shared/registro-extraccion.service";
import { ConfigurarRegistroExtraccion } from "../shared/configurar-registro-extraccion";
import { Usuario } from "../../usuarios/shared/usuario";
import { UsuarioService } from "../../usuarios/shared/usuario.service";
import { UsuarioBtcService } from "../../usuario-btcs/shared/usuario-btc.service";
import { UsuarioBtc } from "../../usuario-btcs/shared/usuario-btc";
import { PerfilRedIsssteService } from "../../perfil-red-issstes/shared/perfil-red-issste.service";
import { PerfilRedIssste } from "../../perfil-red-issstes/shared/perfil-red-issste";

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
import { EquipoExtraccion } from "../../equipo-extracciones/shared/equipo-extraccion";
import { DatoCorneaExtraccion } from "../../dato-cornea-extracciones/shared/dato-cornea-extraccion";
import { RecepcionSolicitudEvaluacionService } from "../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service";
import { RecepcionSolicitudEvaluacion } from "../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion";

declare var $: any;
declare var bootbox: any;
@Component({
  selector: "app-registro-extraccion-crud",
  templateUrl: "./registro-extraccion-crud.component.html",
  styleUrls: ["./registro-extraccion-crud.component.css"],
  providers: [
    GlobalesService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    FileService,
    RegistroExtraccionService,
    UsuarioService,
    EntidadFederativaService,
    PerfilRedIsssteService,
    HospitalService,
    UsuarioBtcService,
    PerfilService,
    SolicitudEvaluacionCornealService,
    CausaMuerteService,
    RecepcionSolicitudEvaluacionService
  ]
})
export class RegistroExtraccionCrudComponent implements OnInit {
  public opcionRegistroExtraccion = 0;
  public validosRegistroExtraccion: any = {
    id: false,
    fechaBaja: false,
    fechaRegistro: false,
    tipoDonanteMultiorganico: false,
    panelViral: false,
    fechaActualizacion: false,
    telefonoContacto: false,
    observacion: true,
    status: false,
    usuarioUltMov: false,
    idsolicitudEvaluacionCorneal: false
  };

  @Input() ocultarConjuntosRegistroExtraccion: boolean = false;
  @Input() nombre: string = "";
  public permisosTabla = {
    tabla: "registroExtraccion",
    permiso: 0,
    etiqueta: ""
  };
  public permisosAtributos = [];
  public permisosConjuntos = [];
  //  public perfil: Perfil;
  public accion = 0;
  usuariologueado;
  public registroExtraccionLazy: boolean = false;
  public registroExtraccionPermisos: boolean = false;
  @Input() public validaciones: boolean = false;
  @Output() validacionesChange = new EventEmitter<boolean>();
  public perfil: Perfil;
  @Input()
  public registroExtraccion: RegistroExtraccion = new RegistroExtraccion();
  @Output() registroExtraccionChange = new EventEmitter<RegistroExtraccion>();
  @Output() registroExtraccionTablaChange = new EventEmitter<
    RegistroExtraccion
  >();
  public lista_registroExtracciones: RegistroExtraccion[] = [];
  public configuracionRegistroExtraccion: ConfigurarRegistroExtraccion;
  public registroExtraccionBuscar: boolean;
  public registroExtraccionSeleccion: boolean;
  public registroExtraccionAgregar: boolean;
  public registroExtraccionActualizar: boolean;
  public registroExtraccionEliminar: boolean;
  public registroExtraccionGuardar: boolean;
  public registroExtraccionCancelar: boolean;
  public usuarioUltMovRegistroExtraccionUsuarioEleccion: Usuario = new Usuario();
  public lista_usuarioUltMovRegistroExtraccionUsuario: Usuario[] = [];
  public usuarioUltMovRegistroExtraccionUsuarioEditar: boolean = false;
  public idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
  public lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal: SolicitudEvaluacionCorneal[] = [];
  public idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEditar: boolean = false;
  @Input()
  public solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
  @Input() listaEquipoExtractor: EquipoExtraccion[] = [];
  @Input() listaCoordinadorExtraccion: EquipoExtraccion[] = [];
  @Input()
  datoCorneaExtraccionCI: DatoCorneaExtraccion = new DatoCorneaExtraccion();
  @Input()
  datoCorneaExtraccionCD: DatoCorneaExtraccion = new DatoCorneaExtraccion();
  @Input() esRequerido: Boolean;
  public listoEnviar: Boolean = false;
  public recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion;

  @Input() public enableIzquierda = true;
  @Input() public enableDerecha = true;

  get registroExtraccionOcultarConjuntos() {
    if (this.ocultarConjuntosRegistroExtraccion) return true;
    return !this.registroExtraccionActualizar;
  }

  ngOnChanges(changes) {
    if (
      changes.registroExtraccion &&
      changes.registroExtraccion.currentValue == null &&
      this.registroExtraccion == null
    )
      this.registroExtraccion = new RegistroExtraccion();
    else {
      var aux: RegistroExtraccion = new RegistroExtraccion();
      if (this.registroExtraccion) aux.from(this.registroExtraccion);
      if (aux.isOk && aux.isOk()) {
        this.accion = 7;
        this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionSeleccion = this.registroExtraccionGuardar = false;
        this.registroExtraccionActualizar = this.registroExtraccionEliminar = this.registroExtraccionCancelar = true;
        this.permisosacciones();
        var thiss: any;
        thiss = this;
        if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
      } else {
        this.accion = 2;
        this.registroExtraccionSeleccion = this.registroExtraccionAgregar = this.registroExtraccionBuscar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
        this.registroExtraccionGuardar = this.registroExtraccionCancelar = true;
      }
    }
  }
  obtenerPermisos() {
    var id_expe = -1;
    var tablas = [
      "registroExtraccion",
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
    this.registroExtraccionPermisos = false;
    this.coreService.permisos(parametros, this.evtCorePermisos, this);
  }

  constructor(
    public globalesService: GlobalesService,
    public zone: NgZone,
    public fileservice: FileService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coreService: CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public registroExtraccion_service: RegistroExtraccionService,
    public usuario_service: UsuarioService,
    public usuarioBtc_service: UsuarioBtcService,
    public perfilRedIssste_service: PerfilRedIsssteService,
    public hospital_service: HospitalService,
    public entidadFederativa_service: EntidadFederativaService,
    public perfil_service: PerfilService,
    public solicitudEvaluacionCorneal_service: SolicitudEvaluacionCornealService,
    public causaMuerte_service: CausaMuerteService,
    public activatedRoute: ActivatedRoute,
    public recepcionSolicitudEvaluacionService: RecepcionSolicitudEvaluacionService
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
    this.registroExtraccionSeleccion = this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
    this.configuracionRegistroExtraccion = new ConfigurarRegistroExtraccion();
    /*     this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovRegistroExtraccionUsuario,
      this
    );
    this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(
      this
        .evtGetIdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal,
      this
    ); */

    this.limpiarCampos();
  }

  //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
  evtCorePermisos(permisos, obj) {
    obj.registroExtraccionPermisos = true;
    if (
      permisos &&
      permisos.registroExtraccion &&
      permisos.registroExtraccion.PermisoAtributo &&
      permisos.registroExtraccion.PermisoAtributo.length > 0
    ) {
      obj.permisosAtributos = permisos.registroExtraccion.PermisoAtributo;
    } else {
      obj.usuariologueado = undefined;
    }
    if (
      permisos &&
      permisos.registroExtraccion &&
      permisos.registroExtraccion.PermisoConjunto &&
      permisos.registroExtraccion.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos = permisos.registroExtraccion.PermisoConjunto;
    }
    if (
      permisos &&
      permisos.registroExtraccion &&
      permisos.registroExtraccion.PermisoTabla &&
      permisos.registroExtraccion.PermisoTabla.length > 0
    ) {
      obj.permisosTabla = permisos.registroExtraccion.PermisoTabla[0];
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

  evtGetUsuarioUltMovRegistroExtraccionUsuario(
    lista_usuarioUltMovRegistroExtraccionUsuario,
    obj
  ) {
    obj.lista_usuarioUltMovRegistroExtraccionUsuario = lista_usuarioUltMovRegistroExtraccionUsuario;
    obj.actualizar_UsuarioUltMovRegistroExtraccionUsuario();
  }
  evtGetIdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal(
    lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal,
    obj
  ) {
    obj.lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal = lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal;
    obj.actualizar_IdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal();
  }

  actualizar_UsuarioUltMovRegistroExtraccionUsuario() {
    if (this.usuarioUltMovRegistroExtraccionUsuarioEleccion)
      for (let eleme of this.lista_usuarioUltMovRegistroExtraccionUsuario)
        if (
          eleme.id == this.usuarioUltMovRegistroExtraccionUsuarioEleccion.id
        ) {
          this.usuarioUltMovRegistroExtraccionUsuarioEleccion = eleme;
          break;
        }
  }
  actualizar_IdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal() {
    if (
      this
        .idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion
    )
      for (let eleme of this
        .lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal)
        if (
          eleme.id ==
          this
            .idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion
            .id
        ) {
          this.idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion = eleme;
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
    return this.validosRegistroExtraccion["id"];
  }
  get validaIds() {
    return this.validosRegistroExtraccion["id"];
  }
  get validaFechaBaja() {
    return this.validosRegistroExtraccion["fechaBaja"];
  }
  get validaFechaRegistro() {
    return this.validosRegistroExtraccion["fechaRegistro"];
  }
  get validaTipoDonanteMultiorganico() {
    return this.validosRegistroExtraccion["tipoDonanteMultiorganico"];
  }
  get validaPanelViral() {
    return this.validosRegistroExtraccion["panelViral"];
  }
  get validaFechaActualizacion() {
    return this.validosRegistroExtraccion["fechaActualizacion"];
  }
  get validaTelefonoContacto() {
    return this.validosRegistroExtraccion["telefonoContacto"];
  }
  get validaObservacion() {
    return this.validosRegistroExtraccion["observacion"];
  }
  get validaStatus() {
    return this.validosRegistroExtraccion["status"];
  }
  get validaUsuarioUltMov() {
    return this.validosRegistroExtraccion["usuarioUltMov"];
  }
  get validaIdsolicitudEvaluacionCorneal() {
    return this.validosRegistroExtraccion["idsolicitudEvaluacionCorneal"];
  }

  get validaTodosc() {
    var salida =
      this.validaId &&
      this.validaFechaBaja &&
      this.validaFechaRegistro &&
      this.validaTipoDonanteMultiorganico &&
      this.validaPanelViral &&
      this.validaFechaActualizacion &&
      this.validaTelefonoContacto &&
      this.validaObservacion &&
      this.validaStatus &&
      this.validaUsuarioUltMov &&
      this.validaIdsolicitudEvaluacionCorneal;
    if (salida != this.validaciones) this.validacionesChange.emit(salida);
    return salida;
  }

  obtenerRegistroExtracciones(lista, objeto) {
    objeto.lista_registroExtracciones = lista;
    if (lista && lista.length > 0) {
      objeto.registroExtraccion.from(lista[0]);
      objeto.evtRegistroExtraccionSeleccionado(objeto.registroExtraccion);
      if (objeto.configuarCombosObjetos) objeto.configuarCombosObjetos();
    }
  }
  evn_lazy_registroExtraccion(registroExtraccion, objeto) {
    objeto.listaCoordinadorExtraccion =
    registroExtraccion.coordinadorExtraccion;
    objeto.listaEquipoExtractor = registroExtraccion.equipoExtraccion;
    let datosCorneas = registroExtraccion.datoCorneaExtraccion as Array<
      DatoCorneaExtraccion
    >;
    datosCorneas.forEach(element => {
      if (element.tipoCornea === 1) {
        objeto.datoCorneaExtraccionCI = element;
      }
      if (element.tipoCornea === 2) {
        objeto.datoCorneaExtraccionCD = element;
      }
    });
    objeto.registroExtraccion = registroExtraccion;
    objeto.registroExtraccionChange.emit(objeto.registroExtraccion);
    objeto.configuarCombosObjetos();
    objeto.registroExtraccionLazy = true;
    if (objeto.solicitudEvaluacionCorneal.idcausaMuerte.tipoCausaMuerte === 1) {
      objeto.registroExtraccion.tipoDonanteMultiorganico = 0;
    } else {
      objeto.registroExtraccion.tipoDonanteMultiorganico = 1;
    }
  }
  /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
  get datosReporteRegistroExtraccionWord() {
    return !(
      this.registroExtraccionActualizar &&
      this.registroExtraccionLazy &&
      this.globalesService.preporteWord(this, "registroExtraccion")
    );
  }
  get datosReporteRegistroExtraccionExcel() {
    return !(
      this.registroExtraccionActualizar &&
      this.registroExtraccionLazy &&
      this.globalesService.preporteExcel(this, "registroExtraccion")
    );
  }
  get datosReporteRegistroExtraccionPdf() {
    return !(
      this.registroExtraccionActualizar &&
      this.registroExtraccionLazy &&
      this.globalesService.preportePdf(this, "registroExtraccion")
    );
  }
  reporteRegistroExtraccionExcel(form: any) {
    var nombre: string = "RegistroExtraccion.xlsx";
    var path: string = "file/reporteExcel";
    var parametros = {};
    parametros["entradas"] = { registroExtraccion: this.registroExtraccion };
    parametros["plantilla"] = "RegistroExtraccion.xlsx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteRegistroExtraccionWord(form: any) {
    var nombre: string = "RegistroExtraccion.docx";
    var path: string = "file/reporteWord";
    var parametros = {};
    parametros["entradas"] = { registroExtraccion: this.registroExtraccion };
    parametros["plantilla"] = "RegistroExtraccion.docx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteRegistroExtraccionPdf(form: any) {
    var nombre: string = "RegistroExtraccion.docx";
    var path: string = "file/reportePdf";
    var parametros = {};
    parametros["entradas"] = { registroExtraccion: this.registroExtraccion };
    parametros["plantilla"] = "RegistroExtraccion.docx";
    parametros["salida"] = "RegistroExtraccion.pdf";
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
    this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
    this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionCancelar = true;
  }
  buscarRegistroExtraccionFront(form: any) {
    this.accionesBuscar();
    var vregistroExtraccion: RegistroExtraccion = new RegistroExtraccion();
    vregistroExtraccion.from(this.registroExtraccion);
    this.configuracionRegistroExtraccion = new ConfigurarRegistroExtraccion();
    this.configuracionRegistroExtraccion.permisosTabla = {
      tabla: "registroExtraccion",
      permiso: 8
    };
    this.configuracionRegistroExtraccion.titulo =
      "Buscar " + this.permisosTabla.etiqueta;
    this.configuracionRegistroExtraccion.registroExtraccionConsulta = vregistroExtraccion;
    this.permisosacciones();
    $("#buscarRegistroExtraccion_" + this.nombre).modal();
  }
  buscarRegistroExtraccionBack(registroExtraccion: RegistroExtraccion) {
    this.registroExtraccion_service.getRegistroExtraccionesByDto(
      registroExtraccion,
      this.eventoSrvRegistroExtraccionBuscar,
      this
    );
  }
  eventoSrvRegistroExtraccionBuscar(lista, objeto) {
    objeto.lista_registroExtracciones = lista;
    if (lista && lista.length > 0) {
      objeto.registroExtraccion = lista[0];
      objeto.registroExtraccionLazy = false;
      objeto.registroExtraccion_service.lazyRegistroExtraccion(
        objeto.registroExtraccion,
        objeto.evn_lazy_registroExtraccion,
        objeto
      );
    }
  }
  guardarRegistroExtraccionFront(form: any) {
    this.accion = 5; // ********************************************************************************************** maquina
    this.guardarRegistroExtraccionBack(this.registroExtraccion);
    this.accionesBuscar(); // ********************************************************************************* maquina
    this.permisosacciones();
  }
  guardarRegistroExtraccionBack(registroExtraccion: RegistroExtraccion) {
    if (registroExtraccion.usuarioUltMov == null)
      registroExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
    if (registroExtraccion.status == null || registroExtraccion.status == "")
      registroExtraccion.status = "1";
    this.registroExtraccion_service.guardarRegistroExtraccion(
      registroExtraccion,
      this.eventoSrvRegistroExtraccionGuardar,
      this
    );
  }
  eventoSrvRegistroExtraccionGuardar(registroExtraccion, obj) {
    obj.registroExtraccion = registroExtraccion;
    bootbox.alert("Datos guardados con éxito");
    var aux: RegistroExtraccion = new RegistroExtraccion();
    aux.from(registroExtraccion);
    obj.registroExtraccionChange.emit(aux);
    obj.registroExtraccionTablaChange.emit(aux);
    obj.registroExtraccionLazy = false;
    obj.registroExtraccion_service.lazyRegistroExtraccion(
      obj.registroExtraccion,
      obj.evn_lazy_registroExtraccion,
      obj
    );
    obj.accionesActualizar();
  }
  actualizarRegistroExtraccionFront(form: any) {
    this.accion = 3; // ************************************************************************************* maquina
    this.actualizarRegistroExtraccionBack(this.registroExtraccion);
    this.accionesBuscar(); // ***************************************************************************** maquina
    this.permisosacciones();
  }
  actualizarRegistroExtraccionBack(registroExtraccion: RegistroExtraccion) {
    registroExtraccion= new RegistroExtraccion(registroExtraccion);
    registroExtraccion.idsolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal(registroExtraccion.idsolicitudEvaluacionCorneal);
   // auxSolev.id=registroExtraccion.idsolicitudEvaluacionCorneal.id;
   if (registroExtraccion.coordinadorExtraccion !== null){
     for (let index = 0; index < registroExtraccion.coordinadorExtraccion.length; index++) {
      registroExtraccion.coordinadorExtraccion[index] = new CoordinadorExtraccion(registroExtraccion.coordinadorExtraccion[index]);
     }
 }
   if (registroExtraccion.equipoExtraccion !== null){
    for (let index = 0; index < registroExtraccion.equipoExtraccion.length; index++) {
       registroExtraccion.equipoExtraccion[index] = new EquipoExtraccion(registroExtraccion.equipoExtraccion[index]);
    }
      }
  if (registroExtraccion.datoCorneaExtraccion !== null){
    for (let index = 0; index < registroExtraccion.datoCorneaExtraccion.length; index++) {
      registroExtraccion.datoCorneaExtraccion[index]= new DatoCorneaExtraccion(registroExtraccion.datoCorneaExtraccion[index]);

    }

  }
  if (registroExtraccion.coordinadorExtraccion !== null){
    for (let index = 0; index < registroExtraccion.coordinadorExtraccion.length; index++) {
       registroExtraccion.coordinadorExtraccion[index]= new CoordinadorExtraccion(registroExtraccion.coordinadorExtraccion[index]);

    }

  }

    registroExtraccion.usuarioUltMov = new Usuario(this.globalesService.dameUsuario());
    this.registroExtraccion_service.actualizarRegistroExtraccion(
      registroExtraccion,
      this.eventoSrvRegistroExtraccionActualizar,
      this
    );
  }
  eventoSrvRegistroExtraccionActualizar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos actualizados con éxito");
      var aux: RegistroExtraccion = new RegistroExtraccion();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.registroExtraccionLazy = false;
      obj.registroExtraccion_service.lazyRegistroExtraccion(
        obj.registroExtraccion,
        obj.evn_lazy_registroExtraccion,
        obj
      );
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
      aux.from(obj.registroExtraccion);
      obj.registroExtraccionChange.emit(aux);
      obj.registroExtraccionTablaChange.emit(aux);
      obj.accionesActualizar();
    }
  }
  eliminarRegistroExtraccionFront(form: any) {
    this.accion = 4;
    this.eliminarRegistroExtraccionBack(this.registroExtraccion);
    this.permisosacciones();
    this.accionesBuscar();
  }
  eliminarRegistroExtraccionBack(registroExtraccion: RegistroExtraccion) {
    registroExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
    this.registroExtraccion_service.eliminarRegistroExtraccion(
      registroExtraccion,
      this.eventoSrvRegistroExtraccionEliminar,
      this
    );
  }
  eventoSrvRegistroExtraccionEliminar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos eliminados con éxito");
      obj.registroExtraccion = new RegistroExtraccion();
      obj.registroExtraccionChange.emit(obj.registroExtraccion);
      obj.registroExtraccionTablaChange.emit(obj.registroExtraccion);
      obj.limpiarCampos();
    }
  }
  cancelarRegistroExtraccionFront(form: any) {
    this.accion = 6;
    this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
    this.registroExtraccionBuscar = this.registroExtraccionAgregar = true;
    this.permisosacciones();
  }
  nuevoRegistroExtraccionFront(form: any) {
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
        this.registroExtraccionSeleccion = this.registroExtraccionAgregar = this.registroExtraccionBuscar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
        this.registroExtraccionGuardar = this.registroExtraccionCancelar = true;
      }.bind(this)
    });
  }

  configuarCombosObjetos() {
    this.lista_usuarioUltMovRegistroExtraccionUsuario = [];
    /*     this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovRegistroExtraccionUsuario,
      this
    );
    this.lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal = [];
    this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(
      this
        .evtGetIdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal,
      this
    ); */
  }
  configurarTablasConjuntos() {}

  accionesActualizar() {
    this.accion = 7;
    this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionSeleccion = this.registroExtraccionGuardar = false;
    this.registroExtraccionActualizar = this.registroExtraccionEliminar = this.registroExtraccionCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
  }
  evtRegistroExtraccionSeleccionado(registroExtraccion) {
    this.registroExtraccion = new RegistroExtraccion();
    this.registroExtraccion.from(registroExtraccion);
    this.registroExtraccionLazy = false;
    this.registroExtraccion_service.lazyRegistroExtraccion(
      this.registroExtraccion,
      this.evn_lazy_registroExtraccion,
      this
    );
    this.accion = 7;
    this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionSeleccion = this.registroExtraccionGuardar = false;
    this.registroExtraccionActualizar = this.registroExtraccionEliminar = this.registroExtraccionCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
    $("#buscarRegistroExtraccion_" + this.nombre).modal("hide");
  }
  ngOnInit() {
    this.accion = 0; // *********************************************************************************************************** maquina
    this.registroExtraccionSeleccion = this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false; // ******************** maquina
    this.registroExtraccionBuscar = this.registroExtraccionAgregar = true; // ************************************************************************************* maquina
    this.permisosacciones();
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    if (id) {
      setTimeout(() => {
        this.globalesService.registraIdRegistroExtracion(id);
        this.globalesService.registraIdSolicitudEvaluacion(id);
      });
      this.solicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
      this.solicitudEvaluacionCorneal.id = id;
      this.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(
        this.solicitudEvaluacionCorneal,
        this.evn_lazy_solicitudEvaluacionCorneal,
        this
      );
    }
  }

  permisosacciones() {
    if (this.registroExtraccionBuscar)
      this.registroExtraccionBuscar = this.globalesService.pbuscar(
        this,
        "registroExtraccion"
      );
    if (this.registroExtraccionActualizar)
      this.registroExtraccionActualizar =
        this.globalesService.pacutalizar(this, "registroExtraccion") &&
        this.globalesService.pbuscar(this, "registroExtraccion");
    if (this.registroExtraccionEliminar)
      this.registroExtraccionEliminar =
        this.globalesService.peliminar(this, "registroExtraccion") &&
        this.globalesService.pbuscar(this, "registroExtraccion");
    if (this.registroExtraccionAgregar)
      this.registroExtraccionAgregar = this.globalesService.pagregar(
        this,
        "registroExtraccion"
      );
  }
  permisosaccionesInicio() {
    this.registroExtraccionSeleccion = this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false; // *************************** maquina
    this.registroExtraccionBuscar = this.registroExtraccionAgregar = true; // ************************************************************************************* maquina
    this.accion = 0; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  limpiarCampos() {
    this.registroExtraccion = new RegistroExtraccion();

    this.usuarioUltMovRegistroExtraccionUsuarioEleccion = new Usuario();
    this.idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion = new SolicitudEvaluacionCorneal();

    this.registroExtraccionChange.emit(this.registroExtraccion);
    this.registroExtraccionSeleccion = this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false; // *************************** maquina
    this.registroExtraccionBuscar = this.registroExtraccionAgregar = true; // ************************************************************************************* maquina
    this.accion = 6; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }

  evn_lazy_solicitudEvaluacionCorneal(solicitudEvaluacionCorneal, objeto) {
    objeto.solicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal( solicitudEvaluacionCorneal);

    objeto.enableIzquierda = null;
    objeto.enableDerecha = null;
    objeto.solicitudEvaluacionCorneal.datosProcuracionCorneal.forEach(
      element => {
        if (element.tipo === 1) {
          objeto.enableIzquierda = true;
        }
        if (element.tipo === 2) {
          objeto.enableDerecha = true;
        }
      }
    );
    let parSolicitudEvaluacionCorneal : SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal(solicitudEvaluacionCorneal);
//    parSolicitudEvaluacionCorneal.id = objeto.solicitudEvaluacionCorneal.id ;
    //parSolicitudEvaluacionCorneal.from(objeto.solicitudEvaluacionCorneal);
    objeto.recepcionSolicitudEvaluacionService.getRecepcionSolicitudEvaluacionByIdsolicitudEvaluacionCorneal(
      parSolicitudEvaluacionCorneal,
      objeto.evn_buscarRecepcion,
      objeto
    );
    objeto.registroExtraccion_service.getRegistroExtraccionByIdsolicitudEvaluacionCorneal(
      parSolicitudEvaluacionCorneal,
      objeto.evn_lazy_registroExtraccion,
      objeto
    );
    // objeto.solicitudEvaluacionCornealChange.emit(
    //   objeto.solicitudEvaluacionCorneal
    // );
    // objeto.configuarCombosObjetos();
    objeto.solicitudEvaluacionCornealLazy = true;
  }
  informacionCompleta() {}
  evtActSolCor(accion, obj) {
    if (accion) {
      (obj);
    }
  }
  doSave() {
    let auxRegExtracion :RegistroExtraccion = new RegistroExtraccion();
    auxRegExtracion.from(this.registroExtraccion);
    auxRegExtracion.idsolicitudEvaluacionCorneal= new SolicitudEvaluacionCorneal(this.solicitudEvaluacionCorneal);
    auxRegExtracion.coordinadorExtraccion=this.registroExtraccion.coordinadorExtraccion;
    auxRegExtracion.datoCorneaExtraccion=this.registroExtraccion.datoCorneaExtraccion;
    auxRegExtracion.equipoExtraccion=this.registroExtraccion.equipoExtraccion;
    auxRegExtracion.tipoDonanteMultiorganico=this.registroExtraccion.tipoDonanteMultiorganico;
    this.registroExtraccion=auxRegExtracion;
   // this.registroExtraccion.idsolicitudEvaluacionCorneal =  new SolicitudEvaluacionCorneal ( this.registroExtraccion.idsolicitudEvaluacionCorneal);
    // this.registroExtraccion.idsolicitudEvaluacionCorneal.from(this.solicitudEvaluacionCorneal);
 //  this.registroExtraccion.idsolicitudEvaluacionCorneal.id = this.solicitudEvaluacionCorneal.id;
    this.registroExtraccion.coordinadorExtraccion = this.listaCoordinadorExtraccion;
    this.registroExtraccion.equipoExtraccion = this.listaEquipoExtractor;
    this.registroExtraccion.usuarioUltMov = {};
    this.registroExtraccion.usuarioUltMov.id = this.globalesService.dameUsuario().id;

    (this.registroExtraccion);

    if (
      this.registroExtraccion.tipoDonanteMultiorganico == null ||
      this.registroExtraccion.telefonoContacto == null ||
      !this.validaTelefonoContacto ||
      this.listaCoordinadorExtraccion.length == 0 ||
      this.listaEquipoExtractor.length == 0 ||
      this.registroExtraccion.panelViral == null ||
      this.registroExtraccion.observacion == null ||
      this.registroExtraccion.observacion == ""
    ) {
      // if (this.registroExtraccion.tipoDonanteMultiorganico == null) {
      //   this.esRequerido = false;

      //   return;
      // }
      this.esRequerido = true;

      bootbox.alert("Ingrese la información requerida.");
      return;
    }

    if (this.registroExtraccion.id == null) {
      this.datoCorneaExtraccionCI.tipoCornea = 1;
      this.datoCorneaExtraccionCD.tipoCornea = 2;
      this.registroExtraccion.datoCorneaExtraccion = [];
      this.registroExtraccion.datoCorneaExtraccion.push(
        this.datoCorneaExtraccionCI
      );
      this.registroExtraccion.datoCorneaExtraccion.push(
        this.datoCorneaExtraccionCD
      );
      this.listoEnviar = true;

      this.guardarRegistroExtraccionBack(this.registroExtraccion);
      this.solicitudEvaluacionCorneal_service.actualizarSolicitudEvaluacionCorneal(
        this.registroExtraccion.idsolicitudEvaluacionCorneal,
        this.evtActSolCor,
        this
      );
    } else {
      this.registroExtraccion.datoCorneaExtraccion = [];
      this.registroExtraccion.datoCorneaExtraccion.push(
        this.datoCorneaExtraccionCI
      );
      this.registroExtraccion.datoCorneaExtraccion.push(
        this.datoCorneaExtraccionCD
      );
      this.listoEnviar = true;
      (this.listoEnviar);
      this.actualizarRegistroExtraccionBack(this.registroExtraccion);
      this.solicitudEvaluacionCorneal_service.actualizarSolicitudEvaluacionCorneal(
        this.registroExtraccion.idsolicitudEvaluacionCorneal,
        this.evtActSolCor,
        this
      );
    }
  }
  verificaIDSCenatras(){
    let salida = false;
    if (this.solicitudEvaluacionCorneal == null )   {
      salida = false;
    }else if (this.solicitudEvaluacionCorneal.datosProcuracionCorneal == null){
        salida = false;
   }else if (this.solicitudEvaluacionCorneal.datosProcuracionCorneal.length === 0){
        salida = false;
    }else {
      this.solicitudEvaluacionCorneal.datosProcuracionCorneal.forEach(element => {
        if (element.idcenatra !== null){
          salida = true;
        }
       });
    }
    return salida;
  }
  doEnviar() {
    if (this.verificaIDSCenatras() === false){
      bootbox.alert("!En necesario por lo menos in ID Cenatra¡ Guarda y regresar a la solicitud para agregarlo");
      return;
    }
    bootbox.confirm({
      message: "¿Deseas enviar la solicitud a la bandeja de recepción de tejido?!Al enviar los datos a recepcion la información que no contenga id cenatra se eliminará!",
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
          let recepcion = new RecepcionSolicitudEvaluacion();
          recepcion.idsolicitudEvaluacionCorneal = {
            id: this.solicitudEvaluacionCorneal.id
          };
          recepcion.usuarioUltMov = {};
          recepcion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
          (recepcion);
          this.recepcionSolicitudEvaluacionService.guardarRecepcionSolicitudEvaluacion(
            recepcion,
            this.evn_guardarRecepcion,
            this
          );
          //this.router.navigateByUrl('/solicitud-evaluacion-corneal-crud/');
        }
      }.bind(this)
    });
  }

  evn_buscarRecepcion(recepcionSolicitudEvaluacion, objeto) {
    objeto.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
  }

  evn_guardarRecepcion(recepcionSolicitudEvaluacion, objeto) {
    objeto.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
    bootbox.alert("Solicitud Enviada a Recepción.");
  }
}
