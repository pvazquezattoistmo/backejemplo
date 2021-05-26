import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { ViewChild, NgZone, EventEmitter } from "@angular/core";
import { Component, OnInit, Input, Output } from "@angular/core";
import { GlobalesService } from "../../shared/globales.service";
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { CoreService } from "../../shared/core.service";
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from "../../shared/file.service";
import { CoordinadorExtraccion } from "../shared/coordinador-extraccion";
import { CoordinadorExtraccionService } from "../shared/coordinador-extraccion.service";
import { ConfigurarCoordinadorExtraccion } from "../shared/configurar-coordinador-extraccion";
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
import { RegistroExtraccion } from "../../registro-extracciones/shared/registro-extraccion";
import { RegistroExtraccionService } from "../../registro-extracciones/shared/registro-extraccion.service";
import { SolicitudEvaluacionCornealService } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service";
import { SolicitudEvaluacionCorneal } from "../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal";
import { CausaMuerteService } from "../../causa-muertes/shared/causa-muerte.service";
import { CausaMuerte } from "../../causa-muertes/shared/causa-muerte";

declare var $: any;
declare var bootbox: any;
@Component({
  selector: "app-coordinador-extraccion-crud",
  templateUrl: "./coordinador-extraccion-crud.component.html",
  styleUrls: ["./coordinador-extraccion-crud.component.css"],
  providers: [
    GlobalesService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    FileService,
    CoordinadorExtraccionService,
    UsuarioService,
    EntidadFederativaService,
    PerfilRedIsssteService,
    //                PerfilBtcService,
    HospitalService,
    UsuarioBtcService,
    PerfilService,
    RegistroExtraccionService,
    CausaMuerteService,
    SolicitudEvaluacionCornealService
  ]
})
export class CoordinadorExtraccionCrudComponent implements OnInit {
  public opcionCoordinadorExtraccion = 0;
  public validosCoordinadorExtraccion: any = {
    id: false,
    fechaBaja: false,
    primerApellido: false,
    fechaRegistro: false,
    segundoApellido: false,
    fechaActualizacion: false,
    nombre: false,
    status: false,
    usuarioUltMov: false,
    idregistroExtraccion: false
  };

  @Input() ocultarConjuntosCoordinadorExtraccion: boolean = false;
  @Input() nombre: string = "";
  public permisosTabla = {
    tabla: "coordinadorExtraccion",
    permiso: 0,
    etiqueta: ""
  };
  public permisosAtributos = [];
  public permisosConjuntos = [];
  //  public perfil: Perfil;
  public accion = 0;
  usuariologueado;
  public coordinadorExtraccionLazy: boolean = false;
  public coordinadorExtraccionPermisos: boolean = false;
  @Input() public validaciones: boolean = false;
  @Output() validacionesChange = new EventEmitter<boolean>();
  public perfil: Perfil;
  @Input()
  public coordinadorExtraccion: CoordinadorExtraccion = new CoordinadorExtraccion();
  @Output() coordinadorExtraccionChange = new EventEmitter<
    CoordinadorExtraccion
  >();
  @Output() coordinadorExtraccionTablaChange = new EventEmitter<
    CoordinadorExtraccion
  >();
  public lista_coordinadorExtracciones: CoordinadorExtraccion[] = [];
  public configuracionCoordinadorExtraccion: ConfigurarCoordinadorExtraccion;
  public coordinadorExtraccionBuscar: boolean;
  public coordinadorExtraccionSeleccion: boolean;
  public coordinadorExtraccionAgregar: boolean;
  public coordinadorExtraccionActualizar: boolean;
  public coordinadorExtraccionEliminar: boolean;
  public coordinadorExtraccionGuardar: boolean;
  public coordinadorExtraccionCancelar: boolean;
  public usuarioUltMovCoordinadorExtraccionUsuarioEleccion: Usuario = new Usuario();
  public lista_usuarioUltMovCoordinadorExtraccionUsuario: Usuario[] = [];
  public usuarioUltMovCoordinadorExtraccionUsuarioEditar: boolean = false;
  public idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion: RegistroExtraccion = new RegistroExtraccion();
  public lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion: RegistroExtraccion[] = [];
  public idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEditar: boolean = false;
  @Input() listaCoordinadorExtraccion: CoordinadorExtraccion[];

  get coordinadorExtraccionOcultarConjuntos() {
    if (this.ocultarConjuntosCoordinadorExtraccion) return true;
    return !this.coordinadorExtraccionActualizar;
  }

  ngOnChanges(changes) {
    if (
      changes.coordinadorExtraccion &&
      changes.coordinadorExtraccion.currentValue == null &&
      this.coordinadorExtraccion == null
    )
      this.coordinadorExtraccion = new CoordinadorExtraccion();
    else {
      var aux: CoordinadorExtraccion = new CoordinadorExtraccion();
      if (this.coordinadorExtraccion) aux.from(this.coordinadorExtraccion);
      if (aux.isOk && aux.isOk()) {
        this.accion = 7;
        this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionGuardar = false;
        this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = this.coordinadorExtraccionCancelar = true;
        this.permisosacciones();
        var thiss: any;
        thiss = this;
        if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
      } else {
        this.accion = 2;
        this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionBuscar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
        this.coordinadorExtraccionGuardar = this.coordinadorExtraccionCancelar = true;
      }
    }
  }
  obtenerPermisos() {
    var id_expe = -1;
    var tablas = [
      "coordinadorExtraccion",
      "usuario",
      "usuarioBtc",
      "perfilRedIssste",
      "perfilBtc",
      "hospital",
      "entidadFederativa",
      "perfil",
      "registroExtraccion",
      "solicitudEvaluacionCorneal",
      "causaMuerte"
    ];
    var parametros: any = {
      id_usu: this.usuariologueado.id,
      tablas: tablas,
      id_exp: id_expe
    };
    this.coordinadorExtraccionPermisos = false;
    this.coreService.permisos(parametros, this.evtCorePermisos, this);
  }

  constructor(
    public globalesService: GlobalesService,
    public zone: NgZone,
    public fileservice: FileService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coreService: CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coordinadorExtraccion_service: CoordinadorExtraccionService,
    public usuario_service: UsuarioService,
    public usuarioBtc_service: UsuarioBtcService,
    public perfilRedIssste_service: PerfilRedIsssteService,
    //                public perfilBtc_service: PerfilBtcService,

    public hospital_service: HospitalService,
    public entidadFederativa_service: EntidadFederativaService,
    public perfil_service: PerfilService,
    public registroExtraccion_service: RegistroExtraccionService,
    public solicitudEvaluacionCorneal_service: SolicitudEvaluacionCornealService,
    public causaMuerte_service: CausaMuerteService
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
    this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
    this.configuracionCoordinadorExtraccion = new ConfigurarCoordinadorExtraccion();
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovCoordinadorExtraccionUsuario,
      this
    );
    this.registroExtraccion_service.getRegistroExtraccionesActivos(
      this.evtGetIdregistroExtraccionCoordinadorExtraccionRegistroExtraccion,
      this
    );

    this.limpiarCampos();
  }

  //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
  evtCorePermisos(permisos, obj) {
    obj.coordinadorExtraccionPermisos = true;
    if (
      permisos &&
      permisos.coordinadorExtraccion &&
      permisos.coordinadorExtraccion.PermisoAtributo &&
      permisos.coordinadorExtraccion.PermisoAtributo.length > 0
    ) {
      obj.permisosAtributos = permisos.coordinadorExtraccion.PermisoAtributo;
    } else {
      obj.usuariologueado = undefined;
    }
    if (
      permisos &&
      permisos.coordinadorExtraccion &&
      permisos.coordinadorExtraccion.PermisoConjunto &&
      permisos.coordinadorExtraccion.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos = permisos.coordinadorExtraccion.PermisoConjunto;
    }
    if (
      permisos &&
      permisos.coordinadorExtraccion &&
      permisos.coordinadorExtraccion.PermisoTabla &&
      permisos.coordinadorExtraccion.PermisoTabla.length > 0
    ) {
      obj.permisosTabla = permisos.coordinadorExtraccion.PermisoTabla[0];
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
      permisos.registroExtraccion &&
      permisos.registroExtraccion.PermisoAtributo &&
      permisos.registroExtraccion.PermisoAtributo.length > 0
    ) {
     //obj.configuracion$1=
        permisos.registroExtraccion.PermisoAtributo;
      obj.permisosAtributos.push(permisos.registroExtraccion.PermisoAtributo);
    }
    if (
      permisos &&
      permisos.registroExtraccion &&
      permisos.registroExtraccion.PermisoAtributo &&
      permisos.registroExtraccion.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos.push(permisos.registroExtraccion.PermisoConjunto);
    }
    if (
      permisos &&
      permisos.registroExtraccion &&
      permisos.registroExtraccion.PermisoTabla &&
      permisos.registroExtraccion.PermisoTabla.length > 0
    ) {
     //obj.configuracion$1=
        permisos.registroExtraccion.PermisoTabla[0];
     // obj.permisosTabla.push(permisos.registroExtraccion.PermisoTabla[0]);
    }

    if (obj.configurarTablasConjuntos) obj.configurarTablasConjuntos();
  }
  //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

  evtGetUsuarioUltMovCoordinadorExtraccionUsuario(
    lista_usuarioUltMovCoordinadorExtraccionUsuario,
    obj
  ) {
    obj.lista_usuarioUltMovCoordinadorExtraccionUsuario = lista_usuarioUltMovCoordinadorExtraccionUsuario;
    obj.actualizar_UsuarioUltMovCoordinadorExtraccionUsuario();
  }
  evtGetIdregistroExtraccionCoordinadorExtraccionRegistroExtraccion(
    lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion,
    obj
  ) {
    obj.lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion = lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion;
    obj.actualizar_IdregistroExtraccionCoordinadorExtraccionRegistroExtraccion();
  }

  actualizar_UsuarioUltMovCoordinadorExtraccionUsuario() {
    if (this.usuarioUltMovCoordinadorExtraccionUsuarioEleccion)
      for (let eleme of this.lista_usuarioUltMovCoordinadorExtraccionUsuario)
        if (
          eleme.id == this.usuarioUltMovCoordinadorExtraccionUsuarioEleccion.id
        ) {
          this.usuarioUltMovCoordinadorExtraccionUsuarioEleccion = eleme;
          break;
        }
  }
  actualizar_IdregistroExtraccionCoordinadorExtraccionRegistroExtraccion() {
    if (
      this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion
    )
      for (let eleme of this
        .lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion)
        if (
          eleme.id ==
          this
            .idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion
            .id
        ) {
          this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion = eleme;
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
    return this.validosCoordinadorExtraccion["id"];
  }
  get validaIds() {
    return this.validosCoordinadorExtraccion["id"];
  }
  get validaFechaBaja() {
    return this.validosCoordinadorExtraccion["fechaBaja"];
  }
  get validaPrimerApellido() {
    return this.validosCoordinadorExtraccion["primerApellido"];
  }
  get validaFechaRegistro() {
    return this.validosCoordinadorExtraccion["fechaRegistro"];
  }
  get validaSegundoApellido() {
    return this.validosCoordinadorExtraccion["segundoApellido"];
  }
  get validaFechaActualizacion() {
    return this.validosCoordinadorExtraccion["fechaActualizacion"];
  }
  get validaNombre() {
    return this.validosCoordinadorExtraccion["nombre"];
  }
  get validaStatus() {
    return this.validosCoordinadorExtraccion["status"];
  }
  get validaUsuarioUltMov() {
    return this.validosCoordinadorExtraccion["usuarioUltMov"];
  }
  get validaIdregistroExtraccion() {
    return this.validosCoordinadorExtraccion["idregistroExtraccion"];
  }

  get validaTodosc() {
    var salida =
      this.validaId &&
      this.validaFechaBaja &&
      this.validaPrimerApellido &&
      this.validaFechaRegistro &&
      this.validaSegundoApellido &&
      this.validaFechaActualizacion &&
      this.validaNombre &&
      this.validaStatus &&
      this.validaUsuarioUltMov &&
      this.validaIdregistroExtraccion;
    if (salida != this.validaciones) this.validacionesChange.emit(salida);
    return salida;
  }

  obtenerCoordinadorExtracciones(lista, objeto) {
    objeto.lista_coordinadorExtracciones = lista;
    if (lista && lista.length > 0) {
      objeto.coordinadorExtraccion.from(lista[0]);
      objeto.evtCoordinadorExtraccionSeleccionado(objeto.coordinadorExtraccion);
      if (objeto.configuarCombosObjetos) objeto.configuarCombosObjetos();
    }
  }
  evn_lazy_coordinadorExtraccion(coordinadorExtraccion, objeto) {
    objeto.coordinadorExtraccion = coordinadorExtraccion;
    objeto.coordinadorExtraccionChange.emit(objeto.coordinadorExtraccion);
    objeto.configuarCombosObjetos();
    objeto.coordinadorExtraccionLazy = true;
  }
  /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
  get datosReporteCoordinadorExtraccionWord() {
    return !(
      this.coordinadorExtraccionActualizar &&
      this.coordinadorExtraccionLazy &&
      this.globalesService.preporteWord(this, "coordinadorExtraccion")
    );
  }
  get datosReporteCoordinadorExtraccionExcel() {
    return !(
      this.coordinadorExtraccionActualizar &&
      this.coordinadorExtraccionLazy &&
      this.globalesService.preporteExcel(this, "coordinadorExtraccion")
    );
  }
  get datosReporteCoordinadorExtraccionPdf() {
    return !(
      this.coordinadorExtraccionActualizar &&
      this.coordinadorExtraccionLazy &&
      this.globalesService.preportePdf(this, "coordinadorExtraccion")
    );
  }
  reporteCoordinadorExtraccionExcel(form: any) {
    var nombre: string = "CoordinadorExtraccion.xlsx";
    var path: string = "file/reporteExcel";
    var parametros = {};
    parametros["entradas"] = {
      coordinadorExtraccion: this.coordinadorExtraccion
    };
    parametros["plantilla"] = "CoordinadorExtraccion.xlsx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteCoordinadorExtraccionWord(form: any) {
    var nombre: string = "CoordinadorExtraccion.docx";
    var path: string = "file/reporteWord";
    var parametros = {};
    parametros["entradas"] = {
      coordinadorExtraccion: this.coordinadorExtraccion
    };
    parametros["plantilla"] = "CoordinadorExtraccion.docx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(
      parametros["plantilla"],
      parametros["salida"],
      path,
      parametros
    );
  }
  reporteCoordinadorExtraccionPdf(form: any) {
    var nombre: string = "CoordinadorExtraccion.docx";
    var path: string = "file/reportePdf";
    var parametros = {};
    parametros["entradas"] = {
      coordinadorExtraccion: this.coordinadorExtraccion
    };
    parametros["plantilla"] = "CoordinadorExtraccion.docx";
    parametros["salida"] = "CoordinadorExtraccion.pdf";
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
    this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
    this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionCancelar = true;
  }
  buscarCoordinadorExtraccionFront(form: any) {
    this.accionesBuscar();
    var vcoordinadorExtraccion: CoordinadorExtraccion = new CoordinadorExtraccion();
    vcoordinadorExtraccion.from(this.coordinadorExtraccion);
    this.configuracionCoordinadorExtraccion = new ConfigurarCoordinadorExtraccion();
    this.configuracionCoordinadorExtraccion.permisosTabla = {
      tabla: "coordinadorExtraccion",
      permiso: 8
    };
    this.configuracionCoordinadorExtraccion.titulo =
      "Buscar " + this.permisosTabla.etiqueta;
    this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta = vcoordinadorExtraccion;
    this.permisosacciones();
    $("#buscarCoordinadorExtraccion_" + this.nombre).modal();
  }
  buscarCoordinadorExtraccionBack(
    coordinadorExtraccion: CoordinadorExtraccion
  ) {
    this.coordinadorExtraccion_service.getCoordinadorExtraccionesByDto(
      coordinadorExtraccion,
      this.eventoSrvCoordinadorExtraccionBuscar,
      this
    );
  }
  eventoSrvCoordinadorExtraccionBuscar(lista, objeto) {
    objeto.lista_coordinadorExtracciones = lista;
    if (lista && lista.length > 0) {
      objeto.coordinadorExtraccion = lista[0];
      objeto.coordinadorExtraccionLazy = false;
      objeto.coordinadorExtraccion_service.lazyCoordinadorExtraccion(
        objeto.coordinadorExtraccion,
        objeto.evn_lazy_coordinadorExtraccion,
        objeto
      );
    }
  }
  guardarCoordinadorExtraccionFront(form: any) {
    this.accion = 5; // ********************************************************************************************** maquina
    this.guardarCoordinadorExtraccionBack(this.coordinadorExtraccion);
    this.accionesBuscar(); // ********************************************************************************* maquina
    this.permisosacciones();
  }
  guardarCoordinadorExtraccionBack(
    coordinadorExtraccion: CoordinadorExtraccion
  ) {
    if (coordinadorExtraccion.usuarioUltMov == null)
      coordinadorExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
    if (
      coordinadorExtraccion.status == null ||
      coordinadorExtraccion.status == ""
    )
      coordinadorExtraccion.status = 1;
    this.coordinadorExtraccion_service.guardarCoordinadorExtraccion(
      coordinadorExtraccion,
      this.eventoSrvCoordinadorExtraccionGuardar,
      this
    );
  }
  eventoSrvCoordinadorExtraccionGuardar(coordinadorExtraccion, obj) {
    obj.coordinadorExtraccion = coordinadorExtraccion;
    bootbox.alert("Datos guardados con éxito");
    var aux: CoordinadorExtraccion = new CoordinadorExtraccion();
    aux.from(coordinadorExtraccion);
    obj.coordinadorExtraccionChange.emit(aux);
    obj.coordinadorExtraccionTablaChange.emit(aux);
    obj.coordinadorExtraccionLazy = false;
    obj.coordinadorExtraccion_service.lazyCoordinadorExtraccion(
      obj.coordinadorExtraccion,
      obj.evn_lazy_coordinadorExtraccion,
      obj
    );
    obj.accionesActualizar();
  }
  actualizarCoordinadorExtraccionFront(form: any) {
    this.accion = 3; // ************************************************************************************* maquina
    this.actualizarCoordinadorExtraccionBack(this.coordinadorExtraccion);
    this.accionesBuscar(); // ***************************************************************************** maquina
    this.permisosacciones();
  }
  actualizarCoordinadorExtraccionBack(
    coordinadorExtraccion: CoordinadorExtraccion
  ) {
    coordinadorExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
    this.coordinadorExtraccion_service.actualizarCoordinadorExtraccion(
      coordinadorExtraccion,
      this.eventoSrvCoordinadorExtraccionActualizar,
      this
    );
  }
  eventoSrvCoordinadorExtraccionActualizar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos actualizados con éxito");
      var aux: CoordinadorExtraccion = new CoordinadorExtraccion();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.coordinadorExtraccionLazy = false;
      obj.coordinadorExtraccion_service.lazyCoordinadorExtraccion(
        obj.coordinadorExtraccion,
        obj.evn_lazy_coordinadorExtraccion,
        obj
      );
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
      aux.from(obj.coordinadorExtraccion);
      obj.coordinadorExtraccionChange.emit(aux);
      obj.coordinadorExtraccionTablaChange.emit(aux);
      obj.accionesActualizar();
    }
  }
  eliminarCoordinadorExtraccionFront(form: any) {
    this.accion = 4;
    this.eliminarCoordinadorExtraccionBack(this.coordinadorExtraccion);
    this.permisosacciones();
    this.accionesBuscar();
  }
  eliminarCoordinadorExtraccionBack(
    coordinadorExtraccion: CoordinadorExtraccion
  ) {
    coordinadorExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
    this.coordinadorExtraccion_service.eliminarCoordinadorExtraccion(
      coordinadorExtraccion,
      this.eventoSrvCoordinadorExtraccionEliminar,
      this
    );
  }
  eventoSrvCoordinadorExtraccionEliminar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos eliminados con éxito");
      obj.coordinadorExtraccion = new CoordinadorExtraccion();
      obj.coordinadorExtraccionChange.emit(obj.coordinadorExtraccion);
      obj.coordinadorExtraccionTablaChange.emit(obj.coordinadorExtraccion);
      obj.limpiarCampos();
    }
  }
  cancelarCoordinadorExtraccionFront(form: any) {
    this.accion = 6;
    this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
    this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = true;
    this.permisosacciones();
  }
  nuevoCoordinadorExtraccionFront(form: any) {
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
        this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionBuscar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
        this.coordinadorExtraccionGuardar = this.coordinadorExtraccionCancelar = true;
      }.bind(this)
    });
  }

  configuarCombosObjetos() {
    this.lista_usuarioUltMovCoordinadorExtraccionUsuario = [];
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovCoordinadorExtraccionUsuario,
      this
    );
    this.lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion = [];
    this.registroExtraccion_service.getRegistroExtraccionesActivos(
      this.evtGetIdregistroExtraccionCoordinadorExtraccionRegistroExtraccion,
      this
    );
  }
  configurarTablasConjuntos() {}

  accionesActualizar() {
    this.accion = 7;
    this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionGuardar = false;
    this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = this.coordinadorExtraccionCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
  }
  evtCoordinadorExtraccionSeleccionado(coordinadorExtraccion) {
    this.coordinadorExtraccion = new CoordinadorExtraccion();
    this.coordinadorExtraccion.from(coordinadorExtraccion);
    this.coordinadorExtraccionLazy = false;
    this.coordinadorExtraccion_service.lazyCoordinadorExtraccion(
      this.coordinadorExtraccion,
      this.evn_lazy_coordinadorExtraccion,
      this
    );
    this.accion = 7;
    this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionGuardar = false;
    this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = this.coordinadorExtraccionCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
    $("#buscarCoordinadorExtraccion_" + this.nombre).modal("hide");
  }
  ngOnInit() {
    this.accion = 0; // *********************************************************************************************************** maquina
    this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false; // ******************** maquina
    this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = true; // ************************************************************************************* maquina
    this.permisosacciones();
  }

  permisosacciones() {
    if (this.coordinadorExtraccionBuscar)
      this.coordinadorExtraccionBuscar = this.globalesService.pbuscar(
        this,
        "coordinadorExtraccion"
      );
    if (this.coordinadorExtraccionActualizar)
      this.coordinadorExtraccionActualizar =
        this.globalesService.pacutalizar(this, "coordinadorExtraccion") &&
        this.globalesService.pbuscar(this, "coordinadorExtraccion");
    if (this.coordinadorExtraccionEliminar)
      this.coordinadorExtraccionEliminar =
        this.globalesService.peliminar(this, "coordinadorExtraccion") &&
        this.globalesService.pbuscar(this, "coordinadorExtraccion");
    if (this.coordinadorExtraccionAgregar)
      this.coordinadorExtraccionAgregar = this.globalesService.pagregar(
        this,
        "coordinadorExtraccion"
      );
  }
  permisosaccionesInicio() {
    this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false; // *************************** maquina
    this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = true; // ************************************************************************************* maquina
    this.accion = 0; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  limpiarCampos() {
    this.coordinadorExtraccion = new CoordinadorExtraccion();

    this.usuarioUltMovCoordinadorExtraccionUsuarioEleccion = new Usuario();
    this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion = new RegistroExtraccion();

    this.coordinadorExtraccionChange.emit(this.coordinadorExtraccion);
    this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false; // *************************** maquina
    this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = true; // ************************************************************************************* maquina
    this.accion = 6; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }

  addCoordinadorExtraccion() {
    this.coordinadorExtraccion.nombre  = this.coordinadorExtraccion.nombre ? (this.coordinadorExtraccion.nombre as string).trim() : null;
    this.coordinadorExtraccion.primerApellido = this.coordinadorExtraccion.primerApellido ? (this.coordinadorExtraccion.primerApellido as string).trim() : null;
    this.coordinadorExtraccion.segundoApellido = this.coordinadorExtraccion.segundoApellido ? (this.coordinadorExtraccion.segundoApellido as string).trim() : null;

    if ( (!this.coordinadorExtraccion.nombre || this.coordinadorExtraccion.nombre.length === 0) && (!this.coordinadorExtraccion.primerApellido || this.coordinadorExtraccion.primerApellido.length === 0)) {
        bootbox.alert("El nombre y el primer apellido son requeridos");
        return;
    }

    if (!this.coordinadorExtraccion.nombre || this.coordinadorExtraccion.nombre.length === 0) {
      bootbox.alert("El nombre es requerido");
      return;
    }

    if (!(this.coordinadorExtraccion.nombre as string).match(/^[a-zA-Z ]*$/) ) {
      bootbox.alert("El nombre solo permite letras");
      return;
    }

    if (!this.coordinadorExtraccion.primerApellido || this.coordinadorExtraccion.primerApellido.length === 0) {
      bootbox.alert("El primer apellido es requerido");
      return;
    }

    if (!(this.coordinadorExtraccion.primerApellido as string).match(/^[a-zA-Z ]*$/) ) {
      bootbox.alert("El primer apellido solo permite letras");
      return;
    }

    if (this.coordinadorExtraccion.segundoApellido && !(this.coordinadorExtraccion.primerApellido as string).match(/^[a-zA-Z ]*$/)) {
      bootbox.alert("El segundo apellido solo permite letras");
      return;
    }

      if (this.listaCoordinadorExtraccion.length < 3) {
        this.listaCoordinadorExtraccion.push(this.coordinadorExtraccion);
        this.coordinadorExtraccion = new CoordinadorExtraccion();
      } else {
        bootbox.alert("Solo se permite 3 registros.");
      }
  }

  public removeCoordinadorExtraccionHandler({ dataItem }) {
    this.listaCoordinadorExtraccion.splice(
      this.listaCoordinadorExtraccion.indexOf(dataItem),
      1
    );
  }
}
