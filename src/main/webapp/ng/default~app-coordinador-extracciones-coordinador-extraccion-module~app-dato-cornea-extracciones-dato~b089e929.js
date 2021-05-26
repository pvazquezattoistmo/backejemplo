(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-coordinador-extracciones-coordinador-extraccion-module~app-dato-cornea-extracciones-dato~b089e929"],{

/***/ "./src/app/registro-extracciones/shared/registro-extraccion.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/registro-extracciones/shared/registro-extraccion.service.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistroExtraccionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroExtraccionService", function() { return RegistroExtraccionService; });
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


var RegistroExtraccionService = /** @class */ (function () {
    function RegistroExtraccionService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    RegistroExtraccionService.prototype.setRegistroExtraccion = function (registroExtraccion) {
        this.registroExtraccion = registroExtraccion;
    };
    RegistroExtraccionService.prototype.getRegistroExtraccion = function () {
        return this.registroExtraccion;
    };
    RegistroExtraccionService.prototype.guardarRegistroExtraccion = function (registroExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(registroExtraccion, 'registroExtraccion/guardarRegistroExtraccion')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.actualizarRegistroExtraccion = function (registroExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(registroExtraccion, 'registroExtraccion/actualizarRegistroExtraccion')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.eliminarRegistroExtraccion = function (registroExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(registroExtraccion, 'registroExtraccion/eliminarRegistroExtraccion')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtracciondb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'registroExtraccion/getRegistroExtraccion')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtracciones = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'registroExtraccion/getRegistroExtracciones')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'registroExtraccion/getRegistroExtraccionesActivos')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.lazyRegistroExtraccion = function (registroExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(registroExtraccion, 'registroExtraccion/lazyRegistroExtraccion')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'registroExtraccion/getRegistroExtraccionById')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'registroExtraccion/getRegistroExtraccionesById')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'registroExtraccion/getRegistroExtraccionByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'registroExtraccion/getRegistroExtraccionesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'registroExtraccion/getRegistroExtraccionByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'registroExtraccion/getRegistroExtraccionesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByTipoDonanteMultiorganico = function (tipoDonanteMultiorganico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoDonanteMultiorganico, 'registroExtraccion/getRegistroExtraccionByTipoDonanteMultiorganico')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByTipoDonanteMultiorganico = function (tipoDonanteMultiorganico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoDonanteMultiorganico, 'registroExtraccion/getRegistroExtraccionesByTipoDonanteMultiorganico')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByPanelViral = function (panelViral, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(panelViral, 'registroExtraccion/getRegistroExtraccionByPanelViral')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByPanelViral = function (panelViral, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(panelViral, 'registroExtraccion/getRegistroExtraccionesByPanelViral')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'registroExtraccion/getRegistroExtraccionByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'registroExtraccion/getRegistroExtraccionesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByTelefonoContacto = function (telefonoContacto, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(telefonoContacto, 'registroExtraccion/getRegistroExtraccionByTelefonoContacto')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByTelefonoContacto = function (telefonoContacto, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(telefonoContacto, 'registroExtraccion/getRegistroExtraccionesByTelefonoContacto')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByObservacion = function (observacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'registroExtraccion/getRegistroExtraccionByObservacion')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByObservacion = function (observacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'registroExtraccion/getRegistroExtraccionesByObservacion')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'registroExtraccion/getRegistroExtraccionByStatus')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'registroExtraccion/getRegistroExtraccionesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'registroExtraccion/getRegistroExtraccionByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'registroExtraccion/getRegistroExtraccionesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionByIdsolicitudEvaluacionCorneal = function (idsolicitudEvaluacionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'registroExtraccion/getRegistroExtraccionByIdsolicitudEvaluacionCorneal')
            .subscribe(function (data) {
            _evento(_this.registroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.registroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByIdsolicitudEvaluacionCorneal = function (idsolicitudEvaluacionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'registroExtraccion/getRegistroExtraccionesByIdsolicitudEvaluacionCorneal')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'registroExtraccion/custom')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService.prototype.getRegistroExtraccionesByDto = function (p_registroExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_registroExtraccion, 'registroExtraccion/getRegistroExtraccionesByDto')
            .subscribe(function (data) {
            _evento(_this.listaRegistroExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaRegistroExtraccion);
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
    RegistroExtraccionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], RegistroExtraccionService);
    return RegistroExtraccionService;
}());



/***/ }),

/***/ "./src/app/registro-extracciones/shared/registro-extraccion.ts":
/*!*********************************************************************!*\
  !*** ./src/app/registro-extracciones/shared/registro-extraccion.ts ***!
  \*********************************************************************/
/*! exports provided: RegistroExtraccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroExtraccion", function() { return RegistroExtraccion; });
/**
 *
 * @author IstmoSoft
 */
var RegistroExtraccion = /** @class */ (function () {
    // atributos fin
    function RegistroExtraccion(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.fechaRegistro = null;
        this.tipoDonanteMultiorganico = null;
        this.panelViral = null;
        this.fechaActualizacion = null;
        this.telefonoContacto = null;
        this.observacion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idsolicitudEvaluacionCorneal = null;
        this.coordinadorExtraccion = [];
        this.equipoExtraccion = [];
        this.datoCorneaExtraccion = [];
        if (source !== null)
            this.from(source);
    }
    RegistroExtraccion.prototype.from = function (source) {
        if (source.coordinadorExtraccion)
            this.coordinadorExtraccion = source.coordinadorExtraccion;
        if (source.datoCorneaExtraccion)
            this.datoCorneaExtraccion = source.datoCorneaExtraccion;
        if (source.equipoExtraccion)
            this.equipoExtraccion = source.equipoExtraccion;
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.tipoDonanteMultiorganico)
            this.tipoDonanteMultiorganico = source.tipoDonanteMultiorganico;
        if (source.panelViral)
            this.panelViral = source.panelViral;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.telefonoContacto)
            this.telefonoContacto = source.telefonoContacto;
        if (source.observacion)
            this.observacion = source.observacion;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idsolicitudEvaluacionCorneal)
            this.idsolicitudEvaluacionCorneal = source.idsolicitudEvaluacionCorneal;
    };
    RegistroExtraccion.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.tipoDonanteMultiorganico)
            return true;
        if (this.panelViral)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.telefonoContacto)
            return true;
        if (this.observacion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idsolicitudEvaluacionCorneal)
            return true;
        return false;
    };
    RegistroExtraccion.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.tipoDonanteMultiorganico != null && typeof this.tipoDonanteMultiorganico === 'string' && this.tipoDonanteMultiorganico.replace(/^\s+|\s+$/g, '') == "")
            this.tipoDonanteMultiorganico = null;
        if (this.panelViral != null && typeof this.panelViral === 'string' && this.panelViral.replace(/^\s+|\s+$/g, '') == "")
            this.panelViral = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.telefonoContacto != null && typeof this.telefonoContacto === 'string' && this.telefonoContacto.replace(/^\s+|\s+$/g, '') == "")
            this.telefonoContacto = null;
        if (this.observacion != null && typeof this.observacion === 'string' && this.observacion.replace(/^\s+|\s+$/g, '') == "")
            this.observacion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idsolicitudEvaluacionCorneal != null && typeof this.idsolicitudEvaluacionCorneal === 'string' && this.idsolicitudEvaluacionCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.idsolicitudEvaluacionCorneal = null;
        return this;
    };
    return RegistroExtraccion;
}());



/***/ }),

/***/ "./src/app/shared/usuario-perfil-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/usuario-perfil-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UsuarioPerfilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPerfilRoutingModule", function() { return UsuarioPerfilRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuarios_usuario_list_kendo_usuario_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuarios/usuario-list-kendo/usuario-list-kendo.component */ "./src/app/usuarios/usuario-list-kendo/usuario-list-kendo.component.ts");
/* harmony import */ var _usuarios_usuario_crud_usuario_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuarios/usuario-crud/usuario-crud.component */ "./src/app/usuarios/usuario-crud/usuario-crud.component.ts");
/* harmony import */ var _usuarios_usuario_table_usuario_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usuarios/usuario-table/usuario-table.component */ "./src/app/usuarios/usuario-table/usuario-table.component.ts");
/* harmony import */ var _perfiles_perfil_list_kendo_perfil_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../perfiles/perfil-list-kendo/perfil-list-kendo.component */ "./src/app/perfiles/perfil-list-kendo/perfil-list-kendo.component.ts");
/* harmony import */ var _perfiles_perfil_crud_perfil_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../perfiles/perfil-crud/perfil-crud.component */ "./src/app/perfiles/perfil-crud/perfil-crud.component.ts");
/* harmony import */ var _perfiles_perfil_table_perfil_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../perfiles/perfil-table/perfil-table.component */ "./src/app/perfiles/perfil-table/perfil-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'usuario-list-kendo', component: _usuarios_usuario_list_kendo_usuario_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["UsuarioListKendoComponent"] },
    { path: 'usuario-crud', component: _usuarios_usuario_crud_usuario_crud_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioCrudComponent"] },
    { path: 'usuario-table', component: _usuarios_usuario_table_usuario_table_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioTableComponent"] },
    { path: 'perfil-list-kendo', component: _perfiles_perfil_list_kendo_perfil_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["PerfilListKendoComponent"] },
    { path: 'perfil-crud', component: _perfiles_perfil_crud_perfil_crud_component__WEBPACK_IMPORTED_MODULE_6__["PerfilCrudComponent"] },
    { path: 'perfil-table', component: _perfiles_perfil_table_perfil_table_component__WEBPACK_IMPORTED_MODULE_7__["PerfilTableComponent"] },
];
var UsuarioPerfilRoutingModule = /** @class */ (function () {
    function UsuarioPerfilRoutingModule() {
    }
    UsuarioPerfilRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsuarioPerfilRoutingModule);
    return UsuarioPerfilRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/usuario-perfil.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/usuario-perfil.module.ts ***!
  \*************************************************/
/*! exports provided: UsuarioPerfilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPerfilModule", function() { return UsuarioPerfilModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _usuario_perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-perfil-routing.module */ "./src/app/shared/usuario-perfil-routing.module.ts");
/* harmony import */ var _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/entidad-federativa-usuario-usuario-btc-hospital.module */ "./src/app/shared/entidad-federativa-usuario-usuario-btc-hospital.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
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






var UsuarioPerfilModule = /** @class */ (function () {
    function UsuarioPerfilModule(parentModule) {
        if (parentModule) {
            throw new Error('UsuarioPerfilModule is already loaded. Import it in the AppModule only');
        }
    }
    UsuarioPerfilModule_1 = UsuarioPerfilModule;
    UsuarioPerfilModule.forRoot = function () {
        return {
            ngModule: UsuarioPerfilModule_1,
            providers: []
        };
    };
    var UsuarioPerfilModule_1;
    UsuarioPerfilModule = UsuarioPerfilModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_5__["PersonalizadosModule"], _usuario_perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsuarioPerfilRoutingModule"],
                _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_4__["EntidadFederativaUsuarioUsuarioBtcHospitalModule"].forRoot()
            ],
            declarations: [],
            exports: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [UsuarioPerfilModule])
    ], UsuarioPerfilModule);
    return UsuarioPerfilModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-coordinador-extracciones-coordinador-extraccion-module~app-dato-cornea-extracciones-dato~b089e929.js.map