(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-documentacion-donaciones-documentacion-donacion-module~app-oficio-donaciones-oficio-dona~0ef3c9a0"],{

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-conjunto/documentacion-donacion-conjunto.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-conjunto/documentacion-donacion-conjunto.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-conjunto/documentacion-donacion-conjunto.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-conjunto/documentacion-donacion-conjunto.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let documentacionDonacion of listaDocumentacionDonacion \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+documentacionDonacion.id}\"\n        (click)=\"elegir(documentacionDonacion,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{documentacionDonacion.id}}\">{{documentacionDonacion.id}}</a>\n    </li>\n    <li *ngFor =  \"let documentacionDonacion of listaDocumentacionDonacionN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+documentacionDonacion.id}\"\n        (click)=\"elegir(documentacionDonacion, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{documentacionDonacion.id}}\">T-{{documentacionDonacion.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let documentacionDonacion of listaDocumentacionDonacion ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+documentacionDonacion.id}\" id=\"tab-I-{{documentacionDonacion.id}}\">\n\t\t\t<app-documentacion-donacion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [documentacionDonacionBuscar]=\"documentacionDonacionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDocumentacionDonacion]=\"validosDocumentacionDonacion\"  \n\t\t\t\t\t\t  [documentacionDonacionService]=\"documentacionDonacionService\" [(opcion)]=\"opcionDocumentacionDonacion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(documentacionDonacion)]=\"listaDocumentacionDonacion[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDocumentacionDonacion\"\n                           [lista_usuarioUltMovDocumentacionDonacionUsuario]=\"lista_usuarioUltMovDocumentacionDonacionUsuario\" \n                           [lista_idoficioDonacionDocumentacionDonacionOficioDonacion]=\"lista_idoficioDonacionDocumentacionDonacionOficioDonacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-documentacion-donacion>\n        </div>\n        <div *ngFor = \"let documentacionDonacion of listaDocumentacionDonacionN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+documentacionDonacion.id}\" id=\"tab-N-{{documentacionDonacion.id}}\">\n\t\t\t<app-documentacion-donacion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [documentacionDonacionBuscar]=\"documentacionDonacionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDocumentacionDonacion]=\"validosDocumentacionDonacion\"  \n\t\t\t\t\t\t  [documentacionDonacionService]=\"documentacionDonacionService\" [(opcion)]=\"opcionDocumentacionDonacion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(documentacionDonacion)]=\"listaDocumentacionDonacionN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDocumentacionDonacion\"\n                           [lista_usuarioUltMovDocumentacionDonacionUsuario]=\"lista_usuarioUltMovDocumentacionDonacionUsuario\" \n                           [lista_idoficioDonacionDocumentacionDonacionOficioDonacion]=\"lista_idoficioDonacionDocumentacionDonacionOficioDonacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-documentacion-donacion>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-conjunto/documentacion-donacion-conjunto.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-conjunto/documentacion-donacion-conjunto.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DocumentacionDonacionConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionDonacionConjuntoComponent", function() { return DocumentacionDonacionConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/documentacion-donacion */ "./src/app/documentacion-donaciones/shared/documentacion-donacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentacionDonacionConjuntoComponent = /** @class */ (function () {
    function DocumentacionDonacionConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovDocumentacionDonacionUsuarioEditar = false;
        this.idoficioDonacionDocumentacionDonacionOficioDonacionEditar = false;
        this.listaDocumentacionDonacionN = [];
        this.listaDocumentacionDonacion = [];
        this.listaDocumentacionDonacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.documentacionDonacionN = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_1__["DocumentacionDonacion"]();
        this.documentacionDonacionNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    DocumentacionDonacionConjuntoComponent.prototype.elegir = function (documentacionDonacion, tipo) {
        this.idSeleccionado = tipo + "-" + documentacionDonacion.id;
        this.documentacionDonacionN = documentacionDonacion;
    };
    DocumentacionDonacionConjuntoComponent.prototype.ngOnInit = function () {
        this.documentacionDonacionN.id = 0;
        this.listaDocumentacionDonacionN.push(Object.assign({}, this.documentacionDonacionN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    DocumentacionDonacionConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_1__["DocumentacionDonacion"]();
        pg.id = this.listaDocumentacionDonacionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDocumentacionDonacionN.push(pg);
    };
    DocumentacionDonacionConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaDocumentacionDonacion; _i < _a.length; _i++) {
            var documentacionDonacion = _a[_i];
            this.documentacionDonacionService.actualizarDocumentacionDonacion(documentacionDonacion, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaDocumentacionDonacionN; _b < _c.length; _b++) {
            var documentacionDonacion = _c[_b];
            documentacionDonacion.id = null;
            this.documentacionDonacionService.guardarDocumentacionDonacion(documentacionDonacion, this.evtGuardar, this);
        }
    };
    DocumentacionDonacionConjuntoComponent.prototype.evtGuardar = function (documentacionDonacion, obj) {
        obj.agregados++;
        obj.listaDocumentacionDonacion.push(documentacionDonacion);
        if (obj.agregados >= obj.listaDocumentacionDonacionN.length) {
            obj.documentacionDonacionN = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_1__["DocumentacionDonacion"]();
            obj.listaDocumentacionDonacionN = [];
            obj.documentacionDonacionN.id = 0;
            obj.idSeleccionado = "N-" + obj.documentacionDonacionN.id;
            obj.listaDocumentacionDonacionN.push(Object.assign({}, obj.documentacionDonacionN));
            obj.listaDocumentacionDonacionChange.emit(obj.listaDocumentacionDonacion);
        }
        if (obj.agregados >= obj.listaDocumentacionDonacionN.length &&
            obj.actualizados >= obj.listaDocumentacionDonacion.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DocumentacionDonacionConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaDocumentacionDonacionN.length &&
                obj.actualizados >= obj.listaDocumentacionDonacion.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    DocumentacionDonacionConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], DocumentacionDonacionConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "documentacionDonacionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "validosDocumentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "ocultarConjuntosDocumentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "documentacionDonacionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DocumentacionDonacionConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "lista_usuarioUltMovDocumentacionDonacionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "lista_idoficioDonacionDocumentacionDonacionOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DocumentacionDonacionConjuntoComponent.prototype, "listaDocumentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "listaDocumentacionDonacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_1__["DocumentacionDonacion"])
    ], DocumentacionDonacionConjuntoComponent.prototype, "documentacionDonacionN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionConjuntoComponent.prototype, "documentacionDonacionNChange", void 0);
    DocumentacionDonacionConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentacion-donacion-conjunto',
            template: __webpack_require__(/*! ./documentacion-donacion-conjunto.component.html */ "./src/app/documentacion-donaciones/documentacion-donacion-conjunto/documentacion-donacion-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./documentacion-donacion-conjunto.component.css */ "./src/app/documentacion-donaciones/documentacion-donacion-conjunto/documentacion-donacion-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DocumentacionDonacionConjuntoComponent);
    return DocumentacionDonacionConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-documentacion-donacion [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"'1. Documentación de la Donación'\"\n                           [documentacionDonacionBuscar]=\"documentacionDonacionBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosDocumentacionDonacion]=\"validosDocumentacionDonacion\"\n                           [documentacionDonacionService]=\"documentacionDonacion_service\"\n                           [(opcion)]=\"opcionDocumentacionDonacion\"\n                           [globalesService]=\"globalesService\"\n                           [(documentacionDonacion)]=\"documentacionDonacion\"\n                           [ocultarConjuntos]=\"ocultarConjuntosDocumentacionDonacion\"\n                           [lista_usuarioUltMovDocumentacionDonacionUsuario]=\"lista_usuarioUltMovDocumentacionDonacionUsuario\"\n                           [lista_idoficioDonacionDocumentacionDonacionOficioDonacion]=\"lista_idoficioDonacionDocumentacionDonacionOficioDonacion\"\n                           [recepcionSolicitudEvaluacion]=\"recepcionSolicitudEvaluacion\"\n                           [enable]=\"enable\"\n                           >\n\n        </app-documentacion-donacion>\n\n        <!-- <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!documentacionDonacionBuscar\" (click)=\"buscarDocumentacionDonacionFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!documentacionDonacionAgregar\" (click)=\"nuevoDocumentacionDonacionFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!documentacionDonacionActualizar\" (click)=\"actualizarDocumentacionDonacionFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!documentacionDonacionEliminar\" (click)=\"eliminarDocumentacionDonacionFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!documentacionDonacionGuardar\" (click)=\"guardarDocumentacionDonacionFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!documentacionDonacionCancelar\" (click)=\"cancelarDocumentacionDonacionFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteDocumentacionDonacionWord\" (click)=\"reporteDocumentacionDonacionWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteDocumentacionDonacionExcel\" (click)=\"reporteDocumentacionDonacionExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteDocumentacionDonacionPdf\" (click)=\"reporteDocumentacionDonacionPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div> -->\n    </div>\n    <div class=\"modal fade\" id=\"buscarDocumentacionDonacion_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-documentacion-donacion-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionDocumentacionDonacion]=\"configuracionDocumentacionDonacion\"  (documentacionDonacionSeleccionado) =\"evtDocumentacionDonacionSeleccionado($event)\">  </app-documentacion-donacion-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DocumentacionDonacionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionDonacionCrudComponent", function() { return DocumentacionDonacionCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/documentacion-donacion */ "./src/app/documentacion-donaciones/shared/documentacion-donacion.ts");
/* harmony import */ var _shared_documentacion_donacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/documentacion-donacion.service */ "./src/app/documentacion-donaciones/shared/documentacion-donacion.service.ts");
/* harmony import */ var _shared_configurar_documentacion_donacion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-documentacion-donacion */ "./src/app/documentacion-donaciones/shared/configurar-documentacion-donacion.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../oficio-donaciones/shared/oficio-donacion */ "./src/app/oficio-donaciones/shared/oficio-donacion.ts");
/* harmony import */ var _oficio_donaciones_shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../oficio-donaciones/shared/oficio-donacion.service */ "./src/app/oficio-donaciones/shared/oficio-donacion.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
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









var DocumentacionDonacionCrudComponent = /** @class */ (function () {
    function DocumentacionDonacionCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    documentacionDonacion_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, oficioDonacion_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.documentacionDonacion_service = documentacionDonacion_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.oficioDonacion_service = oficioDonacion_service;
        this.recepcionSolicitudEvaluacion_service = recepcionSolicitudEvaluacion_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.opcionDocumentacionDonacion = 0;
        this.validosDocumentacionDonacion = {
            id: false,
            fechaBaja: false,
            certificadoMuerteEncefalico: false,
            consentimientoInformado: false,
            fechaRegistro: false,
            panelViral: false,
            revisionLampara: false,
            fechaActualizacion: false,
            certificadoDefunsion: false,
            status: false,
            usuarioUltMov: false,
            idoficioDonacion: false,
        };
        this.ocultarConjuntosDocumentacionDonacion = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "documentacionDonacion", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.documentacionDonacionLazy = false;
        this.documentacionDonacionPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.documentacionDonacion = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"]();
        this.documentacionDonacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.documentacionDonacionTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_documentacionDonaciones = [];
        this.usuarioUltMovDocumentacionDonacionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovDocumentacionDonacionUsuario = [];
        this.usuarioUltMovDocumentacionDonacionUsuarioEditar = false;
        this.idoficioDonacionDocumentacionDonacionOficioDonacionEleccion = new _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__["OficioDonacion"]();
        this.lista_idoficioDonacionDocumentacionDonacionOficioDonacion = [];
        this.idoficioDonacionDocumentacionDonacionOficioDonacionEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.documentacionDonacionSeleccion = this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
        this.configuracionDocumentacionDonacion = new _shared_configurar_documentacion_donacion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDocumentacionDonacion"]();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDocumentacionDonacionUsuario, this);
        //this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionDocumentacionDonacionOficioDonacion, this);
        this.limpiarCampos();
    }
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "documentacionDonacionOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosDocumentacionDonacion)
                return true;
            return !this.documentacionDonacionActualizar;
        },
        enumerable: true,
        configurable: true
    });
    DocumentacionDonacionCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.documentacionDonacion && changes.documentacionDonacion.currentValue == null &&
            this.documentacionDonacion == null)
            this.documentacionDonacion = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"]();
        else {
            var aux = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"]();
            if (this.documentacionDonacion)
                aux.from(this.documentacionDonacion);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionSeleccion = this.documentacionDonacionGuardar = false;
                this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = this.documentacionDonacionCancelar = true;
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
                this.documentacionDonacionSeleccion = this.documentacionDonacionAgregar = this.documentacionDonacionBuscar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
                this.documentacionDonacionGuardar = this.documentacionDonacionCancelar = true;
            }
        }
    };
    DocumentacionDonacionCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "documentacionDonacion",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "oficioDonacion",
            "recepcionSolicitudEvaluacion",
            "solicitudEvaluacionCorneal",
            "causaMuerte",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.documentacionDonacionPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DocumentacionDonacionCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.documentacionDonacionPermisos = true;
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoAtributo && permisos.documentacionDonacion.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.documentacionDonacion.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoConjunto && permisos.documentacionDonacion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.documentacionDonacion.PermisoConjunto;
        }
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoTabla && permisos.documentacionDonacion.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.documentacionDonacion.PermisoTabla[0];
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
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoAtributo && permisos.oficioDonacion.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.oficioDonacion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.oficioDonacion.PermisoAtributo);
        }
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoAtributo && permisos.oficioDonacion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.oficioDonacion.PermisoConjunto);
        }
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoTabla && permisos.oficioDonacion.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.oficioDonacion.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.oficioDonacion.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DocumentacionDonacionCrudComponent.prototype.evtGetUsuarioUltMovDocumentacionDonacionUsuario = function (lista_usuarioUltMovDocumentacionDonacionUsuario, obj) {
        obj.lista_usuarioUltMovDocumentacionDonacionUsuario = lista_usuarioUltMovDocumentacionDonacionUsuario;
        obj.actualizar_UsuarioUltMovDocumentacionDonacionUsuario();
    };
    DocumentacionDonacionCrudComponent.prototype.evtGetIdoficioDonacionDocumentacionDonacionOficioDonacion = function (lista_idoficioDonacionDocumentacionDonacionOficioDonacion, obj) {
        obj.lista_idoficioDonacionDocumentacionDonacionOficioDonacion = lista_idoficioDonacionDocumentacionDonacionOficioDonacion;
        obj.actualizar_IdoficioDonacionDocumentacionDonacionOficioDonacion();
    };
    DocumentacionDonacionCrudComponent.prototype.actualizar_UsuarioUltMovDocumentacionDonacionUsuario = function () {
        if (this.usuarioUltMovDocumentacionDonacionUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovDocumentacionDonacionUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovDocumentacionDonacionUsuarioEleccion.id) {
                    this.usuarioUltMovDocumentacionDonacionUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    DocumentacionDonacionCrudComponent.prototype.actualizar_IdoficioDonacionDocumentacionDonacionOficioDonacion = function () {
        if (this.idoficioDonacionDocumentacionDonacionOficioDonacionEleccion)
            for (var _i = 0, _a = this.lista_idoficioDonacionDocumentacionDonacionOficioDonacion; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idoficioDonacionDocumentacionDonacionOficioDonacionEleccion.id) {
                    this.idoficioDonacionDocumentacionDonacionOficioDonacionEleccion = eleme;
                    break;
                }
            }
    };
    DocumentacionDonacionCrudComponent.prototype.ngDoCheck = function () {
    };
    DocumentacionDonacionCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosDocumentacionDonacion['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosDocumentacionDonacion['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosDocumentacionDonacion['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaCertificadoMuerteEncefalico", {
        get: function () {
            return this.validosDocumentacionDonacion['certificadoMuerteEncefalico'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaConsentimientoInformado", {
        get: function () {
            return this.validosDocumentacionDonacion['consentimientoInformado'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosDocumentacionDonacion['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaPanelViral", {
        get: function () {
            return this.validosDocumentacionDonacion['panelViral'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaRevisionLampara", {
        get: function () {
            return this.validosDocumentacionDonacion['revisionLampara'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosDocumentacionDonacion['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaCertificadoDefunsion", {
        get: function () {
            return this.validosDocumentacionDonacion['certificadoDefunsion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosDocumentacionDonacion['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosDocumentacionDonacion['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaIdoficioDonacion", {
        get: function () {
            return this.validosDocumentacionDonacion['idoficioDonacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaFechaBaja && this.validaCertificadoMuerteEncefalico && this.validaConsentimientoInformado && this.validaFechaRegistro && this.validaPanelViral && this.validaRevisionLampara && this.validaFechaActualizacion && this.validaCertificadoDefunsion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdoficioDonacion;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    DocumentacionDonacionCrudComponent.prototype.obtenerDocumentacionDonaciones = function (lista, objeto) {
        objeto.lista_documentacionDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.documentacionDonacion.from(lista[0]);
            objeto.evtDocumentacionDonacionSeleccionado(objeto.documentacionDonacion);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    DocumentacionDonacionCrudComponent.prototype.evn_lazy_documentacionDonacion = function (documentacionDonacion, objeto) {
        objeto.documentacionDonacion = documentacionDonacion;
        objeto.documentacionDonacionChange.emit(objeto.documentacionDonacion);
        objeto.configuarCombosObjetos();
        objeto.documentacionDonacionLazy = true;
    };
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "datosReporteDocumentacionDonacionWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.documentacionDonacionActualizar && this.documentacionDonacionLazy && this.globalesService.preporteWord(this, "documentacionDonacion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "datosReporteDocumentacionDonacionExcel", {
        get: function () {
            return !(this.documentacionDonacionActualizar && this.documentacionDonacionLazy && this.globalesService.preporteExcel(this, "documentacionDonacion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentacionDonacionCrudComponent.prototype, "datosReporteDocumentacionDonacionPdf", {
        get: function () {
            return !(this.documentacionDonacionActualizar && this.documentacionDonacionLazy && this.globalesService.preportePdf(this, "documentacionDonacion"));
        },
        enumerable: true,
        configurable: true
    });
    DocumentacionDonacionCrudComponent.prototype.reporteDocumentacionDonacionExcel = function (form) {
        var nombre = "DocumentacionDonacion.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "documentacionDonacion": this.documentacionDonacion };
        parametros["plantilla"] = "DocumentacionDonacion.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DocumentacionDonacionCrudComponent.prototype.reporteDocumentacionDonacionWord = function (form) {
        var nombre = "DocumentacionDonacion.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "documentacionDonacion": this.documentacionDonacion };
        parametros["plantilla"] = "DocumentacionDonacion.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DocumentacionDonacionCrudComponent.prototype.reporteDocumentacionDonacionPdf = function (form) {
        var nombre = "DocumentacionDonacion.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "documentacionDonacion": this.documentacionDonacion };
        parametros["plantilla"] = "DocumentacionDonacion.docx";
        parametros["salida"] = "DocumentacionDonacion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    DocumentacionDonacionCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionCancelar = true;
    };
    DocumentacionDonacionCrudComponent.prototype.buscarDocumentacionDonacionFront = function (form) {
        this.accionesBuscar();
        var vdocumentacionDonacion = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"]();
        vdocumentacionDonacion.from(this.documentacionDonacion);
        this.configuracionDocumentacionDonacion = new _shared_configurar_documentacion_donacion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDocumentacionDonacion"]();
        this.configuracionDocumentacionDonacion.permisosTabla = { "tabla": "documentacionDonacion", "permiso": 8 };
        this.configuracionDocumentacionDonacion.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionDocumentacionDonacion.documentacionDonacionConsulta = vdocumentacionDonacion;
        this.permisosacciones();
        $("#buscarDocumentacionDonacion_" + this.nombre).modal();
    };
    DocumentacionDonacionCrudComponent.prototype.buscarDocumentacionDonacionBack = function (documentacionDonacion) {
        this.documentacionDonacion_service.getDocumentacionDonacionesByDto(documentacionDonacion, this.eventoSrvDocumentacionDonacionBuscar, this);
    };
    DocumentacionDonacionCrudComponent.prototype.eventoSrvDocumentacionDonacionBuscar = function (lista, objeto) {
        objeto.lista_documentacionDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.documentacionDonacion = lista[0];
            objeto.documentacionDonacionLazy = false;
            objeto.documentacionDonacion_service.lazyDocumentacionDonacion(objeto.documentacionDonacion, objeto.evn_lazy_documentacionDonacion, objeto);
        }
    };
    DocumentacionDonacionCrudComponent.prototype.guardarDocumentacionDonacionFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarDocumentacionDonacionBack(this.documentacionDonacion);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    DocumentacionDonacionCrudComponent.prototype.guardarDocumentacionDonacionBack = function (documentacionDonacion) {
        if (documentacionDonacion.usuarioUltMov == null)
            documentacionDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        if (documentacionDonacion.status == null || documentacionDonacion.status == "")
            documentacionDonacion.status = 1;
        this.documentacionDonacion_service.guardarDocumentacionDonacion(documentacionDonacion, this.eventoSrvDocumentacionDonacionGuardar, this);
    };
    DocumentacionDonacionCrudComponent.prototype.eventoSrvDocumentacionDonacionGuardar = function (documentacionDonacion, obj) {
        obj.documentacionDonacion = documentacionDonacion;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"]();
        aux.from(documentacionDonacion);
        obj.documentacionDonacionChange.emit(aux);
        obj.documentacionDonacionTablaChange.emit(aux);
        obj.documentacionDonacionLazy = false;
        obj.documentacionDonacion_service.lazyDocumentacionDonacion(obj.documentacionDonacion, obj.evn_lazy_documentacionDonacion, obj);
        obj.accionesActualizar();
    };
    DocumentacionDonacionCrudComponent.prototype.actualizarDocumentacionDonacionFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarDocumentacionDonacionBack(this.documentacionDonacion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    DocumentacionDonacionCrudComponent.prototype.actualizarDocumentacionDonacionBack = function (documentacionDonacion) {
        documentacionDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.documentacionDonacion_service.actualizarDocumentacionDonacion(documentacionDonacion, this.eventoSrvDocumentacionDonacionActualizar, this);
    };
    DocumentacionDonacionCrudComponent.prototype.eventoSrvDocumentacionDonacionActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.documentacionDonacionLazy = false;
            obj.documentacionDonacion_service.lazyDocumentacionDonacion(obj.documentacionDonacion, obj.evn_lazy_documentacionDonacion, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.documentacionDonacion);
            obj.documentacionDonacionChange.emit(aux);
            obj.documentacionDonacionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    DocumentacionDonacionCrudComponent.prototype.eliminarDocumentacionDonacionFront = function (form) {
        this.accion = 4;
        this.eliminarDocumentacionDonacionBack(this.documentacionDonacion);
        this.permisosacciones();
        this.accionesBuscar();
    };
    DocumentacionDonacionCrudComponent.prototype.eliminarDocumentacionDonacionBack = function (documentacionDonacion) {
        documentacionDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.documentacionDonacion_service.eliminarDocumentacionDonacion(documentacionDonacion, this.eventoSrvDocumentacionDonacionEliminar, this);
    };
    DocumentacionDonacionCrudComponent.prototype.eventoSrvDocumentacionDonacionEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.documentacionDonacion = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"]();
            obj.documentacionDonacionChange.emit(obj.documentacionDonacion);
            obj.documentacionDonacionTablaChange.emit(obj.documentacionDonacion);
            obj.limpiarCampos();
        }
    };
    DocumentacionDonacionCrudComponent.prototype.cancelarDocumentacionDonacionFront = function (form) {
        this.accion = 6;
        this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = true;
        this.permisosacciones();
    };
    DocumentacionDonacionCrudComponent.prototype.nuevoDocumentacionDonacionFront = function (form) {
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
                this.documentacionDonacionSeleccion = this.documentacionDonacionAgregar = this.documentacionDonacionBuscar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false;
                this.documentacionDonacionGuardar = this.documentacionDonacionCancelar = true;
            }.bind(this)
        });
    };
    DocumentacionDonacionCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovDocumentacionDonacionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDocumentacionDonacionUsuario, this);
        this.lista_idoficioDonacionDocumentacionDonacionOficioDonacion = [];
        this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionDocumentacionDonacionOficioDonacion, this);
    };
    DocumentacionDonacionCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    DocumentacionDonacionCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionSeleccion = this.documentacionDonacionGuardar = false;
        this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = this.documentacionDonacionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    DocumentacionDonacionCrudComponent.prototype.evtDocumentacionDonacionSeleccionado = function (documentacionDonacion) {
        this.documentacionDonacion = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"]();
        this.documentacionDonacion.from(documentacionDonacion);
        this.documentacionDonacionLazy = false;
        this.documentacionDonacion_service.lazyDocumentacionDonacion(this.documentacionDonacion, this.evn_lazy_documentacionDonacion, this);
        this.accion = 7;
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = this.documentacionDonacionSeleccion = this.documentacionDonacionGuardar = false;
        this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = this.documentacionDonacionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDocumentacionDonacion_" + this.nombre).modal("hide");
    };
    DocumentacionDonacionCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.documentacionDonacionSeleccion = this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false; // ******************** maquina
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    DocumentacionDonacionCrudComponent.prototype.permisosacciones = function () {
        if (this.documentacionDonacionBuscar)
            this.documentacionDonacionBuscar = this.globalesService.pbuscar(this, "documentacionDonacion");
        if (this.documentacionDonacionActualizar)
            this.documentacionDonacionActualizar = (this.globalesService.pacutalizar(this, "documentacionDonacion") && this.globalesService.pbuscar(this, "documentacionDonacion"));
        if (this.documentacionDonacionEliminar)
            this.documentacionDonacionEliminar = (this.globalesService.peliminar(this, "documentacionDonacion") && this.globalesService.pbuscar(this, "documentacionDonacion"));
        if (this.documentacionDonacionAgregar)
            this.documentacionDonacionAgregar = this.globalesService.pagregar(this, "documentacionDonacion");
    };
    DocumentacionDonacionCrudComponent.prototype.permisosaccionesInicio = function () {
        this.documentacionDonacionSeleccion = this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false; // *************************** maquina
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    DocumentacionDonacionCrudComponent.prototype.limpiarCampos = function () {
        this.documentacionDonacion = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"]();
        this.usuarioUltMovDocumentacionDonacionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idoficioDonacionDocumentacionDonacionOficioDonacionEleccion = new _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__["OficioDonacion"]();
        this.documentacionDonacionChange.emit(this.documentacionDonacion);
        this.documentacionDonacionSeleccion = this.documentacionDonacionCancelar = this.documentacionDonacionGuardar = this.documentacionDonacionActualizar = this.documentacionDonacionEliminar = false; // *************************** maquina
        this.documentacionDonacionBuscar = this.documentacionDonacionAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DocumentacionDonacionCrudComponent.prototype, "ocultarConjuntosDocumentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DocumentacionDonacionCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DocumentacionDonacionCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacion"])
    ], DocumentacionDonacionCrudComponent.prototype, "documentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionCrudComponent.prototype, "documentacionDonacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionCrudComponent.prototype, "documentacionDonacionTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacion"])
    ], DocumentacionDonacionCrudComponent.prototype, "recepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DocumentacionDonacionCrudComponent.prototype, "enable", void 0);
    DocumentacionDonacionCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentacion-donacion-crud',
            template: __webpack_require__(/*! ./documentacion-donacion-crud.component.html */ "./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.html"),
            styles: [__webpack_require__(/*! ./documentacion-donacion-crud.component.css */ "./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_documentacion_donacion_service__WEBPACK_IMPORTED_MODULE_5__["DocumentacionDonacionService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _oficio_donaciones_shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_15__["OficioDonacionService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_19__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_18__["SolicitudEvaluacionCornealService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__["RecepcionSolicitudEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_documentacion_donacion_service__WEBPACK_IMPORTED_MODULE_5__["DocumentacionDonacionService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _oficio_donaciones_shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_15__["OficioDonacionService"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__["RecepcionSolicitudEvaluacionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_18__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_19__["CausaMuerteService"]])
    ], DocumentacionDonacionCrudComponent);
    return DocumentacionDonacionCrudComponent;
}());



/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.css":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para documentacionDonacion-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionDocumentacionDonacion.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_documentacionDonacion_{{nombregrid}}\">\n                <div id=\"grid_documentacionDonacion_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: DocumentacionDonacionListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionDonacionListKendoComponent", function() { return DocumentacionDonacionListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/documentacion-donacion */ "./src/app/documentacion-donaciones/shared/documentacion-donacion.ts");
/* harmony import */ var _shared_configurar_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-documentacion-donacion */ "./src/app/documentacion-donaciones/shared/configurar-documentacion-donacion.ts");
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
var DocumentacionDonacionListKendoComponent = /** @class */ (function () {
    function DocumentacionDonacionListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.documentacionDonacionSeleccionado = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_3__["DocumentacionDonacion"]();
        this.configuracionDocumentacionDonacion = new _shared_configurar_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDocumentacionDonacion"]();
        this.nombregrid = "";
        this.evtDocumentacionDonacionSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "documentacionDonacion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'documentacionDonacion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'documentacionDonacion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    DocumentacionDonacionListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionDocumentacionDonacion.titulo.indexOf("Catálogo") != -1) {
            this.configuracionDocumentacionDonacion.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    DocumentacionDonacionListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDocumentacionDonacion && changes.configuracionDocumentacionDonacion.currentValue &&
            (changes.configuracionDocumentacionDonacion.previousValue instanceof _shared_configurar_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDocumentacionDonacion"])) {
            if (changes.configuracionDocumentacionDonacion.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionDocumentacionDonacion.currentValue.permisosAtributos;
            if (changes.configuracionDocumentacionDonacion.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionDocumentacionDonacion.currentValue.permisosTabla;
            if ($("#grid_documentacionDonacion_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    DocumentacionDonacionListKendoComponent.prototype.ngOnInit = function () {
        self["grid_documentacionDonacion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionDocumentacionDonacion.permisosAtributos &&
            this.configuracionDocumentacionDonacion.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "documentacionDonacion",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DocumentacionDonacion'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DocumentacionDonacion'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DocumentacionDonacion'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionDocumentacionDonacion.permisosAtributos)
            this.permisosAtributos = this.configuracionDocumentacionDonacion.permisosAtributos;
        if (this.configuracionDocumentacionDonacion.permisosTabla)
            this.permisosTabla = this.configuracionDocumentacionDonacion.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DocumentacionDonacionListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoAtributo && permisos.documentacionDonacion.PermisoAtributo.length > 0
            && !obj.configuracionDocumentacionDonacion.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.documentacionDonacion.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.DocumentacionDonacion.PermisoAtributo ;
        }
        if (permisos && permisos.documentacionDonacion && permisos.documentacionDonacion.PermisoTabla && permisos.documentacionDonacion.PermisoTabla.length > 0
            && !obj.configuracionDocumentacionDonacion.permisosTabla) {
            obj.globalesService.evtTablas(permisos.documentacionDonacion.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.DocumentacionDonacion.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DocumentacionDonacionListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_documentacionDonacion_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    DocumentacionDonacionListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionDocumentacionDonacion.campoAgEl != null
            && this.configuracionDocumentacionDonacion.documentacionDonacionConsulta
            && this.configuracionDocumentacionDonacion.documentacionDonacionConsulta.isOk
            && !this.configuracionDocumentacionDonacion.documentacionDonacionConsulta.isOk())
            return;
        if (this.configuracionDocumentacionDonacion.documentacionDonacionConsulta) {
            if (!this.configuracionDocumentacionDonacion.campoAgEl && this.configuracionDocumentacionDonacion.documentacionDonacionConsulta instanceof _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_3__["DocumentacionDonacion"])
                this.configuracionDocumentacionDonacion.rutaLista = this.crudServiceBaseUrl + "/getDocumentacionDonacionesByDto";
            this.lista = this.configuracionDocumentacionDonacion.lecturaP(completar, this.configuracionDocumentacionDonacion.documentacionDonacionConsulta);
            if (this.configuracionDocumentacionDonacion.campoAgEl) {
                this.rutaAgregar = this.configuracionDocumentacionDonacion.agregarP(function () { }, this.configuracionDocumentacionDonacion.campoAgEl);
                this.rutaEliminar = this.configuracionDocumentacionDonacion.eliminarP(function () { }, this.configuracionDocumentacionDonacion.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionDocumentacionDonacion.agregarP(completar, this.configuracionDocumentacionDonacion.documentacionDonacionConsulta);
                this.rutaEliminar = this.configuracionDocumentacionDonacion.eliminarP(completar, this.configuracionDocumentacionDonacion.documentacionDonacionConsulta);
            }
        }
        else {
            this.lista = this.configuracionDocumentacionDonacion.lectura();
            this.rutaAgregar = this.configuracionDocumentacionDonacion.agregar();
            this.rutaEliminar = this.configuracionDocumentacionDonacion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "documentacionDonacion", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "documentacionDonacion", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "idoficioDonacion")) {
            campos["idoficioDonacion"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "idoficioDonacion"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "consentimientoInformado")) {
            campos["consentimientoInformado"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "consentimientoInformado"), nullable: true };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "panelViral")) {
            campos["panelViral"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "panelViral"), nullable: true };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "certificadoMuerteEncefalico")) {
            campos["certificadoMuerteEncefalico"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "certificadoMuerteEncefalico"), nullable: true };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "revisionLampara")) {
            campos["revisionLampara"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "revisionLampara"), nullable: true };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "certificadoDefunsion")) {
            campos["certificadoDefunsion"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "certificadoDefunsion"), nullable: true };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "documentacionDonacion", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDocumentacionDonacion.rutaActualizar,
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
            if (self.configuracionDocumentacionDonacion.campoAgEl) {
                if (self.configuracionDocumentacionDonacion.tipocampoAgEl == "DocumentacionDonacionDocumentacionDonacion")
                    self.configuracionDocumentacionDonacion.campoAgEl.documentacionDonacion2 = options.models[0];
                else
                    self.configuracionDocumentacionDonacion.campoAgEl.documentacionDonacion = options.models[0];
                return JSON.stringify(self.configuracionDocumentacionDonacion.campoAgEl);
            }
            else if (est.options[operation].data.models.documentacionDonacion) {
                est.options[operation].data.models.documentacionDonacion2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    DocumentacionDonacionListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "documentacionDonacion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "idoficioDonacion")) {
            columnas.push({ field: "idoficioDonacion", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "idoficioDonacion"), editor: idoficioDonacionDropDownEditor, template: " #if (idoficioDonacion){#   #=idoficioDonacion.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "consentimientoInformado")) {
            columnas.push({ field: "consentimientoInformado", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "consentimientoInformado") });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "panelViral")) {
            columnas.push({ field: "panelViral", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "panelViral") });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "certificadoMuerteEncefalico")) {
            columnas.push({ field: "certificadoMuerteEncefalico", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "certificadoMuerteEncefalico") });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "revisionLampara")) {
            columnas.push({ field: "revisionLampara", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "revisionLampara") });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "certificadoDefunsion")) {
            columnas.push({ field: "certificadoDefunsion", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "certificadoDefunsion") });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "documentacionDonacion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "documentacionDonacion", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "documentacionDonacion"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "documentacionDonacion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "documentacionDonacion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "documentacionDonacion") && this.configuracionDocumentacionDonacion.documentacionDonacionConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_documentacionDonacion_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_documentacionDonacion_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDocumentacionDonacion.altoComponente,
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
        this.grid = $("#grid_documentacionDonacion_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidoficioDonacion = this.urlprovider.serverURL + "oficioDonacion/getOficioDonacionesActivos";
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
        function idoficioDonacionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "botonCorneal",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidoficioDonacion,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    DocumentacionDonacionListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_documentacionDonacion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.documentacionDonacionSeleccionado = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_3__["DocumentacionDonacion"]();
        gridac.documentacionDonacionSeleccionado.from(dataItem);
        gridac.evtDocumentacionDonacionSeleccionado.emit(gridac.documentacionDonacionSeleccionado);
        (gridac.documentacionDonacionSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_documentacion_donacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDocumentacionDonacion"])
    ], DocumentacionDonacionListKendoComponent.prototype, "configuracionDocumentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DocumentacionDonacionListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("documentacionDonacionSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DocumentacionDonacionListKendoComponent.prototype, "evtDocumentacionDonacionSeleccionado", void 0);
    DocumentacionDonacionListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentacion-donacion-list-kendo',
            template: __webpack_require__(/*! ./documentacion-donacion-list-kendo.component.html */ "./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./documentacion-donacion-list-kendo.component.css */ "./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], DocumentacionDonacionListKendoComponent);
    return DocumentacionDonacionListKendoComponent;
}());



/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DocumentacionDonacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionDonacionRoutingModule", function() { return DocumentacionDonacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documentacion_donaciones_documentacion_donacion_list_kendo_documentacion_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component */ "./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.ts");
/* harmony import */ var _documentacion_donaciones_documentacion_donacion_crud_documentacion_donacion_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component */ "./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.ts");
/* harmony import */ var _documentacion_donaciones_documentacion_donacion_table_documentacion_donacion_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component */ "./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'documentacion-donacion-list-kendo', component: _documentacion_donaciones_documentacion_donacion_list_kendo_documentacion_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["DocumentacionDonacionListKendoComponent"] },
    { path: 'documentacion-donacion-crud', component: _documentacion_donaciones_documentacion_donacion_crud_documentacion_donacion_crud_component__WEBPACK_IMPORTED_MODULE_3__["DocumentacionDonacionCrudComponent"] },
    { path: 'documentacion-donacion-table', component: _documentacion_donaciones_documentacion_donacion_table_documentacion_donacion_table_component__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacionTableComponent"] },
];
var DocumentacionDonacionRoutingModule = /** @class */ (function () {
    function DocumentacionDonacionRoutingModule() {
    }
    DocumentacionDonacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DocumentacionDonacionRoutingModule);
    return DocumentacionDonacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_documentacionDonacion\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','id')\" >{{aetiqueta('documentacionDonacion','id')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','idoficioDonacion')\" >{{aetiqueta('documentacionDonacion','idoficioDonacion')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','consentimientoInformado')\" >{{aetiqueta('documentacionDonacion','consentimientoInformado')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','panelViral')\" >{{aetiqueta('documentacionDonacion','panelViral')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','certificadoMuerteEncefalico')\" >{{aetiqueta('documentacionDonacion','certificadoMuerteEncefalico')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','revisionLampara')\" >{{aetiqueta('documentacionDonacion','revisionLampara')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','certificadoDefunsion')\" >{{aetiqueta('documentacionDonacion','certificadoDefunsion')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','fechaRegistro')\" >{{aetiqueta('documentacionDonacion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','fechaActualizacion')\" >{{aetiqueta('documentacionDonacion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','fechaBaja')\" >{{aetiqueta('documentacionDonacion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','usuarioUltMov')\" >{{aetiqueta('documentacionDonacion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','status')\" >{{aetiqueta('documentacionDonacion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','id')\" >{{aetiqueta('documentacionDonacion','id')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','idoficioDonacion')\" >{{aetiqueta('documentacionDonacion','idoficioDonacion')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','consentimientoInformado')\" >{{aetiqueta('documentacionDonacion','consentimientoInformado')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','panelViral')\" >{{aetiqueta('documentacionDonacion','panelViral')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','certificadoMuerteEncefalico')\" >{{aetiqueta('documentacionDonacion','certificadoMuerteEncefalico')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','revisionLampara')\" >{{aetiqueta('documentacionDonacion','revisionLampara')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','certificadoDefunsion')\" >{{aetiqueta('documentacionDonacion','certificadoDefunsion')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','fechaRegistro')\" >{{aetiqueta('documentacionDonacion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','fechaActualizacion')\" >{{aetiqueta('documentacionDonacion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','fechaBaja')\" >{{aetiqueta('documentacionDonacion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','usuarioUltMov')\" >{{aetiqueta('documentacionDonacion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('documentacionDonacion','status')\" >{{aetiqueta('documentacionDonacion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-documentacion-donacion [class.hidden]=\"primero\" [(documentacionDonacion)]=\"documentacionDonacionSeleccionado\" (documentacionDonacionTablaChange)=\"cambio_documentacionDonacion($event)\"> </app-documentacion-donacion>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DocumentacionDonacionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionDonacionTableComponent", function() { return DocumentacionDonacionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/documentacion-donacion */ "./src/app/documentacion-donaciones/shared/documentacion-donacion.ts");
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






var DocumentacionDonacionTableComponent = /** @class */ (function () {
    function DocumentacionDonacionTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "documentacionDonacion", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.documentacionDonacionSeleccionado = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_1__["DocumentacionDonacion"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'documentacionDonacion'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    DocumentacionDonacionTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'documentacionDonacion'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    DocumentacionDonacionTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(DocumentacionDonacionTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    DocumentacionDonacionTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("documentacionDonacion", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("documentacionDonacion", "idoficioDonacion"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idoficioDonacion)
                    return "<span style=\"cursor: pointer\">" + oObj.idoficioDonacion.botonCorneal + "</span>";
                return "";
            }
        });
        if (!this.avisible("documentacionDonacion", "consentimientoInformado"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "consentimientoInformado" });
        if (!this.avisible("documentacionDonacion", "panelViral"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "panelViral" });
        if (!this.avisible("documentacionDonacion", "certificadoMuerteEncefalico"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "certificadoMuerteEncefalico" });
        if (!this.avisible("documentacionDonacion", "revisionLampara"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "revisionLampara" });
        if (!this.avisible("documentacionDonacion", "certificadoDefunsion"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "certificadoDefunsion" });
        if (!this.avisible("documentacionDonacion", "fechaRegistro"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("documentacionDonacion", "fechaActualizacion"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("documentacionDonacion", "fechaBaja"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("documentacionDonacion", "usuarioUltMov"))
            columnasNoVisibles.push(10);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("documentacionDonacion", "status"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("documentacionDonacion"))
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
        var tabla = $('#tabla_documentacionDonacion').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_documentacionDonacion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.documentacionDonacionSeleccionado = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_1__["DocumentacionDonacion"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "documentacionDonacion/getDocumentacionDonaciones",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_documentacionDonacion tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_documentacionDonacion').DataTable().row(this).data();
                self.documentacionDonacionSeleccionado = new _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_1__["DocumentacionDonacion"]();
                self.documentacionDonacionSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_documentacionDonacion').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    DocumentacionDonacionTableComponent.prototype.ngOnInit = function () {
    };
    DocumentacionDonacionTableComponent.prototype.cambio_documentacionDonacion = function (documentacionDonacion) {
        $('#tabla_documentacionDonacion').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    DocumentacionDonacionTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    DocumentacionDonacionTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    DocumentacionDonacionTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    DocumentacionDonacionTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    DocumentacionDonacionTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    DocumentacionDonacionTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    DocumentacionDonacionTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    DocumentacionDonacionTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    DocumentacionDonacionTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    DocumentacionDonacionTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    DocumentacionDonacionTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    DocumentacionDonacionTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    DocumentacionDonacionTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    DocumentacionDonacionTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    DocumentacionDonacionTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    DocumentacionDonacionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentacion-donacion-table',
            template: __webpack_require__(/*! ./documentacion-donacion-table.component.html */ "./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.html"),
            styles: [__webpack_require__(/*! ./documentacion-donacion-table.component.css */ "./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], DocumentacionDonacionTableComponent);
    return DocumentacionDonacionTableComponent;
}());



/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion.module.ts ***!
  \***************************************************************************/
/*! exports provided: DocumentacionDonacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionDonacionModule", function() { return DocumentacionDonacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _documentacion_donacion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentacion-donacion-routing.module */ "./src/app/documentacion-donaciones/documentacion-donacion-routing.module.ts");
/* harmony import */ var _documentacion_donacion_list_kendo_documentacion_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component */ "./src/app/documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component.ts");
/* harmony import */ var _documentacion_donacion_crud_documentacion_donacion_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documentacion-donacion-crud/documentacion-donacion-crud.component */ "./src/app/documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component.ts");
/* harmony import */ var _documentacion_donacion_conjunto_documentacion_donacion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentacion-donacion-conjunto/documentacion-donacion-conjunto.component */ "./src/app/documentacion-donaciones/documentacion-donacion-conjunto/documentacion-donacion-conjunto.component.ts");
/* harmony import */ var _documentacion_donacion_documentacion_donacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documentacion-donacion/documentacion-donacion.component */ "./src/app/documentacion-donaciones/documentacion-donacion/documentacion-donacion.component.ts");
/* harmony import */ var _documentacion_donacion_table_documentacion_donacion_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./documentacion-donacion-table/documentacion-donacion-table.component */ "./src/app/documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component.ts");
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










//import { OficioDonacionModule }   from '../oficio-donaciones/oficio-donacion.module';

var DocumentacionDonacionModule = /** @class */ (function () {
    function DocumentacionDonacionModule(parentModule) {
        if (parentModule) {
            throw new Error('DocumentacionDonacionModule is already loaded. Import it in the AppModule only');
        }
    }
    DocumentacionDonacionModule_1 = DocumentacionDonacionModule;
    DocumentacionDonacionModule.forRoot = function () {
        return {
            ngModule: DocumentacionDonacionModule_1,
            providers: []
        };
    };
    var DocumentacionDonacionModule_1;
    DocumentacionDonacionModule = DocumentacionDonacionModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _documentacion_donacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["DocumentacionDonacionRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
                //, OficioDonacionModule
            ],
            declarations: [
                _documentacion_donacion_list_kendo_documentacion_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacionListKendoComponent"],
                _documentacion_donacion_documentacion_donacion_component__WEBPACK_IMPORTED_MODULE_7__["DocumentacionDonacionComponent"],
                _documentacion_donacion_crud_documentacion_donacion_crud_component__WEBPACK_IMPORTED_MODULE_5__["DocumentacionDonacionCrudComponent"],
                _documentacion_donacion_conjunto_documentacion_donacion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DocumentacionDonacionConjuntoComponent"],
                _documentacion_donacion_table_documentacion_donacion_table_component__WEBPACK_IMPORTED_MODULE_8__["DocumentacionDonacionTableComponent"],
            ],
            exports: [
                _documentacion_donacion_list_kendo_documentacion_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DocumentacionDonacionListKendoComponent"],
                _documentacion_donacion_documentacion_donacion_component__WEBPACK_IMPORTED_MODULE_7__["DocumentacionDonacionComponent"],
                _documentacion_donacion_crud_documentacion_donacion_crud_component__WEBPACK_IMPORTED_MODULE_5__["DocumentacionDonacionCrudComponent"],
                _documentacion_donacion_conjunto_documentacion_donacion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DocumentacionDonacionConjuntoComponent"],
                _documentacion_donacion_table_documentacion_donacion_table_component__WEBPACK_IMPORTED_MODULE_8__["DocumentacionDonacionTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [DocumentacionDonacionModule])
    ], DocumentacionDonacionModule);
    return DocumentacionDonacionModule;
}());



/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion/documentacion-donacion.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion/documentacion-donacion.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion/documentacion-donacion.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion/documentacion-donacion.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4>{{ etiquetaGeneral }}</h4>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <!-- <app-componente-identificador [componente]=\"'documentacionDonacion'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"documentacionDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDocumentacionDonacion['id']\"\n                                                   [(dato)]=\"documentacionDonacion.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'documentacionDonacion'\"\n                                               [atributo]=\"'idoficioDonacion'\"\n                                               [buscar]=\"documentacionDonacionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosDocumentacionDonacion['idoficioDonacion']\"\n                                               [(dato)]=\"documentacionDonacion.idoficioDonacion\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosDocumentacionDonacion\"\n                                               [opciones]=\"lista_idoficioDonacionDocumentacionDonacion\"\n                                               [atributoVisible]=\"'botonCorneal'\" [(objetoEdicion)]=\"idoficioDonacionDocumentacionDonacionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idoficioDonacionEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'documentacionDonacion','idoficioDonacion')\" >\n                                   <app-oficio-donacion-crud [nombre]=\"'idoficioDonacion'\" [oficioDonacion]=\"documentacionDonacion.idoficioDonacion\" (oficioDonacionChange)=\"evtIdoficioDonacion($event)\"\n                                                           [ocultarConjuntosOficioDonacion]=\"'true'\" [class.hidden]=\"!idoficioDonacionEditar\" ></app-oficio-donacion-crud>\n                            </div>\n                        </div>\n                    </div> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Consentimiento Informado:</label>\n                                    <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                    <input\n                      type=\"radio\"\n                      name=\"consentimientoInformado\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"\n                        documentacionDonacion.consentimientoInformado\n                      \"\n                      [attr.disabled]=\"enable ? null : false\"\n                    />\n                    SÍ\n                  </label>\n                                    <label class=\"radio-inline\">\n                    <input\n                      type=\"radio\"\n                      name=\"consentimientoInformado\"\n                      [value]=\"0\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"\n                        documentacionDonacion.consentimientoInformado\n                      \"\n                      [attr.disabled]=\"enable ? null : false\"\n                    />\n                    NO\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"form-group\">\n                                    <label class=\"col-md-5 control-label\">ID Donante CI:</label>\n                                    <div class=\"col-md-7\">\n                                        <input name=\"idCenatraCi\" class=\"form-control\" type=\"text\" [(ngModel)]=\"documentacionDonacion.idCenatraCi\" [disabled]=\"!recepcionSolicitudEvaluacion?.idbtcCi\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Panel Viral:</label>\n                                    <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                    <input\n                      type=\"radio\"\n                      name=\"panelViral\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"documentacionDonacion.panelViral\"\n                      [attr.disabled]=\"enable ? null : false\"\n                    />\n                    SÍ\n                  </label>\n                                    <label class=\"radio-inline\">\n                    <input\n                      type=\"radio\"\n                      name=\"panelViral\"\n                      [value]=\"0\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"documentacionDonacion.panelViral\"\n                      [attr.disabled]=\"enable ? null : false\"\n                    />\n                    NO\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Certificado de Defunción:</label>\n                                    <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                      <input\n                        type=\"radio\"\n                        name=\"certificadoDefunsion\"\n                        class=\"form-checkbox-input\"\n                        [value]=\"1\"\n                        [(ngModel)]=\"documentacionDonacion.certificadoDefunsion\"\n                        [attr.disabled]=\"enable ? null : false\"\n                      />\n                      SÍ\n                    </label>\n                                    <label class=\"radio-inline\">\n                      <input\n                        type=\"radio\"\n                        name=\"certificadoDefunsion\"\n                        [value]=\"0\"\n                        class=\"form-checkbox-input\"\n                        [(ngModel)]=\"documentacionDonacion.certificadoDefunsion\"\n                        [attr.disabled]=\"enable ? null : false\"\n                      />\n                      NO\n                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Revisión Lámpara de Hendidura:</label\n                  >\n                  <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                    <input\n                      type=\"radio\"\n                      name=\"revisionLampara\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"documentacionDonacion.revisionLampara\"\n                      [attr.disabled]=\"enable ? null : false\"\n                    />\n                    SÍ\n                  </label>\n                                    <label class=\"radio-inline\">\n                    <input\n                      type=\"radio\"\n                      name=\"revisionLampara\"\n                      [value]=\"0\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"documentacionDonacion.revisionLampara\"\n                      [attr.disabled]=\"enable ? null : false\"\n                    />\n                    NO\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"form-group\">\n                                    <label class=\"col-md-5 control-label\">ID Donante CD:</label>\n                                    <div class=\"col-md-7\">\n                                        <input class=\"form-control\" name=\"idCenatraCd\" type=\"text\" [(ngModel)]=\"documentacionDonacion.idCenatraCd\" [disabled]=\"!recepcionSolicitudEvaluacion?.idbtcCd\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Certificado de Muerte Encefálica:</label\n                  >\n                  <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                    <input\n                      type=\"radio\"\n                      name=\"certificadoMuerteEncefalico\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"\n                        documentacionDonacion.certificadoMuerteEncefalico\n                      \"\n                      [attr.disabled]=\"enable ? null : false\"\n                    />\n                    SÍ\n                  </label>\n                                    <label class=\"radio-inline\">\n                    <input\n                      type=\"radio\"\n                      name=\"certificadoMuerteEncefalico\"\n                      [value]=\"0\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"\n                        documentacionDonacion.certificadoMuerteEncefalico\n                      \"\n                      [attr.disabled]=\"enable ? null : false\"\n                    />\n                    NO\n                  </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- <app-componente-cadena\n            [componente]=\"'documentacionDonacion'\"\n            [atributo]=\"'consentimientoInformado'\"\n            [buscar]=\"documentacionDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosDocumentacionDonacion['consentimientoInformado']\"\n            [(dato)]=\"documentacionDonacion.consentimientoInformado\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'documentacionDonacion'\"\n            [atributo]=\"'panelViral'\"\n            [buscar]=\"documentacionDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosDocumentacionDonacion['panelViral']\"\n            [(dato)]=\"documentacionDonacion.panelViral\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'documentacionDonacion'\"\n            [atributo]=\"'certificadoMuerteEncefalico'\"\n            [buscar]=\"documentacionDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"\n              validosDocumentacionDonacion['certificadoMuerteEncefalico']\n            \"\n            [(dato)]=\"documentacionDonacion.certificadoMuerteEncefalico\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'documentacionDonacion'\"\n            [atributo]=\"'revisionLampara'\"\n            [buscar]=\"documentacionDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosDocumentacionDonacion['revisionLampara']\"\n            [(dato)]=\"documentacionDonacion.revisionLampara\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'documentacionDonacion'\"\n            [atributo]=\"'certificadoDefunsion'\"\n            [buscar]=\"documentacionDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosDocumentacionDonacion['certificadoDefunsion']\"\n            [(dato)]=\"documentacionDonacion.certificadoDefunsion\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n                    <!-- <app-componente-fecha [componente]=\"'documentacionDonacion'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"documentacionDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDocumentacionDonacion['fechaRegistro']\"\n                                                   [(dato)]=\"documentacionDonacion.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'documentacionDonacion'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"documentacionDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDocumentacionDonacion['fechaActualizacion']\"\n                                                   [(dato)]=\"documentacionDonacion.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'documentacionDonacion'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"documentacionDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDocumentacionDonacion['fechaBaja']\"\n                                                   [(dato)]=\"documentacionDonacion.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                    <div>\n                        <app-componente-objeto [componente]=\"'documentacionDonacion'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"documentacionDonacionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosDocumentacionDonacion['usuarioUltMov']\"\n                                               [(dato)]=\"documentacionDonacion.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosDocumentacionDonacion\"\n                                               [opciones]=\"lista_usuarioUltMovDocumentacionDonacion\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovDocumentacionDonacionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'documentacionDonacion','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"documentacionDonacion.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-radio [componente]=\"'documentacionDonacion'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"documentacionDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDocumentacionDonacion['status']\"\n                                                   [(dato)]=\"documentacionDonacion.status\"   class=\"w-100\" >\n                    </app-componente-radio > -->\n                </div>\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/documentacion-donaciones/documentacion-donacion/documentacion-donacion.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/documentacion-donacion/documentacion-donacion.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DocumentacionDonacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionDonacionComponent", function() { return DocumentacionDonacionComponent; });
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/documentacion-donacion */ "./src/app/documentacion-donaciones/shared/documentacion-donacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentacionDonacionComponent = /** @class */ (function () {
    function DocumentacionDonacionComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.documentacionDonacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usuarioUltMovDocumentacionDonacionUsuarioEditar = false;
        this.idoficioDonacionDocumentacionDonacionOficioDonacionEditar = false;
    }
    DocumentacionDonacionComponent.prototype.actualizarDocumentacionDonacion = function () {
        if (this.documentacionDonacion.id == null) {
            this.documentacionDonacionService.guardarDocumentacionDonacion(this.documentacionDonacion, this.evtGuardar, this);
        }
        else {
            this.documentacionDonacionService.actualizarDocumentacionDonacion(this.documentacionDonacion, this.evtActualiza, this);
        }
    };
    DocumentacionDonacionComponent.prototype.evtGuardar = function (documentacionDonacion, obj) {
        obj.documentacionDonacion = documentacionDonacion;
        obj.documentacionDonacionChange.emit(obj.documentacionDonacion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    DocumentacionDonacionComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.documentacionDonacionChange.emit(obj.documentacionDonacion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DocumentacionDonacionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarDocumentacionDonacion();
            }
        }
        if (changes.permisosAtributos && changes.permisosAtributos.currentValue && this.enable) {
            changes.permisosAtributos.currentValue.forEach(function (element) {
                element.permiso = 2;
                return element;
            });
        }
    };
    DocumentacionDonacionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "documentacionDonacionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "validosDocumentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_2__["DocumentacionDonacion"])
    ], DocumentacionDonacionComponent.prototype, "documentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "documentacionDonacionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], DocumentacionDonacionComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "documentacionDonacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "lista_usuarioUltMovDocumentacionDonacionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentacionDonacionComponent.prototype, "lista_idoficioDonacionDocumentacionDonacionOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_0__["RecepcionSolicitudEvaluacion"])
    ], DocumentacionDonacionComponent.prototype, "recepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], DocumentacionDonacionComponent.prototype, "enable", void 0);
    DocumentacionDonacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentacion-donacion',
            template: __webpack_require__(/*! ./documentacion-donacion.component.html */ "./src/app/documentacion-donaciones/documentacion-donacion/documentacion-donacion.component.html"),
            styles: [__webpack_require__(/*! ./documentacion-donacion.component.css */ "./src/app/documentacion-donaciones/documentacion-donacion/documentacion-donacion.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DocumentacionDonacionComponent);
    return DocumentacionDonacionComponent;
}());



/***/ }),

/***/ "./src/app/documentacion-donaciones/shared/configurar-documentacion-donacion.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/shared/configurar-documentacion-donacion.ts ***!
  \**************************************************************************************/
/*! exports provided: ConfigurarDocumentacionDonacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarDocumentacionDonacion", function() { return ConfigurarDocumentacionDonacion; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarDocumentacionDonacion = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarDocumentacionDonacion() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "documentacionDonacion";
        this.rutaLista = this.crudServiceBaseUrl + "/getDocumentacionDonaciones";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarDocumentacionDonacion";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarDocumentacionDonacion";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarDocumentacionDonacion";
        this.titulo = "Catálogo DocumentacionDonacion";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.documentacionDonacionConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarDocumentacionDonacion.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDocumentacionDonacion.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarDocumentacionDonacion.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDocumentacionDonacion.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarDocumentacionDonacion.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDocumentacionDonacion.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarDocumentacionDonacion;
}());



/***/ }),

/***/ "./src/app/documentacion-donaciones/shared/documentacion-donacion.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/documentacion-donaciones/shared/documentacion-donacion.service.ts ***!
  \***********************************************************************************/
/*! exports provided: DocumentacionDonacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentacionDonacionService", function() { return DocumentacionDonacionService; });
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


var DocumentacionDonacionService = /** @class */ (function () {
    function DocumentacionDonacionService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    DocumentacionDonacionService.prototype.setDocumentacionDonacion = function (documentacionDonacion) {
        this.documentacionDonacion = documentacionDonacion;
    };
    DocumentacionDonacionService.prototype.getDocumentacionDonacion = function () {
        return this.documentacionDonacion;
    };
    DocumentacionDonacionService.prototype.guardarDocumentacionDonacion = function (documentacionDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(documentacionDonacion, 'documentacionDonacion/guardarDocumentacionDonacion')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.actualizarDocumentacionDonacion = function (documentacionDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(documentacionDonacion, 'documentacionDonacion/actualizarDocumentacionDonacion')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.eliminarDocumentacionDonacion = function (documentacionDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(documentacionDonacion, 'documentacionDonacion/eliminarDocumentacionDonacion')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonaciondb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'documentacionDonacion/getDocumentacionDonacion')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonaciones = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'documentacionDonacion/getDocumentacionDonaciones')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'documentacionDonacion/getDocumentacionDonacionesActivos')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.lazyDocumentacionDonacion = function (documentacionDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(documentacionDonacion, 'documentacionDonacion/lazyDocumentacionDonacion')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'documentacionDonacion/getDocumentacionDonacionById')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'documentacionDonacion/getDocumentacionDonacionesById')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'documentacionDonacion/getDocumentacionDonacionByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'documentacionDonacion/getDocumentacionDonacionesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByCertificadoMuerteEncefalico = function (certificadoMuerteEncefalico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(certificadoMuerteEncefalico, 'documentacionDonacion/getDocumentacionDonacionByCertificadoMuerteEncefalico')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByCertificadoMuerteEncefalico = function (certificadoMuerteEncefalico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(certificadoMuerteEncefalico, 'documentacionDonacion/getDocumentacionDonacionesByCertificadoMuerteEncefalico')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByConsentimientoInformado = function (consentimientoInformado, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consentimientoInformado, 'documentacionDonacion/getDocumentacionDonacionByConsentimientoInformado')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByConsentimientoInformado = function (consentimientoInformado, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consentimientoInformado, 'documentacionDonacion/getDocumentacionDonacionesByConsentimientoInformado')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'documentacionDonacion/getDocumentacionDonacionByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'documentacionDonacion/getDocumentacionDonacionesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByPanelViral = function (panelViral, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(panelViral, 'documentacionDonacion/getDocumentacionDonacionByPanelViral')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByPanelViral = function (panelViral, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(panelViral, 'documentacionDonacion/getDocumentacionDonacionesByPanelViral')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByRevisionLampara = function (revisionLampara, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(revisionLampara, 'documentacionDonacion/getDocumentacionDonacionByRevisionLampara')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByRevisionLampara = function (revisionLampara, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(revisionLampara, 'documentacionDonacion/getDocumentacionDonacionesByRevisionLampara')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'documentacionDonacion/getDocumentacionDonacionByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'documentacionDonacion/getDocumentacionDonacionesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByCertificadoDefunsion = function (certificadoDefunsion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(certificadoDefunsion, 'documentacionDonacion/getDocumentacionDonacionByCertificadoDefunsion')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByCertificadoDefunsion = function (certificadoDefunsion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(certificadoDefunsion, 'documentacionDonacion/getDocumentacionDonacionesByCertificadoDefunsion')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'documentacionDonacion/getDocumentacionDonacionByStatus')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'documentacionDonacion/getDocumentacionDonacionesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'documentacionDonacion/getDocumentacionDonacionByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'documentacionDonacion/getDocumentacionDonacionesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionByIdoficioDonacion = function (idoficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'documentacionDonacion/getDocumentacionDonacionByIdoficioDonacion')
            .subscribe(function (data) {
            _evento(_this.documentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.documentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByIdoficioDonacion = function (idoficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'documentacionDonacion/getDocumentacionDonacionesByIdoficioDonacion')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'documentacionDonacion/custom')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService.prototype.getDocumentacionDonacionesByDto = function (p_documentacionDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_documentacionDonacion, 'documentacionDonacion/getDocumentacionDonacionesByDto')
            .subscribe(function (data) {
            _evento(_this.listaDocumentacionDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDocumentacionDonacion);
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
    DocumentacionDonacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], DocumentacionDonacionService);
    return DocumentacionDonacionService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-documentacion-donaciones-documentacion-donacion-module~app-oficio-donaciones-oficio-dona~0ef3c9a0.js.map