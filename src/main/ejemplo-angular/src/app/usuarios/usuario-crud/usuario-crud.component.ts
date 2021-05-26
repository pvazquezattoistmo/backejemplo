import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { CoreService } from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/usuario.service';
import { ConfigurarUsuario } from '../shared/configurar-usuario'
import { UsuarioBtc } from '../../usuario-btcs/shared/usuario-btc';
import { UsuarioBtcService } from '../../usuario-btcs/shared/usuario-btc.service';
import { PerfilRedIsssteService } from '../../perfil-red-issstes/shared/perfil-red-issste.service';
import { PerfilRedIssste } from '../../perfil-red-issstes/shared/perfil-red-issste';
////import { PerfilBtcService } from '../../perfil-btcs/shared/perfil-btc.service';
//import { PerfilBtc } from '../../perfil-btcs/shared/perfil-btc';
import { CatalogoCargo } from '../../catalogo-cargos/shared/catalogo-cargo';
import { CatalogoCargoService } from '../../catalogo-cargos/shared/catalogo-cargo.service';
import { HospitalService } from '../../hospitales/shared/hospital.service';
import { Hospital } from '../../hospitales/shared/hospital';
import { EntidadFederativaService } from '../../entidad-federativas/shared/entidad-federativa.service';
import { EntidadFederativa } from '../../entidad-federativas/shared/entidad-federativa';
import { Perfil } from '../../perfiles/shared/perfil';
import { PerfilService } from '../../perfiles/shared/perfil.service';

declare var $: any;
declare var bootbox: any;
@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.css'],
  providers: [GlobalesService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    FileService,
    UsuarioService,
    UsuarioService,
    EntidadFederativaService,
    PerfilRedIsssteService,
    //                PerfilBtcService,
    CatalogoCargoService,
    HospitalService,
    UsuarioBtcService,
    PerfilService
  ]
})
export class UsuarioCrudComponent implements OnInit {
  public opcionUsuario = 0;
  public validosUsuario: any = {
    id: false,
    password: false,
    username: false,
    fechaBaja: false,
    primerApellido: false,
    fechaRegistro: false,
    segundoApellido: false,
    fechaActualizacion: false,
    nombre: false,
    correoElectronico: false,
    status: false,
    usuarioUltMov: false,
    perfil: false,
    idcargo: false,
    idhospital: false,

  };

  @Input() ocultarConjuntosUsuario: boolean = false;
  @Input() nombre: string = "";
  public permisosTabla = { "tabla": "usuario", "permiso": 0, "etiqueta": "" };
  public permisosAtributos = [];
  public permisosConjuntos = [];
  //  public perfil: Perfil;
  public accion = 0;
  usuariologueado;
  public usuarioLazy: boolean = false;
  public usuarioPermisos: boolean = false;
  @Input() public validaciones: boolean = false;
  @Output() validacionesChange = new EventEmitter<boolean>();
  public perfil: Perfil;
  @Input() public usuario: Usuario = new Usuario();
  @Output() usuarioChange = new EventEmitter<Usuario>();
  @Output() usuarioTablaChange = new EventEmitter<Usuario>();
  public lista_usuarios: Usuario[] = [];
  public configuracionUsuario: ConfigurarUsuario;
  public usuarioBuscar: boolean
  public usuarioSeleccion: boolean
  public usuarioAgregar: boolean
  public usuarioActualizar: boolean
  public usuarioEliminar: boolean;
  public usuarioGuardar: boolean;
  public usuarioCancelar: boolean;
  public usuarioUltMovUsuarioUsuarioEleccion: Usuario = new Usuario();
  public lista_usuarioUltMovUsuarioUsuario: Usuario[] = [];
  public usuarioUltMovUsuarioUsuarioEditar: boolean = false;
  public perfilUsuarioPerfilEleccion: Perfil = new Perfil();
  public lista_perfilUsuarioPerfil: Perfil[] = [];
  public perfilUsuarioPerfilEditar: boolean = false;
  public idcargoUsuarioCatalogoCargoEleccion: CatalogoCargo = new CatalogoCargo();
  public lista_idcargoUsuarioCatalogoCargo: CatalogoCargo[] = [];
  public idcargoUsuarioCatalogoCargoEditar: boolean = false;
  public idhospitalUsuarioHospitalEleccion: Hospital = new Hospital();
  public lista_idhospitalUsuarioHospital: Hospital[] = [];
  public idhospitalUsuarioHospitalEditar: boolean = false;

  get usuarioOcultarConjuntos() {
    if (this.ocultarConjuntosUsuario)
      return true
    return !this.usuarioActualizar;
  }

  ngOnChanges(changes) {
    if (changes.usuario && changes.usuario.currentValue == null &&
      this.usuario == null) this.usuario = new Usuario();
    else {
      var aux: Usuario = new Usuario();
      if (this.usuario)
        aux.from(this.usuario)
      if (aux.isOk && aux.isOk()) {

        this.accion = 7;
        this.usuarioBuscar = this.usuarioAgregar = this.usuarioSeleccion = this.usuarioGuardar = false;
        this.usuarioActualizar = this.usuarioEliminar = this.usuarioCancelar = true;
        this.permisosacciones();
        var thiss: any;
        thiss = this;
        if (thiss.configuarCombosObjetos)
          thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
          thiss.configurarTablasConjuntos();
      } else {
        this.accion = 2;
        this.usuarioSeleccion = this.usuarioAgregar = this.usuarioBuscar = this.usuarioActualizar = this.usuarioEliminar = false;
        this.usuarioGuardar = this.usuarioCancelar = true;
      }
    }
  }
  obtenerPermisos() {
    var id_expe = -1;
    var tablas = [
      "usuario",
      "usuario",
      "hospital",
      "catalogoCargo",
      "entidadFederativa",
      "perfil",

    ];
    var parametros: any = {
      "id_usu": this.usuariologueado.id,
      "tablas": tablas,
      "id_exp": id_expe
    };
    this.usuarioPermisos = false;
    this.coreService.permisos(parametros, this.evtCorePermisos, this);
  }

  constructor(
    public globalesService: GlobalesService,
    public zone: NgZone, public fileservice: FileService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coreService: CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public usuario_service: UsuarioService,

    public perfilRedIssste_service: PerfilRedIsssteService,

    public catalogoCargo_service: CatalogoCargoService,

    public hospital_service: HospitalService,

    public entidadFederativa_service: EntidadFederativaService,
    public perfil_service: PerfilService,

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
    this.usuarioSeleccion = this.usuarioCancelar = this.usuarioGuardar = this.usuarioBuscar = this.usuarioAgregar = this.usuarioActualizar = this.usuarioEliminar = false;
    this.configuracionUsuario = new ConfigurarUsuario();
    this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovUsuarioUsuario, this);
    this.perfil_service.getPerfilesActivos(this.evtGetPerfilUsuarioPerfil, this);
    this.catalogoCargo_service.getCatalogoCargosActivos(this.evtGetIdcargoUsuarioCatalogoCargo, this);
    this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalUsuarioHospital, this);

    this.limpiarCampos();
  }


  //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
  evtCorePermisos(permisos, obj) {
    obj.usuarioPermisos = true;
    if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo && permisos.usuario.PermisoAtributo.length > 0) {
      obj.permisosAtributos = permisos.usuario.PermisoAtributo;
    } else {
      obj.usuariologueado = undefined;
    }
    if (permisos && permisos.usuario && permisos.usuario.PermisoConjunto && permisos.usuario.PermisoConjunto.length > 0) {
      obj.permisosConjuntos = permisos.usuario.PermisoConjunto;
    }
    if (permisos && permisos.usuario && permisos.usuario.PermisoTabla && permisos.usuario.PermisoTabla.length > 0) {
      obj.permisosTabla = permisos.usuario.PermisoTabla[0];
      obj.permisosaccionesInicio();
    }
    if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo && permisos.perfil.PermisoAtributo.length > 0) {
     //obj.configuracion$1= permisos.perfil.PermisoAtributo;
      obj.permisosAtributos.push(permisos.perfil.PermisoAtributo);
    }
    if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo && permisos.perfil.PermisoConjunto.length > 0) {
      obj.permisosConjuntos.push(permisos.perfil.PermisoConjunto);
    }
    if (permisos && permisos.perfil && permisos.perfil.PermisoTabla && permisos.perfil.PermisoTabla.length > 0) {
     //obj.configuracion$1= permisos.perfil.PermisoTabla[0];
     // obj.permisosTabla.push(permisos.perfil.PermisoTabla[0]);
    }
    if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoAtributo && permisos.catalogoCargo.PermisoAtributo.length > 0) {
     //obj.configuracion$1= permisos.catalogoCargo.PermisoAtributo;
      obj.permisosAtributos.push(permisos.catalogoCargo.PermisoAtributo);
    }
    if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoAtributo && permisos.catalogoCargo.PermisoConjunto.length > 0) {
      obj.permisosConjuntos.push(permisos.catalogoCargo.PermisoConjunto);
    }
    if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoTabla && permisos.catalogoCargo.PermisoTabla.length > 0) {
     //obj.configuracion$1= permisos.catalogoCargo.PermisoTabla[0];
     // obj.permisosTabla.push(permisos.catalogoCargo.PermisoTabla[0]);
    }
    if (permisos && permisos.hospital && permisos.hospital.PermisoAtributo && permisos.hospital.PermisoAtributo.length > 0) {
     //obj.configuracion$1= permisos.hospital.PermisoAtributo;
      obj.permisosAtributos.push(permisos.hospital.PermisoAtributo);
    }
    if (permisos && permisos.hospital && permisos.hospital.PermisoAtributo && permisos.hospital.PermisoConjunto.length > 0) {
      obj.permisosConjuntos.push(permisos.hospital.PermisoConjunto);
    }
    if (permisos && permisos.hospital && permisos.hospital.PermisoTabla && permisos.hospital.PermisoTabla.length > 0) {
     //obj.configuracion$1= permisos.hospital.PermisoTabla[0];
     // obj.permisosTabla.push(permisos.hospital.PermisoTabla[0]);
    }

    if (obj.configurarTablasConjuntos)
      obj.configurarTablasConjuntos();
  }
  //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


  evtGetUsuarioUltMovUsuarioUsuario(lista_usuarioUltMovUsuarioUsuario, obj) {
    obj.lista_usuarioUltMovUsuarioUsuario = lista_usuarioUltMovUsuarioUsuario;
    obj.actualizar_UsuarioUltMovUsuarioUsuario();
  }
  evtGetPerfilUsuarioPerfil(lista_perfilUsuarioPerfil, obj) {
    obj.lista_perfilUsuarioPerfil = lista_perfilUsuarioPerfil;
    obj.actualizar_PerfilUsuarioPerfil();
  }
  evtGetIdcargoUsuarioCatalogoCargo(lista_idcargoUsuarioCatalogoCargo, obj) {
    obj.lista_idcargoUsuarioCatalogoCargo = lista_idcargoUsuarioCatalogoCargo;
    obj.actualizar_IdcargoUsuarioCatalogoCargo();
  }
  evtGetIdhospitalUsuarioHospital(lista_idhospitalUsuarioHospital, obj) {
    obj.lista_idhospitalUsuarioHospital = lista_idhospitalUsuarioHospital;
    obj.actualizar_IdhospitalUsuarioHospital();
  }


  actualizar_UsuarioUltMovUsuarioUsuario() {
    if (this.usuarioUltMovUsuarioUsuarioEleccion)
      for (let eleme of this.lista_usuarioUltMovUsuarioUsuario)
        if (eleme.id == this.usuarioUltMovUsuarioUsuarioEleccion.id) {
          this.usuarioUltMovUsuarioUsuarioEleccion = eleme;
          break;
        }
  }
  actualizar_PerfilUsuarioPerfil() {
    if (this.perfilUsuarioPerfilEleccion)
      for (let eleme of this.lista_perfilUsuarioPerfil)
        if (eleme.id == this.perfilUsuarioPerfilEleccion.id) {
          this.perfilUsuarioPerfilEleccion = eleme;
          break;
        }
  }
  actualizar_IdcargoUsuarioCatalogoCargo() {
    if (this.idcargoUsuarioCatalogoCargoEleccion)
      for (let eleme of this.lista_idcargoUsuarioCatalogoCargo)
        if (eleme.id == this.idcargoUsuarioCatalogoCargoEleccion.id) {
          this.idcargoUsuarioCatalogoCargoEleccion = eleme;
          break;
        }
  }
  actualizar_IdhospitalUsuarioHospital() {
    if (this.idhospitalUsuarioHospitalEleccion)
      for (let eleme of this.lista_idhospitalUsuarioHospital)
        if (eleme.id == this.idhospitalUsuarioHospitalEleccion.id) {
          this.idhospitalUsuarioHospitalEleccion = eleme;
          break;
        }
  }

  ngDoCheck() {

  }


  validaAcciones(vall) {
    return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
  }

  get validaId() {
    return this.validosUsuario['id'];
  }
  get validaIds() {
    return this.validosUsuario['id'];
  }
  get validaPassword() {
    return this.validosUsuario['password'];
  }
  get validaUsername() {
    return this.validosUsuario['username'];
  }
  get validaFechaBaja() {
    return this.validosUsuario['fechaBaja'];
  }
  get validaPrimerApellido() {
    return this.validosUsuario['primerApellido'];
  }
  get validaFechaRegistro() {
    return this.validosUsuario['fechaRegistro'];
  }
  get validaSegundoApellido() {
    return this.validosUsuario['segundoApellido'];
  }
  get validaFechaActualizacion() {
    return this.validosUsuario['fechaActualizacion'];
  }
  get validaNombre() {
    return this.validosUsuario['nombre'];
  }
  get validaCorreoElectronico() {
    return this.validosUsuario['correoElectronico'];
  }
  get validaStatus() {
    return this.validosUsuario['status'];
  }
  get validaUsuarioUltMov() {
    return this.validosUsuario['usuarioUltMov'];
  }
  get validaPerfil() {
    return this.validosUsuario['perfil'];
  }
  get validaIdcargo() {
    return this.validosUsuario['idcargo'];
  }
  get validaIdhospital() {
    return this.validosUsuario['idhospital'];
  }

  get validaTodosc() {
    //var salida =  this.validaId && this.validaPassword && this.validaUsername && this.validaStatus && this.validaUsuarioUltMov && this.validaUsuarioBtc && this.validaPerfil;
    var salida = this.validaPassword && this.validaUsername && this.validaPrimerApellido && this.validaSegundoApellido && this.validaNombre && this.validaCorreoElectronico && this.validaPerfil && this.validaIdcargo && this.validaIdhospital;
    if (salida != this.validaciones){
      setTimeout(() => {
        this.validacionesChange.emit(salida);
        this.validaciones = salida;
        return salida;
      });
    }
    return this.validaciones;
  }

  obtenerUsuarios(lista, objeto) {
    objeto.lista_usuarios = lista;
    if (lista && lista.length > 0) {
      objeto.usuario.from(lista[0]);
      objeto.evtUsuarioSeleccionado(objeto.usuario);
      if (objeto.configuarCombosObjetos)
        objeto.configuarCombosObjetos();
    }
  }
  evn_lazy_usuario(usuario, objeto) {
    objeto.usuario = usuario;
    objeto.usuarioChange.emit(objeto.usuario);
    objeto.configuarCombosObjetos();
    objeto.usuarioLazy = true;
  }
  /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
  get datosReporteUsuarioWord() {
    return !(this.usuarioActualizar && this.usuarioLazy && this.globalesService.preporteWord(this, "usuario"));
  }
  get datosReporteUsuarioExcel() {
    return !(this.usuarioActualizar && this.usuarioLazy && this.globalesService.preporteExcel(this, "usuario"));
  }
  get datosReporteUsuarioPdf() {
    return !(this.usuarioActualizar && this.usuarioLazy && this.globalesService.preportePdf(this, "usuario"));
  }
  reporteUsuarioExcel() {
    var nombre: string = "Usuario.xlsx"
    var path: string = "file/reporteExcel"
    var parametros = {};
    parametros["entradas"] = { "usuario": this.usuario };
    parametros["plantilla"] = "Usuario.xlsx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
  }
  reporteUsuarioWord() {
    var nombre: string = "Usuario.docx"
    var path: string = "file/reporteWord"
    var parametros = {};
    parametros["entradas"] = { "usuario": this.usuario };
    parametros["plantilla"] = "Usuario.docx";
    parametros["salida"] = nombre;
    this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
  }
  reporteUsuarioPdf() {
    var nombre: string = "Usuario.docx"
    var path: string = "file/reportePdf"
    var parametros = {};
    parametros["entradas"] = { "usuario": this.usuario };
    parametros["plantilla"] = "Usuario.docx";
    parametros["salida"] = "Usuario.pdf";
    this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
  }
  /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

  accionesBuscar() {
    this.accion = 1;
    this.usuarioGuardar = this.usuarioActualizar = this.usuarioEliminar = this.usuarioCancelar = false;
    this.usuarioBuscar = this.usuarioAgregar = true;
  }
  buscarUsuarioFront() {
    this.accionesBuscar();
    var vusuario: Usuario = new Usuario();
    vusuario.from(this.usuario);
    this.configuracionUsuario = new ConfigurarUsuario();
    this.configuracionUsuario.permisosTabla = { "tabla": "usuario", "permiso": 8 };
    this.configuracionUsuario.titulo = "Buscar " + this.permisosTabla.etiqueta;
    this.configuracionUsuario.usuarioConsulta = vusuario;
    this.permisosacciones();
    $("#buscarUsuario_" + this.nombre).modal();
  }
  buscarUsuarioBack(usuario: Usuario) {
    this.usuario_service.getUsuariosByDto(new Usuario(usuario), this.eventoSrvUsuarioBuscar, this);
  }
  eventoSrvUsuarioBuscar(lista, objeto) {
    objeto.lista_usuarios = lista;
    if (lista && lista.length > 0) {
      objeto.usuario = lista[0];
      objeto.usuarioLazy = false;
      objeto.usuario_service.lazyUsuario(new Usuario(objeto.usuario), objeto.evn_lazy_usuario, objeto);
    }
  }
  guardarUsuarioFront() {
    // this.usuario_service.getUsuarioByUsername(this.usuario.username, this.eventoSrvusuariobusUsername, this);
    bootbox.confirm({
      message: "¿Deseas guardar el registro?",
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
          this.accion = 5;  // ********************************************************************************************** maquina
          this.guardarUsuarioBack(this.usuario);
          this.accionesBuscar();    // ********************************************************************************* maquina
          this.permisosacciones();
        }
      }.bind(this)
    });
  }

  // eventoSrvusuariobusUsername(usuario, obj) {
  //   ("usuario id: " + usuario.id);
  //   if (usuario.id != null) {
  //     bootbox.alert("¡El Usuario ingresado ya existe en el sistema, favor de ingresar uno diferente!");
  //     return;
  //   }
  //   bootbox.confirm({
  //     message: "¿Deseas guardar el registro?",
  //     buttons: {
  //       confirm: {
  //         label: 'Si',
  //         className: 'btn-success'
  //       },
  //       cancel: {
  //         label: 'No',
  //         className: 'btn-danger'
  //       }
  //     },
  //     callback: function (result) {
  //       if (result) {
  //         obj.accion = 5;  // ********************************************************************************************** maquina
  //         obj.guardarUsuarioBack(obj.usuario);
  //         obj.accionesBuscar();    // ********************************************************************************* maquina
  //         obj.permisosacciones();
  //       }
  //     }.bind(obj)
  //   });
  // }

  guardarUsuarioBack(usuario: Usuario) {
    if (usuario.usuarioUltMov == null) usuario.usuarioUltMov = this.globalesService.dameUsuario();
    if (usuario.status == null || usuario.status == "") usuario.status = 1;
    usuario.fechaRegistro = new Date();
    usuario = new Usuario(usuario);
    this.usuario_service.guardarUsuario(new Usuario(usuario), this.eventoSrvUsuarioGuardar, this);
  }
  eventoSrvUsuarioGuardar(usuario, obj) {
    obj.usuario = usuario;
    bootbox.alert("Datos guardados con éxito");
    var aux: Usuario = new Usuario();
    aux.from(usuario);
    obj.usuarioChange.emit(aux);
    obj.usuarioTablaChange.emit(aux);
    obj.usuarioLazy = false;
    obj.usuario_service.lazyUsuario(new Usuario(obj.usuario), obj.evn_lazy_usuario, obj);
    obj.accionesActualizar();

  }
  actualizarUsuarioFront() {
    // this.usuario_service.getUsuarioByUsername(this.usuario.username, this.eventoSrvusuariobusUsernameAct, this);
    bootbox.confirm({
      message: '¿Deseas actualizar el registro?',
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
          this.accion = 3;         // ************************************************************************************* maquina
          this.actualizarUsuarioBack(this.usuario);
          this.accionesBuscar(); // ***************************************************************************** maquina
          this.permisosacciones();
        }
      }.bind(this)
    });
  }

  // eventoSrvusuariobusUsernameAct(usuario, obj) {
  //   ('usuario id: ' + usuario.id);
  //   ('obj.usuario id: ' + obj.usuario.id);
  //   if (usuario.id !== obj.usuario.id) {
  //     bootbox.alert('¡El Usuario ingresado ya existe en el sistema, favor de ingresar uno diferente!');
  //     return;
  //   }
  //   bootbox.confirm({
  //     message: '¿Deseas actualizar el registro?',
  //     buttons: {
  //       confirm: {
  //         label: 'Si',
  //         className: 'btn-success'
  //       },
  //       cancel: {
  //         label: 'No',
  //         className: 'btn-danger'
  //       }
  //     },
  //     callback: function (result) {
  //       if (result) {
  //         obj.accion = 3;         // ************************************************************************************* maquina
  //         obj.actualizarUsuarioBack(obj.usuario);
  //         obj.accionesBuscar(); // ***************************************************************************** maquina
  //         obj.permisosacciones();
  //       }
  //     }.bind(obj)
  //   });
  // }

  actualizarUsuarioBack(usuario: Usuario) {
    usuario.usuarioUltMov = this.globalesService.dameUsuario();
    usuario.fechaActualizacion = new Date();
    this.usuario_service.actualizarUsuario(new Usuario(usuario), this.eventoSrvUsuarioActualizar, this);
  }
  eventoSrvUsuarioActualizar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos actualizados con éxito");
      var aux: Usuario = new Usuario();
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.usuarioLazy = false;
      obj.usuario_service.lazyUsuario(new Usuario(obj.usuario), obj.evn_lazy_usuario, obj);
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
      aux.from(obj.usuario);
      obj.usuarioChange.emit(aux);
      obj.usuarioTablaChange.emit(aux);
      obj.accionesActualizar();
    }
  }
  eliminarUsuarioFront() {
    bootbox.confirm({
      message: "¿Deseas eliminar el registro?",
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
          this.accion = 4;
          this.eliminarUsuarioBack(this.usuario);
          this.permisosacciones();
          this.accionesBuscar();
        }
      }.bind(this)
    });
    // this.accion = 4;
    // this.eliminarUsuarioBack(this.usuario);
    // this.permisosacciones();
    // this.accionesBuscar();
  }
  eliminarUsuarioBack(usuario: Usuario) {
    let usuarioborrar : Usuario = new Usuario();
    usuarioborrar.from(usuario);
    usuarioborrar.usuarioUltMov = this.globalesService.dameUsuario();
    usuarioborrar.fechaBaja = new Date();
    usuarioborrar.status = 0;

    this.usuario_service.actualizarUsuario(new Usuario(usuarioborrar), this.eventoSrvUsuarioEliminar, this);
  }
  eventoSrvUsuarioEliminar(retorno, obj) {
    if (retorno) {
      bootbox.alert("Datos eliminados con éxito");
      obj.usuario = new Usuario();
      obj.usuarioChange.emit(obj.usuario);
      obj.usuarioTablaChange.emit(obj.usuario);
      obj.limpiarCampos();
    }
  }
  cancelarUsuarioFront() {
    this.accion = 6;
    this.usuarioCancelar = this.usuarioGuardar = this.usuarioActualizar = this.usuarioEliminar = false;
    this.usuarioBuscar = this.usuarioAgregar = true;
    this.permisosacciones();
  }
  nuevoUsuarioFront() {
    this.accion = 2;
    this.usuarioSeleccion = this.usuarioAgregar = this.usuarioBuscar = this.usuarioActualizar = this.usuarioEliminar = false;
    this.usuarioGuardar = this.usuarioCancelar = true;
    // bootbox.confirm({
    //     message: "¿Deseas limpiar los campos de ingreso?",
    //     buttons: {
    //         confirm: {
    //             label: 'Si',
    //             className: 'btn-success'
    //         },
    //         cancel: {
    //             label: 'No',
    //             className: 'btn-danger'
    //         }
    //     },
    //     callback: function(result) {
    //         if (result)
    //             this.limpiarCampos();
    //         this.usuarioSeleccion = this.usuarioAgregar = this.usuarioBuscar = this.usuarioActualizar = this.usuarioEliminar = false;
    //         this.usuarioGuardar = this.usuarioCancelar = true;
    //     }.bind(this)
    // });
  }

  configuarCombosObjetos() {
    this.lista_usuarioUltMovUsuarioUsuario = [];
    this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovUsuarioUsuario, this);
    this.lista_perfilUsuarioPerfil = [];
    this.perfil_service.getPerfilesActivos(this.evtGetPerfilUsuarioPerfil, this);
    this.lista_idcargoUsuarioCatalogoCargo = [];
    this.catalogoCargo_service.getCatalogoCargosActivos(this.evtGetIdcargoUsuarioCatalogoCargo, this);
    this.lista_idhospitalUsuarioHospital = [];
    this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalUsuarioHospital, this);
  }
  configurarTablasConjuntos() {
  }

  accionesActualizar() {
    this.accion = 7;
    this.usuarioBuscar = this.usuarioAgregar = this.usuarioSeleccion = this.usuarioGuardar = false;
    this.usuarioActualizar = this.usuarioEliminar = this.usuarioCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos)
      thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos)
      thiss.configurarTablasConjuntos();
  }
  evtUsuarioSeleccionado(usuario) {
    this.usuario = new Usuario();
    this.usuario.from(usuario);
    this.usuarioLazy = false;
    this.usuario_service.lazyUsuario(new Usuario(this.usuario), this.evn_lazy_usuario, this);
    this.accion = 7;
    this.usuarioBuscar = this.usuarioAgregar = this.usuarioSeleccion = this.usuarioGuardar = false;
    this.usuarioActualizar = this.usuarioEliminar = this.usuarioCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos)
      thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos)
      thiss.configurarTablasConjuntos();
    $("#buscarUsuario_" + this.nombre).modal("hide");
  }
  ngOnInit() {
    this.accion = 0;                                                // *********************************************************************************************************** maquina
    this.usuarioSeleccion = this.usuarioCancelar = this.usuarioGuardar = this.usuarioActualizar = this.usuarioEliminar = false;        // ******************** maquina
    this.usuarioBuscar = this.usuarioAgregar = true;                            // ************************************************************************************* maquina
    this.permisosacciones();
  }

  permisosacciones() {
    if (this.usuarioBuscar) this.usuarioBuscar = this.globalesService.pbuscar(this, "usuario");
    if (this.usuarioActualizar) this.usuarioActualizar = (this.globalesService.pacutalizar(this, "usuario") && this.globalesService.pbuscar(this, "usuario"));
    if (this.usuarioEliminar) this.usuarioEliminar = (this.globalesService.peliminar(this, "usuario") && this.globalesService.pbuscar(this, "usuario"));
    if (this.usuarioAgregar) this.usuarioAgregar = this.globalesService.pagregar(this, "usuario");
  }
  permisosaccionesInicio() {
    this.usuarioSeleccion = this.usuarioCancelar = this.usuarioGuardar = this.usuarioActualizar = this.usuarioEliminar = false; // *************************** maquina
    this.usuarioBuscar = this.usuarioAgregar = true;                           // ************************************************************************************* maquina
    this.accion = 0;                                                // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  limpiarCampos() {
    this.usuario = new Usuario();

    this.usuarioUltMovUsuarioUsuarioEleccion = new Usuario();
    this.perfilUsuarioPerfilEleccion = new Perfil();
    this.idcargoUsuarioCatalogoCargoEleccion = new CatalogoCargo();
    this.idhospitalUsuarioHospitalEleccion = new Hospital();

    this.usuarioChange.emit(this.usuario);
    this.usuarioSeleccion = this.usuarioCancelar = this.usuarioGuardar = this.usuarioActualizar = this.usuarioEliminar = false; // *************************** maquina
    this.usuarioBuscar = this.usuarioAgregar = true;                           // ************************************************************************************* maquina
    this.accion = 6;                                                // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
}
