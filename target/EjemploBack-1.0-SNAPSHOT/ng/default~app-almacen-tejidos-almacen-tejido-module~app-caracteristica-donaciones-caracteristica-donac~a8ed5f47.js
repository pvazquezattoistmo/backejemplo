(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-tejidos-almacen-tejido-module~app-caracteristica-donaciones-caracteristica-donac~a8ed5f47"],{

/***/ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: SolicitudEvaluacionCornealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEvaluacionCornealService", function() { return SolicitudEvaluacionCornealService; });
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


var SolicitudEvaluacionCornealService = /** @class */ (function () {
    function SolicitudEvaluacionCornealService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    SolicitudEvaluacionCornealService.prototype.setSolicitudEvaluacionCorneal = function (solicitudEvaluacionCorneal) {
        this.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
    };
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCorneal = function () {
        return this.solicitudEvaluacionCorneal;
    };
    SolicitudEvaluacionCornealService.prototype.guardarSolicitudEvaluacionCorneal = function (solicitudEvaluacionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/guardarSolicitudEvaluacionCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.actualizarSolicitudEvaluacionCorneal = function (solicitudEvaluacionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/actualizarSolicitudEvaluacionCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.eliminarSolicitudEvaluacionCorneal = function (solicitudEvaluacionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/eliminarSolicitudEvaluacionCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealdb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudesEvaluacionByID = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudEvaluacionCorneal/getSolicitudesEvaluacionByID')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.bajaSolicitudesEvaluacionByID = function (par, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(par, 'solicitudEvaluacionCorneal/bajaSolicitudesEvaluacionByID')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCorneales = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCorneales')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesActivos')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.lazySolicitudEvaluacionCorneal = function (solicitudEvaluacionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/lazySolicitudEvaluacionCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealById')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesById')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByFechaMuerte = function (fechaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFechaMuerte')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByFechaMuerte = function (fechaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFechaMuerte')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByEstatusProceso = function (estatusProceso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByEstatusProceso')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByEstatusProceso = function (estatusProceso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByEstatusProceso')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByNombre')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByNombre')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByNumeroExpediente = function (numeroExpediente, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(numeroExpediente, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByNumeroExpediente')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByNumeroExpediente = function (numeroExpediente, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(numeroExpediente, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByNumeroExpediente')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByEdad = function (edad, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(edad, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByEdad')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByEdad = function (edad, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(edad, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByEdad')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByConservacionTemperaturaAmbiente = function (conservacionTemperaturaAmbiente, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conservacionTemperaturaAmbiente, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByConservacionTemperaturaAmbiente')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByConservacionTemperaturaAmbiente = function (conservacionTemperaturaAmbiente, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conservacionTemperaturaAmbiente, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByConservacionTemperaturaAmbiente')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByHoraInicioRefrigracion = function (horaInicioRefrigracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaInicioRefrigracion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByHoraInicioRefrigracion')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByHoraInicioRefrigracion = function (horaInicioRefrigracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaInicioRefrigracion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByHoraInicioRefrigracion')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByFolioSolicitud = function (folioSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(folioSolicitud, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFolioSolicitud')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByFolioSolicitud = function (folioSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(folioSolicitud, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFolioSolicitud')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByHoraMuerte = function (horaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByHoraMuerte')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByHoraMuerte = function (horaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByHoraMuerte')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByTemperaturaRefrigeracion = function (temperaturaRefrigeracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(temperaturaRefrigeracion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByTemperaturaRefrigeracion')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByTemperaturaRefrigeracion = function (temperaturaRefrigeracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(temperaturaRefrigeracion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByTemperaturaRefrigeracion')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByStatus')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealByIdcausaMuerte = function (idcausaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idcausaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByIdcausaMuerte')
            .subscribe(function (data) {
            _evento(_this.solicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByIdcausaMuerte = function (idcausaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idcausaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByIdcausaMuerte')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'solicitudEvaluacionCorneal/custom')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService.prototype.getSolicitudEvaluacionCornealesByDto = function (p_solicitudEvaluacionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByDto')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudEvaluacionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudEvaluacionCorneal);
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
    SolicitudEvaluacionCornealService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], SolicitudEvaluacionCornealService);
    return SolicitudEvaluacionCornealService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-tejidos-almacen-tejido-module~app-caracteristica-donaciones-caracteristica-donac~a8ed5f47.js.map