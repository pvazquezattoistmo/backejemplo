import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { Hospital } from '../shared/hospital';
import { HospitalService } from '../shared/hospital.service';
import { ConfigurarHospital } from '../shared/configurar-hospital'
import { EntidadFederativa } from '../../entidad-federativas/shared/entidad-federativa';
import { EntidadFederativaService } from '../../entidad-federativas/shared/entidad-federativa.service';
import { UsuarioService } from '../../usuarios/shared/usuario.service';
import { Usuario } from '../../usuarios/shared/usuario';
import { UsuarioBtcService } from '../../usuario-btcs/shared/usuario-btc.service';
import { UsuarioBtc } from '../../usuario-btcs/shared/usuario-btc';
import { PerfilRedIsssteService } from '../../perfil-red-issstes/shared/perfil-red-issste.service';
import { PerfilRedIssste } from '../../perfil-red-issstes/shared/perfil-red-issste';
////import { PerfilBtcService } from '../../perfil-btcs/shared/perfil-btc.service';
//import { PerfilBtc } from '../../perfil-btcs/shared/perfil-btc';
import { PerfilService } from '../../perfiles/shared/perfil.service';
import { Perfil } from '../../perfiles/shared/perfil';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-hospitalex-crud',
    templateUrl: './hospitalex-crud.component.html',
    styleUrls: ['./hospitalex-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                HospitalService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                UsuarioService
	]
})
export class HospitalexCrudComponent implements OnInit {
    public opcionHospital  =0;
    public validosHospital :any ={
        id:false,
        fechaBaja:false,
        establecimiento:false,
        fechaRegistro:false,
        redIssste:false,
        rnt:false,
        fechaActualizacion:false,
        nombre:false,
        dependencia:false,
        status:false,
        identidadFederativa:false,
        usuarioUltMov:false,

    };

    @Input() ocultarConjuntosHospital: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "hospital", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public hospitalLazy: boolean =false;
    public hospitalPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public hospital: Hospital = new Hospital();
    @Output() hospitalChange = new EventEmitter<Hospital>();
    @Output() hospitalTablaChange = new EventEmitter<Hospital>();
    public lista_hospitales: Hospital[]=[];
    public configuracionHospital: ConfigurarHospital;
    public hospitalBuscar: boolean
    public hospitalSeleccion: boolean
    public hospitalAgregar: boolean
    public hospitalActualizar: boolean
    public hospitalEliminar: boolean;
    public hospitalGuardar: boolean;
    public hospitalCancelar: boolean;
    public identidadFederativaHospitalEntidadFederativaEleccion: EntidadFederativa = new EntidadFederativa();
    public lista_identidadFederativaHospitalEntidadFederativa: EntidadFederativa[]=[];
    public identidadFederativaHospitalEntidadFederativaEditar:boolean =false;
    public usuarioUltMovHospitalUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovHospitalUsuario: Usuario[]=[];
    public usuarioUltMovHospitalUsuarioEditar:boolean =false;

    get hospitalOcultarConjuntos(){
        if (this.ocultarConjuntosHospital)
           return true
        return  !this.hospitalActualizar;
    }

    ngOnChanges(changes) {
        if (changes.hospital && changes.hospital.currentValue == null &&
            this.hospital == null) this.hospital = new Hospital();
        else {
            var aux :Hospital = new Hospital();
            if (this.hospital)
                aux.from(this.hospital)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.hospitalBuscar = this.hospitalAgregar = this.hospitalSeleccion = this.hospitalGuardar = false;
                this.hospitalActualizar = this.hospitalEliminar = this.hospitalCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.hospitalSeleccion = this.hospitalAgregar = this.hospitalBuscar = this.hospitalActualizar = this.hospitalEliminar = false;
                    this.hospitalGuardar = this.hospitalCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "hospital",
                                "entidadFederativa",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "perfil",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.hospitalPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public hospital_service: HospitalService,
                public entidadFederativa_service: EntidadFederativaService,

                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

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
        this.hospitalSeleccion = this.hospitalCancelar = this.hospitalGuardar = this.hospitalBuscar = this.hospitalAgregar = this.hospitalActualizar = this.hospitalEliminar = false;
        this.configuracionHospital = new ConfigurarHospital();
        this.entidadFederativa_service.getEntidadFederativasActivos(this.evtGetIdentidadFederativaHospitalEntidadFederativa, this);
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovHospitalUsuario, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.hospitalPermisos =true;
        if (permisos && permisos.hospital && permisos.hospital.PermisoAtributo&& permisos.hospital.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.hospital.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.hospital && permisos.hospital.PermisoConjunto && permisos.hospital.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.hospital.PermisoConjunto ;
        }
        if (permisos && permisos.hospital && permisos.hospital.PermisoTabla && permisos.hospital.PermisoTabla.length>0){
            obj.permisosTabla = permisos.hospital.PermisoTabla[0] ;
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.entidadFederativa && permisos.entidadFederativa.PermisoAtributo&& permisos.entidadFederativa.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.entidadFederativa.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.entidadFederativa.PermisoAtributo) ;
        }
        if (permisos && permisos.entidadFederativa && permisos.entidadFederativa.PermisoAtributo&& permisos.entidadFederativa.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.entidadFederativa.PermisoConjunto) ;
        }
        if (permisos && permisos.entidadFederativa && permisos.entidadFederativa.PermisoTabla && permisos.entidadFederativa.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.entidadFederativa.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.entidadFederativa.PermisoTabla[0] );
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


    evtGetIdentidadFederativaHospitalEntidadFederativa(lista_identidadFederativaHospitalEntidadFederativa, obj) {
        obj.lista_identidadFederativaHospitalEntidadFederativa = lista_identidadFederativaHospitalEntidadFederativa;
        obj.actualizar_IdentidadFederativaHospitalEntidadFederativa();
    }
    evtGetUsuarioUltMovHospitalUsuario(lista_usuarioUltMovHospitalUsuario, obj) {
        obj.lista_usuarioUltMovHospitalUsuario = lista_usuarioUltMovHospitalUsuario;
        obj.actualizar_UsuarioUltMovHospitalUsuario();
    }


    actualizar_IdentidadFederativaHospitalEntidadFederativa() {
        if ( this.identidadFederativaHospitalEntidadFederativaEleccion)
            for (let eleme of this.lista_identidadFederativaHospitalEntidadFederativa)
                if (eleme.id == this.identidadFederativaHospitalEntidadFederativaEleccion.id){
                    this.identidadFederativaHospitalEntidadFederativaEleccion = eleme;
                    break;
                }
    }
    actualizar_UsuarioUltMovHospitalUsuario() {
        if ( this.usuarioUltMovHospitalUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovHospitalUsuario)
                if (eleme.id == this.usuarioUltMovHospitalUsuarioEleccion.id){
                    this.usuarioUltMovHospitalUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosHospital['id'];
    }
    get validaIds() {
        return this.validosHospital['id'];
    }
    get validaFechaBaja() {
        return this.validosHospital['fechaBaja'];
    }
    get validaEstablecimiento() {
        return this.validosHospital['establecimiento'];
    }
    get validaFechaRegistro() {
        return this.validosHospital['fechaRegistro'];
    }
    get validaRedIssste() {
        return this.validosHospital['redIssste'];
    }
    get validaRnt() {
        return this.validosHospital['rnt'];
    }
    get validaFechaActualizacion() {
        return this.validosHospital['fechaActualizacion'];
    }
    get validaNombre() {
        return this.validosHospital['nombre'];
    }
    get validaDependencia() {
        return this.validosHospital['dependencia'];
    }
    get validaStatus() {
        return this.validosHospital['status'];
    }
    get validaIdentidadFederativa() {
        return this.validosHospital['identidadFederativa'];
    }
    get validaUsuarioUltMov() {
        return this.validosHospital['usuarioUltMov'];
    }

    get validaTodosc() {
        //var salida =  this.validaId && this.validaFechaBaja && this.validaEstablecimiento && this.validaFechaRegistro && this.validaRedIssste && this.validaRnt && this.validaFechaActualizacion && this.validaNombre && this.validaDependencia && this.validaStatus && this.validaIdentidadFederativa && this.validaUsuarioUltMov;
        //var salida =  this.validaId && this.validaEstablecimiento && this.validaRedIssste && this.validaRnt  && this.validaNombre && this.validaDependencia && this.validaStatus && this.validaIdentidadFederativa && this.validaUsuarioUltMov;
        var salida =  this.validaEstablecimiento && this.validaRnt  && this.validaNombre && this.validaDependencia && (this.hospital!==null && this.hospital.identidadFederativa!==null && this.hospital.identidadFederativa.id!==null) ;
        if (salida != this.validaciones){
          setTimeout(() => {
            this.validacionesChange.emit(salida);
            this.validaciones=salida;
            return salida;
          });

        }
        return this.validaciones;
    }

    obtenerHospitales(lista, objeto) {
        objeto.lista_hospitales = lista;
        if (lista && lista.length > 0) {
            objeto.hospital.from(lista[0]);
            objeto.evtHospitalSeleccionado(objeto.hospital);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_hospital(hospital, objeto) {
        objeto.hospital = hospital;
        objeto.hospitalChange.emit(objeto.hospital);
        objeto.configuarCombosObjetos();
        objeto.hospitalLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteHospitalWord(){
        return ! (this.hospitalActualizar && this.hospitalLazy && this.globalesService.preporteWord(this,"hospital"));
    }
    get datosReporteHospitalExcel(){
        return ! (this.hospitalActualizar && this.hospitalLazy && this.globalesService.preporteExcel(this,"hospital"));
    }
    get datosReporteHospitalPdf(){
        return ! (this.hospitalActualizar && this.hospitalLazy && this.globalesService.preportePdf(this,"hospital"));
    }
    reporteHospitalExcel(){
        var nombre:string = "Hospital.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "hospital": this.hospital};
        parametros["plantilla"]="Hospital.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteHospitalWord(){
        var nombre:string = "Hospital.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "hospital": this.hospital};
        parametros["plantilla"]="Hospital.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteHospitalPdf(){
        var nombre:string = "Hospital.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "hospital": this.hospital};
        parametros["plantilla"]="Hospital.docx";
        parametros["salida"]="Hospital.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.hospitalGuardar = this.hospitalActualizar = this.hospitalEliminar = this.hospitalCancelar = false;
        this.hospitalBuscar = this.hospitalAgregar = true;
        //this.hospitalBuscar = this.hospitalAgregar = this.hospitalCancelar = true;
    }
    buscarHospitalFront() {
        this.accionesBuscar();
        var vhospital: Hospital = new Hospital();
        vhospital.from(this.hospital);
        vhospital.redIssste = 0;
        vhospital.status = 1;
        this.configuracionHospital = new ConfigurarHospital();
        this.configuracionHospital.permisosTabla = { "tabla": "hospital", "permiso": 8 };
        this.configuracionHospital.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionHospital.hospitalConsulta = vhospital;
        this.permisosacciones();
        $("#buscarHospital_"+this.nombre).modal();
    }
    buscarHospitalBack(hospital: Hospital) {
        this.hospital_service.getHospitalesByDto(new Hospital (hospital), this.eventoSrvHospitalBuscar, this);
    }
    eventoSrvHospitalBuscar(lista, objeto) {
        objeto.lista_hospitales = lista;
        if (lista && lista.length > 0) {
            objeto.hospital = lista[0];
            objeto.hospitalLazy =false;
            objeto.hospital_service.lazyHospital(new Hospital(objeto.hospital), objeto.evn_lazy_hospital, objeto);
        }
    }
    guardarHospitalFront() {
      if (!this.validaTodosc){
        bootbox.alert("No se cumplen las validaciones");
        return ;
      }
        this.hospital_service.getHospitalByRnt(this.hospital.rnt, this.eventoSrvHospitalbusRnt, this);
        // this.accion = 5;  // ********************************************************************************************** maquina
        // this.hospital.redIssste = 0;
        // this.hospital.fechaRegistro = new Date();
        // this.guardarHospitalBack(this.hospital);
        // this.accionesBuscar();    // ********************************************************************************* maquina
        // this.permisosacciones();
    }
    guardarHospitalBack(hospital: Hospital) {
        if (hospital.usuarioUltMov == null ) hospital.usuarioUltMov = this.globalesService.dameUsuario();
        if (hospital.status == null || hospital.status == "" ) hospital.status = 1;
        this.hospital_service.guardarHospital(new Hospital(hospital), this.eventoSrvHospitalGuardar, this);
    }
    eventoSrvHospitalGuardar(hospital, obj) {
        obj.hospital = hospital;
        bootbox.alert("Datos guardados con éxito");
        var aux: Hospital = new Hospital();
        aux.from(hospital);
        obj.hospitalChange.emit(aux);
        obj.hospitalTablaChange.emit(aux);
        obj.hospitalLazy =false;
        obj.hospital_service.lazyHospital(new Hospital(obj.hospital), obj.evn_lazy_hospital, obj);
        obj.accionesActualizar();

    }
    eventoSrvHospitalbusRnt(hospital, obj) {
        ("hospital id: "+hospital.id);
        if(hospital.id != null){
            bootbox.alert("¡El RNT ingresado ya existe en el catálogo de Hospitales, favor de ingresar uno diferente!");
            return;
        }
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
                    obj.accion = 5;  // ********************************************************************************************** maquina
                    obj.hospital.redIssste = 0;
                    obj.hospital.fechaRegistro = new Date();
                    obj.guardarHospitalBack(obj.hospital);
                    obj.accionesBuscar();    // ********************************************************************************* maquina
                    obj.permisosacciones();
                }
            }.bind(this)
        });
        // obj.accion = 5;  // ********************************************************************************************** maquina
        // obj.hospital.redIssste = 0;
        // obj.hospital.fechaRegistro = new Date();
        // obj.guardarHospitalBack(obj.hospital);
        // obj.accionesBuscar();    // ********************************************************************************* maquina
        // obj.permisosacciones();

    }
    actualizarHospitalFront() {
        this.hospital_service.getHospitalByRnt(this.hospital.rnt, this.eventoSrvHospitalbusRntAct, this);
        // this.accion = 3;         // ************************************************************************************* maquina
        // this.hospital.fechaActualizacion = new Date();
        // this.actualizarHospitalBack(this.hospital);
        // this.accionesBuscar(); // ***************************************************************************** maquina
        // this.permisosacciones();
    }
    eventoSrvHospitalbusRntAct(hospital, obj) {
        ("hospital id: "+hospital.id);
        ("obj.hospital id: "+obj.hospital.id);
        if(hospital.id != obj.hospital.id){
            bootbox.alert("¡El RNT ingresado ya existe en el catálogo de Hospitales, favor de ingresar uno diferente!");
            return;
        }
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
                    obj.accion = 3;         // ************************************************************************************* maquina
                    obj.hospital.fechaActualizacion = new Date();
                    obj.actualizarHospitalBack(obj.hospital);
                    obj.accionesBuscar(); // ***************************************************************************** maquina
                    obj.permisosacciones();
                }
            }.bind(this)
        });
        // obj.accion = 3;         // ************************************************************************************* maquina
        // obj.hospital.fechaActualizacion = new Date();
        // obj.actualizarHospitalBack(obj.hospital);
        // obj.accionesBuscar(); // ***************************************************************************** maquina
        // obj.permisosacciones();

    }
    actualizarHospitalBack(hospital: Hospital) {
        hospital.usuarioUltMov = this.globalesService.dameUsuario();
        this.hospital_service.actualizarHospital(new Hospital(hospital), this.eventoSrvHospitalActualizar, this);
    }
    eventoSrvHospitalActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: Hospital = new Hospital();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.hospitalLazy = false;
            obj.hospital_service.lazyHospital(new Hospital(obj.hospital), obj.evn_lazy_hospital, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.hospital);
            obj.hospitalChange.emit(aux);
            obj.hospitalTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarHospitalFront() {
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
                    this.hospital.status = 0;
                    this.hospital.fechaBaja = new Date();
                    this.eliminarHospitalBack(this.hospital);
                    this.permisosacciones();
                    this.accionesBuscar();
                }
            }.bind(this)
        });

        // this.accion = 4;
        // this.hospital.status = 0;
        // this.hospital.fechaBaja = new Date();
        // this.eliminarHospitalBack(this.hospital);
        // this.permisosacciones();
        // this.accionesBuscar();
    }
    eliminarHospitalBack(hospital: Hospital) {
        hospital.usuarioUltMov = this.globalesService.dameUsuario();
        this.hospital_service.actualizarHospital(new Hospital(hospital), this.eventoSrvHospitalEliminar, this);
        //this.hospital_service.eliminarHospital(hospital, this.eventoSrvHospitalEliminar, this);
    }
    eventoSrvHospitalEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.hospital = new Hospital();
            obj.hospitalChange.emit(obj.hospital);
            obj.hospitalTablaChange.emit(obj.hospital);
            obj.limpiarCampos() ;
        }
    }
    cancelarHospitalFront() {
        this.accion = 6;
        this.hospitalCancelar = this.hospitalGuardar = this.hospitalActualizar = this.hospitalEliminar = false;
        this.hospitalBuscar = this.hospitalAgregar = true;
        this.permisosacciones();
    }
    nuevoHospitalFront() {
        this.accion = 2;
        this.hospitalSeleccion = this.hospitalAgregar = this.hospitalBuscar = this.hospitalActualizar = this.hospitalEliminar = false;
                this.hospitalGuardar = this.hospitalCancelar = true;
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
        //         this.hospitalSeleccion = this.hospitalAgregar = this.hospitalBuscar = this.hospitalActualizar = this.hospitalEliminar = false;
        //         this.hospitalGuardar = this.hospitalCancelar = true;
        //     }.bind(this)
        // });
    }

    configuarCombosObjetos() {
        this.lista_identidadFederativaHospitalEntidadFederativa = [];
        this.entidadFederativa_service.getEntidadFederativasActivos(this.evtGetIdentidadFederativaHospitalEntidadFederativa, this);
        this.lista_usuarioUltMovHospitalUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovHospitalUsuario, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.hospitalBuscar = this.hospitalAgregar = this.hospitalSeleccion = this.hospitalGuardar = false;
        this.hospitalActualizar = this.hospitalEliminar = this.hospitalCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtHospitalSeleccionado(hospital) {
        this.hospital = new Hospital();
        this.hospital.from(hospital);
        this.hospitalLazy =false;
        this.hospital_service.lazyHospital(new Hospital(this.hospital), this.evn_lazy_hospital, this);
        this.accion = 7;
        this.hospitalBuscar = this.hospitalAgregar = this.hospitalSeleccion = this.hospitalGuardar = false;
        this.hospitalActualizar = this.hospitalEliminar = this.hospitalCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarHospital_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.hospitalSeleccion = this.hospitalCancelar = this.hospitalGuardar = this.hospitalActualizar = this.hospitalEliminar = false;        // ******************** maquina
        this.hospitalBuscar = this.hospitalAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.hospitalBuscar) this.hospitalBuscar = this.globalesService.pbuscar(this,"hospital");
        if (this.hospitalActualizar) this.hospitalActualizar = (this.globalesService.pacutalizar(this,"hospital") && this.globalesService.pbuscar(this,"hospital"));
        if (this.hospitalEliminar) this.hospitalEliminar = (this.globalesService.peliminar(this,"hospital") && this.globalesService.pbuscar(this,"hospital"));
        if (this.hospitalAgregar) this.hospitalAgregar = this.globalesService.pagregar(this,"hospital");
    }
    permisosaccionesInicio() {
        this.hospitalSeleccion = this.hospitalCancelar = this.hospitalGuardar = this.hospitalActualizar = this.hospitalEliminar = false; // *************************** maquina
        this.hospitalBuscar = this.hospitalAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.hospital = new Hospital();

        this.identidadFederativaHospitalEntidadFederativaEleccion= new EntidadFederativa();
        this.usuarioUltMovHospitalUsuarioEleccion= new Usuario();

        this.hospitalChange.emit(this.hospital);
        this.hospitalSeleccion = this.hospitalCancelar = this.hospitalGuardar = this.hospitalActualizar = this.hospitalEliminar = false; // *************************** maquina
        this.hospitalBuscar = this.hospitalAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
