import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { DatoProcuracionCorneal } from '../shared/dato-procuracion-corneal';
import { DatoProcuracionCornealService } from '../shared/dato-procuracion-corneal.service';
import { ConfigurarDatoProcuracionCorneal } from '../shared/configurar-dato-procuracion-corneal'
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
import { SolicitudEvaluacionCorneal } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal';
import { SolicitudEvaluacionCornealService } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service';
import { CausaMuerteService } from '../../causa-muertes/shared/causa-muerte.service';
import { CausaMuerte } from '../../causa-muertes/shared/causa-muerte';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-dato-procuracion-corneal-crud',
    templateUrl: './dato-procuracion-corneal-crud.component.html',
    styleUrls: ['./dato-procuracion-corneal-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                DatoProcuracionCornealService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                SolicitudEvaluacionCornealService,
                CausaMuerteService
	]
})
export class DatoProcuracionCornealCrudComponent implements OnInit {
    public opcionDatoProcuracionCorneal  =0;
    public validosDatoProcuracionCorneal :any ={
        id:false,
        horaFin:false,
        fechaBaja:false,
        tipo:false,
        fechaInicio:false,
        idcenatra:false,
        fechaRegistro:false,
        fechaActualizacion:false,
        fechaFin:false,
        horaInicio:false,
        status:false,
        usuarioUltMov:false,
        idsolicitudEvaluacionCorneal:false,

    };

    @Input() ocultarConjuntosDatoProcuracionCorneal: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "datoProcuracionCorneal", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public datoProcuracionCornealLazy: boolean =false;
    public datoProcuracionCornealPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public datoProcuracionCorneal: DatoProcuracionCorneal = new DatoProcuracionCorneal();
    @Output() datoProcuracionCornealChange = new EventEmitter<DatoProcuracionCorneal>();
    @Output() datoProcuracionCornealTablaChange = new EventEmitter<DatoProcuracionCorneal>();
    public lista_datoProcuracionCorneales: DatoProcuracionCorneal[]=[];
    public configuracionDatoProcuracionCorneal: ConfigurarDatoProcuracionCorneal;
    public datoProcuracionCornealBuscar: boolean
    public datoProcuracionCornealSeleccion: boolean
    public datoProcuracionCornealAgregar: boolean
    public datoProcuracionCornealActualizar: boolean
    public datoProcuracionCornealEliminar: boolean;
    public datoProcuracionCornealGuardar: boolean;
    public datoProcuracionCornealCancelar: boolean;
    public usuarioUltMovDatoProcuracionCornealUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovDatoProcuracionCornealUsuario: Usuario[]=[];
    public usuarioUltMovDatoProcuracionCornealUsuarioEditar:boolean =false;
    public idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
    public lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal: SolicitudEvaluacionCorneal[]=[];
    public idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEditar:boolean =false;
    @Output() changeIdCenatra = new EventEmitter<string>();

    @Input() etiquetaGeneral;
    @Input() public minDate: Date;
    get datoProcuracionCornealOcultarConjuntos(){
        if (this.ocultarConjuntosDatoProcuracionCorneal)
           return true
        return  !this.datoProcuracionCornealActualizar;
    }

    ngOnChanges(changes) {
        if (changes.datoProcuracionCorneal && changes.datoProcuracionCorneal.currentValue == null &&
            this.datoProcuracionCorneal == null) this.datoProcuracionCorneal = new DatoProcuracionCorneal();
        else {
            var aux :DatoProcuracionCorneal = new DatoProcuracionCorneal();
            if (this.datoProcuracionCorneal)
                aux.from(this.datoProcuracionCorneal)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealGuardar = false;
                this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = this.datoProcuracionCornealCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealBuscar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
                    this.datoProcuracionCornealGuardar = this.datoProcuracionCornealCancelar = true;
            }
        }
    }
    evtChangeIdCenatra(cambio){
      this.changeIdCenatra.emit(cambio);
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "datoProcuracionCorneal",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "solicitudEvaluacionCorneal",
                                "causaMuerte",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.datoProcuracionCornealPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public datoProcuracionCorneal_service: DatoProcuracionCornealService,
                public usuario_service: UsuarioService,

                public usuarioBtc_service: UsuarioBtcService,

                public perfilRedIssste_service: PerfilRedIsssteService,


                public hospital_service: HospitalService,

                public entidadFederativa_service: EntidadFederativaService,

                public perfil_service: PerfilService,
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
        this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
        this.configuracionDatoProcuracionCorneal = new ConfigurarDatoProcuracionCorneal();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDatoProcuracionCornealUsuario, this);
        //this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(this.evtGetIdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.datoProcuracionCornealPermisos =true;
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoAtributo&& permisos.datoProcuracionCorneal.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.datoProcuracionCorneal.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoConjunto && permisos.datoProcuracionCorneal.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.datoProcuracionCorneal.PermisoConjunto ;
        }
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoTabla && permisos.datoProcuracionCorneal.PermisoTabla.length>0){
            obj.permisosTabla = permisos.datoProcuracionCorneal.PermisoTabla[0] ;
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
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoAtributo&& permisos.solicitudEvaluacionCorneal.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.solicitudEvaluacionCorneal.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.solicitudEvaluacionCorneal.PermisoAtributo) ;
        }
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoAtributo&& permisos.solicitudEvaluacionCorneal.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.solicitudEvaluacionCorneal.PermisoConjunto) ;
        }
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoTabla && permisos.solicitudEvaluacionCorneal.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.solicitudEvaluacionCorneal.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.solicitudEvaluacionCorneal.PermisoTabla[0] );
        }

        if (obj.configurarTablasConjuntos)
           obj.configurarTablasConjuntos();
    }
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************


    evtGetUsuarioUltMovDatoProcuracionCornealUsuario(lista_usuarioUltMovDatoProcuracionCornealUsuario, obj) {
        obj.lista_usuarioUltMovDatoProcuracionCornealUsuario = lista_usuarioUltMovDatoProcuracionCornealUsuario;
        obj.actualizar_UsuarioUltMovDatoProcuracionCornealUsuario();
    }
    evtGetIdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal(lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal, obj) {
        obj.lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal = lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal;
        obj.actualizar_IdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal();
    }


    actualizar_UsuarioUltMovDatoProcuracionCornealUsuario() {
        if ( this.usuarioUltMovDatoProcuracionCornealUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovDatoProcuracionCornealUsuario)
                if (eleme.id == this.usuarioUltMovDatoProcuracionCornealUsuarioEleccion.id){
                    this.usuarioUltMovDatoProcuracionCornealUsuarioEleccion = eleme;
                    break;
                }
    }
    actualizar_IdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal() {
        if ( this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion)
            for (let eleme of this.lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal)
                if (eleme.id == this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion.id){
                    this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosDatoProcuracionCorneal['id'];
    }
    get validaIds() {
        return this.validosDatoProcuracionCorneal['id'];
    }
    get validaHoraFin() {
        return this.validosDatoProcuracionCorneal['horaFin'];
    }
    get validaFechaBaja() {
        return this.validosDatoProcuracionCorneal['fechaBaja'];
    }
    get validaTipo() {
        return this.validosDatoProcuracionCorneal['tipo'];
    }
    get validaFechaInicio() {
        return this.validosDatoProcuracionCorneal['fechaInicio'];
    }
    get validaIdcenatra() {
        return this.validosDatoProcuracionCorneal['idcenatra'];
    }
    get validaFechaRegistro() {
        return this.validosDatoProcuracionCorneal['fechaRegistro'];
    }
    get validaFechaActualizacion() {
        return this.validosDatoProcuracionCorneal['fechaActualizacion'];
    }
    get validaFechaFin() {
        return this.validosDatoProcuracionCorneal['fechaFin'];
    }
    get validaHoraInicio() {
        return this.validosDatoProcuracionCorneal['horaInicio'];
    }
    get validaStatus() {
        return this.validosDatoProcuracionCorneal['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosDatoProcuracionCorneal['usuarioUltMov'];
    }
    get validaIdsolicitudEvaluacionCorneal() {
        return this.validosDatoProcuracionCorneal['idsolicitudEvaluacionCorneal'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaHoraFin && this.validaFechaBaja && this.validaTipo && this.validaFechaInicio && this.validaIdcenatra && this.validaFechaRegistro && this.validaFechaActualizacion && this.validaFechaFin && this.validaHoraInicio && this.validaStatus && this.validaUsuarioUltMov && this.validaIdsolicitudEvaluacionCorneal;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerDatoProcuracionCorneales(lista, objeto) {
        objeto.lista_datoProcuracionCorneales = lista;
        if (lista && lista.length > 0) {
            objeto.datoProcuracionCorneal.from(lista[0]);
            objeto.evtDatoProcuracionCornealSeleccionado(objeto.datoProcuracionCorneal);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_datoProcuracionCorneal(datoProcuracionCorneal, objeto) {
        objeto.datoProcuracionCorneal = datoProcuracionCorneal;
        objeto.datoProcuracionCornealChange.emit(objeto.datoProcuracionCorneal);
        objeto.configuarCombosObjetos();
        objeto.datoProcuracionCornealLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteDatoProcuracionCornealWord(){
        return ! (this.datoProcuracionCornealActualizar && this.datoProcuracionCornealLazy && this.globalesService.preporteWord(this,"datoProcuracionCorneal"));
    }
    get datosReporteDatoProcuracionCornealExcel(){
        return ! (this.datoProcuracionCornealActualizar && this.datoProcuracionCornealLazy && this.globalesService.preporteExcel(this,"datoProcuracionCorneal"));
    }
    get datosReporteDatoProcuracionCornealPdf(){
        return ! (this.datoProcuracionCornealActualizar && this.datoProcuracionCornealLazy && this.globalesService.preportePdf(this,"datoProcuracionCorneal"));
    }
    reporteDatoProcuracionCornealExcel(form: any){
        var nombre:string = "DatoProcuracionCorneal.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "datoProcuracionCorneal": this.datoProcuracionCorneal};
        parametros["plantilla"]="DatoProcuracionCorneal.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDatoProcuracionCornealWord(form: any){
        var nombre:string = "DatoProcuracionCorneal.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "datoProcuracionCorneal": this.datoProcuracionCorneal};
        parametros["plantilla"]="DatoProcuracionCorneal.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteDatoProcuracionCornealPdf(form: any){
        var nombre:string = "DatoProcuracionCorneal.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "datoProcuracionCorneal": this.datoProcuracionCorneal};
        parametros["plantilla"]="DatoProcuracionCorneal.docx";
        parametros["salida"]="DatoProcuracionCorneal.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealCancelar = true;
    }
    buscarDatoProcuracionCornealFront(form: any) {
        this.accionesBuscar();
        var vdatoProcuracionCorneal: DatoProcuracionCorneal = new DatoProcuracionCorneal();
        vdatoProcuracionCorneal.from(this.datoProcuracionCorneal);
        this.configuracionDatoProcuracionCorneal = new ConfigurarDatoProcuracionCorneal();
        this.configuracionDatoProcuracionCorneal.permisosTabla = { "tabla": "datoProcuracionCorneal", "permiso": 8 };
        this.configuracionDatoProcuracionCorneal.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta = vdatoProcuracionCorneal;
        this.permisosacciones();
        $("#buscarDatoProcuracionCorneal_"+this.nombre).modal();
    }
    buscarDatoProcuracionCornealBack(datoProcuracionCorneal: DatoProcuracionCorneal) {
        this.datoProcuracionCorneal_service.getDatoProcuracionCornealesByDto(datoProcuracionCorneal, this.eventoSrvDatoProcuracionCornealBuscar, this);
    }
    eventoSrvDatoProcuracionCornealBuscar(lista, objeto) {
        objeto.lista_datoProcuracionCorneales = lista;
        if (lista && lista.length > 0) {
            objeto.datoProcuracionCorneal = lista[0];
            objeto.datoProcuracionCornealLazy =false;
            objeto.datoProcuracionCorneal_service.lazyDatoProcuracionCorneal(objeto.datoProcuracionCorneal, objeto.evn_lazy_datoProcuracionCorneal, objeto);
        }
    }
    guardarDatoProcuracionCornealFront(form: any) {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarDatoProcuracionCornealBack(this.datoProcuracionCorneal);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarDatoProcuracionCornealBack(datoProcuracionCorneal: DatoProcuracionCorneal) {
        if (datoProcuracionCorneal.usuarioUltMov == null ) datoProcuracionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        if (datoProcuracionCorneal.status == null || datoProcuracionCorneal.status == "" ) datoProcuracionCorneal.status = 1;
        this.datoProcuracionCorneal_service.guardarDatoProcuracionCorneal(datoProcuracionCorneal, this.eventoSrvDatoProcuracionCornealGuardar, this);
    }
    eventoSrvDatoProcuracionCornealGuardar(datoProcuracionCorneal, obj) {
        obj.datoProcuracionCorneal = datoProcuracionCorneal;
        bootbox.alert("Datos guardados con éxito");
        var aux: DatoProcuracionCorneal = new DatoProcuracionCorneal();
        aux.from(datoProcuracionCorneal);
        obj.datoProcuracionCornealChange.emit(aux);
        obj.datoProcuracionCornealTablaChange.emit(aux);
        obj.datoProcuracionCornealLazy =false;
        obj.datoProcuracionCorneal_service.lazyDatoProcuracionCorneal(obj.datoProcuracionCorneal, obj.evn_lazy_datoProcuracionCorneal, obj);
        obj.accionesActualizar();

    }
    actualizarDatoProcuracionCornealFront(form: any) {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarDatoProcuracionCornealBack(this.datoProcuracionCorneal);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarDatoProcuracionCornealBack(datoProcuracionCorneal: DatoProcuracionCorneal) {
        datoProcuracionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        this.datoProcuracionCorneal_service.actualizarDatoProcuracionCorneal(datoProcuracionCorneal, this.eventoSrvDatoProcuracionCornealActualizar, this);
    }
    eventoSrvDatoProcuracionCornealActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: DatoProcuracionCorneal = new DatoProcuracionCorneal();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.datoProcuracionCornealLazy = false;
            obj.datoProcuracionCorneal_service.lazyDatoProcuracionCorneal(obj.datoProcuracionCorneal, obj.evn_lazy_datoProcuracionCorneal, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.datoProcuracionCorneal);
            obj.datoProcuracionCornealChange.emit(aux);
            obj.datoProcuracionCornealTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarDatoProcuracionCornealFront(form: any) {
        this.accion = 4;
        this.eliminarDatoProcuracionCornealBack(this.datoProcuracionCorneal);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarDatoProcuracionCornealBack(datoProcuracionCorneal: DatoProcuracionCorneal) {
        datoProcuracionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        this.datoProcuracionCorneal_service.eliminarDatoProcuracionCorneal(datoProcuracionCorneal, this.eventoSrvDatoProcuracionCornealEliminar, this);
    }
    eventoSrvDatoProcuracionCornealEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.datoProcuracionCorneal = new DatoProcuracionCorneal();
            obj.datoProcuracionCornealChange.emit(obj.datoProcuracionCorneal);
            obj.datoProcuracionCornealTablaChange.emit(obj.datoProcuracionCorneal);
            obj.limpiarCampos() ;
        }
    }
    cancelarDatoProcuracionCornealFront(form: any) {
        this.accion = 6;
        this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = true;
        this.permisosacciones();
    }
    nuevoDatoProcuracionCornealFront(form: any) {
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
                this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealBuscar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
                this.datoProcuracionCornealGuardar = this.datoProcuracionCornealCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovDatoProcuracionCornealUsuario = [];
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDatoProcuracionCornealUsuario, this);
        this.lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal = [];
        //this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(this.evtGetIdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal, this);
    }
    configurarTablasConjuntos(){
    }

    accionesActualizar(){
        this.accion = 7;
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealGuardar = false;
        this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = this.datoProcuracionCornealCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtDatoProcuracionCornealSeleccionado(datoProcuracionCorneal) {
        this.datoProcuracionCorneal = new DatoProcuracionCorneal();
        this.datoProcuracionCorneal.from(datoProcuracionCorneal);
        this.datoProcuracionCornealLazy =false;
        this.datoProcuracionCorneal_service.lazyDatoProcuracionCorneal(this.datoProcuracionCorneal, this.evn_lazy_datoProcuracionCorneal, this);
        this.accion = 7;
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealGuardar = false;
        this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = this.datoProcuracionCornealCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDatoProcuracionCorneal_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;        // ******************** maquina
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.datoProcuracionCornealBuscar) this.datoProcuracionCornealBuscar = this.globalesService.pbuscar(this,"datoProcuracionCorneal");
        if (this.datoProcuracionCornealActualizar) this.datoProcuracionCornealActualizar = (this.globalesService.pacutalizar(this,"datoProcuracionCorneal") && this.globalesService.pbuscar(this,"datoProcuracionCorneal"));
        if (this.datoProcuracionCornealEliminar) this.datoProcuracionCornealEliminar = (this.globalesService.peliminar(this,"datoProcuracionCorneal") && this.globalesService.pbuscar(this,"datoProcuracionCorneal"));
        if (this.datoProcuracionCornealAgregar) this.datoProcuracionCornealAgregar = this.globalesService.pagregar(this,"datoProcuracionCorneal");
    }
    permisosaccionesInicio() {
        this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false; // *************************** maquina
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.datoProcuracionCorneal = new DatoProcuracionCorneal();

        this.usuarioUltMovDatoProcuracionCornealUsuarioEleccion= new Usuario();
        this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion= new SolicitudEvaluacionCorneal();

        this.datoProcuracionCornealChange.emit(this.datoProcuracionCorneal);
        this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false; // *************************** maquina
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
