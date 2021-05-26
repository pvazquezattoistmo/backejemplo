(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~a26ccb88"],{

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-conjunto/lampara-hendidura-conjunto.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-conjunto/lampara-hendidura-conjunto.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-conjunto/lampara-hendidura-conjunto.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-conjunto/lampara-hendidura-conjunto.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let lamparaHendidura of listaLamparaHendidura \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+lamparaHendidura.id}\"\n        (click)=\"elegir(lamparaHendidura,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{lamparaHendidura.id}}\">{{lamparaHendidura.id}}</a>\n    </li>\n    <li *ngFor =  \"let lamparaHendidura of listaLamparaHendiduraN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+lamparaHendidura.id}\"\n        (click)=\"elegir(lamparaHendidura, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{lamparaHendidura.id}}\">T-{{lamparaHendidura.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let lamparaHendidura of listaLamparaHendidura ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+lamparaHendidura.id}\" id=\"tab-I-{{lamparaHendidura.id}}\">\n\t\t\t<app-lampara-hendidura [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [lamparaHendiduraBuscar]=\"lamparaHendiduraBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosLamparaHendidura]=\"validosLamparaHendidura\"  \n\t\t\t\t\t\t  [lamparaHendiduraService]=\"lamparaHendiduraService\" [(opcion)]=\"opcionLamparaHendidura\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(lamparaHendidura)]=\"listaLamparaHendidura[i]\"  [ocultarConjuntos]=\"ocultarConjuntosLamparaHendidura\"\n                           [lista_usuarioUltMovLamparaHendiduraUsuario]=\"lista_usuarioUltMovLamparaHendiduraUsuario\" \n                           [lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud]=\"lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud\" \n\n\t\t\t\t\t  >\n\t\t\t</app-lampara-hendidura>\n        </div>\n        <div *ngFor = \"let lamparaHendidura of listaLamparaHendiduraN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+lamparaHendidura.id}\" id=\"tab-N-{{lamparaHendidura.id}}\">\n\t\t\t<app-lampara-hendidura [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [lamparaHendiduraBuscar]=\"lamparaHendiduraBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosLamparaHendidura]=\"validosLamparaHendidura\"  \n\t\t\t\t\t\t  [lamparaHendiduraService]=\"lamparaHendiduraService\" [(opcion)]=\"opcionLamparaHendidura\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(lamparaHendidura)]=\"listaLamparaHendiduraN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosLamparaHendidura\"\n                           [lista_usuarioUltMovLamparaHendiduraUsuario]=\"lista_usuarioUltMovLamparaHendiduraUsuario\" \n                           [lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud]=\"lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud\" \n\n\t\t\t\t\t  >\n\t\t\t</app-lampara-hendidura>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-conjunto/lampara-hendidura-conjunto.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-conjunto/lampara-hendidura-conjunto.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LamparaHendiduraConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamparaHendiduraConjuntoComponent", function() { return LamparaHendiduraConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/lampara-hendidura */ "./src/app/lampara-hendiduras/shared/lampara-hendidura.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LamparaHendiduraConjuntoComponent = /** @class */ (function () {
    function LamparaHendiduraConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovLamparaHendiduraUsuarioEditar = false;
        this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEditar = false;
        this.listaLamparaHendiduraN = [];
        this.listaLamparaHendidura = [];
        this.listaLamparaHendiduraChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lamparaHendiduraN = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__["LamparaHendidura"]();
        this.lamparaHendiduraNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    LamparaHendiduraConjuntoComponent.prototype.elegir = function (lamparaHendidura, tipo) {
        this.idSeleccionado = tipo + "-" + lamparaHendidura.id;
        this.lamparaHendiduraN = lamparaHendidura;
    };
    LamparaHendiduraConjuntoComponent.prototype.ngOnInit = function () {
        this.lamparaHendiduraN.id = 0;
        this.listaLamparaHendiduraN.push(Object.assign({}, this.lamparaHendiduraN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    LamparaHendiduraConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__["LamparaHendidura"]();
        pg.id = this.listaLamparaHendiduraN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaLamparaHendiduraN.push(pg);
    };
    LamparaHendiduraConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaLamparaHendidura; _i < _a.length; _i++) {
            var lamparaHendidura = _a[_i];
            this.lamparaHendiduraService.actualizarLamparaHendidura(lamparaHendidura, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaLamparaHendiduraN; _b < _c.length; _b++) {
            var lamparaHendidura = _c[_b];
            lamparaHendidura.id = null;
            this.lamparaHendiduraService.guardarLamparaHendidura(lamparaHendidura, this.evtGuardar, this);
        }
    };
    LamparaHendiduraConjuntoComponent.prototype.evtGuardar = function (lamparaHendidura, obj) {
        obj.agregados++;
        obj.listaLamparaHendidura.push(lamparaHendidura);
        if (obj.agregados >= obj.listaLamparaHendiduraN.length) {
            obj.lamparaHendiduraN = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__["LamparaHendidura"]();
            obj.listaLamparaHendiduraN = [];
            obj.lamparaHendiduraN.id = 0;
            obj.idSeleccionado = "N-" + obj.lamparaHendiduraN.id;
            obj.listaLamparaHendiduraN.push(Object.assign({}, obj.lamparaHendiduraN));
            obj.listaLamparaHendiduraChange.emit(obj.listaLamparaHendidura);
        }
        if (obj.agregados >= obj.listaLamparaHendiduraN.length &&
            obj.actualizados >= obj.listaLamparaHendidura.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    LamparaHendiduraConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaLamparaHendiduraN.length &&
                obj.actualizados >= obj.listaLamparaHendidura.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    LamparaHendiduraConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], LamparaHendiduraConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "lamparaHendiduraBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "validosLamparaHendidura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "ocultarConjuntosLamparaHendidura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "lamparaHendiduraService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LamparaHendiduraConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "lista_usuarioUltMovLamparaHendiduraUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LamparaHendiduraConjuntoComponent.prototype, "listaLamparaHendidura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "listaLamparaHendiduraChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__["LamparaHendidura"])
    ], LamparaHendiduraConjuntoComponent.prototype, "lamparaHendiduraN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraConjuntoComponent.prototype, "lamparaHendiduraNChange", void 0);
    LamparaHendiduraConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lampara-hendidura-conjunto',
            template: __webpack_require__(/*! ./lampara-hendidura-conjunto.component.html */ "./src/app/lampara-hendiduras/lampara-hendidura-conjunto/lampara-hendidura-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./lampara-hendidura-conjunto.component.css */ "./src/app/lampara-hendiduras/lampara-hendidura-conjunto/lampara-hendidura-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LamparaHendiduraConjuntoComponent);
    return LamparaHendiduraConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <!-- <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"!viewModeEvaluacion\">\n        <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n        </div>\n    </div> -->\n  <app-estudio-laboratorio-crud [viewModeEvaluacion]=\"true\"></app-estudio-laboratorio-crud>\n  <div class=\"panel-footer\" style=\"text-align: left;\">\n    <h4 class=\"text-center\">REVISIÓN EN LA LÁMPARA DE HENDIDURA</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-lampara-hendidura [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"'CÓRNEA IZQUIERDA (CI)'\"\n        [lamparaHendiduraBuscar]=\"lamparaHendiduraBuscar\" [permisosAtributos]=\"permisosAtributos\"\n        [permisosConjuntos]=\"permisosConjuntos\" [validosLamparaHendidura]=\"validosLamparaHendidura\"\n        [lamparaHendiduraService]=\"lamparaHendidura_service\" [(opcion)]=\"opcionLamparaHendidura\"\n        [globalesService]=\"globalesService\" [(lamparaHendidura)]=\"lamparaHendidura\"\n        [ocultarConjuntos]=\"ocultarConjuntosLamparaHendidura\" [lista_usuarioUltMovLamparaHendiduraUsuario]=\"\n      lista_usuarioUltMovLamparaHendiduraUsuario\n    \" [lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud]=\"\n      lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud\n    \" [enable]=\"evaluacionSolicitud?.idrecepcionSolicitudEvaluacion?.idbtcCi != null && !viewModeEvaluacion && (!evaluacionSolicitud.almacenEvaluacion)\">\n      </app-lampara-hendidura>\n    </div>\n    <div class=\"col-md-6\">\n      <app-lampara-hendidura [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"'CÓRNEA DERECHA (CD)'\"\n        [lamparaHendiduraBuscar]=\"lamparaHendiduraBuscar\" [permisosAtributos]=\"permisosAtributos\"\n        [permisosConjuntos]=\"permisosConjuntos\" [validosLamparaHendidura]=\"validosLamparaHendidura\"\n        [lamparaHendiduraService]=\"lamparaHendidura_service\" [(opcion)]=\"opcionLamparaHendidura\"\n        [globalesService]=\"globalesService\" [(lamparaHendidura)]=\"lamparaHendiduraDerecha\"\n        [ocultarConjuntos]=\"ocultarConjuntosLamparaHendidura\" [lista_usuarioUltMovLamparaHendiduraUsuario]=\"\n          lista_usuarioUltMovLamparaHendiduraUsuario\n        \" [lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud]=\"\n          lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud\n        \"\n        [enable]=\"evaluacionSolicitud?.idrecepcionSolicitudEvaluacion?.idbtcCd != null && !viewModeEvaluacion && (!evaluacionSolicitud.almacenEvaluacion)\">\n      </app-lampara-hendidura>\n    </div>\n  </div>\n\n  <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"!viewModeEvaluacion\">\n    <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n      <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn  btn-primary btn-guardar\"\n        [disabled]=\"evaluacionSolicitud.almacenEvaluacion\" (click)=\"doSave()\">\n        <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n      </button>\n      <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-primary btn-guardar\"\n        [routerLink]=\"['/estudio-laboratorio-crud/',evaluacionSolicitud.id]\">\n        <span class=\"fa fa-floppy-disk\"></span>Atrás\n      </button>\n      <button type=\"button\" class=\"btn btn-primary btn-guardar\"\n        [routerLink]=\"['/conteo-celular-crud/',evaluacionSolicitud.id]\"\n        [disabled]=\"!(evaluacionSolicitud.lamparasHendidura?.length > 0)\">\n        <span class=\"fa fa-floppy-disk\"></span>Siguiente\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"buscarLamparaHendidura_{{ nombre }}\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-lampara-hendidura-list-kendo [nombregrid]=\"'buscar_' + nombre\"\n          [configuracionLamparaHendidura]=\"configuracionLamparaHendidura\" (lamparaHendiduraSeleccionado)=\"\n            evtLamparaHendiduraSeleccionado($event)\n          \">\n        </app-lampara-hendidura-list-kendo>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LamparaHendiduraCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamparaHendiduraCrudComponent", function() { return LamparaHendiduraCrudComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/lampara-hendidura */ "./src/app/lampara-hendiduras/shared/lampara-hendidura.ts");
/* harmony import */ var _shared_lampara_hendidura_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/lampara-hendidura.service */ "./src/app/lampara-hendiduras/shared/lampara-hendidura.service.ts");
/* harmony import */ var _shared_configurar_lampara_hendidura__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/configurar-lampara-hendidura */ "./src/app/lampara-hendiduras/shared/configurar-lampara-hendidura.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../evaluacion-solicitudes/shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../evaluacion-solicitudes/shared/evaluacion-solicitud.service */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
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








var LamparaHendiduraCrudComponent = /** @class */ (function () {
    function LamparaHendiduraCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    lamparaHendidura_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, evaluacionSolicitud_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service, activatedRoute) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.lamparaHendidura_service = lamparaHendidura_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.evaluacionSolicitud_service = evaluacionSolicitud_service;
        this.recepcionSolicitudEvaluacion_service = recepcionSolicitudEvaluacion_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.activatedRoute = activatedRoute;
        this.opcionLamparaHendidura = 0;
        this.validosLamparaHendidura = {
            id: false,
            fechaBaja: false,
            fechaRegistro: false,
            opacidadEstromal: false,
            arcoSenil: false,
            tipoCornea: false,
            desecacion: false,
            microcornea: false,
            fechaActualizacion: false,
            danoEndotelial: false,
            observacion: true,
            pliegueEstria: false,
            status: false,
            usuarioUltMov: false,
            idevaluacionSolicitud: false,
        };
        this.ocultarConjuntosLamparaHendidura = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "lamparaHendidura", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.lamparaHendiduraLazy = false;
        this.lamparaHendiduraPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lamparaHendidura = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
        this.lamparaHendiduraChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lamparaHendiduraTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lista_lamparaHendiduras = [];
        this.usuarioUltMovLamparaHendiduraUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.lista_usuarioUltMovLamparaHendiduraUsuario = [];
        this.usuarioUltMovLamparaHendiduraUsuarioEditar = false;
        this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitud"]();
        this.lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud = [];
        this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEditar = false;
        this.evaluacionSolicitud = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitud"]();
        this.lamparaHendiduraDerecha = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.lamparaHendiduraSeleccion = this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
        this.configuracionLamparaHendidura = new _shared_configurar_lampara_hendidura__WEBPACK_IMPORTED_MODULE_7__["ConfigurarLamparaHendidura"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovLamparaHendiduraUsuario, this);
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud, this);
        this.limpiarCampos();
    }
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "lamparaHendiduraOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosLamparaHendidura)
                return true;
            return !this.lamparaHendiduraActualizar;
        },
        enumerable: true,
        configurable: true
    });
    LamparaHendiduraCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.lamparaHendidura && changes.lamparaHendidura.currentValue == null &&
            this.lamparaHendidura == null)
            this.lamparaHendidura = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
        else {
            var aux = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
            if (this.lamparaHendidura)
                aux.from(this.lamparaHendidura);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraSeleccion = this.lamparaHendiduraGuardar = false;
                this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = this.lamparaHendiduraCancelar = true;
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
                this.lamparaHendiduraSeleccion = this.lamparaHendiduraAgregar = this.lamparaHendiduraBuscar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
                this.lamparaHendiduraGuardar = this.lamparaHendiduraCancelar = true;
            }
        }
    };
    LamparaHendiduraCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "lamparaHendidura",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "evaluacionSolicitud",
            "recepcionSolicitudEvaluacion",
            "solicitudEvaluacionCorneal",
            "causaMuerte",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.lamparaHendiduraPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    LamparaHendiduraCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.lamparaHendiduraPermisos = true;
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoAtributo && permisos.lamparaHendidura.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.lamparaHendidura.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoConjunto && permisos.lamparaHendidura.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.lamparaHendidura.PermisoConjunto;
        }
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoTabla && permisos.lamparaHendidura.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.lamparaHendidura.PermisoTabla[0];
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
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo && permisos.evaluacionSolicitud.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.evaluacionSolicitud.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.evaluacionSolicitud.PermisoAtributo);
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo && permisos.evaluacionSolicitud.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.evaluacionSolicitud.PermisoConjunto);
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoTabla && permisos.evaluacionSolicitud.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.evaluacionSolicitud.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.evaluacionSolicitud.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    LamparaHendiduraCrudComponent.prototype.evtGetUsuarioUltMovLamparaHendiduraUsuario = function (lista_usuarioUltMovLamparaHendiduraUsuario, obj) {
        obj.lista_usuarioUltMovLamparaHendiduraUsuario = lista_usuarioUltMovLamparaHendiduraUsuario;
        obj.actualizar_UsuarioUltMovLamparaHendiduraUsuario();
    };
    LamparaHendiduraCrudComponent.prototype.evtGetIdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud = function (lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud, obj) {
        obj.lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud = lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud;
        obj.actualizar_IdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud();
    };
    LamparaHendiduraCrudComponent.prototype.actualizar_UsuarioUltMovLamparaHendiduraUsuario = function () {
        if (this.usuarioUltMovLamparaHendiduraUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovLamparaHendiduraUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovLamparaHendiduraUsuarioEleccion.id) {
                    this.usuarioUltMovLamparaHendiduraUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    LamparaHendiduraCrudComponent.prototype.actualizar_IdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud = function () {
        if (this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion)
            for (var _i = 0, _a = this.lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion.id) {
                    this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion = eleme;
                    break;
                }
            }
    };
    LamparaHendiduraCrudComponent.prototype.ngDoCheck = function () {
    };
    LamparaHendiduraCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosLamparaHendidura['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosLamparaHendidura['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosLamparaHendidura['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosLamparaHendidura['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaOpacidadEstromal", {
        get: function () {
            return this.validosLamparaHendidura['opacidadEstromal'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaArcoSenil", {
        get: function () {
            return this.validosLamparaHendidura['arcoSenil'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaTipoCornea", {
        get: function () {
            return this.validosLamparaHendidura['tipoCornea'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaDesecacion", {
        get: function () {
            return this.validosLamparaHendidura['desecacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaMicrocornea", {
        get: function () {
            return this.validosLamparaHendidura['microcornea'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosLamparaHendidura['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaDanoEndotelial", {
        get: function () {
            return this.validosLamparaHendidura['danoEndotelial'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaObservacion", {
        get: function () {
            return this.validosLamparaHendidura['observacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaPliegueEstria", {
        get: function () {
            return this.validosLamparaHendidura['pliegueEstria'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosLamparaHendidura['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosLamparaHendidura['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaIdevaluacionSolicitud", {
        get: function () {
            return this.validosLamparaHendidura['idevaluacionSolicitud'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaFechaBaja && this.validaFechaRegistro && this.validaOpacidadEstromal && this.validaArcoSenil && this.validaTipoCornea && this.validaDesecacion && this.validaMicrocornea && this.validaFechaActualizacion && this.validaDanoEndotelial && this.validaObservacion && this.validaPliegueEstria && this.validaStatus && this.validaUsuarioUltMov && this.validaIdevaluacionSolicitud;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    LamparaHendiduraCrudComponent.prototype.obtenerLamparaHendiduras = function (lista, objeto) {
        objeto.lista_lamparaHendiduras = lista;
        if (lista && lista.length > 0) {
            objeto.lamparaHendidura.from(lista[0]);
            objeto.evtLamparaHendiduraSeleccionado(objeto.lamparaHendidura);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    LamparaHendiduraCrudComponent.prototype.evn_lazy_lamparaHendidura = function (lamparaHendidura, objeto) {
        objeto.lamparaHendidura = lamparaHendidura;
        objeto.lamparaHendiduraChange.emit(objeto.lamparaHendidura);
        objeto.configuarCombosObjetos();
        objeto.lamparaHendiduraLazy = true;
    };
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "datosReporteLamparaHendiduraWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.lamparaHendiduraActualizar && this.lamparaHendiduraLazy && this.globalesService.preporteWord(this, "lamparaHendidura"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "datosReporteLamparaHendiduraExcel", {
        get: function () {
            return !(this.lamparaHendiduraActualizar && this.lamparaHendiduraLazy && this.globalesService.preporteExcel(this, "lamparaHendidura"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LamparaHendiduraCrudComponent.prototype, "datosReporteLamparaHendiduraPdf", {
        get: function () {
            return !(this.lamparaHendiduraActualizar && this.lamparaHendiduraLazy && this.globalesService.preportePdf(this, "lamparaHendidura"));
        },
        enumerable: true,
        configurable: true
    });
    LamparaHendiduraCrudComponent.prototype.reporteLamparaHendiduraExcel = function (form) {
        var nombre = "LamparaHendidura.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "lamparaHendidura": this.lamparaHendidura };
        parametros["plantilla"] = "LamparaHendidura.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    LamparaHendiduraCrudComponent.prototype.reporteLamparaHendiduraWord = function (form) {
        var nombre = "LamparaHendidura.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "lamparaHendidura": this.lamparaHendidura };
        parametros["plantilla"] = "LamparaHendidura.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    LamparaHendiduraCrudComponent.prototype.reporteLamparaHendiduraPdf = function (form) {
        var nombre = "LamparaHendidura.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "lamparaHendidura": this.lamparaHendidura };
        parametros["plantilla"] = "LamparaHendidura.docx";
        parametros["salida"] = "LamparaHendidura.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    LamparaHendiduraCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraCancelar = true;
    };
    LamparaHendiduraCrudComponent.prototype.buscarLamparaHendiduraFront = function (form) {
        this.accionesBuscar();
        var vlamparaHendidura = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
        vlamparaHendidura.from(this.lamparaHendidura);
        this.configuracionLamparaHendidura = new _shared_configurar_lampara_hendidura__WEBPACK_IMPORTED_MODULE_7__["ConfigurarLamparaHendidura"]();
        this.configuracionLamparaHendidura.permisosTabla = { "tabla": "lamparaHendidura", "permiso": 8 };
        this.configuracionLamparaHendidura.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionLamparaHendidura.lamparaHendiduraConsulta = vlamparaHendidura;
        this.permisosacciones();
        $("#buscarLamparaHendidura_" + this.nombre).modal();
    };
    LamparaHendiduraCrudComponent.prototype.buscarLamparaHendiduraBack = function (lamparaHendidura) {
        this.lamparaHendidura_service.getLamparaHendidurasByDto(lamparaHendidura, this.eventoSrvLamparaHendiduraBuscar, this);
    };
    LamparaHendiduraCrudComponent.prototype.eventoSrvLamparaHendiduraBuscar = function (lista, objeto) {
        objeto.lista_lamparaHendiduras = lista;
        if (lista && lista.length > 0) {
            objeto.lamparaHendidura = lista[0];
            objeto.lamparaHendiduraLazy = false;
            objeto.lamparaHendidura_service.lazyLamparaHendidura(objeto.lamparaHendidura, objeto.evn_lazy_lamparaHendidura, objeto);
        }
    };
    LamparaHendiduraCrudComponent.prototype.guardarLamparaHendiduraFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarLamparaHendiduraBack(this.lamparaHendidura);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    LamparaHendiduraCrudComponent.prototype.guardarLamparaHendiduraBack = function (lamparaHendidura) {
        if (lamparaHendidura.usuarioUltMov == null)
            lamparaHendidura.usuarioUltMov = this.globalesService.dameUsuario();
        if (lamparaHendidura.status == null || lamparaHendidura.status == "")
            lamparaHendidura.status = 1;
        this.lamparaHendidura_service.guardarLamparaHendidura(lamparaHendidura, this.eventoSrvLamparaHendiduraGuardar, this);
    };
    LamparaHendiduraCrudComponent.prototype.eventoSrvLamparaHendiduraGuardar = function (lamparaHendidura, obj) {
        obj.lamparaHendidura = lamparaHendidura;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
        aux.from(lamparaHendidura);
        obj.lamparaHendiduraChange.emit(aux);
        obj.lamparaHendiduraTablaChange.emit(aux);
        obj.lamparaHendiduraLazy = false;
        obj.lamparaHendidura_service.lazyLamparaHendidura(obj.lamparaHendidura, obj.evn_lazy_lamparaHendidura, obj);
        obj.accionesActualizar();
    };
    LamparaHendiduraCrudComponent.prototype.actualizarLamparaHendiduraFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarLamparaHendiduraBack(this.lamparaHendidura);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    LamparaHendiduraCrudComponent.prototype.actualizarLamparaHendiduraBack = function (lamparaHendidura) {
        lamparaHendidura.usuarioUltMov = this.globalesService.dameUsuario();
        this.lamparaHendidura_service.actualizarLamparaHendidura(lamparaHendidura, this.eventoSrvLamparaHendiduraActualizar, this);
    };
    LamparaHendiduraCrudComponent.prototype.eventoSrvLamparaHendiduraActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.lamparaHendiduraLazy = false;
            obj.lamparaHendidura_service.lazyLamparaHendidura(obj.lamparaHendidura, obj.evn_lazy_lamparaHendidura, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.lamparaHendidura);
            obj.lamparaHendiduraChange.emit(aux);
            obj.lamparaHendiduraTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    LamparaHendiduraCrudComponent.prototype.eliminarLamparaHendiduraFront = function (form) {
        this.accion = 4;
        this.eliminarLamparaHendiduraBack(this.lamparaHendidura);
        this.permisosacciones();
        this.accionesBuscar();
    };
    LamparaHendiduraCrudComponent.prototype.eliminarLamparaHendiduraBack = function (lamparaHendidura) {
        lamparaHendidura.usuarioUltMov = this.globalesService.dameUsuario();
        this.lamparaHendidura_service.eliminarLamparaHendidura(lamparaHendidura, this.eventoSrvLamparaHendiduraEliminar, this);
    };
    LamparaHendiduraCrudComponent.prototype.eventoSrvLamparaHendiduraEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.lamparaHendidura = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
            obj.lamparaHendiduraChange.emit(obj.lamparaHendidura);
            obj.lamparaHendiduraTablaChange.emit(obj.lamparaHendidura);
            obj.limpiarCampos();
        }
    };
    LamparaHendiduraCrudComponent.prototype.cancelarLamparaHendiduraFront = function (form) {
        this.accion = 6;
        this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = true;
        this.permisosacciones();
    };
    LamparaHendiduraCrudComponent.prototype.nuevoLamparaHendiduraFront = function (form) {
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
                this.lamparaHendiduraSeleccion = this.lamparaHendiduraAgregar = this.lamparaHendiduraBuscar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false;
                this.lamparaHendiduraGuardar = this.lamparaHendiduraCancelar = true;
            }.bind(this)
        });
    };
    LamparaHendiduraCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovLamparaHendiduraUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovLamparaHendiduraUsuario, this);
        this.lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud = [];
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud, this);
    };
    LamparaHendiduraCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    LamparaHendiduraCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraSeleccion = this.lamparaHendiduraGuardar = false;
        this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = this.lamparaHendiduraCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    LamparaHendiduraCrudComponent.prototype.evtLamparaHendiduraSeleccionado = function (lamparaHendidura) {
        this.lamparaHendidura = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
        this.lamparaHendidura.from(lamparaHendidura);
        this.lamparaHendiduraLazy = false;
        this.lamparaHendidura_service.lazyLamparaHendidura(this.lamparaHendidura, this.evn_lazy_lamparaHendidura, this);
        this.accion = 7;
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = this.lamparaHendiduraSeleccion = this.lamparaHendiduraGuardar = false;
        this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = this.lamparaHendiduraCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarLamparaHendidura_" + this.nombre).modal("hide");
    };
    LamparaHendiduraCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.lamparaHendiduraSeleccion = this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false; // ******************** maquina
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
        var id = this.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            this.evaluacionSolicitud.id = id;
            this.evaluacionSolicitud_service.lazyEvaluacionSolicitud(this.evaluacionSolicitud, this.evn_lazy_evaluacionSolicitud, this);
        }
    };
    LamparaHendiduraCrudComponent.prototype.permisosacciones = function () {
        if (this.lamparaHendiduraBuscar)
            this.lamparaHendiduraBuscar = this.globalesService.pbuscar(this, "lamparaHendidura");
        if (this.lamparaHendiduraActualizar)
            this.lamparaHendiduraActualizar = (this.globalesService.pacutalizar(this, "lamparaHendidura") && this.globalesService.pbuscar(this, "lamparaHendidura"));
        if (this.lamparaHendiduraEliminar)
            this.lamparaHendiduraEliminar = (this.globalesService.peliminar(this, "lamparaHendidura") && this.globalesService.pbuscar(this, "lamparaHendidura"));
        if (this.lamparaHendiduraAgregar)
            this.lamparaHendiduraAgregar = this.globalesService.pagregar(this, "lamparaHendidura");
    };
    LamparaHendiduraCrudComponent.prototype.permisosaccionesInicio = function () {
        this.lamparaHendiduraSeleccion = this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false; // *************************** maquina
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    LamparaHendiduraCrudComponent.prototype.limpiarCampos = function () {
        this.lamparaHendidura = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"]();
        this.usuarioUltMovLamparaHendiduraUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEleccion = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitud"]();
        this.lamparaHendiduraChange.emit(this.lamparaHendidura);
        this.lamparaHendiduraSeleccion = this.lamparaHendiduraCancelar = this.lamparaHendiduraGuardar = this.lamparaHendiduraActualizar = this.lamparaHendiduraEliminar = false; // *************************** maquina
        this.lamparaHendiduraBuscar = this.lamparaHendiduraAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    LamparaHendiduraCrudComponent.prototype.evn_lazy_evaluacionSolicitud = function (evaluacionSolicitud, objeto) {
        (evaluacionSolicitud);
        objeto.evaluacionSolicitud = evaluacionSolicitud;
        if (evaluacionSolicitud.lamparasHendidura) {
            evaluacionSolicitud.lamparasHendidura.forEach(function (element) {
                if (element.tipoCornea === 1) {
                    objeto.lamparaHendidura = element;
                }
                else if (element.tipoCornea === 2) {
                    objeto.lamparaHendiduraDerecha = element;
                }
            });
        }
    };
    LamparaHendiduraCrudComponent.prototype.doSave = function () {
        var lamparas = [];
        var isUpdate = false;
        if (this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCd) {
            this.lamparaHendiduraDerecha.tipoCornea = 2;
            this.lamparaHendiduraDerecha.idevaluacionSolicitud = {};
            this.lamparaHendiduraDerecha.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
            this.lamparaHendiduraDerecha.usuarioUltMov = {};
            this.lamparaHendiduraDerecha.usuarioUltMov.id = this.globalesService.dameUsuario().id;
            if (this.lamparaHendiduraDerecha.id) {
                isUpdate = true;
            }
            lamparas.push(this.lamparaHendiduraDerecha);
        }
        if (this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCi) {
            this.lamparaHendidura.tipoCornea = 1;
            this.lamparaHendidura.idevaluacionSolicitud = {};
            this.lamparaHendidura.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
            this.lamparaHendidura.usuarioUltMov = {};
            this.lamparaHendidura.usuarioUltMov.id = this.globalesService.dameUsuario().id;
            if (this.lamparaHendidura.id) {
                isUpdate = true;
            }
            lamparas.push(this.lamparaHendidura);
        }
        if (isUpdate) {
            this.lamparaHendidura_service.actualizarListaLamparaHendidura(lamparas, this.evn_guardarLamparas, this);
        }
        else {
            this.lamparaHendidura_service.guardarListaLamparaHendidura(lamparas, this.evn_guardarLamparas, this);
        }
    };
    LamparaHendiduraCrudComponent.prototype.evn_guardarLamparas = function (ev, objeto) {
        var id = objeto.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            var ev_1 = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitud"]();
            ev_1.id = id;
            objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(ev_1, objeto.evn_lazy_evaluacionSolicitud, objeto);
        }
        bootbox.alert("Datos guardados con éxito");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], LamparaHendiduraCrudComponent.prototype, "ocultarConjuntosLamparaHendidura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], LamparaHendiduraCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], LamparaHendiduraCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"])
    ], LamparaHendiduraCrudComponent.prototype, "lamparaHendidura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraCrudComponent.prototype, "lamparaHendiduraChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraCrudComponent.prototype, "lamparaHendiduraTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_5__["LamparaHendidura"])
    ], LamparaHendiduraCrudComponent.prototype, "lamparaHendiduraDerecha", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], LamparaHendiduraCrudComponent.prototype, "viewModeEvaluacion", void 0);
    LamparaHendiduraCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lampara-hendidura-crud',
            template: __webpack_require__(/*! ./lampara-hendidura-crud.component.html */ "./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.html"),
            styles: [__webpack_require__(/*! ./lampara-hendidura-crud.component.css */ "./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
                _shared_lampara_hendidura_service__WEBPACK_IMPORTED_MODULE_6__["LamparaHendiduraService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
                _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_16__["EvaluacionSolicitudService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_19__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_18__["SolicitudEvaluacionCornealService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _shared_lampara_hendidura_service__WEBPACK_IMPORTED_MODULE_6__["LamparaHendiduraService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
            _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_16__["EvaluacionSolicitudService"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_18__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_19__["CausaMuerteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], LamparaHendiduraCrudComponent);
    return LamparaHendiduraCrudComponent;
}());



/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para lamparaHendidura-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionLamparaHendidura.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_lamparaHendidura_{{nombregrid}}\">\n                <div id=\"grid_lamparaHendidura_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LamparaHendiduraListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamparaHendiduraListKendoComponent", function() { return LamparaHendiduraListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/lampara-hendidura */ "./src/app/lampara-hendiduras/shared/lampara-hendidura.ts");
/* harmony import */ var _shared_configurar_lampara_hendidura__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-lampara-hendidura */ "./src/app/lampara-hendiduras/shared/configurar-lampara-hendidura.ts");
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
var LamparaHendiduraListKendoComponent = /** @class */ (function () {
    function LamparaHendiduraListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.lamparaHendiduraSeleccionado = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_3__["LamparaHendidura"]();
        this.configuracionLamparaHendidura = new _shared_configurar_lampara_hendidura__WEBPACK_IMPORTED_MODULE_4__["ConfigurarLamparaHendidura"]();
        this.nombregrid = "";
        this.evtLamparaHendiduraSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "lamparaHendidura";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'lamparaHendidura'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'lamparaHendidura'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    LamparaHendiduraListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionLamparaHendidura.titulo.indexOf("Catálogo") != -1) {
            this.configuracionLamparaHendidura.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    LamparaHendiduraListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionLamparaHendidura && changes.configuracionLamparaHendidura.currentValue &&
            (changes.configuracionLamparaHendidura.previousValue instanceof _shared_configurar_lampara_hendidura__WEBPACK_IMPORTED_MODULE_4__["ConfigurarLamparaHendidura"])) {
            if (changes.configuracionLamparaHendidura.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionLamparaHendidura.currentValue.permisosAtributos;
            if (changes.configuracionLamparaHendidura.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionLamparaHendidura.currentValue.permisosTabla;
            if ($("#grid_lamparaHendidura_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    LamparaHendiduraListKendoComponent.prototype.ngOnInit = function () {
        self["grid_lamparaHendidura_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionLamparaHendidura.permisosAtributos &&
            this.configuracionLamparaHendidura.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "lamparaHendidura",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'LamparaHendidura'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'LamparaHendidura'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'LamparaHendidura'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionLamparaHendidura.permisosAtributos)
            this.permisosAtributos = this.configuracionLamparaHendidura.permisosAtributos;
        if (this.configuracionLamparaHendidura.permisosTabla)
            this.permisosTabla = this.configuracionLamparaHendidura.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    LamparaHendiduraListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoAtributo && permisos.lamparaHendidura.PermisoAtributo.length > 0
            && !obj.configuracionLamparaHendidura.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.lamparaHendidura.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.LamparaHendidura.PermisoAtributo ;
        }
        if (permisos && permisos.lamparaHendidura && permisos.lamparaHendidura.PermisoTabla && permisos.lamparaHendidura.PermisoTabla.length > 0
            && !obj.configuracionLamparaHendidura.permisosTabla) {
            obj.globalesService.evtTablas(permisos.lamparaHendidura.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.LamparaHendidura.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    LamparaHendiduraListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_lamparaHendidura_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    LamparaHendiduraListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionLamparaHendidura.campoAgEl != null
            && this.configuracionLamparaHendidura.lamparaHendiduraConsulta
            && this.configuracionLamparaHendidura.lamparaHendiduraConsulta.isOk
            && !this.configuracionLamparaHendidura.lamparaHendiduraConsulta.isOk())
            return;
        if (this.configuracionLamparaHendidura.lamparaHendiduraConsulta) {
            if (!this.configuracionLamparaHendidura.campoAgEl && this.configuracionLamparaHendidura.lamparaHendiduraConsulta instanceof _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_3__["LamparaHendidura"])
                this.configuracionLamparaHendidura.rutaLista = this.crudServiceBaseUrl + "/getLamparaHendidurasByDto";
            this.lista = this.configuracionLamparaHendidura.lecturaP(completar, this.configuracionLamparaHendidura.lamparaHendiduraConsulta);
            if (this.configuracionLamparaHendidura.campoAgEl) {
                this.rutaAgregar = this.configuracionLamparaHendidura.agregarP(function () { }, this.configuracionLamparaHendidura.campoAgEl);
                this.rutaEliminar = this.configuracionLamparaHendidura.eliminarP(function () { }, this.configuracionLamparaHendidura.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionLamparaHendidura.agregarP(completar, this.configuracionLamparaHendidura.lamparaHendiduraConsulta);
                this.rutaEliminar = this.configuracionLamparaHendidura.eliminarP(completar, this.configuracionLamparaHendidura.lamparaHendiduraConsulta);
            }
        }
        else {
            this.lista = this.configuracionLamparaHendidura.lectura();
            this.rutaAgregar = this.configuracionLamparaHendidura.agregar();
            this.rutaEliminar = this.configuracionLamparaHendidura.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "lamparaHendidura", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "lamparaHendidura", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "idevaluacionSolicitud")) {
            campos["idevaluacionSolicitud"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "idevaluacionSolicitud"), nullable: true, type: "object", defaultValue: { "id": "", "status": "" } };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "tipoCornea")) {
            campos["tipoCornea"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "tipoCornea"), nullable: true };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "microcornea")) {
            campos["microcornea"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "microcornea"), nullable: true };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "arcoSenil")) {
            campos["arcoSenil"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "arcoSenil"), nullable: true };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "desecacion")) {
            campos["desecacion"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "desecacion"), nullable: true };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "opacidadEstromal")) {
            campos["opacidadEstromal"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "opacidadEstromal"), nullable: true };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "danoEndotelial")) {
            campos["danoEndotelial"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "danoEndotelial"), nullable: true };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "pliegueEstria")) {
            campos["pliegueEstria"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "pliegueEstria"), nullable: true };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "observacion")) {
            campos["observacion"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "observacion"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "lamparaHendidura", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionLamparaHendidura.rutaActualizar,
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
            if (self.configuracionLamparaHendidura.campoAgEl) {
                if (self.configuracionLamparaHendidura.tipocampoAgEl == "LamparaHendiduraLamparaHendidura")
                    self.configuracionLamparaHendidura.campoAgEl.lamparaHendidura2 = options.models[0];
                else
                    self.configuracionLamparaHendidura.campoAgEl.lamparaHendidura = options.models[0];
                return JSON.stringify(self.configuracionLamparaHendidura.campoAgEl);
            }
            else if (est.options[operation].data.models.lamparaHendidura) {
                est.options[operation].data.models.lamparaHendidura2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    LamparaHendiduraListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "lamparaHendidura", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "idevaluacionSolicitud")) {
            columnas.push({ field: "idevaluacionSolicitud", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "idevaluacionSolicitud"), editor: idevaluacionSolicitudDropDownEditor, template: " #if (idevaluacionSolicitud){#   #=idevaluacionSolicitud.status# # } # " });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "tipoCornea")) {
            columnas.push({ field: "tipoCornea", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "tipoCornea") });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "microcornea")) {
            columnas.push({ field: "microcornea", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "microcornea") });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "arcoSenil")) {
            columnas.push({ field: "arcoSenil", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "arcoSenil") });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "desecacion")) {
            columnas.push({ field: "desecacion", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "desecacion") });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "opacidadEstromal")) {
            columnas.push({ field: "opacidadEstromal", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "opacidadEstromal") });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "danoEndotelial")) {
            columnas.push({ field: "danoEndotelial", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "danoEndotelial") });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "pliegueEstria")) {
            columnas.push({ field: "pliegueEstria", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "pliegueEstria") });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "observacion")) {
            columnas.push({ field: "observacion", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "observacion"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "lamparaHendidura", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "lamparaHendidura", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "lamparaHendidura"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "lamparaHendidura")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "lamparaHendidura")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "lamparaHendidura") && this.configuracionLamparaHendidura.lamparaHendiduraConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_lamparaHendidura_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_lamparaHendidura_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionLamparaHendidura.altoComponente,
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
        this.grid = $("#grid_lamparaHendidura_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidevaluacionSolicitud = this.urlprovider.serverURL + "evaluacionSolicitud/getEvaluacionSolicitudesActivos";
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
        function idevaluacionSolicitudDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "status",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidevaluacionSolicitud,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    LamparaHendiduraListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_lamparaHendidura_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.lamparaHendiduraSeleccionado = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_3__["LamparaHendidura"]();
        gridac.lamparaHendiduraSeleccionado.from(dataItem);
        gridac.evtLamparaHendiduraSeleccionado.emit(gridac.lamparaHendiduraSeleccionado);
        (gridac.lamparaHendiduraSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_lampara_hendidura__WEBPACK_IMPORTED_MODULE_4__["ConfigurarLamparaHendidura"])
    ], LamparaHendiduraListKendoComponent.prototype, "configuracionLamparaHendidura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LamparaHendiduraListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("lamparaHendiduraSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LamparaHendiduraListKendoComponent.prototype, "evtLamparaHendiduraSeleccionado", void 0);
    LamparaHendiduraListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lampara-hendidura-list-kendo',
            template: __webpack_require__(/*! ./lampara-hendidura-list-kendo.component.html */ "./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./lampara-hendidura-list-kendo.component.css */ "./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], LamparaHendiduraListKendoComponent);
    return LamparaHendiduraListKendoComponent;
}());



/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: LamparaHendiduraRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamparaHendiduraRoutingModule", function() { return LamparaHendiduraRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lampara_hendiduras_lampara_hendidura_list_kendo_lampara_hendidura_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component */ "./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.ts");
/* harmony import */ var _lampara_hendiduras_lampara_hendidura_crud_lampara_hendidura_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component */ "./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.ts");
/* harmony import */ var _lampara_hendiduras_lampara_hendidura_table_lampara_hendidura_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component */ "./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'lampara-hendidura-list-kendo', component: _lampara_hendiduras_lampara_hendidura_list_kendo_lampara_hendidura_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["LamparaHendiduraListKendoComponent"] },
    { path: 'lampara-hendidura-crud/:id', component: _lampara_hendiduras_lampara_hendidura_crud_lampara_hendidura_crud_component__WEBPACK_IMPORTED_MODULE_3__["LamparaHendiduraCrudComponent"] },
    { path: 'lampara-hendidura-table', component: _lampara_hendiduras_lampara_hendidura_table_lampara_hendidura_table_component__WEBPACK_IMPORTED_MODULE_4__["LamparaHendiduraTableComponent"] },
];
var LamparaHendiduraRoutingModule = /** @class */ (function () {
    function LamparaHendiduraRoutingModule() {
    }
    LamparaHendiduraRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LamparaHendiduraRoutingModule);
    return LamparaHendiduraRoutingModule;
}());



/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_lamparaHendidura\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','id')\" >{{aetiqueta('lamparaHendidura','id')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','idevaluacionSolicitud')\" >{{aetiqueta('lamparaHendidura','idevaluacionSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','tipoCornea')\" >{{aetiqueta('lamparaHendidura','tipoCornea')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','microcornea')\" >{{aetiqueta('lamparaHendidura','microcornea')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','arcoSenil')\" >{{aetiqueta('lamparaHendidura','arcoSenil')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','desecacion')\" >{{aetiqueta('lamparaHendidura','desecacion')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','opacidadEstromal')\" >{{aetiqueta('lamparaHendidura','opacidadEstromal')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','danoEndotelial')\" >{{aetiqueta('lamparaHendidura','danoEndotelial')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','pliegueEstria')\" >{{aetiqueta('lamparaHendidura','pliegueEstria')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','observacion')\" >{{aetiqueta('lamparaHendidura','observacion')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','fechaRegistro')\" >{{aetiqueta('lamparaHendidura','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','fechaActualizacion')\" >{{aetiqueta('lamparaHendidura','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','fechaBaja')\" >{{aetiqueta('lamparaHendidura','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','usuarioUltMov')\" >{{aetiqueta('lamparaHendidura','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','status')\" >{{aetiqueta('lamparaHendidura','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','id')\" >{{aetiqueta('lamparaHendidura','id')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','idevaluacionSolicitud')\" >{{aetiqueta('lamparaHendidura','idevaluacionSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','tipoCornea')\" >{{aetiqueta('lamparaHendidura','tipoCornea')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','microcornea')\" >{{aetiqueta('lamparaHendidura','microcornea')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','arcoSenil')\" >{{aetiqueta('lamparaHendidura','arcoSenil')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','desecacion')\" >{{aetiqueta('lamparaHendidura','desecacion')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','opacidadEstromal')\" >{{aetiqueta('lamparaHendidura','opacidadEstromal')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','danoEndotelial')\" >{{aetiqueta('lamparaHendidura','danoEndotelial')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','pliegueEstria')\" >{{aetiqueta('lamparaHendidura','pliegueEstria')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','observacion')\" >{{aetiqueta('lamparaHendidura','observacion')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','fechaRegistro')\" >{{aetiqueta('lamparaHendidura','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','fechaActualizacion')\" >{{aetiqueta('lamparaHendidura','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','fechaBaja')\" >{{aetiqueta('lamparaHendidura','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','usuarioUltMov')\" >{{aetiqueta('lamparaHendidura','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('lamparaHendidura','status')\" >{{aetiqueta('lamparaHendidura','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-lampara-hendidura [class.hidden]=\"primero\" [(lamparaHendidura)]=\"lamparaHendiduraSeleccionado\" (lamparaHendiduraTablaChange)=\"cambio_lamparaHendidura($event)\"> </app-lampara-hendidura>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LamparaHendiduraTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamparaHendiduraTableComponent", function() { return LamparaHendiduraTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/lampara-hendidura */ "./src/app/lampara-hendiduras/shared/lampara-hendidura.ts");
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






var LamparaHendiduraTableComponent = /** @class */ (function () {
    function LamparaHendiduraTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "lamparaHendidura", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.lamparaHendiduraSeleccionado = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__["LamparaHendidura"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'lamparaHendidura'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    LamparaHendiduraTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'lamparaHendidura'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    LamparaHendiduraTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(LamparaHendiduraTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    LamparaHendiduraTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("lamparaHendidura", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("lamparaHendidura", "idevaluacionSolicitud"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idevaluacionSolicitud)
                    return "<span style=\"cursor: pointer\">" + oObj.idevaluacionSolicitud.status + "</span>";
                return "";
            }
        });
        if (!this.avisible("lamparaHendidura", "tipoCornea"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "tipoCornea" });
        if (!this.avisible("lamparaHendidura", "microcornea"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "microcornea" });
        if (!this.avisible("lamparaHendidura", "arcoSenil"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "arcoSenil" });
        if (!this.avisible("lamparaHendidura", "desecacion"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "desecacion" });
        if (!this.avisible("lamparaHendidura", "opacidadEstromal"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "opacidadEstromal" });
        if (!this.avisible("lamparaHendidura", "danoEndotelial"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "danoEndotelial" });
        if (!this.avisible("lamparaHendidura", "pliegueEstria"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "pliegueEstria" });
        if (!this.avisible("lamparaHendidura", "observacion"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "observacion" });
        if (!this.avisible("lamparaHendidura", "fechaRegistro"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("lamparaHendidura", "fechaActualizacion"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("lamparaHendidura", "fechaBaja"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("lamparaHendidura", "usuarioUltMov"))
            columnasNoVisibles.push(13);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("lamparaHendidura", "status"))
            columnasNoVisibles.push(14);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("lamparaHendidura"))
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
        var tabla = $('#tabla_lamparaHendidura').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_lamparaHendidura_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.lamparaHendiduraSeleccionado = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__["LamparaHendidura"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "lamparaHendidura/getLamparaHendiduras",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_lamparaHendidura tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_lamparaHendidura').DataTable().row(this).data();
                self.lamparaHendiduraSeleccionado = new _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__["LamparaHendidura"]();
                self.lamparaHendiduraSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_lamparaHendidura').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    LamparaHendiduraTableComponent.prototype.ngOnInit = function () {
    };
    LamparaHendiduraTableComponent.prototype.cambio_lamparaHendidura = function (lamparaHendidura) {
        $('#tabla_lamparaHendidura').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    LamparaHendiduraTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    LamparaHendiduraTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    LamparaHendiduraTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    LamparaHendiduraTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    LamparaHendiduraTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    LamparaHendiduraTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    LamparaHendiduraTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    LamparaHendiduraTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    LamparaHendiduraTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    LamparaHendiduraTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    LamparaHendiduraTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    LamparaHendiduraTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    LamparaHendiduraTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    LamparaHendiduraTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    LamparaHendiduraTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    LamparaHendiduraTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lampara-hendidura-table',
            template: __webpack_require__(/*! ./lampara-hendidura-table.component.html */ "./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.html"),
            styles: [__webpack_require__(/*! ./lampara-hendidura-table.component.css */ "./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], LamparaHendiduraTableComponent);
    return LamparaHendiduraTableComponent;
}());



/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura.module.ts ***!
  \****************************************************************/
/*! exports provided: LamparaHendiduraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamparaHendiduraModule", function() { return LamparaHendiduraModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _lampara_hendidura_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lampara-hendidura-routing.module */ "./src/app/lampara-hendiduras/lampara-hendidura-routing.module.ts");
/* harmony import */ var _lampara_hendidura_list_kendo_lampara_hendidura_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component */ "./src/app/lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component.ts");
/* harmony import */ var _lampara_hendidura_crud_lampara_hendidura_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lampara-hendidura-crud/lampara-hendidura-crud.component */ "./src/app/lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component.ts");
/* harmony import */ var _lampara_hendidura_conjunto_lampara_hendidura_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lampara-hendidura-conjunto/lampara-hendidura-conjunto.component */ "./src/app/lampara-hendiduras/lampara-hendidura-conjunto/lampara-hendidura-conjunto.component.ts");
/* harmony import */ var _lampara_hendidura_lampara_hendidura_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lampara-hendidura/lampara-hendidura.component */ "./src/app/lampara-hendiduras/lampara-hendidura/lampara-hendidura.component.ts");
/* harmony import */ var _lampara_hendidura_table_lampara_hendidura_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lampara-hendidura-table/lampara-hendidura-table.component */ "./src/app/lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _estudio_laboratorios_estudio_laboratorio_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../estudio-laboratorios/estudio-laboratorio.module */ "./src/app/estudio-laboratorios/estudio-laboratorio.module.ts");
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












var LamparaHendiduraModule = /** @class */ (function () {
    function LamparaHendiduraModule(parentModule) {
        if (parentModule) {
            throw new Error('LamparaHendiduraModule is already loaded. Import it in the AppModule only');
        }
    }
    LamparaHendiduraModule_1 = LamparaHendiduraModule;
    LamparaHendiduraModule.forRoot = function () {
        return {
            ngModule: LamparaHendiduraModule_1,
            providers: []
        };
    };
    var LamparaHendiduraModule_1;
    LamparaHendiduraModule = LamparaHendiduraModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _lampara_hendidura_routing_module__WEBPACK_IMPORTED_MODULE_3__["LamparaHendiduraRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
                // , EvaluacionSolicitudsModule
                ,
                _estudio_laboratorios_estudio_laboratorio_module__WEBPACK_IMPORTED_MODULE_11__["EstudioLaboratorioModule"]
            ],
            declarations: [
                _lampara_hendidura_list_kendo_lampara_hendidura_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["LamparaHendiduraListKendoComponent"],
                _lampara_hendidura_lampara_hendidura_component__WEBPACK_IMPORTED_MODULE_7__["LamparaHendiduraComponent"],
                _lampara_hendidura_crud_lampara_hendidura_crud_component__WEBPACK_IMPORTED_MODULE_5__["LamparaHendiduraCrudComponent"],
                _lampara_hendidura_conjunto_lampara_hendidura_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["LamparaHendiduraConjuntoComponent"],
                _lampara_hendidura_table_lampara_hendidura_table_component__WEBPACK_IMPORTED_MODULE_8__["LamparaHendiduraTableComponent"],
            ],
            exports: [
                _lampara_hendidura_list_kendo_lampara_hendidura_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["LamparaHendiduraListKendoComponent"],
                _lampara_hendidura_lampara_hendidura_component__WEBPACK_IMPORTED_MODULE_7__["LamparaHendiduraComponent"],
                _lampara_hendidura_crud_lampara_hendidura_crud_component__WEBPACK_IMPORTED_MODULE_5__["LamparaHendiduraCrudComponent"],
                _lampara_hendidura_conjunto_lampara_hendidura_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["LamparaHendiduraConjuntoComponent"],
                _lampara_hendidura_table_lampara_hendidura_table_component__WEBPACK_IMPORTED_MODULE_8__["LamparaHendiduraTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [LamparaHendiduraModule])
    ], LamparaHendiduraModule);
    return LamparaHendiduraModule;
}());



/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura/lampara-hendidura.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura/lampara-hendidura.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura/lampara-hendidura.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura/lampara-hendidura.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4>{{ etiquetaGeneral }}</h4>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <!-- <div class=\"row\">\n                <div class=\"col-md-12\"> -->\n                            <label class=\"control-label\">1.- </label>\n                            <!-- </div>\n              </div> -->\n                            <label class=\"radio-inline\" style=\"margin-left: 5px;\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"microcornea\"\n                  class=\"form-checkbox-input\"\n                  style=\"margin-right: 10px;\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"lamparaHendidura.microcornea\"\n                />\n                Microcórnea\n              </label>\n                            <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"microcornea\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"lamparaHendidura.microcornea\"\n                />\n                Megalocórnea\n              </label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">2.- Arco Senil 1:</label>\n                                </div>\n                            </div>\n                            <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"arcoSenil\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"lamparaHendidura.arcoSenil\"\n                />\n                SÍ\n              </label>\n                            <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"arcoSenil\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"lamparaHendidura.arcoSenil\"\n                />\n                NO (NO Excluyente)\n              </label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">3.- Desecación o Defecto Epitelial:</label\n                  >\n                </div>\n              </div>\n              <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"desecacion\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"lamparaHendidura.desecacion\"\n                />\n                Ausente\n              </label>\n                                    <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"desecacion\"\n                  [value]=\"2\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"lamparaHendidura.desecacion\"\n                />\n                Leve\n              </label>\n                                    <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"desecacion\"\n                  [value]=\"3\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"lamparaHendidura.desecacion\"\n                />\n                Moderado\n              </label>\n                                    <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"desecacion\"\n                  [value]=\"4\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"lamparaHendidura.desecacion\"\n                />\n                Grave\n              </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <label class=\"control-label\">4.- Opacidad Estromal:</label>\n                                        </div>\n                                    </div>\n                                    <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"opacidadEstromal\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"lamparaHendidura.opacidadEstromal\"\n                />\n                Ausente\n              </label>\n                                    <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"opacidadEstromal\"\n                  [value]=\"2\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"lamparaHendidura.opacidadEstromal\"\n                />\n                Leve\n              </label>\n                                    <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"opacidadEstromal\"\n                  [value]=\"3\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"lamparaHendidura.opacidadEstromal\"\n                />\n                Moderado\n              </label>\n                                    <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"opacidadEstromal\"\n                  [value]=\"4\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"lamparaHendidura.opacidadEstromal\"\n                />\n                Grave\n              </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <label class=\"control-label\">5.- Daño Endotelial:</label>\n                                        </div>\n                                    </div>\n                                    <label class=\"radio-inline\">\n                  <input\n                    [attr.disabled]=\"enable ? null : false\"\n                    type=\"radio\"\n                    name=\"danoEndotelial\"\n                    class=\"form-checkbox-input\"\n                    [value]=\"1\"\n                    [(ngModel)]=\"lamparaHendidura.danoEndotelial\"\n                  />\n                  Ausente\n                </label>\n                                    <label class=\"radio-inline\">\n                  <input\n                    [attr.disabled]=\"enable ? null : false\"\n                    type=\"radio\"\n                    name=\"danoEndotelial\"\n                    [value]=\"2\"\n                    class=\"form-checkbox-input\"\n                    [(ngModel)]=\"lamparaHendidura.danoEndotelial\"\n                  />\n                  Leve\n                </label>\n                                    <label class=\"radio-inline\">\n                  <input\n                    [attr.disabled]=\"enable ? null : false\"\n                    type=\"radio\"\n                    name=\"danoEndotelial\"\n                    [value]=\"3\"\n                    class=\"form-checkbox-input\"\n                    [(ngModel)]=\"lamparaHendidura.danoEndotelial\"\n                  />\n                  Moderado\n                </label>\n                                    <label class=\"radio-inline\">\n                  <input\n                    [attr.disabled]=\"enable ? null : false\"\n                    type=\"radio\"\n                    name=\"danoEndotelial\"\n                    [value]=\"4\"\n                    class=\"form-checkbox-input\"\n                    [(ngModel)]=\"lamparaHendidura.danoEndotelial\"\n                  />\n                  Grave\n                </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <label class=\"control-label\">6.- Pliegues o Estrías en Descement:</label>\n                                        </div>\n                                    </div>\n                                    <label class=\"radio-inline\">\n                  <input\n                    [attr.disabled]=\"enable ? null : false\"\n                    type=\"radio\"\n                    name=\"pliegueEstria\"\n                    class=\"form-checkbox-input\"\n                    [value]=\"1\"\n                    [(ngModel)]=\"lamparaHendidura.pliegueEstria\"\n                  />\n                  Ausente\n                </label>\n                                    <label class=\"radio-inline\">\n                  <input\n                    [attr.disabled]=\"enable ? null : false\"\n                    type=\"radio\"\n                    name=\"pliegueEstria\"\n                    [value]=\"2\"\n                    class=\"form-checkbox-input\"\n                    [(ngModel)]=\"lamparaHendidura.pliegueEstria\"\n                  />\n                  Leve\n                </label>\n                                    <label class=\"radio-inline\">\n                  <input\n                    [attr.disabled]=\"enable ? null : false\"\n                    type=\"radio\"\n                    name=\"pliegueEstria\"\n                    [value]=\"3\"\n                    class=\"form-checkbox-input\"\n                    [(ngModel)]=\"lamparaHendidura.pliegueEstria\"\n                  />\n                  Moderado\n                </label>\n                                    <label class=\"radio-inline\">\n                  <input\n                    [attr.disabled]=\"enable ? null : false\"\n                    type=\"radio\"\n                    name=\"pliegueEstria\"\n                    [value]=\"4\"\n                    class=\"form-checkbox-input\"\n                    [(ngModel)]=\"lamparaHendidura.pliegueEstria\"\n                  />\n                  Grave\n                </label>\n                                </div>\n                            </div>\n                            <app-componente-cadena-larga [componente]=\"'lamparaHendidura'\" [atributo]=\"'observacion'\" [buscar]=\"lamparaHendiduraBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosLamparaHendidura['observacion']\" [(dato)]=\"lamparaHendidura.observacion\"\n                                class=\"w-100\" [enable]=\"enable\">\n                            </app-componente-cadena-larga>\n                        </div>\n                    </div>\n                </div>\n            </div>\n</form>\n"

/***/ }),

/***/ "./src/app/lampara-hendiduras/lampara-hendidura/lampara-hendidura.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/lampara-hendidura/lampara-hendidura.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LamparaHendiduraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamparaHendiduraComponent", function() { return LamparaHendiduraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/lampara-hendidura */ "./src/app/lampara-hendiduras/shared/lampara-hendidura.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LamparaHendiduraComponent = /** @class */ (function () {
    function LamparaHendiduraComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lamparaHendiduraChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovLamparaHendiduraUsuarioEditar = false;
        this.idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEditar = false;
    }
    LamparaHendiduraComponent.prototype.actualizarLamparaHendidura = function () {
        if (this.lamparaHendidura.id == null) {
            this.lamparaHendiduraService.guardarLamparaHendidura(this.lamparaHendidura, this.evtGuardar, this);
        }
        else {
            this.lamparaHendiduraService.actualizarLamparaHendidura(this.lamparaHendidura, this.evtActualiza, this);
        }
    };
    LamparaHendiduraComponent.prototype.evtGuardar = function (lamparaHendidura, obj) {
        obj.lamparaHendidura = lamparaHendidura;
        obj.lamparaHendiduraChange.emit(obj.lamparaHendidura);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    LamparaHendiduraComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.lamparaHendiduraChange.emit(obj.lamparaHendidura);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    LamparaHendiduraComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarLamparaHendidura();
            }
        }
    };
    LamparaHendiduraComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "lamparaHendiduraBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "validosLamparaHendidura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_lampara_hendidura__WEBPACK_IMPORTED_MODULE_1__["LamparaHendidura"])
    ], LamparaHendiduraComponent.prototype, "lamparaHendidura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "lamparaHendiduraService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LamparaHendiduraComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "lamparaHendiduraChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "lista_usuarioUltMovLamparaHendiduraUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LamparaHendiduraComponent.prototype, "lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LamparaHendiduraComponent.prototype, "enable", void 0);
    LamparaHendiduraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lampara-hendidura',
            template: __webpack_require__(/*! ./lampara-hendidura.component.html */ "./src/app/lampara-hendiduras/lampara-hendidura/lampara-hendidura.component.html"),
            styles: [__webpack_require__(/*! ./lampara-hendidura.component.css */ "./src/app/lampara-hendiduras/lampara-hendidura/lampara-hendidura.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LamparaHendiduraComponent);
    return LamparaHendiduraComponent;
}());



/***/ }),

/***/ "./src/app/lampara-hendiduras/shared/configurar-lampara-hendidura.ts":
/*!***************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/shared/configurar-lampara-hendidura.ts ***!
  \***************************************************************************/
/*! exports provided: ConfigurarLamparaHendidura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarLamparaHendidura", function() { return ConfigurarLamparaHendidura; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarLamparaHendidura = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarLamparaHendidura() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "lamparaHendidura";
        this.rutaLista = this.crudServiceBaseUrl + "/getLamparaHendiduras";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarLamparaHendidura";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarLamparaHendidura";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarLamparaHendidura";
        this.titulo = "Catálogo LamparaHendidura";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.lamparaHendiduraConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarLamparaHendidura.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarLamparaHendidura.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarLamparaHendidura.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarLamparaHendidura.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarLamparaHendidura.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarLamparaHendidura.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarLamparaHendidura;
}());



/***/ }),

/***/ "./src/app/lampara-hendiduras/shared/lampara-hendidura.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/lampara-hendiduras/shared/lampara-hendidura.service.ts ***!
  \************************************************************************/
/*! exports provided: LamparaHendiduraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamparaHendiduraService", function() { return LamparaHendiduraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LamparaHendiduraService = /** @class */ (function () {
    function LamparaHendiduraService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    LamparaHendiduraService.prototype.setLamparaHendidura = function (lamparaHendidura) {
        this.lamparaHendidura = lamparaHendidura;
    };
    LamparaHendiduraService.prototype.getLamparaHendidura = function () {
        return this.lamparaHendidura;
    };
    LamparaHendiduraService.prototype.guardarLamparaHendidura = function (lamparaHendidura, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/guardarLamparaHendidura')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.guardarListaLamparaHendidura = function (lamparaHendidura, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/guardarListaLamparaHendidura')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.actualizarLamparaHendidura = function (lamparaHendidura, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/actualizarLamparaHendidura')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.actualizarListaLamparaHendidura = function (lamparaHendidura, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/actualizarListaLamparaHendidura')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.eliminarLamparaHendidura = function (lamparaHendidura, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/eliminarLamparaHendidura')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduradb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'lamparaHendidura/getLamparaHendidura')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduras = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'lamparaHendidura/getLamparaHendiduras')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'lamparaHendidura/getLamparaHendidurasActivos')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.lazyLamparaHendidura = function (lamparaHendidura, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/lazyLamparaHendidura')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    // busquedas por atributos  inicio
    LamparaHendiduraService.prototype.getLamparaHendiduraById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'lamparaHendidura/getLamparaHendiduraById')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'lamparaHendidura/getLamparaHendidurasById')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'lamparaHendidura/getLamparaHendiduraByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'lamparaHendidura/getLamparaHendidurasByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'lamparaHendidura/getLamparaHendiduraByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'lamparaHendidura/getLamparaHendidurasByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByOpacidadEstromal = function (opacidadEstromal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(opacidadEstromal, 'lamparaHendidura/getLamparaHendiduraByOpacidadEstromal')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByOpacidadEstromal = function (opacidadEstromal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(opacidadEstromal, 'lamparaHendidura/getLamparaHendidurasByOpacidadEstromal')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByArcoSenil = function (arcoSenil, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(arcoSenil, 'lamparaHendidura/getLamparaHendiduraByArcoSenil')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByArcoSenil = function (arcoSenil, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(arcoSenil, 'lamparaHendidura/getLamparaHendidurasByArcoSenil')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByTipoCornea = function (tipoCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'lamparaHendidura/getLamparaHendiduraByTipoCornea')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByTipoCornea = function (tipoCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'lamparaHendidura/getLamparaHendidurasByTipoCornea')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByDesecacion = function (desecacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(desecacion, 'lamparaHendidura/getLamparaHendiduraByDesecacion')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByDesecacion = function (desecacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(desecacion, 'lamparaHendidura/getLamparaHendidurasByDesecacion')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByMicrocornea = function (microcornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(microcornea, 'lamparaHendidura/getLamparaHendiduraByMicrocornea')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByMicrocornea = function (microcornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(microcornea, 'lamparaHendidura/getLamparaHendidurasByMicrocornea')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'lamparaHendidura/getLamparaHendiduraByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'lamparaHendidura/getLamparaHendidurasByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByDanoEndotelial = function (danoEndotelial, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(danoEndotelial, 'lamparaHendidura/getLamparaHendiduraByDanoEndotelial')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByDanoEndotelial = function (danoEndotelial, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(danoEndotelial, 'lamparaHendidura/getLamparaHendidurasByDanoEndotelial')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByObservacion = function (observacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'lamparaHendidura/getLamparaHendiduraByObservacion')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByObservacion = function (observacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'lamparaHendidura/getLamparaHendidurasByObservacion')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByPliegueEstria = function (pliegueEstria, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(pliegueEstria, 'lamparaHendidura/getLamparaHendiduraByPliegueEstria')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByPliegueEstria = function (pliegueEstria, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(pliegueEstria, 'lamparaHendidura/getLamparaHendidurasByPliegueEstria')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'lamparaHendidura/getLamparaHendiduraByStatus')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'lamparaHendidura/getLamparaHendidurasByStatus')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'lamparaHendidura/getLamparaHendiduraByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'lamparaHendidura/getLamparaHendidurasByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendiduraByIdevaluacionSolicitud = function (idevaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'lamparaHendidura/getLamparaHendiduraByIdevaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.lamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.lamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByIdevaluacionSolicitud = function (idevaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'lamparaHendidura/getLamparaHendidurasByIdevaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    // busquedas por atributos  fin
    LamparaHendiduraService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'lamparaHendidura/custom')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService.prototype.getLamparaHendidurasByDto = function (p_lamparaHendidura, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_lamparaHendidura, 'lamparaHendidura/getLamparaHendidurasByDto')
            .subscribe(function (data) {
            _evento(_this.listaLamparaHendidura = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaLamparaHendidura);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    LamparaHendiduraService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], LamparaHendiduraService);
    return LamparaHendiduraService;
}());



/***/ }),

/***/ "./src/app/lampara-hendiduras/shared/lampara-hendidura.ts":
/*!****************************************************************!*\
  !*** ./src/app/lampara-hendiduras/shared/lampara-hendidura.ts ***!
  \****************************************************************/
/*! exports provided: LamparaHendidura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LamparaHendidura", function() { return LamparaHendidura; });
/**
 *
 * @author IstmoSoft
 */
var LamparaHendidura = /** @class */ (function () {
    // atributos fin
    function LamparaHendidura(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.fechaRegistro = null;
        this.opacidadEstromal = null;
        this.arcoSenil = null;
        this.tipoCornea = null;
        this.desecacion = null;
        this.microcornea = null;
        this.fechaActualizacion = null;
        this.danoEndotelial = null;
        this.observacion = null;
        this.pliegueEstria = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idevaluacionSolicitud = null;
        if (source !== null)
            this.from(source);
    }
    LamparaHendidura.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.opacidadEstromal)
            this.opacidadEstromal = source.opacidadEstromal;
        if (source.arcoSenil)
            this.arcoSenil = source.arcoSenil;
        if (source.tipoCornea)
            this.tipoCornea = source.tipoCornea;
        if (source.desecacion)
            this.desecacion = source.desecacion;
        if (source.microcornea)
            this.microcornea = source.microcornea;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.danoEndotelial)
            this.danoEndotelial = source.danoEndotelial;
        if (source.observacion)
            this.observacion = source.observacion;
        if (source.pliegueEstria)
            this.pliegueEstria = source.pliegueEstria;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idevaluacionSolicitud)
            this.idevaluacionSolicitud = source.idevaluacionSolicitud;
    };
    LamparaHendidura.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.opacidadEstromal)
            return true;
        if (this.arcoSenil)
            return true;
        if (this.tipoCornea)
            return true;
        if (this.desecacion)
            return true;
        if (this.microcornea)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.danoEndotelial)
            return true;
        if (this.observacion)
            return true;
        if (this.pliegueEstria)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idevaluacionSolicitud)
            return true;
        return false;
    };
    LamparaHendidura.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.opacidadEstromal != null && typeof this.opacidadEstromal === 'string' && this.opacidadEstromal.replace(/^\s+|\s+$/g, '') == "")
            this.opacidadEstromal = null;
        if (this.arcoSenil != null && typeof this.arcoSenil === 'string' && this.arcoSenil.replace(/^\s+|\s+$/g, '') == "")
            this.arcoSenil = null;
        if (this.tipoCornea != null && typeof this.tipoCornea === 'string' && this.tipoCornea.replace(/^\s+|\s+$/g, '') == "")
            this.tipoCornea = null;
        if (this.desecacion != null && typeof this.desecacion === 'string' && this.desecacion.replace(/^\s+|\s+$/g, '') == "")
            this.desecacion = null;
        if (this.microcornea != null && typeof this.microcornea === 'string' && this.microcornea.replace(/^\s+|\s+$/g, '') == "")
            this.microcornea = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.danoEndotelial != null && typeof this.danoEndotelial === 'string' && this.danoEndotelial.replace(/^\s+|\s+$/g, '') == "")
            this.danoEndotelial = null;
        if (this.observacion != null && typeof this.observacion === 'string' && this.observacion.replace(/^\s+|\s+$/g, '') == "")
            this.observacion = null;
        if (this.pliegueEstria != null && typeof this.pliegueEstria === 'string' && this.pliegueEstria.replace(/^\s+|\s+$/g, '') == "")
            this.pliegueEstria = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idevaluacionSolicitud != null && typeof this.idevaluacionSolicitud === 'string' && this.idevaluacionSolicitud.replace(/^\s+|\s+$/g, '') == "")
            this.idevaluacionSolicitud = null;
        return this;
    };
    return LamparaHendidura;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~a26ccb88.js.map