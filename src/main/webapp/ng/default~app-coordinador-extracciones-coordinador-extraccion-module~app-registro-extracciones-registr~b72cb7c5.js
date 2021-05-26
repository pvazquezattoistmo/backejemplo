(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-coordinador-extracciones-coordinador-extraccion-module~app-registro-extracciones-registr~b72cb7c5"],{

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let coordinadorExtraccion of listaCoordinadorExtraccion \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+coordinadorExtraccion.id}\"\n        (click)=\"elegir(coordinadorExtraccion,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{coordinadorExtraccion.id}}\">{{coordinadorExtraccion.id}}</a>\n    </li>\n    <li *ngFor =  \"let coordinadorExtraccion of listaCoordinadorExtraccionN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+coordinadorExtraccion.id}\"\n        (click)=\"elegir(coordinadorExtraccion, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{coordinadorExtraccion.id}}\">T-{{coordinadorExtraccion.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let coordinadorExtraccion of listaCoordinadorExtraccion ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+coordinadorExtraccion.id}\" id=\"tab-I-{{coordinadorExtraccion.id}}\">\n\t\t\t<app-coordinador-extraccion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [coordinadorExtraccionBuscar]=\"coordinadorExtraccionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosCoordinadorExtraccion]=\"validosCoordinadorExtraccion\"  \n\t\t\t\t\t\t  [coordinadorExtraccionService]=\"coordinadorExtraccionService\" [(opcion)]=\"opcionCoordinadorExtraccion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(coordinadorExtraccion)]=\"listaCoordinadorExtraccion[i]\"  [ocultarConjuntos]=\"ocultarConjuntosCoordinadorExtraccion\"\n                           [lista_usuarioUltMovCoordinadorExtraccionUsuario]=\"lista_usuarioUltMovCoordinadorExtraccionUsuario\" \n                           [lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion]=\"lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-coordinador-extraccion>\n        </div>\n        <div *ngFor = \"let coordinadorExtraccion of listaCoordinadorExtraccionN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+coordinadorExtraccion.id}\" id=\"tab-N-{{coordinadorExtraccion.id}}\">\n\t\t\t<app-coordinador-extraccion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [coordinadorExtraccionBuscar]=\"coordinadorExtraccionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosCoordinadorExtraccion]=\"validosCoordinadorExtraccion\"  \n\t\t\t\t\t\t  [coordinadorExtraccionService]=\"coordinadorExtraccionService\" [(opcion)]=\"opcionCoordinadorExtraccion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(coordinadorExtraccion)]=\"listaCoordinadorExtraccionN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosCoordinadorExtraccion\"\n                           [lista_usuarioUltMovCoordinadorExtraccionUsuario]=\"lista_usuarioUltMovCoordinadorExtraccionUsuario\" \n                           [lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion]=\"lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-coordinador-extraccion>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: CoordinadorExtraccionConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinadorExtraccionConjuntoComponent", function() { return CoordinadorExtraccionConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/coordinador-extraccion */ "./src/app/coordinador-extracciones/shared/coordinador-extraccion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoordinadorExtraccionConjuntoComponent = /** @class */ (function () {
    function CoordinadorExtraccionConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovCoordinadorExtraccionUsuarioEditar = false;
        this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEditar = false;
        this.listaCoordinadorExtraccionN = [];
        this.listaCoordinadorExtraccion = [];
        this.listaCoordinadorExtraccionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.coordinadorExtraccionN = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__["CoordinadorExtraccion"]();
        this.coordinadorExtraccionNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    CoordinadorExtraccionConjuntoComponent.prototype.elegir = function (coordinadorExtraccion, tipo) {
        this.idSeleccionado = tipo + "-" + coordinadorExtraccion.id;
        this.coordinadorExtraccionN = coordinadorExtraccion;
    };
    CoordinadorExtraccionConjuntoComponent.prototype.ngOnInit = function () {
        this.coordinadorExtraccionN.id = 0;
        this.listaCoordinadorExtraccionN.push(Object.assign({}, this.coordinadorExtraccionN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    CoordinadorExtraccionConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__["CoordinadorExtraccion"]();
        pg.id = this.listaCoordinadorExtraccionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaCoordinadorExtraccionN.push(pg);
    };
    CoordinadorExtraccionConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaCoordinadorExtraccion; _i < _a.length; _i++) {
            var coordinadorExtraccion = _a[_i];
            this.coordinadorExtraccionService.actualizarCoordinadorExtraccion(coordinadorExtraccion, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaCoordinadorExtraccionN; _b < _c.length; _b++) {
            var coordinadorExtraccion = _c[_b];
            coordinadorExtraccion.id = null;
            this.coordinadorExtraccionService.guardarCoordinadorExtraccion(coordinadorExtraccion, this.evtGuardar, this);
        }
    };
    CoordinadorExtraccionConjuntoComponent.prototype.evtGuardar = function (coordinadorExtraccion, obj) {
        obj.agregados++;
        obj.listaCoordinadorExtraccion.push(coordinadorExtraccion);
        if (obj.agregados >= obj.listaCoordinadorExtraccionN.length) {
            obj.coordinadorExtraccionN = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__["CoordinadorExtraccion"]();
            obj.listaCoordinadorExtraccionN = [];
            obj.coordinadorExtraccionN.id = 0;
            obj.idSeleccionado = "N-" + obj.coordinadorExtraccionN.id;
            obj.listaCoordinadorExtraccionN.push(Object.assign({}, obj.coordinadorExtraccionN));
            obj.listaCoordinadorExtraccionChange.emit(obj.listaCoordinadorExtraccion);
        }
        if (obj.agregados >= obj.listaCoordinadorExtraccionN.length &&
            obj.actualizados >= obj.listaCoordinadorExtraccion.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    CoordinadorExtraccionConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaCoordinadorExtraccionN.length &&
                obj.actualizados >= obj.listaCoordinadorExtraccion.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    CoordinadorExtraccionConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], CoordinadorExtraccionConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "coordinadorExtraccionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "validosCoordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "ocultarConjuntosCoordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "coordinadorExtraccionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "lista_usuarioUltMovCoordinadorExtraccionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "listaCoordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "listaCoordinadorExtraccionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__["CoordinadorExtraccion"])
    ], CoordinadorExtraccionConjuntoComponent.prototype, "coordinadorExtraccionN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionConjuntoComponent.prototype, "coordinadorExtraccionNChange", void 0);
    CoordinadorExtraccionConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coordinador-extraccion-conjunto',
            template: __webpack_require__(/*! ./coordinador-extraccion-conjunto.component.html */ "./src/app/coordinador-extracciones/coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./coordinador-extraccion-conjunto.component.css */ "./src/app/coordinador-extracciones/coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CoordinadorExtraccionConjuntoComponent);
    return CoordinadorExtraccionConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-coordinador-extraccion [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"'COORDINADOR DE DONACIÓN *'\"\n                           [coordinadorExtraccionBuscar]=\"coordinadorExtraccionBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosCoordinadorExtraccion]=\"validosCoordinadorExtraccion\"\n                           [coordinadorExtraccionService]=\"coordinadorExtraccion_service\"\n                           [(opcion)]=\"opcionCoordinadorExtraccion\"\n                           [globalesService]=\"globalesService\"\n                           [(coordinadorExtraccion)]=\"coordinadorExtraccion\"\n                           [ocultarConjuntos]=\"ocultarConjuntosCoordinadorExtraccion\"\n                           [lista_usuarioUltMovCoordinadorExtraccionUsuario]=\"lista_usuarioUltMovCoordinadorExtraccionUsuario\"\n                           [lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion]=\"lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion\"\n\n\t\t\t\t\t  >\n\n        </app-coordinador-extraccion>\n\n        <div class=\"row\">\n            <div class=\"col-md-2 col-md-offset-10\">\n              <button\n                style=\"margin-right: 10px;\"\n                type=\"button\"\n                class=\"btn btn-guardar\"\n                (click)=\"addCoordinadorExtraccion()\"\n              >\n                <span\n                  class=\"glyphicon glyphicon-plus\"\n                  aria-hidden=\"true\"\n                ></span>\n              </button>\n            </div>\n          </div>\n        <br>\n        <kendo-grid [data]=\"listaCoordinadorExtraccion\" [height]=\"200\" (remove)=\"removeCoordinadorExtraccionHandler($event)\">\n            <kendo-grid-column field=\"nombre\" title=\"Nombre\" >\n            </kendo-grid-column>\n            <kendo-grid-column field=\"primerApellido\" title=\"Primer Apellido\">\n            </kendo-grid-column>\n            <kendo-grid-column field=\"segundoApellido\" title=\"Segundo Apellido\">\n            </kendo-grid-column>\n            <kendo-grid-command-column title=\"Borrar\" width=\"220\">\n                <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n                    <button kendoGridRemoveCommand>Borrar</button>\n                </ng-template>\n            </kendo-grid-command-column>\n            <ng-template kendoGridNoRecordsTemplate>\n                Sin registros.\n             </ng-template>\n        </kendo-grid>\n\n<!--\n        <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!coordinadorExtraccionBuscar\" (click)=\"buscarCoordinadorExtraccionFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!coordinadorExtraccionAgregar\" (click)=\"nuevoCoordinadorExtraccionFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!coordinadorExtraccionActualizar\" (click)=\"actualizarCoordinadorExtraccionFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!coordinadorExtraccionEliminar\" (click)=\"eliminarCoordinadorExtraccionFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!coordinadorExtraccionGuardar\" (click)=\"guardarCoordinadorExtraccionFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!coordinadorExtraccionCancelar\" (click)=\"cancelarCoordinadorExtraccionFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteCoordinadorExtraccionWord\" (click)=\"reporteCoordinadorExtraccionWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteCoordinadorExtraccionExcel\" (click)=\"reporteCoordinadorExtraccionExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteCoordinadorExtraccionPdf\" (click)=\"reporteCoordinadorExtraccionPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div> -->\n    </div>\n    <div class=\"modal fade\" id=\"buscarCoordinadorExtraccion_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-coordinador-extraccion-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionCoordinadorExtraccion]=\"configuracionCoordinadorExtraccion\"  (coordinadorExtraccionSeleccionado) =\"evtCoordinadorExtraccionSeleccionado($event)\">  </app-coordinador-extraccion-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CoordinadorExtraccionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinadorExtraccionCrudComponent", function() { return CoordinadorExtraccionCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/coordinador-extraccion */ "./src/app/coordinador-extracciones/shared/coordinador-extraccion.ts");
/* harmony import */ var _shared_coordinador_extraccion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/coordinador-extraccion.service */ "./src/app/coordinador-extracciones/shared/coordinador-extraccion.service.ts");
/* harmony import */ var _shared_configurar_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-coordinador-extraccion */ "./src/app/coordinador-extracciones/shared/configurar-coordinador-extraccion.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _registro_extracciones_shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../registro-extracciones/shared/registro-extraccion */ "./src/app/registro-extracciones/shared/registro-extraccion.ts");
/* harmony import */ var _registro_extracciones_shared_registro_extraccion_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../registro-extracciones/shared/registro-extraccion.service */ "./src/app/registro-extracciones/shared/registro-extraccion.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
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







var CoordinadorExtraccionCrudComponent = /** @class */ (function () {
    function CoordinadorExtraccionCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coordinadorExtraccion_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, registroExtraccion_service, solicitudEvaluacionCorneal_service, causaMuerte_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.coordinadorExtraccion_service = coordinadorExtraccion_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.registroExtraccion_service = registroExtraccion_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.opcionCoordinadorExtraccion = 0;
        this.validosCoordinadorExtraccion = {
            id: false,
            fechaBaja: false,
            primerApellido: false,
            fechaRegistro: false,
            segundoApellido: false,
            fechaActualizacion: false,
            nombre: false,
            status: false,
            usuarioUltMov: false,
            idregistroExtraccion: false
        };
        this.ocultarConjuntosCoordinadorExtraccion = false;
        this.nombre = "";
        this.permisosTabla = {
            tabla: "coordinadorExtraccion",
            permiso: 0,
            etiqueta: ""
        };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.coordinadorExtraccionLazy = false;
        this.coordinadorExtraccionPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.coordinadorExtraccion = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
        this.coordinadorExtraccionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.coordinadorExtraccionTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_coordinadorExtracciones = [];
        this.usuarioUltMovCoordinadorExtraccionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovCoordinadorExtraccionUsuario = [];
        this.usuarioUltMovCoordinadorExtraccionUsuarioEditar = false;
        this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion = new _registro_extracciones_shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_14__["RegistroExtraccion"]();
        this.lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion = [];
        this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
        this.configuracionCoordinadorExtraccion = new _shared_configurar_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarCoordinadorExtraccion"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCoordinadorExtraccionUsuario, this);
        this.registroExtraccion_service.getRegistroExtraccionesActivos(this.evtGetIdregistroExtraccionCoordinadorExtraccionRegistroExtraccion, this);
        this.limpiarCampos();
    }
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "coordinadorExtraccionOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosCoordinadorExtraccion)
                return true;
            return !this.coordinadorExtraccionActualizar;
        },
        enumerable: true,
        configurable: true
    });
    CoordinadorExtraccionCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.coordinadorExtraccion &&
            changes.coordinadorExtraccion.currentValue == null &&
            this.coordinadorExtraccion == null)
            this.coordinadorExtraccion = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
        else {
            var aux = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
            if (this.coordinadorExtraccion)
                aux.from(this.coordinadorExtraccion);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionGuardar = false;
                this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = this.coordinadorExtraccionCancelar = true;
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
                this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionBuscar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
                this.coordinadorExtraccionGuardar = this.coordinadorExtraccionCancelar = true;
            }
        }
    };
    CoordinadorExtraccionCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "coordinadorExtraccion",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "registroExtraccion",
            "solicitudEvaluacionCorneal",
            "causaMuerte"
        ];
        var parametros = {
            id_usu: this.usuariologueado.id,
            tablas: tablas,
            id_exp: id_expe
        };
        this.coordinadorExtraccionPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoordinadorExtraccionCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.coordinadorExtraccionPermisos = true;
        if (permisos &&
            permisos.coordinadorExtraccion &&
            permisos.coordinadorExtraccion.PermisoAtributo &&
            permisos.coordinadorExtraccion.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.coordinadorExtraccion.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos &&
            permisos.coordinadorExtraccion &&
            permisos.coordinadorExtraccion.PermisoConjunto &&
            permisos.coordinadorExtraccion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.coordinadorExtraccion.PermisoConjunto;
        }
        if (permisos &&
            permisos.coordinadorExtraccion &&
            permisos.coordinadorExtraccion.PermisoTabla &&
            permisos.coordinadorExtraccion.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.coordinadorExtraccion.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos &&
            permisos.usuario &&
            permisos.usuario.PermisoAtributo &&
            permisos.usuario.PermisoAtributo.length > 0) {
            //obj.configuracion$1=
            permisos.usuario.PermisoAtributo;
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
            //obj.configuracion$1=
            permisos.usuario.PermisoTabla[0];
            // obj.permisosTabla.push(permisos.usuario.PermisoTabla[0]);
        }
        if (permisos &&
            permisos.registroExtraccion &&
            permisos.registroExtraccion.PermisoAtributo &&
            permisos.registroExtraccion.PermisoAtributo.length > 0) {
            //obj.configuracion$1=
            permisos.registroExtraccion.PermisoAtributo;
            obj.permisosAtributos.push(permisos.registroExtraccion.PermisoAtributo);
        }
        if (permisos &&
            permisos.registroExtraccion &&
            permisos.registroExtraccion.PermisoAtributo &&
            permisos.registroExtraccion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.registroExtraccion.PermisoConjunto);
        }
        if (permisos &&
            permisos.registroExtraccion &&
            permisos.registroExtraccion.PermisoTabla &&
            permisos.registroExtraccion.PermisoTabla.length > 0) {
            //obj.configuracion$1=
            permisos.registroExtraccion.PermisoTabla[0];
            // obj.permisosTabla.push(permisos.registroExtraccion.PermisoTabla[0]);
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoordinadorExtraccionCrudComponent.prototype.evtGetUsuarioUltMovCoordinadorExtraccionUsuario = function (lista_usuarioUltMovCoordinadorExtraccionUsuario, obj) {
        obj.lista_usuarioUltMovCoordinadorExtraccionUsuario = lista_usuarioUltMovCoordinadorExtraccionUsuario;
        obj.actualizar_UsuarioUltMovCoordinadorExtraccionUsuario();
    };
    CoordinadorExtraccionCrudComponent.prototype.evtGetIdregistroExtraccionCoordinadorExtraccionRegistroExtraccion = function (lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion, obj) {
        obj.lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion = lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion;
        obj.actualizar_IdregistroExtraccionCoordinadorExtraccionRegistroExtraccion();
    };
    CoordinadorExtraccionCrudComponent.prototype.actualizar_UsuarioUltMovCoordinadorExtraccionUsuario = function () {
        if (this.usuarioUltMovCoordinadorExtraccionUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovCoordinadorExtraccionUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovCoordinadorExtraccionUsuarioEleccion.id) {
                    this.usuarioUltMovCoordinadorExtraccionUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    CoordinadorExtraccionCrudComponent.prototype.actualizar_IdregistroExtraccionCoordinadorExtraccionRegistroExtraccion = function () {
        if (this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion)
            for (var _i = 0, _a = this
                .lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id ==
                    this
                        .idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion
                        .id) {
                    this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion = eleme;
                    break;
                }
            }
    };
    CoordinadorExtraccionCrudComponent.prototype.ngDoCheck = function () { };
    CoordinadorExtraccionCrudComponent.prototype.validaAcciones = function (vall) {
        return (this.accion == 0 ||
            this.accion == 1 ||
            this.accion == 4 ||
            this.accion == 6 ||
            (this.accion == 7 && vall) ||
            (this.accion == 2 && vall) ||
            (this.accion == 3 && vall) ||
            (this.accion == 5 && vall));
    };
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosCoordinadorExtraccion["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosCoordinadorExtraccion["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosCoordinadorExtraccion["fechaBaja"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaPrimerApellido", {
        get: function () {
            return this.validosCoordinadorExtraccion["primerApellido"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosCoordinadorExtraccion["fechaRegistro"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaSegundoApellido", {
        get: function () {
            return this.validosCoordinadorExtraccion["segundoApellido"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosCoordinadorExtraccion["fechaActualizacion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaNombre", {
        get: function () {
            return this.validosCoordinadorExtraccion["nombre"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosCoordinadorExtraccion["status"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosCoordinadorExtraccion["usuarioUltMov"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaIdregistroExtraccion", {
        get: function () {
            return this.validosCoordinadorExtraccion["idregistroExtraccion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId &&
                this.validaFechaBaja &&
                this.validaPrimerApellido &&
                this.validaFechaRegistro &&
                this.validaSegundoApellido &&
                this.validaFechaActualizacion &&
                this.validaNombre &&
                this.validaStatus &&
                this.validaUsuarioUltMov &&
                this.validaIdregistroExtraccion;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    CoordinadorExtraccionCrudComponent.prototype.obtenerCoordinadorExtracciones = function (lista, objeto) {
        objeto.lista_coordinadorExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.coordinadorExtraccion.from(lista[0]);
            objeto.evtCoordinadorExtraccionSeleccionado(objeto.coordinadorExtraccion);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    CoordinadorExtraccionCrudComponent.prototype.evn_lazy_coordinadorExtraccion = function (coordinadorExtraccion, objeto) {
        objeto.coordinadorExtraccion = coordinadorExtraccion;
        objeto.coordinadorExtraccionChange.emit(objeto.coordinadorExtraccion);
        objeto.configuarCombosObjetos();
        objeto.coordinadorExtraccionLazy = true;
    };
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "datosReporteCoordinadorExtraccionWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.coordinadorExtraccionActualizar &&
                this.coordinadorExtraccionLazy &&
                this.globalesService.preporteWord(this, "coordinadorExtraccion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "datosReporteCoordinadorExtraccionExcel", {
        get: function () {
            return !(this.coordinadorExtraccionActualizar &&
                this.coordinadorExtraccionLazy &&
                this.globalesService.preporteExcel(this, "coordinadorExtraccion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordinadorExtraccionCrudComponent.prototype, "datosReporteCoordinadorExtraccionPdf", {
        get: function () {
            return !(this.coordinadorExtraccionActualizar &&
                this.coordinadorExtraccionLazy &&
                this.globalesService.preportePdf(this, "coordinadorExtraccion"));
        },
        enumerable: true,
        configurable: true
    });
    CoordinadorExtraccionCrudComponent.prototype.reporteCoordinadorExtraccionExcel = function (form) {
        var nombre = "CoordinadorExtraccion.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = {
            coordinadorExtraccion: this.coordinadorExtraccion
        };
        parametros["plantilla"] = "CoordinadorExtraccion.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    CoordinadorExtraccionCrudComponent.prototype.reporteCoordinadorExtraccionWord = function (form) {
        var nombre = "CoordinadorExtraccion.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = {
            coordinadorExtraccion: this.coordinadorExtraccion
        };
        parametros["plantilla"] = "CoordinadorExtraccion.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    CoordinadorExtraccionCrudComponent.prototype.reporteCoordinadorExtraccionPdf = function (form) {
        var nombre = "CoordinadorExtraccion.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = {
            coordinadorExtraccion: this.coordinadorExtraccion
        };
        parametros["plantilla"] = "CoordinadorExtraccion.docx";
        parametros["salida"] = "CoordinadorExtraccion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    CoordinadorExtraccionCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
        this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionCancelar = true;
    };
    CoordinadorExtraccionCrudComponent.prototype.buscarCoordinadorExtraccionFront = function (form) {
        this.accionesBuscar();
        var vcoordinadorExtraccion = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
        vcoordinadorExtraccion.from(this.coordinadorExtraccion);
        this.configuracionCoordinadorExtraccion = new _shared_configurar_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarCoordinadorExtraccion"]();
        this.configuracionCoordinadorExtraccion.permisosTabla = {
            tabla: "coordinadorExtraccion",
            permiso: 8
        };
        this.configuracionCoordinadorExtraccion.titulo =
            "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta = vcoordinadorExtraccion;
        this.permisosacciones();
        $("#buscarCoordinadorExtraccion_" + this.nombre).modal();
    };
    CoordinadorExtraccionCrudComponent.prototype.buscarCoordinadorExtraccionBack = function (coordinadorExtraccion) {
        this.coordinadorExtraccion_service.getCoordinadorExtraccionesByDto(coordinadorExtraccion, this.eventoSrvCoordinadorExtraccionBuscar, this);
    };
    CoordinadorExtraccionCrudComponent.prototype.eventoSrvCoordinadorExtraccionBuscar = function (lista, objeto) {
        objeto.lista_coordinadorExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.coordinadorExtraccion = lista[0];
            objeto.coordinadorExtraccionLazy = false;
            objeto.coordinadorExtraccion_service.lazyCoordinadorExtraccion(objeto.coordinadorExtraccion, objeto.evn_lazy_coordinadorExtraccion, objeto);
        }
    };
    CoordinadorExtraccionCrudComponent.prototype.guardarCoordinadorExtraccionFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarCoordinadorExtraccionBack(this.coordinadorExtraccion);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    CoordinadorExtraccionCrudComponent.prototype.guardarCoordinadorExtraccionBack = function (coordinadorExtraccion) {
        if (coordinadorExtraccion.usuarioUltMov == null)
            coordinadorExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        if (coordinadorExtraccion.status == null ||
            coordinadorExtraccion.status == "")
            coordinadorExtraccion.status = 1;
        this.coordinadorExtraccion_service.guardarCoordinadorExtraccion(coordinadorExtraccion, this.eventoSrvCoordinadorExtraccionGuardar, this);
    };
    CoordinadorExtraccionCrudComponent.prototype.eventoSrvCoordinadorExtraccionGuardar = function (coordinadorExtraccion, obj) {
        obj.coordinadorExtraccion = coordinadorExtraccion;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
        aux.from(coordinadorExtraccion);
        obj.coordinadorExtraccionChange.emit(aux);
        obj.coordinadorExtraccionTablaChange.emit(aux);
        obj.coordinadorExtraccionLazy = false;
        obj.coordinadorExtraccion_service.lazyCoordinadorExtraccion(obj.coordinadorExtraccion, obj.evn_lazy_coordinadorExtraccion, obj);
        obj.accionesActualizar();
    };
    CoordinadorExtraccionCrudComponent.prototype.actualizarCoordinadorExtraccionFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarCoordinadorExtraccionBack(this.coordinadorExtraccion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    CoordinadorExtraccionCrudComponent.prototype.actualizarCoordinadorExtraccionBack = function (coordinadorExtraccion) {
        coordinadorExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        this.coordinadorExtraccion_service.actualizarCoordinadorExtraccion(coordinadorExtraccion, this.eventoSrvCoordinadorExtraccionActualizar, this);
    };
    CoordinadorExtraccionCrudComponent.prototype.eventoSrvCoordinadorExtraccionActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.coordinadorExtraccionLazy = false;
            obj.coordinadorExtraccion_service.lazyCoordinadorExtraccion(obj.coordinadorExtraccion, obj.evn_lazy_coordinadorExtraccion, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.coordinadorExtraccion);
            obj.coordinadorExtraccionChange.emit(aux);
            obj.coordinadorExtraccionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    CoordinadorExtraccionCrudComponent.prototype.eliminarCoordinadorExtraccionFront = function (form) {
        this.accion = 4;
        this.eliminarCoordinadorExtraccionBack(this.coordinadorExtraccion);
        this.permisosacciones();
        this.accionesBuscar();
    };
    CoordinadorExtraccionCrudComponent.prototype.eliminarCoordinadorExtraccionBack = function (coordinadorExtraccion) {
        coordinadorExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        this.coordinadorExtraccion_service.eliminarCoordinadorExtraccion(coordinadorExtraccion, this.eventoSrvCoordinadorExtraccionEliminar, this);
    };
    CoordinadorExtraccionCrudComponent.prototype.eventoSrvCoordinadorExtraccionEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.coordinadorExtraccion = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
            obj.coordinadorExtraccionChange.emit(obj.coordinadorExtraccion);
            obj.coordinadorExtraccionTablaChange.emit(obj.coordinadorExtraccion);
            obj.limpiarCampos();
        }
    };
    CoordinadorExtraccionCrudComponent.prototype.cancelarCoordinadorExtraccionFront = function (form) {
        this.accion = 6;
        this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
        this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = true;
        this.permisosacciones();
    };
    CoordinadorExtraccionCrudComponent.prototype.nuevoCoordinadorExtraccionFront = function (form) {
        this.accion = 2;
        bootbox.confirm({
            message: "¿Deseas limpiar los campos de ingreso?",
            buttons: {
                confirm: {
                    label: "Si",
                    className: "btn-success"
                },
                cancel: {
                    label: "No",
                    className: "btn-danger"
                }
            },
            callback: function (result) {
                if (result)
                    this.limpiarCampos();
                this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionBuscar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false;
                this.coordinadorExtraccionGuardar = this.coordinadorExtraccionCancelar = true;
            }.bind(this)
        });
    };
    CoordinadorExtraccionCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovCoordinadorExtraccionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCoordinadorExtraccionUsuario, this);
        this.lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion = [];
        this.registroExtraccion_service.getRegistroExtraccionesActivos(this.evtGetIdregistroExtraccionCoordinadorExtraccionRegistroExtraccion, this);
    };
    CoordinadorExtraccionCrudComponent.prototype.configurarTablasConjuntos = function () { };
    CoordinadorExtraccionCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionGuardar = false;
        this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = this.coordinadorExtraccionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    CoordinadorExtraccionCrudComponent.prototype.evtCoordinadorExtraccionSeleccionado = function (coordinadorExtraccion) {
        this.coordinadorExtraccion = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
        this.coordinadorExtraccion.from(coordinadorExtraccion);
        this.coordinadorExtraccionLazy = false;
        this.coordinadorExtraccion_service.lazyCoordinadorExtraccion(this.coordinadorExtraccion, this.evn_lazy_coordinadorExtraccion, this);
        this.accion = 7;
        this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionGuardar = false;
        this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = this.coordinadorExtraccionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarCoordinadorExtraccion_" + this.nombre).modal("hide");
    };
    CoordinadorExtraccionCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false; // ******************** maquina
        this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    CoordinadorExtraccionCrudComponent.prototype.permisosacciones = function () {
        if (this.coordinadorExtraccionBuscar)
            this.coordinadorExtraccionBuscar = this.globalesService.pbuscar(this, "coordinadorExtraccion");
        if (this.coordinadorExtraccionActualizar)
            this.coordinadorExtraccionActualizar =
                this.globalesService.pacutalizar(this, "coordinadorExtraccion") &&
                    this.globalesService.pbuscar(this, "coordinadorExtraccion");
        if (this.coordinadorExtraccionEliminar)
            this.coordinadorExtraccionEliminar =
                this.globalesService.peliminar(this, "coordinadorExtraccion") &&
                    this.globalesService.pbuscar(this, "coordinadorExtraccion");
        if (this.coordinadorExtraccionAgregar)
            this.coordinadorExtraccionAgregar = this.globalesService.pagregar(this, "coordinadorExtraccion");
    };
    CoordinadorExtraccionCrudComponent.prototype.permisosaccionesInicio = function () {
        this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false; // *************************** maquina
        this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    CoordinadorExtraccionCrudComponent.prototype.limpiarCampos = function () {
        this.coordinadorExtraccion = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
        this.usuarioUltMovCoordinadorExtraccionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEleccion = new _registro_extracciones_shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_14__["RegistroExtraccion"]();
        this.coordinadorExtraccionChange.emit(this.coordinadorExtraccion);
        this.coordinadorExtraccionSeleccion = this.coordinadorExtraccionCancelar = this.coordinadorExtraccionGuardar = this.coordinadorExtraccionActualizar = this.coordinadorExtraccionEliminar = false; // *************************** maquina
        this.coordinadorExtraccionBuscar = this.coordinadorExtraccionAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    CoordinadorExtraccionCrudComponent.prototype.addCoordinadorExtraccion = function () {
        this.coordinadorExtraccion.nombre = this.coordinadorExtraccion.nombre ? this.coordinadorExtraccion.nombre.trim() : null;
        this.coordinadorExtraccion.primerApellido = this.coordinadorExtraccion.primerApellido ? this.coordinadorExtraccion.primerApellido.trim() : null;
        this.coordinadorExtraccion.segundoApellido = this.coordinadorExtraccion.segundoApellido ? this.coordinadorExtraccion.segundoApellido.trim() : null;
        if ((!this.coordinadorExtraccion.nombre || this.coordinadorExtraccion.nombre.length === 0) && (!this.coordinadorExtraccion.primerApellido || this.coordinadorExtraccion.primerApellido.length === 0)) {
            bootbox.alert("El nombre y el primer apellido son requeridos");
            return;
        }
        if (!this.coordinadorExtraccion.nombre || this.coordinadorExtraccion.nombre.length === 0) {
            bootbox.alert("El nombre es requerido");
            return;
        }
        if (!this.coordinadorExtraccion.nombre.match(/^[a-zA-Z ]*$/)) {
            bootbox.alert("El nombre solo permite letras");
            return;
        }
        if (!this.coordinadorExtraccion.primerApellido || this.coordinadorExtraccion.primerApellido.length === 0) {
            bootbox.alert("El primer apellido es requerido");
            return;
        }
        if (!this.coordinadorExtraccion.primerApellido.match(/^[a-zA-Z ]*$/)) {
            bootbox.alert("El primer apellido solo permite letras");
            return;
        }
        if (this.coordinadorExtraccion.segundoApellido && !this.coordinadorExtraccion.primerApellido.match(/^[a-zA-Z ]*$/)) {
            bootbox.alert("El segundo apellido solo permite letras");
            return;
        }
        if (this.listaCoordinadorExtraccion.length < 3) {
            this.listaCoordinadorExtraccion.push(this.coordinadorExtraccion);
            this.coordinadorExtraccion = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"]();
        }
        else {
            bootbox.alert("Solo se permite 3 registros.");
        }
    };
    CoordinadorExtraccionCrudComponent.prototype.removeCoordinadorExtraccionHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.listaCoordinadorExtraccion.splice(this.listaCoordinadorExtraccion.indexOf(dataItem), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CoordinadorExtraccionCrudComponent.prototype, "ocultarConjuntosCoordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CoordinadorExtraccionCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CoordinadorExtraccionCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccion"])
    ], CoordinadorExtraccionCrudComponent.prototype, "coordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionCrudComponent.prototype, "coordinadorExtraccionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionCrudComponent.prototype, "coordinadorExtraccionTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CoordinadorExtraccionCrudComponent.prototype, "listaCoordinadorExtraccion", void 0);
    CoordinadorExtraccionCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-coordinador-extraccion-crud",
            template: __webpack_require__(/*! ./coordinador-extraccion-crud.component.html */ "./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.html"),
            styles: [__webpack_require__(/*! ./coordinador-extraccion-crud.component.css */ "./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_coordinador_extraccion_service__WEBPACK_IMPORTED_MODULE_5__["CoordinadorExtraccionService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _registro_extracciones_shared_registro_extraccion_service__WEBPACK_IMPORTED_MODULE_15__["RegistroExtraccionService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_17__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCornealService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_coordinador_extraccion_service__WEBPACK_IMPORTED_MODULE_5__["CoordinadorExtraccionService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _registro_extracciones_shared_registro_extraccion_service__WEBPACK_IMPORTED_MODULE_15__["RegistroExtraccionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_17__["CausaMuerteService"]])
    ], CoordinadorExtraccionCrudComponent);
    return CoordinadorExtraccionCrudComponent;
}());



/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.css":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para coordinadorExtraccion-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionCoordinadorExtraccion.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_coordinadorExtraccion_{{nombregrid}}\">\n                <div id=\"grid_coordinadorExtraccion_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: CoordinadorExtraccionListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinadorExtraccionListKendoComponent", function() { return CoordinadorExtraccionListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/coordinador-extraccion */ "./src/app/coordinador-extracciones/shared/coordinador-extraccion.ts");
/* harmony import */ var _shared_configurar_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-coordinador-extraccion */ "./src/app/coordinador-extracciones/shared/configurar-coordinador-extraccion.ts");
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
var CoordinadorExtraccionListKendoComponent = /** @class */ (function () {
    function CoordinadorExtraccionListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.coordinadorExtraccionSeleccionado = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_3__["CoordinadorExtraccion"]();
        this.configuracionCoordinadorExtraccion = new _shared_configurar_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarCoordinadorExtraccion"]();
        this.nombregrid = "";
        this.evtCoordinadorExtraccionSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "coordinadorExtraccion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'coordinadorExtraccion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'coordinadorExtraccion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    CoordinadorExtraccionListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionCoordinadorExtraccion.titulo.indexOf("Catálogo") != -1) {
            this.configuracionCoordinadorExtraccion.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    CoordinadorExtraccionListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionCoordinadorExtraccion && changes.configuracionCoordinadorExtraccion.currentValue &&
            (changes.configuracionCoordinadorExtraccion.previousValue instanceof _shared_configurar_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarCoordinadorExtraccion"])) {
            if (changes.configuracionCoordinadorExtraccion.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionCoordinadorExtraccion.currentValue.permisosAtributos;
            if (changes.configuracionCoordinadorExtraccion.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionCoordinadorExtraccion.currentValue.permisosTabla;
            if ($("#grid_coordinadorExtraccion_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    CoordinadorExtraccionListKendoComponent.prototype.ngOnInit = function () {
        self["grid_coordinadorExtraccion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionCoordinadorExtraccion.permisosAtributos &&
            this.configuracionCoordinadorExtraccion.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "coordinadorExtraccion",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CoordinadorExtraccion'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CoordinadorExtraccion'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CoordinadorExtraccion'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionCoordinadorExtraccion.permisosAtributos)
            this.permisosAtributos = this.configuracionCoordinadorExtraccion.permisosAtributos;
        if (this.configuracionCoordinadorExtraccion.permisosTabla)
            this.permisosTabla = this.configuracionCoordinadorExtraccion.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoordinadorExtraccionListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.coordinadorExtraccion && permisos.coordinadorExtraccion.PermisoAtributo && permisos.coordinadorExtraccion.PermisoAtributo.length > 0
            && !obj.configuracionCoordinadorExtraccion.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.coordinadorExtraccion.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.CoordinadorExtraccion.PermisoAtributo ;
        }
        if (permisos && permisos.coordinadorExtraccion && permisos.coordinadorExtraccion.PermisoTabla && permisos.coordinadorExtraccion.PermisoTabla.length > 0
            && !obj.configuracionCoordinadorExtraccion.permisosTabla) {
            obj.globalesService.evtTablas(permisos.coordinadorExtraccion.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.CoordinadorExtraccion.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CoordinadorExtraccionListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_coordinadorExtraccion_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    CoordinadorExtraccionListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionCoordinadorExtraccion.campoAgEl != null
            && this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta
            && this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta.isOk
            && !this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta.isOk())
            return;
        if (this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta) {
            if (!this.configuracionCoordinadorExtraccion.campoAgEl && this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta instanceof _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_3__["CoordinadorExtraccion"])
                this.configuracionCoordinadorExtraccion.rutaLista = this.crudServiceBaseUrl + "/getCoordinadorExtraccionesByDto";
            this.lista = this.configuracionCoordinadorExtraccion.lecturaP(completar, this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta);
            if (this.configuracionCoordinadorExtraccion.campoAgEl) {
                this.rutaAgregar = this.configuracionCoordinadorExtraccion.agregarP(function () { }, this.configuracionCoordinadorExtraccion.campoAgEl);
                this.rutaEliminar = this.configuracionCoordinadorExtraccion.eliminarP(function () { }, this.configuracionCoordinadorExtraccion.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionCoordinadorExtraccion.agregarP(completar, this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta);
                this.rutaEliminar = this.configuracionCoordinadorExtraccion.eliminarP(completar, this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta);
            }
        }
        else {
            this.lista = this.configuracionCoordinadorExtraccion.lectura();
            this.rutaAgregar = this.configuracionCoordinadorExtraccion.agregar();
            this.rutaEliminar = this.configuracionCoordinadorExtraccion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "idregistroExtraccion")) {
            campos["idregistroExtraccion"] = { editable: this.globalesService.aenable(this, "coordinadorExtraccion", "idregistroExtraccion"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this, "coordinadorExtraccion", "nombre"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this, "coordinadorExtraccion", "primerApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this, "coordinadorExtraccion", "segundoApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "coordinadorExtraccion", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "coordinadorExtraccion", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "coordinadorExtraccion", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "coordinadorExtraccion", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "coordinadorExtraccion", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionCoordinadorExtraccion.rutaActualizar,
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
            if (self.configuracionCoordinadorExtraccion.campoAgEl) {
                if (self.configuracionCoordinadorExtraccion.tipocampoAgEl == "CoordinadorExtraccionCoordinadorExtraccion")
                    self.configuracionCoordinadorExtraccion.campoAgEl.coordinadorExtraccion2 = options.models[0];
                else
                    self.configuracionCoordinadorExtraccion.campoAgEl.coordinadorExtraccion = options.models[0];
                return JSON.stringify(self.configuracionCoordinadorExtraccion.campoAgEl);
            }
            else if (est.options[operation].data.models.coordinadorExtraccion) {
                est.options[operation].data.models.coordinadorExtraccion2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    CoordinadorExtraccionListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "idregistroExtraccion")) {
            columnas.push({ field: "idregistroExtraccion", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "idregistroExtraccion"), editor: idregistroExtraccionDropDownEditor, template: " #if (idregistroExtraccion){#   #=idregistroExtraccion.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "nombre"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "primerApellido"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "segundoApellido"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "coordinadorExtraccion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "coordinadorExtraccion", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "coordinadorExtraccion"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "coordinadorExtraccion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "coordinadorExtraccion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "coordinadorExtraccion") && this.configuracionCoordinadorExtraccion.coordinadorExtraccionConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_coordinadorExtraccion_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_coordinadorExtraccion_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionCoordinadorExtraccion.altoComponente,
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
        this.grid = $("#grid_coordinadorExtraccion_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidregistroExtraccion = this.urlprovider.serverURL + "registroExtraccion/getRegistroExtraccionesActivos";
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
        function idregistroExtraccionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "tipoDonanteMultiorganico",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidregistroExtraccion,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    CoordinadorExtraccionListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_coordinadorExtraccion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.coordinadorExtraccionSeleccionado = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_3__["CoordinadorExtraccion"]();
        gridac.coordinadorExtraccionSeleccionado.from(dataItem);
        gridac.evtCoordinadorExtraccionSeleccionado.emit(gridac.coordinadorExtraccionSeleccionado);
        (gridac.coordinadorExtraccionSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarCoordinadorExtraccion"])
    ], CoordinadorExtraccionListKendoComponent.prototype, "configuracionCoordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CoordinadorExtraccionListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("coordinadorExtraccionSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CoordinadorExtraccionListKendoComponent.prototype, "evtCoordinadorExtraccionSeleccionado", void 0);
    CoordinadorExtraccionListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coordinador-extraccion-list-kendo',
            template: __webpack_require__(/*! ./coordinador-extraccion-list-kendo.component.html */ "./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./coordinador-extraccion-list-kendo.component.css */ "./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], CoordinadorExtraccionListKendoComponent);
    return CoordinadorExtraccionListKendoComponent;
}());



/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CoordinadorExtraccionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinadorExtraccionRoutingModule", function() { return CoordinadorExtraccionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coordinador_extracciones_coordinador_extraccion_list_kendo_coordinador_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component */ "./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.ts");
/* harmony import */ var _coordinador_extracciones_coordinador_extraccion_crud_coordinador_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component */ "./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.ts");
/* harmony import */ var _coordinador_extracciones_coordinador_extraccion_table_coordinador_extraccion_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component */ "./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'coordinador-extraccion-list-kendo', component: _coordinador_extracciones_coordinador_extraccion_list_kendo_coordinador_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["CoordinadorExtraccionListKendoComponent"] },
    { path: 'coordinador-extraccion-crud', component: _coordinador_extracciones_coordinador_extraccion_crud_coordinador_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_3__["CoordinadorExtraccionCrudComponent"] },
    { path: 'coordinador-extraccion-table', component: _coordinador_extracciones_coordinador_extraccion_table_coordinador_extraccion_table_component__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccionTableComponent"] },
];
var CoordinadorExtraccionRoutingModule = /** @class */ (function () {
    function CoordinadorExtraccionRoutingModule() {
    }
    CoordinadorExtraccionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoordinadorExtraccionRoutingModule);
    return CoordinadorExtraccionRoutingModule;
}());



/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_coordinadorExtraccion\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','id')\" >{{aetiqueta('coordinadorExtraccion','id')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','idregistroExtraccion')\" >{{aetiqueta('coordinadorExtraccion','idregistroExtraccion')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','nombre')\" >{{aetiqueta('coordinadorExtraccion','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','primerApellido')\" >{{aetiqueta('coordinadorExtraccion','primerApellido')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','segundoApellido')\" >{{aetiqueta('coordinadorExtraccion','segundoApellido')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','fechaRegistro')\" >{{aetiqueta('coordinadorExtraccion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','fechaActualizacion')\" >{{aetiqueta('coordinadorExtraccion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','fechaBaja')\" >{{aetiqueta('coordinadorExtraccion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','usuarioUltMov')\" >{{aetiqueta('coordinadorExtraccion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','status')\" >{{aetiqueta('coordinadorExtraccion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','id')\" >{{aetiqueta('coordinadorExtraccion','id')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','idregistroExtraccion')\" >{{aetiqueta('coordinadorExtraccion','idregistroExtraccion')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','nombre')\" >{{aetiqueta('coordinadorExtraccion','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','primerApellido')\" >{{aetiqueta('coordinadorExtraccion','primerApellido')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','segundoApellido')\" >{{aetiqueta('coordinadorExtraccion','segundoApellido')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','fechaRegistro')\" >{{aetiqueta('coordinadorExtraccion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','fechaActualizacion')\" >{{aetiqueta('coordinadorExtraccion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','fechaBaja')\" >{{aetiqueta('coordinadorExtraccion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','usuarioUltMov')\" >{{aetiqueta('coordinadorExtraccion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('coordinadorExtraccion','status')\" >{{aetiqueta('coordinadorExtraccion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-coordinador-extraccion [class.hidden]=\"primero\" [(coordinadorExtraccion)]=\"coordinadorExtraccionSeleccionado\" (coordinadorExtraccionTablaChange)=\"cambio_coordinadorExtraccion($event)\"> </app-coordinador-extraccion>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CoordinadorExtraccionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinadorExtraccionTableComponent", function() { return CoordinadorExtraccionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/coordinador-extraccion */ "./src/app/coordinador-extracciones/shared/coordinador-extraccion.ts");
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






var CoordinadorExtraccionTableComponent = /** @class */ (function () {
    function CoordinadorExtraccionTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "coordinadorExtraccion", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.coordinadorExtraccionSeleccionado = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__["CoordinadorExtraccion"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'coordinadorExtraccion'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    CoordinadorExtraccionTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'coordinadorExtraccion'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    CoordinadorExtraccionTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(CoordinadorExtraccionTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    CoordinadorExtraccionTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("coordinadorExtraccion", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("coordinadorExtraccion", "idregistroExtraccion"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idregistroExtraccion)
                    return "<span style=\"cursor: pointer\">" + oObj.idregistroExtraccion.tipoDonanteMultiorganico + "</span>";
                return "";
            }
        });
        if (!this.avisible("coordinadorExtraccion", "nombre"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "nombre" });
        if (!this.avisible("coordinadorExtraccion", "primerApellido"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "primerApellido" });
        if (!this.avisible("coordinadorExtraccion", "segundoApellido"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "segundoApellido" });
        if (!this.avisible("coordinadorExtraccion", "fechaRegistro"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("coordinadorExtraccion", "fechaActualizacion"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("coordinadorExtraccion", "fechaBaja"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("coordinadorExtraccion", "usuarioUltMov"))
            columnasNoVisibles.push(8);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("coordinadorExtraccion", "status"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("coordinadorExtraccion"))
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
        var tabla = $('#tabla_coordinadorExtraccion').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_coordinadorExtraccion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.coordinadorExtraccionSeleccionado = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__["CoordinadorExtraccion"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "coordinadorExtraccion/getCoordinadorExtracciones",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_coordinadorExtraccion tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_coordinadorExtraccion').DataTable().row(this).data();
                self.coordinadorExtraccionSeleccionado = new _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__["CoordinadorExtraccion"]();
                self.coordinadorExtraccionSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_coordinadorExtraccion').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    CoordinadorExtraccionTableComponent.prototype.ngOnInit = function () {
    };
    CoordinadorExtraccionTableComponent.prototype.cambio_coordinadorExtraccion = function (coordinadorExtraccion) {
        $('#tabla_coordinadorExtraccion').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    CoordinadorExtraccionTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    CoordinadorExtraccionTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    CoordinadorExtraccionTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    CoordinadorExtraccionTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    CoordinadorExtraccionTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    CoordinadorExtraccionTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    CoordinadorExtraccionTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    CoordinadorExtraccionTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    CoordinadorExtraccionTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    CoordinadorExtraccionTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    CoordinadorExtraccionTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    CoordinadorExtraccionTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    CoordinadorExtraccionTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    CoordinadorExtraccionTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    CoordinadorExtraccionTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    CoordinadorExtraccionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coordinador-extraccion-table',
            template: __webpack_require__(/*! ./coordinador-extraccion-table.component.html */ "./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.html"),
            styles: [__webpack_require__(/*! ./coordinador-extraccion-table.component.css */ "./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], CoordinadorExtraccionTableComponent);
    return CoordinadorExtraccionTableComponent;
}());



/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion.module.ts ***!
  \***************************************************************************/
/*! exports provided: CoordinadorExtraccionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinadorExtraccionModule", function() { return CoordinadorExtraccionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _coordinador_extraccion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coordinador-extraccion-routing.module */ "./src/app/coordinador-extracciones/coordinador-extraccion-routing.module.ts");
/* harmony import */ var _coordinador_extraccion_list_kendo_coordinador_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component */ "./src/app/coordinador-extracciones/coordinador-extraccion-list-kendo/coordinador-extraccion-list-kendo.component.ts");
/* harmony import */ var _coordinador_extraccion_crud_coordinador_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coordinador-extraccion-crud/coordinador-extraccion-crud.component */ "./src/app/coordinador-extracciones/coordinador-extraccion-crud/coordinador-extraccion-crud.component.ts");
/* harmony import */ var _coordinador_extraccion_conjunto_coordinador_extraccion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component */ "./src/app/coordinador-extracciones/coordinador-extraccion-conjunto/coordinador-extraccion-conjunto.component.ts");
/* harmony import */ var _coordinador_extraccion_coordinador_extraccion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coordinador-extraccion/coordinador-extraccion.component */ "./src/app/coordinador-extracciones/coordinador-extraccion/coordinador-extraccion.component.ts");
/* harmony import */ var _coordinador_extraccion_table_coordinador_extraccion_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coordinador-extraccion-table/coordinador-extraccion-table.component */ "./src/app/coordinador-extracciones/coordinador-extraccion-table/coordinador-extraccion-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
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










//import { RegistroExtraccionModule }   from '../registro-extracciones/registro-extraccion.module';


var CoordinadorExtraccionModule = /** @class */ (function () {
    function CoordinadorExtraccionModule(parentModule) {
        if (parentModule) {
            throw new Error('CoordinadorExtraccionModule is already loaded. Import it in the AppModule only');
        }
    }
    CoordinadorExtraccionModule_1 = CoordinadorExtraccionModule;
    CoordinadorExtraccionModule.forRoot = function () {
        return {
            ngModule: CoordinadorExtraccionModule_1,
            providers: []
        };
    };
    var CoordinadorExtraccionModule_1;
    CoordinadorExtraccionModule = CoordinadorExtraccionModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _coordinador_extraccion_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoordinadorExtraccionRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
                //, RegistroExtraccionModule
                ,
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"]
            ],
            declarations: [
                _coordinador_extraccion_list_kendo_coordinador_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccionListKendoComponent"],
                _coordinador_extraccion_coordinador_extraccion_component__WEBPACK_IMPORTED_MODULE_7__["CoordinadorExtraccionComponent"],
                _coordinador_extraccion_crud_coordinador_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_5__["CoordinadorExtraccionCrudComponent"],
                _coordinador_extraccion_conjunto_coordinador_extraccion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["CoordinadorExtraccionConjuntoComponent"],
                _coordinador_extraccion_table_coordinador_extraccion_table_component__WEBPACK_IMPORTED_MODULE_8__["CoordinadorExtraccionTableComponent"],
            ],
            exports: [
                _coordinador_extraccion_list_kendo_coordinador_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["CoordinadorExtraccionListKendoComponent"],
                _coordinador_extraccion_coordinador_extraccion_component__WEBPACK_IMPORTED_MODULE_7__["CoordinadorExtraccionComponent"],
                _coordinador_extraccion_crud_coordinador_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_5__["CoordinadorExtraccionCrudComponent"],
                _coordinador_extraccion_conjunto_coordinador_extraccion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["CoordinadorExtraccionConjuntoComponent"],
                _coordinador_extraccion_table_coordinador_extraccion_table_component__WEBPACK_IMPORTED_MODULE_8__["CoordinadorExtraccionTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoordinadorExtraccionModule])
    ], CoordinadorExtraccionModule);
    return CoordinadorExtraccionModule;
}());



/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion/coordinador-extraccion.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion/coordinador-extraccion.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion/coordinador-extraccion.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion/coordinador-extraccion.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4>{{ etiquetaGeneral }}</h4>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <!-- <app-componente-identificador [componente]=\"'coordinadorExtraccion'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"coordinadorExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCoordinadorExtraccion['id']\"\n                                                   [(dato)]=\"coordinadorExtraccion.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'coordinadorExtraccion'\"\n                                               [atributo]=\"'idregistroExtraccion'\"\n                                               [buscar]=\"coordinadorExtraccionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosCoordinadorExtraccion['idregistroExtraccion']\"\n                                               [(dato)]=\"coordinadorExtraccion.idregistroExtraccion\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosCoordinadorExtraccion\"\n                                               [opciones]=\"lista_idregistroExtraccionCoordinadorExtraccion\"\n                                               [atributoVisible]=\"'tipoDonanteMultiorganico'\" [(objetoEdicion)]=\"idregistroExtraccionCoordinadorExtraccionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idregistroExtraccionEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'coordinadorExtraccion','idregistroExtraccion')\" >\n                                   <app-registro-extraccion-crud [nombre]=\"'idregistroExtraccion'\" [registroExtraccion]=\"coordinadorExtraccion.idregistroExtraccion\" (registroExtraccionChange)=\"evtIdregistroExtraccion($event)\"\n                                                           [ocultarConjuntosRegistroExtraccion]=\"'true'\" [class.hidden]=\"!idregistroExtraccionEditar\" ></app-registro-extraccion-crud>\n                            </div>\n                        </div>\n                    </div> -->\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <app-componente-cadena\n                [componente]=\"'coordinadorExtraccion'\"\n                [atributo]=\"'nombre'\"\n                [buscar]=\"coordinadorExtraccionBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosCoordinadorExtraccion['nombre']\"\n                [(dato)]=\"coordinadorExtraccion.nombre\"\n                class=\"w-100\"\n                [maxlength]=\"255\"\n              >\n              </app-componente-cadena>\n            </div>\n            <div class=\"col-md-4\">\n              <app-componente-cadena\n                [componente]=\"'coordinadorExtraccion'\"\n                [atributo]=\"'primerApellido'\"\n                [buscar]=\"coordinadorExtraccionBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosCoordinadorExtraccion['primerApellido']\"\n                [(dato)]=\"coordinadorExtraccion.primerApellido\"\n                class=\"w-100\"\n                [maxlength]=\"255\"\n              >\n              </app-componente-cadena>\n            </div>\n            <div class=\"col-md-4\">\n              <app-componente-cadena\n                [componente]=\"'coordinadorExtraccion'\"\n                [atributo]=\"'segundoApellido'\"\n                [buscar]=\"coordinadorExtraccionBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosCoordinadorExtraccion['segundoApellido']\"\n                [(dato)]=\"coordinadorExtraccion.segundoApellido\"\n                class=\"w-100\"\n                [maxlength]=\"255\"\n              >\n              </app-componente-cadena>\n            </div>\n          </div>\n          <!-- <app-componente-fecha [componente]=\"'coordinadorExtraccion'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"coordinadorExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCoordinadorExtraccion['fechaRegistro']\"\n                                                   [(dato)]=\"coordinadorExtraccion.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'coordinadorExtraccion'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"coordinadorExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCoordinadorExtraccion['fechaActualizacion']\"\n                                                   [(dato)]=\"coordinadorExtraccion.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'coordinadorExtraccion'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"coordinadorExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCoordinadorExtraccion['fechaBaja']\"\n                                                   [(dato)]=\"coordinadorExtraccion.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha > -->\n          <!-- <div>\n                        <app-componente-objeto [componente]=\"'coordinadorExtraccion'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"coordinadorExtraccionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosCoordinadorExtraccion['usuarioUltMov']\"\n                                               [(dato)]=\"coordinadorExtraccion.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosCoordinadorExtraccion\"\n                                               [opciones]=\"lista_usuarioUltMovCoordinadorExtraccion\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovCoordinadorExtraccionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'coordinadorExtraccion','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"coordinadorExtraccion.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-radio [componente]=\"'coordinadorExtraccion'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"coordinadorExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCoordinadorExtraccion['status']\"\n                                                   [(dato)]=\"coordinadorExtraccion.status\"   class=\"w-100\" >\n                    </app-componente-radio > -->\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/coordinador-extracciones/coordinador-extraccion/coordinador-extraccion.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/coordinador-extraccion/coordinador-extraccion.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CoordinadorExtraccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinadorExtraccionComponent", function() { return CoordinadorExtraccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/coordinador-extraccion */ "./src/app/coordinador-extracciones/shared/coordinador-extraccion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoordinadorExtraccionComponent = /** @class */ (function () {
    function CoordinadorExtraccionComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.coordinadorExtraccionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovCoordinadorExtraccionUsuarioEditar = false;
        this.idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEditar = false;
    }
    CoordinadorExtraccionComponent.prototype.actualizarCoordinadorExtraccion = function () {
        if (this.coordinadorExtraccion.id == null) {
            this.coordinadorExtraccionService.guardarCoordinadorExtraccion(this.coordinadorExtraccion, this.evtGuardar, this);
        }
        else {
            this.coordinadorExtraccionService.actualizarCoordinadorExtraccion(this.coordinadorExtraccion, this.evtActualiza, this);
        }
    };
    CoordinadorExtraccionComponent.prototype.evtGuardar = function (coordinadorExtraccion, obj) {
        obj.coordinadorExtraccion = coordinadorExtraccion;
        obj.coordinadorExtraccionChange.emit(obj.coordinadorExtraccion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    CoordinadorExtraccionComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.coordinadorExtraccionChange.emit(obj.coordinadorExtraccion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    CoordinadorExtraccionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarCoordinadorExtraccion();
            }
        }
    };
    CoordinadorExtraccionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "coordinadorExtraccionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "validosCoordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_1__["CoordinadorExtraccion"])
    ], CoordinadorExtraccionComponent.prototype, "coordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "coordinadorExtraccionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CoordinadorExtraccionComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "coordinadorExtraccionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "lista_usuarioUltMovCoordinadorExtraccionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CoordinadorExtraccionComponent.prototype, "lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion", void 0);
    CoordinadorExtraccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coordinador-extraccion',
            template: __webpack_require__(/*! ./coordinador-extraccion.component.html */ "./src/app/coordinador-extracciones/coordinador-extraccion/coordinador-extraccion.component.html"),
            styles: [__webpack_require__(/*! ./coordinador-extraccion.component.css */ "./src/app/coordinador-extracciones/coordinador-extraccion/coordinador-extraccion.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CoordinadorExtraccionComponent);
    return CoordinadorExtraccionComponent;
}());



/***/ }),

/***/ "./src/app/coordinador-extracciones/shared/configurar-coordinador-extraccion.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/shared/configurar-coordinador-extraccion.ts ***!
  \**************************************************************************************/
/*! exports provided: ConfigurarCoordinadorExtraccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarCoordinadorExtraccion", function() { return ConfigurarCoordinadorExtraccion; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarCoordinadorExtraccion = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarCoordinadorExtraccion() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "coordinadorExtraccion";
        this.rutaLista = this.crudServiceBaseUrl + "/getCoordinadorExtracciones";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarCoordinadorExtraccion";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarCoordinadorExtraccion";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarCoordinadorExtraccion";
        this.titulo = "Catálogo CoordinadorExtraccion";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.coordinadorExtraccionConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarCoordinadorExtraccion.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarCoordinadorExtraccion.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarCoordinadorExtraccion.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarCoordinadorExtraccion.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarCoordinadorExtraccion.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarCoordinadorExtraccion.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarCoordinadorExtraccion;
}());



/***/ }),

/***/ "./src/app/coordinador-extracciones/shared/coordinador-extraccion.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/shared/coordinador-extraccion.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CoordinadorExtraccionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinadorExtraccionService", function() { return CoordinadorExtraccionService; });
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


var CoordinadorExtraccionService = /** @class */ (function () {
    function CoordinadorExtraccionService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    CoordinadorExtraccionService.prototype.setCoordinadorExtraccion = function (coordinadorExtraccion) {
        this.coordinadorExtraccion = coordinadorExtraccion;
    };
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccion = function () {
        return this.coordinadorExtraccion;
    };
    CoordinadorExtraccionService.prototype.guardarCoordinadorExtraccion = function (coordinadorExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(coordinadorExtraccion, 'coordinadorExtraccion/guardarCoordinadorExtraccion')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.actualizarCoordinadorExtraccion = function (coordinadorExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(coordinadorExtraccion, 'coordinadorExtraccion/actualizarCoordinadorExtraccion')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.eliminarCoordinadorExtraccion = function (coordinadorExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(coordinadorExtraccion, 'coordinadorExtraccion/eliminarCoordinadorExtraccion')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtracciondb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'coordinadorExtraccion/getCoordinadorExtraccion')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtracciones = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'coordinadorExtraccion/getCoordinadorExtracciones')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'coordinadorExtraccion/getCoordinadorExtraccionesActivos')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.lazyCoordinadorExtraccion = function (coordinadorExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(coordinadorExtraccion, 'coordinadorExtraccion/lazyCoordinadorExtraccion')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'coordinadorExtraccion/getCoordinadorExtraccionById')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'coordinadorExtraccion/getCoordinadorExtraccionesById')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'coordinadorExtraccion/getCoordinadorExtraccionByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'coordinadorExtraccion/getCoordinadorExtraccionesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'coordinadorExtraccion/getCoordinadorExtraccionByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'coordinadorExtraccion/getCoordinadorExtraccionesByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'coordinadorExtraccion/getCoordinadorExtraccionByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'coordinadorExtraccion/getCoordinadorExtraccionesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'coordinadorExtraccion/getCoordinadorExtraccionBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'coordinadorExtraccion/getCoordinadorExtraccionesBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'coordinadorExtraccion/getCoordinadorExtraccionByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'coordinadorExtraccion/getCoordinadorExtraccionesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'coordinadorExtraccion/getCoordinadorExtraccionByNombre')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'coordinadorExtraccion/getCoordinadorExtraccionesByNombre')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'coordinadorExtraccion/getCoordinadorExtraccionByStatus')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'coordinadorExtraccion/getCoordinadorExtraccionesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'coordinadorExtraccion/getCoordinadorExtraccionByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'coordinadorExtraccion/getCoordinadorExtraccionesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionByIdregistroExtraccion = function (idregistroExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'coordinadorExtraccion/getCoordinadorExtraccionByIdregistroExtraccion')
            .subscribe(function (data) {
            _evento(_this.coordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.coordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesByIdregistroExtraccion = function (idregistroExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'coordinadorExtraccion/getCoordinadorExtraccionesByIdregistroExtraccion')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'coordinadorExtraccion/custom')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService.prototype.getCoordinadorExtraccionesByDto = function (p_coordinadorExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_coordinadorExtraccion, 'coordinadorExtraccion/getCoordinadorExtraccionesByDto')
            .subscribe(function (data) {
            _evento(_this.listaCoordinadorExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCoordinadorExtraccion);
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
    CoordinadorExtraccionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], CoordinadorExtraccionService);
    return CoordinadorExtraccionService;
}());



/***/ }),

/***/ "./src/app/coordinador-extracciones/shared/coordinador-extraccion.ts":
/*!***************************************************************************!*\
  !*** ./src/app/coordinador-extracciones/shared/coordinador-extraccion.ts ***!
  \***************************************************************************/
/*! exports provided: CoordinadorExtraccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinadorExtraccion", function() { return CoordinadorExtraccion; });
/**
 *
 * @author IstmoSoft
 */
var CoordinadorExtraccion = /** @class */ (function () {
    // atributos fin
    function CoordinadorExtraccion(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.primerApellido = null;
        this.fechaRegistro = null;
        this.segundoApellido = null;
        this.fechaActualizacion = null;
        this.nombre = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idregistroExtraccion = null;
        if (source !== null)
            this.from(source);
    }
    CoordinadorExtraccion.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.primerApellido)
            this.primerApellido = source.primerApellido;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.segundoApellido)
            this.segundoApellido = source.segundoApellido;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.nombre)
            this.nombre = source.nombre;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idregistroExtraccion)
            this.idregistroExtraccion = source.idregistroExtraccion;
    };
    CoordinadorExtraccion.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.primerApellido)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.segundoApellido)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.nombre)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idregistroExtraccion)
            return true;
        return false;
    };
    CoordinadorExtraccion.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.primerApellido != null && typeof this.primerApellido === 'string' && this.primerApellido.replace(/^\s+|\s+$/g, '') == "")
            this.primerApellido = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.segundoApellido != null && typeof this.segundoApellido === 'string' && this.segundoApellido.replace(/^\s+|\s+$/g, '') == "")
            this.segundoApellido = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.nombre != null && typeof this.nombre === 'string' && this.nombre.replace(/^\s+|\s+$/g, '') == "")
            this.nombre = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idregistroExtraccion != null && typeof this.idregistroExtraccion === 'string' && this.idregistroExtraccion.replace(/^\s+|\s+$/g, '') == "")
            this.idregistroExtraccion = null;
        return this;
    };
    return CoordinadorExtraccion;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-coordinador-extracciones-coordinador-extraccion-module~app-registro-extracciones-registr~b72cb7c5.js.map