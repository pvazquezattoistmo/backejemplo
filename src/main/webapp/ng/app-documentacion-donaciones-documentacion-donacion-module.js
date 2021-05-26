(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-documentacion-donaciones-documentacion-donacion-module"],{

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
//# sourceMappingURL=app-documentacion-donaciones-documentacion-donacion-module.js.map