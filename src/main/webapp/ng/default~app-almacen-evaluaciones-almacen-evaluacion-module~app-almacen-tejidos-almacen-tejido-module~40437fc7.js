(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-evaluaciones-almacen-evaluacion-module~app-almacen-tejidos-almacen-tejido-module~40437fc7"],{

/***/ "./src/app/doctor-solicitantes/shared/doctor-solicitante.ts":
/*!******************************************************************!*\
  !*** ./src/app/doctor-solicitantes/shared/doctor-solicitante.ts ***!
  \******************************************************************/
/*! exports provided: DoctorSolicitante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSolicitante", function() { return DoctorSolicitante; });
/* harmony import */ var _catalogo_cargos_shared_catalogo_cargo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../catalogo-cargos/shared/catalogo-cargo */ "./src/app/catalogo-cargos/shared/catalogo-cargo.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../hospitales/shared/hospital */ "./src/app/hospitales/shared/hospital.ts");



/**
 *
 * @author IstmoSoft
 */
var DoctorSolicitante = /** @class */ (function () {
    // atributos fin
    function DoctorSolicitante(entrada) {
        if (entrada === void 0) { entrada = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.idhospital = null;
        this.primerApellido = null;
        this.fechaRegistro = null;
        this.segundoApellido = null;
        this.fechaActualizacion = null;
        this.telefono = null;
        this.nombre = null;
        this.correoElectronico = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idcargo = null;
        if (entrada !== null) {
            this.from(entrada);
        }
    }
    DoctorSolicitante.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.idhospital)
            this.idhospital = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_2__["Hospital"](source.idhospital);
        if (source.primerApellido)
            this.primerApellido = source.primerApellido;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.segundoApellido)
            this.segundoApellido = source.segundoApellido;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.telefono)
            this.telefono = source.telefono;
        if (source.nombre)
            this.nombre = source.nombre;
        if (source.correoElectronico)
            this.correoElectronico = source.correoElectronico;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"](source.usuarioUltMov);
        if (source.idcargo)
            this.idcargo = new _catalogo_cargos_shared_catalogo_cargo__WEBPACK_IMPORTED_MODULE_0__["CatalogoCargo"](source.idcargo);
    };
    DoctorSolicitante.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.idhospital)
            return true;
        if (this.primerApellido)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.segundoApellido)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.telefono)
            return true;
        if (this.nombre)
            return true;
        if (this.correoElectronico)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idcargo)
            return true;
        return false;
    };
    DoctorSolicitante.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.idhospital != null && typeof this.idhospital === 'string' && this.idhospital.replace(/^\s+|\s+$/g, '') == "")
            this.idhospital = null;
        if (this.primerApellido != null && typeof this.primerApellido === 'string' && this.primerApellido.replace(/^\s+|\s+$/g, '') == "")
            this.primerApellido = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.segundoApellido != null && typeof this.segundoApellido === 'string' && this.segundoApellido.replace(/^\s+|\s+$/g, '') == "")
            this.segundoApellido = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.telefono != null && typeof this.telefono === 'string' && this.telefono.replace(/^\s+|\s+$/g, '') == "")
            this.telefono = null;
        if (this.nombre != null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '') == "")
            this.nombre = null;
        if (this.correoElectronico != null && typeof this.correoElectronico === 'string' && this.correoElectronico.replace(/^\s+|\s+$/g, '') == "")
            this.correoElectronico = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idcargo != null && typeof this.idcargo === 'string' && this.idcargo.replace(/^\s+|\s+$/g, '') == "")
            this.idcargo = null;
        return this;
    };
    return DoctorSolicitante;
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



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts ***!
  \*******************************************************************************/
/*! exports provided: SolicitudTejidoCorneal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCorneal", function() { return SolicitudTejidoCorneal; });
/* harmony import */ var _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../hospitales/shared/hospital */ "./src/app/hospitales/shared/hospital.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _doctor_solicitantes_shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../doctor-solicitantes/shared/doctor-solicitante */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.ts");



/**
 *
 * @author IstmoSoft
 */
var SolicitudTejidoCorneal = /** @class */ (function () {
    // atributos fin
    function SolicitudTejidoCorneal(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.fechaRegistro = null;
        this.estatusProceso = null;
        this.segundoApellidoReceptor = null;
        this.fechaTentativaCirugia = null;
        this.nombreReceptor = null;
        this.numeroExpedienteReceptor = null;
        this.sexoReceptor = null;
        this.folioSolicitudTejidoCorneal = null;
        this.diagnostico = null;
        this.fechaActualizacion = null;
        this.edadReceptor = null;
        this.caracteristicaCornea = null;
        this.corneaSolicitada = null;
        this.primerApellidoReceptor = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.iddoctorResponsableSolicitud = null;
        this.idhospital = null;
        if (source !== null)
            this.from(source);
    }
    SolicitudTejidoCorneal.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.estatusProceso)
            this.estatusProceso = source.estatusProceso;
        if (source.segundoApellidoReceptor)
            this.segundoApellidoReceptor = source.segundoApellidoReceptor;
        if (source.fechaTentativaCirugia)
            this.fechaTentativaCirugia = source.fechaTentativaCirugia;
        if (source.nombreReceptor)
            this.nombreReceptor = source.nombreReceptor;
        if (source.numeroExpedienteReceptor)
            this.numeroExpedienteReceptor = source.numeroExpedienteReceptor;
        if (source.sexoReceptor)
            this.sexoReceptor = source.sexoReceptor;
        if (source.folioSolicitudTejidoCorneal)
            this.folioSolicitudTejidoCorneal = source.folioSolicitudTejidoCorneal;
        if (source.diagnostico)
            this.diagnostico = source.diagnostico;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.edadReceptor)
            this.edadReceptor = source.edadReceptor;
        if (source.caracteristicaCornea)
            this.caracteristicaCornea = source.caracteristicaCornea;
        if (source.corneaSolicitada)
            this.corneaSolicitada = source.corneaSolicitada;
        if (source.primerApellidoReceptor)
            this.primerApellidoReceptor = source.primerApellidoReceptor;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"](source.usuarioUltMov);
        if (source.iddoctorResponsableSolicitud)
            this.iddoctorResponsableSolicitud = new _doctor_solicitantes_shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_2__["DoctorSolicitante"](source.iddoctorResponsableSolicitud);
        if (source.idhospital)
            this.idhospital = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_0__["Hospital"](source.idhospital);
    };
    SolicitudTejidoCorneal.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.estatusProceso)
            return true;
        if (this.segundoApellidoReceptor)
            return true;
        if (this.fechaTentativaCirugia)
            return true;
        if (this.nombreReceptor)
            return true;
        if (this.numeroExpedienteReceptor)
            return true;
        if (this.sexoReceptor)
            return true;
        if (this.folioSolicitudTejidoCorneal)
            return true;
        if (this.diagnostico)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.edadReceptor)
            return true;
        if (this.caracteristicaCornea)
            return true;
        if (this.corneaSolicitada)
            return true;
        if (this.primerApellidoReceptor)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.iddoctorResponsableSolicitud)
            return true;
        if (this.idhospital)
            return true;
        return false;
    };
    SolicitudTejidoCorneal.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.estatusProceso != null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '') == "")
            this.estatusProceso = null;
        if (this.segundoApellidoReceptor != null && typeof this.segundoApellidoReceptor === 'string' && this.segundoApellidoReceptor.replace(/^\s+|\s+$/g, '') == "")
            this.segundoApellidoReceptor = null;
        if (this.fechaTentativaCirugia != null && typeof this.fechaTentativaCirugia === 'string' && this.fechaTentativaCirugia.replace(/^\s+|\s+$/g, '') == "")
            this.fechaTentativaCirugia = null;
        if (this.nombreReceptor != null && typeof this.nombreReceptor === 'string' && this.nombreReceptor.replace(/^\s+|\s+$/g, '') == "")
            this.nombreReceptor = null;
        if (this.numeroExpedienteReceptor != null && typeof this.numeroExpedienteReceptor === 'string' && this.numeroExpedienteReceptor.replace(/^\s+|\s+$/g, '') == "")
            this.numeroExpedienteReceptor = null;
        if (this.sexoReceptor != null && typeof this.sexoReceptor === 'string' && this.sexoReceptor.replace(/^\s+|\s+$/g, '') == "")
            this.sexoReceptor = null;
        if (this.folioSolicitudTejidoCorneal != null && typeof this.folioSolicitudTejidoCorneal === 'string' && this.folioSolicitudTejidoCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.folioSolicitudTejidoCorneal = null;
        if (this.diagnostico != null && typeof this.diagnostico === 'string' && this.diagnostico.replace(/^\s+|\s+$/g, '') == "")
            this.diagnostico = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.edadReceptor != null && typeof this.edadReceptor === 'string' && this.edadReceptor.replace(/^\s+|\s+$/g, '') == "")
            this.edadReceptor = null;
        if (this.caracteristicaCornea != null && typeof this.caracteristicaCornea === 'string' && this.caracteristicaCornea.replace(/^\s+|\s+$/g, '') == "")
            this.caracteristicaCornea = null;
        if (this.corneaSolicitada != null && typeof this.corneaSolicitada === 'string' && this.corneaSolicitada.replace(/^\s+|\s+$/g, '') == "")
            this.corneaSolicitada = null;
        if (this.primerApellidoReceptor != null && typeof this.primerApellidoReceptor === 'string' && this.primerApellidoReceptor.replace(/^\s+|\s+$/g, '') == "")
            this.primerApellidoReceptor = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.iddoctorResponsableSolicitud != null && typeof this.iddoctorResponsableSolicitud === 'string' && this.iddoctorResponsableSolicitud.replace(/^\s+|\s+$/g, '') == "")
            this.iddoctorResponsableSolicitud = null;
        if (this.idhospital != null && typeof this.idhospital === 'string' && this.idhospital.replace(/^\s+|\s+$/g, '') == "")
            this.idhospital = null;
        return this;
    };
    return SolicitudTejidoCorneal;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-evaluaciones-almacen-evaluacion-module~app-almacen-tejidos-almacen-tejido-module~40437fc7.js.map