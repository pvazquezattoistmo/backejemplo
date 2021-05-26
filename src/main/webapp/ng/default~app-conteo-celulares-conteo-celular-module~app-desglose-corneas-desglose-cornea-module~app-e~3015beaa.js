(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~3015beaa"],{

/***/ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts":
/*!***********************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts ***!
  \***********************************************************************/
/*! exports provided: EvaluacionSolicitud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitud", function() { return EvaluacionSolicitud; });
/**
 *
 * @author IstmoSoft
 */
var EvaluacionSolicitud = /** @class */ (function () {
    // atributos fin
    function EvaluacionSolicitud(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.status = null;
        this.usuarioUltMov = null;
        this.idrecepcionSolicitudEvaluacion = null;
        this.estudiosLaboratorio = null;
        this.lamparasHendidura = null;
        this.conteosCelular = null;
        this.almacenEvaluacion = null;
        this.desgloseCorneas = null;
        if (source !== null)
            this.from(source);
    }
    EvaluacionSolicitud.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idrecepcionSolicitudEvaluacion)
            this.idrecepcionSolicitudEvaluacion = source.idrecepcionSolicitudEvaluacion;
    };
    EvaluacionSolicitud.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idrecepcionSolicitudEvaluacion)
            return true;
        return false;
    };
    EvaluacionSolicitud.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idrecepcionSolicitudEvaluacion != null && typeof this.idrecepcionSolicitudEvaluacion === 'string' && this.idrecepcionSolicitudEvaluacion.replace(/^\s+|\s+$/g, '') == "")
            this.idrecepcionSolicitudEvaluacion = null;
        return this;
    };
    return EvaluacionSolicitud;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component.css":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let recepcionSolicitudEvaluacion of listaRecepcionSolicitudEvaluacion \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+recepcionSolicitudEvaluacion.id}\"\n        (click)=\"elegir(recepcionSolicitudEvaluacion,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{recepcionSolicitudEvaluacion.id}}\">{{recepcionSolicitudEvaluacion.id}}</a>\n    </li>\n    <li *ngFor =  \"let recepcionSolicitudEvaluacion of listaRecepcionSolicitudEvaluacionN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+recepcionSolicitudEvaluacion.id}\"\n        (click)=\"elegir(recepcionSolicitudEvaluacion, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{recepcionSolicitudEvaluacion.id}}\">T-{{recepcionSolicitudEvaluacion.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let recepcionSolicitudEvaluacion of listaRecepcionSolicitudEvaluacion ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+recepcionSolicitudEvaluacion.id}\" id=\"tab-I-{{recepcionSolicitudEvaluacion.id}}\">\n\t\t\t<app-recepcion-solicitud-evaluacion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [recepcionSolicitudEvaluacionBuscar]=\"recepcionSolicitudEvaluacionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosRecepcionSolicitudEvaluacion]=\"validosRecepcionSolicitudEvaluacion\"  \n\t\t\t\t\t\t  [recepcionSolicitudEvaluacionService]=\"recepcionSolicitudEvaluacionService\" [(opcion)]=\"opcionRecepcionSolicitudEvaluacion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(recepcionSolicitudEvaluacion)]=\"listaRecepcionSolicitudEvaluacion[i]\"  [ocultarConjuntos]=\"ocultarConjuntosRecepcionSolicitudEvaluacion\"\n                           [lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario]=\"lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario\" \n                           [lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal]=\"lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-recepcion-solicitud-evaluacion>\n        </div>\n        <div *ngFor = \"let recepcionSolicitudEvaluacion of listaRecepcionSolicitudEvaluacionN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+recepcionSolicitudEvaluacion.id}\" id=\"tab-N-{{recepcionSolicitudEvaluacion.id}}\">\n\t\t\t<app-recepcion-solicitud-evaluacion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [recepcionSolicitudEvaluacionBuscar]=\"recepcionSolicitudEvaluacionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosRecepcionSolicitudEvaluacion]=\"validosRecepcionSolicitudEvaluacion\"  \n\t\t\t\t\t\t  [recepcionSolicitudEvaluacionService]=\"recepcionSolicitudEvaluacionService\" [(opcion)]=\"opcionRecepcionSolicitudEvaluacion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(recepcionSolicitudEvaluacion)]=\"listaRecepcionSolicitudEvaluacionN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosRecepcionSolicitudEvaluacion\"\n                           [lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario]=\"lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario\" \n                           [lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal]=\"lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-recepcion-solicitud-evaluacion>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: RecepcionSolicitudEvaluacionConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionSolicitudEvaluacionConjuntoComponent", function() { return RecepcionSolicitudEvaluacionConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecepcionSolicitudEvaluacionConjuntoComponent = /** @class */ (function () {
    function RecepcionSolicitudEvaluacionConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEditar = false;
        this.idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEditar = false;
        this.listaRecepcionSolicitudEvaluacionN = [];
        this.listaRecepcionSolicitudEvaluacion = [];
        this.listaRecepcionSolicitudEvaluacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recepcionSolicitudEvaluacionN = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__["RecepcionSolicitudEvaluacion"]();
        this.recepcionSolicitudEvaluacionNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    RecepcionSolicitudEvaluacionConjuntoComponent.prototype.elegir = function (recepcionSolicitudEvaluacion, tipo) {
        this.idSeleccionado = tipo + "-" + recepcionSolicitudEvaluacion.id;
        this.recepcionSolicitudEvaluacionN = recepcionSolicitudEvaluacion;
    };
    RecepcionSolicitudEvaluacionConjuntoComponent.prototype.ngOnInit = function () {
        this.recepcionSolicitudEvaluacionN.id = 0;
        this.listaRecepcionSolicitudEvaluacionN.push(Object.assign({}, this.recepcionSolicitudEvaluacionN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    RecepcionSolicitudEvaluacionConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__["RecepcionSolicitudEvaluacion"]();
        pg.id = this.listaRecepcionSolicitudEvaluacionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaRecepcionSolicitudEvaluacionN.push(pg);
    };
    RecepcionSolicitudEvaluacionConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaRecepcionSolicitudEvaluacion; _i < _a.length; _i++) {
            var recepcionSolicitudEvaluacion = _a[_i];
            this.recepcionSolicitudEvaluacionService.actualizarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaRecepcionSolicitudEvaluacionN; _b < _c.length; _b++) {
            var recepcionSolicitudEvaluacion = _c[_b];
            recepcionSolicitudEvaluacion.id = null;
            this.recepcionSolicitudEvaluacionService.guardarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion, this.evtGuardar, this);
        }
    };
    RecepcionSolicitudEvaluacionConjuntoComponent.prototype.evtGuardar = function (recepcionSolicitudEvaluacion, obj) {
        obj.agregados++;
        obj.listaRecepcionSolicitudEvaluacion.push(recepcionSolicitudEvaluacion);
        if (obj.agregados >= obj.listaRecepcionSolicitudEvaluacionN.length) {
            obj.recepcionSolicitudEvaluacionN = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__["RecepcionSolicitudEvaluacion"]();
            obj.listaRecepcionSolicitudEvaluacionN = [];
            obj.recepcionSolicitudEvaluacionN.id = 0;
            obj.idSeleccionado = "N-" + obj.recepcionSolicitudEvaluacionN.id;
            obj.listaRecepcionSolicitudEvaluacionN.push(Object.assign({}, obj.recepcionSolicitudEvaluacionN));
            obj.listaRecepcionSolicitudEvaluacionChange.emit(obj.listaRecepcionSolicitudEvaluacion);
        }
        if (obj.agregados >= obj.listaRecepcionSolicitudEvaluacionN.length &&
            obj.actualizados >= obj.listaRecepcionSolicitudEvaluacion.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    RecepcionSolicitudEvaluacionConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaRecepcionSolicitudEvaluacionN.length &&
                obj.actualizados >= obj.listaRecepcionSolicitudEvaluacion.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    RecepcionSolicitudEvaluacionConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "recepcionSolicitudEvaluacionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "validosRecepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "ocultarConjuntosRecepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "recepcionSolicitudEvaluacionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "listaRecepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "listaRecepcionSolicitudEvaluacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__["RecepcionSolicitudEvaluacion"])
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "recepcionSolicitudEvaluacionN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionConjuntoComponent.prototype, "recepcionSolicitudEvaluacionNChange", void 0);
    RecepcionSolicitudEvaluacionConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recepcion-solicitud-evaluacion-conjunto',
            template: __webpack_require__(/*! ./recepcion-solicitud-evaluacion-conjunto.component.html */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./recepcion-solicitud-evaluacion-conjunto.component.css */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], RecepcionSolicitudEvaluacionConjuntoComponent);
    return RecepcionSolicitudEvaluacionConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <!-- <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"!viewModeEvaluacion\">\n        <div style=\"display: inline-block;width: 90%; margin-right: 10%;\"> -->\n            <!-- <button type=\"button\" class=\"btn btn-guardar\" (click)=\"limpiarCampos()\">\n                <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n              </button> -->\n            <!-- <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudEvaluacionCornealBuscar\" (click)=\"buscarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n                                  <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudEvaluacionCornealAgregar\" (click)=\"nuevoSolicitudEvaluacionCornealFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n                                  <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealActualizar\" (click)=\"actualizarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n                                  <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudEvaluacionCornealEliminar\" (click)=\"eliminarSolicitudEvaluacionCornealFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n                                  <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealGuardar\" (click)=\"guardarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n                                  <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudEvaluacionCornealCancelar\" (click)=\"cancelarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n                                  <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n                                  <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealWord\" (click)=\"reporteSolicitudEvaluacionCornealWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n                                  <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealExcel\" (click)=\"reporteSolicitudEvaluacionCornealExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n                                  <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealPdf\" (click)=\"reporteSolicitudEvaluacionCornealPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n                                -->\n        <!-- </div>\n    </div> -->\n    <app-recepcion-solicitud-evaluacion [usuariologueado]=\"recepcionSolicitudEvaluacion.idUsuarioRecibe? recepcionSolicitudEvaluacion.idUsuarioRecibe : usuariologueado\" etiquetaGeneral=\"REGISTRO DE RECEPCIÓN DE TEJIDO CORNEAL\" [recepcionSolicitudEvaluacionBuscar]=\"recepcionSolicitudEvaluacionBuscar\" [permisosAtributos]=\"permisosAtributos\" [permisosConjuntos]=\"permisosConjuntos\"\n        [validosRecepcionSolicitudEvaluacion]=\"validosRecepcionSolicitudEvaluacion\" [recepcionSolicitudEvaluacionService]=\"recepcionSolicitudEvaluacion_service\" [(opcion)]=\"opcionRecepcionSolicitudEvaluacion\" [globalesService]=\"globalesService\" [(recepcionSolicitudEvaluacion)]=\"recepcionSolicitudEvaluacion\"\n        [ocultarConjuntos]=\"ocultarConjuntosRecepcionSolicitudEvaluacion\" [lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario]=\"\n      lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario\n    \" [lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal]=\"\n      lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal\n    \" [usuarioLogueado]=\"recepcionSolicitudEvaluacion.idUsuarioRecibe? recepcionSolicitudEvaluacion.idUsuarioRecibe : usuariologueado\" [(solicitudEvaluacionCorneal)]=\"solicitudEvaluacionCorneal\" [viewModeEvaluacion]=\"viewModeEvaluacion\" [enableDerecha]=\"enableDerecha\" [enableIzquierda]=\"enableIzquierda\">\n    </app-recepcion-solicitud-evaluacion>\n\n    <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"!viewModeEvaluacion\">\n        <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n            <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn  btn-primary btn-guardar\" (click)=\"doSave()\">\n                <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n              </button>\n            <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-guardar\" [disabled]=\"!validaTodosc\" (click)=\"doImprimirEtiqueta()\" [disabled]=\"!recepcionSolicitudEvaluacion.idbtcCi && !recepcionSolicitudEvaluacion.idbtcCd\">\n        <span class=\"fa fa-floppy-disk\"></span>Imprimir Etiqueta\n      </button>\n\n            <button type=\"button\" class=\"btn btn-primary btn-guardar\" (click)=\"doGenerarIdBTC()\" [disabled]=\"recepcionSolicitudEvaluacion.idbtcCi || recepcionSolicitudEvaluacion.idbtcCd\">\n        <span class=\"fa fa-floppy-disk\"></span>Generar ID del BTC\n      </button>\n\n            <!-- <button\n        style=\"margin-right: 10px;\"\n        type=\"button\"\n        class=\"btn btn-guardar\"\n        [routerLink]=\"['/solicitud-evaluacion-corneal-crud/', 54]\"\n      >\n        <span class=\"fa fa-floppy-disk\"></span>Átras\n      </button> -->\n            <!-- <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudEvaluacionCornealBuscar\" (click)=\"buscarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n                      <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudEvaluacionCornealAgregar\" (click)=\"nuevoSolicitudEvaluacionCornealFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n                      <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealActualizar\" (click)=\"actualizarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n                      <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudEvaluacionCornealEliminar\" (click)=\"eliminarSolicitudEvaluacionCornealFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n                      <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealGuardar\" (click)=\"guardarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n                      <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudEvaluacionCornealCancelar\" (click)=\"cancelarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n                      <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n                      <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealWord\" (click)=\"reporteSolicitudEvaluacionCornealWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n                      <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealExcel\" (click)=\"reporteSolicitudEvaluacionCornealExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n                      <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealPdf\" (click)=\"reporteSolicitudEvaluacionCornealPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n                    -->\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"buscarRecepcionSolicitudEvaluacion_{{ nombre }}\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-recepcion-solicitud-evaluacion-list-kendo [nombregrid]=\"'buscar_' + nombre\" [configuracionRecepcionSolicitudEvaluacion]=\"\n            configuracionRecepcionSolicitudEvaluacion\n          \" (recepcionSolicitudEvaluacionSeleccionado)=\"\n            evtRecepcionSolicitudEvaluacionSeleccionado($event)\n          \">\n                </app-recepcion-solicitud-evaluacion-list-kendo>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n          Close\n        </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: RecepcionSolicitudEvaluacionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionSolicitudEvaluacionCrudComponent", function() { return RecepcionSolicitudEvaluacionCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _shared_configurar_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/configurar-recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/configurar-recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
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








//import { PerfilBtcService } from "../../perfil-btcs/shared/perfil-btc.service";
//import { PerfilBtc } from "../../perfil-btcs/shared/perfil-btc";






var RecepcionSolicitudEvaluacionCrudComponent = /** @class */ (function () {
    function RecepcionSolicitudEvaluacionCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    recepcionSolicitudEvaluacion_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, solicitudEvaluacionCorneal_service, causaMuerte_service, activatedRoute) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.recepcionSolicitudEvaluacion_service = recepcionSolicitudEvaluacion_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.activatedRoute = activatedRoute;
        this.opcionRecepcionSolicitudEvaluacion = 0;
        this.validosRecepcionSolicitudEvaluacion = {
            id: false,
            horaRecepcion: false,
            registroTejido: false,
            fechaBaja: false,
            tejidoCorneaDerecha: false,
            fechaRegistro: false,
            estatusProceso: false,
            expedienteFisico: false,
            idbtcCi: false,
            tejidoCorneaIzquierda: false,
            idbtcCd: false,
            fechaActualizacion: false,
            fechaRecepcion: false,
            status: false,
            usuarioUltMov: false,
            idsolicitudEvaluacionCorneal: false
        };
        this.ocultarConjuntosRecepcionSolicitudEvaluacion = false;
        this.nombre = "";
        this.permisosTabla = {
            tabla: "recepcionSolicitudEvaluacion",
            permiso: 0,
            etiqueta: ""
        };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.recepcionSolicitudEvaluacionLazy = false;
        this.recepcionSolicitudEvaluacionPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recepcionSolicitudEvaluacion = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
        this.recepcionSolicitudEvaluacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recepcionSolicitudEvaluacionTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_recepcionSolicitudEvaluaciones = [];
        this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario = [];
        this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEditar = false;
        this.idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_15__["SolicitudEvaluacionCorneal"]();
        this.lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal = [];
        this.idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEditar = false;
        this.solicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_15__["SolicitudEvaluacionCorneal"]();
        this.enableIzquierda = true;
        this.enableDerecha = true;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
        this.configuracionRecepcionSolicitudEvaluacion = new _shared_configurar_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_7__["ConfigurarRecepcionSolicitudEvaluacion"]();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovRecepcionSolicitudEvaluacionUsuario, this);
        // this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(this.evtGetIdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal, this);
        this.limpiarCampos();
    }
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "recepcionSolicitudEvaluacionOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosRecepcionSolicitudEvaluacion)
                return true;
            return !this.recepcionSolicitudEvaluacionActualizar;
        },
        enumerable: true,
        configurable: true
    });
    RecepcionSolicitudEvaluacionCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.recepcionSolicitudEvaluacion &&
            changes.recepcionSolicitudEvaluacion.currentValue == null &&
            this.recepcionSolicitudEvaluacion == null)
            this.recepcionSolicitudEvaluacion = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
        else {
            var aux = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
            if (this.recepcionSolicitudEvaluacion)
                aux.from(this.recepcionSolicitudEvaluacion);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionGuardar = false;
                this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = this.recepcionSolicitudEvaluacionCancelar = true;
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
                this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
                this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionCancelar = true;
            }
        }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "recepcionSolicitudEvaluacion",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "solicitudEvaluacionCorneal",
            "causaMuerte"
        ];
        var parametros = {
            id_usu: this.usuariologueado.id,
            tablas: tablas,
            id_exp: id_expe
        };
        this.recepcionSolicitudEvaluacionPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    RecepcionSolicitudEvaluacionCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.recepcionSolicitudEvaluacionPermisos = true;
        if (permisos &&
            permisos.recepcionSolicitudEvaluacion &&
            permisos.recepcionSolicitudEvaluacion.PermisoAtributo &&
            permisos.recepcionSolicitudEvaluacion.PermisoAtributo.length > 0) {
            obj.permisosAtributos =
                permisos.recepcionSolicitudEvaluacion.PermisoAtributo;
        }
        else {
            obj.usuariologueado = obj.globalesService.dameUsuario();
            ;
        }
        if (permisos &&
            permisos.recepcionSolicitudEvaluacion &&
            permisos.recepcionSolicitudEvaluacion.PermisoConjunto &&
            permisos.recepcionSolicitudEvaluacion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos =
                permisos.recepcionSolicitudEvaluacion.PermisoConjunto;
        }
        if (permisos &&
            permisos.recepcionSolicitudEvaluacion &&
            permisos.recepcionSolicitudEvaluacion.PermisoTabla &&
            permisos.recepcionSolicitudEvaluacion.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.recepcionSolicitudEvaluacion.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos &&
            permisos.usuario &&
            permisos.usuario.PermisoAtributo &&
            permisos.usuario.PermisoAtributo.length > 0) {
            //obj.configuracion$1=
            permisos.usuario.PermisoAtributo;
            obj.permisosAtributos.push(permisos.usuario.PermisoAtributo);
        }
        if (permisos &&
            permisos.usuario &&
            permisos.usuario.PermisoAtributo &&
            permisos.usuario.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.usuario.PermisoConjunto);
        }
        if (permisos &&
            permisos.usuario &&
            permisos.usuario.PermisoTabla &&
            permisos.usuario.PermisoTabla.length > 0) {
            //obj.configuracion$1=
            permisos.usuario.PermisoTabla[0];
            // obj.permisosTabla.push(permisos.usuario.PermisoTabla[0]);
        }
        if (permisos &&
            permisos.solicitudEvaluacionCorneal &&
            permisos.solicitudEvaluacionCorneal.PermisoAtributo &&
            permisos.solicitudEvaluacionCorneal.PermisoAtributo.length > 0) {
            //obj.configuracion$1=
            permisos.solicitudEvaluacionCorneal.PermisoAtributo;
            obj.permisosAtributos.push(permisos.solicitudEvaluacionCorneal.PermisoAtributo);
        }
        if (permisos &&
            permisos.solicitudEvaluacionCorneal &&
            permisos.solicitudEvaluacionCorneal.PermisoAtributo &&
            permisos.solicitudEvaluacionCorneal.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.solicitudEvaluacionCorneal.PermisoConjunto);
        }
        if (permisos &&
            permisos.solicitudEvaluacionCorneal &&
            permisos.solicitudEvaluacionCorneal.PermisoTabla &&
            permisos.solicitudEvaluacionCorneal.PermisoTabla.length > 0) {
            //obj.configuracion$1=
            permisos.solicitudEvaluacionCorneal.PermisoTabla[0];
            // obj.permisosTabla.push(
            //   permisos.solicitudEvaluacionCorneal.PermisoTabla[0]
            // );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    RecepcionSolicitudEvaluacionCrudComponent.prototype.evtGetUsuarioUltMovRecepcionSolicitudEvaluacionUsuario = function (lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario, obj) {
        obj.lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario = lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario;
        obj.actualizar_UsuarioUltMovRecepcionSolicitudEvaluacionUsuario();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.evtGetIdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal = function (lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal, obj) {
        obj.lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal = lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal;
        obj.actualizar_IdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.actualizar_UsuarioUltMovRecepcionSolicitudEvaluacionUsuario = function () {
        if (this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion)
            for (var _i = 0, _a = this
                .lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id ==
                    this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion.id) {
                    this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.actualizar_IdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal = function () {
        if (this
            .idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion)
            for (var _i = 0, _a = this
                .lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id ==
                    this
                        .idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion
                        .id) {
                    this.idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion = eleme;
                    break;
                }
            }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.ngDoCheck = function () { };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.validaAcciones = function (vall) {
        return (this.accion == 0 ||
            this.accion == 1 ||
            this.accion == 4 ||
            this.accion == 6 ||
            (this.accion == 7 && vall) ||
            (this.accion == 2 && vall) ||
            (this.accion == 3 && vall) ||
            (this.accion == 5 && vall));
    };
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaHoraRecepcion", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["horaRecepcion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaRegistroTejido", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["registroTejido"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["fechaBaja"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaTejidoCorneaDerecha", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["tejidoCorneaDerecha"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["fechaRegistro"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaEstatusProceso", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["estatusProceso"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaExpedienteFisico", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["expedienteFisico"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaIdbtcCi", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["idbtcCi"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaTejidoCorneaIzquierda", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["tejidoCorneaIzquierda"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaIdbtcCd", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["idbtcCd"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["fechaActualizacion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaFechaRecepcion", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["fechaRecepcion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["status"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["usuarioUltMov"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaIdsolicitudEvaluacionCorneal", {
        get: function () {
            return this.validosRecepcionSolicitudEvaluacion["idsolicitudEvaluacionCorneal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId &&
                this.validaHoraRecepcion &&
                this.validaRegistroTejido &&
                this.validaFechaBaja &&
                this.validaTejidoCorneaDerecha &&
                this.validaFechaRegistro &&
                this.validaEstatusProceso &&
                this.validaExpedienteFisico &&
                this.validaIdbtcCi &&
                this.validaTejidoCorneaIzquierda &&
                this.validaIdbtcCd &&
                this.validaFechaActualizacion &&
                this.validaFechaRecepcion &&
                this.validaStatus &&
                this.validaUsuarioUltMov &&
                this.validaIdsolicitudEvaluacionCorneal;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    RecepcionSolicitudEvaluacionCrudComponent.prototype.obtenerRecepcionSolicitudEvaluaciones = function (lista, objeto) {
        objeto.lista_recepcionSolicitudEvaluaciones = lista;
        if (lista && lista.length > 0) {
            objeto.recepcionSolicitudEvaluacion.from(lista[0]);
            objeto.evtRecepcionSolicitudEvaluacionSeleccionado(objeto.recepcionSolicitudEvaluacion);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.evn_lazy_recepcionSolicitudEvaluacion = function (recepcionSolicitudEvaluacion, objeto) {
        objeto.solicitudEvaluacionCorneal = recepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal;
        (objeto.solicitudEvaluacionCorneal.datosProcuracionCorneal);
        objeto.enableIzquierda = null;
        objeto.enableDerecha = null;
        objeto.solicitudEvaluacionCorneal.datosProcuracionCorneal.forEach(function (element) {
            if (element.tipo === 1) {
                objeto.enableIzquierda = true;
            }
            if (element.tipo === 2) {
                objeto.enableDerecha = true;
            }
        });
        objeto.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
        objeto.recepcionSolicitudEvaluacionChange.emit(objeto.recepcionSolicitudEvaluacion);
        objeto.configuarCombosObjetos();
        objeto.recepcionSolicitudEvaluacionLazy = true;
    };
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "datosReporteRecepcionSolicitudEvaluacionWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.recepcionSolicitudEvaluacionActualizar &&
                this.recepcionSolicitudEvaluacionLazy &&
                this.globalesService.preporteWord(this, "recepcionSolicitudEvaluacion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "datosReporteRecepcionSolicitudEvaluacionExcel", {
        get: function () {
            return !(this.recepcionSolicitudEvaluacionActualizar &&
                this.recepcionSolicitudEvaluacionLazy &&
                this.globalesService.preporteExcel(this, "recepcionSolicitudEvaluacion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecepcionSolicitudEvaluacionCrudComponent.prototype, "datosReporteRecepcionSolicitudEvaluacionPdf", {
        get: function () {
            return !(this.recepcionSolicitudEvaluacionActualizar &&
                this.recepcionSolicitudEvaluacionLazy &&
                this.globalesService.preportePdf(this, "recepcionSolicitudEvaluacion"));
        },
        enumerable: true,
        configurable: true
    });
    RecepcionSolicitudEvaluacionCrudComponent.prototype.reporteRecepcionSolicitudEvaluacionExcel = function (form) {
        var nombre = "RecepcionSolicitudEvaluacion.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = {
            recepcionSolicitudEvaluacion: this.recepcionSolicitudEvaluacion
        };
        parametros["plantilla"] = "RecepcionSolicitudEvaluacion.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.reporteRecepcionSolicitudEvaluacionWord = function (form) {
        var nombre = "RecepcionSolicitudEvaluacion.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = {
            recepcionSolicitudEvaluacion: this.recepcionSolicitudEvaluacion
        };
        parametros["plantilla"] = "RecepcionSolicitudEvaluacion.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.reporteRecepcionSolicitudEvaluacionPdf = function (form) {
        var nombre = "RecepcionSolicitudEvaluacion.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = {
            recepcionSolicitudEvaluacion: this.recepcionSolicitudEvaluacion
        };
        parametros["plantilla"] = "RecepcionSolicitudEvaluacion.docx";
        parametros["salida"] = "RecepcionSolicitudEvaluacion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    RecepcionSolicitudEvaluacionCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
        this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionCancelar = true;
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.buscarRecepcionSolicitudEvaluacionFront = function (form) {
        this.accionesBuscar();
        var vrecepcionSolicitudEvaluacion = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
        vrecepcionSolicitudEvaluacion.from(this.recepcionSolicitudEvaluacion);
        this.configuracionRecepcionSolicitudEvaluacion = new _shared_configurar_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_7__["ConfigurarRecepcionSolicitudEvaluacion"]();
        this.configuracionRecepcionSolicitudEvaluacion.permisosTabla = {
            tabla: "recepcionSolicitudEvaluacion",
            permiso: 8
        };
        this.configuracionRecepcionSolicitudEvaluacion.titulo =
            "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta = vrecepcionSolicitudEvaluacion;
        this.permisosacciones();
        $("#buscarRecepcionSolicitudEvaluacion_" + this.nombre).modal();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.buscarRecepcionSolicitudEvaluacionBack = function (recepcionSolicitudEvaluacion) {
        this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesByDto(recepcionSolicitudEvaluacion, this.eventoSrvRecepcionSolicitudEvaluacionBuscar, this);
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.eventoSrvRecepcionSolicitudEvaluacionBuscar = function (lista, objeto) {
        objeto.lista_recepcionSolicitudEvaluaciones = lista;
        if (lista && lista.length > 0) {
            objeto.recepcionSolicitudEvaluacion = lista[0];
            objeto.recepcionSolicitudEvaluacionLazy = false;
            objeto.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(objeto.recepcionSolicitudEvaluacion, objeto.evn_lazy_recepcionSolicitudEvaluacion, objeto);
        }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.guardarRecepcionSolicitudEvaluacionFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarRecepcionSolicitudEvaluacionBack(this.recepcionSolicitudEvaluacion);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.guardarRecepcionSolicitudEvaluacionBack = function (recepcionSolicitudEvaluacion) {
        if (recepcionSolicitudEvaluacion.usuarioUltMov == null)
            recepcionSolicitudEvaluacion.usuarioUltMov = this.globalesService.dameUsuario();
        if (recepcionSolicitudEvaluacion.status == null ||
            recepcionSolicitudEvaluacion.status == "")
            recepcionSolicitudEvaluacion.status = 1;
        this.recepcionSolicitudEvaluacion_service.guardarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion, this.eventoSrvRecepcionSolicitudEvaluacionGuardar, this);
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.eventoSrvRecepcionSolicitudEvaluacionGuardar = function (recepcionSolicitudEvaluacion, obj) {
        obj.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
        aux.from(recepcionSolicitudEvaluacion);
        obj.recepcionSolicitudEvaluacionChange.emit(aux);
        obj.recepcionSolicitudEvaluacionTablaChange.emit(aux);
        obj.recepcionSolicitudEvaluacionLazy = false;
        obj.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(obj.recepcionSolicitudEvaluacion, obj.evn_lazy_recepcionSolicitudEvaluacion, obj);
        obj.accionesActualizar();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.actualizarRecepcionSolicitudEvaluacionFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarRecepcionSolicitudEvaluacionBack(this.recepcionSolicitudEvaluacion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.actualizarRecepcionSolicitudEvaluacionBack = function (recepcionSolicitudEvaluacion) {
        //recepcionSolicitudEvaluacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.recepcionSolicitudEvaluacion_service.actualizarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion, this.eventoSrvRecepcionSolicitudEvaluacionActualizar, this);
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.eventoSrvRecepcionSolicitudEvaluacionActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.recepcionSolicitudEvaluacionLazy = false;
            obj.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(obj.recepcionSolicitudEvaluacion, obj.evn_lazy_recepcionSolicitudEvaluacion, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.recepcionSolicitudEvaluacion);
            obj.recepcionSolicitudEvaluacionChange.emit(aux);
            obj.recepcionSolicitudEvaluacionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.eliminarRecepcionSolicitudEvaluacionFront = function (form) {
        this.accion = 4;
        this.eliminarRecepcionSolicitudEvaluacionBack(this.recepcionSolicitudEvaluacion);
        this.permisosacciones();
        this.accionesBuscar();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.eliminarRecepcionSolicitudEvaluacionBack = function (recepcionSolicitudEvaluacion) {
        recepcionSolicitudEvaluacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.recepcionSolicitudEvaluacion_service.eliminarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion, this.eventoSrvRecepcionSolicitudEvaluacionEliminar, this);
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.eventoSrvRecepcionSolicitudEvaluacionEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.recepcionSolicitudEvaluacion = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
            obj.recepcionSolicitudEvaluacionChange.emit(obj.recepcionSolicitudEvaluacion);
            obj.recepcionSolicitudEvaluacionTablaChange.emit(obj.recepcionSolicitudEvaluacion);
            obj.limpiarCampos();
        }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.cancelarRecepcionSolicitudEvaluacionFront = function (form) {
        this.accion = 6;
        this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
        this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = true;
        this.permisosacciones();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.nuevoRecepcionSolicitudEvaluacionFront = function (form) {
        this.accion = 2;
        bootbox.confirm({
            message: "¿Deseas limpiar los campos de ingreso?",
            buttons: {
                confirm: {
                    label: "Si",
                    className: "btn-success"
                },
                cancel: {
                    label: "No",
                    className: "btn-danger"
                }
            },
            callback: function (result) {
                if (result)
                    this.limpiarCampos();
                this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false;
                this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionCancelar = true;
            }.bind(this)
        });
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario = [];
        /*     this.usuario_service.getUsuariosActivos(
              this.evtGetUsuarioUltMovRecepcionSolicitudEvaluacionUsuario,
              this
            );
            this.lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal = [];
            this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(
              this
                .evtGetIdsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal,
              this
            ); */
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.configurarTablasConjuntos = function () { };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionGuardar = false;
        this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = this.recepcionSolicitudEvaluacionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.evtRecepcionSolicitudEvaluacionSeleccionado = function (recepcionSolicitudEvaluacion) {
        this.recepcionSolicitudEvaluacion = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
        this.recepcionSolicitudEvaluacion.from(recepcionSolicitudEvaluacion);
        this.recepcionSolicitudEvaluacionLazy = false;
        this.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(this.recepcionSolicitudEvaluacion, this.evn_lazy_recepcionSolicitudEvaluacion, this);
        this.accion = 7;
        this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionGuardar = false;
        this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = this.recepcionSolicitudEvaluacionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarRecepcionSolicitudEvaluacion_" + this.nombre).modal("hide");
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false; // ******************** maquina
        this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
        this.usuarioLogueado = this.globalesService.dameUsuario();
        var id = this.activatedRoute.snapshot.paramMap.get("id");
        if (id && !this.viewModeEvaluacion) {
            this.recepcionSolicitudEvaluacion.id = id;
            this.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(this.recepcionSolicitudEvaluacion, this.evn_lazy_recepcionSolicitudEvaluacion, this);
        }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.permisosacciones = function () {
        if (this.recepcionSolicitudEvaluacionBuscar)
            this.recepcionSolicitudEvaluacionBuscar = this.globalesService.pbuscar(this, "recepcionSolicitudEvaluacion");
        if (this.recepcionSolicitudEvaluacionActualizar)
            this.recepcionSolicitudEvaluacionActualizar =
                this.globalesService.pacutalizar(this, "recepcionSolicitudEvaluacion") && this.globalesService.pbuscar(this, "recepcionSolicitudEvaluacion");
        if (this.recepcionSolicitudEvaluacionEliminar)
            this.recepcionSolicitudEvaluacionEliminar =
                this.globalesService.peliminar(this, "recepcionSolicitudEvaluacion") &&
                    this.globalesService.pbuscar(this, "recepcionSolicitudEvaluacion");
        if (this.recepcionSolicitudEvaluacionAgregar)
            this.recepcionSolicitudEvaluacionAgregar = this.globalesService.pagregar(this, "recepcionSolicitudEvaluacion");
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.permisosaccionesInicio = function () {
        this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false; // *************************** maquina
        this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.limpiarCampos = function () {
        this.recepcionSolicitudEvaluacion = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
        this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEleccion = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_15__["SolicitudEvaluacionCorneal"]();
        this.recepcionSolicitudEvaluacionChange.emit(this.recepcionSolicitudEvaluacion);
        this.recepcionSolicitudEvaluacionSeleccion = this.recepcionSolicitudEvaluacionCancelar = this.recepcionSolicitudEvaluacionGuardar = this.recepcionSolicitudEvaluacionActualizar = this.recepcionSolicitudEvaluacionEliminar = false; // *************************** maquina
        this.recepcionSolicitudEvaluacionBuscar = this.recepcionSolicitudEvaluacionAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.doSave = function () {
        if (this.recepcionSolicitudEvaluacion.expedienteFisico === true) {
            this.recepcionSolicitudEvaluacion.expedienteFisico = 1;
        }
        else if (this.recepcionSolicitudEvaluacion.expedienteFisico === false) {
            this.recepcionSolicitudEvaluacion.expedienteFisico = 0;
        }
        if (this.recepcionSolicitudEvaluacion.registroTejido === true) {
            this.recepcionSolicitudEvaluacion.registroTejido = 1;
        }
        else if (this.recepcionSolicitudEvaluacion.registroTejido === false) {
            this.recepcionSolicitudEvaluacion.registroTejido = 0;
        }
        if (this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === true) {
            this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda = 1;
        }
        else if (this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === false) {
            this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda = 0;
        }
        if (this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === true) {
            this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha = 1;
        }
        else if (this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === false) {
            this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha = 0;
        }
        this.usuarioLogueado = this.globalesService.dameUsuario();
        this.recepcionSolicitudEvaluacion.idUsuarioRecibe = {
            id: this.usuarioLogueado.id
        };
        this.recepcionSolicitudEvaluacion.usuarioUltMov = {};
        this.recepcionSolicitudEvaluacion.usuarioUltMov.id = this.usuarioLogueado.id;
        this.recepcionSolicitudEvaluacion = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"](this.recepcionSolicitudEvaluacion);
        this.actualizarRecepcionSolicitudEvaluacionBack(this.recepcionSolicitudEvaluacion);
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.evn_lazy_solicitudEvaluacionCorneal = function (solicitudEvaluacionCorneal, objeto) {
        objeto.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
        objeto.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionByIdsolicitudEvaluacionCorneal(objeto.solicitudEvaluacionCorneal, objeto.evn_lazy_recepcionSolicitudEvaluacion, objeto);
        // objeto.solicitudEvaluacionCornealChange.emit(
        //   objeto.solicitudEvaluacionCorneal
        // );
        // objeto.configuarCombosObjetos();
        // objeto.solicitudEvaluacionCornealLazy = true;
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.doGenerarIdBTC = function () {
        if (this.recepcionSolicitudEvaluacion.expedienteFisico === true) {
            this.recepcionSolicitudEvaluacion.expedienteFisico = 1;
        }
        else if (this.recepcionSolicitudEvaluacion.expedienteFisico === false) {
            this.recepcionSolicitudEvaluacion.expedienteFisico = 0;
        }
        if (this.recepcionSolicitudEvaluacion.registroTejido === true) {
            this.recepcionSolicitudEvaluacion.registroTejido = 1;
        }
        else if (this.recepcionSolicitudEvaluacion.registroTejido === false) {
            this.recepcionSolicitudEvaluacion.registroTejido = 0;
        }
        if (this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === true) {
            this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda = 1;
        }
        else if (this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === false) {
            this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda = 0;
        }
        if (this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === true) {
            this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha = 1;
        }
        else if (this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === false) {
            this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha = 0;
        }
        if ((this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === 0 || this.recepcionSolicitudEvaluacion.tejidoCorneaDerecha === null)
            && (this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === 0 || this.recepcionSolicitudEvaluacion.tejidoCorneaIzquierda === null)) {
            bootbox.alert('Es necesario seleccionar un tejido para generar ID BTC');
            return;
        }
        this.recepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_15__["SolicitudEvaluacionCorneal"](this.solicitudEvaluacionCorneal);
        this.recepcionSolicitudEvaluacion.usuarioUltMov = {};
        this.recepcionSolicitudEvaluacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
        this.recepcionSolicitudEvaluacion = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"](this.recepcionSolicitudEvaluacion);
        this.recepcionSolicitudEvaluacion_service.generarIdsBTC(this.recepcionSolicitudEvaluacion, this.eventoSrvGenerarIdsBTC, this);
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.eventoSrvGenerarIdsBTC = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Los ids se han generado con éxito");
            var aux = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.recepcionSolicitudEvaluacionLazy = false;
            obj.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(obj.recepcionSolicitudEvaluacion, obj.evn_lazy_recepcionSolicitudEvaluacion, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.recepcionSolicitudEvaluacion);
            obj.recepcionSolicitudEvaluacionChange.emit(aux);
            obj.recepcionSolicitudEvaluacionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.doImprimirEtiqueta = function () {
        if (this.recepcionSolicitudEvaluacion.idbtcCd && this.recepcionSolicitudEvaluacion.idbtcCi) {
            this.doImprimirAmbas();
        }
        else if (this.recepcionSolicitudEvaluacion.idbtcCd) {
            this.imprimirDerecha();
        }
        else if (this.recepcionSolicitudEvaluacion.idbtcCi) {
            this.imprimirIzquierda();
        }
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.imprimirIzquierda = function () {
        bootbox.dialog({
            message: "¿Que etiqueta desea imprimir?",
            buttons: {
                ok: {
                    label: "Córnea Izquierda",
                    className: "btn-primary",
                    callback: function () {
                        var path = 'file/etiquetaBTC';
                        var otros = 'Etiquetas';
                        var parametros = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 1 };
                        var nombre = 'Etiquetas.pdf';
                        this.fileservice.downloadFile(nombre, otros, path, parametros);
                    }.bind(this)
                }
            }
        });
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.imprimirDerecha = function () {
        bootbox.dialog({
            message: "¿Que etiqueta desea imprimir?",
            buttons: {
                ok: {
                    label: "Córnea Derecha",
                    className: "btn-primary",
                    callback: function () {
                        var path = 'file/etiquetaBTC';
                        var otros = 'Etiquetas';
                        var parametros = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 2 };
                        var nombre = 'Etiquetas.pdf';
                        this.fileservice.downloadFile(nombre, otros, path, parametros);
                    }.bind(this)
                }
            }
        });
    };
    RecepcionSolicitudEvaluacionCrudComponent.prototype.doImprimirAmbas = function () {
        bootbox.dialog({
            message: "¿Que etiqueta desea imprimir?",
            buttons: {
                confirm: {
                    label: "Córnea Derecha",
                    className: "btn-primary",
                    callback: function () {
                        var path = 'file/etiquetaBTC';
                        var otros = 'Etiquetas';
                        var parametros = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 2 };
                        var nombre = 'Etiquetas.pdf';
                        this.fileservice.downloadFile(nombre, otros, path, parametros);
                    }.bind(this)
                },
                ok: {
                    label: "Córnea Izquierda",
                    className: "btn-primary",
                    callback: function () {
                        var path = 'file/etiquetaBTC';
                        var otros = 'Etiquetas';
                        var parametros = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 1 };
                        var nombre = 'Etiquetas.pdf';
                        this.fileservice.downloadFile(nombre, otros, path, parametros);
                    }.bind(this)
                },
                cancel: {
                    label: "Ambas",
                    className: "btn-primary",
                    callback: function () {
                        var path = 'file/etiquetaBTC';
                        var otros = 'Etiquetas';
                        var nombre = 'Etiquetas.pdf';
                        var parametros = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 1 };
                        this.fileservice.downloadFile(nombre, otros, path, parametros);
                        var parametros = { id: this.solicitudEvaluacionCorneal.id, tipoCornea: 2 };
                        this.fileservice.downloadFile(nombre, otros, path, parametros);
                    }.bind(this)
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "ocultarConjuntosRecepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacion"])
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "recepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "recepcionSolicitudEvaluacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "recepcionSolicitudEvaluacionTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_15__["SolicitudEvaluacionCorneal"])
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "solicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "viewModeEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "enableIzquierda", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionCrudComponent.prototype, "enableDerecha", void 0);
    RecepcionSolicitudEvaluacionCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-recepcion-solicitud-evaluacion-crud",
            template: __webpack_require__(/*! ./recepcion-solicitud-evaluacion-crud.component.html */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.html"),
            styles: [__webpack_require__(/*! ./recepcion-solicitud-evaluacion-crud.component.css */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
                _shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_6__["RecepcionSolicitudEvaluacionService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
                //PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCornealService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_17__["CausaMuerteService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_6__["RecepcionSolicitudEvaluacionService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_17__["CausaMuerteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RecepcionSolicitudEvaluacionCrudComponent);
    return RecepcionSolicitudEvaluacionCrudComponent;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para recepcionSolicitudEvaluacion-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionRecepcionSolicitudEvaluacion.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_recepcionSolicitudEvaluacion_{{nombregrid}}\">\n                <div id=\"grid_recepcionSolicitudEvaluacion_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: RecepcionSolicitudEvaluacionListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionSolicitudEvaluacionListKendoComponent", function() { return RecepcionSolicitudEvaluacionListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _shared_configurar_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/configurar-recepcion-solicitud-evaluacion.ts");
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
var RecepcionSolicitudEvaluacionListKendoComponent = /** @class */ (function () {
    function RecepcionSolicitudEvaluacionListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.recepcionSolicitudEvaluacionSeleccionado = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_3__["RecepcionSolicitudEvaluacion"]();
        this.configuracionRecepcionSolicitudEvaluacion = new _shared_configurar_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarRecepcionSolicitudEvaluacion"]();
        this.nombregrid = "";
        this.evtRecepcionSolicitudEvaluacionSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "recepcionSolicitudEvaluacion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'recepcionSolicitudEvaluacion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'recepcionSolicitudEvaluacion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    RecepcionSolicitudEvaluacionListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionRecepcionSolicitudEvaluacion.titulo.indexOf("Catálogo") != -1) {
            this.configuracionRecepcionSolicitudEvaluacion.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    RecepcionSolicitudEvaluacionListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionRecepcionSolicitudEvaluacion && changes.configuracionRecepcionSolicitudEvaluacion.currentValue &&
            (changes.configuracionRecepcionSolicitudEvaluacion.previousValue instanceof _shared_configurar_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarRecepcionSolicitudEvaluacion"])) {
            if (changes.configuracionRecepcionSolicitudEvaluacion.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionRecepcionSolicitudEvaluacion.currentValue.permisosAtributos;
            if (changes.configuracionRecepcionSolicitudEvaluacion.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionRecepcionSolicitudEvaluacion.currentValue.permisosTabla;
            if ($("#grid_recepcionSolicitudEvaluacion_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    RecepcionSolicitudEvaluacionListKendoComponent.prototype.ngOnInit = function () {
        self["grid_recepcionSolicitudEvaluacion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionRecepcionSolicitudEvaluacion.permisosAtributos &&
            this.configuracionRecepcionSolicitudEvaluacion.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "recepcionSolicitudEvaluacion",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RecepcionSolicitudEvaluacion'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RecepcionSolicitudEvaluacion'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RecepcionSolicitudEvaluacion'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionRecepcionSolicitudEvaluacion.permisosAtributos)
            this.permisosAtributos = this.configuracionRecepcionSolicitudEvaluacion.permisosAtributos;
        if (this.configuracionRecepcionSolicitudEvaluacion.permisosTabla)
            this.permisosTabla = this.configuracionRecepcionSolicitudEvaluacion.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    RecepcionSolicitudEvaluacionListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoAtributo && permisos.recepcionSolicitudEvaluacion.PermisoAtributo.length > 0
            && !obj.configuracionRecepcionSolicitudEvaluacion.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.recepcionSolicitudEvaluacion.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.RecepcionSolicitudEvaluacion.PermisoAtributo ;
        }
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoTabla && permisos.recepcionSolicitudEvaluacion.PermisoTabla.length > 0
            && !obj.configuracionRecepcionSolicitudEvaluacion.permisosTabla) {
            obj.globalesService.evtTablas(permisos.recepcionSolicitudEvaluacion.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.RecepcionSolicitudEvaluacion.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    RecepcionSolicitudEvaluacionListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_recepcionSolicitudEvaluacion_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    RecepcionSolicitudEvaluacionListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionRecepcionSolicitudEvaluacion.campoAgEl != null
            && this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta
            && this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta.isOk
            && !this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta.isOk())
            return;
        if (this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta) {
            if (!this.configuracionRecepcionSolicitudEvaluacion.campoAgEl && this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta instanceof _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_3__["RecepcionSolicitudEvaluacion"])
                this.configuracionRecepcionSolicitudEvaluacion.rutaLista = this.crudServiceBaseUrl + "/getRecepcionSolicitudEvaluacionesByDto";
            this.lista = this.configuracionRecepcionSolicitudEvaluacion.lecturaP(completar, this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta);
            if (this.configuracionRecepcionSolicitudEvaluacion.campoAgEl) {
                this.rutaAgregar = this.configuracionRecepcionSolicitudEvaluacion.agregarP(function () { }, this.configuracionRecepcionSolicitudEvaluacion.campoAgEl);
                this.rutaEliminar = this.configuracionRecepcionSolicitudEvaluacion.eliminarP(function () { }, this.configuracionRecepcionSolicitudEvaluacion.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionRecepcionSolicitudEvaluacion.agregarP(completar, this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta);
                this.rutaEliminar = this.configuracionRecepcionSolicitudEvaluacion.eliminarP(completar, this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta);
            }
        }
        else {
            this.lista = this.configuracionRecepcionSolicitudEvaluacion.lectura();
            this.rutaAgregar = this.configuracionRecepcionSolicitudEvaluacion.agregar();
            this.rutaEliminar = this.configuracionRecepcionSolicitudEvaluacion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "idsolicitudEvaluacionCorneal")) {
            campos["idsolicitudEvaluacionCorneal"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "idsolicitudEvaluacionCorneal"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "expedienteFisico")) {
            campos["expedienteFisico"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "expedienteFisico"), nullable: true };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "registroTejido")) {
            campos["registroTejido"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "registroTejido"), nullable: true };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "tejidoCorneaIzquierda")) {
            campos["tejidoCorneaIzquierda"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "tejidoCorneaIzquierda"), nullable: true };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "tejidoCorneaDerecha")) {
            campos["tejidoCorneaDerecha"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "tejidoCorneaDerecha"), nullable: true };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "fechaRecepcion")) {
            campos["fechaRecepcion"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "fechaRecepcion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "horaRecepcion")) {
            campos["horaRecepcion"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "horaRecepcion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "idbtcCd")) {
            campos["idbtcCd"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "idbtcCd"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "idbtcCi")) {
            campos["idbtcCi"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "idbtcCi"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "estatusProceso"), nullable: true };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "recepcionSolicitudEvaluacion", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionRecepcionSolicitudEvaluacion.rutaActualizar,
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
                        if (elem.horaRecepcion && typeof elem.horaRecepcion === "number") {
                            elem.horaRecepcion = kendo.parseDate(new Date(elem.horaRecepcion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaBaja && typeof elem.fechaBaja === "number") {
                            elem.fechaBaja = kendo.parseDate(new Date(elem.fechaBaja), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRegistro && typeof elem.fechaRegistro === "number") {
                            elem.fechaRegistro = kendo.parseDate(new Date(elem.fechaRegistro), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaActualizacion && typeof elem.fechaActualizacion === "number") {
                            elem.fechaActualizacion = kendo.parseDate(new Date(elem.fechaActualizacion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRecepcion && typeof elem.fechaRecepcion === "number") {
                            elem.fechaRecepcion = kendo.parseDate(new Date(elem.fechaRecepcion), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionRecepcionSolicitudEvaluacion.campoAgEl) {
                if (self.configuracionRecepcionSolicitudEvaluacion.tipocampoAgEl == "RecepcionSolicitudEvaluacionRecepcionSolicitudEvaluacion")
                    self.configuracionRecepcionSolicitudEvaluacion.campoAgEl.recepcionSolicitudEvaluacion2 = options.models[0];
                else
                    self.configuracionRecepcionSolicitudEvaluacion.campoAgEl.recepcionSolicitudEvaluacion = options.models[0];
                return JSON.stringify(self.configuracionRecepcionSolicitudEvaluacion.campoAgEl);
            }
            else if (est.options[operation].data.models.recepcionSolicitudEvaluacion) {
                est.options[operation].data.models.recepcionSolicitudEvaluacion2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    RecepcionSolicitudEvaluacionListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "idsolicitudEvaluacionCorneal")) {
            columnas.push({ field: "idsolicitudEvaluacionCorneal", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "idsolicitudEvaluacionCorneal"), editor: idsolicitudEvaluacionCornealDropDownEditor, template: " #if (idsolicitudEvaluacionCorneal){#   #=idsolicitudEvaluacionCorneal.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "expedienteFisico")) {
            columnas.push({ field: "expedienteFisico", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "expedienteFisico") });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "registroTejido")) {
            columnas.push({ field: "registroTejido", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "registroTejido") });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "tejidoCorneaIzquierda")) {
            columnas.push({ field: "tejidoCorneaIzquierda", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "tejidoCorneaIzquierda") });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "tejidoCorneaDerecha")) {
            columnas.push({ field: "tejidoCorneaDerecha", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "tejidoCorneaDerecha") });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "fechaRecepcion")) {
            columnas.push({ field: "fechaRecepcion", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "fechaRecepcion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "horaRecepcion")) {
            columnas.push({ field: "horaRecepcion", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "horaRecepcion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "idbtcCd")) {
            columnas.push({ field: "idbtcCd", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "idbtcCd"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "idbtcCi")) {
            columnas.push({ field: "idbtcCi", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "idbtcCi"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "estatusProceso") });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "recepcionSolicitudEvaluacion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "recepcionSolicitudEvaluacion", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "recepcionSolicitudEvaluacion"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "recepcionSolicitudEvaluacion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "recepcionSolicitudEvaluacion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "recepcionSolicitudEvaluacion") && this.configuracionRecepcionSolicitudEvaluacion.recepcionSolicitudEvaluacionConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_recepcionSolicitudEvaluacion_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_recepcionSolicitudEvaluacion_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionRecepcionSolicitudEvaluacion.altoComponente,
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
        this.grid = $("#grid_recepcionSolicitudEvaluacion_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudEvaluacionCorneal = this.urlprovider.serverURL + "solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesActivos1";
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
        function idsolicitudEvaluacionCornealDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "folioSolicitud",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidsolicitudEvaluacionCorneal,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    RecepcionSolicitudEvaluacionListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_recepcionSolicitudEvaluacion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.recepcionSolicitudEvaluacionSeleccionado = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_3__["RecepcionSolicitudEvaluacion"]();
        gridac.recepcionSolicitudEvaluacionSeleccionado.from(dataItem);
        gridac.evtRecepcionSolicitudEvaluacionSeleccionado.emit(gridac.recepcionSolicitudEvaluacionSeleccionado);
        (gridac.recepcionSolicitudEvaluacionSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarRecepcionSolicitudEvaluacion"])
    ], RecepcionSolicitudEvaluacionListKendoComponent.prototype, "configuracionRecepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RecepcionSolicitudEvaluacionListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("recepcionSolicitudEvaluacionSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RecepcionSolicitudEvaluacionListKendoComponent.prototype, "evtRecepcionSolicitudEvaluacionSeleccionado", void 0);
    RecepcionSolicitudEvaluacionListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recepcion-solicitud-evaluacion-list-kendo',
            template: __webpack_require__(/*! ./recepcion-solicitud-evaluacion-list-kendo.component.html */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./recepcion-solicitud-evaluacion-list-kendo.component.css */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], RecepcionSolicitudEvaluacionListKendoComponent);
    return RecepcionSolicitudEvaluacionListKendoComponent;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: RecepcionSolicitudEvaluacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionSolicitudEvaluacionRoutingModule", function() { return RecepcionSolicitudEvaluacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_list_kendo_recepcion_solicitud_evaluacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_crud_recepcion_solicitud_evaluacion_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_table_recepcion_solicitud_evaluacion_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'recepcion-solicitud-evaluacion-list-kendo', component: _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_list_kendo_recepcion_solicitud_evaluacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["RecepcionSolicitudEvaluacionListKendoComponent"] },
    { path: 'recepcion-solicitud-evaluacion-crud/:id', component: _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_crud_recepcion_solicitud_evaluacion_crud_component__WEBPACK_IMPORTED_MODULE_3__["RecepcionSolicitudEvaluacionCrudComponent"] },
    { path: 'recepcion-solicitud-evaluacion-table', component: _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_table_recepcion_solicitud_evaluacion_table_component__WEBPACK_IMPORTED_MODULE_4__["RecepcionSolicitudEvaluacionTableComponent"] },
];
var RecepcionSolicitudEvaluacionRoutingModule = /** @class */ (function () {
    function RecepcionSolicitudEvaluacionRoutingModule() {
    }
    RecepcionSolicitudEvaluacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RecepcionSolicitudEvaluacionRoutingModule);
    return RecepcionSolicitudEvaluacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.css":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <app-componente-cadena [componente]=\"'recepcionSolicitudEvaluacion'\"\n      [atributo]=\"'folioEvaluacionCorneal'\"\n      [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n      [permisosAtributos]=\"permisofolioEvCorneal\"\n      [(valido)]=\"folioValido\"\n      [(dato)]=\"folioDato\" class=\"w-100\">\n      </app-componente-cadena>\n  </div>\n  <div class=\"col-md-6\">\n    <app-componente-cadena [componente]=\"'recepcionSolicitudEvaluacion'\"\n      [atributo]=\"'numExp'\"\n      [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n      [permisosAtributos]=\"permisoNumExp\"\n      [(valido)]=\"numExpValido\"\n      [(dato)]=\"numExpDato\" class=\"w-100\">\n      </app-componente-cadena>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <app-componente-cadena [componente]=\"'recepcionSolicitudEvaluacion'\"\n      [atributo]=\"'estatus'\"\n      [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n      [permisosAtributos]=\"permisoEstatus\"\n      [(valido)]=\"estatusValido\"\n      [(dato)]=\"estatusDato\" class=\"w-100\">\n      </app-componente-cadena>\n  </div>\n  <div class=\"col-md-6\">\n    <button type=\"button\" (click)=\"buscarByfiltere()\" class=\"btn btn-primary pull-right\" style=\"margin-top: 25px;\">Buscar</button>\n  </div>\n</div>\n<table *ngIf=\"muestraTabla\" id=\"tabla_recepcionSolicitudEvaluacion\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th>Folio de Solicitud Evaluacion Corneal</th>\n            <th>Nombre</th>\n            <th>Primer Apellido</th>\n            <th>Numero de Expediente</th>\n        </tr>\n    </thead>\n    <!--tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','id')\" >{{aetiqueta('recepcionSolicitudEvaluacion','id')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','idsolicitudEvaluacionCorneal')\" >{{aetiqueta('recepcionSolicitudEvaluacion','idsolicitudEvaluacionCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','expedienteFisico')\" >{{aetiqueta('recepcionSolicitudEvaluacion','expedienteFisico')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','registroTejido')\" >{{aetiqueta('recepcionSolicitudEvaluacion','registroTejido')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','tejidoCorneaIzquierda')\" >{{aetiqueta('recepcionSolicitudEvaluacion','tejidoCorneaIzquierda')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','tejidoCorneaDerecha')\" >{{aetiqueta('recepcionSolicitudEvaluacion','tejidoCorneaDerecha')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','fechaRecepcion')\" >{{aetiqueta('recepcionSolicitudEvaluacion','fechaRecepcion')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','horaRecepcion')\" >{{aetiqueta('recepcionSolicitudEvaluacion','horaRecepcion')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','idbtcCd')\" >{{aetiqueta('recepcionSolicitudEvaluacion','idbtcCd')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','idbtcCi')\" >{{aetiqueta('recepcionSolicitudEvaluacion','idbtcCi')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','fechaRegistro')\" >{{aetiqueta('recepcionSolicitudEvaluacion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','fechaActualizacion')\" >{{aetiqueta('recepcionSolicitudEvaluacion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','fechaBaja')\" >{{aetiqueta('recepcionSolicitudEvaluacion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','estatusProceso')\" >{{aetiqueta('recepcionSolicitudEvaluacion','estatusProceso')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','usuarioUltMov')\" >{{aetiqueta('recepcionSolicitudEvaluacion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('recepcionSolicitudEvaluacion','status')\" >{{aetiqueta('recepcionSolicitudEvaluacion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot-->\n</table>\n</div>\n<!--app-recepcion-solicitud-evaluacion [class.hidden]=\"primero\" [(recepcionSolicitudEvaluacion)]=\"recepcionSolicitudEvaluacionSeleccionado\" (recepcionSolicitudEvaluacionTablaChange)=\"cambio_recepcionSolicitudEvaluacion($event)\"> </app-recepcion-solicitud-evaluacion-->\n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: RecepcionSolicitudEvaluacionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionSolicitudEvaluacionTableComponent", function() { return RecepcionSolicitudEvaluacionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
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






var RecepcionSolicitudEvaluacionTableComponent = /** @class */ (function () {
    function RecepcionSolicitudEvaluacionTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "recepcionSolicitudEvaluacion", "permiso": 0, "etiqueta": "" };
        //public folioTejidoCorneal: any = [{"etiqueta": "Folio Solicitud de Tejido Corneal", "validacion": null, "permiso": 7, "tabla": "recepcionSolicitudEvaluacion", "atributo": "folioTejidoCorneal"}]
        this.permisofolioEvCorneal = [{ "etiqueta": "Folio Solicitud de Evaluacion Corneal", "validacion": null, "permiso": 7, "tabla": "recepcionSolicitudEvaluacion", "atributo": "folioEvaluacionCorneal" }];
        this.permisoNumExp = [{ "etiqueta": "N� Expediente", "validacion": null, "permiso": 7, "tabla": "recepcionSolicitudEvaluacion", "atributo": "numExp" }];
        this.permisoEstatus = [{ "etiqueta": "Estatus", "validacion": null, "permiso": 7, "tabla": "recepcionSolicitudEvaluacion", "atributo": "estatus" }];
        this.ptabla = false;
        this.pattr = false;
        this.folioValido = false;
        this.numExpValido = false;
        this.estatusValido = false;
        this.url = this.urlProvider;
        this.recepcionSolicitudEvaluacionSeleccionado = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__["RecepcionSolicitudEvaluacion"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'recepcionSolicitudEvaluacion'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    RecepcionSolicitudEvaluacionTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'recepcionSolicitudEvaluacion'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(RecepcionSolicitudEvaluacionTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    RecepcionSolicitudEvaluacionTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        //if (!this.avisible("datoProcuracionCorneal", "id"))
        //columnasNoVisibles.push(0);
        columnas.push({ "data": "folioSolicitud" });
        columnas.push({ "data": "nombre" });
        columnas.push({ "data": "primerApellido" });
        columnas.push({ "data": "numeroExpediente" });
        columnas.push({
            data: function (oObj) {
                return "<button class='btn btn-primary' onclick='borrar'><span class='glyphicon glyphicon-pencil'></span></button>";
            }
        });
        columnas.push({
            data: function (oObj) {
                return "<button class='btn btn-primary' onclick='borrar'><span class='glyphicon glyphicon-trash'></span></button>";
            }
        });
        /*columnas.push({
                "data": function(oObj) {
             if (oObj.idsolicitudEvaluacionCorneal)
                        return "<span style=\"cursor: pointer\">"+ oObj.idsolicitudEvaluacionCorneal.folioSolicitud +"</span>";
             return "";
                }
        });
        if (!this.avisible("recepcionSolicitudEvaluacion", "expedienteFisico"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "expedienteFisico" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "registroTejido"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "registroTejido" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "tejidoCorneaIzquierda"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "tejidoCorneaIzquierda" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "tejidoCorneaDerecha"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "tejidoCorneaDerecha" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "fechaRecepcion"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaRecepcion" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "horaRecepcion"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "horaRecepcion" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "idbtcCd"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "idbtcCd" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "idbtcCi"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "idbtcCi" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "fechaRegistro"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "fechaRegistro" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "fechaActualizacion"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "fechaActualizacion" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "fechaBaja"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "fechaBaja" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "estatusProceso"))
            columnasNoVisibles.push(13);
        columnas.push({ "data": "estatusProceso" } );
        if (!this.avisible("recepcionSolicitudEvaluacion", "usuarioUltMov"))
            columnasNoVisibles.push(14);
        columnas.push({
                "data": function(oObj) {
             if (oObj.usuarioUltMov)
                        return "<span style=\"cursor: pointer\">"+ oObj.usuarioUltMov.username +"</span>";
             return "";
                }
        });
        if (!this.avisible("recepcionSolicitudEvaluacion", "status"))
            columnasNoVisibles.push(15);
        columnas.push({ "data": "status" } );

        if (self.pacutalizar("recepcionSolicitudEvaluacion"))
            columnas.push({
                "data": function(oObj) {
                    return "<span style=\"cursor: pointer\">Editar</span>";
                }
            });*/
        var novisibles;
        novisibles = [
            {
                "targets": columnasNoVisibles,
                "visible": false,
                "searchable": false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_recepcionSolicitudEvaluacion').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_recepcionSolicitudEvaluacion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.recepcionSolicitudEvaluacionSeleccionado = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__["RecepcionSolicitudEvaluacion"]();
                    self.primero = false;
                });
            },
            /*"ajax": {
                "url": self.urlProvider.serverURL+"recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluaciones",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },*/
            "columns": columnas,
        });
        this.llenaInicial();
        $('#tabla_recepcionSolicitudEvaluacion tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_recepcionSolicitudEvaluacion').DataTable().row(this).data();
                self.recepcionSolicitudEvaluacionSeleccionado = new _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__["RecepcionSolicitudEvaluacion"]();
                self.recepcionSolicitudEvaluacionSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_recepcionSolicitudEvaluacion').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.ngOnInit = function () {
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.cambio_recepcionSolicitudEvaluacion = function (recepcionSolicitudEvaluacion) {
        $('#tabla_recepcionSolicitudEvaluacion').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    RecepcionSolicitudEvaluacionTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    RecepcionSolicitudEvaluacionTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    RecepcionSolicitudEvaluacionTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    RecepcionSolicitudEvaluacionTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    RecepcionSolicitudEvaluacionTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    RecepcionSolicitudEvaluacionTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    RecepcionSolicitudEvaluacionTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    RecepcionSolicitudEvaluacionTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    RecepcionSolicitudEvaluacionTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    // **********************************************************************************
    // **********************************************************************************
    RecepcionSolicitudEvaluacionTableComponent.prototype.llenaInicial = function () {
        var dato = {};
        var tabla = $("#tabla_recepcionSolicitudEvaluacion").DataTable();
        tabla.clear().draw();
        $.ajax({
            url: this.url.serverURL +
                "recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByFiltroR",
            type: "post",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                data.forEach(function (enty) {
                    var obj = {};
                    obj.folioSolicitud = enty.idsolicitudEvaluacionCorneal.folioSolicitud;
                    obj.nombre = enty.idsolicitudEvaluacionCorneal.nombre;
                    obj.primerApellido = enty.idsolicitudEvaluacionCorneal.primerApellido;
                    obj.numeroExpediente = enty.idsolicitudEvaluacionCorneal.numeroExpediente;
                    tabla.row.add(obj).draw(false);
                });
            },
            data: JSON.stringify(dato)
        });
    };
    RecepcionSolicitudEvaluacionTableComponent.prototype.buscarByfiltere = function () {
        var dato = { "folioEvaluacionCorneal": this.folioDato, "expediente": this.numExpDato, "estatusProceso": this.estatusDato };
        debugger;
        //this.tabla
        //.clear()
        //.draw();(" "+dato);
        var tabla = $('#tabla_recepcionSolicitudEvaluacion').DataTable();
        tabla
            .clear()
            .draw();
        $.ajax({
            "url": this.url.serverURL + "recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesByFiltroR",
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //let tabla = $('#tabla_solicitudEvaluCornealProcurador').DataTable();
                debugger;
                data.forEach(function (enty) {
                    var obj = {};
                    obj.folioSolicitud = enty.idsolicitudEvaluacionCorneal.folioSolicitud;
                    obj.nombre = enty.idsolicitudEvaluacionCorneal.nombre;
                    obj.primerApellido = enty.idsolicitudEvaluacionCorneal.primerApellido;
                    obj.numeroExpediente = enty.idsolicitudEvaluacionCorneal.numeroExpediente;
                    /*obj.status = enty.status;
                    obj.hospitalSolicitanteCaja = enty.hospitalSolicitanteCaja;
                    obj.usuarioUltMov = enty.usuarioUltMov;
                    obj.datoReceptorSolicitante = enty.datoReceptorSolicitante;
                    obj.catalogoEstadoSolicitante = enty.catalogoEstadoSolicitante;*/
                    tabla.row.add(obj).draw(false);
                    //this.tabla.row.add(entry).draw();
                    //.rows.add( entry ).draw(false);
                });
                //this.tabla.rows.add( [data] ).draw();
                //$('#target').html(data.msg);
            },
            data: JSON.stringify(dato)
        });
    };
    RecepcionSolicitudEvaluacionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recepcion-solicitud-evaluacion-table',
            template: __webpack_require__(/*! ./recepcion-solicitud-evaluacion-table.component.html */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.html"),
            styles: [__webpack_require__(/*! ./recepcion-solicitud-evaluacion-table.component.css */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], RecepcionSolicitudEvaluacionTableComponent);
    return RecepcionSolicitudEvaluacionTableComponent;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: RecepcionSolicitudEvaluacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionSolicitudEvaluacionModule", function() { return RecepcionSolicitudEvaluacionModule; });
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recepcion_solicitud_evaluacion_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recepcion-solicitud-evaluacion-routing.module */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-routing.module.ts");
/* harmony import */ var _recepcion_solicitud_evaluacion_list_kendo_recepcion_solicitud_evaluacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-list-kendo/recepcion-solicitud-evaluacion-list-kendo.component.ts");
/* harmony import */ var _recepcion_solicitud_evaluacion_crud_recepcion_solicitud_evaluacion_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-crud/recepcion-solicitud-evaluacion-crud.component.ts");
/* harmony import */ var _recepcion_solicitud_evaluacion_conjunto_recepcion_solicitud_evaluacion_conjunto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-conjunto/recepcion-solicitud-evaluacion-conjunto.component.ts");
/* harmony import */ var _recepcion_solicitud_evaluacion_recepcion_solicitud_evaluacion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component.ts");
/* harmony import */ var _recepcion_solicitud_evaluacion_table_recepcion_solicitud_evaluacion_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion-table/recepcion-solicitud-evaluacion-table.component.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
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











var RecepcionSolicitudEvaluacionModule = /** @class */ (function () {
    function RecepcionSolicitudEvaluacionModule(parentModule) {
        if (parentModule) {
            throw new Error('RecepcionSolicitudEvaluacionModule is already loaded. Import it in the AppModule only');
        }
    }
    RecepcionSolicitudEvaluacionModule_1 = RecepcionSolicitudEvaluacionModule;
    RecepcionSolicitudEvaluacionModule.forRoot = function () {
        return {
            ngModule: RecepcionSolicitudEvaluacionModule_1,
            providers: []
        };
    };
    var RecepcionSolicitudEvaluacionModule_1;
    RecepcionSolicitudEvaluacionModule = RecepcionSolicitudEvaluacionModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _recepcion_solicitud_evaluacion_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecepcionSolicitudEvaluacionRoutingModule"]
                //, UsuarioPerfilModule.forRoot()
                //, SolicitudEvaluacionCornealModule
                ,
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_0__["DateInputsModule"]
            ],
            declarations: [
                _recepcion_solicitud_evaluacion_list_kendo_recepcion_solicitud_evaluacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacionListKendoComponent"],
                _recepcion_solicitud_evaluacion_recepcion_solicitud_evaluacion_component__WEBPACK_IMPORTED_MODULE_8__["RecepcionSolicitudEvaluacionComponent"],
                _recepcion_solicitud_evaluacion_crud_recepcion_solicitud_evaluacion_crud_component__WEBPACK_IMPORTED_MODULE_6__["RecepcionSolicitudEvaluacionCrudComponent"],
                _recepcion_solicitud_evaluacion_conjunto_recepcion_solicitud_evaluacion_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["RecepcionSolicitudEvaluacionConjuntoComponent"],
                _recepcion_solicitud_evaluacion_table_recepcion_solicitud_evaluacion_table_component__WEBPACK_IMPORTED_MODULE_9__["RecepcionSolicitudEvaluacionTableComponent"],
            ],
            exports: [
                _recepcion_solicitud_evaluacion_list_kendo_recepcion_solicitud_evaluacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["RecepcionSolicitudEvaluacionListKendoComponent"],
                _recepcion_solicitud_evaluacion_recepcion_solicitud_evaluacion_component__WEBPACK_IMPORTED_MODULE_8__["RecepcionSolicitudEvaluacionComponent"],
                _recepcion_solicitud_evaluacion_crud_recepcion_solicitud_evaluacion_crud_component__WEBPACK_IMPORTED_MODULE_6__["RecepcionSolicitudEvaluacionCrudComponent"],
                _recepcion_solicitud_evaluacion_conjunto_recepcion_solicitud_evaluacion_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["RecepcionSolicitudEvaluacionConjuntoComponent"],
                _recepcion_solicitud_evaluacion_table_recepcion_solicitud_evaluacion_table_component__WEBPACK_IMPORTED_MODULE_9__["RecepcionSolicitudEvaluacionTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        __metadata("design:paramtypes", [RecepcionSolicitudEvaluacionModule])
    ], RecepcionSolicitudEvaluacionModule);
    return RecepcionSolicitudEvaluacionModule;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component.css":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h2>{{ etiquetaGeneral }}</h2>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <!--                      <app-componente-identificador [componente]=\"'recepcionSolicitudEvaluacion'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRecepcionSolicitudEvaluacion['id']\"\n                                                   [(dato)]=\"recepcionSolicitudEvaluacion.id\"   class=\"w-100\" >\n                    </app-componente-identificador >  -->\n                    <!--                     <div>\n                        <app-componente-objeto [componente]=\"'recepcionSolicitudEvaluacion'\"\n                                               [atributo]=\"'idsolicitudEvaluacionCorneal'\"\n                                               [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosRecepcionSolicitudEvaluacion['idsolicitudEvaluacionCorneal']\"\n                                               [(dato)]=\"recepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosRecepcionSolicitudEvaluacion\"\n                                               [opciones]=\"lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacion\"\n                                               [atributoVisible]=\"'folioSolicitud'\" [(objetoEdicion)]=\"idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idsolicitudEvaluacionCornealEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'recepcionSolicitudEvaluacion','idsolicitudEvaluacionCorneal')\" >\n                                   <app-solicitud-evaluacion-corneal-crud [nombre]=\"'idsolicitudEvaluacionCorneal'\" [solicitudEvaluacionCorneal]=\"recepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal\" (solicitudEvaluacionCornealChange)=\"evtIdsolicitudEvaluacionCorneal($event)\"\n                                                           [ocultarConjuntosSolicitudEvaluacionCorneal]=\"'true'\" [class.hidden]=\"!idsolicitudEvaluacionCornealEditar\" ></app-solicitud-evaluacion-corneal-crud>\n                            </div>\n                        </div>\n                    </div> -->\n                    <!-- <app-componente-cadena\n            [componente]=\"'recepcionSolicitudEvaluacion'\"\n            [atributo]=\"'expedienteFisico'\"\n            [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosRecepcionSolicitudEvaluacion['expedienteFisico']\"\n            [(dato)]=\"recepcionSolicitudEvaluacion.expedienteFisico\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n                    <!-- <app-componente-cadena\n            [componente]=\"'recepcionSolicitudEvaluacion'\"\n            [atributo]=\"'registroTejido'\"\n            [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosRecepcionSolicitudEvaluacion['registroTejido']\"\n            [(dato)]=\"recepcionSolicitudEvaluacion.registroTejido\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'recepcionSolicitudEvaluacion'\"\n            [atributo]=\"'tejidoCorneaIzquierda'\"\n            [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"\n              validosRecepcionSolicitudEvaluacion['tejidoCorneaIzquierda']\n            \"\n            [(dato)]=\"recepcionSolicitudEvaluacion.tejidoCorneaIzquierda\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'recepcionSolicitudEvaluacion'\"\n            [atributo]=\"'tejidoCorneaDerecha'\"\n            [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"\n              validosRecepcionSolicitudEvaluacion['tejidoCorneaDerecha']\n            \"\n            [(dato)]=\"recepcionSolicitudEvaluacion.tejidoCorneaDerecha\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <label class=\"radio-inline\" style=\"margin-right: 10px;\">\n                    <input\n                      [disabled]=\"viewModeEvaluacion\"\n                      type=\"checkbox\"\n                      class=\"form-checkbox-input\"\n                      name=\"expedienteFisico\"\n                      [(ngModel)]=\"\n                        recepcionSolicitudEvaluacion.expedienteFisico\n                      \"\n                    />\n                  </label>\n                                    <label class=\"control-label\">Expediente Físico</label>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label class=\"radio-inline\" style=\"margin-right: 10px;\">\n                    <input\n                    [disabled]=\"viewModeEvaluacion || !enableIzquierda\"\n                      type=\"checkbox\"\n                      class=\"form-checkbox-input\"\n                      name=\"tejidoCorneaIzquierda\"\n                      [(ngModel)]=\"\n                        recepcionSolicitudEvaluacion.tejidoCorneaIzquierda\n                      \"\n                    />\n                  </label>\n                                    <label class=\"control-label\">Tejido Córnea Izquierda</label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <label class=\"radio-inline\" style=\"margin-right: 10px;\">\n                    <input\n                    [disabled]=\"viewModeEvaluacion\"\n                      type=\"checkbox\"\n                      class=\"form-checkbox-input\"\n                      name=\"registroTejido\"\n                      [(ngModel)]=\"recepcionSolicitudEvaluacion.registroTejido\"\n                    />\n                  </label>\n                                    <label class=\"control-label\">Registro de Tejido</label>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <label class=\"radio-inline\" style=\"margin-right: 10px;\">\n                    <input\n                    [disabled]=\"viewModeEvaluacion || !enableDerecha\"\n                      type=\"checkbox\"\n                      class=\"form-checkbox-input\"\n                      name=\"tejidoCorneaDerecha\"\n                      [(ngModel)]=\"\n                        recepcionSolicitudEvaluacion.tejidoCorneaDerecha\n                      \"\n                    />\n                  </label>\n                                    <label class=\"control-label\">Tejido Córnea Derecha</label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Folio de Solicitud de Evaluación:</label\n                >\n                <input\n                [disabled]=\"true\"\n                  class=\"form-control\"\n                  placeholder=\"Nombre\"\n                  type=\"text\"\n                  [value]=\"solicitudEvaluacionCorneal.folioSolicitud\"\n                  disabled=\"true\"\n                />\n              </div>\n            </div>\n          </div>\n          <hr />\n          <h4>A. Recepción en el BTC</h4>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <app-componente-fecha\n              [enabled]=\"!viewModeEvaluacion\"\n                [componente]=\"'recepcionSolicitudEvaluacion'\"\n                [atributo]=\"'fechaRecepcion'\"\n                [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"\n                  validosRecepcionSolicitudEvaluacion['fechaRecepcion']\n                \"\n                [(dato)]=\"recepcionSolicitudEvaluacion.fechaRecepcion\"\n                class=\"w-100\"\n              >\n              </app-componente-fecha>\n            </div>\n            <div class=\"col-md-6\">\n              <app-componente-hora\n              [enabled]=\"!viewModeEvaluacion\"\n                [componente]=\"'recepcionSolicitudEvaluacion'\"\n                [atributo]=\"'horaRecepcion'\"\n                [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"\n                  validosRecepcionSolicitudEvaluacion['horaRecepcion']\n                \"\n                [(dato)]=\"recepcionSolicitudEvaluacion.horaRecepcion\"\n                class=\"w-100\"\n              >\n              </app-componente-hora>\n            </div>\n          </div>\n\n          <h4>PERSONA QUE REALIZA LA ENTREGA</h4>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Nombre(s):</label>\n                                <input [disabled]=\"viewModeEvaluacion\" class=\"form-control\" placeholder=\"Nombre\" type=\"text\" name=\"nombreRecibe\" (keyup)=\"globalesService.cvtMaysculas($event)\" [(ngModel)]=\"recepcionSolicitudEvaluacion.nombreRecibe\" />\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Primer Apellido:</label>\n                                        <input [disabled]=\"viewModeEvaluacion\" class=\"form-control\" placeholder=\"Primer Apellido\" type=\"text\" name=\"primerApellidoRecibe\"  (keyup)=\"globalesService.cvtMaysculas($event)\"  [(ngModel)]=\"\n                    recepcionSolicitudEvaluacion.primerApellidoRecibe\n                  \" />\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Segundo Apellido:</label>\n                                        <input [disabled]=\"viewModeEvaluacion\" class=\"form-control\" placeholder=\"Segundo Apellido\" type=\"text\" name=\"segundoApellidoRecibe\"  (keyup)=\"globalesService.cvtMaysculas($event)\"  [(ngModel)]=\"\n                    recepcionSolicitudEvaluacion.segundoApellidoRecibe\n                  \" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <h4>PERSONA QUE RECIBE EL TEJIDO</h4>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Nombre(s):</label>\n                                <input class=\"form-control\" placeholder=\"Nombre\" type=\"text\" [value]=\"usuarioLogueado.nombre\" disabled=\"true\" />\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Primer Apellido:</label>\n                                        <input class=\"form-control\" placeholder=\"Primer Apellido\" type=\"text\" [value]=\"usuarioLogueado.primerApellido\" disabled=\"true\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Segundo Apellido:</label>\n                                        <input class=\"form-control\" placeholder=\"Segundo Apellido\" type=\"text\" [value]=\"usuarioLogueado.segundoApellido\" disabled=\"true\" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Fecha de recepción:</label>\n                                        <kendo-datepicker [disabled]=\"true\" [value]=\"fechaRecepcion\" class=\"form-control\">\n                                        </kendo-datepicker>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Hora:</label>\n                                        <kendo-timepicker [disabled]=\"true\" [value]=\"fechaRecepcion\" class=\"form-control\">\n                                        </kendo-timepicker>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <hr />\n                            <h4>B. Identificación de la Donación</h4>\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">N° Expediente Clínico:</label>\n                                <input class=\"form-control\" placeholder=\"Segundo Apellido\" type=\"text\" [value]=\"solicitudEvaluacionCorneal.numeroExpediente\" disabled=\"true\" />\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Nombre del Donante:</label>\n                                <input class=\"form-control\" placeholder=\"Nombre\" type=\"text\" [value]=\"solicitudEvaluacionCorneal.nombre\" disabled=\"true\" />\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Primer Apellido:</label>\n                                        <input class=\"form-control\" placeholder=\"Primer Apellido\" type=\"text\" [value]=\"solicitudEvaluacionCorneal.primerApellido\" disabled=\"true\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Segundo Apellido:</label>\n                                        <input class=\"form-control\" placeholder=\"Segundo Apellido\" type=\"text\" [value]=\"solicitudEvaluacionCorneal.segundoApellido\" disabled=\"true\" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Folio de Hospital Procurador:</label>\n                                <input class=\"form-control\" placeholder=\"Segundo Apellido\" type=\"text\" [value]=\"solicitudEvaluacionCorneal.folioSolicitud\" disabled=\"true\" />\n                            </div>\n\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">ID del BTC de CI:</label>\n                                <input class=\"form-control\" type=\"text\" [value]=\"recepcionSolicitudEvaluacion.idbtcCi\" disabled=\"true\" />\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">ID del BTC de CD:</label>\n                                <input class=\"form-control\" type=\"text\" [value]=\"recepcionSolicitudEvaluacion.idbtcCd\" disabled=\"true\" />\n                            </div>\n\n                            <!--\n          <app-componente-cadena\n            [componente]=\"'recepcionSolicitudEvaluacion'\"\n            [atributo]=\"'idbtcCd'\"\n            [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosRecepcionSolicitudEvaluacion['idbtcCd']\"\n            [(dato)]=\"recepcionSolicitudEvaluacion.idbtcCd\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'recepcionSolicitudEvaluacion'\"\n            [atributo]=\"'idbtcCi'\"\n            [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosRecepcionSolicitudEvaluacion['idbtcCi']\"\n            [(dato)]=\"recepcionSolicitudEvaluacion.idbtcCi\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n                            <!-- <app-componente-fecha [componente]=\"'recepcionSolicitudEvaluacion'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRecepcionSolicitudEvaluacion['fechaRegistro']\"\n                                                   [(dato)]=\"recepcionSolicitudEvaluacion.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'recepcionSolicitudEvaluacion'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRecepcionSolicitudEvaluacion['fechaActualizacion']\"\n                                                   [(dato)]=\"recepcionSolicitudEvaluacion.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >  -->\n                            <!--                      <app-componente-fecha [componente]=\"'recepcionSolicitudEvaluacion'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRecepcionSolicitudEvaluacion['fechaBaja']\"\n                                                   [(dato)]=\"recepcionSolicitudEvaluacion.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-cadena [componente]=\"'recepcionSolicitudEvaluacion'\"\n                                                   [atributo]=\"'estatusProceso'\"\n                                                   [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRecepcionSolicitudEvaluacion['estatusProceso']\"\n                                                   [(dato)]=\"recepcionSolicitudEvaluacion.estatusProceso\"   class=\"w-100\" >\n                    </app-componente-cadena >  -->\n                            <!--                     <div>\n                        <app-componente-objeto [componente]=\"'recepcionSolicitudEvaluacion'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosRecepcionSolicitudEvaluacion['usuarioUltMov']\"\n                                               [(dato)]=\"recepcionSolicitudEvaluacion.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosRecepcionSolicitudEvaluacion\"\n                                               [opciones]=\"lista_usuarioUltMovRecepcionSolicitudEvaluacion\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovRecepcionSolicitudEvaluacionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'recepcionSolicitudEvaluacion','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"recepcionSolicitudEvaluacion.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div> -->\n                            <!--                      <app-componente-radio [componente]=\"'recepcionSolicitudEvaluacion'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"recepcionSolicitudEvaluacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRecepcionSolicitudEvaluacion['status']\"\n                                                   [(dato)]=\"recepcionSolicitudEvaluacion.status\"   class=\"w-100\" >\n                    </app-componente-radio > -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n</form>\n"

/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: RecepcionSolicitudEvaluacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionSolicitudEvaluacionComponent", function() { return RecepcionSolicitudEvaluacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecepcionSolicitudEvaluacionComponent = /** @class */ (function () {
    function RecepcionSolicitudEvaluacionComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recepcionSolicitudEvaluacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEditar = false;
        this.idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEditar = false;
    }
    RecepcionSolicitudEvaluacionComponent.prototype.actualizarRecepcionSolicitudEvaluacion = function () {
        if (this.recepcionSolicitudEvaluacion.id == null) {
            this.recepcionSolicitudEvaluacionService.guardarRecepcionSolicitudEvaluacion(this.recepcionSolicitudEvaluacion, this.evtGuardar, this);
        }
        else {
            this.recepcionSolicitudEvaluacionService.actualizarRecepcionSolicitudEvaluacion(this.recepcionSolicitudEvaluacion, this.evtActualiza, this);
        }
    };
    RecepcionSolicitudEvaluacionComponent.prototype.evtGuardar = function (recepcionSolicitudEvaluacion, obj) {
        obj.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
        obj.recepcionSolicitudEvaluacionChange.emit(obj.recepcionSolicitudEvaluacion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    RecepcionSolicitudEvaluacionComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.recepcionSolicitudEvaluacionChange.emit(obj.recepcionSolicitudEvaluacion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    RecepcionSolicitudEvaluacionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarRecepcionSolicitudEvaluacion();
            }
        }
    };
    RecepcionSolicitudEvaluacionComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RecepcionSolicitudEvaluacionComponent.prototype, "fechaRecepcion", {
        get: function () {
            if (!this.solicitudEvaluacionCorneal) {
                return null;
            }
            return new Date(this.solicitudEvaluacionCorneal.fechaRegistro);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "recepcionSolicitudEvaluacionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "validosRecepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_1__["RecepcionSolicitudEvaluacion"])
    ], RecepcionSolicitudEvaluacionComponent.prototype, "recepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "recepcionSolicitudEvaluacionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "recepcionSolicitudEvaluacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"])
    ], RecepcionSolicitudEvaluacionComponent.prototype, "usuarioLogueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_3__["SolicitudEvaluacionCorneal"])
    ], RecepcionSolicitudEvaluacionComponent.prototype, "solicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "viewModeEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "enableIzquierda", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RecepcionSolicitudEvaluacionComponent.prototype, "enableDerecha", void 0);
    RecepcionSolicitudEvaluacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recepcion-solicitud-evaluacion',
            template: __webpack_require__(/*! ./recepcion-solicitud-evaluacion.component.html */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component.html"),
            styles: [__webpack_require__(/*! ./recepcion-solicitud-evaluacion.component.css */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion/recepcion-solicitud-evaluacion.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], RecepcionSolicitudEvaluacionComponent);
    return RecepcionSolicitudEvaluacionComponent;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/shared/configurar-recepcion-solicitud-evaluacion.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/shared/configurar-recepcion-solicitud-evaluacion.ts ***!
  \******************************************************************************************************/
/*! exports provided: ConfigurarRecepcionSolicitudEvaluacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarRecepcionSolicitudEvaluacion", function() { return ConfigurarRecepcionSolicitudEvaluacion; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarRecepcionSolicitudEvaluacion = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarRecepcionSolicitudEvaluacion() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "recepcionSolicitudEvaluacion";
        this.rutaLista = this.crudServiceBaseUrl + "/getRecepcionSolicitudEvaluaciones";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarRecepcionSolicitudEvaluacion";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarRecepcionSolicitudEvaluacion";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarRecepcionSolicitudEvaluacion";
        this.titulo = "Catálogo RecepcionSolicitudEvaluacion";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.recepcionSolicitudEvaluacionConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarRecepcionSolicitudEvaluacion.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarRecepcionSolicitudEvaluacion.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarRecepcionSolicitudEvaluacion.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarRecepcionSolicitudEvaluacion.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarRecepcionSolicitudEvaluacion.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarRecepcionSolicitudEvaluacion.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarRecepcionSolicitudEvaluacion;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts ***!
  \*******************************************************************************************/
/*! exports provided: RecepcionSolicitudEvaluacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionSolicitudEvaluacion", function() { return RecepcionSolicitudEvaluacion; });
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../evaluacion-solicitudes/shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");



/**
 *
 * @author IstmoSoft
 */
var RecepcionSolicitudEvaluacion = /** @class */ (function () {
    // atributos fin
    function RecepcionSolicitudEvaluacion(entrada) {
        if (entrada === void 0) { entrada = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.horaRecepcion = null;
        this.registroTejido = null;
        this.fechaBaja = null;
        this.tejidoCorneaDerecha = null;
        this.fechaRegistro = null;
        this.estatusProceso = null;
        this.expedienteFisico = null;
        this.idbtcCi = null;
        this.tejidoCorneaIzquierda = null;
        this.idbtcCd = null;
        this.fechaActualizacion = null;
        this.fechaRecepcion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idsolicitudEvaluacionCorneal = null;
        this.nombreRecibe = null;
        this.primerApellidoRecibe = null;
        this.segundoApellidoRecibe = null;
        this.idUsuarioRecibe = null;
        this.evaluacionSolicitud = null;
        this.oficioDonacion = null;
        if (entrada !== null) {
            this.from(entrada);
        }
    }
    RecepcionSolicitudEvaluacion.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.horaRecepcion)
            this.horaRecepcion = source.horaRecepcion;
        if (source.registroTejido)
            this.registroTejido = source.registroTejido;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.tejidoCorneaDerecha)
            this.tejidoCorneaDerecha = source.tejidoCorneaDerecha;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.estatusProceso)
            this.estatusProceso = source.estatusProceso;
        if (source.expedienteFisico)
            this.expedienteFisico = source.expedienteFisico;
        if (source.idbtcCi)
            this.idbtcCi = source.idbtcCi;
        if (source.tejidoCorneaIzquierda)
            this.tejidoCorneaIzquierda = source.tejidoCorneaIzquierda;
        if (source.idbtcCd)
            this.idbtcCd = source.idbtcCd;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.fechaRecepcion)
            this.fechaRecepcion = source.fechaRecepcion;
        if (source.nombreRecibe)
            this.nombreRecibe = source.nombreRecibe;
        if (source.primerApellidoRecibe)
            this.primerApellidoRecibe = source.primerApellidoRecibe;
        if (source.segundoApellidoRecibe)
            this.segundoApellidoRecibe = source.segundoApellidoRecibe;
        if (source.status)
            this.status = source.status;
        if (source.idUsuarioRecibe)
            this.idUsuarioRecibe = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"](source.idUsuarioRecibe);
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"](source.usuarioUltMov);
        if (source.idsolicitudEvaluacionCorneal)
            this.idsolicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCorneal"](source.idsolicitudEvaluacionCorneal);
        if (source.evaluacionSolicitud)
            this.evaluacionSolicitud = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_0__["EvaluacionSolicitud"](source.evaluacionSolicitud);
    };
    RecepcionSolicitudEvaluacion.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.horaRecepcion)
            return true;
        if (this.registroTejido)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.tejidoCorneaDerecha)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.estatusProceso)
            return true;
        if (this.expedienteFisico)
            return true;
        if (this.idbtcCi)
            return true;
        if (this.tejidoCorneaIzquierda)
            return true;
        if (this.idbtcCd)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.fechaRecepcion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idsolicitudEvaluacionCorneal)
            return true;
        return false;
    };
    RecepcionSolicitudEvaluacion.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.horaRecepcion != null && typeof this.horaRecepcion === 'string' && this.horaRecepcion.replace(/^\s+|\s+$/g, '') == "")
            this.horaRecepcion = null;
        if (this.registroTejido != null && typeof this.registroTejido === 'string' && this.registroTejido.replace(/^\s+|\s+$/g, '') == "")
            this.registroTejido = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.tejidoCorneaDerecha != null && typeof this.tejidoCorneaDerecha === 'string' && this.tejidoCorneaDerecha.replace(/^\s+|\s+$/g, '') == "")
            this.tejidoCorneaDerecha = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.estatusProceso != null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '') == "")
            this.estatusProceso = null;
        if (this.expedienteFisico != null && typeof this.expedienteFisico === 'string' && this.expedienteFisico.replace(/^\s+|\s+$/g, '') == "")
            this.expedienteFisico = null;
        if (this.idbtcCi != null && typeof this.idbtcCi === 'string' && this.idbtcCi.replace(/^\s+|\s+$/g, '') == "")
            this.idbtcCi = null;
        if (this.tejidoCorneaIzquierda != null && typeof this.tejidoCorneaIzquierda === 'string' && this.tejidoCorneaIzquierda.replace(/^\s+|\s+$/g, '') == "")
            this.tejidoCorneaIzquierda = null;
        if (this.idbtcCd != null && typeof this.idbtcCd === 'string' && this.idbtcCd.replace(/^\s+|\s+$/g, '') == "")
            this.idbtcCd = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.fechaRecepcion != null && typeof this.fechaRecepcion === 'string' && this.fechaRecepcion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRecepcion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idsolicitudEvaluacionCorneal != null && typeof this.idsolicitudEvaluacionCorneal === 'string' && this.idsolicitudEvaluacionCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.idsolicitudEvaluacionCorneal = null;
        return this;
    };
    return RecepcionSolicitudEvaluacion;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~3015beaa.js.map