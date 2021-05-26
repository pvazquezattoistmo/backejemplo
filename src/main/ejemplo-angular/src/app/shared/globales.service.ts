import { ComponenteIdentificadorComponent } from './../core/componentes-personalizados/componente-identificador/componente-identificador.component';
import { Hospital } from './../hospitales/shared/hospital';
import { UsuarioBtc } from './../usuario-btcs/shared/usuario-btc';
import { Injectable } from '@angular/core';
import { Util } from './util';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { TokenProvider } from './token-provider';
import { URLProvider } from './url-provider';
import { Item } from '../itemes/shared/item';
import { LocalStorageService } from 'ng2-webstorage';
import { Usuario } from '../usuarios/shared/usuario';
import { NgxSpinnerService } from 'ngx-spinner';
declare var CryptoJS: any;
declare var $: any;
declare var kendo: any;
var self: any;
declare function evtKeypressTexto(event);
var data = [{ text: 'Inactivo', value: '0' }, { text: 'Activo', value: '1' }];

var data2 = [{ text: 'Masculino', value: 'M' }, { text: 'Femenino', value: 'F' }];
var data3 = [{ text: 'Masculino', value: 1 }, { text: 'Femenino', value: 0 }];

@Injectable()
export class GlobalesService {
  public menuActual: Item;
  public vdata = data;
  public vdata2 = data2;
  public vdata3 = data3;
  private usuarioRegistrado; //: Usuario;
  public util: Util;
  getMenuActual() {
    return this.menuActual;
  }
  setMenuActual(menu) {
    this.menuActual = menu;
  }
  damePermiososAtributos(tabla) {
    var permisos = {};
    permisos['alumno'] = [
      { tabla: 'alumno', atributo: 'id', permiso: 3, etiqueta: 'Identificador' },
      { tabla: 'alumno', atributo: 'nombre', permiso: 3, etiqueta: 'Nombre Completo' },
      { tabla: 'alumno', atributo: 'telefono', permiso: 3, etiqueta: 'Teléfono' }
    ];
    permisos['materia'] = [
      { tabla: 'materia', atributo: 'id', permiso: 3, etiqueta: 'Identificador' },
      { tabla: 'materia', atributo: 'nombre', permiso: 3, etiqueta: 'Nombre ' },
      { tabla: 'materia', atributo: 'clave', permiso: 3, etiqueta: 'Clave' }
    ];
    return permisos[tabla];
  }
  damePermisosTabla(tabla) {
    var permisos = {};
    permisos['alumno'] = { tabla: 'alumno', permiso: 15 };
    permisos['materia'] = { tabla: 'materia', permiso: 15 };
    return permisos[tabla];
  }
  constructor(public http: Http, public localStorageService: LocalStorageService, public  spinner: NgxSpinnerService) {
    let tokenProvider = new TokenProvider();
    let urlProvider = new URLProvider();
    this.usuarioRegistrado = null;
    this.util = new Util(http, tokenProvider, urlProvider, spinner);
    self = this;
  }
  // acciones para logueo y cierre de session : Usuario

  registrar(usuario) {
    this.usuarioRegistrado = usuario;
  }
  cerrarSesion() {
    this.localStorageService.clear('usuario');
    this.localStorageService.clear('inicio');
    this.localStorageService.clear('mp');
    this.usuarioRegistrado = null;
  }
  //inicia solicitud-tejido-corneal
  registraIdSolicitudTejido(id){
    this.localStorageService.store("idSolicitudTejido", id);
  }
  dameIdSolicitudTejido(){
    return this.localStorageService.retrieve("idSolicitudTejido");
  }
  limpiaIdSolicitudTejido(){
    return this.localStorageService.clear("idSolicitudTejido");
  }
  //inicia registro extraccion
  registraIdRegistroExtracion(id){
    this.localStorageService.store("idRegistroExtracion", id);
  }
  dameIdRegistroExtracion(){
    return this.localStorageService.retrieve("idRegistroExtracion");
  }
  limpiaIdRegistroExtracion(){
    return this.localStorageService.clear("idRegistroExtracion");
  }
  //finaliza solicitud-tejido-corneal
  registraIdRecepcion(id){
    this.localStorageService.store("idRecepcion", id);
  }
  dameIdRecepcion(){
    return this.localStorageService.retrieve("idRecepcion");
  }
  limpiaIdRecepcion(){
    return this.localStorageService.clear("idRecepcion");
  }
  //finaliza recepción
  registraIdEvaluacion(id){
    this.localStorageService.store("idEvaluacion", id);
  }
  dameIdEvaluacion(){
    return this.localStorageService.retrieve("idEvaluacion");
  }
  limpiaIdEvaluacion(){
    return this.localStorageService.clear("idEvaluacion");
  }
  //finaliza evaluacion
  registraIdAlmacen(id){
    this.localStorageService.store("idAlmacen", id);
  }
  dameIdAlmacen(){
    return this.localStorageService.retrieve("idAlmacen");
  }
  limpiaIdAlmacen(){
    return this.localStorageService.clear("idAlmacen");
  }
  //finaliza Almacen



  registraIdSolicitudEvaluacion(id) {
    this.localStorageService.store("idSolicitudEvaluacion", id);
  }
  dameIdSolicitudEvaluacion() {
    return this.localStorageService.retrieve("idSolicitudEvaluacion");
   }
   limpiaIdSolicitudEvaluacion() {
    return this.localStorageService.clear("idSolicitudEvaluacion");
   }


   registraIdSolicitudTejidoC(id) {
    this.localStorageService.store("idSolicitud", id);
  }
  dameIdSolicitudTejidoC() {
    return this.localStorageService.retrieve("idSolicitud");
   }
   limpiaIdSolicitudTejidoC() {
    return this.localStorageService.clear("idSolicitud");
   }

   registraIdSolicitudEvaluacionTejido(id) {
    this.localStorageService.store("idSolicitud", id);
  }
  dameIdSolicitudEvaluacionTejido() {
    return this.localStorageService.retrieve("idSolicitud");
   }
   limpiaIdSolicitudEvaluacionTejido() {
    return this.localStorageService.clear("idSolicitud");
   }





  dameUsuario() {
    let usuarioencriptado = this.localStorageService.retrieve('usuario');
    if (usuarioencriptado != null) {
      var bytes = CryptoJS.AES.decrypt(usuarioencriptado.toString(), 'istmo 123');
      var usuario = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      this.registrar(usuario);
    }
    return this.usuarioRegistrado;
  }
  dameNombreUsuario() {
    let salida = "";
    if (this.usuarioRegistrado != null) {
      if (this.usuarioRegistrado.nombre != null) {
        salida += this.usuarioRegistrado.nombre+" ";
      }
      if (this.usuarioRegistrado.primerApellido != null) {
        salida += this.usuarioRegistrado.primerApellido+" ";
      }
      if (this.usuarioRegistrado.segundoApellido != null) {
        salida += this.usuarioRegistrado.segundoApellido+" ";
      }
    }
    return salida;
  }
  dameNombreHospital() {
    let salida = "";
    if (this.usuarioRegistrado != null && this.usuarioRegistrado.idhospital != null) {
    let hospital = this.usuarioRegistrado.idhospital as Hospital;
    if (hospital.nombre)
      salida += hospital.nombre;
  }
    return salida;
  }
  /* para los componentes de kendo */
  cevtEditar() {
    $('.k-window-title').text('Editar');
  }
  cevtAgregar() {
    $('.k-window-title').text('Agregar');
  }
  fechacomponente(container, options) {
    $('<input required name="' + options.field + '"/>')
      .appendTo(container)
      .kendoDateTimePicker({
        format: 'yyyy/MM/dd hh:mm tt'
      });
  }

  estadoDropDownEditor(container, options) {
    $('<input required name="' + options.field + '"/>')
      .appendTo(container)
      .kendoDropDownList({
        autoBind: false,
        dataTextField: 'text',
        dataValueField: 'value',
        dataSource: data,
        index: 0
      });
  }
  sexoDropDownEditor(container, options) {
    $('<input required name="' + options.field + '"/>')
      .appendTo(container)
      .kendoDropDownList({
        autoBind: false,
        dataTextField: 'text',
        dataValueField: 'value',
        dataSource: data2,
        index: 0
      });
  }
  estadosGenerales(name, evtsalida) {
    if ($("input[name='" + name + "']").length) {
      $("input[name='" + name + "']").kendoDropDownList({
        autoBind: false,
        dataTextField: 'text',
        dataValueField: 'value',
        dataSource: data,
        index: 0,
        change: function(e) {
          evtsalida(this.value());
        }
      });
      $("input[name='" + name + "']").css('padding-bottom', '6px');
    } else {
      setTimeout(function() {
        self.estadosGenerales(name);
      }, 300);
    }
  }
  sexoGenerales(name) {
    if ($("input[name='" + name + "']").length) {
      $("input[name='" + name + "']").kendoDropDownList({
        autoBind: false,
        dataTextField: 'text',
        dataValueField: 'value',
        dataSource: data2,
        //                template: "#if ("+name+".value  ){ if ("+name+".value == 'M') # #='Masculino'# # else # #='Femenino'# # }else { if ("+name+" ){ if ("+name+" == 'M') # #='Masculino'# # else # #='Femenino'#  #}  #",
        index: 0,
        change: function(e) {
          var value = this.value();
        }
      });
      $("input[name='" + name + "']").css('padding-bottom', '6px');
    } else {
      setTimeout(function() {
        self.sexoGenerales(name);
      }, 300);
    }
  }
  sexoGeneralesEntero(name) {
    if ($("input[name='" + name + "']").length) {
      $("input[name='" + name + "']").kendoDropDownList({
        autoBind: false,
        dataTextField: 'text',
        dataValueField: 'value',
        dataSource: data3,
        //                template: "#if ("+name+".value  ){ if ("+name+".value == 1) # #='Masculino'# # else # #='Femenino'# # }else { if ("+name+" ){ if ("+name+" == 1) # #='Masculino'# # else # #='Femenino'#  #}  #",
        index: 0
      });
      $("input[name='" + name + "']").css('padding-bottom', '6px');
    } else {
      setTimeout(function() {
        self.sexoGeneralesEntero(name);
      }, 300);
    }
  }

  txtNombre(container, options) {
    $(
      '<input required type="text" class="k-input k-textbox" data-bind="value:' +
        options.field +
        '" name="' +
        options.field +
        '" pattern="[A-Z Ñ.ÁÉÍÓÚ\'-]+"  title="Este campo solo acepta letras mayúsculas" onkeypress="return validaPatron(event )"  />'
    ).appendTo(container);
  }
  //[A-Za-záéíóúñ Ñ.ÁÉÍÓÚ\'-]+
  //    "[_A-Z0-9-]+(\.[_A-Z0-9-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)*(\.[A-Z]{2,3})"   onkeypress="return validaPatron(event )"
  txtTexto(container, options) {
    $(
      '<input required type="text" class="k-input k-textbox"  data-bind="value:' +
        options.field +
        '"  name="' +
        options.field +
        '" pattern="[A-Za-záéíóúñ Ñ.ÁÉÍÓÚ\'-]*"  title="Este campo solo acepta cadenas de caracteres"  onkeypress="return validaPatron(event )" />'
    ).appendTo(container);
  }

  txtTextoNumeroconGuiones(container, options) {
    $(
      '<input #entrada required type="text" class="k-input k-textbox"  data-bind="value:' +
        options.field +
        '" name="' +
        options.field +
        '" pattern="[A-Z0-9 Ñ.ÁÉÍÓÚ\'-]+" s title="Este campo solo acepta letras y números" onkeypress="return validaPatron(event )" />'
    ).appendTo(container);
  }

  txtTextoNumero(container, options) {
    $(
      '<input required type="text" class="k-input k-textbox"  data-bind="value:' +
        options.field +
        '" name="' +
        options.field +
        '" pattern="[A-Z0-9 Ñ.ÁÉÍÓÚ\'-]+" title="Este campo solo acepta letras y números" onkeypress="return validaPatron(event )" />'
    ).appendTo(container);
  }
  txtTextoNumerosinEspacio(container, options) {
    $(
      '<input required type="text" class="k-input k-textbox"  data-bind="value:' +
        options.field +
        '" name="' +
        options.field +
        '" pattern="[A-Z0-9ÑÁÉÍÓÚ]+"  title="Este campo solo acepta letras y números" onkeypress="return validaPatron(event )" />'
    ).appendTo(container);
  }
  txtTextoNumerosinEspaciopass(container, options) {
    $(
      '<input required type="password" class="k-input k-textbox"  data-bind="value:' +
        options.field +
        '" name="' +
        options.field +
        '" pattern="[A-Z0-9ÑÁÉÍÓÚ]+"  title="Este campo solo acepta letras y números" onkeypress="return validaPatron(event )" />'
    ).appendTo(container);
  }

  txtNumero(container, options) {
    $(
      '<input required type="text" class="k-input k-textbox"  data-bind="value:' +
        options.field +
        '" name="' +
        options.field +
        '" pattern="^-?([0-9]+)?[\\.]?([0-9]+)?$"   title="Este campo solo acepta números" onkeypress="return validaPatron(event )" />'
    ).appendTo(container);
  }

  txtCorreo(container, options) {
    $(
      '<input required type="text" class="k-input k-textbox"  data-bind="value:' +
        options.field +
        '" name="' +
        options.field +
        '" pattern="[_a-zA-Z0-9-]+(\\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{2,3})"  title="No contiene un correo valido: mail@dominio.com" onblur="return validaSalir( )"  />'
    ).appendTo(container);
  }
  //   INICIA PROCESO CON PERMISOS Y PERFILES
  evtAtributos(lista, obj) {
    obj.binicializa = false;
    obj.permisosAtributos = lista;
    //        obj.inicializaGrid();
  }

  evtTablas(lista, obj) {
    if (lista.length >= 0) {
      if (obj.permisosTabla == null || obj.permisosTabla.tabla == '') {
        obj.permisosTabla = lista[0];
        if (obj.actualizaTituloInicial) obj.actualizaTituloInicial();
      }
      obj.binicializa = false;

      //            obj.inicializaGrid();
    }
  }
  // **********************************************************************************
  // **********************************************************************************
  // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S        **
  // **********************************************************************************
  // **********************************************************************************
  paux(obj, tabla, permiso) {
    if (obj.permisosTabla.tabla == tabla && (obj.permisosTabla.permiso & permiso) == permiso)
      return true;
    return false;
  }
  preporteWord(obj, tabla) {
    return this.paux(obj, tabla, 64);
  }
  preporteExcel(obj, tabla) {
    return this.paux(obj, tabla, 32);
  }
  preportePdf(obj, tabla) {
    return this.paux(obj, tabla, 16);
  }
  pbuscar(obj, tabla) {
    return this.paux(obj, tabla, 8);
  }
  pacutalizar(obj, tabla) {
    return this.paux(obj, tabla, 4);
  }
  peliminar(obj, tabla) {
    return this.paux(obj, tabla, 2);
  }
  pagregar(obj, tabla) {
    return this.paux(obj, tabla, 1);
  }
  //******************************************************************************************
  //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
  //******************************************************************************************
  aetiqueta(obj, tabla, atributo) {
    for (let elemento of obj.permisosAtributos) {
      if (elemento.tabla == tabla && elemento.atributo == atributo) return elemento.etiqueta;
    }
    return '';
  }
  avalidacion(obj, tabla, atributo) {
    var salida = '(.|s|\n)*';
    for (let elemento of obj.permisosAtributos) {
      if (elemento.tabla == tabla && elemento.atributo == atributo) {
        if (elemento.validacion) return elemento.validacion;
        else return salida;
      }
    }
    return salida;
  }
  amensaje(obj, tabla, atributo) {
    for (let elemento of obj.permisosAtributos) {
      if (elemento.tabla == tabla && elemento.atributo == atributo) {
        return elemento.mensaje;
      }
    }
    return null;
  }
  aeditable(obj, tabla, atributo) {
    for (let elemento of obj.permisosAtributos) {
      if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
        return true;
    }
    return false;
  }
  arequerido(obj, tabla, atributo) {
    for (let elemento of obj.permisosAtributos) {
      if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
        return true;
    }
    return false;
  }
  avisible(obj, tabla, atributo) {
    for (let elemento of obj.permisosAtributos) {
      if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
        return true;
    }
    return false;
  }
  aenable(obj, tabla, atributo) {
    for (let elemento of obj.permisosAtributos) {
      if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
        return true;
    }
    return false;
  }

  // **********************************************************************************
  // **********************************************************************************
  // **            P E R M I S O S   P A R A   L O S   C O N J U N T O S
  // **********************************************************************************
  // **********************************************************************************
  cagregar(obj, tabla, conjunto) {
    for (let elemento of obj.permisosConjuntos) {
      if (elemento.tabla == tabla && elemento.conjunto == conjunto && (elemento.permiso & 16) == 16)
        return true;
    }
    return false;
  }
  cagregarnuevo(obj, tabla, conjunto) {
    for (let elemento of obj.permisosConjuntos) {
      if (elemento.tabla == tabla && elemento.conjunto == conjunto && (elemento.permiso & 8) == 8)
        return true;
    }
    return false;
  }
  ceditar(obj, tabla, conjunto) {
    for (let elemento of obj.permisosConjuntos) {
      if (elemento.tabla == tabla && elemento.conjunto == conjunto && (elemento.permiso & 4) == 4)
        return true;
    }
    return false;
  }
  celiminar(obj, tabla, conjunto) {
    for (let elemento of obj.permisosConjuntos) {
      if (elemento.tabla == tabla && elemento.conjunto == conjunto && (elemento.permiso & 2) == 2)
        return true;
    }
    return false;
  }
  cseleccionar(obj, tabla, conjunto) {
    for (let elemento of obj.permisosConjuntos) {
      if (elemento.tabla == tabla && elemento.conjunto == conjunto && (elemento.permiso & 1) == 1)
        return true;
    }
    return false;
  }
  cetiqueta(obj, tabla, conjunto) {
    for (let elemento of obj.permisosConjuntos) {
      if (elemento.tabla == tabla && elemento.conjunto == conjunto) return elemento.etiqueta;
    }
    return '';
  }

  // **********************************************************************************
  // **********************************************************************************
  // **          F I N A L I Z A N   P E R M I S O S   P A R A   P E R F I L E S
  // **********************************************************************************
  // **********************************************************************************
  formatDate(date) {
    //        if (date == null) return date;
    //        date = this.formatoFecha(date);
    //        var d = new Date(date),
    //        month = '' + (d.getMonth() + 1),
    //        day = '' + d.getDate(),
    //        year = d.getFullYear();
    //        if (month.length < 2) month = '0' + month;
    //        if (day.length < 2) day = '0' + day;
    //
    //        return [year, month, day].join('-')+"T06:00:00";
    return date;
  }

  formatoFecha(date) {
    if (typeof date === 'string' && date.indexOf('/') != -1) {
      let arrf = date.split('/');
      date = [arrf[2], arrf[1], arrf[0]].join('-') + ' 00:00:00 GMT-0600';
    } else if (typeof date === 'string') date = date + ' 00:00:00 GMT-0600';
    return date;
  }

  formatDatek(date) {
    //        if (date == null ) return date;
    //        date = this.formatoFecha(date);
    //		var d = new Date(date),
    //            month = '' + (d.getMonth() + 1),
    //            day = '' + d.getDate(),
    //            year = d.getFullYear();
    //
    //        if (month.length < 2) month = '0' + month;
    //        if (day.length < 2) day = '0' + day;
    //        return [day, month,year ].join('/');
    return date;
  }
  formatDateTimek(date) {
    if (date == null) return date;
    date = this.formatoFecha(date);
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('/');
  }
  toDate(date) {
    let d = new Date();
    if (date == null) return date;
    if (typeof date === 'string' && date.indexOf('-') != -1) {
      let arrf = date.split('-');
      d.setFullYear(parseInt(arrf[0]), parseInt(arrf[1]) - 1, parseInt(arrf[2]));
    }
    return d;
  }

  cvtMaysculas (event) {
    var start = event.target.selectionStart;
    var end = event.target.selectionEnd;
    event.target.value = event.target.value.toUpperCase();
    event.target.setSelectionRange(start, end);
  }

}
