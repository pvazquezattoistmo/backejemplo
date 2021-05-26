import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { CatalogoCargo } from '../shared/catalogo-cargo';
import { CatalogoCargoService } from '../shared/catalogo-cargo.service';
import { ConfigurarCatalogoCargo } from '../shared/configurar-catalogo-cargo'
import { Usuario } from '../../usuarios/shared/usuario';
import { UsuarioService } from '../../usuarios/shared/usuario.service';
import { UsuarioBtcService } from '../../usuario-btcs/shared/usuario-btc.service';
import { UsuarioBtc } from '../../usuario-btcs/shared/usuario-btc';
import { PerfilRedIsssteService } from '../../perfil-red-issstes/shared/perfil-red-issste.service';
import { PerfilRedIssste } from '../../perfil-red-issstes/shared/perfil-red-issste';
import { HospitalService } from '../../hospitales/shared/hospital.service';
import { Hospital } from '../../hospitales/shared/hospital';
import { EntidadFederativaService } from '../../entidad-federativas/shared/entidad-federativa.service';
import { EntidadFederativa } from '../../entidad-federativas/shared/entidad-federativa';
import { PerfilService } from '../../perfiles/shared/perfil.service';
import { Perfil } from '../../perfiles/shared/perfil';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-catalogo-cargo-crud',
    templateUrl: './catalogo-cargo-crud.component.html',
    styleUrls: ['./catalogo-cargo-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                CatalogoCargoService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
                CatalogoCargoService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class CatalogoCargoCrudComponent implements OnInit {
    public opcionCatalogoCargo  =0;
    public validosCatalogoCargo :any ={
        id:false,
        descripcion:false,
        fechaBaja:false,
        fechaActualizacion:false,
        fechaRegistro:false,
        status:false,
        usuarioUltMov:false,

    };

    @Input() ocultarConjuntosCatalogoCargo: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "catalogoCargo", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public catalogoCargoLazy: boolean =false;
    public catalogoCargoPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public catalogoCargo: CatalogoCargo = new CatalogoCargo();
    @Output() catalogoCargoChange = new EventEmitter<CatalogoCargo>();
    @Output() catalogoCargoTablaChange = new EventEmitter<CatalogoCargo>();
    public lista_catalogoCargos: CatalogoCargo[]=[];
    public configuracionCatalogoCargo: ConfigurarCatalogoCargo;
    public catalogoCargoBuscar: boolean
    public catalogoCargoSeleccion: boolean
    public catalogoCargoAgregar: boolean
    public catalogoCargoActualizar: boolean
    public catalogoCargoEliminar: boolean;
    public catalogoCargoGuardar: boolean;
    public catalogoCargoCancelar: boolean;
    public usuarioUltMovCatalogoCargoUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovCatalogoCargoUsuario: Usuario[]=[];
    public usuarioUltMovCatalogoCargoUsuarioEditar:boolean =false;

    get catalogoCargoOcultarConjuntos(){
        if (this.ocultarConjuntosCatalogoCargo)
           return true
        return  !this.catalogoCargoActualizar;
    }

    ngOnChanges(changes) {
        if (changes.catalogoCargo && changes.catalogoCargo.currentValue == null &&
            this.catalogoCargo == null) this.catalogoCargo = new CatalogoCargo();
        else {
            var aux :CatalogoCargo = new CatalogoCargo();
            if (this.catalogoCargo)
                aux.from(this.catalogoCargo)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.catalogoCargoBuscar = this.catalogoCargoAgregar = this.catalogoCargoSeleccion = this.catalogoCargoGuardar = false;
                this.catalogoCargoActualizar = this.catalogoCargoEliminar = this.catalogoCargoCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.catalogoCargoSeleccion = this.catalogoCargoAgregar = this.catalogoCargoBuscar = this.catalogoCargoActualizar = this.catalogoCargoEliminar = false;
                    this.catalogoCargoGuardar = this.catalogoCargoCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "catalogoCargo",
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
      this.catalogoCargoPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public catalogoCargo_service: CatalogoCargoService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

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
        this.catalogoCargoSeleccion = this.catalogoCargoCancelar = this.catalogoCargoGuardar = this.catalogoCargoBuscar = this.catalogoCargoAgregar = this.catalogoCargoActualizar = this.catalogoCargoEliminar = false;
        this.configuracionCatalogoCargo = new ConfigurarCatalogoCargo();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCatalogoCargoUsuario, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.catalogoCargoPermisos =true;
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoAtributo&& permisos.catalogoCargo.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.catalogoCargo.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoConjunto && permisos.catalogoCargo.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.catalogoCargo.PermisoConjunto ;
        }
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoTabla && permisos.catalogoCargo.PermisoTabla.length>0){
            obj.permisosTabla = permisos.catalogoCargo.PermisoTabla[0] ;
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


    evtGetUsuarioUltMovCatalogoCargoUsuario(lista_usuarioUltMovCatalogoCargoUsuario, obj) {
        obj.lista_usuarioUltMovCatalogoCargoUsuario = lista_usuarioUltMovCatalogoCargoUsuario;
        obj.actualizar_UsuarioUltMovCatalogoCargoUsuario();
    }


    actualizar_UsuarioUltMovCatalogoCargoUsuario() {
        if ( this.usuarioUltMovCatalogoCargoUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovCatalogoCargoUsuario)
                if (eleme.id == this.usuarioUltMovCatalogoCargoUsuarioEleccion.id){
                    this.usuarioUltMovCatalogoCargoUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosCatalogoCargo['id'];
    }
    get validaIds() {
        return this.validosCatalogoCargo['id'];
    }
    get validaDescripcion() {
        return this.validosCatalogoCargo['descripcion'];
    }
    get validaFechaBaja() {
        return this.validosCatalogoCargo['fechaBaja'];
    }
    get validaFechaActualizacion() {
        return this.validosCatalogoCargo['fechaActualizacion'];
    }
    get validaFechaRegistro() {
        return this.validosCatalogoCargo['fechaRegistro'];
    }
    get validaStatus() {
        return this.validosCatalogoCargo['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosCatalogoCargo['usuarioUltMov'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaDescripcion && this.validaFechaBaja && this.validaFechaActualizacion && this.validaFechaRegistro && this.validaStatus && this.validaUsuarioUltMov;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerCatalogoCargos(lista, objeto) {
        objeto.lista_catalogoCargos = lista;
        if (lista && lista.length > 0) {
            objeto.catalogoCargo.from(lista[0]);
            objeto.evtCatalogoCargoSeleccionado(objeto.catalogoCargo);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_catalogoCargo(catalogoCargo, objeto) {
        objeto.catalogoCargo = catalogoCargo;
        objeto.catalogoCargoChange.emit(objeto.catalogoCargo);
        objeto.configuarCombosObjetos();
        objeto.catalogoCargoLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteCatalogoCargoWord(){
        return ! (this.catalogoCargoActualizar && this.catalogoCargoLazy && this.globalesService.preporteWord(this,"catalogoCargo"));
    }
    get datosReporteCatalogoCargoExcel(){
        return ! (this.catalogoCargoActualizar && this.catalogoCargoLazy && this.globalesService.preporteExcel(this,"catalogoCargo"));
    }
    get datosReporteCatalogoCargoPdf(){
        return ! (this.catalogoCargoActualizar && this.catalogoCargoLazy && this.globalesService.preportePdf(this,"catalogoCargo"));
    }
    reporteCatalogoCargoExcel(){
        var nombre:string = "CatalogoCargo.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "catalogoCargo": this.catalogoCargo};
        parametros["plantilla"]="CatalogoCargo.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteCatalogoCargoWord(){
        var nombre:string = "CatalogoCargo.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "catalogoCargo": this.catalogoCargo};
        parametros["plantilla"]="CatalogoCargo.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteCatalogoCargoPdf(){
        var nombre:string = "CatalogoCargo.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "catalogoCargo": this.catalogoCargo};
        parametros["plantilla"]="CatalogoCargo.docx";
        parametros["salida"]="CatalogoCargo.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.catalogoCargoGuardar = this.catalogoCargoActualizar = this.catalogoCargoEliminar = false;
        this.catalogoCargoBuscar = this.catalogoCargoAgregar = this.catalogoCargoCancelar = true;
    }
    buscarCatalogoCargoFront() {
        this.accionesBuscar();
        var vcatalogoCargo: CatalogoCargo = new CatalogoCargo();
        vcatalogoCargo.from(this.catalogoCargo);
        this.configuracionCatalogoCargo = new ConfigurarCatalogoCargo();
        this.configuracionCatalogoCargo.permisosTabla = { "tabla": "catalogoCargo", "permiso": 8 };
        this.configuracionCatalogoCargo.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionCatalogoCargo.catalogoCargoConsulta = vcatalogoCargo;
        this.permisosacciones();
        $("#buscarCatalogoCargo_"+this.nombre).modal();
    }
    buscarCatalogoCargoBack(catalogoCargo: CatalogoCargo) {
        this.catalogoCargo_service.getCatalogoCargosByDto(catalogoCargo, this.eventoSrvCatalogoCargoBuscar, this);
    }
    eventoSrvCatalogoCargoBuscar(lista, objeto) {
        objeto.lista_catalogoCargos = lista;
        if (lista && lista.length > 0) {
            objeto.catalogoCargo = lista[0];
            objeto.catalogoCargoLazy =false;
            objeto.catalogoCargo_service.lazyCatalogoCargo(objeto.catalogoCargo, objeto.evn_lazy_catalogoCargo, objeto);
        }
    }
    guardarCatalogoCargoFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarCatalogoCargoBack(this.catalogoCargo);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarCatalogoCargoBack(catalogoCargo: CatalogoCargo) {
        if (catalogoCargo.usuarioUltMov == null ) catalogoCargo.usuarioUltMov = this.globalesService.dameUsuario();
        if (catalogoCargo.status == null || catalogoCargo.status == "" ) catalogoCargo.status = 1;
        this.catalogoCargo_service.guardarCatalogoCargo(catalogoCargo, this.eventoSrvCatalogoCargoGuardar, this);
    }
    eventoSrvCatalogoCargoGuardar(catalogoCargo, obj) {
        obj.catalogoCargo = catalogoCargo;
        bootbox.alert("Datos guardados con éxito");
        var aux: CatalogoCargo = new CatalogoCargo();
        aux.from(catalogoCargo);
        obj.catalogoCargoChange.emit(aux);
        obj.catalogoCargoTablaChange.emit(aux);
        obj.catalogoCargoLazy =false;
        obj.catalogoCargo_service.lazyCatalogoCargo(obj.catalogoCargo, obj.evn_lazy_catalogoCargo, obj);
        obj.accionesActualizar();

    }
    actualizarCatalogoCargoFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarCatalogoCargoBack(this.catalogoCargo);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarCatalogoCargoBack(catalogoCargo: CatalogoCargo) {
        catalogoCargo.usuarioUltMov = this.globalesService.dameUsuario();
        this.catalogoCargo_service.actualizarCatalogoCargo(catalogoCargo, this.eventoSrvCatalogoCargoActualizar, this);
    }
    eventoSrvCatalogoCargoActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: CatalogoCargo = new CatalogoCargo();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.catalogoCargoLazy = false;
            obj.catalogoCargo_service.lazyCatalogoCargo(obj.catalogoCargo, obj.evn_lazy_catalogoCargo, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.catalogoCargo);
            obj.catalogoCargoChange.emit(aux);
            obj.catalogoCargoTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarCatalogoCargoFront() {
        this.accion = 4;
        this.eliminarCatalogoCargoBack(this.catalogoCargo);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarCatalogoCargoBack(catalogoCargo: CatalogoCargo) {
        catalogoCargo.usuarioUltMov = this.globalesService.dameUsuario();
        this.catalogoCargo_service.eliminarCatalogoCargo(catalogoCargo, this.eventoSrvCatalogoCargoEliminar, this);
    }
    eventoSrvCatalogoCargoEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.catalogoCargo = new CatalogoCargo();
            obj.catalogoCargoChange.emit(obj.catalogoCargo);
            obj.catalogoCargoTablaChange.emit(obj.catalogoCargo);
            obj.limpiarCampos() ;
        }
    }
    cancelarCatalogoCargoFront() {
        this.accion = 6;
        this.catalogoCargoCancelar = this.catalogoCargoGuardar = this.catalogoCargoActualizar = this.catalogoCargoEliminar = false;
        this.catalogoCargoBuscar = this.catalogoCargoAgregar = true;
        this.permisosacciones();
    }
    nuevoCatalogoCargoFront() {
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
                this.catalogoCargoSeleccion = this.catalogoCargoAgregar = this.catalogoCargoBuscar = this.catalogoCargoActualizar = this.catalogoCargoEliminar = false;
                this.catalogoCargoGuardar = this.catalogoCargoCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovCatalogoCargoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCatalogoCargoUsuario, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.catalogoCargoBuscar = this.catalogoCargoAgregar = this.catalogoCargoSeleccion = this.catalogoCargoGuardar = false;
        this.catalogoCargoActualizar = this.catalogoCargoEliminar = this.catalogoCargoCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtCatalogoCargoSeleccionado(catalogoCargo) {
        this.catalogoCargo = new CatalogoCargo();
        this.catalogoCargo.from(catalogoCargo);
        this.catalogoCargoLazy =false;
        this.catalogoCargo_service.lazyCatalogoCargo(this.catalogoCargo, this.evn_lazy_catalogoCargo, this);
        this.accion = 7;
        this.catalogoCargoBuscar = this.catalogoCargoAgregar = this.catalogoCargoSeleccion = this.catalogoCargoGuardar = false;
        this.catalogoCargoActualizar = this.catalogoCargoEliminar = this.catalogoCargoCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarCatalogoCargo_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.catalogoCargoSeleccion = this.catalogoCargoCancelar = this.catalogoCargoGuardar = this.catalogoCargoActualizar = this.catalogoCargoEliminar = false;        // ******************** maquina
        this.catalogoCargoBuscar = this.catalogoCargoAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.catalogoCargoBuscar) this.catalogoCargoBuscar = this.globalesService.pbuscar(this,"catalogoCargo");
        if (this.catalogoCargoActualizar) this.catalogoCargoActualizar = (this.globalesService.pacutalizar(this,"catalogoCargo") && this.globalesService.pbuscar(this,"catalogoCargo"));
        if (this.catalogoCargoEliminar) this.catalogoCargoEliminar = (this.globalesService.peliminar(this,"catalogoCargo") && this.globalesService.pbuscar(this,"catalogoCargo"));
        if (this.catalogoCargoAgregar) this.catalogoCargoAgregar = this.globalesService.pagregar(this,"catalogoCargo");
    }
    permisosaccionesInicio() {
        this.catalogoCargoSeleccion = this.catalogoCargoCancelar = this.catalogoCargoGuardar = this.catalogoCargoActualizar = this.catalogoCargoEliminar = false; // *************************** maquina
        this.catalogoCargoBuscar = this.catalogoCargoAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.catalogoCargo = new CatalogoCargo();

        this.usuarioUltMovCatalogoCargoUsuarioEleccion= new Usuario();

        this.catalogoCargoChange.emit(this.catalogoCargo);
        this.catalogoCargoSeleccion = this.catalogoCargoCancelar = this.catalogoCargoGuardar = this.catalogoCargoActualizar = this.catalogoCargoEliminar = false; // *************************** maquina
        this.catalogoCargoBuscar = this.catalogoCargoAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
