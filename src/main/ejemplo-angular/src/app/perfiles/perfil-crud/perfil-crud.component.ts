import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { Perfil } from '../shared/perfil';
import { PerfilService } from '../shared/perfil.service';
import { ConfigurarPerfil } from '../shared/configurar-perfil'
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

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-perfil-crud',
    templateUrl: './perfil-crud.component.html',
    styleUrls: ['./perfil-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                PerfilService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class PerfilCrudComponent implements OnInit {
    public opcionPerfil  =0;
    public validosPerfil :any ={
        id:false,
        descripcion:false,
        ruta:false,
        nombre:false,
        status:false,
        usuarioUltMov:false,
        usuario:false,

    };

    @Input() ocultarConjuntosPerfil: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "perfil", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public perfilLazy: boolean =false;
    public perfilPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    @Input() public perfil: Perfil = new Perfil();
    @Output() perfilChange = new EventEmitter<Perfil>();
    @Output() perfilTablaChange = new EventEmitter<Perfil>();
    public lista_perfiles: Perfil[]=[];
    public configuracionPerfil: ConfigurarPerfil;
    public perfilBuscar: boolean
    public perfilSeleccion: boolean
    public perfilAgregar: boolean
    public perfilActualizar: boolean
    public perfilEliminar: boolean;
    public perfilGuardar: boolean;
    public perfilCancelar: boolean;
    public usuarioUltMovPerfilUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovPerfilUsuario: Usuario[]=[];
    public usuarioUltMovPerfilUsuarioEditar:boolean =false;
    public usuarioPerfilUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioPerfilUsuario: Usuario[]=[];
    public usuarioPerfilUsuarioEditar:boolean =false;

    get perfilOcultarConjuntos(){
        if (this.ocultarConjuntosPerfil)
           return true
        return  !this.perfilActualizar;
    }

    ngOnChanges(changes) {
        if (changes.perfil && changes.perfil.currentValue == null &&
            this.perfil == null) this.perfil = new Perfil();
        else {
            var aux :Perfil = new Perfil();
            if (this.perfil)
                aux.from(this.perfil)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.perfilBuscar = this.perfilAgregar = this.perfilSeleccion = this.perfilGuardar = false;
                this.perfilActualizar = this.perfilEliminar = this.perfilCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.perfilSeleccion = this.perfilAgregar = this.perfilBuscar = this.perfilActualizar = this.perfilEliminar = false;
                    this.perfilGuardar = this.perfilCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "perfil",
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
      this.perfilPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public perfil_service: PerfilService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

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
        this.perfilSeleccion = this.perfilCancelar = this.perfilGuardar = this.perfilBuscar = this.perfilAgregar = this.perfilActualizar = this.perfilEliminar = false;
        this.configuracionPerfil = new ConfigurarPerfil();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPerfilUsuario, this);
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPerfilUsuario, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.perfilPermisos =true;
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo&& permisos.perfil.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.perfil.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoConjunto && permisos.perfil.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.perfil.PermisoConjunto ;
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoTabla && permisos.perfil.PermisoTabla.length>0){
            obj.permisosTabla = permisos.perfil.PermisoTabla[0] ;
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

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovPerfilUsuario(lista_usuarioUltMovPerfilUsuario, obj) {
        obj.lista_usuarioUltMovPerfilUsuario = lista_usuarioUltMovPerfilUsuario;
        obj.actualizar_UsuarioUltMovPerfilUsuario();
    }
    evtGetUsuarioPerfilUsuario(lista_usuarioPerfilUsuario, obj) {
        obj.lista_usuarioPerfilUsuario = lista_usuarioPerfilUsuario;
        obj.actualizar_UsuarioPerfilUsuario();
    }


    actualizar_UsuarioUltMovPerfilUsuario() {
        if ( this.usuarioUltMovPerfilUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovPerfilUsuario)
                if (eleme.id == this.usuarioUltMovPerfilUsuarioEleccion.id){
                    this.usuarioUltMovPerfilUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_UsuarioPerfilUsuario() {
        if ( this.usuarioPerfilUsuarioEleccion)
            for (let eleme of this.lista_usuarioPerfilUsuario)
                if (eleme.id == this.usuarioPerfilUsuarioEleccion.id){
                    this.usuarioPerfilUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosPerfil['id'];
    }
    get validaIds() {
        return this.validosPerfil['id'];
    }
    get validaDescripcion() {
        return this.validosPerfil['descripcion'];
    }
    get validaRuta() {
        return this.validosPerfil['ruta'];
    }
    get validaNombre() {
        return this.validosPerfil['nombre'];
    }
    get validaStatus() {
        return this.validosPerfil['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosPerfil['usuarioUltMov'];
    }
    get validaUsuario() {
        return this.validosPerfil['usuario'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaDescripcion && this.validaRuta && this.validaNombre && this.validaStatus && this.validaUsuarioUltMov && this.validaUsuario;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerPerfiles(lista, objeto) {
        objeto.lista_perfiles = lista;
        if (lista && lista.length > 0) {
            objeto.perfil.from(lista[0]);
            objeto.evtPerfilSeleccionado(objeto.perfil);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_perfil(perfil, objeto) {
        objeto.perfil = perfil;
        objeto.perfilChange.emit(objeto.perfil);
        objeto.configuarCombosObjetos();
        objeto.perfilLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReportePerfilWord(){
        return ! (this.perfilActualizar && this.perfilLazy && this.globalesService.preporteWord(this,"perfil"));
    }
    get datosReportePerfilExcel(){
        return ! (this.perfilActualizar && this.perfilLazy && this.globalesService.preporteExcel(this,"perfil"));
    }
    get datosReportePerfilPdf(){
        return ! (this.perfilActualizar && this.perfilLazy && this.globalesService.preportePdf(this,"perfil"));
    }
    reportePerfilExcel(){
        var nombre:string = "Perfil.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "perfil": this.perfil};
        parametros["plantilla"]="Perfil.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePerfilWord(){
        var nombre:string = "Perfil.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "perfil": this.perfil};
        parametros["plantilla"]="Perfil.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePerfilPdf(){
        var nombre:string = "Perfil.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "perfil": this.perfil};
        parametros["plantilla"]="Perfil.docx";
        parametros["salida"]="Perfil.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.perfilGuardar = this.perfilActualizar = this.perfilEliminar = false;
        this.perfilBuscar = this.perfilAgregar = this.perfilCancelar = true;
    }
    buscarPerfilFront() {
        this.accionesBuscar();
        var vperfil: Perfil = new Perfil();
        vperfil.from(this.perfil);
        this.configuracionPerfil = new ConfigurarPerfil();
        this.configuracionPerfil.permisosTabla = { "tabla": "perfil", "permiso": 8 };
        this.configuracionPerfil.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionPerfil.perfilConsulta = vperfil;
        this.permisosacciones();
        $("#buscarPerfil_"+this.nombre).modal();
    }
    buscarPerfilBack(perfil: Perfil) {
        this.perfil_service.getPerfilesByDto(perfil, this.eventoSrvPerfilBuscar, this);
    }
    eventoSrvPerfilBuscar(lista, objeto) {
        objeto.lista_perfiles = lista;
        if (lista && lista.length > 0) {
            objeto.perfil = lista[0];
            objeto.perfilLazy =false;
            objeto.perfil_service.lazyPerfil(objeto.perfil, objeto.evn_lazy_perfil, objeto);
        }
    }
    guardarPerfilFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarPerfilBack(this.perfil);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarPerfilBack(perfil: Perfil) {
        if (perfil.usuarioUltMov == null ) perfil.usuarioUltMov = this.globalesService.dameUsuario();
        if (perfil.status == null || perfil.status == "" ) perfil.status = 1;
        this.perfil_service.guardarPerfil(perfil, this.eventoSrvPerfilGuardar, this);
    }
    eventoSrvPerfilGuardar(perfil, obj) {
        obj.perfil = perfil;
        bootbox.alert("Datos guardados con éxito");
        var aux: Perfil = new Perfil();
        aux.from(perfil);
        obj.perfilChange.emit(aux);
        obj.perfilTablaChange.emit(aux);
        obj.perfilLazy =false;
        obj.perfil_service.lazyPerfil(obj.perfil, obj.evn_lazy_perfil, obj);
        obj.accionesActualizar();

    }
    actualizarPerfilFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarPerfilBack(this.perfil);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarPerfilBack(perfil: Perfil) {
        perfil.usuarioUltMov = this.globalesService.dameUsuario();
        this.perfil_service.actualizarPerfil(perfil, this.eventoSrvPerfilActualizar, this);
    }
    eventoSrvPerfilActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: Perfil = new Perfil();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.perfilLazy = false;
            obj.perfil_service.lazyPerfil(obj.perfil, obj.evn_lazy_perfil, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.perfil);
            obj.perfilChange.emit(aux);
            obj.perfilTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarPerfilFront() {
        this.accion = 4;
        this.eliminarPerfilBack(this.perfil);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarPerfilBack(perfil: Perfil) {
        perfil.usuarioUltMov = this.globalesService.dameUsuario();
        this.perfil_service.eliminarPerfil(perfil, this.eventoSrvPerfilEliminar, this);
    }
    eventoSrvPerfilEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.perfil = new Perfil();
            obj.perfilChange.emit(obj.perfil);
            obj.perfilTablaChange.emit(obj.perfil);
            obj.limpiarCampos() ;
        }
    }
    cancelarPerfilFront() {
        this.accion = 6;
        this.perfilCancelar = this.perfilGuardar = this.perfilActualizar = this.perfilEliminar = false;
        this.perfilBuscar = this.perfilAgregar = true;
        this.permisosacciones();
    }
    nuevoPerfilFront() {
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
                this.perfilSeleccion = this.perfilAgregar = this.perfilBuscar = this.perfilActualizar = this.perfilEliminar = false;
                this.perfilGuardar = this.perfilCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovPerfilUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPerfilUsuario, this);
        this.lista_usuarioPerfilUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPerfilUsuario, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.perfilBuscar = this.perfilAgregar = this.perfilSeleccion = this.perfilGuardar = false;
        this.perfilActualizar = this.perfilEliminar = this.perfilCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtPerfilSeleccionado(perfil) {
        this.perfil = new Perfil();
        this.perfil.from(perfil);
        this.perfilLazy =false;
        this.perfil_service.lazyPerfil(this.perfil, this.evn_lazy_perfil, this);
        this.accion = 7;
        this.perfilBuscar = this.perfilAgregar = this.perfilSeleccion = this.perfilGuardar = false;
        this.perfilActualizar = this.perfilEliminar = this.perfilCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarPerfil_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.perfilSeleccion = this.perfilCancelar = this.perfilGuardar = this.perfilActualizar = this.perfilEliminar = false;        // ******************** maquina
        this.perfilBuscar = this.perfilAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.perfilBuscar) this.perfilBuscar = this.globalesService.pbuscar(this,"perfil");
        if (this.perfilActualizar) this.perfilActualizar = (this.globalesService.pacutalizar(this,"perfil") && this.globalesService.pbuscar(this,"perfil"));
        if (this.perfilEliminar) this.perfilEliminar = (this.globalesService.peliminar(this,"perfil") && this.globalesService.pbuscar(this,"perfil"));
        if (this.perfilAgregar) this.perfilAgregar = this.globalesService.pagregar(this,"perfil");
    }
    permisosaccionesInicio() {
        this.perfilSeleccion = this.perfilCancelar = this.perfilGuardar = this.perfilActualizar = this.perfilEliminar = false; // *************************** maquina
        this.perfilBuscar = this.perfilAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.perfil = new Perfil();

        this.usuarioUltMovPerfilUsuarioEleccion= new Usuario();
        this.usuarioPerfilUsuarioEleccion= new Usuario();

        this.perfilChange.emit(this.perfil);
        this.perfilSeleccion = this.perfilCancelar = this.perfilGuardar = this.perfilActualizar = this.perfilEliminar = false; // *************************** maquina
        this.perfilBuscar = this.perfilAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
