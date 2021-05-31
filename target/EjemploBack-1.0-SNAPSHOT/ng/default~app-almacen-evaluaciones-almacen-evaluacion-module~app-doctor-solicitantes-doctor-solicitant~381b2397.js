(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-evaluaciones-almacen-evaluacion-module~app-doctor-solicitantes-doctor-solicitant~381b2397"],{

/***/ "./src/app/catalogo-cargos/catalogo-cargo-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/catalogo-cargos/catalogo-cargo-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CatalogoCargoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoCargoRoutingModule", function() { return CatalogoCargoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var CatalogoCargoRoutingModule = /** @class */ (function () {
    function CatalogoCargoRoutingModule() {
    }
    CatalogoCargoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CatalogoCargoRoutingModule);
    return CatalogoCargoRoutingModule;
}());



/***/ }),

/***/ "./src/app/catalogo-cargos/catalogo-cargo.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/catalogo-cargos/catalogo-cargo.module.ts ***!
  \**********************************************************/
/*! exports provided: CatalogoCargoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoCargoModule", function() { return CatalogoCargoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _catalogo_cargo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalogo-cargo-routing.module */ "./src/app/catalogo-cargos/catalogo-cargo-routing.module.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
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






var CatalogoCargoModule = /** @class */ (function () {
    function CatalogoCargoModule(parentModule) {
        if (parentModule) {
            throw new Error('CatalogoCargoModule is already loaded. Import it in the AppModule only');
        }
    }
    CatalogoCargoModule_1 = CatalogoCargoModule;
    CatalogoCargoModule.forRoot = function () {
        return {
            ngModule: CatalogoCargoModule_1,
            providers: []
        };
    };
    var CatalogoCargoModule_1;
    CatalogoCargoModule = CatalogoCargoModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_5__["PersonalizadosModule"], _catalogo_cargo_routing_module__WEBPACK_IMPORTED_MODULE_3__["CatalogoCargoRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_4__["UsuarioPerfilModule"].forRoot()
            ],
            declarations: [],
            exports: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CatalogoCargoModule])
    ], CatalogoCargoModule);
    return CatalogoCargoModule;
}());



/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-conjunto/doctor-solicitante-conjunto.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-conjunto/doctor-solicitante-conjunto.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-conjunto/doctor-solicitante-conjunto.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-conjunto/doctor-solicitante-conjunto.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let doctorSolicitante of listaDoctorSolicitante \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+doctorSolicitante.id}\"\n        (click)=\"elegir(doctorSolicitante,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{doctorSolicitante.id}}\">{{doctorSolicitante.id}}</a>\n    </li>\n    <li *ngFor =  \"let doctorSolicitante of listaDoctorSolicitanteN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+doctorSolicitante.id}\"\n        (click)=\"elegir(doctorSolicitante, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{doctorSolicitante.id}}\">T-{{doctorSolicitante.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let doctorSolicitante of listaDoctorSolicitante ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+doctorSolicitante.id}\" id=\"tab-I-{{doctorSolicitante.id}}\">\n\t\t\t<app-doctor-solicitante [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [doctorSolicitanteBuscar]=\"doctorSolicitanteBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDoctorSolicitante]=\"validosDoctorSolicitante\"  \n\t\t\t\t\t\t  [doctorSolicitanteService]=\"doctorSolicitanteService\" [(opcion)]=\"opcionDoctorSolicitante\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(doctorSolicitante)]=\"listaDoctorSolicitante[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDoctorSolicitante\"\n                           [lista_usuarioUltMovDoctorSolicitanteUsuario]=\"lista_usuarioUltMovDoctorSolicitanteUsuario\" \n                           [lista_idcargoDoctorSolicitanteCatalogoCargo]=\"lista_idcargoDoctorSolicitanteCatalogoCargo\" \n\n\t\t\t\t\t  >\n\t\t\t</app-doctor-solicitante>\n        </div>\n        <div *ngFor = \"let doctorSolicitante of listaDoctorSolicitanteN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+doctorSolicitante.id}\" id=\"tab-N-{{doctorSolicitante.id}}\">\n\t\t\t<app-doctor-solicitante [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [doctorSolicitanteBuscar]=\"doctorSolicitanteBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDoctorSolicitante]=\"validosDoctorSolicitante\"  \n\t\t\t\t\t\t  [doctorSolicitanteService]=\"doctorSolicitanteService\" [(opcion)]=\"opcionDoctorSolicitante\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(doctorSolicitante)]=\"listaDoctorSolicitanteN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDoctorSolicitante\"\n                           [lista_usuarioUltMovDoctorSolicitanteUsuario]=\"lista_usuarioUltMovDoctorSolicitanteUsuario\" \n                           [lista_idcargoDoctorSolicitanteCatalogoCargo]=\"lista_idcargoDoctorSolicitanteCatalogoCargo\" \n\n\t\t\t\t\t  >\n\t\t\t</app-doctor-solicitante>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-conjunto/doctor-solicitante-conjunto.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-conjunto/doctor-solicitante-conjunto.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DoctorSolicitanteConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSolicitanteConjuntoComponent", function() { return DoctorSolicitanteConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/doctor-solicitante */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorSolicitanteConjuntoComponent = /** @class */ (function () {
    function DoctorSolicitanteConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovDoctorSolicitanteUsuarioEditar = false;
        this.idcargoDoctorSolicitanteCatalogoCargoEditar = false;
        this.listaDoctorSolicitanteN = [];
        this.listaDoctorSolicitante = [];
        this.listaDoctorSolicitanteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doctorSolicitanteN = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__["DoctorSolicitante"]();
        this.doctorSolicitanteNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    DoctorSolicitanteConjuntoComponent.prototype.elegir = function (doctorSolicitante, tipo) {
        this.idSeleccionado = tipo + "-" + doctorSolicitante.id;
        this.doctorSolicitanteN = doctorSolicitante;
    };
    DoctorSolicitanteConjuntoComponent.prototype.ngOnInit = function () {
        this.doctorSolicitanteN.id = 0;
        this.listaDoctorSolicitanteN.push(Object.assign({}, this.doctorSolicitanteN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    DoctorSolicitanteConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__["DoctorSolicitante"]();
        pg.id = this.listaDoctorSolicitanteN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDoctorSolicitanteN.push(pg);
    };
    DoctorSolicitanteConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaDoctorSolicitante; _i < _a.length; _i++) {
            var doctorSolicitante = _a[_i];
            this.doctorSolicitanteService.actualizarDoctorSolicitante(doctorSolicitante, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaDoctorSolicitanteN; _b < _c.length; _b++) {
            var doctorSolicitante = _c[_b];
            doctorSolicitante.id = null;
            this.doctorSolicitanteService.guardarDoctorSolicitante(doctorSolicitante, this.evtGuardar, this);
        }
    };
    DoctorSolicitanteConjuntoComponent.prototype.evtGuardar = function (doctorSolicitante, obj) {
        obj.agregados++;
        obj.listaDoctorSolicitante.push(doctorSolicitante);
        if (obj.agregados >= obj.listaDoctorSolicitanteN.length) {
            obj.doctorSolicitanteN = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__["DoctorSolicitante"]();
            obj.listaDoctorSolicitanteN = [];
            obj.doctorSolicitanteN.id = 0;
            obj.idSeleccionado = "N-" + obj.doctorSolicitanteN.id;
            obj.listaDoctorSolicitanteN.push(Object.assign({}, obj.doctorSolicitanteN));
            obj.listaDoctorSolicitanteChange.emit(obj.listaDoctorSolicitante);
        }
        if (obj.agregados >= obj.listaDoctorSolicitanteN.length &&
            obj.actualizados >= obj.listaDoctorSolicitante.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DoctorSolicitanteConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaDoctorSolicitanteN.length &&
                obj.actualizados >= obj.listaDoctorSolicitante.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    DoctorSolicitanteConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], DoctorSolicitanteConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "doctorSolicitanteBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "validosDoctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "ocultarConjuntosDoctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "doctorSolicitanteService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DoctorSolicitanteConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "lista_usuarioUltMovDoctorSolicitanteUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "lista_idcargoDoctorSolicitanteCatalogoCargo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DoctorSolicitanteConjuntoComponent.prototype, "listaDoctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "listaDoctorSolicitanteChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__["DoctorSolicitante"])
    ], DoctorSolicitanteConjuntoComponent.prototype, "doctorSolicitanteN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteConjuntoComponent.prototype, "doctorSolicitanteNChange", void 0);
    DoctorSolicitanteConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-solicitante-conjunto',
            template: __webpack_require__(/*! ./doctor-solicitante-conjunto.component.html */ "./src/app/doctor-solicitantes/doctor-solicitante-conjunto/doctor-solicitante-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./doctor-solicitante-conjunto.component.css */ "./src/app/doctor-solicitantes/doctor-solicitante-conjunto/doctor-solicitante-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DoctorSolicitanteConjuntoComponent);
    return DoctorSolicitanteConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n\n    <app-doctor-solicitante [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n        [doctorSolicitanteBuscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n        [permisosConjuntos]=\"permisosConjuntos\" [validosDoctorSolicitante]=\"validosDoctorSolicitante\"\n        [doctorSolicitanteService]=\"doctorSolicitante_service\" [(opcion)]=\"opcionDoctorSolicitante\"\n        [globalesService]=\"globalesService\" [(doctorSolicitante)]=\"doctorSolicitante\"\n        [ocultarConjuntos]=\"ocultarConjuntosDoctorSolicitante\"\n        [lista_usuarioUltMovDoctorSolicitanteUsuario]=\"lista_usuarioUltMovDoctorSolicitanteUsuario\"\n        [lista_idcargoDoctorSolicitanteCatalogoCargo]=\"lista_idcargoDoctorSolicitanteCatalogoCargo\"\n        [lista_idhospitalDoctorSolicitanteHospital]=\"lista_idhospitalDoctorSolicitanteHospital\">\n\n    </app-doctor-solicitante>\n\n    <div class=\"panel-footer\" style=\"text-align: center\">\n        <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!doctorSolicitanteBuscar\"\n                (click)=\"buscarDoctorSolicitanteFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!doctorSolicitanteAgregar\"\n                (click)=\"nuevoDoctorSolicitanteFront()\"><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\"\n                [class.hidden]=\"!doctorSolicitanteActualizar\"\n                (click)=\"actualizarDoctorSolicitanteFront()\"><span class=\"fa fa-arrow-up\"></span>\n                Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\" [class.hidden]=\"!doctorSolicitanteEliminar\"\n                (click)=\"eliminarDoctorSolicitanteFront()\"> <span\n                    class=\"fa fa-trash\"></span>Eliminar</button>\n\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"\n                [class.hidden]=\"!doctorSolicitanteGuardar\" (click)=\"guardarDoctorSolicitanteFront()\"><span\n                    class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\" [class.hidden]=\"!doctorSolicitanteCancelar\"\n                (click)=\"cancelarDoctorSolicitanteFront()\"><span\n                    class=\"fa fa-remove\"></span>Cancelar</button>\n\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\" (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\"\n                [class.hidden]=\"datosReporteDoctorSolicitanteWord\" (click)=\"reporteDoctorSolicitanteWord()\">\n                <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\"\n                [class.hidden]=\"datosReporteDoctorSolicitanteExcel\"\n                (click)=\"reporteDoctorSolicitanteExcel()\"> <span class=\"fa fa-download-alt\"></span>\n                Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\"\n                [class.hidden]=\"datosReporteDoctorSolicitantePdf\"\n                (click)=\"reporteDoctorSolicitantePdf()\"><span class=\"fa fa-download-alt\"></span>\n                PDF</button>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"buscarDoctorSolicitante_{{nombre}}\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <app-doctor-solicitante-list-kendo [nombregrid]=\"'buscar_'+nombre\"\n                    [configuracionDoctorSolicitante]=\"configuracionDoctorSolicitante\"\n                    (doctorSolicitanteSeleccionado)=\"evtDoctorSolicitanteSeleccionado($event)\">\n                </app-doctor-solicitante-list-kendo>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DoctorSolicitanteCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSolicitanteCrudComponent", function() { return DoctorSolicitanteCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/doctor-solicitante */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.ts");
/* harmony import */ var _shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/doctor-solicitante.service */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.service.ts");
/* harmony import */ var _shared_configurar_doctor_solicitante__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-doctor-solicitante */ "./src/app/doctor-solicitantes/shared/configurar-doctor-solicitante.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hospitales/shared/hospital */ "./src/app/hospitales/shared/hospital.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _catalogo_cargos_shared_catalogo_cargo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../catalogo-cargos/shared/catalogo-cargo */ "./src/app/catalogo-cargos/shared/catalogo-cargo.ts");
/* harmony import */ var _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../catalogo-cargos/shared/catalogo-cargo.service */ "./src/app/catalogo-cargos/shared/catalogo-cargo.service.ts");
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






var DoctorSolicitanteCrudComponent = /** @class */ (function () {
    function DoctorSolicitanteCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    doctorSolicitante_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, catalogoCargo_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.doctorSolicitante_service = doctorSolicitante_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.catalogoCargo_service = catalogoCargo_service;
        this.opcionDoctorSolicitante = 0;
        this.validosDoctorSolicitante = {
            id: false,
            fechaBaja: false,
            idhospital: false,
            primerApellido: false,
            fechaRegistro: false,
            segundoApellido: false,
            fechaActualizacion: false,
            telefono: false,
            nombre: false,
            correoElectronico: false,
            status: false,
            usuarioUltMov: false,
            idcargo: false,
        };
        this.ocultarConjuntosDoctorSolicitante = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "doctorSolicitante", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.doctorSolicitanteLazy = false;
        this.doctorSolicitantePermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doctorSolicitante = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"]();
        this.doctorSolicitanteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doctorSolicitanteTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_doctorSolicitantes = [];
        this.usuarioUltMovDoctorSolicitanteUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovDoctorSolicitanteUsuario = [];
        this.usuarioUltMovDoctorSolicitanteUsuarioEditar = false;
        this.idcargoDoctorSolicitanteCatalogoCargoEleccion = new _catalogo_cargos_shared_catalogo_cargo__WEBPACK_IMPORTED_MODULE_15__["CatalogoCargo"]();
        this.lista_idcargoDoctorSolicitanteCatalogoCargo = [];
        this.idcargoDoctorSolicitanteCatalogoCargoEditar = false;
        this.idhospitalDoctorSolicitanteHospitalEleccion = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_12__["Hospital"]();
        this.lista_idhospitalDoctorSolicitanteHospital = [];
        this.idhospitalDoctorSolicitanteHospitalEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
        this.configuracionDoctorSolicitante = new _shared_configurar_doctor_solicitante__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDoctorSolicitante"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDoctorSolicitanteUsuario, this);
        this.catalogoCargo_service.getCatalogoCargosActivos(this.evtGetIdcargoDoctorSolicitanteCatalogoCargo, this);
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalDoctorSolicitanteHospital, this);
        this.limpiarCampos();
    }
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "doctorSolicitanteOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosDoctorSolicitante)
                return true;
            return !this.doctorSolicitanteActualizar;
        },
        enumerable: true,
        configurable: true
    });
    DoctorSolicitanteCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.doctorSolicitante && changes.doctorSolicitante.currentValue == null &&
            this.doctorSolicitante == null)
            this.doctorSolicitante = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"]();
        else {
            var aux = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"]();
            if (this.doctorSolicitante)
                aux.from(this.doctorSolicitante);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteSeleccion = this.doctorSolicitanteGuardar = false;
                this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = this.doctorSolicitanteCancelar = true;
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
                this.doctorSolicitanteSeleccion = this.doctorSolicitanteAgregar = this.doctorSolicitanteBuscar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
                this.doctorSolicitanteGuardar = this.doctorSolicitanteCancelar = true;
            }
        }
    };
    DoctorSolicitanteCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "doctorSolicitante",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "catalogoCargo",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.doctorSolicitantePermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DoctorSolicitanteCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.doctorSolicitantePermisos = true;
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoAtributo && permisos.doctorSolicitante.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.doctorSolicitante.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoConjunto && permisos.doctorSolicitante.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.doctorSolicitante.PermisoConjunto;
        }
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoTabla && permisos.doctorSolicitante.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.doctorSolicitante.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo && permisos.usuario.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.usuario.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.usuario.PermisoAtributo);
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoAtributo && permisos.usuario.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.usuario.PermisoConjunto);
        }
        if (permisos && permisos.usuario && permisos.usuario.PermisoTabla && permisos.usuario.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.usuario.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
        }
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoAtributo && permisos.catalogoCargo.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.catalogoCargo.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.catalogoCargo.PermisoAtributo);
        }
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoAtributo && permisos.catalogoCargo.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.catalogoCargo.PermisoConjunto);
        }
        if (permisos && permisos.catalogoCargo && permisos.catalogoCargo.PermisoTabla && permisos.catalogoCargo.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.catalogoCargo.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.catalogoCargo.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DoctorSolicitanteCrudComponent.prototype.evtGetUsuarioUltMovDoctorSolicitanteUsuario = function (lista_usuarioUltMovDoctorSolicitanteUsuario, obj) {
        obj.lista_usuarioUltMovDoctorSolicitanteUsuario = lista_usuarioUltMovDoctorSolicitanteUsuario;
        obj.actualizar_UsuarioUltMovDoctorSolicitanteUsuario();
    };
    DoctorSolicitanteCrudComponent.prototype.evtGetIdcargoDoctorSolicitanteCatalogoCargo = function (lista_idcargoDoctorSolicitanteCatalogoCargo, obj) {
        obj.lista_idcargoDoctorSolicitanteCatalogoCargo = lista_idcargoDoctorSolicitanteCatalogoCargo;
        obj.actualizar_IdcargoDoctorSolicitanteCatalogoCargo();
    };
    DoctorSolicitanteCrudComponent.prototype.evtGetIdhospitalDoctorSolicitanteHospital = function (lista_idhospitalDoctorSolicitanteHospital, obj) {
        obj.lista_idhospitalDoctorSolicitanteHospital = lista_idhospitalDoctorSolicitanteHospital;
        obj.actualizar_IdhospitalDoctorSolicitanteHospital();
    };
    DoctorSolicitanteCrudComponent.prototype.actualizar_UsuarioUltMovDoctorSolicitanteUsuario = function () {
        if (this.usuarioUltMovDoctorSolicitanteUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovDoctorSolicitanteUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovDoctorSolicitanteUsuarioEleccion.id) {
                    this.usuarioUltMovDoctorSolicitanteUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    DoctorSolicitanteCrudComponent.prototype.actualizar_IdcargoDoctorSolicitanteCatalogoCargo = function () {
        if (this.idcargoDoctorSolicitanteCatalogoCargoEleccion)
            for (var _i = 0, _a = this.lista_idcargoDoctorSolicitanteCatalogoCargo; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idcargoDoctorSolicitanteCatalogoCargoEleccion.id) {
                    this.idcargoDoctorSolicitanteCatalogoCargoEleccion = eleme;
                    break;
                }
            }
    };
    DoctorSolicitanteCrudComponent.prototype.actualizar_IdhospitalDoctorSolicitanteHospital = function () {
        if (this.idhospitalDoctorSolicitanteHospitalEleccion)
            for (var _i = 0, _a = this.lista_idhospitalDoctorSolicitanteHospital; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idhospitalDoctorSolicitanteHospitalEleccion.id) {
                    this.idhospitalDoctorSolicitanteHospitalEleccion = eleme;
                    break;
                }
            }
    };
    DoctorSolicitanteCrudComponent.prototype.ngDoCheck = function () {
    };
    DoctorSolicitanteCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosDoctorSolicitante['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosDoctorSolicitante['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosDoctorSolicitante['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaIdhospital", {
        get: function () {
            return this.validosDoctorSolicitante['idhospital'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaPrimerApellido", {
        get: function () {
            return this.validosDoctorSolicitante['primerApellido'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosDoctorSolicitante['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaSegundoApellido", {
        get: function () {
            return this.validosDoctorSolicitante['segundoApellido'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosDoctorSolicitante['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaTelefono", {
        get: function () {
            return this.validosDoctorSolicitante['telefono'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaNombre", {
        get: function () {
            return this.validosDoctorSolicitante['nombre'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaCorreoElectronico", {
        get: function () {
            return this.validosDoctorSolicitante['correoElectronico'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosDoctorSolicitante['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosDoctorSolicitante['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaIdcargo", {
        get: function () {
            return this.validosDoctorSolicitante['idcargo'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var _this = this;
            //var salida =  this.validaId && this.validaFechaBaja && this.validaIdhospital && this.validaPrimerApellido && this.validaFechaRegistro && this.validaSegundoApellido && this.validaFechaActualizacion && this.validaTelefono && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdcargo;
            //var salida =  this.validaId  && this.validaIdhospital && this.validaPrimerApellido  && this.validaSegundoApellido  && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdcargo;
            var salida = this.validaNombre && this.validaPrimerApellido && this.validaSegundoApellido && this.validaCorreoElectronico && this.validaTelefono && this.validaIdcargo;
            if (salida != this.validaciones) {
                setTimeout(function () {
                    _this.validacionesChange.emit(salida);
                    _this.validaciones = salida;
                    return salida;
                });
            }
            return this.validaciones;
        },
        enumerable: true,
        configurable: true
    });
    DoctorSolicitanteCrudComponent.prototype.obtenerDoctorSolicitantes = function (lista, objeto) {
        objeto.lista_doctorSolicitantes = lista;
        if (lista && lista.length > 0) {
            objeto.doctorSolicitante.from(lista[0]);
            objeto.evtDoctorSolicitanteSeleccionado(objeto.doctorSolicitante);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    DoctorSolicitanteCrudComponent.prototype.evn_lazy_doctorSolicitante = function (doctorSolicitante, objeto) {
        objeto.doctorSolicitante = doctorSolicitante;
        objeto.doctorSolicitanteChange.emit(objeto.doctorSolicitante);
        objeto.configuarCombosObjetos();
        objeto.doctorSolicitanteLazy = true;
    };
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "datosReporteDoctorSolicitanteWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.doctorSolicitanteActualizar && this.doctorSolicitanteLazy && this.globalesService.preporteWord(this, "doctorSolicitante"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "datosReporteDoctorSolicitanteExcel", {
        get: function () {
            return !(this.doctorSolicitanteActualizar && this.doctorSolicitanteLazy && this.globalesService.preporteExcel(this, "doctorSolicitante"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorSolicitanteCrudComponent.prototype, "datosReporteDoctorSolicitantePdf", {
        get: function () {
            return !(this.doctorSolicitanteActualizar && this.doctorSolicitanteLazy && this.globalesService.preportePdf(this, "doctorSolicitante"));
        },
        enumerable: true,
        configurable: true
    });
    DoctorSolicitanteCrudComponent.prototype.reporteDoctorSolicitanteExcel = function () {
        var nombre = "DoctorSolicitante.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "doctorSolicitante": this.doctorSolicitante };
        parametros["plantilla"] = "DoctorSolicitante.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DoctorSolicitanteCrudComponent.prototype.reporteDoctorSolicitanteWord = function () {
        var nombre = "DoctorSolicitante.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "doctorSolicitante": this.doctorSolicitante };
        parametros["plantilla"] = "DoctorSolicitante.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DoctorSolicitanteCrudComponent.prototype.reporteDoctorSolicitantePdf = function () {
        var nombre = "DoctorSolicitante.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "doctorSolicitante": this.doctorSolicitante };
        parametros["plantilla"] = "DoctorSolicitante.docx";
        parametros["salida"] = "DoctorSolicitante.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    DoctorSolicitanteCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = this.doctorSolicitanteCancelar = false;
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true;
        //this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteCancelar = true;
    };
    DoctorSolicitanteCrudComponent.prototype.buscarDoctorSolicitanteFront = function () {
        this.accionesBuscar();
        var vdoctorSolicitante = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"]();
        vdoctorSolicitante.from(this.doctorSolicitante);
        vdoctorSolicitante.status = 1;
        this.configuracionDoctorSolicitante = new _shared_configurar_doctor_solicitante__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDoctorSolicitante"]();
        this.configuracionDoctorSolicitante.permisosTabla = { "tabla": "doctorSolicitante", "permiso": 8 };
        this.configuracionDoctorSolicitante.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionDoctorSolicitante.doctorSolicitanteConsulta = vdoctorSolicitante;
        this.permisosacciones();
        $("#buscarDoctorSolicitante_" + this.nombre).modal();
    };
    DoctorSolicitanteCrudComponent.prototype.buscarDoctorSolicitanteBack = function (doctorSolicitante) {
        this.doctorSolicitante_service.getDoctorSolicitantesByDto(new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"](doctorSolicitante), this.eventoSrvDoctorSolicitanteBuscar, this);
    };
    DoctorSolicitanteCrudComponent.prototype.eventoSrvDoctorSolicitanteBuscar = function (lista, objeto) {
        objeto.lista_doctorSolicitantes = lista;
        if (lista && lista.length > 0) {
            objeto.doctorSolicitante = lista[0];
            objeto.doctorSolicitanteLazy = false;
            objeto.doctorSolicitante_service.lazyDoctorSolicitante(objeto.doctorSolicitante, objeto.evn_lazy_doctorSolicitante, objeto);
        }
    };
    DoctorSolicitanteCrudComponent.prototype.guardarDoctorSolicitanteFront = function () {
        bootbox.confirm({
            message: "¿Deseas guardar el registro?",
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
                if (result) {
                    this.accion = 5; // ********************************************************************************************** maquina
                    this.guardarDoctorSolicitanteBack(this.doctorSolicitante);
                    this.accionesBuscar(); // ********************************************************************************* maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });
        // this.accion = 5;  // ********************************************************************************************** maquina
        // this.guardarDoctorSolicitanteBack(this.doctorSolicitante);
        // this.accionesBuscar();    // ********************************************************************************* maquina
        // this.permisosacciones();
    };
    DoctorSolicitanteCrudComponent.prototype.guardarDoctorSolicitanteBack = function (doctorSolicitante) {
        if (doctorSolicitante.usuarioUltMov == null)
            doctorSolicitante.usuarioUltMov = this.globalesService.dameUsuario();
        if (doctorSolicitante.status == null || doctorSolicitante.status == "")
            doctorSolicitante.status = 1;
        doctorSolicitante.fechaRegistro = new Date();
        this.doctorSolicitante_service.guardarDoctorSolicitante(new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"](doctorSolicitante), this.eventoSrvDoctorSolicitanteGuardar, this);
    };
    DoctorSolicitanteCrudComponent.prototype.eventoSrvDoctorSolicitanteGuardar = function (doctorSolicitante, obj) {
        obj.doctorSolicitante = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"](doctorSolicitante);
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"]();
        aux.from(doctorSolicitante);
        obj.doctorSolicitanteChange.emit(aux);
        obj.doctorSolicitanteTablaChange.emit(aux);
        obj.doctorSolicitanteLazy = false;
        obj.doctorSolicitante_service.lazyDoctorSolicitante(obj.doctorSolicitante, obj.evn_lazy_doctorSolicitante, obj);
        obj.accionesActualizar();
    };
    DoctorSolicitanteCrudComponent.prototype.actualizarDoctorSolicitanteFront = function () {
        bootbox.confirm({
            message: "¿Deseas actualizar el registro?",
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
                if (result) {
                    this.accion = 3; // ************************************************************************************* maquina
                    this.actualizarDoctorSolicitanteBack(this.doctorSolicitante);
                    this.accionesBuscar(); // ***************************************************************************** maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });
        // this.accion = 3;         // ************************************************************************************* maquina
        // this.actualizarDoctorSolicitanteBack(this.doctorSolicitante);
        // this.accionesBuscar(); // ***************************************************************************** maquina
        // this.permisosacciones();
    };
    DoctorSolicitanteCrudComponent.prototype.actualizarDoctorSolicitanteBack = function (doctorSolicitante) {
        doctorSolicitante.usuarioUltMov = this.globalesService.dameUsuario();
        doctorSolicitante.fechaActualizacion = new Date();
        this.doctorSolicitante_service.actualizarDoctorSolicitante(new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"](doctorSolicitante), this.eventoSrvDoctorSolicitanteActualizar, this);
    };
    DoctorSolicitanteCrudComponent.prototype.eventoSrvDoctorSolicitanteActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"](obj.doctorSolicitante);
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.doctorSolicitanteLazy = false;
            obj.doctorSolicitante_service.lazyDoctorSolicitante(aux, obj.evn_lazy_doctorSolicitante, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.doctorSolicitante);
            obj.doctorSolicitanteChange.emit(aux);
            obj.doctorSolicitanteTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    DoctorSolicitanteCrudComponent.prototype.eliminarDoctorSolicitanteFront = function () {
        bootbox.confirm({
            message: "¿Deseas eliminar el registro?",
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
                if (result) {
                    this.accion = 4;
                    this.eliminarDoctorSolicitanteBack(new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"](this.doctorSolicitante));
                    this.permisosacciones();
                    this.accionesBuscar();
                }
            }.bind(this)
        });
        // this.accion = 4;
        // this.eliminarDoctorSolicitanteBack(this.doctorSolicitante);
        // this.permisosacciones();
        // this.accionesBuscar();
    };
    DoctorSolicitanteCrudComponent.prototype.eliminarDoctorSolicitanteBack = function (doctorSolicitante) {
        doctorSolicitante.usuarioUltMov = this.globalesService.dameUsuario();
        doctorSolicitante.fechaBaja = new Date();
        doctorSolicitante.status = 0;
        this.doctorSolicitante_service.actualizarDoctorSolicitante(doctorSolicitante, this.eventoSrvDoctorSolicitanteEliminar, this);
        //this.doctorSolicitante_service.eliminarDoctorSolicitante(doctorSolicitante, this.eventoSrvDoctorSolicitanteEliminar, this);
    };
    DoctorSolicitanteCrudComponent.prototype.eventoSrvDoctorSolicitanteEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.doctorSolicitante = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"]();
            obj.doctorSolicitanteChange.emit(obj.doctorSolicitante);
            obj.doctorSolicitanteTablaChange.emit(obj.doctorSolicitante);
            obj.limpiarCampos();
        }
    };
    DoctorSolicitanteCrudComponent.prototype.cancelarDoctorSolicitanteFront = function () {
        this.accion = 6;
        this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true;
        this.permisosacciones();
    };
    DoctorSolicitanteCrudComponent.prototype.nuevoDoctorSolicitanteFront = function () {
        this.accion = 2;
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteAgregar = this.doctorSolicitanteBuscar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
        this.doctorSolicitanteGuardar = this.doctorSolicitanteCancelar = true;
        // bootbox.confirm({
        //     message: "¿Deseas limpiar los campos de ingreso?",
        //     buttons: {
        //         confirm: {
        //             label: 'Si',
        //             className: 'btn-success'
        //         },
        //         cancel: {
        //             label: 'No',
        //             className: 'btn-danger'
        //         }
        //     },
        //     callback: function(result) {
        //         if (result)
        //             this.limpiarCampos();
        //         this.doctorSolicitanteSeleccion = this.doctorSolicitanteAgregar = this.doctorSolicitanteBuscar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false;
        //         this.doctorSolicitanteGuardar = this.doctorSolicitanteCancelar = true;
        //     }.bind(this)
        // });
    };
    DoctorSolicitanteCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovDoctorSolicitanteUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDoctorSolicitanteUsuario, this);
        this.lista_idcargoDoctorSolicitanteCatalogoCargo = [];
        this.catalogoCargo_service.getCatalogoCargosActivos(this.evtGetIdcargoDoctorSolicitanteCatalogoCargo, this);
        this.lista_idhospitalDoctorSolicitanteHospital = [];
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalDoctorSolicitanteHospital, this);
    };
    DoctorSolicitanteCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    DoctorSolicitanteCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteSeleccion = this.doctorSolicitanteGuardar = false;
        this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = this.doctorSolicitanteCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    DoctorSolicitanteCrudComponent.prototype.evtDoctorSolicitanteSeleccionado = function (doctorSolicitante) {
        this.doctorSolicitante = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"](doctorSolicitante);
        this.doctorSolicitante.from(doctorSolicitante);
        this.doctorSolicitanteLazy = false;
        this.doctorSolicitante_service.lazyDoctorSolicitante(this.doctorSolicitante, this.evn_lazy_doctorSolicitante, this);
        this.accion = 7;
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = this.doctorSolicitanteSeleccion = this.doctorSolicitanteGuardar = false;
        this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = this.doctorSolicitanteCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDoctorSolicitante_" + this.nombre).modal("hide");
    };
    DoctorSolicitanteCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false; // ******************** maquina
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    DoctorSolicitanteCrudComponent.prototype.permisosacciones = function () {
        if (this.doctorSolicitanteBuscar)
            this.doctorSolicitanteBuscar = this.globalesService.pbuscar(this, "doctorSolicitante");
        if (this.doctorSolicitanteActualizar)
            this.doctorSolicitanteActualizar = (this.globalesService.pacutalizar(this, "doctorSolicitante") && this.globalesService.pbuscar(this, "doctorSolicitante"));
        if (this.doctorSolicitanteEliminar)
            this.doctorSolicitanteEliminar = (this.globalesService.peliminar(this, "doctorSolicitante") && this.globalesService.pbuscar(this, "doctorSolicitante"));
        if (this.doctorSolicitanteAgregar)
            this.doctorSolicitanteAgregar = this.globalesService.pagregar(this, "doctorSolicitante");
    };
    DoctorSolicitanteCrudComponent.prototype.permisosaccionesInicio = function () {
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false; // *************************** maquina
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    DoctorSolicitanteCrudComponent.prototype.limpiarCampos = function () {
        this.doctorSolicitante = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"]();
        this.usuarioUltMovDoctorSolicitanteUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idcargoDoctorSolicitanteCatalogoCargoEleccion = new _catalogo_cargos_shared_catalogo_cargo__WEBPACK_IMPORTED_MODULE_15__["CatalogoCargo"]();
        this.idhospitalDoctorSolicitanteHospitalEleccion = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_12__["Hospital"]();
        this.doctorSolicitanteChange.emit(this.doctorSolicitante);
        this.doctorSolicitanteSeleccion = this.doctorSolicitanteCancelar = this.doctorSolicitanteGuardar = this.doctorSolicitanteActualizar = this.doctorSolicitanteEliminar = false; // *************************** maquina
        this.doctorSolicitanteBuscar = this.doctorSolicitanteAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DoctorSolicitanteCrudComponent.prototype, "ocultarConjuntosDoctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DoctorSolicitanteCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DoctorSolicitanteCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitante"])
    ], DoctorSolicitanteCrudComponent.prototype, "doctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteCrudComponent.prototype, "doctorSolicitanteChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteCrudComponent.prototype, "doctorSolicitanteTablaChange", void 0);
    DoctorSolicitanteCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-solicitante-crud',
            template: __webpack_require__(/*! ./doctor-solicitante-crud.component.html */ "./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.html"),
            styles: [__webpack_require__(/*! ./doctor-solicitante-crud.component.css */ "./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_5__["DoctorSolicitanteService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
                _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_16__["CatalogoCargoService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_5__["DoctorSolicitanteService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
            _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_16__["CatalogoCargoService"]])
    ], DoctorSolicitanteCrudComponent);
    return DoctorSolicitanteCrudComponent;
}());



/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para doctorSolicitante-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionDoctorSolicitante.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_doctorSolicitante_{{nombregrid}}\">\n                <div id=\"grid_doctorSolicitante_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DoctorSolicitanteListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSolicitanteListKendoComponent", function() { return DoctorSolicitanteListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/doctor-solicitante */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.ts");
/* harmony import */ var _shared_configurar_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-doctor-solicitante */ "./src/app/doctor-solicitantes/shared/configurar-doctor-solicitante.ts");
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
var DoctorSolicitanteListKendoComponent = /** @class */ (function () {
    function DoctorSolicitanteListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.doctorSolicitanteSeleccionado = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_3__["DoctorSolicitante"]();
        this.configuracionDoctorSolicitante = new _shared_configurar_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDoctorSolicitante"]();
        this.nombregrid = "";
        this.evtDoctorSolicitanteSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "doctorSolicitante";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'doctorSolicitante'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'doctorSolicitante'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    DoctorSolicitanteListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionDoctorSolicitante.titulo.indexOf("Catálogo") != -1) {
            this.configuracionDoctorSolicitante.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    DoctorSolicitanteListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDoctorSolicitante && changes.configuracionDoctorSolicitante.currentValue &&
            (changes.configuracionDoctorSolicitante.previousValue instanceof _shared_configurar_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDoctorSolicitante"])) {
            if (changes.configuracionDoctorSolicitante.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionDoctorSolicitante.currentValue.permisosAtributos;
            if (changes.configuracionDoctorSolicitante.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionDoctorSolicitante.currentValue.permisosTabla;
            if ($("#grid_doctorSolicitante_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    DoctorSolicitanteListKendoComponent.prototype.ngOnInit = function () {
        self["grid_doctorSolicitante_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionDoctorSolicitante.permisosAtributos &&
            this.configuracionDoctorSolicitante.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "doctorSolicitante",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorSolicitante'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorSolicitante'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorSolicitante'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionDoctorSolicitante.permisosAtributos)
            this.permisosAtributos = this.configuracionDoctorSolicitante.permisosAtributos;
        if (this.configuracionDoctorSolicitante.permisosTabla)
            this.permisosTabla = this.configuracionDoctorSolicitante.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DoctorSolicitanteListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoAtributo && permisos.doctorSolicitante.PermisoAtributo.length > 0
            && !obj.configuracionDoctorSolicitante.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.doctorSolicitante.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.DoctorSolicitante.PermisoAtributo ;
        }
        if (permisos && permisos.doctorSolicitante && permisos.doctorSolicitante.PermisoTabla && permisos.doctorSolicitante.PermisoTabla.length > 0
            && !obj.configuracionDoctorSolicitante.permisosTabla) {
            obj.globalesService.evtTablas(permisos.doctorSolicitante.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.DoctorSolicitante.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DoctorSolicitanteListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_doctorSolicitante_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    DoctorSolicitanteListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionDoctorSolicitante.campoAgEl != null
            && this.configuracionDoctorSolicitante.doctorSolicitanteConsulta
            && this.configuracionDoctorSolicitante.doctorSolicitanteConsulta.isOk
            && !this.configuracionDoctorSolicitante.doctorSolicitanteConsulta.isOk())
            return;
        if (this.configuracionDoctorSolicitante.doctorSolicitanteConsulta) {
            if (!this.configuracionDoctorSolicitante.campoAgEl && this.configuracionDoctorSolicitante.doctorSolicitanteConsulta instanceof _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_3__["DoctorSolicitante"])
                this.configuracionDoctorSolicitante.rutaLista = this.crudServiceBaseUrl + "/getDoctorSolicitantesByDto";
            this.lista = this.configuracionDoctorSolicitante.lecturaP(completar, this.configuracionDoctorSolicitante.doctorSolicitanteConsulta);
            if (this.configuracionDoctorSolicitante.campoAgEl) {
                this.rutaAgregar = this.configuracionDoctorSolicitante.agregarP(function () { }, this.configuracionDoctorSolicitante.campoAgEl);
                this.rutaEliminar = this.configuracionDoctorSolicitante.eliminarP(function () { }, this.configuracionDoctorSolicitante.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionDoctorSolicitante.agregarP(completar, this.configuracionDoctorSolicitante.doctorSolicitanteConsulta);
                this.rutaEliminar = this.configuracionDoctorSolicitante.eliminarP(completar, this.configuracionDoctorSolicitante.doctorSolicitanteConsulta);
            }
        }
        else {
            this.lista = this.configuracionDoctorSolicitante.lectura();
            this.rutaAgregar = this.configuracionDoctorSolicitante.agregar();
            this.rutaEliminar = this.configuracionDoctorSolicitante.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "doctorSolicitante", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "doctorSolicitante", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "idhospital")) {
            campos["idhospital"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "idhospital"), nullable: true, type: "object", defaultValue: { "id": "", "rnt": "" } };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "nombre"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "primerApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "segundoApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "correoElectronico")) {
            campos["correoElectronico"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "correoElectronico"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "telefono")) {
            campos["telefono"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "telefono"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "fechaBaja"), nullable: true, type: "date" };
        }
        // if (this.globalesService.avisible(this,"doctorSolicitante", "idhospital")) {
        //     campos["idhospital"] = { editable: this.globalesService.aenable(this,"doctorSolicitante", "idhospital"), nullable: true, type: "object" , defaultValue: { "id": "" , "rnt": "" }  };
        // }
        if (this.globalesService.avisible(this, "doctorSolicitante", "idcargo")) {
            campos["idcargo"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "idcargo"), nullable: true, type: "object", defaultValue: { "id": "", "descripcion": "" } };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "doctorSolicitante", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDoctorSolicitante.rutaActualizar,
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
            if (self.configuracionDoctorSolicitante.campoAgEl) {
                if (self.configuracionDoctorSolicitante.tipocampoAgEl == "DoctorSolicitanteDoctorSolicitante")
                    self.configuracionDoctorSolicitante.campoAgEl.doctorSolicitante2 = options.models[0];
                else
                    self.configuracionDoctorSolicitante.campoAgEl.doctorSolicitante = options.models[0];
                return JSON.stringify(self.configuracionDoctorSolicitante.campoAgEl);
            }
            else if (est.options[operation].data.models.doctorSolicitante) {
                est.options[operation].data.models.doctorSolicitante2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    DoctorSolicitanteListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "doctorSolicitante", "id")) {
            columnas.push({ field: "id", title: "ID", width: 40, editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "idhospital")) {
            columnas.push({ field: "idhospital", title: "RNT Procedente", width: 65, template: " #if (idhospital){#   #=idhospital.rnt# # } # " });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "nombre")) {
            columnas.push({ field: "nombre", title: "Nombre", width: 130, editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: "Primer Apellido", width: 150, editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: "Segundo Apellido", width: 160, editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "correoElectronico")) {
            columnas.push({ field: "correoElectronico", title: "Correo Electrónico", width: 170, editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "telefono")) {
            columnas.push({ field: "telefono", title: "Teléfono", width: 100, editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "doctorSolicitante", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "doctorSolicitante", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "doctorSolicitante", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        // if (this.globalesService.avisible(this,"doctorSolicitante", "idhospital")) {
        //     columnas.push({ field: "idhospital", title: this.globalesService.aetiqueta(this,"doctorSolicitante", "idhospital") , template: " #if (idhospital){#   #=idhospital.rnt# # } # "  });
        // }
        if (this.globalesService.avisible(this, "doctorSolicitante", "idcargo")) {
            columnas.push({ field: "idcargo", title: "Cargo", width: 130, editor: idcargoDropDownEditor, template: " #if (idcargo){#   #=idcargo.descripcion# # } # " });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "doctorSolicitante", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "doctorSolicitante", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "doctorSolicitante", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "doctorSolicitante"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "doctorSolicitante")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "doctorSolicitante")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "doctorSolicitante") && this.configuracionDoctorSolicitante.doctorSolicitanteConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: 90
        });
        if (this.grid)
            $("#grid_doctorSolicitante_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_doctorSolicitante_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDoctorSolicitante.altoComponente,
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
        this.grid = $("#grid_doctorSolicitante_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidcargo = this.urlprovider.serverURL + "catalogoCargo/getCatalogoCargosActivos";
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
        function idcargoDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "descripcion",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidcargo,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    DoctorSolicitanteListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_doctorSolicitante_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.doctorSolicitanteSeleccionado = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_3__["DoctorSolicitante"]();
        gridac.doctorSolicitanteSeleccionado.from(dataItem);
        gridac.evtDoctorSolicitanteSeleccionado.emit(gridac.doctorSolicitanteSeleccionado);
        (gridac.doctorSolicitanteSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_doctor_solicitante__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDoctorSolicitante"])
    ], DoctorSolicitanteListKendoComponent.prototype, "configuracionDoctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DoctorSolicitanteListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("doctorSolicitanteSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DoctorSolicitanteListKendoComponent.prototype, "evtDoctorSolicitanteSeleccionado", void 0);
    DoctorSolicitanteListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-solicitante-list-kendo',
            template: __webpack_require__(/*! ./doctor-solicitante-list-kendo.component.html */ "./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./doctor-solicitante-list-kendo.component.css */ "./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], DoctorSolicitanteListKendoComponent);
    return DoctorSolicitanteListKendoComponent;
}());



/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DoctorSolicitanteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSolicitanteRoutingModule", function() { return DoctorSolicitanteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _doctor_solicitantes_doctor_solicitante_list_kendo_doctor_solicitante_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component */ "./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.ts");
/* harmony import */ var _doctor_solicitantes_doctor_solicitante_crud_doctor_solicitante_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component */ "./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.ts");
/* harmony import */ var _doctor_solicitantes_doctor_solicitante_table_doctor_solicitante_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component */ "./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'doctor-solicitante-list-kendo', component: _doctor_solicitantes_doctor_solicitante_list_kendo_doctor_solicitante_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["DoctorSolicitanteListKendoComponent"] },
    { path: 'doctor-solicitante-crud', component: _doctor_solicitantes_doctor_solicitante_crud_doctor_solicitante_crud_component__WEBPACK_IMPORTED_MODULE_3__["DoctorSolicitanteCrudComponent"] },
    { path: 'doctor-solicitante-table', component: _doctor_solicitantes_doctor_solicitante_table_doctor_solicitante_table_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitanteTableComponent"] },
];
var DoctorSolicitanteRoutingModule = /** @class */ (function () {
    function DoctorSolicitanteRoutingModule() {
    }
    DoctorSolicitanteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DoctorSolicitanteRoutingModule);
    return DoctorSolicitanteRoutingModule;
}());



/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_doctorSolicitante\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','id')\" >{{aetiqueta('doctorSolicitante','id')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','nombre')\" >{{aetiqueta('doctorSolicitante','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','primerApellido')\" >{{aetiqueta('doctorSolicitante','primerApellido')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','segundoApellido')\" >{{aetiqueta('doctorSolicitante','segundoApellido')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','correoElectronico')\" >{{aetiqueta('doctorSolicitante','correoElectronico')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','telefono')\" >{{aetiqueta('doctorSolicitante','telefono')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','fechaRegistro')\" >{{aetiqueta('doctorSolicitante','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','fechaActualizacion')\" >{{aetiqueta('doctorSolicitante','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','fechaBaja')\" >{{aetiqueta('doctorSolicitante','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','idhospital')\" >{{aetiqueta('doctorSolicitante','idhospital')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','idcargo')\" >{{aetiqueta('doctorSolicitante','idcargo')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','usuarioUltMov')\" >{{aetiqueta('doctorSolicitante','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','status')\" >{{aetiqueta('doctorSolicitante','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','id')\" >{{aetiqueta('doctorSolicitante','id')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','nombre')\" >{{aetiqueta('doctorSolicitante','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','primerApellido')\" >{{aetiqueta('doctorSolicitante','primerApellido')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','segundoApellido')\" >{{aetiqueta('doctorSolicitante','segundoApellido')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','correoElectronico')\" >{{aetiqueta('doctorSolicitante','correoElectronico')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','telefono')\" >{{aetiqueta('doctorSolicitante','telefono')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','fechaRegistro')\" >{{aetiqueta('doctorSolicitante','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','fechaActualizacion')\" >{{aetiqueta('doctorSolicitante','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','fechaBaja')\" >{{aetiqueta('doctorSolicitante','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','idhospital')\" >{{aetiqueta('doctorSolicitante','idhospital')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','idcargo')\" >{{aetiqueta('doctorSolicitante','idcargo')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','usuarioUltMov')\" >{{aetiqueta('doctorSolicitante','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('doctorSolicitante','status')\" >{{aetiqueta('doctorSolicitante','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-doctor-solicitante [class.hidden]=\"primero\" [(doctorSolicitante)]=\"doctorSolicitanteSeleccionado\" (doctorSolicitanteTablaChange)=\"cambio_doctorSolicitante($event)\"> </app-doctor-solicitante>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DoctorSolicitanteTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSolicitanteTableComponent", function() { return DoctorSolicitanteTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/doctor-solicitante */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.ts");
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






var DoctorSolicitanteTableComponent = /** @class */ (function () {
    function DoctorSolicitanteTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "doctorSolicitante", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.doctorSolicitanteSeleccionado = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__["DoctorSolicitante"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'doctorSolicitante'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    DoctorSolicitanteTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'doctorSolicitante'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    DoctorSolicitanteTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(DoctorSolicitanteTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    DoctorSolicitanteTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("doctorSolicitante", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("doctorSolicitante", "nombre"))
            columnasNoVisibles.push(1);
        columnas.push({ "data": "nombre" });
        if (!this.avisible("doctorSolicitante", "primerApellido"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "primerApellido" });
        if (!this.avisible("doctorSolicitante", "segundoApellido"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "segundoApellido" });
        if (!this.avisible("doctorSolicitante", "correoElectronico"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "correoElectronico" });
        if (!this.avisible("doctorSolicitante", "telefono"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "telefono" });
        if (!this.avisible("doctorSolicitante", "fechaRegistro"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("doctorSolicitante", "fechaActualizacion"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("doctorSolicitante", "fechaBaja"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("doctorSolicitante", "idhospital"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "idhospital" });
        if (!this.avisible("doctorSolicitante", "idcargo"))
            columnasNoVisibles.push(10);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idcargo)
                    return "<span style=\"cursor: pointer\">" + oObj.idcargo.descripcion + "</span>";
                return "";
            }
        });
        if (!this.avisible("doctorSolicitante", "usuarioUltMov"))
            columnasNoVisibles.push(11);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("doctorSolicitante", "status"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("doctorSolicitante"))
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
        var tabla = $('#tabla_doctorSolicitante').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_doctorSolicitante_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.doctorSolicitanteSeleccionado = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__["DoctorSolicitante"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "doctorSolicitante/getDoctorSolicitantes",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_doctorSolicitante tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_doctorSolicitante').DataTable().row(this).data();
                self.doctorSolicitanteSeleccionado = new _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__["DoctorSolicitante"]();
                self.doctorSolicitanteSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_doctorSolicitante').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    DoctorSolicitanteTableComponent.prototype.ngOnInit = function () {
    };
    DoctorSolicitanteTableComponent.prototype.cambio_doctorSolicitante = function (doctorSolicitante) {
        $('#tabla_doctorSolicitante').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    DoctorSolicitanteTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    DoctorSolicitanteTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    DoctorSolicitanteTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    DoctorSolicitanteTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    DoctorSolicitanteTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    DoctorSolicitanteTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    DoctorSolicitanteTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    DoctorSolicitanteTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    DoctorSolicitanteTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    DoctorSolicitanteTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    DoctorSolicitanteTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    DoctorSolicitanteTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    DoctorSolicitanteTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    DoctorSolicitanteTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    DoctorSolicitanteTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    DoctorSolicitanteTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-solicitante-table',
            template: __webpack_require__(/*! ./doctor-solicitante-table.component.html */ "./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.html"),
            styles: [__webpack_require__(/*! ./doctor-solicitante-table.component.css */ "./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], DoctorSolicitanteTableComponent);
    return DoctorSolicitanteTableComponent;
}());



/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante.module.ts ***!
  \******************************************************************/
/*! exports provided: DoctorSolicitanteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSolicitanteModule", function() { return DoctorSolicitanteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _doctor_solicitante_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor-solicitante-routing.module */ "./src/app/doctor-solicitantes/doctor-solicitante-routing.module.ts");
/* harmony import */ var _doctor_solicitante_list_kendo_doctor_solicitante_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component */ "./src/app/doctor-solicitantes/doctor-solicitante-list-kendo/doctor-solicitante-list-kendo.component.ts");
/* harmony import */ var _doctor_solicitante_crud_doctor_solicitante_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctor-solicitante-crud/doctor-solicitante-crud.component */ "./src/app/doctor-solicitantes/doctor-solicitante-crud/doctor-solicitante-crud.component.ts");
/* harmony import */ var _doctor_solicitante_conjunto_doctor_solicitante_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctor-solicitante-conjunto/doctor-solicitante-conjunto.component */ "./src/app/doctor-solicitantes/doctor-solicitante-conjunto/doctor-solicitante-conjunto.component.ts");
/* harmony import */ var _doctor_solicitante_doctor_solicitante_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doctor-solicitante/doctor-solicitante.component */ "./src/app/doctor-solicitantes/doctor-solicitante/doctor-solicitante.component.ts");
/* harmony import */ var _doctor_solicitante_table_doctor_solicitante_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doctor-solicitante-table/doctor-solicitante-table.component */ "./src/app/doctor-solicitantes/doctor-solicitante-table/doctor-solicitante-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _catalogo_cargos_catalogo_cargo_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../catalogo-cargos/catalogo-cargo.module */ "./src/app/catalogo-cargos/catalogo-cargo.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/entidad-federativa-usuario-usuario-btc-hospital.module */ "./src/app/shared/entidad-federativa-usuario-usuario-btc-hospital.module.ts");
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













var DoctorSolicitanteModule = /** @class */ (function () {
    function DoctorSolicitanteModule(parentModule) {
        if (parentModule) {
            throw new Error('DoctorSolicitanteModule is already loaded. Import it in the AppModule only');
        }
    }
    DoctorSolicitanteModule_1 = DoctorSolicitanteModule;
    DoctorSolicitanteModule.forRoot = function () {
        return {
            ngModule: DoctorSolicitanteModule_1,
            providers: []
        };
    };
    var DoctorSolicitanteModule_1;
    DoctorSolicitanteModule = DoctorSolicitanteModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"], _doctor_solicitante_routing_module__WEBPACK_IMPORTED_MODULE_3__["DoctorSolicitanteRoutingModule"], _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaUsuarioUsuarioBtcHospitalModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot(),
                _catalogo_cargos_catalogo_cargo_module__WEBPACK_IMPORTED_MODULE_10__["CatalogoCargoModule"]
            ],
            declarations: [
                _doctor_solicitante_list_kendo_doctor_solicitante_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitanteListKendoComponent"],
                _doctor_solicitante_doctor_solicitante_component__WEBPACK_IMPORTED_MODULE_7__["DoctorSolicitanteComponent"],
                _doctor_solicitante_crud_doctor_solicitante_crud_component__WEBPACK_IMPORTED_MODULE_5__["DoctorSolicitanteCrudComponent"],
                _doctor_solicitante_conjunto_doctor_solicitante_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DoctorSolicitanteConjuntoComponent"],
                _doctor_solicitante_table_doctor_solicitante_table_component__WEBPACK_IMPORTED_MODULE_8__["DoctorSolicitanteTableComponent"],
            ],
            exports: [
                _doctor_solicitante_list_kendo_doctor_solicitante_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSolicitanteListKendoComponent"],
                _doctor_solicitante_doctor_solicitante_component__WEBPACK_IMPORTED_MODULE_7__["DoctorSolicitanteComponent"],
                _doctor_solicitante_crud_doctor_solicitante_crud_component__WEBPACK_IMPORTED_MODULE_5__["DoctorSolicitanteCrudComponent"],
                _doctor_solicitante_conjunto_doctor_solicitante_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DoctorSolicitanteConjuntoComponent"],
                _doctor_solicitante_table_doctor_solicitante_table_component__WEBPACK_IMPORTED_MODULE_8__["DoctorSolicitanteTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [DoctorSolicitanteModule])
    ], DoctorSolicitanteModule);
    return DoctorSolicitanteModule;
}());



/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante/doctor-solicitante.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante/doctor-solicitante.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante/doctor-solicitante.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante/doctor-solicitante.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h3>{{etiquetaGeneral}}</h3>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <!-- inicio de componente doctor solicitante  -->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-6\"> </div>\n                    <div class=\"col-lg-6\">\n                        <app-componente-identificador [componente]=\"'doctorSolicitante'\" [atributo]=\"'id'\"\n                            [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                            [(valido)]=\"validosDoctorSolicitante['id']\" [(dato)]=\"doctorSolicitante.id\" class=\"w-100\">\n                        </app-componente-identificador>\n                    </div>\n\n                </div>\n\n                <app-componente-cadena [componente]=\"'doctorSolicitante'\" [atributo]=\"'nombre'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['nombre']\" [(dato)]=\"doctorSolicitante.nombre\" class=\"w-100\"\n                    [maxlength]=\"255\">\n                </app-componente-cadena>\n                <app-componente-cadena [componente]=\"'doctorSolicitante'\" [atributo]=\"'primerApellido'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['primerApellido']\" [(dato)]=\"doctorSolicitante.primerApellido\"\n                    class=\"w-100\" [maxlength]=\"255\">\n                </app-componente-cadena>\n                <app-componente-cadena [componente]=\"'doctorSolicitante'\" [atributo]=\"'segundoApellido'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['segundoApellido']\"\n                    [(dato)]=\"doctorSolicitante.segundoApellido\" class=\"w-100\" [maxlength]=\"255\">\n                </app-componente-cadena>\n                <app-componente-cadena [componente]=\"'doctorSolicitante'\" [atributo]=\"'correoElectronico'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['correoElectronico']\"\n                    [(dato)]=\"doctorSolicitante.correoElectronico\" class=\"w-100\" [maxlength]=\"255\">\n                </app-componente-cadena>\n                <app-componente-cadena [componente]=\"'doctorSolicitante'\" [atributo]=\"'telefono'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['telefono']\" [(dato)]=\"doctorSolicitante.telefono\"\n                    class=\"w-100\" [maxlength]=\"10\">\n                </app-componente-cadena>\n                <app-componente-fecha [componente]=\"'doctorSolicitante'\" [atributo]=\"'fechaRegistro'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['fechaRegistro']\" [(dato)]=\"doctorSolicitante.fechaRegistro\"\n                    class=\"w-100\">\n                </app-componente-fecha>\n                <app-componente-fecha [componente]=\"'doctorSolicitante'\" [atributo]=\"'fechaActualizacion'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['fechaActualizacion']\"\n                    [(dato)]=\"doctorSolicitante.fechaActualizacion\" class=\"w-100\">\n                </app-componente-fecha>\n                <app-componente-fecha [componente]=\"'doctorSolicitante'\" [atributo]=\"'fechaBaja'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['fechaBaja']\" [(dato)]=\"doctorSolicitante.fechaBaja\"\n                    class=\"w-100\">\n                </app-componente-fecha>\n                <!-- <app-componente-cadena [componente]=\"'doctorSolicitante'\" [atributo]=\"'idhospital'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['idhospital']\" [(dato)]=\"doctorSolicitante.idhospital\"\n                    class=\"w-100\">\n                </app-componente-cadena> -->\n                <app-componente-objeto [componente]=\"'doctorSolicitante'\" [atributo]=\"'idhospital'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['idhospital']\" [(dato)]=\"doctorSolicitante.idhospital\"\n                    class=\"w-100\" [ocultarConjuntos]=\"ocultarConjuntos\"\n                    [opciones]=\"lista_idhospitalDoctorSolicitanteHospital\" [atributoVisible]=\"'nombre'\"\n                    [(objetoEdicion)]=\"idhospitalDoctorSolicitanteHospitalEditar\">\n                </app-componente-objeto>\n                <div>\n                    <app-componente-objeto [componente]=\"'doctorSolicitante'\" [atributo]=\"'idcargo'\"\n                        [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                        [(valido)]=\"validosDoctorSolicitante['idcargo']\" [(dato)]=\"doctorSolicitante.idcargo\"\n                        class=\"w-100\" [ocultarConjuntos]=\"ocultarConjuntos\"\n                        [opciones]=\"lista_idcargoDoctorSolicitanteCatalogoCargo\" [atributoVisible]=\"'descripcion'\"\n                        [(objetoEdicion)]=\"idcargoDoctorSolicitanteCatalogoCargoEditar\">\n                    </app-componente-objeto>\n                </div>\n\n                <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\" [class.hidden]=\"!idcargoEditar\">\n                    <div class=\"form-group\"\n                        [class.hidden]=\"!globalesService.aeditable(this,'doctorSolicitante','idcargo')\">\n                        <app-catalogo-cargo-crud [nombre]=\"'idcargo'\" [catalogoCargo]=\"doctorSolicitante.idcargo\"\n                            (catalogoCargoChange)=\"evtIdcargo($event)\" [ocultarConjuntosCatalogoCargo]=\"'true'\"\n                            [class.hidden]=\"!idcargoEditar\"></app-catalogo-cargo-crud>\n                    </div>\n                </div>\n\n\n\n\n                <div>\n                    <app-componente-objeto [componente]=\"'doctorSolicitante'\" [atributo]=\"'usuarioUltMov'\"\n                        [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                        [(valido)]=\"validosDoctorSolicitante['usuarioUltMov']\"\n                        [(dato)]=\"doctorSolicitante.usuarioUltMov\" class=\"w-100\" [ocultarConjuntos]=\"ocultarConjuntos\"\n                        [opciones]=\"lista_usuarioUltMovDoctorSolicitanteUsuario\" [atributoVisible]=\"'username'\"\n                        [(objetoEdicion)]=\"usuarioUltMovDoctorSolicitanteUsuarioEditar\">\n                    </app-componente-objeto>\n                    <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"\n                        [class.hidden]=\"!usuarioUltMovEditar\">\n                        <div class=\"form-group\"\n                            [class.hidden]=\"!globalesService.aeditable(this,'doctorSolicitante','usuarioUltMov')\">\n                            <!--app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"doctorSolicitante.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud-->\n                        </div>\n                    </div>\n                </div>\n                <app-componente-radio [componente]=\"'doctorSolicitante'\" [atributo]=\"'status'\"\n                    [buscar]=\"doctorSolicitanteBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorSolicitante['status']\" [(dato)]=\"doctorSolicitante.status\" class=\"w-100\">\n                </app-componente-radio>\n\n\n            </div>\n            <!-- fin de componente doctor solicitante-->\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/doctor-solicitantes/doctor-solicitante/doctor-solicitante.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/doctor-solicitante/doctor-solicitante.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DoctorSolicitanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSolicitanteComponent", function() { return DoctorSolicitanteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/doctor-solicitante */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorSolicitanteComponent = /** @class */ (function () {
    function DoctorSolicitanteComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doctorSolicitanteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovDoctorSolicitanteUsuarioEditar = false;
        this.idcargoDoctorSolicitanteCatalogoCargoEditar = false;
        this.idhospitalDoctorSolicitanteHospitalEditar = false;
    }
    DoctorSolicitanteComponent.prototype.actualizarDoctorSolicitante = function () {
        if (this.doctorSolicitante.id == null) {
            this.doctorSolicitanteService.guardarDoctorSolicitante(this.doctorSolicitante, this.evtGuardar, this);
        }
        else {
            this.doctorSolicitanteService.actualizarDoctorSolicitante(this.doctorSolicitante, this.evtActualiza, this);
        }
    };
    DoctorSolicitanteComponent.prototype.evtGuardar = function (doctorSolicitante, obj) {
        obj.doctorSolicitante = doctorSolicitante;
        obj.doctorSolicitanteChange.emit(obj.doctorSolicitante);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    DoctorSolicitanteComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.doctorSolicitanteChange.emit(obj.doctorSolicitante);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DoctorSolicitanteComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarDoctorSolicitante();
            }
        }
    };
    DoctorSolicitanteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "doctorSolicitanteBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "validosDoctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_1__["DoctorSolicitante"])
    ], DoctorSolicitanteComponent.prototype, "doctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "doctorSolicitanteService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DoctorSolicitanteComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "doctorSolicitanteChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "lista_usuarioUltMovDoctorSolicitanteUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "lista_idcargoDoctorSolicitanteCatalogoCargo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorSolicitanteComponent.prototype, "lista_idhospitalDoctorSolicitanteHospital", void 0);
    DoctorSolicitanteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-solicitante',
            template: __webpack_require__(/*! ./doctor-solicitante.component.html */ "./src/app/doctor-solicitantes/doctor-solicitante/doctor-solicitante.component.html"),
            styles: [__webpack_require__(/*! ./doctor-solicitante.component.css */ "./src/app/doctor-solicitantes/doctor-solicitante/doctor-solicitante.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DoctorSolicitanteComponent);
    return DoctorSolicitanteComponent;
}());



/***/ }),

/***/ "./src/app/doctor-solicitantes/shared/configurar-doctor-solicitante.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/doctor-solicitantes/shared/configurar-doctor-solicitante.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigurarDoctorSolicitante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarDoctorSolicitante", function() { return ConfigurarDoctorSolicitante; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarDoctorSolicitante = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarDoctorSolicitante() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "doctorSolicitante";
        this.rutaLista = this.crudServiceBaseUrl + "/getDoctorSolicitantes";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarDoctorSolicitante";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarDoctorSolicitante";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarDoctorSolicitante";
        this.titulo = "Catálogo DoctorSolicitante";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.doctorSolicitanteConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarDoctorSolicitante.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDoctorSolicitante.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarDoctorSolicitante.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDoctorSolicitante.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarDoctorSolicitante.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDoctorSolicitante.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarDoctorSolicitante;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-evaluaciones-almacen-evaluacion-module~app-doctor-solicitantes-doctor-solicitant~381b2397.js.map