import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { PermisoAtributo } from '../shared/permiso-atributo';
import { PermisoAtributoService } from '../shared/permiso-atributo.service';
import { ConfigurarPermisoAtributo } from '../shared/configurar-permiso-atributo'
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
import { PermisoAtributoPerfil } from '../shared/permiso-atributo-perfil';
import { ConfigurarPerfil } from '../../perfiles/shared/configurar-perfil';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-permiso-atributo-crud',
    templateUrl: './permiso-atributo-crud.component.html',
    styleUrls: ['./permiso-atributo-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                PermisoAtributoService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class PermisoAtributoCrudComponent implements OnInit {
    public opcionPermisoAtributo  =0;
    public validosPermisoAtributo :any ={
        id:false,
        etiqueta:false,
        validacion:false,
        permiso:false,
        tabla:false,
        atributo:false,
        mensaje:false,
        status:false,
        usuarioUltMov:false,
        usuario:false,

    };

    @Input() ocultarConjuntosPermisoAtributo: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "permisoAtributo", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public permisoAtributoLazy: boolean =false;
    public permisoAtributoPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public permisoAtributo: PermisoAtributo = new PermisoAtributo();
    @Output() permisoAtributoChange = new EventEmitter<PermisoAtributo>();
    @Output() permisoAtributoTablaChange = new EventEmitter<PermisoAtributo>();
    public lista_permisoAtributos: PermisoAtributo[]=[];
    public configuracionPermisoAtributo: ConfigurarPermisoAtributo;
    public permisoAtributoBuscar: boolean
    public permisoAtributoSeleccion: boolean
    public permisoAtributoAgregar: boolean
    public permisoAtributoActualizar: boolean
    public permisoAtributoEliminar: boolean;
    public permisoAtributoGuardar: boolean;
    public permisoAtributoCancelar: boolean;
    public usuarioUltMovPermisoAtributoUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovPermisoAtributoUsuario: Usuario[]=[];
    public usuarioUltMovPermisoAtributoUsuarioEditar:boolean =false;
    public usuarioPermisoAtributoUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioPermisoAtributoUsuario: Usuario[]=[];
    public usuarioPermisoAtributoUsuarioEditar:boolean =false;
    public perfilesPermisoAtributoPerfilEleccion: Perfil = new Perfil();
    public perfilesPermisoAtributoPerfilN: Perfil[]=[];
    public lista_perfilesPermisoAtributoPerfil: Perfil[]=[];
    public configuracionPerfilesPermisoAtributoPerfil: ConfigurarPerfil;

    get permisoAtributoOcultarConjuntos(){
        if (this.ocultarConjuntosPermisoAtributo)
           return true
        return  !this.permisoAtributoActualizar;
    }

    ngOnChanges(changes) {
        if (changes.permisoAtributo && changes.permisoAtributo.currentValue == null &&
            this.permisoAtributo == null) this.permisoAtributo = new PermisoAtributo();
        else {
            var aux :PermisoAtributo = new PermisoAtributo();
            if (this.permisoAtributo)
                aux.from(this.permisoAtributo)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoSeleccion = this.permisoAtributoGuardar = false;
                this.permisoAtributoActualizar = this.permisoAtributoEliminar = this.permisoAtributoCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.permisoAtributoSeleccion = this.permisoAtributoAgregar = this.permisoAtributoBuscar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
                    this.permisoAtributoGuardar = this.permisoAtributoCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "permisoAtributo",
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
      this.permisoAtributoPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public permisoAtributo_service: PermisoAtributoService,
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
        this.permisoAtributoSeleccion = this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
        this.configuracionPermisoAtributo = new ConfigurarPermisoAtributo();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoAtributoUsuario, this);
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoAtributoUsuario, this);
        this.configuracionPerfilesPermisoAtributoPerfil = new ConfigurarPerfil();
        this.perfil_service.getPerfiles(this.evtGetPerfilesPermisoAtributoPerfil, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.permisoAtributoPermisos =true;
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoAtributo&& permisos.permisoAtributo.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.permisoAtributo.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoConjunto && permisos.permisoAtributo.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.permisoAtributo.PermisoConjunto ;
        }
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoTabla && permisos.permisoAtributo.PermisoTabla.length>0){
            obj.permisosTabla = permisos.permisoAtributo.PermisoTabla[0] ;
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

    configurarListaPerfilesPermisoAtributoPerfil() {
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosPerfil = Object.assign([],this.configuracionPerfilesPermisoAtributoPerfil.permisosAtributos);
        var tablaPerfil = Object.assign({},this.configuracionPerfilesPermisoAtributoPerfil.permisosTabla);
        this.configuracionPerfilesPermisoAtributoPerfil = new ConfigurarPerfil();
        this.configuracionPerfilesPermisoAtributoPerfil.permisosAtributos = atributosPerfil ;
        this.configuracionPerfilesPermisoAtributoPerfil.permisosTabla =tablaPerfil;
        this.configuracionPerfilesPermisoAtributoPerfil.permisosTabla.permiso= this.configuracionPerfilesPermisoAtributoPerfil.permisosTabla.permiso & 247;
        this.configuracionPerfilesPermisoAtributoPerfil.titulo = "Agregar "+this.globalesService.cetiqueta(this,"permisoAtributo","perfilesPermisoAtributoPerfil");
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    }
    configurarListaPerfilesPermisoAtributoPerfilPos() {
        this.configuracionPerfilesPermisoAtributoPerfil.rutaLista = this.configuracionPerfilesPermisoAtributoPerfil.crudServiceBaseUrl + "/getPerfiles";
        this.configuracionPerfilesPermisoAtributoPerfil.rutaAgregar = this.configuracionPerfilesPermisoAtributoPerfil.crudServiceBaseUrl + "/addPerfiles";
        this.configuracionPerfilesPermisoAtributoPerfil.rutaEliminar = this.configuracionPerfilesPermisoAtributoPerfil.crudServiceBaseUrl + "/removePerfiles";
        var vperfil: Perfil = new Perfil();
        vperfil.from(this.perfilesPermisoAtributoPerfilEleccion);
        this.configuracionPerfilesPermisoAtributoPerfil.perfilConsulta = vperfil.toDto();
        this.configuracionPerfilesPermisoAtributoPerfil.tipocampoAgEl = "PermisoAtributoPerfil";
        this.configuracionPerfilesPermisoAtributoPerfil.campoAgEl = new PermisoAtributoPerfil();
        this.configuracionPerfilesPermisoAtributoPerfil.campoAgEl.perfil = vperfil.toDto();
    }

    evtGetUsuarioUltMovPermisoAtributoUsuario(lista_usuarioUltMovPermisoAtributoUsuario, obj) {
        obj.lista_usuarioUltMovPermisoAtributoUsuario = lista_usuarioUltMovPermisoAtributoUsuario;
        obj.actualizar_UsuarioUltMovPermisoAtributoUsuario();
    }
    evtGetUsuarioPermisoAtributoUsuario(lista_usuarioPermisoAtributoUsuario, obj) {
        obj.lista_usuarioPermisoAtributoUsuario = lista_usuarioPermisoAtributoUsuario;
        obj.actualizar_UsuarioPermisoAtributoUsuario();
    }
    evtGetPerfilesPermisoAtributoPerfil(lista_perfilesPermisoAtributoPerfil, obj) {
        obj.lista_perfilesPermisoAtributoPerfil = lista_perfilesPermisoAtributoPerfil;
    }


    actualizar_UsuarioUltMovPermisoAtributoUsuario() {
        if ( this.usuarioUltMovPermisoAtributoUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovPermisoAtributoUsuario)
                if (eleme.id == this.usuarioUltMovPermisoAtributoUsuarioEleccion.id){
                    this.usuarioUltMovPermisoAtributoUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_UsuarioPermisoAtributoUsuario() {
        if ( this.usuarioPermisoAtributoUsuarioEleccion)
            for (let eleme of this.lista_usuarioPermisoAtributoUsuario)
                if (eleme.id == this.usuarioPermisoAtributoUsuarioEleccion.id){
                    this.usuarioPermisoAtributoUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }
    agregarPerfilesPermisoAtributoPerfil() {
        var permisoAtributoPerfil: PermisoAtributoPerfil = new PermisoAtributoPerfil();
        permisoAtributoPerfil.permisoAtributo = this.permisoAtributo;
        permisoAtributoPerfil.perfil = this.perfilesPermisoAtributoPerfilEleccion;
        this.permisoAtributo_service.addPerfiles(permisoAtributoPerfil, this.evtAgregarPerfilesPermisoAtributoPerfil, this);
    }
    evtAgregarPerfilesPermisoAtributoPerfil(respuesta, obj) {
        if (respuesta) {
            obj.configurarListaPerfilesPermisoAtributoPerfil();
            obj.configurarListaPerfilesPermisoAtributoPerfilPos();
            bootbox.alert("Perfil agregada con �xito");
        }
    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosPermisoAtributo['id'];
    }
    get validaIds() {
        return this.validosPermisoAtributo['id'];
    }
    get validaEtiqueta() {
        return this.validosPermisoAtributo['etiqueta'];
    }
    get validaValidacion() {
        return this.validosPermisoAtributo['validacion'];
    }
    get validaPermiso() {
        return this.validosPermisoAtributo['permiso'];
    }
    get validaTabla() {
        return this.validosPermisoAtributo['tabla'];
    }
    get validaAtributo() {
        return this.validosPermisoAtributo['atributo'];
    }
    get validaMensaje() {
        return this.validosPermisoAtributo['mensaje'];
    }
    get validaStatus() {
        return this.validosPermisoAtributo['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosPermisoAtributo['usuarioUltMov'];
    }
    get validaUsuario() {
        return this.validosPermisoAtributo['usuario'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaEtiqueta && this.validaValidacion && this.validaPermiso && this.validaTabla && this.validaAtributo && this.validaMensaje && this.validaStatus && this.validaUsuarioUltMov && this.validaUsuario;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerPermisoAtributos(lista, objeto) {
        objeto.lista_permisoAtributos = lista;
        if (lista && lista.length > 0) {
            objeto.permisoAtributo.from(lista[0]);
            objeto.evtPermisoAtributoSeleccionado(objeto.permisoAtributo);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_permisoAtributo(permisoAtributo, objeto) {
        objeto.permisoAtributo = permisoAtributo;
        objeto.permisoAtributoChange.emit(objeto.permisoAtributo);
        objeto.configuarCombosObjetos();
        objeto.permisoAtributoLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReportePermisoAtributoWord(){
        return ! (this.permisoAtributoActualizar && this.permisoAtributoLazy && this.globalesService.preporteWord(this,"permisoAtributo"));
    }
    get datosReportePermisoAtributoExcel(){
        return ! (this.permisoAtributoActualizar && this.permisoAtributoLazy && this.globalesService.preporteExcel(this,"permisoAtributo"));
    }
    get datosReportePermisoAtributoPdf(){
        return ! (this.permisoAtributoActualizar && this.permisoAtributoLazy && this.globalesService.preportePdf(this,"permisoAtributo"));
    }
    reportePermisoAtributoExcel(){
        var nombre:string = "PermisoAtributo.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "permisoAtributo": this.permisoAtributo};
        parametros["plantilla"]="PermisoAtributo.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePermisoAtributoWord(){
        var nombre:string = "PermisoAtributo.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "permisoAtributo": this.permisoAtributo};
        parametros["plantilla"]="PermisoAtributo.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePermisoAtributoPdf(){
        var nombre:string = "PermisoAtributo.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "permisoAtributo": this.permisoAtributo};
        parametros["plantilla"]="PermisoAtributo.docx";
        parametros["salida"]="PermisoAtributo.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoCancelar = true;
    }
    buscarPermisoAtributoFront() {
        this.accionesBuscar();
        var vpermisoAtributo: PermisoAtributo = new PermisoAtributo();
        vpermisoAtributo.from(this.permisoAtributo);
        this.configuracionPermisoAtributo = new ConfigurarPermisoAtributo();
        this.configuracionPermisoAtributo.permisosTabla = { "tabla": "permisoAtributo", "permiso": 8 };
        this.configuracionPermisoAtributo.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionPermisoAtributo.permisoAtributoConsulta = vpermisoAtributo;
        this.permisosacciones();
        $("#buscarPermisoAtributo_"+this.nombre).modal();
    }
    buscarPermisoAtributoBack(permisoAtributo: PermisoAtributo) {
        this.permisoAtributo_service.getPermisoAtributosByDto(permisoAtributo, this.eventoSrvPermisoAtributoBuscar, this);
    }
    eventoSrvPermisoAtributoBuscar(lista, objeto) {
        objeto.lista_permisoAtributos = lista;
        if (lista && lista.length > 0) {
            objeto.permisoAtributo = lista[0];
            objeto.permisoAtributoLazy =false;
            objeto.permisoAtributo_service.lazyPermisoAtributo(objeto.permisoAtributo, objeto.evn_lazy_permisoAtributo, objeto);
        }
    }
    guardarPermisoAtributoFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarPermisoAtributoBack(this.permisoAtributo);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarPermisoAtributoBack(permisoAtributo: PermisoAtributo) {
        if (permisoAtributo.usuarioUltMov == null ) permisoAtributo.usuarioUltMov = this.globalesService.dameUsuario();
        if (permisoAtributo.status == null || permisoAtributo.status == "" ) permisoAtributo.status = 1;
        this.permisoAtributo_service.guardarPermisoAtributo(permisoAtributo, this.eventoSrvPermisoAtributoGuardar, this);
    }
    eventoSrvPermisoAtributoGuardar(permisoAtributo, obj) {
        obj.permisoAtributo = permisoAtributo;
        bootbox.alert("Datos guardados con éxito");
        var aux: PermisoAtributo = new PermisoAtributo();
        aux.from(permisoAtributo);
        obj.permisoAtributoChange.emit(aux);
        obj.permisoAtributoTablaChange.emit(aux);
        obj.permisoAtributoLazy =false;
        obj.permisoAtributo_service.lazyPermisoAtributo(obj.permisoAtributo, obj.evn_lazy_permisoAtributo, obj);
        obj.accionesActualizar();

    }
    actualizarPermisoAtributoFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarPermisoAtributoBack(this.permisoAtributo);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarPermisoAtributoBack(permisoAtributo: PermisoAtributo) {
        permisoAtributo.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoAtributo_service.actualizarPermisoAtributo(permisoAtributo, this.eventoSrvPermisoAtributoActualizar, this);
    }
    eventoSrvPermisoAtributoActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: PermisoAtributo = new PermisoAtributo();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.permisoAtributoLazy = false;
            obj.permisoAtributo_service.lazyPermisoAtributo(obj.permisoAtributo, obj.evn_lazy_permisoAtributo, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.permisoAtributo);
            obj.permisoAtributoChange.emit(aux);
            obj.permisoAtributoTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarPermisoAtributoFront() {
        this.accion = 4;
        this.eliminarPermisoAtributoBack(this.permisoAtributo);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarPermisoAtributoBack(permisoAtributo: PermisoAtributo) {
        permisoAtributo.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoAtributo_service.eliminarPermisoAtributo(permisoAtributo, this.eventoSrvPermisoAtributoEliminar, this);
    }
    eventoSrvPermisoAtributoEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.permisoAtributo = new PermisoAtributo();
            obj.permisoAtributoChange.emit(obj.permisoAtributo);
            obj.permisoAtributoTablaChange.emit(obj.permisoAtributo);
            obj.limpiarCampos() ;
        }
    }
    cancelarPermisoAtributoFront() {
        this.accion = 6;
        this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = true;
        this.permisosacciones();
    }
    nuevoPermisoAtributoFront() {
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
                this.permisoAtributoSeleccion = this.permisoAtributoAgregar = this.permisoAtributoBuscar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
                this.permisoAtributoGuardar = this.permisoAtributoCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovPermisoAtributoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoAtributoUsuario, this);
        this.lista_usuarioPermisoAtributoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoAtributoUsuario, this);
    }
    configurarTablasConjuntos(){
        this.configurarListaPerfilesPermisoAtributoPerfil();
        this.configurarListaPerfilesPermisoAtributoPerfilPos();
    }

    accionesActualizar(){
        this.accion = 7;
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoSeleccion = this.permisoAtributoGuardar = false;
        this.permisoAtributoActualizar = this.permisoAtributoEliminar = this.permisoAtributoCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtPermisoAtributoSeleccionado(permisoAtributo) {
        this.permisoAtributo = new PermisoAtributo();
        this.permisoAtributo.from(permisoAtributo);
        this.permisoAtributoLazy =false;
        this.permisoAtributo_service.lazyPermisoAtributo(this.permisoAtributo, this.evn_lazy_permisoAtributo, this);
        this.accion = 7;
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoSeleccion = this.permisoAtributoGuardar = false;
        this.permisoAtributoActualizar = this.permisoAtributoEliminar = this.permisoAtributoCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarPermisoAtributo_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisoAtributoSeleccion = this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;        // ******************** maquina
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.permisoAtributoBuscar) this.permisoAtributoBuscar = this.globalesService.pbuscar(this,"permisoAtributo");
        if (this.permisoAtributoActualizar) this.permisoAtributoActualizar = (this.globalesService.pacutalizar(this,"permisoAtributo") && this.globalesService.pbuscar(this,"permisoAtributo"));
        if (this.permisoAtributoEliminar) this.permisoAtributoEliminar = (this.globalesService.peliminar(this,"permisoAtributo") && this.globalesService.pbuscar(this,"permisoAtributo"));
        if (this.permisoAtributoAgregar) this.permisoAtributoAgregar = this.globalesService.pagregar(this,"permisoAtributo");
    }
    permisosaccionesInicio() {
        this.permisoAtributoSeleccion = this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false; // *************************** maquina
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.permisoAtributo = new PermisoAtributo();

        this.usuarioUltMovPermisoAtributoUsuarioEleccion= new Usuario();
        this.usuarioPermisoAtributoUsuarioEleccion= new Usuario();
        this.perfilesPermisoAtributoPerfilEleccion = new Perfil();

        this.permisoAtributoChange.emit(this.permisoAtributo);
        this.permisoAtributoSeleccion = this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false; // *************************** maquina
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
