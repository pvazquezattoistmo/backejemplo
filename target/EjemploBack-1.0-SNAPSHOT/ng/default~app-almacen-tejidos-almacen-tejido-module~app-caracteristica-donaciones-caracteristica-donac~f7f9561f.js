(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-tejidos-almacen-tejido-module~app-caracteristica-donaciones-caracteristica-donac~f7f9561f"],{

/***/ "./src/app/almacen-tejidos/shared/almacen-tejido.ts":
/*!**********************************************************!*\
  !*** ./src/app/almacen-tejidos/shared/almacen-tejido.ts ***!
  \**********************************************************/
/*! exports provided: AlmacenTejido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenTejido", function() { return AlmacenTejido; });
/**
 *
 * @author IstmoSoft
 */
var AlmacenTejido = /** @class */ (function () {
    // atributos fin
    function AlmacenTejido(entrada) {
        if (entrada === void 0) { entrada = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.ubicacion = null;
        this.fechaRegistro = null;
        this.horaRefrigeracion = null;
        this.fechaActualizacion = null;
        this.estatusProceso = null;
        this.comentario = null;
        this.temperaturaRefrigeracion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idoficioDonacion = null;
        if (entrada !== null) {
            this.from(entrada);
        }
    }
    AlmacenTejido.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.ubicacion)
            this.ubicacion = source.ubicacion;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.horaRefrigeracion)
            this.horaRefrigeracion = source.horaRefrigeracion;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.estatusProceso)
            this.estatusProceso = source.estatusProceso;
        if (source.comentario)
            this.comentario = source.comentario;
        if (source.temperaturaRefrigeracion)
            this.temperaturaRefrigeracion = source.temperaturaRefrigeracion;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idoficioDonacion)
            this.idoficioDonacion = source.idoficioDonacion;
    };
    AlmacenTejido.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.ubicacion)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.horaRefrigeracion)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.estatusProceso)
            return true;
        if (this.comentario)
            return true;
        if (this.temperaturaRefrigeracion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idoficioDonacion)
            return true;
        return false;
    };
    AlmacenTejido.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.ubicacion != null && typeof this.ubicacion === 'string' && this.ubicacion.replace(/^\s+|\s+$/g, '') == "")
            this.ubicacion = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.horaRefrigeracion != null && typeof this.horaRefrigeracion === 'string' && this.horaRefrigeracion.replace(/^\s+|\s+$/g, '') == "")
            this.horaRefrigeracion = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.estatusProceso != null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '') == "")
            this.estatusProceso = null;
        if (this.comentario != null && typeof this.comentario === 'string' && this.comentario.replace(/^\s+|\s+$/g, '') == "")
            this.comentario = null;
        if (this.temperaturaRefrigeracion != null && typeof this.temperaturaRefrigeracion === 'string' && this.temperaturaRefrigeracion.replace(/^\s+|\s+$/g, '') == "")
            this.temperaturaRefrigeracion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idoficioDonacion != null && typeof this.idoficioDonacion === 'string' && this.idoficioDonacion.replace(/^\s+|\s+$/g, '') == "")
            this.idoficioDonacion = null;
        return this;
    };
    return AlmacenTejido;
}());



/***/ }),

/***/ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts ***!
  \*****************************************************************************/
/*! exports provided: CaracteristicaDonacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicaDonacion", function() { return CaracteristicaDonacion; });
/**
 *
 * @author IstmoSoft
 */
var CaracteristicaDonacion = /** @class */ (function () {
    // atributos fin
    function CaracteristicaDonacion(entrada) {
        if (entrada === void 0) { entrada = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.oiciCultivo = null;
        this.oici = null;
        this.odcdCultivo = null;
        this.odcd = null;
        this.fechaRegistro = null;
        this.fechaActualizacion = null;
        this.tiempoIsquemia = null;
        this.observacion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idoficioDonacion = null;
        if (entrada !== null) {
            this.from(entrada);
        }
    }
    CaracteristicaDonacion.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.oiciCultivo)
            this.oiciCultivo = source.oiciCultivo;
        if (source.oici)
            this.oici = source.oici;
        if (source.odcdCultivo)
            this.odcdCultivo = source.odcdCultivo;
        if (source.odcd)
            this.odcd = source.odcd;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.tiempoIsquemia)
            this.tiempoIsquemia = source.tiempoIsquemia;
        if (source.observacion)
            this.observacion = source.observacion;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idoficioDonacion)
            this.idoficioDonacion = source.idoficioDonacion;
    };
    CaracteristicaDonacion.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.oiciCultivo)
            return true;
        if (this.oici)
            return true;
        if (this.odcdCultivo)
            return true;
        if (this.odcd)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.tiempoIsquemia)
            return true;
        if (this.observacion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idoficioDonacion)
            return true;
        return false;
    };
    CaracteristicaDonacion.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.oiciCultivo != null && typeof this.oiciCultivo === 'string' && this.oiciCultivo.replace(/^\s+|\s+$/g, '') == "")
            this.oiciCultivo = null;
        if (this.oici != null && typeof this.oici === 'string' && this.oici.replace(/^\s+|\s+$/g, '') == "")
            this.oici = null;
        if (this.odcdCultivo != null && typeof this.odcdCultivo === 'string' && this.odcdCultivo.replace(/^\s+|\s+$/g, '') == "")
            this.odcdCultivo = null;
        if (this.odcd != null && typeof this.odcd === 'string' && this.odcd.replace(/^\s+|\s+$/g, '') == "")
            this.odcd = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.tiempoIsquemia != null && typeof this.tiempoIsquemia === 'string' && this.tiempoIsquemia.replace(/^\s+|\s+$/g, '') == "")
            this.tiempoIsquemia = null;
        if (this.observacion != null && typeof this.observacion === 'string' && this.observacion.replace(/^\s+|\s+$/g, '') == "")
            this.observacion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idoficioDonacion != null && typeof this.idoficioDonacion === 'string' && this.idoficioDonacion.replace(/^\s+|\s+$/g, '') == "")
            this.idoficioDonacion = null;
        return this;
    };
    return CaracteristicaDonacion;
}());



/***/ }),

/***/ "./src/app/documentacion-donaciones/shared/documentacion-donacion.ts":
/*!***************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/shared/documentacion-donacion.ts ***!
  \***************************************************************************/
/*! exports provided: DocumentacionDonacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionDonacion", function() { return DocumentacionDonacion; });
/**
 *
 * @author IstmoSoft
 */
var DocumentacionDonacion = /** @class */ (function () {
    // atributos fin
    function DocumentacionDonacion(entrada) {
        if (entrada === void 0) { entrada = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.certificadoMuerteEncefalico = null;
        this.consentimientoInformado = null;
        this.fechaRegistro = null;
        this.panelViral = null;
        this.revisionLampara = null;
        this.fechaActualizacion = null;
        this.certificadoDefunsion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idoficioDonacion = null;
        this.idCenatraCi = null;
        this.idCenatraCd = null;
        if (entrada !== null) {
            this.from(entrada);
        }
    }
    DocumentacionDonacion.prototype.from = function (source) {
        if (source.idCenatraCi)
            this.idCenatraCi = source.idCenatraCi;
        if (source.idCenatraCd)
            this.idCenatraCd = source.idCenatraCd;
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.certificadoMuerteEncefalico)
            this.certificadoMuerteEncefalico = source.certificadoMuerteEncefalico;
        if (source.consentimientoInformado)
            this.consentimientoInformado = source.consentimientoInformado;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.panelViral)
            this.panelViral = source.panelViral;
        if (source.revisionLampara)
            this.revisionLampara = source.revisionLampara;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.certificadoDefunsion)
            this.certificadoDefunsion = source.certificadoDefunsion;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idoficioDonacion)
            this.idoficioDonacion = source.idoficioDonacion;
    };
    DocumentacionDonacion.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.certificadoMuerteEncefalico)
            return true;
        if (this.consentimientoInformado)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.panelViral)
            return true;
        if (this.revisionLampara)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.certificadoDefunsion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idoficioDonacion)
            return true;
        return false;
    };
    DocumentacionDonacion.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.certificadoMuerteEncefalico != null && typeof this.certificadoMuerteEncefalico === 'string' && this.certificadoMuerteEncefalico.replace(/^\s+|\s+$/g, '') == "")
            this.certificadoMuerteEncefalico = null;
        if (this.consentimientoInformado != null && typeof this.consentimientoInformado === 'string' && this.consentimientoInformado.replace(/^\s+|\s+$/g, '') == "")
            this.consentimientoInformado = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.panelViral != null && typeof this.panelViral === 'string' && this.panelViral.replace(/^\s+|\s+$/g, '') == "")
            this.panelViral = null;
        if (this.revisionLampara != null && typeof this.revisionLampara === 'string' && this.revisionLampara.replace(/^\s+|\s+$/g, '') == "")
            this.revisionLampara = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.certificadoDefunsion != null && typeof this.certificadoDefunsion === 'string' && this.certificadoDefunsion.replace(/^\s+|\s+$/g, '') == "")
            this.certificadoDefunsion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idoficioDonacion != null && typeof this.idoficioDonacion === 'string' && this.idoficioDonacion.replace(/^\s+|\s+$/g, '') == "")
            this.idoficioDonacion = null;
        return this;
    };
    return DocumentacionDonacion;
}());



/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts ***!
  \****************************************************************************************/
/*! exports provided: GestionMuestraMicrobiologia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionMuestraMicrobiologia", function() { return GestionMuestraMicrobiologia; });
/**
 *
 * @author IstmoSoft
 */
var GestionMuestraMicrobiologia = /** @class */ (function () {
    // atributos fin
    function GestionMuestraMicrobiologia(entrada) {
        if (entrada === void 0) { entrada = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.envio = null;
        this.horaInicioRevision = null;
        this.fechaBaja = null;
        this.fechaInicioRevision = null;
        this.fechaRegistro = null;
        this.almacenHora = null;
        this.fechaActualizacion = null;
        this.comentario = null;
        this.almacenMuestra = null;
        this.revision = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idoficioDonacion = null;
        if (entrada !== null) {
            this.from(entrada);
        }
    }
    GestionMuestraMicrobiologia.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.envio)
            this.envio = source.envio;
        if (source.horaInicioRevision)
            this.horaInicioRevision = source.horaInicioRevision;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.fechaInicioRevision)
            this.fechaInicioRevision = source.fechaInicioRevision;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.almacenHora)
            this.almacenHora = source.almacenHora;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.comentario)
            this.comentario = source.comentario;
        if (source.almacenMuestra)
            this.almacenMuestra = source.almacenMuestra;
        if (source.revision)
            this.revision = source.revision;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idoficioDonacion)
            this.idoficioDonacion = source.idoficioDonacion;
    };
    GestionMuestraMicrobiologia.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.envio)
            return true;
        if (this.horaInicioRevision)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.fechaInicioRevision)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.almacenHora)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.comentario)
            return true;
        if (this.almacenMuestra)
            return true;
        if (this.revision)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idoficioDonacion)
            return true;
        return false;
    };
    GestionMuestraMicrobiologia.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.envio != null && typeof this.envio === 'string' && this.envio.replace(/^\s+|\s+$/g, '') == "")
            this.envio = null;
        if (this.horaInicioRevision != null && typeof this.horaInicioRevision === 'string' && this.horaInicioRevision.replace(/^\s+|\s+$/g, '') == "")
            this.horaInicioRevision = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.fechaInicioRevision != null && typeof this.fechaInicioRevision === 'string' && this.fechaInicioRevision.replace(/^\s+|\s+$/g, '') == "")
            this.fechaInicioRevision = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.almacenHora != null && typeof this.almacenHora === 'string' && this.almacenHora.replace(/^\s+|\s+$/g, '') == "")
            this.almacenHora = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.comentario != null && typeof this.comentario === 'string' && this.comentario.replace(/^\s+|\s+$/g, '') == "")
            this.comentario = null;
        if (this.almacenMuestra != null && typeof this.almacenMuestra === 'string' && this.almacenMuestra.replace(/^\s+|\s+$/g, '') == "")
            this.almacenMuestra = null;
        if (this.revision != null && typeof this.revision === 'string' && this.revision.replace(/^\s+|\s+$/g, '') == "")
            this.revision = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idoficioDonacion != null && typeof this.idoficioDonacion === 'string' && this.idoficioDonacion.replace(/^\s+|\s+$/g, '') == "")
            this.idoficioDonacion = null;
        return this;
    };
    return GestionMuestraMicrobiologia;
}());



/***/ }),

/***/ "./src/app/oficio-donaciones/shared/oficio-donacion.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/oficio-donaciones/shared/oficio-donacion.service.ts ***!
  \*********************************************************************/
/*! exports provided: OficioDonacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficioDonacionService", function() { return OficioDonacionService; });
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


var OficioDonacionService = /** @class */ (function () {
    function OficioDonacionService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    OficioDonacionService.prototype.setOficioDonacion = function (oficioDonacion) {
        this.oficioDonacion = oficioDonacion;
    };
    OficioDonacionService.prototype.getOficioDonacion = function () {
        return this.oficioDonacion;
    };
    OficioDonacionService.prototype.guardarOficioDonacion = function (oficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(oficioDonacion, 'oficioDonacion/guardarOficioDonacion')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.actualizarOficioDonacion = function (oficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(oficioDonacion, 'oficioDonacion/actualizarOficioDonacion')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.eliminarOficioDonacion = function (oficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(oficioDonacion, 'oficioDonacion/eliminarOficioDonacion')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonaciondb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'oficioDonacion/getOficioDonacion')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonaciones = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'oficioDonacion/getOficioDonaciones')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'oficioDonacion/getOficioDonacionesActivos')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.lazyOficioDonacion = function (oficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(oficioDonacion, 'oficioDonacion/lazyOficioDonacion')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
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
    OficioDonacionService.prototype.getOficioDonacionById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'oficioDonacion/getOficioDonacionById')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'oficioDonacion/getOficioDonacionesById')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'oficioDonacion/getOficioDonacionByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'oficioDonacion/getOficioDonacionesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionByIncidenciaTejido = function (incidenciaTejido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(incidenciaTejido, 'oficioDonacion/getOficioDonacionByIncidenciaTejido')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByIncidenciaTejido = function (incidenciaTejido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(incidenciaTejido, 'oficioDonacion/getOficioDonacionesByIncidenciaTejido')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionByBotonCorneal = function (botonCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(botonCorneal, 'oficioDonacion/getOficioDonacionByBotonCorneal')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByBotonCorneal = function (botonCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(botonCorneal, 'oficioDonacion/getOficioDonacionesByBotonCorneal')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'oficioDonacion/getOficioDonacionByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'oficioDonacion/getOficioDonacionesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'oficioDonacion/getOficioDonacionByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'oficioDonacion/getOficioDonacionesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionByMicrobiologiaCorneal = function (microbiologiaCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(microbiologiaCorneal, 'oficioDonacion/getOficioDonacionByMicrobiologiaCorneal')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByMicrobiologiaCorneal = function (microbiologiaCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(microbiologiaCorneal, 'oficioDonacion/getOficioDonacionesByMicrobiologiaCorneal')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'oficioDonacion/getOficioDonacionByStatus')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'oficioDonacion/getOficioDonacionesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'oficioDonacion/getOficioDonacionByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'oficioDonacion/getOficioDonacionesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionByIdrecepcionSolicitudEvaluacion = function (idrecepcionSolicitudEvaluacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idrecepcionSolicitudEvaluacion, 'oficioDonacion/getOficioDonacionByIdrecepcionSolicitudEvaluacion')
            .subscribe(function (data) {
            _evento(_this.oficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.oficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByIdrecepcionSolicitudEvaluacion = function (idrecepcionSolicitudEvaluacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idrecepcionSolicitudEvaluacion, 'oficioDonacion/getOficioDonacionesByIdrecepcionSolicitudEvaluacion')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
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
    OficioDonacionService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'oficioDonacion/custom')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService.prototype.getOficioDonacionesByDto = function (p_oficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_oficioDonacion, 'oficioDonacion/getOficioDonacionesByDto')
            .subscribe(function (data) {
            _evento(_this.listaOficioDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaOficioDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    OficioDonacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], OficioDonacionService);
    return OficioDonacionService;
}());



/***/ }),

/***/ "./src/app/oficio-donaciones/shared/oficio-donacion.ts":
/*!*************************************************************!*\
  !*** ./src/app/oficio-donaciones/shared/oficio-donacion.ts ***!
  \*************************************************************/
/*! exports provided: OficioDonacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficioDonacion", function() { return OficioDonacion; });
/* harmony import */ var _almacen_tejidos_shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../almacen-tejidos/shared/almacen-tejido */ "./src/app/almacen-tejidos/shared/almacen-tejido.ts");
/* harmony import */ var _gestion_muestra_microbiologias_shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts");
/* harmony import */ var _caracteristica_donaciones_shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../caracteristica-donaciones/shared/caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts");
/* harmony import */ var _documentacion_donaciones_shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../documentacion-donaciones/shared/documentacion-donacion */ "./src/app/documentacion-donaciones/shared/documentacion-donacion.ts");




/**
 *
 * @author IstmoSoft
 */
var OficioDonacion = /** @class */ (function () {
    // atributos fin
    function OficioDonacion(entrada) {
        if (entrada === void 0) { entrada = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.incidenciaTejido = null;
        this.botonCorneal = null;
        this.fechaRegistro = null;
        this.fechaActualizacion = null;
        this.microbiologiaCorneal = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idrecepcionSolicitudEvaluacion = null;
        this.documentacionDonacion = null;
        this.caracteristicaDonacion = null;
        this.gestionMuestraMicrobiologia = null;
        this.almacenTejido = null;
        if (entrada !== null) {
            this.from(entrada);
        }
    }
    OficioDonacion.prototype.from = function (source) {
        if (source.documentacionDonacion)
            this.documentacionDonacion = new _documentacion_donaciones_shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_3__["DocumentacionDonacion"](source.documentacionDonacion);
        if (source.caracteristicaDonacion)
            this.caracteristicaDonacion = new _caracteristica_donaciones_shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_2__["CaracteristicaDonacion"](source.caracteristicaDonacion);
        if (source.gestionMuestraMicrobiologia)
            this.gestionMuestraMicrobiologia = new _gestion_muestra_microbiologias_shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__["GestionMuestraMicrobiologia"](source.gestionMuestraMicrobiologia);
        if (source.almacenTejido)
            this.almacenTejido = new _almacen_tejidos_shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_0__["AlmacenTejido"](source.almacenTejido);
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.incidenciaTejido)
            this.incidenciaTejido = source.incidenciaTejido;
        if (source.botonCorneal)
            this.botonCorneal = source.botonCorneal;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.microbiologiaCorneal)
            this.microbiologiaCorneal = source.microbiologiaCorneal;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idrecepcionSolicitudEvaluacion)
            this.idrecepcionSolicitudEvaluacion = source.idrecepcionSolicitudEvaluacion;
    };
    OficioDonacion.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.incidenciaTejido)
            return true;
        if (this.botonCorneal)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.microbiologiaCorneal)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idrecepcionSolicitudEvaluacion)
            return true;
        return false;
    };
    OficioDonacion.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.incidenciaTejido != null && typeof this.incidenciaTejido === 'string' && this.incidenciaTejido.replace(/^\s+|\s+$/g, '') == "")
            this.incidenciaTejido = null;
        if (this.botonCorneal != null && typeof this.botonCorneal === 'string' && this.botonCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.botonCorneal = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.microbiologiaCorneal != null && typeof this.microbiologiaCorneal === 'string' && this.microbiologiaCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.microbiologiaCorneal = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idrecepcionSolicitudEvaluacion != null && typeof this.idrecepcionSolicitudEvaluacion === 'string' && this.idrecepcionSolicitudEvaluacion.replace(/^\s+|\s+$/g, '') == "")
            this.idrecepcionSolicitudEvaluacion = null;
        return this;
    };
    return OficioDonacion;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-tejidos-almacen-tejido-module~app-caracteristica-donaciones-caracteristica-donac~f7f9561f.js.map