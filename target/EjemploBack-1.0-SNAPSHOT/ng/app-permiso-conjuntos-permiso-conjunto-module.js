(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-permiso-conjuntos-permiso-conjunto-module"],{

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-conjunto/permiso-conjunto-conjunto.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-conjunto/permiso-conjunto-conjunto.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-conjunto/permiso-conjunto-conjunto.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-conjunto/permiso-conjunto-conjunto.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let permisoConjunto of listaPermisoConjunto \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+permisoConjunto.id}\"\n        (click)=\"elegir(permisoConjunto,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{permisoConjunto.id}}\">{{permisoConjunto.id}}</a>\n    </li>\n    <li *ngFor =  \"let permisoConjunto of listaPermisoConjuntoN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+permisoConjunto.id}\"\n        (click)=\"elegir(permisoConjunto, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{permisoConjunto.id}}\">T-{{permisoConjunto.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let permisoConjunto of listaPermisoConjunto ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+permisoConjunto.id}\" id=\"tab-I-{{permisoConjunto.id}}\">\n\t\t\t<app-permiso-conjunto [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [permisoConjuntoBuscar]=\"permisoConjuntoBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosPermisoConjunto]=\"validosPermisoConjunto\"  \n\t\t\t\t\t\t  [permisoConjuntoService]=\"permisoConjuntoService\" [(opcion)]=\"opcionPermisoConjunto\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(permisoConjunto)]=\"listaPermisoConjunto[i]\"  [ocultarConjuntos]=\"ocultarConjuntosPermisoConjunto\"\n                           [lista_usuarioUltMovPermisoConjuntoUsuario]=\"lista_usuarioUltMovPermisoConjuntoUsuario\" \n                           [lista_usuarioPermisoConjuntoUsuario]=\"lista_usuarioPermisoConjuntoUsuario\" \n                           [perfilesPermisoConjuntoPerfilN]=\"perfilesPermisoConjuntoPerfilN\"\n                           [lista_perfilesPermisoConjuntoPerfil]=\"lista_perfilesPermisoConjuntoPerfil\" \n                           [perfilService]=\"perfil_service\" \n                            [opcionperfilesPermisoConjuntoPerfil]=\"opcionperfilesPermisoConjuntoPerfil\" \n                            [validosperfilesPermisoConjuntoPerfil]=\"validosperfilesPermisoConjuntoPerfil\" \n                            [ocultarConjuntosperfilesPermisoConjuntoPerfil]=\"ocultarConjuntosperfilesPermisoConjuntoPerfil\" \n \n\t\t\t\t\t  >\n\t\t\t</app-permiso-conjunto>\n        </div>\n        <div *ngFor = \"let permisoConjunto of listaPermisoConjuntoN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+permisoConjunto.id}\" id=\"tab-N-{{permisoConjunto.id}}\">\n\t\t\t<app-permiso-conjunto [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [permisoConjuntoBuscar]=\"permisoConjuntoBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosPermisoConjunto]=\"validosPermisoConjunto\"  \n\t\t\t\t\t\t  [permisoConjuntoService]=\"permisoConjuntoService\" [(opcion)]=\"opcionPermisoConjunto\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(permisoConjunto)]=\"listaPermisoConjuntoN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosPermisoConjunto\"\n                           [lista_usuarioUltMovPermisoConjuntoUsuario]=\"lista_usuarioUltMovPermisoConjuntoUsuario\" \n                           [lista_usuarioPermisoConjuntoUsuario]=\"lista_usuarioPermisoConjuntoUsuario\" \n                           [perfilesPermisoConjuntoPerfilN]=\"perfilesPermisoConjuntoPerfilN\"\n                           [lista_perfilesPermisoConjuntoPerfil]=\"lista_perfilesPermisoConjuntoPerfil\" \n                           [perfilService]=\"perfil_service\" \n                            [opcionperfilesPermisoConjuntoPerfil]=\"opcionperfilesPermisoConjuntoPerfil\" \n                            [validosperfilesPermisoConjuntoPerfil]=\"validosperfilesPermisoConjuntoPerfil\" \n                            [ocultarConjuntosperfilesPermisoConjuntoPerfil]=\"ocultarConjuntosperfilesPermisoConjuntoPerfil\" \n \n\t\t\t\t\t  >\n\t\t\t</app-permiso-conjunto>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-conjunto/permiso-conjunto-conjunto.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-conjunto/permiso-conjunto-conjunto.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PermisoConjuntoConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjuntoConjuntoComponent", function() { return PermisoConjuntoConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/permiso-conjunto */ "./src/app/permiso-conjuntos/shared/permiso-conjunto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermisoConjuntoConjuntoComponent = /** @class */ (function () {
    function PermisoConjuntoConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarPerfilesPermisoConjuntoPerfil = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovPermisoConjuntoUsuarioEditar = false;
        this.usuarioPermisoConjuntoUsuarioEditar = false;
        this.listaPermisoConjuntoN = [];
        this.listaPermisoConjunto = [];
        this.listaPermisoConjuntoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoConjuntoN = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__["PermisoConjunto"]();
        this.permisoConjuntoNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    PermisoConjuntoConjuntoComponent.prototype.agregarPerfilesPermisoConjuntoPerfil = function () { this.evtAgregarPerfilesPermisoConjuntoPerfil.emit(); };
    ;
    PermisoConjuntoConjuntoComponent.prototype.elegir = function (permisoConjunto, tipo) {
        this.idSeleccionado = tipo + "-" + permisoConjunto.id;
        this.permisoConjuntoN = permisoConjunto;
    };
    PermisoConjuntoConjuntoComponent.prototype.ngOnInit = function () {
        this.permisoConjuntoN.id = 0;
        this.listaPermisoConjuntoN.push(Object.assign({}, this.permisoConjuntoN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    PermisoConjuntoConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__["PermisoConjunto"]();
        pg.id = this.listaPermisoConjuntoN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaPermisoConjuntoN.push(pg);
    };
    PermisoConjuntoConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaPermisoConjunto; _i < _a.length; _i++) {
            var permisoConjunto = _a[_i];
            this.permisoConjuntoService.actualizarPermisoConjunto(permisoConjunto, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaPermisoConjuntoN; _b < _c.length; _b++) {
            var permisoConjunto = _c[_b];
            permisoConjunto.id = null;
            this.permisoConjuntoService.guardarPermisoConjunto(permisoConjunto, this.evtGuardar, this);
        }
    };
    PermisoConjuntoConjuntoComponent.prototype.evtGuardar = function (permisoConjunto, obj) {
        obj.agregados++;
        obj.listaPermisoConjunto.push(permisoConjunto);
        if (obj.agregados >= obj.listaPermisoConjuntoN.length) {
            obj.permisoConjuntoN = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__["PermisoConjunto"]();
            obj.listaPermisoConjuntoN = [];
            obj.permisoConjuntoN.id = 0;
            obj.idSeleccionado = "N-" + obj.permisoConjuntoN.id;
            obj.listaPermisoConjuntoN.push(Object.assign({}, obj.permisoConjuntoN));
            obj.listaPermisoConjuntoChange.emit(obj.listaPermisoConjunto);
        }
        if (obj.agregados >= obj.listaPermisoConjuntoN.length &&
            obj.actualizados >= obj.listaPermisoConjunto.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    PermisoConjuntoConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaPermisoConjuntoN.length &&
                obj.actualizados >= obj.listaPermisoConjunto.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    PermisoConjuntoConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], PermisoConjuntoConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "permisoConjuntoBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "validosPermisoConjunto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "ocultarConjuntosPermisoConjunto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "permisoConjuntoService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PermisoConjuntoConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "perfilesPermisoConjuntoPerfilN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "perfilService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "lista_perfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "opcionperfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "validosperfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "evtAgregarPerfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "configuracionPerfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "ocultarConjuntosperfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "lista_usuarioUltMovPermisoConjuntoUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "lista_usuarioPermisoConjuntoUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PermisoConjuntoConjuntoComponent.prototype, "listaPermisoConjunto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "listaPermisoConjuntoChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__["PermisoConjunto"])
    ], PermisoConjuntoConjuntoComponent.prototype, "permisoConjuntoN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoConjuntoComponent.prototype, "permisoConjuntoNChange", void 0);
    PermisoConjuntoConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-conjunto-conjunto',
            template: __webpack_require__(/*! ./permiso-conjunto-conjunto.component.html */ "./src/app/permiso-conjuntos/permiso-conjunto-conjunto/permiso-conjunto-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./permiso-conjunto-conjunto.component.css */ "./src/app/permiso-conjuntos/permiso-conjunto-conjunto/permiso-conjunto-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PermisoConjuntoConjuntoComponent);
    return PermisoConjuntoConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-permiso-conjunto [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n                           [permisoConjuntoBuscar]=\"permisoConjuntoBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosPermisoConjunto]=\"validosPermisoConjunto\"\n                           [permisoConjuntoService]=\"permisoConjunto_service\"\n                           [(opcion)]=\"opcionPermisoConjunto\"\n                           [globalesService]=\"globalesService\"\n                           [(permisoConjunto)]=\"permisoConjunto\"\n                           [ocultarConjuntos]=\"ocultarConjuntosPermisoConjunto\"\n                           [lista_usuarioUltMovPermisoConjuntoUsuario]=\"lista_usuarioUltMovPermisoConjuntoUsuario\"\n                           [lista_usuarioPermisoConjuntoUsuario]=\"lista_usuarioPermisoConjuntoUsuario\"\n                           [perfilesPermisoConjuntoPerfilN]=\"perfilesPermisoConjuntoPerfilN\"\n                           [lista_perfilesPermisoConjuntoPerfil]=\"lista_perfilesPermisoConjuntoPerfil\"\n                           [perfilService]=\"perfil_service\"\n\n\t\t\t\t\t  >\n\n        </app-permiso-conjunto>\n\n        <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!permisoConjuntoBuscar\" (click)=\"buscarPermisoConjuntoFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!permisoConjuntoAgregar\" (click)=\"nuevoPermisoConjuntoFront()\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!permisoConjuntoActualizar\" (click)=\"actualizarPermisoConjuntoFront()\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!permisoConjuntoEliminar\" (click)=\"eliminarPermisoConjuntoFront()\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!permisoConjuntoGuardar\" (click)=\"guardarPermisoConjuntoFront()\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!permisoConjuntoCancelar\" (click)=\"cancelarPermisoConjuntoFront()\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReportePermisoConjuntoWord\" (click)=\"reportePermisoConjuntoWord()\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReportePermisoConjuntoExcel\" (click)=\"reportePermisoConjuntoExcel()\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReportePermisoConjuntoPdf\" (click)=\"reportePermisoConjuntoPdf()\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"buscarPermisoConjunto_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-permiso-conjunto-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionPermisoConjunto]=\"configuracionPermisoConjunto\"  (permisoConjuntoSeleccionado) =\"evtPermisoConjuntoSeleccionado($event)\">  </app-permiso-conjunto-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PermisoConjuntoCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjuntoCrudComponent", function() { return PermisoConjuntoCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/permiso-conjunto */ "./src/app/permiso-conjuntos/shared/permiso-conjunto.ts");
/* harmony import */ var _shared_permiso_conjunto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/permiso-conjunto.service */ "./src/app/permiso-conjuntos/shared/permiso-conjunto.service.ts");
/* harmony import */ var _shared_configurar_permiso_conjunto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-permiso-conjunto */ "./src/app/permiso-conjuntos/shared/configurar-permiso-conjunto.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil */ "./src/app/perfiles/shared/perfil.ts");
/* harmony import */ var _shared_permiso_conjunto_perfil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/permiso-conjunto-perfil */ "./src/app/permiso-conjuntos/shared/permiso-conjunto-perfil.ts");
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






var PermisoConjuntoCrudComponent = /** @class */ (function () {
    function PermisoConjuntoCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    permisoConjunto_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.permisoConjunto_service = permisoConjunto_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.opcionPermisoConjunto = 0;
        this.validosPermisoConjunto = {
            id: false,
            etiqueta: false,
            permiso: false,
            tabla: false,
            conjunto: false,
            status: false,
            usuarioUltMov: false,
            usuario: false,
        };
        this.ocultarConjuntosPermisoConjunto = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "permisoConjunto", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.permisoConjuntoLazy = false;
        this.permisoConjuntoPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoConjunto = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"]();
        this.permisoConjuntoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoConjuntoTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_permisoConjuntos = [];
        this.usuarioUltMovPermisoConjuntoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovPermisoConjuntoUsuario = [];
        this.usuarioUltMovPermisoConjuntoUsuarioEditar = false;
        this.usuarioPermisoConjuntoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioPermisoConjuntoUsuario = [];
        this.usuarioPermisoConjuntoUsuarioEditar = false;
        this.perfilesPermisoConjuntoPerfilEleccion = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        this.perfilesPermisoConjuntoPerfilN = [];
        this.lista_perfilesPermisoConjuntoPerfil = [];
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.permisoConjuntoSeleccion = this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
        this.configuracionPermisoConjunto = new _shared_configurar_permiso_conjunto__WEBPACK_IMPORTED_MODULE_6__["ConfigurarPermisoConjunto"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoConjuntoUsuario, this);
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoConjuntoUsuario, this);
        this.configuracionPerfilesPermisoConjuntoPerfil = new _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_16__["ConfigurarPerfil"]();
        this.perfil_service.getPerfiles(this.evtGetPerfilesPermisoConjuntoPerfil, this);
        this.limpiarCampos();
    }
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "permisoConjuntoOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosPermisoConjunto)
                return true;
            return !this.permisoConjuntoActualizar;
        },
        enumerable: true,
        configurable: true
    });
    PermisoConjuntoCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.permisoConjunto && changes.permisoConjunto.currentValue == null &&
            this.permisoConjunto == null)
            this.permisoConjunto = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"]();
        else {
            var aux = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"]();
            if (this.permisoConjunto)
                aux.from(this.permisoConjunto);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoSeleccion = this.permisoConjuntoGuardar = false;
                this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = this.permisoConjuntoCancelar = true;
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
                this.permisoConjuntoSeleccion = this.permisoConjuntoAgregar = this.permisoConjuntoBuscar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
                this.permisoConjuntoGuardar = this.permisoConjuntoCancelar = true;
            }
        }
    };
    PermisoConjuntoCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "permisoConjunto",
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
        this.permisoConjuntoPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    PermisoConjuntoCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.permisoConjuntoPermisos = true;
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoAtributo && permisos.permisoConjunto.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.permisoConjunto.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoConjunto && permisos.permisoConjunto.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.permisoConjunto.PermisoConjunto;
        }
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoTabla && permisos.permisoConjunto.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.permisoConjunto.PermisoTabla[0];
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
    PermisoConjuntoCrudComponent.prototype.configurarListaPerfilesPermisoConjuntoPerfil = function () {
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosPerfil = Object.assign([], this.configuracionPerfilesPermisoConjuntoPerfil.permisosAtributos);
        var tablaPerfil = Object.assign({}, this.configuracionPerfilesPermisoConjuntoPerfil.permisosTabla);
        this.configuracionPerfilesPermisoConjuntoPerfil = new _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_16__["ConfigurarPerfil"]();
        this.configuracionPerfilesPermisoConjuntoPerfil.permisosAtributos = atributosPerfil;
        this.configuracionPerfilesPermisoConjuntoPerfil.permisosTabla = tablaPerfil;
        this.configuracionPerfilesPermisoConjuntoPerfil.permisosTabla.permiso = this.configuracionPerfilesPermisoConjuntoPerfil.permisosTabla.permiso & 247;
        this.configuracionPerfilesPermisoConjuntoPerfil.titulo = "Agregar " + this.globalesService.cetiqueta(this, "permisoConjunto", "perfilesPermisoConjuntoPerfil");
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    };
    PermisoConjuntoCrudComponent.prototype.configurarListaPerfilesPermisoConjuntoPerfilPos = function () {
        this.configuracionPerfilesPermisoConjuntoPerfil.rutaLista = this.configuracionPerfilesPermisoConjuntoPerfil.crudServiceBaseUrl + "/getPerfiles";
        this.configuracionPerfilesPermisoConjuntoPerfil.rutaAgregar = this.configuracionPerfilesPermisoConjuntoPerfil.crudServiceBaseUrl + "/addPerfiles";
        this.configuracionPerfilesPermisoConjuntoPerfil.rutaEliminar = this.configuracionPerfilesPermisoConjuntoPerfil.crudServiceBaseUrl + "/removePerfiles";
        var vperfil = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        vperfil.from(this.perfilesPermisoConjuntoPerfilEleccion);
        this.configuracionPerfilesPermisoConjuntoPerfil.perfilConsulta = vperfil.toDto();
        this.configuracionPerfilesPermisoConjuntoPerfil.tipocampoAgEl = "PermisoConjuntoPerfil";
        this.configuracionPerfilesPermisoConjuntoPerfil.campoAgEl = new _shared_permiso_conjunto_perfil__WEBPACK_IMPORTED_MODULE_15__["PermisoConjuntoPerfil"]();
        this.configuracionPerfilesPermisoConjuntoPerfil.campoAgEl.perfil = vperfil.toDto();
    };
    PermisoConjuntoCrudComponent.prototype.evtGetUsuarioUltMovPermisoConjuntoUsuario = function (lista_usuarioUltMovPermisoConjuntoUsuario, obj) {
        obj.lista_usuarioUltMovPermisoConjuntoUsuario = lista_usuarioUltMovPermisoConjuntoUsuario;
        obj.actualizar_UsuarioUltMovPermisoConjuntoUsuario();
    };
    PermisoConjuntoCrudComponent.prototype.evtGetUsuarioPermisoConjuntoUsuario = function (lista_usuarioPermisoConjuntoUsuario, obj) {
        obj.lista_usuarioPermisoConjuntoUsuario = lista_usuarioPermisoConjuntoUsuario;
        obj.actualizar_UsuarioPermisoConjuntoUsuario();
    };
    PermisoConjuntoCrudComponent.prototype.evtGetPerfilesPermisoConjuntoPerfil = function (lista_perfilesPermisoConjuntoPerfil, obj) {
        obj.lista_perfilesPermisoConjuntoPerfil = lista_perfilesPermisoConjuntoPerfil;
    };
    PermisoConjuntoCrudComponent.prototype.actualizar_UsuarioUltMovPermisoConjuntoUsuario = function () {
        if (this.usuarioUltMovPermisoConjuntoUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovPermisoConjuntoUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovPermisoConjuntoUsuarioEleccion.id) {
                    this.usuarioUltMovPermisoConjuntoUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    PermisoConjuntoCrudComponent.prototype.actualizar_UsuarioPermisoConjuntoUsuario = function () {
        if (this.usuarioPermisoConjuntoUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioPermisoConjuntoUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioPermisoConjuntoUsuarioEleccion.id) {
                    this.usuarioPermisoConjuntoUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    PermisoConjuntoCrudComponent.prototype.ngDoCheck = function () {
    };
    PermisoConjuntoCrudComponent.prototype.agregarPerfilesPermisoConjuntoPerfil = function () {
        var permisoConjuntoPerfil = new _shared_permiso_conjunto_perfil__WEBPACK_IMPORTED_MODULE_15__["PermisoConjuntoPerfil"]();
        permisoConjuntoPerfil.permisoConjunto = this.permisoConjunto;
        permisoConjuntoPerfil.perfil = this.perfilesPermisoConjuntoPerfilEleccion;
        this.permisoConjunto_service.addPerfiles(permisoConjuntoPerfil, this.evtAgregarPerfilesPermisoConjuntoPerfil, this);
    };
    PermisoConjuntoCrudComponent.prototype.evtAgregarPerfilesPermisoConjuntoPerfil = function (respuesta, obj) {
        if (respuesta) {
            obj.configurarListaPerfilesPermisoConjuntoPerfil();
            obj.configurarListaPerfilesPermisoConjuntoPerfilPos();
            bootbox.alert("Perfil agregada con �xito");
        }
    };
    PermisoConjuntoCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosPermisoConjunto['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosPermisoConjunto['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaEtiqueta", {
        get: function () {
            return this.validosPermisoConjunto['etiqueta'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaPermiso", {
        get: function () {
            return this.validosPermisoConjunto['permiso'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaTabla", {
        get: function () {
            return this.validosPermisoConjunto['tabla'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaConjunto", {
        get: function () {
            return this.validosPermisoConjunto['conjunto'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosPermisoConjunto['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosPermisoConjunto['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaUsuario", {
        get: function () {
            return this.validosPermisoConjunto['usuario'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaEtiqueta && this.validaPermiso && this.validaTabla && this.validaConjunto && this.validaStatus && this.validaUsuarioUltMov && this.validaUsuario;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    PermisoConjuntoCrudComponent.prototype.obtenerPermisoConjuntos = function (lista, objeto) {
        objeto.lista_permisoConjuntos = lista;
        if (lista && lista.length > 0) {
            objeto.permisoConjunto.from(lista[0]);
            objeto.evtPermisoConjuntoSeleccionado(objeto.permisoConjunto);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    PermisoConjuntoCrudComponent.prototype.evn_lazy_permisoConjunto = function (permisoConjunto, objeto) {
        objeto.permisoConjunto = permisoConjunto;
        objeto.permisoConjuntoChange.emit(objeto.permisoConjunto);
        objeto.configuarCombosObjetos();
        objeto.permisoConjuntoLazy = true;
    };
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "datosReportePermisoConjuntoWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.permisoConjuntoActualizar && this.permisoConjuntoLazy && this.globalesService.preporteWord(this, "permisoConjunto"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "datosReportePermisoConjuntoExcel", {
        get: function () {
            return !(this.permisoConjuntoActualizar && this.permisoConjuntoLazy && this.globalesService.preporteExcel(this, "permisoConjunto"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoConjuntoCrudComponent.prototype, "datosReportePermisoConjuntoPdf", {
        get: function () {
            return !(this.permisoConjuntoActualizar && this.permisoConjuntoLazy && this.globalesService.preportePdf(this, "permisoConjunto"));
        },
        enumerable: true,
        configurable: true
    });
    PermisoConjuntoCrudComponent.prototype.reportePermisoConjuntoExcel = function () {
        var nombre = "PermisoConjunto.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "permisoConjunto": this.permisoConjunto };
        parametros["plantilla"] = "PermisoConjunto.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    PermisoConjuntoCrudComponent.prototype.reportePermisoConjuntoWord = function () {
        var nombre = "PermisoConjunto.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "permisoConjunto": this.permisoConjunto };
        parametros["plantilla"] = "PermisoConjunto.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    PermisoConjuntoCrudComponent.prototype.reportePermisoConjuntoPdf = function () {
        var nombre = "PermisoConjunto.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "permisoConjunto": this.permisoConjunto };
        parametros["plantilla"] = "PermisoConjunto.docx";
        parametros["salida"] = "PermisoConjunto.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    PermisoConjuntoCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoCancelar = true;
    };
    PermisoConjuntoCrudComponent.prototype.buscarPermisoConjuntoFront = function () {
        this.accionesBuscar();
        var vpermisoConjunto = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"]();
        vpermisoConjunto.from(this.permisoConjunto);
        this.configuracionPermisoConjunto = new _shared_configurar_permiso_conjunto__WEBPACK_IMPORTED_MODULE_6__["ConfigurarPermisoConjunto"]();
        this.configuracionPermisoConjunto.permisosTabla = { "tabla": "permisoConjunto", "permiso": 8 };
        this.configuracionPermisoConjunto.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionPermisoConjunto.permisoConjuntoConsulta = vpermisoConjunto;
        this.permisosacciones();
        $("#buscarPermisoConjunto_" + this.nombre).modal();
    };
    PermisoConjuntoCrudComponent.prototype.buscarPermisoConjuntoBack = function (permisoConjunto) {
        this.permisoConjunto_service.getPermisoConjuntosByDto(permisoConjunto, this.eventoSrvPermisoConjuntoBuscar, this);
    };
    PermisoConjuntoCrudComponent.prototype.eventoSrvPermisoConjuntoBuscar = function (lista, objeto) {
        objeto.lista_permisoConjuntos = lista;
        if (lista && lista.length > 0) {
            objeto.permisoConjunto = lista[0];
            objeto.permisoConjuntoLazy = false;
            objeto.permisoConjunto_service.lazyPermisoConjunto(objeto.permisoConjunto, objeto.evn_lazy_permisoConjunto, objeto);
        }
    };
    PermisoConjuntoCrudComponent.prototype.guardarPermisoConjuntoFront = function () {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarPermisoConjuntoBack(this.permisoConjunto);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    PermisoConjuntoCrudComponent.prototype.guardarPermisoConjuntoBack = function (permisoConjunto) {
        if (permisoConjunto.usuarioUltMov == null)
            permisoConjunto.usuarioUltMov = this.globalesService.dameUsuario();
        if (permisoConjunto.status == null || permisoConjunto.status == "")
            permisoConjunto.status = 1;
        this.permisoConjunto_service.guardarPermisoConjunto(permisoConjunto, this.eventoSrvPermisoConjuntoGuardar, this);
    };
    PermisoConjuntoCrudComponent.prototype.eventoSrvPermisoConjuntoGuardar = function (permisoConjunto, obj) {
        obj.permisoConjunto = permisoConjunto;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"]();
        aux.from(permisoConjunto);
        obj.permisoConjuntoChange.emit(aux);
        obj.permisoConjuntoTablaChange.emit(aux);
        obj.permisoConjuntoLazy = false;
        obj.permisoConjunto_service.lazyPermisoConjunto(obj.permisoConjunto, obj.evn_lazy_permisoConjunto, obj);
        obj.accionesActualizar();
    };
    PermisoConjuntoCrudComponent.prototype.actualizarPermisoConjuntoFront = function () {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarPermisoConjuntoBack(this.permisoConjunto);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    PermisoConjuntoCrudComponent.prototype.actualizarPermisoConjuntoBack = function (permisoConjunto) {
        permisoConjunto.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoConjunto_service.actualizarPermisoConjunto(permisoConjunto, this.eventoSrvPermisoConjuntoActualizar, this);
    };
    PermisoConjuntoCrudComponent.prototype.eventoSrvPermisoConjuntoActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.permisoConjuntoLazy = false;
            obj.permisoConjunto_service.lazyPermisoConjunto(obj.permisoConjunto, obj.evn_lazy_permisoConjunto, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.permisoConjunto);
            obj.permisoConjuntoChange.emit(aux);
            obj.permisoConjuntoTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    PermisoConjuntoCrudComponent.prototype.eliminarPermisoConjuntoFront = function () {
        this.accion = 4;
        this.eliminarPermisoConjuntoBack(this.permisoConjunto);
        this.permisosacciones();
        this.accionesBuscar();
    };
    PermisoConjuntoCrudComponent.prototype.eliminarPermisoConjuntoBack = function (permisoConjunto) {
        permisoConjunto.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoConjunto_service.eliminarPermisoConjunto(permisoConjunto, this.eventoSrvPermisoConjuntoEliminar, this);
    };
    PermisoConjuntoCrudComponent.prototype.eventoSrvPermisoConjuntoEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.permisoConjunto = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"]();
            obj.permisoConjuntoChange.emit(obj.permisoConjunto);
            obj.permisoConjuntoTablaChange.emit(obj.permisoConjunto);
            obj.limpiarCampos();
        }
    };
    PermisoConjuntoCrudComponent.prototype.cancelarPermisoConjuntoFront = function () {
        this.accion = 6;
        this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = true;
        this.permisosacciones();
    };
    PermisoConjuntoCrudComponent.prototype.nuevoPermisoConjuntoFront = function () {
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
                this.permisoConjuntoSeleccion = this.permisoConjuntoAgregar = this.permisoConjuntoBuscar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false;
                this.permisoConjuntoGuardar = this.permisoConjuntoCancelar = true;
            }.bind(this)
        });
    };
    PermisoConjuntoCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovPermisoConjuntoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoConjuntoUsuario, this);
        this.lista_usuarioPermisoConjuntoUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoConjuntoUsuario, this);
    };
    PermisoConjuntoCrudComponent.prototype.configurarTablasConjuntos = function () {
        this.configurarListaPerfilesPermisoConjuntoPerfil();
        this.configurarListaPerfilesPermisoConjuntoPerfilPos();
    };
    PermisoConjuntoCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoSeleccion = this.permisoConjuntoGuardar = false;
        this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = this.permisoConjuntoCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    PermisoConjuntoCrudComponent.prototype.evtPermisoConjuntoSeleccionado = function (permisoConjunto) {
        this.permisoConjunto = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"]();
        this.permisoConjunto.from(permisoConjunto);
        this.permisoConjuntoLazy = false;
        this.permisoConjunto_service.lazyPermisoConjunto(this.permisoConjunto, this.evn_lazy_permisoConjunto, this);
        this.accion = 7;
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = this.permisoConjuntoSeleccion = this.permisoConjuntoGuardar = false;
        this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = this.permisoConjuntoCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarPermisoConjunto_" + this.nombre).modal("hide");
    };
    PermisoConjuntoCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisoConjuntoSeleccion = this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false; // ******************** maquina
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    PermisoConjuntoCrudComponent.prototype.permisosacciones = function () {
        if (this.permisoConjuntoBuscar)
            this.permisoConjuntoBuscar = this.globalesService.pbuscar(this, "permisoConjunto");
        if (this.permisoConjuntoActualizar)
            this.permisoConjuntoActualizar = (this.globalesService.pacutalizar(this, "permisoConjunto") && this.globalesService.pbuscar(this, "permisoConjunto"));
        if (this.permisoConjuntoEliminar)
            this.permisoConjuntoEliminar = (this.globalesService.peliminar(this, "permisoConjunto") && this.globalesService.pbuscar(this, "permisoConjunto"));
        if (this.permisoConjuntoAgregar)
            this.permisoConjuntoAgregar = this.globalesService.pagregar(this, "permisoConjunto");
    };
    PermisoConjuntoCrudComponent.prototype.permisosaccionesInicio = function () {
        this.permisoConjuntoSeleccion = this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false; // *************************** maquina
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    PermisoConjuntoCrudComponent.prototype.limpiarCampos = function () {
        this.permisoConjunto = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"]();
        this.usuarioUltMovPermisoConjuntoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.usuarioPermisoConjuntoUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.perfilesPermisoConjuntoPerfilEleccion = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        this.permisoConjuntoChange.emit(this.permisoConjunto);
        this.permisoConjuntoSeleccion = this.permisoConjuntoCancelar = this.permisoConjuntoGuardar = this.permisoConjuntoActualizar = this.permisoConjuntoEliminar = false; // *************************** maquina
        this.permisoConjuntoBuscar = this.permisoConjuntoAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PermisoConjuntoCrudComponent.prototype, "ocultarConjuntosPermisoConjunto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PermisoConjuntoCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PermisoConjuntoCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["PermisoConjunto"])
    ], PermisoConjuntoCrudComponent.prototype, "permisoConjunto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoCrudComponent.prototype, "permisoConjuntoChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoCrudComponent.prototype, "permisoConjuntoTablaChange", void 0);
    PermisoConjuntoCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-conjunto-crud',
            template: __webpack_require__(/*! ./permiso-conjunto-crud.component.html */ "./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.html"),
            styles: [__webpack_require__(/*! ./permiso-conjunto-crud.component.css */ "./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_permiso_conjunto_service__WEBPACK_IMPORTED_MODULE_5__["PermisoConjuntoService"],
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
            _shared_permiso_conjunto_service__WEBPACK_IMPORTED_MODULE_5__["PermisoConjuntoService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"]])
    ], PermisoConjuntoCrudComponent);
    return PermisoConjuntoCrudComponent;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para permisoConjunto-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionPermisoConjunto.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_permisoConjunto_{{nombregrid}}\">\n                <div id=\"grid_permisoConjunto_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PermisoConjuntoListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjuntoListKendoComponent", function() { return PermisoConjuntoListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/permiso-conjunto */ "./src/app/permiso-conjuntos/shared/permiso-conjunto.ts");
/* harmony import */ var _shared_configurar_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-permiso-conjunto */ "./src/app/permiso-conjuntos/shared/configurar-permiso-conjunto.ts");
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
var PermisoConjuntoListKendoComponent = /** @class */ (function () {
    function PermisoConjuntoListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.permisoConjuntoSeleccionado = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_3__["PermisoConjunto"]();
        this.configuracionPermisoConjunto = new _shared_configurar_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["ConfigurarPermisoConjunto"]();
        this.nombregrid = "";
        this.evtPermisoConjuntoSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "permisoConjunto";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoConjunto'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoConjunto'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    PermisoConjuntoListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionPermisoConjunto.titulo.indexOf("Catálogo") != -1) {
            this.configuracionPermisoConjunto.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    PermisoConjuntoListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionPermisoConjunto && changes.configuracionPermisoConjunto.currentValue &&
            (changes.configuracionPermisoConjunto.previousValue instanceof _shared_configurar_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["ConfigurarPermisoConjunto"])) {
            if (changes.configuracionPermisoConjunto.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionPermisoConjunto.currentValue.permisosAtributos;
            if (changes.configuracionPermisoConjunto.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionPermisoConjunto.currentValue.permisosTabla;
            if ($("#grid_permisoConjunto_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    PermisoConjuntoListKendoComponent.prototype.ngOnInit = function () {
        self["grid_permisoConjunto_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionPermisoConjunto.permisosAtributos &&
            this.configuracionPermisoConjunto.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "permisoConjunto",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoConjunto'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoConjunto'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoConjunto'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionPermisoConjunto.permisosAtributos)
            this.permisosAtributos = this.configuracionPermisoConjunto.permisosAtributos;
        if (this.configuracionPermisoConjunto.permisosTabla)
            this.permisosTabla = this.configuracionPermisoConjunto.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    PermisoConjuntoListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoAtributo && permisos.permisoConjunto.PermisoAtributo.length > 0
            && !obj.configuracionPermisoConjunto.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.permisoConjunto.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.PermisoConjunto.PermisoAtributo ;
        }
        if (permisos && permisos.permisoConjunto && permisos.permisoConjunto.PermisoTabla && permisos.permisoConjunto.PermisoTabla.length > 0
            && !obj.configuracionPermisoConjunto.permisosTabla) {
            obj.globalesService.evtTablas(permisos.permisoConjunto.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.PermisoConjunto.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    PermisoConjuntoListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_permisoConjunto_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    PermisoConjuntoListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionPermisoConjunto.campoAgEl != null
            && this.configuracionPermisoConjunto.permisoConjuntoConsulta
            && this.configuracionPermisoConjunto.permisoConjuntoConsulta.isOk
            && !this.configuracionPermisoConjunto.permisoConjuntoConsulta.isOk())
            return;
        if (this.configuracionPermisoConjunto.permisoConjuntoConsulta) {
            if (!this.configuracionPermisoConjunto.campoAgEl && this.configuracionPermisoConjunto.permisoConjuntoConsulta instanceof _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_3__["PermisoConjunto"])
                this.configuracionPermisoConjunto.rutaLista = this.crudServiceBaseUrl + "/getPermisoConjuntosByDto";
            this.lista = this.configuracionPermisoConjunto.lecturaP(completar, this.configuracionPermisoConjunto.permisoConjuntoConsulta);
            if (this.configuracionPermisoConjunto.campoAgEl) {
                this.rutaAgregar = this.configuracionPermisoConjunto.agregarP(function () { }, this.configuracionPermisoConjunto.campoAgEl);
                this.rutaEliminar = this.configuracionPermisoConjunto.eliminarP(function () { }, this.configuracionPermisoConjunto.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionPermisoConjunto.agregarP(completar, this.configuracionPermisoConjunto.permisoConjuntoConsulta);
                this.rutaEliminar = this.configuracionPermisoConjunto.eliminarP(completar, this.configuracionPermisoConjunto.permisoConjuntoConsulta);
            }
        }
        else {
            this.lista = this.configuracionPermisoConjunto.lectura();
            this.rutaAgregar = this.configuracionPermisoConjunto.agregar();
            this.rutaEliminar = this.configuracionPermisoConjunto.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "permisoConjunto", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "permisoConjunto", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "tabla")) {
            campos["tabla"] = { editable: this.globalesService.aenable(this, "permisoConjunto", "tabla"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "conjunto")) {
            campos["conjunto"] = { editable: this.globalesService.aenable(this, "permisoConjunto", "conjunto"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "permiso")) {
            campos["permiso"] = { editable: this.globalesService.aenable(this, "permisoConjunto", "permiso"), nullable: true };
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "permisoConjunto", "status"), nullable: true, defaultValue: "1" };
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "etiqueta")) {
            campos["etiqueta"] = { editable: this.globalesService.aenable(this, "permisoConjunto", "etiqueta"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "usuario")) {
            campos["usuario"] = { editable: this.globalesService.aenable(this, "permisoConjunto", "usuario"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "permisoConjunto", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionPermisoConjunto.rutaActualizar,
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
            if (self.configuracionPermisoConjunto.campoAgEl) {
                if (self.configuracionPermisoConjunto.tipocampoAgEl == "PermisoConjuntoPermisoConjunto")
                    self.configuracionPermisoConjunto.campoAgEl.permisoConjunto2 = options.models[0];
                else
                    self.configuracionPermisoConjunto.campoAgEl.permisoConjunto = options.models[0];
                return JSON.stringify(self.configuracionPermisoConjunto.campoAgEl);
            }
            else if (est.options[operation].data.models.permisoConjunto) {
                est.options[operation].data.models.permisoConjunto2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    PermisoConjuntoListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "permisoConjunto", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "permisoConjunto", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "tabla")) {
            columnas.push({ field: "tabla", title: this.globalesService.aetiqueta(this, "permisoConjunto", "tabla"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "conjunto")) {
            columnas.push({ field: "conjunto", title: this.globalesService.aetiqueta(this, "permisoConjunto", "conjunto"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "permiso")) {
            columnas.push({ field: "permiso", title: this.globalesService.aetiqueta(this, "permisoConjunto", "permiso") });
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "permisoConjunto", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "etiqueta")) {
            columnas.push({ field: "etiqueta", title: this.globalesService.aetiqueta(this, "permisoConjunto", "etiqueta"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "usuario")) {
            columnas.push({ field: "usuario", title: this.globalesService.aetiqueta(this, "permisoConjunto", "usuario"), editor: usuarioDropDownEditor, template: " #if (usuario){#   #=usuario.password# # } # " });
        }
        if (this.globalesService.avisible(this, "permisoConjunto", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "permisoConjunto", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "permisoConjunto"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "permisoConjunto")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "permisoConjunto")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "permisoConjunto") && this.configuracionPermisoConjunto.permisoConjuntoConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_permisoConjunto_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_permisoConjunto_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionPermisoConjunto.altoComponente,
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
        this.grid = $("#grid_permisoConjunto_" + this.nombregrid).data("kendoGrid");
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
    PermisoConjuntoListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_permisoConjunto_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.permisoConjuntoSeleccionado = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_3__["PermisoConjunto"]();
        gridac.permisoConjuntoSeleccionado.from(dataItem);
        gridac.evtPermisoConjuntoSeleccionado.emit(gridac.permisoConjuntoSeleccionado);
        (gridac.permisoConjuntoSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_permiso_conjunto__WEBPACK_IMPORTED_MODULE_4__["ConfigurarPermisoConjunto"])
    ], PermisoConjuntoListKendoComponent.prototype, "configuracionPermisoConjunto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PermisoConjuntoListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("permisoConjuntoSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PermisoConjuntoListKendoComponent.prototype, "evtPermisoConjuntoSeleccionado", void 0);
    PermisoConjuntoListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-conjunto-list-kendo',
            template: __webpack_require__(/*! ./permiso-conjunto-list-kendo.component.html */ "./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./permiso-conjunto-list-kendo.component.css */ "./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], PermisoConjuntoListKendoComponent);
    return PermisoConjuntoListKendoComponent;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PermisoConjuntoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjuntoRoutingModule", function() { return PermisoConjuntoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _permiso_conjuntos_permiso_conjunto_list_kendo_permiso_conjunto_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component */ "./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.ts");
/* harmony import */ var _permiso_conjuntos_permiso_conjunto_crud_permiso_conjunto_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component */ "./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.ts");
/* harmony import */ var _permiso_conjuntos_permiso_conjunto_table_permiso_conjunto_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component */ "./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'permiso-conjunto-list-kendo', component: _permiso_conjuntos_permiso_conjunto_list_kendo_permiso_conjunto_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["PermisoConjuntoListKendoComponent"] },
    { path: 'permiso-conjunto-crud', component: _permiso_conjuntos_permiso_conjunto_crud_permiso_conjunto_crud_component__WEBPACK_IMPORTED_MODULE_3__["PermisoConjuntoCrudComponent"] },
    { path: 'permiso-conjunto-table', component: _permiso_conjuntos_permiso_conjunto_table_permiso_conjunto_table_component__WEBPACK_IMPORTED_MODULE_4__["PermisoConjuntoTableComponent"] },
];
var PermisoConjuntoRoutingModule = /** @class */ (function () {
    function PermisoConjuntoRoutingModule() {
    }
    PermisoConjuntoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PermisoConjuntoRoutingModule);
    return PermisoConjuntoRoutingModule;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_permisoConjunto\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('permisoConjunto','id')\" >{{aetiqueta('permisoConjunto','id')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','tabla')\" >{{aetiqueta('permisoConjunto','tabla')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','conjunto')\" >{{aetiqueta('permisoConjunto','conjunto')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','permiso')\" >{{aetiqueta('permisoConjunto','permiso')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','status')\" >{{aetiqueta('permisoConjunto','status')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','etiqueta')\" >{{aetiqueta('permisoConjunto','etiqueta')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','usuario')\" >{{aetiqueta('permisoConjunto','usuario')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','usuarioUltMov')\" >{{aetiqueta('permisoConjunto','usuarioUltMov')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('permisoConjunto','id')\" >{{aetiqueta('permisoConjunto','id')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','tabla')\" >{{aetiqueta('permisoConjunto','tabla')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','conjunto')\" >{{aetiqueta('permisoConjunto','conjunto')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','permiso')\" >{{aetiqueta('permisoConjunto','permiso')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','status')\" >{{aetiqueta('permisoConjunto','status')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','etiqueta')\" >{{aetiqueta('permisoConjunto','etiqueta')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','usuario')\" >{{aetiqueta('permisoConjunto','usuario')}}</th>\n            <th [class.hidden]=\"!avisible('permisoConjunto','usuarioUltMov')\" >{{aetiqueta('permisoConjunto','usuarioUltMov')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-permiso-conjunto [class.hidden]=\"primero\" [(permisoConjunto)]=\"permisoConjuntoSeleccionado\" (permisoConjuntoTablaChange)=\"cambio_permisoConjunto($event)\"> </app-permiso-conjunto>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PermisoConjuntoTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjuntoTableComponent", function() { return PermisoConjuntoTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/permiso-conjunto */ "./src/app/permiso-conjuntos/shared/permiso-conjunto.ts");
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






var PermisoConjuntoTableComponent = /** @class */ (function () {
    function PermisoConjuntoTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "permisoConjunto", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.permisoConjuntoSeleccionado = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__["PermisoConjunto"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'permisoConjunto'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    PermisoConjuntoTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'permisoConjunto'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    PermisoConjuntoTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(PermisoConjuntoTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    PermisoConjuntoTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("permisoConjunto", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("permisoConjunto", "tabla"))
            columnasNoVisibles.push(1);
        columnas.push({ "data": "tabla" });
        if (!this.avisible("permisoConjunto", "conjunto"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "conjunto" });
        if (!this.avisible("permisoConjunto", "permiso"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "permiso" });
        if (!this.avisible("permisoConjunto", "status"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "status" });
        if (!this.avisible("permisoConjunto", "etiqueta"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "etiqueta" });
        if (!this.avisible("permisoConjunto", "usuario"))
            columnasNoVisibles.push(6);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuario)
                    return "<span style=\"cursor: pointer\">" + oObj.usuario.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("permisoConjunto", "usuarioUltMov"))
            columnasNoVisibles.push(7);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (self.pacutalizar("permisoConjunto"))
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
        var tabla = $('#tabla_permisoConjunto').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_permisoConjunto_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.permisoConjuntoSeleccionado = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__["PermisoConjunto"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "permisoConjunto/getPermisoConjuntos",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_permisoConjunto tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_permisoConjunto').DataTable().row(this).data();
                self.permisoConjuntoSeleccionado = new _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__["PermisoConjunto"]();
                self.permisoConjuntoSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_permisoConjunto').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    PermisoConjuntoTableComponent.prototype.ngOnInit = function () {
    };
    PermisoConjuntoTableComponent.prototype.cambio_permisoConjunto = function (permisoConjunto) {
        $('#tabla_permisoConjunto').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    PermisoConjuntoTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    PermisoConjuntoTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    PermisoConjuntoTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    PermisoConjuntoTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    PermisoConjuntoTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    PermisoConjuntoTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    PermisoConjuntoTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    PermisoConjuntoTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    PermisoConjuntoTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    PermisoConjuntoTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    PermisoConjuntoTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    PermisoConjuntoTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    PermisoConjuntoTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    PermisoConjuntoTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    PermisoConjuntoTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    PermisoConjuntoTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-conjunto-table',
            template: __webpack_require__(/*! ./permiso-conjunto-table.component.html */ "./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.html"),
            styles: [__webpack_require__(/*! ./permiso-conjunto-table.component.css */ "./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], PermisoConjuntoTableComponent);
    return PermisoConjuntoTableComponent;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto.module.ts ***!
  \**************************************************************/
/*! exports provided: PermisoConjuntoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjuntoModule", function() { return PermisoConjuntoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _permiso_conjunto_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permiso-conjunto-routing.module */ "./src/app/permiso-conjuntos/permiso-conjunto-routing.module.ts");
/* harmony import */ var _permiso_conjunto_list_kendo_permiso_conjunto_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component */ "./src/app/permiso-conjuntos/permiso-conjunto-list-kendo/permiso-conjunto-list-kendo.component.ts");
/* harmony import */ var _permiso_conjunto_crud_permiso_conjunto_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permiso-conjunto-crud/permiso-conjunto-crud.component */ "./src/app/permiso-conjuntos/permiso-conjunto-crud/permiso-conjunto-crud.component.ts");
/* harmony import */ var _permiso_conjunto_conjunto_permiso_conjunto_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permiso-conjunto-conjunto/permiso-conjunto-conjunto.component */ "./src/app/permiso-conjuntos/permiso-conjunto-conjunto/permiso-conjunto-conjunto.component.ts");
/* harmony import */ var _permiso_conjunto_permiso_conjunto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permiso-conjunto/permiso-conjunto.component */ "./src/app/permiso-conjuntos/permiso-conjunto/permiso-conjunto.component.ts");
/* harmony import */ var _permiso_conjunto_table_permiso_conjunto_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./permiso-conjunto-table/permiso-conjunto-table.component */ "./src/app/permiso-conjuntos/permiso-conjunto-table/permiso-conjunto-table.component.ts");
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











var PermisoConjuntoModule = /** @class */ (function () {
    function PermisoConjuntoModule(parentModule) {
        if (parentModule) {
            throw new Error('PermisoConjuntoModule is already loaded. Import it in the AppModule only');
        }
    }
    PermisoConjuntoModule_1 = PermisoConjuntoModule;
    PermisoConjuntoModule.forRoot = function () {
        return {
            ngModule: PermisoConjuntoModule_1,
            providers: []
        };
    };
    var PermisoConjuntoModule_1;
    PermisoConjuntoModule = PermisoConjuntoModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _permiso_conjunto_routing_module__WEBPACK_IMPORTED_MODULE_3__["PermisoConjuntoRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
            ],
            declarations: [
                _permiso_conjunto_list_kendo_permiso_conjunto_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["PermisoConjuntoListKendoComponent"],
                _permiso_conjunto_permiso_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["PermisoConjuntoComponent"],
                _permiso_conjunto_crud_permiso_conjunto_crud_component__WEBPACK_IMPORTED_MODULE_5__["PermisoConjuntoCrudComponent"],
                _permiso_conjunto_conjunto_permiso_conjunto_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["PermisoConjuntoConjuntoComponent"],
                _permiso_conjunto_table_permiso_conjunto_table_component__WEBPACK_IMPORTED_MODULE_8__["PermisoConjuntoTableComponent"],
            ],
            exports: [
                _permiso_conjunto_list_kendo_permiso_conjunto_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["PermisoConjuntoListKendoComponent"],
                _permiso_conjunto_permiso_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["PermisoConjuntoComponent"],
                _permiso_conjunto_crud_permiso_conjunto_crud_component__WEBPACK_IMPORTED_MODULE_5__["PermisoConjuntoCrudComponent"],
                _permiso_conjunto_conjunto_permiso_conjunto_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["PermisoConjuntoConjuntoComponent"],
                _permiso_conjunto_table_permiso_conjunto_table_component__WEBPACK_IMPORTED_MODULE_8__["PermisoConjuntoTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [PermisoConjuntoModule])
    ], PermisoConjuntoModule);
    return PermisoConjuntoModule;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto/permiso-conjunto.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto/permiso-conjunto.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto/permiso-conjunto.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto/permiso-conjunto.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\"     >\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h1>{{etiquetaGeneral}}</h1></div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                     <app-componente-cadena [componente]=\"'permisoConjunto'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"permisoConjuntoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoConjunto['id']\"\n                                                   [(dato)]=\"permisoConjunto.id\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoConjunto'\"\n                                                   [atributo]=\"'tabla'\"\n                                                   [buscar]=\"permisoConjuntoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoConjunto['tabla']\"\n                                                   [(dato)]=\"permisoConjunto.tabla\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoConjunto'\"\n                                                   [atributo]=\"'conjunto'\"\n                                                   [buscar]=\"permisoConjuntoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoConjunto['conjunto']\"\n                                                   [(dato)]=\"permisoConjunto.conjunto\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoConjunto'\"\n                                                   [atributo]=\"'permiso'\"\n                                                   [buscar]=\"permisoConjuntoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoConjunto['permiso']\"\n                                                   [(dato)]=\"permisoConjunto.permiso\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoConjunto'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"permisoConjuntoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoConjunto['status']\"\n                                                   [(dato)]=\"permisoConjunto.status\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoConjunto'\"\n                                                   [atributo]=\"'etiqueta'\"\n                                                   [buscar]=\"permisoConjuntoBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoConjunto['etiqueta']\"\n                                                   [(dato)]=\"permisoConjunto.etiqueta\"   class=\"w-100\" >\n                    </app-componente-cadena >\n        <!-- <div [class.hidden]=\"OcultarConjuntosPermisoConjunto\" >\n            <div class=\"clearfix\"> </div>\n            <div class=\"form-group row\"  *ngIf=\"globalesService.cagregar(this,'permisoConjunto','perfilesPermisoConjuntoPerfil')\" >\n              <div class=\"col-12 mr-ml-4\" >\n                <label for=\"sel1\">{{globalesService.cetiqueta(this,'permisoConjunto','perfilesPermisoConjuntoPerfil')}}:</label>\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" [(ngModel)]=\"perfilesPermisoConjuntoPerfilEleccion\" name=\"perfilesPermisoConjuntoPerfilEleccion\">\n                            <option *ngFor = \"let perfilesPermisoConjuntoPerfil of lista_perfilesPermisoConjuntoPerfil\" [ngValue]=\"perfilesPermisoConjuntoPerfil\"  >{{perfilesPermisoConjuntoPerfil.nombre}}</option>\n                        </select>\n                        <span class=\"input-group-btn\">\n                             <button class=\"btn btn-default\" type=\"button\" (click)=\"agregarPerfilesPermisoConjuntoPerfil()\" >Agregar</button>\n                        </span>\n                    </div>\n                </div>\n              </div>\n            </div>\n            app-perfil-list-kendo *ngIf=\"globalesService.cagregar(this,'permisoConjunto','perfilesPermisoConjuntoPerfil') || globalesService.cagregarnuevo(this,'permisoConjunto','perfilesPermisoConjuntoPerfil') \"\n                                 [nombregrid]=\"'perfilesPermisoConjuntoPerfil_'+nombre\"  [configuracionPerfil]=\"configuracionPerfilesPermisoConjuntoPerfil\" ></app-perfil-list-kendo\n        </div> -->\n                    <div>\n                        <app-componente-objeto [componente]=\"'permisoConjunto'\"\n                                               [atributo]=\"'usuario'\"\n                                               [buscar]=\"permisoConjuntoBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosPermisoConjunto['usuario']\"\n                                               [(dato)]=\"permisoConjunto.usuario\"  class=\"w-100\"\n                                               [atributoVisible]=\"'username'\" >\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'permisoConjunto','usuario')\" >\n                                   <!--app-usuario-crud [nombre]=\"'usuario'\" [usuario]=\"permisoConjunto.usuario\" (usuarioChange)=\"evtUsuario($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioEditar\" ></app-usuario-crud-->\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <app-componente-objeto [componente]=\"'permisoConjunto'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"permisoConjuntoBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosPermisoConjunto['usuarioUltMov']\"\n                                               [(dato)]=\"permisoConjunto.usuarioUltMov\"  class=\"w-100\"\n                                               [atributoVisible]=\"'username'\" >\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'permisoConjunto','usuarioUltMov')\" >\n                                   <!--app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"permisoConjunto.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud-->\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/permiso-conjuntos/permiso-conjunto/permiso-conjunto.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/permiso-conjunto/permiso-conjunto.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PermisoConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjuntoComponent", function() { return PermisoConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/permiso-conjunto */ "./src/app/permiso-conjuntos/shared/permiso-conjunto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermisoConjuntoComponent = /** @class */ (function () {
    function PermisoConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoConjuntoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarPerfilesPermisoConjuntoPerfil = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovPermisoConjuntoUsuarioEditar = false;
        this.usuarioPermisoConjuntoUsuarioEditar = false;
    }
    PermisoConjuntoComponent.prototype.agregarPerfilesPermisoConjuntoPerfil = function () { this.evtAgregarPerfilesPermisoConjuntoPerfil.emit(); };
    ;
    PermisoConjuntoComponent.prototype.actualizarPermisoConjunto = function () {
        if (this.permisoConjunto.id == null) {
            this.permisoConjuntoService.guardarPermisoConjunto(this.permisoConjunto, this.evtGuardar, this);
        }
        else {
            this.permisoConjuntoService.actualizarPermisoConjunto(this.permisoConjunto, this.evtActualiza, this);
        }
    };
    PermisoConjuntoComponent.prototype.evtGuardar = function (permisoConjunto, obj) {
        obj.permisoConjunto = permisoConjunto;
        obj.permisoConjuntoChange.emit(obj.permisoConjunto);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    PermisoConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.permisoConjuntoChange.emit(obj.permisoConjunto);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    PermisoConjuntoComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarPermisoConjunto();
            }
        }
    };
    PermisoConjuntoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "permisoConjuntoBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "validosPermisoConjunto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_permiso_conjunto__WEBPACK_IMPORTED_MODULE_1__["PermisoConjunto"])
    ], PermisoConjuntoComponent.prototype, "permisoConjunto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "permisoConjuntoService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PermisoConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "permisoConjuntoChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "perfilesPermisoConjuntoPerfilN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "perfilService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "lista_perfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "opcionperfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "validosperfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "evtAgregarPerfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "configuracionPerfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "ocultarConjuntosperfilesPermisoConjuntoPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "lista_usuarioUltMovPermisoConjuntoUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoConjuntoComponent.prototype, "lista_usuarioPermisoConjuntoUsuario", void 0);
    PermisoConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-conjunto',
            template: __webpack_require__(/*! ./permiso-conjunto.component.html */ "./src/app/permiso-conjuntos/permiso-conjunto/permiso-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./permiso-conjunto.component.css */ "./src/app/permiso-conjuntos/permiso-conjunto/permiso-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PermisoConjuntoComponent);
    return PermisoConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/shared/configurar-permiso-conjunto.ts":
/*!*************************************************************************!*\
  !*** ./src/app/permiso-conjuntos/shared/configurar-permiso-conjunto.ts ***!
  \*************************************************************************/
/*! exports provided: ConfigurarPermisoConjunto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarPermisoConjunto", function() { return ConfigurarPermisoConjunto; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarPermisoConjunto = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarPermisoConjunto() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "permisoConjunto";
        this.rutaLista = this.crudServiceBaseUrl + "/getPermisoConjuntos";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarPermisoConjunto";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarPermisoConjunto";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarPermisoConjunto";
        this.titulo = "Catálogo PermisoConjunto";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.permisoConjuntoConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarPermisoConjunto.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarPermisoConjunto.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarPermisoConjunto.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarPermisoConjunto.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarPermisoConjunto.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarPermisoConjunto.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarPermisoConjunto;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/shared/permiso-conjunto-perfil.ts":
/*!*********************************************************************!*\
  !*** ./src/app/permiso-conjuntos/shared/permiso-conjunto-perfil.ts ***!
  \*********************************************************************/
/*! exports provided: PermisoConjuntoPerfil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjuntoPerfil", function() { return PermisoConjuntoPerfil; });
/**
 *
 * @author IstmoSoft
 */
var PermisoConjuntoPerfil = /** @class */ (function () {
    // Constructores
    function PermisoConjuntoPerfil() {
    }
    // Geters
    PermisoConjuntoPerfil.prototype.getPermisoConjunto = function () {
        return this.permisoConjunto;
    };
    PermisoConjuntoPerfil.prototype.setPermisoConjunto = function (permisoConjunto) {
        this.permisoConjunto = permisoConjunto;
    };
    // Seters
    PermisoConjuntoPerfil.prototype.getPerfil = function () {
        return this.perfil;
    };
    PermisoConjuntoPerfil.prototype.setPerfil = function (perfil) {
        this.perfil = perfil;
    };
    return PermisoConjuntoPerfil;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/shared/permiso-conjunto.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/permiso-conjuntos/shared/permiso-conjunto.service.ts ***!
  \**********************************************************************/
/*! exports provided: PermisoConjuntoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjuntoService", function() { return PermisoConjuntoService; });
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


var PermisoConjuntoService = /** @class */ (function () {
    function PermisoConjuntoService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    PermisoConjuntoService.prototype.setPermisoConjunto = function (permisoConjunto) {
        this.permisoConjunto = permisoConjunto;
    };
    PermisoConjuntoService.prototype.getPermisoConjunto = function () {
        return this.permisoConjunto;
    };
    PermisoConjuntoService.prototype.guardarPermisoConjunto = function (permisoConjunto, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(permisoConjunto, 'permisoConjunto/guardarPermisoConjunto')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.actualizarPermisoConjunto = function (permisoConjunto, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(permisoConjunto, 'permisoConjunto/actualizarPermisoConjunto')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.eliminarPermisoConjunto = function (permisoConjunto, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(permisoConjunto, 'permisoConjunto/eliminarPermisoConjunto')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntodb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoConjunto/getPermisoConjunto')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'permisoConjunto/getPermisoConjuntos')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'permisoConjunto/getPermisoConjuntosActivos')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.lazyPermisoConjunto = function (permisoConjunto, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(permisoConjunto, 'permisoConjunto/lazyPermisoConjunto')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntoById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoConjunto/getPermisoConjuntoById')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'permisoConjunto/getPermisoConjuntosById')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntoByEtiqueta = function (etiqueta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(etiqueta, 'permisoConjunto/getPermisoConjuntoByEtiqueta')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosByEtiqueta = function (etiqueta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(etiqueta, 'permisoConjunto/getPermisoConjuntosByEtiqueta')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntoByPermiso = function (permiso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(permiso, 'permisoConjunto/getPermisoConjuntoByPermiso')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosByPermiso = function (permiso, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(permiso, 'permisoConjunto/getPermisoConjuntosByPermiso')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntoByTabla = function (tabla, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tabla, 'permisoConjunto/getPermisoConjuntoByTabla')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosByTabla = function (tabla, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tabla, 'permisoConjunto/getPermisoConjuntosByTabla')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntoByConjunto = function (conjunto, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conjunto, 'permisoConjunto/getPermisoConjuntoByConjunto')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosByConjunto = function (conjunto, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conjunto, 'permisoConjunto/getPermisoConjuntosByConjunto')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntoByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'permisoConjunto/getPermisoConjuntoByStatus')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'permisoConjunto/getPermisoConjuntosByStatus')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntoByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'permisoConjunto/getPermisoConjuntoByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'permisoConjunto/getPermisoConjuntosByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntoByUsuario = function (usuario, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'permisoConjunto/getPermisoConjuntoByUsuario')
            .subscribe(function (data) {
            _evento(_this.permisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.permisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosByUsuario = function (usuario, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuario, 'permisoConjunto/getPermisoConjuntosByUsuario')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    //   add - remove Perfil
    PermisoConjuntoService.prototype.addPerfiles = function (permisoConjuntoPerfil, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(permisoConjuntoPerfil, 'permisoConjunto/addPerfiles')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            ('addPerfiles ok');
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
    PermisoConjuntoService.prototype.getPerfiles = function (permisoConjuntoPerfil, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(permisoConjuntoPerfil, 'permisoConjunto/getPerfiles')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            ('removePerfiles ok');
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
    PermisoConjuntoService.prototype.removePerfiles = function (permisoConjuntoPerfil, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(permisoConjuntoPerfil, 'permisoConjunto/removePerfiles')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            ('removePerfiles ok');
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
    PermisoConjuntoService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'permisoConjunto/custom')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService.prototype.getPermisoConjuntosByDto = function (p_permisoConjunto, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_permisoConjunto, 'permisoConjunto/getPermisoConjuntosByDto')
            .subscribe(function (data) {
            _evento(_this.listaPermisoConjunto = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaPermisoConjunto);
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
    PermisoConjuntoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], PermisoConjuntoService);
    return PermisoConjuntoService;
}());



/***/ }),

/***/ "./src/app/permiso-conjuntos/shared/permiso-conjunto.ts":
/*!**************************************************************!*\
  !*** ./src/app/permiso-conjuntos/shared/permiso-conjunto.ts ***!
  \**************************************************************/
/*! exports provided: PermisoConjunto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoConjunto", function() { return PermisoConjunto; });
/**
 *
 * @author IstmoSoft
 */
var PermisoConjunto = /** @class */ (function () {
    // atributos fin
    function PermisoConjunto(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.etiqueta = null;
        this.permiso = null;
        this.tabla = null;
        this.conjunto = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.usuario = null;
        this.perfiles = null;
        if (source !== null)
            this.from(source);
    }
    PermisoConjunto.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.etiqueta)
            this.etiqueta = source.etiqueta;
        if (source.permiso)
            this.permiso = source.permiso;
        if (source.tabla)
            this.tabla = source.tabla;
        if (source.conjunto)
            this.conjunto = source.conjunto;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.usuario)
            this.usuario = source.usuario;
        if (source.perfiles)
            this.perfiles = source.perfiles;
    };
    PermisoConjunto.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.etiqueta)
            return true;
        if (this.permiso)
            return true;
        if (this.tabla)
            return true;
        if (this.conjunto)
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
    PermisoConjunto.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.etiqueta != null && typeof this.etiqueta === 'string' && this.etiqueta.replace(/^\s+|\s+$/g, '') == "")
            this.etiqueta = null;
        if (this.permiso != null && typeof this.permiso === 'string' && this.permiso.replace(/^\s+|\s+$/g, '') == "")
            this.permiso = null;
        if (this.tabla != null && typeof this.tabla === 'string' && this.tabla.replace(/^\s+|\s+$/g, '') == "")
            this.tabla = null;
        if (this.conjunto != null && typeof this.conjunto === 'string' && this.conjunto.replace(/^\s+|\s+$/g, '') == "")
            this.conjunto = null;
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
    return PermisoConjunto;
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
//# sourceMappingURL=app-permiso-conjuntos-permiso-conjunto-module.js.map