(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-tejidos-almacen-tejido-module~app-caracteristica-donaciones-caracteristica-donac~15782609"],{

/***/ "./src/app/causa-muertes/shared/causa-muerte.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/causa-muertes/shared/causa-muerte.service.ts ***!
  \**************************************************************/
/*! exports provided: CausaMuerteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaMuerteService", function() { return CausaMuerteService; });
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


var CausaMuerteService = /** @class */ (function () {
    function CausaMuerteService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    CausaMuerteService.prototype.setCausaMuerte = function (causaMuerte) {
        this.causaMuerte = causaMuerte;
    };
    CausaMuerteService.prototype.getCausaMuerte = function () {
        return this.causaMuerte;
    };
    CausaMuerteService.prototype.guardarCausaMuerte = function (causaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(causaMuerte, 'causaMuerte/guardarCausaMuerte')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.actualizarCausaMuerte = function (causaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(causaMuerte, 'causaMuerte/actualizarCausaMuerte')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.eliminarCausaMuerte = function (causaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(causaMuerte, 'causaMuerte/eliminarCausaMuerte')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertedb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'causaMuerte/getCausaMuerte')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertes = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'causaMuerte/getCausaMuertes')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'causaMuerte/getCausaMuertesActivos')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.lazyCausaMuerte = function (causaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(causaMuerte, 'causaMuerte/lazyCausaMuerte')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
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
    CausaMuerteService.prototype.getCausaMuerteById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'causaMuerte/getCausaMuerteById')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'causaMuerte/getCausaMuertesById')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuerteByDescripcion = function (descripcion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'causaMuerte/getCausaMuerteByDescripcion')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesByDescripcion = function (descripcion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'causaMuerte/getCausaMuertesByDescripcion')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuerteByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'causaMuerte/getCausaMuerteByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'causaMuerte/getCausaMuertesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuerteByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'causaMuerte/getCausaMuerteByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'causaMuerte/getCausaMuertesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuerteByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'causaMuerte/getCausaMuerteByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'causaMuerte/getCausaMuertesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuerteByTipoCausaMuerte = function (tipoCausaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCausaMuerte, 'causaMuerte/getCausaMuerteByTipoCausaMuerte')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesByTipoCausaMuerte = function (tipoCausaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCausaMuerte, 'causaMuerte/getCausaMuertesByTipoCausaMuerte')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuerteByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'causaMuerte/getCausaMuerteByStatus')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'causaMuerte/getCausaMuertesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuerteByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'causaMuerte/getCausaMuerteByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.causaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.causaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'causaMuerte/getCausaMuertesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
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
    CausaMuerteService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'causaMuerte/custom')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService.prototype.getCausaMuertesByDto = function (p_causaMuerte, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_causaMuerte, 'causaMuerte/getCausaMuertesByDto')
            .subscribe(function (data) {
            _evento(_this.listaCausaMuerte = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCausaMuerte);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CausaMuerteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], CausaMuerteService);
    return CausaMuerteService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-tejidos-almacen-tejido-module~app-caracteristica-donaciones-caracteristica-donac~15782609.js.map