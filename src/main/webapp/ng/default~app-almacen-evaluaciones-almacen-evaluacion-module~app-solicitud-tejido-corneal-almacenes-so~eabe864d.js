(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-evaluaciones-almacen-evaluacion-module~app-solicitud-tejido-corneal-almacenes-so~eabe864d"],{

/***/ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts ***!
  \***************************************************************************************/
/*! exports provided: SolicitudTejidoCornealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealService", function() { return SolicitudTejidoCornealService; });
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


var SolicitudTejidoCornealService = /** @class */ (function () {
    function SolicitudTejidoCornealService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    SolicitudTejidoCornealService.prototype.setSolicitudTejidoCorneal = function (solicitudTejidoCorneal) {
        this.solicitudTejidoCorneal = solicitudTejidoCorneal;
    };
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCorneal = function () {
        return this.solicitudTejidoCorneal;
    };
    SolicitudTejidoCornealService.prototype.guardarSolicitudTejidoCorneal = function (solicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/guardarSolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.actualizarSolicitudTejidoCorneal = function (solicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/actualizarSolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.eliminarSolicitudTejidoCorneal = function (solicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/eliminarSolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.eliminarLogicoSolicitudTejidoCorneal = function (solicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/eliminarLogicoSolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealdb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCorneal/getSolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCorneales = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCorneal/getSolicitudTejidoCorneales')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.bajaSolicitudesTejidoByID = function (par, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(par, 'solicitudTejidoCorneal/bajaSolicitudesTejidoByID')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCorneal/getSolicitudTejidoCornealesActivos')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.lazySolicitudTejidoCorneal = function (solicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/lazySolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCorneal/getSolicitudTejidoCornealById')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesById')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByEstatusProceso = function (estatusProceso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByEstatusProceso')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByEstatusProceso = function (estatusProceso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByEstatusProceso')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealBySegundoApellidoReceptor = function (segundoApellidoReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellidoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealBySegundoApellidoReceptor')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesBySegundoApellidoReceptor = function (segundoApellidoReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellidoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesBySegundoApellidoReceptor')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByFechaTentativaCirugia = function (fechaTentativaCirugia, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaTentativaCirugia, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFechaTentativaCirugia')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByFechaTentativaCirugia = function (fechaTentativaCirugia, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaTentativaCirugia, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFechaTentativaCirugia')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByNombreReceptor = function (nombreReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombreReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByNombreReceptor')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByNombreReceptor = function (nombreReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombreReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByNombreReceptor')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByNumeroExpedienteReceptor = function (numeroExpedienteReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(numeroExpedienteReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByNumeroExpedienteReceptor')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByNumeroExpedienteReceptor = function (numeroExpedienteReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(numeroExpedienteReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByNumeroExpedienteReceptor')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealBySexoReceptor = function (sexoReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(sexoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealBySexoReceptor')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesBySexoReceptor = function (sexoReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(sexoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesBySexoReceptor')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByFolioSolicitudTejidoCorneal = function (folioSolicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(folioSolicitudTejidoCorneal, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFolioSolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByFolioSolicitudTejidoCorneal = function (folioSolicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(folioSolicitudTejidoCorneal, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFolioSolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByDiagnostico = function (diagnostico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(diagnostico, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByDiagnostico')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByDiagnostico = function (diagnostico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(diagnostico, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByDiagnostico')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByEdadReceptor = function (edadReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(edadReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByEdadReceptor')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByEdadReceptor = function (edadReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(edadReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByEdadReceptor')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByCaracteristicaCornea = function (caracteristicaCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaCornea, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByCaracteristicaCornea')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByCaracteristicaCornea = function (caracteristicaCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaCornea, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByCaracteristicaCornea')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByCorneaSolicitada = function (corneaSolicitada, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(corneaSolicitada, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByCorneaSolicitada')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByCorneaSolicitada = function (corneaSolicitada, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(corneaSolicitada, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByCorneaSolicitada')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByPrimerApellidoReceptor = function (primerApellidoReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellidoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByPrimerApellidoReceptor')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByPrimerApellidoReceptor = function (primerApellidoReceptor, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellidoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByPrimerApellidoReceptor')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByStatus')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByIddoctorResponsableSolicitud = function (iddoctorResponsableSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(iddoctorResponsableSolicitud, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByIddoctorResponsableSolicitud')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByIddoctorResponsableSolicitud = function (iddoctorResponsableSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(iddoctorResponsableSolicitud, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByIddoctorResponsableSolicitud')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealByIdhospital = function (idhospital, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByIdhospital')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByIdhospital = function (idhospital, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByIdhospital')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'solicitudTejidoCorneal/custom')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getSolicitudTejidoCornealesByDto = function (p_solicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_solicitudTejidoCorneal, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByDto')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService.prototype.getDetalleSolicitudTejidoCorneales = function (p_solicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_solicitudTejidoCorneal, 'solicitudTejidoCorneal/getDetalleSolicitudTejidoCorneales')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCorneal);
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
    SolicitudTejidoCornealService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], SolicitudTejidoCornealService);
    return SolicitudTejidoCornealService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-evaluaciones-almacen-evaluacion-module~app-solicitud-tejido-corneal-almacenes-so~eabe864d.js.map