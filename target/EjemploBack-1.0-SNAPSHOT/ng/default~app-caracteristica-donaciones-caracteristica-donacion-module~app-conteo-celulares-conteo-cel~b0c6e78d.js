(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-caracteristica-donaciones-caracteristica-donacion-module~app-conteo-celulares-conteo-cel~b0c6e78d"],{

/***/ "./src/app/causa-muertes/shared/causa-muerte.ts":
/*!******************************************************!*\
  !*** ./src/app/causa-muertes/shared/causa-muerte.ts ***!
  \******************************************************/
/*! exports provided: CausaMuerte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaMuerte", function() { return CausaMuerte; });
/**
 *
 * @author IstmoSoft
 */
var CausaMuerte = /** @class */ (function () {
    // atributos fin
    function CausaMuerte(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.descripcion = null;
        this.fechaBaja = null;
        this.fechaRegistro = null;
        this.fechaActualizacion = null;
        this.tipoCausaMuerte = null;
        this.status = null;
        this.usuarioUltMov = null;
        if (source !== null)
            this.from(source);
    }
    CausaMuerte.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.descripcion)
            this.descripcion = source.descripcion;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.tipoCausaMuerte)
            this.tipoCausaMuerte = source.tipoCausaMuerte;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
    };
    CausaMuerte.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.descripcion)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.tipoCausaMuerte)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        return false;
    };
    CausaMuerte.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.descripcion != null && typeof this.descripcion === 'string' && this.descripcion.replace(/^\s+|\s+$/g, '') == "")
            this.descripcion = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.tipoCausaMuerte != null && typeof this.tipoCausaMuerte === 'string' && this.tipoCausaMuerte.replace(/^\s+|\s+$/g, '') == "")
            this.tipoCausaMuerte = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        return this;
    };
    return CausaMuerte;
}());



/***/ }),

/***/ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts ***!
  \*******************************************************************************/
/*! exports provided: DatoProcuracionCorneal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoProcuracionCorneal", function() { return DatoProcuracionCorneal; });
/**
 *
 * @author IstmoSoft
 */
var DatoProcuracionCorneal = /** @class */ (function () {
    // atributos fin
    function DatoProcuracionCorneal(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.horaFin = null;
        this.fechaBaja = null;
        this.tipo = null;
        this.fechaInicio = null;
        this.idcenatra = null;
        this.fechaRegistro = null;
        this.fechaActualizacion = null;
        this.fechaFin = null;
        this.horaInicio = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idsolicitudEvaluacionCorneal = null;
        if (source !== null)
            this.from(source);
    }
    DatoProcuracionCorneal.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.horaFin)
            this.horaFin = source.horaFin;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.tipo)
            this.tipo = source.tipo;
        if (source.fechaInicio)
            this.fechaInicio = source.fechaInicio;
        if (source.idcenatra)
            this.idcenatra = source.idcenatra;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.fechaFin)
            this.fechaFin = source.fechaFin;
        if (source.horaInicio)
            this.horaInicio = source.horaInicio;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idsolicitudEvaluacionCorneal)
            this.idsolicitudEvaluacionCorneal = source.idsolicitudEvaluacionCorneal;
    };
    DatoProcuracionCorneal.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.horaFin)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.tipo)
            return true;
        if (this.fechaInicio)
            return true;
        if (this.idcenatra)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.fechaFin)
            return true;
        if (this.horaInicio)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idsolicitudEvaluacionCorneal)
            return true;
        return false;
    };
    DatoProcuracionCorneal.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.horaFin != null && typeof this.horaFin === 'string' && this.horaFin.replace(/^\s+|\s+$/g, '') == "")
            this.horaFin = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.tipo != null && typeof this.tipo === 'string' && this.tipo.replace(/^\s+|\s+$/g, '') == "")
            this.tipo = null;
        if (this.fechaInicio != null && typeof this.fechaInicio === 'string' && this.fechaInicio.replace(/^\s+|\s+$/g, '') == "")
            this.fechaInicio = null;
        if (this.idcenatra != null && typeof this.idcenatra === 'string' && this.idcenatra.replace(/^\s+|\s+$/g, '') == "")
            this.idcenatra = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.fechaFin != null && typeof this.fechaFin === 'string' && this.fechaFin.replace(/^\s+|\s+$/g, '') == "")
            this.fechaFin = null;
        if (this.horaInicio != null && typeof this.horaInicio === 'string' && this.horaInicio.replace(/^\s+|\s+$/g, '') == "")
            this.horaInicio = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idsolicitudEvaluacionCorneal != null && typeof this.idsolicitudEvaluacionCorneal === 'string' && this.idsolicitudEvaluacionCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.idsolicitudEvaluacionCorneal = null;
        return this;
    };
    return DatoProcuracionCorneal;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts ***!
  \***************************************************************************************/
/*! exports provided: SolicitudEvaluacionCorneal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEvaluacionCorneal", function() { return SolicitudEvaluacionCorneal; });
/* harmony import */ var _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dato-procuracion-corneales/shared/dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts");
/* harmony import */ var _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hospitales/shared/hospital */ "./src/app/hospitales/shared/hospital.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte */ "./src/app/causa-muertes/shared/causa-muerte.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");




/**
 *
 * @author IstmoSoft
 */
var SolicitudEvaluacionCorneal = /** @class */ (function () {
    // atributos fin
    function SolicitudEvaluacionCorneal(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.primerApellido = null;
        this.fechaRegistro = null;
        this.fechaMuerte = null;
        this.segundoApellido = null;
        this.estatusProceso = null;
        this.nombre = null;
        this.numeroExpediente = null;
        this.edad = null;
        this.conservacionTemperaturaAmbiente = null;
        this.horaInicioRefrigracion = null;
        this.folioSolicitud = null;
        this.horaMuerte = null;
        this.fechaActualizacion = null;
        this.temperaturaRefrigeracion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idhospital = null;
        this.idcausaMuerte = null;
        this.datosProcuracionCorneal = [];
        if (source !== null)
            this.from(source);
    }
    SolicitudEvaluacionCorneal.prototype.from = function (source) {
        var _this = this;
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.primerApellido)
            this.primerApellido = source.primerApellido;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.fechaMuerte)
            this.fechaMuerte = source.fechaMuerte;
        if (source.segundoApellido)
            this.segundoApellido = source.segundoApellido;
        if (source.estatusProceso)
            this.estatusProceso = source.estatusProceso;
        if (source.nombre)
            this.nombre = source.nombre;
        if (source.numeroExpediente)
            this.numeroExpediente = source.numeroExpediente;
        if (source.edad)
            this.edad = source.edad;
        if (source.conservacionTemperaturaAmbiente !== null)
            this.conservacionTemperaturaAmbiente = source.conservacionTemperaturaAmbiente;
        if (source.horaInicioRefrigracion)
            this.horaInicioRefrigracion = source.horaInicioRefrigracion;
        if (source.folioSolicitud)
            this.folioSolicitud = source.folioSolicitud;
        if (source.horaMuerte)
            this.horaMuerte = source.horaMuerte;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.temperaturaRefrigeracion)
            this.temperaturaRefrigeracion = source.temperaturaRefrigeracion;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"](source.usuarioUltMov);
        if (source.idhospital)
            this.idhospital = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_1__["Hospital"](source.idhospital);
        if (source.idcausaMuerte)
            this.idcausaMuerte = new _causa_muertes_shared_causa_muerte__WEBPACK_IMPORTED_MODULE_2__["CausaMuerte"](source.idcausaMuerte);
        if (source.datosProcuracionCorneal != null && source.datosProcuracionCorneal.length > 0)
            source.datosProcuracionCorneal.forEach(function (item) {
                _this.datosProcuracionCorneal.push(new _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_0__["DatoProcuracionCorneal"](item));
            });
    };
    SolicitudEvaluacionCorneal.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.primerApellido)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.fechaMuerte)
            return true;
        if (this.segundoApellido)
            return true;
        if (this.estatusProceso)
            return true;
        if (this.nombre)
            return true;
        if (this.numeroExpediente)
            return true;
        if (this.edad)
            return true;
        if (this.conservacionTemperaturaAmbiente)
            return true;
        if (this.horaInicioRefrigracion)
            return true;
        if (this.folioSolicitud)
            return true;
        if (this.horaMuerte)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.temperaturaRefrigeracion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idhospital)
            return true;
        if (this.idcausaMuerte)
            return true;
        return false;
    };
    SolicitudEvaluacionCorneal.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.primerApellido != null && typeof this.primerApellido === 'string' && this.primerApellido.replace(/^\s+|\s+$/g, '') == "")
            this.primerApellido = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.fechaMuerte != null && typeof this.fechaMuerte === 'string' && this.fechaMuerte.replace(/^\s+|\s+$/g, '') == "")
            this.fechaMuerte = null;
        if (this.segundoApellido != null && typeof this.segundoApellido === 'string' && this.segundoApellido.replace(/^\s+|\s+$/g, '') == "")
            this.segundoApellido = null;
        if (this.estatusProceso != null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '') == "")
            this.estatusProceso = null;
        if (this.nombre != null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '') == "")
            this.nombre = null;
        if (this.numeroExpediente != null && typeof this.numeroExpediente === 'string' && this.numeroExpediente.replace(/^\s+|\s+$/g, '') == "")
            this.numeroExpediente = null;
        if (this.edad != null && typeof this.edad === 'string' && this.edad.replace(/^\s+|\s+$/g, '') == "")
            this.edad = null;
        if (this.conservacionTemperaturaAmbiente != null && typeof this.conservacionTemperaturaAmbiente === 'string' && this.conservacionTemperaturaAmbiente.replace(/^\s+|\s+$/g, '') == "")
            this.conservacionTemperaturaAmbiente = null;
        if (this.horaInicioRefrigracion != null && typeof this.horaInicioRefrigracion === 'string' && this.horaInicioRefrigracion.replace(/^\s+|\s+$/g, '') == "")
            this.horaInicioRefrigracion = null;
        if (this.folioSolicitud != null && typeof this.folioSolicitud === 'string' && this.folioSolicitud.replace(/^\s+|\s+$/g, '') == "")
            this.folioSolicitud = null;
        //  if ( this.horaMuerte !=null && typeof this.horaMuerte === 'string' && this.horaMuerte.replace(/^\s+|\s+$/g, '')=="" )
        //       this.horaMuerte = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.temperaturaRefrigeracion != null && typeof this.temperaturaRefrigeracion === 'string' && this.temperaturaRefrigeracion.replace(/^\s+|\s+$/g, '') == "")
            this.temperaturaRefrigeracion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idhospital != null && typeof this.idhospital === 'string' && this.idhospital.replace(/^\s+|\s+$/g, '') == "")
            this.idhospital = null;
        if (this.idcausaMuerte != null && typeof this.idcausaMuerte === 'string' && this.idcausaMuerte.replace(/^\s+|\s+$/g, '') == "")
            this.idcausaMuerte = null;
        return this;
    };
    return SolicitudEvaluacionCorneal;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-caracteristica-donaciones-caracteristica-donacion-module~app-conteo-celulares-conteo-cel~b0c6e78d.js.map