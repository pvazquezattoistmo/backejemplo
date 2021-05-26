(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-permiso-atributos-permiso-atributo-module"],{

/***/ "./src/app/permiso-atributos/permiso-atributo-conjunto/permiso-atributo-conjunto.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-conjunto/permiso-atributo-conjunto.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-conjunto/permiso-atributo-conjunto.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-conjunto/permiso-atributo-conjunto.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let permisoAtributo of listaPermisoAtributo \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+permisoAtributo.id}\"\n        (click)=\"elegir(permisoAtributo,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{permisoAtributo.id}}\">{{permisoAtributo.id}}</a>\n    </li>\n    <li *ngFor =  \"let permisoAtributo of listaPermisoAtributoN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+permisoAtributo.id}\"\n        (click)=\"elegir(permisoAtributo, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{permisoAtributo.id}}\">T-{{permisoAtributo.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let permisoAtributo of listaPermisoAtributo ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+permisoAtributo.id}\" id=\"tab-I-{{permisoAtributo.id}}\">\n\t\t\t<app-permiso-atributo [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [permisoAtributoBuscar]=\"permisoAtributoBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosPermisoAtributo]=\"validosPermisoAtributo\"  \n\t\t\t\t\t\t  [permisoAtributoService]=\"permisoAtributoService\" [(opcion)]=\"opcionPermisoAtributo\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(permisoAtributo)]=\"listaPermisoAtributo[i]\"  [ocultarConjuntos]=\"ocultarConjuntosPermisoAtributo\"\n                           [lista_usuarioUltMovPermisoAtributoUsuario]=\"lista_usuarioUltMovPermisoAtributoUsuario\" \n                           [lista_usuarioPermisoAtributoUsuario]=\"lista_usuarioPermisoAtributoUsuario\" \n                           [perfilesPermisoAtributoPerfilN]=\"perfilesPermisoAtributoPerfilN\"\n                           [lista_perfilesPermisoAtributoPerfil]=\"lista_perfilesPermisoAtributoPerfil\" \n                           [perfilService]=\"perfil_service\" \n                            [opcionperfilesPermisoAtributoPerfil]=\"opcionperfilesPermisoAtributoPerfil\" \n                            [validosperfilesPermisoAtributoPerfil]=\"validosperfilesPermisoAtributoPerfil\" \n                            [ocultarConjuntosperfilesPermisoAtributoPerfil]=\"ocultarConjuntosperfilesPermisoAtributoPerfil\" \n \n\t\t\t\t\t  >\n\t\t\t</app-permiso-atributo>\n        </div>\n        <div *ngFor = \"let permisoAtributo of listaPermisoAtributoN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+permisoAtributo.id}\" id=\"tab-N-{{permisoAtributo.id}}\">\n\t\t\t<app-permiso-atributo [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [permisoAtributoBuscar]=\"permisoAtributoBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosPermisoAtributo]=\"validosPermisoAtributo\"  \n\t\t\t\t\t\t  [permisoAtributoService]=\"permisoAtributoService\" [(opcion)]=\"opcionPermisoAtributo\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(permisoAtributo)]=\"listaPermisoAtributoN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosPermisoAtributo\"\n                           [lista_usuarioUltMovPermisoAtributoUsuario]=\"lista_usuarioUltMovPermisoAtributoUsuario\" \n                           [lista_usuarioPermisoAtributoUsuario]=\"lista_usuarioPermisoAtributoUsuario\" \n                           [perfilesPermisoAtributoPerfilN]=\"perfilesPermisoAtributoPerfilN\"\n                           [lista_perfilesPermisoAtributoPerfil]=\"lista_perfilesPermisoAtributoPerfil\" \n                           [perfilService]=\"perfil_service\" \n                            [opcionperfilesPermisoAtributoPerfil]=\"opcionperfilesPermisoAtributoPerfil\" \n                            [validosperfilesPermisoAtributoPerfil]=\"validosperfilesPermisoAtributoPerfil\" \n                            [ocultarConjuntosperfilesPermisoAtributoPerfil]=\"ocultarConjuntosperfilesPermisoAtributoPerfil\" \n \n\t\t\t\t\t  >\n\t\t\t</app-permiso-atributo>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-conjunto/permiso-atributo-conjunto.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-conjunto/permiso-atributo-conjunto.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PermisoAtributoConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoAtributoConjuntoComponent", function() { return PermisoAtributoConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/permiso-atributo */ "./src/app/permiso-atributos/shared/permiso-atributo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermisoAtributoConjuntoComponent = /** @class */ (function () {
    function PermisoAtributoConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarPerfilesPermisoAtributoPerfil = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovPermisoAtributoUsuarioEditar = false;
        this.usuarioPermisoAtributoUsuarioEditar = false;
        this.listaPermisoAtributoN = [];
        this.listaPermisoAtributo = [];
        this.listaPermisoAtributoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoAtributoN = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__["PermisoAtributo"]();
        this.permisoAtributoNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    PermisoAtributoConjuntoComponent.prototype.agregarPerfilesPermisoAtributoPerfil = function () { this.evtAgregarPerfilesPermisoAtributoPerfil.emit(); };
    ;
    PermisoAtributoConjuntoComponent.prototype.elegir = function (permisoAtributo, tipo) {
        this.idSeleccionado = tipo + "-" + permisoAtributo.id;
        this.permisoAtributoN = permisoAtributo;
    };
    PermisoAtributoConjuntoComponent.prototype.ngOnInit = function () {
        this.permisoAtributoN.id = 0;
        this.listaPermisoAtributoN.push(Object.assign({}, this.permisoAtributoN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    PermisoAtributoConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__["PermisoAtributo"]();
        pg.id = this.listaPermisoAtributoN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaPermisoAtributoN.push(pg);
    };
    PermisoAtributoConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaPermisoAtributo; _i < _a.length; _i++) {
            var permisoAtributo = _a[_i];
            this.permisoAtributoService.actualizarPermisoAtributo(permisoAtributo, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaPermisoAtributoN; _b < _c.length; _b++) {
            var permisoAtributo = _c[_b];
            permisoAtributo.id = null;
            this.permisoAtributoService.guardarPermisoAtributo(permisoAtributo, this.evtGuardar, this);
        }
    };
    PermisoAtributoConjuntoComponent.prototype.evtGuardar = function (permisoAtributo, obj) {
        obj.agregados++;
        obj.listaPermisoAtributo.push(permisoAtributo);
        if (obj.agregados >= obj.listaPermisoAtributoN.length) {
            obj.permisoAtributoN = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__["PermisoAtributo"]();
            obj.listaPermisoAtributoN = [];
            obj.permisoAtributoN.id = 0;
            obj.idSeleccionado = "N-" + obj.permisoAtributoN.id;
            obj.listaPermisoAtributoN.push(Object.assign({}, obj.permisoAtributoN));
            obj.listaPermisoAtributoChange.emit(obj.listaPermisoAtributo);
        }
        if (obj.agregados >= obj.listaPermisoAtributoN.length &&
            obj.actualizados >= obj.listaPermisoAtributo.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    PermisoAtributoConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaPermisoAtributoN.length &&
                obj.actualizados >= obj.listaPermisoAtributo.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    PermisoAtributoConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], PermisoAtributoConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "permisoAtributoBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "validosPermisoAtributo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "ocultarConjuntosPermisoAtributo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "permisoAtributoService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PermisoAtributoConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "perfilesPermisoAtributoPerfilN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "perfilService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "lista_perfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "opcionperfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "validosperfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "evtAgregarPerfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "configuracionPerfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "ocultarConjuntosperfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "lista_usuarioUltMovPermisoAtributoUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "lista_usuarioPermisoAtributoUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PermisoAtributoConjuntoComponent.prototype, "listaPermisoAtributo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "listaPermisoAtributoChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__["PermisoAtributo"])
    ], PermisoAtributoConjuntoComponent.prototype, "permisoAtributoN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoConjuntoComponent.prototype, "permisoAtributoNChange", void 0);
    PermisoAtributoConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-atributo-conjunto',
            template: __webpack_require__(/*! ./permiso-atributo-conjunto.component.html */ "./src/app/permiso-atributos/permiso-atributo-conjunto/permiso-atributo-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./permiso-atributo-conjunto.component.css */ "./src/app/permiso-atributos/permiso-atributo-conjunto/permiso-atributo-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PermisoAtributoConjuntoComponent);
    return PermisoAtributoConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-permiso-atributo [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n                           [permisoAtributoBuscar]=\"permisoAtributoBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosPermisoAtributo]=\"validosPermisoAtributo\"\n                           [permisoAtributoService]=\"permisoAtributo_service\"\n                           [(opcion)]=\"opcionPermisoAtributo\"\n                           [globalesService]=\"globalesService\"\n                           [(permisoAtributo)]=\"permisoAtributo\"\n                           [ocultarConjuntos]=\"ocultarConjuntosPermisoAtributo\"\n                           [lista_usuarioUltMovPermisoAtributoUsuario]=\"lista_usuarioUltMovPermisoAtributoUsuario\"\n                           [lista_usuarioPermisoAtributoUsuario]=\"lista_usuarioPermisoAtributoUsuario\"\n                           [perfilesPermisoAtributoPerfilN]=\"perfilesPermisoAtributoPerfilN\"\n                           [lista_perfilesPermisoAtributoPerfil]=\"lista_perfilesPermisoAtributoPerfil\"\n                           [perfilService]=\"perfil_service\"\n\n\t\t\t\t\t  >\n\n        </app-permiso-atributo>\n\n        <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!permisoAtributoBuscar\" (click)=\"buscarPermisoAtributoFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!permisoAtributoAgregar\" (click)=\"nuevoPermisoAtributoFront()\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!permisoAtributoActualizar\" (click)=\"actualizarPermisoAtributoFront()\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!permisoAtributoEliminar\" (click)=\"eliminarPermisoAtributoFront()\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!permisoAtributoGuardar\" (click)=\"guardarPermisoAtributoFront()\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!permisoAtributoCancelar\" (click)=\"cancelarPermisoAtributoFront()\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReportePermisoAtributoWord\" (click)=\"reportePermisoAtributoWord()\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReportePermisoAtributoExcel\" (click)=\"reportePermisoAtributoExcel()\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReportePermisoAtributoPdf\" (click)=\"reportePermisoAtributoPdf()\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"buscarPermisoAtributo_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-permiso-atributo-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionPermisoAtributo]=\"configuracionPermisoAtributo\"  (permisoAtributoSeleccionado) =\"evtPermisoAtributoSeleccionado($event)\">  </app-permiso-atributo-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PermisoAtributoCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoAtributoCrudComponent", function() { return PermisoAtributoCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/permiso-atributo */ "./src/app/permiso-atributos/shared/permiso-atributo.ts");
/* harmony import */ var _shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/permiso-atributo.service */ "./src/app/permiso-atributos/shared/permiso-atributo.service.ts");
/* harmony import */ var _shared_configurar_permiso_atributo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-permiso-atributo */ "./src/app/permiso-atributos/shared/configurar-permiso-atributo.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil */ "./src/app/perfiles/shared/perfil.ts");
/* harmony import */ var _shared_permiso_atributo_perfil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/permiso-atributo-perfil */ "./src/app/permiso-atributos/shared/permiso-atributo-perfil.ts");
/* harmony import */ var _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../perfiles/shared/configurar-perfil */ "./src/app/perfiles/shared/configurar-perfil.ts");
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






var PermisoAtributoCrudComponent = /** @class */ (function () {
    function PermisoAtributoCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    permisoAtributo_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.permisoAtributo_service = permisoAtributo_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.opcionPermisoAtributo = 0;
        this.validosPermisoAtributo = {
            id: false,
            etiqueta: false,
            validacion: false,
            permiso: false,
            tabla: false,
            atributo: false,
            mensaje: false,
            status: false,
            usuarioUltMov: false,
            usuario: false,
        };
        this.ocultarConjuntosPermisoAtributo = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "permisoAtributo", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.permisoAtributoLazy = false;
        this.permisoAtributoPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoAtributo = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"]();
        this.permisoAtributoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoAtributoTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_permisoAtributos = [];
        this.usuarioUltMovPermisoAtributoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovPermisoAtributoUsuario = [];
        this.usuarioUltMovPermisoAtributoUsuarioEditar = false;
        this.usuarioPermisoAtributoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioPermisoAtributoUsuario = [];
        this.usuarioPermisoAtributoUsuarioEditar = false;
        this.perfilesPermisoAtributoPerfilEleccion = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        this.perfilesPermisoAtributoPerfilN = [];
        this.lista_perfilesPermisoAtributoPerfil = [];
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.permisoAtributoSeleccion = this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
        this.configuracionPermisoAtributo = new _shared_configurar_permiso_atributo__WEBPACK_IMPORTED_MODULE_6__["ConfigurarPermisoAtributo"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoAtributoUsuario, this);
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoAtributoUsuario, this);
        this.configuracionPerfilesPermisoAtributoPerfil = new _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_16__["ConfigurarPerfil"]();
        this.perfil_service.getPerfiles(this.evtGetPerfilesPermisoAtributoPerfil, this);
        this.limpiarCampos();
    }
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "permisoAtributoOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosPermisoAtributo)
                return true;
            return !this.permisoAtributoActualizar;
        },
        enumerable: true,
        configurable: true
    });
    PermisoAtributoCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.permisoAtributo && changes.permisoAtributo.currentValue == null &&
            this.permisoAtributo == null)
            this.permisoAtributo = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"]();
        else {
            var aux = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"]();
            if (this.permisoAtributo)
                aux.from(this.permisoAtributo);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoSeleccion = this.permisoAtributoGuardar = false;
                this.permisoAtributoActualizar = this.permisoAtributoEliminar = this.permisoAtributoCancelar = true;
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
                this.permisoAtributoSeleccion = this.permisoAtributoAgregar = this.permisoAtributoBuscar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
                this.permisoAtributoGuardar = this.permisoAtributoCancelar = true;
            }
        }
    };
    PermisoAtributoCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "permisoAtributo",
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
        this.permisoAtributoPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    PermisoAtributoCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.permisoAtributoPermisos = true;
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoAtributo && permisos.permisoAtributo.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.permisoAtributo.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoConjunto && permisos.permisoAtributo.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.permisoAtributo.PermisoConjunto;
        }
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoTabla && permisos.permisoAtributo.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.permisoAtributo.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo && permisos.perfil.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.perfil.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.perfil.PermisoAtributo);
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo && permisos.perfil.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.perfil.PermisoConjunto);
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoTabla && permisos.perfil.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.perfil.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.perfil.PermisoTabla[0] );
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
    PermisoAtributoCrudComponent.prototype.configurarListaPerfilesPermisoAtributoPerfil = function () {
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosPerfil = Object.assign([], this.configuracionPerfilesPermisoAtributoPerfil.permisosAtributos);
        var tablaPerfil = Object.assign({}, this.configuracionPerfilesPermisoAtributoPerfil.permisosTabla);
        this.configuracionPerfilesPermisoAtributoPerfil = new _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_16__["ConfigurarPerfil"]();
        this.configuracionPerfilesPermisoAtributoPerfil.permisosAtributos = atributosPerfil;
        this.configuracionPerfilesPermisoAtributoPerfil.permisosTabla = tablaPerfil;
        this.configuracionPerfilesPermisoAtributoPerfil.permisosTabla.permiso = this.configuracionPerfilesPermisoAtributoPerfil.permisosTabla.permiso & 247;
        this.configuracionPerfilesPermisoAtributoPerfil.titulo = "Agregar " + this.globalesService.cetiqueta(this, "permisoAtributo", "perfilesPermisoAtributoPerfil");
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    };
    PermisoAtributoCrudComponent.prototype.configurarListaPerfilesPermisoAtributoPerfilPos = function () {
        this.configuracionPerfilesPermisoAtributoPerfil.rutaLista = this.configuracionPerfilesPermisoAtributoPerfil.crudServiceBaseUrl + "/getPerfiles";
        this.configuracionPerfilesPermisoAtributoPerfil.rutaAgregar = this.configuracionPerfilesPermisoAtributoPerfil.crudServiceBaseUrl + "/addPerfiles";
        this.configuracionPerfilesPermisoAtributoPerfil.rutaEliminar = this.configuracionPerfilesPermisoAtributoPerfil.crudServiceBaseUrl + "/removePerfiles";
        var vperfil = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        vperfil.from(this.perfilesPermisoAtributoPerfilEleccion);
        this.configuracionPerfilesPermisoAtributoPerfil.perfilConsulta = vperfil.toDto();
        this.configuracionPerfilesPermisoAtributoPerfil.tipocampoAgEl = "PermisoAtributoPerfil";
        this.configuracionPerfilesPermisoAtributoPerfil.campoAgEl = new _shared_permiso_atributo_perfil__WEBPACK_IMPORTED_MODULE_15__["PermisoAtributoPerfil"]();
        this.configuracionPerfilesPermisoAtributoPerfil.campoAgEl.perfil = vperfil.toDto();
    };
    PermisoAtributoCrudComponent.prototype.evtGetUsuarioUltMovPermisoAtributoUsuario = function (lista_usuarioUltMovPermisoAtributoUsuario, obj) {
        obj.lista_usuarioUltMovPermisoAtributoUsuario = lista_usuarioUltMovPermisoAtributoUsuario;
        obj.actualizar_UsuarioUltMovPermisoAtributoUsuario();
    };
    PermisoAtributoCrudComponent.prototype.evtGetUsuarioPermisoAtributoUsuario = function (lista_usuarioPermisoAtributoUsuario, obj) {
        obj.lista_usuarioPermisoAtributoUsuario = lista_usuarioPermisoAtributoUsuario;
        obj.actualizar_UsuarioPermisoAtributoUsuario();
    };
    PermisoAtributoCrudComponent.prototype.evtGetPerfilesPermisoAtributoPerfil = function (lista_perfilesPermisoAtributoPerfil, obj) {
        obj.lista_perfilesPermisoAtributoPerfil = lista_perfilesPermisoAtributoPerfil;
    };
    PermisoAtributoCrudComponent.prototype.actualizar_UsuarioUltMovPermisoAtributoUsuario = function () {
        if (this.usuarioUltMovPermisoAtributoUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovPermisoAtributoUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovPermisoAtributoUsuarioEleccion.id) {
                    this.usuarioUltMovPermisoAtributoUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    PermisoAtributoCrudComponent.prototype.actualizar_UsuarioPermisoAtributoUsuario = function () {
        if (this.usuarioPermisoAtributoUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioPermisoAtributoUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioPermisoAtributoUsuarioEleccion.id) {
                    this.usuarioPermisoAtributoUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    PermisoAtributoCrudComponent.prototype.ngDoCheck = function () {
    };
    PermisoAtributoCrudComponent.prototype.agregarPerfilesPermisoAtributoPerfil = function () {
        var permisoAtributoPerfil = new _shared_permiso_atributo_perfil__WEBPACK_IMPORTED_MODULE_15__["PermisoAtributoPerfil"]();
        permisoAtributoPerfil.permisoAtributo = this.permisoAtributo;
        permisoAtributoPerfil.perfil = this.perfilesPermisoAtributoPerfilEleccion;
        this.permisoAtributo_service.addPerfiles(permisoAtributoPerfil, this.evtAgregarPerfilesPermisoAtributoPerfil, this);
    };
    PermisoAtributoCrudComponent.prototype.evtAgregarPerfilesPermisoAtributoPerfil = function (respuesta, obj) {
        if (respuesta) {
            obj.configurarListaPerfilesPermisoAtributoPerfil();
            obj.configurarListaPerfilesPermisoAtributoPerfilPos();
            bootbox.alert("Perfil agregada con �xito");
        }
    };
    PermisoAtributoCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosPermisoAtributo['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosPermisoAtributo['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaEtiqueta", {
        get: function () {
            return this.validosPermisoAtributo['etiqueta'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaValidacion", {
        get: function () {
            return this.validosPermisoAtributo['validacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaPermiso", {
        get: function () {
            return this.validosPermisoAtributo['permiso'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaTabla", {
        get: function () {
            return this.validosPermisoAtributo['tabla'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaAtributo", {
        get: function () {
            return this.validosPermisoAtributo['atributo'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaMensaje", {
        get: function () {
            return this.validosPermisoAtributo['mensaje'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosPermisoAtributo['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosPermisoAtributo['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaUsuario", {
        get: function () {
            return this.validosPermisoAtributo['usuario'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaEtiqueta && this.validaValidacion && this.validaPermiso && this.validaTabla && this.validaAtributo && this.validaMensaje && this.validaStatus && this.validaUsuarioUltMov && this.validaUsuario;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    PermisoAtributoCrudComponent.prototype.obtenerPermisoAtributos = function (lista, objeto) {
        objeto.lista_permisoAtributos = lista;
        if (lista && lista.length > 0) {
            objeto.permisoAtributo.from(lista[0]);
            objeto.evtPermisoAtributoSeleccionado(objeto.permisoAtributo);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    PermisoAtributoCrudComponent.prototype.evn_lazy_permisoAtributo = function (permisoAtributo, objeto) {
        objeto.permisoAtributo = permisoAtributo;
        objeto.permisoAtributoChange.emit(objeto.permisoAtributo);
        objeto.configuarCombosObjetos();
        objeto.permisoAtributoLazy = true;
    };
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "datosReportePermisoAtributoWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.permisoAtributoActualizar && this.permisoAtributoLazy && this.globalesService.preporteWord(this, "permisoAtributo"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "datosReportePermisoAtributoExcel", {
        get: function () {
            return !(this.permisoAtributoActualizar && this.permisoAtributoLazy && this.globalesService.preporteExcel(this, "permisoAtributo"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoAtributoCrudComponent.prototype, "datosReportePermisoAtributoPdf", {
        get: function () {
            return !(this.permisoAtributoActualizar && this.permisoAtributoLazy && this.globalesService.preportePdf(this, "permisoAtributo"));
        },
        enumerable: true,
        configurable: true
    });
    PermisoAtributoCrudComponent.prototype.reportePermisoAtributoExcel = function () {
        var nombre = "PermisoAtributo.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "permisoAtributo": this.permisoAtributo };
        parametros["plantilla"] = "PermisoAtributo.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    PermisoAtributoCrudComponent.prototype.reportePermisoAtributoWord = function () {
        var nombre = "PermisoAtributo.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "permisoAtributo": this.permisoAtributo };
        parametros["plantilla"] = "PermisoAtributo.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    PermisoAtributoCrudComponent.prototype.reportePermisoAtributoPdf = function () {
        var nombre = "PermisoAtributo.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "permisoAtributo": this.permisoAtributo };
        parametros["plantilla"] = "PermisoAtributo.docx";
        parametros["salida"] = "PermisoAtributo.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    PermisoAtributoCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoCancelar = true;
    };
    PermisoAtributoCrudComponent.prototype.buscarPermisoAtributoFront = function () {
        this.accionesBuscar();
        var vpermisoAtributo = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"]();
        vpermisoAtributo.from(this.permisoAtributo);
        this.configuracionPermisoAtributo = new _shared_configurar_permiso_atributo__WEBPACK_IMPORTED_MODULE_6__["ConfigurarPermisoAtributo"]();
        this.configuracionPermisoAtributo.permisosTabla = { "tabla": "permisoAtributo", "permiso": 8 };
        this.configuracionPermisoAtributo.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionPermisoAtributo.permisoAtributoConsulta = vpermisoAtributo;
        this.permisosacciones();
        $("#buscarPermisoAtributo_" + this.nombre).modal();
    };
    PermisoAtributoCrudComponent.prototype.buscarPermisoAtributoBack = function (permisoAtributo) {
        this.permisoAtributo_service.getPermisoAtributosByDto(permisoAtributo, this.eventoSrvPermisoAtributoBuscar, this);
    };
    PermisoAtributoCrudComponent.prototype.eventoSrvPermisoAtributoBuscar = function (lista, objeto) {
        objeto.lista_permisoAtributos = lista;
        if (lista && lista.length > 0) {
            objeto.permisoAtributo = lista[0];
            objeto.permisoAtributoLazy = false;
            objeto.permisoAtributo_service.lazyPermisoAtributo(objeto.permisoAtributo, objeto.evn_lazy_permisoAtributo, objeto);
        }
    };
    PermisoAtributoCrudComponent.prototype.guardarPermisoAtributoFront = function () {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarPermisoAtributoBack(this.permisoAtributo);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    PermisoAtributoCrudComponent.prototype.guardarPermisoAtributoBack = function (permisoAtributo) {
        if (permisoAtributo.usuarioUltMov == null)
            permisoAtributo.usuarioUltMov = this.globalesService.dameUsuario();
        if (permisoAtributo.status == null || permisoAtributo.status == "")
            permisoAtributo.status = 1;
        this.permisoAtributo_service.guardarPermisoAtributo(permisoAtributo, this.eventoSrvPermisoAtributoGuardar, this);
    };
    PermisoAtributoCrudComponent.prototype.eventoSrvPermisoAtributoGuardar = function (permisoAtributo, obj) {
        obj.permisoAtributo = permisoAtributo;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"]();
        aux.from(permisoAtributo);
        obj.permisoAtributoChange.emit(aux);
        obj.permisoAtributoTablaChange.emit(aux);
        obj.permisoAtributoLazy = false;
        obj.permisoAtributo_service.lazyPermisoAtributo(obj.permisoAtributo, obj.evn_lazy_permisoAtributo, obj);
        obj.accionesActualizar();
    };
    PermisoAtributoCrudComponent.prototype.actualizarPermisoAtributoFront = function () {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarPermisoAtributoBack(this.permisoAtributo);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    PermisoAtributoCrudComponent.prototype.actualizarPermisoAtributoBack = function (permisoAtributo) {
        permisoAtributo.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoAtributo_service.actualizarPermisoAtributo(permisoAtributo, this.eventoSrvPermisoAtributoActualizar, this);
    };
    PermisoAtributoCrudComponent.prototype.eventoSrvPermisoAtributoActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.permisoAtributoLazy = false;
            obj.permisoAtributo_service.lazyPermisoAtributo(obj.permisoAtributo, obj.evn_lazy_permisoAtributo, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.permisoAtributo);
            obj.permisoAtributoChange.emit(aux);
            obj.permisoAtributoTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    PermisoAtributoCrudComponent.prototype.eliminarPermisoAtributoFront = function () {
        this.accion = 4;
        this.eliminarPermisoAtributoBack(this.permisoAtributo);
        this.permisosacciones();
        this.accionesBuscar();
    };
    PermisoAtributoCrudComponent.prototype.eliminarPermisoAtributoBack = function (permisoAtributo) {
        permisoAtributo.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoAtributo_service.eliminarPermisoAtributo(permisoAtributo, this.eventoSrvPermisoAtributoEliminar, this);
    };
    PermisoAtributoCrudComponent.prototype.eventoSrvPermisoAtributoEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.permisoAtributo = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"]();
            obj.permisoAtributoChange.emit(obj.permisoAtributo);
            obj.permisoAtributoTablaChange.emit(obj.permisoAtributo);
            obj.limpiarCampos();
        }
    };
    PermisoAtributoCrudComponent.prototype.cancelarPermisoAtributoFront = function () {
        this.accion = 6;
        this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = true;
        this.permisosacciones();
    };
    PermisoAtributoCrudComponent.prototype.nuevoPermisoAtributoFront = function () {
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
                this.permisoAtributoSeleccion = this.permisoAtributoAgregar = this.permisoAtributoBuscar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false;
                this.permisoAtributoGuardar = this.permisoAtributoCancelar = true;
            }.bind(this)
        });
    };
    PermisoAtributoCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovPermisoAtributoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoAtributoUsuario, this);
        this.lista_usuarioPermisoAtributoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoAtributoUsuario, this);
    };
    PermisoAtributoCrudComponent.prototype.configurarTablasConjuntos = function () {
        this.configurarListaPerfilesPermisoAtributoPerfil();
        this.configurarListaPerfilesPermisoAtributoPerfilPos();
    };
    PermisoAtributoCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoSeleccion = this.permisoAtributoGuardar = false;
        this.permisoAtributoActualizar = this.permisoAtributoEliminar = this.permisoAtributoCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    PermisoAtributoCrudComponent.prototype.evtPermisoAtributoSeleccionado = function (permisoAtributo) {
        this.permisoAtributo = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"]();
        this.permisoAtributo.from(permisoAtributo);
        this.permisoAtributoLazy = false;
        this.permisoAtributo_service.lazyPermisoAtributo(this.permisoAtributo, this.evn_lazy_permisoAtributo, this);
        this.accion = 7;
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = this.permisoAtributoSeleccion = this.permisoAtributoGuardar = false;
        this.permisoAtributoActualizar = this.permisoAtributoEliminar = this.permisoAtributoCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarPermisoAtributo_" + this.nombre).modal("hide");
    };
    PermisoAtributoCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisoAtributoSeleccion = this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false; // ******************** maquina
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    PermisoAtributoCrudComponent.prototype.permisosacciones = function () {
        if (this.permisoAtributoBuscar)
            this.permisoAtributoBuscar = this.globalesService.pbuscar(this, "permisoAtributo");
        if (this.permisoAtributoActualizar)
            this.permisoAtributoActualizar = (this.globalesService.pacutalizar(this, "permisoAtributo") && this.globalesService.pbuscar(this, "permisoAtributo"));
        if (this.permisoAtributoEliminar)
            this.permisoAtributoEliminar = (this.globalesService.peliminar(this, "permisoAtributo") && this.globalesService.pbuscar(this, "permisoAtributo"));
        if (this.permisoAtributoAgregar)
            this.permisoAtributoAgregar = this.globalesService.pagregar(this, "permisoAtributo");
    };
    PermisoAtributoCrudComponent.prototype.permisosaccionesInicio = function () {
        this.permisoAtributoSeleccion = this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false; // *************************** maquina
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    PermisoAtributoCrudComponent.prototype.limpiarCampos = function () {
        this.permisoAtributo = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"]();
        this.usuarioUltMovPermisoAtributoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.usuarioPermisoAtributoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.perfilesPermisoAtributoPerfilEleccion = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        this.permisoAtributoChange.emit(this.permisoAtributo);
        this.permisoAtributoSeleccion = this.permisoAtributoCancelar = this.permisoAtributoGuardar = this.permisoAtributoActualizar = this.permisoAtributoEliminar = false; // *************************** maquina
        this.permisoAtributoBuscar = this.permisoAtributoAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PermisoAtributoCrudComponent.prototype, "ocultarConjuntosPermisoAtributo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PermisoAtributoCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PermisoAtributoCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributo"])
    ], PermisoAtributoCrudComponent.prototype, "permisoAtributo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoCrudComponent.prototype, "permisoAtributoChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoCrudComponent.prototype, "permisoAtributoTablaChange", void 0);
    PermisoAtributoCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-atributo-crud',
            template: __webpack_require__(/*! ./permiso-atributo-crud.component.html */ "./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.html"),
            styles: [__webpack_require__(/*! ./permiso-atributo-crud.component.css */ "./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
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
            _shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"]])
    ], PermisoAtributoCrudComponent);
    return PermisoAtributoCrudComponent;
}());



/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para permisoAtributo-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionPermisoAtributo.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_permisoAtributo_{{nombregrid}}\">\n                <div id=\"grid_permisoAtributo_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PermisoAtributoListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoAtributoListKendoComponent", function() { return PermisoAtributoListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/permiso-atributo */ "./src/app/permiso-atributos/shared/permiso-atributo.ts");
/* harmony import */ var _shared_configurar_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-permiso-atributo */ "./src/app/permiso-atributos/shared/configurar-permiso-atributo.ts");
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
var PermisoAtributoListKendoComponent = /** @class */ (function () {
    function PermisoAtributoListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.permisoAtributoSeleccionado = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_3__["PermisoAtributo"]();
        this.configuracionPermisoAtributo = new _shared_configurar_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["ConfigurarPermisoAtributo"]();
        this.nombregrid = "";
        this.evtPermisoAtributoSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "permisoAtributo";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoAtributo'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoAtributo'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    PermisoAtributoListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionPermisoAtributo.titulo.indexOf("Catálogo") != -1) {
            this.configuracionPermisoAtributo.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    PermisoAtributoListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionPermisoAtributo && changes.configuracionPermisoAtributo.currentValue &&
            (changes.configuracionPermisoAtributo.previousValue instanceof _shared_configurar_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["ConfigurarPermisoAtributo"])) {
            if (changes.configuracionPermisoAtributo.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionPermisoAtributo.currentValue.permisosAtributos;
            if (changes.configuracionPermisoAtributo.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionPermisoAtributo.currentValue.permisosTabla;
            if ($("#grid_permisoAtributo_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    PermisoAtributoListKendoComponent.prototype.ngOnInit = function () {
        self["grid_permisoAtributo_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionPermisoAtributo.permisosAtributos &&
            this.configuracionPermisoAtributo.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "permisoAtributo",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoAtributo'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoAtributo'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoAtributo'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionPermisoAtributo.permisosAtributos)
            this.permisosAtributos = this.configuracionPermisoAtributo.permisosAtributos;
        if (this.configuracionPermisoAtributo.permisosTabla)
            this.permisosTabla = this.configuracionPermisoAtributo.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    PermisoAtributoListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoAtributo && permisos.permisoAtributo.PermisoAtributo.length > 0
            && !obj.configuracionPermisoAtributo.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.permisoAtributo.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.PermisoAtributo.PermisoAtributo ;
        }
        if (permisos && permisos.permisoAtributo && permisos.permisoAtributo.PermisoTabla && permisos.permisoAtributo.PermisoTabla.length > 0
            && !obj.configuracionPermisoAtributo.permisosTabla) {
            obj.globalesService.evtTablas(permisos.permisoAtributo.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.PermisoAtributo.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    PermisoAtributoListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_permisoAtributo_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    PermisoAtributoListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionPermisoAtributo.campoAgEl != null
            && this.configuracionPermisoAtributo.permisoAtributoConsulta
            && this.configuracionPermisoAtributo.permisoAtributoConsulta.isOk
            && !this.configuracionPermisoAtributo.permisoAtributoConsulta.isOk())
            return;
        if (this.configuracionPermisoAtributo.permisoAtributoConsulta) {
            if (!this.configuracionPermisoAtributo.campoAgEl && this.configuracionPermisoAtributo.permisoAtributoConsulta instanceof _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_3__["PermisoAtributo"])
                this.configuracionPermisoAtributo.rutaLista = this.crudServiceBaseUrl + "/getPermisoAtributosByDto";
            this.lista = this.configuracionPermisoAtributo.lecturaP(completar, this.configuracionPermisoAtributo.permisoAtributoConsulta);
            if (this.configuracionPermisoAtributo.campoAgEl) {
                this.rutaAgregar = this.configuracionPermisoAtributo.agregarP(function () { }, this.configuracionPermisoAtributo.campoAgEl);
                this.rutaEliminar = this.configuracionPermisoAtributo.eliminarP(function () { }, this.configuracionPermisoAtributo.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionPermisoAtributo.agregarP(completar, this.configuracionPermisoAtributo.permisoAtributoConsulta);
                this.rutaEliminar = this.configuracionPermisoAtributo.eliminarP(completar, this.configuracionPermisoAtributo.permisoAtributoConsulta);
            }
        }
        else {
            this.lista = this.configuracionPermisoAtributo.lectura();
            this.rutaAgregar = this.configuracionPermisoAtributo.agregar();
            this.rutaEliminar = this.configuracionPermisoAtributo.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "permisoAtributo", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "permisoAtributo", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "tabla")) {
            campos["tabla"] = { editable: this.globalesService.aenable(this, "permisoAtributo", "tabla"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "atributo")) {
            campos["atributo"] = { editable: this.globalesService.aenable(this, "permisoAtributo", "atributo"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "permiso")) {
            campos["permiso"] = { editable: this.globalesService.aenable(this, "permisoAtributo", "permiso"), nullable: true };
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "permisoAtributo", "status"), nullable: true, defaultValue: "1" };
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "etiqueta")) {
            campos["etiqueta"] = { editable: this.globalesService.aenable(this, "permisoAtributo", "etiqueta"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "validacion")) {
            campos["validacion"] = { editable: this.globalesService.aenable(this, "permisoAtributo", "validacion"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "mensaje")) {
            campos["mensaje"] = { editable: this.globalesService.aenable(this, "permisoAtributo", "mensaje"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "usuario")) {
            campos["usuario"] = { editable: this.globalesService.aenable(this, "permisoAtributo", "usuario"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "permisoAtributo", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionPermisoAtributo.rutaActualizar,
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
            if (self.configuracionPermisoAtributo.campoAgEl) {
                if (self.configuracionPermisoAtributo.tipocampoAgEl == "PermisoAtributoPermisoAtributo")
                    self.configuracionPermisoAtributo.campoAgEl.permisoAtributo2 = options.models[0];
                else
                    self.configuracionPermisoAtributo.campoAgEl.permisoAtributo = options.models[0];
                return JSON.stringify(self.configuracionPermisoAtributo.campoAgEl);
            }
            else if (est.options[operation].data.models.permisoAtributo) {
                est.options[operation].data.models.permisoAtributo2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    PermisoAtributoListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "permisoAtributo", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "permisoAtributo", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "tabla")) {
            columnas.push({ field: "tabla", title: this.globalesService.aetiqueta(this, "permisoAtributo", "tabla"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "atributo")) {
            columnas.push({ field: "atributo", title: this.globalesService.aetiqueta(this, "permisoAtributo", "atributo"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "permiso")) {
            columnas.push({ field: "permiso", title: this.globalesService.aetiqueta(this, "permisoAtributo", "permiso") });
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "permisoAtributo", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "etiqueta")) {
            columnas.push({ field: "etiqueta", title: this.globalesService.aetiqueta(this, "permisoAtributo", "etiqueta"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "validacion")) {
            columnas.push({ field: "validacion", title: this.globalesService.aetiqueta(this, "permisoAtributo", "validacion"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "mensaje")) {
            columnas.push({ field: "mensaje", title: this.globalesService.aetiqueta(this, "permisoAtributo", "mensaje"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "usuario")) {
            columnas.push({ field: "usuario", title: this.globalesService.aetiqueta(this, "permisoAtributo", "usuario"), editor: usuarioDropDownEditor, template: " #if (usuario){#   #=usuario.password# # } # " });
        }
        if (this.globalesService.avisible(this, "permisoAtributo", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "permisoAtributo", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "permisoAtributo"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "permisoAtributo")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "permisoAtributo")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "permisoAtributo") && this.configuracionPermisoAtributo.permisoAtributoConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_permisoAtributo_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_permisoAtributo_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionPermisoAtributo.altoComponente,
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
        this.grid = $("#grid_permisoAtributo_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutausuario = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
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
        function usuarioDropDownEditor(container, options) {
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
                            url: rutausuario,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    PermisoAtributoListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_permisoAtributo_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.permisoAtributoSeleccionado = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_3__["PermisoAtributo"]();
        gridac.permisoAtributoSeleccionado.from(dataItem);
        gridac.evtPermisoAtributoSeleccionado.emit(gridac.permisoAtributoSeleccionado);
        (gridac.permisoAtributoSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_permiso_atributo__WEBPACK_IMPORTED_MODULE_4__["ConfigurarPermisoAtributo"])
    ], PermisoAtributoListKendoComponent.prototype, "configuracionPermisoAtributo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PermisoAtributoListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("permisoAtributoSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PermisoAtributoListKendoComponent.prototype, "evtPermisoAtributoSeleccionado", void 0);
    PermisoAtributoListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-atributo-list-kendo',
            template: __webpack_require__(/*! ./permiso-atributo-list-kendo.component.html */ "./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./permiso-atributo-list-kendo.component.css */ "./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], PermisoAtributoListKendoComponent);
    return PermisoAtributoListKendoComponent;
}());



/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PermisoAtributoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoAtributoRoutingModule", function() { return PermisoAtributoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _permiso_atributos_permiso_atributo_list_kendo_permiso_atributo_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component */ "./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.ts");
/* harmony import */ var _permiso_atributos_permiso_atributo_crud_permiso_atributo_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component */ "./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.ts");
/* harmony import */ var _permiso_atributos_permiso_atributo_table_permiso_atributo_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../permiso-atributos/permiso-atributo-table/permiso-atributo-table.component */ "./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'permiso-atributo-list-kendo', component: _permiso_atributos_permiso_atributo_list_kendo_permiso_atributo_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["PermisoAtributoListKendoComponent"] },
    { path: 'permiso-atributo-crud', component: _permiso_atributos_permiso_atributo_crud_permiso_atributo_crud_component__WEBPACK_IMPORTED_MODULE_3__["PermisoAtributoCrudComponent"] },
    { path: 'permiso-atributo-table', component: _permiso_atributos_permiso_atributo_table_permiso_atributo_table_component__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoTableComponent"] },
];
var PermisoAtributoRoutingModule = /** @class */ (function () {
    function PermisoAtributoRoutingModule() {
    }
    PermisoAtributoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PermisoAtributoRoutingModule);
    return PermisoAtributoRoutingModule;
}());



/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_permisoAtributo\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('permisoAtributo','id')\" >{{aetiqueta('permisoAtributo','id')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','tabla')\" >{{aetiqueta('permisoAtributo','tabla')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','atributo')\" >{{aetiqueta('permisoAtributo','atributo')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','permiso')\" >{{aetiqueta('permisoAtributo','permiso')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','status')\" >{{aetiqueta('permisoAtributo','status')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','etiqueta')\" >{{aetiqueta('permisoAtributo','etiqueta')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','validacion')\" >{{aetiqueta('permisoAtributo','validacion')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','mensaje')\" >{{aetiqueta('permisoAtributo','mensaje')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','usuario')\" >{{aetiqueta('permisoAtributo','usuario')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','usuarioUltMov')\" >{{aetiqueta('permisoAtributo','usuarioUltMov')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('permisoAtributo','id')\" >{{aetiqueta('permisoAtributo','id')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','tabla')\" >{{aetiqueta('permisoAtributo','tabla')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','atributo')\" >{{aetiqueta('permisoAtributo','atributo')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','permiso')\" >{{aetiqueta('permisoAtributo','permiso')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','status')\" >{{aetiqueta('permisoAtributo','status')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','etiqueta')\" >{{aetiqueta('permisoAtributo','etiqueta')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','validacion')\" >{{aetiqueta('permisoAtributo','validacion')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','mensaje')\" >{{aetiqueta('permisoAtributo','mensaje')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','usuario')\" >{{aetiqueta('permisoAtributo','usuario')}}</th>\n            <th [class.hidden]=\"!avisible('permisoAtributo','usuarioUltMov')\" >{{aetiqueta('permisoAtributo','usuarioUltMov')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-permiso-atributo [class.hidden]=\"primero\" [(permisoAtributo)]=\"permisoAtributoSeleccionado\" (permisoAtributoTablaChange)=\"cambio_permisoAtributo($event)\"> </app-permiso-atributo>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PermisoAtributoTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoAtributoTableComponent", function() { return PermisoAtributoTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/permiso-atributo */ "./src/app/permiso-atributos/shared/permiso-atributo.ts");
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






var PermisoAtributoTableComponent = /** @class */ (function () {
    function PermisoAtributoTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "permisoAtributo", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.permisoAtributoSeleccionado = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__["PermisoAtributo"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'permisoAtributo'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    PermisoAtributoTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'permisoAtributo'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    PermisoAtributoTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(PermisoAtributoTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    PermisoAtributoTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("permisoAtributo", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("permisoAtributo", "tabla"))
            columnasNoVisibles.push(1);
        columnas.push({ "data": "tabla" });
        if (!this.avisible("permisoAtributo", "atributo"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "atributo" });
        if (!this.avisible("permisoAtributo", "permiso"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "permiso" });
        if (!this.avisible("permisoAtributo", "status"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "status" });
        if (!this.avisible("permisoAtributo", "etiqueta"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "etiqueta" });
        if (!this.avisible("permisoAtributo", "validacion"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "validacion" });
        if (!this.avisible("permisoAtributo", "mensaje"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "mensaje" });
        if (!this.avisible("permisoAtributo", "usuario"))
            columnasNoVisibles.push(8);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuario)
                    return "<span style=\"cursor: pointer\">" + oObj.usuario.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("permisoAtributo", "usuarioUltMov"))
            columnasNoVisibles.push(9);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (self.pacutalizar("permisoAtributo"))
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
        var tabla = $('#tabla_permisoAtributo').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_permisoAtributo_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.permisoAtributoSeleccionado = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__["PermisoAtributo"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "permisoAtributo/getPermisoAtributos",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_permisoAtributo tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_permisoAtributo').DataTable().row(this).data();
                self.permisoAtributoSeleccionado = new _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__["PermisoAtributo"]();
                self.permisoAtributoSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_permisoAtributo').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    PermisoAtributoTableComponent.prototype.ngOnInit = function () {
    };
    PermisoAtributoTableComponent.prototype.cambio_permisoAtributo = function (permisoAtributo) {
        $('#tabla_permisoAtributo').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    PermisoAtributoTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    PermisoAtributoTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    PermisoAtributoTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    PermisoAtributoTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    PermisoAtributoTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    PermisoAtributoTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    PermisoAtributoTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    PermisoAtributoTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    PermisoAtributoTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    PermisoAtributoTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    PermisoAtributoTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    PermisoAtributoTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    PermisoAtributoTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    PermisoAtributoTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    PermisoAtributoTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    PermisoAtributoTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-atributo-table',
            template: __webpack_require__(/*! ./permiso-atributo-table.component.html */ "./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.html"),
            styles: [__webpack_require__(/*! ./permiso-atributo-table.component.css */ "./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], PermisoAtributoTableComponent);
    return PermisoAtributoTableComponent;
}());



/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo.module.ts ***!
  \**************************************************************/
/*! exports provided: PermisoAtributoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoAtributoModule", function() { return PermisoAtributoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _permiso_atributo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permiso-atributo-routing.module */ "./src/app/permiso-atributos/permiso-atributo-routing.module.ts");
/* harmony import */ var _permiso_atributo_list_kendo_permiso_atributo_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permiso-atributo-list-kendo/permiso-atributo-list-kendo.component */ "./src/app/permiso-atributos/permiso-atributo-list-kendo/permiso-atributo-list-kendo.component.ts");
/* harmony import */ var _permiso_atributo_crud_permiso_atributo_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permiso-atributo-crud/permiso-atributo-crud.component */ "./src/app/permiso-atributos/permiso-atributo-crud/permiso-atributo-crud.component.ts");
/* harmony import */ var _permiso_atributo_conjunto_permiso_atributo_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permiso-atributo-conjunto/permiso-atributo-conjunto.component */ "./src/app/permiso-atributos/permiso-atributo-conjunto/permiso-atributo-conjunto.component.ts");
/* harmony import */ var _permiso_atributo_permiso_atributo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permiso-atributo/permiso-atributo.component */ "./src/app/permiso-atributos/permiso-atributo/permiso-atributo.component.ts");
/* harmony import */ var _permiso_atributo_table_permiso_atributo_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./permiso-atributo-table/permiso-atributo-table.component */ "./src/app/permiso-atributos/permiso-atributo-table/permiso-atributo-table.component.ts");
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











var PermisoAtributoModule = /** @class */ (function () {
    function PermisoAtributoModule(parentModule) {
        if (parentModule) {
            throw new Error('PermisoAtributoModule is already loaded. Import it in the AppModule only');
        }
    }
    PermisoAtributoModule_1 = PermisoAtributoModule;
    PermisoAtributoModule.forRoot = function () {
        return {
            ngModule: PermisoAtributoModule_1,
            providers: []
        };
    };
    var PermisoAtributoModule_1;
    PermisoAtributoModule = PermisoAtributoModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _permiso_atributo_routing_module__WEBPACK_IMPORTED_MODULE_3__["PermisoAtributoRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
            ],
            declarations: [
                _permiso_atributo_list_kendo_permiso_atributo_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoListKendoComponent"],
                _permiso_atributo_permiso_atributo_component__WEBPACK_IMPORTED_MODULE_7__["PermisoAtributoComponent"],
                _permiso_atributo_crud_permiso_atributo_crud_component__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoCrudComponent"],
                _permiso_atributo_conjunto_permiso_atributo_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["PermisoAtributoConjuntoComponent"],
                _permiso_atributo_table_permiso_atributo_table_component__WEBPACK_IMPORTED_MODULE_8__["PermisoAtributoTableComponent"],
            ],
            exports: [
                _permiso_atributo_list_kendo_permiso_atributo_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoListKendoComponent"],
                _permiso_atributo_permiso_atributo_component__WEBPACK_IMPORTED_MODULE_7__["PermisoAtributoComponent"],
                _permiso_atributo_crud_permiso_atributo_crud_component__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoCrudComponent"],
                _permiso_atributo_conjunto_permiso_atributo_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["PermisoAtributoConjuntoComponent"],
                _permiso_atributo_table_permiso_atributo_table_component__WEBPACK_IMPORTED_MODULE_8__["PermisoAtributoTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [PermisoAtributoModule])
    ], PermisoAtributoModule);
    return PermisoAtributoModule;
}());



/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo/permiso-atributo.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo/permiso-atributo.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo/permiso-atributo.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo/permiso-atributo.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\"     >\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h1>{{etiquetaGeneral}}</h1></div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                     <app-componente-cadena [componente]=\"'permisoAtributo'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"permisoAtributoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoAtributo['id']\"\n                                                   [(dato)]=\"permisoAtributo.id\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoAtributo'\"\n                                                   [atributo]=\"'tabla'\"\n                                                   [buscar]=\"permisoAtributoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoAtributo['tabla']\"\n                                                   [(dato)]=\"permisoAtributo.tabla\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoAtributo'\"\n                                                   [atributo]=\"'atributo'\"\n                                                   [buscar]=\"permisoAtributoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoAtributo['atributo']\"\n                                                   [(dato)]=\"permisoAtributo.atributo\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoAtributo'\"\n                                                   [atributo]=\"'permiso'\"\n                                                   [buscar]=\"permisoAtributoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoAtributo['permiso']\"\n                                                   [(dato)]=\"permisoAtributo.permiso\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoAtributo'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"permisoAtributoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoAtributo['status']\"\n                                                   [(dato)]=\"permisoAtributo.status\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoAtributo'\"\n                                                   [atributo]=\"'etiqueta'\"\n                                                   [buscar]=\"permisoAtributoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoAtributo['etiqueta']\"\n                                                   [(dato)]=\"permisoAtributo.etiqueta\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoAtributo'\"\n                                                   [atributo]=\"'validacion'\"\n                                                   [buscar]=\"permisoAtributoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoAtributo['validacion']\"\n                                                   [(dato)]=\"permisoAtributo.validacion\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoAtributo'\"\n                                                   [atributo]=\"'mensaje'\"\n                                                   [buscar]=\"permisoAtributoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoAtributo['mensaje']\"\n                                                   [(dato)]=\"permisoAtributo.mensaje\"   class=\"w-100\" >\n                    </app-componente-cadena >\n<!--        <div [class.hidden]=\"OcultarConjuntosPermisoAtributo\" >\n            <div class=\"clearfix\"> </div>\n            <div class=\"form-group row\"  *ngIf=\"globalesService.cagregar(this,'permisoAtributo','perfilesPermisoAtributoPerfil')\" >\n              <div class=\"col-12 mr-ml-4\" >\n                <label for=\"sel1\">{{globalesService.cetiqueta(this,'permisoAtributo','perfilesPermisoAtributoPerfil')}}:</label>\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" [(ngModel)]=\"perfilesPermisoAtributoPerfilEleccion\" name=\"perfilesPermisoAtributoPerfilEleccion\">\n                            <option *ngFor = \"let perfilesPermisoAtributoPerfil of lista_perfilesPermisoAtributoPerfil\" [ngValue]=\"perfilesPermisoAtributoPerfil\"  >{{perfilesPermisoAtributoPerfil.nombre}}</option>\n                        </select>\n                        <span class=\"input-group-btn\">\n                             <button class=\"btn btn-default\" type=\"button\" (click)=\"agregarPerfilesPermisoAtributoPerfil()\" >Agregar</button>\n                        </span>\n                    </div>\n                </div>\n              </div>\n            </div>\n            app-perfil-list-kendo *ngIf=\"globalesService.cagregar(this,'permisoAtributo','perfilesPermisoAtributoPerfil') || globalesService.cagregarnuevo(this,'permisoAtributo','perfilesPermisoAtributoPerfil') \"\n                                 [nombregrid]=\"'perfilesPermisoAtributoPerfil_'+nombre\"  [configuracionPerfil]=\"configuracionPerfilesPermisoAtributoPerfil\" ></app-perfil-list-kendo\n        </div> -->\n                    <div>\n                        <app-componente-objeto [componente]=\"'permisoAtributo'\"\n                                               [atributo]=\"'usuario'\"\n                                               [buscar]=\"permisoAtributoBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosPermisoAtributo['usuario']\"\n                                               [(dato)]=\"permisoAtributo.usuario\"  class=\"w-100\"\n                                               [atributoVisible]=\"'username'\" >\n                        </app-componente-objeto >\n                       <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'permisoAtributo','usuario')\" >\n                                   <!--app-usuario-crud [nombre]=\"'usuario'\" [usuario]=\"permisoAtributo.usuario\" (usuarioChange)=\"evtUsuario($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioEditar\" ></app-usuario-crud-->\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <app-componente-objeto [componente]=\"'permisoAtributo'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"permisoAtributoBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosPermisoAtributo['usuarioUltMov']\"\n                                               [(dato)]=\"permisoAtributo.usuarioUltMov\"  class=\"w-100\"\n                                               [atributoVisible]=\"'username'\" >\n                        </app-componente-objeto >\n\t\t\t\t\t\t<div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'permisoAtributo','usuarioUltMov')\" >\n                                   <!--app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"permisoAtributo.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud-->\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/permiso-atributos/permiso-atributo/permiso-atributo.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/permiso-atributos/permiso-atributo/permiso-atributo.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PermisoAtributoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoAtributoComponent", function() { return PermisoAtributoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/permiso-atributo */ "./src/app/permiso-atributos/shared/permiso-atributo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermisoAtributoComponent = /** @class */ (function () {
    function PermisoAtributoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoAtributoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarPerfilesPermisoAtributoPerfil = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovPermisoAtributoUsuarioEditar = false;
        this.usuarioPermisoAtributoUsuarioEditar = false;
    }
    PermisoAtributoComponent.prototype.agregarPerfilesPermisoAtributoPerfil = function () { this.evtAgregarPerfilesPermisoAtributoPerfil.emit(); };
    ;
    PermisoAtributoComponent.prototype.actualizarPermisoAtributo = function () {
        if (this.permisoAtributo.id == null) {
            this.permisoAtributoService.guardarPermisoAtributo(this.permisoAtributo, this.evtGuardar, this);
        }
        else {
            this.permisoAtributoService.actualizarPermisoAtributo(this.permisoAtributo, this.evtActualiza, this);
        }
    };
    PermisoAtributoComponent.prototype.evtGuardar = function (permisoAtributo, obj) {
        obj.permisoAtributo = permisoAtributo;
        obj.permisoAtributoChange.emit(obj.permisoAtributo);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    PermisoAtributoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.permisoAtributoChange.emit(obj.permisoAtributo);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    PermisoAtributoComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarPermisoAtributo();
            }
        }
    };
    PermisoAtributoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "permisoAtributoBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "validosPermisoAtributo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_permiso_atributo__WEBPACK_IMPORTED_MODULE_1__["PermisoAtributo"])
    ], PermisoAtributoComponent.prototype, "permisoAtributo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "permisoAtributoService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PermisoAtributoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "permisoAtributoChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "perfilesPermisoAtributoPerfilN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "perfilService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "lista_perfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "opcionperfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "validosperfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "evtAgregarPerfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "configuracionPerfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "ocultarConjuntosperfilesPermisoAtributoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "lista_usuarioUltMovPermisoAtributoUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoAtributoComponent.prototype, "lista_usuarioPermisoAtributoUsuario", void 0);
    PermisoAtributoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-atributo',
            template: __webpack_require__(/*! ./permiso-atributo.component.html */ "./src/app/permiso-atributos/permiso-atributo/permiso-atributo.component.html"),
            styles: [__webpack_require__(/*! ./permiso-atributo.component.css */ "./src/app/permiso-atributos/permiso-atributo/permiso-atributo.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PermisoAtributoComponent);
    return PermisoAtributoComponent;
}());



/***/ }),

/***/ "./src/app/permiso-atributos/shared/configurar-permiso-atributo.ts":
/*!*************************************************************************!*\
  !*** ./src/app/permiso-atributos/shared/configurar-permiso-atributo.ts ***!
  \*************************************************************************/
/*! exports provided: ConfigurarPermisoAtributo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarPermisoAtributo", function() { return ConfigurarPermisoAtributo; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarPermisoAtributo = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarPermisoAtributo() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "permisoAtributo";
        this.rutaLista = this.crudServiceBaseUrl + "/getPermisoAtributos";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarPermisoAtributo";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarPermisoAtributo";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarPermisoAtributo";
        this.titulo = "Catálogo PermisoAtributo";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.permisoAtributoConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarPermisoAtributo.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarPermisoAtributo.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarPermisoAtributo.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarPermisoAtributo.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarPermisoAtributo.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarPermisoAtributo.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarPermisoAtributo;
}());



/***/ }),

/***/ "./src/app/permiso-atributos/shared/permiso-atributo-perfil.ts":
/*!*********************************************************************!*\
  !*** ./src/app/permiso-atributos/shared/permiso-atributo-perfil.ts ***!
  \*********************************************************************/
/*! exports provided: PermisoAtributoPerfil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoAtributoPerfil", function() { return PermisoAtributoPerfil; });
/**
 *
 * @author IstmoSoft
 */
var PermisoAtributoPerfil = /** @class */ (function () {
    // Constructores
    function PermisoAtributoPerfil() {
    }
    // Geters
    PermisoAtributoPerfil.prototype.getPermisoAtributo = function () {
        return this.permisoAtributo;
    };
    PermisoAtributoPerfil.prototype.setPermisoAtributo = function (permisoAtributo) {
        this.permisoAtributo = permisoAtributo;
    };
    // Seters
    PermisoAtributoPerfil.prototype.getPerfil = function () {
        return this.perfil;
    };
    PermisoAtributoPerfil.prototype.setPerfil = function (perfil) {
        this.perfil = perfil;
    };
    return PermisoAtributoPerfil;
}());



/***/ }),

/***/ "./src/app/permiso-atributos/shared/permiso-atributo.ts":
/*!**************************************************************!*\
  !*** ./src/app/permiso-atributos/shared/permiso-atributo.ts ***!
  \**************************************************************/
/*! exports provided: PermisoAtributo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoAtributo", function() { return PermisoAtributo; });
/**
 *
 * @author IstmoSoft
 */
var PermisoAtributo = /** @class */ (function () {
    // atributos fin
    function PermisoAtributo(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.etiqueta = null;
        this.validacion = null;
        this.permiso = null;
        this.tabla = null;
        this.atributo = null;
        this.mensaje = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.usuario = null;
        this.perfiles = null;
        if (source !== null)
            this.from(source);
    }
    PermisoAtributo.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.etiqueta)
            this.etiqueta = source.etiqueta;
        if (source.validacion)
            this.validacion = source.validacion;
        if (source.permiso)
            this.permiso = source.permiso;
        if (source.tabla)
            this.tabla = source.tabla;
        if (source.atributo)
            this.atributo = source.atributo;
        if (source.mensaje)
            this.mensaje = source.mensaje;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.usuario)
            this.usuario = source.usuario;
        if (source.perfiles)
            this.perfiles = source.perfiles;
    };
    PermisoAtributo.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.etiqueta)
            return true;
        if (this.validacion)
            return true;
        if (this.permiso)
            return true;
        if (this.tabla)
            return true;
        if (this.atributo)
            return true;
        if (this.mensaje)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.usuario)
            return true;
        if (this.perfiles && this.perfiles.length > 0)
            return true;
        return false;
    };
    PermisoAtributo.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.etiqueta != null && typeof this.etiqueta === 'string' && this.etiqueta.replace(/^\s+|\s+$/g, '') == "")
            this.etiqueta = null;
        if (this.validacion != null && typeof this.validacion === 'string' && this.validacion.replace(/^\s+|\s+$/g, '') == "")
            this.validacion = null;
        if (this.permiso != null && typeof this.permiso === 'string' && this.permiso.replace(/^\s+|\s+$/g, '') == "")
            this.permiso = null;
        if (this.tabla != null && typeof this.tabla === 'string' && this.tabla.replace(/^\s+|\s+$/g, '') == "")
            this.tabla = null;
        if (this.atributo != null && typeof this.atributo === 'string' && this.atributo.replace(/^\s+|\s+$/g, '') == "")
            this.atributo = null;
        if (this.mensaje != null && typeof this.mensaje === 'string' && this.mensaje.replace(/^\s+|\s+$/g, '') == "")
            this.mensaje = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.usuario != null && typeof this.usuario === 'string' && this.usuario.replace(/^\s+|\s+$/g, '') == "")
            this.usuario = null;
        if (this.perfiles != null && typeof this.perfiles === 'string' && this.perfiles.replace(/^\s+|\s+$/g, '') == "")
            this.perfiles = null;
        return this;
    };
    return PermisoAtributo;
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
//# sourceMappingURL=app-permiso-atributos-permiso-atributo-module.js.map