(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~3a045e28"],{

/***/ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts ***!
  \*******************************************************************************/
/*! exports provided: EvaluacionSolicitudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitudService", function() { return EvaluacionSolicitudService; });
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


var EvaluacionSolicitudService = /** @class */ (function () {
    function EvaluacionSolicitudService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    EvaluacionSolicitudService.prototype.setEvaluacionSolicitud = function (evaluacionSolicitud) {
        this.evaluacionSolicitud = evaluacionSolicitud;
    };
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitud = function () {
        return this.evaluacionSolicitud;
    };
    EvaluacionSolicitudService.prototype.guardarEvaluacionSolicitud = function (evaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(evaluacionSolicitud, 'evaluacionSolicitud/guardarEvaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.actualizarEvaluacionSolicitud = function (evaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(evaluacionSolicitud, 'evaluacionSolicitud/actualizarEvaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.eliminarEvaluacionSolicitud = function (evaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(evaluacionSolicitud, 'evaluacionSolicitud/eliminarEvaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicituddb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'evaluacionSolicitud/getEvaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudes = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'evaluacionSolicitud/getEvaluacionSolicitudes')
            .subscribe(function (data) {
            _evento(_this.listaEvaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEvaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'evaluacionSolicitud/getEvaluacionSolicitudesActivos')
            .subscribe(function (data) {
            _evento(_this.listaEvaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEvaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.lazyEvaluacionSolicitud = function (evaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(evaluacionSolicitud, 'evaluacionSolicitud/lazyEvaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'evaluacionSolicitud/getEvaluacionSolicitudById')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'evaluacionSolicitud/getEvaluacionSolicitudesById')
            .subscribe(function (data) {
            _evento(_this.listaEvaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEvaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'evaluacionSolicitud/getEvaluacionSolicitudByStatus')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'evaluacionSolicitud/getEvaluacionSolicitudesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaEvaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEvaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'evaluacionSolicitud/getEvaluacionSolicitudByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'evaluacionSolicitud/getEvaluacionSolicitudesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaEvaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEvaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudByIdrecepcionSolicitudEvaluacion = function (idrecepcionSolicitudEvaluacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idrecepcionSolicitudEvaluacion, 'evaluacionSolicitud/getEvaluacionSolicitudByIdrecepcionSolicitudEvaluacion')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudesByIdrecepcionSolicitudEvaluacion = function (idrecepcionSolicitudEvaluacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idrecepcionSolicitudEvaluacion, 'evaluacionSolicitud/getEvaluacionSolicitudesByIdrecepcionSolicitudEvaluacion')
            .subscribe(function (data) {
            _evento(_this.listaEvaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEvaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'evaluacionSolicitud/custom')
            .subscribe(function (data) {
            _evento(_this.listaEvaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEvaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudesByDto = function (p_evaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_evaluacionSolicitud, 'evaluacionSolicitud/getEvaluacionSolicitudesByDto')
            .subscribe(function (data) {
            _evento(_this.listaEvaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEvaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getTramitesIngresados = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'evaluacionSolicitud/getTramitesIngresados')
            .subscribe(function (data) {
            _evento(_this.listaEvaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEvaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.bajaEvaluacionSolicitudByID = function (par, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(par, 'evaluacionSolicitud/bajaEvaluacionSolicitudByID')
            .subscribe(function (data) {
            _evento(_this.evaluacionSolicitud = _this.globalesService.util.jsonOk(data), objeto);
            (_this.evaluacionSolicitud);
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
    EvaluacionSolicitudService.prototype.getEvaluacionSolicitudesByEstatusProceso = function (estatusProceso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'evaluacionSolicitud/getEvaluacionSolicitudesByEstatusProceso')
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
    EvaluacionSolicitudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], EvaluacionSolicitudService);
    return EvaluacionSolicitudService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~3a045e28.js.map