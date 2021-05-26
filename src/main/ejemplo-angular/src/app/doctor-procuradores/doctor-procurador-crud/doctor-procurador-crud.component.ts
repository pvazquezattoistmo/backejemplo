import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { DoctorProcurador } from '../shared/doctor-procurador';
import { DoctorProcuradorService } from '../shared/doctor-procurador.service';
import { ConfigurarDoctorProcurador } from '../shared/configurar-doctor-procurador'
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
    selector: 'app-doctor-procurador-crud',
    templateUrl: './doctor-procurador-crud.component.html',
    styleUrls: ['./doctor-procurador-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                DoctorProcuradorService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService
	]
})
export class DoctorProcuradorCrudComponent implements OnInit {
    public opcionDoctorProcurador  =0;
    public validosDoctorProcurador :any ={
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
        idhospital:false,

    };

    @Input() ocultarConjuntosDoctorProcurador: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "doctorProcurador", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public doctorProcuradorLazy: boolean =false;
    public doctorProcuradorPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public doctorProcurador: DoctorProcurador = new DoctorProcurador();
    @Output() doctorProcuradorChange = new EventEmitter<DoctorProcurador>();
    @Output() doctorProcuradorTablaChange = new EventEmitter<DoctorProcurador>();
    public lista_doctorProcuradores: DoctorProcurador[]=[];
    public configuracionDoctorProcurador: ConfigurarDoctorProcurador;
    public doctorProcuradorBuscar: boolean
    public doctorProcuradorSeleccion: boolean
    public doctorProcuradorAgregar: boolean
    public doctorProcuradorActualizar: boolean
    public doctorProcuradorEliminar: boolean;
    public doctorProcuradorGuardar: boolean;
    public doctorProcuradorCancelar: boolean;
    public usuarioUltMovDoctorProcuradorUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovDoctorProcuradorUsuario: Usuario[]=[];
    public usuarioUltMovDoctorProcuradorUsuarioEditar:boolean =false;
    public idhospitalDoctorProcuradorHospitalEleccion: Hospital = new Hospital();
    public lista_idhospitalDoctorProcuradorHospital: Hospital[]=[];
    public idhospitalDoctorProcuradorHospitalEditar:boolean =false;

    get doctorProcuradorOcultarConjuntos(){
        if (this.ocultarConjuntosDoctorProcurador)
           return true
        return  !this.doctorProcuradorActualizar;
    }

    ngOnChanges(changes) {
        if (changes.doctorProcurador && changes.doctorProcurador.currentValue == null &&
            this.doctorProcurador == null) this.doctorProcurador = new DoctorProcurador();
        else {
            var aux :DoctorProcurador = new DoctorProcurador();
            if (this.doctorProcurador)
                aux.from(this.doctorProcurador)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorSeleccion = this.doctorProcuradorGuardar = false;
                this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = this.doctorProcuradorCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.doctorProcuradorSeleccion = this.doctorProcuradorAgregar = this.doctorProcuradorBuscar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
                    this.doctorProcuradorGuardar = this.doctorProcuradorCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "doctorProcurador",
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
      this.doctorProcuradorPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public doctorProcurador_service: DoctorProcuradorService,
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
        this.doctorProcuradorSeleccion = this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
        this.configuracionDoctorProcurador = new ConfigurarDoctorProcurador();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDoctorProcuradorUsuario, this);
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalDoctorProcuradorHospital, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.doctorProcuradorPermisos =true;
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoAtributo&& permisos.doctorProcurador.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.doctorProcurador.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoConjunto && permisos.doctorProcurador.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.doctorProcurador.PermisoConjunto ;
        }
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoTabla && permisos.doctorProcurador.PermisoTabla.length>0){
            obj.permisosTabla = permisos.doctorProcurador.PermisoTabla[0] ;
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


    evtGetUsuarioUltMovDoctorProcuradorUsuario(lista_usuarioUltMovDoctorProcuradorUsuario, obj) {
        obj.lista_usuarioUltMovDoctorProcuradorUsuario = lista_usuarioUltMovDoctorProcuradorUsuario;
        obj.actualizar_UsuarioUltMovDoctorProcuradorUsuario();
    }
    evtGetIdhospitalDoctorProcuradorHospital(lista_idhospitalDoctorProcuradorHospital, obj) {
        obj.lista_idhospitalDoctorProcuradorHospital = lista_idhospitalDoctorProcuradorHospital;
        obj.actualizar_IdhospitalDoctorProcuradorHospital();
    }


    actualizar_UsuarioUltMovDoctorProcuradorUsuario() {
        if ( this.usuarioUltMovDoctorProcuradorUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovDoctorProcuradorUsuario)
                if (eleme.id == this.usuarioUltMovDoctorProcuradorUsuarioEleccion.id){
                    this.usuarioUltMovDoctorProcuradorUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdhospitalDoctorProcuradorHospital() {
        if ( this.idhospitalDoctorProcuradorHospitalEleccion)
            for (let eleme of this.lista_idhospitalDoctorProcuradorHospital)
                if (eleme.id == this.idhospitalDoctorProcuradorHospitalEleccion.id){
                    this.idhospitalDoctorProcuradorHospitalEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosDoctorProcurador['id'];
    }
    get validaIds() {
        return this.validosDoctorProcurador['id'];
    }
    get validaFechaBaja() {
        return this.validosDoctorProcurador['fechaBaja'];
    }
    get validaPrimerApellido() {
        return this.validosDoctorProcurador['primerApellido'];
    }
    get validaFechaRegistro() {
        return this.validosDoctorProcurador['fechaRegistro'];
    }
    get validaSegundoApellido() {
        return this.validosDoctorProcurador['segundoApellido'];
    }
    get validaFechaActualizacion() {
        return this.validosDoctorProcurador['fechaActualizacion'];
    }
    get validaNombre() {
        return this.validosDoctorProcurador['nombre'];
    }
    get validaCorreoElectronico() {
        return this.validosDoctorProcurador['correoElectronico'];
    }
    get validaStatus() {
        return this.validosDoctorProcurador['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosDoctorProcurador['usuarioUltMov'];
    }
    get validaIdhospital() {
        return this.validosDoctorProcurador['idhospital'];
    }

    get validaTodosc() {
        //var salida =  this.validaId && this.validaFechaBaja && this.validaPrimerApellido && this.validaFechaRegistro && this.validaSegundoApellido && this.validaFechaActualizacion && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdhospital;
        //var salida =  this.validaId && this.validaPrimerApellido && this.validaSegundoApellido && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdhospital;
        var salida =  this.validaPrimerApellido && this.validaSegundoApellido && this.validaNombre && this.validaCorreoElectronico && this.doctorProcurador.idhospital !==null ;
        if (salida != this.validaciones){
          setTimeout(() => {
            this.validacionesChange.emit(salida);
            this.validaciones=salida;
            return salida;
          });
        }
        return this.validaciones;
    }

    obtenerDoctorProcuradores(lista, objeto) {
        objeto.lista_doctorProcuradores = lista;
        if (lista && lista.length > 0) {
            objeto.doctorProcurador.from(lista[0]);
            objeto.evtDoctorProcuradorSeleccionado(objeto.doctorProcurador);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_doctorProcurador(doctorProcurador, objeto) {
        objeto.doctorProcurador = doctorProcurador;
        objeto.doctorProcuradorChange.emit(objeto.doctorProcurador);
        objeto.configuarCombosObjetos();
        objeto.doctorProcuradorLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteDoctorProcuradorWord(){
        return ! (this.doctorProcuradorActualizar && this.doctorProcuradorLazy && this.globalesService.preporteWord(this,"doctorProcurador"));
    }
    get datosReporteDoctorProcuradorExcel(){
        return ! (this.doctorProcuradorActualizar && this.doctorProcuradorLazy && this.globalesService.preporteExcel(this,"doctorProcurador"));
    }
    get datosReporteDoctorProcuradorPdf(){
        return ! (this.doctorProcuradorActualizar && this.doctorProcuradorLazy && this.globalesService.preportePdf(this,"doctorProcurador"));
    }
    reporteDoctorProcuradorExcel(){
        var nombre:string = "DoctorProcurador.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "doctorProcurador": this.doctorProcurador};
        parametros["plantilla"]="DoctorProcurador.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDoctorProcuradorWord(){
        var nombre:string = "DoctorProcurador.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "doctorProcurador": this.doctorProcurador};
        parametros["plantilla"]="DoctorProcurador.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDoctorProcuradorPdf(){
        var nombre:string = "DoctorProcurador.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "doctorProcurador": this.doctorProcurador};
        parametros["plantilla"]="DoctorProcurador.docx";
        parametros["salida"]="DoctorProcurador.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = this.doctorProcuradorCancelar = false;
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true;
        //this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorCancelar = true;
    }
    buscarDoctorProcuradorFront() {
        this.accionesBuscar();
        var vdoctorProcurador: DoctorProcurador = new DoctorProcurador();
        vdoctorProcurador.from(this.doctorProcurador);
        vdoctorProcurador.status = 1;
        this.configuracionDoctorProcurador = new ConfigurarDoctorProcurador();
        this.configuracionDoctorProcurador.permisosTabla = { "tabla": "doctorProcurador", "permiso": 8 };
        this.configuracionDoctorProcurador.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionDoctorProcurador.doctorProcuradorConsulta = vdoctorProcurador;
        this.permisosacciones();
        $("#buscarDoctorProcurador_"+this.nombre).modal();
    }
    buscarDoctorProcuradorBack(doctorProcurador: DoctorProcurador) {
        this.doctorProcurador_service.getDoctorProcuradoresByDto(new DoctorProcurador(doctorProcurador), this.eventoSrvDoctorProcuradorBuscar, this);
    }
    eventoSrvDoctorProcuradorBuscar(lista, objeto) {
        objeto.lista_doctorProcuradores = lista;
        if (lista && lista.length > 0) {
            objeto.doctorProcurador = lista[0];
            objeto.doctorProcuradorLazy =false;
            objeto.doctorProcurador_service.lazyDoctorProcurador(objeto.doctorProcurador, objeto.evn_lazy_doctorProcurador, objeto);
        }
    }
    guardarDoctorProcuradorFront() {
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
                    this.guardarDoctorProcuradorBack(this.doctorProcurador);
                    this.accionesBuscar();    // ********************************************************************************* maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });

        // this.accion = 5;  // ********************************************************************************************** maquina
        // this.guardarDoctorProcuradorBack(this.doctorProcurador);
        // this.accionesBuscar();    // ********************************************************************************* maquina
        // this.permisosacciones();
    }
    guardarDoctorProcuradorBack(doctorProcurador: DoctorProcurador) {
        if (doctorProcurador.usuarioUltMov == null ) doctorProcurador.usuarioUltMov = this.globalesService.dameUsuario();
        if (doctorProcurador.status == null || doctorProcurador.status == "" ) doctorProcurador.status = 1;
        doctorProcurador.fechaRegistro = new Date();
        this.doctorProcurador_service.guardarDoctorProcurador(new DoctorProcurador(doctorProcurador), this.eventoSrvDoctorProcuradorGuardar, this);
    }
    eventoSrvDoctorProcuradorGuardar(doctorProcurador, obj) {
        obj.doctorProcurador = doctorProcurador;
        bootbox.alert("Datos guardados con éxito");
        var aux: DoctorProcurador = new DoctorProcurador();
        aux.from(doctorProcurador);
        obj.doctorProcuradorChange.emit(aux);
        obj.doctorProcuradorTablaChange.emit(aux);
        obj.doctorProcuradorLazy =false;
        obj.doctorProcurador_service.lazyDoctorProcurador(new DoctorProcurador(obj.doctorProcurador), obj.evn_lazy_doctorProcurador, obj);
        obj.accionesActualizar();

    }
    actualizarDoctorProcuradorFront() {
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
                    this.actualizarDoctorProcuradorBack(this.doctorProcurador);
                    this.accionesBuscar(); // ***************************************************************************** maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });

        // this.accion = 3;         // ************************************************************************************* maquina
        // this.actualizarDoctorProcuradorBack(this.doctorProcurador);
        // this.accionesBuscar(); // ***************************************************************************** maquina
        // this.permisosacciones();
    }
    actualizarDoctorProcuradorBack(doctorProcurador: DoctorProcurador) {
        doctorProcurador.usuarioUltMov = this.globalesService.dameUsuario();
        doctorProcurador.fechaActualizacion = new Date();
        this.doctorProcurador_service.actualizarDoctorProcurador(new DoctorProcurador(doctorProcurador), this.eventoSrvDoctorProcuradorActualizar, this);
    }
    eventoSrvDoctorProcuradorActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: DoctorProcurador = new DoctorProcurador();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.doctorProcuradorLazy = false;
            obj.doctorProcurador_service.lazyDoctorProcurador(new DoctorProcurador(obj.doctorProcurador), obj.evn_lazy_doctorProcurador, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.doctorProcurador);
            obj.doctorProcuradorChange.emit(aux);
            obj.doctorProcuradorTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarDoctorProcuradorFront() {
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
                    this.eliminarDoctorProcuradorBack(this.doctorProcurador);
                    this.permisosacciones();
                    this.accionesBuscar();
                }
            }.bind(this)
        });

        // this.accion = 4;
        // this.eliminarDoctorProcuradorBack(this.doctorProcurador);
        // this.permisosacciones();
        // this.accionesBuscar();
    }
    eliminarDoctorProcuradorBack(doctorProcurador: DoctorProcurador) {
        doctorProcurador.usuarioUltMov = this.globalesService.dameUsuario();
        doctorProcurador.fechaBaja = new Date();
        doctorProcurador.status = 0;
        this.doctorProcurador_service.actualizarDoctorProcurador(new DoctorProcurador(doctorProcurador), this.eventoSrvDoctorProcuradorEliminar, this);
        //this.doctorProcurador_service.eliminarDoctorProcurador(doctorProcurador, this.eventoSrvDoctorProcuradorEliminar, this);
    }
    eventoSrvDoctorProcuradorEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.doctorProcurador = new DoctorProcurador();
            obj.doctorProcuradorChange.emit(obj.doctorProcurador);
            obj.doctorProcuradorTablaChange.emit(obj.doctorProcurador);
            obj.limpiarCampos() ;
        }
    }
    cancelarDoctorProcuradorFront() {
        this.accion = 6;
        this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true;
        this.permisosacciones();
    }
    nuevoDoctorProcuradorFront() {
        this.accion = 2;
        this.doctorProcuradorSeleccion = this.doctorProcuradorAgregar = this.doctorProcuradorBuscar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
        this.doctorProcuradorGuardar = this.doctorProcuradorCancelar = true;
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
        //         this.doctorProcuradorSeleccion = this.doctorProcuradorAgregar = this.doctorProcuradorBuscar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
        //         this.doctorProcuradorGuardar = this.doctorProcuradorCancelar = true;
        //     }.bind(this)
        // });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovDoctorProcuradorUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDoctorProcuradorUsuario, this);
        this.lista_idhospitalDoctorProcuradorHospital = [];
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalDoctorProcuradorHospital, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorSeleccion = this.doctorProcuradorGuardar = false;
        this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = this.doctorProcuradorCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtDoctorProcuradorSeleccionado(doctorProcurador) {
        this.doctorProcurador = new DoctorProcurador();
        this.doctorProcurador.from(doctorProcurador);
        this.doctorProcuradorLazy =false;
        this.doctorProcurador_service.lazyDoctorProcurador(this.doctorProcurador, this.evn_lazy_doctorProcurador, this);
        this.accion = 7;
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorSeleccion = this.doctorProcuradorGuardar = false;
        this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = this.doctorProcuradorCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDoctorProcurador_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.doctorProcuradorSeleccion = this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;        // ******************** maquina
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.doctorProcuradorBuscar) this.doctorProcuradorBuscar = this.globalesService.pbuscar(this,"doctorProcurador");
        if (this.doctorProcuradorActualizar) this.doctorProcuradorActualizar = (this.globalesService.pacutalizar(this,"doctorProcurador") && this.globalesService.pbuscar(this,"doctorProcurador"));
        if (this.doctorProcuradorEliminar) this.doctorProcuradorEliminar = (this.globalesService.peliminar(this,"doctorProcurador") && this.globalesService.pbuscar(this,"doctorProcurador"));
        if (this.doctorProcuradorAgregar) this.doctorProcuradorAgregar = this.globalesService.pagregar(this,"doctorProcurador");
    }
    permisosaccionesInicio() {
        this.doctorProcuradorSeleccion = this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false; // *************************** maquina
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.doctorProcurador = new DoctorProcurador();

        this.usuarioUltMovDoctorProcuradorUsuarioEleccion= new Usuario();
        this.idhospitalDoctorProcuradorHospitalEleccion= new Hospital();

        this.doctorProcuradorChange.emit(this.doctorProcurador);
        this.doctorProcuradorSeleccion = this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false; // *************************** maquina
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
