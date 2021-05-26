import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { EntidadFederativa } from '../shared/entidad-federativa';
import { EntidadFederativaService } from '../shared/entidad-federativa.service';
import { ConfigurarEntidadFederativa } from '../shared/configurar-entidad-federativa'
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
import { PerfilService } from '../../perfiles/shared/perfil.service';
import { Perfil } from '../../perfiles/shared/perfil';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-entidad-federativa-crud',
    templateUrl: './entidad-federativa-crud.component.html',
    styleUrls: ['./entidad-federativa-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                EntidadFederativaService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class EntidadFederativaCrudComponent implements OnInit {
    public opcionEntidadFederativa  =0;
    public validosEntidadFederativa :any ={
        id:false,
        fechaBaja:false,
        abreviatura:false,
        fechaRegistro:false,
        fechaActualizacion:false,
        nombre:false,
        status:false,
        usuarioUltMov:false,

    };

    @Input() ocultarConjuntosEntidadFederativa: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "entidadFederativa", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public entidadFederativaLazy: boolean =false;
    public entidadFederativaPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public entidadFederativa: EntidadFederativa = new EntidadFederativa();
    @Output() entidadFederativaChange = new EventEmitter<EntidadFederativa>();
    @Output() entidadFederativaTablaChange = new EventEmitter<EntidadFederativa>();
    public lista_entidadFederativas: EntidadFederativa[]=[];
    public configuracionEntidadFederativa: ConfigurarEntidadFederativa;
    public entidadFederativaBuscar: boolean
    public entidadFederativaSeleccion: boolean
    public entidadFederativaAgregar: boolean
    public entidadFederativaActualizar: boolean
    public entidadFederativaEliminar: boolean;
    public entidadFederativaGuardar: boolean;
    public entidadFederativaCancelar: boolean;
    public usuarioUltMovEntidadFederativaUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovEntidadFederativaUsuario: Usuario[]=[];
    public usuarioUltMovEntidadFederativaUsuarioEditar:boolean =false;

    get entidadFederativaOcultarConjuntos(){
        if (this.ocultarConjuntosEntidadFederativa)
           return true
        return  !this.entidadFederativaActualizar;
    }

    ngOnChanges(changes) {
        if (changes.entidadFederativa && changes.entidadFederativa.currentValue == null &&
            this.entidadFederativa == null) this.entidadFederativa = new EntidadFederativa();
        else {
            var aux :EntidadFederativa = new EntidadFederativa();
            if (this.entidadFederativa)
                aux.from(this.entidadFederativa)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.entidadFederativaBuscar = this.entidadFederativaAgregar = this.entidadFederativaSeleccion = this.entidadFederativaGuardar = false;
                this.entidadFederativaActualizar = this.entidadFederativaEliminar = this.entidadFederativaCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.entidadFederativaSeleccion = this.entidadFederativaAgregar = this.entidadFederativaBuscar = this.entidadFederativaActualizar = this.entidadFederativaEliminar = false;
                    this.entidadFederativaGuardar = this.entidadFederativaCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "entidadFederativa",
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
      this.entidadFederativaPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public entidadFederativa_service: EntidadFederativaService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

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
        this.entidadFederativaSeleccion = this.entidadFederativaCancelar = this.entidadFederativaGuardar = this.entidadFederativaBuscar = this.entidadFederativaAgregar = this.entidadFederativaActualizar = this.entidadFederativaEliminar = false;
        this.configuracionEntidadFederativa = new ConfigurarEntidadFederativa();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEntidadFederativaUsuario, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.entidadFederativaPermisos =true;
        if (permisos && permisos.entidadFederativa && permisos.entidadFederativa.PermisoAtributo&& permisos.entidadFederativa.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.entidadFederativa.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.entidadFederativa && permisos.entidadFederativa.PermisoConjunto && permisos.entidadFederativa.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.entidadFederativa.PermisoConjunto ;
        }
        if (permisos && permisos.entidadFederativa && permisos.entidadFederativa.PermisoTabla && permisos.entidadFederativa.PermisoTabla.length>0){
            obj.permisosTabla = permisos.entidadFederativa.PermisoTabla[0] ;
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


    evtGetUsuarioUltMovEntidadFederativaUsuario(lista_usuarioUltMovEntidadFederativaUsuario, obj) {
        obj.lista_usuarioUltMovEntidadFederativaUsuario = lista_usuarioUltMovEntidadFederativaUsuario;
        obj.actualizar_UsuarioUltMovEntidadFederativaUsuario();
    }


    actualizar_UsuarioUltMovEntidadFederativaUsuario() {
        if ( this.usuarioUltMovEntidadFederativaUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovEntidadFederativaUsuario)
                if (eleme.id == this.usuarioUltMovEntidadFederativaUsuarioEleccion.id){
                    this.usuarioUltMovEntidadFederativaUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosEntidadFederativa['id'];
    }
    get validaIds() {
        return this.validosEntidadFederativa['id'];
    }
    get validaFechaBaja() {
        return this.validosEntidadFederativa['fechaBaja'];
    }
    get validaAbreviatura() {
        return this.validosEntidadFederativa['abreviatura'];
    }
    get validaFechaRegistro() {
        return this.validosEntidadFederativa['fechaRegistro'];
    }
    get validaFechaActualizacion() {
        return this.validosEntidadFederativa['fechaActualizacion'];
    }
    get validaNombre() {
        return this.validosEntidadFederativa['nombre'];
    }
    get validaStatus() {
        return this.validosEntidadFederativa['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosEntidadFederativa['usuarioUltMov'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaAbreviatura && this.validaFechaRegistro && this.validaFechaActualizacion && this.validaNombre && this.validaStatus && this.validaUsuarioUltMov;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerEntidadFederativas(lista, objeto) {
        objeto.lista_entidadFederativas = lista;
        if (lista && lista.length > 0) {
            objeto.entidadFederativa.from(lista[0]);
            objeto.evtEntidadFederativaSeleccionado(objeto.entidadFederativa);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_entidadFederativa(entidadFederativa, objeto) {
        objeto.entidadFederativa = entidadFederativa;
        objeto.entidadFederativaChange.emit(objeto.entidadFederativa);
        objeto.configuarCombosObjetos();
        objeto.entidadFederativaLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteEntidadFederativaWord(){
        return ! (this.entidadFederativaActualizar && this.entidadFederativaLazy && this.globalesService.preporteWord(this,"entidadFederativa"));
    }
    get datosReporteEntidadFederativaExcel(){
        return ! (this.entidadFederativaActualizar && this.entidadFederativaLazy && this.globalesService.preporteExcel(this,"entidadFederativa"));
    }
    get datosReporteEntidadFederativaPdf(){
        return ! (this.entidadFederativaActualizar && this.entidadFederativaLazy && this.globalesService.preportePdf(this,"entidadFederativa"));
    }
    reporteEntidadFederativaExcel(){
        var nombre:string = "EntidadFederativa.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "entidadFederativa": this.entidadFederativa};
        parametros["plantilla"]="EntidadFederativa.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteEntidadFederativaWord(){
        var nombre:string = "EntidadFederativa.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "entidadFederativa": this.entidadFederativa};
        parametros["plantilla"]="EntidadFederativa.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteEntidadFederativaPdf(){
        var nombre:string = "EntidadFederativa.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "entidadFederativa": this.entidadFederativa};
        parametros["plantilla"]="EntidadFederativa.docx";
        parametros["salida"]="EntidadFederativa.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.entidadFederativaGuardar = this.entidadFederativaActualizar = this.entidadFederativaEliminar = false;
        this.entidadFederativaBuscar = this.entidadFederativaAgregar = this.entidadFederativaCancelar = true;
    }
    buscarEntidadFederativaFront() {
        this.accionesBuscar();
        var ventidadFederativa: EntidadFederativa = new EntidadFederativa();
        ventidadFederativa.from(this.entidadFederativa);
        this.configuracionEntidadFederativa = new ConfigurarEntidadFederativa();
        this.configuracionEntidadFederativa.permisosTabla = { "tabla": "entidadFederativa", "permiso": 8 };
        this.configuracionEntidadFederativa.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionEntidadFederativa.entidadFederativaConsulta = ventidadFederativa;
        this.permisosacciones();
        $("#buscarEntidadFederativa_"+this.nombre).modal();
    }
    buscarEntidadFederativaBack(entidadFederativa: EntidadFederativa) {
        this.entidadFederativa_service.getEntidadFederativasByDto(entidadFederativa, this.eventoSrvEntidadFederativaBuscar, this);
    }
    eventoSrvEntidadFederativaBuscar(lista, objeto) {
        objeto.lista_entidadFederativas = lista;
        if (lista && lista.length > 0) {
            objeto.entidadFederativa = lista[0];
            objeto.entidadFederativaLazy =false;
            objeto.entidadFederativa_service.lazyEntidadFederativa(objeto.entidadFederativa, objeto.evn_lazy_entidadFederativa, objeto);
        }
    }
    guardarEntidadFederativaFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarEntidadFederativaBack(this.entidadFederativa);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarEntidadFederativaBack(entidadFederativa: EntidadFederativa) {
        if (entidadFederativa.usuarioUltMov == null ) entidadFederativa.usuarioUltMov = this.globalesService.dameUsuario();
        if (entidadFederativa.status == null || entidadFederativa.status == "" ) entidadFederativa.status = 1;
        this.entidadFederativa_service.guardarEntidadFederativa(entidadFederativa, this.eventoSrvEntidadFederativaGuardar, this);
    }
    eventoSrvEntidadFederativaGuardar(entidadFederativa, obj) {
        obj.entidadFederativa = entidadFederativa;
        bootbox.alert("Datos guardados con éxito");
        var aux: EntidadFederativa = new EntidadFederativa();
        aux.from(entidadFederativa);
        obj.entidadFederativaChange.emit(aux);
        obj.entidadFederativaTablaChange.emit(aux);
        obj.entidadFederativaLazy =false;
        obj.entidadFederativa_service.lazyEntidadFederativa(obj.entidadFederativa, obj.evn_lazy_entidadFederativa, obj);
        obj.accionesActualizar();

    }
    actualizarEntidadFederativaFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarEntidadFederativaBack(this.entidadFederativa);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarEntidadFederativaBack(entidadFederativa: EntidadFederativa) {
        entidadFederativa.usuarioUltMov = this.globalesService.dameUsuario();
        this.entidadFederativa_service.actualizarEntidadFederativa(entidadFederativa, this.eventoSrvEntidadFederativaActualizar, this);
    }
    eventoSrvEntidadFederativaActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: EntidadFederativa = new EntidadFederativa();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.entidadFederativaLazy = false;
            obj.entidadFederativa_service.lazyEntidadFederativa(obj.entidadFederativa, obj.evn_lazy_entidadFederativa, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.entidadFederativa);
            obj.entidadFederativaChange.emit(aux);
            obj.entidadFederativaTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarEntidadFederativaFront() {
        this.accion = 4;
        this.eliminarEntidadFederativaBack(this.entidadFederativa);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarEntidadFederativaBack(entidadFederativa: EntidadFederativa) {
        entidadFederativa.usuarioUltMov = this.globalesService.dameUsuario();
        this.entidadFederativa_service.eliminarEntidadFederativa(entidadFederativa, this.eventoSrvEntidadFederativaEliminar, this);
    }
    eventoSrvEntidadFederativaEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.entidadFederativa = new EntidadFederativa();
            obj.entidadFederativaChange.emit(obj.entidadFederativa);
            obj.entidadFederativaTablaChange.emit(obj.entidadFederativa);
            obj.limpiarCampos() ;
        }
    }
    cancelarEntidadFederativaFront() {
        this.accion = 6;
        this.entidadFederativaCancelar = this.entidadFederativaGuardar = this.entidadFederativaActualizar = this.entidadFederativaEliminar = false;
        this.entidadFederativaBuscar = this.entidadFederativaAgregar = true;
        this.permisosacciones();
    }
    nuevoEntidadFederativaFront() {
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
                this.entidadFederativaSeleccion = this.entidadFederativaAgregar = this.entidadFederativaBuscar = this.entidadFederativaActualizar = this.entidadFederativaEliminar = false;
                this.entidadFederativaGuardar = this.entidadFederativaCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovEntidadFederativaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEntidadFederativaUsuario, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.entidadFederativaBuscar = this.entidadFederativaAgregar = this.entidadFederativaSeleccion = this.entidadFederativaGuardar = false;
        this.entidadFederativaActualizar = this.entidadFederativaEliminar = this.entidadFederativaCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtEntidadFederativaSeleccionado(entidadFederativa) {
        this.entidadFederativa = new EntidadFederativa();
        this.entidadFederativa.from(entidadFederativa);
        this.entidadFederativaLazy =false;
        this.entidadFederativa_service.lazyEntidadFederativa(this.entidadFederativa, this.evn_lazy_entidadFederativa, this);
        this.accion = 7;
        this.entidadFederativaBuscar = this.entidadFederativaAgregar = this.entidadFederativaSeleccion = this.entidadFederativaGuardar = false;
        this.entidadFederativaActualizar = this.entidadFederativaEliminar = this.entidadFederativaCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarEntidadFederativa_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.entidadFederativaSeleccion = this.entidadFederativaCancelar = this.entidadFederativaGuardar = this.entidadFederativaActualizar = this.entidadFederativaEliminar = false;        // ******************** maquina
        this.entidadFederativaBuscar = this.entidadFederativaAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.entidadFederativaBuscar) this.entidadFederativaBuscar = this.globalesService.pbuscar(this,"entidadFederativa");
        if (this.entidadFederativaActualizar) this.entidadFederativaActualizar = (this.globalesService.pacutalizar(this,"entidadFederativa") && this.globalesService.pbuscar(this,"entidadFederativa"));
        if (this.entidadFederativaEliminar) this.entidadFederativaEliminar = (this.globalesService.peliminar(this,"entidadFederativa") && this.globalesService.pbuscar(this,"entidadFederativa"));
        if (this.entidadFederativaAgregar) this.entidadFederativaAgregar = this.globalesService.pagregar(this,"entidadFederativa");
    }
    permisosaccionesInicio() {
        this.entidadFederativaSeleccion = this.entidadFederativaCancelar = this.entidadFederativaGuardar = this.entidadFederativaActualizar = this.entidadFederativaEliminar = false; // *************************** maquina
        this.entidadFederativaBuscar = this.entidadFederativaAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.entidadFederativa = new EntidadFederativa();

        this.usuarioUltMovEntidadFederativaUsuarioEleccion= new Usuario();

        this.entidadFederativaChange.emit(this.entidadFederativa);
        this.entidadFederativaSeleccion = this.entidadFederativaCancelar = this.entidadFederativaGuardar = this.entidadFederativaActualizar = this.entidadFederativaEliminar = false; // *************************** maquina
        this.entidadFederativaBuscar = this.entidadFederativaAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
