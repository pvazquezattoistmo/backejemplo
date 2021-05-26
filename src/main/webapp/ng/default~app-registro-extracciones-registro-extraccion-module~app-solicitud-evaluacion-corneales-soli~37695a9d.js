(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-registro-extracciones-registro-extraccion-module~app-solicitud-evaluacion-corneales-soli~37695a9d"],{

/***/ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts":
/*!***********************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts ***!
  \***********************************************************************/
/*! exports provided: EvaluacionSolicitud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitud", function() { return EvaluacionSolicitud; });
/**
 *
 * @author IstmoSoft
 */
var EvaluacionSolicitud = /** @class */ (function () {
    // atributos fin
    function EvaluacionSolicitud(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.status = null;
        this.usuarioUltMov = null;
        this.idrecepcionSolicitudEvaluacion = null;
        this.estudiosLaboratorio = null;
        this.lamparasHendidura = null;
        this.conteosCelular = null;
        this.almacenEvaluacion = null;
        this.desgloseCorneas = null;
        if (source !== null)
            this.from(source);
    }
    EvaluacionSolicitud.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idrecepcionSolicitudEvaluacion)
            this.idrecepcionSolicitudEvaluacion = source.idrecepcionSolicitudEvaluacion;
    };
    EvaluacionSolicitud.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idrecepcionSolicitudEvaluacion)
            return true;
        return false;
    };
    EvaluacionSolicitud.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idrecepcionSolicitudEvaluacion != null && typeof this.idrecepcionSolicitudEvaluacion === 'string' && this.idrecepcionSolicitudEvaluacion.replace(/^\s+|\s+$/g, '') == "")
            this.idrecepcionSolicitudEvaluacion = null;
        return this;
    };
    return EvaluacionSolicitud;
}());



/***/ }),

/***/ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts ***!
  \*******************************************************************************************/
/*! exports provided: RecepcionSolicitudEvaluacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepcionSolicitudEvaluacion", function() { return RecepcionSolicitudEvaluacion; });
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../evaluacion-solicitudes/shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");



/**
 *
 * @author IstmoSoft
 */
var RecepcionSolicitudEvaluacion = /** @class */ (function () {
    // atributos fin
    function RecepcionSolicitudEvaluacion(entrada) {
        if (entrada === void 0) { entrada = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.horaRecepcion = null;
        this.registroTejido = null;
        this.fechaBaja = null;
        this.tejidoCorneaDerecha = null;
        this.fechaRegistro = null;
        this.estatusProceso = null;
        this.expedienteFisico = null;
        this.idbtcCi = null;
        this.tejidoCorneaIzquierda = null;
        this.idbtcCd = null;
        this.fechaActualizacion = null;
        this.fechaRecepcion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idsolicitudEvaluacionCorneal = null;
        this.nombreRecibe = null;
        this.primerApellidoRecibe = null;
        this.segundoApellidoRecibe = null;
        this.idUsuarioRecibe = null;
        this.evaluacionSolicitud = null;
        this.oficioDonacion = null;
        if (entrada !== null) {
            this.from(entrada);
        }
    }
    RecepcionSolicitudEvaluacion.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.horaRecepcion)
            this.horaRecepcion = source.horaRecepcion;
        if (source.registroTejido)
            this.registroTejido = source.registroTejido;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.tejidoCorneaDerecha)
            this.tejidoCorneaDerecha = source.tejidoCorneaDerecha;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.estatusProceso)
            this.estatusProceso = source.estatusProceso;
        if (source.expedienteFisico)
            this.expedienteFisico = source.expedienteFisico;
        if (source.idbtcCi)
            this.idbtcCi = source.idbtcCi;
        if (source.tejidoCorneaIzquierda)
            this.tejidoCorneaIzquierda = source.tejidoCorneaIzquierda;
        if (source.idbtcCd)
            this.idbtcCd = source.idbtcCd;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.fechaRecepcion)
            this.fechaRecepcion = source.fechaRecepcion;
        if (source.nombreRecibe)
            this.nombreRecibe = source.nombreRecibe;
        if (source.primerApellidoRecibe)
            this.primerApellidoRecibe = source.primerApellidoRecibe;
        if (source.segundoApellidoRecibe)
            this.segundoApellidoRecibe = source.segundoApellidoRecibe;
        if (source.status)
            this.status = source.status;
        if (source.idUsuarioRecibe)
            this.idUsuarioRecibe = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"](source.idUsuarioRecibe);
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"](source.usuarioUltMov);
        if (source.idsolicitudEvaluacionCorneal)
            this.idsolicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCorneal"](source.idsolicitudEvaluacionCorneal);
        if (source.evaluacionSolicitud)
            this.evaluacionSolicitud = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_0__["EvaluacionSolicitud"](source.evaluacionSolicitud);
    };
    RecepcionSolicitudEvaluacion.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.horaRecepcion)
            return true;
        if (this.registroTejido)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.tejidoCorneaDerecha)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.estatusProceso)
            return true;
        if (this.expedienteFisico)
            return true;
        if (this.idbtcCi)
            return true;
        if (this.tejidoCorneaIzquierda)
            return true;
        if (this.idbtcCd)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.fechaRecepcion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idsolicitudEvaluacionCorneal)
            return true;
        return false;
    };
    RecepcionSolicitudEvaluacion.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.horaRecepcion != null && typeof this.horaRecepcion === 'string' && this.horaRecepcion.replace(/^\s+|\s+$/g, '') == "")
            this.horaRecepcion = null;
        if (this.registroTejido != null && typeof this.registroTejido === 'string' && this.registroTejido.replace(/^\s+|\s+$/g, '') == "")
            this.registroTejido = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.tejidoCorneaDerecha != null && typeof this.tejidoCorneaDerecha === 'string' && this.tejidoCorneaDerecha.replace(/^\s+|\s+$/g, '') == "")
            this.tejidoCorneaDerecha = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.estatusProceso != null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '') == "")
            this.estatusProceso = null;
        if (this.expedienteFisico != null && typeof this.expedienteFisico === 'string' && this.expedienteFisico.replace(/^\s+|\s+$/g, '') == "")
            this.expedienteFisico = null;
        if (this.idbtcCi != null && typeof this.idbtcCi === 'string' && this.idbtcCi.replace(/^\s+|\s+$/g, '') == "")
            this.idbtcCi = null;
        if (this.tejidoCorneaIzquierda != null && typeof this.tejidoCorneaIzquierda === 'string' && this.tejidoCorneaIzquierda.replace(/^\s+|\s+$/g, '') == "")
            this.tejidoCorneaIzquierda = null;
        if (this.idbtcCd != null && typeof this.idbtcCd === 'string' && this.idbtcCd.replace(/^\s+|\s+$/g, '') == "")
            this.idbtcCd = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.fechaRecepcion != null && typeof this.fechaRecepcion === 'string' && this.fechaRecepcion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRecepcion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idsolicitudEvaluacionCorneal != null && typeof this.idsolicitudEvaluacionCorneal === 'string' && this.idsolicitudEvaluacionCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.idsolicitudEvaluacionCorneal = null;
        return this;
    };
    return RecepcionSolicitudEvaluacion;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3>Detalle de Donante y Extracción de Tejido</h3>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Tipo de Donante:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.tipo }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Id Solicitud de Evaluación:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.idSolEva }}</h4>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <h4>Nombre(s):</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.nombre }}</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>Primer Apellido:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.apellido1 }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <h4>Segundo Apellido:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.apellido2 }}</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>Edad:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.edad }} años</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <h4>ID CENATRA IZ:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.idCenatraCI }}</h4>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <h4>Fecha de la extracción de CI:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.fechaExtraccionCI }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <h4>Hora Inicio:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.horaExtInicioCI }}</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>Hora Fin:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.horaExtFinCI }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <h4>ID CENATRA DR:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.idCenatraCD }}</h4>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <h4>Fecha de la extracción de CD:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.fechaExtraccionCD }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <h4>Hora Inicio:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.horaExtInicioCD }}</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>Hora Fin:</h4>\n                </div>\n                <div class=\"col-md-3\">\n                    <h4>{{ datos?.horaExtFinCD }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Lugar de la Extracción:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.lugarExtraccion }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Fecha de envío al Banco:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.fechaBanco }}</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DetalleDonanteExtraccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleDonanteExtraccionComponent", function() { return DetalleDonanteExtraccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetalleDonanteExtraccionComponent = /** @class */ (function () {
    function DetalleDonanteExtraccionComponent(solicitudEvaluacionCornealService) {
        this.solicitudEvaluacionCornealService = solicitudEvaluacionCornealService;
        this.id = 66;
        this.datos = {
            tipo: "Donante de tejido",
            idSolEva: "CDMX/10/2018/0",
            idCenatraCI: "999999",
            idCenatraCD: "999999",
            edad: "45 años",
            nombre: "Sergio",
            apellido1: "Escalante",
            apellido2: "Zenon",
            fechaExtraccionCI: "17/07/2018",
            horaExtInicioCI: "03:00 am",
            horaExtFinCI: "05:00 am",
            fechaExtraccionCD: "17/07/2018",
            horaExtInicioCD: "08:00 am",
            horaExtFinCD: "10:00 am",
            lugarExtraccion: "CENTRO MÉDICO 20 DE NOVIEMBRE",
            fechaBanco: "17/07/2018"
        };
    }
    DetalleDonanteExtraccionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.id && changes.id.currentValue) {
            this.solicitudEvaluacionCornealService.getSolicitudesEvaluacionByID(changes.id.currentValue, this.evtBuscar, this);
        }
    };
    DetalleDonanteExtraccionComponent.prototype.evtBuscar = function (datos, obj) {
        (datos);
        obj.datos = datos;
    };
    DetalleDonanteExtraccionComponent.prototype.ngOnInit = function () {
        if (this.id) {
            this.solicitudEvaluacionCornealService.getSolicitudesEvaluacionByID(this.id, this.evtBuscar, this);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetalleDonanteExtraccionComponent.prototype, "id", void 0);
    DetalleDonanteExtraccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-donante-extraccion',
            template: __webpack_require__(/*! ./detalle-donante-extraccion.component.html */ "./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.html"),
            styles: [__webpack_require__(/*! ./detalle-donante-extraccion.component.css */ "./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.css")],
            providers: [_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCornealService"]]
        }),
        __metadata("design:paramtypes", [_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCornealService"]])
    ], DetalleDonanteExtraccionComponent);
    return DetalleDonanteExtraccionComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/shared/configurar-solicitud-evaluacion-corneal.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/shared/configurar-solicitud-evaluacion-corneal.ts ***!
  \**************************************************************************************************/
/*! exports provided: ConfigurarSolicitudEvaluacionCorneal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarSolicitudEvaluacionCorneal", function() { return ConfigurarSolicitudEvaluacionCorneal; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarSolicitudEvaluacionCorneal = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarSolicitudEvaluacionCorneal() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudEvaluacionCorneal";
        this.rutaLista = this.crudServiceBaseUrl + "/getSolicitudEvaluacionCorneales";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarSolicitudEvaluacionCorneal";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarSolicitudEvaluacionCorneal";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarSolicitudEvaluacionCorneal";
        this.titulo = "Catálogo SolicitudEvaluacionCorneal";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.solicitudEvaluacionCornealConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarSolicitudEvaluacionCorneal.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudEvaluacionCorneal.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarSolicitudEvaluacionCorneal.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudEvaluacionCorneal.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarSolicitudEvaluacionCorneal.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudEvaluacionCorneal.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarSolicitudEvaluacionCorneal;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component.css":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let solicitudEvaluacionCorneal of listaSolicitudEvaluacionCorneal \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+solicitudEvaluacionCorneal.id}\"\n        (click)=\"elegir(solicitudEvaluacionCorneal,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{solicitudEvaluacionCorneal.id}}\">{{solicitudEvaluacionCorneal.id}}</a>\n    </li>\n    <li *ngFor =  \"let solicitudEvaluacionCorneal of listaSolicitudEvaluacionCornealN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+solicitudEvaluacionCorneal.id}\"\n        (click)=\"elegir(solicitudEvaluacionCorneal, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{solicitudEvaluacionCorneal.id}}\">T-{{solicitudEvaluacionCorneal.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let solicitudEvaluacionCorneal of listaSolicitudEvaluacionCorneal ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+solicitudEvaluacionCorneal.id}\" id=\"tab-I-{{solicitudEvaluacionCorneal.id}}\">\n\t\t\t<app-solicitud-evaluacion-corneal [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [solicitudEvaluacionCornealBuscar]=\"solicitudEvaluacionCornealBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosSolicitudEvaluacionCorneal]=\"validosSolicitudEvaluacionCorneal\"  \n\t\t\t\t\t\t  [solicitudEvaluacionCornealService]=\"solicitudEvaluacionCornealService\" [(opcion)]=\"opcionSolicitudEvaluacionCorneal\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(solicitudEvaluacionCorneal)]=\"listaSolicitudEvaluacionCorneal[i]\"  [ocultarConjuntos]=\"ocultarConjuntosSolicitudEvaluacionCorneal\"\n                           [lista_usuarioUltMovSolicitudEvaluacionCornealUsuario]=\"lista_usuarioUltMovSolicitudEvaluacionCornealUsuario\" \n                           [lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte]=\"lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte\" \n\n\t\t\t\t\t  >\n\t\t\t</app-solicitud-evaluacion-corneal>\n        </div>\n        <div *ngFor = \"let solicitudEvaluacionCorneal of listaSolicitudEvaluacionCornealN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+solicitudEvaluacionCorneal.id}\" id=\"tab-N-{{solicitudEvaluacionCorneal.id}}\">\n\t\t\t<app-solicitud-evaluacion-corneal [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [solicitudEvaluacionCornealBuscar]=\"solicitudEvaluacionCornealBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosSolicitudEvaluacionCorneal]=\"validosSolicitudEvaluacionCorneal\"  \n\t\t\t\t\t\t  [solicitudEvaluacionCornealService]=\"solicitudEvaluacionCornealService\" [(opcion)]=\"opcionSolicitudEvaluacionCorneal\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(solicitudEvaluacionCorneal)]=\"listaSolicitudEvaluacionCornealN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosSolicitudEvaluacionCorneal\"\n                           [lista_usuarioUltMovSolicitudEvaluacionCornealUsuario]=\"lista_usuarioUltMovSolicitudEvaluacionCornealUsuario\" \n                           [lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte]=\"lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte\" \n\n\t\t\t\t\t  >\n\t\t\t</app-solicitud-evaluacion-corneal>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: SolicitudEvaluacionCornealConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEvaluacionCornealConjuntoComponent", function() { return SolicitudEvaluacionCornealConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolicitudEvaluacionCornealConjuntoComponent = /** @class */ (function () {
    function SolicitudEvaluacionCornealConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEditar = false;
        this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEditar = false;
        this.listaSolicitudEvaluacionCornealN = [];
        this.listaSolicitudEvaluacionCorneal = [];
        this.listaSolicitudEvaluacionCornealChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudEvaluacionCornealN = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCorneal"]();
        this.solicitudEvaluacionCornealNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    SolicitudEvaluacionCornealConjuntoComponent.prototype.elegir = function (solicitudEvaluacionCorneal, tipo) {
        this.idSeleccionado = tipo + "-" + solicitudEvaluacionCorneal.id;
        this.solicitudEvaluacionCornealN = solicitudEvaluacionCorneal;
    };
    SolicitudEvaluacionCornealConjuntoComponent.prototype.ngOnInit = function () {
        this.solicitudEvaluacionCornealN.id = 0;
        this.listaSolicitudEvaluacionCornealN.push(Object.assign({}, this.solicitudEvaluacionCornealN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    SolicitudEvaluacionCornealConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCorneal"]();
        pg.id = this.listaSolicitudEvaluacionCornealN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaSolicitudEvaluacionCornealN.push(pg);
    };
    SolicitudEvaluacionCornealConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaSolicitudEvaluacionCorneal; _i < _a.length; _i++) {
            var solicitudEvaluacionCorneal = _a[_i];
            this.solicitudEvaluacionCornealService.actualizarSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaSolicitudEvaluacionCornealN; _b < _c.length; _b++) {
            var solicitudEvaluacionCorneal = _c[_b];
            solicitudEvaluacionCorneal.id = null;
            this.solicitudEvaluacionCornealService.guardarSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal, this.evtGuardar, this);
        }
    };
    SolicitudEvaluacionCornealConjuntoComponent.prototype.evtGuardar = function (solicitudEvaluacionCorneal, obj) {
        obj.agregados++;
        obj.listaSolicitudEvaluacionCorneal.push(solicitudEvaluacionCorneal);
        if (obj.agregados >= obj.listaSolicitudEvaluacionCornealN.length) {
            obj.solicitudEvaluacionCornealN = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCorneal"]();
            obj.listaSolicitudEvaluacionCornealN = [];
            obj.solicitudEvaluacionCornealN.id = 0;
            obj.idSeleccionado = "N-" + obj.solicitudEvaluacionCornealN.id;
            obj.listaSolicitudEvaluacionCornealN.push(Object.assign({}, obj.solicitudEvaluacionCornealN));
            obj.listaSolicitudEvaluacionCornealChange.emit(obj.listaSolicitudEvaluacionCorneal);
        }
        if (obj.agregados >= obj.listaSolicitudEvaluacionCornealN.length &&
            obj.actualizados >= obj.listaSolicitudEvaluacionCorneal.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    SolicitudEvaluacionCornealConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaSolicitudEvaluacionCornealN.length &&
                obj.actualizados >= obj.listaSolicitudEvaluacionCorneal.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    SolicitudEvaluacionCornealConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "solicitudEvaluacionCornealBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "validosSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "ocultarConjuntosSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "solicitudEvaluacionCornealService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "lista_usuarioUltMovSolicitudEvaluacionCornealUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "listaSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "listaSolicitudEvaluacionCornealChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCorneal"])
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "solicitudEvaluacionCornealN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealConjuntoComponent.prototype, "solicitudEvaluacionCornealNChange", void 0);
    SolicitudEvaluacionCornealConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-evaluacion-corneal-conjunto',
            template: __webpack_require__(/*! ./solicitud-evaluacion-corneal-conjunto.component.html */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-evaluacion-corneal-conjunto.component.css */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudEvaluacionCornealConjuntoComponent);
    return SolicitudEvaluacionCornealConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.css":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-footer\" style=\"text-align: right\">\n    <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n      <button type=\"button\" class=\"btn btn-guardar\" (click)=\"evtlimpiarCampos()\">\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n      </button>\n      <!-- <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudEvaluacionCornealBuscar\" (click)=\"buscarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n                          <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudEvaluacionCornealAgregar\" (click)=\"nuevoSolicitudEvaluacionCornealFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n                          <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealActualizar\" (click)=\"actualizarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n                          <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudEvaluacionCornealEliminar\" (click)=\"eliminarSolicitudEvaluacionCornealFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n                          <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealGuardar\" (click)=\"guardarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n                          <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudEvaluacionCornealCancelar\" (click)=\"cancelarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n                          <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n                          <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealWord\" (click)=\"reporteSolicitudEvaluacionCornealWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n                          <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealExcel\" (click)=\"reporteSolicitudEvaluacionCornealExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n                          <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealPdf\" (click)=\"reporteSolicitudEvaluacionCornealPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n                        -->\n    </div>\n  </div>\n  <app-solicitud-evaluacion-corneal\n    [usuariologueado]=\"usuariologueado\"\n    [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n    [solicitudEvaluacionCornealBuscar]=\"solicitudEvaluacionCornealBuscar\"\n    [permisosAtributos]=\"permisosAtributos\"\n    [permisosConjuntos]=\"permisosConjuntos\"\n    [validosSolicitudEvaluacionCorneal]=\"validosSolicitudEvaluacionCorneal\"\n    [solicitudEvaluacionCornealService]=\"solicitudEvaluacionCorneal_service\"\n    [(opcion)]=\"opcionSolicitudEvaluacionCorneal\"\n    [globalesService]=\"globalesService\"\n    [(solicitudEvaluacionCorneal)]=\"solicitudEvaluacionCorneal\"\n    [ocultarConjuntos]=\"ocultarConjuntosSolicitudEvaluacionCorneal\"\n    [lista_usuarioUltMovSolicitudEvaluacionCornealUsuario]=\"\n      lista_usuarioUltMovSolicitudEvaluacionCornealUsuario\n    \"\n    [lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte]=\"\n      lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte\n    \"\n    [(datoProcuracionCornealCI)]=\"datoProcuracionCornealCI\"\n    [(datoProcuracionCornealCD)]=\"datoProcuracionCornealCD\"\n    [validosDatoProcuracionCornealCI]=\"validosDatoProcuracionCornealCI\"\n    [validosDatoProcuracionCornealCD]=\"validosDatoProcuracionCornealCD\"\n  >\n  </app-solicitud-evaluacion-corneal>\n\n  <div class=\"panel-footer\" style=\"text-align: right\">\n    <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n        <button\n        style=\"margin-right: 10px;\"\n        type=\"button\"\n        class=\"btn btn-primary btn-guardar\"\n        (click)=\"doSave()\"\n        [disabled]=\"recepcionSolicitudEvaluacion?.id != null\"\n      >\n        <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n      </button>\n      <button\n        style=\"margin-right: 10px;\"\n        type=\"button\"\n        class=\"btn btn-guardar\"\n        [disabled]=\"solicitudEvaluacionCorneal.folioSolicitud == null\"\n        (click)=\"doImprimir()\"\n      >\n        <span class=\"fa fa-floppy-disk\"></span>Imprimir\n      </button>\n      <button\n        style=\"margin-right: 10px;\"\n        type=\"button\"\n        class=\"btn btn-guardar\"\n        [disabled]=\"solicitudEvaluacionCorneal.folioSolicitud == null\"\n        (click)=\"siguiente()\"\n      >\n        <span class=\"fa fa-floppy-disk\"></span>Siguiente\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-success btn-guardar\"\n        [disabled]=\"solicitudEvaluacionCorneal.folioSolicitud == null || recepcionSolicitudEvaluacion?.id\"\n        (click)=\"doEnviar()\"\n      >\n        <span class=\"fa fa-floppy-disk\"></span>Enviar\n      </button>\n      <!-- <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudEvaluacionCornealBuscar\" (click)=\"buscarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n              <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudEvaluacionCornealAgregar\" (click)=\"nuevoSolicitudEvaluacionCornealFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealActualizar\" (click)=\"actualizarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n              <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudEvaluacionCornealEliminar\" (click)=\"eliminarSolicitudEvaluacionCornealFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n              <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealGuardar\" (click)=\"guardarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n              <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudEvaluacionCornealCancelar\" (click)=\"cancelarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n              <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealWord\" (click)=\"reporteSolicitudEvaluacionCornealWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealExcel\" (click)=\"reporteSolicitudEvaluacionCornealExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealPdf\" (click)=\"reporteSolicitudEvaluacionCornealPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n            -->\n    </div>\n  </div>\n</div>\n<!-- <div\n  class=\"modal fade\"\n  id=\"buscarSolicitudEvaluacionCorneal_{{ nombre }}\"\n  role=\"dialog\"\n>\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-solicitud-evaluacion-corneal-list-kendo\n          [nombregrid]=\"'buscar_' + nombre\"\n          [configuracionSolicitudEvaluacionCorneal]=\"\n            configuracionSolicitudEvaluacionCorneal\n          \"\n          (solicitudEvaluacionCornealSeleccionado)=\"\n            evtSolicitudEvaluacionCornealSeleccionado($event)\n          \"\n        >\n        </app-solicitud-evaluacion-corneal-list-kendo>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div> -->\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: SolicitudEvaluacionCornealCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEvaluacionCornealCrudComponent", function() { return SolicitudEvaluacionCornealCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _shared_configurar_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/configurar-solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/configurar-solicitud-evaluacion-corneal.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte */ "./src/app/causa-muertes/shared/causa-muerte.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
/* harmony import */ var _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dato-procuracion-corneales/shared/dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts");
/* harmony import */ var _dato_procuracion_corneales_shared_dato_procuracion_corneal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dato-procuracion-corneales/shared/dato-procuracion-corneal.service */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
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

















var SolicitudEvaluacionCornealCrudComponent = /** @class */ (function () {
    function SolicitudEvaluacionCornealCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    solicitudEvaluacionCorneal_service, usuario_service, 
    //public usuarioBtc_service: UsuarioBtcService,
    perfilRedIssste_service, hospital_service, entidadFederativa_service, perfil_service, causaMuerte_service, router, datoProcuracionCornealService, activatedRoute, recepcionSolicitudEvaluacionService) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.usuario_service = usuario_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.causaMuerte_service = causaMuerte_service;
        this.router = router;
        this.datoProcuracionCornealService = datoProcuracionCornealService;
        this.activatedRoute = activatedRoute;
        this.recepcionSolicitudEvaluacionService = recepcionSolicitudEvaluacionService;
        this.opcionSolicitudEvaluacionCorneal = 0;
        this.mensaje = true;
        this.validosSolicitudEvaluacionCorneal = {
            id: false,
            fechaBaja: false,
            primerApellido: false,
            fechaRegistro: false,
            fechaMuerte: false,
            segundoApellido: false,
            estatusProceso: false,
            nombre: false,
            numeroExpediente: false,
            edad: false,
            conservacionTemperaturaAmbiente: false,
            horaInicioRefrigracion: false,
            folioSolicitud: false,
            horaMuerte: false,
            fechaActualizacion: false,
            temperaturaRefrigeracion: false,
            status: false,
            usuarioUltMov: false,
            idcausaMuerte: false
        };
        this.ocultarConjuntosSolicitudEvaluacionCorneal = false;
        this.nombre = '';
        this.permisosTabla = {
            tabla: 'solicitudEvaluacionCorneal',
            permiso: 0,
            etiqueta: ''
        };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.solicitudEvaluacionCornealLazy = false;
        this.solicitudEvaluacionCornealPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudEvaluacionCorneal = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
        this.solicitudEvaluacionCornealChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudEvaluacionCornealTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_solicitudEvaluacionCorneales = [];
        this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.lista_usuarioUltMovSolicitudEvaluacionCornealUsuario = [];
        this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEditar = false;
        this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion = new _causa_muertes_shared_causa_muerte__WEBPACK_IMPORTED_MODULE_15__["CausaMuerte"]();
        this.lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte = [];
        this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEditar = false;
        this.datoProcuracionCornealCI = new _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_17__["DatoProcuracionCorneal"]();
        this.datoProcuracionCornealCD = new _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_17__["DatoProcuracionCorneal"]();
        this.listaTemperaturas = [
            {
                id: 2,
                descripcion: '2 ºC'
            },
            {
                id: 3,
                descripcion: '3 ºC'
            },
            {
                id: 4,
                descripcion: '4 ºC'
            },
            {
                id: 5,
                descripcion: '5 ºC'
            },
            {
                id: 6,
                descripcion: '6 ºC'
            },
            {
                id: 7,
                descripcion: '7 ºC'
            },
            {
                id: 8,
                descripcion: '8 ºC'
            }
        ];
        this.validosDatoProcuracionCornealCI = {
            idcenatra: false,
            fechaInicio: false,
            fechaFin: false,
            horaInicio: false,
            horaFin: false
        };
        this.validosDatoProcuracionCornealCD = {
            idcenatra: false,
            fechaInicio: false,
            fechaFin: false,
            horaInicio: false,
            horaFin: false
        };
        this.usuariologueado = globalesService.dameUsuario();
        var discon = '';
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
        this.configuracionSolicitudEvaluacionCorneal = new _shared_configurar_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_7__["ConfigurarSolicitudEvaluacionCorneal"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudEvaluacionCornealUsuario, this);
        this.causaMuerte_service.getCausaMuertesActivos(this.evtGetIdcausaMuerteSolicitudEvaluacionCornealCausaMuerte, this);
        this.limpiarCampos();
    }
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "solicitudEvaluacionCornealOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosSolicitudEvaluacionCorneal)
                return true;
            return !this.solicitudEvaluacionCornealActualizar;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudEvaluacionCornealCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.solicitudEvaluacionCorneal &&
            changes.solicitudEvaluacionCorneal.currentValue == null &&
            this.solicitudEvaluacionCorneal == null)
            this.solicitudEvaluacionCorneal = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
        else {
            var aux = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
            if (this.solicitudEvaluacionCorneal)
                aux.from(this.solicitudEvaluacionCorneal);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealGuardar = false;
                this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = this.solicitudEvaluacionCornealCancelar = true;
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
                this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
                this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealCancelar = true;
            }
        }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            'solicitudEvaluacionCorneal',
            'usuario',
            'hospital',
            'entidadFederativa',
            'perfil',
            'causaMuerte'
        ];
        var parametros = {
            id_usu: this.usuariologueado.id,
            tablas: tablas,
            id_exp: id_expe
        };
        this.solicitudEvaluacionCornealPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudEvaluacionCornealCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.solicitudEvaluacionCornealPermisos = true;
        if (permisos &&
            permisos.solicitudEvaluacionCorneal &&
            permisos.solicitudEvaluacionCorneal.PermisoAtributo &&
            permisos.solicitudEvaluacionCorneal.PermisoAtributo.length > 0) {
            obj.permisosAtributos =
                permisos.solicitudEvaluacionCorneal.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos &&
            permisos.solicitudEvaluacionCorneal &&
            permisos.solicitudEvaluacionCorneal.PermisoConjunto &&
            permisos.solicitudEvaluacionCorneal.PermisoConjunto.length > 0) {
            obj.permisosConjuntos =
                permisos.solicitudEvaluacionCorneal.PermisoConjunto;
        }
        if (permisos &&
            permisos.solicitudEvaluacionCorneal &&
            permisos.solicitudEvaluacionCorneal.PermisoTabla &&
            permisos.solicitudEvaluacionCorneal.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.solicitudEvaluacionCorneal.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos &&
            permisos.usuario &&
            permisos.usuario.PermisoAtributo &&
            permisos.usuario.PermisoAtributo.length > 0) {
            //obj.configuracionUsuarioUltMov.permisosAtributos = permisos.usuario.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.usuario.PermisoAtributo);
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
            permisos.causaMuerte &&
            permisos.causaMuerte.PermisoAtributo &&
            permisos.causaMuerte.PermisoAtributo.length > 0) {
            //obj.configuracionIdcausaMuerte.permisosAtributos = permisos.causaMuerte.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.causaMuerte.PermisoAtributo);
        }
        if (permisos &&
            permisos.causaMuerte &&
            permisos.causaMuerte.PermisoAtributo &&
            permisos.causaMuerte.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.causaMuerte.PermisoConjunto);
        }
        if (permisos &&
            permisos.causaMuerte &&
            permisos.causaMuerte.PermisoTabla &&
            permisos.causaMuerte.PermisoTabla.length > 0) {
            //obj.configuracionIdcausaMuerte.permisosTabla = permisos.causaMuerte.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.causaMuerte.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudEvaluacionCornealCrudComponent.prototype.evtGetUsuarioUltMovSolicitudEvaluacionCornealUsuario = function (lista_usuarioUltMovSolicitudEvaluacionCornealUsuario, obj) {
        obj.lista_usuarioUltMovSolicitudEvaluacionCornealUsuario = lista_usuarioUltMovSolicitudEvaluacionCornealUsuario;
        obj.actualizar_UsuarioUltMovSolicitudEvaluacionCornealUsuario();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.evtGetIdcausaMuerteSolicitudEvaluacionCornealCausaMuerte = function (lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte, obj) {
        obj.lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte = lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte;
        obj.actualizar_IdcausaMuerteSolicitudEvaluacionCornealCausaMuerte();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.actualizar_UsuarioUltMovSolicitudEvaluacionCornealUsuario = function () {
        if (this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion)
            for (var _i = 0, _a = this
                .lista_usuarioUltMovSolicitudEvaluacionCornealUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id ==
                    this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion.id) {
                    this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.actualizar_IdcausaMuerteSolicitudEvaluacionCornealCausaMuerte = function () {
        if (this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion)
            for (var _i = 0, _a = this
                .lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id ==
                    this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion.id) {
                    this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion = eleme;
                    break;
                }
            }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.ngDoCheck = function () { };
    SolicitudEvaluacionCornealCrudComponent.prototype.validaAcciones = function (vall) {
        return (this.accion == 0 ||
            this.accion == 1 ||
            this.accion == 4 ||
            this.accion == 6 ||
            (this.accion == 7 && vall) ||
            (this.accion == 2 && vall) ||
            (this.accion == 3 && vall) ||
            (this.accion == 5 && vall));
    };
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaPrimerApellido", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['primerApellido'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaFechaMuerte", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['fechaMuerte'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaSegundoApellido", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['segundoApellido'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaEstatusProceso", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['estatusProceso'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaNombre", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['nombre'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaNumeroExpediente", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['numeroExpediente'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaEdad", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['edad'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaConservacionTemperaturaAmbiente", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['conservacionTemperaturaAmbiente'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaHoraInicioRefrigracion", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['horaInicioRefrigracion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaFolioSolicitud", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['folioSolicitud'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaHoraMuerte", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['horaMuerte'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaTemperaturaRefrigeracion", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['temperaturaRefrigeracion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaIdcausaMuerte", {
        get: function () {
            return this.validosSolicitudEvaluacionCorneal['idcausaMuerte'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaPrimerApellido &&
                this.validaFechaMuerte &&
                this.validaSegundoApellido &&
                this.validaNombre &&
                this.validaNumeroExpediente &&
                this.validaEdad &&
                //this.validaConservacionTemperaturaAmbiente &&
                this.validaFolioSolicitud &&
                this.validaHoraMuerte &&
                //this.validaTemperaturaRefrigeracion &&
                this.solicitudEvaluacionCorneal.idcausaMuerte != null;
            if (salida != this.validaciones) {
                this.validacionesChange.emit(salida);
                this.validaciones = salida;
            }
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "validaRequeridos", {
        get: function () {
            var salida = this.validaPrimerApellido &&
                this.validaSegundoApellido &&
                this.validaNombre &&
                this.validaNumeroExpediente &&
                this.validaEdad &&
                this.validaFechaMuerte &&
                this.validaHoraMuerte;
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudEvaluacionCornealCrudComponent.prototype.obtenerSolicitudEvaluacionCorneales = function (lista, objeto) {
        objeto.lista_solicitudEvaluacionCorneales = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudEvaluacionCorneal.from(lista[0]);
            objeto.evtSolicitudEvaluacionCornealSeleccionado(objeto.solicitudEvaluacionCorneal);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.evn_lazy_solicitudEvaluacionCorneal = function (solicitudEvaluacionCorneal, objeto) {
        var datosProcuracion = solicitudEvaluacionCorneal.datosProcuracionCorneal;
        datosProcuracion.forEach(function (element) {
            if (element.tipo === 1) {
                objeto.datoProcuracionCornealCI = element;
            }
            else if (element.tipo === 2) {
                objeto.datoProcuracionCornealCD = element;
            }
        });
        var listTemp = objeto.listaTemperaturas;
        listTemp.forEach(function (element) {
            if (element.id === solicitudEvaluacionCorneal.temperaturaRefrigeracion) {
                solicitudEvaluacionCorneal.temperaturaRefrigeracion = element;
            }
        });
        objeto.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
        objeto.solicitudEvaluacionCornealChange.emit(objeto.solicitudEvaluacionCorneal);
        objeto.configuarCombosObjetos();
        objeto.solicitudEvaluacionCornealLazy = true;
    };
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "datosReporteSolicitudEvaluacionCornealWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.solicitudEvaluacionCornealActualizar &&
                this.solicitudEvaluacionCornealLazy &&
                this.globalesService.preporteWord(this, 'solicitudEvaluacionCorneal'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "datosReporteSolicitudEvaluacionCornealExcel", {
        get: function () {
            return !(this.solicitudEvaluacionCornealActualizar &&
                this.solicitudEvaluacionCornealLazy &&
                this.globalesService.preporteExcel(this, 'solicitudEvaluacionCorneal'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealCrudComponent.prototype, "datosReporteSolicitudEvaluacionCornealPdf", {
        get: function () {
            return !(this.solicitudEvaluacionCornealActualizar &&
                this.solicitudEvaluacionCornealLazy &&
                this.globalesService.preportePdf(this, 'solicitudEvaluacionCorneal'));
        },
        enumerable: true,
        configurable: true
    });
    SolicitudEvaluacionCornealCrudComponent.prototype.reporteSolicitudEvaluacionCornealExcel = function (form) {
        var nombre = 'SolicitudEvaluacionCorneal.xlsx';
        var path = 'file/reporteExcel';
        var parametros = {};
        parametros['entradas'] = {
            solicitudEvaluacionCorneal: this.solicitudEvaluacionCorneal
        };
        parametros['plantilla'] = 'SolicitudEvaluacionCorneal.xlsx';
        parametros['salida'] = nombre;
        this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.reporteSolicitudEvaluacionCornealWord = function (form) {
        var nombre = 'SolicitudEvaluacionCorneal.docx';
        var path = 'file/reporteWord';
        var parametros = {};
        parametros['entradas'] = {
            solicitudEvaluacionCorneal: this.solicitudEvaluacionCorneal
        };
        parametros['plantilla'] = 'SolicitudEvaluacionCorneal.docx';
        parametros['salida'] = nombre;
        this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.reporteSolicitudEvaluacionCornealPdf = function (form) {
        var nombre = 'SolicitudEvaluacionCorneal.docx';
        var path = 'file/reportePdf';
        var parametros = {};
        parametros['entradas'] = {
            solicitudEvaluacionCorneal: this.solicitudEvaluacionCorneal
        };
        parametros['plantilla'] = 'SolicitudEvaluacionCorneal.docx';
        parametros['salida'] = 'SolicitudEvaluacionCorneal.pdf';
        this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    SolicitudEvaluacionCornealCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
        this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealCancelar = true;
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.buscarSolicitudEvaluacionCornealFront = function (form) {
        this.accionesBuscar();
        var vsolicitudEvaluacionCorneal = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
        vsolicitudEvaluacionCorneal.from(this.solicitudEvaluacionCorneal);
        this.configuracionSolicitudEvaluacionCorneal = new _shared_configurar_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_7__["ConfigurarSolicitudEvaluacionCorneal"]();
        this.configuracionSolicitudEvaluacionCorneal.permisosTabla = {
            tabla: 'solicitudEvaluacionCorneal',
            permiso: 8
        };
        this.configuracionSolicitudEvaluacionCorneal.titulo =
            'Buscar ' + this.permisosTabla.etiqueta;
        this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta = vsolicitudEvaluacionCorneal;
        this.permisosacciones();
        $('#buscarSolicitudEvaluacionCorneal_' + this.nombre).modal();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.buscarSolicitudEvaluacionCornealBack = function (solicitudEvaluacionCorneal) {
        this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesByDto(solicitudEvaluacionCorneal, this.eventoSrvSolicitudEvaluacionCornealBuscar, this);
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.eventoSrvSolicitudEvaluacionCornealBuscar = function (lista, objeto) {
        objeto.lista_solicitudEvaluacionCorneales = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudEvaluacionCorneal = lista[0];
            objeto.solicitudEvaluacionCornealLazy = false;
            objeto.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(objeto.solicitudEvaluacionCorneal, objeto.evn_lazy_solicitudEvaluacionCorneal, objeto);
        }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.guardarSolicitudEvaluacionCornealFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarSolicitudEvaluacionCornealBack(this.solicitudEvaluacionCorneal);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.guardarSolicitudEvaluacionCornealBack = function (solicitudEvaluacionCorneal) {
        if (solicitudEvaluacionCorneal.usuarioUltMov == null)
            solicitudEvaluacionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        if (solicitudEvaluacionCorneal.status == null ||
            solicitudEvaluacionCorneal.status == '')
            solicitudEvaluacionCorneal.status = 1;
        this.solicitudEvaluacionCorneal_service.guardarSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal, this.eventoSrvSolicitudEvaluacionCornealGuardar, this);
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.eventoSrvSolicitudEvaluacionCornealGuardar = function (solicitudEvaluacionCorneal, obj) {
        obj.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
        obj.globalesService.registraIdSolicitudEvaluacion(obj.solicitudEvaluacionCorneal.id);
        bootbox.alert('Datos guardados con éxito');
        var aux = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
        aux.from(solicitudEvaluacionCorneal);
        obj.solicitudEvaluacionCornealChange.emit(aux);
        obj.solicitudEvaluacionCornealTablaChange.emit(aux);
        obj.solicitudEvaluacionCornealLazy = false;
        var aux2 = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
        aux2.id = solicitudEvaluacionCorneal.id;
        obj.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(aux2, obj.evn_lazy_solicitudEvaluacionCorneal, obj);
        obj.accionesActualizar();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.actualizarSolicitudEvaluacionCornealFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarSolicitudEvaluacionCornealBack(this.solicitudEvaluacionCorneal);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.actualizarSolicitudEvaluacionCornealBack = function (solicitudEvaluacionCorneal) {
        //SE-CDMX/112/2020/0025
        solicitudEvaluacionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        var aux = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
        aux.from(solicitudEvaluacionCorneal);
        aux.datosProcuracionCorneal = solicitudEvaluacionCorneal.datosProcuracionCorneal;
        this.solicitudEvaluacionCorneal_service.actualizarSolicitudEvaluacionCorneal(aux, this.eventoSrvSolicitudEvaluacionCornealActualizar, this);
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.eventoSrvSolicitudEvaluacionCornealActualizar = function (retorno, obj) {
        if (retorno) {
            if (obj.mensaje)
                bootbox.alert('Datos actualizados con éxito');
            obj.solicitudEvaluacionCorneal = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"](obj.solicitudEvaluacionCorneal);
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.solicitudEvaluacionCornealLazy = false;
            obj.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(obj.solicitudEvaluacionCorneal, obj.evn_lazy_solicitudEvaluacionCorneal, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            obj.solicitudEvaluacionCornealChange.emit(obj.solicitudEvaluacionCorneal);
            obj.solicitudEvaluacionCornealTablaChange.emit(obj.solicitudEvaluacionCorneal);
            obj.accionesActualizar();
        }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.eliminarSolicitudEvaluacionCornealFront = function (form) {
        this.accion = 4;
        this.eliminarSolicitudEvaluacionCornealBack(this.solicitudEvaluacionCorneal);
        this.permisosacciones();
        this.accionesBuscar();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.eliminarSolicitudEvaluacionCornealBack = function (solicitudEvaluacionCorneal) {
        solicitudEvaluacionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudEvaluacionCorneal_service.eliminarSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal, this.eventoSrvSolicitudEvaluacionCornealEliminar, this);
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.eventoSrvSolicitudEvaluacionCornealEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert('Datos eliminados con éxito');
            obj.solicitudEvaluacionCorneal = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
            obj.solicitudEvaluacionCornealChange.emit(obj.solicitudEvaluacionCorneal);
            obj.solicitudEvaluacionCornealTablaChange.emit(obj.solicitudEvaluacionCorneal);
            obj.limpiarCampos();
        }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.cancelarSolicitudEvaluacionCornealFront = function (form) {
        this.accion = 6;
        this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
        this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = true;
        this.permisosacciones();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.nuevoSolicitudEvaluacionCornealFront = function (form) {
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
                this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false;
                this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealCancelar = true;
            }.bind(this)
        });
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovSolicitudEvaluacionCornealUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudEvaluacionCornealUsuario, this);
        this.lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte = [];
        this.causaMuerte_service.getCausaMuertesActivos(this.evtGetIdcausaMuerteSolicitudEvaluacionCornealCausaMuerte, this);
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.configurarTablasConjuntos = function () { };
    SolicitudEvaluacionCornealCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealGuardar = false;
        this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = this.solicitudEvaluacionCornealCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.evtSolicitudEvaluacionCornealSeleccionado = function (solicitudEvaluacionCorneal) {
        this.solicitudEvaluacionCorneal = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
        this.solicitudEvaluacionCorneal.from(solicitudEvaluacionCorneal);
        this.solicitudEvaluacionCornealLazy = false;
        this.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(this.solicitudEvaluacionCorneal, this.evn_lazy_solicitudEvaluacionCorneal, this);
        this.accion = 7;
        this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealGuardar = false;
        this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = this.solicitudEvaluacionCornealCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $('#buscarSolicitudEvaluacionCorneal_' + this.nombre).modal('hide');
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.ngAfterContentInit = function () {
        //  bootbox.alert("cargado");
        // this.globalesService.spinner.hide();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.globalesService.spinner.show();
        this.accion = 0; // *********************************************************************************************************** maquina
        this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false; // ******************** maquina
        this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
        //this.usuarioBtc_service.getUsuarioBtcdb((this.globalesService.dameUsuario() as Usuario).usuarioBtc.id, this.evtUsuarioBtc, this );
        this.usuario = this.globalesService.dameUsuario();
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id === null) {
            if (this.globalesService.dameIdRegistroExtracion() !== this.globalesService.dameIdSolicitudEvaluacion()) {
                setTimeout(function () {
                    _this.globalesService.limpiaIdSolicitudEvaluacion();
                });
            }
            else {
                id = this.globalesService.dameIdRegistroExtracion();
            }
        }
        if (id !== null) {
            setTimeout(function () {
                _this.globalesService.registraIdSolicitudEvaluacion(id);
            });
            this.solicitudEvaluacionCorneal = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
            this.solicitudEvaluacionCorneal.id = id;
            this.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(this.solicitudEvaluacionCorneal, this.evn_lazy_solicitudEvaluacionCorneal, this);
            this.recepcionSolicitudEvaluacionService.getRecepcionSolicitudEvaluacionByIdsolicitudEvaluacionCorneal(this.solicitudEvaluacionCorneal, this.evn_buscarRecepcion, this);
        }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.permisosacciones = function () {
        if (this.solicitudEvaluacionCornealBuscar)
            this.solicitudEvaluacionCornealBuscar = this.globalesService.pbuscar(this, 'solicitudEvaluacionCorneal');
        if (this.solicitudEvaluacionCornealActualizar)
            this.solicitudEvaluacionCornealActualizar =
                this.globalesService.pacutalizar(this, 'solicitudEvaluacionCorneal') &&
                    this.globalesService.pbuscar(this, 'solicitudEvaluacionCorneal');
        if (this.solicitudEvaluacionCornealEliminar)
            this.solicitudEvaluacionCornealEliminar =
                this.globalesService.peliminar(this, 'solicitudEvaluacionCorneal') &&
                    this.globalesService.pbuscar(this, 'solicitudEvaluacionCorneal');
        if (this.solicitudEvaluacionCornealAgregar)
            this.solicitudEvaluacionCornealAgregar = this.globalesService.pagregar(this, 'solicitudEvaluacionCorneal');
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.permisosaccionesInicio = function () {
        this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false; // *************************** maquina
        this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.evtlimpiarCampos = function () {
        this.globalesService.limpiaIdSolicitudEvaluacion();
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.router.navigateByUrl('solicitud-evaluacion-corneal-crud');
        }
        else {
            this.limpiarCampos();
        }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.limpiarCampos = function () {
        this.solicitudEvaluacionCorneal = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"]();
        this.recepcionSolicitudEvaluacion = null;
        this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEleccion = new _causa_muertes_shared_causa_muerte__WEBPACK_IMPORTED_MODULE_15__["CausaMuerte"]();
        this.datoProcuracionCornealCI = new _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_17__["DatoProcuracionCorneal"]();
        this.datoProcuracionCornealCD = new _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_17__["DatoProcuracionCorneal"]();
        this.solicitudEvaluacionCornealChange.emit(this.solicitudEvaluacionCorneal);
        this.solicitudEvaluacionCornealSeleccion = this.solicitudEvaluacionCornealCancelar = this.solicitudEvaluacionCornealGuardar = this.solicitudEvaluacionCornealActualizar = this.solicitudEvaluacionCornealEliminar = false; // *************************** maquina
        this.solicitudEvaluacionCornealBuscar = this.solicitudEvaluacionCornealAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.validaFechas = function () {
        if (this.datoProcuracionCornealCD &&
            this.datoProcuracionCornealCD.fechaInicio ===
                this.datoProcuracionCornealCD.fechaFin &&
            this.datoProcuracionCornealCD.horaInicio >
                this.datoProcuracionCornealCD.horaFin) {
            bootbox.alert('La hora de inicio de procuracion de la córnea derecha  es mayor a la hora de fin de procuracion, favor de corregir');
            return false;
        }
        if (this.datoProcuracionCornealCI &&
            this.datoProcuracionCornealCI.fechaInicio ===
                this.datoProcuracionCornealCI.fechaFin &&
            this.datoProcuracionCornealCI.horaInicio >
                this.datoProcuracionCornealCI.horaFin) {
            bootbox.alert('La hora de inicio de procuracion de la córnea izquierda es mayor a la hora de fin de procuracion, favor de corregir');
            return false;
        }
        if (this.datoProcuracionCornealCI.fechaInicio > this.datoProcuracionCornealCI.fechaFin) {
            bootbox.alert('La fecha de inicio de procuracion de la córnea izquierda es mayor a la fecha de fin de procuracion, favor de corregir');
            return false;
        }
        if (this.datoProcuracionCornealCD.fechaInicio > this.datoProcuracionCornealCD.fechaFin) {
            bootbox.alert('La fecha de inicio de procuracion de la córnea derecha es mayor a la fecha de fin de procuracion, favor de corregir');
            return false;
        }
        if (this.solicitudEvaluacionCorneal.horaInicioRefrigracion && this.solicitudEvaluacionCorneal.horaMuerte > this.solicitudEvaluacionCorneal.horaInicioRefrigracion) {
            bootbox.alert('La hora de refrigeracion es menor a las hora de muerte, favor de corregir');
            return false;
        }
        return true;
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.doSave = function () {
        this.mensaje = true;
        if (!this.validaFechas()) {
            return;
        }
        if (this.solicitudEvaluacionCorneal.fechaMuerte == null ||
            this.solicitudEvaluacionCorneal.horaMuerte == null) {
            bootbox.alert('Ingresa los Campos obligatorios *');
            return;
        }
        ('folio: ' + this.solicitudEvaluacionCorneal.folioSolicitud);
        this.datoProcuracionCornealCI.tipo = 1;
        this.datoProcuracionCornealCD.tipo = 2;
        if (this.solicitudEvaluacionCorneal.folioSolicitud == null) {
            ('salida');
            if (this.solicitudEvaluacionCorneal.temperaturaRefrigeracion !== null &&
                this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id !==
                    undefined &&
                this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id !== null) {
                this.solicitudEvaluacionCorneal.temperaturaRefrigeracion = this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id;
            }
            // this.solicitudEvaluacionCorneal.idhospital = this.usuarioBtc.idhospital;
            this.solicitudEvaluacionCorneal.idhospital = this.usuario.idhospital;
            this.solicitudEvaluacionCorneal.datosProcuracionCorneal = [];
            if (this.datoProcuracionCornealCI.fechaInicio ||
                this.datoProcuracionCornealCI.fechaFin ||
                this.datoProcuracionCornealCI.horaInicio ||
                this.datoProcuracionCornealCI.horaFin) {
                this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(this.datoProcuracionCornealCI);
            }
            if (this.datoProcuracionCornealCD.fechaInicio ||
                this.datoProcuracionCornealCD.fechaFin ||
                this.datoProcuracionCornealCD.horaInicio ||
                this.datoProcuracionCornealCD.horaFin) {
                this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(this.datoProcuracionCornealCD);
            }
            this.solicitudEvaluacionCorneal.status = "1";
            this.solicitudEvaluacionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
            this.solicitudEvaluacionCorneal = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"](this.solicitudEvaluacionCorneal);
            this.solicitudEvaluacionCorneal.estatusProceso = 0;
            this.guardarSolicitudEvaluacionCornealBack(this.solicitudEvaluacionCorneal);
        }
        else {
            this.validaActualiza();
        }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.validaActualiza = function () {
        this.globalesService.registraIdSolicitudEvaluacion(this.solicitudEvaluacionCorneal.id);
        if (this.solicitudEvaluacionCorneal.temperaturaRefrigeracion !== null &&
            this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id !==
                undefined &&
            this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id !== null) {
            this.solicitudEvaluacionCorneal.temperaturaRefrigeracion = this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id;
        }
        this.solicitudEvaluacionCorneal.datosProcuracionCorneal = [];
        this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(this.datoProcuracionCornealCI);
        this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(this.datoProcuracionCornealCD);
        this.solicitudEvaluacionCorneal.estatusProceso = 0;
        this.actualizarSolicitudEvaluacionCornealBack(this.solicitudEvaluacionCorneal);
    };
    // evtUsuarioBtc(retorno, obj){
    //   obj.usuarioBtc = retorno;
    // }
    SolicitudEvaluacionCornealCrudComponent.prototype.siguiente = function () {
        if ((this.solicitudEvaluacionCorneal.idcausaMuerte !== null &&
            //   this.solicitudEvaluacionCorneal.horaInicioRefrigracion !== null &&
            this.datoProcuracionCornealCI.horaInicio !== null &&
            this.datoProcuracionCornealCI.horaFin !== null &&
            this.datoProcuracionCornealCI.fechaInicio !== null &&
            this.datoProcuracionCornealCI.fechaFin !== null &&
            this.datoProcuracionCornealCI.id) ||
            (this.solicitudEvaluacionCorneal.idcausaMuerte !== null &&
                //    this.solicitudEvaluacionCorneal.horaInicioRefrigracion !== null &&
                this.datoProcuracionCornealCD.horaInicio !== null &&
                this.datoProcuracionCornealCD.horaFin !== null &&
                this.datoProcuracionCornealCD.fechaInicio !== null &&
                this.datoProcuracionCornealCD.fechaFin !== null &&
                this.datoProcuracionCornealCD.id)) {
            this.router.navigateByUrl("/registro-extraccion-crud/" + this.solicitudEvaluacionCorneal.id);
        }
        else {
            bootbox.alert('Para continuar Ingrese la información \n solicitada y al menos la información de una córnea. \n Guarde y continúe.');
        }
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.doEnviar = function () {
        this.doSave();
        if (!this.validaFechas()) {
            return;
        }
        if (!this.validaTodosc) {
            bootbox.alert('Ingresar los datos obligatorios.');
            return;
        }
        bootbox.confirm({
            message: "¿Deseas enviar la solicitud a la bandeja de recepción de tejido? !Al enviar los datos a recepcion la información que no contenga id cenatra se eliminará!",
            buttons: {
                confirm: {
                    label: 'Sí',
                    className: 'btn-primary'
                },
                cancel: {
                    label: 'No',
                    className: ''
                }
            },
            callback: function (result) {
                if (result) {
                    var recepcion = new _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_20__["RecepcionSolicitudEvaluacion"]();
                    recepcion.idsolicitudEvaluacionCorneal = {
                        id: this.solicitudEvaluacionCorneal.id,
                        fechaRegistro: new Date()
                    };
                    this.mensaje = false;
                    if (this.solicitudEvaluacionCorneal.temperaturaRefrigeracion != null) {
                        this.solicitudEvaluacionCorneal.temperaturaRefrigeracion = this.solicitudEvaluacionCorneal.temperaturaRefrigeracion.id;
                    }
                    this.solicitudEvaluacionCorneal.datosProcuracionCorneal = [];
                    this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(this.datoProcuracionCornealCI);
                    this.solicitudEvaluacionCorneal.datosProcuracionCorneal.push(this.datoProcuracionCornealCD);
                    this.solicitudEvaluacionCorneal.estatusProceso = 1;
                    this.actualizarSolicitudEvaluacionCornealBack(this.solicitudEvaluacionCorneal);
                    if (this.datoProcuracionCornealCD.idcenatra === null && this.datoProcuracionCornealCI.idcenatra === null) {
                        bootbox.alert("No se puede envar la información a recepción sin un id cenatra");
                        return;
                    }
                    // recepcion.usuarioUltMov = new Usuario();
                    //recepcion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
                    recepcion.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"](this.globalesService.dameUsuario());
                    this.recepcionSolicitudEvaluacionService.guardarRecepcionSolicitudEvaluacion(recepcion, this.evtEnviarRecepcion, this);
                }
            }.bind(this)
        });
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.evtEnviarRecepcion = function (solicitudEvaluacionCorneal, obj) {
        obj.recepcionSolicitudEvaluacion = solicitudEvaluacionCorneal;
        bootbox.alert('Solicitud enviada.');
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.evn_buscarRecepcion = function (recepcionSolicitudEvaluacion, objeto) {
        objeto.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
    };
    SolicitudEvaluacionCornealCrudComponent.prototype.doImprimir = function () {
        var path = 'solicitudEvaluacionCorneal/reporteSolicitudEvaluacionCorneal';
        var otros = 'ReporteEvaluacionRegistroDonante';
        var parametros = { id: this.solicitudEvaluacionCorneal.id };
        var nombre = 'ReporteSolicitud.pdf';
        this.fileservice.downloadFile(nombre, otros, path, parametros);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudEvaluacionCornealCrudComponent.prototype, "ocultarConjuntosSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SolicitudEvaluacionCornealCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudEvaluacionCornealCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCorneal"])
    ], SolicitudEvaluacionCornealCrudComponent.prototype, "solicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealCrudComponent.prototype, "solicitudEvaluacionCornealChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealCrudComponent.prototype, "solicitudEvaluacionCornealTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_17__["DatoProcuracionCorneal"])
    ], SolicitudEvaluacionCornealCrudComponent.prototype, "datoProcuracionCornealCI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_17__["DatoProcuracionCorneal"])
    ], SolicitudEvaluacionCornealCrudComponent.prototype, "datoProcuracionCornealCD", void 0);
    SolicitudEvaluacionCornealCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-evaluacion-corneal-crud',
            template: __webpack_require__(/*! ./solicitud-evaluacion-corneal-crud.component.html */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-evaluacion-corneal-crud.component.css */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
                _shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_6__["SolicitudEvaluacionCornealService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_16__["CausaMuerteService"],
                _dato_procuracion_corneales_shared_dato_procuracion_corneal_service__WEBPACK_IMPORTED_MODULE_18__["DatoProcuracionCornealService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_19__["RecepcionSolicitudEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_6__["SolicitudEvaluacionCornealService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_16__["CausaMuerteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _dato_procuracion_corneales_shared_dato_procuracion_corneal_service__WEBPACK_IMPORTED_MODULE_18__["DatoProcuracionCornealService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_19__["RecepcionSolicitudEvaluacionService"]])
    ], SolicitudEvaluacionCornealCrudComponent);
    return SolicitudEvaluacionCornealCrudComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para solicitudEvaluacionCorneal-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionSolicitudEvaluacionCorneal.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_solicitudEvaluacionCorneal_{{nombregrid}}\">\n                <div id=\"grid_solicitudEvaluacionCorneal_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: SolicitudEvaluacionCornealListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEvaluacionCornealListKendoComponent", function() { return SolicitudEvaluacionCornealListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _shared_configurar_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/configurar-solicitud-evaluacion-corneal.ts");
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
var SolicitudEvaluacionCornealListKendoComponent = /** @class */ (function () {
    function SolicitudEvaluacionCornealListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.solicitudEvaluacionCornealSeleccionado = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_3__["SolicitudEvaluacionCorneal"]();
        this.configuracionSolicitudEvaluacionCorneal = new _shared_configurar_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudEvaluacionCorneal"]();
        this.nombregrid = "";
        this.evtSolicitudEvaluacionCornealSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudEvaluacionCorneal";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudEvaluacionCorneal'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudEvaluacionCorneal'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    SolicitudEvaluacionCornealListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionSolicitudEvaluacionCorneal.titulo.indexOf("Catálogo") != -1) {
            this.configuracionSolicitudEvaluacionCorneal.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    SolicitudEvaluacionCornealListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionSolicitudEvaluacionCorneal && changes.configuracionSolicitudEvaluacionCorneal.currentValue &&
            (changes.configuracionSolicitudEvaluacionCorneal.previousValue instanceof _shared_configurar_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudEvaluacionCorneal"])) {
            if (changes.configuracionSolicitudEvaluacionCorneal.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionSolicitudEvaluacionCorneal.currentValue.permisosAtributos;
            if (changes.configuracionSolicitudEvaluacionCorneal.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionSolicitudEvaluacionCorneal.currentValue.permisosTabla;
            if ($("#grid_solicitudEvaluacionCorneal_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    SolicitudEvaluacionCornealListKendoComponent.prototype.ngOnInit = function () {
        self["grid_solicitudEvaluacionCorneal_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionSolicitudEvaluacionCorneal.permisosAtributos &&
            this.configuracionSolicitudEvaluacionCorneal.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "solicitudEvaluacionCorneal",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudEvaluacionCorneal'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudEvaluacionCorneal'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudEvaluacionCorneal'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionSolicitudEvaluacionCorneal.permisosAtributos)
            this.permisosAtributos = this.configuracionSolicitudEvaluacionCorneal.permisosAtributos;
        if (this.configuracionSolicitudEvaluacionCorneal.permisosTabla)
            this.permisosTabla = this.configuracionSolicitudEvaluacionCorneal.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudEvaluacionCornealListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoAtributo && permisos.solicitudEvaluacionCorneal.PermisoAtributo.length > 0
            && !obj.configuracionSolicitudEvaluacionCorneal.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.solicitudEvaluacionCorneal.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.SolicitudEvaluacionCorneal.PermisoAtributo ;
        }
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoTabla && permisos.solicitudEvaluacionCorneal.PermisoTabla.length > 0
            && !obj.configuracionSolicitudEvaluacionCorneal.permisosTabla) {
            obj.globalesService.evtTablas(permisos.solicitudEvaluacionCorneal.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.SolicitudEvaluacionCorneal.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudEvaluacionCornealListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_solicitudEvaluacionCorneal_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    SolicitudEvaluacionCornealListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionSolicitudEvaluacionCorneal.campoAgEl != null
            && this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta
            && this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta.isOk
            && !this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta.isOk())
            return;
        if (this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta) {
            if (!this.configuracionSolicitudEvaluacionCorneal.campoAgEl && this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta instanceof _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_3__["SolicitudEvaluacionCorneal"])
                this.configuracionSolicitudEvaluacionCorneal.rutaLista = this.crudServiceBaseUrl + "/getSolicitudEvaluacionCornealesByDto";
            this.lista = this.configuracionSolicitudEvaluacionCorneal.lecturaP(completar, this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta);
            if (this.configuracionSolicitudEvaluacionCorneal.campoAgEl) {
                this.rutaAgregar = this.configuracionSolicitudEvaluacionCorneal.agregarP(function () { }, this.configuracionSolicitudEvaluacionCorneal.campoAgEl);
                this.rutaEliminar = this.configuracionSolicitudEvaluacionCorneal.eliminarP(function () { }, this.configuracionSolicitudEvaluacionCorneal.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionSolicitudEvaluacionCorneal.agregarP(completar, this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta);
                this.rutaEliminar = this.configuracionSolicitudEvaluacionCorneal.eliminarP(completar, this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta);
            }
        }
        else {
            this.lista = this.configuracionSolicitudEvaluacionCorneal.lectura();
            this.rutaAgregar = this.configuracionSolicitudEvaluacionCorneal.agregar();
            this.rutaEliminar = this.configuracionSolicitudEvaluacionCorneal.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "folioSolicitud")) {
            campos["folioSolicitud"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "folioSolicitud"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "nombre"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "primerApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "segundoApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "numeroExpediente")) {
            campos["numeroExpediente"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "numeroExpediente"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "edad")) {
            campos["edad"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "edad"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "fechaMuerte")) {
            campos["fechaMuerte"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "fechaMuerte"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "horaMuerte")) {
            campos["horaMuerte"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "horaMuerte"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "horaInicioRefrigracion")) {
            campos["horaInicioRefrigracion"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "horaInicioRefrigracion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "temperaturaRefrigeracion")) {
            campos["temperaturaRefrigeracion"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "temperaturaRefrigeracion"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "conservacionTemperaturaAmbiente")) {
            campos["conservacionTemperaturaAmbiente"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "conservacionTemperaturaAmbiente"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "idcausaMuerte")) {
            campos["idcausaMuerte"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "idcausaMuerte"), nullable: true, type: "object", defaultValue: { "id": "", "descripcion": "" } };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "estatusProceso"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "solicitudEvaluacionCorneal", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionSolicitudEvaluacionCorneal.rutaActualizar,
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
                        if (elem.fechaMuerte && typeof elem.fechaMuerte === "number") {
                            elem.fechaMuerte = kendo.parseDate(new Date(elem.fechaMuerte), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.horaInicioRefrigracion && typeof elem.horaInicioRefrigracion === "number") {
                            elem.horaInicioRefrigracion = kendo.parseDate(new Date(elem.horaInicioRefrigracion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.horaMuerte && typeof elem.horaMuerte === "number") {
                            elem.horaMuerte = kendo.parseDate(new Date(elem.horaMuerte), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionSolicitudEvaluacionCorneal.campoAgEl) {
                if (self.configuracionSolicitudEvaluacionCorneal.tipocampoAgEl == "SolicitudEvaluacionCornealSolicitudEvaluacionCorneal")
                    self.configuracionSolicitudEvaluacionCorneal.campoAgEl.solicitudEvaluacionCorneal2 = options.models[0];
                else
                    self.configuracionSolicitudEvaluacionCorneal.campoAgEl.solicitudEvaluacionCorneal = options.models[0];
                return JSON.stringify(self.configuracionSolicitudEvaluacionCorneal.campoAgEl);
            }
            else if (est.options[operation].data.models.solicitudEvaluacionCorneal) {
                est.options[operation].data.models.solicitudEvaluacionCorneal2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    SolicitudEvaluacionCornealListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "folioSolicitud")) {
            columnas.push({ field: "folioSolicitud", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "folioSolicitud"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "nombre"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "primerApellido"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "segundoApellido"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "numeroExpediente")) {
            columnas.push({ field: "numeroExpediente", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "numeroExpediente"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "edad")) {
            columnas.push({ field: "edad", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "edad") });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "fechaMuerte")) {
            columnas.push({ field: "fechaMuerte", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "fechaMuerte"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "horaMuerte")) {
            columnas.push({ field: "horaMuerte", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "horaMuerte"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "horaInicioRefrigracion")) {
            columnas.push({ field: "horaInicioRefrigracion", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "horaInicioRefrigracion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "temperaturaRefrigeracion")) {
            columnas.push({ field: "temperaturaRefrigeracion", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "temperaturaRefrigeracion") });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "conservacionTemperaturaAmbiente")) {
            columnas.push({ field: "conservacionTemperaturaAmbiente", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "conservacionTemperaturaAmbiente") });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "idcausaMuerte")) {
            columnas.push({ field: "idcausaMuerte", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "idcausaMuerte"), editor: idcausaMuerteDropDownEditor, template: " #if (idcausaMuerte){#   #=idcausaMuerte.descripcion# # } # " });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "estatusProceso") });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "solicitudEvaluacionCorneal", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "solicitudEvaluacionCorneal", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "solicitudEvaluacionCorneal"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "solicitudEvaluacionCorneal")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "solicitudEvaluacionCorneal")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "solicitudEvaluacionCorneal") && this.configuracionSolicitudEvaluacionCorneal.solicitudEvaluacionCornealConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_solicitudEvaluacionCorneal_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_solicitudEvaluacionCorneal_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionSolicitudEvaluacionCorneal.altoComponente,
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
        this.grid = $("#grid_solicitudEvaluacionCorneal_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidcausaMuerte = this.urlprovider.serverURL + "causaMuerte/getCausaMuertesActivos";
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
        function idcausaMuerteDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "tipoCausaMuerte",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidcausaMuerte,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    SolicitudEvaluacionCornealListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_solicitudEvaluacionCorneal_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.solicitudEvaluacionCornealSeleccionado = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_3__["SolicitudEvaluacionCorneal"]();
        gridac.solicitudEvaluacionCornealSeleccionado.from(dataItem);
        gridac.evtSolicitudEvaluacionCornealSeleccionado.emit(gridac.solicitudEvaluacionCornealSeleccionado);
        (gridac.solicitudEvaluacionCornealSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudEvaluacionCorneal"])
    ], SolicitudEvaluacionCornealListKendoComponent.prototype, "configuracionSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SolicitudEvaluacionCornealListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("solicitudEvaluacionCornealSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SolicitudEvaluacionCornealListKendoComponent.prototype, "evtSolicitudEvaluacionCornealSeleccionado", void 0);
    SolicitudEvaluacionCornealListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-evaluacion-corneal-list-kendo',
            template: __webpack_require__(/*! ./solicitud-evaluacion-corneal-list-kendo.component.html */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-evaluacion-corneal-list-kendo.component.css */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], SolicitudEvaluacionCornealListKendoComponent);
    return SolicitudEvaluacionCornealListKendoComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: SolicitudEvaluacionCornealRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEvaluacionCornealRoutingModule", function() { return SolicitudEvaluacionCornealRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_list_kendo_solicitud_evaluacion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_crud_solicitud_evaluacion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_table_solicitud_evaluacion_corneal_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_detalle_donante_extraccion_detalle_donante_extraccion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component */ "./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'solicitud-evaluacion-corneal-list-kendo', component: _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_list_kendo_solicitud_evaluacion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["SolicitudEvaluacionCornealListKendoComponent"] },
    { path: 'solicitud-evaluacion-corneal-crud', component: _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_crud_solicitud_evaluacion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudEvaluacionCornealCrudComponent"] },
    { path: 'solicitud-evaluacion-corneal-crud/:id', component: _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_crud_solicitud_evaluacion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudEvaluacionCornealCrudComponent"] },
    { path: 'detalle-donante-extraccion/:id', component: _solicitud_evaluacion_corneales_detalle_donante_extraccion_detalle_donante_extraccion_component__WEBPACK_IMPORTED_MODULE_5__["DetalleDonanteExtraccionComponent"] },
    { path: 'solicitud-evaluacion-corneal-table', component: _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_table_solicitud_evaluacion_corneal_table_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudEvaluacionCornealTableComponent"] },
];
var SolicitudEvaluacionCornealRoutingModule = /** @class */ (function () {
    function SolicitudEvaluacionCornealRoutingModule() {
    }
    SolicitudEvaluacionCornealRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SolicitudEvaluacionCornealRoutingModule);
    return SolicitudEvaluacionCornealRoutingModule;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.css":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h4>LISTA DE CONSULTA DE SOLICITUDES DE EVALUACIÓN DE TEJIDO</h4>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-5\">\n                        <app-componente-cadena [componente]=\"'solicitudTejidoCornealRecepcion'\" [atributo]=\"'folio'\" [permisosAtributos]=\"permisosBusquedas\" [(valido)]=\"validos.folio\" [(dato)]=\"datosBusqueda.folio\" class=\"w-100\">\n                        </app-componente-cadena>\n                    </div>\n                    <div class=\"col-lg-5\">\n                        <app-componente-cadena [componente]=\"'solicitudTejidoCornealRecepcion'\" [atributo]=\"'idCenatra'\" [permisosAtributos]=\"permisosBusquedas\" [(valido)]=\"validos.cenatra\" [(dato)]=\"datosBusqueda.idCenatra\" class=\"w-100\">\n                        </app-componente-cadena>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <label class=\"control-label\">Fecha Inicio:</label>\n                        <kendo-datepicker class=\"form-control\" name=\"fechaInicio\" [(ngModel)]=\"fechaInicio\">\n                            <kendo-datepicker-messages today=\"Hoy\"></kendo-datepicker-messages>\n                        </kendo-datepicker>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <label class=\"control-label\">Fecha Fin:</label>\n                        <kendo-datepicker class=\"form-control\" name=\"fechaFin\" [(ngModel)]=\"fechaFin\">\n                            <kendo-datepicker-messages today=\"Hoy\"></kendo-datepicker-messages>\n                        </kendo-datepicker>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <button class=\"btn btn-primary\" id=\"buscar\" [disabled]=\"enviando\" (click)=\"llena(datosBusqueda, fechaInicio, fechaFin)\">Buscar</button>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <table id=\"tabla_solicitudEvaluacionCorneal\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n                        <thead>\n                            <tr>\n                                <th>Id</th>\n                                <th>Folio de Solicitud de Evaluación</th>\n                                <th>ID CENATRA</th>\n                                <th>Nombre</th>\n                                <th>1° Apellido</th>\n                                <th>2° Apellido</th>\n                                <th>Detalle</th>\n                                <th>Editar</th>\n                                <th>Borrar</th>\n                            </tr>\n                        </thead>\n                        <!-- <tfoot>\n                            <tr>\n                                <th>Id</th>\n                                <th>Folio de Solicitud de Evaluación</th>\n                                <th>Id Cenatra</th>\n                                <th>Nombre</th>\n                                <th>1° Apellido</th>\n                                <th>2° Apellido</th>\n                                <th>Detalle</th>\n                                <th>Editar</th>\n                                <th>Borrar</th>\n                            </tr>\n                        </tfoot> -->\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n<div id=\"myModal\" class=\"modal fade \" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> - </div>\n            <div class=\"modal-body\">\n                <app-detalle-donante-extraccion [id]=\"idSeleccionada\"></app-detalle-donante-extraccion>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: SolicitudEvaluacionCornealTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEvaluacionCornealTableComponent", function() { return SolicitudEvaluacionCornealTableComponent; });
/* harmony import */ var _shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../permiso-atributos/shared/permiso-atributo.service */ "./src/app/permiso-atributos/shared/permiso-atributo.service.ts");
/* harmony import */ var _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../permiso-tablas/shared/permiso-tabla.service */ "./src/app/permiso-tablas/shared/permiso-tabla.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SolicitudEvaluacionCornealTableComponent = /** @class */ (function () {
    function SolicitudEvaluacionCornealTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider, solicitudEvaluacionCornealService, router) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.solicitudEvaluacionCornealService = solicitudEvaluacionCornealService;
        this.router = router;
        this.validos = {
            folio: true,
            cenatra: true,
            fechai: true,
            fechaf: true
        };
        this.datosBusqueda = {
            folio: '',
            idCenatra: '',
            fechaInicio: Date,
            fechaFin: Date,
        };
        this.permisosBusquedas = [
            {
                etiqueta: 'Folio de Solicitud  de Evaluación Corneal',
                validacion: null,
                permiso: 3,
                tabla: 'solicitudTejidoCornealRecepcion',
                atributo: 'folio'
            },
            {
                etiqueta: 'Id cenatra',
                permiso: 3,
                tabla: 'solicitudTejidoCornealRecepcion',
                atributo: 'idCenatra',
                validacion: '^[0-9]*$',
                mensaje: "Solo se aceptan id's numéricos"
            },
            {
                etiqueta: 'Fecha Inicio',
                validacion: null,
                permiso: 3,
                tabla: 'solicitudTejidoCornealRecepcion',
                atributo: 'fechaInicio'
            },
            {
                etiqueta: 'Fecha Fin',
                validacion: null,
                permiso: 3,
                tabla: 'solicitudTejidoCornealRecepcion',
                atributo: 'fechaFin'
            }
        ];
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { tabla: 'solicitudEvaluacionCorneal', permiso: 0, etiqueta: '' };
        this.ptabla = false;
        this.pattr = false;
        this.enviando = false;
        this.solicitudEvaluacionCornealSeleccionado = new _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCorneal"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = '';
        this.getColumnas(this);
    }
    SolicitudEvaluacionCornealTableComponent.prototype.getColumnas = function (obj) {
        if ($('#tabla_solicitudEvaluacionCorneal').length == 0) {
            setTimeout(function () {
                obj.getColumnas(obj);
            }, 500);
        }
        var dato = {};
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        columnasNoVisibles.push(0);
        columnas.push({ data: 'idSolicitud' });
        columnas.push({ data: 'folioSolicitud' });
        columnas.push({ data: 'idCenatra' });
        columnas.push({ data: 'nombre' });
        columnas.push({ data: 'apellido1' });
        columnas.push({ data: 'apellido2' });
        columnas.push({
            data: function (oObj) {
                return "<div style='  text-align: center;' ><span style=\"cursor: pointer\"> <img src=\"assets/imagenes/svg/binocular.svg\" alt=\"Detalle\"  style=\"width: 30px;\" /> </span></div>";
            }
        });
        columnas.push({
            data: function (oObj) {
                return "<div style='  text-align: center;' ><span class=\"glyphicon glyphicon-edit\"  style=\"cursor: pointer\"></span></div>";
            }
        });
        columnas.push({
            data: function (oObj) {
                return "<div style='  text-align: center;' ><span class=\"glyphicon glyphicon-trash\"  style=\"cursor: pointer\"></span> </div>";
            }
        });
        var novisibles;
        novisibles = [
            {
                targets: columnasNoVisibles,
                visible: false,
                searchable: false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_solicitudEvaluacionCorneal').DataTable({
            columnDefs: novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            columns: columnas
        });
        this.llena(null, null, null);
        $('#tabla_solicitudEvaluacionCorneal tbody').on('click', 'td', function (evt) {
            if (evt.currentTarget.cellIndex ==
                $(evt.currentTarget)
                    .parent()
                    .find('td').length -
                    3) {
                var data = $('#tabla_solicitudEvaluacionCorneal')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.detalle(data);
            }
            if (evt.currentTarget.cellIndex ==
                $(evt.currentTarget)
                    .parent()
                    .find('td').length -
                    2) {
                var data = $('#tabla_solicitudEvaluacionCorneal')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.editar(data);
            }
            if (evt.currentTarget.cellIndex ==
                $(evt.currentTarget)
                    .parent()
                    .find('td').length -
                    1) {
                var data = $('#tabla_solicitudEvaluacionCorneal')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.borrar(data);
            }
        }.bind(this));
    };
    SolicitudEvaluacionCornealTableComponent.prototype.detalle = function (dato) {
        this.idSeleccionada = dato.idSolicitud;
        $('#myModal').modal('show');
    };
    SolicitudEvaluacionCornealTableComponent.prototype.editar = function (dato) {
        bootbox.dialog({
            title: 'Mensaje de confirmación de edición',
            message: '¿Qué desea editar?',
            size: 'large',
            onEscape: true,
            backdrop: true,
            buttons: {
                se: {
                    label: 'Solicitud de Evaluación',
                    className: 'btn-primary',
                    callback: function () {
                        this.globalesService.registraIdSolicitudEvaluacion(dato.idSolicitud);
                        this.router.navigateByUrl('/solicitud-evaluacion-corneal-crud/' + dato.idSolicitud);
                    }.bind(this)
                },
                re: {
                    label: 'Registro de Extracción',
                    className: 'btn-info',
                    callback: function () {
                        this.globalesService.registraIdSolicitudEvaluacion(dato.idSolicitud);
                        this.router.navigateByUrl('/registro-extraccion-crud/' + dato.idSolicitud);
                    }.bind(this)
                },
            }
        });
    };
    SolicitudEvaluacionCornealTableComponent.prototype.borrar = function (dato) {
        if (dato) {
            // bootbox.confirm("¿Está seguro de eliminar?", function (result) {
            //   buttons: {
            //     confirm: {
            //       label: "Sí",
            //       className: "btn-primary"
            //     },
            //     cancel: {
            //       label: "No",
            //       className: ""
            //     }
            //   },
            bootbox.confirm({
                message: "¿Está seguro de eliminar?",
                buttons: {
                    confirm: {
                        label: "Sí",
                        className: "btn-primary"
                    },
                    cancel: {
                        label: "No",
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {
                    if (result) {
                        var envio = {
                            id: dato.idSolicitud,
                            baja: true
                        };
                        this.solicitudEvaluacionCornealService.bajaSolicitudesEvaluacionByID(envio, this.evtBorrar, this);
                    }
                }.bind(this)
            });
        }
    };
    SolicitudEvaluacionCornealTableComponent.prototype.evtBorrar = function (bandera, obj) {
        if (bandera == true) {
            bootbox.alert('Datos eliminados con éxito');
            obj.llena({});
        }
        else {
            bootbox.alert('No de pude eliminar una solicitud cuando fue enviada a recepción');
        }
    };
    SolicitudEvaluacionCornealTableComponent.prototype.ngOnInit = function () { };
    SolicitudEvaluacionCornealTableComponent.prototype.cambio_solicitudEvaluacionCorneal = function (solicitudEvaluacionCorneal) {
        $('#tabla_solicitudEvaluacionCorneal')
            .DataTable()
            .ajax.reload(null, false);
        this.primero = true;
    };
    SolicitudEvaluacionCornealTableComponent.prototype.llena = function (dato, fechaInicio, fechaFin) {
        this.enviando = true;
        var fechaI;
        var fechaF;
        var datoenviar;
        if (dato) {
            datoenviar = Object.assign({}, dato);
        }
        else {
            datoenviar = {};
        }
        if (dato && fechaInicio) {
            datoenviar.fechaInicio = fechaInicio.getTime();
        }
        else {
            delete datoenviar.fechaInicio;
        }
        if (dato && fechaFin) {
            datoenviar.fechaFin = fechaFin.getTime();
        }
        else {
            delete datoenviar.fechaFin;
        }
        (datoenviar);
        var tabla = $('#tabla_solicitudEvaluacionCorneal').DataTable();
        tabla.clear().draw();
        $.ajax({
            url: this.urlProvider.serverURL + 'solicitudEvaluacionCorneal/getSolicitudesEvaluacionByFiltro',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                data.forEach(function (enty) {
                    var obj = {};
                    obj.idSolicitud = enty.idSolicitud;
                    obj.folioSolicitud = enty.folioSolicitud;
                    obj.idCenatra = enty.idCenatra;
                    obj.nombre = enty.nombre;
                    obj.apellido1 = enty.apellido1;
                    obj.apellido2 = enty.apellido2;
                    tabla.row.add(obj).draw(false);
                });
                this.enviando = false;
            }.bind(this),
            data: JSON.stringify(datoenviar)
        }).fail(function (jqXHR, textStatus, errorThrown) {
            this.enviando = false;
        }.bind(this));
    };
    SolicitudEvaluacionCornealTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-solicitud-evaluacion-corneal-table',
            template: __webpack_require__(/*! ./solicitud-evaluacion-corneal-table.component.html */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-evaluacion-corneal-table.component.css */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
                _shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_0__["SolicitudEvaluacionCornealService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_4__["URLProvider"],
            _shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_0__["SolicitudEvaluacionCornealService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SolicitudEvaluacionCornealTableComponent);
    return SolicitudEvaluacionCornealTableComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SolicitudEvaluacionCornealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEvaluacionCornealModule", function() { return SolicitudEvaluacionCornealModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _solicitud_evaluacion_corneal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud-evaluacion-corneal-routing.module */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-routing.module.ts");
/* harmony import */ var _solicitud_evaluacion_corneal_list_kendo_solicitud_evaluacion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-list-kendo/solicitud-evaluacion-corneal-list-kendo.component.ts");
/* harmony import */ var _solicitud_evaluacion_corneal_crud_solicitud_evaluacion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-crud/solicitud-evaluacion-corneal-crud.component.ts");
/* harmony import */ var _solicitud_evaluacion_corneal_conjunto_solicitud_evaluacion_corneal_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-conjunto/solicitud-evaluacion-corneal-conjunto.component.ts");
/* harmony import */ var _solicitud_evaluacion_corneal_solicitud_evaluacion_corneal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component.ts");
/* harmony import */ var _solicitud_evaluacion_corneal_table_solicitud_evaluacion_corneal_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal-table/solicitud-evaluacion-corneal-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _causa_muertes_causa_muerte_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../causa-muertes/causa-muerte.module */ "./src/app/causa-muertes/causa-muerte.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _dato_procuracion_corneales_dato_procuracion_corneal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dato-procuracion-corneales/dato-procuracion-corneal.module */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal.module.ts");
/* harmony import */ var _detalle_donante_extraccion_detalle_donante_extraccion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detalle-donante-extraccion/detalle-donante-extraccion.component */ "./src/app/solicitud-evaluacion-corneales/detalle-donante-extraccion/detalle-donante-extraccion.component.ts");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm5/index.js");
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
















var SolicitudEvaluacionCornealModule = /** @class */ (function () {
    function SolicitudEvaluacionCornealModule(parentModule) {
        if (parentModule) {
            throw new Error('SolicitudEvaluacionCornealModule is already loaded. Import it in the AppModule only');
        }
    }
    SolicitudEvaluacionCornealModule_1 = SolicitudEvaluacionCornealModule;
    SolicitudEvaluacionCornealModule.forRoot = function () {
        return {
            ngModule: SolicitudEvaluacionCornealModule_1,
            providers: []
        };
    };
    var SolicitudEvaluacionCornealModule_1;
    SolicitudEvaluacionCornealModule = SolicitudEvaluacionCornealModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"], _solicitud_evaluacion_corneal_routing_module__WEBPACK_IMPORTED_MODULE_3__["SolicitudEvaluacionCornealRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot(),
                _causa_muertes_causa_muerte_module__WEBPACK_IMPORTED_MODULE_10__["CausaMuerteModule"],
                _dato_procuracion_corneales_dato_procuracion_corneal_module__WEBPACK_IMPORTED_MODULE_12__["DatoProcuracionCornealModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_14__["DateInputsModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_15__["InputsModule"]
            ],
            declarations: [
                _solicitud_evaluacion_corneal_list_kendo_solicitud_evaluacion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudEvaluacionCornealListKendoComponent"],
                _solicitud_evaluacion_corneal_solicitud_evaluacion_corneal_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudEvaluacionCornealComponent"],
                _solicitud_evaluacion_corneal_crud_solicitud_evaluacion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCornealCrudComponent"],
                _solicitud_evaluacion_corneal_conjunto_solicitud_evaluacion_corneal_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudEvaluacionCornealConjuntoComponent"],
                _solicitud_evaluacion_corneal_table_solicitud_evaluacion_corneal_table_component__WEBPACK_IMPORTED_MODULE_8__["SolicitudEvaluacionCornealTableComponent"],
                _detalle_donante_extraccion_detalle_donante_extraccion_component__WEBPACK_IMPORTED_MODULE_13__["DetalleDonanteExtraccionComponent"],
            ],
            exports: [
                _solicitud_evaluacion_corneal_list_kendo_solicitud_evaluacion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudEvaluacionCornealListKendoComponent"],
                _solicitud_evaluacion_corneal_solicitud_evaluacion_corneal_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudEvaluacionCornealComponent"],
                _solicitud_evaluacion_corneal_crud_solicitud_evaluacion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudEvaluacionCornealCrudComponent"],
                _solicitud_evaluacion_corneal_conjunto_solicitud_evaluacion_corneal_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudEvaluacionCornealConjuntoComponent"],
                _solicitud_evaluacion_corneal_table_solicitud_evaluacion_corneal_table_component__WEBPACK_IMPORTED_MODULE_8__["SolicitudEvaluacionCornealTableComponent"],
                _detalle_donante_extraccion_detalle_donante_extraccion_component__WEBPACK_IMPORTED_MODULE_13__["DetalleDonanteExtraccionComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [SolicitudEvaluacionCornealModule])
    ], SolicitudEvaluacionCornealModule);
    return SolicitudEvaluacionCornealModule;
}());



/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3>SOLICITUD DE EVALUACIÓN CORNEAL / REGISTRO DEL DONANTE</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <!-- <app-componente-identificador [componente]=\"'solicitudEvaluacionCorneal'\" [atributo]=\"'id'\"\n                    [buscar]=\"solicitudEvaluacionCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosSolicitudEvaluacionCorneal['id']\" [(dato)]=\"solicitudEvaluacionCorneal.id\"\n                    class=\"w-100\">\n                </app-componente-identificador> -->\n          <div class=\"row\">\n            <div class=\"col-md-6 col-md-offset-6\">\n              <app-componente-cadena\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'folioSolicitud'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudEvaluacionCorneal['folioSolicitud']\"\n                [(dato)]=\"solicitudEvaluacionCorneal.folioSolicitud\"\n                class=\"w-100\"\n              >\n              </app-componente-cadena>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-componente-cadena\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'nombre'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [maxlength]=\"255\"\n                [(valido)]=\"validosSolicitudEvaluacionCorneal['nombre']\"\n                [(dato)]=\"solicitudEvaluacionCorneal.nombre\"\n                class=\"w-100\"\n              >\n              </app-componente-cadena>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <app-componente-cadena\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'primerApellido'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [maxlength]=\"255\"\n                [(valido)]=\"validosSolicitudEvaluacionCorneal['primerApellido']\"\n                [(dato)]=\"solicitudEvaluacionCorneal.primerApellido\"\n                class=\"w-100\"\n              >\n              </app-componente-cadena>\n            </div>\n            <div class=\"col-md-6\">\n              <app-componente-cadena\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'segundoApellido'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [maxlength]=\"255\"\n                [(valido)]=\"\n                  validosSolicitudEvaluacionCorneal['segundoApellido']\n                \"\n                [(dato)]=\"solicitudEvaluacionCorneal.segundoApellido\"\n                class=\"w-100\"\n              >\n              </app-componente-cadena>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <app-componente-cadena\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'numeroExpediente'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [maxlength]=\"20\"\n                [(valido)]=\"\n                  validosSolicitudEvaluacionCorneal['numeroExpediente']\n                \"\n                [(dato)]=\"solicitudEvaluacionCorneal.numeroExpediente\"\n                class=\"w-100\"\n              >\n              </app-componente-cadena>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <!--               <app-componente-cadena\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'edad'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [maxlength]=\"2\"\n                [(valido)]=\"validosSolicitudEvaluacionCorneal['edad']\"\n                [(dato)]=\"solicitudEvaluacionCorneal.edad\"\n                class=\"w-100\"\n                type=\"number\"\n              >\n              </app-componente-cadena> -->\n              <label class=\"control-label\">Edad*:</label>\n              <kendo-numerictextbox\n                 #edadComponent=\"ngModel\"\n                [format]=\"'n0'\"\n                [step]=\"1\"\n                [min]=\"0\"\n                [max]=\"80\"\n                [decimals]=\"1\"\n                [autoCorrect]=\"true\"\n                class=\"form-control\"\n                name=\"edad\"\n                [(ngModel)]=\"solicitudEvaluacionCorneal.edad\"\n              ></kendo-numerictextbox>\n              <div *ngIf=\"requeridoEdad && (edadComponent.dirty || edadComponent.touched)\">\n                <small class=\"form-text form-text-error\"\n                  >Este campo es requerido!</small\n                >\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <app-componente-fecha\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'fechaMuerte'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudEvaluacionCorneal['fechaMuerte']\"\n                [(dato)]=\"solicitudEvaluacionCorneal.fechaMuerte\"\n                (datoChange)=\"cambioFecha($event)\"\n                class=\"w-100\"\n                [maxDate]=\"fechaActual\"\n              >\n              </app-componente-fecha>\n            </div>\n            <div class=\"col-md-6\">\n              <app-componente-hora\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'horaMuerte'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudEvaluacionCorneal['horaMuerte']\"\n                [(dato)]=\"solicitudEvaluacionCorneal.horaMuerte\"\n                class=\"w-100\"\n                (datoChange)=\"horaMuerteChange()\"\n              ></app-componente-hora>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <app-componente-objeto\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'idcausaMuerte'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudEvaluacionCorneal['idcausaMuerte']\"\n                [(dato)]=\"solicitudEvaluacionCorneal.idcausaMuerte\"\n                class=\"w-100\"\n                [ocultarConjuntos]=\"true\"\n                [opciones]=\"\n                  lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte\n                \"\n                [atributoVisible]=\"'descripcion'\"\n                [objetoEdicion]=\"false\"\n              >\n              </app-componente-objeto>\n            </div>\n            <div class=\"col-md-6\">\n              <app-componente-hora\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'horaInicioRefrigracion'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"\n                  validosSolicitudEvaluacionCorneal['horaInicioRefrigracion']\n                \"\n                [(dato)]=\"solicitudEvaluacionCorneal.horaInicioRefrigracion\"\n                class=\"w-100\"\n                [minHour]=\"minHoraRefrigeracion\"\n              ></app-componente-hora>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <app-componente-objeto\n                [componente]=\"'solicitudEvaluacionCorneal'\"\n                [atributo]=\"'temperaturaRefrigeracion'\"\n                [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"\n                  validosSolicitudEvaluacionCorneal['temperaturaRefrigeracion']\n                \"\n                [(dato)]=\"solicitudEvaluacionCorneal.temperaturaRefrigeracion\"\n                class=\"w-100\"\n                [ocultarConjuntos]=\"true\"\n                [opciones]=\"listaTemperaturas\"\n                [atributoVisible]=\"'descripcion'\"\n                [objetoEdicion]=\"false\"\n              >\n              </app-componente-objeto>\n            </div>\n          </div>\n          <!-- <app-componente-cadena [componente]=\"'solicitudEvaluacionCorneal'\"\n                    [atributo]=\"'conservacionTemperaturaAmbiente'\" [buscar]=\"solicitudEvaluacionCornealBuscar\"\n                    [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosSolicitudEvaluacionCorneal['conservacionTemperaturaAmbiente']\"\n                    [(dato)]=\"solicitudEvaluacionCorneal.conservacionTemperaturaAmbiente\" class=\"w-100\">\n                </app-componente-cadena> -->\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <label class=\"control-label\"\n                >Conservación del Cadáver a Temperatura Ambiente:</label\n              >\n              <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                <input\n                  type=\"radio\"\n                  name=\"gender\"\n                  id=\"si\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"\n                    solicitudEvaluacionCorneal.conservacionTemperaturaAmbiente\n                  \"\n                />\n                Sí\n              </label>\n              <label class=\"radio-inline\">\n                <input\n                  type=\"radio\"\n                  name=\"gender\"\n                  id=\"no\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"\n                    solicitudEvaluacionCorneal.conservacionTemperaturaAmbiente\n                  \"\n                />\n                No\n              </label>\n            </div>\n          </div>\n          <!-- <app-dato-procuracion-corneal\n            [datoProcuracionCorneal]=\"datoProcuracionCornealCI\"\n            [validosDatoProcuracionCorneal]=\"validosDatoProcuracionCornealCI\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [permisosConjuntos]=\"permisosConjuntos\"\n            [usuariologueado]=\"usuariologueado\"\n            [globalesService]=\"globalesService\"\n          ></app-dato-procuracion-corneal> -->\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <app-dato-procuracion-corneal-crud\n                [(datoProcuracionCorneal)]=\"datoProcuracionCornealCI\"\n                [etiquetaGeneral]=\"'CÓRNEA IZQUIERDA'\"\n                [minDate]=\"minDate\"\n                [ocultarConjuntosDatoProcuracionCorneal]=\"true\"\n                (changeIdCenatra) = \"evtchangeIdCenatraI($event)\"\n\n              ></app-dato-procuracion-corneal-crud>\n            </div>\n            <div class=\"col-md-6\">\n              <app-dato-procuracion-corneal-crud\n                [(datoProcuracionCorneal)]=\"datoProcuracionCornealCD\"\n                [etiquetaGeneral]=\"'CÓRNEA DERECHA'\"\n                [minDate]=\"minDate\"\n                [ocultarConjuntosDatoProcuracionCorneal]=\"true\"\n                (changeIdCenatra) = \"evtchangeIdCenatraD($event)\"\n\n              ></app-dato-procuracion-corneal-crud>\n            </div>\n          </div>\n          <!-- <app-componente-fecha [componente]=\"'solicitudEvaluacionCorneal'\" [atributo]=\"'fechaRegistro'\"\n                    [buscar]=\"solicitudEvaluacionCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosSolicitudEvaluacionCorneal['fechaRegistro']\"\n                    [(dato)]=\"solicitudEvaluacionCorneal.fechaRegistro\" class=\"w-100\">\n                </app-componente-fecha>\n                <app-componente-fecha [componente]=\"'solicitudEvaluacionCorneal'\" [atributo]=\"'fechaActualizacion'\"\n                    [buscar]=\"solicitudEvaluacionCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosSolicitudEvaluacionCorneal['fechaActualizacion']\"\n                    [(dato)]=\"solicitudEvaluacionCorneal.fechaActualizacion\" class=\"w-100\">\n                </app-componente-fecha>\n                <app-componente-fecha [componente]=\"'solicitudEvaluacionCorneal'\" [atributo]=\"'fechaBaja'\"\n                    [buscar]=\"solicitudEvaluacionCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosSolicitudEvaluacionCorneal['fechaBaja']\"\n                    [(dato)]=\"solicitudEvaluacionCorneal.fechaBaja\" class=\"w-100\">\n                </app-componente-fecha> -->\n          <!-- <div>\n                    <app-componente-objeto [componente]=\"'solicitudEvaluacionCorneal'\" [atributo]=\"'idcausaMuerte'\"\n                        [buscar]=\"solicitudEvaluacionCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                        [(valido)]=\"validosSolicitudEvaluacionCorneal['idcausaMuerte']\"\n                        [(dato)]=\"solicitudEvaluacionCorneal.idcausaMuerte\" class=\"w-100\"\n                        [ocultarConjuntos]=\"ocultarConjuntosSolicitudEvaluacionCorneal\"\n                        [opciones]=\"lista_idcausaMuerteSolicitudEvaluacionCorneal\"\n                        [atributoVisible]=\"'tipoCausaMuerte'\"\n                        [(objetoEdicion)]=\"idcausaMuerteSolicitudEvaluacionCornealEditar\">\n                    </app-componente-objeto>\n                    <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"\n                        [class.hidden]=\"!idcausaMuerteEditar\">\n                        <div class=\"form-group\"\n                            [class.hidden]=\"!globalesService.aeditable(this,'solicitudEvaluacionCorneal','idcausaMuerte')\">\n                            <app-causa-muerte-crud [nombre]=\"'idcausaMuerte'\"\n                                [causaMuerte]=\"solicitudEvaluacionCorneal.idcausaMuerte\"\n                                (causaMuerteChange)=\"evtIdcausaMuerte($event)\"\n                                [ocultarConjuntosCausaMuerte]=\"'true'\" [class.hidden]=\"!idcausaMuerteEditar\">\n                            </app-causa-muerte-crud>\n                        </div>\n                    </div>\n                </div> -->\n          <!-- <app-componente-cadena [componente]=\"'solicitudEvaluacionCorneal'\" [atributo]=\"'estatusProceso'\"\n                    [buscar]=\"solicitudEvaluacionCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosSolicitudEvaluacionCorneal['estatusProceso']\"\n                    [(dato)]=\"solicitudEvaluacionCorneal.estatusProceso\" class=\"w-100\">\n                </app-componente-cadena>\n                <div>\n                    <app-componente-objeto [componente]=\"'solicitudEvaluacionCorneal'\" [atributo]=\"'usuarioUltMov'\"\n                        [buscar]=\"solicitudEvaluacionCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                        [(valido)]=\"validosSolicitudEvaluacionCorneal['usuarioUltMov']\"\n                        [(dato)]=\"solicitudEvaluacionCorneal.usuarioUltMov\" class=\"w-100\"\n                        [ocultarConjuntos]=\"ocultarConjuntosSolicitudEvaluacionCorneal\"\n                        [opciones]=\"lista_usuarioUltMovSolicitudEvaluacionCorneal\" [atributoVisible]=\"'username'\"\n                        [(objetoEdicion)]=\"usuarioUltMovSolicitudEvaluacionCornealEditar\">\n                    </app-componente-objeto>\n                    <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"\n                        [class.hidden]=\"!usuarioUltMovEditar\">\n                        <div class=\"form-group\"\n                            [class.hidden]=\"!globalesService.aeditable(this,'solicitudEvaluacionCorneal','usuarioUltMov')\">\n                            <app-usuario-crud [nombre]=\"'usuarioUltMov'\"\n                                [usuario]=\"solicitudEvaluacionCorneal.usuarioUltMov\"\n                                (usuarioChange)=\"evtUsuarioUltMov($event)\" [ocultarConjuntosUsuario]=\"'true'\"\n                                [class.hidden]=\"!usuarioUltMovEditar\"></app-usuario-crud>\n                        </div>\n                    </div>\n                </div>\n                <app-componente-radio [componente]=\"'solicitudEvaluacionCorneal'\" [atributo]=\"'status'\"\n                    [buscar]=\"solicitudEvaluacionCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosSolicitudEvaluacionCorneal['status']\"\n                    [(dato)]=\"solicitudEvaluacionCorneal.status\" class=\"w-100\">\n                </app-componente-radio> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SolicitudEvaluacionCornealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEvaluacionCornealComponent", function() { return SolicitudEvaluacionCornealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dato-procuracion-corneales/shared/dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolicitudEvaluacionCornealComponent = /** @class */ (function () {
    function SolicitudEvaluacionCornealComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudEvaluacionCornealChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovSolicitudEvaluacionCornealUsuarioEditar = false;
        this.idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEditar = false;
        this.validosDatoProcuracionCornealCIChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validosDatoProcuracionCornealCDChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listaTemperaturas = [
            {
                id: 2,
                descripcion: "2 ºC"
            },
            {
                id: 3,
                descripcion: "3 ºC"
            },
            {
                id: 4,
                descripcion: '4 ºC'
            },
            {
                id: 5,
                descripcion: "5 ºC"
            },
            {
                id: 6,
                descripcion: "6 ºC"
            },
            {
                id: 7,
                descripcion: "7 ºC"
            },
            {
                id: 8,
                descripcion: "8 ºC"
            }
        ];
        this.fechaActual = new Date();
        this.minHoraRefrigeracion = new Date();
    }
    SolicitudEvaluacionCornealComponent.prototype.actualizarSolicitudEvaluacionCorneal = function () {
        if (this.solicitudEvaluacionCorneal.id == null) {
            this.solicitudEvaluacionCornealService.guardarSolicitudEvaluacionCorneal(this.solicitudEvaluacionCorneal, this.evtGuardar, this);
        }
        else {
            this.solicitudEvaluacionCornealService.actualizarSolicitudEvaluacionCorneal(this.solicitudEvaluacionCorneal, this.evtActualiza, this);
        }
    };
    SolicitudEvaluacionCornealComponent.prototype.cambioFecha = function (entrada) {
        if (this.datoProcuracionCornealCI.fechaInicio != null && entrada > this.datoProcuracionCornealCI.fechaInicio) {
            bootbox.alert('La fecha inicio de procuración cornea izquierda se eliminará, ya que es mayor a la fecha de parada ');
            this.datoProcuracionCornealCI.fechaInicio = null;
        }
        if (this.datoProcuracionCornealCI.fechaFin != null && entrada > this.datoProcuracionCornealCI.fechaFin) {
            bootbox.alert('La fecha fin de procuración cornea izquierda se eliminará, ya que es mayor a la fecha de parada');
            this.datoProcuracionCornealCI.fechaFin = null;
        }
        if (this.datoProcuracionCornealCD.fechaInicio != null && entrada > this.datoProcuracionCornealCD.fechaInicio) {
            bootbox.alert('La fecha inicio de procuración cornea derecha se eliminará, ya que es mayor a la fecha de parada ');
            this.datoProcuracionCornealCD.fechaInicio = null;
        }
        if (this.datoProcuracionCornealCD.fechaFin != null && entrada > this.datoProcuracionCornealCD.fechaFin) {
            bootbox.alert('La fecha fin de procuración cornea derecha se eliminará, ya que es mayor a la fecha de parada');
            this.datoProcuracionCornealCD.fechaFin = null;
        }
    };
    SolicitudEvaluacionCornealComponent.prototype.evtchangeIdCenatraI = function (dato) {
        if (dato == this.datoProcuracionCornealCD.idcenatra) {
            bootbox.alert('No se permite el mismo ID Cenatra que la cornea derecha, se eliminará');
            this.datoProcuracionCornealCI.idcenatra = "";
        }
    };
    SolicitudEvaluacionCornealComponent.prototype.evtchangeIdCenatraD = function (dato) {
        if (dato == this.datoProcuracionCornealCI.idcenatra) {
            bootbox.alert('No se permite el mismo ID Cenatra que la cornea izquierda, se eliminará');
            this.datoProcuracionCornealCD.idcenatra = "";
        }
    };
    SolicitudEvaluacionCornealComponent.prototype.evtGuardar = function (solicitudEvaluacionCorneal, obj) {
        obj.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
        obj.solicitudEvaluacionCornealChange.emit(obj.solicitudEvaluacionCorneal);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    SolicitudEvaluacionCornealComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.solicitudEvaluacionCornealChange.emit(obj.solicitudEvaluacionCorneal);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    SolicitudEvaluacionCornealComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarSolicitudEvaluacionCorneal();
            }
        }
        if (changes.permisosAtributos) {
            this.permisosAtributos.forEach(function (element) {
                if (element.id === 72) {
                    element.permiso = 2;
                }
                return element;
            });
        }
        if (changes.solicitudEvaluacionCorneal) {
            this.horaMuerteTmp = new Date(changes.solicitudEvaluacionCorneal.currentValue.horaMuerte);
            this.horaInicioRefrigracionTmp = new Date(changes.solicitudEvaluacionCorneal.currentValue.horaInicioRefrigracion);
        }
    };
    SolicitudEvaluacionCornealComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $(".k-dateinput-wrap .k-input").prop("disabled", true);
        }, 4000);
    };
    SolicitudEvaluacionCornealComponent.prototype.onChangeHoraMuerteTmp = function (value) {
        this.solicitudEvaluacionCorneal.horaMuerte = value.getTime();
    };
    SolicitudEvaluacionCornealComponent.prototype.onChangeHoraInicioRefrigracionTmp = function (value) {
        this.solicitudEvaluacionCorneal.horaInicioRefrigracion = value.getTime();
    };
    SolicitudEvaluacionCornealComponent.prototype.horaMuerteChange = function () {
        this.minHoraRefrigeracion = new Date(this.solicitudEvaluacionCorneal.horaMuerte);
    };
    Object.defineProperty(SolicitudEvaluacionCornealComponent.prototype, "requeridoEdad", {
        get: function () {
            this.validosSolicitudEvaluacionCorneal.edad = true;
            if (!this.solicitudEvaluacionCorneal.edad) {
                this.validosSolicitudEvaluacionCorneal.edad = false;
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudEvaluacionCornealComponent.prototype, "minDate", {
        get: function () {
            return this.solicitudEvaluacionCorneal.fechaMuerte ? new Date(this.solicitudEvaluacionCorneal.fechaMuerte) : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "solicitudEvaluacionCornealBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SolicitudEvaluacionCornealComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "validosSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudEvaluacionCorneal"])
    ], SolicitudEvaluacionCornealComponent.prototype, "solicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "solicitudEvaluacionCornealService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudEvaluacionCornealComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "solicitudEvaluacionCornealChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "lista_usuarioUltMovSolicitudEvaluacionCornealUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_2__["DatoProcuracionCorneal"])
    ], SolicitudEvaluacionCornealComponent.prototype, "datoProcuracionCornealCI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dato_procuracion_corneales_shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_2__["DatoProcuracionCorneal"])
    ], SolicitudEvaluacionCornealComponent.prototype, "datoProcuracionCornealCD", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "validosDatoProcuracionCornealCI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "validosDatoProcuracionCornealCD", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "validosDatoProcuracionCornealCIChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudEvaluacionCornealComponent.prototype, "validosDatoProcuracionCornealCDChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('edadComponent'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"])
    ], SolicitudEvaluacionCornealComponent.prototype, "edadComponent", void 0);
    SolicitudEvaluacionCornealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-solicitud-evaluacion-corneal",
            template: __webpack_require__(/*! ./solicitud-evaluacion-corneal.component.html */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-evaluacion-corneal.component.css */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal/solicitud-evaluacion-corneal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudEvaluacionCornealComponent);
    return SolicitudEvaluacionCornealComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-registro-extracciones-registro-extraccion-module~app-solicitud-evaluacion-corneales-soli~37695a9d.js.map