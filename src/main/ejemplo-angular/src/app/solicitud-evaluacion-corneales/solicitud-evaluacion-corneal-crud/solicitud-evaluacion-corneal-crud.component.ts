import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter, ɵConsole } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { CoreService } from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service';
import { SolicitudEvaluacionCorneal } from '../shared/solicitud-evaluacion-corneal';
import { SolicitudEvaluacionCornealService } from '../shared/solicitud-evaluacion-corneal.service';
import { ConfigurarSolicitudEvaluacionCorneal } from '../shared/configurar-solicitud-evaluacion-corneal';
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
import { CausaMuerte } from '../../causa-muertes/shared/causa-muerte';
import { CausaMuerteService } from '../../causa-muertes/shared/causa-muerte.service';
import { DatoProcuracionCorneal } from '../../dato-procuracion-corneales/shared/dato-procuracion-corneal';
import { DatoProcuracionCornealService } from '../../dato-procuracion-corneales/shared/dato-procuracion-corneal.service';
import { RecepcionSolicitudEvaluacionService } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service';
import { RecepcionSolicitudEvaluacion } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion';

declare var $: any;
declare var bootbox: any;
@Component({
  selector: 'app-solicitud-evaluacion-corneal-crud',
  templateUrl: './solicitud-evaluacion-corneal-crud.component.html',
  styleUrls: ['./solicitud-evaluacion-corneal-crud.component.css'],
  providers: [
    GlobalesService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    FileService,
    SolicitudEvaluacionCornealService,
    UsuarioService,
    EntidadFederativaService,
    PerfilRedIsssteService,
    HospitalService,
    UsuarioBtcService,
    PerfilService,
    CausaMuerteService,
    DatoProcuracionCornealService,
    RecepcionSolicitudEvaluacionService
  ]
})
export class SolicitudEvaluacionCornealCrudComponent implements OnInit {
  public opcionSolicitudEvaluacionCorneal = 0;
  public mensaje: boolean = true;
  validosSolicitudEvaluacionCorneal: any = {
    id: false,
    fechaBaja: false,
    primerApellido: false,
    fechaRegistro: false,
    fechaMuerte: false,
    segundoApellido: false,
    estatusProceso: false,
    nombre: false,
    numeroExpediente: false,
    edad: false,
    conservacionTemperaturaAmbiente: false,
    horaInicioRefrigracion: false,
    folioSolicitud: false,
    horaMuerte: false,
    fechaActualizacion: false,
    temperaturaRefrigeracion: false,
    status: false,
    usuarioUltMov: false,
    idcausaMuerte: false
  };

  @Input() ocultarConjuntosSolicitudEvaluacionCorneal: boolean = false;
  @Input() nombre: string = '';
  public permisosTabla = {
    tabla: 'solicitudEvaluacionCorneal',
    permiso: 0,
    etiqueta: ''
  };
  public permisosAtributos = [];
  public permisosConjuntos = [];
  //  public perfil: Perfil;
  public accion = 0;
  usuariologueado;
  public solicitudEvaluacionCornealLazy: boolean = false;
  public solicitudEvaluacionCornealPermisos: boolean = false;
  @Input() public validaciones: boolean = false;
  @Output() validacionesChange = new EventEmitter<boolean>();
  public perfil: Perfil;
  @Input()
  public solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
  @Output() solicitudEvaluacionCornealChange = new EventEmitter<
    SolicitudEvaluacionCorneal
  >();
  @Output() solicitudEvaluacionCornealTablaChange = new EventEmitter<
    SolicitudEvaluacionCorneal
  >();
  public lista_solicitudEvaluacionCorneales: SolicitudEvaluacionCorneal[] = [];
  public configuracionSolicitudEvaluacionCorneal: ConfigurarSolicitudEvaluacionCorneal;
  public solicitudEvaluacionCornealBuscar: boolean;
  public solicitudEvaluacionCornealSeleccion: boolean;
  public solicitudEvaluacionCornealAgregar: boolean;
  public solicitudEvaluacionCornealActualizar: boolean;
  public solicitudEvaluacionCornealEliminar: boolean;
  public solicitudEvaluacionCornealGuardar: boolean;
  public solicitudEvaluacionCornealCancelar: boolean;
  public usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion: Usuario = new Usuario();
  public lista_usuarioUltMovSolicitudEvaluacionCornealUsuario: Usuario[] = [];
  public usuarioUltMovSolicitudEvaluacionCornealUsuarioEditar: boolean = false;
  public idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion: CausaMuerte = new CausaMuerte();
  public lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte: CausaMuerte[] = [];
  public idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEditar: boolean = false;
  @Input()
  public datoProcuracionCornealCI: DatoProcuracionCorneal = new DatoProcuracionCorneal();
  @Input()
  public datoProcuracionCornealCD: DatoProcuracionCorneal = new DatoProcuracionCorneal();

  //public usuarioBtc: UsuarioBtc;
  public usuario: Usuario;

  public recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion;

  listaTemperaturas: Array<{ id: number; descripcion: string }> = [
    {
      id: 2,
      descripcion: '2 ºC'
    },
    {
      id: 3,
      descripcion: '3 ºC'
    },
    {
      id: 4,
      descripcion: '4 ºC'
    },
    {
      id: 5,
      descripcion: '5 ºC'
    },
    {
      id: 6,
      descripcion: '6 ºC'
    },
    {
      id: 7,
      descripcion: '7 ºC'
    },
    {
      id: 8,
      descripcion: '8 ºC'
    }
  ];

  validosDatoProcuracionCornealCI = {
    idcenatra: false,
    fechaInicio: false,
    fechaFin: false,
    horaInicio: false,
    horaFin: false
  };
  validosDatoProcuracionCornealCD = {
    idcenatra: false,
    fechaInicio: false,
    fechaFin: false,
    horaInicio: false,
    horaFin: false
  };

  get solicitudEvaluacionCornealOcultarConjuntos() {
    if (this.ocultarConjuntosSolicitudEvaluacionCorneal) return true;
    return !this.solicitudEvaluacionCornealActualizar;
  }

  ngOnChanges(changes) {
    if (
      changes.solicitudEvaluacionCorneal &&
      changes.solicitudEvaluacionCorneal.currentValue == null &&
      this.solicitudEvaluacionCorneal == null
    )
      this.solicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
    else {
      var aux: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
      if (this.solicitudEvaluacionCorneal)
        aux.from(this.solicitudEvaluacionCorneal);
      if (aux.isOk && aux.isOk()) {
        this.accion = 7;
        this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealGuardar = false;
        this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = this.solicitudEvaluacionCornealCancelar = true;
        this.permisosacciones();
        var thiss: any;
        thiss = this;
        if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
      } else {
        this.accion = 2;
        this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
        this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealCancelar = true;
      }
    }
  }
  obtenerPermisos() {
    var id_expe = -1;
    var tablas = [
      'solicitudEvaluacionCorneal',
      'usuario',
      'hospital',
      'entidadFederativa',
      'perfil',
      'causaMuerte'
    ];
    var parametros: any = {
      id_usu: this.usuariologueado.id,
      tablas: tablas,
      id_exp: id_expe
    };
    this.solicitudEvaluacionCornealPermisos = false;
    this.coreService.permisos(parametros, this.evtCorePermisos, this);
  }

  constructor(
    public globalesService: GlobalesService,
    public zone: NgZone,
    public fileservice: FileService,
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public coreService: CoreService,
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    public solicitudEvaluacionCorneal_service: SolicitudEvaluacionCornealService,
    public usuario_service: UsuarioService,
    //public usuarioBtc_service: UsuarioBtcService,
    public perfilRedIssste_service: PerfilRedIsssteService,
    public hospital_service: HospitalService,
    public entidadFederativa_service: EntidadFederativaService,
    public perfil_service: PerfilService,
    public causaMuerte_service: CausaMuerteService,
    public router: Router,
    public datoProcuracionCornealService: DatoProcuracionCornealService,
    public activatedRoute: ActivatedRoute,
    public recepcionSolicitudEvaluacionService: RecepcionSolicitudEvaluacionService
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
    this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
    this.configuracionSolicitudEvaluacionCorneal = new ConfigurarSolicitudEvaluacionCorneal();
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovSolicitudEvaluacionCornealUsuario,
      this
    );
    this.causaMuerte_service.getCausaMuertesActivos(
      this.evtGetIdcausaMuerteSolicitudEvaluacionCornealCausaMuerte,
      this
    );

    this.limpiarCampos();
  }

  //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
  evtCorePermisos(permisos, obj) {
    obj.solicitudEvaluacionCornealPermisos = true;
    if (
      permisos &&
      permisos.solicitudEvaluacionCorneal &&
      permisos.solicitudEvaluacionCorneal.PermisoAtributo &&
      permisos.solicitudEvaluacionCorneal.PermisoAtributo.length > 0
    ) {
      obj.permisosAtributos =
        permisos.solicitudEvaluacionCorneal.PermisoAtributo;
    } else {
      obj.usuariologueado = undefined;
    }
    if (
      permisos &&
      permisos.solicitudEvaluacionCorneal &&
      permisos.solicitudEvaluacionCorneal.PermisoConjunto &&
      permisos.solicitudEvaluacionCorneal.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos =
        permisos.solicitudEvaluacionCorneal.PermisoConjunto;
    }
    if (
      permisos &&
      permisos.solicitudEvaluacionCorneal &&
      permisos.solicitudEvaluacionCorneal.PermisoTabla &&
      permisos.solicitudEvaluacionCorneal.PermisoTabla.length > 0
    ) {
      obj.permisosTabla = permisos.solicitudEvaluacionCorneal.PermisoTabla[0];
      obj.permisosaccionesInicio();
    }
    if (
      permisos &&
      permisos.usuario &&
      permisos.usuario.PermisoAtributo &&
      permisos.usuario.PermisoAtributo.length > 0
    ) {
      //obj.configuracionUsuarioUltMov.permisosAtributos = permisos.usuario.PermisoAtributo ;
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
      //obj.configuracionUsuarioUltMov.permisosTabla = permisos.usuario.PermisoTabla[0] ;
      //obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
    }
    if (
      permisos &&
      permisos.causaMuerte &&
      permisos.causaMuerte.PermisoAtributo &&
      permisos.causaMuerte.PermisoAtributo.length > 0
    ) {
      //obj.configuracionIdcausaMuerte.permisosAtributos = permisos.causaMuerte.PermisoAtributo ;
      obj.permisosAtributos.push(permisos.causaMuerte.PermisoAtributo);
    }
    if (
      permisos &&
      permisos.causaMuerte &&
      permisos.causaMuerte.PermisoAtributo &&
      permisos.causaMuerte.PermisoConjunto.length > 0
    ) {
      obj.permisosConjuntos.push(permisos.causaMuerte.PermisoConjunto);
    }
    if (
      permisos &&
      permisos.causaMuerte &&
      permisos.causaMuerte.PermisoTabla &&
      permisos.causaMuerte.PermisoTabla.length > 0
    ) {
      //obj.configuracionIdcausaMuerte.permisosTabla = permisos.causaMuerte.PermisoTabla[0] ;
      //obj.permisosTabla.push(permisos.causaMuerte.PermisoTabla[0] );
    }

    if (obj.configurarTablasConjuntos) obj.configurarTablasConjuntos();
  }
  //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

  evtGetUsuarioUltMovSolicitudEvaluacionCornealUsuario(
    lista_usuarioUltMovSolicitudEvaluacionCornealUsuario,
    obj
  ) {
    obj.lista_usuarioUltMovSolicitudEvaluacionCornealUsuario = lista_usuarioUltMovSolicitudEvaluacionCornealUsuario;
    obj.actualizar_UsuarioUltMovSolicitudEvaluacionCornealUsuario();
  }
  evtGetIdcausaMuerteSolicitudEvaluacionCornealCausaMuerte(
    lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte,
    obj
  ) {
    obj.lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte = lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte;
    obj.actualizar_IdcausaMuerteSolicitudEvaluacionCornealCausaMuerte();
  }

  actualizar_UsuarioUltMovSolicitudEvaluacionCornealUsuario() {
    if (this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion)
      for (let eleme of this
        .lista_usuarioUltMovSolicitudEvaluacionCornealUsuario)
        if (
          eleme.id ==
          this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion.id
        ) {
          this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion = eleme;
          break;
        }
  }
  actualizar_IdcausaMuerteSolicitudEvaluacionCornealCausaMuerte() {
    if (this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion)
      for (let eleme of this
        .lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte)
        if (
          eleme.id ==
          this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion.id
        ) {
          this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion = eleme;
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
    return this.validosSolicitudEvaluacionCorneal['id'];
  }
  get validaIds() {
    return this.validosSolicitudEvaluacionCorneal['id'];
  }
  get validaFechaBaja() {
    return this.validosSolicitudEvaluacionCorneal['fechaBaja'];
  }
  get validaPrimerApellido() {
    return this.validosSolicitudEvaluacionCorneal['primerApellido'];
  }
  get validaFechaRegistro() {
    return this.validosSolicitudEvaluacionCorneal['fechaRegistro'];
  }
  get validaFechaMuerte() {
    return this.validosSolicitudEvaluacionCorneal['fechaMuerte'];
  }
  get validaSegundoApellido() {
    return this.validosSolicitudEvaluacionCorneal['segundoApellido'];
  }
  get validaEstatusProceso() {
    return this.validosSolicitudEvaluacionCorneal['estatusProceso'];
  }
  get validaNombre() {
    return this.validosSolicitudEvaluacionCorneal['nombre'];
  }
  get validaNumeroExpediente() {
    return this.validosSolicitudEvaluacionCorneal['numeroExpediente'];
  }
  get validaEdad() {
    return this.validosSolicitudEvaluacionCorneal['edad'];
  }
  get validaConservacionTemperaturaAmbiente() {
    return this.validosSolicitudEvaluacionCorneal[
      'conservacionTemperaturaAmbiente'
    ];
  }
  get validaHoraInicioRefrigracion() {
    return this.validosSolicitudEvaluacionCorneal['horaInicioRefrigracion'];
  }
  get validaFolioSolicitud() {
    return this.validosSolicitudEvaluacionCorneal['folioSolicitud'];
  }
  get validaHoraMuerte() {
    return this.validosSolicitudEvaluacionCorneal['horaMuerte'];
  }
  get validaFechaActualizacion() {
    return this.validosSolicitudEvaluacionCorneal['fechaActualizacion'];
  }
  get validaTemperaturaRefrigeracion() {
    return this.validosSolicitudEvaluacionCorneal['temperaturaRefrigeracion'];
  }
  get validaStatus() {
    return this.validosSolicitudEvaluacionCorneal['status'];
  }
  get validaUsuarioUltMov() {
    return this.validosSolicitudEvaluacionCorneal['usuarioUltMov'];
  }
  get validaIdcausaMuerte() {
    return this.validosSolicitudEvaluacionCorneal['idcausaMuerte'];
  }

  get validaTodosc() {
    var salida =
      this.validaPrimerApellido &&
      this.validaFechaMuerte &&
      this.validaSegundoApellido &&
      this.validaNombre &&
      this.validaNumeroExpediente &&
      this.validaEdad &&
      //this.validaConservacionTemperaturaAmbiente &&
      this.validaFolioSolicitud &&
      this.validaHoraMuerte &&
      //this.validaTemperaturaRefrigeracion &&
      this.solicitudEvaluacionCorneal.idcausaMuerte != null ;
    if (salida != this.validaciones) {
      this.validacionesChange.emit(salida);
      this.validaciones= salida;
    }
    return salida;
  }

  get validaRequeridos() {
    var salida =
      this.validaPrimerApellido &&
      this.validaSegundoApellido &&
      this.validaNombre &&
      this.validaNumeroExpediente &&
      this.validaEdad &&
      this.validaFechaMuerte &&
      this.validaHoraMuerte;
    return salida;
  }

  obtenerSolicitudEvaluacionCorneales(lista, objeto) {
    objeto.lista_solicitudEvaluacionCorneales = lista;
    if (lista && lista.length > 0) {
      objeto.solicitudEvaluacionCorneal.from(lista[0]);
      objeto.evtSolicitudEvaluacionCornealSeleccionado(
        objeto.solicitudEvaluacionCorneal
      );
      if (objeto.configuarCombosObjetos) objeto.configuarCombosObjetos();
    }
  }
  evn_lazy_solicitudEvaluacionCorneal(solicitudEvaluacionCorneal, objeto) {
    let datosProcuracion = solicitudEvaluacionCorneal.datosProcuracionCorneal as Array<
      DatoProcuracionCorneal
    >;
    datosProcuracion.forEach(element => {
      if (element.tipo === 1) {
        objeto.datoProcuracionCornealCI = element;
      } else if (element.tipo === 2) {
        objeto.datoProcuracionCornealCD = element;
      }
    });
    let listTemp = objeto.listaTemperaturas as Array<{
      id: number;
      descripcion: string;
    }>;
    listTemp.forEach(element => {
      if (element.id === solicitudEvaluacionCorneal.temperaturaRefrigeracion) {
        solicitudEvaluacionCorneal.temperaturaRefrigeracion = element;
      }
    });
    objeto.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
    objeto.solicitudEvaluacionCornealChange.emit(
      objeto.solicitudEvaluacionCorneal
    );
    objeto.configuarCombosObjetos();
    objeto.solicitudEvaluacionCornealLazy = true;
  }
  /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
  get datosReporteSolicitudEvaluacionCornealWord() {
    return !(
      this.solicitudEvaluacionCornealActualizar &&
      this.solicitudEvaluacionCornealLazy &&
      this.globalesService.preporteWord(this, 'solicitudEvaluacionCorneal')
    );
  }
  get datosReporteSolicitudEvaluacionCornealExcel() {
    return !(
      this.solicitudEvaluacionCornealActualizar &&
      this.solicitudEvaluacionCornealLazy &&
      this.globalesService.preporteExcel(this, 'solicitudEvaluacionCorneal')
    );
  }
  get datosReporteSolicitudEvaluacionCornealPdf() {
    return !(
      this.solicitudEvaluacionCornealActualizar &&
      this.solicitudEvaluacionCornealLazy &&
      this.globalesService.preportePdf(this, 'solicitudEvaluacionCorneal')
    );
  }
  reporteSolicitudEvaluacionCornealExcel(form: any) {
    var nombre: string = 'SolicitudEvaluacionCorneal.xlsx';
    var path: string = 'file/reporteExcel';
    var parametros = {};
    parametros['entradas'] = {
      solicitudEvaluacionCorneal: this.solicitudEvaluacionCorneal
    };
    parametros['plantilla'] = 'SolicitudEvaluacionCorneal.xlsx';
    parametros['salida'] = nombre;
    this.fileservice.downloadFile(
      parametros['plantilla'],
      parametros['salida'],
      path,
      parametros
    );
  }
  reporteSolicitudEvaluacionCornealWord(form: any) {
    var nombre: string = 'SolicitudEvaluacionCorneal.docx';
    var path: string = 'file/reporteWord';
    var parametros = {};
    parametros['entradas'] = {
      solicitudEvaluacionCorneal: this.solicitudEvaluacionCorneal
    };
    parametros['plantilla'] = 'SolicitudEvaluacionCorneal.docx';
    parametros['salida'] = nombre;
    this.fileservice.downloadFile(
      parametros['plantilla'],
      parametros['salida'],
      path,
      parametros
    );
  }
  reporteSolicitudEvaluacionCornealPdf(form: any) {
    var nombre: string = 'SolicitudEvaluacionCorneal.docx';
    var path: string = 'file/reportePdf';
    var parametros = {};
    parametros['entradas'] = {
      solicitudEvaluacionCorneal: this.solicitudEvaluacionCorneal
    };
    parametros['plantilla'] = 'SolicitudEvaluacionCorneal.docx';
    parametros['salida'] = 'SolicitudEvaluacionCorneal.pdf';
    this.fileservice.downloadFile(
      parametros['plantilla'],
      parametros['salida'],
      path,
      parametros
    );
  }
  /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

  accionesBuscar() {
    this.accion = 1;
    this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
    this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealCancelar = true;
  }
  buscarSolicitudEvaluacionCornealFront(form: any) {
    this.accionesBuscar();
    var vsolicitudEvaluacionCorneal: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
    vsolicitudEvaluacionCorneal.from(this.solicitudEvaluacionCorneal);
    this.configuracionSolicitudEvaluacionCorneal = new ConfigurarSolicitudEvaluacionCorneal();
    this.configuracionSolicitudEvaluacionCorneal.permisosTabla = {
      tabla: 'solicitudEvaluacionCorneal',
      permiso: 8
    };
    this.configuracionSolicitudEvaluacionCorneal.titulo =
      'Buscar ' + this.permisosTabla.etiqueta;
    this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta = vsolicitudEvaluacionCorneal;
    this.permisosacciones();
    $('#buscarSolicitudEvaluacionCorneal_' + this.nombre).modal();
  }
  buscarSolicitudEvaluacionCornealBack(
    solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal
  ) {
    this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesByDto(
      solicitudEvaluacionCorneal,
      this.eventoSrvSolicitudEvaluacionCornealBuscar,
      this
    );
  }
  eventoSrvSolicitudEvaluacionCornealBuscar(lista, objeto) {
    objeto.lista_solicitudEvaluacionCorneales = lista;
    if (lista && lista.length > 0) {
      objeto.solicitudEvaluacionCorneal = lista[0];
      objeto.solicitudEvaluacionCornealLazy = false;
      objeto.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(
        objeto.solicitudEvaluacionCorneal,
        objeto.evn_lazy_solicitudEvaluacionCorneal,
        objeto
      );
    }
  }
  guardarSolicitudEvaluacionCornealFront(form: any) {
    this.accion = 5; // ********************************************************************************************** maquina
    this.guardarSolicitudEvaluacionCornealBack(this.solicitudEvaluacionCorneal);
    this.accionesBuscar(); // ********************************************************************************* maquina
    this.permisosacciones();
  }
  guardarSolicitudEvaluacionCornealBack(
    solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal
  ) {
    if (solicitudEvaluacionCorneal.usuarioUltMov == null)
      solicitudEvaluacionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
    if (
      solicitudEvaluacionCorneal.status == null ||
      solicitudEvaluacionCorneal.status == ''
    )
      solicitudEvaluacionCorneal.status = 1;
    this.solicitudEvaluacionCorneal_service.guardarSolicitudEvaluacionCorneal(
      solicitudEvaluacionCorneal,
      this.eventoSrvSolicitudEvaluacionCornealGuardar,
      this
    );
  }
  eventoSrvSolicitudEvaluacionCornealGuardar(solicitudEvaluacionCorneal, obj) {
    obj.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
    obj.globalesService.registraIdSolicitudEvaluacion(
      obj.solicitudEvaluacionCorneal.id
    );
    bootbox.alert('Datos guardados con éxito');
    var aux: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
    aux.from(solicitudEvaluacionCorneal);
    obj.solicitudEvaluacionCornealChange.emit(aux);
    obj.solicitudEvaluacionCornealTablaChange.emit(aux);
    obj.solicitudEvaluacionCornealLazy = false;
    var aux2: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
    aux2.id = solicitudEvaluacionCorneal.id;
    obj.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(
      aux2,
      obj.evn_lazy_solicitudEvaluacionCorneal,
      obj
    );
    obj.accionesActualizar();
  }
  actualizarSolicitudEvaluacionCornealFront(form: any) {
    this.accion = 3; // ************************************************************************************* maquina
    this.actualizarSolicitudEvaluacionCornealBack(
      this.solicitudEvaluacionCorneal
    );
    this.accionesBuscar(); // ***************************************************************************** maquina
    this.permisosacciones();
  }
  actualizarSolicitudEvaluacionCornealBack(
    solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal
  ) {
    //SE-CDMX/112/2020/0025
    solicitudEvaluacionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
    let aux:SolicitudEvaluacionCorneal =  new SolicitudEvaluacionCorneal();

    aux.from( solicitudEvaluacionCorneal);
    aux.datosProcuracionCorneal= solicitudEvaluacionCorneal.datosProcuracionCorneal;
    this.solicitudEvaluacionCorneal_service.actualizarSolicitudEvaluacionCorneal(
      aux,
      this.eventoSrvSolicitudEvaluacionCornealActualizar,
      this
    );
  }
  eventoSrvSolicitudEvaluacionCornealActualizar(retorno, obj) {
    if (retorno) {
      if (obj.mensaje) bootbox.alert('Datos actualizados con éxito');
      obj.solicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal(obj.solicitudEvaluacionCorneal);
      // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
      obj.solicitudEvaluacionCornealLazy = false;
      obj.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(
        obj.solicitudEvaluacionCorneal,
        obj.evn_lazy_solicitudEvaluacionCorneal,
        obj
      );
      // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas

      obj.solicitudEvaluacionCornealChange.emit(obj.solicitudEvaluacionCorneal);
      obj.solicitudEvaluacionCornealTablaChange.emit(obj.solicitudEvaluacionCorneal);
      obj.accionesActualizar();
    }
  }
  eliminarSolicitudEvaluacionCornealFront(form: any) {
    this.accion = 4;
    this.eliminarSolicitudEvaluacionCornealBack(
      this.solicitudEvaluacionCorneal
    );
    this.permisosacciones();
    this.accionesBuscar();
  }
  eliminarSolicitudEvaluacionCornealBack(
    solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal
  ) {
    solicitudEvaluacionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
    this.solicitudEvaluacionCorneal_service.eliminarSolicitudEvaluacionCorneal(
      solicitudEvaluacionCorneal,
      this.eventoSrvSolicitudEvaluacionCornealEliminar,
      this
    );
  }
  eventoSrvSolicitudEvaluacionCornealEliminar(retorno, obj) {
    if (retorno) {
      bootbox.alert('Datos eliminados con éxito');
      obj.solicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
      obj.solicitudEvaluacionCornealChange.emit(obj.solicitudEvaluacionCorneal);
      obj.solicitudEvaluacionCornealTablaChange.emit(
        obj.solicitudEvaluacionCorneal
      );
      obj.limpiarCampos();
    }
  }
  cancelarSolicitudEvaluacionCornealFront(form: any) {
    this.accion = 6;
    this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
    this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = true;
    this.permisosacciones();
  }
  nuevoSolicitudEvaluacionCornealFront(form: any) {
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
        this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
        this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealCancelar = true;
      }.bind(this)
    });
  }

  configuarCombosObjetos() {
    this.lista_usuarioUltMovSolicitudEvaluacionCornealUsuario = [];
    this.usuario_service.getUsuariosActivos(
      this.evtGetUsuarioUltMovSolicitudEvaluacionCornealUsuario,
      this
    );
    this.lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte = [];
    this.causaMuerte_service.getCausaMuertesActivos(
      this.evtGetIdcausaMuerteSolicitudEvaluacionCornealCausaMuerte,
      this
    );
  }
  configurarTablasConjuntos() {}

  accionesActualizar() {
    this.accion = 7;
    this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealGuardar = false;
    this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = this.solicitudEvaluacionCornealCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
  }
  evtSolicitudEvaluacionCornealSeleccionado(solicitudEvaluacionCorneal) {
    this.solicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
    this.solicitudEvaluacionCorneal.from(solicitudEvaluacionCorneal);
    this.solicitudEvaluacionCornealLazy = false;
    this.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(
      this.solicitudEvaluacionCorneal,
      this.evn_lazy_solicitudEvaluacionCorneal,
      this
    );
    this.accion = 7;
    this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealGuardar = false;
    this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = this.solicitudEvaluacionCornealCancelar = true;
    this.permisosacciones();
    var thiss: any;
    thiss = this;
    if (thiss.configuarCombosObjetos) thiss.configuarCombosObjetos();
    if (thiss.configurarTablasConjuntos) thiss.configurarTablasConjuntos();
    $('#buscarSolicitudEvaluacionCorneal_' + this.nombre).modal('hide');
  }
  ngAfterContentInit(){
  //  bootbox.alert("cargado");
   // this.globalesService.spinner.hide();
  }
  ngOnInit() {
   // this.globalesService.spinner.show();
    this.accion = 0; // *********************************************************************************************************** maquina
    this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false; // ******************** maquina
    this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = true; // ************************************************************************************* maquina
    this.permisosacciones();
    //this.usuarioBtc_service.getUsuarioBtcdb((this.globalesService.dameUsuario() as Usuario).usuarioBtc.id, this.evtUsuarioBtc, this );
    this.usuario = this.globalesService.dameUsuario() as Usuario;
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id === null ){

      if (this.globalesService.dameIdRegistroExtracion() !== this.globalesService.dameIdSolicitudEvaluacion() ){
        setTimeout(() => {
          this.globalesService.limpiaIdSolicitudEvaluacion();
        });
      }else{
        id =this.globalesService.dameIdRegistroExtracion();

      }
    }

    if (id!== null) {
      setTimeout(() => {
        this.globalesService.registraIdSolicitudEvaluacion(id);
      });
      this.solicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
      this.solicitudEvaluacionCorneal.id = id;
      this.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(
        this.solicitudEvaluacionCorneal,
        this.evn_lazy_solicitudEvaluacionCorneal,
        this
      );
      this.recepcionSolicitudEvaluacionService.getRecepcionSolicitudEvaluacionByIdsolicitudEvaluacionCorneal(
        this.solicitudEvaluacionCorneal,
        this.evn_buscarRecepcion,
        this
      );
    }


  }

  permisosacciones() {
    if (this.solicitudEvaluacionCornealBuscar)
      this.solicitudEvaluacionCornealBuscar = this.globalesService.pbuscar(
        this,
        'solicitudEvaluacionCorneal'
      );
    if (this.solicitudEvaluacionCornealActualizar)
      this.solicitudEvaluacionCornealActualizar =
        this.globalesService.pacutalizar(this, 'solicitudEvaluacionCorneal') &&
        this.globalesService.pbuscar(this, 'solicitudEvaluacionCorneal');
    if (this.solicitudEvaluacionCornealEliminar)
      this.solicitudEvaluacionCornealEliminar =
        this.globalesService.peliminar(this, 'solicitudEvaluacionCorneal') &&
        this.globalesService.pbuscar(this, 'solicitudEvaluacionCorneal');
    if (this.solicitudEvaluacionCornealAgregar)
      this.solicitudEvaluacionCornealAgregar = this.globalesService.pagregar(
        this,
        'solicitudEvaluacionCorneal'
      );
  }
  permisosaccionesInicio() {
    this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false; // *************************** maquina
    this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = true; // ************************************************************************************* maquina
    this.accion = 0; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }
  evtlimpiarCampos() {
    this.globalesService.limpiaIdSolicitudEvaluacion();
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.router.navigateByUrl('solicitud-evaluacion-corneal-crud');
    } else {
      this.limpiarCampos();
    }
  }
  limpiarCampos() {
    this.solicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
    this.recepcionSolicitudEvaluacion = null;
    this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion = new Usuario();
    this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion = new CausaMuerte();

    this.datoProcuracionCornealCI = new DatoProcuracionCorneal();
    this.datoProcuracionCornealCD = new DatoProcuracionCorneal();
    this.solicitudEvaluacionCornealChange.emit(this.solicitudEvaluacionCorneal);
    this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false; // *************************** maquina
    this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = true; // ************************************************************************************* maquina
    this.accion = 6; // *********************************************************************************************************** maquina
    this.permisosacciones();
  }

  validaFechas(){
    if (
      this.datoProcuracionCornealCD &&
      this.datoProcuracionCornealCD.fechaInicio ===
        this.datoProcuracionCornealCD.fechaFin &&
      this.datoProcuracionCornealCD.horaInicio >
        this.datoProcuracionCornealCD.horaFin
    ) {
      bootbox.alert(
        'La hora de inicio de procuracion de la córnea derecha  es mayor a la hora de fin de procuracion, favor de corregir'
      );
      return false;
    }
    if (
      this.datoProcuracionCornealCI &&
      this.datoProcuracionCornealCI.fechaInicio ===
      this.datoProcuracionCornealCI.fechaFin &&
      this.datoProcuracionCornealCI.horaInicio >
      this.datoProcuracionCornealCI.horaFin
    ) {
      bootbox.alert(
        'La hora de inicio de procuracion de la córnea izquierda es mayor a la hora de fin de procuracion, favor de corregir'
      );
      return false;
    }
    if (this.datoProcuracionCornealCI.fechaInicio > this.datoProcuracionCornealCI.fechaFin) {
      bootbox.alert(
        'La fecha de inicio de procuracion de la córnea izquierda es mayor a la fecha de fin de procuracion, favor de corregir'
      );
      return false;
    }
    if (this.datoProcuracionCornealCD.fechaInicio > this.datoProcuracionCornealCD.fechaFin) {
      bootbox.alert(
        'La fecha de inicio de procuracion de la córnea derecha es mayor a la fecha de fin de procuracion, favor de corregir'
      );
      return false;
    }
    if (this.solicitudEvaluacionCorneal.horaInicioRefrigracion && this.solicitudEvaluacionCorneal.horaMuerte > this.solicitudEvaluacionCorneal.horaInicioRefrigracion) {
      bootbox.alert(
        'La hora de refrigeracion es menor a las hora de muerte, favor de corregir'
      );
      return false;

    }
    return true;
  }

  doSave() {
    this.mensaje = true;
    if (!this.validaFechas()) {
      return;
    }

    if (
      this.solicitudEvaluacionCorneal.fechaMuerte == null ||
      this.solicitudEvaluacionCorneal.horaMuerte == null
    ) {
      bootbox.alert('Ingresa los Campos obligatorios *');
      return;
    }
    ('folio: ' + this.solicitudEvaluacionCorneal.folioSolicitud);
    this.datoProcuracionCornealCI.tipo = 1;
    this.datoProcuracionCornealCD.tipo = 2;
    if (this.solicitudEvaluacionCorneal.folioSolicitud == null) {
      ('salida');
      if (
        this.solicitudEvaluacionCorneal.temperaturaRefrigeracion !== null &&
        this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id !==
          undefined &&
        this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id !== null
      ) {
        this.solicitudEvaluacionCorneal.temperaturaRefrigeracion = this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id;
      }
      // this.solicitudEvaluacionCorneal.idhospital = this.usuarioBtc.idhospital;
      this.solicitudEvaluacionCorneal.idhospital = this.usuario.idhospital;

      this.solicitudEvaluacionCorneal.datosProcuracionCorneal = [];
      if (
        this.datoProcuracionCornealCI.fechaInicio ||
        this.datoProcuracionCornealCI.fechaFin ||
        this.datoProcuracionCornealCI.horaInicio ||
        this.datoProcuracionCornealCI.horaFin
      ) {
        this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(
          this.datoProcuracionCornealCI
        );
      }
      if (
        this.datoProcuracionCornealCD.fechaInicio ||
        this.datoProcuracionCornealCD.fechaFin ||
        this.datoProcuracionCornealCD.horaInicio ||
        this.datoProcuracionCornealCD.horaFin
      ) {
        this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(
          this.datoProcuracionCornealCD
        );

      }
      this.solicitudEvaluacionCorneal.status="1";
      this.solicitudEvaluacionCorneal.usuarioUltMov = this.globalesService.dameUsuario();

      this.solicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal(this.solicitudEvaluacionCorneal);

      this.solicitudEvaluacionCorneal.estatusProceso = 0;
      this.guardarSolicitudEvaluacionCornealBack(
        this.solicitudEvaluacionCorneal
      );
    } else {
      this.validaActualiza();
    }
  }

  private validaActualiza() {
    this.globalesService.registraIdSolicitudEvaluacion(this.solicitudEvaluacionCorneal.id);
    if (this.solicitudEvaluacionCorneal.temperaturaRefrigeracion !== null &&
      this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id !==
      undefined &&
      this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id !== null) {
      this.solicitudEvaluacionCorneal.temperaturaRefrigeracion = this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id;
    }
    this.solicitudEvaluacionCorneal.datosProcuracionCorneal = [];
    this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(this.datoProcuracionCornealCI);
    this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(this.datoProcuracionCornealCD);
    this.solicitudEvaluacionCorneal.estatusProceso = 0;
    this.actualizarSolicitudEvaluacionCornealBack(this.solicitudEvaluacionCorneal);
  }

  // evtUsuarioBtc(retorno, obj){
  //   obj.usuarioBtc = retorno;

  // }

  siguiente() {
    if (
      (this.solicitudEvaluacionCorneal.idcausaMuerte !== null &&
     //   this.solicitudEvaluacionCorneal.horaInicioRefrigracion !== null &&
        this.datoProcuracionCornealCI.horaInicio !== null &&
        this.datoProcuracionCornealCI.horaFin !== null &&
        this.datoProcuracionCornealCI.fechaInicio !== null &&
        this.datoProcuracionCornealCI.fechaFin !== null &&
        this.datoProcuracionCornealCI.id) ||
      (this.solicitudEvaluacionCorneal.idcausaMuerte !== null &&
    //    this.solicitudEvaluacionCorneal.horaInicioRefrigracion !== null &&
        this.datoProcuracionCornealCD.horaInicio !== null &&
        this.datoProcuracionCornealCD.horaFin !== null &&
        this.datoProcuracionCornealCD.fechaInicio !== null &&
        this.datoProcuracionCornealCD.fechaFin !== null &&
        this.datoProcuracionCornealCD.id)
    ) {
      this.router.navigateByUrl(
        `/registro-extraccion-crud/${this.solicitudEvaluacionCorneal.id}`
      );
    } else {
      bootbox.alert(
        'Para continuar Ingrese la información \n solicitada y al menos la información de una córnea. \n Guarde y continúe.'
      );
    }
  }

  doEnviar() {
    this.doSave();
    if (!this.validaFechas()) {
      return;
    }
    if (!this.validaTodosc) {
      bootbox.alert('Ingresar los datos obligatorios.'  );
      return;
    }


    bootbox.confirm({
      message: "¿Deseas enviar la solicitud a la bandeja de recepción de tejido? !Al enviar los datos a recepcion la información que no contenga id cenatra se eliminará!",
      buttons: {
        confirm: {
          label: 'Sí',
          className: 'btn-primary'
        },
        cancel: {
          label: 'No',
          className: ''
        }
      },
      callback: function(result) {
        if (result) {
          let recepcion = new RecepcionSolicitudEvaluacion();
          recepcion.idsolicitudEvaluacionCorneal = {
            id: this.solicitudEvaluacionCorneal.id,
            fechaRegistro: new Date()
          };
          this.mensaje = false;
          if (this.solicitudEvaluacionCorneal.temperaturaRefrigeracion != null){
            this.solicitudEvaluacionCorneal.temperaturaRefrigeracion = this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id;
          }
          this.solicitudEvaluacionCorneal.datosProcuracionCorneal = [];
          this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(
            this.datoProcuracionCornealCI
          );
          this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(
            this.datoProcuracionCornealCD
          );
          this.solicitudEvaluacionCorneal.estatusProceso = 1;
          this.actualizarSolicitudEvaluacionCornealBack(
            this.solicitudEvaluacionCorneal
          );
          if (this.datoProcuracionCornealCD.idcenatra === null && this.datoProcuracionCornealCI.idcenatra === null ){
            bootbox.alert("No se puede envar la información a recepción sin un id cenatra");
            return ;
          }
          // recepcion.usuarioUltMov = new Usuario();
          //recepcion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
          recepcion.usuarioUltMov = new Usuario( this.globalesService.dameUsuario());
          this.recepcionSolicitudEvaluacionService.guardarRecepcionSolicitudEvaluacion(
            recepcion,
            this.evtEnviarRecepcion,
            this
          );
        }
      }.bind(this)
    });
  }

  evtEnviarRecepcion(solicitudEvaluacionCorneal, obj) {
    obj.recepcionSolicitudEvaluacion = solicitudEvaluacionCorneal;
    bootbox.alert('Solicitud enviada.');

  }

  evn_buscarRecepcion(recepcionSolicitudEvaluacion, objeto) {
    objeto.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
  }

  doImprimir() {
    var path: string =
      'solicitudEvaluacionCorneal/reporteSolicitudEvaluacionCorneal';
    var otros: string = 'ReporteEvaluacionRegistroDonante';
    var parametros: any = { id: this.solicitudEvaluacionCorneal.id };
    var nombre: string = 'ReporteSolicitud.pdf';
    this.fileservice.downloadFile(nombre, otros, path, parametros);
  }
}
