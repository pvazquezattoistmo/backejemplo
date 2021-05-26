import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { EquipoExtraccion } from '../shared/equipo-extraccion';
import { EquipoExtraccionService } from '../shared/equipo-extraccion.service';
import { ConfigurarEquipoExtraccion } from '../shared/configurar-equipo-extraccion'
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
import { RegistroExtraccion } from '../../registro-extracciones/shared/registro-extraccion';
import { RegistroExtraccionService } from '../../registro-extracciones/shared/registro-extraccion.service';
import { SolicitudEvaluacionCornealService } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service';
import { SolicitudEvaluacionCorneal } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal';
import { CausaMuerteService } from '../../causa-muertes/shared/causa-muerte.service';
import { CausaMuerte } from '../../causa-muertes/shared/causa-muerte';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-equipo-extraccion-crud',
    templateUrl: './equipo-extraccion-crud.component.html',
    styleUrls: ['./equipo-extraccion-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                EquipoExtraccionService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                RegistroExtraccionService,
                CausaMuerteService,
                SolicitudEvaluacionCornealService
	]
})
export class EquipoExtraccionCrudComponent implements OnInit {
    public opcionEquipoExtraccion  =0;
    public validosEquipoExtraccion :any ={
        id:false,
        fechaBaja:false,
        primerApellido:false,
        fechaRegistro:false,
        segundoApellido:false,
        fechaActualizacion:false,
        nombre:false,
        status:false,
        usuarioUltMov:false,
        idregistroExtraccion:false,

    };

    @Input() ocultarConjuntosEquipoExtraccion: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "equipoExtraccion", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public equipoExtraccionLazy: boolean =false;
    public equipoExtraccionPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public equipoExtraccion: EquipoExtraccion = new EquipoExtraccion();
    @Output() equipoExtraccionChange = new EventEmitter<EquipoExtraccion>();
    @Output() equipoExtraccionTablaChange = new EventEmitter<EquipoExtraccion>();
    public lista_equipoExtracciones: EquipoExtraccion[]=[];
    public configuracionEquipoExtraccion: ConfigurarEquipoExtraccion;
    public equipoExtraccionBuscar: boolean
    public equipoExtraccionSeleccion: boolean
    public equipoExtraccionAgregar: boolean
    public equipoExtraccionActualizar: boolean
    public equipoExtraccionEliminar: boolean;
    public equipoExtraccionGuardar: boolean;
    public equipoExtraccionCancelar: boolean;
    public usuarioUltMovEquipoExtraccionUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovEquipoExtraccionUsuario: Usuario[]=[];
    public usuarioUltMovEquipoExtraccionUsuarioEditar:boolean =false;
    public idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion: RegistroExtraccion = new RegistroExtraccion();
    public lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion: RegistroExtraccion[]=[];
    public idregistroExtraccionEquipoExtraccionRegistroExtraccionEditar:boolean =false;
    @Input() listaEquipoExtractor: EquipoExtraccion[];

    get equipoExtraccionOcultarConjuntos(){
        if (this.ocultarConjuntosEquipoExtraccion)
           return true
        return  !this.equipoExtraccionActualizar;
    }

    ngOnChanges(changes) {
        if (changes.equipoExtraccion && changes.equipoExtraccion.currentValue == null &&
            this.equipoExtraccion == null) this.equipoExtraccion = new EquipoExtraccion();
        else {
            var aux :EquipoExtraccion = new EquipoExtraccion();
            if (this.equipoExtraccion)
                aux.from(this.equipoExtraccion)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionSeleccion = this.equipoExtraccionGuardar = false;
                this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = this.equipoExtraccionCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.equipoExtraccionSeleccion = this.equipoExtraccionAgregar = this.equipoExtraccionBuscar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
                    this.equipoExtraccionGuardar = this.equipoExtraccionCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "equipoExtraccion",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "registroExtraccion",
                                "solicitudEvaluacionCorneal",
                                "causaMuerte",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.equipoExtraccionPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public equipoExtraccion_service: EquipoExtraccionService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,

//                public perfilBtc_service: PerfilBtcService,

                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,
                public registroExtraccion_service: RegistroExtraccionService,

                public solicitudEvaluacionCorneal_service: SolicitudEvaluacionCornealService,

                public causaMuerte_service: CausaMuerteService,

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
        this.equipoExtraccionSeleccion = this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
        this.configuracionEquipoExtraccion = new ConfigurarEquipoExtraccion();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEquipoExtraccionUsuario, this);
        this.registroExtraccion_service.getRegistroExtraccionesActivos(this.evtGetIdregistroExtraccionEquipoExtraccionRegistroExtraccion, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.equipoExtraccionPermisos =true;
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoAtributo&& permisos.equipoExtraccion.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.equipoExtraccion.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoConjunto && permisos.equipoExtraccion.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.equipoExtraccion.PermisoConjunto ;
        }
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoTabla && permisos.equipoExtraccion.PermisoTabla.length>0){
            obj.permisosTabla = permisos.equipoExtraccion.PermisoTabla[0] ;
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
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoAtributo&& permisos.registroExtraccion.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.registroExtraccion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.registroExtraccion.PermisoAtributo) ;
        }
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoAtributo&& permisos.registroExtraccion.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.registroExtraccion.PermisoConjunto) ;
        }
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoTabla && permisos.registroExtraccion.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.registroExtraccion.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.registroExtraccion.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovEquipoExtraccionUsuario(lista_usuarioUltMovEquipoExtraccionUsuario, obj) {
        obj.lista_usuarioUltMovEquipoExtraccionUsuario = lista_usuarioUltMovEquipoExtraccionUsuario;
        obj.actualizar_UsuarioUltMovEquipoExtraccionUsuario();
    }
    evtGetIdregistroExtraccionEquipoExtraccionRegistroExtraccion(lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion, obj) {
        obj.lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion = lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion;
        obj.actualizar_IdregistroExtraccionEquipoExtraccionRegistroExtraccion();
    }


    actualizar_UsuarioUltMovEquipoExtraccionUsuario() {
        if ( this.usuarioUltMovEquipoExtraccionUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovEquipoExtraccionUsuario)
                if (eleme.id == this.usuarioUltMovEquipoExtraccionUsuarioEleccion.id){
                    this.usuarioUltMovEquipoExtraccionUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdregistroExtraccionEquipoExtraccionRegistroExtraccion() {
        if ( this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion)
            for (let eleme of this.lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion)
                if (eleme.id == this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion.id){
                    this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosEquipoExtraccion['id'];
    }
    get validaIds() {
        return this.validosEquipoExtraccion['id'];
    }
    get validaFechaBaja() {
        return this.validosEquipoExtraccion['fechaBaja'];
    }
    get validaPrimerApellido() {
        return this.validosEquipoExtraccion['primerApellido'];
    }
    get validaFechaRegistro() {
        return this.validosEquipoExtraccion['fechaRegistro'];
    }
    get validaSegundoApellido() {
        return this.validosEquipoExtraccion['segundoApellido'];
    }
    get validaFechaActualizacion() {
        return this.validosEquipoExtraccion['fechaActualizacion'];
    }
    get validaNombre() {
        return this.validosEquipoExtraccion['nombre'];
    }
    get validaStatus() {
        return this.validosEquipoExtraccion['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosEquipoExtraccion['usuarioUltMov'];
    }
    get validaIdregistroExtraccion() {
        return this.validosEquipoExtraccion['idregistroExtraccion'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaFechaBaja && this.validaPrimerApellido && this.validaFechaRegistro && this.validaSegundoApellido && this.validaFechaActualizacion && this.validaNombre && this.validaStatus && this.validaUsuarioUltMov && this.validaIdregistroExtraccion;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerEquipoExtracciones(lista, objeto) {
        objeto.lista_equipoExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.equipoExtraccion.from(lista[0]);
            objeto.evtEquipoExtraccionSeleccionado(objeto.equipoExtraccion);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_equipoExtraccion(equipoExtraccion, objeto) {
        objeto.equipoExtraccion = equipoExtraccion;
        objeto.equipoExtraccionChange.emit(objeto.equipoExtraccion);
        objeto.configuarCombosObjetos();
        objeto.equipoExtraccionLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteEquipoExtraccionWord(){
        return ! (this.equipoExtraccionActualizar && this.equipoExtraccionLazy && this.globalesService.preporteWord(this,"equipoExtraccion"));
    }
    get datosReporteEquipoExtraccionExcel(){
        return ! (this.equipoExtraccionActualizar && this.equipoExtraccionLazy && this.globalesService.preporteExcel(this,"equipoExtraccion"));
    }
    get datosReporteEquipoExtraccionPdf(){
        return ! (this.equipoExtraccionActualizar && this.equipoExtraccionLazy && this.globalesService.preportePdf(this,"equipoExtraccion"));
    }
    reporteEquipoExtraccionExcel(form: any){
        var nombre:string = "EquipoExtraccion.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "equipoExtraccion": this.equipoExtraccion};
        parametros["plantilla"]="EquipoExtraccion.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteEquipoExtraccionWord(form: any){
        var nombre:string = "EquipoExtraccion.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "equipoExtraccion": this.equipoExtraccion};
        parametros["plantilla"]="EquipoExtraccion.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteEquipoExtraccionPdf(form: any){
        var nombre:string = "EquipoExtraccion.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "equipoExtraccion": this.equipoExtraccion};
        parametros["plantilla"]="EquipoExtraccion.docx";
        parametros["salida"]="EquipoExtraccion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionCancelar = true;
    }
    buscarEquipoExtraccionFront(form: any) {
        this.accionesBuscar();
        var vequipoExtraccion: EquipoExtraccion = new EquipoExtraccion();
        vequipoExtraccion.from(this.equipoExtraccion);
        this.configuracionEquipoExtraccion = new ConfigurarEquipoExtraccion();
        this.configuracionEquipoExtraccion.permisosTabla = { "tabla": "equipoExtraccion", "permiso": 8 };
        this.configuracionEquipoExtraccion.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionEquipoExtraccion.equipoExtraccionConsulta = vequipoExtraccion;
        this.permisosacciones();
        $("#buscarEquipoExtraccion_"+this.nombre).modal();
    }
    buscarEquipoExtraccionBack(equipoExtraccion: EquipoExtraccion) {
        this.equipoExtraccion_service.getEquipoExtraccionesByDto(equipoExtraccion, this.eventoSrvEquipoExtraccionBuscar, this);
    }
    eventoSrvEquipoExtraccionBuscar(lista, objeto) {
        objeto.lista_equipoExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.equipoExtraccion = lista[0];
            objeto.equipoExtraccionLazy =false;
            objeto.equipoExtraccion_service.lazyEquipoExtraccion(objeto.equipoExtraccion, objeto.evn_lazy_equipoExtraccion, objeto);
        }
    }
    guardarEquipoExtraccionFront(form: any) {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarEquipoExtraccionBack(this.equipoExtraccion);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarEquipoExtraccionBack(equipoExtraccion: EquipoExtraccion) {
        if (equipoExtraccion.usuarioUltMov == null ) equipoExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        if (equipoExtraccion.status == null || equipoExtraccion.status == "" ) equipoExtraccion.status = 1;
        this.equipoExtraccion_service.guardarEquipoExtraccion(equipoExtraccion, this.eventoSrvEquipoExtraccionGuardar, this);
    }
    eventoSrvEquipoExtraccionGuardar(equipoExtraccion, obj) {
        obj.equipoExtraccion = equipoExtraccion;
        bootbox.alert("Datos guardados con éxito");
        var aux: EquipoExtraccion = new EquipoExtraccion();
        aux.from(equipoExtraccion);
        obj.equipoExtraccionChange.emit(aux);
        obj.equipoExtraccionTablaChange.emit(aux);
        obj.equipoExtraccionLazy =false;
        obj.equipoExtraccion_service.lazyEquipoExtraccion(obj.equipoExtraccion, obj.evn_lazy_equipoExtraccion, obj);
        obj.accionesActualizar();

    }
    actualizarEquipoExtraccionFront(form: any) {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarEquipoExtraccionBack(this.equipoExtraccion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarEquipoExtraccionBack(equipoExtraccion: EquipoExtraccion) {
        equipoExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        this.equipoExtraccion_service.actualizarEquipoExtraccion(equipoExtraccion, this.eventoSrvEquipoExtraccionActualizar, this);
    }
    eventoSrvEquipoExtraccionActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: EquipoExtraccion = new EquipoExtraccion();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.equipoExtraccionLazy = false;
            obj.equipoExtraccion_service.lazyEquipoExtraccion(obj.equipoExtraccion, obj.evn_lazy_equipoExtraccion, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.equipoExtraccion);
            obj.equipoExtraccionChange.emit(aux);
            obj.equipoExtraccionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarEquipoExtraccionFront(form: any) {
        this.accion = 4;
        this.eliminarEquipoExtraccionBack(this.equipoExtraccion);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarEquipoExtraccionBack(equipoExtraccion: EquipoExtraccion) {
        equipoExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        this.equipoExtraccion_service.eliminarEquipoExtraccion(equipoExtraccion, this.eventoSrvEquipoExtraccionEliminar, this);
    }
    eventoSrvEquipoExtraccionEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.equipoExtraccion = new EquipoExtraccion();
            obj.equipoExtraccionChange.emit(obj.equipoExtraccion);
            obj.equipoExtraccionTablaChange.emit(obj.equipoExtraccion);
            obj.limpiarCampos() ;
        }
    }
    cancelarEquipoExtraccionFront(form: any) {
        this.accion = 6;
        this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = true;
        this.permisosacciones();
    }
    nuevoEquipoExtraccionFront(form: any) {
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
                this.equipoExtraccionSeleccion = this.equipoExtraccionAgregar = this.equipoExtraccionBuscar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
                this.equipoExtraccionGuardar = this.equipoExtraccionCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovEquipoExtraccionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEquipoExtraccionUsuario, this);
        this.lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion = [];
        this.registroExtraccion_service.getRegistroExtraccionesActivos(this.evtGetIdregistroExtraccionEquipoExtraccionRegistroExtraccion, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionSeleccion = this.equipoExtraccionGuardar = false;
        this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = this.equipoExtraccionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtEquipoExtraccionSeleccionado(equipoExtraccion) {
        this.equipoExtraccion = new EquipoExtraccion();
        this.equipoExtraccion.from(equipoExtraccion);
        this.equipoExtraccionLazy =false;
        this.equipoExtraccion_service.lazyEquipoExtraccion(this.equipoExtraccion, this.evn_lazy_equipoExtraccion, this);
        this.accion = 7;
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionSeleccion = this.equipoExtraccionGuardar = false;
        this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = this.equipoExtraccionCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarEquipoExtraccion_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.equipoExtraccionSeleccion = this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;        // ******************** maquina
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.equipoExtraccionBuscar) this.equipoExtraccionBuscar = this.globalesService.pbuscar(this,"equipoExtraccion");
        if (this.equipoExtraccionActualizar) this.equipoExtraccionActualizar = (this.globalesService.pacutalizar(this,"equipoExtraccion") && this.globalesService.pbuscar(this,"equipoExtraccion"));
        if (this.equipoExtraccionEliminar) this.equipoExtraccionEliminar = (this.globalesService.peliminar(this,"equipoExtraccion") && this.globalesService.pbuscar(this,"equipoExtraccion"));
        if (this.equipoExtraccionAgregar) this.equipoExtraccionAgregar = this.globalesService.pagregar(this,"equipoExtraccion");
    }
    permisosaccionesInicio() {
        this.equipoExtraccionSeleccion = this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false; // *************************** maquina
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.equipoExtraccion = new EquipoExtraccion();

        this.usuarioUltMovEquipoExtraccionUsuarioEleccion= new Usuario();
        this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion= new RegistroExtraccion();

        this.equipoExtraccionChange.emit(this.equipoExtraccion);
        this.equipoExtraccionSeleccion = this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false; // *************************** maquina
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }

    addEquipoExtractor() {
      this.equipoExtraccion.nombre  = this.equipoExtraccion.nombre ? (this.equipoExtraccion.nombre as string).trim() : null;
      this.equipoExtraccion.primerApellido = this.equipoExtraccion.primerApellido ? (this.equipoExtraccion.primerApellido as string).trim() : null;
      this.equipoExtraccion.segundoApellido = this.equipoExtraccion.segundoApellido ? (this.equipoExtraccion.segundoApellido as string).trim() : null;

      if ( (!this.equipoExtraccion.nombre || this.equipoExtraccion.nombre.length === 0) && (!this.equipoExtraccion.primerApellido || this.equipoExtraccion.primerApellido.length === 0)) {
          bootbox.alert("El nombre y el primer apellido son requeridos");
          return;
      }

      if (!this.equipoExtraccion.nombre || this.equipoExtraccion.nombre.length === 0) {
        bootbox.alert("El nombre es requerido");
        return;
      }

      if (!(this.equipoExtraccion.nombre as string).match(/^[a-zA-ZñÑ ]*$/) ) {
        bootbox.alert("El nombre solo permite letras");
        return;
      }

      if (!this.equipoExtraccion.primerApellido || this.equipoExtraccion.primerApellido.length === 0) {
        bootbox.alert("El primer apellido es requerido");
        return;
      }

      if (!(this.equipoExtraccion.primerApellido as string).match(/^[a-zA-ZñÑ ]*$/) ) {
        bootbox.alert("El primer apellido solo permite letras");
        return;
      }

      if (this.equipoExtraccion.segundoApellido && !(this.equipoExtraccion.primerApellido as string).match(/^[a-zA-ZÑn ]*$/)) {
        bootbox.alert("El segundo apellido solo permite letras");
        return;
      }

      if(this.equipoExtraccion.nombre && this.equipoExtraccion.primerApellido){
        if (this.listaEquipoExtractor.length < 3) {
          this.listaEquipoExtractor.push(this.equipoExtraccion);
          this.equipoExtraccion = new EquipoExtraccion();
        } else {
          bootbox.alert("Solo se permite 3 registros.");
        }
      } else {
        bootbox.alert("El nombre y el primer apellido son requeridos");
      }
    }

    public removeEquipoExtractorHandler({ dataItem }) {
      this.listaEquipoExtractor.splice(
        this.listaEquipoExtractor.indexOf(dataItem),
        1
      );
    }
}
