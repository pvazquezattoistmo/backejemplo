import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { DatoCorneaExtraccion } from '../shared/dato-cornea-extraccion';
import { DatoCorneaExtraccionService } from '../shared/dato-cornea-extraccion.service';
import { ConfigurarDatoCorneaExtraccion } from '../shared/configurar-dato-cornea-extraccion'
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
import { RegistroExtraccion } from '../../registro-extracciones/shared/registro-extraccion';
import { RegistroExtraccionService } from '../../registro-extracciones/shared/registro-extraccion.service';
import { SolicitudEvaluacionCornealService } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service';
import { SolicitudEvaluacionCorneal } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal';
import { CausaMuerteService } from '../../causa-muertes/shared/causa-muerte.service';
import { CausaMuerte } from '../../causa-muertes/shared/causa-muerte';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-dato-cornea-extraccion-crud',
    templateUrl: './dato-cornea-extraccion-crud.component.html',
    styleUrls: ['./dato-cornea-extraccion-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                DatoCorneaExtraccionService,
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
export class DatoCorneaExtraccionCrudComponent implements OnInit {
    public opcionDatoCorneaExtraccion  =0;
    public validosDatoCorneaExtraccion :any ={
        id:false,
        fechaBaja:false,
        vobo:false,
        fechaRegistro:false,
        cultivoOptisol:false,
        fechaActualizacion:false,
        cultivoPrevioProcuracion:false,
        tipoCornea:false,
        status:false,
        usuarioUltMov:false,
        idregistroExtraccion:false,

    };

    @Input() ocultarConjuntosDatoCorneaExtraccion: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "datoCorneaExtraccion", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public datoCorneaExtraccionLazy: boolean =false;
    public datoCorneaExtraccionPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public datoCorneaExtraccion: DatoCorneaExtraccion = new DatoCorneaExtraccion();
    @Output() datoCorneaExtraccionChange = new EventEmitter<DatoCorneaExtraccion>();
    @Output() datoCorneaExtraccionTablaChange = new EventEmitter<DatoCorneaExtraccion>();
    public lista_datoCorneaExtracciones: DatoCorneaExtraccion[]=[];
    public configuracionDatoCorneaExtraccion: ConfigurarDatoCorneaExtraccion;
    public datoCorneaExtraccionBuscar: boolean
    public datoCorneaExtraccionSeleccion: boolean
    public datoCorneaExtraccionAgregar: boolean
    public datoCorneaExtraccionActualizar: boolean
    public datoCorneaExtraccionEliminar: boolean;
    public datoCorneaExtraccionGuardar: boolean;
    public datoCorneaExtraccionCancelar: boolean;
    public usuarioUltMovDatoCorneaExtraccionUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovDatoCorneaExtraccionUsuario: Usuario[]=[];
    public usuarioUltMovDatoCorneaExtraccionUsuarioEditar:boolean =false;
    public idregistroExtraccionDatoCorneaExtraccionRegistroExtraccionEleccion: RegistroExtraccion = new RegistroExtraccion();
    public lista_idregistroExtraccionDatoCorneaExtraccionRegistroExtraccion: RegistroExtraccion[]=[];
    public idregistroExtraccionDatoCorneaExtraccionRegistroExtraccionEditar:boolean =false;
    @Input() etiquetaGeneral;

    @Input() public enable: boolean;

    get datoCorneaExtraccionOcultarConjuntos(){
        if (this.ocultarConjuntosDatoCorneaExtraccion)
           return true
        return  !this.datoCorneaExtraccionActualizar;
    }

    ngOnChanges(changes) {
        if (changes.datoCorneaExtraccion && changes.datoCorneaExtraccion.currentValue == null &&
            this.datoCorneaExtraccion == null) this.datoCorneaExtraccion = new DatoCorneaExtraccion();
        else {
            var aux :DatoCorneaExtraccion = new DatoCorneaExtraccion();
            if (this.datoCorneaExtraccion)
                aux.from(this.datoCorneaExtraccion)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionAgregar = this.datoCorneaExtraccionSeleccion = this.datoCorneaExtraccionGuardar = false;
                this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = this.datoCorneaExtraccionCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.datoCorneaExtraccionSeleccion = this.datoCorneaExtraccionAgregar = this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = false;
                    this.datoCorneaExtraccionGuardar = this.datoCorneaExtraccionCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "datoCorneaExtraccion",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "registroExtraccion",
                                "solicitudEvaluacionCorneal",
                                "causaMuerte",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.datoCorneaExtraccionPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public datoCorneaExtraccion_service: DatoCorneaExtraccionService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,
                public registroExtraccion_service: RegistroExtraccionService,

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
        this.datoCorneaExtraccionSeleccion = this.datoCorneaExtraccionCancelar = this.datoCorneaExtraccionGuardar = this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionAgregar = this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = false;
        this.configuracionDatoCorneaExtraccion = new ConfigurarDatoCorneaExtraccion();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDatoCorneaExtraccionUsuario, this);
        this.registroExtraccion_service.getRegistroExtraccionesActivos(this.evtGetIdregistroExtraccionDatoCorneaExtraccionRegistroExtraccion, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.datoCorneaExtraccionPermisos =true;
        if (permisos && permisos.datoCorneaExtraccion && permisos.datoCorneaExtraccion.PermisoAtributo&& permisos.datoCorneaExtraccion.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.datoCorneaExtraccion.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.datoCorneaExtraccion && permisos.datoCorneaExtraccion.PermisoConjunto && permisos.datoCorneaExtraccion.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.datoCorneaExtraccion.PermisoConjunto ;
        }
        if (permisos && permisos.datoCorneaExtraccion && permisos.datoCorneaExtraccion.PermisoTabla && permisos.datoCorneaExtraccion.PermisoTabla.length>0){
            obj.permisosTabla = permisos.datoCorneaExtraccion.PermisoTabla[0] ;
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
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoAtributo&& permisos.registroExtraccion.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.registroExtraccion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.registroExtraccion.PermisoAtributo) ;
        }
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoAtributo&& permisos.registroExtraccion.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.registroExtraccion.PermisoConjunto) ;
        }
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoTabla && permisos.registroExtraccion.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.registroExtraccion.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.registroExtraccion.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovDatoCorneaExtraccionUsuario(lista_usuarioUltMovDatoCorneaExtraccionUsuario, obj) {
        obj.lista_usuarioUltMovDatoCorneaExtraccionUsuario = lista_usuarioUltMovDatoCorneaExtraccionUsuario;
        obj.actualizar_UsuarioUltMovDatoCorneaExtraccionUsuario();
    }
    evtGetIdregistroExtraccionDatoCorneaExtraccionRegistroExtraccion(lista_idregistroExtraccionDatoCorneaExtraccionRegistroExtraccion, obj) {
        obj.lista_idregistroExtraccionDatoCorneaExtraccionRegistroExtraccion = lista_idregistroExtraccionDatoCorneaExtraccionRegistroExtraccion;
        obj.actualizar_IdregistroExtraccionDatoCorneaExtraccionRegistroExtraccion();
    }


    actualizar_UsuarioUltMovDatoCorneaExtraccionUsuario() {
        if ( this.usuarioUltMovDatoCorneaExtraccionUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovDatoCorneaExtraccionUsuario)
                if (eleme.id == this.usuarioUltMovDatoCorneaExtraccionUsuarioEleccion.id){
                    this.usuarioUltMovDatoCorneaExtraccionUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdregistroExtraccionDatoCorneaExtraccionRegistroExtraccion() {
        if ( this.idregistroExtraccionDatoCorneaExtraccionRegistroExtraccionEleccion)
            for (let eleme of this.lista_idregistroExtraccionDatoCorneaExtraccionRegistroExtraccion)
                if (eleme.id == this.idregistroExtraccionDatoCorneaExtraccionRegistroExtraccionEleccion.id){
                    this.idregistroExtraccionDatoCorneaExtraccionRegistroExtraccionEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosDatoCorneaExtraccion['id'];
    }
    get validaIds() {
        return this.validosDatoCorneaExtraccion['id'];
    }
    get validaFechaBaja() {
        return this.validosDatoCorneaExtraccion['fechaBaja'];
    }
    get validaVobo() {
        return this.validosDatoCorneaExtraccion['vobo'];
    }
    get validaFechaRegistro() {
        return this.validosDatoCorneaExtraccion['fechaRegistro'];
    }
    get validaCultivoOptisol() {
        return this.validosDatoCorneaExtraccion['cultivoOptisol'];
    }
    get validaFechaActualizacion() {
        return this.validosDatoCorneaExtraccion['fechaActualizacion'];
    }
    get validaCultivoPrevioProcuracion() {
        return this.validosDatoCorneaExtraccion['cultivoPrevioProcuracion'];
    }
    get validaTipoCornea() {
        return this.validosDatoCorneaExtraccion['tipoCornea'];
    }
    get validaStatus() {
        return this.validosDatoCorneaExtraccion['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosDatoCorneaExtraccion['usuarioUltMov'];
    }
    get validaIdregistroExtraccion() {
        return this.validosDatoCorneaExtraccion['idregistroExtraccion'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaVobo && this.validaFechaRegistro && this.validaCultivoOptisol && this.validaFechaActualizacion && this.validaCultivoPrevioProcuracion && this.validaTipoCornea && this.validaStatus && this.validaUsuarioUltMov && this.validaIdregistroExtraccion;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerDatoCorneaExtracciones(lista, objeto) {
        objeto.lista_datoCorneaExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.datoCorneaExtraccion.from(lista[0]);
            objeto.evtDatoCorneaExtraccionSeleccionado(objeto.datoCorneaExtraccion);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_datoCorneaExtraccion(datoCorneaExtraccion, objeto) {
        objeto.datoCorneaExtraccion = datoCorneaExtraccion;
        objeto.datoCorneaExtraccionChange.emit(objeto.datoCorneaExtraccion);
        objeto.configuarCombosObjetos();
        objeto.datoCorneaExtraccionLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteDatoCorneaExtraccionWord(){
        return ! (this.datoCorneaExtraccionActualizar && this.datoCorneaExtraccionLazy && this.globalesService.preporteWord(this,"datoCorneaExtraccion"));
    }
    get datosReporteDatoCorneaExtraccionExcel(){
        return ! (this.datoCorneaExtraccionActualizar && this.datoCorneaExtraccionLazy && this.globalesService.preporteExcel(this,"datoCorneaExtraccion"));
    }
    get datosReporteDatoCorneaExtraccionPdf(){
        return ! (this.datoCorneaExtraccionActualizar && this.datoCorneaExtraccionLazy && this.globalesService.preportePdf(this,"datoCorneaExtraccion"));
    }
    reporteDatoCorneaExtraccionExcel(form: any){
        var nombre:string = "DatoCorneaExtraccion.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "datoCorneaExtraccion": this.datoCorneaExtraccion};
        parametros["plantilla"]="DatoCorneaExtraccion.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDatoCorneaExtraccionWord(form: any){
        var nombre:string = "DatoCorneaExtraccion.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "datoCorneaExtraccion": this.datoCorneaExtraccion};
        parametros["plantilla"]="DatoCorneaExtraccion.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDatoCorneaExtraccionPdf(form: any){
        var nombre:string = "DatoCorneaExtraccion.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "datoCorneaExtraccion": this.datoCorneaExtraccion};
        parametros["plantilla"]="DatoCorneaExtraccion.docx";
        parametros["salida"]="DatoCorneaExtraccion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.datoCorneaExtraccionGuardar = this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = false;
        this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionAgregar = this.datoCorneaExtraccionCancelar = true;
    }
    buscarDatoCorneaExtraccionFront(form: any) {
        this.accionesBuscar();
        var vdatoCorneaExtraccion: DatoCorneaExtraccion = new DatoCorneaExtraccion();
        vdatoCorneaExtraccion.from(this.datoCorneaExtraccion);
        this.configuracionDatoCorneaExtraccion = new ConfigurarDatoCorneaExtraccion();
        this.configuracionDatoCorneaExtraccion.permisosTabla = { "tabla": "datoCorneaExtraccion", "permiso": 8 };
        this.configuracionDatoCorneaExtraccion.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionDatoCorneaExtraccion.datoCorneaExtraccionConsulta = vdatoCorneaExtraccion;
        this.permisosacciones();
        $("#buscarDatoCorneaExtraccion_"+this.nombre).modal();
    }
    buscarDatoCorneaExtraccionBack(datoCorneaExtraccion: DatoCorneaExtraccion) {
        this.datoCorneaExtraccion_service.getDatoCorneaExtraccionesByDto(datoCorneaExtraccion, this.eventoSrvDatoCorneaExtraccionBuscar, this);
    }
    eventoSrvDatoCorneaExtraccionBuscar(lista, objeto) {
        objeto.lista_datoCorneaExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.datoCorneaExtraccion = lista[0];
            objeto.datoCorneaExtraccionLazy =false;
            objeto.datoCorneaExtraccion_service.lazyDatoCorneaExtraccion(objeto.datoCorneaExtraccion, objeto.evn_lazy_datoCorneaExtraccion, objeto);
        }
    }
    guardarDatoCorneaExtraccionFront(form: any) {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarDatoCorneaExtraccionBack(this.datoCorneaExtraccion);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarDatoCorneaExtraccionBack(datoCorneaExtraccion: DatoCorneaExtraccion) {
        if (datoCorneaExtraccion.usuarioUltMov == null ) datoCorneaExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        if (datoCorneaExtraccion.status == null || datoCorneaExtraccion.status == "" ) datoCorneaExtraccion.status = 1;
        this.datoCorneaExtraccion_service.guardarDatoCorneaExtraccion(datoCorneaExtraccion, this.eventoSrvDatoCorneaExtraccionGuardar, this);
    }
    eventoSrvDatoCorneaExtraccionGuardar(datoCorneaExtraccion, obj) {
        obj.datoCorneaExtraccion = datoCorneaExtraccion;
        bootbox.alert("Datos guardados con éxito");
        var aux: DatoCorneaExtraccion = new DatoCorneaExtraccion();
        aux.from(datoCorneaExtraccion);
        obj.datoCorneaExtraccionChange.emit(aux);
        obj.datoCorneaExtraccionTablaChange.emit(aux);
        obj.datoCorneaExtraccionLazy =false;
        obj.datoCorneaExtraccion_service.lazyDatoCorneaExtraccion(obj.datoCorneaExtraccion, obj.evn_lazy_datoCorneaExtraccion, obj);
        obj.accionesActualizar();

    }
    actualizarDatoCorneaExtraccionFront(form: any) {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarDatoCorneaExtraccionBack(this.datoCorneaExtraccion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarDatoCorneaExtraccionBack(datoCorneaExtraccion: DatoCorneaExtraccion) {
        datoCorneaExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        this.datoCorneaExtraccion_service.actualizarDatoCorneaExtraccion(datoCorneaExtraccion, this.eventoSrvDatoCorneaExtraccionActualizar, this);
    }
    eventoSrvDatoCorneaExtraccionActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: DatoCorneaExtraccion = new DatoCorneaExtraccion();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.datoCorneaExtraccionLazy = false;
            obj.datoCorneaExtraccion_service.lazyDatoCorneaExtraccion(obj.datoCorneaExtraccion, obj.evn_lazy_datoCorneaExtraccion, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.datoCorneaExtraccion);
            obj.datoCorneaExtraccionChange.emit(aux);
            obj.datoCorneaExtraccionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarDatoCorneaExtraccionFront(form: any) {
        this.accion = 4;
        this.eliminarDatoCorneaExtraccionBack(this.datoCorneaExtraccion);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarDatoCorneaExtraccionBack(datoCorneaExtraccion: DatoCorneaExtraccion) {
        datoCorneaExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        this.datoCorneaExtraccion_service.eliminarDatoCorneaExtraccion(datoCorneaExtraccion, this.eventoSrvDatoCorneaExtraccionEliminar, this);
    }
    eventoSrvDatoCorneaExtraccionEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.datoCorneaExtraccion = new DatoCorneaExtraccion();
            obj.datoCorneaExtraccionChange.emit(obj.datoCorneaExtraccion);
            obj.datoCorneaExtraccionTablaChange.emit(obj.datoCorneaExtraccion);
            obj.limpiarCampos() ;
        }
    }
    cancelarDatoCorneaExtraccionFront(form: any) {
        this.accion = 6;
        this.datoCorneaExtraccionCancelar = this.datoCorneaExtraccionGuardar = this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = false;
        this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionAgregar = true;
        this.permisosacciones();
    }
    nuevoDatoCorneaExtraccionFront(form: any) {
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
                this.datoCorneaExtraccionSeleccion = this.datoCorneaExtraccionAgregar = this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = false;
                this.datoCorneaExtraccionGuardar = this.datoCorneaExtraccionCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovDatoCorneaExtraccionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDatoCorneaExtraccionUsuario, this);
        this.lista_idregistroExtraccionDatoCorneaExtraccionRegistroExtraccion = [];
        this.registroExtraccion_service.getRegistroExtraccionesActivos(this.evtGetIdregistroExtraccionDatoCorneaExtraccionRegistroExtraccion, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionAgregar = this.datoCorneaExtraccionSeleccion = this.datoCorneaExtraccionGuardar = false;
        this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = this.datoCorneaExtraccionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtDatoCorneaExtraccionSeleccionado(datoCorneaExtraccion) {
        this.datoCorneaExtraccion = new DatoCorneaExtraccion();
        this.datoCorneaExtraccion.from(datoCorneaExtraccion);
        this.datoCorneaExtraccionLazy =false;
        this.datoCorneaExtraccion_service.lazyDatoCorneaExtraccion(this.datoCorneaExtraccion, this.evn_lazy_datoCorneaExtraccion, this);
        this.accion = 7;
        this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionAgregar = this.datoCorneaExtraccionSeleccion = this.datoCorneaExtraccionGuardar = false;
        this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = this.datoCorneaExtraccionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDatoCorneaExtraccion_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.datoCorneaExtraccionSeleccion = this.datoCorneaExtraccionCancelar = this.datoCorneaExtraccionGuardar = this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = false;        // ******************** maquina
        this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.datoCorneaExtraccionBuscar) this.datoCorneaExtraccionBuscar = this.globalesService.pbuscar(this,"datoCorneaExtraccion");
        if (this.datoCorneaExtraccionActualizar) this.datoCorneaExtraccionActualizar = (this.globalesService.pacutalizar(this,"datoCorneaExtraccion") && this.globalesService.pbuscar(this,"datoCorneaExtraccion"));
        if (this.datoCorneaExtraccionEliminar) this.datoCorneaExtraccionEliminar = (this.globalesService.peliminar(this,"datoCorneaExtraccion") && this.globalesService.pbuscar(this,"datoCorneaExtraccion"));
        if (this.datoCorneaExtraccionAgregar) this.datoCorneaExtraccionAgregar = this.globalesService.pagregar(this,"datoCorneaExtraccion");
    }
    permisosaccionesInicio() {
        this.datoCorneaExtraccionSeleccion = this.datoCorneaExtraccionCancelar = this.datoCorneaExtraccionGuardar = this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = false; // *************************** maquina
        this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.datoCorneaExtraccion = new DatoCorneaExtraccion();

        this.usuarioUltMovDatoCorneaExtraccionUsuarioEleccion= new Usuario();
        this.idregistroExtraccionDatoCorneaExtraccionRegistroExtraccionEleccion= new RegistroExtraccion();

        this.datoCorneaExtraccionChange.emit(this.datoCorneaExtraccion);
        this.datoCorneaExtraccionSeleccion = this.datoCorneaExtraccionCancelar = this.datoCorneaExtraccionGuardar = this.datoCorneaExtraccionActualizar = this.datoCorneaExtraccionEliminar = false; // *************************** maquina
        this.datoCorneaExtraccionBuscar = this.datoCorneaExtraccionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
