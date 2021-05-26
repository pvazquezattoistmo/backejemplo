import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { DesgloseCornea } from '../shared/desglose-cornea';
import { DesgloseCorneaService } from '../shared/desglose-cornea.service';
import { ConfigurarDesgloseCornea } from '../shared/configurar-desglose-cornea'
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
    selector: 'app-desglose-cornea-crud',
    templateUrl: './desglose-cornea-crud.component.html',
    styleUrls: ['./desglose-cornea-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                DesgloseCorneaService,
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
export class DesgloseCorneaCrudComponent implements OnInit {
    public opcionDesgloseCornea  =0;
    public validosDesgloseCornea :any ={
        id:false,
        descripcion:true,
        idadicional:true,
        status:false,
        usuarioUltMov:false,
        idevaluacionSolicitud:false,

    };

    @Input() ocultarConjuntosDesgloseCornea: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "desgloseCornea", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public desgloseCorneaLazy: boolean =false;
    public desgloseCorneaPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public desgloseCornea: DesgloseCornea = new DesgloseCornea();
    @Output() desgloseCorneaChange = new EventEmitter<DesgloseCornea>();
    @Output() desgloseCorneaTablaChange = new EventEmitter<DesgloseCornea>();
    public lista_desgloseCorneas: DesgloseCornea[]=[];
    public configuracionDesgloseCornea: ConfigurarDesgloseCornea;
    public desgloseCorneaBuscar: boolean
    public desgloseCorneaSeleccion: boolean
    public desgloseCorneaAgregar: boolean
    public desgloseCorneaActualizar: boolean
    public desgloseCorneaEliminar: boolean;
    public desgloseCorneaGuardar: boolean;
    public desgloseCorneaCancelar: boolean;
    public usuarioUltMovDesgloseCorneaUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovDesgloseCorneaUsuario: Usuario[]=[];
    public usuarioUltMovDesgloseCorneaUsuarioEditar:boolean =false;
    public idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion: EvaluacionSolicitud = new EvaluacionSolicitud();
    public lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud: EvaluacionSolicitud[]=[];
    public idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEditar:boolean =false;

    get desgloseCorneaOcultarConjuntos(){
        if (this.ocultarConjuntosDesgloseCornea)
           return true
        return  !this.desgloseCorneaActualizar;
    }

    ngOnChanges(changes) {
        if (changes.desgloseCornea && changes.desgloseCornea.currentValue == null &&
            this.desgloseCornea == null) this.desgloseCornea = new DesgloseCornea();
        else {
            var aux :DesgloseCornea = new DesgloseCornea();
            if (this.desgloseCornea)
                aux.from(this.desgloseCornea)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaSeleccion = this.desgloseCorneaGuardar = false;
                this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = this.desgloseCorneaCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.desgloseCorneaSeleccion = this.desgloseCorneaAgregar = this.desgloseCorneaBuscar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
                    this.desgloseCorneaGuardar = this.desgloseCorneaCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "desgloseCornea",
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
      this.desgloseCorneaPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public desgloseCornea_service: DesgloseCorneaService,
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
        this.desgloseCorneaSeleccion = this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
        this.configuracionDesgloseCornea = new ConfigurarDesgloseCornea();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDesgloseCorneaUsuario, this);
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.desgloseCorneaPermisos =true;
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoAtributo&& permisos.desgloseCornea.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.desgloseCornea.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoConjunto && permisos.desgloseCornea.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.desgloseCornea.PermisoConjunto ;
        }
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoTabla && permisos.desgloseCornea.PermisoTabla.length>0){
            obj.permisosTabla = permisos.desgloseCornea.PermisoTabla[0] ;
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


    evtGetUsuarioUltMovDesgloseCorneaUsuario(lista_usuarioUltMovDesgloseCorneaUsuario, obj) {
        obj.lista_usuarioUltMovDesgloseCorneaUsuario = lista_usuarioUltMovDesgloseCorneaUsuario;
        obj.actualizar_UsuarioUltMovDesgloseCorneaUsuario();
    }
    evtGetIdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud(lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud, obj) {
        obj.lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud = lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud;
        obj.actualizar_IdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud();
    }


    actualizar_UsuarioUltMovDesgloseCorneaUsuario() {
        if ( this.usuarioUltMovDesgloseCorneaUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovDesgloseCorneaUsuario)
                if (eleme.id == this.usuarioUltMovDesgloseCorneaUsuarioEleccion.id){
                    this.usuarioUltMovDesgloseCorneaUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud() {
        if ( this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion)
            for (let eleme of this.lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud)
                if (eleme.id == this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion.id){
                    this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosDesgloseCornea['id'];
    }
    get validaIds() {
        return this.validosDesgloseCornea['id'];
    }
    get validaDescripcion() {
        return this.validosDesgloseCornea['descripcion'];
    }
    get validaIdadicional() {
        return this.validosDesgloseCornea['idadicional'];
    }
    get validaStatus() {
        return this.validosDesgloseCornea['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosDesgloseCornea['usuarioUltMov'];
    }
    get validaIdevaluacionSolicitud() {
        return this.validosDesgloseCornea['idevaluacionSolicitud'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaDescripcion && this.validaIdadicional && this.validaStatus && this.validaUsuarioUltMov && this.validaIdevaluacionSolicitud;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerDesgloseCorneas(lista, objeto) {
        objeto.lista_desgloseCorneas = lista;
        if (lista && lista.length > 0) {
            objeto.desgloseCornea.from(lista[0]);
            objeto.evtDesgloseCorneaSeleccionado(objeto.desgloseCornea);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_desgloseCornea(desgloseCornea, objeto) {
        objeto.desgloseCornea = desgloseCornea;
        objeto.desgloseCorneaChange.emit(objeto.desgloseCornea);
        objeto.configuarCombosObjetos();
        objeto.desgloseCorneaLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteDesgloseCorneaWord(){
        return ! (this.desgloseCorneaActualizar && this.desgloseCorneaLazy && this.globalesService.preporteWord(this,"desgloseCornea"));
    }
    get datosReporteDesgloseCorneaExcel(){
        return ! (this.desgloseCorneaActualizar && this.desgloseCorneaLazy && this.globalesService.preporteExcel(this,"desgloseCornea"));
    }
    get datosReporteDesgloseCorneaPdf(){
        return ! (this.desgloseCorneaActualizar && this.desgloseCorneaLazy && this.globalesService.preportePdf(this,"desgloseCornea"));
    }
    reporteDesgloseCorneaExcel(){
        var nombre:string = "DesgloseCornea.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "desgloseCornea": this.desgloseCornea};
        parametros["plantilla"]="DesgloseCornea.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDesgloseCorneaWord(){
        var nombre:string = "DesgloseCornea.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "desgloseCornea": this.desgloseCornea};
        parametros["plantilla"]="DesgloseCornea.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDesgloseCorneaPdf(){
        var nombre:string = "DesgloseCornea.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "desgloseCornea": this.desgloseCornea};
        parametros["plantilla"]="DesgloseCornea.docx";
        parametros["salida"]="DesgloseCornea.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaCancelar = true;
    }
    buscarDesgloseCorneaFront() {
        this.accionesBuscar();
        var vdesgloseCornea: DesgloseCornea = new DesgloseCornea();
        vdesgloseCornea.from(this.desgloseCornea);
        this.configuracionDesgloseCornea = new ConfigurarDesgloseCornea();
        this.configuracionDesgloseCornea.permisosTabla = { "tabla": "desgloseCornea", "permiso": 8 };
        this.configuracionDesgloseCornea.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionDesgloseCornea.desgloseCorneaConsulta = vdesgloseCornea;
        this.permisosacciones();
        $("#buscarDesgloseCornea_"+this.nombre).modal();
    }
    buscarDesgloseCorneaBack(desgloseCornea: DesgloseCornea) {
        this.desgloseCornea_service.getDesgloseCorneasByDto(desgloseCornea, this.eventoSrvDesgloseCorneaBuscar, this);
    }
    eventoSrvDesgloseCorneaBuscar(lista, objeto) {
        objeto.lista_desgloseCorneas = lista;
        if (lista && lista.length > 0) {
            objeto.desgloseCornea = lista[0];
            objeto.desgloseCorneaLazy =false;
            objeto.desgloseCornea_service.lazyDesgloseCornea(objeto.desgloseCornea, objeto.evn_lazy_desgloseCornea, objeto);
        }
    }
    guardarDesgloseCorneaFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarDesgloseCorneaBack(this.desgloseCornea);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarDesgloseCorneaBack(desgloseCornea: DesgloseCornea) {
        if (desgloseCornea.usuarioUltMov == null ) desgloseCornea.usuarioUltMov = this.globalesService.dameUsuario();
        if (desgloseCornea.status == null || desgloseCornea.status == "" ) desgloseCornea.status = 1;
        this.desgloseCornea_service.guardarDesgloseCornea(desgloseCornea, this.eventoSrvDesgloseCorneaGuardar, this);
    }
    eventoSrvDesgloseCorneaGuardar(desgloseCornea, obj) {
        obj.desgloseCornea = desgloseCornea;
        bootbox.alert("Datos guardados con éxito");
        var aux: DesgloseCornea = new DesgloseCornea();
        aux.from(desgloseCornea);
        obj.desgloseCorneaChange.emit(aux);
        obj.desgloseCorneaTablaChange.emit(aux);
        obj.desgloseCorneaLazy =false;
        obj.desgloseCornea_service.lazyDesgloseCornea(obj.desgloseCornea, obj.evn_lazy_desgloseCornea, obj);
        obj.accionesActualizar();

    }
    actualizarDesgloseCorneaFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarDesgloseCorneaBack(this.desgloseCornea);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarDesgloseCorneaBack(desgloseCornea: DesgloseCornea) {
        desgloseCornea.usuarioUltMov = this.globalesService.dameUsuario();
        this.desgloseCornea_service.actualizarDesgloseCornea(desgloseCornea, this.eventoSrvDesgloseCorneaActualizar, this);
    }
    eventoSrvDesgloseCorneaActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: DesgloseCornea = new DesgloseCornea();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.desgloseCorneaLazy = false;
            obj.desgloseCornea_service.lazyDesgloseCornea(obj.desgloseCornea, obj.evn_lazy_desgloseCornea, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.desgloseCornea);
            obj.desgloseCorneaChange.emit(aux);
            obj.desgloseCorneaTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarDesgloseCorneaFront() {
        this.accion = 4;
        this.eliminarDesgloseCorneaBack(this.desgloseCornea);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarDesgloseCorneaBack(desgloseCornea: DesgloseCornea) {
        desgloseCornea.usuarioUltMov = this.globalesService.dameUsuario();
        this.desgloseCornea_service.eliminarDesgloseCornea(desgloseCornea, this.eventoSrvDesgloseCorneaEliminar, this);
    }
    eventoSrvDesgloseCorneaEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.desgloseCornea = new DesgloseCornea();
            obj.desgloseCorneaChange.emit(obj.desgloseCornea);
            obj.desgloseCorneaTablaChange.emit(obj.desgloseCornea);
            obj.limpiarCampos() ;
        }
    }
    cancelarDesgloseCorneaFront() {
        this.accion = 6;
        this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = true;
        this.permisosacciones();
    }
    nuevoDesgloseCorneaFront() {
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
                this.desgloseCorneaSeleccion = this.desgloseCorneaAgregar = this.desgloseCorneaBuscar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
                this.desgloseCorneaGuardar = this.desgloseCorneaCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovDesgloseCorneaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDesgloseCorneaUsuario, this);
        this.lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud = [];
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaSeleccion = this.desgloseCorneaGuardar = false;
        this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = this.desgloseCorneaCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtDesgloseCorneaSeleccionado(desgloseCornea) {
        this.desgloseCornea = new DesgloseCornea();
        this.desgloseCornea.from(desgloseCornea);
        this.desgloseCorneaLazy =false;
        this.desgloseCornea_service.lazyDesgloseCornea(this.desgloseCornea, this.evn_lazy_desgloseCornea, this);
        this.accion = 7;
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaSeleccion = this.desgloseCorneaGuardar = false;
        this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = this.desgloseCorneaCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDesgloseCornea_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.desgloseCorneaSeleccion = this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;        // ******************** maquina
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.desgloseCorneaBuscar) this.desgloseCorneaBuscar = this.globalesService.pbuscar(this,"desgloseCornea");
        if (this.desgloseCorneaActualizar) this.desgloseCorneaActualizar = (this.globalesService.pacutalizar(this,"desgloseCornea") && this.globalesService.pbuscar(this,"desgloseCornea"));
        if (this.desgloseCorneaEliminar) this.desgloseCorneaEliminar = (this.globalesService.peliminar(this,"desgloseCornea") && this.globalesService.pbuscar(this,"desgloseCornea"));
        if (this.desgloseCorneaAgregar) this.desgloseCorneaAgregar = this.globalesService.pagregar(this,"desgloseCornea");
    }
    permisosaccionesInicio() {
        this.desgloseCorneaSeleccion = this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false; // *************************** maquina
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.desgloseCornea = new DesgloseCornea();

        this.usuarioUltMovDesgloseCorneaUsuarioEleccion= new Usuario();
        this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion= new EvaluacionSolicitud();

        this.desgloseCorneaChange.emit(this.desgloseCornea);
        this.desgloseCorneaSeleccion = this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false; // *************************** maquina
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
