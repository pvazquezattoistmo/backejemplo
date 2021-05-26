(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-tejidos-almacen-tejido-module~app-oficio-donaciones-oficio-donacion-module"],{

/***/ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/shared/almacen-evaluacion.service.ts ***!
  \***************************************************************************/
/*! exports provided: AlmacenEvaluacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenEvaluacionService", function() { return AlmacenEvaluacionService; });
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlmacenEvaluacionService = /** @class */ (function () {
    function AlmacenEvaluacionService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    AlmacenEvaluacionService.prototype.guardarAlmacenEvaluacion = function (almacenEvaluacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util
            .enviar(almacenEvaluacion, "almacenEvaluacion/guardarAlmacenEvaluacion")
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
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
    AlmacenEvaluacionService.prototype.lazyAlmacenEvaluacion = function (almacenEvaluacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util
            .enviar(almacenEvaluacion, "almacenEvaluacion/lazyAlmacenEvaluacion")
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
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
    AlmacenEvaluacionService.prototype.actualizarAlmacenEvaluacion = function (almacenEvaluacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util
            .enviar(almacenEvaluacion, "almacenEvaluacion/actualizarAlmacenEvaluacion")
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
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
    AlmacenEvaluacionService.prototype.actualizarHopitalesAlmacenEvaluacion = function (almacenEvaluacion, _evento, objeto) {
        var _this = this;
        var enviar = {};
        enviar.id = almacenEvaluacion.id;
        if (almacenEvaluacion.hospitalReceptorCD !== null) {
            enviar.idHospitalReceptorCD = almacenEvaluacion.hospitalReceptorCD.id;
        }
        if (almacenEvaluacion.hospitalReceptorCI != null) {
            enviar.idHospitalReceptorCI = almacenEvaluacion.hospitalReceptorCI.id;
        }
        this.error = false;
        return this.globalesService.util
            .enviar(enviar, "almacenEvaluacion/actualizarHospitalesAlmacenEvaluacion")
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
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
    AlmacenEvaluacionService.prototype.eliminarAlmacenEvaluacion = function (almacenEvaluacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util
            .enviar(almacenEvaluacion, "almacenEvaluacion/eliminarAlmacenEvaluacion")
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
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
    AlmacenEvaluacionService.prototype.getAlmacenEvaluacionesByEstatusProceso = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util
            .enviar("", "almacenEvaluacion/getAlmacenEvaluacionesByEstatusProceso")
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
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
    AlmacenEvaluacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_0__["GlobalesService"]])
    ], AlmacenEvaluacionService);
    return AlmacenEvaluacionService;
}());



/***/ }),

/***/ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.ts":
/*!*******************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/shared/almacen-evaluacion.ts ***!
  \*******************************************************************/
/*! exports provided: AlmacenEvaluacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenEvaluacion", function() { return AlmacenEvaluacion; });
var AlmacenEvaluacion = /** @class */ (function () {
    function AlmacenEvaluacion(entrada) {
        if (entrada === void 0) { entrada = null; }
        this.id = null;
        this.evaluacionSolicitud = null;
        this.hospitalReceptorCD = null;
        this.hospitalReceptorCI = null;
        this.estatusProceso = null;
        this.fechaActualizacion = null;
        this.fechaRegistro = null;
        this.fechaBaja = null;
        this.status = null;
        this.usuarioUltMov = null;
        if (entrada !== null) {
            this.form(entrada);
        }
    }
    AlmacenEvaluacion.prototype.form = function (source) {
        if (source.id == null)
            this.id = source.id;
        if (source.evaluacionSolicitud == null)
            this.evaluacionSolicitud = source.evaluacionSolicitud;
        if (source.hospitalReceptorCD == null)
            this.hospitalReceptorCD = source.hospitalReceptorCD;
        if (source.hospitalReceptorCI == null)
            this.hospitalReceptorCI = source.hospitalReceptorCI;
        if (source.estatusProceso == null)
            this.estatusProceso = source.estatusProceso;
        if (source.fechaActualizacion == null)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.fechaRegistro == null)
            this.fechaRegistro = source.fechaRegistro;
        if (source.fechaBaja == null)
            this.fechaBaja = source.fechaBaja;
        if (source.status == null)
            this.status = source.status;
        if (source.usuarioUltMov == null)
            this.usuarioUltMov = source.usuarioUltMov;
    };
    return AlmacenEvaluacion;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-conjunto/almacen-tejido-conjunto.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-conjunto/almacen-tejido-conjunto.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-conjunto/almacen-tejido-conjunto.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-conjunto/almacen-tejido-conjunto.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let almacenTejido of listaAlmacenTejido \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+almacenTejido.id}\"\n        (click)=\"elegir(almacenTejido,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{almacenTejido.id}}\">{{almacenTejido.id}}</a>\n    </li>\n    <li *ngFor =  \"let almacenTejido of listaAlmacenTejidoN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+almacenTejido.id}\"\n        (click)=\"elegir(almacenTejido, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{almacenTejido.id}}\">T-{{almacenTejido.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let almacenTejido of listaAlmacenTejido ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+almacenTejido.id}\" id=\"tab-I-{{almacenTejido.id}}\">\n\t\t\t<app-almacen-tejido [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [almacenTejidoBuscar]=\"almacenTejidoBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosAlmacenTejido]=\"validosAlmacenTejido\"  \n\t\t\t\t\t\t  [almacenTejidoService]=\"almacenTejidoService\" [(opcion)]=\"opcionAlmacenTejido\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(almacenTejido)]=\"listaAlmacenTejido[i]\"  [ocultarConjuntos]=\"ocultarConjuntosAlmacenTejido\"\n                           [lista_usuarioUltMovAlmacenTejidoUsuario]=\"lista_usuarioUltMovAlmacenTejidoUsuario\" \n                           [lista_idoficioDonacionAlmacenTejidoOficioDonacion]=\"lista_idoficioDonacionAlmacenTejidoOficioDonacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-almacen-tejido>\n        </div>\n        <div *ngFor = \"let almacenTejido of listaAlmacenTejidoN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+almacenTejido.id}\" id=\"tab-N-{{almacenTejido.id}}\">\n\t\t\t<app-almacen-tejido [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [almacenTejidoBuscar]=\"almacenTejidoBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosAlmacenTejido]=\"validosAlmacenTejido\"  \n\t\t\t\t\t\t  [almacenTejidoService]=\"almacenTejidoService\" [(opcion)]=\"opcionAlmacenTejido\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(almacenTejido)]=\"listaAlmacenTejidoN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosAlmacenTejido\"\n                           [lista_usuarioUltMovAlmacenTejidoUsuario]=\"lista_usuarioUltMovAlmacenTejidoUsuario\" \n                           [lista_idoficioDonacionAlmacenTejidoOficioDonacion]=\"lista_idoficioDonacionAlmacenTejidoOficioDonacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-almacen-tejido>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-conjunto/almacen-tejido-conjunto.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-conjunto/almacen-tejido-conjunto.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AlmacenTejidoConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenTejidoConjuntoComponent", function() { return AlmacenTejidoConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/almacen-tejido */ "./src/app/almacen-tejidos/shared/almacen-tejido.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlmacenTejidoConjuntoComponent = /** @class */ (function () {
    function AlmacenTejidoConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovAlmacenTejidoUsuarioEditar = false;
        this.idoficioDonacionAlmacenTejidoOficioDonacionEditar = false;
        this.listaAlmacenTejidoN = [];
        this.listaAlmacenTejido = [];
        this.listaAlmacenTejidoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.almacenTejidoN = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__["AlmacenTejido"]();
        this.almacenTejidoNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    AlmacenTejidoConjuntoComponent.prototype.elegir = function (almacenTejido, tipo) {
        this.idSeleccionado = tipo + "-" + almacenTejido.id;
        this.almacenTejidoN = almacenTejido;
    };
    AlmacenTejidoConjuntoComponent.prototype.ngOnInit = function () {
        this.almacenTejidoN.id = 0;
        this.listaAlmacenTejidoN.push(Object.assign({}, this.almacenTejidoN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    AlmacenTejidoConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__["AlmacenTejido"]();
        pg.id = this.listaAlmacenTejidoN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaAlmacenTejidoN.push(pg);
    };
    AlmacenTejidoConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaAlmacenTejido; _i < _a.length; _i++) {
            var almacenTejido = _a[_i];
            this.almacenTejidoService.actualizarAlmacenTejido(almacenTejido, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaAlmacenTejidoN; _b < _c.length; _b++) {
            var almacenTejido = _c[_b];
            almacenTejido.id = null;
            this.almacenTejidoService.guardarAlmacenTejido(almacenTejido, this.evtGuardar, this);
        }
    };
    AlmacenTejidoConjuntoComponent.prototype.evtGuardar = function (almacenTejido, obj) {
        obj.agregados++;
        obj.listaAlmacenTejido.push(almacenTejido);
        if (obj.agregados >= obj.listaAlmacenTejidoN.length) {
            obj.almacenTejidoN = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__["AlmacenTejido"]();
            obj.listaAlmacenTejidoN = [];
            obj.almacenTejidoN.id = 0;
            obj.idSeleccionado = "N-" + obj.almacenTejidoN.id;
            obj.listaAlmacenTejidoN.push(Object.assign({}, obj.almacenTejidoN));
            obj.listaAlmacenTejidoChange.emit(obj.listaAlmacenTejido);
        }
        if (obj.agregados >= obj.listaAlmacenTejidoN.length &&
            obj.actualizados >= obj.listaAlmacenTejido.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    AlmacenTejidoConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaAlmacenTejidoN.length &&
                obj.actualizados >= obj.listaAlmacenTejido.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    AlmacenTejidoConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], AlmacenTejidoConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "almacenTejidoBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "validosAlmacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "ocultarConjuntosAlmacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "almacenTejidoService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AlmacenTejidoConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "lista_usuarioUltMovAlmacenTejidoUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "lista_idoficioDonacionAlmacenTejidoOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AlmacenTejidoConjuntoComponent.prototype, "listaAlmacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "listaAlmacenTejidoChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__["AlmacenTejido"])
    ], AlmacenTejidoConjuntoComponent.prototype, "almacenTejidoN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoConjuntoComponent.prototype, "almacenTejidoNChange", void 0);
    AlmacenTejidoConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-almacen-tejido-conjunto',
            template: __webpack_require__(/*! ./almacen-tejido-conjunto.component.html */ "./src/app/almacen-tejidos/almacen-tejido-conjunto/almacen-tejido-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./almacen-tejido-conjunto.component.css */ "./src/app/almacen-tejidos/almacen-tejido-conjunto/almacen-tejido-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AlmacenTejidoConjuntoComponent);
    return AlmacenTejidoConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <app-almacen-tejido [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"'B. Almacén de Tejidos'\" [almacenTejidoBuscar]=\"almacenTejidoBuscar\" [permisosAtributos]=\"permisosAtributos\" [permisosConjuntos]=\"permisosConjuntos\" [validosAlmacenTejido]=\"validosAlmacenTejido\"\n        [almacenTejidoService]=\"almacenTejido_service\" [(opcion)]=\"opcionAlmacenTejido\" [globalesService]=\"globalesService\" [(almacenTejido)]=\"almacenTejido\" [ocultarConjuntos]=\"ocultarConjuntosAlmacenTejido\" [lista_usuarioUltMovAlmacenTejidoUsuario]=\"lista_usuarioUltMovAlmacenTejidoUsuario\"\n        [lista_idoficioDonacionAlmacenTejidoOficioDonacion]=\"lista_idoficioDonacionAlmacenTejidoOficioDonacion\" [enable]=\"enable\">\n\n    </app-almacen-tejido>\n\n    <!-- <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!almacenTejidoBuscar\" (click)=\"buscarAlmacenTejidoFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!almacenTejidoAgregar\" (click)=\"nuevoAlmacenTejidoFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!almacenTejidoActualizar\" (click)=\"actualizarAlmacenTejidoFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!almacenTejidoEliminar\" (click)=\"eliminarAlmacenTejidoFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!almacenTejidoGuardar\" (click)=\"guardarAlmacenTejidoFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!almacenTejidoCancelar\" (click)=\"cancelarAlmacenTejidoFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteAlmacenTejidoWord\" (click)=\"reporteAlmacenTejidoWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteAlmacenTejidoExcel\" (click)=\"reporteAlmacenTejidoExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteAlmacenTejidoPdf\" (click)=\"reporteAlmacenTejidoPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div> -->\n</div>\n<div class=\"modal fade\" id=\"buscarAlmacenTejido_{{nombre}}\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <app-almacen-tejido-list-kendo [nombregrid]=\"'buscar_'+nombre\" [configuracionAlmacenTejido]=\"configuracionAlmacenTejido\" (almacenTejidoSeleccionado)=\"evtAlmacenTejidoSeleccionado($event)\"> </app-almacen-tejido-list-kendo>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>"

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AlmacenTejidoCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenTejidoCrudComponent", function() { return AlmacenTejidoCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/almacen-tejido */ "./src/app/almacen-tejidos/shared/almacen-tejido.ts");
/* harmony import */ var _shared_almacen_tejido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/almacen-tejido.service */ "./src/app/almacen-tejidos/shared/almacen-tejido.service.ts");
/* harmony import */ var _shared_configurar_almacen_tejido__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-almacen-tejido */ "./src/app/almacen-tejidos/shared/configurar-almacen-tejido.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../oficio-donaciones/shared/oficio-donacion */ "./src/app/oficio-donaciones/shared/oficio-donacion.ts");
/* harmony import */ var _oficio_donaciones_shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../oficio-donaciones/shared/oficio-donacion.service */ "./src/app/oficio-donaciones/shared/oficio-donacion.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
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








var AlmacenTejidoCrudComponent = /** @class */ (function () {
    function AlmacenTejidoCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    almacenTejido_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, oficioDonacion_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.almacenTejido_service = almacenTejido_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.oficioDonacion_service = oficioDonacion_service;
        this.recepcionSolicitudEvaluacion_service = recepcionSolicitudEvaluacion_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.opcionAlmacenTejido = 0;
        this.validosAlmacenTejido = {
            id: false,
            fechaBaja: false,
            ubicacion: true,
            fechaRegistro: false,
            horaRefrigeracion: false,
            fechaActualizacion: false,
            estatusProceso: false,
            comentario: true,
            temperaturaRefrigeracion: false,
            status: false,
            usuarioUltMov: false,
            idoficioDonacion: false,
        };
        this.ocultarConjuntosAlmacenTejido = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "almacenTejido", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.almacenTejidoLazy = false;
        this.almacenTejidoPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.almacenTejido = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"]();
        this.almacenTejidoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.almacenTejidoTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_almacenTejidos = [];
        this.usuarioUltMovAlmacenTejidoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovAlmacenTejidoUsuario = [];
        this.usuarioUltMovAlmacenTejidoUsuarioEditar = false;
        this.idoficioDonacionAlmacenTejidoOficioDonacionEleccion = new _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__["OficioDonacion"]();
        this.lista_idoficioDonacionAlmacenTejidoOficioDonacion = [];
        this.idoficioDonacionAlmacenTejidoOficioDonacionEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.almacenTejidoSeleccion = this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
        this.configuracionAlmacenTejido = new _shared_configurar_almacen_tejido__WEBPACK_IMPORTED_MODULE_6__["ConfigurarAlmacenTejido"]();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovAlmacenTejidoUsuario, this);
        //this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionAlmacenTejidoOficioDonacion, this);
        this.limpiarCampos();
    }
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "almacenTejidoOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosAlmacenTejido)
                return true;
            return !this.almacenTejidoActualizar;
        },
        enumerable: true,
        configurable: true
    });
    AlmacenTejidoCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.almacenTejido && changes.almacenTejido.currentValue == null &&
            this.almacenTejido == null)
            this.almacenTejido = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"]();
        else {
            var aux = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"]();
            if (this.almacenTejido)
                aux.from(this.almacenTejido);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoSeleccion = this.almacenTejidoGuardar = false;
                this.almacenTejidoActualizar = this.almacenTejidoEliminar = this.almacenTejidoCancelar = true;
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
                this.almacenTejidoSeleccion = this.almacenTejidoAgregar = this.almacenTejidoBuscar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
                this.almacenTejidoGuardar = this.almacenTejidoCancelar = true;
            }
        }
    };
    AlmacenTejidoCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "almacenTejido",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "oficioDonacion",
            "recepcionSolicitudEvaluacion",
            "solicitudEvaluacionCorneal",
            "causaMuerte",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.almacenTejidoPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    AlmacenTejidoCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.almacenTejidoPermisos = true;
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoAtributo && permisos.almacenTejido.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.almacenTejido.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoConjunto && permisos.almacenTejido.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.almacenTejido.PermisoConjunto;
        }
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoTabla && permisos.almacenTejido.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.almacenTejido.PermisoTabla[0];
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
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoAtributo && permisos.oficioDonacion.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.oficioDonacion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.oficioDonacion.PermisoAtributo);
        }
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoAtributo && permisos.oficioDonacion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.oficioDonacion.PermisoConjunto);
        }
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoTabla && permisos.oficioDonacion.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.oficioDonacion.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.oficioDonacion.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    AlmacenTejidoCrudComponent.prototype.evtGetUsuarioUltMovAlmacenTejidoUsuario = function (lista_usuarioUltMovAlmacenTejidoUsuario, obj) {
        obj.lista_usuarioUltMovAlmacenTejidoUsuario = lista_usuarioUltMovAlmacenTejidoUsuario;
        obj.actualizar_UsuarioUltMovAlmacenTejidoUsuario();
    };
    AlmacenTejidoCrudComponent.prototype.evtGetIdoficioDonacionAlmacenTejidoOficioDonacion = function (lista_idoficioDonacionAlmacenTejidoOficioDonacion, obj) {
        obj.lista_idoficioDonacionAlmacenTejidoOficioDonacion = lista_idoficioDonacionAlmacenTejidoOficioDonacion;
        obj.actualizar_IdoficioDonacionAlmacenTejidoOficioDonacion();
    };
    AlmacenTejidoCrudComponent.prototype.actualizar_UsuarioUltMovAlmacenTejidoUsuario = function () {
        if (this.usuarioUltMovAlmacenTejidoUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovAlmacenTejidoUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovAlmacenTejidoUsuarioEleccion.id) {
                    this.usuarioUltMovAlmacenTejidoUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    AlmacenTejidoCrudComponent.prototype.actualizar_IdoficioDonacionAlmacenTejidoOficioDonacion = function () {
        if (this.idoficioDonacionAlmacenTejidoOficioDonacionEleccion)
            for (var _i = 0, _a = this.lista_idoficioDonacionAlmacenTejidoOficioDonacion; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idoficioDonacionAlmacenTejidoOficioDonacionEleccion.id) {
                    this.idoficioDonacionAlmacenTejidoOficioDonacionEleccion = eleme;
                    break;
                }
            }
    };
    AlmacenTejidoCrudComponent.prototype.ngDoCheck = function () {
    };
    AlmacenTejidoCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosAlmacenTejido['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosAlmacenTejido['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosAlmacenTejido['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaUbicacion", {
        get: function () {
            return this.validosAlmacenTejido['ubicacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosAlmacenTejido['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaHoraRefrigeracion", {
        get: function () {
            return this.validosAlmacenTejido['horaRefrigeracion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosAlmacenTejido['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaEstatusProceso", {
        get: function () {
            return this.validosAlmacenTejido['estatusProceso'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaComentario", {
        get: function () {
            return this.validosAlmacenTejido['comentario'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaTemperaturaRefrigeracion", {
        get: function () {
            return this.validosAlmacenTejido['temperaturaRefrigeracion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosAlmacenTejido['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosAlmacenTejido['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaIdoficioDonacion", {
        get: function () {
            return this.validosAlmacenTejido['idoficioDonacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaFechaBaja && this.validaUbicacion && this.validaFechaRegistro && this.validaHoraRefrigeracion && this.validaFechaActualizacion && this.validaEstatusProceso && this.validaComentario && this.validaTemperaturaRefrigeracion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdoficioDonacion;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    AlmacenTejidoCrudComponent.prototype.obtenerAlmacenTejidos = function (lista, objeto) {
        objeto.lista_almacenTejidos = lista;
        if (lista && lista.length > 0) {
            objeto.almacenTejido.from(lista[0]);
            objeto.evtAlmacenTejidoSeleccionado(objeto.almacenTejido);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    AlmacenTejidoCrudComponent.prototype.evn_lazy_almacenTejido = function (almacenTejido, objeto) {
        objeto.almacenTejido = almacenTejido;
        objeto.almacenTejidoChange.emit(objeto.almacenTejido);
        objeto.configuarCombosObjetos();
        objeto.almacenTejidoLazy = true;
    };
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "datosReporteAlmacenTejidoWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.almacenTejidoActualizar && this.almacenTejidoLazy && this.globalesService.preporteWord(this, "almacenTejido"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "datosReporteAlmacenTejidoExcel", {
        get: function () {
            return !(this.almacenTejidoActualizar && this.almacenTejidoLazy && this.globalesService.preporteExcel(this, "almacenTejido"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenTejidoCrudComponent.prototype, "datosReporteAlmacenTejidoPdf", {
        get: function () {
            return !(this.almacenTejidoActualizar && this.almacenTejidoLazy && this.globalesService.preportePdf(this, "almacenTejido"));
        },
        enumerable: true,
        configurable: true
    });
    AlmacenTejidoCrudComponent.prototype.reporteAlmacenTejidoExcel = function (form) {
        var nombre = "AlmacenTejido.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "almacenTejido": this.almacenTejido };
        parametros["plantilla"] = "AlmacenTejido.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    AlmacenTejidoCrudComponent.prototype.reporteAlmacenTejidoWord = function (form) {
        var nombre = "AlmacenTejido.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "almacenTejido": this.almacenTejido };
        parametros["plantilla"] = "AlmacenTejido.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    AlmacenTejidoCrudComponent.prototype.reporteAlmacenTejidoPdf = function (form) {
        var nombre = "AlmacenTejido.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "almacenTejido": this.almacenTejido };
        parametros["plantilla"] = "AlmacenTejido.docx";
        parametros["salida"] = "AlmacenTejido.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    AlmacenTejidoCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoCancelar = true;
    };
    AlmacenTejidoCrudComponent.prototype.buscarAlmacenTejidoFront = function (form) {
        this.accionesBuscar();
        var valmacenTejido = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"]();
        valmacenTejido.from(this.almacenTejido);
        this.configuracionAlmacenTejido = new _shared_configurar_almacen_tejido__WEBPACK_IMPORTED_MODULE_6__["ConfigurarAlmacenTejido"]();
        this.configuracionAlmacenTejido.permisosTabla = { "tabla": "almacenTejido", "permiso": 8 };
        this.configuracionAlmacenTejido.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionAlmacenTejido.almacenTejidoConsulta = valmacenTejido;
        this.permisosacciones();
        $("#buscarAlmacenTejido_" + this.nombre).modal();
    };
    AlmacenTejidoCrudComponent.prototype.buscarAlmacenTejidoBack = function (almacenTejido) {
        this.almacenTejido_service.getAlmacenTejidosByDto(almacenTejido, this.eventoSrvAlmacenTejidoBuscar, this);
    };
    AlmacenTejidoCrudComponent.prototype.eventoSrvAlmacenTejidoBuscar = function (lista, objeto) {
        objeto.lista_almacenTejidos = lista;
        if (lista && lista.length > 0) {
            objeto.almacenTejido = lista[0];
            objeto.almacenTejidoLazy = false;
            objeto.almacenTejido_service.lazyAlmacenTejido(objeto.almacenTejido, objeto.evn_lazy_almacenTejido, objeto);
        }
    };
    AlmacenTejidoCrudComponent.prototype.guardarAlmacenTejidoFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarAlmacenTejidoBack(this.almacenTejido);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    AlmacenTejidoCrudComponent.prototype.guardarAlmacenTejidoBack = function (almacenTejido) {
        if (almacenTejido.usuarioUltMov == null)
            almacenTejido.usuarioUltMov = this.globalesService.dameUsuario();
        if (almacenTejido.status == null || almacenTejido.status == "")
            almacenTejido.status = 1;
        this.almacenTejido_service.guardarAlmacenTejido(almacenTejido, this.eventoSrvAlmacenTejidoGuardar, this);
    };
    AlmacenTejidoCrudComponent.prototype.eventoSrvAlmacenTejidoGuardar = function (almacenTejido, obj) {
        obj.almacenTejido = almacenTejido;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"]();
        aux.from(almacenTejido);
        obj.almacenTejidoChange.emit(aux);
        obj.almacenTejidoTablaChange.emit(aux);
        obj.almacenTejidoLazy = false;
        obj.almacenTejido_service.lazyAlmacenTejido(obj.almacenTejido, obj.evn_lazy_almacenTejido, obj);
        obj.accionesActualizar();
    };
    AlmacenTejidoCrudComponent.prototype.actualizarAlmacenTejidoFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarAlmacenTejidoBack(this.almacenTejido);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    AlmacenTejidoCrudComponent.prototype.actualizarAlmacenTejidoBack = function (almacenTejido) {
        almacenTejido.usuarioUltMov = this.globalesService.dameUsuario();
        this.almacenTejido_service.actualizarAlmacenTejido(almacenTejido, this.eventoSrvAlmacenTejidoActualizar, this);
    };
    AlmacenTejidoCrudComponent.prototype.eventoSrvAlmacenTejidoActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.almacenTejidoLazy = false;
            obj.almacenTejido_service.lazyAlmacenTejido(obj.almacenTejido, obj.evn_lazy_almacenTejido, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.almacenTejido);
            obj.almacenTejidoChange.emit(aux);
            obj.almacenTejidoTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    AlmacenTejidoCrudComponent.prototype.eliminarAlmacenTejidoFront = function (form) {
        this.accion = 4;
        this.eliminarAlmacenTejidoBack(this.almacenTejido);
        this.permisosacciones();
        this.accionesBuscar();
    };
    AlmacenTejidoCrudComponent.prototype.eliminarAlmacenTejidoBack = function (almacenTejido) {
        almacenTejido.usuarioUltMov = this.globalesService.dameUsuario();
        this.almacenTejido_service.eliminarAlmacenTejido(almacenTejido, this.eventoSrvAlmacenTejidoEliminar, this);
    };
    AlmacenTejidoCrudComponent.prototype.eventoSrvAlmacenTejidoEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.almacenTejido = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"]();
            obj.almacenTejidoChange.emit(obj.almacenTejido);
            obj.almacenTejidoTablaChange.emit(obj.almacenTejido);
            obj.limpiarCampos();
        }
    };
    AlmacenTejidoCrudComponent.prototype.cancelarAlmacenTejidoFront = function (form) {
        this.accion = 6;
        this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = true;
        this.permisosacciones();
    };
    AlmacenTejidoCrudComponent.prototype.nuevoAlmacenTejidoFront = function (form) {
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
                this.almacenTejidoSeleccion = this.almacenTejidoAgregar = this.almacenTejidoBuscar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false;
                this.almacenTejidoGuardar = this.almacenTejidoCancelar = true;
            }.bind(this)
        });
    };
    AlmacenTejidoCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovAlmacenTejidoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovAlmacenTejidoUsuario, this);
        this.lista_idoficioDonacionAlmacenTejidoOficioDonacion = [];
        this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionAlmacenTejidoOficioDonacion, this);
    };
    AlmacenTejidoCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    AlmacenTejidoCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoSeleccion = this.almacenTejidoGuardar = false;
        this.almacenTejidoActualizar = this.almacenTejidoEliminar = this.almacenTejidoCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    AlmacenTejidoCrudComponent.prototype.evtAlmacenTejidoSeleccionado = function (almacenTejido) {
        this.almacenTejido = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"]();
        this.almacenTejido.from(almacenTejido);
        this.almacenTejidoLazy = false;
        this.almacenTejido_service.lazyAlmacenTejido(this.almacenTejido, this.evn_lazy_almacenTejido, this);
        this.accion = 7;
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = this.almacenTejidoSeleccion = this.almacenTejidoGuardar = false;
        this.almacenTejidoActualizar = this.almacenTejidoEliminar = this.almacenTejidoCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarAlmacenTejido_" + this.nombre).modal("hide");
    };
    AlmacenTejidoCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.almacenTejidoSeleccion = this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false; // ******************** maquina
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    AlmacenTejidoCrudComponent.prototype.permisosacciones = function () {
        if (this.almacenTejidoBuscar)
            this.almacenTejidoBuscar = this.globalesService.pbuscar(this, "almacenTejido");
        if (this.almacenTejidoActualizar)
            this.almacenTejidoActualizar = (this.globalesService.pacutalizar(this, "almacenTejido") && this.globalesService.pbuscar(this, "almacenTejido"));
        if (this.almacenTejidoEliminar)
            this.almacenTejidoEliminar = (this.globalesService.peliminar(this, "almacenTejido") && this.globalesService.pbuscar(this, "almacenTejido"));
        if (this.almacenTejidoAgregar)
            this.almacenTejidoAgregar = this.globalesService.pagregar(this, "almacenTejido");
    };
    AlmacenTejidoCrudComponent.prototype.permisosaccionesInicio = function () {
        this.almacenTejidoSeleccion = this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false; // *************************** maquina
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    AlmacenTejidoCrudComponent.prototype.limpiarCampos = function () {
        this.almacenTejido = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"]();
        this.usuarioUltMovAlmacenTejidoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idoficioDonacionAlmacenTejidoOficioDonacionEleccion = new _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__["OficioDonacion"]();
        this.almacenTejidoChange.emit(this.almacenTejido);
        this.almacenTejidoSeleccion = this.almacenTejidoCancelar = this.almacenTejidoGuardar = this.almacenTejidoActualizar = this.almacenTejidoEliminar = false; // *************************** maquina
        this.almacenTejidoBuscar = this.almacenTejidoAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlmacenTejidoCrudComponent.prototype, "ocultarConjuntosAlmacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AlmacenTejidoCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlmacenTejidoCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejido"])
    ], AlmacenTejidoCrudComponent.prototype, "almacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoCrudComponent.prototype, "almacenTejidoChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoCrudComponent.prototype, "almacenTejidoTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlmacenTejidoCrudComponent.prototype, "enable", void 0);
    AlmacenTejidoCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-almacen-tejido-crud',
            template: __webpack_require__(/*! ./almacen-tejido-crud.component.html */ "./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.html"),
            styles: [__webpack_require__(/*! ./almacen-tejido-crud.component.css */ "./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_almacen_tejido_service__WEBPACK_IMPORTED_MODULE_5__["AlmacenTejidoService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _oficio_donaciones_shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_15__["OficioDonacionService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__["SolicitudEvaluacionCornealService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__["RecepcionSolicitudEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_almacen_tejido_service__WEBPACK_IMPORTED_MODULE_5__["AlmacenTejidoService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _oficio_donaciones_shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_15__["OficioDonacionService"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__["RecepcionSolicitudEvaluacionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__["CausaMuerteService"]])
    ], AlmacenTejidoCrudComponent);
    return AlmacenTejidoCrudComponent;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para almacenTejido-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionAlmacenTejido.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_almacenTejido_{{nombregrid}}\">\n                <div id=\"grid_almacenTejido_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AlmacenTejidoListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenTejidoListKendoComponent", function() { return AlmacenTejidoListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/almacen-tejido */ "./src/app/almacen-tejidos/shared/almacen-tejido.ts");
/* harmony import */ var _shared_configurar_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-almacen-tejido */ "./src/app/almacen-tejidos/shared/configurar-almacen-tejido.ts");
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
var AlmacenTejidoListKendoComponent = /** @class */ (function () {
    function AlmacenTejidoListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.almacenTejidoSeleccionado = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_3__["AlmacenTejido"]();
        this.configuracionAlmacenTejido = new _shared_configurar_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["ConfigurarAlmacenTejido"]();
        this.nombregrid = "";
        this.evtAlmacenTejidoSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "almacenTejido";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'almacenTejido'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'almacenTejido'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    AlmacenTejidoListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionAlmacenTejido.titulo.indexOf("Catálogo") != -1) {
            this.configuracionAlmacenTejido.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    AlmacenTejidoListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionAlmacenTejido && changes.configuracionAlmacenTejido.currentValue &&
            (changes.configuracionAlmacenTejido.previousValue instanceof _shared_configurar_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["ConfigurarAlmacenTejido"])) {
            if (changes.configuracionAlmacenTejido.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionAlmacenTejido.currentValue.permisosAtributos;
            if (changes.configuracionAlmacenTejido.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionAlmacenTejido.currentValue.permisosTabla;
            if ($("#grid_almacenTejido_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    AlmacenTejidoListKendoComponent.prototype.ngOnInit = function () {
        self["grid_almacenTejido_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionAlmacenTejido.permisosAtributos &&
            this.configuracionAlmacenTejido.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "almacenTejido",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'AlmacenTejido'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'AlmacenTejido'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'AlmacenTejido'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionAlmacenTejido.permisosAtributos)
            this.permisosAtributos = this.configuracionAlmacenTejido.permisosAtributos;
        if (this.configuracionAlmacenTejido.permisosTabla)
            this.permisosTabla = this.configuracionAlmacenTejido.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    AlmacenTejidoListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoAtributo && permisos.almacenTejido.PermisoAtributo.length > 0
            && !obj.configuracionAlmacenTejido.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.almacenTejido.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.AlmacenTejido.PermisoAtributo ;
        }
        if (permisos && permisos.almacenTejido && permisos.almacenTejido.PermisoTabla && permisos.almacenTejido.PermisoTabla.length > 0
            && !obj.configuracionAlmacenTejido.permisosTabla) {
            obj.globalesService.evtTablas(permisos.almacenTejido.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.AlmacenTejido.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    AlmacenTejidoListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_almacenTejido_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    AlmacenTejidoListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionAlmacenTejido.campoAgEl != null
            && this.configuracionAlmacenTejido.almacenTejidoConsulta
            && this.configuracionAlmacenTejido.almacenTejidoConsulta.isOk
            && !this.configuracionAlmacenTejido.almacenTejidoConsulta.isOk())
            return;
        if (this.configuracionAlmacenTejido.almacenTejidoConsulta) {
            if (!this.configuracionAlmacenTejido.campoAgEl && this.configuracionAlmacenTejido.almacenTejidoConsulta instanceof _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_3__["AlmacenTejido"])
                this.configuracionAlmacenTejido.rutaLista = this.crudServiceBaseUrl + "/getAlmacenTejidosByDto";
            this.lista = this.configuracionAlmacenTejido.lecturaP(completar, this.configuracionAlmacenTejido.almacenTejidoConsulta);
            if (this.configuracionAlmacenTejido.campoAgEl) {
                this.rutaAgregar = this.configuracionAlmacenTejido.agregarP(function () { }, this.configuracionAlmacenTejido.campoAgEl);
                this.rutaEliminar = this.configuracionAlmacenTejido.eliminarP(function () { }, this.configuracionAlmacenTejido.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionAlmacenTejido.agregarP(completar, this.configuracionAlmacenTejido.almacenTejidoConsulta);
                this.rutaEliminar = this.configuracionAlmacenTejido.eliminarP(completar, this.configuracionAlmacenTejido.almacenTejidoConsulta);
            }
        }
        else {
            this.lista = this.configuracionAlmacenTejido.lectura();
            this.rutaAgregar = this.configuracionAlmacenTejido.agregar();
            this.rutaEliminar = this.configuracionAlmacenTejido.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "almacenTejido", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "almacenTejido", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "idoficioDonacion")) {
            campos["idoficioDonacion"] = { editable: this.globalesService.aenable(this, "almacenTejido", "idoficioDonacion"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "ubicacion")) {
            campos["ubicacion"] = { editable: this.globalesService.aenable(this, "almacenTejido", "ubicacion"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "temperaturaRefrigeracion")) {
            campos["temperaturaRefrigeracion"] = { editable: this.globalesService.aenable(this, "almacenTejido", "temperaturaRefrigeracion"), nullable: true };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "horaRefrigeracion")) {
            campos["horaRefrigeracion"] = { editable: this.globalesService.aenable(this, "almacenTejido", "horaRefrigeracion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "comentario")) {
            campos["comentario"] = { editable: this.globalesService.aenable(this, "almacenTejido", "comentario"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "almacenTejido", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "almacenTejido", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "almacenTejido", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this, "almacenTejido", "estatusProceso"), nullable: true };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "almacenTejido", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "almacenTejido", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "almacenTejido", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionAlmacenTejido.rutaActualizar,
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
                        if (elem.horaRefrigeracion && typeof elem.horaRefrigeracion === "number") {
                            elem.horaRefrigeracion = kendo.parseDate(new Date(elem.horaRefrigeracion), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionAlmacenTejido.campoAgEl) {
                if (self.configuracionAlmacenTejido.tipocampoAgEl == "AlmacenTejidoAlmacenTejido")
                    self.configuracionAlmacenTejido.campoAgEl.almacenTejido2 = options.models[0];
                else
                    self.configuracionAlmacenTejido.campoAgEl.almacenTejido = options.models[0];
                return JSON.stringify(self.configuracionAlmacenTejido.campoAgEl);
            }
            else if (est.options[operation].data.models.almacenTejido) {
                est.options[operation].data.models.almacenTejido2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    AlmacenTejidoListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "almacenTejido", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "almacenTejido", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "idoficioDonacion")) {
            columnas.push({ field: "idoficioDonacion", title: this.globalesService.aetiqueta(this, "almacenTejido", "idoficioDonacion"), editor: idoficioDonacionDropDownEditor, template: " #if (idoficioDonacion){#   #=idoficioDonacion.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "ubicacion")) {
            columnas.push({ field: "ubicacion", title: this.globalesService.aetiqueta(this, "almacenTejido", "ubicacion"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "temperaturaRefrigeracion")) {
            columnas.push({ field: "temperaturaRefrigeracion", title: this.globalesService.aetiqueta(this, "almacenTejido", "temperaturaRefrigeracion") });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "horaRefrigeracion")) {
            columnas.push({ field: "horaRefrigeracion", title: this.globalesService.aetiqueta(this, "almacenTejido", "horaRefrigeracion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "comentario")) {
            columnas.push({ field: "comentario", title: this.globalesService.aetiqueta(this, "almacenTejido", "comentario"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "almacenTejido", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "almacenTejido", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "almacenTejido", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this, "almacenTejido", "estatusProceso") });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "almacenTejido", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "almacenTejido", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "almacenTejido", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "almacenTejido"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "almacenTejido")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "almacenTejido")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "almacenTejido") && this.configuracionAlmacenTejido.almacenTejidoConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_almacenTejido_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_almacenTejido_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionAlmacenTejido.altoComponente,
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
        this.grid = $("#grid_almacenTejido_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidoficioDonacion = this.urlprovider.serverURL + "oficioDonacion/getOficioDonacionesActivos";
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
        function idoficioDonacionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "botonCorneal",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidoficioDonacion,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    AlmacenTejidoListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_almacenTejido_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.almacenTejidoSeleccionado = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_3__["AlmacenTejido"]();
        gridac.almacenTejidoSeleccionado.from(dataItem);
        gridac.evtAlmacenTejidoSeleccionado.emit(gridac.almacenTejidoSeleccionado);
        (gridac.almacenTejidoSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_almacen_tejido__WEBPACK_IMPORTED_MODULE_4__["ConfigurarAlmacenTejido"])
    ], AlmacenTejidoListKendoComponent.prototype, "configuracionAlmacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AlmacenTejidoListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("almacenTejidoSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AlmacenTejidoListKendoComponent.prototype, "evtAlmacenTejidoSeleccionado", void 0);
    AlmacenTejidoListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-almacen-tejido-list-kendo',
            template: __webpack_require__(/*! ./almacen-tejido-list-kendo.component.html */ "./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./almacen-tejido-list-kendo.component.css */ "./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], AlmacenTejidoListKendoComponent);
    return AlmacenTejidoListKendoComponent;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AlmacenTejidoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenTejidoRoutingModule", function() { return AlmacenTejidoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _almacen_tejidos_almacen_tejido_list_kendo_almacen_tejido_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component */ "./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.ts");
/* harmony import */ var _almacen_tejidos_almacen_tejido_crud_almacen_tejido_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component */ "./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.ts");
/* harmony import */ var _almacen_tejidos_almacen_tejido_table_almacen_tejido_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component */ "./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'almacen-tejido-list-kendo', component: _almacen_tejidos_almacen_tejido_list_kendo_almacen_tejido_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["AlmacenTejidoListKendoComponent"] },
    { path: 'almacen-tejido-crud', component: _almacen_tejidos_almacen_tejido_crud_almacen_tejido_crud_component__WEBPACK_IMPORTED_MODULE_3__["AlmacenTejidoCrudComponent"] },
    { path: 'almacen-tejido-table', component: _almacen_tejidos_almacen_tejido_table_almacen_tejido_table_component__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejidoTableComponent"] },
];
var AlmacenTejidoRoutingModule = /** @class */ (function () {
    function AlmacenTejidoRoutingModule() {
    }
    AlmacenTejidoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AlmacenTejidoRoutingModule);
    return AlmacenTejidoRoutingModule;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h1>Búsqueda {{ permisosTabla?.etiqueta }}</h1>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label\">ID Banco de Tejido de Córnea:</label>\n                            <input class=\"form-control\" type=\"text\" name=\"idBTC\" [(ngModel)]=\"idBTC\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\">Folio Solicitud de Evaluación Corneal:</label\n              >\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"folioSolicitud\"\n                [(ngModel)]=\"folioSolicitud\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Fecha Inicio:</label>\n                            <kendo-datepicker class=\"form-control\" name=\"fechaInicio\" [(ngModel)]=\"fechaInicio\">\n                                <kendo-datepicker-messages today=\"Hoy\"></kendo-datepicker-messages>\n                            </kendo-datepicker>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label class=\"control-label\">Nº Expediente:</label>\n                            <input class=\"form-control\" type=\"text\" name=\"numeroExpediente\" [(ngModel)]=\"numeroExpediente\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\">Estatus:</label>\n                            <kendo-combobox [data]=\"estatuses\" [textField]=\"'descripcion'\" [valueField]=\"'id'\" [filterable]=\"true\" [allowCustom]=\"false\" (valueChange)=\"valueChangeEstatus($event)\" class=\"form-control\">\n                                <ng-template kendoDropDownListNoDataTemplate>\n                                    <h4>\n                                        Sin registros.\n                                    </h4>\n                                </ng-template>\n                            </kendo-combobox>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\">Fecha Fin:</label>\n                            <kendo-datepicker class=\"form-control\" name=\"fechaFin\" [(ngModel)]=\"fechaFin\">\n                                <kendo-datepicker-messages today=\"Hoy\"></kendo-datepicker-messages>\n                            </kendo-datepicker>\n                        </div>\n                        <button class=\"btn btn-primary pull-right\" type=\"button\" (click)=\"buscar()\">\n              Buscar\n            </button>\n                    </div>\n                </div>\n                <br />\n                <kendo-grid [data]=\"listaAlmacen\" [height]=\"410\" [resizable]=\"true\">\n                    <kendo-grid-column width=\"45\">\n                        <ng-template kendoGridCellTemplate let-dataItem>\n                            <i *ngIf=\"dataItem.estatusProceso === 4\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Ingreso en Almacén\" class=\"icon-infocircle\" style=\"color: purple;\"></i>\n                            <i *ngIf=\"dataItem.estatusProceso === 5\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Registro Concluido\" class=\"icon-infocircle\" style=\"color: gray;\"></i>\n                        </ng-template>\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"idBTC\" title=\"ID BTC\" width=\"80\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"folioSolicitud\" title=\"Folio Solicitud\" width=\"80\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"nombre\" title=\"Nombre\" width=\"80\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"primerApellido\" title=\"1º Apellido\" width=\"80\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"numeroExpediente\" title=\"Nº Expediente\" width=\"80\">\n                    </kendo-grid-column>\n                    <kendo-grid-column title=\"Detalle\" width=\"45\">\n                        <ng-template kendoGridCellTemplate let-dataItem>\n                            <div style=\"text-align: center;\">\n                                <span style=\"cursor: pointer\" (click)=\"detalleHandler(dataItem)\"><img\n                    src=\"assets/imagenes/svg/binocular.svg\"\n                    alt=\"Detalle\"\n                    style=\"width: 30px;\"\n                /></span>\n                            </div>\n                        </ng-template>\n                    </kendo-grid-column>\n                    <kendo-grid-column title=\"Editar\" width=\"45\">\n                        <ng-template kendoGridCellTemplate let-dataItem>\n                            <div style=\"text-align: center;\">\n                                <span class=\"glyphicon glyphicon-edit\" style=\"cursor: pointer\" (click)=\"editHandler(dataItem)\"></span>\n                            </div>\n                        </ng-template>\n                    </kendo-grid-column>\n                    <kendo-grid-column title=\"Borrar\" width=\"45\">\n                        <ng-template kendoGridCellTemplate let-dataItem>\n                            <div style=\"text-align: center;\">\n                                <span class=\"glyphicon glyphicon-trash\" style=\"cursor: pointer\" (click)=\"removeHandler(dataItem)\"></span>\n                            </div>\n                        </ng-template>\n                    </kendo-grid-column>\n                </kendo-grid>\n            </div>\n            <!-- <app-almacen-tejido [class.hidden]=\"primero\" [(almacenTejido)]=\"almacenTejidoSeleccionado\" (almacenTejidoTablaChange)=\"cambio_almacenTejido($event)\"> </app-almacen-tejido>     -->\n        </div>\n    </div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n\n\n<div id=\"modalDetalleSolicitudTejido\" class=\"modal fade \" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <app-detalle [id]=\"idSeleccionado\"></app-detalle>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div id=\"modalDetalleEvaluacion\" class=\"modal fade \" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <app-detalle-evaluacion [id]=\"idSeleccionado\"></app-detalle-evaluacion>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AlmacenTejidoTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenTejidoTableComponent", function() { return AlmacenTejidoTableComponent; });
/* harmony import */ var _almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../almacen-evaluaciones/shared/almacen-evaluacion.service */ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.service.ts");
/* harmony import */ var _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/almacen-tejido */ "./src/app/almacen-tejidos/shared/almacen-tejido.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../permiso-atributos/shared/permiso-atributo.service */ "./src/app/permiso-atributos/shared/permiso-atributo.service.ts");
/* harmony import */ var _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../permiso-tablas/shared/permiso-tabla.service */ "./src/app/permiso-tablas/shared/permiso-tabla.service.ts");
/* harmony import */ var _shared_almacen_tejido_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/almacen-tejido.service */ "./src/app/almacen-tejidos/shared/almacen-tejido.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AlmacenTejidoTableComponent = /** @class */ (function () {
    function AlmacenTejidoTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider, almacenTejidoService, router, almacenEvaluacionService) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.almacenTejidoService = almacenTejidoService;
        this.router = router;
        this.almacenEvaluacionService = almacenEvaluacionService;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "almacenTejido", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.listaAlmacen = [];
        this.estatuses = [
            {
                id: 4,
                descripcion: "Morado Ingreso en Almacén"
            },
            {
                id: 5,
                descripcion: "Gris Registro Concluido"
            }
        ];
        this.almacenTejidoSeleccionado = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__["AlmacenTejido"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'almacenTejido'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    AlmacenTejidoTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'almacenTejido'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    AlmacenTejidoTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(AlmacenTejidoTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    AlmacenTejidoTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("almacenTejido", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("almacenTejido", "idoficioDonacion"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idoficioDonacion)
                    return "<span style=\"cursor: pointer\">" + oObj.idoficioDonacion.botonCorneal + "</span>";
                return "";
            }
        });
        if (!this.avisible("almacenTejido", "ubicacion"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "ubicacion" });
        if (!this.avisible("almacenTejido", "temperaturaRefrigeracion"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "temperaturaRefrigeracion" });
        if (!this.avisible("almacenTejido", "horaRefrigeracion"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "horaRefrigeracion" });
        if (!this.avisible("almacenTejido", "comentario"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "comentario" });
        if (!this.avisible("almacenTejido", "fechaRegistro"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("almacenTejido", "fechaActualizacion"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("almacenTejido", "fechaBaja"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("almacenTejido", "estatusProceso"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "estatusProceso" });
        if (!this.avisible("almacenTejido", "usuarioUltMov"))
            columnasNoVisibles.push(10);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("almacenTejido", "status"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("almacenTejido"))
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
        var tabla = $('#tabla_almacenTejido').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_almacenTejido_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.almacenTejidoSeleccionado = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__["AlmacenTejido"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "almacenTejido/getAlmacenTejidos",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_almacenTejido tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_almacenTejido').DataTable().row(this).data();
                self.almacenTejidoSeleccionado = new _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__["AlmacenTejido"]();
                self.almacenTejidoSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_almacenTejido').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    AlmacenTejidoTableComponent.prototype.ngOnInit = function () {
        this.almacenTejidoService.getAlmacenTejidosConsulta({}, this.evnAlmacenConsulta, this);
    };
    AlmacenTejidoTableComponent.prototype.cambio_almacenTejido = function (almacenTejido) {
        $('#tabla_almacenTejido').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S
    // **********************************************************************************
    // **********************************************************************************
    AlmacenTejidoTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    AlmacenTejidoTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    AlmacenTejidoTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    AlmacenTejidoTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    AlmacenTejidoTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    AlmacenTejidoTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    AlmacenTejidoTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    AlmacenTejidoTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    AlmacenTejidoTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    AlmacenTejidoTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    AlmacenTejidoTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    AlmacenTejidoTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    AlmacenTejidoTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    AlmacenTejidoTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    AlmacenTejidoTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    // **********************************************************************************
    // **********************************************************************************
    AlmacenTejidoTableComponent.prototype.evnAlmacenConsulta = function (lista, obj) {
        obj.listaAlmacen = lista;
    };
    AlmacenTejidoTableComponent.prototype.editHandler = function (dataItem) {
        (dataItem);
        if (dataItem.tipo === 1) {
            this.router.navigateByUrl("/almacen-evaluacion-crud/" + dataItem.id);
        }
        else {
            this.router.navigateByUrl("/ingreso-solictud-tejido/" + dataItem.id);
        }
    };
    AlmacenTejidoTableComponent.prototype.removeHandler = function (dataItem) {
        bootbox.confirm({
            message: "¿Deseas eliminar el registro?",
            buttons: {
                confirm: {
                    label: "Sí",
                    className: "btn-primary"
                },
                cancel: {
                    label: "No",
                    className: ""
                }
            },
            callback: function (result) {
                if (result) {
                    if (dataItem.tipo === 1) {
                        this.almacenEvaluacionService.eliminarAlmacenEvaluacion({ id: dataItem.id }, this.evnEliminar, this);
                    }
                    else {
                        this.almacenTejidoService.eliminarAlmacenTejido({ id: dataItem.id }, this.evnEliminar, this);
                    }
                }
            }.bind(this)
        });
    };
    AlmacenTejidoTableComponent.prototype.detalleHandler = function (dataItem) {
        (dataItem);
        this.idSeleccionado = dataItem.id;
        if (dataItem.tipo === 1) {
            $('#modalDetalleEvaluacion').modal('show');
        }
        else {
            $('#modalDetalleSolicitudTejido').modal('show');
        }
    };
    AlmacenTejidoTableComponent.prototype.valueChangeEstatus = function (data) {
        this.estatus = data ? data.id : null;
    };
    AlmacenTejidoTableComponent.prototype.buscar = function () {
        this.almacenTejidoService.getAlmacenTejidosConsulta({ idBTC: this.idBTC, numeroExpediente: this.numeroExpediente,
            folioSolicitud: this.folioSolicitud, estatus: this.estatus,
            fechaInicio: this.fechaInicio ? this.fechaInicio.getTime() : null, fechaFin: this.fechaFin ? this.fechaFin.getTime() : null
        }, this.evnAlmacenConsulta, this);
    };
    AlmacenTejidoTableComponent.prototype.evnEliminar = function (a, obj) {
        bootbox.alert("Registro eliminado.");
        obj.buscar();
    };
    AlmacenTejidoTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-almacen-tejido-table',
            template: __webpack_require__(/*! ./almacen-tejido-table.component.html */ "./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.html"),
            styles: [__webpack_require__(/*! ./almacen-tejido-table.component.css */ "./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
                _shared_almacen_tejido_service__WEBPACK_IMPORTED_MODULE_7__["AlmacenTejidoService"],
                _almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__["AlmacenEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_4__["URLProvider"],
            _shared_almacen_tejido_service__WEBPACK_IMPORTED_MODULE_7__["AlmacenTejidoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__["AlmacenEvaluacionService"]])
    ], AlmacenTejidoTableComponent);
    return AlmacenTejidoTableComponent;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido.module.ts ***!
  \**********************************************************/
/*! exports provided: AlmacenTejidoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenTejidoModule", function() { return AlmacenTejidoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _almacen_tejido_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./almacen-tejido-routing.module */ "./src/app/almacen-tejidos/almacen-tejido-routing.module.ts");
/* harmony import */ var _almacen_tejido_list_kendo_almacen_tejido_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./almacen-tejido-list-kendo/almacen-tejido-list-kendo.component */ "./src/app/almacen-tejidos/almacen-tejido-list-kendo/almacen-tejido-list-kendo.component.ts");
/* harmony import */ var _almacen_tejido_crud_almacen_tejido_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./almacen-tejido-crud/almacen-tejido-crud.component */ "./src/app/almacen-tejidos/almacen-tejido-crud/almacen-tejido-crud.component.ts");
/* harmony import */ var _almacen_tejido_conjunto_almacen_tejido_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./almacen-tejido-conjunto/almacen-tejido-conjunto.component */ "./src/app/almacen-tejidos/almacen-tejido-conjunto/almacen-tejido-conjunto.component.ts");
/* harmony import */ var _almacen_tejido_almacen_tejido_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./almacen-tejido/almacen-tejido.component */ "./src/app/almacen-tejidos/almacen-tejido/almacen-tejido.component.ts");
/* harmony import */ var _almacen_tejido_table_almacen_tejido_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./almacen-tejido-table/almacen-tejido-table.component */ "./src/app/almacen-tejidos/almacen-tejido-table/almacen-tejido-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm5/index.js");
/* harmony import */ var _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detalle/detalle.component */ "./src/app/almacen-tejidos/detalle/detalle.component.ts");
/* harmony import */ var _detalle_evaluacion_detalle_evaluacion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detalle-evaluacion/detalle-evaluacion.component */ "./src/app/almacen-tejidos/detalle-evaluacion/detalle-evaluacion.component.ts");
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










//import { OficioDonacionModule }   from '../oficio-donaciones/oficio-donacion.module';






var AlmacenTejidoModule = /** @class */ (function () {
    function AlmacenTejidoModule(parentModule) {
        if (parentModule) {
            throw new Error('AlmacenTejidoModule is already loaded. Import it in the AppModule only');
        }
    }
    AlmacenTejidoModule_1 = AlmacenTejidoModule;
    AlmacenTejidoModule.forRoot = function () {
        return {
            ngModule: AlmacenTejidoModule_1,
            providers: []
        };
    };
    var AlmacenTejidoModule_1;
    AlmacenTejidoModule = AlmacenTejidoModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _almacen_tejido_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlmacenTejidoRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
                //, OficioDonacionModule
                ,
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_12__["DateInputsModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_13__["DropDownsModule"]
            ],
            declarations: [
                _almacen_tejido_list_kendo_almacen_tejido_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejidoListKendoComponent"],
                _almacen_tejido_almacen_tejido_component__WEBPACK_IMPORTED_MODULE_7__["AlmacenTejidoComponent"],
                _almacen_tejido_crud_almacen_tejido_crud_component__WEBPACK_IMPORTED_MODULE_5__["AlmacenTejidoCrudComponent"],
                _almacen_tejido_conjunto_almacen_tejido_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["AlmacenTejidoConjuntoComponent"],
                _almacen_tejido_table_almacen_tejido_table_component__WEBPACK_IMPORTED_MODULE_8__["AlmacenTejidoTableComponent"],
                _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_14__["DetalleComponent"],
                _detalle_evaluacion_detalle_evaluacion_component__WEBPACK_IMPORTED_MODULE_15__["DetalleEvaluacionComponent"],
            ],
            exports: [
                _almacen_tejido_list_kendo_almacen_tejido_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["AlmacenTejidoListKendoComponent"],
                _almacen_tejido_almacen_tejido_component__WEBPACK_IMPORTED_MODULE_7__["AlmacenTejidoComponent"],
                _almacen_tejido_crud_almacen_tejido_crud_component__WEBPACK_IMPORTED_MODULE_5__["AlmacenTejidoCrudComponent"],
                _almacen_tejido_conjunto_almacen_tejido_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["AlmacenTejidoConjuntoComponent"],
                _almacen_tejido_table_almacen_tejido_table_component__WEBPACK_IMPORTED_MODULE_8__["AlmacenTejidoTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [AlmacenTejidoModule])
    ], AlmacenTejidoModule);
    return AlmacenTejidoModule;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido/almacen-tejido.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido/almacen-tejido.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido/almacen-tejido.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido/almacen-tejido.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4>{{ etiquetaGeneral }}</h4>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <!-- <app-componente-identificador [componente]=\"'almacenTejido'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"almacenTejidoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosAlmacenTejido['id']\"\n                                                   [(dato)]=\"almacenTejido.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'almacenTejido'\"\n                                               [atributo]=\"'idoficioDonacion'\"\n                                               [buscar]=\"almacenTejidoBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosAlmacenTejido['idoficioDonacion']\"\n                                               [(dato)]=\"almacenTejido.idoficioDonacion\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosAlmacenTejido\"\n                                               [opciones]=\"lista_idoficioDonacionAlmacenTejido\"\n                                               [atributoVisible]=\"'botonCorneal'\" [(objetoEdicion)]=\"idoficioDonacionAlmacenTejidoEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idoficioDonacionEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'almacenTejido','idoficioDonacion')\" >\n                                   <app-oficio-donacion-crud [nombre]=\"'idoficioDonacion'\" [oficioDonacion]=\"almacenTejido.idoficioDonacion\" (oficioDonacionChange)=\"evtIdoficioDonacion($event)\"\n                                                           [ocultarConjuntosOficioDonacion]=\"'true'\" [class.hidden]=\"!idoficioDonacionEditar\" ></app-oficio-donacion-crud>\n                            </div>\n                        </div>\n                    </div> -->\n          <app-componente-cadena-larga\n            [componente]=\"'almacenTejido'\"\n            [atributo]=\"'ubicacion'\"\n            [buscar]=\"almacenTejidoBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosAlmacenTejido['ubicacion']\"\n            [(dato)]=\"almacenTejido.ubicacion\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena-larga>\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <!-- <app-componente-cadena\n                [componente]=\"'almacenTejido'\"\n                [atributo]=\"'temperaturaRefrigeracion'\"\n                [buscar]=\"almacenTejidoBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosAlmacenTejido['temperaturaRefrigeracion']\"\n                [(dato)]=\"almacenTejido.temperaturaRefrigeracion\"\n                class=\"w-100\"\n              >\n              </app-componente-cadena> -->\n              <app-componente-objeto\n              [componente]=\"'almacenTejido'\"\n              [atributo]=\"'temperaturaRefrigeracion'\"\n              [buscar]=\"almacenTejidoBuscar\"\n              [permisosAtributos]=\"permisosAtributos\"\n              [(valido)]=\"\n              validosAlmacenTejido['temperaturaRefrigeracion']\n              \"\n              [(dato)]=\"almacenTejido.temperaturaRefrigeracion\"\n              class=\"w-100\"\n              [ocultarConjuntos]=\"true\"\n              [opciones]=\"listaTemperaturas\"\n              [atributoVisible]=\"'descripcion'\"\n              [objetoEdicion]=\"false\"\n              [enable]=\"enable\"\n            >\n            </app-componente-objeto>\n            </div>\n            <div class=\"col-md-6\">\n              <app-componente-hora\n                [componente]=\"'almacenTejido'\"\n                [atributo]=\"'horaRefrigeracion'\"\n                [buscar]=\"almacenTejidoBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosAlmacenTejido['horaRefrigeracion']\"\n                [(dato)]=\"almacenTejido.horaRefrigeracion\"\n                class=\"w-100\"\n                [enabled]=\"enable\"\n              >\n              </app-componente-hora>\n            </div>\n          </div>\n          <app-componente-cadena-larga\n            [componente]=\"'almacenTejido'\"\n            [atributo]=\"'comentario'\"\n            [buscar]=\"almacenTejidoBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosAlmacenTejido['comentario']\"\n            [(dato)]=\"almacenTejido.comentario\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena-larga>\n          <!-- <app-componente-fecha [componente]=\"'almacenTejido'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"almacenTejidoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosAlmacenTejido['fechaRegistro']\"\n                                                   [(dato)]=\"almacenTejido.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'almacenTejido'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"almacenTejidoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosAlmacenTejido['fechaActualizacion']\"\n                                                   [(dato)]=\"almacenTejido.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'almacenTejido'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"almacenTejidoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosAlmacenTejido['fechaBaja']\"\n                                                   [(dato)]=\"almacenTejido.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-cadena [componente]=\"'almacenTejido'\"\n                                                   [atributo]=\"'estatusProceso'\"\n                                                   [buscar]=\"almacenTejidoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosAlmacenTejido['estatusProceso']\"\n                                                   [(dato)]=\"almacenTejido.estatusProceso\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                    <div>\n                        <app-componente-objeto [componente]=\"'almacenTejido'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"almacenTejidoBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosAlmacenTejido['usuarioUltMov']\"\n                                               [(dato)]=\"almacenTejido.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosAlmacenTejido\"\n                                               [opciones]=\"lista_usuarioUltMovAlmacenTejido\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovAlmacenTejidoEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'almacenTejido','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"almacenTejido.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-radio [componente]=\"'almacenTejido'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"almacenTejidoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosAlmacenTejido['status']\"\n                                                   [(dato)]=\"almacenTejido.status\"   class=\"w-100\" >\n                    </app-componente-radio >  -->\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/almacen-tejidos/almacen-tejido/almacen-tejido.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/almacen-tejidos/almacen-tejido/almacen-tejido.component.ts ***!
  \****************************************************************************/
/*! exports provided: AlmacenTejidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenTejidoComponent", function() { return AlmacenTejidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/almacen-tejido */ "./src/app/almacen-tejidos/shared/almacen-tejido.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlmacenTejidoComponent = /** @class */ (function () {
    function AlmacenTejidoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.almacenTejidoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovAlmacenTejidoUsuarioEditar = false;
        this.idoficioDonacionAlmacenTejidoOficioDonacionEditar = false;
        this.listaTemperaturas = [
            {
                id: 2,
                descripcion: "2 ºC"
            },
            {
                id: 3,
                descripcion: "3 ºC"
            },
            {
                id: 4,
                descripcion: "4 ºC"
            },
            {
                id: 5,
                descripcion: "5 ºC"
            },
            {
                id: 6,
                descripcion: "6 ºC"
            },
            {
                id: 7,
                descripcion: "7 ºC"
            },
            {
                id: 8,
                descripcion: "8 ºC"
            }
        ];
    }
    AlmacenTejidoComponent.prototype.actualizarAlmacenTejido = function () {
        if (this.almacenTejido.id == null) {
            this.almacenTejidoService.guardarAlmacenTejido(this.almacenTejido, this.evtGuardar, this);
        }
        else {
            this.almacenTejidoService.actualizarAlmacenTejido(this.almacenTejido, this.evtActualiza, this);
        }
    };
    AlmacenTejidoComponent.prototype.evtGuardar = function (almacenTejido, obj) {
        obj.almacenTejido = almacenTejido;
        obj.almacenTejidoChange.emit(obj.almacenTejido);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    AlmacenTejidoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.almacenTejidoChange.emit(obj.almacenTejido);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    AlmacenTejidoComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarAlmacenTejido();
            }
        }
        if (changes.permisosAtributos && changes.permisosAtributos.currentValue && !this.enable) {
            changes.permisosAtributos.currentValue.forEach(function (element) {
                element.permiso = 2;
                return element;
            });
        }
    };
    AlmacenTejidoComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "almacenTejidoBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "validosAlmacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_1__["AlmacenTejido"])
    ], AlmacenTejidoComponent.prototype, "almacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "almacenTejidoService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AlmacenTejidoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "almacenTejidoChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "lista_usuarioUltMovAlmacenTejidoUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlmacenTejidoComponent.prototype, "lista_idoficioDonacionAlmacenTejidoOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlmacenTejidoComponent.prototype, "enable", void 0);
    AlmacenTejidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-almacen-tejido",
            template: __webpack_require__(/*! ./almacen-tejido.component.html */ "./src/app/almacen-tejidos/almacen-tejido/almacen-tejido.component.html"),
            styles: [__webpack_require__(/*! ./almacen-tejido.component.css */ "./src/app/almacen-tejidos/almacen-tejido/almacen-tejido.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlmacenTejidoComponent);
    return AlmacenTejidoComponent;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/detalle-evaluacion/detalle-evaluacion.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/detalle-evaluacion/detalle-evaluacion.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/almacen-tejidos/detalle-evaluacion/detalle-evaluacion.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/detalle-evaluacion/detalle-evaluacion.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\"><h3>Detalle de Donante y Extracción de Tejido</h3></div>\n    <div class=\"panel-body\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4>Id Solicitud de Evaluación:</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h4>{{ data?.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal.folioSolicitud }}</h4>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <h4>Nombre(s):</h4>\n          </div>\n          <div class=\"col-md-3\">\n            <h4>{{ data?.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal.nombre }}</h4>\n          </div>\n          <div class=\"col-md-3\">\n            <h4>Primer Apellido:</h4>\n          </div>\n          <div class=\"col-md-3\">\n            <h4>{{ data?.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal.primerApellido }}</h4>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <h4>Segundo Apellido:</h4>\n          </div>\n          <div class=\"col-md-3\">\n            <h4>{{ data?.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal.segundoApellido }}</h4>\n          </div>\n          <div class=\"col-md-3\">\n            <h4>Edad:</h4>\n          </div>\n          <div class=\"col-md-3\">\n            <h4>{{ data?.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal.edad }} años</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/almacen-tejidos/detalle-evaluacion/detalle-evaluacion.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/almacen-tejidos/detalle-evaluacion/detalle-evaluacion.component.ts ***!
  \************************************************************************************/
/*! exports provided: DetalleEvaluacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleEvaluacionComponent", function() { return DetalleEvaluacionComponent; });
/* harmony import */ var _almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../almacen-evaluaciones/shared/almacen-evaluacion.service */ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.service.ts");
/* harmony import */ var _almacen_evaluaciones_shared_almacen_evaluacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../almacen-evaluaciones/shared/almacen-evaluacion */ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalleEvaluacionComponent = /** @class */ (function () {
    function DetalleEvaluacionComponent(almacenEvaluacionService) {
        this.almacenEvaluacionService = almacenEvaluacionService;
    }
    DetalleEvaluacionComponent.prototype.ngOnInit = function () {
    };
    DetalleEvaluacionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.id && changes.id.currentValue) {
            var almacen = new _almacen_evaluaciones_shared_almacen_evaluacion__WEBPACK_IMPORTED_MODULE_1__["AlmacenEvaluacion"]();
            almacen.id = changes.id.currentValue;
            this.almacenEvaluacionService.lazyAlmacenEvaluacion(almacen, this.evtBuscar, this);
        }
    };
    DetalleEvaluacionComponent.prototype.evtBuscar = function (datos, obj) {
        (datos);
        obj.data = datos;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Number)
    ], DetalleEvaluacionComponent.prototype, "id", void 0);
    DetalleEvaluacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detalle-evaluacion',
            template: __webpack_require__(/*! ./detalle-evaluacion.component.html */ "./src/app/almacen-tejidos/detalle-evaluacion/detalle-evaluacion.component.html"),
            styles: [__webpack_require__(/*! ./detalle-evaluacion.component.css */ "./src/app/almacen-tejidos/detalle-evaluacion/detalle-evaluacion.component.css")],
            providers: [_almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__["AlmacenEvaluacionService"]]
        }),
        __metadata("design:paramtypes", [_almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__["AlmacenEvaluacionService"]])
    ], DetalleEvaluacionComponent);
    return DetalleEvaluacionComponent;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/detalle/detalle.component.css":
/*!***************************************************************!*\
  !*** ./src/app/almacen-tejidos/detalle/detalle.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/almacen-tejidos/detalle/detalle.component.html":
/*!****************************************************************!*\
  !*** ./src/app/almacen-tejidos/detalle/detalle.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\"><h3>Detalle de Solicitud de Tejido</h3></div>\n  <div class=\"panel-body\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h4>Id Solicitud de Evaluación:</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h4>{{ data?.idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.folioSolicitudTejidoCorneal }}</h4>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <h4>Nombre(s):</h4>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>{{ data?.idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.nombreReceptor }}</h4>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>Primer Apellido:</h4>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>{{ data?.idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.primerApellidoReceptor }}</h4>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <h4>Segundo Apellido:</h4>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>{{ data?.idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.segundoApellidoReceptor }}</h4>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>Edad:</h4>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>{{ data?.idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.edadReceptor }} años</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/almacen-tejidos/detalle/detalle.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/almacen-tejidos/detalle/detalle.component.ts ***!
  \**************************************************************/
/*! exports provided: DetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleComponent", function() { return DetalleComponent; });
/* harmony import */ var _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts");
/* harmony import */ var _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalleComponent = /** @class */ (function () {
    function DetalleComponent(solicitudTejidoCornealAlmacenService) {
        this.solicitudTejidoCornealAlmacenService = solicitudTejidoCornealAlmacenService;
    }
    DetalleComponent.prototype.ngOnInit = function () {
    };
    DetalleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.id && changes.id.currentValue) {
            var almacen = new _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_0__["SolicitudTejidoCornealAlmacen"]();
            almacen.id = changes.id.currentValue;
            this.solicitudTejidoCornealAlmacenService.lazySolicitudTejidoCornealAlmacen(almacen, this.evtBuscar, this);
        }
    };
    DetalleComponent.prototype.evtBuscar = function (datos, obj) {
        (datos);
        obj.data = datos;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Number)
    ], DetalleComponent.prototype, "id", void 0);
    DetalleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detalle',
            template: __webpack_require__(/*! ./detalle.component.html */ "./src/app/almacen-tejidos/detalle/detalle.component.html"),
            styles: [__webpack_require__(/*! ./detalle.component.css */ "./src/app/almacen-tejidos/detalle/detalle.component.css")],
            providers: [_solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacenService"]]
        }),
        __metadata("design:paramtypes", [_solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealAlmacenService"]])
    ], DetalleComponent);
    return DetalleComponent;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/shared/almacen-tejido.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/almacen-tejidos/shared/almacen-tejido.service.ts ***!
  \******************************************************************/
/*! exports provided: AlmacenTejidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenTejidoService", function() { return AlmacenTejidoService; });
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


var AlmacenTejidoService = /** @class */ (function () {
    function AlmacenTejidoService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    AlmacenTejidoService.prototype.setAlmacenTejido = function (almacenTejido) {
        this.almacenTejido = almacenTejido;
    };
    AlmacenTejidoService.prototype.getAlmacenTejido = function () {
        return this.almacenTejido;
    };
    AlmacenTejidoService.prototype.guardarAlmacenTejido = function (almacenTejido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(almacenTejido, 'almacenTejido/guardarAlmacenTejido')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.actualizarAlmacenTejido = function (almacenTejido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(almacenTejido, 'almacenTejido/actualizarAlmacenTejido')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.eliminarAlmacenTejido = function (almacenTejido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(almacenTejido, 'solicitudTejidoCornealAlmacen/eliminarSolicitudTejidoCornealAlmacen')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidodb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'almacenTejido/getAlmacenTejido')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'almacenTejido/getAlmacenTejidos')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'almacenTejido/getAlmacenTejidosActivos')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.lazyAlmacenTejido = function (almacenTejido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(almacenTejido, 'almacenTejido/lazyAlmacenTejido')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'almacenTejido/getAlmacenTejidoById')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'almacenTejido/getAlmacenTejidosById')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'almacenTejido/getAlmacenTejidoByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'almacenTejido/getAlmacenTejidosByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByUbicacion = function (ubicacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(ubicacion, 'almacenTejido/getAlmacenTejidoByUbicacion')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByUbicacion = function (ubicacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(ubicacion, 'almacenTejido/getAlmacenTejidosByUbicacion')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'almacenTejido/getAlmacenTejidoByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'almacenTejido/getAlmacenTejidosByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByHoraRefrigeracion = function (horaRefrigeracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaRefrigeracion, 'almacenTejido/getAlmacenTejidoByHoraRefrigeracion')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByHoraRefrigeracion = function (horaRefrigeracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaRefrigeracion, 'almacenTejido/getAlmacenTejidosByHoraRefrigeracion')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'almacenTejido/getAlmacenTejidoByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'almacenTejido/getAlmacenTejidosByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByEstatusProceso = function (estatusProceso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'almacenTejido/getAlmacenTejidoByEstatusProceso')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByEstatusProceso = function (estatusProceso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'almacenTejido/getAlmacenTejidosByEstatusProceso')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByComentario = function (comentario, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(comentario, 'almacenTejido/getAlmacenTejidoByComentario')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByComentario = function (comentario, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(comentario, 'almacenTejido/getAlmacenTejidosByComentario')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByTemperaturaRefrigeracion = function (temperaturaRefrigeracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(temperaturaRefrigeracion, 'almacenTejido/getAlmacenTejidoByTemperaturaRefrigeracion')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByTemperaturaRefrigeracion = function (temperaturaRefrigeracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(temperaturaRefrigeracion, 'almacenTejido/getAlmacenTejidosByTemperaturaRefrigeracion')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'almacenTejido/getAlmacenTejidoByStatus')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'almacenTejido/getAlmacenTejidosByStatus')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'almacenTejido/getAlmacenTejidoByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'almacenTejido/getAlmacenTejidosByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidoByIdoficioDonacion = function (idoficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'almacenTejido/getAlmacenTejidoByIdoficioDonacion')
            .subscribe(function (data) {
            _evento(_this.almacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.almacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByIdoficioDonacion = function (idoficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'almacenTejido/getAlmacenTejidosByIdoficioDonacion')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'almacenTejido/custom')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosByDto = function (p_almacenTejido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_almacenTejido, 'almacenTejido/getAlmacenTejidosByDto')
            .subscribe(function (data) {
            _evento(_this.listaAlmacenTejido = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService.prototype.getAlmacenTejidosConsulta = function (p_almacenTejido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_almacenTejido, 'almacenTejido/getListaAlmacenConsulta')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            (_this.listaAlmacenTejido);
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
    AlmacenTejidoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], AlmacenTejidoService);
    return AlmacenTejidoService;
}());



/***/ }),

/***/ "./src/app/almacen-tejidos/shared/configurar-almacen-tejido.ts":
/*!*********************************************************************!*\
  !*** ./src/app/almacen-tejidos/shared/configurar-almacen-tejido.ts ***!
  \*********************************************************************/
/*! exports provided: ConfigurarAlmacenTejido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarAlmacenTejido", function() { return ConfigurarAlmacenTejido; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarAlmacenTejido = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarAlmacenTejido() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "almacenTejido";
        this.rutaLista = this.crudServiceBaseUrl + "/getAlmacenTejidos";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarAlmacenTejido";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarAlmacenTejido";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarAlmacenTejido";
        this.titulo = "Catálogo AlmacenTejido";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.almacenTejidoConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarAlmacenTejido.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarAlmacenTejido.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarAlmacenTejido.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarAlmacenTejido.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarAlmacenTejido.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarAlmacenTejido.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarAlmacenTejido;
}());



/***/ }),

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

/***/ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts ***!
  \***************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcion", function() { return SolicitudTejidoCornealRecepcion; });
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");


/**
 *
 * @author IstmoSoft
 */
var SolicitudTejidoCornealRecepcion = /** @class */ (function () {
    // atributos fin
    function SolicitudTejidoCornealRecepcion(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.estatusProceso = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idsolicitudTejidoCorneal = null;
        if (source !== null)
            this.from(source);
    }
    SolicitudTejidoCornealRecepcion.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.estatusProceso)
            this.estatusProceso = source.estatusProceso;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"](source.usuarioUltMov);
        if (source.idsolicitudTejidoCorneal)
            this.idsolicitudTejidoCorneal = new _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"](source.idsolicitudTejidoCorneal);
    };
    SolicitudTejidoCornealRecepcion.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.estatusProceso)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idsolicitudTejidoCorneal)
            return true;
        return false;
    };
    SolicitudTejidoCornealRecepcion.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.estatusProceso != null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '') == "")
            this.estatusProceso = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idsolicitudTejidoCorneal != null && typeof this.idsolicitudTejidoCorneal === 'string' && this.idsolicitudTejidoCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.idsolicitudTejidoCorneal = null;
        return this;
    };
    return SolicitudTejidoCornealRecepcion;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-tejidos-almacen-tejido-module~app-oficio-donaciones-oficio-donacion-module.js.map