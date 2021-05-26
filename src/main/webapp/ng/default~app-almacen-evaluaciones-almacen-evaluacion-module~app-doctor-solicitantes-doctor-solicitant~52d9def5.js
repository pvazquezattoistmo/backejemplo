(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-evaluaciones-almacen-evaluacion-module~app-doctor-solicitantes-doctor-solicitant~52d9def5"],{

/***/ "./src/app/doctor-solicitantes/shared/doctor-solicitante.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/shared/doctor-solicitante.service.ts ***!
  \**************************************************************************/
/*! exports provided: DoctorSolicitanteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSolicitanteService", function() { return DoctorSolicitanteService; });
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


var DoctorSolicitanteService = /** @class */ (function () {
    function DoctorSolicitanteService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    DoctorSolicitanteService.prototype.setDoctorSolicitante = function (doctorSolicitante) {
        this.doctorSolicitante = doctorSolicitante;
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitante = function () {
        return this.doctorSolicitante;
    };
    DoctorSolicitanteService.prototype.guardarDoctorSolicitante = function (doctorSolicitante, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(doctorSolicitante, 'doctorSolicitante/guardarDoctorSolicitante')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.actualizarDoctorSolicitante = function (doctorSolicitante, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(doctorSolicitante, 'doctorSolicitante/actualizarDoctorSolicitante')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.eliminarDoctorSolicitante = function (doctorSolicitante, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(doctorSolicitante, 'doctorSolicitante/eliminarDoctorSolicitante')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantedb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorSolicitante/getDoctorSolicitante')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantes = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'doctorSolicitante/getDoctorSolicitantes')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'doctorSolicitante/getDoctorSolicitantesActivos')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.lazyDoctorSolicitante = function (doctorSolicitante, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(doctorSolicitante, 'doctorSolicitante/lazyDoctorSolicitante')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
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
    DoctorSolicitanteService.prototype.getDoctorSolicitanteById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorSolicitante/getDoctorSolicitanteById')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorSolicitante/getDoctorSolicitantesById')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'doctorSolicitante/getDoctorSolicitanteByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'doctorSolicitante/getDoctorSolicitantesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByIdhospital = function (idhospital, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'doctorSolicitante/getDoctorSolicitanteByIdhospital')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByIdhospital = function (idhospital, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'doctorSolicitante/getDoctorSolicitantesByIdhospital')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'doctorSolicitante/getDoctorSolicitanteByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'doctorSolicitante/getDoctorSolicitantesByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'doctorSolicitante/getDoctorSolicitanteByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'doctorSolicitante/getDoctorSolicitantesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'doctorSolicitante/getDoctorSolicitanteBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'doctorSolicitante/getDoctorSolicitantesBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'doctorSolicitante/getDoctorSolicitanteByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'doctorSolicitante/getDoctorSolicitantesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByTelefono = function (telefono, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(telefono, 'doctorSolicitante/getDoctorSolicitanteByTelefono')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByTelefono = function (telefono, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(telefono, 'doctorSolicitante/getDoctorSolicitantesByTelefono')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'doctorSolicitante/getDoctorSolicitanteByNombre')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'doctorSolicitante/getDoctorSolicitantesByNombre')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByCorreoElectronico = function (correoElectronico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'doctorSolicitante/getDoctorSolicitanteByCorreoElectronico')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByCorreoElectronico = function (correoElectronico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'doctorSolicitante/getDoctorSolicitantesByCorreoElectronico')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'doctorSolicitante/getDoctorSolicitanteByStatus')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'doctorSolicitante/getDoctorSolicitantesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'doctorSolicitante/getDoctorSolicitanteByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'doctorSolicitante/getDoctorSolicitantesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitanteByIdcargo = function (idcargo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idcargo, 'doctorSolicitante/getDoctorSolicitanteByIdcargo')
            .subscribe(function (data) {
            _evento(_this.doctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByIdcargo = function (idcargo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idcargo, 'doctorSolicitante/getDoctorSolicitantesByIdcargo')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
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
    DoctorSolicitanteService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'doctorSolicitante/custom')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService.prototype.getDoctorSolicitantesByDto = function (p_doctorSolicitante, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_doctorSolicitante, 'doctorSolicitante/getDoctorSolicitantesByDto')
            .subscribe(function (data) {
            _evento(_this.listaDoctorSolicitante = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorSolicitante);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorSolicitanteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], DoctorSolicitanteService);
    return DoctorSolicitanteService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-evaluaciones-almacen-evaluacion-module~app-doctor-solicitantes-doctor-solicitant~52d9def5.js.map