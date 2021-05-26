import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { PerfilRedIssste } from '../shared/perfil-red-issste';
import { PerfilRedIsssteService } from '../shared/perfil-red-issste.service';
import { ConfigurarPerfilRedIssste } from '../shared/configurar-perfil-red-issste'
import { Usuario } from '../../usuarios/shared/usuario';
import { UsuarioService } from '../../usuarios/shared/usuario.service';
import { UsuarioBtcService } from '../../usuario-btcs/shared/usuario-btc.service';
import { UsuarioBtc } from '../../usuario-btcs/shared/usuario-btc';
import { CatalogoCargoService } from '../../catalogo-cargos/shared/catalogo-cargo.service';
import { CatalogoCargo } from '../../catalogo-cargos/shared/catalogo-cargo';
import { HospitalService } from '../../hospitales/shared/hospital.service';
import { Hospital } from '../../hospitales/shared/hospital';
import { EntidadFederativaService } from '../../entidad-federativas/shared/entidad-federativa.service';
import { EntidadFederativa } from '../../entidad-federativas/shared/entidad-federativa';
import { PerfilService } from '../../perfiles/shared/perfil.service';
import { Perfil } from '../../perfiles/shared/perfil';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-perfil-red-issste-crud',
    templateUrl: './perfil-red-issste-crud.component.html',
    styleUrls: ['./perfil-red-issste-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                PerfilRedIsssteService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
                CatalogoCargoService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class PerfilRedIsssteCrudComponent implements OnInit {
    public opcionPerfilRedIssste  =0;
    public validosPerfilRedIssste :any ={
        id:false,
        fechaBaja:false,
        fechaRegistro:false,
        tipoPerfil:false,
        fechaActualizacion:false,
        nombre:false,
        status:false,
        usuarioUltMov:false,

    };

    @Input() ocultarConjuntosPerfilRedIssste: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "perfilRedIssste", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public perfilRedIsssteLazy: boolean =false;
    public perfilRedIssstePermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public perfilRedIssste: PerfilRedIssste = new PerfilRedIssste();
    @Output() perfilRedIsssteChange = new EventEmitter<PerfilRedIssste>();
    @Output() perfilRedIsssteTablaChange = new EventEmitter<PerfilRedIssste>();
    public lista_perfilRedIssstes: PerfilRedIssste[]=[];
    public configuracionPerfilRedIssste: ConfigurarPerfilRedIssste;
    public perfilRedIsssteBuscar: boolean
    public perfilRedIsssteSeleccion: boolean
    public perfilRedIsssteAgregar: boolean
    public perfilRedIsssteActualizar: boolean
    public perfilRedIsssteEliminar: boolean;
    public perfilRedIsssteGuardar: boolean;
    public perfilRedIsssteCancelar: boolean;
    public usuarioUltMovPerfilRedIsssteUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovPerfilRedIsssteUsuario: Usuario[]=[];
    public usuarioUltMovPerfilRedIsssteUsuarioEditar:boolean =false;

    get perfilRedIsssteOcultarConjuntos(){
        if (this.ocultarConjuntosPerfilRedIssste)
           return true
        return  !this.perfilRedIsssteActualizar;
    }

    ngOnChanges(changes) {
        if (changes.perfilRedIssste && changes.perfilRedIssste.currentValue == null &&
            this.perfilRedIssste == null) this.perfilRedIssste = new PerfilRedIssste();
        else {
            var aux :PerfilRedIssste = new PerfilRedIssste();
            if (this.perfilRedIssste)
                aux.from(this.perfilRedIssste)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.perfilRedIsssteBuscar = this.perfilRedIsssteAgregar = this.perfilRedIsssteSeleccion = this.perfilRedIsssteGuardar = false;
                this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = this.perfilRedIsssteCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.perfilRedIsssteSeleccion = this.perfilRedIsssteAgregar = this.perfilRedIsssteBuscar = this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = false;
                    this.perfilRedIsssteGuardar = this.perfilRedIsssteCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "perfilRedIssste",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "catalogoCargo",
                                "hospital",
                                "entidadFederativa",
                                "perfil",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.perfilRedIssstePermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public perfilRedIssste_service: PerfilRedIsssteService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public catalogoCargo_service: CatalogoCargoService,

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
        this.perfilRedIsssteSeleccion = this.perfilRedIsssteCancelar = this.perfilRedIsssteGuardar = this.perfilRedIsssteBuscar = this.perfilRedIsssteAgregar = this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = false;
        this.configuracionPerfilRedIssste = new ConfigurarPerfilRedIssste();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPerfilRedIsssteUsuario, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.perfilRedIssstePermisos =true;
        if (permisos && permisos.perfilRedIssste && permisos.perfilRedIssste.PermisoAtributo&& permisos.perfilRedIssste.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.perfilRedIssste.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.perfilRedIssste && permisos.perfilRedIssste.PermisoConjunto && permisos.perfilRedIssste.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.perfilRedIssste.PermisoConjunto ;
        }
        if (permisos && permisos.perfilRedIssste && permisos.perfilRedIssste.PermisoTabla && permisos.perfilRedIssste.PermisoTabla.length>0){
            obj.permisosTabla = permisos.perfilRedIssste.PermisoTabla[0] ;
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


    evtGetUsuarioUltMovPerfilRedIsssteUsuario(lista_usuarioUltMovPerfilRedIsssteUsuario, obj) {
        obj.lista_usuarioUltMovPerfilRedIsssteUsuario = lista_usuarioUltMovPerfilRedIsssteUsuario;
        obj.actualizar_UsuarioUltMovPerfilRedIsssteUsuario();
    }


    actualizar_UsuarioUltMovPerfilRedIsssteUsuario() {
        if ( this.usuarioUltMovPerfilRedIsssteUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovPerfilRedIsssteUsuario)
                if (eleme.id == this.usuarioUltMovPerfilRedIsssteUsuarioEleccion.id){
                    this.usuarioUltMovPerfilRedIsssteUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosPerfilRedIssste['id'];
    }
    get validaIds() {
        return this.validosPerfilRedIssste['id'];
    }
    get validaFechaBaja() {
        return this.validosPerfilRedIssste['fechaBaja'];
    }
    get validaFechaRegistro() {
        return this.validosPerfilRedIssste['fechaRegistro'];
    }
    get validaTipoPerfil() {
        return this.validosPerfilRedIssste['tipoPerfil'];
    }
    get validaFechaActualizacion() {
        return this.validosPerfilRedIssste['fechaActualizacion'];
    }
    get validaNombre() {
        return this.validosPerfilRedIssste['nombre'];
    }
    get validaStatus() {
        return this.validosPerfilRedIssste['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosPerfilRedIssste['usuarioUltMov'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaFechaRegistro && this.validaTipoPerfil && this.validaFechaActualizacion && this.validaNombre && this.validaStatus && this.validaUsuarioUltMov;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerPerfilRedIssstes(lista, objeto) {
        objeto.lista_perfilRedIssstes = lista;
        if (lista && lista.length > 0) {
            objeto.perfilRedIssste.from(lista[0]);
            objeto.evtPerfilRedIsssteSeleccionado(objeto.perfilRedIssste);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_perfilRedIssste(perfilRedIssste, objeto) {
        objeto.perfilRedIssste = perfilRedIssste;
        objeto.perfilRedIsssteChange.emit(objeto.perfilRedIssste);
        objeto.configuarCombosObjetos();
        objeto.perfilRedIsssteLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReportePerfilRedIsssteWord(){
        return ! (this.perfilRedIsssteActualizar && this.perfilRedIsssteLazy && this.globalesService.preporteWord(this,"perfilRedIssste"));
    }
    get datosReportePerfilRedIsssteExcel(){
        return ! (this.perfilRedIsssteActualizar && this.perfilRedIsssteLazy && this.globalesService.preporteExcel(this,"perfilRedIssste"));
    }
    get datosReportePerfilRedIssstePdf(){
        return ! (this.perfilRedIsssteActualizar && this.perfilRedIsssteLazy && this.globalesService.preportePdf(this,"perfilRedIssste"));
    }
    reportePerfilRedIsssteExcel(){
        var nombre:string = "PerfilRedIssste.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "perfilRedIssste": this.perfilRedIssste};
        parametros["plantilla"]="PerfilRedIssste.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePerfilRedIsssteWord(){
        var nombre:string = "PerfilRedIssste.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "perfilRedIssste": this.perfilRedIssste};
        parametros["plantilla"]="PerfilRedIssste.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reportePerfilRedIssstePdf(){
        var nombre:string = "PerfilRedIssste.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "perfilRedIssste": this.perfilRedIssste};
        parametros["plantilla"]="PerfilRedIssste.docx";
        parametros["salida"]="PerfilRedIssste.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.perfilRedIsssteGuardar = this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = false;
        this.perfilRedIsssteBuscar = this.perfilRedIsssteAgregar = this.perfilRedIsssteCancelar = true;
    }
    buscarPerfilRedIsssteFront() {
        this.accionesBuscar();
        var vperfilRedIssste: PerfilRedIssste = new PerfilRedIssste();
        vperfilRedIssste.from(this.perfilRedIssste);
        this.configuracionPerfilRedIssste = new ConfigurarPerfilRedIssste();
        this.configuracionPerfilRedIssste.permisosTabla = { "tabla": "perfilRedIssste", "permiso": 8 };
        this.configuracionPerfilRedIssste.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionPerfilRedIssste.perfilRedIsssteConsulta = vperfilRedIssste;
        this.permisosacciones();
        $("#buscarPerfilRedIssste_"+this.nombre).modal();
    }
    buscarPerfilRedIsssteBack(perfilRedIssste: PerfilRedIssste) {
        this.perfilRedIssste_service.getPerfilRedIssstesByDto(perfilRedIssste, this.eventoSrvPerfilRedIsssteBuscar, this);
    }
    eventoSrvPerfilRedIsssteBuscar(lista, objeto) {
        objeto.lista_perfilRedIssstes = lista;
        if (lista && lista.length > 0) {
            objeto.perfilRedIssste = lista[0];
            objeto.perfilRedIsssteLazy =false;
            objeto.perfilRedIssste_service.lazyPerfilRedIssste(objeto.perfilRedIssste, objeto.evn_lazy_perfilRedIssste, objeto);
        }
    }
    guardarPerfilRedIsssteFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarPerfilRedIsssteBack(this.perfilRedIssste);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarPerfilRedIsssteBack(perfilRedIssste: PerfilRedIssste) {
        if (perfilRedIssste.usuarioUltMov == null ) perfilRedIssste.usuarioUltMov = this.globalesService.dameUsuario();
        if (perfilRedIssste.status == null || perfilRedIssste.status == "" ) perfilRedIssste.status = 1;
        this.perfilRedIssste_service.guardarPerfilRedIssste(perfilRedIssste, this.eventoSrvPerfilRedIsssteGuardar, this);
    }
    eventoSrvPerfilRedIsssteGuardar(perfilRedIssste, obj) {
        obj.perfilRedIssste = perfilRedIssste;
        bootbox.alert("Datos guardados con éxito");
        var aux: PerfilRedIssste = new PerfilRedIssste();
        aux.from(perfilRedIssste);
        obj.perfilRedIsssteChange.emit(aux);
        obj.perfilRedIsssteTablaChange.emit(aux);
        obj.perfilRedIsssteLazy =false;
        obj.perfilRedIssste_service.lazyPerfilRedIssste(obj.perfilRedIssste, obj.evn_lazy_perfilRedIssste, obj);
        obj.accionesActualizar();

    }
    actualizarPerfilRedIsssteFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarPerfilRedIsssteBack(this.perfilRedIssste);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarPerfilRedIsssteBack(perfilRedIssste: PerfilRedIssste) {
        perfilRedIssste.usuarioUltMov = this.globalesService.dameUsuario();
        this.perfilRedIssste_service.actualizarPerfilRedIssste(perfilRedIssste, this.eventoSrvPerfilRedIsssteActualizar, this);
    }
    eventoSrvPerfilRedIsssteActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: PerfilRedIssste = new PerfilRedIssste();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.perfilRedIsssteLazy = false;
            obj.perfilRedIssste_service.lazyPerfilRedIssste(obj.perfilRedIssste, obj.evn_lazy_perfilRedIssste, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.perfilRedIssste);
            obj.perfilRedIsssteChange.emit(aux);
            obj.perfilRedIsssteTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarPerfilRedIsssteFront() {
        this.accion = 4;
        this.eliminarPerfilRedIsssteBack(this.perfilRedIssste);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarPerfilRedIsssteBack(perfilRedIssste: PerfilRedIssste) {
        perfilRedIssste.usuarioUltMov = this.globalesService.dameUsuario();
        this.perfilRedIssste_service.eliminarPerfilRedIssste(perfilRedIssste, this.eventoSrvPerfilRedIsssteEliminar, this);
    }
    eventoSrvPerfilRedIsssteEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.perfilRedIssste = new PerfilRedIssste();
            obj.perfilRedIsssteChange.emit(obj.perfilRedIssste);
            obj.perfilRedIsssteTablaChange.emit(obj.perfilRedIssste);
            obj.limpiarCampos() ;
        }
    }
    cancelarPerfilRedIsssteFront() {
        this.accion = 6;
        this.perfilRedIsssteCancelar = this.perfilRedIsssteGuardar = this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = false;
        this.perfilRedIsssteBuscar = this.perfilRedIsssteAgregar = true;
        this.permisosacciones();
    }
    nuevoPerfilRedIsssteFront() {
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
                this.perfilRedIsssteSeleccion = this.perfilRedIsssteAgregar = this.perfilRedIsssteBuscar = this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = false;
                this.perfilRedIsssteGuardar = this.perfilRedIsssteCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovPerfilRedIsssteUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPerfilRedIsssteUsuario, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.perfilRedIsssteBuscar = this.perfilRedIsssteAgregar = this.perfilRedIsssteSeleccion = this.perfilRedIsssteGuardar = false;
        this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = this.perfilRedIsssteCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtPerfilRedIsssteSeleccionado(perfilRedIssste) {
        this.perfilRedIssste = new PerfilRedIssste();
        this.perfilRedIssste.from(perfilRedIssste);
        this.perfilRedIsssteLazy =false;
        this.perfilRedIssste_service.lazyPerfilRedIssste(this.perfilRedIssste, this.evn_lazy_perfilRedIssste, this);
        this.accion = 7;
        this.perfilRedIsssteBuscar = this.perfilRedIsssteAgregar = this.perfilRedIsssteSeleccion = this.perfilRedIsssteGuardar = false;
        this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = this.perfilRedIsssteCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarPerfilRedIssste_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.perfilRedIsssteSeleccion = this.perfilRedIsssteCancelar = this.perfilRedIsssteGuardar = this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = false;        // ******************** maquina
        this.perfilRedIsssteBuscar = this.perfilRedIsssteAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.perfilRedIsssteBuscar) this.perfilRedIsssteBuscar = this.globalesService.pbuscar(this,"perfilRedIssste");
        if (this.perfilRedIsssteActualizar) this.perfilRedIsssteActualizar = (this.globalesService.pacutalizar(this,"perfilRedIssste") && this.globalesService.pbuscar(this,"perfilRedIssste"));
        if (this.perfilRedIsssteEliminar) this.perfilRedIsssteEliminar = (this.globalesService.peliminar(this,"perfilRedIssste") && this.globalesService.pbuscar(this,"perfilRedIssste"));
        if (this.perfilRedIsssteAgregar) this.perfilRedIsssteAgregar = this.globalesService.pagregar(this,"perfilRedIssste");
    }
    permisosaccionesInicio() {
        this.perfilRedIsssteSeleccion = this.perfilRedIsssteCancelar = this.perfilRedIsssteGuardar = this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = false; // *************************** maquina
        this.perfilRedIsssteBuscar = this.perfilRedIsssteAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.perfilRedIssste = new PerfilRedIssste();

        this.usuarioUltMovPerfilRedIsssteUsuarioEleccion= new Usuario();

        this.perfilRedIsssteChange.emit(this.perfilRedIssste);
        this.perfilRedIsssteSeleccion = this.perfilRedIsssteCancelar = this.perfilRedIsssteGuardar = this.perfilRedIsssteActualizar = this.perfilRedIsssteEliminar = false; // *************************** maquina
        this.perfilRedIsssteBuscar = this.perfilRedIsssteAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
