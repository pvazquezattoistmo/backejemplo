import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { DoctorSolicitante } from '../shared/doctor-solicitante';
import { DoctorSolicitanteService } from '../shared/doctor-solicitante.service';
import { ConfigurarDoctorSolicitante } from '../shared/configurar-doctor-solicitante'
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
import { CatalogoCargo } from '../../catalogo-cargos/shared/catalogo-cargo';
import { CatalogoCargoService } from '../../catalogo-cargos/shared/catalogo-cargo.service';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-doctor-solicitante-crud',
    templateUrl: './doctor-solicitante-crud.component.html',
    styleUrls: ['./doctor-solicitante-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                DoctorSolicitanteService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                CatalogoCargoService
	]
})
export class DoctorSolicitanteCrudComponent implements OnInit {
    public opcionDoctorSolicitante  =0;
    public validosDoctorSolicitante :any ={
        id:false,
        fechaBaja:false,
        idhospital:false,
        primerApellido:false,
        fechaRegistro:false,
        segundoApellido:false,
        fechaActualizacion:false,
        telefono:false,
        nombre:false,
        correoElectronico:false,
        status:false,
        usuarioUltMov:false,
        idcargo:false,

    };

    @Input() ocultarConjuntosDoctorSolicitante: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "doctorSolicitante", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public doctorSolicitanteLazy: boolean =false;
    public doctorSolicitantePermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public doctorSolicitante: DoctorSolicitante = new DoctorSolicitante();
    @Output() doctorSolicitanteChange = new EventEmitter<DoctorSolicitante>();
    @Output() doctorSolicitanteTablaChange = new EventEmitter<DoctorSolicitante>();
    public lista_doctorSolicitantes: DoctorSolicitante[]=[];
    public configuracionDoctorSolicitante: ConfigurarDoctorSolicitante;
    public doctorSolicitanteBuscar: boolean
    public doctorSolicitanteSeleccion: boolean
    public doctorSolicitanteAgregar: boolean
    public doctorSolicitanteActualizar: boolean
    public doctorSolicitanteEliminar: boolean;
    public doctorSolicitanteGuardar: boolean;
    public doctorSolicitanteCancelar: boolean;
    public usuarioUltMovDoctorSolicitanteUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovDoctorSolicitanteUsuario: Usuario[]=[];
    public usuarioUltMovDoctorSolicitanteUsuarioEditar:boolean =false;
    public idcargoDoctorSolicitanteCatalogoCargoEleccion: CatalogoCargo = new CatalogoCargo();
    public lista_idcargoDoctorSolicitanteCatalogoCargo: CatalogoCargo[]=[];
    public idcargoDoctorSolicitanteCatalogoCargoEditar:boolean =false;
    public idhospitalDoctorSolicitanteHospitalEleccion: Hospital = new Hospital();
    public lista_idhospitalDoctorSolicitanteHospital: Hospital[]=[];
    public idhospitalDoctorSolicitanteHospitalEditar:boolean =false;

    get doctorSolicitanteOcultarConjuntos(){
        if (this.ocultarConjuntosDoctorSolicitante)
           return true
        return  !this.doctorSolicitanteActualizar;
    }

    ngOnChanges(changes) {
        if (changes.doctorSolicitante && changes.doctorSolicitante.currentValue == null &&
            this.doctorSolicitante == null) this.doctorSolicitante = new DoctorSolicitante();
        else {
            var aux :DoctorSolicitante = new DoctorSolicitante();
            if (this.doctorSolicitante)
                aux.from(this.doctorSolicitante)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteSeleccion = this.doctorSolicitanteGuardar = false;
                this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = this.doctorSolicitanteCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.doctorSolicitanteSeleccion = this.doctorSolicitanteAgregar = this.doctorSolicitanteBuscar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
                    this.doctorSolicitanteGuardar = this.doctorSolicitanteCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "doctorSolicitante",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "catalogoCargo",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.doctorSolicitantePermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public doctorSolicitante_service: DoctorSolicitanteService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,
                public catalogoCargo_service: CatalogoCargoService,

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
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
        this.configuracionDoctorSolicitante = new ConfigurarDoctorSolicitante();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDoctorSolicitanteUsuario, this);
        this.catalogoCargo_service.getCatalogoCargosActivos(this.evtGetIdcargoDoctorSolicitanteCatalogoCargo, this);
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalDoctorSolicitanteHospital, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.doctorSolicitantePermisos =true;
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoAtributo&& permisos.doctorSolicitante.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.doctorSolicitante.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoConjunto && permisos.doctorSolicitante.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.doctorSolicitante.PermisoConjunto ;
        }
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoTabla && permisos.doctorSolicitante.PermisoTabla.length>0){
            obj.permisosTabla = permisos.doctorSolicitante.PermisoTabla[0] ;
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

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovDoctorSolicitanteUsuario(lista_usuarioUltMovDoctorSolicitanteUsuario, obj) {
        obj.lista_usuarioUltMovDoctorSolicitanteUsuario = lista_usuarioUltMovDoctorSolicitanteUsuario;
        obj.actualizar_UsuarioUltMovDoctorSolicitanteUsuario();
    }
    evtGetIdcargoDoctorSolicitanteCatalogoCargo(lista_idcargoDoctorSolicitanteCatalogoCargo, obj) {
        obj.lista_idcargoDoctorSolicitanteCatalogoCargo = lista_idcargoDoctorSolicitanteCatalogoCargo;
        obj.actualizar_IdcargoDoctorSolicitanteCatalogoCargo();
    }
    evtGetIdhospitalDoctorSolicitanteHospital(lista_idhospitalDoctorSolicitanteHospital, obj) {
        obj.lista_idhospitalDoctorSolicitanteHospital = lista_idhospitalDoctorSolicitanteHospital;
        obj.actualizar_IdhospitalDoctorSolicitanteHospital();
    }


    actualizar_UsuarioUltMovDoctorSolicitanteUsuario() {
        if ( this.usuarioUltMovDoctorSolicitanteUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovDoctorSolicitanteUsuario)
                if (eleme.id == this.usuarioUltMovDoctorSolicitanteUsuarioEleccion.id){
                    this.usuarioUltMovDoctorSolicitanteUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdcargoDoctorSolicitanteCatalogoCargo() {
        if ( this.idcargoDoctorSolicitanteCatalogoCargoEleccion)
            for (let eleme of this.lista_idcargoDoctorSolicitanteCatalogoCargo)
                if (eleme.id == this.idcargoDoctorSolicitanteCatalogoCargoEleccion.id){
                    this.idcargoDoctorSolicitanteCatalogoCargoEleccion = eleme;
                    break;
                }
    }

    actualizar_IdhospitalDoctorSolicitanteHospital() {
        if ( this.idhospitalDoctorSolicitanteHospitalEleccion)
            for (let eleme of this.lista_idhospitalDoctorSolicitanteHospital)
                if (eleme.id == this.idhospitalDoctorSolicitanteHospitalEleccion.id){
                    this.idhospitalDoctorSolicitanteHospitalEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosDoctorSolicitante['id'];
    }
    get validaIds() {
        return this.validosDoctorSolicitante['id'];
    }
    get validaFechaBaja() {
        return this.validosDoctorSolicitante['fechaBaja'];
    }
    get validaIdhospital() {
        return this.validosDoctorSolicitante['idhospital'];
    }
    get validaPrimerApellido() {
        return this.validosDoctorSolicitante['primerApellido'];
    }
    get validaFechaRegistro() {
        return this.validosDoctorSolicitante['fechaRegistro'];
    }
    get validaSegundoApellido() {
        return this.validosDoctorSolicitante['segundoApellido'];
    }
    get validaFechaActualizacion() {
        return this.validosDoctorSolicitante['fechaActualizacion'];
    }
    get validaTelefono() {
        return this.validosDoctorSolicitante['telefono'];
    }
    get validaNombre() {
        return this.validosDoctorSolicitante['nombre'];
    }
    get validaCorreoElectronico() {
        return this.validosDoctorSolicitante['correoElectronico'];
    }
    get validaStatus() {
        return this.validosDoctorSolicitante['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosDoctorSolicitante['usuarioUltMov'];
    }
    get validaIdcargo() {
        return this.validosDoctorSolicitante['idcargo'];
    }

    get validaTodosc() {

        //var salida =  this.validaId && this.validaFechaBaja && this.validaIdhospital && this.validaPrimerApellido && this.validaFechaRegistro && this.validaSegundoApellido && this.validaFechaActualizacion && this.validaTelefono && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdcargo;
        //var salida =  this.validaId  && this.validaIdhospital && this.validaPrimerApellido  && this.validaSegundoApellido  && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdcargo;
        var salida =  this.validaNombre && this.validaPrimerApellido  && this.validaSegundoApellido  && this.validaCorreoElectronico && this.validaTelefono && this.validaIdcargo;
        if (salida != this.validaciones){
          setTimeout(() => {
            this.validacionesChange.emit(salida);
            this.validaciones=salida;
            return salida;

          });
        }
       return this.validaciones;
    }

    obtenerDoctorSolicitantes(lista, objeto) {
        objeto.lista_doctorSolicitantes = lista;
        if (lista && lista.length > 0) {
            objeto.doctorSolicitante.from(lista[0]);
            objeto.evtDoctorSolicitanteSeleccionado(objeto.doctorSolicitante);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_doctorSolicitante(doctorSolicitante, objeto) {
        objeto.doctorSolicitante = doctorSolicitante;
        objeto.doctorSolicitanteChange.emit(objeto.doctorSolicitante);
        objeto.configuarCombosObjetos();
        objeto.doctorSolicitanteLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteDoctorSolicitanteWord(){
        return ! (this.doctorSolicitanteActualizar && this.doctorSolicitanteLazy && this.globalesService.preporteWord(this,"doctorSolicitante"));
    }
    get datosReporteDoctorSolicitanteExcel(){
        return ! (this.doctorSolicitanteActualizar && this.doctorSolicitanteLazy && this.globalesService.preporteExcel(this,"doctorSolicitante"));
    }
    get datosReporteDoctorSolicitantePdf(){
        return ! (this.doctorSolicitanteActualizar && this.doctorSolicitanteLazy && this.globalesService.preportePdf(this,"doctorSolicitante"));
    }
    reporteDoctorSolicitanteExcel(){
        var nombre:string = "DoctorSolicitante.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "doctorSolicitante": this.doctorSolicitante};
        parametros["plantilla"]="DoctorSolicitante.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDoctorSolicitanteWord(){
        var nombre:string = "DoctorSolicitante.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "doctorSolicitante": this.doctorSolicitante};
        parametros["plantilla"]="DoctorSolicitante.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDoctorSolicitantePdf(){
        var nombre:string = "DoctorSolicitante.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "doctorSolicitante": this.doctorSolicitante};
        parametros["plantilla"]="DoctorSolicitante.docx";
        parametros["salida"]="DoctorSolicitante.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = this.doctorSolicitanteCancelar = false;
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true;
        //this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteCancelar = true;
    }
    buscarDoctorSolicitanteFront() {
        this.accionesBuscar();
        var vdoctorSolicitante: DoctorSolicitante = new DoctorSolicitante();
        vdoctorSolicitante.from(this.doctorSolicitante);
        vdoctorSolicitante.status = 1;
        this.configuracionDoctorSolicitante = new ConfigurarDoctorSolicitante();
        this.configuracionDoctorSolicitante.permisosTabla = { "tabla": "doctorSolicitante", "permiso": 8 };
        this.configuracionDoctorSolicitante.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionDoctorSolicitante.doctorSolicitanteConsulta = vdoctorSolicitante;
        this.permisosacciones();
        $("#buscarDoctorSolicitante_"+this.nombre).modal();
    }
    buscarDoctorSolicitanteBack(doctorSolicitante: DoctorSolicitante) {
        this.doctorSolicitante_service.getDoctorSolicitantesByDto(new DoctorSolicitante(doctorSolicitante), this.eventoSrvDoctorSolicitanteBuscar, this);
    }
    eventoSrvDoctorSolicitanteBuscar(lista, objeto) {
        objeto.lista_doctorSolicitantes = lista;
        if (lista && lista.length > 0) {
            objeto.doctorSolicitante = lista[0];
            objeto.doctorSolicitanteLazy =false;
            objeto.doctorSolicitante_service.lazyDoctorSolicitante(objeto.doctorSolicitante, objeto.evn_lazy_doctorSolicitante, objeto);
        }
    }
    guardarDoctorSolicitanteFront() {
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
                    this.guardarDoctorSolicitanteBack(this.doctorSolicitante);
                    this.accionesBuscar();    // ********************************************************************************* maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });

        // this.accion = 5;  // ********************************************************************************************** maquina
        // this.guardarDoctorSolicitanteBack(this.doctorSolicitante);
        // this.accionesBuscar();    // ********************************************************************************* maquina
        // this.permisosacciones();
    }
    guardarDoctorSolicitanteBack(doctorSolicitante: DoctorSolicitante) {
        if (doctorSolicitante.usuarioUltMov == null ) doctorSolicitante.usuarioUltMov = this.globalesService.dameUsuario();
        if (doctorSolicitante.status == null || doctorSolicitante.status == "" ) doctorSolicitante.status = 1;
        doctorSolicitante.fechaRegistro = new Date();
        this.doctorSolicitante_service.guardarDoctorSolicitante(new DoctorSolicitante (doctorSolicitante), this.eventoSrvDoctorSolicitanteGuardar, this);
    }
    eventoSrvDoctorSolicitanteGuardar(doctorSolicitante, obj) {
        obj.doctorSolicitante = new DoctorSolicitante(doctorSolicitante);
        bootbox.alert("Datos guardados con éxito");
        var aux: DoctorSolicitante = new DoctorSolicitante();
        aux.from(doctorSolicitante);
        obj.doctorSolicitanteChange.emit(aux);
        obj.doctorSolicitanteTablaChange.emit(aux);
        obj.doctorSolicitanteLazy =false;
        obj.doctorSolicitante_service.lazyDoctorSolicitante(obj.doctorSolicitante, obj.evn_lazy_doctorSolicitante, obj);
        obj.accionesActualizar();

    }
    actualizarDoctorSolicitanteFront() {
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
                    this.actualizarDoctorSolicitanteBack(this.doctorSolicitante);
                    this.accionesBuscar(); // ***************************************************************************** maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });
        // this.accion = 3;         // ************************************************************************************* maquina
        // this.actualizarDoctorSolicitanteBack(this.doctorSolicitante);
        // this.accionesBuscar(); // ***************************************************************************** maquina
        // this.permisosacciones();
    }
    actualizarDoctorSolicitanteBack(doctorSolicitante: DoctorSolicitante) {
        doctorSolicitante.usuarioUltMov = this.globalesService.dameUsuario();
        doctorSolicitante.fechaActualizacion = new Date();
        this.doctorSolicitante_service.actualizarDoctorSolicitante(new DoctorSolicitante(doctorSolicitante), this.eventoSrvDoctorSolicitanteActualizar, this);
    }
    eventoSrvDoctorSolicitanteActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: DoctorSolicitante = new DoctorSolicitante(obj.doctorSolicitante);
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.doctorSolicitanteLazy = false;
            obj.doctorSolicitante_service.lazyDoctorSolicitante(aux, obj.evn_lazy_doctorSolicitante, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.doctorSolicitante);
            obj.doctorSolicitanteChange.emit(aux);
            obj.doctorSolicitanteTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarDoctorSolicitanteFront() {
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
                    this.eliminarDoctorSolicitanteBack(new DoctorSolicitante(this.doctorSolicitante));
                    this.permisosacciones();
                    this.accionesBuscar();
                }
            }.bind(this)
        });

        // this.accion = 4;
        // this.eliminarDoctorSolicitanteBack(this.doctorSolicitante);
        // this.permisosacciones();
        // this.accionesBuscar();
    }
    eliminarDoctorSolicitanteBack(doctorSolicitante: DoctorSolicitante) {
        doctorSolicitante.usuarioUltMov = this.globalesService.dameUsuario();
        doctorSolicitante.fechaBaja = new Date();
        doctorSolicitante.status = 0;
        this.doctorSolicitante_service.actualizarDoctorSolicitante(doctorSolicitante, this.eventoSrvDoctorSolicitanteEliminar, this);
        //this.doctorSolicitante_service.eliminarDoctorSolicitante(doctorSolicitante, this.eventoSrvDoctorSolicitanteEliminar, this);
    }
    eventoSrvDoctorSolicitanteEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.doctorSolicitante = new DoctorSolicitante();
            obj.doctorSolicitanteChange.emit(obj.doctorSolicitante);
            obj.doctorSolicitanteTablaChange.emit(obj.doctorSolicitante);
            obj.limpiarCampos() ;
        }
    }
    cancelarDoctorSolicitanteFront() {
        this.accion = 6;
        this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true;
        this.permisosacciones();
    }
    nuevoDoctorSolicitanteFront() {
        this.accion = 2;
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteAgregar = this.doctorSolicitanteBuscar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
        this.doctorSolicitanteGuardar = this.doctorSolicitanteCancelar = true;
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
        //         this.doctorSolicitanteSeleccion = this.doctorSolicitanteAgregar = this.doctorSolicitanteBuscar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
        //         this.doctorSolicitanteGuardar = this.doctorSolicitanteCancelar = true;
        //     }.bind(this)
        // });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovDoctorSolicitanteUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDoctorSolicitanteUsuario, this);
        this.lista_idcargoDoctorSolicitanteCatalogoCargo = [];
        this.catalogoCargo_service.getCatalogoCargosActivos(this.evtGetIdcargoDoctorSolicitanteCatalogoCargo, this);
        this.lista_idhospitalDoctorSolicitanteHospital = [];
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalDoctorSolicitanteHospital, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteSeleccion = this.doctorSolicitanteGuardar = false;
        this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = this.doctorSolicitanteCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtDoctorSolicitanteSeleccionado(doctorSolicitante) {
        this.doctorSolicitante = new DoctorSolicitante(doctorSolicitante);
        this.doctorSolicitante.from(doctorSolicitante);
        this.doctorSolicitanteLazy =false;
        this.doctorSolicitante_service.lazyDoctorSolicitante(this.doctorSolicitante, this.evn_lazy_doctorSolicitante, this);
        this.accion = 7;
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteSeleccion = this.doctorSolicitanteGuardar = false;
        this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = this.doctorSolicitanteCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDoctorSolicitante_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;        // ******************** maquina
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.doctorSolicitanteBuscar) this.doctorSolicitanteBuscar = this.globalesService.pbuscar(this,"doctorSolicitante");
        if (this.doctorSolicitanteActualizar) this.doctorSolicitanteActualizar = (this.globalesService.pacutalizar(this,"doctorSolicitante") && this.globalesService.pbuscar(this,"doctorSolicitante"));
        if (this.doctorSolicitanteEliminar) this.doctorSolicitanteEliminar = (this.globalesService.peliminar(this,"doctorSolicitante") && this.globalesService.pbuscar(this,"doctorSolicitante"));
        if (this.doctorSolicitanteAgregar) this.doctorSolicitanteAgregar = this.globalesService.pagregar(this,"doctorSolicitante");
    }
    permisosaccionesInicio() {
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false; // *************************** maquina
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.doctorSolicitante = new DoctorSolicitante();

        this.usuarioUltMovDoctorSolicitanteUsuarioEleccion= new Usuario();
        this.idcargoDoctorSolicitanteCatalogoCargoEleccion= new CatalogoCargo();
        this.idhospitalDoctorSolicitanteHospitalEleccion= new Hospital();

        this.doctorSolicitanteChange.emit(this.doctorSolicitante);
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false; // *************************** maquina
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
