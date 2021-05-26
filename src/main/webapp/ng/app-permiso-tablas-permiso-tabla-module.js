(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-permiso-tablas-permiso-tabla-module"],{

/***/ "./src/app/permiso-tablas/permiso-tabla-conjunto/permiso-tabla-conjunto.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-conjunto/permiso-tabla-conjunto.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-conjunto/permiso-tabla-conjunto.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-conjunto/permiso-tabla-conjunto.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let permisoTabla of listaPermisoTabla \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+permisoTabla.id}\"\n        (click)=\"elegir(permisoTabla,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{permisoTabla.id}}\">{{permisoTabla.id}}</a>\n    </li>\n    <li *ngFor =  \"let permisoTabla of listaPermisoTablaN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+permisoTabla.id}\"\n        (click)=\"elegir(permisoTabla, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{permisoTabla.id}}\">T-{{permisoTabla.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let permisoTabla of listaPermisoTabla ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+permisoTabla.id}\" id=\"tab-I-{{permisoTabla.id}}\">\n\t\t\t<app-permiso-tabla [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [permisoTablaBuscar]=\"permisoTablaBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosPermisoTabla]=\"validosPermisoTabla\"  \n\t\t\t\t\t\t  [permisoTablaService]=\"permisoTablaService\" [(opcion)]=\"opcionPermisoTabla\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(permisoTabla)]=\"listaPermisoTabla[i]\"  [ocultarConjuntos]=\"ocultarConjuntosPermisoTabla\"\n                           [lista_usuarioUltMovPermisoTablaUsuario]=\"lista_usuarioUltMovPermisoTablaUsuario\" \n                           [lista_usuarioPermisoTablaUsuario]=\"lista_usuarioPermisoTablaUsuario\" \n                           [perfilesPermisoTablaPerfilN]=\"perfilesPermisoTablaPerfilN\"\n                           [lista_perfilesPermisoTablaPerfil]=\"lista_perfilesPermisoTablaPerfil\" \n                           [perfilService]=\"perfil_service\" \n                            [opcionperfilesPermisoTablaPerfil]=\"opcionperfilesPermisoTablaPerfil\" \n                            [validosperfilesPermisoTablaPerfil]=\"validosperfilesPermisoTablaPerfil\" \n                            [ocultarConjuntosperfilesPermisoTablaPerfil]=\"ocultarConjuntosperfilesPermisoTablaPerfil\" \n \n\t\t\t\t\t  >\n\t\t\t</app-permiso-tabla>\n        </div>\n        <div *ngFor = \"let permisoTabla of listaPermisoTablaN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+permisoTabla.id}\" id=\"tab-N-{{permisoTabla.id}}\">\n\t\t\t<app-permiso-tabla [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [permisoTablaBuscar]=\"permisoTablaBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosPermisoTabla]=\"validosPermisoTabla\"  \n\t\t\t\t\t\t  [permisoTablaService]=\"permisoTablaService\" [(opcion)]=\"opcionPermisoTabla\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(permisoTabla)]=\"listaPermisoTablaN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosPermisoTabla\"\n                           [lista_usuarioUltMovPermisoTablaUsuario]=\"lista_usuarioUltMovPermisoTablaUsuario\" \n                           [lista_usuarioPermisoTablaUsuario]=\"lista_usuarioPermisoTablaUsuario\" \n                           [perfilesPermisoTablaPerfilN]=\"perfilesPermisoTablaPerfilN\"\n                           [lista_perfilesPermisoTablaPerfil]=\"lista_perfilesPermisoTablaPerfil\" \n                           [perfilService]=\"perfil_service\" \n                            [opcionperfilesPermisoTablaPerfil]=\"opcionperfilesPermisoTablaPerfil\" \n                            [validosperfilesPermisoTablaPerfil]=\"validosperfilesPermisoTablaPerfil\" \n                            [ocultarConjuntosperfilesPermisoTablaPerfil]=\"ocultarConjuntosperfilesPermisoTablaPerfil\" \n \n\t\t\t\t\t  >\n\t\t\t</app-permiso-tabla>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-conjunto/permiso-tabla-conjunto.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-conjunto/permiso-tabla-conjunto.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PermisoTablaConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoTablaConjuntoComponent", function() { return PermisoTablaConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/permiso-tabla */ "./src/app/permiso-tablas/shared/permiso-tabla.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermisoTablaConjuntoComponent = /** @class */ (function () {
    function PermisoTablaConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarPerfilesPermisoTablaPerfil = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovPermisoTablaUsuarioEditar = false;
        this.usuarioPermisoTablaUsuarioEditar = false;
        this.listaPermisoTablaN = [];
        this.listaPermisoTabla = [];
        this.listaPermisoTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoTablaN = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__["PermisoTabla"]();
        this.permisoTablaNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    PermisoTablaConjuntoComponent.prototype.agregarPerfilesPermisoTablaPerfil = function () { this.evtAgregarPerfilesPermisoTablaPerfil.emit(); };
    ;
    PermisoTablaConjuntoComponent.prototype.elegir = function (permisoTabla, tipo) {
        this.idSeleccionado = tipo + "-" + permisoTabla.id;
        this.permisoTablaN = permisoTabla;
    };
    PermisoTablaConjuntoComponent.prototype.ngOnInit = function () {
        this.permisoTablaN.id = 0;
        this.listaPermisoTablaN.push(Object.assign({}, this.permisoTablaN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    PermisoTablaConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__["PermisoTabla"]();
        pg.id = this.listaPermisoTablaN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaPermisoTablaN.push(pg);
    };
    PermisoTablaConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaPermisoTabla; _i < _a.length; _i++) {
            var permisoTabla = _a[_i];
            this.permisoTablaService.actualizarPermisoTabla(permisoTabla, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaPermisoTablaN; _b < _c.length; _b++) {
            var permisoTabla = _c[_b];
            permisoTabla.id = null;
            this.permisoTablaService.guardarPermisoTabla(permisoTabla, this.evtGuardar, this);
        }
    };
    PermisoTablaConjuntoComponent.prototype.evtGuardar = function (permisoTabla, obj) {
        obj.agregados++;
        obj.listaPermisoTabla.push(permisoTabla);
        if (obj.agregados >= obj.listaPermisoTablaN.length) {
            obj.permisoTablaN = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__["PermisoTabla"]();
            obj.listaPermisoTablaN = [];
            obj.permisoTablaN.id = 0;
            obj.idSeleccionado = "N-" + obj.permisoTablaN.id;
            obj.listaPermisoTablaN.push(Object.assign({}, obj.permisoTablaN));
            obj.listaPermisoTablaChange.emit(obj.listaPermisoTabla);
        }
        if (obj.agregados >= obj.listaPermisoTablaN.length &&
            obj.actualizados >= obj.listaPermisoTabla.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    PermisoTablaConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaPermisoTablaN.length &&
                obj.actualizados >= obj.listaPermisoTabla.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    PermisoTablaConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], PermisoTablaConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "permisoTablaBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "validosPermisoTabla", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "ocultarConjuntosPermisoTabla", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "permisoTablaService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PermisoTablaConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "perfilesPermisoTablaPerfilN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "perfilService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "lista_perfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "opcionperfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "validosperfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "evtAgregarPerfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "configuracionPerfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "ocultarConjuntosperfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "lista_usuarioUltMovPermisoTablaUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "lista_usuarioPermisoTablaUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PermisoTablaConjuntoComponent.prototype, "listaPermisoTabla", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "listaPermisoTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__["PermisoTabla"])
    ], PermisoTablaConjuntoComponent.prototype, "permisoTablaN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaConjuntoComponent.prototype, "permisoTablaNChange", void 0);
    PermisoTablaConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-tabla-conjunto',
            template: __webpack_require__(/*! ./permiso-tabla-conjunto.component.html */ "./src/app/permiso-tablas/permiso-tabla-conjunto/permiso-tabla-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./permiso-tabla-conjunto.component.css */ "./src/app/permiso-tablas/permiso-tabla-conjunto/permiso-tabla-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PermisoTablaConjuntoComponent);
    return PermisoTablaConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-permiso-tabla [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n                           [permisoTablaBuscar]=\"permisoTablaBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosPermisoTabla]=\"validosPermisoTabla\"\n                           [permisoTablaService]=\"permisoTabla_service\"\n                           [(opcion)]=\"opcionPermisoTabla\"\n                           [globalesService]=\"globalesService\"\n                           [(permisoTabla)]=\"permisoTabla\"\n                           [ocultarConjuntos]=\"ocultarConjuntosPermisoTabla\"\n                           [lista_usuarioUltMovPermisoTablaUsuario]=\"lista_usuarioUltMovPermisoTablaUsuario\"\n                           [lista_usuarioPermisoTablaUsuario]=\"lista_usuarioPermisoTablaUsuario\"\n                           [perfilesPermisoTablaPerfilN]=\"perfilesPermisoTablaPerfilN\"\n                           [lista_perfilesPermisoTablaPerfil]=\"lista_perfilesPermisoTablaPerfil\"\n                           [perfilService]=\"perfil_service\"\n\n\t\t\t\t\t  >\n\n        </app-permiso-tabla>\n\n        <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!permisoTablaBuscar\" (click)=\"buscarPermisoTablaFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!permisoTablaAgregar\" (click)=\"nuevoPermisoTablaFront()\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!permisoTablaActualizar\" (click)=\"actualizarPermisoTablaFront()\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!permisoTablaEliminar\" (click)=\"eliminarPermisoTablaFront()\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!permisoTablaGuardar\" (click)=\"guardarPermisoTablaFront()\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!permisoTablaCancelar\" (click)=\"cancelarPermisoTablaFront()\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReportePermisoTablaWord\" (click)=\"reportePermisoTablaWord()\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReportePermisoTablaExcel\" (click)=\"reportePermisoTablaExcel()\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReportePermisoTablaPdf\" (click)=\"reportePermisoTablaPdf()\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"buscarPermisoTabla_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-permiso-tabla-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionPermisoTabla]=\"configuracionPermisoTabla\"  (permisoTablaSeleccionado) =\"evtPermisoTablaSeleccionado($event)\">  </app-permiso-tabla-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PermisoTablaCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoTablaCrudComponent", function() { return PermisoTablaCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/permiso-tabla */ "./src/app/permiso-tablas/shared/permiso-tabla.ts");
/* harmony import */ var _shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/permiso-tabla.service */ "./src/app/permiso-tablas/shared/permiso-tabla.service.ts");
/* harmony import */ var _shared_configurar_permiso_tabla__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-permiso-tabla */ "./src/app/permiso-tablas/shared/configurar-permiso-tabla.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil */ "./src/app/perfiles/shared/perfil.ts");
/* harmony import */ var _shared_permiso_tabla_perfil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/permiso-tabla-perfil */ "./src/app/permiso-tablas/shared/permiso-tabla-perfil.ts");
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






var PermisoTablaCrudComponent = /** @class */ (function () {
    function PermisoTablaCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    permisoTabla_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.permisoTabla_service = permisoTabla_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.opcionPermisoTabla = 0;
        this.validosPermisoTabla = {
            id: false,
            etiqueta: false,
            permiso: false,
            tabla: false,
            status: false,
            usuarioUltMov: false,
            usuario: false,
        };
        this.ocultarConjuntosPermisoTabla = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "permisoTabla", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.permisoTablaLazy = false;
        this.permisoTablaPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoTabla = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"]();
        this.permisoTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoTablaTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_permisoTablas = [];
        this.usuarioUltMovPermisoTablaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovPermisoTablaUsuario = [];
        this.usuarioUltMovPermisoTablaUsuarioEditar = false;
        this.usuarioPermisoTablaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioPermisoTablaUsuario = [];
        this.usuarioPermisoTablaUsuarioEditar = false;
        this.perfilesPermisoTablaPerfilEleccion = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        this.perfilesPermisoTablaPerfilN = [];
        this.lista_perfilesPermisoTablaPerfil = [];
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.permisoTablaSeleccion = this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
        this.configuracionPermisoTabla = new _shared_configurar_permiso_tabla__WEBPACK_IMPORTED_MODULE_6__["ConfigurarPermisoTabla"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoTablaUsuario, this);
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoTablaUsuario, this);
        this.configuracionPerfilesPermisoTablaPerfil = new _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_16__["ConfigurarPerfil"]();
        this.perfil_service.getPerfiles(this.evtGetPerfilesPermisoTablaPerfil, this);
        this.limpiarCampos();
    }
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "permisoTablaOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosPermisoTabla)
                return true;
            return !this.permisoTablaActualizar;
        },
        enumerable: true,
        configurable: true
    });
    PermisoTablaCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.permisoTabla && changes.permisoTabla.currentValue == null &&
            this.permisoTabla == null)
            this.permisoTabla = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"]();
        else {
            var aux = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"]();
            if (this.permisoTabla)
                aux.from(this.permisoTabla);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaSeleccion = this.permisoTablaGuardar = false;
                this.permisoTablaActualizar = this.permisoTablaEliminar = this.permisoTablaCancelar = true;
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
                this.permisoTablaSeleccion = this.permisoTablaAgregar = this.permisoTablaBuscar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
                this.permisoTablaGuardar = this.permisoTablaCancelar = true;
            }
        }
    };
    PermisoTablaCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "permisoTabla",
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
        this.permisoTablaPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    PermisoTablaCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.permisoTablaPermisos = true;
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoAtributo && permisos.permisoTabla.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.permisoTabla.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoConjunto && permisos.permisoTabla.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.permisoTabla.PermisoConjunto;
        }
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoTabla && permisos.permisoTabla.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.permisoTabla.PermisoTabla[0];
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
    PermisoTablaCrudComponent.prototype.configurarListaPerfilesPermisoTablaPerfil = function () {
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosPerfil = Object.assign([], this.configuracionPerfilesPermisoTablaPerfil.permisosAtributos);
        var tablaPerfil = Object.assign({}, this.configuracionPerfilesPermisoTablaPerfil.permisosTabla);
        this.configuracionPerfilesPermisoTablaPerfil = new _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_16__["ConfigurarPerfil"]();
        this.configuracionPerfilesPermisoTablaPerfil.permisosAtributos = atributosPerfil;
        this.configuracionPerfilesPermisoTablaPerfil.permisosTabla = tablaPerfil;
        this.configuracionPerfilesPermisoTablaPerfil.permisosTabla.permiso = this.configuracionPerfilesPermisoTablaPerfil.permisosTabla.permiso & 247;
        this.configuracionPerfilesPermisoTablaPerfil.titulo = "Agregar " + this.globalesService.cetiqueta(this, "permisoTabla", "perfilesPermisoTablaPerfil");
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    };
    PermisoTablaCrudComponent.prototype.configurarListaPerfilesPermisoTablaPerfilPos = function () {
        this.configuracionPerfilesPermisoTablaPerfil.rutaLista = this.configuracionPerfilesPermisoTablaPerfil.crudServiceBaseUrl + "/getPerfiles";
        this.configuracionPerfilesPermisoTablaPerfil.rutaAgregar = this.configuracionPerfilesPermisoTablaPerfil.crudServiceBaseUrl + "/addPerfiles";
        this.configuracionPerfilesPermisoTablaPerfil.rutaEliminar = this.configuracionPerfilesPermisoTablaPerfil.crudServiceBaseUrl + "/removePerfiles";
        var vperfil = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        vperfil.from(this.perfilesPermisoTablaPerfilEleccion);
        this.configuracionPerfilesPermisoTablaPerfil.perfilConsulta = vperfil.toDto();
        this.configuracionPerfilesPermisoTablaPerfil.tipocampoAgEl = "PermisoTablaPerfil";
        this.configuracionPerfilesPermisoTablaPerfil.campoAgEl = new _shared_permiso_tabla_perfil__WEBPACK_IMPORTED_MODULE_15__["PermisoTablaPerfil"]();
        this.configuracionPerfilesPermisoTablaPerfil.campoAgEl.perfil = vperfil.toDto();
    };
    PermisoTablaCrudComponent.prototype.evtGetUsuarioUltMovPermisoTablaUsuario = function (lista_usuarioUltMovPermisoTablaUsuario, obj) {
        obj.lista_usuarioUltMovPermisoTablaUsuario = lista_usuarioUltMovPermisoTablaUsuario;
        obj.actualizar_UsuarioUltMovPermisoTablaUsuario();
    };
    PermisoTablaCrudComponent.prototype.evtGetUsuarioPermisoTablaUsuario = function (lista_usuarioPermisoTablaUsuario, obj) {
        obj.lista_usuarioPermisoTablaUsuario = lista_usuarioPermisoTablaUsuario;
        obj.actualizar_UsuarioPermisoTablaUsuario();
    };
    PermisoTablaCrudComponent.prototype.evtGetPerfilesPermisoTablaPerfil = function (lista_perfilesPermisoTablaPerfil, obj) {
        obj.lista_perfilesPermisoTablaPerfil = lista_perfilesPermisoTablaPerfil;
    };
    PermisoTablaCrudComponent.prototype.actualizar_UsuarioUltMovPermisoTablaUsuario = function () {
        if (this.usuarioUltMovPermisoTablaUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovPermisoTablaUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovPermisoTablaUsuarioEleccion.id) {
                    this.usuarioUltMovPermisoTablaUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    PermisoTablaCrudComponent.prototype.actualizar_UsuarioPermisoTablaUsuario = function () {
        if (this.usuarioPermisoTablaUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioPermisoTablaUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioPermisoTablaUsuarioEleccion.id) {
                    this.usuarioPermisoTablaUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    PermisoTablaCrudComponent.prototype.ngDoCheck = function () {
    };
    PermisoTablaCrudComponent.prototype.agregarPerfilesPermisoTablaPerfil = function () {
        var permisoTablaPerfil = new _shared_permiso_tabla_perfil__WEBPACK_IMPORTED_MODULE_15__["PermisoTablaPerfil"]();
        permisoTablaPerfil.permisoTabla = this.permisoTabla;
        permisoTablaPerfil.perfil = this.perfilesPermisoTablaPerfilEleccion;
        this.permisoTabla_service.addPerfiles(permisoTablaPerfil, this.evtAgregarPerfilesPermisoTablaPerfil, this);
    };
    PermisoTablaCrudComponent.prototype.evtAgregarPerfilesPermisoTablaPerfil = function (respuesta, obj) {
        if (respuesta) {
            obj.configurarListaPerfilesPermisoTablaPerfil();
            obj.configurarListaPerfilesPermisoTablaPerfilPos();
            bootbox.alert("Perfil agregada con �xito");
        }
    };
    PermisoTablaCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosPermisoTabla['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosPermisoTabla['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "validaEtiqueta", {
        get: function () {
            return this.validosPermisoTabla['etiqueta'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "validaPermiso", {
        get: function () {
            return this.validosPermisoTabla['permiso'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "validaTabla", {
        get: function () {
            return this.validosPermisoTabla['tabla'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosPermisoTabla['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosPermisoTabla['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "validaUsuario", {
        get: function () {
            return this.validosPermisoTabla['usuario'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaEtiqueta && this.validaPermiso && this.validaTabla && this.validaStatus && this.validaUsuarioUltMov && this.validaUsuario;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    PermisoTablaCrudComponent.prototype.obtenerPermisoTablas = function (lista, objeto) {
        objeto.lista_permisoTablas = lista;
        if (lista && lista.length > 0) {
            objeto.permisoTabla.from(lista[0]);
            objeto.evtPermisoTablaSeleccionado(objeto.permisoTabla);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    PermisoTablaCrudComponent.prototype.evn_lazy_permisoTabla = function (permisoTabla, objeto) {
        objeto.permisoTabla = permisoTabla;
        objeto.permisoTablaChange.emit(objeto.permisoTabla);
        objeto.configuarCombosObjetos();
        objeto.permisoTablaLazy = true;
    };
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "datosReportePermisoTablaWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.permisoTablaActualizar && this.permisoTablaLazy && this.globalesService.preporteWord(this, "permisoTabla"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "datosReportePermisoTablaExcel", {
        get: function () {
            return !(this.permisoTablaActualizar && this.permisoTablaLazy && this.globalesService.preporteExcel(this, "permisoTabla"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermisoTablaCrudComponent.prototype, "datosReportePermisoTablaPdf", {
        get: function () {
            return !(this.permisoTablaActualizar && this.permisoTablaLazy && this.globalesService.preportePdf(this, "permisoTabla"));
        },
        enumerable: true,
        configurable: true
    });
    PermisoTablaCrudComponent.prototype.reportePermisoTablaExcel = function () {
        var nombre = "PermisoTabla.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "permisoTabla": this.permisoTabla };
        parametros["plantilla"] = "PermisoTabla.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    PermisoTablaCrudComponent.prototype.reportePermisoTablaWord = function () {
        var nombre = "PermisoTabla.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "permisoTabla": this.permisoTabla };
        parametros["plantilla"] = "PermisoTabla.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    PermisoTablaCrudComponent.prototype.reportePermisoTablaPdf = function () {
        var nombre = "PermisoTabla.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "permisoTabla": this.permisoTabla };
        parametros["plantilla"] = "PermisoTabla.docx";
        parametros["salida"] = "PermisoTabla.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    PermisoTablaCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
        this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaCancelar = true;
    };
    PermisoTablaCrudComponent.prototype.buscarPermisoTablaFront = function () {
        this.accionesBuscar();
        var vpermisoTabla = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"]();
        vpermisoTabla.from(this.permisoTabla);
        this.configuracionPermisoTabla = new _shared_configurar_permiso_tabla__WEBPACK_IMPORTED_MODULE_6__["ConfigurarPermisoTabla"]();
        this.configuracionPermisoTabla.permisosTabla = { "tabla": "permisoTabla", "permiso": 8 };
        this.configuracionPermisoTabla.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionPermisoTabla.permisoTablaConsulta = vpermisoTabla;
        this.permisosacciones();
        $("#buscarPermisoTabla_" + this.nombre).modal();
    };
    PermisoTablaCrudComponent.prototype.buscarPermisoTablaBack = function (permisoTabla) {
        this.permisoTabla_service.getPermisoTablasByDto(permisoTabla, this.eventoSrvPermisoTablaBuscar, this);
    };
    PermisoTablaCrudComponent.prototype.eventoSrvPermisoTablaBuscar = function (lista, objeto) {
        objeto.lista_permisoTablas = lista;
        if (lista && lista.length > 0) {
            objeto.permisoTabla = lista[0];
            objeto.permisoTablaLazy = false;
            objeto.permisoTabla_service.lazyPermisoTabla(objeto.permisoTabla, objeto.evn_lazy_permisoTabla, objeto);
        }
    };
    PermisoTablaCrudComponent.prototype.guardarPermisoTablaFront = function () {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarPermisoTablaBack(this.permisoTabla);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    PermisoTablaCrudComponent.prototype.guardarPermisoTablaBack = function (permisoTabla) {
        if (permisoTabla.usuarioUltMov == null)
            permisoTabla.usuarioUltMov = this.globalesService.dameUsuario();
        if (permisoTabla.status == null || permisoTabla.status == "")
            permisoTabla.status = 1;
        this.permisoTabla_service.guardarPermisoTabla(permisoTabla, this.eventoSrvPermisoTablaGuardar, this);
    };
    PermisoTablaCrudComponent.prototype.eventoSrvPermisoTablaGuardar = function (permisoTabla, obj) {
        obj.permisoTabla = permisoTabla;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"]();
        aux.from(permisoTabla);
        obj.permisoTablaChange.emit(aux);
        obj.permisoTablaTablaChange.emit(aux);
        obj.permisoTablaLazy = false;
        obj.permisoTabla_service.lazyPermisoTabla(obj.permisoTabla, obj.evn_lazy_permisoTabla, obj);
        obj.accionesActualizar();
    };
    PermisoTablaCrudComponent.prototype.actualizarPermisoTablaFront = function () {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarPermisoTablaBack(this.permisoTabla);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    PermisoTablaCrudComponent.prototype.actualizarPermisoTablaBack = function (permisoTabla) {
        permisoTabla.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoTabla_service.actualizarPermisoTabla(permisoTabla, this.eventoSrvPermisoTablaActualizar, this);
    };
    PermisoTablaCrudComponent.prototype.eventoSrvPermisoTablaActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.permisoTablaLazy = false;
            obj.permisoTabla_service.lazyPermisoTabla(obj.permisoTabla, obj.evn_lazy_permisoTabla, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.permisoTabla);
            obj.permisoTablaChange.emit(aux);
            obj.permisoTablaTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    PermisoTablaCrudComponent.prototype.eliminarPermisoTablaFront = function () {
        this.accion = 4;
        this.eliminarPermisoTablaBack(this.permisoTabla);
        this.permisosacciones();
        this.accionesBuscar();
    };
    PermisoTablaCrudComponent.prototype.eliminarPermisoTablaBack = function (permisoTabla) {
        permisoTabla.usuarioUltMov = this.globalesService.dameUsuario();
        this.permisoTabla_service.eliminarPermisoTabla(permisoTabla, this.eventoSrvPermisoTablaEliminar, this);
    };
    PermisoTablaCrudComponent.prototype.eventoSrvPermisoTablaEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.permisoTabla = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"]();
            obj.permisoTablaChange.emit(obj.permisoTabla);
            obj.permisoTablaTablaChange.emit(obj.permisoTabla);
            obj.limpiarCampos();
        }
    };
    PermisoTablaCrudComponent.prototype.cancelarPermisoTablaFront = function () {
        this.accion = 6;
        this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
        this.permisoTablaBuscar = this.permisoTablaAgregar = true;
        this.permisosacciones();
    };
    PermisoTablaCrudComponent.prototype.nuevoPermisoTablaFront = function () {
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
                this.permisoTablaSeleccion = this.permisoTablaAgregar = this.permisoTablaBuscar = this.permisoTablaActualizar = this.permisoTablaEliminar = false;
                this.permisoTablaGuardar = this.permisoTablaCancelar = true;
            }.bind(this)
        });
    };
    PermisoTablaCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovPermisoTablaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovPermisoTablaUsuario, this);
        this.lista_usuarioPermisoTablaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioPermisoTablaUsuario, this);
    };
    PermisoTablaCrudComponent.prototype.configurarTablasConjuntos = function () {
        this.configurarListaPerfilesPermisoTablaPerfil();
        this.configurarListaPerfilesPermisoTablaPerfilPos();
    };
    PermisoTablaCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaSeleccion = this.permisoTablaGuardar = false;
        this.permisoTablaActualizar = this.permisoTablaEliminar = this.permisoTablaCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    PermisoTablaCrudComponent.prototype.evtPermisoTablaSeleccionado = function (permisoTabla) {
        this.permisoTabla = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"]();
        this.permisoTabla.from(permisoTabla);
        this.permisoTablaLazy = false;
        this.permisoTabla_service.lazyPermisoTabla(this.permisoTabla, this.evn_lazy_permisoTabla, this);
        this.accion = 7;
        this.permisoTablaBuscar = this.permisoTablaAgregar = this.permisoTablaSeleccion = this.permisoTablaGuardar = false;
        this.permisoTablaActualizar = this.permisoTablaEliminar = this.permisoTablaCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarPermisoTabla_" + this.nombre).modal("hide");
    };
    PermisoTablaCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisoTablaSeleccion = this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false; // ******************** maquina
        this.permisoTablaBuscar = this.permisoTablaAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    PermisoTablaCrudComponent.prototype.permisosacciones = function () {
        if (this.permisoTablaBuscar)
            this.permisoTablaBuscar = this.globalesService.pbuscar(this, "permisoTabla");
        if (this.permisoTablaActualizar)
            this.permisoTablaActualizar = (this.globalesService.pacutalizar(this, "permisoTabla") && this.globalesService.pbuscar(this, "permisoTabla"));
        if (this.permisoTablaEliminar)
            this.permisoTablaEliminar = (this.globalesService.peliminar(this, "permisoTabla") && this.globalesService.pbuscar(this, "permisoTabla"));
        if (this.permisoTablaAgregar)
            this.permisoTablaAgregar = this.globalesService.pagregar(this, "permisoTabla");
    };
    PermisoTablaCrudComponent.prototype.permisosaccionesInicio = function () {
        this.permisoTablaSeleccion = this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false; // *************************** maquina
        this.permisoTablaBuscar = this.permisoTablaAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    PermisoTablaCrudComponent.prototype.limpiarCampos = function () {
        this.permisoTabla = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"]();
        this.usuarioUltMovPermisoTablaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.usuarioPermisoTablaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.perfilesPermisoTablaPerfilEleccion = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        this.permisoTablaChange.emit(this.permisoTabla);
        this.permisoTablaSeleccion = this.permisoTablaCancelar = this.permisoTablaGuardar = this.permisoTablaActualizar = this.permisoTablaEliminar = false; // *************************** maquina
        this.permisoTablaBuscar = this.permisoTablaAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PermisoTablaCrudComponent.prototype, "ocultarConjuntosPermisoTabla", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PermisoTablaCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PermisoTablaCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["PermisoTabla"])
    ], PermisoTablaCrudComponent.prototype, "permisoTabla", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaCrudComponent.prototype, "permisoTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaCrudComponent.prototype, "permisoTablaTablaChange", void 0);
    PermisoTablaCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-tabla-crud',
            template: __webpack_require__(/*! ./permiso-tabla-crud.component.html */ "./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.html"),
            styles: [__webpack_require__(/*! ./permiso-tabla-crud.component.css */ "./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
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
            _shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"]])
    ], PermisoTablaCrudComponent);
    return PermisoTablaCrudComponent;
}());



/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para permisoTabla-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionPermisoTabla.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_permisoTabla_{{nombregrid}}\">\n                <div id=\"grid_permisoTabla_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PermisoTablaListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoTablaListKendoComponent", function() { return PermisoTablaListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/permiso-tabla */ "./src/app/permiso-tablas/shared/permiso-tabla.ts");
/* harmony import */ var _shared_configurar_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-permiso-tabla */ "./src/app/permiso-tablas/shared/configurar-permiso-tabla.ts");
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
var PermisoTablaListKendoComponent = /** @class */ (function () {
    function PermisoTablaListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.permisoTablaSeleccionado = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_3__["PermisoTabla"]();
        this.configuracionPermisoTabla = new _shared_configurar_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["ConfigurarPermisoTabla"]();
        this.nombregrid = "";
        this.evtPermisoTablaSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "permisoTabla";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoTabla'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'permisoTabla'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    PermisoTablaListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionPermisoTabla.titulo.indexOf("Catálogo") != -1) {
            this.configuracionPermisoTabla.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    PermisoTablaListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionPermisoTabla && changes.configuracionPermisoTabla.currentValue &&
            (changes.configuracionPermisoTabla.previousValue instanceof _shared_configurar_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["ConfigurarPermisoTabla"])) {
            if (changes.configuracionPermisoTabla.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionPermisoTabla.currentValue.permisosAtributos;
            if (changes.configuracionPermisoTabla.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionPermisoTabla.currentValue.permisosTabla;
            if ($("#grid_permisoTabla_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    PermisoTablaListKendoComponent.prototype.ngOnInit = function () {
        self["grid_permisoTabla_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionPermisoTabla.permisosAtributos &&
            this.configuracionPermisoTabla.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "permisoTabla",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoTabla'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoTabla'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'PermisoTabla'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionPermisoTabla.permisosAtributos)
            this.permisosAtributos = this.configuracionPermisoTabla.permisosAtributos;
        if (this.configuracionPermisoTabla.permisosTabla)
            this.permisosTabla = this.configuracionPermisoTabla.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    PermisoTablaListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoAtributo && permisos.permisoTabla.PermisoAtributo.length > 0
            && !obj.configuracionPermisoTabla.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.permisoTabla.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.PermisoTabla.PermisoAtributo ;
        }
        if (permisos && permisos.permisoTabla && permisos.permisoTabla.PermisoTabla && permisos.permisoTabla.PermisoTabla.length > 0
            && !obj.configuracionPermisoTabla.permisosTabla) {
            obj.globalesService.evtTablas(permisos.permisoTabla.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.PermisoTabla.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    PermisoTablaListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_permisoTabla_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    PermisoTablaListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionPermisoTabla.campoAgEl != null
            && this.configuracionPermisoTabla.permisoTablaConsulta
            && this.configuracionPermisoTabla.permisoTablaConsulta.isOk
            && !this.configuracionPermisoTabla.permisoTablaConsulta.isOk())
            return;
        if (this.configuracionPermisoTabla.permisoTablaConsulta) {
            if (!this.configuracionPermisoTabla.campoAgEl && this.configuracionPermisoTabla.permisoTablaConsulta instanceof _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_3__["PermisoTabla"])
                this.configuracionPermisoTabla.rutaLista = this.crudServiceBaseUrl + "/getPermisoTablasByDto";
            this.lista = this.configuracionPermisoTabla.lecturaP(completar, this.configuracionPermisoTabla.permisoTablaConsulta);
            if (this.configuracionPermisoTabla.campoAgEl) {
                this.rutaAgregar = this.configuracionPermisoTabla.agregarP(function () { }, this.configuracionPermisoTabla.campoAgEl);
                this.rutaEliminar = this.configuracionPermisoTabla.eliminarP(function () { }, this.configuracionPermisoTabla.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionPermisoTabla.agregarP(completar, this.configuracionPermisoTabla.permisoTablaConsulta);
                this.rutaEliminar = this.configuracionPermisoTabla.eliminarP(completar, this.configuracionPermisoTabla.permisoTablaConsulta);
            }
        }
        else {
            this.lista = this.configuracionPermisoTabla.lectura();
            this.rutaAgregar = this.configuracionPermisoTabla.agregar();
            this.rutaEliminar = this.configuracionPermisoTabla.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "permisoTabla", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "permisoTabla", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "permisoTabla", "tabla")) {
            campos["tabla"] = { editable: this.globalesService.aenable(this, "permisoTabla", "tabla"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoTabla", "permiso")) {
            campos["permiso"] = { editable: this.globalesService.aenable(this, "permisoTabla", "permiso"), nullable: true };
        }
        if (this.globalesService.avisible(this, "permisoTabla", "etiqueta")) {
            campos["etiqueta"] = { editable: this.globalesService.aenable(this, "permisoTabla", "etiqueta"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "permisoTabla", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "permisoTabla", "status"), nullable: true, defaultValue: "1" };
        }
        if (this.globalesService.avisible(this, "permisoTabla", "usuario")) {
            campos["usuario"] = { editable: this.globalesService.aenable(this, "permisoTabla", "usuario"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "permisoTabla", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "permisoTabla", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionPermisoTabla.rutaActualizar,
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
            if (self.configuracionPermisoTabla.campoAgEl) {
                if (self.configuracionPermisoTabla.tipocampoAgEl == "PermisoTablaPermisoTabla")
                    self.configuracionPermisoTabla.campoAgEl.permisoTabla2 = options.models[0];
                else
                    self.configuracionPermisoTabla.campoAgEl.permisoTabla = options.models[0];
                return JSON.stringify(self.configuracionPermisoTabla.campoAgEl);
            }
            else if (est.options[operation].data.models.permisoTabla) {
                est.options[operation].data.models.permisoTabla2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    PermisoTablaListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "permisoTabla", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "permisoTabla", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "permisoTabla", "tabla")) {
            columnas.push({ field: "tabla", title: this.globalesService.aetiqueta(this, "permisoTabla", "tabla"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoTabla", "permiso")) {
            columnas.push({ field: "permiso", title: this.globalesService.aetiqueta(this, "permisoTabla", "permiso") });
        }
        if (this.globalesService.avisible(this, "permisoTabla", "etiqueta")) {
            columnas.push({ field: "etiqueta", title: this.globalesService.aetiqueta(this, "permisoTabla", "etiqueta"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "permisoTabla", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "permisoTabla", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this, "permisoTabla", "usuario")) {
            columnas.push({ field: "usuario", title: this.globalesService.aetiqueta(this, "permisoTabla", "usuario"), editor: usuarioDropDownEditor, template: " #if (usuario){#   #=usuario.password# # } # " });
        }
        if (this.globalesService.avisible(this, "permisoTabla", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "permisoTabla", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "permisoTabla"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "permisoTabla")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "permisoTabla")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "permisoTabla") && this.configuracionPermisoTabla.permisoTablaConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_permisoTabla_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_permisoTabla_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionPermisoTabla.altoComponente,
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
        this.grid = $("#grid_permisoTabla_" + this.nombregrid).data("kendoGrid");
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
    PermisoTablaListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_permisoTabla_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.permisoTablaSeleccionado = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_3__["PermisoTabla"]();
        gridac.permisoTablaSeleccionado.from(dataItem);
        gridac.evtPermisoTablaSeleccionado.emit(gridac.permisoTablaSeleccionado);
        (gridac.permisoTablaSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_permiso_tabla__WEBPACK_IMPORTED_MODULE_4__["ConfigurarPermisoTabla"])
    ], PermisoTablaListKendoComponent.prototype, "configuracionPermisoTabla", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PermisoTablaListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("permisoTablaSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PermisoTablaListKendoComponent.prototype, "evtPermisoTablaSeleccionado", void 0);
    PermisoTablaListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-tabla-list-kendo',
            template: __webpack_require__(/*! ./permiso-tabla-list-kendo.component.html */ "./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./permiso-tabla-list-kendo.component.css */ "./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], PermisoTablaListKendoComponent);
    return PermisoTablaListKendoComponent;
}());



/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PermisoTablaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoTablaRoutingModule", function() { return PermisoTablaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _permiso_tablas_permiso_tabla_list_kendo_permiso_tabla_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component */ "./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.ts");
/* harmony import */ var _permiso_tablas_permiso_tabla_crud_permiso_tabla_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component */ "./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.ts");
/* harmony import */ var _permiso_tablas_permiso_tabla_table_permiso_tabla_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../permiso-tablas/permiso-tabla-table/permiso-tabla-table.component */ "./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'permiso-tabla-list-kendo', component: _permiso_tablas_permiso_tabla_list_kendo_permiso_tabla_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["PermisoTablaListKendoComponent"] },
    { path: 'permiso-tabla-crud', component: _permiso_tablas_permiso_tabla_crud_permiso_tabla_crud_component__WEBPACK_IMPORTED_MODULE_3__["PermisoTablaCrudComponent"] },
    { path: 'permiso-tabla-table', component: _permiso_tablas_permiso_tabla_table_permiso_tabla_table_component__WEBPACK_IMPORTED_MODULE_4__["PermisoTablaTableComponent"] },
];
var PermisoTablaRoutingModule = /** @class */ (function () {
    function PermisoTablaRoutingModule() {
    }
    PermisoTablaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PermisoTablaRoutingModule);
    return PermisoTablaRoutingModule;
}());



/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_permisoTabla\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('permisoTabla','id')\" >{{aetiqueta('permisoTabla','id')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','tabla')\" >{{aetiqueta('permisoTabla','tabla')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','permiso')\" >{{aetiqueta('permisoTabla','permiso')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','etiqueta')\" >{{aetiqueta('permisoTabla','etiqueta')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','status')\" >{{aetiqueta('permisoTabla','status')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','usuario')\" >{{aetiqueta('permisoTabla','usuario')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','usuarioUltMov')\" >{{aetiqueta('permisoTabla','usuarioUltMov')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('permisoTabla','id')\" >{{aetiqueta('permisoTabla','id')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','tabla')\" >{{aetiqueta('permisoTabla','tabla')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','permiso')\" >{{aetiqueta('permisoTabla','permiso')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','etiqueta')\" >{{aetiqueta('permisoTabla','etiqueta')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','status')\" >{{aetiqueta('permisoTabla','status')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','usuario')\" >{{aetiqueta('permisoTabla','usuario')}}</th>\n            <th [class.hidden]=\"!avisible('permisoTabla','usuarioUltMov')\" >{{aetiqueta('permisoTabla','usuarioUltMov')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-permiso-tabla [class.hidden]=\"primero\" [(permisoTabla)]=\"permisoTablaSeleccionado\" (permisoTablaTablaChange)=\"cambio_permisoTabla($event)\"> </app-permiso-tabla>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PermisoTablaTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoTablaTableComponent", function() { return PermisoTablaTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/permiso-tabla */ "./src/app/permiso-tablas/shared/permiso-tabla.ts");
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






var PermisoTablaTableComponent = /** @class */ (function () {
    function PermisoTablaTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "permisoTabla", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.permisoTablaSeleccionado = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__["PermisoTabla"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'permisoTabla'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    PermisoTablaTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'permisoTabla'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    PermisoTablaTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(PermisoTablaTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    PermisoTablaTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("permisoTabla", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("permisoTabla", "tabla"))
            columnasNoVisibles.push(1);
        columnas.push({ "data": "tabla" });
        if (!this.avisible("permisoTabla", "permiso"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "permiso" });
        if (!this.avisible("permisoTabla", "etiqueta"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "etiqueta" });
        if (!this.avisible("permisoTabla", "status"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "status" });
        if (!this.avisible("permisoTabla", "usuario"))
            columnasNoVisibles.push(5);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuario)
                    return "<span style=\"cursor: pointer\">" + oObj.usuario.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("permisoTabla", "usuarioUltMov"))
            columnasNoVisibles.push(6);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (self.pacutalizar("permisoTabla"))
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
        var tabla = $('#tabla_permisoTabla').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_permisoTabla_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.permisoTablaSeleccionado = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__["PermisoTabla"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "permisoTabla/getPermisoTablas",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_permisoTabla tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_permisoTabla').DataTable().row(this).data();
                self.permisoTablaSeleccionado = new _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__["PermisoTabla"]();
                self.permisoTablaSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_permisoTabla').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    PermisoTablaTableComponent.prototype.ngOnInit = function () {
    };
    PermisoTablaTableComponent.prototype.cambio_permisoTabla = function (permisoTabla) {
        $('#tabla_permisoTabla').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    PermisoTablaTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    PermisoTablaTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    PermisoTablaTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    PermisoTablaTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    PermisoTablaTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    PermisoTablaTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    PermisoTablaTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    PermisoTablaTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    PermisoTablaTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    PermisoTablaTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    PermisoTablaTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    PermisoTablaTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    PermisoTablaTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    PermisoTablaTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    PermisoTablaTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    PermisoTablaTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-tabla-table',
            template: __webpack_require__(/*! ./permiso-tabla-table.component.html */ "./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.html"),
            styles: [__webpack_require__(/*! ./permiso-tabla-table.component.css */ "./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], PermisoTablaTableComponent);
    return PermisoTablaTableComponent;
}());



/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla.module.ts":
/*!********************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla.module.ts ***!
  \********************************************************/
/*! exports provided: PermisoTablaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoTablaModule", function() { return PermisoTablaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _permiso_tabla_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permiso-tabla-routing.module */ "./src/app/permiso-tablas/permiso-tabla-routing.module.ts");
/* harmony import */ var _permiso_tabla_list_kendo_permiso_tabla_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permiso-tabla-list-kendo/permiso-tabla-list-kendo.component */ "./src/app/permiso-tablas/permiso-tabla-list-kendo/permiso-tabla-list-kendo.component.ts");
/* harmony import */ var _permiso_tabla_crud_permiso_tabla_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permiso-tabla-crud/permiso-tabla-crud.component */ "./src/app/permiso-tablas/permiso-tabla-crud/permiso-tabla-crud.component.ts");
/* harmony import */ var _permiso_tabla_conjunto_permiso_tabla_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permiso-tabla-conjunto/permiso-tabla-conjunto.component */ "./src/app/permiso-tablas/permiso-tabla-conjunto/permiso-tabla-conjunto.component.ts");
/* harmony import */ var _permiso_tabla_permiso_tabla_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permiso-tabla/permiso-tabla.component */ "./src/app/permiso-tablas/permiso-tabla/permiso-tabla.component.ts");
/* harmony import */ var _permiso_tabla_table_permiso_tabla_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./permiso-tabla-table/permiso-tabla-table.component */ "./src/app/permiso-tablas/permiso-tabla-table/permiso-tabla-table.component.ts");
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











var PermisoTablaModule = /** @class */ (function () {
    function PermisoTablaModule(parentModule) {
        if (parentModule) {
            throw new Error('PermisoTablaModule is already loaded. Import it in the AppModule only');
        }
    }
    PermisoTablaModule_1 = PermisoTablaModule;
    PermisoTablaModule.forRoot = function () {
        return {
            ngModule: PermisoTablaModule_1,
            providers: []
        };
    };
    var PermisoTablaModule_1;
    PermisoTablaModule = PermisoTablaModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _permiso_tabla_routing_module__WEBPACK_IMPORTED_MODULE_3__["PermisoTablaRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
            ],
            declarations: [
                _permiso_tabla_list_kendo_permiso_tabla_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["PermisoTablaListKendoComponent"],
                _permiso_tabla_permiso_tabla_component__WEBPACK_IMPORTED_MODULE_7__["PermisoTablaComponent"],
                _permiso_tabla_crud_permiso_tabla_crud_component__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaCrudComponent"],
                _permiso_tabla_conjunto_permiso_tabla_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaConjuntoComponent"],
                _permiso_tabla_table_permiso_tabla_table_component__WEBPACK_IMPORTED_MODULE_8__["PermisoTablaTableComponent"],
            ],
            exports: [
                _permiso_tabla_list_kendo_permiso_tabla_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["PermisoTablaListKendoComponent"],
                _permiso_tabla_permiso_tabla_component__WEBPACK_IMPORTED_MODULE_7__["PermisoTablaComponent"],
                _permiso_tabla_crud_permiso_tabla_crud_component__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaCrudComponent"],
                _permiso_tabla_conjunto_permiso_tabla_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaConjuntoComponent"],
                _permiso_tabla_table_permiso_tabla_table_component__WEBPACK_IMPORTED_MODULE_8__["PermisoTablaTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [PermisoTablaModule])
    ], PermisoTablaModule);
    return PermisoTablaModule;
}());



/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla/permiso-tabla.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla/permiso-tabla.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla/permiso-tabla.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla/permiso-tabla.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\"     >\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h1>{{etiquetaGeneral}}</h1></div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                     <app-componente-cadena [componente]=\"'permisoTabla'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"permisoTablaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoTabla['id']\"\n                                                   [(dato)]=\"permisoTabla.id\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoTabla'\"\n                                                   [atributo]=\"'tabla'\"\n                                                   [buscar]=\"permisoTablaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoTabla['tabla']\"\n                                                   [(dato)]=\"permisoTabla.tabla\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoTabla'\"\n                                                   [atributo]=\"'permiso'\"\n                                                   [buscar]=\"permisoTablaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoTabla['permiso']\"\n                                                   [(dato)]=\"permisoTabla.permiso\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoTabla'\"\n                                                   [atributo]=\"'etiqueta'\"\n                                                   [buscar]=\"permisoTablaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoTabla['etiqueta']\"\n                                                   [(dato)]=\"permisoTabla.etiqueta\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'permisoTabla'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"permisoTablaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosPermisoTabla['status']\"\n                                                   [(dato)]=\"permisoTabla.status\"   class=\"w-100\" >\n                    </app-componente-cadena >\n<!--         <div [class.hidden]=\"OcultarConjuntosPermisoTabla\" >\n            <div class=\"clearfix\"> </div>\n            <div class=\"form-group row\"  *ngIf=\"globalesService.cagregar(this,'permisoTabla','perfilesPermisoTablaPerfil')\" >\n              <div class=\"col-12 mr-ml-4\" >\n                <label for=\"sel1\">{{globalesService.cetiqueta(this,'permisoTabla','perfilesPermisoTablaPerfil')}}:</label>\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" [(ngModel)]=\"perfilesPermisoTablaPerfilEleccion\" name=\"perfilesPermisoTablaPerfilEleccion\">\n                            <option *ngFor = \"let perfilesPermisoTablaPerfil of lista_perfilesPermisoTablaPerfil\" [ngValue]=\"perfilesPermisoTablaPerfil\"  >{{perfilesPermisoTablaPerfil.nombre}}</option>\n                        </select>\n                        <span class=\"input-group-btn\">\n                             <button class=\"btn btn-default\" type=\"button\" (click)=\"agregarPerfilesPermisoTablaPerfil()\" >Agregar</button>\n                        </span>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <app-perfil-list-kendo *ngIf=\"globalesService.cagregar(this,'permisoTabla','perfilesPermisoTablaPerfil') || globalesService.cagregarnuevo(this,'permisoTabla','perfilesPermisoTablaPerfil') \"\n                                 [nombregrid]=\"'perfilesPermisoTablaPerfil_'+nombre\"  [configuracionPerfil]=\"configuracionPerfilesPermisoTablaPerfil\" ></app-perfil-list-kendo>\n        </div> -->\n                    <div>\n                        <app-componente-objeto [componente]=\"'permisoTabla'\"\n                                               [atributo]=\"'usuario'\"\n                                               [buscar]=\"permisoTablaBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosPermisoTabla['usuario']\"\n                                               [(dato)]=\"permisoTabla.usuario\"  class=\"w-100\"\n                                               [atributoVisible]=\"'username'\" >\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'permisoTabla','usuario')\" >\n                                   <!-- <app-usuario-crud [nombre]=\"'usuario'\" [usuario]=\"permisoTabla.usuario\" (usuarioChange)=\"evtUsuario($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioEditar\" ></app-usuario-crud> -->\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <app-componente-objeto [componente]=\"'permisoTabla'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"permisoTablaBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosPermisoTabla['usuarioUltMov']\"\n                                               [(dato)]=\"permisoTabla.usuarioUltMov\"  class=\"w-100\"\n                                               [atributoVisible]=\"'username'\" >\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'permisoTabla','usuarioUltMov')\" >\n                                   <!-- <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"permisoTabla.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud> -->\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/permiso-tablas/permiso-tabla/permiso-tabla.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/permiso-tablas/permiso-tabla/permiso-tabla.component.ts ***!
  \*************************************************************************/
/*! exports provided: PermisoTablaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoTablaComponent", function() { return PermisoTablaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/permiso-tabla */ "./src/app/permiso-tablas/shared/permiso-tabla.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermisoTablaComponent = /** @class */ (function () {
    function PermisoTablaComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.permisoTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarPerfilesPermisoTablaPerfil = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovPermisoTablaUsuarioEditar = false;
        this.usuarioPermisoTablaUsuarioEditar = false;
    }
    PermisoTablaComponent.prototype.agregarPerfilesPermisoTablaPerfil = function () { this.evtAgregarPerfilesPermisoTablaPerfil.emit(); };
    ;
    PermisoTablaComponent.prototype.actualizarPermisoTabla = function () {
        if (this.permisoTabla.id == null) {
            this.permisoTablaService.guardarPermisoTabla(this.permisoTabla, this.evtGuardar, this);
        }
        else {
            this.permisoTablaService.actualizarPermisoTabla(this.permisoTabla, this.evtActualiza, this);
        }
    };
    PermisoTablaComponent.prototype.evtGuardar = function (permisoTabla, obj) {
        obj.permisoTabla = permisoTabla;
        obj.permisoTablaChange.emit(obj.permisoTabla);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    PermisoTablaComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.permisoTablaChange.emit(obj.permisoTabla);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    PermisoTablaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarPermisoTabla();
            }
        }
    };
    PermisoTablaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "permisoTablaBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "validosPermisoTabla", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_permiso_tabla__WEBPACK_IMPORTED_MODULE_1__["PermisoTabla"])
    ], PermisoTablaComponent.prototype, "permisoTabla", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "permisoTablaService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PermisoTablaComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "permisoTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "perfilesPermisoTablaPerfilN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "perfilService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "lista_perfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "opcionperfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "validosperfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "evtAgregarPerfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "configuracionPerfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "ocultarConjuntosperfilesPermisoTablaPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "lista_usuarioUltMovPermisoTablaUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermisoTablaComponent.prototype, "lista_usuarioPermisoTablaUsuario", void 0);
    PermisoTablaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permiso-tabla',
            template: __webpack_require__(/*! ./permiso-tabla.component.html */ "./src/app/permiso-tablas/permiso-tabla/permiso-tabla.component.html"),
            styles: [__webpack_require__(/*! ./permiso-tabla.component.css */ "./src/app/permiso-tablas/permiso-tabla/permiso-tabla.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PermisoTablaComponent);
    return PermisoTablaComponent;
}());



/***/ }),

/***/ "./src/app/permiso-tablas/shared/configurar-permiso-tabla.ts":
/*!*******************************************************************!*\
  !*** ./src/app/permiso-tablas/shared/configurar-permiso-tabla.ts ***!
  \*******************************************************************/
/*! exports provided: ConfigurarPermisoTabla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarPermisoTabla", function() { return ConfigurarPermisoTabla; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarPermisoTabla = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarPermisoTabla() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "permisoTabla";
        this.rutaLista = this.crudServiceBaseUrl + "/getPermisoTablas";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarPermisoTabla";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarPermisoTabla";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarPermisoTabla";
        this.titulo = "Catálogo PermisoTabla";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.permisoTablaConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarPermisoTabla.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarPermisoTabla.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarPermisoTabla.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarPermisoTabla.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarPermisoTabla.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarPermisoTabla.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarPermisoTabla;
}());



/***/ }),

/***/ "./src/app/permiso-tablas/shared/permiso-tabla-perfil.ts":
/*!***************************************************************!*\
  !*** ./src/app/permiso-tablas/shared/permiso-tabla-perfil.ts ***!
  \***************************************************************/
/*! exports provided: PermisoTablaPerfil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoTablaPerfil", function() { return PermisoTablaPerfil; });
/**
 *
 * @author IstmoSoft
 */
var PermisoTablaPerfil = /** @class */ (function () {
    // Constructores
    function PermisoTablaPerfil() {
    }
    // Geters
    PermisoTablaPerfil.prototype.getPermisoTabla = function () {
        return this.permisoTabla;
    };
    PermisoTablaPerfil.prototype.setPermisoTabla = function (permisoTabla) {
        this.permisoTabla = permisoTabla;
    };
    // Seters
    PermisoTablaPerfil.prototype.getPerfil = function () {
        return this.perfil;
    };
    PermisoTablaPerfil.prototype.setPerfil = function (perfil) {
        this.perfil = perfil;
    };
    return PermisoTablaPerfil;
}());



/***/ }),

/***/ "./src/app/permiso-tablas/shared/permiso-tabla.ts":
/*!********************************************************!*\
  !*** ./src/app/permiso-tablas/shared/permiso-tabla.ts ***!
  \********************************************************/
/*! exports provided: PermisoTabla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisoTabla", function() { return PermisoTabla; });
/**
 *
 * @author IstmoSoft
 */
var PermisoTabla = /** @class */ (function () {
    // atributos fin
    function PermisoTabla(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.etiqueta = null;
        this.permiso = null;
        this.tabla = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.usuario = null;
        this.perfiles = null;
        if (source !== null)
            this.from(source);
    }
    PermisoTabla.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.etiqueta)
            this.etiqueta = source.etiqueta;
        if (source.permiso)
            this.permiso = source.permiso;
        if (source.tabla)
            this.tabla = source.tabla;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.usuario)
            this.usuario = source.usuario;
        if (source.perfiles)
            this.perfiles = source.perfiles;
    };
    PermisoTabla.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.etiqueta)
            return true;
        if (this.permiso)
            return true;
        if (this.tabla)
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
    PermisoTabla.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.etiqueta != null && typeof this.etiqueta === 'string' && this.etiqueta.replace(/^\s+|\s+$/g, '') == "")
            this.etiqueta = null;
        if (this.permiso != null && typeof this.permiso === 'string' && this.permiso.replace(/^\s+|\s+$/g, '') == "")
            this.permiso = null;
        if (this.tabla != null && typeof this.tabla === 'string' && this.tabla.replace(/^\s+|\s+$/g, '') == "")
            this.tabla = null;
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
    return PermisoTabla;
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
//# sourceMappingURL=app-permiso-tablas-permiso-tabla-module.js.map