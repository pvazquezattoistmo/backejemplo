import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { CausaMuerte } from '../shared/causa-muerte';
import { CausaMuerteService } from '../shared/causa-muerte.service';
import { ConfigurarCausaMuerte } from '../shared/configurar-causa-muerte'
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

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-causa-muerte-crud',
    templateUrl: './causa-muerte-crud.component.html',
    styleUrls: ['./causa-muerte-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                CausaMuerteService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class CausaMuerteCrudComponent implements OnInit {
    public opcionCausaMuerte  =0;
    public validosCausaMuerte :any ={
        id:false,
        descripcion:true,
        fechaBaja:false,
        fechaRegistro:false,
        fechaActualizacion:false,
        tipoCausaMuerte:false,
        status:false,
        usuarioUltMov:false,

    };

    @Input() ocultarConjuntosCausaMuerte: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "causaMuerte", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public causaMuerteLazy: boolean =false;
    public causaMuertePermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public causaMuerte: CausaMuerte = new CausaMuerte();
    @Output() causaMuerteChange = new EventEmitter<CausaMuerte>();
    @Output() causaMuerteTablaChange = new EventEmitter<CausaMuerte>();
    public lista_causaMuertes: CausaMuerte[]=[];
    public configuracionCausaMuerte: ConfigurarCausaMuerte;
    public causaMuerteBuscar: boolean
    public causaMuerteSeleccion: boolean
    public causaMuerteAgregar: boolean
    public causaMuerteActualizar: boolean
    public causaMuerteEliminar: boolean;
    public causaMuerteGuardar: boolean;
    public causaMuerteCancelar: boolean;
    public usuarioUltMovCausaMuerteUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovCausaMuerteUsuario: Usuario[]=[];
    public usuarioUltMovCausaMuerteUsuarioEditar:boolean =false;

    get causaMuerteOcultarConjuntos(){
        if (this.ocultarConjuntosCausaMuerte)
           return true
        return  !this.causaMuerteActualizar;
    }

    ngOnChanges(changes) {
        if (changes.causaMuerte && changes.causaMuerte.currentValue == null &&
            this.causaMuerte == null) this.causaMuerte = new CausaMuerte();
        else {
            var aux :CausaMuerte = new CausaMuerte();
            if (this.causaMuerte)
                aux.from(this.causaMuerte)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteSeleccion = this.causaMuerteGuardar = false;
                this.causaMuerteActualizar = this.causaMuerteEliminar = this.causaMuerteCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.causaMuerteSeleccion = this.causaMuerteAgregar = this.causaMuerteBuscar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
                    this.causaMuerteGuardar = this.causaMuerteCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "causaMuerte",
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
      this.causaMuertePermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public causaMuerte_service: CausaMuerteService,
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
        this.causaMuerteSeleccion = this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
        this.configuracionCausaMuerte = new ConfigurarCausaMuerte();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCausaMuerteUsuario, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.causaMuertePermisos =true;
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoAtributo&& permisos.causaMuerte.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.causaMuerte.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoConjunto && permisos.causaMuerte.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.causaMuerte.PermisoConjunto ;
        }
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoTabla && permisos.causaMuerte.PermisoTabla.length>0){
            obj.permisosTabla = permisos.causaMuerte.PermisoTabla[0] ;
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


    evtGetUsuarioUltMovCausaMuerteUsuario(lista_usuarioUltMovCausaMuerteUsuario, obj) {
        obj.lista_usuarioUltMovCausaMuerteUsuario = lista_usuarioUltMovCausaMuerteUsuario;
        obj.actualizar_UsuarioUltMovCausaMuerteUsuario();
    }


    actualizar_UsuarioUltMovCausaMuerteUsuario() {
        if ( this.usuarioUltMovCausaMuerteUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovCausaMuerteUsuario)
                if (eleme.id == this.usuarioUltMovCausaMuerteUsuarioEleccion.id){
                    this.usuarioUltMovCausaMuerteUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosCausaMuerte['id'];
    }
    get validaIds() {
        return this.validosCausaMuerte['id'];
    }
    get validaDescripcion() {
        return this.validosCausaMuerte['descripcion'];
    }
    get validaFechaBaja() {
        return this.validosCausaMuerte['fechaBaja'];
    }
    get validaFechaRegistro() {
        return this.validosCausaMuerte['fechaRegistro'];
    }
    get validaFechaActualizacion() {
        return this.validosCausaMuerte['fechaActualizacion'];
    }
    get validaTipoCausaMuerte() {
        return this.validosCausaMuerte['tipoCausaMuerte'];
    }
    get validaStatus() {
        return this.validosCausaMuerte['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosCausaMuerte['usuarioUltMov'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaDescripcion && this.validaFechaBaja && this.validaFechaRegistro && this.validaFechaActualizacion && this.validaTipoCausaMuerte && this.validaStatus && this.validaUsuarioUltMov;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerCausaMuertes(lista, objeto) {
        objeto.lista_causaMuertes = lista;
        if (lista && lista.length > 0) {
            objeto.causaMuerte.from(lista[0]);
            objeto.evtCausaMuerteSeleccionado(objeto.causaMuerte);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_causaMuerte(causaMuerte, objeto) {
        objeto.causaMuerte = causaMuerte;
        objeto.causaMuerteChange.emit(objeto.causaMuerte);
        objeto.configuarCombosObjetos();
        objeto.causaMuerteLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteCausaMuerteWord(){
        return ! (this.causaMuerteActualizar && this.causaMuerteLazy && this.globalesService.preporteWord(this,"causaMuerte"));
    }
    get datosReporteCausaMuerteExcel(){
        return ! (this.causaMuerteActualizar && this.causaMuerteLazy && this.globalesService.preporteExcel(this,"causaMuerte"));
    }
    get datosReporteCausaMuertePdf(){
        return ! (this.causaMuerteActualizar && this.causaMuerteLazy && this.globalesService.preportePdf(this,"causaMuerte"));
    }
    reporteCausaMuerteExcel(){
        var nombre:string = "CausaMuerte.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "causaMuerte": this.causaMuerte};
        parametros["plantilla"]="CausaMuerte.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteCausaMuerteWord(){
        var nombre:string = "CausaMuerte.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "causaMuerte": this.causaMuerte};
        parametros["plantilla"]="CausaMuerte.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteCausaMuertePdf(){
        var nombre:string = "CausaMuerte.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "causaMuerte": this.causaMuerte};
        parametros["plantilla"]="CausaMuerte.docx";
        parametros["salida"]="CausaMuerte.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
        this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteCancelar = true;
    }
    buscarCausaMuerteFront() {
        this.accionesBuscar();
        var vcausaMuerte: CausaMuerte = new CausaMuerte();
        vcausaMuerte.from(this.causaMuerte);
        this.configuracionCausaMuerte = new ConfigurarCausaMuerte();
        this.configuracionCausaMuerte.permisosTabla = { "tabla": "causaMuerte", "permiso": 8 };
        this.configuracionCausaMuerte.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionCausaMuerte.causaMuerteConsulta = vcausaMuerte;
        this.permisosacciones();
        $("#buscarCausaMuerte_"+this.nombre).modal();
    }
    buscarCausaMuerteBack(causaMuerte: CausaMuerte) {
        this.causaMuerte_service.getCausaMuertesByDto(causaMuerte, this.eventoSrvCausaMuerteBuscar, this);
    }
    eventoSrvCausaMuerteBuscar(lista, objeto) {
        objeto.lista_causaMuertes = lista;
        if (lista && lista.length > 0) {
            objeto.causaMuerte = lista[0];
            objeto.causaMuerteLazy =false;
            objeto.causaMuerte_service.lazyCausaMuerte(objeto.causaMuerte, objeto.evn_lazy_causaMuerte, objeto);
        }
    }
    guardarCausaMuerteFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarCausaMuerteBack(this.causaMuerte);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarCausaMuerteBack(causaMuerte: CausaMuerte) {
        if (causaMuerte.usuarioUltMov == null ) causaMuerte.usuarioUltMov = this.globalesService.dameUsuario();
        if (causaMuerte.status == null || causaMuerte.status == "" ) causaMuerte.status = 1;
        this.causaMuerte_service.guardarCausaMuerte(causaMuerte, this.eventoSrvCausaMuerteGuardar, this);
    }
    eventoSrvCausaMuerteGuardar(causaMuerte, obj) {
        obj.causaMuerte = causaMuerte;
        bootbox.alert("Datos guardados con éxito");
        var aux: CausaMuerte = new CausaMuerte();
        aux.from(causaMuerte);
        obj.causaMuerteChange.emit(aux);
        obj.causaMuerteTablaChange.emit(aux);
        obj.causaMuerteLazy =false;
        obj.causaMuerte_service.lazyCausaMuerte(obj.causaMuerte, obj.evn_lazy_causaMuerte, obj);
        obj.accionesActualizar();

    }
    actualizarCausaMuerteFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarCausaMuerteBack(this.causaMuerte);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarCausaMuerteBack(causaMuerte: CausaMuerte) {
        causaMuerte.usuarioUltMov = this.globalesService.dameUsuario();
        this.causaMuerte_service.actualizarCausaMuerte(causaMuerte, this.eventoSrvCausaMuerteActualizar, this);
    }
    eventoSrvCausaMuerteActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: CausaMuerte = new CausaMuerte();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.causaMuerteLazy = false;
            obj.causaMuerte_service.lazyCausaMuerte(obj.causaMuerte, obj.evn_lazy_causaMuerte, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.causaMuerte);
            obj.causaMuerteChange.emit(aux);
            obj.causaMuerteTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarCausaMuerteFront() {
        this.accion = 4;
        this.eliminarCausaMuerteBack(this.causaMuerte);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarCausaMuerteBack(causaMuerte: CausaMuerte) {
        causaMuerte.usuarioUltMov = this.globalesService.dameUsuario();
        this.causaMuerte_service.eliminarCausaMuerte(causaMuerte, this.eventoSrvCausaMuerteEliminar, this);
    }
    eventoSrvCausaMuerteEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.causaMuerte = new CausaMuerte();
            obj.causaMuerteChange.emit(obj.causaMuerte);
            obj.causaMuerteTablaChange.emit(obj.causaMuerte);
            obj.limpiarCampos() ;
        }
    }
    cancelarCausaMuerteFront() {
        this.accion = 6;
        this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
        this.causaMuerteBuscar = this.causaMuerteAgregar = true;
        this.permisosacciones();
    }
    nuevoCausaMuerteFront() {
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
                this.causaMuerteSeleccion = this.causaMuerteAgregar = this.causaMuerteBuscar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
                this.causaMuerteGuardar = this.causaMuerteCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovCausaMuerteUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCausaMuerteUsuario, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteSeleccion = this.causaMuerteGuardar = false;
        this.causaMuerteActualizar = this.causaMuerteEliminar = this.causaMuerteCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtCausaMuerteSeleccionado(causaMuerte) {
        this.causaMuerte = new CausaMuerte();
        this.causaMuerte.from(causaMuerte);
        this.causaMuerteLazy =false;
        this.causaMuerte_service.lazyCausaMuerte(this.causaMuerte, this.evn_lazy_causaMuerte, this);
        this.accion = 7;
        this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteSeleccion = this.causaMuerteGuardar = false;
        this.causaMuerteActualizar = this.causaMuerteEliminar = this.causaMuerteCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarCausaMuerte_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.causaMuerteSeleccion = this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;        // ******************** maquina
        this.causaMuerteBuscar = this.causaMuerteAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.causaMuerteBuscar) this.causaMuerteBuscar = this.globalesService.pbuscar(this,"causaMuerte");
        if (this.causaMuerteActualizar) this.causaMuerteActualizar = (this.globalesService.pacutalizar(this,"causaMuerte") && this.globalesService.pbuscar(this,"causaMuerte"));
        if (this.causaMuerteEliminar) this.causaMuerteEliminar = (this.globalesService.peliminar(this,"causaMuerte") && this.globalesService.pbuscar(this,"causaMuerte"));
        if (this.causaMuerteAgregar) this.causaMuerteAgregar = this.globalesService.pagregar(this,"causaMuerte");
    }
    permisosaccionesInicio() {
        this.causaMuerteSeleccion = this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false; // *************************** maquina
        this.causaMuerteBuscar = this.causaMuerteAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.causaMuerte = new CausaMuerte();

        this.usuarioUltMovCausaMuerteUsuarioEleccion= new Usuario();

        this.causaMuerteChange.emit(this.causaMuerte);
        this.causaMuerteSeleccion = this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false; // *************************** maquina
        this.causaMuerteBuscar = this.causaMuerteAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
