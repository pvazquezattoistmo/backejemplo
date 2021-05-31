(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-evaluaciones-almacen-evaluacion-module~app-conteo-celulares-conteo-celular-modul~44690e87"],{

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

/***/ "./src/app/conteo-celulares/shared/conteo-celular.ts":
/*!***********************************************************!*\
  !*** ./src/app/conteo-celulares/shared/conteo-celular.ts ***!
  \***********************************************************/
/*! exports provided: ConteoCelular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCelular", function() { return ConteoCelular; });
/**
 *
 * @author IstmoSoft
 */
var ConteoCelular = /** @class */ (function () {
    // atributos fin
    function ConteoCelular(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.idnumeroCelula = null;
        this.fechaBaja = null;
        this.discontinuidad = null;
        this.normalMenor33 = null;
        this.numeroCampo = null;
        this.gutta = null;
        this.hexagonalidad = null;
        this.responsableMicroscopio = null;
        this.paquimetria = null;
        this.homogeneidad = null;
        this.zonaCelular = null;
        this.cvtamano = null;
        this.otraDescripcion = null;
        this.plemorfismo = null;
        this.numeroCelular = null;
        this.otra = null;
        this.pliegue = null;
        this.fechaRegistro = null;
        this.mayor60 = null;
        this.deposito = null;
        this.observacion = null;
        this.idpaquimetria = null;
        this.polimegatismo = null;
        this.fechaActualizacion = null;
        this.estriaRotura = null;
        this.valoracionFinalEndotelio = null;
        this.valoracion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idevaluacionSolicitud = null;
        this.tipoCornea = null;
        if (source !== null)
            this.from(source);
    }
    ConteoCelular.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.idnumeroCelula)
            this.idnumeroCelula = source.idnumeroCelula;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.discontinuidad)
            this.discontinuidad = source.discontinuidad;
        if (source.normalMenor33)
            this.normalMenor33 = source.normalMenor33;
        if (source.numeroCampo)
            this.numeroCampo = source.numeroCampo;
        if (source.gutta)
            this.gutta = source.gutta;
        if (source.hexagonalidad)
            this.hexagonalidad = source.hexagonalidad;
        if (source.responsableMicroscopio)
            this.responsableMicroscopio = source.responsableMicroscopio;
        if (source.paquimetria)
            this.paquimetria = source.paquimetria;
        if (source.homogeneidad)
            this.homogeneidad = source.homogeneidad;
        if (source.zonaCelular)
            this.zonaCelular = source.zonaCelular;
        if (source.cvtamano)
            this.cvtamano = source.cvtamano;
        if (source.otraDescripcion)
            this.otraDescripcion = source.otraDescripcion;
        if (source.plemorfismo)
            this.plemorfismo = source.plemorfismo;
        if (source.numeroCelular)
            this.numeroCelular = source.numeroCelular;
        if (source.otra)
            this.otra = source.otra;
        if (source.pliegue)
            this.pliegue = source.pliegue;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.mayor60)
            this.mayor60 = source.mayor60;
        if (source.deposito)
            this.deposito = source.deposito;
        if (source.idpaquimetria)
            this.idpaquimetria = source.idpaquimetria;
        if (source.polimegatismo)
            this.polimegatismo = source.polimegatismo;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.estriaRotura)
            this.estriaRotura = source.estriaRotura;
        if (source.valoracionFinalEndotelio)
            this.valoracionFinalEndotelio = source.valoracionFinalEndotelio;
        if (source.valoracion)
            this.valoracion = source.valoracion;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idevaluacionSolicitud)
            this.idevaluacionSolicitud = source.idevaluacionSolicitud;
    };
    ConteoCelular.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.idnumeroCelula)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.discontinuidad)
            return true;
        if (this.normalMenor33)
            return true;
        if (this.numeroCampo)
            return true;
        if (this.gutta)
            return true;
        if (this.hexagonalidad)
            return true;
        if (this.responsableMicroscopio)
            return true;
        if (this.paquimetria)
            return true;
        if (this.homogeneidad)
            return true;
        if (this.zonaCelular)
            return true;
        if (this.cvtamano)
            return true;
        if (this.otraDescripcion)
            return true;
        if (this.plemorfismo)
            return true;
        if (this.numeroCelular)
            return true;
        if (this.otra)
            return true;
        if (this.pliegue)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.mayor60)
            return true;
        if (this.deposito)
            return true;
        return true;
        if (this.polimegatismo)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.estriaRotura)
            return true;
        return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idevaluacionSolicitud)
            return true;
        return false;
    };
    ConteoCelular.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.idnumeroCelula != null && typeof this.idnumeroCelula === 'string' && this.idnumeroCelula.replace(/^\s+|\s+$/g, '') == "")
            this.idnumeroCelula = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.discontinuidad != null && typeof this.discontinuidad === 'string' && this.discontinuidad.replace(/^\s+|\s+$/g, '') == "")
            this.discontinuidad = null;
        if (this.normalMenor33 != null && typeof this.normalMenor33 === 'string' && this.normalMenor33.replace(/^\s+|\s+$/g, '') == "")
            this.normalMenor33 = null;
        if (this.numeroCampo != null && typeof this.numeroCampo === 'string' && this.numeroCampo.replace(/^\s+|\s+$/g, '') == "")
            this.numeroCampo = null;
        if (this.gutta != null && typeof this.gutta === 'string' && this.gutta.replace(/^\s+|\s+$/g, '') == "")
            this.gutta = null;
        if (this.hexagonalidad != null && typeof this.hexagonalidad === 'string' && this.hexagonalidad.replace(/^\s+|\s+$/g, '') == "")
            this.hexagonalidad = null;
        if (this.responsableMicroscopio != null && typeof this.responsableMicroscopio === 'string' && this.responsableMicroscopio.replace(/^\s+|\s+$/g, '') == "")
            this.responsableMicroscopio = null;
        if (this.paquimetria != null && typeof this.paquimetria === 'string' && this.paquimetria.replace(/^\s+|\s+$/g, '') == "")
            this.paquimetria = null;
        if (this.homogeneidad != null && typeof this.homogeneidad === 'string' && this.homogeneidad.replace(/^\s+|\s+$/g, '') == "")
            this.homogeneidad = null;
        if (this.zonaCelular != null && typeof this.zonaCelular === 'string' && this.zonaCelular.replace(/^\s+|\s+$/g, '') == "")
            this.zonaCelular = null;
        if (this.cvtamano != null && typeof this.cvtamano === 'string' && this.cvtamano.replace(/^\s+|\s+$/g, '') == "")
            this.cvtamano = null;
        if (this.otraDescripcion != null && typeof this.otraDescripcion === 'string' && this.otraDescripcion.replace(/^\s+|\s+$/g, '') == "")
            this.otraDescripcion = null;
        if (this.plemorfismo != null && typeof this.plemorfismo === 'string' && this.plemorfismo.replace(/^\s+|\s+$/g, '') == "")
            this.plemorfismo = null;
        if (this.numeroCelular != null && typeof this.numeroCelular === 'string' && this.numeroCelular.replace(/^\s+|\s+$/g, '') == "")
            this.numeroCelular = null;
        if (this.otra != null && typeof this.otra === 'string' && this.otra.replace(/^\s+|\s+$/g, '') == "")
            this.otra = null;
        if (this.pliegue != null && typeof this.pliegue === 'string' && this.pliegue.replace(/^\s+|\s+$/g, '') == "")
            this.pliegue = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.mayor60 != null && typeof this.mayor60 === 'string' && this.mayor60.replace(/^\s+|\s+$/g, '') == "")
            this.mayor60 = null;
        if (this.deposito != null && typeof this.deposito === 'string' && this.deposito.replace(/^\s+|\s+$/g, '') == "")
            this.deposito = null;
        if (this.idpaquimetria != null && typeof this.idpaquimetria === 'string' && this.idpaquimetria.replace(/^\s+|\s+$/g, '') == "")
            this.idpaquimetria = null;
        if (this.polimegatismo != null && typeof this.polimegatismo === 'string' && this.polimegatismo.replace(/^\s+|\s+$/g, '') == "")
            this.polimegatismo = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.estriaRotura != null && typeof this.estriaRotura === 'string' && this.estriaRotura.replace(/^\s+|\s+$/g, '') == "")
            this.estriaRotura = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idevaluacionSolicitud != null && typeof this.idevaluacionSolicitud === 'string' && this.idevaluacionSolicitud.replace(/^\s+|\s+$/g, '') == "")
            this.idevaluacionSolicitud = null;
        return this;
    };
    return ConteoCelular;
}());



/***/ }),

/***/ "./src/app/desglose-corneas/shared/desglose-cornea.ts":
/*!************************************************************!*\
  !*** ./src/app/desglose-corneas/shared/desglose-cornea.ts ***!
  \************************************************************/
/*! exports provided: DesgloseCornea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgloseCornea", function() { return DesgloseCornea; });
/**
 *
 * @author IstmoSoft
 */
var DesgloseCornea = /** @class */ (function () {
    // atributos fin
    function DesgloseCornea(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.descripcion = null;
        this.idadicional = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idevaluacionSolicitud = null;
        this.tipoCornea = null;
        if (source !== null)
            this.from(source);
    }
    DesgloseCornea.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.descripcion)
            this.descripcion = source.descripcion;
        if (source.idadicional)
            this.idadicional = source.idadicional;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idevaluacionSolicitud)
            this.idevaluacionSolicitud = source.idevaluacionSolicitud;
    };
    DesgloseCornea.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.descripcion)
            return true;
        if (this.idadicional)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idevaluacionSolicitud)
            return true;
        return false;
    };
    DesgloseCornea.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.descripcion != null && typeof this.descripcion === 'string' && this.descripcion.replace(/^\s+|\s+$/g, '') == "")
            this.descripcion = null;
        if (this.idadicional != null && typeof this.idadicional === 'string' && this.idadicional.replace(/^\s+|\s+$/g, '') == "")
            this.idadicional = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idevaluacionSolicitud != null && typeof this.idevaluacionSolicitud === 'string' && this.idevaluacionSolicitud.replace(/^\s+|\s+$/g, '') == "")
            this.idevaluacionSolicitud = null;
        return this;
    };
    return DesgloseCornea;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-evaluaciones-almacen-evaluacion-module~app-conteo-celulares-conteo-celular-modul~44690e87.js.map