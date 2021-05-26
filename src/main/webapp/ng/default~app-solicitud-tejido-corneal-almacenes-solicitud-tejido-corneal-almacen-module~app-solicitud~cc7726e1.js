(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-solicitud-tejido-corneal-almacenes-solicitud-tejido-corneal-almacen-module~app-solicitud~cc7726e1"],{

/***/ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts ***!
  \***********************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacen", function() { return SolicitudTejidoCornealAlmacen; });
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");


/**
 *
 * @author IstmoSoft
 */
var SolicitudTejidoCornealAlmacen = /** @class */ (function () {
    // atributos fin
    function SolicitudTejidoCornealAlmacen(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.tejidoExistente = null;
        this.fechaRegistro = null;
        this.estatusProceso = null;
        this.fechaActualizacion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idsolicitudTejidoCornealRecepcion = null;
        if (source !== null)
            this.from(source);
    }
    SolicitudTejidoCornealAlmacen.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.tejidoExistente)
            this.tejidoExistente = source.tejidoExistente;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.estatusProceso)
            this.estatusProceso = source.estatusProceso;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"](source.usuarioUltMov);
        if (source.idsolicitudTejidoCornealRecepcion)
            this.idsolicitudTejidoCornealRecepcion = new _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealRecepcion"](source.idsolicitudTejidoCornealRecepcion);
    };
    SolicitudTejidoCornealAlmacen.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.tejidoExistente)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.estatusProceso)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idsolicitudTejidoCornealRecepcion)
            return true;
        return false;
    };
    SolicitudTejidoCornealAlmacen.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.tejidoExistente != null && typeof this.tejidoExistente === 'string' && this.tejidoExistente.replace(/^\s+|\s+$/g, '') == "")
            this.tejidoExistente = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.estatusProceso != null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '') == "")
            this.estatusProceso = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idsolicitudTejidoCornealRecepcion != null && typeof this.idsolicitudTejidoCornealRecepcion === 'string' && this.idsolicitudTejidoCornealRecepcion.replace(/^\s+|\s+$/g, '') == "")
            this.idsolicitudTejidoCornealRecepcion = null;
        return this;
    };
    return SolicitudTejidoCornealAlmacen;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/shared/configurar-solicitud-tejido-corneal-recepcion.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/shared/configurar-solicitud-tejido-corneal-recepcion.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ConfigurarSolicitudTejidoCornealRecepcion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarSolicitudTejidoCornealRecepcion", function() { return ConfigurarSolicitudTejidoCornealRecepcion; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarSolicitudTejidoCornealRecepcion = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarSolicitudTejidoCornealRecepcion() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudTejidoCornealRecepcion";
        this.rutaLista = this.crudServiceBaseUrl + "/getSolicitudTejidoCornealRecepciones";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarSolicitudTejidoCornealRecepcion";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarSolicitudTejidoCornealRecepcion";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarSolicitudTejidoCornealRecepcion";
        this.titulo = "Catálogo SolicitudTejidoCornealRecepcion";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.solicitudTejidoCornealRecepcionConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarSolicitudTejidoCornealRecepcion.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudTejidoCornealRecepcion.prototype.lecturaP = function (evt, dat) {
        if (!dat)
            return null;
        if (typeof dat === 'object')
            return {
                url: this.rutaLista,
                contentType: "application/json",
                data: { models: dat.toDto() },
                type: "POST",
                complete: evt
            };
        return {
            url: this.rutaLista,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete: evt
        };
    };
    ConfigurarSolicitudTejidoCornealRecepcion.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudTejidoCornealRecepcion.prototype.eliminarP = function (evt, dat) {
        if (!dat)
            return null;
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete: evt
        };
    };
    ConfigurarSolicitudTejidoCornealRecepcion.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudTejidoCornealRecepcion.prototype.agregarP = function (evt, dat) {
        if (!dat)
            return null;
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete: evt
        };
    };
    return ConfigurarSolicitudTejidoCornealRecepcion;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let solicitudTejidoCornealRecepcion of listaSolicitudTejidoCornealRecepcion \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+solicitudTejidoCornealRecepcion.id}\"\n        (click)=\"elegir(solicitudTejidoCornealRecepcion,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{solicitudTejidoCornealRecepcion.id}}\">{{solicitudTejidoCornealRecepcion.id}}</a>\n    </li>\n    <li *ngFor =  \"let solicitudTejidoCornealRecepcion of listaSolicitudTejidoCornealRecepcionN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+solicitudTejidoCornealRecepcion.id}\"\n        (click)=\"elegir(solicitudTejidoCornealRecepcion, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{solicitudTejidoCornealRecepcion.id}}\">T-{{solicitudTejidoCornealRecepcion.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let solicitudTejidoCornealRecepcion of listaSolicitudTejidoCornealRecepcion ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+solicitudTejidoCornealRecepcion.id}\" id=\"tab-I-{{solicitudTejidoCornealRecepcion.id}}\">\n\t\t\t<app-solicitud-tejido-corneal-recepcion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [solicitudTejidoCornealRecepcionBuscar]=\"solicitudTejidoCornealRecepcionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosSolicitudTejidoCornealRecepcion]=\"validosSolicitudTejidoCornealRecepcion\"  \n\t\t\t\t\t\t  [solicitudTejidoCornealRecepcionService]=\"solicitudTejidoCornealRecepcionService\" [(opcion)]=\"opcionSolicitudTejidoCornealRecepcion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(solicitudTejidoCornealRecepcion)]=\"listaSolicitudTejidoCornealRecepcion[i]\"  [ocultarConjuntos]=\"ocultarConjuntosSolicitudTejidoCornealRecepcion\"\n                           [lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario]=\"lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario\" \n                           [lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal]=\"lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-solicitud-tejido-corneal-recepcion>\n        </div>\n        <div *ngFor = \"let solicitudTejidoCornealRecepcion of listaSolicitudTejidoCornealRecepcionN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+solicitudTejidoCornealRecepcion.id}\" id=\"tab-N-{{solicitudTejidoCornealRecepcion.id}}\">\n\t\t\t<app-solicitud-tejido-corneal-recepcion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [solicitudTejidoCornealRecepcionBuscar]=\"solicitudTejidoCornealRecepcionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosSolicitudTejidoCornealRecepcion]=\"validosSolicitudTejidoCornealRecepcion\"  \n\t\t\t\t\t\t  [solicitudTejidoCornealRecepcionService]=\"solicitudTejidoCornealRecepcionService\" [(opcion)]=\"opcionSolicitudTejidoCornealRecepcion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(solicitudTejidoCornealRecepcion)]=\"listaSolicitudTejidoCornealRecepcionN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosSolicitudTejidoCornealRecepcion\"\n                           [lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario]=\"lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario\" \n                           [lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal]=\"lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-solicitud-tejido-corneal-recepcion>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcionConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcionConjuntoComponent", function() { return SolicitudTejidoCornealRecepcionConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolicitudTejidoCornealRecepcionConjuntoComponent = /** @class */ (function () {
    function SolicitudTejidoCornealRecepcionConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEditar = false;
        this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEditar = false;
        this.listaSolicitudTejidoCornealRecepcionN = [];
        this.listaSolicitudTejidoCornealRecepcion = [];
        this.listaSolicitudTejidoCornealRecepcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealRecepcionN = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealRecepcion"]();
        this.solicitudTejidoCornealRecepcionNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    SolicitudTejidoCornealRecepcionConjuntoComponent.prototype.elegir = function (solicitudTejidoCornealRecepcion, tipo) {
        this.idSeleccionado = tipo + "-" + solicitudTejidoCornealRecepcion.id;
        this.solicitudTejidoCornealRecepcionN = solicitudTejidoCornealRecepcion;
    };
    SolicitudTejidoCornealRecepcionConjuntoComponent.prototype.ngOnInit = function () {
        this.solicitudTejidoCornealRecepcionN.id = 0;
        this.listaSolicitudTejidoCornealRecepcionN.push(Object.assign({}, this.solicitudTejidoCornealRecepcionN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    SolicitudTejidoCornealRecepcionConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealRecepcion"]();
        pg.id = this.listaSolicitudTejidoCornealRecepcionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaSolicitudTejidoCornealRecepcionN.push(pg);
    };
    SolicitudTejidoCornealRecepcionConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaSolicitudTejidoCornealRecepcion; _i < _a.length; _i++) {
            var solicitudTejidoCornealRecepcion = _a[_i];
            this.solicitudTejidoCornealRecepcionService.actualizarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaSolicitudTejidoCornealRecepcionN; _b < _c.length; _b++) {
            var solicitudTejidoCornealRecepcion = _c[_b];
            solicitudTejidoCornealRecepcion.id = null;
            this.solicitudTejidoCornealRecepcionService.guardarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.evtGuardar, this);
        }
    };
    SolicitudTejidoCornealRecepcionConjuntoComponent.prototype.evtGuardar = function (solicitudTejidoCornealRecepcion, obj) {
        obj.agregados++;
        obj.listaSolicitudTejidoCornealRecepcion.push(solicitudTejidoCornealRecepcion);
        if (obj.agregados >= obj.listaSolicitudTejidoCornealRecepcionN.length) {
            obj.solicitudTejidoCornealRecepcionN = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealRecepcion"]();
            obj.listaSolicitudTejidoCornealRecepcionN = [];
            obj.solicitudTejidoCornealRecepcionN.id = 0;
            obj.idSeleccionado = "N-" + obj.solicitudTejidoCornealRecepcionN.id;
            obj.listaSolicitudTejidoCornealRecepcionN.push(Object.assign({}, obj.solicitudTejidoCornealRecepcionN));
            obj.listaSolicitudTejidoCornealRecepcionChange.emit(obj.listaSolicitudTejidoCornealRecepcion);
        }
        if (obj.agregados >= obj.listaSolicitudTejidoCornealRecepcionN.length &&
            obj.actualizados >= obj.listaSolicitudTejidoCornealRecepcion.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    SolicitudTejidoCornealRecepcionConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaSolicitudTejidoCornealRecepcionN.length &&
                obj.actualizados >= obj.listaSolicitudTejidoCornealRecepcion.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    SolicitudTejidoCornealRecepcionConjuntoComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizaTodo();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "solicitudTejidoCornealRecepcionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "validosSolicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "ocultarConjuntosSolicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "solicitudTejidoCornealRecepcionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "listaSolicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "listaSolicitudTejidoCornealRecepcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealRecepcion"])
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "solicitudTejidoCornealRecepcionN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionConjuntoComponent.prototype, "solicitudTejidoCornealRecepcionNChange", void 0);
    SolicitudTejidoCornealRecepcionConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-recepcion-conjunto',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-conjunto.component.html */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-conjunto.component.css */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudTejidoCornealRecepcionConjuntoComponent);
    return SolicitudTejidoCornealRecepcionConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-solicitud-tejido-corneal-recepcion [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"'Solicitud de Tejido Corneal'\"\n                           [solicitudTejidoCornealRecepcionBuscar]=\"solicitudTejidoCornealRecepcionBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosSolicitudTejidoCornealRecepcion]=\"validosSolicitudTejidoCornealRecepcion\"\n                           [solicitudTejidoCornealRecepcionService]=\"solicitudTejidoCornealRecepcion_service\"\n                           [(opcion)]=\"opcionSolicitudTejidoCornealRecepcion\"\n                           [globalesService]=\"globalesService\"\n                           [(solicitudTejidoCornealRecepcion)]=\"solicitudTejidoCornealRecepcion\"\n                           [ocultarConjuntos]=\"ocultarConjuntosSolicitudTejidoCornealRecepcion\"\n                           [lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario]=\"lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario\"\n                           [lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal]=\"lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal\"\n                           [(tipoCirugiaPrevista)]=\"tipoCirugiaPrevista\"\n\t\t\t\t\t  >\n\n        </app-solicitud-tejido-corneal-recepcion>\n\n         <div class=\"panel-footer\" style=\"text-align: right\">\n    <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n<!--           <button\n        style=\"margin-right: 10px;\"\n        type=\"button\"\n        class=\"btn btn-guardar\"\n       [class.hidden] =\" llamado== 'SolTejRece'\"\n        (click)=\"guardarSolicitudTejidoCornealFront()\"\n      >\n        <span class=\"fa fa-floppy-disk\"></span>Imprimir\n      </button> -->\n      <button\n        type=\"button\"\n        class=\"btn btn-success btn-guardar\"\n        (click)=\"nose()\"\n      >\n        <span class=\"fa fa-floppy-disk\"></span>Enviar\n      </button>\n\t\t  <!--div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudTejidoCornealRecepcionBuscar\" (click)=\"buscarSolicitudTejidoCornealRecepcionFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudTejidoCornealRecepcionAgregar\" (click)=\"nuevoSolicitudTejidoCornealRecepcionFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudTejidoCornealRecepcionActualizar\" (click)=\"actualizarSolicitudTejidoCornealRecepcionFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudTejidoCornealRecepcionEliminar\" (click)=\"eliminarSolicitudTejidoCornealRecepcionFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudTejidoCornealRecepcionGuardar\" (click)=\"guardarSolicitudTejidoCornealRecepcionFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudTejidoCornealRecepcionCancelar\" (click)=\"cancelarSolicitudTejidoCornealRecepcionFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudTejidoCornealRecepcionWord\" (click)=\"reporteSolicitudTejidoCornealRecepcionWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudTejidoCornealRecepcionExcel\" (click)=\"reporteSolicitudTejidoCornealRecepcionExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudTejidoCornealRecepcionPdf\" (click)=\"reporteSolicitudTejidoCornealRecepcionPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div-->\n</div>\n  </div>\n    </div>\n    <!--div class=\"modal fade\" id=\"buscarSolicitudTejidoCornealRecepcion_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-solicitud-tejido-corneal-recepcion-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionSolicitudTejidoCornealRecepcion]=\"configuracionSolicitudTejidoCornealRecepcion\"  (solicitudTejidoCornealRecepcionSeleccionado) =\"evtSolicitudTejidoCornealRecepcionSeleccionado($event)\">  </app-solicitud-tejido-corneal-recepcion-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div-->\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcionCrudComponent", function() { return SolicitudTejidoCornealRecepcionCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");
/* harmony import */ var _shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-recepcion.service */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.service.ts");
/* harmony import */ var _shared_configurar_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/configurar-solicitud-tejido-corneal-recepcion.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts");
/* harmony import */ var _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../doctor-solicitantes/shared/doctor-solicitante.service */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.service.ts");
/* harmony import */ var _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../catalogo-cargos/shared/catalogo-cargo.service */ "./src/app/catalogo-cargos/shared/catalogo-cargo.service.ts");
/* harmony import */ var _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts");
/* harmony import */ var _tipo_cirugia_previstas_shared_tipo_cirugia_prevista_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

//****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************








////import { PerfilBtcService } from '../../perfil-btcs/shared/perfil-btc.service';
//import { PerfilBtc } from '../../perfil-btcs/shared/perfil-btc';









var SolicitudTejidoCornealRecepcionCrudComponent = /** @class */ (function () {
    function SolicitudTejidoCornealRecepcionCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    solicitudTejidoCornealRecepcion_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, solicitudTejidoCorneal_service, doctorSolicitante_service, catalogoCargo_service, tipoCirugiaPrevista_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.solicitudTejidoCornealRecepcion_service = solicitudTejidoCornealRecepcion_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.solicitudTejidoCorneal_service = solicitudTejidoCorneal_service;
        this.doctorSolicitante_service = doctorSolicitante_service;
        this.catalogoCargo_service = catalogoCargo_service;
        this.tipoCirugiaPrevista_service = tipoCirugiaPrevista_service;
        this.opcionSolicitudTejidoCornealRecepcion = 0;
        this.llamado = "";
        this.opcionSolicitudTejidoCornealRecepcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validosSolicitudTejidoCornealRecepcion = {
            id: false,
            estatusProceso: false,
            status: false,
            usuarioUltMov: false,
            idsolicitudTejidoCorneal: false,
        };
        this.ocultarConjuntosSolicitudTejidoCornealRecepcion = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "solicitudTejidoCornealRecepcion", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.solicitudTejidoCornealRecepcionLazy = false;
        this.solicitudTejidoCornealRecepcionPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"]();
        this.solicitudTejidoCornealRecepcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealRecepcionTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_solicitudTejidoCornealRecepciones = [];
        this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario = [];
        this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEditar = false;
        this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion = new _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_14__["SolicitudTejidoCorneal"]();
        this.lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal = [];
        this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEditar = false;
        this.tipoCirugiaPrevista = new _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_18__["TipoCirugiaPrevista"]();
        this.tipoCirugiaPrevistaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tipoCirugiaPrevistaLazy = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
        this.configuracionSolicitudTejidoCornealRecepcion = new _shared_configurar_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarSolicitudTejidoCornealRecepcion"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealRecepcionUsuario, this);
        this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesActivos(this.evtGetIdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal, this);
        this.limpiarCampos();
    }
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "solicitudTejidoCornealRecepcionOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosSolicitudTejidoCornealRecepcion)
                return true;
            return !this.solicitudTejidoCornealRecepcionActualizar;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.solicitudTejidoCornealRecepcion && changes.solicitudTejidoCornealRecepcion.currentValue == null &&
            this.solicitudTejidoCornealRecepcion == null)
            this.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"]();
        else {
            var aux = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"]();
            if (this.solicitudTejidoCornealRecepcion)
                aux.from(this.solicitudTejidoCornealRecepcion);
            this.solicitudTejidoCornealRecepcionChange.emit(this.solicitudTejidoCornealRecepcion);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionGuardar = false;
                this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = this.solicitudTejidoCornealRecepcionCancelar = true;
                this.permisosacciones();
                var thiss;
                thiss = this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
                this.buscarTipoCirugiaPrevistaBack(aux.idsolicitudTejidoCorneal.id);
            }
            else {
                this.accion = 2;
                this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
                this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionCancelar = true;
            }
        }
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.buscarTipoCirugiaPrevistaBack = function (idsolicitudTejidoCorneal) {
        this.tipoCirugiaPrevista_service.getTipoCirugiaPrevistaByIdSolicitudTejidoCorneal(idsolicitudTejidoCorneal, this.eventoSrvTipoCirugiaPrevistaBuscar, this);
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.eventoSrvTipoCirugiaPrevistaBuscar = function (lista, objeto) {
        objeto.tipoCirugiaPrevista = lista;
        if (lista && lista.length > 0) {
            objeto.tipoCirugiaPrevista = lista[0];
            objeto.tipoCirugiaPrevistaLazy = false;
            objeto.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(objeto.tipoCirugiaPrevista, objeto.evn_lazy_tipoCirugiaPrevista, objeto);
        }
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.evn_lazy_tipoCirugiaPrevista = function (tipoCirugiaPrevista, objeto) {
        objeto.tipoCirugiaPrevista = tipoCirugiaPrevista;
        objeto.tipoCirugiaPrevistaChange.emit(objeto.tipoCirugiaPrevista);
        //objeto.configuarCombosObjetos();
        objeto.tipoCirugiaPrevistaLazy = true;
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "solicitudTejidoCornealRecepcion",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "solicitudTejidoCorneal",
            "doctorSolicitante",
            "catalogoCargo",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.solicitudTejidoCornealRecepcionPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.solicitudTejidoCornealRecepcionPermisos = true;
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.solicitudTejidoCornealRecepcion.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoConjunto && permisos.solicitudTejidoCornealRecepcion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.solicitudTejidoCornealRecepcion.PermisoConjunto;
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoTabla && permisos.solicitudTejidoCornealRecepcion.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.solicitudTejidoCornealRecepcion.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo && permisos.usuario.PermisoAtributo.length > 0) {
            //obj.configuracionUsuarioUltMov.permisosAtributos = permisos.usuario.PermisoAtributo ;
            //obj.permisosAtributos.push(permisos.usuario.PermisoAtributo) ;
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo && permisos.usuario.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.usuario.PermisoConjunto);
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoTabla && permisos.usuario.PermisoTabla.length > 0) {
            //obj.configuracionUsuarioUltMov.permisosTabla = permisos.usuario.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
        }
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoAtributo && permisos.solicitudTejidoCorneal.PermisoAtributo.length > 0) {
            //obj.configuracionIdsolicitudTejidoCorneal.permisosAtributos = permisos.solicitudTejidoCorneal.PermisoAtributo ;
            //obj.permisosAtributos.push(permisos.solicitudTejidoCorneal.PermisoAtributo) ;
        }
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoAtributo && permisos.solicitudTejidoCorneal.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.solicitudTejidoCorneal.PermisoConjunto);
        }
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoTabla && permisos.solicitudTejidoCorneal.PermisoTabla.length > 0) {
            //obj.configuracionIdsolicitudTejidoCorneal.permisosTabla = permisos.solicitudTejidoCorneal.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.solicitudTejidoCorneal.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.evtGetUsuarioUltMovSolicitudTejidoCornealRecepcionUsuario = function (lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario, obj) {
        obj.lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario = lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario;
        obj.actualizar_UsuarioUltMovSolicitudTejidoCornealRecepcionUsuario();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.evtGetIdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal = function (lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal, obj) {
        obj.lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal = lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal;
        obj.actualizar_IdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.actualizar_UsuarioUltMovSolicitudTejidoCornealRecepcionUsuario = function () {
        if (this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion.id) {
                    this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.actualizar_IdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal = function () {
        if (this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion)
            for (var _i = 0, _a = this.lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion.id) {
                    this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion = eleme;
                    break;
                }
            }
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.ngDoCheck = function () {
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosSolicitudTejidoCornealRecepcion['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosSolicitudTejidoCornealRecepcion['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "validaEstatusProceso", {
        get: function () {
            return this.validosSolicitudTejidoCornealRecepcion['estatusProceso'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosSolicitudTejidoCornealRecepcion['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosSolicitudTejidoCornealRecepcion['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "validaIdsolicitudTejidoCorneal", {
        get: function () {
            return this.validosSolicitudTejidoCornealRecepcion['idsolicitudTejidoCorneal'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaEstatusProceso && this.validaStatus && this.validaUsuarioUltMov && this.validaIdsolicitudTejidoCorneal;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.obtenerSolicitudTejidoCornealRecepciones = function (lista, objeto) {
        objeto.lista_solicitudTejidoCornealRecepciones = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCornealRecepcion.from(lista[0]);
            objeto.evtSolicitudTejidoCornealRecepcionSeleccionado(objeto.solicitudTejidoCornealRecepcion);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.evn_lazy_solicitudTejidoCornealRecepcion = function (solicitudTejidoCornealRecepcion, objeto) {
        objeto.solicitudTejidoCornealRecepcion = solicitudTejidoCornealRecepcion;
        objeto.solicitudTejidoCornealRecepcionChange.emit(objeto.solicitudTejidoCornealRecepcion);
        objeto.configuarCombosObjetos();
        objeto.solicitudTejidoCornealRecepcionLazy = true;
    };
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "datosReporteSolicitudTejidoCornealRecepcionWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.solicitudTejidoCornealRecepcionActualizar && this.solicitudTejidoCornealRecepcionLazy && this.globalesService.preporteWord(this, "solicitudTejidoCornealRecepcion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "datosReporteSolicitudTejidoCornealRecepcionExcel", {
        get: function () {
            return !(this.solicitudTejidoCornealRecepcionActualizar && this.solicitudTejidoCornealRecepcionLazy && this.globalesService.preporteExcel(this, "solicitudTejidoCornealRecepcion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealRecepcionCrudComponent.prototype, "datosReporteSolicitudTejidoCornealRecepcionPdf", {
        get: function () {
            return !(this.solicitudTejidoCornealRecepcionActualizar && this.solicitudTejidoCornealRecepcionLazy && this.globalesService.preportePdf(this, "solicitudTejidoCornealRecepcion"));
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.reporteSolicitudTejidoCornealRecepcionExcel = function () {
        var nombre = "SolicitudTejidoCornealRecepcion.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "solicitudTejidoCornealRecepcion": this.solicitudTejidoCornealRecepcion };
        parametros["plantilla"] = "SolicitudTejidoCornealRecepcion.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.reporteSolicitudTejidoCornealRecepcionWord = function () {
        var nombre = "SolicitudTejidoCornealRecepcion.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "solicitudTejidoCornealRecepcion": this.solicitudTejidoCornealRecepcion };
        parametros["plantilla"] = "SolicitudTejidoCornealRecepcion.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.reporteSolicitudTejidoCornealRecepcionPdf = function () {
        var nombre = "SolicitudTejidoCornealRecepcion.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "solicitudTejidoCornealRecepcion": this.solicitudTejidoCornealRecepcion };
        parametros["plantilla"] = "SolicitudTejidoCornealRecepcion.docx";
        parametros["salida"] = "SolicitudTejidoCornealRecepcion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionCancelar = true;
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.buscarSolicitudTejidoCornealRecepcionFront = function () {
        this.accionesBuscar();
        var vsolicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"]();
        vsolicitudTejidoCornealRecepcion.from(this.solicitudTejidoCornealRecepcion);
        this.configuracionSolicitudTejidoCornealRecepcion = new _shared_configurar_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarSolicitudTejidoCornealRecepcion"]();
        this.configuracionSolicitudTejidoCornealRecepcion.permisosTabla = { "tabla": "solicitudTejidoCornealRecepcion", "permiso": 8 };
        this.configuracionSolicitudTejidoCornealRecepcion.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta = vsolicitudTejidoCornealRecepcion;
        this.permisosacciones();
        $("#buscarSolicitudTejidoCornealRecepcion_" + this.nombre).modal();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.buscarSolicitudTejidoCornealRecepcionBack = function (solicitudTejidoCornealRecepcion) {
        this.solicitudTejidoCornealRecepcion_service.getSolicitudTejidoCornealRecepcionesByDto(solicitudTejidoCornealRecepcion, this.eventoSrvSolicitudTejidoCornealRecepcionBuscar, this);
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.eventoSrvSolicitudTejidoCornealRecepcionBuscar = function (lista, objeto) {
        objeto.lista_solicitudTejidoCornealRecepciones = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCornealRecepcion = lista[0];
            objeto.solicitudTejidoCornealRecepcionLazy = false;
            objeto.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(objeto.solicitudTejidoCornealRecepcion, objeto.evn_lazy_solicitudTejidoCornealRecepcion, objeto);
        }
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.guardarSolicitudTejidoCornealRecepcionFront = function () {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarSolicitudTejidoCornealRecepcionBack(this.solicitudTejidoCornealRecepcion);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.guardarSolicitudTejidoCornealRecepcionBack = function (solicitudTejidoCornealRecepcion) {
        if (solicitudTejidoCornealRecepcion.usuarioUltMov == null)
            solicitudTejidoCornealRecepcion.usuarioUltMov = this.globalesService.dameUsuario();
        if (solicitudTejidoCornealRecepcion.status == null || solicitudTejidoCornealRecepcion.status == "")
            solicitudTejidoCornealRecepcion.status = 1;
        this.solicitudTejidoCornealRecepcion_service.guardarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.eventoSrvSolicitudTejidoCornealRecepcionGuardar, this);
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.eventoSrvSolicitudTejidoCornealRecepcionGuardar = function (solicitudTejidoCornealRecepcion, obj) {
        obj.solicitudTejidoCornealRecepcion = solicitudTejidoCornealRecepcion;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"]();
        aux.from(solicitudTejidoCornealRecepcion);
        obj.solicitudTejidoCornealRecepcionChange.emit(aux);
        obj.solicitudTejidoCornealRecepcionTablaChange.emit(aux);
        obj.solicitudTejidoCornealRecepcionLazy = false;
        obj.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(obj.solicitudTejidoCornealRecepcion, obj.evn_lazy_solicitudTejidoCornealRecepcion, obj);
        obj.accionesActualizar();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.actualizarSolicitudTejidoCornealRecepcionFront = function () {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarSolicitudTejidoCornealRecepcionBack(this.solicitudTejidoCornealRecepcion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.actualizarSolicitudTejidoCornealRecepcionBack = function (solicitudTejidoCornealRecepcion) {
        solicitudTejidoCornealRecepcion.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudTejidoCornealRecepcion_service.actualizarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.eventoSrvSolicitudTejidoCornealRecepcionActualizar, this);
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.eventoSrvSolicitudTejidoCornealRecepcionActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.solicitudTejidoCornealRecepcionLazy = false;
            obj.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(obj.solicitudTejidoCornealRecepcion, obj.evn_lazy_solicitudTejidoCornealRecepcion, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.solicitudTejidoCornealRecepcion);
            obj.solicitudTejidoCornealRecepcionChange.emit(aux);
            obj.solicitudTejidoCornealRecepcionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.eliminarSolicitudTejidoCornealRecepcionFront = function () {
        this.accion = 4;
        this.eliminarSolicitudTejidoCornealRecepcionBack(this.solicitudTejidoCornealRecepcion);
        this.permisosacciones();
        this.accionesBuscar();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.eliminarSolicitudTejidoCornealRecepcionBack = function (solicitudTejidoCornealRecepcion) {
        solicitudTejidoCornealRecepcion.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudTejidoCornealRecepcion_service.eliminarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.eventoSrvSolicitudTejidoCornealRecepcionEliminar, this);
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.eventoSrvSolicitudTejidoCornealRecepcionEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"]();
            obj.solicitudTejidoCornealRecepcionChange.emit(obj.solicitudTejidoCornealRecepcion);
            obj.solicitudTejidoCornealRecepcionTablaChange.emit(obj.solicitudTejidoCornealRecepcion);
            obj.limpiarCampos();
        }
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.cancelarSolicitudTejidoCornealRecepcionFront = function () {
        this.accion = 6;
        this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = true;
        this.permisosacciones();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.nuevoSolicitudTejidoCornealRecepcionFront = function () {
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
            callback: function (result) {
                if (result)
                    this.limpiarCampos();
                this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false;
                this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionCancelar = true;
            }.bind(this)
        });
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealRecepcionUsuario, this);
        this.lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal = [];
        this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesActivos(this.evtGetIdsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal, this);
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionGuardar = false;
        this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = this.solicitudTejidoCornealRecepcionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.evtSolicitudTejidoCornealRecepcionSeleccionado = function (solicitudTejidoCornealRecepcion) {
        this.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"]();
        this.solicitudTejidoCornealRecepcion.from(solicitudTejidoCornealRecepcion);
        this.solicitudTejidoCornealRecepcionLazy = false;
        this.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(this.solicitudTejidoCornealRecepcion, this.evn_lazy_solicitudTejidoCornealRecepcion, this);
        this.accion = 7;
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionGuardar = false;
        this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = this.solicitudTejidoCornealRecepcionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarSolicitudTejidoCornealRecepcion_" + this.nombre).modal("hide");
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false; // ******************** maquina
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.permisosacciones = function () {
        if (this.solicitudTejidoCornealRecepcionBuscar)
            this.solicitudTejidoCornealRecepcionBuscar = this.globalesService.pbuscar(this, "solicitudTejidoCornealRecepcion");
        if (this.solicitudTejidoCornealRecepcionActualizar)
            this.solicitudTejidoCornealRecepcionActualizar = (this.globalesService.pacutalizar(this, "solicitudTejidoCornealRecepcion") && this.globalesService.pbuscar(this, "solicitudTejidoCornealRecepcion"));
        if (this.solicitudTejidoCornealRecepcionEliminar)
            this.solicitudTejidoCornealRecepcionEliminar = (this.globalesService.peliminar(this, "solicitudTejidoCornealRecepcion") && this.globalesService.pbuscar(this, "solicitudTejidoCornealRecepcion"));
        if (this.solicitudTejidoCornealRecepcionAgregar)
            this.solicitudTejidoCornealRecepcionAgregar = this.globalesService.pagregar(this, "solicitudTejidoCornealRecepcion");
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.permisosaccionesInicio = function () {
        this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.limpiarCampos = function () {
        this.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"]();
        this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEleccion = new _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_14__["SolicitudTejidoCorneal"]();
        this.solicitudTejidoCornealRecepcionChange.emit(this.solicitudTejidoCornealRecepcion);
        this.solicitudTejidoCornealRecepcionSeleccion = this.solicitudTejidoCornealRecepcionCancelar = this.solicitudTejidoCornealRecepcionGuardar = this.solicitudTejidoCornealRecepcionActualizar = this.solicitudTejidoCornealRecepcionEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealRecepcionBuscar = this.solicitudTejidoCornealRecepcionAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealRecepcionCrudComponent.prototype.nose = function () {
        var s = this.solicitudTejidoCornealRecepcion;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "opcionSolicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "llamado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "opcionSolicitudTejidoCornealRecepcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "ocultarConjuntosSolicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcion"])
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "solicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "solicitudTejidoCornealRecepcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "solicitudTejidoCornealRecepcionTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_18__["TipoCirugiaPrevista"])
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "tipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionCrudComponent.prototype, "tipoCirugiaPrevistaChange", void 0);
    SolicitudTejidoCornealRecepcionCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-recepcion-crud',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-crud.component.html */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-crud.component.css */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcionService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_15__["SolicitudTejidoCornealService"],
                _tipo_cirugia_previstas_shared_tipo_cirugia_prevista_service__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevistaService"],
                _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_17__["CatalogoCargoService"],
                _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_16__["DoctorSolicitanteService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcionService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_15__["SolicitudTejidoCornealService"],
            _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_16__["DoctorSolicitanteService"],
            _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_17__["CatalogoCargoService"],
            _tipo_cirugia_previstas_shared_tipo_cirugia_prevista_service__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevistaService"]])
    ], SolicitudTejidoCornealRecepcionCrudComponent);
    return SolicitudTejidoCornealRecepcionCrudComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para solicitudTejidoCornealRecepcion-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionSolicitudTejidoCornealRecepcion.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_solicitudTejidoCornealRecepcion_{{nombregrid}}\">\n                <div id=\"grid_solicitudTejidoCornealRecepcion_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.ts":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcionListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcionListKendoComponent", function() { return SolicitudTejidoCornealRecepcionListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");
/* harmony import */ var _shared_configurar_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/configurar-solicitud-tejido-corneal-recepcion.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/* import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service'; */
/* import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service'; */
//****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************

var self = {};
var usuariologueado;
var SolicitudTejidoCornealRecepcionListKendoComponent = /** @class */ (function () {
    function SolicitudTejidoCornealRecepcionListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.solicitudTejidoCornealRecepcionSeleccionado = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealRecepcion"]();
        this.configuracionSolicitudTejidoCornealRecepcion = new _shared_configurar_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudTejidoCornealRecepcion"]();
        this.nombregrid = "";
        this.evtSolicitudTejidoCornealRecepcionSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudTejidoCornealRecepcion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCornealRecepcion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCornealRecepcion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    SolicitudTejidoCornealRecepcionListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionSolicitudTejidoCornealRecepcion.titulo.indexOf("Catálogo") != -1) {
            this.configuracionSolicitudTejidoCornealRecepcion.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    SolicitudTejidoCornealRecepcionListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionSolicitudTejidoCornealRecepcion && changes.configuracionSolicitudTejidoCornealRecepcion.currentValue &&
            (changes.configuracionSolicitudTejidoCornealRecepcion.previousValue instanceof _shared_configurar_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudTejidoCornealRecepcion"])) {
            if (changes.configuracionSolicitudTejidoCornealRecepcion.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionSolicitudTejidoCornealRecepcion.currentValue.permisosAtributos;
            if (changes.configuracionSolicitudTejidoCornealRecepcion.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionSolicitudTejidoCornealRecepcion.currentValue.permisosTabla;
            if ($("#grid_solicitudTejidoCornealRecepcion_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    SolicitudTejidoCornealRecepcionListKendoComponent.prototype.ngOnInit = function () {
        self["grid_solicitudTejidoCornealRecepcion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionSolicitudTejidoCornealRecepcion.permisosAtributos &&
            this.configuracionSolicitudTejidoCornealRecepcion.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "solicitudTejidoCornealRecepcion",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealRecepcion'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealRecepcion'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealRecepcion'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionSolicitudTejidoCornealRecepcion.permisosAtributos)
            this.permisosAtributos = this.configuracionSolicitudTejidoCornealRecepcion.permisosAtributos;
        if (this.configuracionSolicitudTejidoCornealRecepcion.permisosTabla)
            this.permisosTabla = this.configuracionSolicitudTejidoCornealRecepcion.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealRecepcionListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo.length > 0
            && !obj.configuracionSolicitudTejidoCornealRecepcion.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.solicitudTejidoCornealRecepcion.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.SolicitudTejidoCornealRecepcion.PermisoAtributo ;
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoTabla && permisos.solicitudTejidoCornealRecepcion.PermisoTabla.length > 0
            && !obj.configuracionSolicitudTejidoCornealRecepcion.permisosTabla) {
            obj.globalesService.evtTablas(permisos.solicitudTejidoCornealRecepcion.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.SolicitudTejidoCornealRecepcion.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealRecepcionListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_solicitudTejidoCornealRecepcion_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    SolicitudTejidoCornealRecepcionListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl != null
            && this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta
            && this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta.isOk
            && !this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta.isOk())
            return;
        if (this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta) {
            if (!this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl && this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta instanceof _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealRecepcion"])
                this.configuracionSolicitudTejidoCornealRecepcion.rutaLista = this.crudServiceBaseUrl + "/getSolicitudTejidoCornealRecepcionesByDto";
            this.lista = this.configuracionSolicitudTejidoCornealRecepcion.lecturaP(completar, this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta);
            if (this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl) {
                this.rutaAgregar = this.configuracionSolicitudTejidoCornealRecepcion.agregarP(function () { }, this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl);
                this.rutaEliminar = this.configuracionSolicitudTejidoCornealRecepcion.eliminarP(function () { }, this.configuracionSolicitudTejidoCornealRecepcion.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionSolicitudTejidoCornealRecepcion.agregarP(completar, this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta);
                this.rutaEliminar = this.configuracionSolicitudTejidoCornealRecepcion.eliminarP(completar, this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta);
            }
        }
        else {
            this.lista = this.configuracionSolicitudTejidoCornealRecepcion.lectura();
            this.rutaAgregar = this.configuracionSolicitudTejidoCornealRecepcion.agregar();
            this.rutaEliminar = this.configuracionSolicitudTejidoCornealRecepcion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "idsolicitudTejidoCorneal")) {
            campos["idsolicitudTejidoCorneal"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealRecepcion", "idsolicitudTejidoCorneal"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealRecepcion", "estatusProceso"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealRecepcion", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealRecepcion", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionSolicitudTejidoCornealRecepcion.rutaActualizar,
                    contentType: "application/json",
                    type: "POST"
                },
                destroy: this.rutaEliminar,
                create: this.rutaAgregar,
                parameterMap: function (options, operation) {
                    if (options.models && operation === "read") {
                        if (typeof options.models === 'string')
                            return options.models;
                        return JSON.stringify(options.models);
                    }
                    else if (operation === "create" && options.models) {
                        if (options.models[0].status)
                            options.models[0].status = options.models[0].status.value;
                        return operacionesCompletas(options, operation, this, slf);
                    }
                    else if (operation === "update" && options.models) {
                        if (options.models[0].status)
                            options.models[0].status = options.models[0].status.value;
                        options.models[0].usuarioUltMov = usuariologueado;
                        return JSON.stringify(options.models[0]);
                    }
                    else if (operation === "destroy" && options.models) {
                        return operacionesCompletas(options, operation, this, slf);
                    }
                }
            },
            batch: true,
            pageSize: 10,
            schema: {
                parse: function (response) {
                    if (Object.prototype.toString.call(response) !== '[object Array]')
                        response = [response];
                    $.each(response, function (idx, elem) {
                    });
                    // self.grid.refresh();
                    return response;
                },
                model: modelo,
            },
            requestStart: function (e) {
                ("request started");
            },
            requestEnd: function (e) {
                ("request started");
                if (e.response) {
                    if (e.type === 'update') {
                        bootbox.alert('El registro se ha actualizado con exito');
                    }
                    if (e.type === 'create') {
                        bootbox.alert('El registro se ha creado con exito');
                    }
                    if (e.type === 'destroy') {
                        bootbox.alert('El registro se ha eliminado con exito');
                    }
                }
            },
            error: function (e) {
                bootbox.alert('Ha ocurrido una excepción en el sistema');
            }
        });
        function operacionesCompletas(options, operation, est, self) {
            options.models[0].usuarioUltMov = usuariologueado;
            if (self.configuracionSolicitudTejidoCornealRecepcion.campoAgEl) {
                if (self.configuracionSolicitudTejidoCornealRecepcion.tipocampoAgEl == "SolicitudTejidoCornealRecepcionSolicitudTejidoCornealRecepcion")
                    self.configuracionSolicitudTejidoCornealRecepcion.campoAgEl.solicitudTejidoCornealRecepcion2 = options.models[0];
                else
                    self.configuracionSolicitudTejidoCornealRecepcion.campoAgEl.solicitudTejidoCornealRecepcion = options.models[0];
                return JSON.stringify(self.configuracionSolicitudTejidoCornealRecepcion.campoAgEl);
            }
            else if (est.options[operation].data.models.solicitudTejidoCornealRecepcion) {
                est.options[operation].data.models.solicitudTejidoCornealRecepcion2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    SolicitudTejidoCornealRecepcionListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealRecepcion", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "idsolicitudTejidoCorneal")) {
            columnas.push({ field: "idsolicitudTejidoCorneal", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealRecepcion", "idsolicitudTejidoCorneal"), editor: idsolicitudTejidoCornealDropDownEditor, template: " #if (idsolicitudTejidoCorneal){#   #=idsolicitudTejidoCorneal.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealRecepcion", "estatusProceso") });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealRecepcion", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealRecepcion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealRecepcion", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "solicitudTejidoCornealRecepcion"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "solicitudTejidoCornealRecepcion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "solicitudTejidoCornealRecepcion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "solicitudTejidoCornealRecepcion") && this.configuracionSolicitudTejidoCornealRecepcion.solicitudTejidoCornealRecepcionConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_solicitudTejidoCornealRecepcion_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_solicitudTejidoCornealRecepcion_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionSolicitudTejidoCornealRecepcion.altoComponente,
            toolbar: op_agregar,
            columns: columnas,
            resizable: true,
            editable: {
                mode: "popup",
                window: {
                    resizable: true
                }
            }
        });
        this.grid = $("#grid_solicitudTejidoCornealRecepcion_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudTejidoCorneal = this.urlprovider.serverURL + "solicitudTejidoCorneal/getSolicitudTejidoCornealesActivos";
        function usuarioUltMovDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "username",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutausuarioUltMov,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
        function idsolicitudTejidoCornealDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "folioSolicitudTejidoCorneal",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidsolicitudTejidoCorneal,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    SolicitudTejidoCornealRecepcionListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_solicitudTejidoCornealRecepcion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.solicitudTejidoCornealRecepcionSeleccionado = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealRecepcion"]();
        gridac.solicitudTejidoCornealRecepcionSeleccionado.from(dataItem);
        gridac.evtSolicitudTejidoCornealRecepcionSeleccionado.emit(gridac.solicitudTejidoCornealRecepcionSeleccionado);
        (gridac.solicitudTejidoCornealRecepcionSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudTejidoCornealRecepcion"])
    ], SolicitudTejidoCornealRecepcionListKendoComponent.prototype, "configuracionSolicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SolicitudTejidoCornealRecepcionListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("solicitudTejidoCornealRecepcionSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SolicitudTejidoCornealRecepcionListKendoComponent.prototype, "evtSolicitudTejidoCornealRecepcionSeleccionado", void 0);
    SolicitudTejidoCornealRecepcionListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-recepcion-list-kendo',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-list-kendo.component.html */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-list-kendo.component.css */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], SolicitudTejidoCornealRecepcionListKendoComponent);
    return SolicitudTejidoCornealRecepcionListKendoComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcionRoutingModule", function() { return SolicitudTejidoCornealRecepcionRoutingModule; });
/* harmony import */ var _solicitud_tejido_corneales_detalle_tejido_corneal_detalle_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component */ "./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_list_kendo_solicitud_tejido_corneal_recepcion_list_kendo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_crud_solicitud_tejido_corneal_recepcion_crud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_table_bandeja_solicitud_tejido_corneal_recepcion_table_bandeja_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_table_solicitud_tejido_corneal_recepcion_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'solicitud-tejido-corneal-recepcion-list-kendo', component: _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_list_kendo_solicitud_tejido_corneal_recepcion_list_kendo_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealRecepcionListKendoComponent"] },
    { path: 'solicitud-tejido-corneal-recepcion-crud', component: _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_crud_solicitud_tejido_corneal_recepcion_crud_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcionCrudComponent"] },
    { path: 'solicitud-tejido-corneal-recepcion-table-bandeja', component: _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_table_bandeja_solicitud_tejido_corneal_recepcion_table_bandeja_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcionTableBandejaComponent"] },
    { path: 'solicitud-tejido-corneal-recepcion-table', component: _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_table_solicitud_tejido_corneal_recepcion_table_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudTejidoCornealRecepcionTableComponent"] },
    { path: 'detalle-tejido-corneal/:id', component: _solicitud_tejido_corneales_detalle_tejido_corneal_detalle_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_0__["DetalleTejidoCornealComponent"] },
];
var SolicitudTejidoCornealRecepcionRoutingModule = /** @class */ (function () {
    function SolicitudTejidoCornealRecepcionRoutingModule() {
    }
    SolicitudTejidoCornealRecepcionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SolicitudTejidoCornealRecepcionRoutingModule);
    return SolicitudTejidoCornealRecepcionRoutingModule;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h2>BANDEJA DE ENTRADA / RECEPCIÓN BTC</h2>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"container-fluid\">\n                <table id=\"tabla_solicitudTejidoCornealRecepcionBandeja\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n                    <thead>\n                        <tr>\n                            <th>Id</th>\n                            <th>#</th>\n                            <th>Folio Solicitud</th>\n                            <th>Fecha de Ingreso</th>\n                            <th>Id Recepcion</th>\n                            <th>Tipo</th>\n                            <th>En Almacen</th>\n                            <th>Acción</th>\n                            <th>Id Solicitud de Tejido</th>\n                        </tr>\n                    </thead>\n                    <!-- <tfoot>\n                        <tr>\n                            <th>Id</th>\n                            <th>#</th>\n                            <th>Folio Solicitud</th>\n                            <th>Fecha Registro</th>\n                            <th>Id Recepcion</th>\n                            <th>Tipo</th>\n                            <th>En Almacen</th>\n                            <th>Acción</th>\n                            <th>Id Solicitud de Tejido</th>\n                        </tr>\n                    </tfoot> -->\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n\n<div id=\"solicitudModal\" class=\"modal fade \" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <app-detalle-tejido-corneal *ngIf=\"tipo==1\" [id]=\"idSolicitudTejido\"></app-detalle-tejido-corneal>\n            </div>\n            <div class=\"modal-footer\">\n                <a *ngIf=\"enAlmacen==0\" type=\"button\" class=\"btn btn-success\" (click)=\"enviarAlmacen()\">Enviar a Almacén</a>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"evaluacionModal\" class=\"modal fade \" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> - </div>\n            <div class=\"modal-body\">\n                <app-detalle-donante-extraccion *ngIf=\"tipo==2\" [id]=\"idSeleccionado\"></app-detalle-donante-extraccion>\n            </div>\n            <div class=\"modal-footer\">\n                <a *ngIf=\" idRecepcionSolicitudEvaluacion != null && idRecepcionSolicitudEvaluacion !=-1\" type=\"button\" class=\"btn btn-default\" (click)=\"irRecepcion()\">Registro Recepción</a>\n                <a *ngIf=\" idRecepcionSolicitudEvaluacion != null && idRecepcionSolicitudEvaluacion !=-1\" type=\"button\" class=\"btn btn-default\" (click)=\"irOficio()\">Registro Oficio de Donación</a>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcionTableBandejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcionTableBandejaComponent", function() { return SolicitudTejidoCornealRecepcionTableBandejaComponent; });
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../permiso-atributos/shared/permiso-atributo.service */ "./src/app/permiso-atributos/shared/permiso-atributo.service.ts");
/* harmony import */ var _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../permiso-tablas/shared/permiso-tabla.service */ "./src/app/permiso-tablas/shared/permiso-tabla.service.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SolicitudTejidoCornealRecepcionTableBandejaComponent = /** @class */ (function () {
    function SolicitudTejidoCornealRecepcionTableBandejaComponent(globalesService, permisoAtributoService, permisoTablaService, solicitudTejidoCornealAlmacenService, urlProvider, router) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.solicitudTejidoCornealAlmacenService = solicitudTejidoCornealAlmacenService;
        this.urlProvider = urlProvider;
        this.router = router;
        this.primero = true;
        this.idSeleccionado = -1;
        this.idSolicitudTejido = -1;
        this.tipo = -1;
        this.idRecepcionSolicitudEvaluacion = -1;
        //public solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion;
        this.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcion"]();
        this.solicitudTejidoCornealRecepcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.permisosAtributos = [];
        this.permisosTabla = { tabla: 'solicitudTejidoCornealRecepcion', permiso: 0, etiqueta: '' };
        this.ptabla = false;
        this.pattr = false;
        this.enAlmacen = 0;
        this.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcion"]();
        this.usuariologueado = globalesService.dameUsuario();
        this.getColumnas(this);
    }
    SolicitudTejidoCornealRecepcionTableBandejaComponent.prototype.getColumnas = function (obj) {
        if ($('#tabla_solicitudTejidoCornealRecepcionBandeja').length == 0) {
            setTimeout(function () {
                obj.getColumnas(obj);
                return;
            }, 500);
        }
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        columnasNoVisibles.push(0);
        columnas.push({ data: 'id' });
        columnas.push({
            data: function (oObj) {
                if (oObj)
                    if (oObj.estatusProceso == '1')
                        return "<i data-toggle='tooltip' data-placement='top' title='Solicitud Nueva' class='icon-infocircle text-danger'  ></i>";
                if (oObj.estatusProceso == '2')
                    return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en Recepción' class='icon-infocircle text-warning' ></i>";
                if (oObj.estatusProceso == '3')
                    return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en Evaluación' class='icon-infocircle text-primary' ></i>";
                if (oObj.estatusProceso == '4')
                    return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en  Almacén' class='icon-infocircle text-success' ></i>";
            }
        });
        columnas.push({
            data: function (oObj) {
                return '<span style="cursor: pointer">' + oObj.folioSolicitud + '</span>';
            }
        });
        columnas.push({
            data: function (oObj) {
                return '<span style="cursor: pointer">' + oObj.fechaRegistro + '</span>';
            }
        });
        columnasNoVisibles.push(4);
        columnas.push({ data: 'tipo' });
        columnasNoVisibles.push(5);
        columnas.push({ data: 'idRecepcionSolicitudEvaluacion' });
        columnasNoVisibles.push(6);
        columnas.push({ data: 'enAlmacen' });
        columnas.push({
            data: function (oObj) {
                return "<span style=\"cursor: pointer\">Detalle</span>";
            }
        });
        columnasNoVisibles.push(8);
        columnas.push({ data: 'idSolicitudtejido' });
        var novisibles;
        novisibles = [
            {
                targets: columnasNoVisibles,
                visible: false,
                searchable: false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_solicitudTejidoCornealRecepcionBandeja').DataTable({
            columnDefs: novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            initComplete: function (settings, json) {
                var xs = $('#tabla_solicitudTejidoCornealRecepcionBandeja_wrapper').find('.row');
                $($(xs[0]).find('.col-sm-6')[0])
                    .find('.dataTables_length')
                    .append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcion"]();
                    self.primero = false;
                });
            },
            drawCallback: function () {
                $('[data-toggle="tooltip"]').tooltip();
            },
            ajax: {
                url: self.urlProvider.serverURL +
                    'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesBandeja',
                type: 'POST',
                contentType: 'application/json',
                datatype: 'json',
                dataSrc: ''
            },
            columns: columnas
        });
        $('#tabla_solicitudTejidoCornealRecepcionBandeja tbody').on('click', 'td', function (evt) {
            if (evt.currentTarget.cellIndex ==
                $(evt.currentTarget)
                    .parent()
                    .find('td').length -
                    1) {
                var data = $('#tabla_solicitudTejidoCornealRecepcionBandeja')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                self.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcion"]();
                self.solicitudTejidoCornealRecepcion.from(data);
                self.primero = false;
                (data.id);
                this.idSeleccionado = data.id;
                this.idSolicitudTejido = data.idSolicitudtejido;
                this.globalesService.registraIdRecepcion(data.id);
                this.idRecepcionSolicitudEvaluacion = data.idRecepcionSolicitudEvaluacion;
                this.tipo = data.tipo;
                this.enAlmacen = data.enAlmacen;
                if (data.tipo == 1) {
                    $('#solicitudModal').modal();
                }
                else {
                    $('#evaluacionModal').modal();
                }
            }
        }.bind(this));
    };
    SolicitudTejidoCornealRecepcionTableBandejaComponent.prototype.enviarAlmacen = function () {
        var solTejCorAlm = new _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_2__["SolicitudTejidoCornealAlmacen"]();
        solTejCorAlm.idsolicitudTejidoCornealRecepcion = { id: this.idSeleccionado };
        solTejCorAlm.estatusProceso = 4;
        solTejCorAlm.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_9__["Usuario"](this.usuariologueado);
        solTejCorAlm.fechaRegistro = new Date();
        solTejCorAlm.status = "1";
        this.solicitudTejidoCornealAlmacenService.guardarSolicitudTejidoCornealAlmacen(solTejCorAlm, this.evtGuardaSolTejCorAlm, this);
    };
    SolicitudTejidoCornealRecepcionTableBandejaComponent.prototype.evtGuardaSolTejCorAlm = function (solTejCorAl, obj) {
        if (solTejCorAl.id != null) {
            bootbox.alert("Solicitud Enviada a Almacén");
            $('#tabla_solicitudTejidoCornealRecepcionBandeja').DataTable().ajax.reload(null, false);
            $('#solicitudModal').modal('hide');
        }
    };
    SolicitudTejidoCornealRecepcionTableBandejaComponent.prototype.irRecepcion = function () {
        $('#evaluacionModal').modal('hide');
        this.globalesService.registraIdRecepcion(this.idRecepcionSolicitudEvaluacion);
        this.router.navigateByUrl('/recepcion-solicitud-evaluacion-crud/' + this.idRecepcionSolicitudEvaluacion);
    };
    SolicitudTejidoCornealRecepcionTableBandejaComponent.prototype.irOficio = function () {
        $('#evaluacionModal').modal('hide');
        this.globalesService.registraIdRecepcion(this.idRecepcionSolicitudEvaluacion);
        this.router.navigateByUrl('/oficio-donacion-crud/' + this.idRecepcionSolicitudEvaluacion);
    };
    SolicitudTejidoCornealRecepcionTableBandejaComponent.prototype.ngOnInit = function () {
        /*     this.getColumnas(this);
         */
    };
    SolicitudTejidoCornealRecepcionTableBandejaComponent.prototype.cambio_solicitudTejidoCornealRecepcion = function (solicitudTejidoCornealRecepcion) {
        $('#tabla_solicitudTejidoCornealRecepcionBandeja')
            .DataTable()
            .ajax.reload(null, false);
        this.primero = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcion"])
    ], SolicitudTejidoCornealRecepcionTableBandejaComponent.prototype, "solicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionTableBandejaComponent.prototype, "solicitudTejidoCornealRecepcionChange", void 0);
    SolicitudTejidoCornealRecepcionTableBandejaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-solicitud-tejido-corneal-recepcion-table-bandeja',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-table-bandeja.component.html */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-table-bandeja.component.css */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_0__["GlobalesService"], _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_7__["PermisoAtributoService"], _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_8__["PermisoTablaService"], _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacenService"]]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_0__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_7__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_8__["PermisoTablaService"],
            _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacenService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_6__["URLProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SolicitudTejidoCornealRecepcionTableBandejaComponent);
    return SolicitudTejidoCornealRecepcionTableBandejaComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h2>CONSULTA DE TRÁMITES INGRESADOS</h2>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"container-fluid\">\n\n                <div class=\"row\">\n                    <form class=\"form-horizontal\" role=\"form\">\n                        <label class=\"col-lg-4 control-label\" for=\"formGroupExampleInput\">Folio Solicitud Tejido Corneal:</label>\n                        <div class=\"col-lg-3\">\n                            <input type=\"text\" [(ngModel)]=\"folioSolicitudTejidoCorneal\" id=\"folioSolicitudTejidoCorneal\" name=\"folioSolicitudTejidoCorneal\" class=\"form-control\" placeholder=\"Folio Solicitud Tejido Corneal\">\n                        </div>\n                        <label class=\"col-lg-3 control-label\" for=\"formGroupExampleInput\">Número de Expediente</label>\n                        <div class=\"col-lg-2\">\n                            <input type=\"text\" [(ngModel)]=\"numeroExpedienteReceptor\" name=\"numeroExpedienteReceptor\" id=\"numeroExpedienteReceptor\" class=\"form-control\" placeholder=\"Número de Expediente\">\n                        </div>\n                    </form>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div>\n                        <!--label class=\"col-lg-5 control-label\" for=\"formGroupExampleInput\">Folio Solicitud de Evaluacion Corneal:</label>\n          <div class=\"col-lg-3\">\n          <input type=\"text\"  [(ngModel)]=\"folioSolicitudTejidoCorneal\"  id=\"folioSolicitudTejidoCorneal\" name=\"folioSolicitudTejidoCorneal\" class=\"form-control\" placeholder=\"Número de Expediente\">\n          </div-->\n                        <!-- <label class=\"col-lg-1 control-label\" for=\"formGroupExampleInput\">Estatus</label>\n                        <div class=\"col-lg-3\">\n                            <select class=\"form-control\" id=\"selectTipoReporte\">\n                  <option value=\"\">Solicitud Estatus</option>\n                  <option value=\"0\">Solicitud de Recepción</option>\n                  <option value=\"1\">Enviado Almacén</option>\n                </select>\n\n                        </div> -->\n                        <div class=\"col-md-2\">\n                            <button class=\"btn btn-primary\" id=\"buscar\" (click)=\"buscarByfiltere()\">Buscar</button>\n                        </div>\n                    </div>\n                </div>\n                <br>\n\n                <table *ngIf=\"muestraTabla\" id=\"tabla_solicitudTejidoCornealRecepcion\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n                    <thead>\n                        <tr>\n                            <th [class.hidden]=\"!avisible('solicitudTejidoCornealRecepcion','id')\">{{aetiqueta('solicitudTejidoCornealRecepcion','id')}}</th>\n                            <th>#</th>\n                            <th>Folio Solicitud</th>\n                            <th>Hospital</th>\n                            <th>Nombre</th>\n                            <th>Primer Apellido</th>\n                            <th>N° Expediente</th>\n                            <th>Detalle</th>\n                            <th>Editar</th>\n                            <th>Borrar</th>\n                        </tr>\n                    </thead>\n                    <!-- <tfoot>\n                        <tr>\n                            <th>{{aetiqueta('solicitudTejidoCornealRecepcion','id')}}</th>\n                            <th>#</th>\n                            <th>Folio Solicitud</th>\n                            <th>Hospital</th>\n                            <th>Nombre</th>\n                            <th>Primer Apellido</th>\n                            <th>N° Expediente</th>\n                            <th>Detalle</th>\n                            <th>Editar</th>\n                            <th>Eliminar</th>\n                        </tr>\n                    </tfoot> -->\n                </table>\n            </div>\n            <!--app-solicitud-tejido-corneal-recepcion [class.hidden]=\"primero\" [(solicitudTejidoCornealRecepcion)]=\"solicitudTejidoCornealRecepcionSeleccionado\" (solicitudTejidoCornealRecepcionTablaChange)=\"cambio_solicitudTejidoCornealRecepcion($event)\"> </app-solicitud-tejido-corneal-recepcion-->\n        </div>\n    </div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n\n<div id=\"myModal\" class=\"modal fade \" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <app-detalle-tejido-corneal [id]=\"idSeleccionado\"></app-detalle-tejido-corneal>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div id=\"evaluacionModal\" class=\"modal fade \" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> - </div>\n          <div class=\"modal-body\">\n              <app-detalle-donante-extraccion *ngIf=\"tipo==2\" [id]=\"idSeleccionado\"></app-detalle-donante-extraccion>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcionTableComponent", function() { return SolicitudTejidoCornealRecepcionTableComponent; });
/* harmony import */ var _shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/solicitud-tejido-corneal-recepcion.service */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../permiso-atributos/shared/permiso-atributo.service */ "./src/app/permiso-atributos/shared/permiso-atributo.service.ts");
/* harmony import */ var _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../permiso-tablas/shared/permiso-tabla.service */ "./src/app/permiso-tablas/shared/permiso-tabla.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SolicitudTejidoCornealRecepcionTableComponent = /** @class */ (function () {
    function SolicitudTejidoCornealRecepcionTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider, router, solicitudTejidoCornealService, SolicitudTejidoCornealRecepcionService) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.router = router;
        this.solicitudTejidoCornealService = solicitudTejidoCornealService;
        this.SolicitudTejidoCornealRecepcionService = SolicitudTejidoCornealRecepcionService;
        this.tipo = -1;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = {
            tabla: "solicitudTejidoCornealRecepcion",
            permiso: 0,
            etiqueta: ""
        };
        this.ptabla = false;
        this.pattr = false;
        this.url = this.urlProvider;
        this.solicitudTejidoCornealRecepcionSeleccionado = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_2__["SolicitudTejidoCornealRecepcion"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " +
                    discon +
                    " where pa.tabla= 'solicitudTejidoCornealRecepcion'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    SolicitudTejidoCornealRecepcionTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " +
                discon +
                " where pa.tabla= 'solicitudTejidoCornealRecepcion'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () {
                obj.getColumnas(obj);
            }, 500);
        }
    };
    Object.defineProperty(SolicitudTejidoCornealRecepcionTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealRecepcionTableComponent.prototype.editarTegido = function (id) {
        this.router.navigateByUrl("/solicitud-tejido-corneal-crud/" + id);
    };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.getColumnas = function (obj) {
        var dato = {};
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        columnasNoVisibles.push(0);
        columnas.push({ data: "idSolicitud" });
        columnasNoVisibles.push(1);
        columnas.push({ data: "tipo" });
        columnas.push({ data: "folioSolicitud" });
        columnas.push({ data: "hospital" });
        columnas.push({ data: "nombre" });
        columnas.push({ data: "primerApellido" });
        columnas.push({ data: "numeroExpediente" });
        columnas.push({
            data: function (oObj) {
                return "<div style='  text-align: center;' ><span style=\"cursor: pointer\"> <img src=\"assets/imagenes/svg/binocular.svg\" alt=\"Detalle\"  style=\"width: 30px;\" /> </span></div>";
            }
        });
        columnas.push({
            data: function (oObj) {
                return "<div style='  text-align: center;' > <span class=\"glyphicon glyphicon-edit\"  style=\"cursor: pointer\"></span> </div>";
            }
        });
        columnas.push({
            data: function (oObj) {
                return "<div style='  text-align: center;' ><span class=\"glyphicon glyphicon-trash\"  style=\"cursor: pointer\"></span> </div>";
            }
        });
        var novisibles;
        novisibles = [
            {
                targets: columnasNoVisibles,
                visible: false,
                searchable: true
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        ("entra");
        var tabla = $('#tabla_solicitudTejidoCornealRecepcion').DataTable({
            columnDefs: novisibles,
            language: {
                url: "assets/Spanish.json"
            },
            initComplete: function (settings, json) {
                var xs = $("#tabla_solicitudTejidoCornealRecepcion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.solicitudTejidoCornealRecepcion = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_2__["SolicitudTejidoCornealRecepcion"]();
                    self.primero = false;
                });
            },
            "drawCallback": function () {
                $('[data-toggle="tooltip"]').tooltip();
            },
            columns: columnas,
        });
        this.llenaInicial();
        $('#tabla_solicitudTejidoCornealRecepcion tbody').on('click', 'td', function (evt) {
            if (evt.currentTarget.cellIndex == $(evt.currentTarget).parent().find('td').length - 3) {
                var data = $('#tabla_solicitudTejidoCornealRecepcion')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.detalle(data);
                (data);
            }
            // Se capta el evento editar de data table
            if (evt.currentTarget.cellIndex == $(evt.currentTarget).parent().find("td").length - 2) {
                var data = $('#tabla_solicitudTejidoCornealRecepcion')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.editar(data);
            }
            if (evt.currentTarget.cellIndex == $(evt.currentTarget).parent().find("td").length - 1) {
                var data = $('#tabla_solicitudTejidoCornealRecepcion')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.borrar(data);
            }
        }.bind(this));
    };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.detalle = function (dato) {
        this.tipo = dato.tipo;
        this.idSeleccionado = dato.id;
        if (this.tipo == 1)
            $('#myModal').modal('show');
        else
            $('#evaluacionModal').modal('show');
    };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.editar = function (dato) {
        if (dato.tipo == 1) {
            this.globalesService.registraIdSolicitudTejidoC(dato.id);
            (dato.idSolicitud);
            this.router.navigateByUrl('/solicitud-tejido-corneal-crud/' + dato.id);
        }
        else {
            if (dato.tipo == 2) {
                bootbox.dialog({
                    title: 'Mensaje de confirmación de edición',
                    message: '¿Que desa editar?',
                    size: 'large',
                    onEscape: true,
                    backdrop: true,
                    buttons: {
                        se: {
                            label: 'Registro de Recepción',
                            className: 'btn-primary',
                            callback: function () {
                                this.globalesService.registraIdSolicitudTejidoC(dato.id);
                                (dato);
                                this.router.navigateByUrl('/recepcion-solicitud-evaluacion-crud/' + dato.id);
                            }.bind(this)
                        },
                        re: {
                            label: 'Registro de Oficio de Donación',
                            className: 'btn-info',
                            callback: function () {
                                this.globalesService.registraIdSolicitudEvaluacionTejido(dato.id);
                                this.router.navigateByUrl('/oficio-donacion-crud/' + dato.id);
                            }.bind(this)
                        },
                    }
                });
            }
        }
    };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.borrar = function (dato) {
        (dato);
        if (dato.tipo == "1") {
            // bootbox.confirm("¿Está seguro de eliminar?", function (result) {
            bootbox.confirm({
                message: "¿Está seguro de eliminar?",
                buttons: {
                    confirm: {
                        label: "Sí",
                        className: "btn-primary"
                    },
                    cancel: {
                        label: "No",
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {
                    if (result) {
                        var envio = {
                            id: dato.id,
                            baja: true
                        };
                        this.SolicitudTejidoCornealRecepcionService.bajaSolicitudByID(envio, this.evtBorrar, this);
                    }
                }.bind(this)
            });
        }
        else {
            if (dato.tipo == "2") {
                // bootbox.confirm("¿Está seguro de eliminar?", function (result) {
                bootbox.confirm({
                    message: "¿Está seguro de eliminar?",
                    buttons: {
                        confirm: {
                            label: "Sí",
                            className: "btn-primary"
                        },
                        cancel: {
                            label: "No",
                            className: 'btn-danger'
                        }
                    },
                    callback: function (result) {
                        if (result) {
                            var envio = {
                                id: dato.id,
                                baja: true
                            };
                            this.SolicitudTejidoCornealRecepcionService.bajaSolicitudByID(envio, this.evtBorrar, this);
                        }
                    }.bind(this)
                });
            }
        }
    };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.evtBorrar = function (bandera, obj) {
        if (bandera) {
            bootbox.alert('Datos eliminados con éxito');
            obj.llenaInicial({});
        }
    };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.ngOnInit = function () { };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.cambio_solicitudTejidoCornealRecepcion = function (solicitudTejidoCornealRecepcion) {
        $("#tabla_solicitudTejidoCornealRecepcion")
            .DataTable()
            .ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S
    // **********************************************************************************
    // **********************************************************************************
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    SolicitudTejidoCornealRecepcionTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla &&
                elemento.atributo == atributo &&
                (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    // **********************************************************************************
    // **********************************************************************************
    SolicitudTejidoCornealRecepcionTableComponent.prototype.llenaInicial = function () {
        var dato = {};
        var tabla = $("#tabla_solicitudTejidoCornealRecepcion").DataTable();
        tabla.clear().draw();
        $.ajax({
            url: this.url.serverURL +
                "solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesByFiltro",
            type: "post",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                data.forEach(function (enty) {
                    (data);
                    var obj = {};
                    obj.id = enty.id;
                    obj.tipo = enty.tipo;
                    // obj.esatusProceso = enty.esatusProceso;
                    obj.folioSolicitud = enty.folioSolicitud;
                    obj.hospital = enty.hospital;
                    obj.nombre = enty.nombre;
                    obj.primerApellido = enty.primerApellido;
                    obj.numeroExpediente = enty.numeroExpediente;
                    tabla.row.add(obj).draw(false);
                });
            },
            data: JSON.stringify(dato)
        });
    };
    SolicitudTejidoCornealRecepcionTableComponent.prototype.buscarByfiltere = function () {
        var dato = {
            "folioSolicitudTejidoCorneal": this.folioSolicitudTejidoCorneal,
            "numeroExpedienteReceptor": this.numeroExpedienteReceptor,
            "estatusProceso": this.estatusProceso
        };
        (dato);
        var tabla = $("#tabla_solicitudTejidoCornealRecepcion").DataTable();
        tabla.clear().draw();
        $.ajax({
            url: this.url.serverURL +
                "solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesByFiltro",
            type: "post",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                (data);
                data.forEach(function (enty) {
                    var obj = {};
                    obj.id = enty.idSolicitud;
                    obj.tipo = enty.tipo;
                    //   obj.esatusProceso = enty.esatusProceso;
                    obj.folioSolicitud = enty.folioSolicitud;
                    obj.hospital = enty.hospital;
                    obj.nombre = enty.nombre;
                    obj.primerApellido = enty.primerApellido;
                    obj.numeroExpediente = enty.numeroExpediente;
                    tabla.row.add(obj).draw(false);
                });
            },
            data: JSON.stringify(dato)
        });
    };
    SolicitudTejidoCornealRecepcionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-solicitud-tejido-corneal-recepcion-table",
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-table.component.html */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-table.component.css */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
                _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudTejidoCornealService"],
                _shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_0__["SolicitudTejidoCornealRecepcionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_4__["URLProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudTejidoCornealService"],
            _shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_0__["SolicitudTejidoCornealRecepcionService"]])
    ], SolicitudTejidoCornealRecepcionTableComponent);
    return SolicitudTejidoCornealRecepcionTableComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcionModule", function() { return SolicitudTejidoCornealRecepcionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _solicitud_tejido_corneal_recepcion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-routing.module */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-routing.module.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepcion_list_kendo_solicitud_tejido_corneal_recepcion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-list-kendo/solicitud-tejido-corneal-recepcion-list-kendo.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepcion_crud_solicitud_tejido_corneal_recepcion_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-crud/solicitud-tejido-corneal-recepcion-crud.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepcion_conjunto_solicitud_tejido_corneal_recepcion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-conjunto/solicitud-tejido-corneal-recepcion-conjunto.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepcion_solicitud_tejido_corneal_recepcion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepcion_table_bandeja_solicitud_tejido_corneal_recepcion_table_bandeja_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table-bandeja/solicitud-tejido-corneal-recepcion-table-bandeja.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepcion_table_solicitud_tejido_corneal_recepcion_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion-table/solicitud-tejido-corneal-recepcion-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module.ts");
/* harmony import */ var _solicitud_tejido_corneales_solicitud_tejido_corneal_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../solicitud-tejido-corneales/solicitud-tejido-corneal.module */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














var SolicitudTejidoCornealRecepcionModule = /** @class */ (function () {
    function SolicitudTejidoCornealRecepcionModule(parentModule) {
        if (parentModule) {
            throw new Error('SolicitudTejidoCornealRecepcionModule is already loaded. Import it in the AppModule only');
        }
    }
    SolicitudTejidoCornealRecepcionModule_1 = SolicitudTejidoCornealRecepcionModule;
    SolicitudTejidoCornealRecepcionModule.forRoot = function () {
        return {
            ngModule: SolicitudTejidoCornealRecepcionModule_1,
            providers: []
        };
    };
    var SolicitudTejidoCornealRecepcionModule_1;
    SolicitudTejidoCornealRecepcionModule = SolicitudTejidoCornealRecepcionModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"], _solicitud_tejido_corneal_recepcion_routing_module__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealRecepcionRoutingModule"], _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_module__WEBPACK_IMPORTED_MODULE_12__["SolicitudEvaluacionCornealModule"], _solicitud_tejido_corneales_solicitud_tejido_corneal_module__WEBPACK_IMPORTED_MODULE_13__["SolicitudTejidoCornealModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_10__["UsuarioPerfilModule"].forRoot()
            ],
            declarations: [
                _solicitud_tejido_corneal_recepcion_list_kendo_solicitud_tejido_corneal_recepcion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcionListKendoComponent"],
                _solicitud_tejido_corneal_recepcion_solicitud_tejido_corneal_recepcion_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudTejidoCornealRecepcionComponent"],
                _solicitud_tejido_corneal_recepcion_crud_solicitud_tejido_corneal_recepcion_crud_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcionCrudComponent"],
                _solicitud_tejido_corneal_recepcion_conjunto_solicitud_tejido_corneal_recepcion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudTejidoCornealRecepcionConjuntoComponent"],
                _solicitud_tejido_corneal_recepcion_table_bandeja_solicitud_tejido_corneal_recepcion_table_bandeja_component__WEBPACK_IMPORTED_MODULE_8__["SolicitudTejidoCornealRecepcionTableBandejaComponent"],
                _solicitud_tejido_corneal_recepcion_table_solicitud_tejido_corneal_recepcion_table_component__WEBPACK_IMPORTED_MODULE_9__["SolicitudTejidoCornealRecepcionTableComponent"],
            ],
            exports: [
                _solicitud_tejido_corneal_recepcion_list_kendo_solicitud_tejido_corneal_recepcion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRecepcionListKendoComponent"],
                _solicitud_tejido_corneal_recepcion_solicitud_tejido_corneal_recepcion_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudTejidoCornealRecepcionComponent"],
                _solicitud_tejido_corneal_recepcion_crud_solicitud_tejido_corneal_recepcion_crud_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealRecepcionCrudComponent"],
                _solicitud_tejido_corneal_recepcion_conjunto_solicitud_tejido_corneal_recepcion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudTejidoCornealRecepcionConjuntoComponent"],
                _solicitud_tejido_corneal_recepcion_table_bandeja_solicitud_tejido_corneal_recepcion_table_bandeja_component__WEBPACK_IMPORTED_MODULE_8__["SolicitudTejidoCornealRecepcionTableBandejaComponent"],
                _solicitud_tejido_corneal_recepcion_table_solicitud_tejido_corneal_recepcion_table_component__WEBPACK_IMPORTED_MODULE_9__["SolicitudTejidoCornealRecepcionTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [SolicitudTejidoCornealRecepcionModule])
    ], SolicitudTejidoCornealRecepcionModule);
    return SolicitudTejidoCornealRecepcionModule;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component.css":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\"     >\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h1>{{etiquetaGeneral}}</h1></div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label for=\"id_hoispital\">Folio de Solicitud de Tejido Corneal: </label>\n                        {{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.folioSolicitudTejidoCorneal}}\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"id_hoispital\">Hospital Solicitante: </label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.idhospital?.nombre}}\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"id_hoispital\">Entidad Federativa: </label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.idhospital?.identidadFederativa?.nombre}}\n                      </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label for=\"iddoctor\">Nombre del Oftalmólogo Responsable y/o Coordinador: </label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.iddoctorResponsableSolicitud?.nombre}}\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"telefono\">Telefono: </label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.iddoctorResponsableSolicitud?.telefono}}\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label for=\"correoElectronico\">Correo electronico: </label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.iddoctorResponsableSolicitud?.correoElectronico}}\n                      </div>\n                    </div>\n                    <h2>Datos del Receptor</h2>\n                    <hr class=\"red\"/>\n                    <div class=\"col-md-4\">\n                        <label for=\"iddoctor\">Nombre:</label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.nombreReceptor}}\n                    </div>\n                    <div class=\"col-md-4\">\n                        <label for=\"iddoctor\">Primer Apellido:</label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.primerApellidoReceptor}}\n                    </div>\n                    <div class=\"col-md-4\">\n                        <label for=\"iddoctor\">Segundo Apellido: </label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.segundoApellidoReceptor}}\n                    </div>\n                    <div class=\"col-md-4\">\n                        <label for=\"iddoctor\">Número Expediente: </label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.numeroExpedienteReceptor}}\n                    </div>\n                    <div class=\"col-md-4\">\n                        <label >Sexo: </label>{{this.solicitudTejidoCornealRecepcion?.idsolicitudTejidoCorneal?.sexoReceptor === 1 ? 'Hombre' : 'Mujer' }}\n                    </div>\n                    <div class=\"col-md-12\">\n                      <label>Tipo Cirugías Prevista:</label>\n                      <div class=\"form-check\">\n                        <input readonly=\"readonly\" type=\"checkbox\" class=\"form-check-input disabled\" id=\"qp\" [checked]=\"this.tipoCirugiaPrevista?.qp === 1\">\n                        <label class=\"form-check-label\" for=\"exampleCheck1\">QP</label>\n                      </div>\n                      <div class=\"form-check\">\n                        <input readonly=\"readonly\" type=\"checkbox\" class=\"form-check-input disabled\" id=\"dsaek\" [checked]=\"this.tipoCirugiaPrevista?.dsaek === 1\">\n                        <label class=\"form-check-label\" for=\"exampleCheck1\">DSAEK</label>\n                      </div>\n                      <div class=\"form-check\">\n                        <input readonly=\"readonly\" type=\"checkbox\" class=\"form-check-input disabled\" id=\"dalk\" [checked]=\"this.tipoCirugiaPrevista?.dalk === 1\">\n                        <label class=\"form-check-label\" for=\"exampleCheck1\">DALK</label>\n                      </div>\n                      <div class=\"form-check\">\n                        <input readonly=\"readonly\" type=\"checkbox\" class=\"form-check-input disabled\" id=\"dmek\" [checked]=\"this.tipoCirugiaPrevista?.dmek === 1\">\n                        <label class=\"form-check-label\" for=\"exampleCheck1\">DMEK</label>\n                      </div>\n                      <div class=\"form-check\">\n                        <input readonly=\"readonly\" type=\"checkbox\" class=\"form-check-input disabled\" id=\"otra\" [checked]=\"this.tipoCirugiaPrevista?.otra !== null\">\n                        <label class=\"form-check-label\" for=\"exampleCheck1\">OTRA:</label>\n                        <p style=\"padding-left: 5%\">{{this.tipoCirugiaPrevista?.otra}}</p>\n                      </div>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcionComponent", function() { return SolicitudTejidoCornealRecepcionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");
/* harmony import */ var _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolicitudTejidoCornealRecepcionComponent = /** @class */ (function () {
    function SolicitudTejidoCornealRecepcionComponent() {
        this.solicitudTejidoCornealRecepcionCambio = new _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealRecepcion"]();
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealRecepcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEditar = false;
        this.idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEditar = false;
        this.tipoCirugiaPrevistaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealRecepcionCambio = this.solicitudTejidoCornealRecepcion;
    }
    SolicitudTejidoCornealRecepcionComponent.prototype.actualizarSolicitudTejidoCornealRecepcion = function () {
        if (this.solicitudTejidoCornealRecepcion.id == null) {
            this.solicitudTejidoCornealRecepcionService.guardarSolicitudTejidoCornealRecepcion(this.solicitudTejidoCornealRecepcion, this.evtGuardar, this);
        }
        else {
            this.solicitudTejidoCornealRecepcionService.actualizarSolicitudTejidoCornealRecepcion(this.solicitudTejidoCornealRecepcion, this.evtActualiza, this);
        }
    };
    SolicitudTejidoCornealRecepcionComponent.prototype.evtGuardar = function (solicitudTejidoCornealRecepcion, obj) {
        obj.solicitudTejidoCornealRecepcion = solicitudTejidoCornealRecepcion;
        obj.solicitudTejidoCornealRecepcionChange.emit(obj.solicitudTejidoCornealRecepcion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    SolicitudTejidoCornealRecepcionComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.solicitudTejidoCornealRecepcionChange.emit(obj.solicitudTejidoCornealRecepcion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    SolicitudTejidoCornealRecepcionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarSolicitudTejidoCornealRecepcion();
            }
        }
        var c = this.solicitudTejidoCornealRecepcion;
    };
    SolicitudTejidoCornealRecepcionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "solicitudTejidoCornealRecepcionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "validosSolicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealRecepcion"])
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "solicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "solicitudTejidoCornealRecepcionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "solicitudTejidoCornealRecepcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_2__["TipoCirugiaPrevista"])
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "tipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealRecepcionComponent.prototype, "tipoCirugiaPrevistaChange", void 0);
    SolicitudTejidoCornealRecepcionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-recepcion',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-recepcion.component.html */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-recepcion.component.css */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion/solicitud-tejido-corneal-recepcion.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudTejidoCornealRecepcionComponent);
    return SolicitudTejidoCornealRecepcionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-solicitud-tejido-corneal-almacenes-solicitud-tejido-corneal-almacen-module~app-solicitud~cc7726e1.js.map