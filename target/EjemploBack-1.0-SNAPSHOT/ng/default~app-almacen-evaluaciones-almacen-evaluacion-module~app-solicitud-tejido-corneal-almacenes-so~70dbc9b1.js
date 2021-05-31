(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-evaluaciones-almacen-evaluacion-module~app-solicitud-tejido-corneal-almacenes-so~70dbc9b1"],{

/***/ "./src/app/tipo-cirugia-previstas/shared/configurar-tipo-cirugia-prevista.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/shared/configurar-tipo-cirugia-prevista.ts ***!
  \***********************************************************************************/
/*! exports provided: ConfigurarTipoCirugiaPrevista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarTipoCirugiaPrevista", function() { return ConfigurarTipoCirugiaPrevista; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarTipoCirugiaPrevista = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarTipoCirugiaPrevista() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "tipoCirugiaPrevista";
        this.rutaLista = this.crudServiceBaseUrl + "/getTipoCirugiaPrevistas";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarTipoCirugiaPrevista";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarTipoCirugiaPrevista";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarTipoCirugiaPrevista";
        this.titulo = "Catálogo TipoCirugiaPrevista";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.tipoCirugiaPrevistaConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarTipoCirugiaPrevista.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarTipoCirugiaPrevista.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarTipoCirugiaPrevista.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarTipoCirugiaPrevista.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarTipoCirugiaPrevista.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarTipoCirugiaPrevista.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarTipoCirugiaPrevista;
}());



/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service.ts ***!
  \********************************************************************************/
/*! exports provided: TipoCirugiaPrevistaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCirugiaPrevistaService", function() { return TipoCirugiaPrevistaService; });
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


var TipoCirugiaPrevistaService = /** @class */ (function () {
    function TipoCirugiaPrevistaService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    TipoCirugiaPrevistaService.prototype.setTipoCirugiaPrevista = function (tipoCirugiaPrevista) {
        this.tipoCirugiaPrevista = tipoCirugiaPrevista;
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevista = function () {
        return this.tipoCirugiaPrevista;
    };
    TipoCirugiaPrevistaService.prototype.guardarTipoCirugiaPrevista = function (tipoCirugiaPrevista, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCirugiaPrevista, 'tipoCirugiaPrevista/guardarTipoCirugiaPrevista')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.actualizarTipoCirugiaPrevista = function (tipoCirugiaPrevista, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCirugiaPrevista, 'tipoCirugiaPrevista/actualizarTipoCirugiaPrevista')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.eliminarTipoCirugiaPrevista = function (tipoCirugiaPrevista, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCirugiaPrevista, 'tipoCirugiaPrevista/eliminarTipoCirugiaPrevista')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistadb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'tipoCirugiaPrevista/getTipoCirugiaPrevista')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistas = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'tipoCirugiaPrevista/getTipoCirugiaPrevistas')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'tipoCirugiaPrevista/getTipoCirugiaPrevistasActivos')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.lazyTipoCirugiaPrevista = function (tipoCirugiaPrevista, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCirugiaPrevista, 'tipoCirugiaPrevista/lazyTipoCirugiaPrevista')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
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
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaById')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByIdSolicitudTejidoCorneal = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByIdSolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasById')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByDmek = function (dmek, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(dmek, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByDmek')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByDmek = function (dmek, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(dmek, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByDmek')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByOtra = function (otra, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(otra, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByOtra')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByOtra = function (otra, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(otra, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByOtra')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByDalk = function (dalk, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(dalk, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByDalk')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByDalk = function (dalk, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(dalk, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByDalk')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByDsaek = function (dsaek, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(dsaek, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByDsaek')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByDsaek = function (dsaek, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(dsaek, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByDsaek')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByQp = function (qp, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(qp, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByQp')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByQp = function (qp, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(qp, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByQp')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByStatus')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByStatus')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistaByIdsolicitudTejidoCorneal = function (idsolicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCorneal, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByIdsolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.tipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.tipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByIdsolicitudTejidoCorneal = function (idsolicitudTejidoCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCorneal, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByIdsolicitudTejidoCorneal')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
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
    TipoCirugiaPrevistaService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'tipoCirugiaPrevista/custom')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService.prototype.getTipoCirugiaPrevistasByDto = function (p_tipoCirugiaPrevista, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_tipoCirugiaPrevista, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByDto')
            .subscribe(function (data) {
            _evento(_this.listaTipoCirugiaPrevista = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaTipoCirugiaPrevista);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    TipoCirugiaPrevistaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], TipoCirugiaPrevistaService);
    return TipoCirugiaPrevistaService;
}());



/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts":
/*!************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts ***!
  \************************************************************************/
/*! exports provided: TipoCirugiaPrevista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCirugiaPrevista", function() { return TipoCirugiaPrevista; });
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");


/**
 *
 * @author IstmoSoft
 */
var TipoCirugiaPrevista = /** @class */ (function () {
    // atributos fin
    function TipoCirugiaPrevista(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.dmek = null;
        this.otra = null;
        this.fechaBaja = null;
        this.dalk = null;
        this.fechaRegistro = null;
        this.fechaActualizacion = null;
        this.dsaek = null;
        this.qp = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idsolicitudTejidoCorneal = null;
        if (source !== null)
            this.from(source);
    }
    TipoCirugiaPrevista.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.dmek)
            this.dmek = source.dmek;
        if (source.otra)
            this.otra = source.otra;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.dalk)
            this.dalk = source.dalk;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.dsaek)
            this.dsaek = source.dsaek;
        if (source.qp)
            this.qp = source.qp;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"](source.usuarioUltMov);
        if (source.idsolicitudTejidoCorneal)
            this.idsolicitudTejidoCorneal = new _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"](source.idsolicitudTejidoCorneal);
    };
    TipoCirugiaPrevista.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.dmek)
            return true;
        if (this.otra)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.dalk)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.dsaek)
            return true;
        if (this.qp)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idsolicitudTejidoCorneal)
            return true;
        return false;
    };
    TipoCirugiaPrevista.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.dmek != null && typeof this.dmek === 'string' && this.dmek.replace(/^\s+|\s+$/g, '') == "")
            this.dmek = null;
        if (this.otra != null && typeof this.otra === 'string' && this.otra.replace(/^\s+|\s+$/g, '') == "")
            this.otra = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.dalk != null && typeof this.dalk === 'string' && this.dalk.replace(/^\s+|\s+$/g, '') == "")
            this.dalk = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.dsaek != null && typeof this.dsaek === 'string' && this.dsaek.replace(/^\s+|\s+$/g, '') == "")
            this.dsaek = null;
        if (this.qp != null && typeof this.qp === 'string' && this.qp.replace(/^\s+|\s+$/g, '') == "")
            this.qp = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idsolicitudTejidoCorneal != null && typeof this.idsolicitudTejidoCorneal === 'string' && this.idsolicitudTejidoCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.idsolicitudTejidoCorneal = null;
        return this;
    };
    return TipoCirugiaPrevista;
}());



/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let tipoCirugiaPrevista of listaTipoCirugiaPrevista \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+tipoCirugiaPrevista.id}\"\n        (click)=\"elegir(tipoCirugiaPrevista,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{tipoCirugiaPrevista.id}}\">{{tipoCirugiaPrevista.id}}</a>\n    </li>\n    <li *ngFor =  \"let tipoCirugiaPrevista of listaTipoCirugiaPrevistaN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+tipoCirugiaPrevista.id}\"\n        (click)=\"elegir(tipoCirugiaPrevista, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{tipoCirugiaPrevista.id}}\">T-{{tipoCirugiaPrevista.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let tipoCirugiaPrevista of listaTipoCirugiaPrevista ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+tipoCirugiaPrevista.id}\" id=\"tab-I-{{tipoCirugiaPrevista.id}}\">\n\t\t\t<app-tipo-cirugia-prevista [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [tipoCirugiaPrevistaBuscar]=\"tipoCirugiaPrevistaBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosTipoCirugiaPrevista]=\"validosTipoCirugiaPrevista\"  \n\t\t\t\t\t\t  [tipoCirugiaPrevistaService]=\"tipoCirugiaPrevistaService\" [(opcion)]=\"opcionTipoCirugiaPrevista\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(tipoCirugiaPrevista)]=\"listaTipoCirugiaPrevista[i]\"  [ocultarConjuntos]=\"ocultarConjuntosTipoCirugiaPrevista\"\n                           [lista_usuarioUltMovTipoCirugiaPrevistaUsuario]=\"lista_usuarioUltMovTipoCirugiaPrevistaUsuario\" \n                           [lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal]=\"lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-tipo-cirugia-prevista>\n        </div>\n        <div *ngFor = \"let tipoCirugiaPrevista of listaTipoCirugiaPrevistaN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+tipoCirugiaPrevista.id}\" id=\"tab-N-{{tipoCirugiaPrevista.id}}\">\n\t\t\t<app-tipo-cirugia-prevista [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [tipoCirugiaPrevistaBuscar]=\"tipoCirugiaPrevistaBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosTipoCirugiaPrevista]=\"validosTipoCirugiaPrevista\"  \n\t\t\t\t\t\t  [tipoCirugiaPrevistaService]=\"tipoCirugiaPrevistaService\" [(opcion)]=\"opcionTipoCirugiaPrevista\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(tipoCirugiaPrevista)]=\"listaTipoCirugiaPrevistaN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosTipoCirugiaPrevista\"\n                           [lista_usuarioUltMovTipoCirugiaPrevistaUsuario]=\"lista_usuarioUltMovTipoCirugiaPrevistaUsuario\" \n                           [lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal]=\"lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-tipo-cirugia-prevista>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TipoCirugiaPrevistaConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCirugiaPrevistaConjuntoComponent", function() { return TipoCirugiaPrevistaConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipoCirugiaPrevistaConjuntoComponent = /** @class */ (function () {
    function TipoCirugiaPrevistaConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovTipoCirugiaPrevistaUsuarioEditar = false;
        this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEditar = false;
        this.listaTipoCirugiaPrevistaN = [];
        this.listaTipoCirugiaPrevista = [];
        this.listaTipoCirugiaPrevistaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tipoCirugiaPrevistaN = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__["TipoCirugiaPrevista"]();
        this.tipoCirugiaPrevistaNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    TipoCirugiaPrevistaConjuntoComponent.prototype.elegir = function (tipoCirugiaPrevista, tipo) {
        this.idSeleccionado = tipo + "-" + tipoCirugiaPrevista.id;
        this.tipoCirugiaPrevistaN = tipoCirugiaPrevista;
    };
    TipoCirugiaPrevistaConjuntoComponent.prototype.ngOnInit = function () {
        this.tipoCirugiaPrevistaN.id = 0;
        this.listaTipoCirugiaPrevistaN.push(Object.assign({}, this.tipoCirugiaPrevistaN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    TipoCirugiaPrevistaConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__["TipoCirugiaPrevista"]();
        pg.id = this.listaTipoCirugiaPrevistaN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaTipoCirugiaPrevistaN.push(pg);
    };
    TipoCirugiaPrevistaConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaTipoCirugiaPrevista; _i < _a.length; _i++) {
            var tipoCirugiaPrevista = _a[_i];
            this.tipoCirugiaPrevistaService.actualizarTipoCirugiaPrevista(tipoCirugiaPrevista, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaTipoCirugiaPrevistaN; _b < _c.length; _b++) {
            var tipoCirugiaPrevista = _c[_b];
            tipoCirugiaPrevista.id = null;
            this.tipoCirugiaPrevistaService.guardarTipoCirugiaPrevista(tipoCirugiaPrevista, this.evtGuardar, this);
        }
    };
    TipoCirugiaPrevistaConjuntoComponent.prototype.evtGuardar = function (tipoCirugiaPrevista, obj) {
        obj.agregados++;
        obj.listaTipoCirugiaPrevista.push(tipoCirugiaPrevista);
        if (obj.agregados >= obj.listaTipoCirugiaPrevistaN.length) {
            obj.tipoCirugiaPrevistaN = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__["TipoCirugiaPrevista"]();
            obj.listaTipoCirugiaPrevistaN = [];
            obj.tipoCirugiaPrevistaN.id = 0;
            obj.idSeleccionado = "N-" + obj.tipoCirugiaPrevistaN.id;
            obj.listaTipoCirugiaPrevistaN.push(Object.assign({}, obj.tipoCirugiaPrevistaN));
            obj.listaTipoCirugiaPrevistaChange.emit(obj.listaTipoCirugiaPrevista);
        }
        if (obj.agregados >= obj.listaTipoCirugiaPrevistaN.length &&
            obj.actualizados >= obj.listaTipoCirugiaPrevista.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    TipoCirugiaPrevistaConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaTipoCirugiaPrevistaN.length &&
                obj.actualizados >= obj.listaTipoCirugiaPrevista.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    TipoCirugiaPrevistaConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "tipoCirugiaPrevistaBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "validosTipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "ocultarConjuntosTipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "tipoCirugiaPrevistaService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "lista_usuarioUltMovTipoCirugiaPrevistaUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "listaTipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "listaTipoCirugiaPrevistaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__["TipoCirugiaPrevista"])
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "tipoCirugiaPrevistaN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaConjuntoComponent.prototype, "tipoCirugiaPrevistaNChange", void 0);
    TipoCirugiaPrevistaConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipo-cirugia-prevista-conjunto',
            template: __webpack_require__(/*! ./tipo-cirugia-prevista-conjunto.component.html */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./tipo-cirugia-prevista-conjunto.component.css */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], TipoCirugiaPrevistaConjuntoComponent);
    return TipoCirugiaPrevistaConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!--div class=\"panel panel-default\"-->\n        <app-tipo-cirugia-prevista [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n                           [tipoCirugiaPrevistaBuscar]=\"tipoCirugiaPrevistaBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosTipoCirugiaPrevista]=\"validosTipoCirugiaPrevista\"\n                           [tipoCirugiaPrevistaService]=\"tipoCirugiaPrevista_service\"\n                           [(opcion)]=\"opcionTipoCirugiaPrevista\"\n                           [globalesService]=\"globalesService\"\n                           [(tipoCirugiaPrevista)]=\"tipoCirugiaPrevista\"\n                           [ocultarConjuntos]=\"ocultarConjuntosTipoCirugiaPrevista\"\n                           [lista_usuarioUltMovTipoCirugiaPrevistaUsuario]=\"lista_usuarioUltMovTipoCirugiaPrevistaUsuario\"\n                           [lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal]=\"lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal\"\n                           [desactiva] =\"desactiva\"\n                           [otracheck]=\"otracheck\"\n                           [isDisabled] =\"isDisabled\"\n\n\t\t\t\t\t  >\n\n        </app-tipo-cirugia-prevista>\n\n        <!--div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!tipoCirugiaPrevistaBuscar\" (click)=\"buscarTipoCirugiaPrevistaFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!tipoCirugiaPrevistaAgregar\" (click)=\"nuevoTipoCirugiaPrevistaFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!tipoCirugiaPrevistaActualizar\" (click)=\"actualizarTipoCirugiaPrevistaFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!tipoCirugiaPrevistaEliminar\" (click)=\"eliminarTipoCirugiaPrevistaFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!tipoCirugiaPrevistaGuardar\" (click)=\"guardarTipoCirugiaPrevistaFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!tipoCirugiaPrevistaCancelar\" (click)=\"cancelarTipoCirugiaPrevistaFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteTipoCirugiaPrevistaWord\" (click)=\"reporteTipoCirugiaPrevistaWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteTipoCirugiaPrevistaExcel\" (click)=\"reporteTipoCirugiaPrevistaExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteTipoCirugiaPrevistaPdf\" (click)=\"reporteTipoCirugiaPrevistaPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div-->\n    <!--/div-->\n    <div class=\"modal fade\" id=\"buscarTipoCirugiaPrevista_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-tipo-cirugia-prevista-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionTipoCirugiaPrevista]=\"configuracionTipoCirugiaPrevista\"  (tipoCirugiaPrevistaSeleccionado) =\"evtTipoCirugiaPrevistaSeleccionado($event)\">  </app-tipo-cirugia-prevista-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TipoCirugiaPrevistaCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCirugiaPrevistaCrudComponent", function() { return TipoCirugiaPrevistaCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts");
/* harmony import */ var _shared_tipo_cirugia_prevista_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/tipo-cirugia-prevista.service */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service.ts");
/* harmony import */ var _shared_configurar_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/configurar-tipo-cirugia-prevista.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts");
/* harmony import */ var _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../doctor-solicitantes/shared/doctor-solicitante.service */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.service.ts");
/* harmony import */ var _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../catalogo-cargos/shared/catalogo-cargo.service */ "./src/app/catalogo-cargos/shared/catalogo-cargo.service.ts");
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







var TipoCirugiaPrevistaCrudComponent = /** @class */ (function () {
    function TipoCirugiaPrevistaCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    tipoCirugiaPrevista_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, hospital_service, entidadFederativa_service, perfil_service, solicitudTejidoCorneal_service, doctorSolicitante_service, catalogoCargo_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.tipoCirugiaPrevista_service = tipoCirugiaPrevista_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.solicitudTejidoCorneal_service = solicitudTejidoCorneal_service;
        this.doctorSolicitante_service = doctorSolicitante_service;
        this.catalogoCargo_service = catalogoCargo_service;
        this.opcionTipoCirugiaPrevista = 0;
        this.validosTipoCirugiaPrevista = {
            id: false,
            dmek: false,
            otra: true,
            fechaBaja: false,
            dalk: false,
            fechaRegistro: false,
            fechaActualizacion: false,
            dsaek: false,
            qp: false,
            status: false,
            usuarioUltMov: false,
            idsolicitudTejidoCorneal: false
        };
        this.ocultarConjuntosTipoCirugiaPrevista = false;
        this.nombre = '';
        this.permisosTabla = { tabla: 'tipoCirugiaPrevista', permiso: 0, etiqueta: '' };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.tipoCirugiaPrevistaLazy = false;
        this.tipoCirugiaPrevistaPermisos = false;
        this.validaciones = false;
        this.desactiva = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tipoCirugiaPrevista = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"]();
        this.tipoCirugiaPrevistaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tipoCirugiaPrevistaTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_tipoCirugiaPrevistas = [];
        this.usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovTipoCirugiaPrevistaUsuario = [];
        this.usuarioUltMovTipoCirugiaPrevistaUsuarioEditar = false;
        this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion = new _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_14__["SolicitudTejidoCorneal"]();
        this.lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal = [];
        this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = '';
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
        this.configuracionTipoCirugiaPrevista = new _shared_configurar_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_6__["ConfigurarTipoCirugiaPrevista"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovTipoCirugiaPrevistaUsuario, this);
        this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesActivos(this.evtGetIdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal, this);
        this.limpiarCampos();
    }
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "tipoCirugiaPrevistaOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosTipoCirugiaPrevista)
                return true;
            return !this.tipoCirugiaPrevistaActualizar;
        },
        enumerable: true,
        configurable: true
    });
    TipoCirugiaPrevistaCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.tipoCirugiaPrevista &&
            changes.tipoCirugiaPrevista.currentValue == null &&
            this.tipoCirugiaPrevista == null)
            this.tipoCirugiaPrevista = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"]();
        else {
            var aux = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"]();
            if (this.tipoCirugiaPrevista)
                aux.from(this.tipoCirugiaPrevista);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaGuardar = false;
                this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = this.tipoCirugiaPrevistaCancelar = true;
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
                this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
                this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaCancelar = true;
            }
        }
        if (changes.desactiva) {
            if (this.desactiva)
                this.desactivaTodos();
            else {
                this.obtenerPermisos();
            }
        }
    };
    TipoCirugiaPrevistaCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            'tipoCirugiaPrevista',
            'usuario',
            'usuarioBtc',
            'perfilRedIssste',
            'perfilBtc',
            'hospital',
            'entidadFederativa',
            'perfil',
            'solicitudTejidoCorneal',
            'doctorSolicitante',
            'catalogoCargo'
        ];
        var parametros = {
            id_usu: this.usuariologueado.id,
            tablas: tablas,
            id_exp: id_expe
        };
        this.tipoCirugiaPrevistaPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    TipoCirugiaPrevistaCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.tipoCirugiaPrevistaPermisos = true;
        if (permisos &&
            permisos.tipoCirugiaPrevista &&
            permisos.tipoCirugiaPrevista.PermisoAtributo &&
            permisos.tipoCirugiaPrevista.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.tipoCirugiaPrevista.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos &&
            permisos.tipoCirugiaPrevista &&
            permisos.tipoCirugiaPrevista.PermisoConjunto &&
            permisos.tipoCirugiaPrevista.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.tipoCirugiaPrevista.PermisoConjunto;
        }
        if (permisos &&
            permisos.tipoCirugiaPrevista &&
            permisos.tipoCirugiaPrevista.PermisoTabla &&
            permisos.tipoCirugiaPrevista.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.tipoCirugiaPrevista.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos &&
            permisos.usuario &&
            permisos.usuario.PermisoAtributo &&
            permisos.usuario.PermisoAtributo.length > 0) {
            //obj.configuracionUsuarioUltMov.permisosAtributos = permisos.usuario.PermisoAtributo ;
            //obj.permisosAtributos.push(permisos.usuario.PermisoAtributo) ;
        }
        if (permisos &&
            permisos.usuario &&
            permisos.usuario.PermisoAtributo &&
            permisos.usuario.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.usuario.PermisoConjunto);
        }
        if (permisos &&
            permisos.usuario &&
            permisos.usuario.PermisoTabla &&
            permisos.usuario.PermisoTabla.length > 0) {
            //obj.configuracionUsuarioUltMov.permisosTabla = permisos.usuario.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
        }
        if (permisos &&
            permisos.solicitudTejidoCorneal &&
            permisos.solicitudTejidoCorneal.PermisoAtributo &&
            permisos.solicitudTejidoCorneal.PermisoAtributo.length > 0) {
            //obj.configuracionIdsolicitudTejidoCorneal.permisosAtributos = permisos.solicitudTejidoCorneal.PermisoAtributo ;
            //obj.permisosAtributos.push(permisos.solicitudTejidoCorneal.PermisoAtributo) ;
        }
        if (permisos &&
            permisos.solicitudTejidoCorneal &&
            permisos.solicitudTejidoCorneal.PermisoAtributo &&
            permisos.solicitudTejidoCorneal.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.solicitudTejidoCorneal.PermisoConjunto);
        }
        if (permisos &&
            permisos.solicitudTejidoCorneal &&
            permisos.solicitudTejidoCorneal.PermisoTabla &&
            permisos.solicitudTejidoCorneal.PermisoTabla.length > 0) {
            //obj.configuracionIdsolicitudTejidoCorneal.permisosTabla = permisos.solicitudTejidoCorneal.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.solicitudTejidoCorneal.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    TipoCirugiaPrevistaCrudComponent.prototype.evtGetUsuarioUltMovTipoCirugiaPrevistaUsuario = function (lista_usuarioUltMovTipoCirugiaPrevistaUsuario, obj) {
        obj.lista_usuarioUltMovTipoCirugiaPrevistaUsuario = lista_usuarioUltMovTipoCirugiaPrevistaUsuario;
        obj.actualizar_UsuarioUltMovTipoCirugiaPrevistaUsuario();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.evtGetIdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal = function (lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal, obj) {
        obj.lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal = lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal;
        obj.actualizar_IdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.actualizar_UsuarioUltMovTipoCirugiaPrevistaUsuario = function () {
        if (this.usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovTipoCirugiaPrevistaUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion.id) {
                    this.usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    TipoCirugiaPrevistaCrudComponent.prototype.actualizar_IdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal = function () {
        if (this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion)
            for (var _i = 0, _a = this
                .lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id ==
                    this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion.id) {
                    this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion = eleme;
                    break;
                }
            }
    };
    TipoCirugiaPrevistaCrudComponent.prototype.ngDoCheck = function () { };
    TipoCirugiaPrevistaCrudComponent.prototype.validaAcciones = function (vall) {
        return (this.accion == 0 ||
            this.accion == 1 ||
            this.accion == 4 ||
            this.accion == 6 ||
            (this.accion == 7 && vall) ||
            (this.accion == 2 && vall) ||
            (this.accion == 3 && vall) ||
            (this.accion == 5 && vall));
    };
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosTipoCirugiaPrevista['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosTipoCirugiaPrevista['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaDmek", {
        get: function () {
            return this.validosTipoCirugiaPrevista['dmek'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaOtra", {
        get: function () {
            return this.validosTipoCirugiaPrevista['otra'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosTipoCirugiaPrevista['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaDalk", {
        get: function () {
            return this.validosTipoCirugiaPrevista['dalk'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosTipoCirugiaPrevista['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosTipoCirugiaPrevista['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaDsaek", {
        get: function () {
            return this.validosTipoCirugiaPrevista['dsaek'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaQp", {
        get: function () {
            return this.validosTipoCirugiaPrevista['qp'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosTipoCirugiaPrevista['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosTipoCirugiaPrevista['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaIdsolicitudTejidoCorneal", {
        get: function () {
            return this.validosTipoCirugiaPrevista['idsolicitudTejidoCorneal'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId &&
                this.validaDmek &&
                this.validaOtra &&
                this.validaFechaBaja &&
                this.validaDalk &&
                this.validaFechaRegistro &&
                this.validaFechaActualizacion &&
                this.validaDsaek &&
                this.validaQp &&
                this.validaStatus &&
                this.validaUsuarioUltMov &&
                this.validaIdsolicitudTejidoCorneal;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    TipoCirugiaPrevistaCrudComponent.prototype.obtenerTipoCirugiaPrevistas = function (lista, objeto) {
        objeto.lista_tipoCirugiaPrevistas = lista;
        if (lista && lista.length > 0) {
            objeto.tipoCirugiaPrevista.from(lista[0]);
            objeto.evtTipoCirugiaPrevistaSeleccionado(objeto.tipoCirugiaPrevista);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    TipoCirugiaPrevistaCrudComponent.prototype.evn_lazy_tipoCirugiaPrevista = function (tipoCirugiaPrevista, objeto) {
        objeto.tipoCirugiaPrevista = tipoCirugiaPrevista;
        objeto.tipoCirugiaPrevistaChange.emit(objeto.tipoCirugiaPrevista);
        objeto.configuarCombosObjetos();
        objeto.tipoCirugiaPrevistaLazy = true;
    };
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "datosReporteTipoCirugiaPrevistaWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.tipoCirugiaPrevistaActualizar &&
                this.tipoCirugiaPrevistaLazy &&
                this.globalesService.preporteWord(this, 'tipoCirugiaPrevista'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "datosReporteTipoCirugiaPrevistaExcel", {
        get: function () {
            return !(this.tipoCirugiaPrevistaActualizar &&
                this.tipoCirugiaPrevistaLazy &&
                this.globalesService.preporteExcel(this, 'tipoCirugiaPrevista'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TipoCirugiaPrevistaCrudComponent.prototype, "datosReporteTipoCirugiaPrevistaPdf", {
        get: function () {
            return !(this.tipoCirugiaPrevistaActualizar &&
                this.tipoCirugiaPrevistaLazy &&
                this.globalesService.preportePdf(this, 'tipoCirugiaPrevista'));
        },
        enumerable: true,
        configurable: true
    });
    TipoCirugiaPrevistaCrudComponent.prototype.reporteTipoCirugiaPrevistaExcel = function (form) {
        var nombre = 'TipoCirugiaPrevista.xlsx';
        var path = 'file/reporteExcel';
        var parametros = {};
        parametros['entradas'] = { tipoCirugiaPrevista: this.tipoCirugiaPrevista };
        parametros['plantilla'] = 'TipoCirugiaPrevista.xlsx';
        parametros['salida'] = nombre;
        this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
    };
    TipoCirugiaPrevistaCrudComponent.prototype.reporteTipoCirugiaPrevistaWord = function (form) {
        var nombre = 'TipoCirugiaPrevista.docx';
        var path = 'file/reporteWord';
        var parametros = {};
        parametros['entradas'] = { tipoCirugiaPrevista: this.tipoCirugiaPrevista };
        parametros['plantilla'] = 'TipoCirugiaPrevista.docx';
        parametros['salida'] = nombre;
        this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
    };
    TipoCirugiaPrevistaCrudComponent.prototype.reporteTipoCirugiaPrevistaPdf = function (form) {
        var nombre = 'TipoCirugiaPrevista.docx';
        var path = 'file/reportePdf';
        var parametros = {};
        parametros['entradas'] = { tipoCirugiaPrevista: this.tipoCirugiaPrevista };
        parametros['plantilla'] = 'TipoCirugiaPrevista.docx';
        parametros['salida'] = 'TipoCirugiaPrevista.pdf';
        this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    TipoCirugiaPrevistaCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
        this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaCancelar = true;
    };
    TipoCirugiaPrevistaCrudComponent.prototype.buscarTipoCirugiaPrevistaFront = function (form) {
        this.accionesBuscar();
        var vtipoCirugiaPrevista = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"]();
        vtipoCirugiaPrevista.from(this.tipoCirugiaPrevista);
        this.configuracionTipoCirugiaPrevista = new _shared_configurar_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_6__["ConfigurarTipoCirugiaPrevista"]();
        this.configuracionTipoCirugiaPrevista.permisosTabla = {
            tabla: 'tipoCirugiaPrevista',
            permiso: 8
        };
        this.configuracionTipoCirugiaPrevista.titulo = 'Buscar ' + this.permisosTabla.etiqueta;
        this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta = vtipoCirugiaPrevista;
        this.permisosacciones();
        $('#buscarTipoCirugiaPrevista_' + this.nombre).modal();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.buscarTipoCirugiaPrevistaBack = function (tipoCirugiaPrevista) {
        this.tipoCirugiaPrevista_service.getTipoCirugiaPrevistasByDto(tipoCirugiaPrevista, this.eventoSrvTipoCirugiaPrevistaBuscar, this);
    };
    TipoCirugiaPrevistaCrudComponent.prototype.eventoSrvTipoCirugiaPrevistaBuscar = function (lista, objeto) {
        objeto.lista_tipoCirugiaPrevistas = lista;
        if (lista && lista.length > 0) {
            objeto.tipoCirugiaPrevista = lista[0];
            objeto.tipoCirugiaPrevistaLazy = false;
            objeto.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(objeto.tipoCirugiaPrevista, objeto.evn_lazy_tipoCirugiaPrevista, objeto);
        }
    };
    TipoCirugiaPrevistaCrudComponent.prototype.guardarTipoCirugiaPrevistaFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarTipoCirugiaPrevistaBack(this.tipoCirugiaPrevista);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.guardarTipoCirugiaPrevistaBack = function (tipoCirugiaPrevista) {
        if (tipoCirugiaPrevista.usuarioUltMov == null)
            tipoCirugiaPrevista.usuarioUltMov = this.globalesService.dameUsuario();
        if (tipoCirugiaPrevista.status == null || tipoCirugiaPrevista.status == '')
            tipoCirugiaPrevista.status = 1;
        this.tipoCirugiaPrevista_service.guardarTipoCirugiaPrevista(tipoCirugiaPrevista, this.eventoSrvTipoCirugiaPrevistaGuardar, this);
    };
    TipoCirugiaPrevistaCrudComponent.prototype.eventoSrvTipoCirugiaPrevistaGuardar = function (tipoCirugiaPrevista, obj) {
        obj.tipoCirugiaPrevista = tipoCirugiaPrevista;
        bootbox.alert('Datos guardados con éxito');
        var aux = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"]();
        aux.from(tipoCirugiaPrevista);
        obj.tipoCirugiaPrevistaChange.emit(aux);
        obj.tipoCirugiaPrevistaTablaChange.emit(aux);
        obj.tipoCirugiaPrevistaLazy = false;
        obj.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(obj.tipoCirugiaPrevista, obj.evn_lazy_tipoCirugiaPrevista, obj);
        obj.accionesActualizar();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.actualizarTipoCirugiaPrevistaFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarTipoCirugiaPrevistaBack(this.tipoCirugiaPrevista);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.actualizarTipoCirugiaPrevistaBack = function (tipoCirugiaPrevista) {
        tipoCirugiaPrevista.usuarioUltMov = this.globalesService.dameUsuario();
        this.tipoCirugiaPrevista_service.actualizarTipoCirugiaPrevista(tipoCirugiaPrevista, this.eventoSrvTipoCirugiaPrevistaActualizar, this);
    };
    TipoCirugiaPrevistaCrudComponent.prototype.eventoSrvTipoCirugiaPrevistaActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert('Datos actualizados con éxito');
            var aux = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.tipoCirugiaPrevistaLazy = false;
            obj.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(obj.tipoCirugiaPrevista, obj.evn_lazy_tipoCirugiaPrevista, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.tipoCirugiaPrevista);
            obj.tipoCirugiaPrevistaChange.emit(aux);
            obj.tipoCirugiaPrevistaTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    TipoCirugiaPrevistaCrudComponent.prototype.eliminarTipoCirugiaPrevistaFront = function (form) {
        this.accion = 4;
        this.eliminarTipoCirugiaPrevistaBack(this.tipoCirugiaPrevista);
        this.permisosacciones();
        this.accionesBuscar();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.eliminarTipoCirugiaPrevistaBack = function (tipoCirugiaPrevista) {
        tipoCirugiaPrevista.usuarioUltMov = this.globalesService.dameUsuario();
        this.tipoCirugiaPrevista_service.eliminarTipoCirugiaPrevista(tipoCirugiaPrevista, this.eventoSrvTipoCirugiaPrevistaEliminar, this);
    };
    TipoCirugiaPrevistaCrudComponent.prototype.eventoSrvTipoCirugiaPrevistaEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert('Datos eliminados con éxito');
            obj.tipoCirugiaPrevista = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"]();
            obj.tipoCirugiaPrevistaChange.emit(obj.tipoCirugiaPrevista);
            obj.tipoCirugiaPrevistaTablaChange.emit(obj.tipoCirugiaPrevista);
            obj.limpiarCampos();
        }
    };
    TipoCirugiaPrevistaCrudComponent.prototype.cancelarTipoCirugiaPrevistaFront = function (form) {
        this.accion = 6;
        this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
        this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = true;
        this.permisosacciones();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.nuevoTipoCirugiaPrevistaFront = function (form) {
        this.accion = 2;
        bootbox.confirm({
            message: '¿Deseas limpiar los campos de ingreso?',
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
                this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false;
                this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaCancelar = true;
            }.bind(this)
        });
    };
    TipoCirugiaPrevistaCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovTipoCirugiaPrevistaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovTipoCirugiaPrevistaUsuario, this);
        this.lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal = [];
        this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesActivos(this.evtGetIdsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal, this);
    };
    TipoCirugiaPrevistaCrudComponent.prototype.configurarTablasConjuntos = function () { };
    TipoCirugiaPrevistaCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaGuardar = false;
        this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = this.tipoCirugiaPrevistaCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.evtTipoCirugiaPrevistaSeleccionado = function (tipoCirugiaPrevista) {
        this.tipoCirugiaPrevista = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"]();
        this.tipoCirugiaPrevista.from(tipoCirugiaPrevista);
        this.tipoCirugiaPrevistaLazy = false;
        this.tipoCirugiaPrevista_service.lazyTipoCirugiaPrevista(this.tipoCirugiaPrevista, this.evn_lazy_tipoCirugiaPrevista, this);
        this.accion = 7;
        this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaGuardar = false;
        this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = this.tipoCirugiaPrevistaCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $('#buscarTipoCirugiaPrevista_' + this.nombre).modal('hide');
    };
    TipoCirugiaPrevistaCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false; // ******************** maquina
        this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.permisosacciones = function () {
        if (this.tipoCirugiaPrevistaBuscar)
            this.tipoCirugiaPrevistaBuscar = this.globalesService.pbuscar(this, 'tipoCirugiaPrevista');
        if (this.tipoCirugiaPrevistaActualizar)
            this.tipoCirugiaPrevistaActualizar =
                this.globalesService.pacutalizar(this, 'tipoCirugiaPrevista') &&
                    this.globalesService.pbuscar(this, 'tipoCirugiaPrevista');
        if (this.tipoCirugiaPrevistaEliminar)
            this.tipoCirugiaPrevistaEliminar =
                this.globalesService.peliminar(this, 'tipoCirugiaPrevista') &&
                    this.globalesService.pbuscar(this, 'tipoCirugiaPrevista');
        if (this.tipoCirugiaPrevistaAgregar)
            this.tipoCirugiaPrevistaAgregar = this.globalesService.pagregar(this, 'tipoCirugiaPrevista');
    };
    TipoCirugiaPrevistaCrudComponent.prototype.permisosaccionesInicio = function () {
        this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false; // *************************** maquina
        this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.limpiarCampos = function () {
        this.tipoCirugiaPrevista = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"]();
        this.usuarioUltMovTipoCirugiaPrevistaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEleccion = new _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_14__["SolicitudTejidoCorneal"]();
        this.tipoCirugiaPrevistaChange.emit(this.tipoCirugiaPrevista);
        this.tipoCirugiaPrevistaSeleccion = this.tipoCirugiaPrevistaCancelar = this.tipoCirugiaPrevistaGuardar = this.tipoCirugiaPrevistaActualizar = this.tipoCirugiaPrevistaEliminar = false; // *************************** maquina
        this.tipoCirugiaPrevistaBuscar = this.tipoCirugiaPrevistaAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    TipoCirugiaPrevistaCrudComponent.prototype.desactivaTodos = function () {
        for (var ind = 0; ind < this.permisosAtributos.length; ind++) {
            this.permisosAtributos[ind].permiso = this.permisosAtributos[ind].permiso & 14;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "ocultarConjuntosTipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "desactiva", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevista"])
    ], TipoCirugiaPrevistaCrudComponent.prototype, "tipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "tipoCirugiaPrevistaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "tipoCirugiaPrevistaTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "otracheck", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TipoCirugiaPrevistaCrudComponent.prototype, "isDisabled", void 0);
    TipoCirugiaPrevistaCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipo-cirugia-prevista-crud',
            template: __webpack_require__(/*! ./tipo-cirugia-prevista-crud.component.html */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.html"),
            styles: [__webpack_require__(/*! ./tipo-cirugia-prevista-crud.component.css */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_tipo_cirugia_prevista_service__WEBPACK_IMPORTED_MODULE_5__["TipoCirugiaPrevistaService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_15__["SolicitudTejidoCornealService"],
                _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_17__["CatalogoCargoService"],
                _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_16__["DoctorSolicitanteService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_tipo_cirugia_prevista_service__WEBPACK_IMPORTED_MODULE_5__["TipoCirugiaPrevistaService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _solicitud_tejido_corneales_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_15__["SolicitudTejidoCornealService"],
            _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_16__["DoctorSolicitanteService"],
            _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_17__["CatalogoCargoService"]])
    ], TipoCirugiaPrevistaCrudComponent);
    return TipoCirugiaPrevistaCrudComponent;
}());



/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para tipoCirugiaPrevista-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionTipoCirugiaPrevista.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_tipoCirugiaPrevista_{{nombregrid}}\">\n                <div id=\"grid_tipoCirugiaPrevista_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: TipoCirugiaPrevistaListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCirugiaPrevistaListKendoComponent", function() { return TipoCirugiaPrevistaListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts");
/* harmony import */ var _shared_configurar_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/configurar-tipo-cirugia-prevista.ts");
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
var TipoCirugiaPrevistaListKendoComponent = /** @class */ (function () {
    function TipoCirugiaPrevistaListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.tipoCirugiaPrevistaSeleccionado = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_3__["TipoCirugiaPrevista"]();
        this.configuracionTipoCirugiaPrevista = new _shared_configurar_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["ConfigurarTipoCirugiaPrevista"]();
        this.nombregrid = "";
        this.evtTipoCirugiaPrevistaSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "tipoCirugiaPrevista";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'tipoCirugiaPrevista'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'tipoCirugiaPrevista'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    TipoCirugiaPrevistaListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionTipoCirugiaPrevista.titulo.indexOf("Catálogo") != -1) {
            this.configuracionTipoCirugiaPrevista.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    TipoCirugiaPrevistaListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionTipoCirugiaPrevista && changes.configuracionTipoCirugiaPrevista.currentValue &&
            (changes.configuracionTipoCirugiaPrevista.previousValue instanceof _shared_configurar_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["ConfigurarTipoCirugiaPrevista"])) {
            if (changes.configuracionTipoCirugiaPrevista.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionTipoCirugiaPrevista.currentValue.permisosAtributos;
            if (changes.configuracionTipoCirugiaPrevista.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionTipoCirugiaPrevista.currentValue.permisosTabla;
            if ($("#grid_tipoCirugiaPrevista_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    TipoCirugiaPrevistaListKendoComponent.prototype.ngOnInit = function () {
        self["grid_tipoCirugiaPrevista_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionTipoCirugiaPrevista.permisosAtributos &&
            this.configuracionTipoCirugiaPrevista.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "tipoCirugiaPrevista",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'TipoCirugiaPrevista'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'TipoCirugiaPrevista'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'TipoCirugiaPrevista'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionTipoCirugiaPrevista.permisosAtributos)
            this.permisosAtributos = this.configuracionTipoCirugiaPrevista.permisosAtributos;
        if (this.configuracionTipoCirugiaPrevista.permisosTabla)
            this.permisosTabla = this.configuracionTipoCirugiaPrevista.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    TipoCirugiaPrevistaListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.tipoCirugiaPrevista && permisos.tipoCirugiaPrevista.PermisoAtributo && permisos.tipoCirugiaPrevista.PermisoAtributo.length > 0
            && !obj.configuracionTipoCirugiaPrevista.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.tipoCirugiaPrevista.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.TipoCirugiaPrevista.PermisoAtributo ;
        }
        if (permisos && permisos.tipoCirugiaPrevista && permisos.tipoCirugiaPrevista.PermisoTabla && permisos.tipoCirugiaPrevista.PermisoTabla.length > 0
            && !obj.configuracionTipoCirugiaPrevista.permisosTabla) {
            obj.globalesService.evtTablas(permisos.tipoCirugiaPrevista.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.TipoCirugiaPrevista.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    TipoCirugiaPrevistaListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_tipoCirugiaPrevista_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    TipoCirugiaPrevistaListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionTipoCirugiaPrevista.campoAgEl != null
            && this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta
            && this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta.isOk
            && !this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta.isOk())
            return;
        if (this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta) {
            if (!this.configuracionTipoCirugiaPrevista.campoAgEl && this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta instanceof _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_3__["TipoCirugiaPrevista"])
                this.configuracionTipoCirugiaPrevista.rutaLista = this.crudServiceBaseUrl + "/getTipoCirugiaPrevistasByDto";
            this.lista = this.configuracionTipoCirugiaPrevista.lecturaP(completar, this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta);
            if (this.configuracionTipoCirugiaPrevista.campoAgEl) {
                this.rutaAgregar = this.configuracionTipoCirugiaPrevista.agregarP(function () { }, this.configuracionTipoCirugiaPrevista.campoAgEl);
                this.rutaEliminar = this.configuracionTipoCirugiaPrevista.eliminarP(function () { }, this.configuracionTipoCirugiaPrevista.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionTipoCirugiaPrevista.agregarP(completar, this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta);
                this.rutaEliminar = this.configuracionTipoCirugiaPrevista.eliminarP(completar, this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta);
            }
        }
        else {
            this.lista = this.configuracionTipoCirugiaPrevista.lectura();
            this.rutaAgregar = this.configuracionTipoCirugiaPrevista.agregar();
            this.rutaEliminar = this.configuracionTipoCirugiaPrevista.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "idsolicitudTejidoCorneal")) {
            campos["idsolicitudTejidoCorneal"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "idsolicitudTejidoCorneal"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "qp")) {
            campos["qp"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "qp"), nullable: true };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "dsaek")) {
            campos["dsaek"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "dsaek"), nullable: true };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "dalk")) {
            campos["dalk"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "dalk"), nullable: true };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "dmek")) {
            campos["dmek"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "dmek"), nullable: true };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "otra")) {
            campos["otra"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "otra"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "tipoCirugiaPrevista", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionTipoCirugiaPrevista.rutaActualizar,
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
            if (self.configuracionTipoCirugiaPrevista.campoAgEl) {
                if (self.configuracionTipoCirugiaPrevista.tipocampoAgEl == "TipoCirugiaPrevistaTipoCirugiaPrevista")
                    self.configuracionTipoCirugiaPrevista.campoAgEl.tipoCirugiaPrevista2 = options.models[0];
                else
                    self.configuracionTipoCirugiaPrevista.campoAgEl.tipoCirugiaPrevista = options.models[0];
                return JSON.stringify(self.configuracionTipoCirugiaPrevista.campoAgEl);
            }
            else if (est.options[operation].data.models.tipoCirugiaPrevista) {
                est.options[operation].data.models.tipoCirugiaPrevista2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    TipoCirugiaPrevistaListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "idsolicitudTejidoCorneal")) {
            columnas.push({ field: "idsolicitudTejidoCorneal", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "idsolicitudTejidoCorneal"), editor: idsolicitudTejidoCornealDropDownEditor, template: " #if (idsolicitudTejidoCorneal){#   #=idsolicitudTejidoCorneal.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "qp")) {
            columnas.push({ field: "qp", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "qp") });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "dsaek")) {
            columnas.push({ field: "dsaek", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "dsaek") });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "dalk")) {
            columnas.push({ field: "dalk", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "dalk") });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "dmek")) {
            columnas.push({ field: "dmek", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "dmek") });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "otra")) {
            columnas.push({ field: "otra", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "otra"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "tipoCirugiaPrevista", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "tipoCirugiaPrevista", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "tipoCirugiaPrevista"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "tipoCirugiaPrevista")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "tipoCirugiaPrevista")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "tipoCirugiaPrevista") && this.configuracionTipoCirugiaPrevista.tipoCirugiaPrevistaConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_tipoCirugiaPrevista_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_tipoCirugiaPrevista_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionTipoCirugiaPrevista.altoComponente,
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
        this.grid = $("#grid_tipoCirugiaPrevista_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudTejidoCorneal = this.urlprovider.serverURL + "solicitudTejidoCorneal/getSolicitudTejidoCornealesActivos";
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
        function idsolicitudTejidoCornealDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "folioSolicitudTejidoCorneal",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidsolicitudTejidoCorneal,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    TipoCirugiaPrevistaListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_tipoCirugiaPrevista_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.tipoCirugiaPrevistaSeleccionado = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_3__["TipoCirugiaPrevista"]();
        gridac.tipoCirugiaPrevistaSeleccionado.from(dataItem);
        gridac.evtTipoCirugiaPrevistaSeleccionado.emit(gridac.tipoCirugiaPrevistaSeleccionado);
        (gridac.tipoCirugiaPrevistaSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_4__["ConfigurarTipoCirugiaPrevista"])
    ], TipoCirugiaPrevistaListKendoComponent.prototype, "configuracionTipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TipoCirugiaPrevistaListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("tipoCirugiaPrevistaSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TipoCirugiaPrevistaListKendoComponent.prototype, "evtTipoCirugiaPrevistaSeleccionado", void 0);
    TipoCirugiaPrevistaListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipo-cirugia-prevista-list-kendo',
            template: __webpack_require__(/*! ./tipo-cirugia-prevista-list-kendo.component.html */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./tipo-cirugia-prevista-list-kendo.component.css */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], TipoCirugiaPrevistaListKendoComponent);
    return TipoCirugiaPrevistaListKendoComponent;
}());



/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: TipoCirugiaPrevistaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCirugiaPrevistaRoutingModule", function() { return TipoCirugiaPrevistaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tipo_cirugia_previstas_tipo_cirugia_prevista_list_kendo_tipo_cirugia_prevista_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.ts");
/* harmony import */ var _tipo_cirugia_previstas_tipo_cirugia_prevista_crud_tipo_cirugia_prevista_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.ts");
/* harmony import */ var _tipo_cirugia_previstas_tipo_cirugia_prevista_table_tipo_cirugia_prevista_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'tipo-cirugia-prevista-list-kendo', component: _tipo_cirugia_previstas_tipo_cirugia_prevista_list_kendo_tipo_cirugia_prevista_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["TipoCirugiaPrevistaListKendoComponent"] },
    { path: 'tipo-cirugia-prevista-crud', component: _tipo_cirugia_previstas_tipo_cirugia_prevista_crud_tipo_cirugia_prevista_crud_component__WEBPACK_IMPORTED_MODULE_3__["TipoCirugiaPrevistaCrudComponent"] },
    { path: 'tipo-cirugia-prevista-table', component: _tipo_cirugia_previstas_tipo_cirugia_prevista_table_tipo_cirugia_prevista_table_component__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevistaTableComponent"] },
];
var TipoCirugiaPrevistaRoutingModule = /** @class */ (function () {
    function TipoCirugiaPrevistaRoutingModule() {
    }
    TipoCirugiaPrevistaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TipoCirugiaPrevistaRoutingModule);
    return TipoCirugiaPrevistaRoutingModule;
}());



/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_tipoCirugiaPrevista\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','id')\" >{{aetiqueta('tipoCirugiaPrevista','id')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','idsolicitudTejidoCorneal')\" >{{aetiqueta('tipoCirugiaPrevista','idsolicitudTejidoCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','qp')\" >{{aetiqueta('tipoCirugiaPrevista','qp')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','dsaek')\" >{{aetiqueta('tipoCirugiaPrevista','dsaek')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','dalk')\" >{{aetiqueta('tipoCirugiaPrevista','dalk')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','dmek')\" >{{aetiqueta('tipoCirugiaPrevista','dmek')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','otra')\" >{{aetiqueta('tipoCirugiaPrevista','otra')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','fechaRegistro')\" >{{aetiqueta('tipoCirugiaPrevista','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','fechaActualizacion')\" >{{aetiqueta('tipoCirugiaPrevista','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','fechaBaja')\" >{{aetiqueta('tipoCirugiaPrevista','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','usuarioUltMov')\" >{{aetiqueta('tipoCirugiaPrevista','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','status')\" >{{aetiqueta('tipoCirugiaPrevista','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','id')\" >{{aetiqueta('tipoCirugiaPrevista','id')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','idsolicitudTejidoCorneal')\" >{{aetiqueta('tipoCirugiaPrevista','idsolicitudTejidoCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','qp')\" >{{aetiqueta('tipoCirugiaPrevista','qp')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','dsaek')\" >{{aetiqueta('tipoCirugiaPrevista','dsaek')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','dalk')\" >{{aetiqueta('tipoCirugiaPrevista','dalk')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','dmek')\" >{{aetiqueta('tipoCirugiaPrevista','dmek')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','otra')\" >{{aetiqueta('tipoCirugiaPrevista','otra')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','fechaRegistro')\" >{{aetiqueta('tipoCirugiaPrevista','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','fechaActualizacion')\" >{{aetiqueta('tipoCirugiaPrevista','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','fechaBaja')\" >{{aetiqueta('tipoCirugiaPrevista','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','usuarioUltMov')\" >{{aetiqueta('tipoCirugiaPrevista','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('tipoCirugiaPrevista','status')\" >{{aetiqueta('tipoCirugiaPrevista','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-tipo-cirugia-prevista [class.hidden]=\"primero\" [(tipoCirugiaPrevista)]=\"tipoCirugiaPrevistaSeleccionado\" (tipoCirugiaPrevistaTablaChange)=\"cambio_tipoCirugiaPrevista($event)\"> </app-tipo-cirugia-prevista>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TipoCirugiaPrevistaTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCirugiaPrevistaTableComponent", function() { return TipoCirugiaPrevistaTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts");
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






var TipoCirugiaPrevistaTableComponent = /** @class */ (function () {
    function TipoCirugiaPrevistaTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "tipoCirugiaPrevista", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.tipoCirugiaPrevistaSeleccionado = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__["TipoCirugiaPrevista"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'tipoCirugiaPrevista'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    TipoCirugiaPrevistaTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'tipoCirugiaPrevista'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    TipoCirugiaPrevistaTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(TipoCirugiaPrevistaTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    TipoCirugiaPrevistaTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("tipoCirugiaPrevista", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("tipoCirugiaPrevista", "idsolicitudTejidoCorneal"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idsolicitudTejidoCorneal)
                    return "<span style=\"cursor: pointer\">" + oObj.idsolicitudTejidoCorneal.folioSolicitudTejidoCorneal + "</span>";
                return "";
            }
        });
        if (!this.avisible("tipoCirugiaPrevista", "qp"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "qp" });
        if (!this.avisible("tipoCirugiaPrevista", "dsaek"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "dsaek" });
        if (!this.avisible("tipoCirugiaPrevista", "dalk"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "dalk" });
        if (!this.avisible("tipoCirugiaPrevista", "dmek"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "dmek" });
        if (!this.avisible("tipoCirugiaPrevista", "otra"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "otra" });
        if (!this.avisible("tipoCirugiaPrevista", "fechaRegistro"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("tipoCirugiaPrevista", "fechaActualizacion"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("tipoCirugiaPrevista", "fechaBaja"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("tipoCirugiaPrevista", "usuarioUltMov"))
            columnasNoVisibles.push(10);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("tipoCirugiaPrevista", "status"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("tipoCirugiaPrevista"))
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
        var tabla = $('#tabla_tipoCirugiaPrevista').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_tipoCirugiaPrevista_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.tipoCirugiaPrevistaSeleccionado = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__["TipoCirugiaPrevista"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "tipoCirugiaPrevista/getTipoCirugiaPrevistas",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_tipoCirugiaPrevista tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_tipoCirugiaPrevista').DataTable().row(this).data();
                self.tipoCirugiaPrevistaSeleccionado = new _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__["TipoCirugiaPrevista"]();
                self.tipoCirugiaPrevistaSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_tipoCirugiaPrevista').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    TipoCirugiaPrevistaTableComponent.prototype.ngOnInit = function () {
    };
    TipoCirugiaPrevistaTableComponent.prototype.cambio_tipoCirugiaPrevista = function (tipoCirugiaPrevista) {
        $('#tabla_tipoCirugiaPrevista').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    TipoCirugiaPrevistaTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    TipoCirugiaPrevistaTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    TipoCirugiaPrevistaTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    TipoCirugiaPrevistaTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    TipoCirugiaPrevistaTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    TipoCirugiaPrevistaTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    TipoCirugiaPrevistaTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    TipoCirugiaPrevistaTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    TipoCirugiaPrevistaTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    TipoCirugiaPrevistaTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    TipoCirugiaPrevistaTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    TipoCirugiaPrevistaTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    TipoCirugiaPrevistaTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    TipoCirugiaPrevistaTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    TipoCirugiaPrevistaTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    TipoCirugiaPrevistaTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipo-cirugia-prevista-table',
            template: __webpack_require__(/*! ./tipo-cirugia-prevista-table.component.html */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.html"),
            styles: [__webpack_require__(/*! ./tipo-cirugia-prevista-table.component.css */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], TipoCirugiaPrevistaTableComponent);
    return TipoCirugiaPrevistaTableComponent;
}());



/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista.module.ts ***!
  \************************************************************************/
/*! exports provided: TipoCirugiaPrevistaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCirugiaPrevistaModule", function() { return TipoCirugiaPrevistaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tipo_cirugia_prevista_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tipo-cirugia-prevista-routing.module */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-routing.module.ts");
/* harmony import */ var _tipo_cirugia_prevista_list_kendo_tipo_cirugia_prevista_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component.ts");
/* harmony import */ var _tipo_cirugia_prevista_crud_tipo_cirugia_prevista_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component.ts");
/* harmony import */ var _tipo_cirugia_prevista_conjunto_tipo_cirugia_prevista_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-conjunto/tipo-cirugia-prevista-conjunto.component.ts");
/* harmony import */ var _tipo_cirugia_prevista_tipo_cirugia_prevista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tipo-cirugia-prevista/tipo-cirugia-prevista.component */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista/tipo-cirugia-prevista.component.ts");
/* harmony import */ var _tipo_cirugia_prevista_table_tipo_cirugia_prevista_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
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










//import { SolicitudTejidoCornealModule }   from '../solicitud-tejido-corneales/solicitud-tejido-corneal.module';

var TipoCirugiaPrevistaModule = /** @class */ (function () {
    function TipoCirugiaPrevistaModule(parentModule) {
        if (parentModule) {
            throw new Error('TipoCirugiaPrevistaModule is already loaded. Import it in the AppModule only');
        }
    }
    TipoCirugiaPrevistaModule_1 = TipoCirugiaPrevistaModule;
    TipoCirugiaPrevistaModule.forRoot = function () {
        return {
            ngModule: TipoCirugiaPrevistaModule_1,
            providers: []
        };
    };
    var TipoCirugiaPrevistaModule_1;
    TipoCirugiaPrevistaModule = TipoCirugiaPrevistaModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _tipo_cirugia_prevista_routing_module__WEBPACK_IMPORTED_MODULE_3__["TipoCirugiaPrevistaRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
                //, SolicitudTejidoCornealModule
            ],
            declarations: [
                _tipo_cirugia_prevista_list_kendo_tipo_cirugia_prevista_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevistaListKendoComponent"],
                _tipo_cirugia_prevista_tipo_cirugia_prevista_component__WEBPACK_IMPORTED_MODULE_7__["TipoCirugiaPrevistaComponent"],
                _tipo_cirugia_prevista_crud_tipo_cirugia_prevista_crud_component__WEBPACK_IMPORTED_MODULE_5__["TipoCirugiaPrevistaCrudComponent"],
                _tipo_cirugia_prevista_conjunto_tipo_cirugia_prevista_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["TipoCirugiaPrevistaConjuntoComponent"],
                _tipo_cirugia_prevista_table_tipo_cirugia_prevista_table_component__WEBPACK_IMPORTED_MODULE_8__["TipoCirugiaPrevistaTableComponent"],
            ],
            exports: [
                _tipo_cirugia_prevista_list_kendo_tipo_cirugia_prevista_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["TipoCirugiaPrevistaListKendoComponent"],
                _tipo_cirugia_prevista_tipo_cirugia_prevista_component__WEBPACK_IMPORTED_MODULE_7__["TipoCirugiaPrevistaComponent"],
                _tipo_cirugia_prevista_crud_tipo_cirugia_prevista_crud_component__WEBPACK_IMPORTED_MODULE_5__["TipoCirugiaPrevistaCrudComponent"],
                _tipo_cirugia_prevista_conjunto_tipo_cirugia_prevista_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["TipoCirugiaPrevistaConjuntoComponent"],
                _tipo_cirugia_prevista_table_tipo_cirugia_prevista_table_component__WEBPACK_IMPORTED_MODULE_8__["TipoCirugiaPrevistaTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [TipoCirugiaPrevistaModule])
    ], TipoCirugiaPrevistaModule);
    return TipoCirugiaPrevistaModule;
}());



/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista/tipo-cirugia-prevista.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista/tipo-cirugia-prevista.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista/tipo-cirugia-prevista.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista/tipo-cirugia-prevista.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h2>TIPOS DE CIRUGÍAS PREVISTAS</h2>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <!--app-componente-identificador [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['id']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.id\"   class=\"w-100\" >\n                    </app-componente-identificador -->\n                    <!--div>\n                        <app-componente-objeto [componente]=\"'tipoCirugiaPrevista'\"\n                                               [atributo]=\"'idsolicitudTejidoCorneal'\"\n                                               [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosTipoCirugiaPrevista['idsolicitudTejidoCorneal']\"\n                                               [(dato)]=\"tipoCirugiaPrevista.idsolicitudTejidoCorneal\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosTipoCirugiaPrevista\"\n                                               [opciones]=\"lista_idsolicitudTejidoCornealTipoCirugiaPrevista\"\n                                               [atributoVisible]=\"'folioSolicitudTejidoCorneal'\" [(objetoEdicion)]=\"idsolicitudTejidoCornealTipoCirugiaPrevistaEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idsolicitudTejidoCornealEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'tipoCirugiaPrevista','idsolicitudTejidoCorneal')\" >\n                                   <app-solicitud-tejido-corneal-crud [nombre]=\"'idsolicitudTejidoCorneal'\" [solicitudTejidoCorneal]=\"tipoCirugiaPrevista.idsolicitudTejidoCorneal\" (solicitudTejidoCornealChange)=\"evtIdsolicitudTejidoCorneal($event)\"\n                                                           [ocultarConjuntosSolicitudTejidoCorneal]=\"'true'\" [class.hidden]=\"!idsolicitudTejidoCornealEditar\" ></app-solicitud-tejido-corneal-crud>\n                            </div>\n                        </div>\n                    </div-->\n                    <!--app-componente-caden [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'qp'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['qp']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.qp\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'dsaek'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['dsaek']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.dsaek\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'dalk'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['dalk']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.dalk\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'dmek'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['dmek']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.dmek\"   class=\"w-100\" >\n                    </app-componente-cadena -->\n                    <div class=\"col-md-12\">\n                        <div class=\"form-check\">\n                            <div>\n                                <label class=\"radio-inline\">\n                              <input id=\"qp\" type=\"checkbox\"  [disabled]= \"desactiva\" [checked]=\"this.tipoCirugiaPrevista.qp ==1\" class=\"form-check-input\" name=\"qp\" (change)=\"$event.target.checked? this.tipoCirugiaPrevista.qp =  1 : this.tipoCirugiaPrevista.qp = 0\"> QP\n                            </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-check\">\n                            <div>\n                                <label class=\"radio-inline\">\n                              <input id=\"dsaek\" [disabled]= \"desactiva\" [checked]=\"this.tipoCirugiaPrevista.dsaek ==1\"  type=\"checkbox\" class=\"form-check-input\" name=\"dsaek\" (change)=\"$event.target.checked? this.tipoCirugiaPrevista.dsaek =  1 : this.tipoCirugiaPrevista.dsaek = 0\"> DSAEK\n                            </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-check\">\n                            <div>\n                                <label class=\"radio-inline\">\n                              <input id=\"dalk\" [disabled]= \"desactiva\" type=\"checkbox\" [checked]=\"this.tipoCirugiaPrevista.dalk ==1\" class=\"form-check-input\" name=\"dalk\" (change)=\"$event.target.checked? this.tipoCirugiaPrevista.dalk =  1 : this.tipoCirugiaPrevista.dalk = 0\"> DALK\n                            </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-check\">\n                            <div>\n                                <label class=\"radio-inline\">\n                              <input id=\"dmek\" [disabled]= \"desactiva\" type=\"checkbox\"  [checked]=\"this.tipoCirugiaPrevista.dmek ==1\" class=\"form-check-input\" name=\"dmek\" (change)=\"$event.target.checked? this.tipoCirugiaPrevista.dmek =  1 : this.tipoCirugiaPrevista.dmek = 0\"> DMEK\n                            </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-check\">\n                            <div>\n                                <label class=\"radio-inline\">\n                              <input id=\"otra\" [disabled]= \"desactiva\" type=\"checkbox\"  [checked]=\"this.otracheck ==1\" class=\"form-check-input\" name=\"otra\" (change)=\"triggerSomeEvent()\"> OTRA Especificar\n                            </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <textarea [disabled]=\"isDisabled\" type=\"text\" class=\"form-control\" style=\"max-width: 100%; margin-top: 0px; margin-bottom: 0px; height: 90px;\" id=\"tipoCirugiaPrevista_otra\" [(ngModel)]=\"this.tipoCirugiaPrevista.otra\" name=\"otra\" #componenteInput=\"ngModel\"\n                         (keyup)=\"globalesService.cvtMaysculas($event)\"   maxlength=\"255\">\n                        </textarea>\n\n\n\n                        <!-- <app-componente-cadena-larga [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'otra'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['otra']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.otra\" [maxlength]=255  class=\"w-100\" >\n                    </app-componente-cadena-larga > -->\n                    </div>\n                    <!--app-componente-fecha [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['fechaRegistro']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['fechaActualizacion']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['fechaBaja']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha -->\n                    <!--div>\n                        <app-componente-objeto [componente]=\"'tipoCirugiaPrevista'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosTipoCirugiaPrevista['usuarioUltMov']\"\n                                               [(dato)]=\"tipoCirugiaPrevista.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosTipoCirugiaPrevista\"\n                                               [opciones]=\"lista_usuarioUltMovTipoCirugiaPrevista\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovTipoCirugiaPrevistaEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'tipoCirugiaPrevista','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"tipoCirugiaPrevista.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div-->\n                    <!--app-componente-radio [componente]=\"'tipoCirugiaPrevista'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"tipoCirugiaPrevistaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosTipoCirugiaPrevista['status']\"\n                                                   [(dato)]=\"tipoCirugiaPrevista.status\"   class=\"w-100\" >\n                    </app-componente-radio -->\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista/tipo-cirugia-prevista.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista/tipo-cirugia-prevista.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TipoCirugiaPrevistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCirugiaPrevistaComponent", function() { return TipoCirugiaPrevistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipoCirugiaPrevistaComponent = /** @class */ (function () {
    function TipoCirugiaPrevistaComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tipoCirugiaPrevistaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovTipoCirugiaPrevistaUsuarioEditar = false;
        this.idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEditar = false;
        this.desactiva = false;
    }
    TipoCirugiaPrevistaComponent.prototype.actualizarTipoCirugiaPrevista = function () {
        if (this.tipoCirugiaPrevista.id == null) {
            this.tipoCirugiaPrevistaService.guardarTipoCirugiaPrevista(this.tipoCirugiaPrevista, this.evtGuardar, this);
        }
        else {
            this.tipoCirugiaPrevistaService.actualizarTipoCirugiaPrevista(this.tipoCirugiaPrevista, this.evtActualiza, this);
        }
    };
    TipoCirugiaPrevistaComponent.prototype.evtGuardar = function (tipoCirugiaPrevista, obj) {
        obj.tipoCirugiaPrevista = tipoCirugiaPrevista;
        obj.tipoCirugiaPrevistaChange.emit(obj.tipoCirugiaPrevista);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    TipoCirugiaPrevistaComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.tipoCirugiaPrevistaChange.emit(obj.tipoCirugiaPrevista);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    TipoCirugiaPrevistaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarTipoCirugiaPrevista();
            }
        }
    };
    TipoCirugiaPrevistaComponent.prototype.ngOnInit = function () {
    };
    TipoCirugiaPrevistaComponent.prototype.triggerSomeEvent = function () {
        this.isDisabled = !this.isDisabled;
        this.limpiarOtra();
        return;
    };
    //   get desactivarOtra(): boolean {
    //     ("this.tipoCirugiaPrevista.otra: " + this.tipoCirugiaPrevista.otra);
    //this.limpiarOtra();
    //     //("otra" + this.otra);
    //     return (
    //       this.otra != 1
    //     );
    //   }
    TipoCirugiaPrevistaComponent.prototype.limpiarOtra = function () {
        if (this.isDisabled)
            this.otracheck = 0;
        this.tipoCirugiaPrevista.otra = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "tipoCirugiaPrevistaBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "validosTipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_1__["TipoCirugiaPrevista"])
    ], TipoCirugiaPrevistaComponent.prototype, "tipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "tipoCirugiaPrevistaService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TipoCirugiaPrevistaComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "tipoCirugiaPrevistaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "lista_usuarioUltMovTipoCirugiaPrevistaUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TipoCirugiaPrevistaComponent.prototype, "lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TipoCirugiaPrevistaComponent.prototype, "desactiva", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TipoCirugiaPrevistaComponent.prototype, "otracheck", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TipoCirugiaPrevistaComponent.prototype, "isDisabled", void 0);
    TipoCirugiaPrevistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tipo-cirugia-prevista',
            template: __webpack_require__(/*! ./tipo-cirugia-prevista.component.html */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista/tipo-cirugia-prevista.component.html"),
            styles: [__webpack_require__(/*! ./tipo-cirugia-prevista.component.css */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista/tipo-cirugia-prevista.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], TipoCirugiaPrevistaComponent);
    return TipoCirugiaPrevistaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-evaluaciones-almacen-evaluacion-module~app-solicitud-tejido-corneal-almacenes-so~70dbc9b1.js.map