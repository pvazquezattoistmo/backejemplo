import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { UsuarioBtc } from '../shared/usuario-btc';
import { UsuarioBtcService } from '../shared/usuario-btc.service';
import { ConfigurarUsuarioBtc } from '../shared/configurar-usuario-btc'
import { Usuario } from '../../usuarios/shared/usuario';
import { UsuarioService } from '../../usuarios/shared/usuario.service';
import { PerfilService } from '../../perfiles/shared/perfil.service';
import { Perfil } from '../../perfiles/shared/perfil';
import { PerfilRedIssste } from '../../perfil-red-issstes/shared/perfil-red-issste';
import { PerfilRedIsssteService } from '../../perfil-red-issstes/shared/perfil-red-issste.service';
import { CatalogoCargo } from '../../catalogo-cargos/shared/catalogo-cargo';
import { CatalogoCargoService } from '../../catalogo-cargos/shared/catalogo-cargo.service';
import { Hospital } from '../../hospitales/shared/hospital';
import { HospitalService } from '../../hospitales/shared/hospital.service';
import { EntidadFederativaService } from '../../entidad-federativas/shared/entidad-federativa.service';
import { EntidadFederativa } from '../../entidad-federativas/shared/entidad-federativa';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-usuario-btc-crud',
    templateUrl: './usuario-btc-crud.component.html',
    styleUrls: ['./usuario-btc-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                UsuarioBtcService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
                CatalogoCargoService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class UsuarioBtcCrudComponent implements OnInit {
    public opcionUsuarioBtc  =0;
    public validosUsuarioBtc :any ={
        id:false,
        fechaBaja:false,
        primerApellido:false,
        fechaRegistro:false,
        segundoApellido:false,
        fechaActualizacion:false,
        nombre:false,
        correoElectronico:false,
        status:false,
        usuarioUltMov:false,
        idperfilRedIssste:false,
        idcargo:false,
        idhospital:false,

    };

    @Input() ocultarConjuntosUsuarioBtc: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "usuarioBtc", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public usuarioBtcLazy: boolean =false;
    public usuarioBtcPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public usuarioBtc: UsuarioBtc = new UsuarioBtc();
    @Output() usuarioBtcChange = new EventEmitter<UsuarioBtc>();
    @Output() usuarioBtcTablaChange = new EventEmitter<UsuarioBtc>();
    public lista_usuarioBtcs: UsuarioBtc[]=[];
    public configuracionUsuarioBtc: ConfigurarUsuarioBtc;
    public usuarioBtcBuscar: boolean
    public usuarioBtcSeleccion: boolean
    public usuarioBtcAgregar: boolean
    public usuarioBtcActualizar: boolean
    public usuarioBtcEliminar: boolean;
    public usuarioBtcGuardar: boolean;
    public usuarioBtcCancelar: boolean;
    public usuarioUltMovUsuarioBtcUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovUsuarioBtcUsuario: Usuario[]=[];
    public usuarioUltMovUsuarioBtcUsuarioEditar:boolean =false;
    public idperfilRedIsssteUsuarioBtcPerfilRedIsssteEleccion: PerfilRedIssste = new PerfilRedIssste();
    public lista_idperfilRedIsssteUsuarioBtcPerfilRedIssste: PerfilRedIssste[]=[];
    public idperfilRedIsssteUsuarioBtcPerfilRedIsssteEditar:boolean =false;
    public idcargoUsuarioBtcCatalogoCargoEleccion: CatalogoCargo = new CatalogoCargo();
    public lista_idcargoUsuarioBtcCatalogoCargo: CatalogoCargo[]=[];
    public idcargoUsuarioBtcCatalogoCargoEditar:boolean =false;
    public idhospitalUsuarioBtcHospitalEleccion: Hospital = new Hospital();
    public lista_idhospitalUsuarioBtcHospital: Hospital[]=[];
    public idhospitalUsuarioBtcHospitalEditar:boolean =false;

    get usuarioBtcOcultarConjuntos(){
        if (this.ocultarConjuntosUsuarioBtc)
           return true
        return  !this.usuarioBtcActualizar;
    }

    ngOnChanges(changes) {
        if (changes.usuarioBtc && changes.usuarioBtc.currentValue == null &&
            this.usuarioBtc == null) this.usuarioBtc = new UsuarioBtc();
        else {
            var aux :UsuarioBtc = new UsuarioBtc();
            if (this.usuarioBtc)
                aux.from(this.usuarioBtc)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.usuarioBtcBuscar = this.usuarioBtcAgregar = this.usuarioBtcSeleccion = this.usuarioBtcGuardar = false;
                this.usuarioBtcActualizar = this.usuarioBtcEliminar = this.usuarioBtcCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.usuarioBtcSeleccion = this.usuarioBtcAgregar = this.usuarioBtcBuscar = this.usuarioBtcActualizar = this.usuarioBtcEliminar = false;
                    this.usuarioBtcGuardar = this.usuarioBtcCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "usuarioBtc",
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
      this.usuarioBtcPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public usuarioBtc_service: UsuarioBtcService,
                public usuario_service: UsuarioService,

                public perfil_service: PerfilService,
                public perfilRedIssste_service: PerfilRedIsssteService,
                public catalogoCargo_service: CatalogoCargoService,
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
        this.usuarioBtcSeleccion = this.usuarioBtcCancelar = this.usuarioBtcGuardar = this.usuarioBtcBuscar = this.usuarioBtcAgregar = this.usuarioBtcActualizar = this.usuarioBtcEliminar = false;
        this.configuracionUsuarioBtc = new ConfigurarUsuarioBtc();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovUsuarioBtcUsuario, this);
        this.perfilRedIssste_service.getPerfilRedIssstesActivos(this.evtGetIdperfilRedIsssteUsuarioBtcPerfilRedIssste, this);
        this.catalogoCargo_service.getCatalogoCargosActivos(this.evtGetIdcargoUsuarioBtcCatalogoCargo, this);
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalUsuarioBtcHospital, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.usuarioBtcPermisos =true;
        if (permisos && permisos.usuarioBtc && permisos.usuarioBtc.PermisoAtributo&& permisos.usuarioBtc.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.usuarioBtc.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.usuarioBtc && permisos.usuarioBtc.PermisoConjunto && permisos.usuarioBtc.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.usuarioBtc.PermisoConjunto ;
        }
        if (permisos && permisos.usuarioBtc && permisos.usuarioBtc.PermisoTabla && permisos.usuarioBtc.PermisoTabla.length>0){
            obj.permisosTabla = permisos.usuarioBtc.PermisoTabla[0] ;
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
        if (permisos && permisos.perfilRedIssste && permisos.perfilRedIssste.PermisoAtributo&& permisos.perfilRedIssste.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.perfilRedIssste.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.perfilRedIssste.PermisoAtributo) ;
        }
        if (permisos && permisos.perfilRedIssste && permisos.perfilRedIssste.PermisoAtributo&& permisos.perfilRedIssste.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.perfilRedIssste.PermisoConjunto) ;
        }
        if (permisos && permisos.perfilRedIssste && permisos.perfilRedIssste.PermisoTabla && permisos.perfilRedIssste.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.perfilRedIssste.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.perfilRedIssste.PermisoTabla[0] );
        }
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoAtributo&& permisos.catalogoCargo.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.catalogoCargo.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.catalogoCargo.PermisoAtributo) ;
        }
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoAtributo&& permisos.catalogoCargo.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.catalogoCargo.PermisoConjunto) ;
        }
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoTabla && permisos.catalogoCargo.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.catalogoCargo.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.catalogoCargo.PermisoTabla[0] );
        }
        if (permisos && permisos.hospital && permisos.hospital.PermisoAtributo&& permisos.hospital.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.hospital.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.hospital.PermisoAtributo) ;
        }
        if (permisos && permisos.hospital && permisos.hospital.PermisoAtributo&& permisos.hospital.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.hospital.PermisoConjunto) ;
        }
        if (permisos && permisos.hospital && permisos.hospital.PermisoTabla && permisos.hospital.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.hospital.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.hospital.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovUsuarioBtcUsuario(lista_usuarioUltMovUsuarioBtcUsuario, obj) {
        obj.lista_usuarioUltMovUsuarioBtcUsuario = lista_usuarioUltMovUsuarioBtcUsuario;
        obj.actualizar_UsuarioUltMovUsuarioBtcUsuario();
    }
    evtGetIdperfilRedIsssteUsuarioBtcPerfilRedIssste(lista_idperfilRedIsssteUsuarioBtcPerfilRedIssste, obj) {
        obj.lista_idperfilRedIsssteUsuarioBtcPerfilRedIssste = lista_idperfilRedIsssteUsuarioBtcPerfilRedIssste;
        obj.actualizar_IdperfilRedIsssteUsuarioBtcPerfilRedIssste();
    }
    evtGetIdcargoUsuarioBtcCatalogoCargo(lista_idcargoUsuarioBtcCatalogoCargo, obj) {
        obj.lista_idcargoUsuarioBtcCatalogoCargo = lista_idcargoUsuarioBtcCatalogoCargo;
        obj.actualizar_IdcargoUsuarioBtcCatalogoCargo();
    }
    evtGetIdhospitalUsuarioBtcHospital(lista_idhospitalUsuarioBtcHospital, obj) {
        obj.lista_idhospitalUsuarioBtcHospital = lista_idhospitalUsuarioBtcHospital;
        obj.actualizar_IdhospitalUsuarioBtcHospital();
    }


    actualizar_UsuarioUltMovUsuarioBtcUsuario() {
        if ( this.usuarioUltMovUsuarioBtcUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovUsuarioBtcUsuario)
                if (eleme.id == this.usuarioUltMovUsuarioBtcUsuarioEleccion.id){
                    this.usuarioUltMovUsuarioBtcUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdperfilRedIsssteUsuarioBtcPerfilRedIssste() {
        if ( this.idperfilRedIsssteUsuarioBtcPerfilRedIsssteEleccion)
            for (let eleme of this.lista_idperfilRedIsssteUsuarioBtcPerfilRedIssste)
                if (eleme.id == this.idperfilRedIsssteUsuarioBtcPerfilRedIsssteEleccion.id){
                    this.idperfilRedIsssteUsuarioBtcPerfilRedIsssteEleccion = eleme;
                    break;
                }
    }
    actualizar_IdcargoUsuarioBtcCatalogoCargo() {
        if ( this.idcargoUsuarioBtcCatalogoCargoEleccion)
            for (let eleme of this.lista_idcargoUsuarioBtcCatalogoCargo)
                if (eleme.id == this.idcargoUsuarioBtcCatalogoCargoEleccion.id){
                    this.idcargoUsuarioBtcCatalogoCargoEleccion = eleme;
                    break;
                }
    }
    actualizar_IdhospitalUsuarioBtcHospital() {
        if ( this.idhospitalUsuarioBtcHospitalEleccion)
            for (let eleme of this.lista_idhospitalUsuarioBtcHospital)
                if (eleme.id == this.idhospitalUsuarioBtcHospitalEleccion.id){
                    this.idhospitalUsuarioBtcHospitalEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosUsuarioBtc['id'];
    }
    get validaIds() {
        return this.validosUsuarioBtc['id'];
    }
    get validaFechaBaja() {
        return this.validosUsuarioBtc['fechaBaja'];
    }
    get validaPrimerApellido() {
        return this.validosUsuarioBtc['primerApellido'];
    }
    get validaFechaRegistro() {
        return this.validosUsuarioBtc['fechaRegistro'];
    }
    get validaSegundoApellido() {
        return this.validosUsuarioBtc['segundoApellido'];
    }
    get validaFechaActualizacion() {
        return this.validosUsuarioBtc['fechaActualizacion'];
    }
    get validaNombre() {
        return this.validosUsuarioBtc['nombre'];
    }
    get validaCorreoElectronico() {
        return this.validosUsuarioBtc['correoElectronico'];
    }
    get validaStatus() {
        return this.validosUsuarioBtc['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosUsuarioBtc['usuarioUltMov'];
    }
    get validaIdperfilRedIssste() {
        return this.validosUsuarioBtc['idperfilRedIssste'];
    }
    get validaIdcargo() {
        return this.validosUsuarioBtc['idcargo'];
    }
    get validaIdhospital() {
        return this.validosUsuarioBtc['idhospital'];
    }

    get validaTodosc() {
        //var salida =  this.validaId && this.validaFechaBaja && this.validaPrimerApellido && this.validaFechaRegistro && this.validaSegundoApellido && this.validaFechaActualizacion && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdperfilRedIssste && this.validaIdcargo && this.validaIdhospital;
        var salida =  this.validaPrimerApellido && this.validaSegundoApellido  && this.validaNombre && this.validaCorreoElectronico && this.validaIdperfilRedIssste && this.validaIdcargo && this.validaIdhospital;
        // var salida =  this.validaId && this.validaPrimerApellido && this.validaSegundoApellido  && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdperfilRedIssste && this.validaIdcargo && this.validaIdhospital;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerUsuarioBtcs(lista, objeto) {
        objeto.lista_usuarioBtcs = lista;
        if (lista && lista.length > 0) {
            objeto.usuarioBtc.from(lista[0]);
            objeto.evtUsuarioBtcSeleccionado(objeto.usuarioBtc);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_usuarioBtc(usuarioBtc, objeto) {
        objeto.usuarioBtc = usuarioBtc;
        objeto.usuarioBtcChange.emit(objeto.usuarioBtc);
        objeto.configuarCombosObjetos();
        objeto.usuarioBtcLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteUsuarioBtcWord(){
        return ! (this.usuarioBtcActualizar && this.usuarioBtcLazy && this.globalesService.preporteWord(this,"usuarioBtc"));
    }
    get datosReporteUsuarioBtcExcel(){
        return ! (this.usuarioBtcActualizar && this.usuarioBtcLazy && this.globalesService.preporteExcel(this,"usuarioBtc"));
    }
    get datosReporteUsuarioBtcPdf(){
        return ! (this.usuarioBtcActualizar && this.usuarioBtcLazy && this.globalesService.preportePdf(this,"usuarioBtc"));
    }
    reporteUsuarioBtcExcel(){
        var nombre:string = "UsuarioBtc.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "usuarioBtc": this.usuarioBtc};
        parametros["plantilla"]="UsuarioBtc.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteUsuarioBtcWord(){
        var nombre:string = "UsuarioBtc.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "usuarioBtc": this.usuarioBtc};
        parametros["plantilla"]="UsuarioBtc.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteUsuarioBtcPdf(){
        var nombre:string = "UsuarioBtc.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "usuarioBtc": this.usuarioBtc};
        parametros["plantilla"]="UsuarioBtc.docx";
        parametros["salida"]="UsuarioBtc.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.usuarioBtcGuardar = this.usuarioBtcActualizar = this.usuarioBtcEliminar = this.usuarioBtcCancelar = false;
        this.usuarioBtcBuscar = this.usuarioBtcAgregar = true;
        //this.usuarioBtcBuscar = this.usuarioBtcAgregar = this.usuarioBtcCancelar = true;
    }
    buscarUsuarioBtcFront() {
        this.accionesBuscar();
        var vusuarioBtc: UsuarioBtc = new UsuarioBtc();
        vusuarioBtc.from(this.usuarioBtc);
        this.configuracionUsuarioBtc = new ConfigurarUsuarioBtc();
        this.configuracionUsuarioBtc.permisosTabla = { "tabla": "usuarioBtc", "permiso": 8 };
        this.configuracionUsuarioBtc.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionUsuarioBtc.usuarioBtcConsulta = vusuarioBtc;
        this.permisosacciones();
        $("#buscarUsuarioBtc_"+this.nombre).modal();
    }
    buscarUsuarioBtcBack(usuarioBtc: UsuarioBtc) {
        this.usuarioBtc_service.getUsuarioBtcsByDto(usuarioBtc, this.eventoSrvUsuarioBtcBuscar, this);
    }
    eventoSrvUsuarioBtcBuscar(lista, objeto) {
        objeto.lista_usuarioBtcs = lista;
        if (lista && lista.length > 0) {
            objeto.usuarioBtc = lista[0];
            objeto.usuarioBtcLazy =false;
            objeto.usuarioBtc_service.lazyUsuarioBtc(objeto.usuarioBtc, objeto.evn_lazy_usuarioBtc, objeto);
        }
    }
    guardarUsuarioBtcFront() {
        bootbox.confirm({
            message: "¿Deseas guardar el registro?",
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
                if (result){
                    this.accion = 5;  // ********************************************************************************************** maquina
                    this.guardarUsuarioBtcBack(this.usuarioBtc);
                    this.accionesBuscar();    // ********************************************************************************* maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });

        // this.accion = 5;  // ********************************************************************************************** maquina
        // this.guardarUsuarioBtcBack(this.usuarioBtc);
        // this.accionesBuscar();    // ********************************************************************************* maquina
        // this.permisosacciones();
    }
    guardarUsuarioBtcBack(usuarioBtc: UsuarioBtc) {
        if (usuarioBtc.usuarioUltMov == null ) usuarioBtc.usuarioUltMov = this.globalesService.dameUsuario();
        if (usuarioBtc.status == null || usuarioBtc.status == "" ) usuarioBtc.status = 1;
        usuarioBtc.fechaRegistro = new Date();
        this.usuarioBtc_service.guardarUsuarioBtc(usuarioBtc, this.eventoSrvUsuarioBtcGuardar, this);
    }
    eventoSrvUsuarioBtcGuardar(usuarioBtc, obj) {
        obj.usuarioBtc = usuarioBtc;
        bootbox.alert("Datos guardados con éxito");
        var aux: UsuarioBtc = new UsuarioBtc();
        aux.from(usuarioBtc);
        obj.usuarioBtcChange.emit(aux);
        obj.usuarioBtcTablaChange.emit(aux);
        obj.usuarioBtcLazy =false;
        obj.usuarioBtc_service.lazyUsuarioBtc(obj.usuarioBtc, obj.evn_lazy_usuarioBtc, obj);
        obj.accionesActualizar();

    }
    actualizarUsuarioBtcFront() {
        bootbox.confirm({
            message: "¿Deseas actualizar el registro?",
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
                if (result){
                    this.accion = 3;         // ************************************************************************************* maquina
                    this.actualizarUsuarioBtcBack(this.usuarioBtc);
                    this.accionesBuscar(); // ***************************************************************************** maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });

        // this.accion = 3;         // ************************************************************************************* maquina
        // this.actualizarUsuarioBtcBack(this.usuarioBtc);
        // this.accionesBuscar(); // ***************************************************************************** maquina
        // this.permisosacciones();
    }
    actualizarUsuarioBtcBack(usuarioBtc: UsuarioBtc) {
        usuarioBtc.usuarioUltMov = this.globalesService.dameUsuario();
        usuarioBtc.fechaActualizacion = new Date();
        this.usuarioBtc_service.actualizarUsuarioBtc(usuarioBtc, this.eventoSrvUsuarioBtcActualizar, this);
    }
    eventoSrvUsuarioBtcActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: UsuarioBtc = new UsuarioBtc();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.usuarioBtcLazy = false;
            obj.usuarioBtc_service.lazyUsuarioBtc(obj.usuarioBtc, obj.evn_lazy_usuarioBtc, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.usuarioBtc);
            obj.usuarioBtcChange.emit(aux);
            obj.usuarioBtcTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarUsuarioBtcFront() {
        bootbox.confirm({
            message: "¿Deseas eliminar el registro?",
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
                if (result){
                    this.accion = 4;
                    this.eliminarUsuarioBtcBack(this.usuarioBtc);
                    this.permisosacciones();
                    this.accionesBuscar();
                }
            }.bind(this)
        });

        // this.accion = 4;
        // this.eliminarUsuarioBtcBack(this.usuarioBtc);
        // this.permisosacciones();
        // this.accionesBuscar();
    }
    eliminarUsuarioBtcBack(usuarioBtc: UsuarioBtc) {
        usuarioBtc.usuarioUltMov = this.globalesService.dameUsuario();
        usuarioBtc.fechaBaja = new Date();
        usuarioBtc.status = 0;
        this.usuarioBtc_service.actualizarUsuarioBtc(usuarioBtc, this.eventoSrvUsuarioBtcEliminar, this);
        //this.usuarioBtc_service.eliminarUsuarioBtc(usuarioBtc, this.eventoSrvUsuarioBtcEliminar, this);
    }
    eventoSrvUsuarioBtcEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.usuarioBtc = new UsuarioBtc();
            obj.usuarioBtcChange.emit(obj.usuarioBtc);
            obj.usuarioBtcTablaChange.emit(obj.usuarioBtc);
            obj.limpiarCampos() ;
        }
    }
    cancelarUsuarioBtcFront() {
        this.accion = 6;
        this.usuarioBtcCancelar = this.usuarioBtcGuardar = this.usuarioBtcActualizar = this.usuarioBtcEliminar = false;
        this.usuarioBtcBuscar = this.usuarioBtcAgregar = true;
        this.permisosacciones();
    }
    nuevoUsuarioBtcFront() {
        this.accion = 2;
        this.usuarioBtcSeleccion = this.usuarioBtcAgregar = this.usuarioBtcBuscar = this.usuarioBtcActualizar = this.usuarioBtcEliminar = false;
        this.usuarioBtcGuardar = this.usuarioBtcCancelar = true;
        // bootbox.confirm({
        //     message: "¿Deseas limpiar los campos de ingreso?",
        //     buttons: {
        //         confirm: {
        //             label: 'Si',
        //             className: 'btn-success'
        //         },
        //         cancel: {
        //             label: 'No',
        //             className: 'btn-danger'
        //         }
        //     },
        //     callback: function(result) {
        //         if (result)
        //             this.limpiarCampos();
        //         this.usuarioBtcSeleccion = this.usuarioBtcAgregar = this.usuarioBtcBuscar = this.usuarioBtcActualizar = this.usuarioBtcEliminar = false;
        //         this.usuarioBtcGuardar = this.usuarioBtcCancelar = true;
        //     }.bind(this)
        // });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovUsuarioBtcUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovUsuarioBtcUsuario, this);
        this.lista_idperfilRedIsssteUsuarioBtcPerfilRedIssste = [];
        this.perfilRedIssste_service.getPerfilRedIssstesActivos(this.evtGetIdperfilRedIsssteUsuarioBtcPerfilRedIssste, this);
        this.lista_idcargoUsuarioBtcCatalogoCargo = [];
        this.catalogoCargo_service.getCatalogoCargosActivos(this.evtGetIdcargoUsuarioBtcCatalogoCargo, this);
        this.lista_idhospitalUsuarioBtcHospital = [];
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalUsuarioBtcHospital, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.usuarioBtcBuscar = this.usuarioBtcAgregar = this.usuarioBtcSeleccion = this.usuarioBtcGuardar = false;
        this.usuarioBtcActualizar = this.usuarioBtcEliminar = this.usuarioBtcCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtUsuarioBtcSeleccionado(usuarioBtc) {
        this.usuarioBtc = new UsuarioBtc();
        this.usuarioBtc.from(usuarioBtc);
        this.usuarioBtcLazy =false;
        this.usuarioBtc_service.lazyUsuarioBtc(this.usuarioBtc, this.evn_lazy_usuarioBtc, this);
        this.accion = 7;
        this.usuarioBtcBuscar = this.usuarioBtcAgregar = this.usuarioBtcSeleccion = this.usuarioBtcGuardar = false;
        this.usuarioBtcActualizar = this.usuarioBtcEliminar = this.usuarioBtcCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarUsuarioBtc_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.usuarioBtcSeleccion = this.usuarioBtcCancelar = this.usuarioBtcGuardar = this.usuarioBtcActualizar = this.usuarioBtcEliminar = false;        // ******************** maquina
        this.usuarioBtcBuscar = this.usuarioBtcAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.usuarioBtcBuscar) this.usuarioBtcBuscar = this.globalesService.pbuscar(this,"usuarioBtc");
        if (this.usuarioBtcActualizar) this.usuarioBtcActualizar = (this.globalesService.pacutalizar(this,"usuarioBtc") && this.globalesService.pbuscar(this,"usuarioBtc"));
        if (this.usuarioBtcEliminar) this.usuarioBtcEliminar = (this.globalesService.peliminar(this,"usuarioBtc") && this.globalesService.pbuscar(this,"usuarioBtc"));
        if (this.usuarioBtcAgregar) this.usuarioBtcAgregar = this.globalesService.pagregar(this,"usuarioBtc");
    }
    permisosaccionesInicio() {
        this.usuarioBtcSeleccion = this.usuarioBtcCancelar = this.usuarioBtcGuardar = this.usuarioBtcActualizar = this.usuarioBtcEliminar = false; // *************************** maquina
        this.usuarioBtcBuscar = this.usuarioBtcAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.usuarioBtc = new UsuarioBtc();

        this.usuarioUltMovUsuarioBtcUsuarioEleccion= new Usuario();
        this.idperfilRedIsssteUsuarioBtcPerfilRedIsssteEleccion= new PerfilRedIssste();
        this.idcargoUsuarioBtcCatalogoCargoEleccion= new CatalogoCargo();
        this.idhospitalUsuarioBtcHospitalEleccion= new Hospital();

        this.usuarioBtcChange.emit(this.usuarioBtc);
        this.usuarioBtcSeleccion = this.usuarioBtcCancelar = this.usuarioBtcGuardar = this.usuarioBtcActualizar = this.usuarioBtcEliminar = false; // *************************** maquina
        this.usuarioBtcBuscar = this.usuarioBtcAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
