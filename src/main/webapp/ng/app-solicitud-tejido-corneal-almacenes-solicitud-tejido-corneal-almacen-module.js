(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-solicitud-tejido-corneal-almacenes-solicitud-tejido-corneal-almacen-module"],{

/***/ "./src/app/solicitud-tejido-corneal-almacenes/shared/configurar-solicitud-tejido-corneal-almacen.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/shared/configurar-solicitud-tejido-corneal-almacen.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ConfigurarSolicitudTejidoCornealAlmacen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarSolicitudTejidoCornealAlmacen", function() { return ConfigurarSolicitudTejidoCornealAlmacen; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarSolicitudTejidoCornealAlmacen = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarSolicitudTejidoCornealAlmacen() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudTejidoCornealAlmacen";
        this.rutaLista = this.crudServiceBaseUrl + "/getSolicitudTejidoCornealAlmacenes";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarSolicitudTejidoCornealAlmacen";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarSolicitudTejidoCornealAlmacen";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarSolicitudTejidoCornealAlmacen";
        this.titulo = "Catálogo SolicitudTejidoCornealAlmacen";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.solicitudTejidoCornealAlmacenConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarSolicitudTejidoCornealAlmacen.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudTejidoCornealAlmacen.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarSolicitudTejidoCornealAlmacen.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudTejidoCornealAlmacen.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarSolicitudTejidoCornealAlmacen.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudTejidoCornealAlmacen.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarSolicitudTejidoCornealAlmacen;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let solicitudTejidoCornealAlmacen of listaSolicitudTejidoCornealAlmacen \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+solicitudTejidoCornealAlmacen.id}\"\n        (click)=\"elegir(solicitudTejidoCornealAlmacen,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{solicitudTejidoCornealAlmacen.id}}\">{{solicitudTejidoCornealAlmacen.id}}</a>\n    </li>\n    <li *ngFor =  \"let solicitudTejidoCornealAlmacen of listaSolicitudTejidoCornealAlmacenN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+solicitudTejidoCornealAlmacen.id}\"\n        (click)=\"elegir(solicitudTejidoCornealAlmacen, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{solicitudTejidoCornealAlmacen.id}}\">T-{{solicitudTejidoCornealAlmacen.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let solicitudTejidoCornealAlmacen of listaSolicitudTejidoCornealAlmacen ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+solicitudTejidoCornealAlmacen.id}\" id=\"tab-I-{{solicitudTejidoCornealAlmacen.id}}\">\n\t\t\t<app-solicitud-tejido-corneal-almacen [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [solicitudTejidoCornealAlmacenBuscar]=\"solicitudTejidoCornealAlmacenBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosSolicitudTejidoCornealAlmacen]=\"validosSolicitudTejidoCornealAlmacen\"  \n\t\t\t\t\t\t  [solicitudTejidoCornealAlmacenService]=\"solicitudTejidoCornealAlmacenService\" [(opcion)]=\"opcionSolicitudTejidoCornealAlmacen\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(solicitudTejidoCornealAlmacen)]=\"listaSolicitudTejidoCornealAlmacen[i]\"  [ocultarConjuntos]=\"ocultarConjuntosSolicitudTejidoCornealAlmacen\"\n                           [lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario]=\"lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario\" \n                           [lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion]=\"lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-solicitud-tejido-corneal-almacen>\n        </div>\n        <div *ngFor = \"let solicitudTejidoCornealAlmacen of listaSolicitudTejidoCornealAlmacenN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+solicitudTejidoCornealAlmacen.id}\" id=\"tab-N-{{solicitudTejidoCornealAlmacen.id}}\">\n\t\t\t<app-solicitud-tejido-corneal-almacen [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [solicitudTejidoCornealAlmacenBuscar]=\"solicitudTejidoCornealAlmacenBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosSolicitudTejidoCornealAlmacen]=\"validosSolicitudTejidoCornealAlmacen\"  \n\t\t\t\t\t\t  [solicitudTejidoCornealAlmacenService]=\"solicitudTejidoCornealAlmacenService\" [(opcion)]=\"opcionSolicitudTejidoCornealAlmacen\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(solicitudTejidoCornealAlmacen)]=\"listaSolicitudTejidoCornealAlmacenN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosSolicitudTejidoCornealAlmacen\"\n                           [lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario]=\"lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario\" \n                           [lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion]=\"lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-solicitud-tejido-corneal-almacen>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacenConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacenConjuntoComponent", function() { return SolicitudTejidoCornealAlmacenConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolicitudTejidoCornealAlmacenConjuntoComponent = /** @class */ (function () {
    function SolicitudTejidoCornealAlmacenConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEditar = false;
        this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEditar = false;
        this.listaSolicitudTejidoCornealAlmacenN = [];
        this.listaSolicitudTejidoCornealAlmacen = [];
        this.listaSolicitudTejidoCornealAlmacenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealAlmacenN = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacen"]();
        this.solicitudTejidoCornealAlmacenNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    SolicitudTejidoCornealAlmacenConjuntoComponent.prototype.elegir = function (solicitudTejidoCornealAlmacen, tipo) {
        this.idSeleccionado = tipo + "-" + solicitudTejidoCornealAlmacen.id;
        this.solicitudTejidoCornealAlmacenN = solicitudTejidoCornealAlmacen;
    };
    SolicitudTejidoCornealAlmacenConjuntoComponent.prototype.ngOnInit = function () {
        this.solicitudTejidoCornealAlmacenN.id = 0;
        this.listaSolicitudTejidoCornealAlmacenN.push(Object.assign({}, this.solicitudTejidoCornealAlmacenN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    SolicitudTejidoCornealAlmacenConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacen"]();
        pg.id = this.listaSolicitudTejidoCornealAlmacenN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaSolicitudTejidoCornealAlmacenN.push(pg);
    };
    SolicitudTejidoCornealAlmacenConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaSolicitudTejidoCornealAlmacen; _i < _a.length; _i++) {
            var solicitudTejidoCornealAlmacen = _a[_i];
            this.solicitudTejidoCornealAlmacenService.actualizarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaSolicitudTejidoCornealAlmacenN; _b < _c.length; _b++) {
            var solicitudTejidoCornealAlmacen = _c[_b];
            solicitudTejidoCornealAlmacen.id = null;
            this.solicitudTejidoCornealAlmacenService.guardarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.evtGuardar, this);
        }
    };
    SolicitudTejidoCornealAlmacenConjuntoComponent.prototype.evtGuardar = function (solicitudTejidoCornealAlmacen, obj) {
        obj.agregados++;
        obj.listaSolicitudTejidoCornealAlmacen.push(solicitudTejidoCornealAlmacen);
        if (obj.agregados >= obj.listaSolicitudTejidoCornealAlmacenN.length) {
            obj.solicitudTejidoCornealAlmacenN = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacen"]();
            obj.listaSolicitudTejidoCornealAlmacenN = [];
            obj.solicitudTejidoCornealAlmacenN.id = 0;
            obj.idSeleccionado = "N-" + obj.solicitudTejidoCornealAlmacenN.id;
            obj.listaSolicitudTejidoCornealAlmacenN.push(Object.assign({}, obj.solicitudTejidoCornealAlmacenN));
            obj.listaSolicitudTejidoCornealAlmacenChange.emit(obj.listaSolicitudTejidoCornealAlmacen);
        }
        if (obj.agregados >= obj.listaSolicitudTejidoCornealAlmacenN.length &&
            obj.actualizados >= obj.listaSolicitudTejidoCornealAlmacen.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    SolicitudTejidoCornealAlmacenConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaSolicitudTejidoCornealAlmacenN.length &&
                obj.actualizados >= obj.listaSolicitudTejidoCornealAlmacen.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    SolicitudTejidoCornealAlmacenConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "solicitudTejidoCornealAlmacenBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "validosSolicitudTejidoCornealAlmacen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "ocultarConjuntosSolicitudTejidoCornealAlmacen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "solicitudTejidoCornealAlmacenService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "listaSolicitudTejidoCornealAlmacen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "listaSolicitudTejidoCornealAlmacenChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacen"])
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "solicitudTejidoCornealAlmacenN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenConjuntoComponent.prototype, "solicitudTejidoCornealAlmacenNChange", void 0);
    SolicitudTejidoCornealAlmacenConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-almacen-conjunto',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-almacen-conjunto.component.html */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-almacen-conjunto.component.css */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudTejidoCornealAlmacenConjuntoComponent);
    return SolicitudTejidoCornealAlmacenConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-solicitud-tejido-corneal-almacen [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n                           [solicitudTejidoCornealAlmacenBuscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosSolicitudTejidoCornealAlmacen]=\"validosSolicitudTejidoCornealAlmacen\"\n                           [solicitudTejidoCornealAlmacenService]=\"solicitudTejidoCornealAlmacen_service\"\n                           [(opcion)]=\"opcionSolicitudTejidoCornealAlmacen\"\n                           [globalesService]=\"globalesService\"\n                           [(solicitudTejidoCornealAlmacen)]=\"solicitudTejidoCornealAlmacen\"\n                           [ocultarConjuntos]=\"ocultarConjuntosSolicitudTejidoCornealAlmacen\"\n                           [lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario]=\"lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario\"\n                           [lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion]=\"lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion\"\n\n\t\t\t\t\t  >\n\n        </app-solicitud-tejido-corneal-almacen>\n\n        <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudTejidoCornealAlmacenBuscar\" (click)=\"buscarSolicitudTejidoCornealAlmacenFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudTejidoCornealAlmacenAgregar\" (click)=\"nuevoSolicitudTejidoCornealAlmacenFront()\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudTejidoCornealAlmacenActualizar\" (click)=\"actualizarSolicitudTejidoCornealAlmacenFront()\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudTejidoCornealAlmacenEliminar\" (click)=\"eliminarSolicitudTejidoCornealAlmacenFront()\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudTejidoCornealAlmacenGuardar\" (click)=\"guardarSolicitudTejidoCornealAlmacenFront()\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudTejidoCornealAlmacenCancelar\" (click)=\"cancelarSolicitudTejidoCornealAlmacenFront()\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudTejidoCornealAlmacenWord\" (click)=\"reporteSolicitudTejidoCornealAlmacenWord()\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudTejidoCornealAlmacenExcel\" (click)=\"reporteSolicitudTejidoCornealAlmacenExcel()\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudTejidoCornealAlmacenPdf\" (click)=\"reporteSolicitudTejidoCornealAlmacenPdf()\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"buscarSolicitudTejidoCornealAlmacen_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-solicitud-tejido-corneal-almacen-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionSolicitudTejidoCornealAlmacen]=\"configuracionSolicitudTejidoCornealAlmacen\"  (solicitudTejidoCornealAlmacenSeleccionado) =\"evtSolicitudTejidoCornealAlmacenSeleccionado($event)\">  </app-solicitud-tejido-corneal-almacen-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacenCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacenCrudComponent", function() { return SolicitudTejidoCornealAlmacenCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts");
/* harmony import */ var _shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-almacen.service */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service.ts");
/* harmony import */ var _shared_configurar_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/configurar-solicitud-tejido-corneal-almacen.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.service */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.service.ts");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts");
/* harmony import */ var _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../doctor-solicitantes/shared/doctor-solicitante.service */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.service.ts");
/* harmony import */ var _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../catalogo-cargos/shared/catalogo-cargo.service */ "./src/app/catalogo-cargos/shared/catalogo-cargo.service.ts");
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








var SolicitudTejidoCornealAlmacenCrudComponent = /** @class */ (function () {
    function SolicitudTejidoCornealAlmacenCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    solicitudTejidoCornealAlmacen_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, solicitudTejidoCornealRecepcion_service, solicitudTejidoCorneal_service, doctorSolicitante_service, catalogoCargo_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.solicitudTejidoCornealAlmacen_service = solicitudTejidoCornealAlmacen_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.solicitudTejidoCornealRecepcion_service = solicitudTejidoCornealRecepcion_service;
        this.solicitudTejidoCorneal_service = solicitudTejidoCorneal_service;
        this.doctorSolicitante_service = doctorSolicitante_service;
        this.catalogoCargo_service = catalogoCargo_service;
        this.opcionSolicitudTejidoCornealAlmacen = 0;
        this.validosSolicitudTejidoCornealAlmacen = {
            id: false,
            fechaBaja: false,
            tejidoExistente: false,
            fechaRegistro: false,
            estatusProceso: false,
            fechaActualizacion: false,
            status: false,
            usuarioUltMov: false,
            idsolicitudTejidoCornealRecepcion: false,
        };
        this.ocultarConjuntosSolicitudTejidoCornealAlmacen = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "solicitudTejidoCornealAlmacen", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.solicitudTejidoCornealAlmacenLazy = false;
        this.solicitudTejidoCornealAlmacenPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealAlmacen = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"]();
        this.solicitudTejidoCornealAlmacenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealAlmacenTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_solicitudTejidoCornealAlmacenes = [];
        this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario = [];
        this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEditar = false;
        this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion = new _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_14__["SolicitudTejidoCornealRecepcion"]();
        this.lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion = [];
        this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
        this.configuracionSolicitudTejidoCornealAlmacen = new _shared_configurar_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_6__["ConfigurarSolicitudTejidoCornealAlmacen"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealAlmacenUsuario, this);
        this.solicitudTejidoCornealRecepcion_service.getSolicitudTejidoCornealRecepcionesActivos(this.evtGetIdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion, this);
        this.limpiarCampos();
    }
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "solicitudTejidoCornealAlmacenOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosSolicitudTejidoCornealAlmacen)
                return true;
            return !this.solicitudTejidoCornealAlmacenActualizar;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.solicitudTejidoCornealAlmacen && changes.solicitudTejidoCornealAlmacen.currentValue == null &&
            this.solicitudTejidoCornealAlmacen == null)
            this.solicitudTejidoCornealAlmacen = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"]();
        else {
            var aux = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"]();
            if (this.solicitudTejidoCornealAlmacen)
                aux.from(this.solicitudTejidoCornealAlmacen);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenGuardar = false;
                this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = this.solicitudTejidoCornealAlmacenCancelar = true;
                this.permisosacciones();
                var thiss;
                thiss = this;
                if (thiss.configuarCombosObjetos)
                    thiss.configuarCombosObjetos();
                if (thiss.configurarTablasConjuntos)
                    thiss.configurarTablasConjuntos();
            }
            else {
                this.accion = 2;
                this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
                this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenCancelar = true;
            }
        }
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "solicitudTejidoCornealAlmacen",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "solicitudTejidoCornealRecepcion",
            "solicitudTejidoCorneal",
            "doctorSolicitante",
            "catalogoCargo",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.solicitudTejidoCornealAlmacenPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.solicitudTejidoCornealAlmacenPermisos = true;
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoAtributo && permisos.solicitudTejidoCornealAlmacen.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.solicitudTejidoCornealAlmacen.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoConjunto && permisos.solicitudTejidoCornealAlmacen.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.solicitudTejidoCornealAlmacen.PermisoConjunto;
        }
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoTabla && permisos.solicitudTejidoCornealAlmacen.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.solicitudTejidoCornealAlmacen.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo && permisos.usuario.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.usuario.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.usuario.PermisoAtributo);
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo && permisos.usuario.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.usuario.PermisoConjunto);
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoTabla && permisos.usuario.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.usuario.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.solicitudTejidoCornealRecepcion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.solicitudTejidoCornealRecepcion.PermisoAtributo);
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoAtributo && permisos.solicitudTejidoCornealRecepcion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.solicitudTejidoCornealRecepcion.PermisoConjunto);
        }
        if (permisos && permisos.solicitudTejidoCornealRecepcion && permisos.solicitudTejidoCornealRecepcion.PermisoTabla && permisos.solicitudTejidoCornealRecepcion.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.solicitudTejidoCornealRecepcion.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.solicitudTejidoCornealRecepcion.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.evtGetUsuarioUltMovSolicitudTejidoCornealAlmacenUsuario = function (lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario, obj) {
        obj.lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario = lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario;
        obj.actualizar_UsuarioUltMovSolicitudTejidoCornealAlmacenUsuario();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.evtGetIdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion = function (lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion, obj) {
        obj.lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion = lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion;
        obj.actualizar_IdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.actualizar_UsuarioUltMovSolicitudTejidoCornealAlmacenUsuario = function () {
        if (this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion.id) {
                    this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.actualizar_IdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion = function () {
        if (this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion)
            for (var _i = 0, _a = this.lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion.id) {
                    this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion = eleme;
                    break;
                }
            }
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.ngDoCheck = function () {
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaTejidoExistente", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['tejidoExistente'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaEstatusProceso", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['estatusProceso'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaIdsolicitudTejidoCornealRecepcion", {
        get: function () {
            return this.validosSolicitudTejidoCornealAlmacen['idsolicitudTejidoCornealRecepcion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaFechaBaja && this.validaTejidoExistente && this.validaFechaRegistro && this.validaEstatusProceso && this.validaFechaActualizacion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdsolicitudTejidoCornealRecepcion;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.obtenerSolicitudTejidoCornealAlmacenes = function (lista, objeto) {
        objeto.lista_solicitudTejidoCornealAlmacenes = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCornealAlmacen.from(lista[0]);
            objeto.evtSolicitudTejidoCornealAlmacenSeleccionado(objeto.solicitudTejidoCornealAlmacen);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.evn_lazy_solicitudTejidoCornealAlmacen = function (solicitudTejidoCornealAlmacen, objeto) {
        objeto.solicitudTejidoCornealAlmacen = solicitudTejidoCornealAlmacen;
        objeto.solicitudTejidoCornealAlmacenChange.emit(objeto.solicitudTejidoCornealAlmacen);
        objeto.configuarCombosObjetos();
        objeto.solicitudTejidoCornealAlmacenLazy = true;
    };
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "datosReporteSolicitudTejidoCornealAlmacenWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.solicitudTejidoCornealAlmacenActualizar && this.solicitudTejidoCornealAlmacenLazy && this.globalesService.preporteWord(this, "solicitudTejidoCornealAlmacen"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "datosReporteSolicitudTejidoCornealAlmacenExcel", {
        get: function () {
            return !(this.solicitudTejidoCornealAlmacenActualizar && this.solicitudTejidoCornealAlmacenLazy && this.globalesService.preporteExcel(this, "solicitudTejidoCornealAlmacen"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealAlmacenCrudComponent.prototype, "datosReporteSolicitudTejidoCornealAlmacenPdf", {
        get: function () {
            return !(this.solicitudTejidoCornealAlmacenActualizar && this.solicitudTejidoCornealAlmacenLazy && this.globalesService.preportePdf(this, "solicitudTejidoCornealAlmacen"));
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.reporteSolicitudTejidoCornealAlmacenExcel = function () {
        var nombre = "SolicitudTejidoCornealAlmacen.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "solicitudTejidoCornealAlmacen": this.solicitudTejidoCornealAlmacen };
        parametros["plantilla"] = "SolicitudTejidoCornealAlmacen.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.reporteSolicitudTejidoCornealAlmacenWord = function () {
        var nombre = "SolicitudTejidoCornealAlmacen.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "solicitudTejidoCornealAlmacen": this.solicitudTejidoCornealAlmacen };
        parametros["plantilla"] = "SolicitudTejidoCornealAlmacen.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.reporteSolicitudTejidoCornealAlmacenPdf = function () {
        var nombre = "SolicitudTejidoCornealAlmacen.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "solicitudTejidoCornealAlmacen": this.solicitudTejidoCornealAlmacen };
        parametros["plantilla"] = "SolicitudTejidoCornealAlmacen.docx";
        parametros["salida"] = "SolicitudTejidoCornealAlmacen.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenCancelar = true;
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.buscarSolicitudTejidoCornealAlmacenFront = function () {
        this.accionesBuscar();
        var vsolicitudTejidoCornealAlmacen = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"]();
        vsolicitudTejidoCornealAlmacen.from(this.solicitudTejidoCornealAlmacen);
        this.configuracionSolicitudTejidoCornealAlmacen = new _shared_configurar_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_6__["ConfigurarSolicitudTejidoCornealAlmacen"]();
        this.configuracionSolicitudTejidoCornealAlmacen.permisosTabla = { "tabla": "solicitudTejidoCornealAlmacen", "permiso": 8 };
        this.configuracionSolicitudTejidoCornealAlmacen.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta = vsolicitudTejidoCornealAlmacen;
        this.permisosacciones();
        $("#buscarSolicitudTejidoCornealAlmacen_" + this.nombre).modal();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.buscarSolicitudTejidoCornealAlmacenBack = function (solicitudTejidoCornealAlmacen) {
        this.solicitudTejidoCornealAlmacen_service.getSolicitudTejidoCornealAlmacenesByDto(solicitudTejidoCornealAlmacen, this.eventoSrvSolicitudTejidoCornealAlmacenBuscar, this);
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.eventoSrvSolicitudTejidoCornealAlmacenBuscar = function (lista, objeto) {
        objeto.lista_solicitudTejidoCornealAlmacenes = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCornealAlmacen = lista[0];
            objeto.solicitudTejidoCornealAlmacenLazy = false;
            objeto.solicitudTejidoCornealAlmacen_service.lazySolicitudTejidoCornealAlmacen(objeto.solicitudTejidoCornealAlmacen, objeto.evn_lazy_solicitudTejidoCornealAlmacen, objeto);
        }
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.guardarSolicitudTejidoCornealAlmacenFront = function () {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarSolicitudTejidoCornealAlmacenBack(this.solicitudTejidoCornealAlmacen);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.guardarSolicitudTejidoCornealAlmacenBack = function (solicitudTejidoCornealAlmacen) {
        if (solicitudTejidoCornealAlmacen.usuarioUltMov == null)
            solicitudTejidoCornealAlmacen.usuarioUltMov = this.globalesService.dameUsuario();
        if (solicitudTejidoCornealAlmacen.status == null || solicitudTejidoCornealAlmacen.status == "")
            solicitudTejidoCornealAlmacen.status = 1;
        this.solicitudTejidoCornealAlmacen_service.guardarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.eventoSrvSolicitudTejidoCornealAlmacenGuardar, this);
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.eventoSrvSolicitudTejidoCornealAlmacenGuardar = function (solicitudTejidoCornealAlmacen, obj) {
        obj.solicitudTejidoCornealAlmacen = solicitudTejidoCornealAlmacen;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"]();
        aux.from(solicitudTejidoCornealAlmacen);
        obj.solicitudTejidoCornealAlmacenChange.emit(aux);
        obj.solicitudTejidoCornealAlmacenTablaChange.emit(aux);
        obj.solicitudTejidoCornealAlmacenLazy = false;
        obj.solicitudTejidoCornealAlmacen_service.lazySolicitudTejidoCornealAlmacen(obj.solicitudTejidoCornealAlmacen, obj.evn_lazy_solicitudTejidoCornealAlmacen, obj);
        obj.accionesActualizar();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.actualizarSolicitudTejidoCornealAlmacenFront = function () {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarSolicitudTejidoCornealAlmacenBack(this.solicitudTejidoCornealAlmacen);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.actualizarSolicitudTejidoCornealAlmacenBack = function (solicitudTejidoCornealAlmacen) {
        solicitudTejidoCornealAlmacen.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudTejidoCornealAlmacen_service.actualizarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.eventoSrvSolicitudTejidoCornealAlmacenActualizar, this);
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.eventoSrvSolicitudTejidoCornealAlmacenActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.solicitudTejidoCornealAlmacenLazy = false;
            obj.solicitudTejidoCornealAlmacen_service.lazySolicitudTejidoCornealAlmacen(obj.solicitudTejidoCornealAlmacen, obj.evn_lazy_solicitudTejidoCornealAlmacen, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.solicitudTejidoCornealAlmacen);
            obj.solicitudTejidoCornealAlmacenChange.emit(aux);
            obj.solicitudTejidoCornealAlmacenTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.eliminarSolicitudTejidoCornealAlmacenFront = function () {
        this.accion = 4;
        this.eliminarSolicitudTejidoCornealAlmacenBack(this.solicitudTejidoCornealAlmacen);
        this.permisosacciones();
        this.accionesBuscar();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.eliminarSolicitudTejidoCornealAlmacenBack = function (solicitudTejidoCornealAlmacen) {
        solicitudTejidoCornealAlmacen.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudTejidoCornealAlmacen_service.eliminarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.eventoSrvSolicitudTejidoCornealAlmacenEliminar, this);
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.eventoSrvSolicitudTejidoCornealAlmacenEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.solicitudTejidoCornealAlmacen = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"]();
            obj.solicitudTejidoCornealAlmacenChange.emit(obj.solicitudTejidoCornealAlmacen);
            obj.solicitudTejidoCornealAlmacenTablaChange.emit(obj.solicitudTejidoCornealAlmacen);
            obj.limpiarCampos();
        }
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.cancelarSolicitudTejidoCornealAlmacenFront = function () {
        this.accion = 6;
        this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = true;
        this.permisosacciones();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.nuevoSolicitudTejidoCornealAlmacenFront = function () {
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
                this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false;
                this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenCancelar = true;
            }.bind(this)
        });
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealAlmacenUsuario, this);
        this.lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion = [];
        this.solicitudTejidoCornealRecepcion_service.getSolicitudTejidoCornealRecepcionesActivos(this.evtGetIdsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion, this);
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenGuardar = false;
        this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = this.solicitudTejidoCornealAlmacenCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.evtSolicitudTejidoCornealAlmacenSeleccionado = function (solicitudTejidoCornealAlmacen) {
        this.solicitudTejidoCornealAlmacen = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"]();
        this.solicitudTejidoCornealAlmacen.from(solicitudTejidoCornealAlmacen);
        this.solicitudTejidoCornealAlmacenLazy = false;
        this.solicitudTejidoCornealAlmacen_service.lazySolicitudTejidoCornealAlmacen(this.solicitudTejidoCornealAlmacen, this.evn_lazy_solicitudTejidoCornealAlmacen, this);
        this.accion = 7;
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenGuardar = false;
        this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = this.solicitudTejidoCornealAlmacenCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarSolicitudTejidoCornealAlmacen_" + this.nombre).modal("hide");
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false; // ******************** maquina
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.permisosacciones = function () {
        if (this.solicitudTejidoCornealAlmacenBuscar)
            this.solicitudTejidoCornealAlmacenBuscar = this.globalesService.pbuscar(this, "solicitudTejidoCornealAlmacen");
        if (this.solicitudTejidoCornealAlmacenActualizar)
            this.solicitudTejidoCornealAlmacenActualizar = (this.globalesService.pacutalizar(this, "solicitudTejidoCornealAlmacen") && this.globalesService.pbuscar(this, "solicitudTejidoCornealAlmacen"));
        if (this.solicitudTejidoCornealAlmacenEliminar)
            this.solicitudTejidoCornealAlmacenEliminar = (this.globalesService.peliminar(this, "solicitudTejidoCornealAlmacen") && this.globalesService.pbuscar(this, "solicitudTejidoCornealAlmacen"));
        if (this.solicitudTejidoCornealAlmacenAgregar)
            this.solicitudTejidoCornealAlmacenAgregar = this.globalesService.pagregar(this, "solicitudTejidoCornealAlmacen");
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.permisosaccionesInicio = function () {
        this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealAlmacenCrudComponent.prototype.limpiarCampos = function () {
        this.solicitudTejidoCornealAlmacen = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"]();
        this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEleccion = new _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_14__["SolicitudTejidoCornealRecepcion"]();
        this.solicitudTejidoCornealAlmacenChange.emit(this.solicitudTejidoCornealAlmacen);
        this.solicitudTejidoCornealAlmacenSeleccion = this.solicitudTejidoCornealAlmacenCancelar = this.solicitudTejidoCornealAlmacenGuardar = this.solicitudTejidoCornealAlmacenActualizar = this.solicitudTejidoCornealAlmacenEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealAlmacenBuscar = this.solicitudTejidoCornealAlmacenAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealAlmacenCrudComponent.prototype, "ocultarConjuntosSolicitudTejidoCornealAlmacen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SolicitudTejidoCornealAlmacenCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacen"])
    ], SolicitudTejidoCornealAlmacenCrudComponent.prototype, "solicitudTejidoCornealAlmacen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenCrudComponent.prototype, "solicitudTejidoCornealAlmacenChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenCrudComponent.prototype, "solicitudTejidoCornealAlmacenTablaChange", void 0);
    SolicitudTejidoCornealAlmacenCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-almacen-crud',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-almacen-crud.component.html */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-almacen-crud.component.css */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealAlmacenService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_15__["SolicitudTejidoCornealRecepcionService"],
                _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_18__["CatalogoCargoService"],
                _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_17__["DoctorSolicitanteService"],
                _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_16__["SolicitudTejidoCornealService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealAlmacenService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_15__["SolicitudTejidoCornealRecepcionService"],
            _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_16__["SolicitudTejidoCornealService"],
            _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_17__["DoctorSolicitanteService"],
            _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_18__["CatalogoCargoService"]])
    ], SolicitudTejidoCornealAlmacenCrudComponent);
    return SolicitudTejidoCornealAlmacenCrudComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para solicitudTejidoCornealAlmacen-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionSolicitudTejidoCornealAlmacen.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_solicitudTejidoCornealAlmacen_{{nombregrid}}\">\n                <div id=\"grid_solicitudTejidoCornealAlmacen_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacenListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacenListKendoComponent", function() { return SolicitudTejidoCornealAlmacenListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts");
/* harmony import */ var _shared_configurar_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/configurar-solicitud-tejido-corneal-almacen.ts");
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
var SolicitudTejidoCornealAlmacenListKendoComponent = /** @class */ (function () {
    function SolicitudTejidoCornealAlmacenListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.solicitudTejidoCornealAlmacenSeleccionado = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealAlmacen"]();
        this.configuracionSolicitudTejidoCornealAlmacen = new _shared_configurar_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudTejidoCornealAlmacen"]();
        this.nombregrid = "";
        this.evtSolicitudTejidoCornealAlmacenSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudTejidoCornealAlmacen";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCornealAlmacen'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCornealAlmacen'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    SolicitudTejidoCornealAlmacenListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionSolicitudTejidoCornealAlmacen.titulo.indexOf("Catálogo") != -1) {
            this.configuracionSolicitudTejidoCornealAlmacen.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    SolicitudTejidoCornealAlmacenListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionSolicitudTejidoCornealAlmacen && changes.configuracionSolicitudTejidoCornealAlmacen.currentValue &&
            (changes.configuracionSolicitudTejidoCornealAlmacen.previousValue instanceof _shared_configurar_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudTejidoCornealAlmacen"])) {
            if (changes.configuracionSolicitudTejidoCornealAlmacen.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionSolicitudTejidoCornealAlmacen.currentValue.permisosAtributos;
            if (changes.configuracionSolicitudTejidoCornealAlmacen.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionSolicitudTejidoCornealAlmacen.currentValue.permisosTabla;
            if ($("#grid_solicitudTejidoCornealAlmacen_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    SolicitudTejidoCornealAlmacenListKendoComponent.prototype.ngOnInit = function () {
        self["grid_solicitudTejidoCornealAlmacen_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionSolicitudTejidoCornealAlmacen.permisosAtributos &&
            this.configuracionSolicitudTejidoCornealAlmacen.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "solicitudTejidoCornealAlmacen",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealAlmacen'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealAlmacen'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCornealAlmacen'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionSolicitudTejidoCornealAlmacen.permisosAtributos)
            this.permisosAtributos = this.configuracionSolicitudTejidoCornealAlmacen.permisosAtributos;
        if (this.configuracionSolicitudTejidoCornealAlmacen.permisosTabla)
            this.permisosTabla = this.configuracionSolicitudTejidoCornealAlmacen.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealAlmacenListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoAtributo && permisos.solicitudTejidoCornealAlmacen.PermisoAtributo.length > 0
            && !obj.configuracionSolicitudTejidoCornealAlmacen.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.solicitudTejidoCornealAlmacen.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.SolicitudTejidoCornealAlmacen.PermisoAtributo ;
        }
        if (permisos && permisos.solicitudTejidoCornealAlmacen && permisos.solicitudTejidoCornealAlmacen.PermisoTabla && permisos.solicitudTejidoCornealAlmacen.PermisoTabla.length > 0
            && !obj.configuracionSolicitudTejidoCornealAlmacen.permisosTabla) {
            obj.globalesService.evtTablas(permisos.solicitudTejidoCornealAlmacen.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.SolicitudTejidoCornealAlmacen.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealAlmacenListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_solicitudTejidoCornealAlmacen_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    SolicitudTejidoCornealAlmacenListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl != null
            && this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta
            && this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta.isOk
            && !this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta.isOk())
            return;
        if (this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta) {
            if (!this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl && this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta instanceof _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealAlmacen"])
                this.configuracionSolicitudTejidoCornealAlmacen.rutaLista = this.crudServiceBaseUrl + "/getSolicitudTejidoCornealAlmacenesByDto";
            this.lista = this.configuracionSolicitudTejidoCornealAlmacen.lecturaP(completar, this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta);
            if (this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl) {
                this.rutaAgregar = this.configuracionSolicitudTejidoCornealAlmacen.agregarP(function () { }, this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl);
                this.rutaEliminar = this.configuracionSolicitudTejidoCornealAlmacen.eliminarP(function () { }, this.configuracionSolicitudTejidoCornealAlmacen.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionSolicitudTejidoCornealAlmacen.agregarP(completar, this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta);
                this.rutaEliminar = this.configuracionSolicitudTejidoCornealAlmacen.eliminarP(completar, this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta);
            }
        }
        else {
            this.lista = this.configuracionSolicitudTejidoCornealAlmacen.lectura();
            this.rutaAgregar = this.configuracionSolicitudTejidoCornealAlmacen.agregar();
            this.rutaEliminar = this.configuracionSolicitudTejidoCornealAlmacen.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "idsolicitudTejidoCornealRecepcion")) {
            campos["idsolicitudTejidoCornealRecepcion"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealAlmacen", "idsolicitudTejidoCornealRecepcion"), nullable: true, type: "object", defaultValue: { "id": "", "estatusProceso": "" } };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "tejidoExistente")) {
            campos["tejidoExistente"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealAlmacen", "tejidoExistente"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealAlmacen", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealAlmacen", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealAlmacen", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealAlmacen", "estatusProceso"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealAlmacen", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCornealAlmacen", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionSolicitudTejidoCornealAlmacen.rutaActualizar,
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
                        if (elem.fechaBaja && typeof elem.fechaBaja === "number") {
                            elem.fechaBaja = kendo.parseDate(new Date(elem.fechaBaja), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRegistro && typeof elem.fechaRegistro === "number") {
                            elem.fechaRegistro = kendo.parseDate(new Date(elem.fechaRegistro), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaActualizacion && typeof elem.fechaActualizacion === "number") {
                            elem.fechaActualizacion = kendo.parseDate(new Date(elem.fechaActualizacion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
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
            if (self.configuracionSolicitudTejidoCornealAlmacen.campoAgEl) {
                if (self.configuracionSolicitudTejidoCornealAlmacen.tipocampoAgEl == "SolicitudTejidoCornealAlmacenSolicitudTejidoCornealAlmacen")
                    self.configuracionSolicitudTejidoCornealAlmacen.campoAgEl.solicitudTejidoCornealAlmacen2 = options.models[0];
                else
                    self.configuracionSolicitudTejidoCornealAlmacen.campoAgEl.solicitudTejidoCornealAlmacen = options.models[0];
                return JSON.stringify(self.configuracionSolicitudTejidoCornealAlmacen.campoAgEl);
            }
            else if (est.options[operation].data.models.solicitudTejidoCornealAlmacen) {
                est.options[operation].data.models.solicitudTejidoCornealAlmacen2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    SolicitudTejidoCornealAlmacenListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealAlmacen", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "idsolicitudTejidoCornealRecepcion")) {
            columnas.push({ field: "idsolicitudTejidoCornealRecepcion", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealAlmacen", "idsolicitudTejidoCornealRecepcion"), editor: idsolicitudTejidoCornealRecepcionDropDownEditor, template: " #if (idsolicitudTejidoCornealRecepcion){#   #=idsolicitudTejidoCornealRecepcion.estatusProceso# # } # " });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "tejidoExistente")) {
            columnas.push({ field: "tejidoExistente", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealAlmacen", "tejidoExistente") });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealAlmacen", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealAlmacen", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealAlmacen", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealAlmacen", "estatusProceso") });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealAlmacen", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCornealAlmacen", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "solicitudTejidoCornealAlmacen", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "solicitudTejidoCornealAlmacen"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "solicitudTejidoCornealAlmacen")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "solicitudTejidoCornealAlmacen")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "solicitudTejidoCornealAlmacen") && this.configuracionSolicitudTejidoCornealAlmacen.solicitudTejidoCornealAlmacenConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_solicitudTejidoCornealAlmacen_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_solicitudTejidoCornealAlmacen_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionSolicitudTejidoCornealAlmacen.altoComponente,
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
        this.grid = $("#grid_solicitudTejidoCornealAlmacen_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudTejidoCornealRecepcion = this.urlprovider.serverURL + "solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesActivos";
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
        function idsolicitudTejidoCornealRecepcionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "estatusProceso",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidsolicitudTejidoCornealRecepcion,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    SolicitudTejidoCornealAlmacenListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_solicitudTejidoCornealAlmacen_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.solicitudTejidoCornealAlmacenSeleccionado = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealAlmacen"]();
        gridac.solicitudTejidoCornealAlmacenSeleccionado.from(dataItem);
        gridac.evtSolicitudTejidoCornealAlmacenSeleccionado.emit(gridac.solicitudTejidoCornealAlmacenSeleccionado);
        (gridac.solicitudTejidoCornealAlmacenSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudTejidoCornealAlmacen"])
    ], SolicitudTejidoCornealAlmacenListKendoComponent.prototype, "configuracionSolicitudTejidoCornealAlmacen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SolicitudTejidoCornealAlmacenListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("solicitudTejidoCornealAlmacenSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SolicitudTejidoCornealAlmacenListKendoComponent.prototype, "evtSolicitudTejidoCornealAlmacenSeleccionado", void 0);
    SolicitudTejidoCornealAlmacenListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-almacen-list-kendo',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-almacen-list-kendo.component.html */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-almacen-list-kendo.component.css */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], SolicitudTejidoCornealAlmacenListKendoComponent);
    return SolicitudTejidoCornealAlmacenListKendoComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacenRoutingModule", function() { return SolicitudTejidoCornealAlmacenRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_tejido_corneal_almacenes_solicitud_tejido_corneal_almacen_list_kendo_solicitud_tejido_corneal_almacen_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacenes_solicitud_tejido_corneal_almacen_crud_solicitud_tejido_corneal_almacen_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacenes_solicitud_tejido_corneal_almacen_table_solicitud_tejido_corneal_almacen_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'solicitud-tejido-corneal-almacen-list-kendo', component: _solicitud_tejido_corneal_almacenes_solicitud_tejido_corneal_almacen_list_kendo_solicitud_tejido_corneal_almacen_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["SolicitudTejidoCornealAlmacenListKendoComponent"] },
    { path: 'solicitud-tejido-corneal-almacen-crud', component: _solicitud_tejido_corneal_almacenes_solicitud_tejido_corneal_almacen_crud_solicitud_tejido_corneal_almacen_crud_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealAlmacenCrudComponent"] },
    { path: 'solicitud-tejido-corneal-almacen-table', component: _solicitud_tejido_corneal_almacenes_solicitud_tejido_corneal_almacen_table_solicitud_tejido_corneal_almacen_table_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacenTableComponent"] },
];
var SolicitudTejidoCornealAlmacenRoutingModule = /** @class */ (function () {
    function SolicitudTejidoCornealAlmacenRoutingModule() {
    }
    SolicitudTejidoCornealAlmacenRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SolicitudTejidoCornealAlmacenRoutingModule);
    return SolicitudTejidoCornealAlmacenRoutingModule;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.css":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_solicitudTejidoCornealAlmacen\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','id')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','id')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','idsolicitudTejidoCornealRecepcion')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','idsolicitudTejidoCornealRecepcion')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','tejidoExistente')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','tejidoExistente')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','fechaRegistro')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','fechaActualizacion')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','fechaBaja')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','estatusProceso')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','estatusProceso')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','usuarioUltMov')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','status')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','id')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','id')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','idsolicitudTejidoCornealRecepcion')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','idsolicitudTejidoCornealRecepcion')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','tejidoExistente')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','tejidoExistente')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','fechaRegistro')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','fechaActualizacion')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','fechaBaja')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','estatusProceso')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','estatusProceso')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','usuarioUltMov')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCornealAlmacen','status')\" >{{aetiqueta('solicitudTejidoCornealAlmacen','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-solicitud-tejido-corneal-almacen [class.hidden]=\"primero\" [(solicitudTejidoCornealAlmacen)]=\"solicitudTejidoCornealAlmacenSeleccionado\" (solicitudTejidoCornealAlmacenTablaChange)=\"cambio_solicitudTejidoCornealAlmacen($event)\"> </app-solicitud-tejido-corneal-almacen>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacenTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacenTableComponent", function() { return SolicitudTejidoCornealAlmacenTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../permiso-atributos/shared/permiso-atributo.service */ "./src/app/permiso-atributos/shared/permiso-atributo.service.ts");
/* harmony import */ var _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../permiso-tablas/shared/permiso-tabla.service */ "./src/app/permiso-tablas/shared/permiso-tabla.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SolicitudTejidoCornealAlmacenTableComponent = /** @class */ (function () {
    function SolicitudTejidoCornealAlmacenTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "solicitudTejidoCornealAlmacen", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.solicitudTejidoCornealAlmacenSeleccionado = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacen"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'solicitudTejidoCornealAlmacen'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    SolicitudTejidoCornealAlmacenTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'solicitudTejidoCornealAlmacen'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(SolicitudTejidoCornealAlmacenTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealAlmacenTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("solicitudTejidoCornealAlmacen", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("solicitudTejidoCornealAlmacen", "idsolicitudTejidoCornealRecepcion"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idsolicitudTejidoCornealRecepcion)
                    return "<span style=\"cursor: pointer\">" + oObj.idsolicitudTejidoCornealRecepcion.estatusProceso + "</span>";
                return "";
            }
        });
        if (!this.avisible("solicitudTejidoCornealAlmacen", "tejidoExistente"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "tejidoExistente" });
        if (!this.avisible("solicitudTejidoCornealAlmacen", "fechaRegistro"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("solicitudTejidoCornealAlmacen", "fechaActualizacion"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("solicitudTejidoCornealAlmacen", "fechaBaja"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("solicitudTejidoCornealAlmacen", "estatusProceso"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "estatusProceso" });
        if (!this.avisible("solicitudTejidoCornealAlmacen", "usuarioUltMov"))
            columnasNoVisibles.push(7);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("solicitudTejidoCornealAlmacen", "status"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("solicitudTejidoCornealAlmacen"))
            columnas.push({
                "data": function (oObj) {
                    return "<span style=\"cursor: pointer\">Editar</span>";
                }
            });
        var novisibles;
        novisibles = [
            {
                "targets": columnasNoVisibles,
                "visible": false,
                "searchable": false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_solicitudTejidoCornealAlmacen').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_solicitudTejidoCornealAlmacen_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.solicitudTejidoCornealAlmacenSeleccionado = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacen"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenes",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_solicitudTejidoCornealAlmacen tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_solicitudTejidoCornealAlmacen').DataTable().row(this).data();
                self.solicitudTejidoCornealAlmacenSeleccionado = new _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacen"]();
                self.solicitudTejidoCornealAlmacenSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_solicitudTejidoCornealAlmacen').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.ngOnInit = function () {
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.cambio_solicitudTejidoCornealAlmacen = function (solicitudTejidoCornealAlmacen) {
        $('#tabla_solicitudTejidoCornealAlmacen').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    SolicitudTejidoCornealAlmacenTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    SolicitudTejidoCornealAlmacenTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.avalidacion = function (tabla, atributo) {
        var salida = ".*";
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                if (elemento.validacion)
                    return elemento.validacion;
                else
                    return salida;
            }
        }
        return salida;
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    SolicitudTejidoCornealAlmacenTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    SolicitudTejidoCornealAlmacenTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-almacen-table',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-almacen-table.component.html */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-almacen-table.component.css */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], SolicitudTejidoCornealAlmacenTableComponent);
    return SolicitudTejidoCornealAlmacenTableComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacenModule", function() { return SolicitudTejidoCornealAlmacenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _solicitud_tejido_corneal_almacen_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud-tejido-corneal-almacen-routing.module */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-routing.module.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacen_list_kendo_solicitud_tejido_corneal_almacen_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-list-kendo/solicitud-tejido-corneal-almacen-list-kendo.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacen_crud_solicitud_tejido_corneal_almacen_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-crud/solicitud-tejido-corneal-almacen-crud.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacen_conjunto_solicitud_tejido_corneal_almacen_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-conjunto/solicitud-tejido-corneal-almacen-conjunto.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacen_solicitud_tejido_corneal_almacen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacen_table_solicitud_tejido_corneal_almacen_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen-table/solicitud-tejido-corneal-almacen-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion.module */ "./src/app/solicitud-tejido-corneal-recepciones/solicitud-tejido-corneal-recepcion.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
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












var SolicitudTejidoCornealAlmacenModule = /** @class */ (function () {
    function SolicitudTejidoCornealAlmacenModule(parentModule) {
        if (parentModule) {
            throw new Error('SolicitudTejidoCornealAlmacenModule is already loaded. Import it in the AppModule only');
        }
    }
    SolicitudTejidoCornealAlmacenModule_1 = SolicitudTejidoCornealAlmacenModule;
    SolicitudTejidoCornealAlmacenModule.forRoot = function () {
        return {
            ngModule: SolicitudTejidoCornealAlmacenModule_1,
            providers: []
        };
    };
    var SolicitudTejidoCornealAlmacenModule_1;
    SolicitudTejidoCornealAlmacenModule = SolicitudTejidoCornealAlmacenModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"], _solicitud_tejido_corneal_almacen_routing_module__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealAlmacenRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot(),
                _solicitud_tejido_corneal_recepciones_solicitud_tejido_corneal_recepcion_module__WEBPACK_IMPORTED_MODULE_10__["SolicitudTejidoCornealRecepcionModule"]
            ],
            declarations: [
                _solicitud_tejido_corneal_almacen_list_kendo_solicitud_tejido_corneal_almacen_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacenListKendoComponent"],
                _solicitud_tejido_corneal_almacen_solicitud_tejido_corneal_almacen_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudTejidoCornealAlmacenComponent"],
                _solicitud_tejido_corneal_almacen_crud_solicitud_tejido_corneal_almacen_crud_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealAlmacenCrudComponent"],
                _solicitud_tejido_corneal_almacen_conjunto_solicitud_tejido_corneal_almacen_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudTejidoCornealAlmacenConjuntoComponent"],
                _solicitud_tejido_corneal_almacen_table_solicitud_tejido_corneal_almacen_table_component__WEBPACK_IMPORTED_MODULE_8__["SolicitudTejidoCornealAlmacenTableComponent"],
            ],
            exports: [
                _solicitud_tejido_corneal_almacen_list_kendo_solicitud_tejido_corneal_almacen_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealAlmacenListKendoComponent"],
                _solicitud_tejido_corneal_almacen_solicitud_tejido_corneal_almacen_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudTejidoCornealAlmacenComponent"],
                _solicitud_tejido_corneal_almacen_crud_solicitud_tejido_corneal_almacen_crud_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealAlmacenCrudComponent"],
                _solicitud_tejido_corneal_almacen_conjunto_solicitud_tejido_corneal_almacen_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudTejidoCornealAlmacenConjuntoComponent"],
                _solicitud_tejido_corneal_almacen_table_solicitud_tejido_corneal_almacen_table_component__WEBPACK_IMPORTED_MODULE_8__["SolicitudTejidoCornealAlmacenTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [SolicitudTejidoCornealAlmacenModule])
    ], SolicitudTejidoCornealAlmacenModule);
    return SolicitudTejidoCornealAlmacenModule;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component.css":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\"     >\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h1>{{etiquetaGeneral}}</h1></div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                     <app-componente-identificador [componente]=\"'solicitudTejidoCornealAlmacen'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCornealAlmacen['id']\"\n                                                   [(dato)]=\"solicitudTejidoCornealAlmacen.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'solicitudTejidoCornealAlmacen'\"\n                                               [atributo]=\"'idsolicitudTejidoCornealRecepcion'\"\n                                               [buscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosSolicitudTejidoCornealAlmacen['idsolicitudTejidoCornealRecepcion']\"\n                                               [(dato)]=\"solicitudTejidoCornealAlmacen.idsolicitudTejidoCornealRecepcion\"  class=\"w-100\"\n                                               [atributoVisible]=\"'estatusProceso'\" >\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idsolicitudTejidoCornealRecepcionEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'solicitudTejidoCornealAlmacen','idsolicitudTejidoCornealRecepcion')\" >\n                                   <app-solicitud-tejido-corneal-recepcion-crud [nombre]=\"'idsolicitudTejidoCornealRecepcion'\" [solicitudTejidoCornealRecepcion]=\"solicitudTejidoCornealAlmacen.idsolicitudTejidoCornealRecepcion\" (solicitudTejidoCornealRecepcionChange)=\"evtIdsolicitudTejidoCornealRecepcion($event)\"\n                                                           [ocultarConjuntosSolicitudTejidoCornealRecepcion]=\"'true'\" [class.hidden]=\"!idsolicitudTejidoCornealRecepcionEditar\" ></app-solicitud-tejido-corneal-recepcion-crud>\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-cadena [componente]=\"'solicitudTejidoCornealAlmacen'\"\n                                                   [atributo]=\"'tejidoExistente'\"\n                                                   [buscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCornealAlmacen['tejidoExistente']\"\n                                                   [(dato)]=\"solicitudTejidoCornealAlmacen.tejidoExistente\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-fecha [componente]=\"'solicitudTejidoCornealAlmacen'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCornealAlmacen['fechaRegistro']\"\n                                                   [(dato)]=\"solicitudTejidoCornealAlmacen.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'solicitudTejidoCornealAlmacen'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCornealAlmacen['fechaActualizacion']\"\n                                                   [(dato)]=\"solicitudTejidoCornealAlmacen.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'solicitudTejidoCornealAlmacen'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCornealAlmacen['fechaBaja']\"\n                                                   [(dato)]=\"solicitudTejidoCornealAlmacen.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-cadena [componente]=\"'solicitudTejidoCornealAlmacen'\"\n                                                   [atributo]=\"'estatusProceso'\"\n                                                   [buscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCornealAlmacen['estatusProceso']\"\n                                                   [(dato)]=\"solicitudTejidoCornealAlmacen.estatusProceso\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                    <div>\n                        <app-componente-objeto [componente]=\"'solicitudTejidoCornealAlmacen'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosSolicitudTejidoCornealAlmacen['usuarioUltMov']\"\n                                               [(dato)]=\"solicitudTejidoCornealAlmacen.usuarioUltMov\"  class=\"w-100\"\n                                               [atributoVisible]=\"'username'\" >\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'solicitudTejidoCornealAlmacen','usuarioUltMov')\" >\n                                   <!--app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"solicitudTejidoCornealAlmacen.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud-->\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-radio [componente]=\"'solicitudTejidoCornealAlmacen'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"solicitudTejidoCornealAlmacenBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCornealAlmacen['status']\"\n                                                   [(dato)]=\"solicitudTejidoCornealAlmacen.status\"   class=\"w-100\" >\n                    </app-componente-radio >\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacenComponent", function() { return SolicitudTejidoCornealAlmacenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolicitudTejidoCornealAlmacenComponent = /** @class */ (function () {
    function SolicitudTejidoCornealAlmacenComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealAlmacenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEditar = false;
        this.idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEditar = false;
    }
    SolicitudTejidoCornealAlmacenComponent.prototype.actualizarSolicitudTejidoCornealAlmacen = function () {
        if (this.solicitudTejidoCornealAlmacen.id == null) {
            this.solicitudTejidoCornealAlmacenService.guardarSolicitudTejidoCornealAlmacen(this.solicitudTejidoCornealAlmacen, this.evtGuardar, this);
        }
        else {
            this.solicitudTejidoCornealAlmacenService.actualizarSolicitudTejidoCornealAlmacen(this.solicitudTejidoCornealAlmacen, this.evtActualiza, this);
        }
    };
    SolicitudTejidoCornealAlmacenComponent.prototype.evtGuardar = function (solicitudTejidoCornealAlmacen, obj) {
        obj.solicitudTejidoCornealAlmacen = solicitudTejidoCornealAlmacen;
        obj.solicitudTejidoCornealAlmacenChange.emit(obj.solicitudTejidoCornealAlmacen);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    SolicitudTejidoCornealAlmacenComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.solicitudTejidoCornealAlmacenChange.emit(obj.solicitudTejidoCornealAlmacen);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    SolicitudTejidoCornealAlmacenComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarSolicitudTejidoCornealAlmacen();
            }
        }
    };
    SolicitudTejidoCornealAlmacenComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "solicitudTejidoCornealAlmacenBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "validosSolicitudTejidoCornealAlmacen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacen"])
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "solicitudTejidoCornealAlmacen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "solicitudTejidoCornealAlmacenService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "solicitudTejidoCornealAlmacenChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealAlmacenComponent.prototype, "lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion", void 0);
    SolicitudTejidoCornealAlmacenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-almacen',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-almacen.component.html */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-almacen.component.css */ "./src/app/solicitud-tejido-corneal-almacenes/solicitud-tejido-corneal-almacen/solicitud-tejido-corneal-almacen.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudTejidoCornealAlmacenComponent);
    return SolicitudTejidoCornealAlmacenComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-solicitud-tejido-corneal-almacenes-solicitud-tejido-corneal-almacen-module.js.map