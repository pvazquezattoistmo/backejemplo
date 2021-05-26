import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output  } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import {CoreService} from '../../shared/core.service';
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
import { FileService } from '../../shared/file.service'
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';
import { ConfigurarItem } from '../shared/configurar-item'
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
import { ItemItem } from '../shared/item-item';
import { ItemPerfil } from '../../itemes/shared/item-perfil';
import { ConfigurarPerfil } from '../../perfiles/shared/configurar-perfil';

declare var $:any;
declare var bootbox:any;
@Component({
    selector: 'app-item-crud',
    templateUrl: './item-crud.component.html',
    styleUrls: ['./item-crud.component.css'],
    providers: [GlobalesService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                FileService,
                ItemService,
                UsuarioService,
                EntidadFederativaService,
                PerfilRedIsssteService,
//                PerfilBtcService,
                HospitalService,
                UsuarioBtcService,
                PerfilService,
                ItemService
	]
})
export class ItemCrudComponent implements OnInit {
    public opcionItem  =0;
    public validosItem :any ={
        id:false,
        principal:false,
        ruta:false,
        nombre:false,
        status:false,
        usuarioUltMov:false,

    };

    @Input() ocultarConjuntosItem: boolean = false;
    @Input() nombre: string= "";
    public permisosTabla={ "tabla": "item", "permiso": 0, "etiqueta":"" };
    public permisosAtributos=[];
    public permisosConjuntos=[];
  //  public perfil: Perfil;
    public accion = 0;
    usuariologueado;
    public itemLazy: boolean =false;
    public itemPermisos: boolean =false;
    @Input() public validaciones: boolean = false;
    @Output() validacionesChange = new EventEmitter<boolean>();
    public perfil: Perfil;
    @Input() public item: Item = new Item();
    @Output() itemChange = new EventEmitter<Item>();
    @Output() itemTablaChange = new EventEmitter<Item>();
    public lista_itemes: Item[]=[];
    public configuracionItem: ConfigurarItem;
    public itemBuscar: boolean
    public itemSeleccion: boolean
    public itemAgregar: boolean
    public itemActualizar: boolean
    public itemEliminar: boolean;
    public itemGuardar: boolean;
    public itemCancelar: boolean;
    public usuarioUltMovItemUsuarioEleccion: Usuario = new Usuario();
    public lista_usuarioUltMovItemUsuario: Usuario[]=[];
    public usuarioUltMovItemUsuarioEditar:boolean =false;
    public itemsmItemItemEleccion: Item = new Item();
    public itemsmItemItemN: Item[]=[];
    public lista_itemsmItemItem: Item[]=[];
    public configuracionItemsmItemItem: ConfigurarItem;
    public perfilesItemPerfilEleccion: Perfil = new Perfil();
    public perfilesItemPerfilN: Perfil[]=[];
    public lista_perfilesItemPerfil: Perfil[]=[];
    public configuracionPerfilesItemPerfil: ConfigurarPerfil;

    get itemOcultarConjuntos(){
        if (this.ocultarConjuntosItem)
           return true
        return  !this.itemActualizar;
    }

    ngOnChanges(changes) {
        if (changes.item && changes.item.currentValue == null &&
            this.item == null) this.item = new Item();
        else {
            var aux :Item = new Item();
            if (this.item)
                aux.from(this.item)
            if (aux.isOk && aux.isOk() ) {

                this.accion = 7;
                this.itemBuscar = this.itemAgregar = this.itemSeleccion = this.itemGuardar = false;
                this.itemActualizar = this.itemEliminar = this.itemCancelar = true;
                this.permisosacciones();
                var thiss : any;
                thiss= this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                }else{
                    this.accion = 2;
                    this.itemSeleccion = this.itemAgregar = this.itemBuscar = this.itemActualizar = this.itemEliminar = false;
                    this.itemGuardar = this.itemCancelar = true;
            }
        }
    }
    obtenerPermisos(){
      var id_expe =-1;
      var tablas= [
                    "item",
                                "usuario",
                                "usuarioBtc",
                                "perfilRedIssste",
                                "perfilBtc",
                                "hospital",
                                "entidadFederativa",
                                "perfil",
                                "item",

                   ];
      var parametros:any ={
          "id_usu": this.usuariologueado.id,
          "tablas":tablas,
          "id_exp": id_expe
      };
      this.itemPermisos=false;
      this.coreService.permisos(parametros,this.evtCorePermisos,this);
    }

    constructor(
                public globalesService: GlobalesService,
                public zone: NgZone,public fileservice: FileService,
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public coreService: CoreService,
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                public item_service: ItemService,
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
        this.itemSeleccion = this.itemCancelar = this.itemGuardar = this.itemBuscar = this.itemAgregar = this.itemActualizar = this.itemEliminar = false;
        this.configuracionItem = new ConfigurarItem();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovItemUsuario, this);
        this.configuracionItemsmItemItem = new ConfigurarItem();
        this.item_service.getItemes(this.evtGetItemsmItemItem, this);
        this.configuracionPerfilesItemPerfil = new ConfigurarPerfil();
        this.perfil_service.getPerfiles(this.evtGetPerfilesItemPerfil, this);

        this.limpiarCampos();
    }


//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evtCorePermisos(permisos,obj ){
        obj.itemPermisos =true;
        if (permisos && permisos.item && permisos.item.PermisoAtributo&& permisos.item.PermisoAtributo.length>0){
            obj.permisosAtributos = permisos.item.PermisoAtributo ;
        } else{
            obj.usuariologueado=undefined;
        }
        if (permisos && permisos.item && permisos.item.PermisoConjunto && permisos.item.PermisoConjunto.length>0){
            obj.permisosConjuntos = permisos.item.PermisoConjunto ;
        }
        if (permisos && permisos.item && permisos.item.PermisoTabla && permisos.item.PermisoTabla.length>0){
            obj.permisosTabla = permisos.item.PermisoTabla[0] ;
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo&& permisos.perfil.PermisoAtributo.length>0){
           //obj.configuracion$1= permisos.perfil.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.perfil.PermisoAtributo) ;
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo&& permisos.perfil.PermisoConjunto.length>0){
            obj.permisosConjuntos.push(permisos.perfil.PermisoConjunto) ;
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoTabla && permisos.perfil.PermisoTabla.length>0){
           //obj.configuracion$1= permisos.perfil.PermisoTabla[0] ;
           // obj.permisosTabla.push(permisos.perfil.PermisoTabla[0] );
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

    configurarListaItemsmItemItem() {
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosItem = Object.assign([],this.configuracionItemsmItemItem.permisosAtributos);
        var tablaItem = Object.assign({},this.configuracionItemsmItemItem.permisosTabla);
        this.configuracionItemsmItemItem = new ConfigurarItem();
        this.configuracionItemsmItemItem.permisosAtributos = atributosItem ;
        this.configuracionItemsmItemItem.permisosTabla =tablaItem;
        this.configuracionItemsmItemItem.permisosTabla.permiso= this.configuracionItemsmItemItem.permisosTabla.permiso & 247;
        this.configuracionItemsmItemItem.titulo = "Agregar "+this.globalesService.cetiqueta(this,"item","itemsmItemItem");
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    }
    configurarListaItemsmItemItemPos() {
        this.configuracionItemsmItemItem.rutaLista = this.configuracionItemsmItemItem.crudServiceBaseUrl + "/getItemsm";
        this.configuracionItemsmItemItem.rutaAgregar = this.configuracionItemsmItemItem.crudServiceBaseUrl + "/addItemsm";
        this.configuracionItemsmItemItem.rutaEliminar = this.configuracionItemsmItemItem.crudServiceBaseUrl + "/removeItemsm";
        var vitem: Item = new Item();
        vitem.from(this.itemsmItemItemEleccion);
        this.configuracionItemsmItemItem.itemConsulta = vitem.toDto();
        this.configuracionItemsmItemItem.tipocampoAgEl = "ItemItem";
        this.configuracionItemsmItemItem.campoAgEl = new ItemItem();
        this.configuracionItemsmItemItem.campoAgEl.item = vitem.toDto();
    }
    configurarListaPerfilesItemPerfil() {
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosPerfil = Object.assign([],this.configuracionPerfilesItemPerfil.permisosAtributos);
        var tablaPerfil = Object.assign({},this.configuracionPerfilesItemPerfil.permisosTabla);
        this.configuracionPerfilesItemPerfil = new ConfigurarPerfil();
        this.configuracionPerfilesItemPerfil.permisosAtributos = atributosPerfil ;
        this.configuracionPerfilesItemPerfil.permisosTabla =tablaPerfil;
        this.configuracionPerfilesItemPerfil.permisosTabla.permiso= this.configuracionPerfilesItemPerfil.permisosTabla.permiso & 247;
        this.configuracionPerfilesItemPerfil.titulo = "Agregar "+this.globalesService.cetiqueta(this,"item","perfilesItemPerfil");
//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    }
    configurarListaPerfilesItemPerfilPos() {
        this.configuracionPerfilesItemPerfil.rutaLista = this.configuracionPerfilesItemPerfil.crudServiceBaseUrl + "/getPerfiles";
        this.configuracionPerfilesItemPerfil.rutaAgregar = this.configuracionPerfilesItemPerfil.crudServiceBaseUrl + "/addPerfiles";
        this.configuracionPerfilesItemPerfil.rutaEliminar = this.configuracionPerfilesItemPerfil.crudServiceBaseUrl + "/removePerfiles";
        var vperfil: Perfil = new Perfil();
        vperfil.from(this.perfilesItemPerfilEleccion);
        this.configuracionPerfilesItemPerfil.perfilConsulta = vperfil.toDto();
        this.configuracionPerfilesItemPerfil.tipocampoAgEl = "ItemPerfil";
        this.configuracionPerfilesItemPerfil.campoAgEl = new ItemPerfil();
        this.configuracionPerfilesItemPerfil.campoAgEl.perfil = vperfil.toDto();
    }

    evtGetUsuarioUltMovItemUsuario(lista_usuarioUltMovItemUsuario, obj) {
        obj.lista_usuarioUltMovItemUsuario = lista_usuarioUltMovItemUsuario;
        obj.actualizar_UsuarioUltMovItemUsuario();
    }
    evtGetItemsmItemItem(lista_itemsmItemItem, obj) {
        obj.lista_itemsmItemItem = lista_itemsmItemItem;
    }
    evtGetPerfilesItemPerfil(lista_perfilesItemPerfil, obj) {
        obj.lista_perfilesItemPerfil = lista_perfilesItemPerfil;
    }


    actualizar_UsuarioUltMovItemUsuario() {
        if ( this.usuarioUltMovItemUsuarioEleccion)
            for (let eleme of this.lista_usuarioUltMovItemUsuario)
                if (eleme.id == this.usuarioUltMovItemUsuarioEleccion.id){
                    this.usuarioUltMovItemUsuarioEleccion = eleme;
                    break;
                }
    }

    ngDoCheck() {

    }
    agregarItemsmItemItem() {
        var itemItem: ItemItem = new ItemItem();
        itemItem.item = this.item;
        itemItem.item = this.itemsmItemItemEleccion;
        this.item_service.addItemsm(itemItem, this.evtAgregarItemsmItemItem, this);
    }
    evtAgregarItemsmItemItem(respuesta, obj) {
        if (respuesta) {
            obj.configurarListaItemsmItemItem();
            obj.configurarListaItemsmItemItemPos();
            bootbox.alert("Item agregada con �xito");
        }
    }
    agregarPerfilesItemPerfil() {
        var itemPerfil: ItemPerfil = new ItemPerfil();
        itemPerfil.item = this.item;
        itemPerfil.perfil = this.perfilesItemPerfilEleccion;
        this.item_service.addPerfiles(itemPerfil, this.evtAgregarPerfilesItemPerfil, this);
    }
    evtAgregarPerfilesItemPerfil(respuesta, obj) {
        if (respuesta) {
            obj.configurarListaPerfilesItemPerfil();
            obj.configurarListaPerfilesItemPerfilPos();
            bootbox.alert("Perfil agregada con �xito");
        }
    }


    validaAcciones(vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    }

    get validaId() {
        return this.validosItem['id'];
    }
    get validaIds() {
        return this.validosItem['id'];
    }
    get validaPrincipal() {
        return this.validosItem['principal'];
    }
    get validaRuta() {
        return this.validosItem['ruta'];
    }
    get validaNombre() {
        return this.validosItem['nombre'];
    }
    get validaStatus() {
        return this.validosItem['status'];
    }
    get validaUsuarioUltMov() {
        return this.validosItem['usuarioUltMov'];
    }

    get validaTodosc() {
        var salida =  this.validaId && this.validaPrincipal && this.validaRuta && this.validaNombre && this.validaStatus && this.validaUsuarioUltMov;
        if (salida != this.validaciones)
            this.validacionesChange.emit(salida);
        return salida;
    }

    obtenerItemes(lista, objeto) {
        objeto.lista_itemes = lista;
        if (lista && lista.length > 0) {
            objeto.item.from(lista[0]);
            objeto.evtItemSeleccionado(objeto.item);
            if(objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    }
    evn_lazy_item(item, objeto) {
        objeto.item = item;
        objeto.itemChange.emit(objeto.item);
        objeto.configuarCombosObjetos();
        objeto.itemLazy =true;
    }
    /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
    get datosReporteItemWord(){
        return ! (this.itemActualizar && this.itemLazy && this.globalesService.preporteWord(this,"item"));
    }
    get datosReporteItemExcel(){
        return ! (this.itemActualizar && this.itemLazy && this.globalesService.preporteExcel(this,"item"));
    }
    get datosReporteItemPdf(){
        return ! (this.itemActualizar && this.itemLazy && this.globalesService.preportePdf(this,"item"));
    }
    reporteItemExcel(){
        var nombre:string = "Item.xlsx"
        var path:string = "file/reporteExcel"
        var parametros ={};
        parametros["entradas"] = { "item": this.item};
        parametros["plantilla"]="Item.xlsx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteItemWord(){
        var nombre:string = "Item.docx"
        var path:string = "file/reporteWord"
        var parametros ={};
        parametros["entradas"] = { "item": this.item};
        parametros["plantilla"]="Item.docx";
        parametros["salida"]=nombre;
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    reporteItemPdf(){
        var nombre:string = "Item.docx"
        var path:string = "file/reportePdf"
        var parametros ={};
        parametros["entradas"] = { "item": this.item};
        parametros["plantilla"]="Item.docx";
        parametros["salida"]="Item.pdf";
        this.fileservice.downloadFile(parametros["plantilla"],parametros["salida"],path,parametros);
    }
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */

    accionesBuscar() {
        this.accion = 1;
        this.itemGuardar = this.itemActualizar = this.itemEliminar = false;
        this.itemBuscar = this.itemAgregar = this.itemCancelar = true;
    }
    buscarItemFront() {
        this.accionesBuscar();
        var vitem: Item = new Item();
        vitem.from(this.item);
        this.configuracionItem = new ConfigurarItem();
        this.configuracionItem.permisosTabla = { "tabla": "item", "permiso": 8 };
        this.configuracionItem.titulo = "Buscar "+this.permisosTabla.etiqueta;
        this.configuracionItem.itemConsulta = vitem;
        this.permisosacciones();
        $("#buscarItem_"+this.nombre).modal();
    }
    buscarItemBack(item: Item) {
        this.item_service.getItemesByDto(item, this.eventoSrvItemBuscar, this);
    }
    eventoSrvItemBuscar(lista, objeto) {
        objeto.lista_itemes = lista;
        if (lista && lista.length > 0) {
            objeto.item = lista[0];
            objeto.itemLazy =false;
            objeto.item_service.lazyItem(objeto.item, objeto.evn_lazy_item, objeto);
        }
    }
    guardarItemFront() {
        this.accion = 5;  // ********************************************************************************************** maquina
        this.guardarItemBack(this.item);
        this.accionesBuscar();    // ********************************************************************************* maquina
        this.permisosacciones();
    }
    guardarItemBack(item: Item) {
        if (item.usuarioUltMov == null ) item.usuarioUltMov = this.globalesService.dameUsuario();
        if (item.status == null || item.status == "" ) item.status = 1;
        this.item_service.guardarItem(item, this.eventoSrvItemGuardar, this);
    }
    eventoSrvItemGuardar(item, obj) {
        obj.item = item;
        bootbox.alert("Datos guardados con éxito");
        var aux: Item = new Item();
        aux.from(item);
        obj.itemChange.emit(aux);
        obj.itemTablaChange.emit(aux);
        obj.itemLazy =false;
        obj.item_service.lazyItem(obj.item, obj.evn_lazy_item, obj);
        obj.accionesActualizar();

    }
    actualizarItemFront() {
        this.accion = 3;         // ************************************************************************************* maquina
        this.actualizarItemBack(this.item);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    }
    actualizarItemBack(item: Item) {
        item.usuarioUltMov = this.globalesService.dameUsuario();
        this.item_service.actualizarItem(item, this.eventoSrvItemActualizar, this);
    }
    eventoSrvItemActualizar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux: Item = new Item();
// *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.itemLazy = false;
            obj.item_service.lazyItem(obj.item, obj.evn_lazy_item, obj);
// *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.item);
            obj.itemChange.emit(aux);
            obj.itemTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    }
    eliminarItemFront() {
        this.accion = 4;
        this.eliminarItemBack(this.item);
        this.permisosacciones();
        this.accionesBuscar();
    }
    eliminarItemBack(item: Item) {
        item.usuarioUltMov = this.globalesService.dameUsuario();
        this.item_service.eliminarItem(item, this.eventoSrvItemEliminar, this);
    }
    eventoSrvItemEliminar(retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.item = new Item();
            obj.itemChange.emit(obj.item);
            obj.itemTablaChange.emit(obj.item);
            obj.limpiarCampos() ;
        }
    }
    cancelarItemFront() {
        this.accion = 6;
        this.itemCancelar = this.itemGuardar = this.itemActualizar = this.itemEliminar = false;
        this.itemBuscar = this.itemAgregar = true;
        this.permisosacciones();
    }
    nuevoItemFront() {
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
                this.itemSeleccion = this.itemAgregar = this.itemBuscar = this.itemActualizar = this.itemEliminar = false;
                this.itemGuardar = this.itemCancelar = true;
            }.bind(this)
        });
    }

    configuarCombosObjetos() {
        this.lista_usuarioUltMovItemUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovItemUsuario, this);
    }
    configurarTablasConjuntos(){
        this.configurarListaItemsmItemItem();
        this.configurarListaItemsmItemItemPos();
        this.configurarListaPerfilesItemPerfil();
        this.configurarListaPerfilesItemPerfilPos();
    }

    accionesActualizar(){
        this.accion = 7;
        this.itemBuscar = this.itemAgregar = this.itemSeleccion = this.itemGuardar = false;
        this.itemActualizar = this.itemEliminar = this.itemCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    }
    evtItemSeleccionado(item) {
        this.item = new Item();
        this.item.from(item);
        this.itemLazy =false;
        this.item_service.lazyItem(this.item, this.evn_lazy_item, this);
        this.accion = 7;
        this.itemBuscar = this.itemAgregar = this.itemSeleccion = this.itemGuardar = false;
        this.itemActualizar = this.itemEliminar = this.itemCancelar = true;
        this.permisosacciones();
        var thiss : any;
        thiss= this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarItem_"+this.nombre).modal("hide");
    }
    ngOnInit() {
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.itemSeleccion = this.itemCancelar = this.itemGuardar = this.itemActualizar = this.itemEliminar = false;        // ******************** maquina
        this.itemBuscar = this.itemAgregar = true;                            // ************************************************************************************* maquina
        this.permisosacciones();
    }

    permisosacciones() {
        if (this.itemBuscar) this.itemBuscar = this.globalesService.pbuscar(this,"item");
        if (this.itemActualizar) this.itemActualizar = (this.globalesService.pacutalizar(this,"item") && this.globalesService.pbuscar(this,"item"));
        if (this.itemEliminar) this.itemEliminar = (this.globalesService.peliminar(this,"item") && this.globalesService.pbuscar(this,"item"));
        if (this.itemAgregar) this.itemAgregar = this.globalesService.pagregar(this,"item");
    }
    permisosaccionesInicio() {
        this.itemSeleccion = this.itemCancelar = this.itemGuardar = this.itemActualizar = this.itemEliminar = false; // *************************** maquina
        this.itemBuscar = this.itemAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 0;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
    limpiarCampos() {
        this.item = new Item();

        this.usuarioUltMovItemUsuarioEleccion= new Usuario();
        this.itemsmItemItemEleccion = new Item();
        this.perfilesItemPerfilEleccion = new Perfil();

        this.itemChange.emit(this.item);
        this.itemSeleccion = this.itemCancelar = this.itemGuardar = this.itemActualizar = this.itemEliminar = false; // *************************** maquina
        this.itemBuscar = this.itemAgregar = true;                           // ************************************************************************************* maquina
        this.accion = 6;                                                // *********************************************************************************************************** maquina
        this.permisosacciones();
    }
}
