import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { EstudioLaboratorio } from '../shared/estudio-laboratorio';
import { EstudioLaboratorioService } from '../shared/estudio-laboratorio.service';
import { ConfigurarEstudioLaboratorio } from '../shared/configurar-estudio-laboratorio'
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
import { EvaluacionSolicitud } from '../../evaluacion-solicitudes/shared/evaluacion-solicitud';
import { EvaluacionSolicitudService } from '../../evaluacion-solicitudes/shared/evaluacion-solicitud.service';
import { RecepcionSolicitudEvaluacionService } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service';
import { RecepcionSolicitudEvaluacion } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion';
import { SolicitudEvaluacionCornealService } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service';
import { SolicitudEvaluacionCorneal } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal';
import { CausaMuerteService } from '../../causa-muertes/shared/causa-muerte.service';
import { CausaMuerte } from '../../causa-muertes/shared/causa-muerte';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-estudio-laboratorio-crud',
    templateUrl: './estudio-laboratorio-crud.component.html',
    styleUrls: ['./estudio-laboratorio-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                EstudioLaboratorioService,
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
                RecepcionSolicitudEvaluacionService
	]
})
export class EstudioLaboratorioCrudComponent implements OnInit {
    public opcionEstudioLaboratorio  =0;
    public validosEstudioLaboratorio :any ={
        id:false,
        fechaBaja:false,
        brilloCorneal:false,
        cicatriceLeucoma:false,
        fechaRegistro:false,
        erocioneUlcera:false,
        fechaActualizacion:false,
        valoracion:false,
        cuerpoExtrano:false,
        tipoCornea:false,
        observacion:true,
        status:false,
        usuarioUltMov:false,
        idevaluacionSolicitud:false,

    };

    @Input() ocultarConjuntosEstudioLaboratorio: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "estudioLaboratorio", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public estudioLaboratorioLazy: boolean =false;
    public estudioLaboratorioPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public estudioLaboratorio: EstudioLaboratorio = new EstudioLaboratorio();
    @Input() public estudioLaboratorioDerecha: EstudioLaboratorio = new EstudioLaboratorio();
    @Output() estudioLaboratorioChange = new EventEmitter<EstudioLaboratorio>();
    @Output() estudioLaboratorioTablaChange = new EventEmitter<EstudioLaboratorio>();
    public lista_estudioLaboratorios: EstudioLaboratorio[]=[];
    public configuracionEstudioLaboratorio: ConfigurarEstudioLaboratorio;
    public estudioLaboratorioBuscar: boolean
    public estudioLaboratorioSeleccion: boolean
    public estudioLaboratorioAgregar: boolean
    public estudioLaboratorioActualizar: boolean
    public estudioLaboratorioEliminar: boolean;
    public estudioLaboratorioGuardar: boolean;
    public estudioLaboratorioCancelar: boolean;
    public usuarioUltMovEstudioLaboratorioUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovEstudioLaboratorioUsuario: Usuario[]=[];
    public usuarioUltMovEstudioLaboratorioUsuarioEditar:boolean =false;
    public idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion: EvaluacionSolicitud = new EvaluacionSolicitud();
    public lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud: EvaluacionSolicitud[]=[];
    public idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEditar:boolean =false;
    public evaluacionSolicitud: EvaluacionSolicitud = new EvaluacionSolicitud();
    public recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
    public solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
    @Input() public viewModeEvaluacion: boolean;
    get estudioLaboratorioOcultarConjuntos(){
        if (this.ocultarConjuntosEstudioLaboratorio)
           return true
        return  !this.estudioLaboratorioActualizar;
    }

    ngOnChanges(changes) {
        if (changes.estudioLaboratorio && changes.estudioLaboratorio.currentValue == null &&
            this.estudioLaboratorio == null) this.estudioLaboratorio = new EstudioLaboratorio();
        else {
            var aux :EstudioLaboratorio = new EstudioLaboratorio();
            if (this.estudioLaboratorio)
                aux.from(this.estudioLaboratorio)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioSeleccion = this.estudioLaboratorioGuardar = false;
                this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = this.estudioLaboratorioCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.estudioLaboratorioSeleccion = this.estudioLaboratorioAgregar = this.estudioLaboratorioBuscar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
                    this.estudioLaboratorioGuardar = this.estudioLaboratorioCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "estudioLaboratorio",
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
                                "causaMuerte",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.estudioLaboratorioPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public estudioLaboratorio_service: EstudioLaboratorioService,
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
        this.estudioLaboratorioSeleccion = this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
        this.configuracionEstudioLaboratorio = new ConfigurarEstudioLaboratorio();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEstudioLaboratorioUsuario, this);
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.estudioLaboratorioPermisos =true;
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoAtributo&& permisos.estudioLaboratorio.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.estudioLaboratorio.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoConjunto && permisos.estudioLaboratorio.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.estudioLaboratorio.PermisoConjunto ;
        }
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoTabla && permisos.estudioLaboratorio.PermisoTabla.length>0){
            obj.permisosTabla = permisos.estudioLaboratorio.PermisoTabla[0] ;
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo&& permisos.usuario.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.usuario.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.usuario.PermisoAtributo) ;
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo&& permisos.usuario.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.usuario.PermisoConjunto) ;
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoTabla && permisos.usuario.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.usuario.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo&& permisos.evaluacionSolicitud.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.evaluacionSolicitud.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.evaluacionSolicitud.PermisoAtributo) ;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo&& permisos.evaluacionSolicitud.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.evaluacionSolicitud.PermisoConjunto) ;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoTabla && permisos.evaluacionSolicitud.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.evaluacionSolicitud.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.evaluacionSolicitud.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovEstudioLaboratorioUsuario(lista_usuarioUltMovEstudioLaboratorioUsuario, obj) {
        obj.lista_usuarioUltMovEstudioLaboratorioUsuario = lista_usuarioUltMovEstudioLaboratorioUsuario;
        obj.actualizar_UsuarioUltMovEstudioLaboratorioUsuario();
    }
    evtGetIdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud(lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud, obj) {
        obj.lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud = lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud;
        obj.actualizar_IdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud();
    }


    actualizar_UsuarioUltMovEstudioLaboratorioUsuario() {
        if ( this.usuarioUltMovEstudioLaboratorioUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovEstudioLaboratorioUsuario)
                if (eleme.id == this.usuarioUltMovEstudioLaboratorioUsuarioEleccion.id){
                    this.usuarioUltMovEstudioLaboratorioUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud() {
        if ( this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion)
            for (let eleme of this.lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud)
                if (eleme.id == this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion.id){
                    this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosEstudioLaboratorio['id'];
    }
    get validaIds() {
        return this.validosEstudioLaboratorio['id'];
    }
    get validaFechaBaja() {
        return this.validosEstudioLaboratorio['fechaBaja'];
    }
    get validaBrilloCorneal() {
        return this.validosEstudioLaboratorio['brilloCorneal'];
    }
    get validaCicatriceLeucoma() {
        return this.validosEstudioLaboratorio['cicatriceLeucoma'];
    }
    get validaFechaRegistro() {
        return this.validosEstudioLaboratorio['fechaRegistro'];
    }
    get validaErocioneUlcera() {
        return this.validosEstudioLaboratorio['erocioneUlcera'];
    }
    get validaFechaActualizacion() {
        return this.validosEstudioLaboratorio['fechaActualizacion'];
    }
    get validaValoracion() {
        return this.validosEstudioLaboratorio['valoracion'];
    }
    get validaCuerpoExtrano() {
        return this.validosEstudioLaboratorio['cuerpoExtrano'];
    }
    get validaTipoCornea() {
        return this.validosEstudioLaboratorio['tipoCornea'];
    }
    get validaObservacion() {
        return this.validosEstudioLaboratorio['observacion'];
    }
    get validaStatus() {
        return this.validosEstudioLaboratorio['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosEstudioLaboratorio['usuarioUltMov'];
    }
    get validaIdevaluacionSolicitud() {
        return this.validosEstudioLaboratorio['idevaluacionSolicitud'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaBrilloCorneal && this.validaCicatriceLeucoma && this.validaFechaRegistro && this.validaErocioneUlcera && this.validaFechaActualizacion && this.validaValoracion && this.validaCuerpoExtrano && this.validaTipoCornea && this.validaObservacion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdevaluacionSolicitud;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerEstudioLaboratorios(lista, objeto) {
        objeto.lista_estudioLaboratorios = lista;
        if (lista && lista.length > 0) {
            objeto.estudioLaboratorio.from(lista[0]);
            objeto.evtEstudioLaboratorioSeleccionado(objeto.estudioLaboratorio);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_estudioLaboratorio(estudioLaboratorio, objeto) {
        objeto.estudioLaboratorio = estudioLaboratorio;
        objeto.estudioLaboratorioChange.emit(objeto.estudioLaboratorio);
        objeto.configuarCombosObjetos();
        objeto.estudioLaboratorioLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteEstudioLaboratorioWord(){
        return ! (this.estudioLaboratorioActualizar && this.estudioLaboratorioLazy && this.globalesService.preporteWord(this,"estudioLaboratorio"));
    }
    get datosReporteEstudioLaboratorioExcel(){
        return ! (this.estudioLaboratorioActualizar && this.estudioLaboratorioLazy && this.globalesService.preporteExcel(this,"estudioLaboratorio"));
    }
    get datosReporteEstudioLaboratorioPdf(){
        return ! (this.estudioLaboratorioActualizar && this.estudioLaboratorioLazy && this.globalesService.preportePdf(this,"estudioLaboratorio"));
    }
    reporteEstudioLaboratorioExcel(form: any){
        var nombre:string = "EstudioLaboratorio.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "estudioLaboratorio": this.estudioLaboratorio};
        parametros["plantilla"]="EstudioLaboratorio.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteEstudioLaboratorioWord(form: any){
        var nombre:string = "EstudioLaboratorio.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "estudioLaboratorio": this.estudioLaboratorio};
        parametros["plantilla"]="EstudioLaboratorio.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteEstudioLaboratorioPdf(form: any){
        var nombre:string = "EstudioLaboratorio.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "estudioLaboratorio": this.estudioLaboratorio};
        parametros["plantilla"]="EstudioLaboratorio.docx";
        parametros["salida"]="EstudioLaboratorio.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioCancelar = true;
    }
    buscarEstudioLaboratorioFront(form: any) {
        this.accionesBuscar();
        var vestudioLaboratorio: EstudioLaboratorio = new EstudioLaboratorio();
        vestudioLaboratorio.from(this.estudioLaboratorio);
        this.configuracionEstudioLaboratorio = new ConfigurarEstudioLaboratorio();
        this.configuracionEstudioLaboratorio.permisosTabla = { "tabla": "estudioLaboratorio", "permiso": 8 };
        this.configuracionEstudioLaboratorio.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta = vestudioLaboratorio;
        this.permisosacciones();
        $("#buscarEstudioLaboratorio_"+this.nombre).modal();
    }
    buscarEstudioLaboratorioBack(estudioLaboratorio: EstudioLaboratorio) {
        this.estudioLaboratorio_service.getEstudioLaboratoriosByDto(estudioLaboratorio, this.eventoSrvEstudioLaboratorioBuscar, this);
    }
    eventoSrvEstudioLaboratorioBuscar(lista, objeto) {
        objeto.lista_estudioLaboratorios = lista;
        if (lista && lista.length > 0) {
            objeto.estudioLaboratorio = lista[0];
            objeto.estudioLaboratorioLazy =false;
            objeto.estudioLaboratorio_service.lazyEstudioLaboratorio(objeto.estudioLaboratorio, objeto.evn_lazy_estudioLaboratorio, objeto);
        }
    }
    guardarEstudioLaboratorioFront(form: any) {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarEstudioLaboratorioBack(this.estudioLaboratorio);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarEstudioLaboratorioBack(estudioLaboratorio: EstudioLaboratorio) {
        if (estudioLaboratorio.usuarioUltMov == null ) estudioLaboratorio.usuarioUltMov = this.globalesService.dameUsuario();
        if (estudioLaboratorio.status == null || estudioLaboratorio.status == "" ) estudioLaboratorio.status = 1;
        this.estudioLaboratorio_service.guardarEstudioLaboratorio(estudioLaboratorio, this.eventoSrvEstudioLaboratorioGuardar, this);
    }
    eventoSrvEstudioLaboratorioGuardar(estudioLaboratorio, obj) {
        obj.estudioLaboratorio = estudioLaboratorio;
        bootbox.alert("Datos guardados con éxito");
        var aux: EstudioLaboratorio = new EstudioLaboratorio();
        aux.from(estudioLaboratorio);
        obj.estudioLaboratorioChange.emit(aux);
        obj.estudioLaboratorioTablaChange.emit(aux);
        obj.estudioLaboratorioLazy =false;
        obj.estudioLaboratorio_service.lazyEstudioLaboratorio(obj.estudioLaboratorio, obj.evn_lazy_estudioLaboratorio, obj);
        obj.accionesActualizar();

    }
    actualizarEstudioLaboratorioFront(form: any) {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarEstudioLaboratorioBack(this.estudioLaboratorio);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarEstudioLaboratorioBack(estudioLaboratorio: EstudioLaboratorio) {
        estudioLaboratorio.usuarioUltMov = this.globalesService.dameUsuario();
        this.estudioLaboratorio_service.actualizarEstudioLaboratorio(estudioLaboratorio, this.eventoSrvEstudioLaboratorioActualizar, this);
    }
    eventoSrvEstudioLaboratorioActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: EstudioLaboratorio = new EstudioLaboratorio();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.estudioLaboratorioLazy = false;
            obj.estudioLaboratorio_service.lazyEstudioLaboratorio(obj.estudioLaboratorio, obj.evn_lazy_estudioLaboratorio, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.estudioLaboratorio);
            obj.estudioLaboratorioChange.emit(aux);
            obj.estudioLaboratorioTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarEstudioLaboratorioFront(form: any) {
        this.accion = 4;
        this.eliminarEstudioLaboratorioBack(this.estudioLaboratorio);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarEstudioLaboratorioBack(estudioLaboratorio: EstudioLaboratorio) {
        estudioLaboratorio.usuarioUltMov = this.globalesService.dameUsuario();
        this.estudioLaboratorio_service.eliminarEstudioLaboratorio(estudioLaboratorio, this.eventoSrvEstudioLaboratorioEliminar, this);
    }
    eventoSrvEstudioLaboratorioEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.estudioLaboratorio = new EstudioLaboratorio();
            obj.estudioLaboratorioChange.emit(obj.estudioLaboratorio);
            obj.estudioLaboratorioTablaChange.emit(obj.estudioLaboratorio);
            obj.limpiarCampos() ;
        }
    }
    cancelarEstudioLaboratorioFront(form: any) {
        this.accion = 6;
        this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = true;
        this.permisosacciones();
    }
    nuevoEstudioLaboratorioFront(form: any) {
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
                this.estudioLaboratorioSeleccion = this.estudioLaboratorioAgregar = this.estudioLaboratorioBuscar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
                this.estudioLaboratorioGuardar = this.estudioLaboratorioCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovEstudioLaboratorioUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEstudioLaboratorioUsuario, this);
        this.lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud = [];
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioSeleccion = this.estudioLaboratorioGuardar = false;
        this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = this.estudioLaboratorioCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtEstudioLaboratorioSeleccionado(estudioLaboratorio) {
        this.estudioLaboratorio = new EstudioLaboratorio();
        this.estudioLaboratorio.from(estudioLaboratorio);
        this.estudioLaboratorioLazy =false;
        this.estudioLaboratorio_service.lazyEstudioLaboratorio(this.estudioLaboratorio, this.evn_lazy_estudioLaboratorio, this);
        this.accion = 7;
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioSeleccion = this.estudioLaboratorioGuardar = false;
        this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = this.estudioLaboratorioCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarEstudioLaboratorio_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.estudioLaboratorioSeleccion = this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;        // ******************** maquina
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
        let id = this.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
          this.evaluacionSolicitud.id = id;
          this.evaluacionSolicitud_service.lazyEvaluacionSolicitud(
            this.evaluacionSolicitud,
            this.evn_lazy_evaluacionSolicitud,
            this
          );
        }
    }

    permisosacciones() {
        if (this.estudioLaboratorioBuscar) this.estudioLaboratorioBuscar = this.globalesService.pbuscar(this,"estudioLaboratorio");
        if (this.estudioLaboratorioActualizar) this.estudioLaboratorioActualizar = (this.globalesService.pacutalizar(this,"estudioLaboratorio") && this.globalesService.pbuscar(this,"estudioLaboratorio"));
        if (this.estudioLaboratorioEliminar) this.estudioLaboratorioEliminar = (this.globalesService.peliminar(this,"estudioLaboratorio") && this.globalesService.pbuscar(this,"estudioLaboratorio"));
        if (this.estudioLaboratorioAgregar) this.estudioLaboratorioAgregar = this.globalesService.pagregar(this,"estudioLaboratorio");
    }
    permisosaccionesInicio() {
        this.estudioLaboratorioSeleccion = this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false; // *************************** maquina
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.estudioLaboratorio = new EstudioLaboratorio();

        this.usuarioUltMovEstudioLaboratorioUsuarioEleccion= new Usuario();
        this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion= new EvaluacionSolicitud();

        this.estudioLaboratorioChange.emit(this.estudioLaboratorio);
        this.estudioLaboratorioSeleccion = this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false; // *************************** maquina
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
        this.recepcionSolicitudEvaluacion
    }

    evn_lazy_evaluacionSolicitud(evaluacionSolicitud: EvaluacionSolicitud, objeto) {
      (evaluacionSolicitud);
      objeto.evaluacionSolicitud = evaluacionSolicitud;
      objeto.solicitudEvaluacionCorneal = evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal;
      objeto.recepcionSolicitudEvaluacion = evaluacionSolicitud.idrecepcionSolicitudEvaluacion;
      if (evaluacionSolicitud.estudiosLaboratorio) {
        evaluacionSolicitud.estudiosLaboratorio.forEach(element => {
          if (element.tipoCornea === 1) {
            objeto.estudioLaboratorio = element;
          } else if (element.tipoCornea === 2) {
            objeto.estudioLaboratorioDerecha = element;
          }
        });
      }
    }

    doSave() {
      let estudios = [];
      let isUpdate = false;
      if (this.recepcionSolicitudEvaluacion.idbtcCd) {
        this.estudioLaboratorioDerecha.tipoCornea = 2;
        this.estudioLaboratorioDerecha.idevaluacionSolicitud = {};
        this.estudioLaboratorioDerecha.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
        this.estudioLaboratorioDerecha.usuarioUltMov = {};
        this.estudioLaboratorioDerecha.usuarioUltMov.id = this.globalesService.dameUsuario().id;
        if (this.estudioLaboratorioDerecha.id) {
          isUpdate = true;
        }
        estudios.push(this.estudioLaboratorioDerecha);
      }
      if (this.recepcionSolicitudEvaluacion.idbtcCi) {
        this.estudioLaboratorio.tipoCornea = 1;
        this.estudioLaboratorio.idevaluacionSolicitud = {};
        this.estudioLaboratorio.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
        this.estudioLaboratorio.usuarioUltMov = {};
        this.estudioLaboratorio.usuarioUltMov.id = this.globalesService.dameUsuario().id;
        if (this.estudioLaboratorio.id) {
          isUpdate = true;
        }
        estudios.push(this.estudioLaboratorio);
      }
      if (isUpdate) {
        this.estudioLaboratorio_service.actualizarListaEstudioLaboratorio(estudios, this.evn_guardarListaEvaluacion, this);
      } else {
        this.estudioLaboratorio_service.guardarListaEstudioLaboratorio(estudios, this.evn_guardarListaEvaluacion, this);
      }
    }

    evn_guardarListaEvaluacion(ev, objeto) {
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
}
