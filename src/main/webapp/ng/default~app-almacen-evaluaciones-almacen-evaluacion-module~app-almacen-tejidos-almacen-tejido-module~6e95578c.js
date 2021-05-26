(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-evaluaciones-almacen-evaluacion-module~app-almacen-tejidos-almacen-tejido-module~6e95578c"],{

/***/ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacenService", function() { return SolicitudTejidoCornealAlmacenService; });
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


var SolicitudTejidoCornealAlmacenService = /** @class */ (function () {
    function SolicitudTejidoCornealAlmacenService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    SolicitudTejidoCornealAlmacenService.prototype.setSolicitudTejidoCornealAlmacen = function (solicitudTejidoCornealAlmacen) {
        this.solicitudTejidoCornealAlmacen = solicitudTejidoCornealAlmacen;
    };
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacen = function () {
        return this.solicitudTejidoCornealAlmacen;
    };
    SolicitudTejidoCornealAlmacenService.prototype.guardarSolicitudTejidoCornealAlmacen = function (solicitudTejidoCornealAlmacen, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/guardarSolicitudTejidoCornealAlmacen')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.actualizarSolicitudTejidoCornealAlmacen = function (solicitudTejidoCornealAlmacen, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/actualizarSolicitudTejidoCornealAlmacen')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.eliminarSolicitudTejidoCornealAlmacen = function (solicitudTejidoCornealAlmacen, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/eliminarSolicitudTejidoCornealAlmacen')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacendb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacen')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenes = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenes')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesActivos')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.lazySolicitudTejidoCornealAlmacen = function (solicitudTejidoCornealAlmacen, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/lazySolicitudTejidoCornealAlmacen')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenById')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesById')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenByTejidoExistente = function (tejidoExistente, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tejidoExistente, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByTejidoExistente')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesByTejidoExistente = function (tejidoExistente, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tejidoExistente, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByTejidoExistente')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenByEstatusProceso = function (estatusProceso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByEstatusProceso')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesByEstatusProceso = function (estatusProceso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByEstatusProceso')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByStatus')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenByIdsolicitudTejidoCornealRecepcion = function (idsolicitudTejidoCornealRecepcion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCornealRecepcion, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenByIdsolicitudTejidoCornealRecepcion')
            .subscribe(function (data) {
            _evento(_this.solicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.solicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesByIdsolicitudTejidoCornealRecepcion = function (idsolicitudTejidoCornealRecepcion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCornealRecepcion, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByIdsolicitudTejidoCornealRecepcion')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'solicitudTejidoCornealAlmacen/custom')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesByDto = function (p_solicitudTejidoCornealAlmacen, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_solicitudTejidoCornealAlmacen, 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesByDto')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService.prototype.getSolicitudTejidoCornealAlmacenesTablero = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar('', 'solicitudTejidoCornealAlmacen/getSolicitudTejidoCornealAlmacenesTablero')
            .subscribe(function (data) {
            _evento(_this.listaSolicitudTejidoCornealAlmacen = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaSolicitudTejidoCornealAlmacen);
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
    SolicitudTejidoCornealAlmacenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], SolicitudTejidoCornealAlmacenService);
    return SolicitudTejidoCornealAlmacenService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-evaluaciones-almacen-evaluacion-module~app-almacen-tejidos-almacen-tejido-module~6e95578c.js.map