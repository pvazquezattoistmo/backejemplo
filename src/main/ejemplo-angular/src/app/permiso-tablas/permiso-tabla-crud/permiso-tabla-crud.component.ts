import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { PermisoTabla } from '../shared/permiso-tabla';
import { PermisoTablaService } from '../shared/permiso-tabla.service';
import { ConfigurarPermisoTabla } from '../shared/configurar-permiso-tabla'
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
import { PermisoTablaPerfil } from '../shared/permiso-tabla-perfil';
import { ConfigurarPerfil } from '../../perfiles/shared/configurar-perfil';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-permiso-tabla-crud',
    templateUrl: './permiso-tabla-crud.component.html',
    styleUrls: ['./permiso-tabla-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                PermisoTablaService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class PermisoTablaCrudComponent implements OnInit {
    public opcionPermisoTabla  =0;
    public validosPermisoTabla :any ={
        id:false,
        etiqueta:false,
        permiso:false,
        tabla:false,
        status:false,
        usuarioUltMov:false,
        usuario:false,

    };

    @Input() ocultarConjuntosPermisoTabla: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "permisoTabla", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public permisoTablaLazy: boolean =false;
    public permisoTablaPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public permisoTabla: PermisoTabla = new PermisoTabla();
    @Output() permisoTablaChange = new EventEmitter<PermisoTabla>();
    @Output() permisoTablaTablaChange = new EventEmitter<PermisoTabla>();
    public lista_permisoTablas: PermisoTabla[]=[];
    public configuracionPermisoTabla: ConfigurarPermisoTabla;
    public permisoTablaBuscar: boolean
    public permisoTablaSeleccion: boolean
    public permisoTablaAgregar: boolean
    public permisoTablaActualizar: boolean
    public permisoTablaEliminar: boolean;
    public permisoTablaGuardar: boolean;
    public permisoTablaCancelar: boolean;
    public usuarioUltMovPermisoTablaUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovPermisoTablaUsuario: Usuario[]=[];
    public usuarioUltMovPermisoTablaUsuarioEditar:boolean =false;
    public usuarioPermisoTablaUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioPermisoTablaUsuario: Usuario[]=[];
    public usuarioPermisoTablaUsuarioEditar:boolean =false;
    public perfilesPermisoTablaPerfilEleccion: Perfil = new Perfil();
    public perfilesPermisoTablaPerfilN: Perfil[]=[];
    public lista_perfilesPermisoTablaPerfil: Perfil[]=[];
    public configuracionPerfilesPermisoTablaPerfil: ConfigurarPerfil;

    get permisoTablaOcultarConjuntos(){
        if (this.ocultarConjuntosPermisoTabla)
           return true
        return  !this.permisoTablaActualizar;
    }

    ngOnChanges(changes) {
        if (changes.permisoTabla && changes.permisoTabla.currentValue == null &&
            this.permisoTabla == null) this.permisoTabla = new PermisoTabla();
        else {
            var aux :PermisoTabla = new PermisoTabla();
            if (this.permisoTabla)
                aux.from(this.permisoTabla)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaSeleccion = this.permisoTablaGuardar = false;
                this.permisoTablaActualizar = this.permisoTablaEliminar = this.permisoTablaCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.permisoTablaSeleccion = this.permisoTablaAgregar = this.permisoTablaBuscar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
                    this.permisoTablaGuardar = this.permisoTablaCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "permisoTabla",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.permisoTablaPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public permisoTabla_service: PermisoTablaService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,

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
        this.permisoTablaSeleccion = this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
        this.configuracionPermisoTabla = new ConfigurarPermisoTabla();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoTablaUsuario, this);
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoTablaUsuario, this);
        this.configuracionPerfilesPermisoTablaPerfil = new ConfigurarPerfil();
        this.perfil_service.getPerfiles(this.evtGetPerfilesPermisoTablaPerfil, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.permisoTablaPermisos =true;
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoAtributo&& permisos.permisoTabla.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.permisoTabla.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoConjunto && permisos.permisoTabla.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.permisoTabla.PermisoConjunto ;
        }
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoTabla && permisos.permisoTabla.PermisoTabla.length>0){
            obj.permisosTabla = permisos.permisoTabla.PermisoTabla[0] ;
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo&& permisos.perfil.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.perfil.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.perfil.PermisoAtributo) ;
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo&& permisos.perfil.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.perfil.PermisoConjunto) ;
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoTabla && permisos.perfil.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.perfil.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.perfil.PermisoTabla[0] );
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

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

    configurarListaPerfilesPermisoTablaPerfil() {
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosPerfil = Object.assign([],this.configuracionPerfilesPermisoTablaPerfil.permisosAtributos);
        var tablaPerfil = Object.assign({},this.configuracionPerfilesPermisoTablaPerfil.permisosTabla);
        this.configuracionPerfilesPermisoTablaPerfil = new ConfigurarPerfil();
        this.configuracionPerfilesPermisoTablaPerfil.permisosAtributos = atributosPerfil ;
        this.configuracionPerfilesPermisoTablaPerfil.permisosTabla =tablaPerfil;
        this.configuracionPerfilesPermisoTablaPerfil.permisosTabla.permiso= this.configuracionPerfilesPermisoTablaPerfil.permisosTabla.permiso & 247;
        this.configuracionPerfilesPermisoTablaPerfil.titulo = "Agregar "+this.globalesService.cetiqueta(this,"permisoTabla","perfilesPermisoTablaPerfil");
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    }
    configurarListaPerfilesPermisoTablaPerfilPos() {
        this.configuracionPerfilesPermisoTablaPerfil.rutaLista = this.configuracionPerfilesPermisoTablaPerfil.crudServiceBaseUrl + "/getPerfiles";
        this.configuracionPerfilesPermisoTablaPerfil.rutaAgregar = this.configuracionPerfilesPermisoTablaPerfil.crudServiceBaseUrl + "/addPerfiles";
        this.configuracionPerfilesPermisoTablaPerfil.rutaEliminar = this.configuracionPerfilesPermisoTablaPerfil.crudServiceBaseUrl + "/removePerfiles";
        var vperfil: Perfil = new Perfil();
        vperfil.from(this.perfilesPermisoTablaPerfilEleccion);
        this.configuracionPerfilesPermisoTablaPerfil.perfilConsulta = vperfil.toDto();
        this.configuracionPerfilesPermisoTablaPerfil.tipocampoAgEl = "PermisoTablaPerfil";
        this.configuracionPerfilesPermisoTablaPerfil.campoAgEl = new PermisoTablaPerfil();
        this.configuracionPerfilesPermisoTablaPerfil.campoAgEl.perfil = vperfil.toDto();
    }

    evtGetUsuarioUltMovPermisoTablaUsuario(lista_usuarioUltMovPermisoTablaUsuario, obj) {
        obj.lista_usuarioUltMovPermisoTablaUsuario = lista_usuarioUltMovPermisoTablaUsuario;
        obj.actualizar_UsuarioUltMovPermisoTablaUsuario();
    }
    evtGetUsuarioPermisoTablaUsuario(lista_usuarioPermisoTablaUsuario, obj) {
        obj.lista_usuarioPermisoTablaUsuario = lista_usuarioPermisoTablaUsuario;
        obj.actualizar_UsuarioPermisoTablaUsuario();
    }
    evtGetPerfilesPermisoTablaPerfil(lista_perfilesPermisoTablaPerfil, obj) {
        obj.lista_perfilesPermisoTablaPerfil = lista_perfilesPermisoTablaPerfil;
    }


    actualizar_UsuarioUltMovPermisoTablaUsuario() {
        if ( this.usuarioUltMovPermisoTablaUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovPermisoTablaUsuario)
                if (eleme.id == this.usuarioUltMovPermisoTablaUsuarioEleccion.id){
                    this.usuarioUltMovPermisoTablaUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_UsuarioPermisoTablaUsuario() {
        if ( this.usuarioPermisoTablaUsuarioEleccion)
            for (let eleme of this.lista_usuarioPermisoTablaUsuario)
                if (eleme.id == this.usuarioPermisoTablaUsuarioEleccion.id){
                    this.usuarioPermisoTablaUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }
    agregarPerfilesPermisoTablaPerfil() {
        var permisoTablaPerfil: PermisoTablaPerfil = new PermisoTablaPerfil();
        permisoTablaPerfil.permisoTabla = this.permisoTabla;
        permisoTablaPerfil.perfil = this.perfilesPermisoTablaPerfilEleccion;
        this.permisoTabla_service.addPerfiles(permisoTablaPerfil, this.evtAgregarPerfilesPermisoTablaPerfil, this);
    }
    evtAgregarPerfilesPermisoTablaPerfil(respuesta, obj) {
        if (respuesta) {
            obj.configurarListaPerfilesPermisoTablaPerfil();
            obj.configurarListaPerfilesPermisoTablaPerfilPos();
            bootbox.alert("Perfil agregada con �xito");
        }
    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosPermisoTabla['id'];
    }
    get validaIds() {
        return this.validosPermisoTabla['id'];
    }
    get validaEtiqueta() {
        return this.validosPermisoTabla['etiqueta'];
    }
    get validaPermiso() {
        return this.validosPermisoTabla['permiso'];
    }
    get validaTabla() {
        return this.validosPermisoTabla['tabla'];
    }
    get validaStatus() {
        return this.validosPermisoTabla['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosPermisoTabla['usuarioUltMov'];
    }
    get validaUsuario() {
        return this.validosPermisoTabla['usuario'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaEtiqueta && this.validaPermiso && this.validaTabla && this.validaStatus && this.validaUsuarioUltMov && this.validaUsuario;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerPermisoTablas(lista, objeto) {
        objeto.lista_permisoTablas = lista;
        if (lista && lista.length > 0) {
            objeto.permisoTabla.from(lista[0]);
            objeto.evtPermisoTablaSeleccionado(objeto.permisoTabla);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_permisoTabla(permisoTabla, objeto) {
        objeto.permisoTabla = permisoTabla;
        objeto.permisoTablaChange.emit(objeto.permisoTabla);
        objeto.configuarCombosObjetos();
        objeto.permisoTablaLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReportePermisoTablaWord(){
        return ! (this.permisoTablaActualizar && this.permisoTablaLazy && this.globalesService.preporteWord(this,"permisoTabla"));
    }
    get datosReportePermisoTablaExcel(){
        return ! (this.permisoTablaActualizar && this.permisoTablaLazy && this.globalesService.preporteExcel(this,"permisoTabla"));
    }
    get datosReportePermisoTablaPdf(){
        return ! (this.permisoTablaActualizar && this.permisoTablaLazy && this.globalesService.preportePdf(this,"permisoTabla"));
    }
    reportePermisoTablaExcel(){
        var nombre:string = "PermisoTabla.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "permisoTabla": this.permisoTabla};
        parametros["plantilla"]="PermisoTabla.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePermisoTablaWord(){
        var nombre:string = "PermisoTabla.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "permisoTabla": this.permisoTabla};
        parametros["plantilla"]="PermisoTabla.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePermisoTablaPdf(){
        var nombre:string = "PermisoTabla.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "permisoTabla": this.permisoTabla};
        parametros["plantilla"]="PermisoTabla.docx";
        parametros["salida"]="PermisoTabla.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
        this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaCancelar = true;
    }
    buscarPermisoTablaFront() {
        this.accionesBuscar();
        var vpermisoTabla: PermisoTabla = new PermisoTabla();
        vpermisoTabla.from(this.permisoTabla);
        this.configuracionPermisoTabla = new ConfigurarPermisoTabla();
        this.configuracionPermisoTabla.permisosTabla = { "tabla": "permisoTabla", "permiso": 8 };
        this.configuracionPermisoTabla.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionPermisoTabla.permisoTablaConsulta = vpermisoTabla;
        this.permisosacciones();
        $("#buscarPermisoTabla_"+this.nombre).modal();
    }
    buscarPermisoTablaBack(permisoTabla: PermisoTabla) {
        this.permisoTabla_service.getPermisoTablasByDto(permisoTabla, this.eventoSrvPermisoTablaBuscar, this);
    }
    eventoSrvPermisoTablaBuscar(lista, objeto) {
        objeto.lista_permisoTablas = lista;
        if (lista && lista.length > 0) {
            objeto.permisoTabla = lista[0];
            objeto.permisoTablaLazy =false;
            objeto.permisoTabla_service.lazyPermisoTabla(objeto.permisoTabla, objeto.evn_lazy_permisoTabla, objeto);
        }
    }
    guardarPermisoTablaFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarPermisoTablaBack(this.permisoTabla);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarPermisoTablaBack(permisoTabla: PermisoTabla) {
        if (permisoTabla.usuarioUltMov == null ) permisoTabla.usuarioUltMov = this.globalesService.dameUsuario();
        if (permisoTabla.status == null || permisoTabla.status == "" ) permisoTabla.status = 1;
        this.permisoTabla_service.guardarPermisoTabla(permisoTabla, this.eventoSrvPermisoTablaGuardar, this);
    }
    eventoSrvPermisoTablaGuardar(permisoTabla, obj) {
        obj.permisoTabla = permisoTabla;
        bootbox.alert("Datos guardados con éxito");
        var aux: PermisoTabla = new PermisoTabla();
        aux.from(permisoTabla);
        obj.permisoTablaChange.emit(aux);
        obj.permisoTablaTablaChange.emit(aux);
        obj.permisoTablaLazy =false;
        obj.permisoTabla_service.lazyPermisoTabla(obj.permisoTabla, obj.evn_lazy_permisoTabla, obj);
        obj.accionesActualizar();

    }
    actualizarPermisoTablaFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarPermisoTablaBack(this.permisoTabla);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarPermisoTablaBack(permisoTabla: PermisoTabla) {
        permisoTabla.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoTabla_service.actualizarPermisoTabla(permisoTabla, this.eventoSrvPermisoTablaActualizar, this);
    }
    eventoSrvPermisoTablaActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: PermisoTabla = new PermisoTabla();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.permisoTablaLazy = false;
            obj.permisoTabla_service.lazyPermisoTabla(obj.permisoTabla, obj.evn_lazy_permisoTabla, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.permisoTabla);
            obj.permisoTablaChange.emit(aux);
            obj.permisoTablaTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarPermisoTablaFront() {
        this.accion = 4;
        this.eliminarPermisoTablaBack(this.permisoTabla);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarPermisoTablaBack(permisoTabla: PermisoTabla) {
        permisoTabla.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoTabla_service.eliminarPermisoTabla(permisoTabla, this.eventoSrvPermisoTablaEliminar, this);
    }
    eventoSrvPermisoTablaEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.permisoTabla = new PermisoTabla();
            obj.permisoTablaChange.emit(obj.permisoTabla);
            obj.permisoTablaTablaChange.emit(obj.permisoTabla);
            obj.limpiarCampos() ;
        }
    }
    cancelarPermisoTablaFront() {
        this.accion = 6;
        this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
        this.permisoTablaBuscar = this.permisoTablaAgregar = true;
        this.permisosacciones();
    }
    nuevoPermisoTablaFront() {
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
                this.permisoTablaSeleccion = this.permisoTablaAgregar = this.permisoTablaBuscar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
                this.permisoTablaGuardar = this.permisoTablaCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovPermisoTablaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoTablaUsuario, this);
        this.lista_usuarioPermisoTablaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoTablaUsuario, this);
    }
    configurarTablasConjuntos(){
        this.configurarListaPerfilesPermisoTablaPerfil();
        this.configurarListaPerfilesPermisoTablaPerfilPos();
    }

    accionesActualizar(){
        this.accion = 7;
        this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaSeleccion = this.permisoTablaGuardar = false;
        this.permisoTablaActualizar = this.permisoTablaEliminar = this.permisoTablaCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtPermisoTablaSeleccionado(permisoTabla) {
        this.permisoTabla = new PermisoTabla();
        this.permisoTabla.from(permisoTabla);
        this.permisoTablaLazy =false;
        this.permisoTabla_service.lazyPermisoTabla(this.permisoTabla, this.evn_lazy_permisoTabla, this);
        this.accion = 7;
        this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaSeleccion = this.permisoTablaGuardar = false;
        this.permisoTablaActualizar = this.permisoTablaEliminar = this.permisoTablaCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarPermisoTabla_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisoTablaSeleccion = this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;        // ******************** maquina
        this.permisoTablaBuscar = this.permisoTablaAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.permisoTablaBuscar) this.permisoTablaBuscar = this.globalesService.pbuscar(this,"permisoTabla");
        if (this.permisoTablaActualizar) this.permisoTablaActualizar = (this.globalesService.pacutalizar(this,"permisoTabla") && this.globalesService.pbuscar(this,"permisoTabla"));
        if (this.permisoTablaEliminar) this.permisoTablaEliminar = (this.globalesService.peliminar(this,"permisoTabla") && this.globalesService.pbuscar(this,"permisoTabla"));
        if (this.permisoTablaAgregar) this.permisoTablaAgregar = this.globalesService.pagregar(this,"permisoTabla");
    }
    permisosaccionesInicio() {
        this.permisoTablaSeleccion = this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false; // *************************** maquina
        this.permisoTablaBuscar = this.permisoTablaAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.permisoTabla = new PermisoTabla();

        this.usuarioUltMovPermisoTablaUsuarioEleccion= new Usuario();
        this.usuarioPermisoTablaUsuarioEleccion= new Usuario();
        this.perfilesPermisoTablaPerfilEleccion = new Perfil();

        this.permisoTablaChange.emit(this.permisoTabla);
        this.permisoTablaSeleccion = this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false; // *************************** maquina
        this.permisoTablaBuscar = this.permisoTablaAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
