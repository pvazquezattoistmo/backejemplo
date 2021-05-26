import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { PermisoConjunto } from '../shared/permiso-conjunto';
import { PermisoConjuntoService } from '../shared/permiso-conjunto.service';
import { ConfigurarPermisoConjunto } from '../shared/configurar-permiso-conjunto'
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
import { PermisoConjuntoPerfil } from '../shared/permiso-conjunto-perfil';
import { ConfigurarPerfil } from '../../perfiles/shared/configurar-perfil';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-permiso-conjunto-crud',
    templateUrl: './permiso-conjunto-crud.component.html',
    styleUrls: ['./permiso-conjunto-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                PermisoConjuntoService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class PermisoConjuntoCrudComponent implements OnInit {
    public opcionPermisoConjunto  =0;
    public validosPermisoConjunto :any ={
        id:false,
        etiqueta:false,
        permiso:false,
        tabla:false,
        conjunto:false,
        status:false,
        usuarioUltMov:false,
        usuario:false,

    };

    @Input() ocultarConjuntosPermisoConjunto: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "permisoConjunto", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public permisoConjuntoLazy: boolean =false;
    public permisoConjuntoPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public permisoConjunto: PermisoConjunto = new PermisoConjunto();
    @Output() permisoConjuntoChange = new EventEmitter<PermisoConjunto>();
    @Output() permisoConjuntoTablaChange = new EventEmitter<PermisoConjunto>();
    public lista_permisoConjuntos: PermisoConjunto[]=[];
    public configuracionPermisoConjunto: ConfigurarPermisoConjunto;
    public permisoConjuntoBuscar: boolean
    public permisoConjuntoSeleccion: boolean
    public permisoConjuntoAgregar: boolean
    public permisoConjuntoActualizar: boolean
    public permisoConjuntoEliminar: boolean;
    public permisoConjuntoGuardar: boolean;
    public permisoConjuntoCancelar: boolean;
    public usuarioUltMovPermisoConjuntoUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovPermisoConjuntoUsuario: Usuario[]=[];
    public usuarioUltMovPermisoConjuntoUsuarioEditar:boolean =false;
    public usuarioPermisoConjuntoUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioPermisoConjuntoUsuario: Usuario[]=[];
    public usuarioPermisoConjuntoUsuarioEditar:boolean =false;
    public perfilesPermisoConjuntoPerfilEleccion: Perfil = new Perfil();
    public perfilesPermisoConjuntoPerfilN: Perfil[]=[];
    public lista_perfilesPermisoConjuntoPerfil: Perfil[]=[];
    public configuracionPerfilesPermisoConjuntoPerfil: ConfigurarPerfil;

    get permisoConjuntoOcultarConjuntos(){
        if (this.ocultarConjuntosPermisoConjunto)
           return true
        return  !this.permisoConjuntoActualizar;
    }

    ngOnChanges(changes) {
        if (changes.permisoConjunto && changes.permisoConjunto.currentValue == null &&
            this.permisoConjunto == null) this.permisoConjunto = new PermisoConjunto();
        else {
            var aux :PermisoConjunto = new PermisoConjunto();
            if (this.permisoConjunto)
                aux.from(this.permisoConjunto)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoSeleccion = this.permisoConjuntoGuardar = false;
                this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = this.permisoConjuntoCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.permisoConjuntoSeleccion = this.permisoConjuntoAgregar = this.permisoConjuntoBuscar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
                    this.permisoConjuntoGuardar = this.permisoConjuntoCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "permisoConjunto",
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
      this.permisoConjuntoPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public permisoConjunto_service: PermisoConjuntoService,
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
        this.permisoConjuntoSeleccion = this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
        this.configuracionPermisoConjunto = new ConfigurarPermisoConjunto();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoConjuntoUsuario, this);
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoConjuntoUsuario, this);
        this.configuracionPerfilesPermisoConjuntoPerfil = new ConfigurarPerfil();
        this.perfil_service.getPerfiles(this.evtGetPerfilesPermisoConjuntoPerfil, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.permisoConjuntoPermisos =true;
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoAtributo&& permisos.permisoConjunto.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.permisoConjunto.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoConjunto && permisos.permisoConjunto.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.permisoConjunto.PermisoConjunto ;
        }
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoTabla && permisos.permisoConjunto.PermisoTabla.length>0){
            obj.permisosTabla = permisos.permisoConjunto.PermisoTabla[0] ;
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

    configurarListaPerfilesPermisoConjuntoPerfil() {
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosPerfil = Object.assign([],this.configuracionPerfilesPermisoConjuntoPerfil.permisosAtributos);
        var tablaPerfil = Object.assign({},this.configuracionPerfilesPermisoConjuntoPerfil.permisosTabla);
        this.configuracionPerfilesPermisoConjuntoPerfil = new ConfigurarPerfil();
        this.configuracionPerfilesPermisoConjuntoPerfil.permisosAtributos = atributosPerfil ;
        this.configuracionPerfilesPermisoConjuntoPerfil.permisosTabla =tablaPerfil;
        this.configuracionPerfilesPermisoConjuntoPerfil.permisosTabla.permiso= this.configuracionPerfilesPermisoConjuntoPerfil.permisosTabla.permiso & 247;
        this.configuracionPerfilesPermisoConjuntoPerfil.titulo = "Agregar "+this.globalesService.cetiqueta(this,"permisoConjunto","perfilesPermisoConjuntoPerfil");
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    }
    configurarListaPerfilesPermisoConjuntoPerfilPos() {
        this.configuracionPerfilesPermisoConjuntoPerfil.rutaLista = this.configuracionPerfilesPermisoConjuntoPerfil.crudServiceBaseUrl + "/getPerfiles";
        this.configuracionPerfilesPermisoConjuntoPerfil.rutaAgregar = this.configuracionPerfilesPermisoConjuntoPerfil.crudServiceBaseUrl + "/addPerfiles";
        this.configuracionPerfilesPermisoConjuntoPerfil.rutaEliminar = this.configuracionPerfilesPermisoConjuntoPerfil.crudServiceBaseUrl + "/removePerfiles";
        var vperfil: Perfil = new Perfil();
        vperfil.from(this.perfilesPermisoConjuntoPerfilEleccion);
        this.configuracionPerfilesPermisoConjuntoPerfil.perfilConsulta = vperfil.toDto();
        this.configuracionPerfilesPermisoConjuntoPerfil.tipocampoAgEl = "PermisoConjuntoPerfil";
        this.configuracionPerfilesPermisoConjuntoPerfil.campoAgEl = new PermisoConjuntoPerfil();
        this.configuracionPerfilesPermisoConjuntoPerfil.campoAgEl.perfil = vperfil.toDto();
    }

    evtGetUsuarioUltMovPermisoConjuntoUsuario(lista_usuarioUltMovPermisoConjuntoUsuario, obj) {
        obj.lista_usuarioUltMovPermisoConjuntoUsuario = lista_usuarioUltMovPermisoConjuntoUsuario;
        obj.actualizar_UsuarioUltMovPermisoConjuntoUsuario();
    }
    evtGetUsuarioPermisoConjuntoUsuario(lista_usuarioPermisoConjuntoUsuario, obj) {
        obj.lista_usuarioPermisoConjuntoUsuario = lista_usuarioPermisoConjuntoUsuario;
        obj.actualizar_UsuarioPermisoConjuntoUsuario();
    }
    evtGetPerfilesPermisoConjuntoPerfil(lista_perfilesPermisoConjuntoPerfil, obj) {
        obj.lista_perfilesPermisoConjuntoPerfil = lista_perfilesPermisoConjuntoPerfil;
    }


    actualizar_UsuarioUltMovPermisoConjuntoUsuario() {
        if ( this.usuarioUltMovPermisoConjuntoUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovPermisoConjuntoUsuario)
                if (eleme.id == this.usuarioUltMovPermisoConjuntoUsuarioEleccion.id){
                    this.usuarioUltMovPermisoConjuntoUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_UsuarioPermisoConjuntoUsuario() {
        if ( this.usuarioPermisoConjuntoUsuarioEleccion)
            for (let eleme of this.lista_usuarioPermisoConjuntoUsuario)
                if (eleme.id == this.usuarioPermisoConjuntoUsuarioEleccion.id){
                    this.usuarioPermisoConjuntoUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }
    agregarPerfilesPermisoConjuntoPerfil() {
        var permisoConjuntoPerfil: PermisoConjuntoPerfil = new PermisoConjuntoPerfil();
        permisoConjuntoPerfil.permisoConjunto = this.permisoConjunto;
        permisoConjuntoPerfil.perfil = this.perfilesPermisoConjuntoPerfilEleccion;
        this.permisoConjunto_service.addPerfiles(permisoConjuntoPerfil, this.evtAgregarPerfilesPermisoConjuntoPerfil, this);
    }
    evtAgregarPerfilesPermisoConjuntoPerfil(respuesta, obj) {
        if (respuesta) {
            obj.configurarListaPerfilesPermisoConjuntoPerfil();
            obj.configurarListaPerfilesPermisoConjuntoPerfilPos();
            bootbox.alert("Perfil agregada con �xito");
        }
    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosPermisoConjunto['id'];
    }
    get validaIds() {
        return this.validosPermisoConjunto['id'];
    }
    get validaEtiqueta() {
        return this.validosPermisoConjunto['etiqueta'];
    }
    get validaPermiso() {
        return this.validosPermisoConjunto['permiso'];
    }
    get validaTabla() {
        return this.validosPermisoConjunto['tabla'];
    }
    get validaConjunto() {
        return this.validosPermisoConjunto['conjunto'];
    }
    get validaStatus() {
        return this.validosPermisoConjunto['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosPermisoConjunto['usuarioUltMov'];
    }
    get validaUsuario() {
        return this.validosPermisoConjunto['usuario'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaEtiqueta && this.validaPermiso && this.validaTabla && this.validaConjunto && this.validaStatus && this.validaUsuarioUltMov && this.validaUsuario;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerPermisoConjuntos(lista, objeto) {
        objeto.lista_permisoConjuntos = lista;
        if (lista && lista.length > 0) {
            objeto.permisoConjunto.from(lista[0]);
            objeto.evtPermisoConjuntoSeleccionado(objeto.permisoConjunto);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_permisoConjunto(permisoConjunto, objeto) {
        objeto.permisoConjunto = permisoConjunto;
        objeto.permisoConjuntoChange.emit(objeto.permisoConjunto);
        objeto.configuarCombosObjetos();
        objeto.permisoConjuntoLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReportePermisoConjuntoWord(){
        return ! (this.permisoConjuntoActualizar && this.permisoConjuntoLazy && this.globalesService.preporteWord(this,"permisoConjunto"));
    }
    get datosReportePermisoConjuntoExcel(){
        return ! (this.permisoConjuntoActualizar && this.permisoConjuntoLazy && this.globalesService.preporteExcel(this,"permisoConjunto"));
    }
    get datosReportePermisoConjuntoPdf(){
        return ! (this.permisoConjuntoActualizar && this.permisoConjuntoLazy && this.globalesService.preportePdf(this,"permisoConjunto"));
    }
    reportePermisoConjuntoExcel(){
        var nombre:string = "PermisoConjunto.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "permisoConjunto": this.permisoConjunto};
        parametros["plantilla"]="PermisoConjunto.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePermisoConjuntoWord(){
        var nombre:string = "PermisoConjunto.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "permisoConjunto": this.permisoConjunto};
        parametros["plantilla"]="PermisoConjunto.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePermisoConjuntoPdf(){
        var nombre:string = "PermisoConjunto.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "permisoConjunto": this.permisoConjunto};
        parametros["plantilla"]="PermisoConjunto.docx";
        parametros["salida"]="PermisoConjunto.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoCancelar = true;
    }
    buscarPermisoConjuntoFront() {
        this.accionesBuscar();
        var vpermisoConjunto: PermisoConjunto = new PermisoConjunto();
        vpermisoConjunto.from(this.permisoConjunto);
        this.configuracionPermisoConjunto = new ConfigurarPermisoConjunto();
        this.configuracionPermisoConjunto.permisosTabla = { "tabla": "permisoConjunto", "permiso": 8 };
        this.configuracionPermisoConjunto.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionPermisoConjunto.permisoConjuntoConsulta = vpermisoConjunto;
        this.permisosacciones();
        $("#buscarPermisoConjunto_"+this.nombre).modal();
    }
    buscarPermisoConjuntoBack(permisoConjunto: PermisoConjunto) {
        this.permisoConjunto_service.getPermisoConjuntosByDto(permisoConjunto, this.eventoSrvPermisoConjuntoBuscar, this);
    }
    eventoSrvPermisoConjuntoBuscar(lista, objeto) {
        objeto.lista_permisoConjuntos = lista;
        if (lista && lista.length > 0) {
            objeto.permisoConjunto = lista[0];
            objeto.permisoConjuntoLazy =false;
            objeto.permisoConjunto_service.lazyPermisoConjunto(objeto.permisoConjunto, objeto.evn_lazy_permisoConjunto, objeto);
        }
    }
    guardarPermisoConjuntoFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarPermisoConjuntoBack(this.permisoConjunto);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarPermisoConjuntoBack(permisoConjunto: PermisoConjunto) {
        if (permisoConjunto.usuarioUltMov == null ) permisoConjunto.usuarioUltMov = this.globalesService.dameUsuario();
        if (permisoConjunto.status == null || permisoConjunto.status == "" ) permisoConjunto.status = 1;
        this.permisoConjunto_service.guardarPermisoConjunto(permisoConjunto, this.eventoSrvPermisoConjuntoGuardar, this);
    }
    eventoSrvPermisoConjuntoGuardar(permisoConjunto, obj) {
        obj.permisoConjunto = permisoConjunto;
        bootbox.alert("Datos guardados con éxito");
        var aux: PermisoConjunto = new PermisoConjunto();
        aux.from(permisoConjunto);
        obj.permisoConjuntoChange.emit(aux);
        obj.permisoConjuntoTablaChange.emit(aux);
        obj.permisoConjuntoLazy =false;
        obj.permisoConjunto_service.lazyPermisoConjunto(obj.permisoConjunto, obj.evn_lazy_permisoConjunto, obj);
        obj.accionesActualizar();

    }
    actualizarPermisoConjuntoFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarPermisoConjuntoBack(this.permisoConjunto);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarPermisoConjuntoBack(permisoConjunto: PermisoConjunto) {
        permisoConjunto.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoConjunto_service.actualizarPermisoConjunto(permisoConjunto, this.eventoSrvPermisoConjuntoActualizar, this);
    }
    eventoSrvPermisoConjuntoActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: PermisoConjunto = new PermisoConjunto();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.permisoConjuntoLazy = false;
            obj.permisoConjunto_service.lazyPermisoConjunto(obj.permisoConjunto, obj.evn_lazy_permisoConjunto, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.permisoConjunto);
            obj.permisoConjuntoChange.emit(aux);
            obj.permisoConjuntoTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarPermisoConjuntoFront() {
        this.accion = 4;
        this.eliminarPermisoConjuntoBack(this.permisoConjunto);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarPermisoConjuntoBack(permisoConjunto: PermisoConjunto) {
        permisoConjunto.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoConjunto_service.eliminarPermisoConjunto(permisoConjunto, this.eventoSrvPermisoConjuntoEliminar, this);
    }
    eventoSrvPermisoConjuntoEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.permisoConjunto = new PermisoConjunto();
            obj.permisoConjuntoChange.emit(obj.permisoConjunto);
            obj.permisoConjuntoTablaChange.emit(obj.permisoConjunto);
            obj.limpiarCampos() ;
        }
    }
    cancelarPermisoConjuntoFront() {
        this.accion = 6;
        this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = true;
        this.permisosacciones();
    }
    nuevoPermisoConjuntoFront() {
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
                this.permisoConjuntoSeleccion = this.permisoConjuntoAgregar = this.permisoConjuntoBuscar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
                this.permisoConjuntoGuardar = this.permisoConjuntoCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovPermisoConjuntoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoConjuntoUsuario, this);
        this.lista_usuarioPermisoConjuntoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoConjuntoUsuario, this);
    }
    configurarTablasConjuntos(){
        this.configurarListaPerfilesPermisoConjuntoPerfil();
        this.configurarListaPerfilesPermisoConjuntoPerfilPos();
    }

    accionesActualizar(){
        this.accion = 7;
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoSeleccion = this.permisoConjuntoGuardar = false;
        this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = this.permisoConjuntoCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtPermisoConjuntoSeleccionado(permisoConjunto) {
        this.permisoConjunto = new PermisoConjunto();
        this.permisoConjunto.from(permisoConjunto);
        this.permisoConjuntoLazy =false;
        this.permisoConjunto_service.lazyPermisoConjunto(this.permisoConjunto, this.evn_lazy_permisoConjunto, this);
        this.accion = 7;
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoSeleccion = this.permisoConjuntoGuardar = false;
        this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = this.permisoConjuntoCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarPermisoConjunto_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisoConjuntoSeleccion = this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;        // ******************** maquina
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.permisoConjuntoBuscar) this.permisoConjuntoBuscar = this.globalesService.pbuscar(this,"permisoConjunto");
        if (this.permisoConjuntoActualizar) this.permisoConjuntoActualizar = (this.globalesService.pacutalizar(this,"permisoConjunto") && this.globalesService.pbuscar(this,"permisoConjunto"));
        if (this.permisoConjuntoEliminar) this.permisoConjuntoEliminar = (this.globalesService.peliminar(this,"permisoConjunto") && this.globalesService.pbuscar(this,"permisoConjunto"));
        if (this.permisoConjuntoAgregar) this.permisoConjuntoAgregar = this.globalesService.pagregar(this,"permisoConjunto");
    }
    permisosaccionesInicio() {
        this.permisoConjuntoSeleccion = this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false; // *************************** maquina
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.permisoConjunto = new PermisoConjunto();

        this.usuarioUltMovPermisoConjuntoUsuarioEleccion= new Usuario();
        this.usuarioPermisoConjuntoUsuarioEleccion= new Usuario();
        this.perfilesPermisoConjuntoPerfilEleccion = new Perfil();

        this.permisoConjuntoChange.emit(this.permisoConjunto);
        this.permisoConjuntoSeleccion = this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false; // *************************** maquina
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
