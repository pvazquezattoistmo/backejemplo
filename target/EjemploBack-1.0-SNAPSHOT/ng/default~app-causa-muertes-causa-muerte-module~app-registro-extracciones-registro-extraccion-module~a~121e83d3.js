(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-causa-muertes-causa-muerte-module~app-registro-extracciones-registro-extraccion-module~a~121e83d3"],{

/***/ "./src/app/causa-muertes/causa-muerte-conjunto/causa-muerte-conjunto.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-conjunto/causa-muerte-conjunto.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-conjunto/causa-muerte-conjunto.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-conjunto/causa-muerte-conjunto.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let causaMuerte of listaCausaMuerte \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+causaMuerte.id}\"\n        (click)=\"elegir(causaMuerte,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{causaMuerte.id}}\">{{causaMuerte.id}}</a>\n    </li>\n    <li *ngFor =  \"let causaMuerte of listaCausaMuerteN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+causaMuerte.id}\"\n        (click)=\"elegir(causaMuerte, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{causaMuerte.id}}\">T-{{causaMuerte.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let causaMuerte of listaCausaMuerte ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+causaMuerte.id}\" id=\"tab-I-{{causaMuerte.id}}\">\n\t\t\t<app-causa-muerte [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [causaMuerteBuscar]=\"causaMuerteBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosCausaMuerte]=\"validosCausaMuerte\"  \n\t\t\t\t\t\t  [causaMuerteService]=\"causaMuerteService\" [(opcion)]=\"opcionCausaMuerte\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(causaMuerte)]=\"listaCausaMuerte[i]\"  [ocultarConjuntos]=\"ocultarConjuntosCausaMuerte\"\n                           [lista_usuarioUltMovCausaMuerteUsuario]=\"lista_usuarioUltMovCausaMuerteUsuario\" \n\n\t\t\t\t\t  >\n\t\t\t</app-causa-muerte>\n        </div>\n        <div *ngFor = \"let causaMuerte of listaCausaMuerteN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+causaMuerte.id}\" id=\"tab-N-{{causaMuerte.id}}\">\n\t\t\t<app-causa-muerte [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [causaMuerteBuscar]=\"causaMuerteBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosCausaMuerte]=\"validosCausaMuerte\"  \n\t\t\t\t\t\t  [causaMuerteService]=\"causaMuerteService\" [(opcion)]=\"opcionCausaMuerte\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(causaMuerte)]=\"listaCausaMuerteN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosCausaMuerte\"\n                           [lista_usuarioUltMovCausaMuerteUsuario]=\"lista_usuarioUltMovCausaMuerteUsuario\" \n\n\t\t\t\t\t  >\n\t\t\t</app-causa-muerte>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-conjunto/causa-muerte-conjunto.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-conjunto/causa-muerte-conjunto.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CausaMuerteConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaMuerteConjuntoComponent", function() { return CausaMuerteConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/causa-muerte */ "./src/app/causa-muertes/shared/causa-muerte.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CausaMuerteConjuntoComponent = /** @class */ (function () {
    function CausaMuerteConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovCausaMuerteUsuarioEditar = false;
        this.listaCausaMuerteN = [];
        this.listaCausaMuerte = [];
        this.listaCausaMuerteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.causaMuerteN = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__["CausaMuerte"]();
        this.causaMuerteNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    CausaMuerteConjuntoComponent.prototype.elegir = function (causaMuerte, tipo) {
        this.idSeleccionado = tipo + "-" + causaMuerte.id;
        this.causaMuerteN = causaMuerte;
    };
    CausaMuerteConjuntoComponent.prototype.ngOnInit = function () {
        this.causaMuerteN.id = 0;
        this.listaCausaMuerteN.push(Object.assign({}, this.causaMuerteN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    CausaMuerteConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__["CausaMuerte"]();
        pg.id = this.listaCausaMuerteN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaCausaMuerteN.push(pg);
    };
    CausaMuerteConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaCausaMuerte; _i < _a.length; _i++) {
            var causaMuerte = _a[_i];
            this.causaMuerteService.actualizarCausaMuerte(causaMuerte, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaCausaMuerteN; _b < _c.length; _b++) {
            var causaMuerte = _c[_b];
            causaMuerte.id = null;
            this.causaMuerteService.guardarCausaMuerte(causaMuerte, this.evtGuardar, this);
        }
    };
    CausaMuerteConjuntoComponent.prototype.evtGuardar = function (causaMuerte, obj) {
        obj.agregados++;
        obj.listaCausaMuerte.push(causaMuerte);
        if (obj.agregados >= obj.listaCausaMuerteN.length) {
            obj.causaMuerteN = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__["CausaMuerte"]();
            obj.listaCausaMuerteN = [];
            obj.causaMuerteN.id = 0;
            obj.idSeleccionado = "N-" + obj.causaMuerteN.id;
            obj.listaCausaMuerteN.push(Object.assign({}, obj.causaMuerteN));
            obj.listaCausaMuerteChange.emit(obj.listaCausaMuerte);
        }
        if (obj.agregados >= obj.listaCausaMuerteN.length &&
            obj.actualizados >= obj.listaCausaMuerte.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    CausaMuerteConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaCausaMuerteN.length &&
                obj.actualizados >= obj.listaCausaMuerte.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    CausaMuerteConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], CausaMuerteConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "causaMuerteBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "validosCausaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "ocultarConjuntosCausaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "causaMuerteService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CausaMuerteConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "lista_usuarioUltMovCausaMuerteUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CausaMuerteConjuntoComponent.prototype, "listaCausaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "listaCausaMuerteChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__["CausaMuerte"])
    ], CausaMuerteConjuntoComponent.prototype, "causaMuerteN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaMuerteConjuntoComponent.prototype, "causaMuerteNChange", void 0);
    CausaMuerteConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-causa-muerte-conjunto',
            template: __webpack_require__(/*! ./causa-muerte-conjunto.component.html */ "./src/app/causa-muertes/causa-muerte-conjunto/causa-muerte-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./causa-muerte-conjunto.component.css */ "./src/app/causa-muertes/causa-muerte-conjunto/causa-muerte-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CausaMuerteConjuntoComponent);
    return CausaMuerteConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-causa-muerte [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n                           [causaMuerteBuscar]=\"causaMuerteBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosCausaMuerte]=\"validosCausaMuerte\"\n                           [causaMuerteService]=\"causaMuerte_service\"\n                           [(opcion)]=\"opcionCausaMuerte\"\n                           [globalesService]=\"globalesService\"\n                           [(causaMuerte)]=\"causaMuerte\"\n                           [ocultarConjuntos]=\"ocultarConjuntosCausaMuerte\"\n                           [lista_usuarioUltMovCausaMuerteUsuario]=\"lista_usuarioUltMovCausaMuerteUsuario\"\n\n\t\t\t\t\t  >\n\n        </app-causa-muerte>\n\n        <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!causaMuerteBuscar\" (click)=\"buscarCausaMuerteFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!causaMuerteAgregar\" (click)=\"nuevoCausaMuerteFront()\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!causaMuerteActualizar\" (click)=\"actualizarCausaMuerteFront()\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!causaMuerteEliminar\" (click)=\"eliminarCausaMuerteFront()\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!causaMuerteGuardar\" (click)=\"guardarCausaMuerteFront()\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!causaMuerteCancelar\" (click)=\"cancelarCausaMuerteFront()\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteCausaMuerteWord\" (click)=\"reporteCausaMuerteWord()\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteCausaMuerteExcel\" (click)=\"reporteCausaMuerteExcel()\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteCausaMuertePdf\" (click)=\"reporteCausaMuertePdf()\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"buscarCausaMuerte_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-causa-muerte-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionCausaMuerte]=\"configuracionCausaMuerte\"  (causaMuerteSeleccionado) =\"evtCausaMuerteSeleccionado($event)\">  </app-causa-muerte-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.ts ***!
  \********************************************************************************/
/*! exports provided: CausaMuerteCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaMuerteCrudComponent", function() { return CausaMuerteCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/causa-muerte */ "./src/app/causa-muertes/shared/causa-muerte.ts");
/* harmony import */ var _shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
/* harmony import */ var _shared_configurar_causa_muerte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-causa-muerte */ "./src/app/causa-muertes/shared/configurar-causa-muerte.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
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



var CausaMuerteCrudComponent = /** @class */ (function () {
    function CausaMuerteCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    causaMuerte_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.causaMuerte_service = causaMuerte_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.opcionCausaMuerte = 0;
        this.validosCausaMuerte = {
            id: false,
            descripcion: true,
            fechaBaja: false,
            fechaRegistro: false,
            fechaActualizacion: false,
            tipoCausaMuerte: false,
            status: false,
            usuarioUltMov: false,
        };
        this.ocultarConjuntosCausaMuerte = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "causaMuerte", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.causaMuerteLazy = false;
        this.causaMuertePermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.causaMuerte = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"]();
        this.causaMuerteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.causaMuerteTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_causaMuertes = [];
        this.usuarioUltMovCausaMuerteUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovCausaMuerteUsuario = [];
        this.usuarioUltMovCausaMuerteUsuarioEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.causaMuerteSeleccion = this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
        this.configuracionCausaMuerte = new _shared_configurar_causa_muerte__WEBPACK_IMPORTED_MODULE_6__["ConfigurarCausaMuerte"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCausaMuerteUsuario, this);
        this.limpiarCampos();
    }
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "causaMuerteOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosCausaMuerte)
                return true;
            return !this.causaMuerteActualizar;
        },
        enumerable: true,
        configurable: true
    });
    CausaMuerteCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.causaMuerte && changes.causaMuerte.currentValue == null &&
            this.causaMuerte == null)
            this.causaMuerte = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"]();
        else {
            var aux = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"]();
            if (this.causaMuerte)
                aux.from(this.causaMuerte);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteSeleccion = this.causaMuerteGuardar = false;
                this.causaMuerteActualizar = this.causaMuerteEliminar = this.causaMuerteCancelar = true;
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
                this.causaMuerteSeleccion = this.causaMuerteAgregar = this.causaMuerteBuscar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
                this.causaMuerteGuardar = this.causaMuerteCancelar = true;
            }
        }
    };
    CausaMuerteCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "causaMuerte",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.causaMuertePermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CausaMuerteCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.causaMuertePermisos = true;
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoAtributo && permisos.causaMuerte.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.causaMuerte.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoConjunto && permisos.causaMuerte.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.causaMuerte.PermisoConjunto;
        }
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoTabla && permisos.causaMuerte.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.causaMuerte.PermisoTabla[0];
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
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CausaMuerteCrudComponent.prototype.evtGetUsuarioUltMovCausaMuerteUsuario = function (lista_usuarioUltMovCausaMuerteUsuario, obj) {
        obj.lista_usuarioUltMovCausaMuerteUsuario = lista_usuarioUltMovCausaMuerteUsuario;
        obj.actualizar_UsuarioUltMovCausaMuerteUsuario();
    };
    CausaMuerteCrudComponent.prototype.actualizar_UsuarioUltMovCausaMuerteUsuario = function () {
        if (this.usuarioUltMovCausaMuerteUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovCausaMuerteUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovCausaMuerteUsuarioEleccion.id) {
                    this.usuarioUltMovCausaMuerteUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    CausaMuerteCrudComponent.prototype.ngDoCheck = function () {
    };
    CausaMuerteCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosCausaMuerte['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosCausaMuerte['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaDescripcion", {
        get: function () {
            return this.validosCausaMuerte['descripcion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosCausaMuerte['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosCausaMuerte['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosCausaMuerte['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaTipoCausaMuerte", {
        get: function () {
            return this.validosCausaMuerte['tipoCausaMuerte'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosCausaMuerte['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosCausaMuerte['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaDescripcion && this.validaFechaBaja && this.validaFechaRegistro && this.validaFechaActualizacion && this.validaTipoCausaMuerte && this.validaStatus && this.validaUsuarioUltMov;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    CausaMuerteCrudComponent.prototype.obtenerCausaMuertes = function (lista, objeto) {
        objeto.lista_causaMuertes = lista;
        if (lista && lista.length > 0) {
            objeto.causaMuerte.from(lista[0]);
            objeto.evtCausaMuerteSeleccionado(objeto.causaMuerte);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    CausaMuerteCrudComponent.prototype.evn_lazy_causaMuerte = function (causaMuerte, objeto) {
        objeto.causaMuerte = causaMuerte;
        objeto.causaMuerteChange.emit(objeto.causaMuerte);
        objeto.configuarCombosObjetos();
        objeto.causaMuerteLazy = true;
    };
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "datosReporteCausaMuerteWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.causaMuerteActualizar && this.causaMuerteLazy && this.globalesService.preporteWord(this, "causaMuerte"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "datosReporteCausaMuerteExcel", {
        get: function () {
            return !(this.causaMuerteActualizar && this.causaMuerteLazy && this.globalesService.preporteExcel(this, "causaMuerte"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CausaMuerteCrudComponent.prototype, "datosReporteCausaMuertePdf", {
        get: function () {
            return !(this.causaMuerteActualizar && this.causaMuerteLazy && this.globalesService.preportePdf(this, "causaMuerte"));
        },
        enumerable: true,
        configurable: true
    });
    CausaMuerteCrudComponent.prototype.reporteCausaMuerteExcel = function () {
        var nombre = "CausaMuerte.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "causaMuerte": this.causaMuerte };
        parametros["plantilla"] = "CausaMuerte.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    CausaMuerteCrudComponent.prototype.reporteCausaMuerteWord = function () {
        var nombre = "CausaMuerte.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "causaMuerte": this.causaMuerte };
        parametros["plantilla"] = "CausaMuerte.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    CausaMuerteCrudComponent.prototype.reporteCausaMuertePdf = function () {
        var nombre = "CausaMuerte.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "causaMuerte": this.causaMuerte };
        parametros["plantilla"] = "CausaMuerte.docx";
        parametros["salida"] = "CausaMuerte.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    CausaMuerteCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
        this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteCancelar = true;
    };
    CausaMuerteCrudComponent.prototype.buscarCausaMuerteFront = function () {
        this.accionesBuscar();
        var vcausaMuerte = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"]();
        vcausaMuerte.from(this.causaMuerte);
        this.configuracionCausaMuerte = new _shared_configurar_causa_muerte__WEBPACK_IMPORTED_MODULE_6__["ConfigurarCausaMuerte"]();
        this.configuracionCausaMuerte.permisosTabla = { "tabla": "causaMuerte", "permiso": 8 };
        this.configuracionCausaMuerte.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionCausaMuerte.causaMuerteConsulta = vcausaMuerte;
        this.permisosacciones();
        $("#buscarCausaMuerte_" + this.nombre).modal();
    };
    CausaMuerteCrudComponent.prototype.buscarCausaMuerteBack = function (causaMuerte) {
        this.causaMuerte_service.getCausaMuertesByDto(causaMuerte, this.eventoSrvCausaMuerteBuscar, this);
    };
    CausaMuerteCrudComponent.prototype.eventoSrvCausaMuerteBuscar = function (lista, objeto) {
        objeto.lista_causaMuertes = lista;
        if (lista && lista.length > 0) {
            objeto.causaMuerte = lista[0];
            objeto.causaMuerteLazy = false;
            objeto.causaMuerte_service.lazyCausaMuerte(objeto.causaMuerte, objeto.evn_lazy_causaMuerte, objeto);
        }
    };
    CausaMuerteCrudComponent.prototype.guardarCausaMuerteFront = function () {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarCausaMuerteBack(this.causaMuerte);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    CausaMuerteCrudComponent.prototype.guardarCausaMuerteBack = function (causaMuerte) {
        if (causaMuerte.usuarioUltMov == null)
            causaMuerte.usuarioUltMov = this.globalesService.dameUsuario();
        if (causaMuerte.status == null || causaMuerte.status == "")
            causaMuerte.status = 1;
        this.causaMuerte_service.guardarCausaMuerte(causaMuerte, this.eventoSrvCausaMuerteGuardar, this);
    };
    CausaMuerteCrudComponent.prototype.eventoSrvCausaMuerteGuardar = function (causaMuerte, obj) {
        obj.causaMuerte = causaMuerte;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"]();
        aux.from(causaMuerte);
        obj.causaMuerteChange.emit(aux);
        obj.causaMuerteTablaChange.emit(aux);
        obj.causaMuerteLazy = false;
        obj.causaMuerte_service.lazyCausaMuerte(obj.causaMuerte, obj.evn_lazy_causaMuerte, obj);
        obj.accionesActualizar();
    };
    CausaMuerteCrudComponent.prototype.actualizarCausaMuerteFront = function () {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarCausaMuerteBack(this.causaMuerte);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    CausaMuerteCrudComponent.prototype.actualizarCausaMuerteBack = function (causaMuerte) {
        causaMuerte.usuarioUltMov = this.globalesService.dameUsuario();
        this.causaMuerte_service.actualizarCausaMuerte(causaMuerte, this.eventoSrvCausaMuerteActualizar, this);
    };
    CausaMuerteCrudComponent.prototype.eventoSrvCausaMuerteActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.causaMuerteLazy = false;
            obj.causaMuerte_service.lazyCausaMuerte(obj.causaMuerte, obj.evn_lazy_causaMuerte, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.causaMuerte);
            obj.causaMuerteChange.emit(aux);
            obj.causaMuerteTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    CausaMuerteCrudComponent.prototype.eliminarCausaMuerteFront = function () {
        this.accion = 4;
        this.eliminarCausaMuerteBack(this.causaMuerte);
        this.permisosacciones();
        this.accionesBuscar();
    };
    CausaMuerteCrudComponent.prototype.eliminarCausaMuerteBack = function (causaMuerte) {
        causaMuerte.usuarioUltMov = this.globalesService.dameUsuario();
        this.causaMuerte_service.eliminarCausaMuerte(causaMuerte, this.eventoSrvCausaMuerteEliminar, this);
    };
    CausaMuerteCrudComponent.prototype.eventoSrvCausaMuerteEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.causaMuerte = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"]();
            obj.causaMuerteChange.emit(obj.causaMuerte);
            obj.causaMuerteTablaChange.emit(obj.causaMuerte);
            obj.limpiarCampos();
        }
    };
    CausaMuerteCrudComponent.prototype.cancelarCausaMuerteFront = function () {
        this.accion = 6;
        this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
        this.causaMuerteBuscar = this.causaMuerteAgregar = true;
        this.permisosacciones();
    };
    CausaMuerteCrudComponent.prototype.nuevoCausaMuerteFront = function () {
        this.accion = 2;
        bootbox.confirm({
            message: "¿Deseas limpiar los campos de ingreso?",
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
                this.causaMuerteSeleccion = this.causaMuerteAgregar = this.causaMuerteBuscar = this.causaMuerteActualizar = this.causaMuerteEliminar = false;
                this.causaMuerteGuardar = this.causaMuerteCancelar = true;
            }.bind(this)
        });
    };
    CausaMuerteCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovCausaMuerteUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCausaMuerteUsuario, this);
    };
    CausaMuerteCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    CausaMuerteCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteSeleccion = this.causaMuerteGuardar = false;
        this.causaMuerteActualizar = this.causaMuerteEliminar = this.causaMuerteCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    CausaMuerteCrudComponent.prototype.evtCausaMuerteSeleccionado = function (causaMuerte) {
        this.causaMuerte = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"]();
        this.causaMuerte.from(causaMuerte);
        this.causaMuerteLazy = false;
        this.causaMuerte_service.lazyCausaMuerte(this.causaMuerte, this.evn_lazy_causaMuerte, this);
        this.accion = 7;
        this.causaMuerteBuscar = this.causaMuerteAgregar = this.causaMuerteSeleccion = this.causaMuerteGuardar = false;
        this.causaMuerteActualizar = this.causaMuerteEliminar = this.causaMuerteCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarCausaMuerte_" + this.nombre).modal("hide");
    };
    CausaMuerteCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.causaMuerteSeleccion = this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false; // ******************** maquina
        this.causaMuerteBuscar = this.causaMuerteAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    CausaMuerteCrudComponent.prototype.permisosacciones = function () {
        if (this.causaMuerteBuscar)
            this.causaMuerteBuscar = this.globalesService.pbuscar(this, "causaMuerte");
        if (this.causaMuerteActualizar)
            this.causaMuerteActualizar = (this.globalesService.pacutalizar(this, "causaMuerte") && this.globalesService.pbuscar(this, "causaMuerte"));
        if (this.causaMuerteEliminar)
            this.causaMuerteEliminar = (this.globalesService.peliminar(this, "causaMuerte") && this.globalesService.pbuscar(this, "causaMuerte"));
        if (this.causaMuerteAgregar)
            this.causaMuerteAgregar = this.globalesService.pagregar(this, "causaMuerte");
    };
    CausaMuerteCrudComponent.prototype.permisosaccionesInicio = function () {
        this.causaMuerteSeleccion = this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false; // *************************** maquina
        this.causaMuerteBuscar = this.causaMuerteAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    CausaMuerteCrudComponent.prototype.limpiarCampos = function () {
        this.causaMuerte = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"]();
        this.usuarioUltMovCausaMuerteUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.causaMuerteChange.emit(this.causaMuerte);
        this.causaMuerteSeleccion = this.causaMuerteCancelar = this.causaMuerteGuardar = this.causaMuerteActualizar = this.causaMuerteEliminar = false; // *************************** maquina
        this.causaMuerteBuscar = this.causaMuerteAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CausaMuerteCrudComponent.prototype, "ocultarConjuntosCausaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CausaMuerteCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CausaMuerteCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaMuerteCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["CausaMuerte"])
    ], CausaMuerteCrudComponent.prototype, "causaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaMuerteCrudComponent.prototype, "causaMuerteChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaMuerteCrudComponent.prototype, "causaMuerteTablaChange", void 0);
    CausaMuerteCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-causa-muerte-crud',
            template: __webpack_require__(/*! ./causa-muerte-crud.component.html */ "./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.html"),
            styles: [__webpack_require__(/*! ./causa-muerte-crud.component.css */ "./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_5__["CausaMuerteService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_5__["CausaMuerteService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"]])
    ], CausaMuerteCrudComponent);
    return CausaMuerteCrudComponent;
}());



/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para causaMuerte-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionCausaMuerte.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_causaMuerte_{{nombregrid}}\">\n                <div id=\"grid_causaMuerte_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CausaMuerteListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaMuerteListKendoComponent", function() { return CausaMuerteListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/causa-muerte */ "./src/app/causa-muertes/shared/causa-muerte.ts");
/* harmony import */ var _shared_configurar_causa_muerte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-causa-muerte */ "./src/app/causa-muertes/shared/configurar-causa-muerte.ts");
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
var CausaMuerteListKendoComponent = /** @class */ (function () {
    function CausaMuerteListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.causaMuerteSeleccionado = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_3__["CausaMuerte"]();
        this.configuracionCausaMuerte = new _shared_configurar_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["ConfigurarCausaMuerte"]();
        this.nombregrid = "";
        this.evtCausaMuerteSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "causaMuerte";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'causaMuerte'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'causaMuerte'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    CausaMuerteListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionCausaMuerte.titulo.indexOf("Catálogo") != -1) {
            this.configuracionCausaMuerte.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    CausaMuerteListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionCausaMuerte && changes.configuracionCausaMuerte.currentValue &&
            (changes.configuracionCausaMuerte.previousValue instanceof _shared_configurar_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["ConfigurarCausaMuerte"])) {
            if (changes.configuracionCausaMuerte.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionCausaMuerte.currentValue.permisosAtributos;
            if (changes.configuracionCausaMuerte.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionCausaMuerte.currentValue.permisosTabla;
            if ($("#grid_causaMuerte_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    CausaMuerteListKendoComponent.prototype.ngOnInit = function () {
        self["grid_causaMuerte_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionCausaMuerte.permisosAtributos &&
            this.configuracionCausaMuerte.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "causaMuerte",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CausaMuerte'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CausaMuerte'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CausaMuerte'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionCausaMuerte.permisosAtributos)
            this.permisosAtributos = this.configuracionCausaMuerte.permisosAtributos;
        if (this.configuracionCausaMuerte.permisosTabla)
            this.permisosTabla = this.configuracionCausaMuerte.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CausaMuerteListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoAtributo && permisos.causaMuerte.PermisoAtributo.length > 0
            && !obj.configuracionCausaMuerte.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.causaMuerte.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.CausaMuerte.PermisoAtributo ;
        }
        if (permisos && permisos.causaMuerte && permisos.causaMuerte.PermisoTabla && permisos.causaMuerte.PermisoTabla.length > 0
            && !obj.configuracionCausaMuerte.permisosTabla) {
            obj.globalesService.evtTablas(permisos.causaMuerte.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.CausaMuerte.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CausaMuerteListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_causaMuerte_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    CausaMuerteListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionCausaMuerte.campoAgEl != null
            && this.configuracionCausaMuerte.causaMuerteConsulta
            && this.configuracionCausaMuerte.causaMuerteConsulta.isOk
            && !this.configuracionCausaMuerte.causaMuerteConsulta.isOk())
            return;
        if (this.configuracionCausaMuerte.causaMuerteConsulta) {
            if (!this.configuracionCausaMuerte.campoAgEl && this.configuracionCausaMuerte.causaMuerteConsulta instanceof _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_3__["CausaMuerte"])
                this.configuracionCausaMuerte.rutaLista = this.crudServiceBaseUrl + "/getCausaMuertesByDto";
            this.lista = this.configuracionCausaMuerte.lecturaP(completar, this.configuracionCausaMuerte.causaMuerteConsulta);
            if (this.configuracionCausaMuerte.campoAgEl) {
                this.rutaAgregar = this.configuracionCausaMuerte.agregarP(function () { }, this.configuracionCausaMuerte.campoAgEl);
                this.rutaEliminar = this.configuracionCausaMuerte.eliminarP(function () { }, this.configuracionCausaMuerte.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionCausaMuerte.agregarP(completar, this.configuracionCausaMuerte.causaMuerteConsulta);
                this.rutaEliminar = this.configuracionCausaMuerte.eliminarP(completar, this.configuracionCausaMuerte.causaMuerteConsulta);
            }
        }
        else {
            this.lista = this.configuracionCausaMuerte.lectura();
            this.rutaAgregar = this.configuracionCausaMuerte.agregar();
            this.rutaEliminar = this.configuracionCausaMuerte.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "causaMuerte", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "causaMuerte", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "causaMuerte", "tipoCausaMuerte")) {
            campos["tipoCausaMuerte"] = { editable: this.globalesService.aenable(this, "causaMuerte", "tipoCausaMuerte"), nullable: true };
        }
        if (this.globalesService.avisible(this, "causaMuerte", "descripcion")) {
            campos["descripcion"] = { editable: this.globalesService.aenable(this, "causaMuerte", "descripcion"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "causaMuerte", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "causaMuerte", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "causaMuerte", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "causaMuerte", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "causaMuerte", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "causaMuerte", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "causaMuerte", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "causaMuerte", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "causaMuerte", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "causaMuerte", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionCausaMuerte.rutaActualizar,
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
            if (self.configuracionCausaMuerte.campoAgEl) {
                if (self.configuracionCausaMuerte.tipocampoAgEl == "CausaMuerteCausaMuerte")
                    self.configuracionCausaMuerte.campoAgEl.causaMuerte2 = options.models[0];
                else
                    self.configuracionCausaMuerte.campoAgEl.causaMuerte = options.models[0];
                return JSON.stringify(self.configuracionCausaMuerte.campoAgEl);
            }
            else if (est.options[operation].data.models.causaMuerte) {
                est.options[operation].data.models.causaMuerte2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    CausaMuerteListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "causaMuerte", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "causaMuerte", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "causaMuerte", "tipoCausaMuerte")) {
            columnas.push({ field: "tipoCausaMuerte", title: this.globalesService.aetiqueta(this, "causaMuerte", "tipoCausaMuerte") });
        }
        if (this.globalesService.avisible(this, "causaMuerte", "descripcion")) {
            columnas.push({ field: "descripcion", title: this.globalesService.aetiqueta(this, "causaMuerte", "descripcion"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "causaMuerte", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "causaMuerte", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "causaMuerte", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "causaMuerte", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "causaMuerte", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "causaMuerte", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "causaMuerte", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "causaMuerte", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "causaMuerte", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "causaMuerte", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "causaMuerte"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "causaMuerte")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "causaMuerte")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "causaMuerte") && this.configuracionCausaMuerte.causaMuerteConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_causaMuerte_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_causaMuerte_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionCausaMuerte.altoComponente,
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
        this.grid = $("#grid_causaMuerte_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
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
    };
    CausaMuerteListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_causaMuerte_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.causaMuerteSeleccionado = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_3__["CausaMuerte"]();
        gridac.causaMuerteSeleccionado.from(dataItem);
        gridac.evtCausaMuerteSeleccionado.emit(gridac.causaMuerteSeleccionado);
        (gridac.causaMuerteSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_causa_muerte__WEBPACK_IMPORTED_MODULE_4__["ConfigurarCausaMuerte"])
    ], CausaMuerteListKendoComponent.prototype, "configuracionCausaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CausaMuerteListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("causaMuerteSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CausaMuerteListKendoComponent.prototype, "evtCausaMuerteSeleccionado", void 0);
    CausaMuerteListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-causa-muerte-list-kendo',
            template: __webpack_require__(/*! ./causa-muerte-list-kendo.component.html */ "./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./causa-muerte-list-kendo.component.css */ "./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], CausaMuerteListKendoComponent);
    return CausaMuerteListKendoComponent;
}());



/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: CausaMuerteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaMuerteRoutingModule", function() { return CausaMuerteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _causa_muertes_causa_muerte_list_kendo_causa_muerte_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component */ "./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.ts");
/* harmony import */ var _causa_muertes_causa_muerte_crud_causa_muerte_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../causa-muertes/causa-muerte-crud/causa-muerte-crud.component */ "./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.ts");
/* harmony import */ var _causa_muertes_causa_muerte_table_causa_muerte_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../causa-muertes/causa-muerte-table/causa-muerte-table.component */ "./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'causa-muerte-list-kendo', component: _causa_muertes_causa_muerte_list_kendo_causa_muerte_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["CausaMuerteListKendoComponent"] },
    { path: 'causa-muerte-crud', component: _causa_muertes_causa_muerte_crud_causa_muerte_crud_component__WEBPACK_IMPORTED_MODULE_3__["CausaMuerteCrudComponent"] },
    { path: 'causa-muerte-table', component: _causa_muertes_causa_muerte_table_causa_muerte_table_component__WEBPACK_IMPORTED_MODULE_4__["CausaMuerteTableComponent"] },
];
var CausaMuerteRoutingModule = /** @class */ (function () {
    function CausaMuerteRoutingModule() {
    }
    CausaMuerteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CausaMuerteRoutingModule);
    return CausaMuerteRoutingModule;
}());



/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_causaMuerte\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('causaMuerte','id')\" >{{aetiqueta('causaMuerte','id')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','tipoCausaMuerte')\" >{{aetiqueta('causaMuerte','tipoCausaMuerte')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','descripcion')\" >{{aetiqueta('causaMuerte','descripcion')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','fechaRegistro')\" >{{aetiqueta('causaMuerte','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','fechaActualizacion')\" >{{aetiqueta('causaMuerte','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','fechaBaja')\" >{{aetiqueta('causaMuerte','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','usuarioUltMov')\" >{{aetiqueta('causaMuerte','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','status')\" >{{aetiqueta('causaMuerte','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('causaMuerte','id')\" >{{aetiqueta('causaMuerte','id')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','tipoCausaMuerte')\" >{{aetiqueta('causaMuerte','tipoCausaMuerte')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','descripcion')\" >{{aetiqueta('causaMuerte','descripcion')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','fechaRegistro')\" >{{aetiqueta('causaMuerte','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','fechaActualizacion')\" >{{aetiqueta('causaMuerte','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','fechaBaja')\" >{{aetiqueta('causaMuerte','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','usuarioUltMov')\" >{{aetiqueta('causaMuerte','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('causaMuerte','status')\" >{{aetiqueta('causaMuerte','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-causa-muerte [class.hidden]=\"primero\" [(causaMuerte)]=\"causaMuerteSeleccionado\" (causaMuerteTablaChange)=\"cambio_causaMuerte($event)\"> </app-causa-muerte>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CausaMuerteTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaMuerteTableComponent", function() { return CausaMuerteTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/causa-muerte */ "./src/app/causa-muertes/shared/causa-muerte.ts");
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






var CausaMuerteTableComponent = /** @class */ (function () {
    function CausaMuerteTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "causaMuerte", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.causaMuerteSeleccionado = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__["CausaMuerte"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'causaMuerte'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    CausaMuerteTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'causaMuerte'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    CausaMuerteTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(CausaMuerteTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    CausaMuerteTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("causaMuerte", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("causaMuerte", "tipoCausaMuerte"))
            columnasNoVisibles.push(1);
        columnas.push({ "data": "tipoCausaMuerte" });
        if (!this.avisible("causaMuerte", "descripcion"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "descripcion" });
        if (!this.avisible("causaMuerte", "fechaRegistro"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("causaMuerte", "fechaActualizacion"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("causaMuerte", "fechaBaja"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("causaMuerte", "usuarioUltMov"))
            columnasNoVisibles.push(6);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("causaMuerte", "status"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("causaMuerte"))
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
        var tabla = $('#tabla_causaMuerte').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_causaMuerte_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.causaMuerteSeleccionado = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__["CausaMuerte"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "causaMuerte/getCausaMuertes",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_causaMuerte tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_causaMuerte').DataTable().row(this).data();
                self.causaMuerteSeleccionado = new _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__["CausaMuerte"]();
                self.causaMuerteSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_causaMuerte').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    CausaMuerteTableComponent.prototype.ngOnInit = function () {
    };
    CausaMuerteTableComponent.prototype.cambio_causaMuerte = function (causaMuerte) {
        $('#tabla_causaMuerte').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    CausaMuerteTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    CausaMuerteTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    CausaMuerteTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    CausaMuerteTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    CausaMuerteTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    CausaMuerteTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    CausaMuerteTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    CausaMuerteTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    CausaMuerteTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    CausaMuerteTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    CausaMuerteTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    CausaMuerteTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    CausaMuerteTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    CausaMuerteTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    CausaMuerteTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    CausaMuerteTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-causa-muerte-table',
            template: __webpack_require__(/*! ./causa-muerte-table.component.html */ "./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.html"),
            styles: [__webpack_require__(/*! ./causa-muerte-table.component.css */ "./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], CausaMuerteTableComponent);
    return CausaMuerteTableComponent;
}());



/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte.module.ts":
/*!******************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte.module.ts ***!
  \******************************************************/
/*! exports provided: CausaMuerteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaMuerteModule", function() { return CausaMuerteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _causa_muerte_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./causa-muerte-routing.module */ "./src/app/causa-muertes/causa-muerte-routing.module.ts");
/* harmony import */ var _causa_muerte_list_kendo_causa_muerte_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./causa-muerte-list-kendo/causa-muerte-list-kendo.component */ "./src/app/causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component.ts");
/* harmony import */ var _causa_muerte_crud_causa_muerte_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./causa-muerte-crud/causa-muerte-crud.component */ "./src/app/causa-muertes/causa-muerte-crud/causa-muerte-crud.component.ts");
/* harmony import */ var _causa_muerte_conjunto_causa_muerte_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./causa-muerte-conjunto/causa-muerte-conjunto.component */ "./src/app/causa-muertes/causa-muerte-conjunto/causa-muerte-conjunto.component.ts");
/* harmony import */ var _causa_muerte_causa_muerte_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./causa-muerte/causa-muerte.component */ "./src/app/causa-muertes/causa-muerte/causa-muerte.component.ts");
/* harmony import */ var _causa_muerte_table_causa_muerte_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./causa-muerte-table/causa-muerte-table.component */ "./src/app/causa-muertes/causa-muerte-table/causa-muerte-table.component.ts");
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











var CausaMuerteModule = /** @class */ (function () {
    function CausaMuerteModule(parentModule) {
        if (parentModule) {
            throw new Error('CausaMuerteModule is already loaded. Import it in the AppModule only');
        }
    }
    CausaMuerteModule_1 = CausaMuerteModule;
    CausaMuerteModule.forRoot = function () {
        return {
            ngModule: CausaMuerteModule_1,
            providers: []
        };
    };
    var CausaMuerteModule_1;
    CausaMuerteModule = CausaMuerteModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _causa_muerte_routing_module__WEBPACK_IMPORTED_MODULE_3__["CausaMuerteRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
            ],
            declarations: [
                _causa_muerte_list_kendo_causa_muerte_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["CausaMuerteListKendoComponent"],
                _causa_muerte_causa_muerte_component__WEBPACK_IMPORTED_MODULE_7__["CausaMuerteComponent"],
                _causa_muerte_crud_causa_muerte_crud_component__WEBPACK_IMPORTED_MODULE_5__["CausaMuerteCrudComponent"],
                _causa_muerte_conjunto_causa_muerte_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["CausaMuerteConjuntoComponent"],
                _causa_muerte_table_causa_muerte_table_component__WEBPACK_IMPORTED_MODULE_8__["CausaMuerteTableComponent"],
            ],
            exports: [
                _causa_muerte_list_kendo_causa_muerte_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["CausaMuerteListKendoComponent"],
                _causa_muerte_causa_muerte_component__WEBPACK_IMPORTED_MODULE_7__["CausaMuerteComponent"],
                _causa_muerte_crud_causa_muerte_crud_component__WEBPACK_IMPORTED_MODULE_5__["CausaMuerteCrudComponent"],
                _causa_muerte_conjunto_causa_muerte_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["CausaMuerteConjuntoComponent"],
                _causa_muerte_table_causa_muerte_table_component__WEBPACK_IMPORTED_MODULE_8__["CausaMuerteTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CausaMuerteModule])
    ], CausaMuerteModule);
    return CausaMuerteModule;
}());



/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte/causa-muerte.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte/causa-muerte.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte/causa-muerte.component.html":
/*!************************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte/causa-muerte.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\"     >\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h1>{{etiquetaGeneral}}</h1></div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                     <app-componente-identificador [componente]=\"'causaMuerte'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"causaMuerteBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCausaMuerte['id']\"\n                                                   [(dato)]=\"causaMuerte.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                     <app-componente-cadena [componente]=\"'causaMuerte'\"\n                                                   [atributo]=\"'tipoCausaMuerte'\"\n                                                   [buscar]=\"causaMuerteBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCausaMuerte['tipoCausaMuerte']\"\n                                                   [(dato)]=\"causaMuerte.tipoCausaMuerte\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena-larga [componente]=\"'causaMuerte'\"\n                                                   [atributo]=\"'descripcion'\"\n                                                   [buscar]=\"causaMuerteBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCausaMuerte['descripcion']\"\n                                                   [(dato)]=\"causaMuerte.descripcion\"   class=\"w-100\" >\n                    </app-componente-cadena-larga >\n                     <!-- <app-componente-fecha [componente]=\"'causaMuerte'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"causaMuerteBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCausaMuerte['fechaRegistro']\"\n                                                   [(dato)]=\"causaMuerte.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'causaMuerte'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"causaMuerteBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCausaMuerte['fechaActualizacion']\"\n                                                   [(dato)]=\"causaMuerte.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'causaMuerte'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"causaMuerteBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCausaMuerte['fechaBaja']\"\n                                                   [(dato)]=\"causaMuerte.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                    <div>\n                        <app-componente-objeto [componente]=\"'causaMuerte'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"causaMuerteBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosCausaMuerte['usuarioUltMov']\"\n                                               [(dato)]=\"causaMuerte.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosCausaMuerte\"\n                                               [opciones]=\"lista_usuarioUltMovCausaMuerte\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovCausaMuerteEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'causaMuerte','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"causaMuerte.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-radio [componente]=\"'causaMuerte'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"causaMuerteBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCausaMuerte['status']\"\n                                                   [(dato)]=\"causaMuerte.status\"   class=\"w-100\" >\n                    </app-componente-radio >  -->\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/causa-muertes/causa-muerte/causa-muerte.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/causa-muertes/causa-muerte/causa-muerte.component.ts ***!
  \**********************************************************************/
/*! exports provided: CausaMuerteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausaMuerteComponent", function() { return CausaMuerteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/causa-muerte */ "./src/app/causa-muertes/shared/causa-muerte.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CausaMuerteComponent = /** @class */ (function () {
    function CausaMuerteComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.causaMuerteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovCausaMuerteUsuarioEditar = false;
    }
    CausaMuerteComponent.prototype.actualizarCausaMuerte = function () {
        if (this.causaMuerte.id == null) {
            this.causaMuerteService.guardarCausaMuerte(this.causaMuerte, this.evtGuardar, this);
        }
        else {
            this.causaMuerteService.actualizarCausaMuerte(this.causaMuerte, this.evtActualiza, this);
        }
    };
    CausaMuerteComponent.prototype.evtGuardar = function (causaMuerte, obj) {
        obj.causaMuerte = causaMuerte;
        obj.causaMuerteChange.emit(obj.causaMuerte);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    CausaMuerteComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.causaMuerteChange.emit(obj.causaMuerte);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    CausaMuerteComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarCausaMuerte();
            }
        }
    };
    CausaMuerteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "causaMuerteBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "validosCausaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_causa_muerte__WEBPACK_IMPORTED_MODULE_1__["CausaMuerte"])
    ], CausaMuerteComponent.prototype, "causaMuerte", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "causaMuerteService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CausaMuerteComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "causaMuerteChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CausaMuerteComponent.prototype, "lista_usuarioUltMovCausaMuerteUsuario", void 0);
    CausaMuerteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-causa-muerte',
            template: __webpack_require__(/*! ./causa-muerte.component.html */ "./src/app/causa-muertes/causa-muerte/causa-muerte.component.html"),
            styles: [__webpack_require__(/*! ./causa-muerte.component.css */ "./src/app/causa-muertes/causa-muerte/causa-muerte.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CausaMuerteComponent);
    return CausaMuerteComponent;
}());



/***/ }),

/***/ "./src/app/causa-muertes/shared/configurar-causa-muerte.ts":
/*!*****************************************************************!*\
  !*** ./src/app/causa-muertes/shared/configurar-causa-muerte.ts ***!
  \*****************************************************************/
/*! exports provided: ConfigurarCausaMuerte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarCausaMuerte", function() { return ConfigurarCausaMuerte; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarCausaMuerte = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarCausaMuerte() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "causaMuerte";
        this.rutaLista = this.crudServiceBaseUrl + "/getCausaMuertes";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarCausaMuerte";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarCausaMuerte";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarCausaMuerte";
        this.titulo = "Catálogo CausaMuerte";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.causaMuerteConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarCausaMuerte.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarCausaMuerte.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarCausaMuerte.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarCausaMuerte.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarCausaMuerte.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarCausaMuerte.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarCausaMuerte;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-causa-muertes-causa-muerte-module~app-registro-extracciones-registro-extraccion-module~a~121e83d3.js.map