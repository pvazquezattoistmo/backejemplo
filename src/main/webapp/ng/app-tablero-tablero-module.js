(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-tablero-tablero-module"],{

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

/***/ "./src/app/tablero/principal/principal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tablero/principal/principal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tablero/principal/principal.component.html":
/*!************************************************************!*\
  !*** ./src/app/tablero/principal/principal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-tejidos-procuracion></app-tejidos-procuracion>\n\n<app-tejidos-solicitados></app-tejidos-solicitados>\n\n"

/***/ }),

/***/ "./src/app/tablero/principal/principal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tablero/principal/principal.component.ts ***!
  \**********************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/tablero/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/tablero/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/tablero/tablero-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tablero/tablero-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TableroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableroRoutingModule", function() { return TableroRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/tablero/principal/principal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'tablero', component: _principal_principal_component__WEBPACK_IMPORTED_MODULE_2__["PrincipalComponent"] },
];
var TableroRoutingModule = /** @class */ (function () {
    function TableroRoutingModule() {
    }
    TableroRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TableroRoutingModule);
    return TableroRoutingModule;
}());



/***/ }),

/***/ "./src/app/tablero/tablero.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tablero/tablero.module.ts ***!
  \*******************************************/
/*! exports provided: TableroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableroModule", function() { return TableroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tejidos_solicitados_tejidos_solicitados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tejidos-solicitados/tejidos-solicitados.component */ "./src/app/tablero/tejidos-solicitados/tejidos-solicitados.component.ts");
/* harmony import */ var _tejidos_procuracion_tejidos_procuracion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tejidos-procuracion/tejidos-procuracion.component */ "./src/app/tablero/tejidos-procuracion/tejidos-procuracion.component.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/tablero/principal/principal.component.ts");
/* harmony import */ var _tablero_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tablero-routing.module */ "./src/app/tablero/tablero-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TableroModule = /** @class */ (function () {
    function TableroModule() {
    }
    TableroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tablero_routing_module__WEBPACK_IMPORTED_MODULE_5__["TableroRoutingModule"]],
            declarations: [_tejidos_solicitados_tejidos_solicitados_component__WEBPACK_IMPORTED_MODULE_2__["TejidosSolicitadosComponent"], _tejidos_procuracion_tejidos_procuracion_component__WEBPACK_IMPORTED_MODULE_3__["TejidosProcuracionComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_4__["PrincipalComponent"]],
            exports: [_tejidos_solicitados_tejidos_solicitados_component__WEBPACK_IMPORTED_MODULE_2__["TejidosSolicitadosComponent"], _tejidos_procuracion_tejidos_procuracion_component__WEBPACK_IMPORTED_MODULE_3__["TejidosProcuracionComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_4__["PrincipalComponent"]]
        })
    ], TableroModule);
    return TableroModule;
}());



/***/ }),

/***/ "./src/app/tablero/tejidos-procuracion/tejidos-procuracion.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/tablero/tejidos-procuracion/tejidos-procuracion.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tablero/tejidos-procuracion/tejidos-procuracion.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/tablero/tejidos-procuracion/tejidos-procuracion.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <div class=\"row\">\n        <h3>TABLERO DE BANCO DE TEJIDOS DE CÓRNEAS</h3>\n    </div>\n\n    <div class=\"row\">\n        <h4>TEJIDOS EN PROCURACIÓN</h4>\n    </div>\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-lg-2\"></div>\n        <div class=\"col-lg-8\">\n            <table class=\"table table-bordered table-striped text-center\">\n                <thead>\n                    <tr>\n                        <th><u><P class=\"text-center\">RECEPCIÓN EN BTC</P></u></th>\n                        <th><u><P class=\"text-center\">ANÁLISIS DE CALIDAD EN BTC</P></u></th>\n                        <th><u><P class=\"text-center\">INGRESO EN ALMACÉN DE BTC</P></u></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><button type=\"button\" class=\"btn btn-link\" (click)=\"muestraModal1()\">{{datostp.recepcion.total}}</button></td>\n                        <td><button type=\"button\" class=\"btn btn-link\" (click)=\"muestraModal2()\">{{datostp.analisis.total}}</button></td>\n                        <td><button type=\"button\" class=\"btn btn-link\" (click)=\"muestraModal3()\">{{datostp.ingreso.total}}</button></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-lg-2\"></div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-bordered table-striped text-center\">\n                    <thead>\n                        <tr>\n                            <th class=\"text-center\">CANTIDAD DE TAREAS</th>\n                            <th class=\"text-center\">ESTATUS DE LA TAREA</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let detalle of datostp.recepcion.detalles\">\n                            <td>{{detalle.cantidad}}</td>\n                            <td>{{detalle.tarea}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!--Fin Modal-->\n\n<!-- Modal 2-->\n<div id=\"myModal2\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-bordered table-striped text-center\">\n                    <thead>\n                        <tr>\n                            <th class=\"text-center\">CANTIDAD DE TAREAS</th>\n                            <th class=\"text-center\">ESTATUS DE LA TAREA</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let detalle of datostp.analisis.detalles\">\n                            <td>{{detalle.cantidad}}</td>\n                            <td>{{detalle.tarea}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!--Fin Modal 2-->\n<!-- Modal 3-->\n<div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-bordered table-striped text-center\">\n                    <thead>\n                        <tr>\n                            <th class=\"text-center\">CANTIDAD DE TAREAS</th>\n                            <th class=\"text-center\">ESTATUS DE LA TAREA</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let detalle of datostp.ingreso.detalles\">\n                            <td>{{detalle.cantidad}}</td>\n                            <td>{{detalle.tarea}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!--Fin Modal 3-->\n"

/***/ }),

/***/ "./src/app/tablero/tejidos-procuracion/tejidos-procuracion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tablero/tejidos-procuracion/tejidos-procuracion.component.ts ***!
  \******************************************************************************/
/*! exports provided: TejidosProcuracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TejidosProcuracionComponent", function() { return TejidosProcuracionComponent; });
/* harmony import */ var _almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../almacen-evaluaciones/shared/almacen-evaluacion.service */ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.service.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../evaluacion-solicitudes/shared/evaluacion-solicitud.service */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TejidosProcuracionComponent = /** @class */ (function () {
    function TejidosProcuracionComponent(recepcionSolicitudEvaluacionService, evaluacionSolicitudService, almacenEvaluacionService) {
        this.recepcionSolicitudEvaluacionService = recepcionSolicitudEvaluacionService;
        this.evaluacionSolicitudService = evaluacionSolicitudService;
        this.almacenEvaluacionService = almacenEvaluacionService;
        this.datostp = {
            recepcion: {
                total: 0,
                detalles: []
            },
            analisis: {
                total: 0,
                detalles: []
            },
            ingreso: {
                total: 0,
                detalles: []
            }
        };
    }
    TejidosProcuracionComponent.prototype.muestraModal1 = function () {
        $("#myModal").modal("show");
    };
    TejidosProcuracionComponent.prototype.muestraModal2 = function () {
        $("#myModal2").modal("show");
    };
    TejidosProcuracionComponent.prototype.muestraModal3 = function () {
        $("#myModal3").modal("show");
    };
    TejidosProcuracionComponent.prototype.ngOnInit = function () {
        this.recepcionSolicitudEvaluacionService.getRecepcionSolicitudEvaluacionesByEstatusProceso(2, this.evnRecepcion, this);
        this.evaluacionSolicitudService.getEvaluacionSolicitudesByEstatusProceso(3, this.evnEvaluacion, this);
        this.almacenEvaluacionService.getAlmacenEvaluacionesByEstatusProceso(this.evnAlmacen, this);
    };
    TejidosProcuracionComponent.prototype.evnRecepcion = function (recepcion, obj) {
        var totalRegistro = 0;
        var totalOficio = 0;
        recepcion.forEach(function (element) {
            if (element.oficioDonacion) {
                totalOficio++;
            }
            else {
                totalRegistro++;
            }
        });
        obj.datostp.recepcion.total = recepcion.length;
        obj.datostp.recepcion.detalles.push({
            cantidad: totalRegistro,
            tarea: "Registro de Recepción"
        });
        obj.datostp.recepcion.detalles.push({
            cantidad: totalOficio,
            tarea: "Oficio de Donación"
        });
    };
    TejidosProcuracionComponent.prototype.evnEvaluacion = function (evaluacion, obj) {
        var totalEstudio = 0;
        var totalLampara = 0;
        var totalConteo = 0;
        evaluacion.forEach(function (element) {
            if (element.conteosCelular) {
                totalConteo++;
            }
            else if (element.lamparasHendidura) {
                totalLampara++;
            }
            else {
                totalEstudio++;
            }
        });
        obj.datostp.analisis.total = evaluacion.length;
        obj.datostp.analisis.detalles.push({
            cantidad: totalEstudio,
            tarea: "Estudios de Laboratorio"
        });
        obj.datostp.analisis.detalles.push({
            cantidad: totalLampara,
            tarea: "Revisión de lampara de hendidura"
        });
        obj.datostp.analisis.detalles.push({
            cantidad: totalConteo,
            tarea: "Conteo celular"
        });
    };
    TejidosProcuracionComponent.prototype.evnAlmacen = function (almacen, obj) {
        var totalIngreso = 0;
        var totalSano = 0;
        var totalParche = 0;
        almacen.forEach(function (element) {
            if (element.estatusProceso === 4) {
                totalIngreso++;
            }
            else if (element.evaluacionSolicitud.conteosCelular[0].valoracionFinalEndotelio == 1) {
                totalSano++;
            }
            else {
                totalParche++;
            }
        });
        obj.datostp.ingreso.total = almacen.length;
        obj.datostp.ingreso.detalles.push({
            cantidad: totalIngreso,
            tarea: "Ingreso"
        });
        obj.datostp.ingreso.detalles.push({
            cantidad: totalSano,
            tarea: "Almacén Tejido Sano"
        });
        obj.datostp.ingreso.detalles.push({
            cantidad: totalParche,
            tarea: "Almacén de Parche"
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], TejidosProcuracionComponent.prototype, "datostp", void 0);
    TejidosProcuracionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-tejidos-procuracion",
            template: __webpack_require__(/*! ./tejidos-procuracion.component.html */ "./src/app/tablero/tejidos-procuracion/tejidos-procuracion.component.html"),
            styles: [__webpack_require__(/*! ./tejidos-procuracion.component.css */ "./src/app/tablero/tejidos-procuracion/tejidos-procuracion.component.css")],
            providers: [
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_2__["RecepcionSolicitudEvaluacionService"],
                _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_1__["EvaluacionSolicitudService"],
                _almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__["AlmacenEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_2__["RecepcionSolicitudEvaluacionService"],
            _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_1__["EvaluacionSolicitudService"],
            _almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__["AlmacenEvaluacionService"]])
    ], TejidosProcuracionComponent);
    return TejidosProcuracionComponent;
}());



/***/ }),

/***/ "./src/app/tablero/tejidos-solicitados/tejidos-solicitados.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/tablero/tejidos-solicitados/tejidos-solicitados.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tablero/tejidos-solicitados/tejidos-solicitados.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/tablero/tejidos-solicitados/tejidos-solicitados.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h3>TABLERO DE RECEPCIÓN DE SOLICITUDES EN BTC</h3>\n    <div class=\"row\">\n        <h4>TEJIDOS SOLICITADOS</h4>\n    </div>\n    <br><br>\n\n    <div class=\"row\">\n        <div class=\"col-lg-2\"></div>\n        <div class=\"col-lg-8\" style=\"text-align: center\">\n            <table class=\"table table-bordered table-striped\">\n                <thead>\n                    <tr>\n                        <th><u><P class=\"text-center\">SOLICITUDES DE TEJIDOS EN BTC</P></u></th>\n                        <th><u><P class=\"text-center\">SOLICITUDES ATENDIDAS CON ÉXITO</P></u></th>\n                        <th><u><P class=\"text-center\">SOLICITUDES NEGADAS POR FALTA DE EXISTENCIA</P></u></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <P>{{datosts.solicitud.total}}</P>\n                        </td>\n                        <td><button type=\"button\" class=\"btn btn-link\" (click)=\"muestraModal2()\">{{datosts.exito.total}}</button></td>\n                        <td><button type=\"button\" class=\"btn btn-link\" (click)=\"muestraModal1()\">{{datosts.negados.total}}</button></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-lg-2\"></div>\n    </div>\n    <!--Inicio de uso del modal-->\n    <!--Inicio del modal-->\n    <div class=\"modal fade\" id=\"modal\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <table class=\"table table-bordered table-striped\">\n                        <thead>\n                            <tr>\n                                <th>CANTIDAD DE TAREAS</th>\n                                <th>SiRNT</th>\n                                <th>HOSPITAL AL QUE FUE NEGADO</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let detalle of datosts.solicitud.detalles\">\n                                <td>{{detalle.cantidad}}</td>\n                                <td>{{detalle.sirnt}}</td>\n                                <td>{{detalle.hospital}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--Fin del modal-->\n    <!--Inicio del modal 2-->\n    <div class=\"modal fade\" id=\"modal2\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <table class=\"table table-bordered table-striped\">\n                        <thead>\n                            <tr>\n                                <th>CANTIDAD DE TAREAS</th>\n                                <th>SiRNT</th>\n                                <th>HOSPITAL AL QUE FUE ASIGNADO</th>\n                                <th>TIPO HOSPITAL</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let detalle of datosts.exito.detalles\">\n                                <td>{{detalle.cantidad}}</td>\n                                <td>{{detalle.sirnt}}</td>\n                                <td>{{detalle.hospital}}</td>\n                                <td>{{detalle.tipoHospital == 1 ? \"Red ISSSTE\": \"Externo\"}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--Fin del modal 2-->\n    <!--Inicio del modal 3-->\n    <div class=\"modal fade\" id=\"modal3\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <table class=\"table table-bordered table-striped\">\n                        <thead>\n                            <tr>\n                                <th>CANTIDAD DE TAREAS</th>\n                                <th>SiRNT</th>\n                                <th>HOSPITAL AL QUE FUE ASIGNADO</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let detalle of datosts.negados.detalles\">\n                                <td>{{detalle.cantidad}}</td>\n                                <td>{{detalle.sirnt}}</td>\n                                <td>{{detalle.hospital}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--Fin del modal 3-->\n    <!--Fin del modal-->\n"

/***/ }),

/***/ "./src/app/tablero/tejidos-solicitados/tejidos-solicitados.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tablero/tejidos-solicitados/tejidos-solicitados.component.ts ***!
  \******************************************************************************/
/*! exports provided: TejidosSolicitadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TejidosSolicitadosComponent", function() { return TejidosSolicitadosComponent; });
/* harmony import */ var _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service.ts");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts");
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



var TejidosSolicitadosComponent = /** @class */ (function () {
    function TejidosSolicitadosComponent(solicitudTejidoCornealService, solicitudTejidoCornealAlmacenService) {
        this.solicitudTejidoCornealService = solicitudTejidoCornealService;
        this.solicitudTejidoCornealAlmacenService = solicitudTejidoCornealAlmacenService;
        this.datosts = {
            solicitud: {
                total: 0,
                detalles: []
            },
            exito: {
                total: 0,
                detalles: []
            },
            negados: {
                total: 0,
                detalles: []
            }
        };
    }
    TejidosSolicitadosComponent.prototype.muestraModal1 = function () {
        $("#modal").modal("show");
    };
    TejidosSolicitadosComponent.prototype.muestraModal2 = function () {
        $("#modal2").modal("show");
    };
    TejidosSolicitadosComponent.prototype.muestraModal3 = function () {
        $("modal3").modal("show");
    };
    TejidosSolicitadosComponent.prototype.ngOnInit = function () {
        this.solicitudTejidoCornealService.getSolicitudTejidoCornealesActivos(this.evnSolicitud, this);
        this.solicitudTejidoCornealAlmacenService.getSolicitudTejidoCornealAlmacenesTablero(this.evnAlmacen, this);
    };
    TejidosSolicitadosComponent.prototype.evnSolicitud = function (solicitud, obj) {
        obj.datosts.solicitud.total = solicitud.length;
    };
    TejidosSolicitadosComponent.prototype.evnAlmacen = function (almacen, obj) {
        var hospitalesExito = [];
        var hospitalesNegado = [];
        var totalExito = 0;
        var totalNegado = 0;
        (almacen);
        almacen.forEach(function (element) {
            if (element.estatusProceso === 5) {
                if (element.tejidoExistente === 1) {
                    totalExito++;
                    hospitalesExito.push(element);
                }
                else {
                    totalNegado++;
                    hospitalesNegado.push(element);
                }
            }
        });
        obj.datosts.exito.total = totalExito;
        obj.datosts.negados.total = totalNegado;
        obj.group(hospitalesExito).forEach(function (element) {
            obj.datosts.exito.detalles.push({ tipoHospital: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.redIssste, cantidad: element.list.length, sirnt: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.rnt, hospital: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.nombre });
        });
        obj.group(hospitalesNegado).forEach(function (element) {
            obj.datosts.negados.detalles.push({ cantidad: element.list.length, sirnt: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.rnt, hospital: element.list[0].idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.nombre });
        });
    };
    TejidosSolicitadosComponent.prototype.group = function (almacen) {
        var events = [];
        var groupedElements = {};
        almacen.forEach(function (element) {
            var group = element.idsolicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal.idhospital.id;
            if (!(group in groupedElements)) {
                groupedElements[group] = [];
            }
            groupedElements[group].push(element);
        });
        for (var prop in groupedElements) {
            if (groupedElements.hasOwnProperty(prop)) {
                events.push({
                    key: prop,
                    list: groupedElements[prop]
                });
            }
        }
        return events;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], TejidosSolicitadosComponent.prototype, "datosts", void 0);
    TejidosSolicitadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-tejidos-solicitados",
            template: __webpack_require__(/*! ./tejidos-solicitados.component.html */ "./src/app/tablero/tejidos-solicitados/tejidos-solicitados.component.html"),
            styles: [__webpack_require__(/*! ./tejidos-solicitados.component.css */ "./src/app/tablero/tejidos-solicitados/tejidos-solicitados.component.css")],
            providers: [
                _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealService"],
                _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_0__["SolicitudTejidoCornealAlmacenService"]
            ]
        }),
        __metadata("design:paramtypes", [_solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealService"],
            _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_0__["SolicitudTejidoCornealAlmacenService"]])
    ], TejidosSolicitadosComponent);
    return TejidosSolicitadosComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-tablero-tablero-module.js.map