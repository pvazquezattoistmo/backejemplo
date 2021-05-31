(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shared-perfil-red-issste-usuario-usuario-btc-module"],{

/***/ "./src/app/shared/perfil-red-issste-usuario-usuario-btc-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/perfil-red-issste-usuario-usuario-btc-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PerfilRedIsssteUsuarioUsuarioBtcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilRedIsssteUsuarioUsuarioBtcRoutingModule", function() { return PerfilRedIsssteUsuarioUsuarioBtcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _perfil_red_issstes_perfil_red_issste_list_kendo_perfil_red_issste_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perfil-red-issstes/perfil-red-issste-list-kendo/perfil-red-issste-list-kendo.component */ "./src/app/perfil-red-issstes/perfil-red-issste-list-kendo/perfil-red-issste-list-kendo.component.ts");
/* harmony import */ var _perfil_red_issstes_perfil_red_issste_crud_perfil_red_issste_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../perfil-red-issstes/perfil-red-issste-crud/perfil-red-issste-crud.component */ "./src/app/perfil-red-issstes/perfil-red-issste-crud/perfil-red-issste-crud.component.ts");
/* harmony import */ var _perfil_red_issstes_perfil_red_issste_table_perfil_red_issste_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../perfil-red-issstes/perfil-red-issste-table/perfil-red-issste-table.component */ "./src/app/perfil-red-issstes/perfil-red-issste-table/perfil-red-issste-table.component.ts");
/* harmony import */ var _usuarios_usuario_list_kendo_usuario_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../usuarios/usuario-list-kendo/usuario-list-kendo.component */ "./src/app/usuarios/usuario-list-kendo/usuario-list-kendo.component.ts");
/* harmony import */ var _usuarios_usuario_crud_usuario_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../usuarios/usuario-crud/usuario-crud.component */ "./src/app/usuarios/usuario-crud/usuario-crud.component.ts");
/* harmony import */ var _usuarios_usuario_table_usuario_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../usuarios/usuario-table/usuario-table.component */ "./src/app/usuarios/usuario-table/usuario-table.component.ts");
/* harmony import */ var _usuario_btcs_usuario_btc_list_kendo_usuario_btc_list_kendo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../usuario-btcs/usuario-btc-list-kendo/usuario-btc-list-kendo.component */ "./src/app/usuario-btcs/usuario-btc-list-kendo/usuario-btc-list-kendo.component.ts");
/* harmony import */ var _usuario_btcs_usuario_btc_crud_usuario_btc_crud_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../usuario-btcs/usuario-btc-crud/usuario-btc-crud.component */ "./src/app/usuario-btcs/usuario-btc-crud/usuario-btc-crud.component.ts");
/* harmony import */ var _usuario_btcs_usuario_btc_table_usuario_btc_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../usuario-btcs/usuario-btc-table/usuario-btc-table.component */ "./src/app/usuario-btcs/usuario-btc-table/usuario-btc-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'perfil-red-issste-list-kendo', component: _perfil_red_issstes_perfil_red_issste_list_kendo_perfil_red_issste_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["PerfilRedIsssteListKendoComponent"] },
    { path: 'perfil-red-issste-crud', component: _perfil_red_issstes_perfil_red_issste_crud_perfil_red_issste_crud_component__WEBPACK_IMPORTED_MODULE_3__["PerfilRedIsssteCrudComponent"] },
    { path: 'perfil-red-issste-table', component: _perfil_red_issstes_perfil_red_issste_table_perfil_red_issste_table_component__WEBPACK_IMPORTED_MODULE_4__["PerfilRedIsssteTableComponent"] },
    { path: 'usuario-list-kendo', component: _usuarios_usuario_list_kendo_usuario_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioListKendoComponent"] },
    { path: 'usuario-crud', component: _usuarios_usuario_crud_usuario_crud_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioCrudComponent"] },
    { path: 'usuario-table', component: _usuarios_usuario_table_usuario_table_component__WEBPACK_IMPORTED_MODULE_7__["UsuarioTableComponent"] },
    { path: 'usuario-btc-list-kendo', component: _usuario_btcs_usuario_btc_list_kendo_usuario_btc_list_kendo_component__WEBPACK_IMPORTED_MODULE_8__["UsuarioBtcListKendoComponent"] },
    { path: 'usuario-btc-crud', component: _usuario_btcs_usuario_btc_crud_usuario_btc_crud_component__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcCrudComponent"] },
    { path: 'usuario-btc-table', component: _usuario_btcs_usuario_btc_table_usuario_btc_table_component__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcTableComponent"] },
];
var PerfilRedIsssteUsuarioUsuarioBtcRoutingModule = /** @class */ (function () {
    function PerfilRedIsssteUsuarioUsuarioBtcRoutingModule() {
    }
    PerfilRedIsssteUsuarioUsuarioBtcRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PerfilRedIsssteUsuarioUsuarioBtcRoutingModule);
    return PerfilRedIsssteUsuarioUsuarioBtcRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/perfil-red-issste-usuario-usuario-btc.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/perfil-red-issste-usuario-usuario-btc.module.ts ***!
  \************************************************************************/
/*! exports provided: PerfilRedIsssteUsuarioUsuarioBtcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilRedIsssteUsuarioUsuarioBtcModule", function() { return PerfilRedIsssteUsuarioUsuarioBtcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _perfil_red_issste_usuario_usuario_btc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-red-issste-usuario-usuario-btc-routing.module */ "./src/app/shared/perfil-red-issste-usuario-usuario-btc-routing.module.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/entidad-federativa-usuario-usuario-btc-hospital.module */ "./src/app/shared/entidad-federativa-usuario-usuario-btc-hospital.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
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






//import { PerfilBtcUsuarioUsuarioBtcModule }   from '../shared/perfil-btc-usuario-usuario-btc.module';

var PerfilRedIsssteUsuarioUsuarioBtcModule = /** @class */ (function () {
    function PerfilRedIsssteUsuarioUsuarioBtcModule(parentModule) {
        if (parentModule) {
            throw new Error('PerfilRedIsssteUsuarioUsuarioBtcModule is already loaded. Import it in the AppModule only');
        }
    }
    PerfilRedIsssteUsuarioUsuarioBtcModule_1 = PerfilRedIsssteUsuarioUsuarioBtcModule;
    PerfilRedIsssteUsuarioUsuarioBtcModule.forRoot = function () {
        return {
            ngModule: PerfilRedIsssteUsuarioUsuarioBtcModule_1,
            providers: []
        };
    };
    var PerfilRedIsssteUsuarioUsuarioBtcModule_1;
    PerfilRedIsssteUsuarioUsuarioBtcModule = PerfilRedIsssteUsuarioUsuarioBtcModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_6__["PersonalizadosModule"], _perfil_red_issste_usuario_usuario_btc_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerfilRedIsssteUsuarioUsuarioBtcRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_4__["UsuarioPerfilModule"].forRoot(),
                _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_5__["EntidadFederativaUsuarioUsuarioBtcHospitalModule"].forRoot()
                //, PerfilBtcUsuarioUsuarioBtcModule.forRoot()
            ],
            declarations: [],
            exports: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [PerfilRedIsssteUsuarioUsuarioBtcModule])
    ], PerfilRedIsssteUsuarioUsuarioBtcModule);
    return PerfilRedIsssteUsuarioUsuarioBtcModule;
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
//# sourceMappingURL=app-shared-perfil-red-issste-usuario-usuario-btc-module.js.map