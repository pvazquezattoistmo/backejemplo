(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-equipo-extracciones-equipo-extraccion-module~app-registro-extracciones-registro-extracci~edaef8cf"],{

/***/ "./src/app/equipo-extracciones/equipo-extraccion-conjunto/equipo-extraccion-conjunto.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-conjunto/equipo-extraccion-conjunto.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-conjunto/equipo-extraccion-conjunto.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-conjunto/equipo-extraccion-conjunto.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let equipoExtraccion of listaEquipoExtraccion \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+equipoExtraccion.id}\"\n        (click)=\"elegir(equipoExtraccion,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{equipoExtraccion.id}}\">{{equipoExtraccion.id}}</a>\n    </li>\n    <li *ngFor =  \"let equipoExtraccion of listaEquipoExtraccionN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+equipoExtraccion.id}\"\n        (click)=\"elegir(equipoExtraccion, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{equipoExtraccion.id}}\">T-{{equipoExtraccion.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let equipoExtraccion of listaEquipoExtraccion ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+equipoExtraccion.id}\" id=\"tab-I-{{equipoExtraccion.id}}\">\n\t\t\t<app-equipo-extraccion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [equipoExtraccionBuscar]=\"equipoExtraccionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosEquipoExtraccion]=\"validosEquipoExtraccion\"  \n\t\t\t\t\t\t  [equipoExtraccionService]=\"equipoExtraccionService\" [(opcion)]=\"opcionEquipoExtraccion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(equipoExtraccion)]=\"listaEquipoExtraccion[i]\"  [ocultarConjuntos]=\"ocultarConjuntosEquipoExtraccion\"\n                           [lista_usuarioUltMovEquipoExtraccionUsuario]=\"lista_usuarioUltMovEquipoExtraccionUsuario\" \n                           [lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion]=\"lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-equipo-extraccion>\n        </div>\n        <div *ngFor = \"let equipoExtraccion of listaEquipoExtraccionN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+equipoExtraccion.id}\" id=\"tab-N-{{equipoExtraccion.id}}\">\n\t\t\t<app-equipo-extraccion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [equipoExtraccionBuscar]=\"equipoExtraccionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosEquipoExtraccion]=\"validosEquipoExtraccion\"  \n\t\t\t\t\t\t  [equipoExtraccionService]=\"equipoExtraccionService\" [(opcion)]=\"opcionEquipoExtraccion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(equipoExtraccion)]=\"listaEquipoExtraccionN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosEquipoExtraccion\"\n                           [lista_usuarioUltMovEquipoExtraccionUsuario]=\"lista_usuarioUltMovEquipoExtraccionUsuario\" \n                           [lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion]=\"lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-equipo-extraccion>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-conjunto/equipo-extraccion-conjunto.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-conjunto/equipo-extraccion-conjunto.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EquipoExtraccionConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoExtraccionConjuntoComponent", function() { return EquipoExtraccionConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/equipo-extraccion */ "./src/app/equipo-extracciones/shared/equipo-extraccion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipoExtraccionConjuntoComponent = /** @class */ (function () {
    function EquipoExtraccionConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovEquipoExtraccionUsuarioEditar = false;
        this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEditar = false;
        this.listaEquipoExtraccionN = [];
        this.listaEquipoExtraccion = [];
        this.listaEquipoExtraccionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.equipoExtraccionN = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__["EquipoExtraccion"]();
        this.equipoExtraccionNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    EquipoExtraccionConjuntoComponent.prototype.elegir = function (equipoExtraccion, tipo) {
        this.idSeleccionado = tipo + "-" + equipoExtraccion.id;
        this.equipoExtraccionN = equipoExtraccion;
    };
    EquipoExtraccionConjuntoComponent.prototype.ngOnInit = function () {
        this.equipoExtraccionN.id = 0;
        this.listaEquipoExtraccionN.push(Object.assign({}, this.equipoExtraccionN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    EquipoExtraccionConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__["EquipoExtraccion"]();
        pg.id = this.listaEquipoExtraccionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaEquipoExtraccionN.push(pg);
    };
    EquipoExtraccionConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaEquipoExtraccion; _i < _a.length; _i++) {
            var equipoExtraccion = _a[_i];
            this.equipoExtraccionService.actualizarEquipoExtraccion(equipoExtraccion, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaEquipoExtraccionN; _b < _c.length; _b++) {
            var equipoExtraccion = _c[_b];
            equipoExtraccion.id = null;
            this.equipoExtraccionService.guardarEquipoExtraccion(equipoExtraccion, this.evtGuardar, this);
        }
    };
    EquipoExtraccionConjuntoComponent.prototype.evtGuardar = function (equipoExtraccion, obj) {
        obj.agregados++;
        obj.listaEquipoExtraccion.push(equipoExtraccion);
        if (obj.agregados >= obj.listaEquipoExtraccionN.length) {
            obj.equipoExtraccionN = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__["EquipoExtraccion"]();
            obj.listaEquipoExtraccionN = [];
            obj.equipoExtraccionN.id = 0;
            obj.idSeleccionado = "N-" + obj.equipoExtraccionN.id;
            obj.listaEquipoExtraccionN.push(Object.assign({}, obj.equipoExtraccionN));
            obj.listaEquipoExtraccionChange.emit(obj.listaEquipoExtraccion);
        }
        if (obj.agregados >= obj.listaEquipoExtraccionN.length &&
            obj.actualizados >= obj.listaEquipoExtraccion.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    EquipoExtraccionConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaEquipoExtraccionN.length &&
                obj.actualizados >= obj.listaEquipoExtraccion.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    EquipoExtraccionConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], EquipoExtraccionConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "equipoExtraccionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "validosEquipoExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "ocultarConjuntosEquipoExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "equipoExtraccionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EquipoExtraccionConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "lista_usuarioUltMovEquipoExtraccionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EquipoExtraccionConjuntoComponent.prototype, "listaEquipoExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "listaEquipoExtraccionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__["EquipoExtraccion"])
    ], EquipoExtraccionConjuntoComponent.prototype, "equipoExtraccionN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionConjuntoComponent.prototype, "equipoExtraccionNChange", void 0);
    EquipoExtraccionConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipo-extraccion-conjunto',
            template: __webpack_require__(/*! ./equipo-extraccion-conjunto.component.html */ "./src/app/equipo-extracciones/equipo-extraccion-conjunto/equipo-extraccion-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./equipo-extraccion-conjunto.component.css */ "./src/app/equipo-extracciones/equipo-extraccion-conjunto/equipo-extraccion-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], EquipoExtraccionConjuntoComponent);
    return EquipoExtraccionConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-equipo-extraccion [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"'EQUIPO EXTRACTOR (CÓRNEAS) *'\"\n                           [equipoExtraccionBuscar]=\"equipoExtraccionBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosEquipoExtraccion]=\"validosEquipoExtraccion\"\n                           [equipoExtraccionService]=\"equipoExtraccion_service\"\n                           [(opcion)]=\"opcionEquipoExtraccion\"\n                           [globalesService]=\"globalesService\"\n                           [(equipoExtraccion)]=\"equipoExtraccion\"\n                           [ocultarConjuntos]=\"ocultarConjuntosEquipoExtraccion\"\n                           [lista_usuarioUltMovEquipoExtraccionUsuario]=\"lista_usuarioUltMovEquipoExtraccionUsuario\"\n                           [lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion]=\"lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion\"\n\n\t\t\t\t\t  >\n\n        </app-equipo-extraccion>\n        <div class=\"row\">\n            <div class=\"col-md-2 col-md-offset-10\">\n              <button\n                style=\"margin-right: 10px;\"\n                type=\"button\"\n                class=\"btn btn-guardar\"\n                (click)=\"addEquipoExtractor()\"\n              >\n                <span\n                  class=\"glyphicon glyphicon-plus\"\n                  aria-hidden=\"true\"\n                ></span>\n              </button>\n            </div>\n          </div>\n        <br>\n        <kendo-grid [data]=\"listaEquipoExtractor\" [height]=\"200\" (remove)=\"removeEquipoExtractorHandler($event)\">\n            <kendo-grid-column field=\"nombre\" title=\"Nombre\" >\n            </kendo-grid-column>\n            <kendo-grid-column field=\"primerApellido\" title=\"Primer Apellido\">\n            </kendo-grid-column>\n            <kendo-grid-column field=\"segundoApellido\" title=\"Segundo Apellido\">\n            </kendo-grid-column>\n            <kendo-grid-command-column title=\"Borrar\" width=\"220\">\n                <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n                    <button kendoGridRemoveCommand>Borrar</button>\n                </ng-template>\n            </kendo-grid-command-column>\n            <ng-template kendoGridNoRecordsTemplate>\n                Sin registros.\n             </ng-template>\n        </kendo-grid>\n\n        <!-- <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!equipoExtraccionBuscar\" (click)=\"buscarEquipoExtraccionFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!equipoExtraccionAgregar\" (click)=\"nuevoEquipoExtraccionFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!equipoExtraccionActualizar\" (click)=\"actualizarEquipoExtraccionFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!equipoExtraccionEliminar\" (click)=\"eliminarEquipoExtraccionFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!equipoExtraccionGuardar\" (click)=\"guardarEquipoExtraccionFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!equipoExtraccionCancelar\" (click)=\"cancelarEquipoExtraccionFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteEquipoExtraccionWord\" (click)=\"reporteEquipoExtraccionWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteEquipoExtraccionExcel\" (click)=\"reporteEquipoExtraccionExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteEquipoExtraccionPdf\" (click)=\"reporteEquipoExtraccionPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div> -->\n    </div>\n    <div class=\"modal fade\" id=\"buscarEquipoExtraccion_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-equipo-extraccion-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionEquipoExtraccion]=\"configuracionEquipoExtraccion\"  (equipoExtraccionSeleccionado) =\"evtEquipoExtraccionSeleccionado($event)\">  </app-equipo-extraccion-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EquipoExtraccionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoExtraccionCrudComponent", function() { return EquipoExtraccionCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/equipo-extraccion */ "./src/app/equipo-extracciones/shared/equipo-extraccion.ts");
/* harmony import */ var _shared_equipo_extraccion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/equipo-extraccion.service */ "./src/app/equipo-extracciones/shared/equipo-extraccion.service.ts");
/* harmony import */ var _shared_configurar_equipo_extraccion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-equipo-extraccion */ "./src/app/equipo-extracciones/shared/configurar-equipo-extraccion.ts");
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







var EquipoExtraccionCrudComponent = /** @class */ (function () {
    function EquipoExtraccionCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    equipoExtraccion_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, registroExtraccion_service, solicitudEvaluacionCorneal_service, causaMuerte_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.equipoExtraccion_service = equipoExtraccion_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.registroExtraccion_service = registroExtraccion_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.opcionEquipoExtraccion = 0;
        this.validosEquipoExtraccion = {
            id: false,
            fechaBaja: false,
            primerApellido: false,
            fechaRegistro: false,
            segundoApellido: false,
            fechaActualizacion: false,
            nombre: false,
            status: false,
            usuarioUltMov: false,
            idregistroExtraccion: false,
        };
        this.ocultarConjuntosEquipoExtraccion = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "equipoExtraccion", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.equipoExtraccionLazy = false;
        this.equipoExtraccionPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.equipoExtraccion = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
        this.equipoExtraccionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.equipoExtraccionTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_equipoExtracciones = [];
        this.usuarioUltMovEquipoExtraccionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovEquipoExtraccionUsuario = [];
        this.usuarioUltMovEquipoExtraccionUsuarioEditar = false;
        this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion = new _registro_extracciones_shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_14__["RegistroExtraccion"]();
        this.lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion = [];
        this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.equipoExtraccionSeleccion = this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
        this.configuracionEquipoExtraccion = new _shared_configurar_equipo_extraccion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarEquipoExtraccion"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEquipoExtraccionUsuario, this);
        this.registroExtraccion_service.getRegistroExtraccionesActivos(this.evtGetIdregistroExtraccionEquipoExtraccionRegistroExtraccion, this);
        this.limpiarCampos();
    }
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "equipoExtraccionOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosEquipoExtraccion)
                return true;
            return !this.equipoExtraccionActualizar;
        },
        enumerable: true,
        configurable: true
    });
    EquipoExtraccionCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.equipoExtraccion && changes.equipoExtraccion.currentValue == null &&
            this.equipoExtraccion == null)
            this.equipoExtraccion = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
        else {
            var aux = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
            if (this.equipoExtraccion)
                aux.from(this.equipoExtraccion);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionSeleccion = this.equipoExtraccionGuardar = false;
                this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = this.equipoExtraccionCancelar = true;
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
                this.equipoExtraccionSeleccion = this.equipoExtraccionAgregar = this.equipoExtraccionBuscar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
                this.equipoExtraccionGuardar = this.equipoExtraccionCancelar = true;
            }
        }
    };
    EquipoExtraccionCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "equipoExtraccion",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "registroExtraccion",
            "solicitudEvaluacionCorneal",
            "causaMuerte",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.equipoExtraccionPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EquipoExtraccionCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.equipoExtraccionPermisos = true;
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoAtributo && permisos.equipoExtraccion.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.equipoExtraccion.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoConjunto && permisos.equipoExtraccion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.equipoExtraccion.PermisoConjunto;
        }
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoTabla && permisos.equipoExtraccion.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.equipoExtraccion.PermisoTabla[0];
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
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoAtributo && permisos.registroExtraccion.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.registroExtraccion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.registroExtraccion.PermisoAtributo);
        }
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoAtributo && permisos.registroExtraccion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.registroExtraccion.PermisoConjunto);
        }
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoTabla && permisos.registroExtraccion.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.registroExtraccion.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.registroExtraccion.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EquipoExtraccionCrudComponent.prototype.evtGetUsuarioUltMovEquipoExtraccionUsuario = function (lista_usuarioUltMovEquipoExtraccionUsuario, obj) {
        obj.lista_usuarioUltMovEquipoExtraccionUsuario = lista_usuarioUltMovEquipoExtraccionUsuario;
        obj.actualizar_UsuarioUltMovEquipoExtraccionUsuario();
    };
    EquipoExtraccionCrudComponent.prototype.evtGetIdregistroExtraccionEquipoExtraccionRegistroExtraccion = function (lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion, obj) {
        obj.lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion = lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion;
        obj.actualizar_IdregistroExtraccionEquipoExtraccionRegistroExtraccion();
    };
    EquipoExtraccionCrudComponent.prototype.actualizar_UsuarioUltMovEquipoExtraccionUsuario = function () {
        if (this.usuarioUltMovEquipoExtraccionUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovEquipoExtraccionUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovEquipoExtraccionUsuarioEleccion.id) {
                    this.usuarioUltMovEquipoExtraccionUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    EquipoExtraccionCrudComponent.prototype.actualizar_IdregistroExtraccionEquipoExtraccionRegistroExtraccion = function () {
        if (this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion)
            for (var _i = 0, _a = this.lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion.id) {
                    this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion = eleme;
                    break;
                }
            }
    };
    EquipoExtraccionCrudComponent.prototype.ngDoCheck = function () {
    };
    EquipoExtraccionCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosEquipoExtraccion['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosEquipoExtraccion['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosEquipoExtraccion['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaPrimerApellido", {
        get: function () {
            return this.validosEquipoExtraccion['primerApellido'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosEquipoExtraccion['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaSegundoApellido", {
        get: function () {
            return this.validosEquipoExtraccion['segundoApellido'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosEquipoExtraccion['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaNombre", {
        get: function () {
            return this.validosEquipoExtraccion['nombre'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosEquipoExtraccion['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosEquipoExtraccion['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaIdregistroExtraccion", {
        get: function () {
            return this.validosEquipoExtraccion['idregistroExtraccion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaFechaBaja && this.validaPrimerApellido && this.validaFechaRegistro && this.validaSegundoApellido && this.validaFechaActualizacion && this.validaNombre && this.validaStatus && this.validaUsuarioUltMov && this.validaIdregistroExtraccion;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    EquipoExtraccionCrudComponent.prototype.obtenerEquipoExtracciones = function (lista, objeto) {
        objeto.lista_equipoExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.equipoExtraccion.from(lista[0]);
            objeto.evtEquipoExtraccionSeleccionado(objeto.equipoExtraccion);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    EquipoExtraccionCrudComponent.prototype.evn_lazy_equipoExtraccion = function (equipoExtraccion, objeto) {
        objeto.equipoExtraccion = equipoExtraccion;
        objeto.equipoExtraccionChange.emit(objeto.equipoExtraccion);
        objeto.configuarCombosObjetos();
        objeto.equipoExtraccionLazy = true;
    };
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "datosReporteEquipoExtraccionWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.equipoExtraccionActualizar && this.equipoExtraccionLazy && this.globalesService.preporteWord(this, "equipoExtraccion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "datosReporteEquipoExtraccionExcel", {
        get: function () {
            return !(this.equipoExtraccionActualizar && this.equipoExtraccionLazy && this.globalesService.preporteExcel(this, "equipoExtraccion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EquipoExtraccionCrudComponent.prototype, "datosReporteEquipoExtraccionPdf", {
        get: function () {
            return !(this.equipoExtraccionActualizar && this.equipoExtraccionLazy && this.globalesService.preportePdf(this, "equipoExtraccion"));
        },
        enumerable: true,
        configurable: true
    });
    EquipoExtraccionCrudComponent.prototype.reporteEquipoExtraccionExcel = function (form) {
        var nombre = "EquipoExtraccion.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "equipoExtraccion": this.equipoExtraccion };
        parametros["plantilla"] = "EquipoExtraccion.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    EquipoExtraccionCrudComponent.prototype.reporteEquipoExtraccionWord = function (form) {
        var nombre = "EquipoExtraccion.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "equipoExtraccion": this.equipoExtraccion };
        parametros["plantilla"] = "EquipoExtraccion.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    EquipoExtraccionCrudComponent.prototype.reporteEquipoExtraccionPdf = function (form) {
        var nombre = "EquipoExtraccion.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "equipoExtraccion": this.equipoExtraccion };
        parametros["plantilla"] = "EquipoExtraccion.docx";
        parametros["salida"] = "EquipoExtraccion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    EquipoExtraccionCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionCancelar = true;
    };
    EquipoExtraccionCrudComponent.prototype.buscarEquipoExtraccionFront = function (form) {
        this.accionesBuscar();
        var vequipoExtraccion = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
        vequipoExtraccion.from(this.equipoExtraccion);
        this.configuracionEquipoExtraccion = new _shared_configurar_equipo_extraccion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarEquipoExtraccion"]();
        this.configuracionEquipoExtraccion.permisosTabla = { "tabla": "equipoExtraccion", "permiso": 8 };
        this.configuracionEquipoExtraccion.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionEquipoExtraccion.equipoExtraccionConsulta = vequipoExtraccion;
        this.permisosacciones();
        $("#buscarEquipoExtraccion_" + this.nombre).modal();
    };
    EquipoExtraccionCrudComponent.prototype.buscarEquipoExtraccionBack = function (equipoExtraccion) {
        this.equipoExtraccion_service.getEquipoExtraccionesByDto(equipoExtraccion, this.eventoSrvEquipoExtraccionBuscar, this);
    };
    EquipoExtraccionCrudComponent.prototype.eventoSrvEquipoExtraccionBuscar = function (lista, objeto) {
        objeto.lista_equipoExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.equipoExtraccion = lista[0];
            objeto.equipoExtraccionLazy = false;
            objeto.equipoExtraccion_service.lazyEquipoExtraccion(objeto.equipoExtraccion, objeto.evn_lazy_equipoExtraccion, objeto);
        }
    };
    EquipoExtraccionCrudComponent.prototype.guardarEquipoExtraccionFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarEquipoExtraccionBack(this.equipoExtraccion);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    EquipoExtraccionCrudComponent.prototype.guardarEquipoExtraccionBack = function (equipoExtraccion) {
        if (equipoExtraccion.usuarioUltMov == null)
            equipoExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        if (equipoExtraccion.status == null || equipoExtraccion.status == "")
            equipoExtraccion.status = 1;
        this.equipoExtraccion_service.guardarEquipoExtraccion(equipoExtraccion, this.eventoSrvEquipoExtraccionGuardar, this);
    };
    EquipoExtraccionCrudComponent.prototype.eventoSrvEquipoExtraccionGuardar = function (equipoExtraccion, obj) {
        obj.equipoExtraccion = equipoExtraccion;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
        aux.from(equipoExtraccion);
        obj.equipoExtraccionChange.emit(aux);
        obj.equipoExtraccionTablaChange.emit(aux);
        obj.equipoExtraccionLazy = false;
        obj.equipoExtraccion_service.lazyEquipoExtraccion(obj.equipoExtraccion, obj.evn_lazy_equipoExtraccion, obj);
        obj.accionesActualizar();
    };
    EquipoExtraccionCrudComponent.prototype.actualizarEquipoExtraccionFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarEquipoExtraccionBack(this.equipoExtraccion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    EquipoExtraccionCrudComponent.prototype.actualizarEquipoExtraccionBack = function (equipoExtraccion) {
        equipoExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        this.equipoExtraccion_service.actualizarEquipoExtraccion(equipoExtraccion, this.eventoSrvEquipoExtraccionActualizar, this);
    };
    EquipoExtraccionCrudComponent.prototype.eventoSrvEquipoExtraccionActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.equipoExtraccionLazy = false;
            obj.equipoExtraccion_service.lazyEquipoExtraccion(obj.equipoExtraccion, obj.evn_lazy_equipoExtraccion, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.equipoExtraccion);
            obj.equipoExtraccionChange.emit(aux);
            obj.equipoExtraccionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    EquipoExtraccionCrudComponent.prototype.eliminarEquipoExtraccionFront = function (form) {
        this.accion = 4;
        this.eliminarEquipoExtraccionBack(this.equipoExtraccion);
        this.permisosacciones();
        this.accionesBuscar();
    };
    EquipoExtraccionCrudComponent.prototype.eliminarEquipoExtraccionBack = function (equipoExtraccion) {
        equipoExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        this.equipoExtraccion_service.eliminarEquipoExtraccion(equipoExtraccion, this.eventoSrvEquipoExtraccionEliminar, this);
    };
    EquipoExtraccionCrudComponent.prototype.eventoSrvEquipoExtraccionEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.equipoExtraccion = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
            obj.equipoExtraccionChange.emit(obj.equipoExtraccion);
            obj.equipoExtraccionTablaChange.emit(obj.equipoExtraccion);
            obj.limpiarCampos();
        }
    };
    EquipoExtraccionCrudComponent.prototype.cancelarEquipoExtraccionFront = function (form) {
        this.accion = 6;
        this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = true;
        this.permisosacciones();
    };
    EquipoExtraccionCrudComponent.prototype.nuevoEquipoExtraccionFront = function (form) {
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
                this.equipoExtraccionSeleccion = this.equipoExtraccionAgregar = this.equipoExtraccionBuscar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false;
                this.equipoExtraccionGuardar = this.equipoExtraccionCancelar = true;
            }.bind(this)
        });
    };
    EquipoExtraccionCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovEquipoExtraccionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEquipoExtraccionUsuario, this);
        this.lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion = [];
        this.registroExtraccion_service.getRegistroExtraccionesActivos(this.evtGetIdregistroExtraccionEquipoExtraccionRegistroExtraccion, this);
    };
    EquipoExtraccionCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    EquipoExtraccionCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionSeleccion = this.equipoExtraccionGuardar = false;
        this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = this.equipoExtraccionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    EquipoExtraccionCrudComponent.prototype.evtEquipoExtraccionSeleccionado = function (equipoExtraccion) {
        this.equipoExtraccion = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
        this.equipoExtraccion.from(equipoExtraccion);
        this.equipoExtraccionLazy = false;
        this.equipoExtraccion_service.lazyEquipoExtraccion(this.equipoExtraccion, this.evn_lazy_equipoExtraccion, this);
        this.accion = 7;
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = this.equipoExtraccionSeleccion = this.equipoExtraccionGuardar = false;
        this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = this.equipoExtraccionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarEquipoExtraccion_" + this.nombre).modal("hide");
    };
    EquipoExtraccionCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.equipoExtraccionSeleccion = this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false; // ******************** maquina
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    EquipoExtraccionCrudComponent.prototype.permisosacciones = function () {
        if (this.equipoExtraccionBuscar)
            this.equipoExtraccionBuscar = this.globalesService.pbuscar(this, "equipoExtraccion");
        if (this.equipoExtraccionActualizar)
            this.equipoExtraccionActualizar = (this.globalesService.pacutalizar(this, "equipoExtraccion") && this.globalesService.pbuscar(this, "equipoExtraccion"));
        if (this.equipoExtraccionEliminar)
            this.equipoExtraccionEliminar = (this.globalesService.peliminar(this, "equipoExtraccion") && this.globalesService.pbuscar(this, "equipoExtraccion"));
        if (this.equipoExtraccionAgregar)
            this.equipoExtraccionAgregar = this.globalesService.pagregar(this, "equipoExtraccion");
    };
    EquipoExtraccionCrudComponent.prototype.permisosaccionesInicio = function () {
        this.equipoExtraccionSeleccion = this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false; // *************************** maquina
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    EquipoExtraccionCrudComponent.prototype.limpiarCampos = function () {
        this.equipoExtraccion = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
        this.usuarioUltMovEquipoExtraccionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEleccion = new _registro_extracciones_shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_14__["RegistroExtraccion"]();
        this.equipoExtraccionChange.emit(this.equipoExtraccion);
        this.equipoExtraccionSeleccion = this.equipoExtraccionCancelar = this.equipoExtraccionGuardar = this.equipoExtraccionActualizar = this.equipoExtraccionEliminar = false; // *************************** maquina
        this.equipoExtraccionBuscar = this.equipoExtraccionAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    EquipoExtraccionCrudComponent.prototype.addEquipoExtractor = function () {
        this.equipoExtraccion.nombre = this.equipoExtraccion.nombre ? this.equipoExtraccion.nombre.trim() : null;
        this.equipoExtraccion.primerApellido = this.equipoExtraccion.primerApellido ? this.equipoExtraccion.primerApellido.trim() : null;
        this.equipoExtraccion.segundoApellido = this.equipoExtraccion.segundoApellido ? this.equipoExtraccion.segundoApellido.trim() : null;
        if ((!this.equipoExtraccion.nombre || this.equipoExtraccion.nombre.length === 0) && (!this.equipoExtraccion.primerApellido || this.equipoExtraccion.primerApellido.length === 0)) {
            bootbox.alert("El nombre y el primer apellido son requeridos");
            return;
        }
        if (!this.equipoExtraccion.nombre || this.equipoExtraccion.nombre.length === 0) {
            bootbox.alert("El nombre es requerido");
            return;
        }
        if (!this.equipoExtraccion.nombre.match(/^[a-zA-ZñÑ ]*$/)) {
            bootbox.alert("El nombre solo permite letras");
            return;
        }
        if (!this.equipoExtraccion.primerApellido || this.equipoExtraccion.primerApellido.length === 0) {
            bootbox.alert("El primer apellido es requerido");
            return;
        }
        if (!this.equipoExtraccion.primerApellido.match(/^[a-zA-ZñÑ ]*$/)) {
            bootbox.alert("El primer apellido solo permite letras");
            return;
        }
        if (this.equipoExtraccion.segundoApellido && !this.equipoExtraccion.primerApellido.match(/^[a-zA-ZÑn ]*$/)) {
            bootbox.alert("El segundo apellido solo permite letras");
            return;
        }
        if (this.equipoExtraccion.nombre && this.equipoExtraccion.primerApellido) {
            if (this.listaEquipoExtractor.length < 3) {
                this.listaEquipoExtractor.push(this.equipoExtraccion);
                this.equipoExtraccion = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"]();
            }
            else {
                bootbox.alert("Solo se permite 3 registros.");
            }
        }
        else {
            bootbox.alert("El nombre y el primer apellido son requeridos");
        }
    };
    EquipoExtraccionCrudComponent.prototype.removeEquipoExtractorHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.listaEquipoExtractor.splice(this.listaEquipoExtractor.indexOf(dataItem), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EquipoExtraccionCrudComponent.prototype, "ocultarConjuntosEquipoExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EquipoExtraccionCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EquipoExtraccionCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccion"])
    ], EquipoExtraccionCrudComponent.prototype, "equipoExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionCrudComponent.prototype, "equipoExtraccionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionCrudComponent.prototype, "equipoExtraccionTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EquipoExtraccionCrudComponent.prototype, "listaEquipoExtractor", void 0);
    EquipoExtraccionCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipo-extraccion-crud',
            template: __webpack_require__(/*! ./equipo-extraccion-crud.component.html */ "./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.html"),
            styles: [__webpack_require__(/*! ./equipo-extraccion-crud.component.css */ "./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_equipo_extraccion_service__WEBPACK_IMPORTED_MODULE_5__["EquipoExtraccionService"],
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_equipo_extraccion_service__WEBPACK_IMPORTED_MODULE_5__["EquipoExtraccionService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _registro_extracciones_shared_registro_extraccion_service__WEBPACK_IMPORTED_MODULE_15__["RegistroExtraccionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_17__["CausaMuerteService"]])
    ], EquipoExtraccionCrudComponent);
    return EquipoExtraccionCrudComponent;
}());



/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para equipoExtraccion-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionEquipoExtraccion.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_equipoExtraccion_{{nombregrid}}\">\n                <div id=\"grid_equipoExtraccion_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: EquipoExtraccionListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoExtraccionListKendoComponent", function() { return EquipoExtraccionListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/equipo-extraccion */ "./src/app/equipo-extracciones/shared/equipo-extraccion.ts");
/* harmony import */ var _shared_configurar_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-equipo-extraccion */ "./src/app/equipo-extracciones/shared/configurar-equipo-extraccion.ts");
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
var EquipoExtraccionListKendoComponent = /** @class */ (function () {
    function EquipoExtraccionListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.equipoExtraccionSeleccionado = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_3__["EquipoExtraccion"]();
        this.configuracionEquipoExtraccion = new _shared_configurar_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarEquipoExtraccion"]();
        this.nombregrid = "";
        this.evtEquipoExtraccionSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "equipoExtraccion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'equipoExtraccion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'equipoExtraccion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    EquipoExtraccionListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionEquipoExtraccion.titulo.indexOf("Catálogo") != -1) {
            this.configuracionEquipoExtraccion.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    EquipoExtraccionListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionEquipoExtraccion && changes.configuracionEquipoExtraccion.currentValue &&
            (changes.configuracionEquipoExtraccion.previousValue instanceof _shared_configurar_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarEquipoExtraccion"])) {
            if (changes.configuracionEquipoExtraccion.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionEquipoExtraccion.currentValue.permisosAtributos;
            if (changes.configuracionEquipoExtraccion.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionEquipoExtraccion.currentValue.permisosTabla;
            if ($("#grid_equipoExtraccion_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    EquipoExtraccionListKendoComponent.prototype.ngOnInit = function () {
        self["grid_equipoExtraccion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionEquipoExtraccion.permisosAtributos &&
            this.configuracionEquipoExtraccion.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "equipoExtraccion",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EquipoExtraccion'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EquipoExtraccion'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EquipoExtraccion'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionEquipoExtraccion.permisosAtributos)
            this.permisosAtributos = this.configuracionEquipoExtraccion.permisosAtributos;
        if (this.configuracionEquipoExtraccion.permisosTabla)
            this.permisosTabla = this.configuracionEquipoExtraccion.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EquipoExtraccionListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoAtributo && permisos.equipoExtraccion.PermisoAtributo.length > 0
            && !obj.configuracionEquipoExtraccion.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.equipoExtraccion.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.EquipoExtraccion.PermisoAtributo ;
        }
        if (permisos && permisos.equipoExtraccion && permisos.equipoExtraccion.PermisoTabla && permisos.equipoExtraccion.PermisoTabla.length > 0
            && !obj.configuracionEquipoExtraccion.permisosTabla) {
            obj.globalesService.evtTablas(permisos.equipoExtraccion.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.EquipoExtraccion.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EquipoExtraccionListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_equipoExtraccion_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    EquipoExtraccionListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionEquipoExtraccion.campoAgEl != null
            && this.configuracionEquipoExtraccion.equipoExtraccionConsulta
            && this.configuracionEquipoExtraccion.equipoExtraccionConsulta.isOk
            && !this.configuracionEquipoExtraccion.equipoExtraccionConsulta.isOk())
            return;
        if (this.configuracionEquipoExtraccion.equipoExtraccionConsulta) {
            if (!this.configuracionEquipoExtraccion.campoAgEl && this.configuracionEquipoExtraccion.equipoExtraccionConsulta instanceof _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_3__["EquipoExtraccion"])
                this.configuracionEquipoExtraccion.rutaLista = this.crudServiceBaseUrl + "/getEquipoExtraccionesByDto";
            this.lista = this.configuracionEquipoExtraccion.lecturaP(completar, this.configuracionEquipoExtraccion.equipoExtraccionConsulta);
            if (this.configuracionEquipoExtraccion.campoAgEl) {
                this.rutaAgregar = this.configuracionEquipoExtraccion.agregarP(function () { }, this.configuracionEquipoExtraccion.campoAgEl);
                this.rutaEliminar = this.configuracionEquipoExtraccion.eliminarP(function () { }, this.configuracionEquipoExtraccion.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionEquipoExtraccion.agregarP(completar, this.configuracionEquipoExtraccion.equipoExtraccionConsulta);
                this.rutaEliminar = this.configuracionEquipoExtraccion.eliminarP(completar, this.configuracionEquipoExtraccion.equipoExtraccionConsulta);
            }
        }
        else {
            this.lista = this.configuracionEquipoExtraccion.lectura();
            this.rutaAgregar = this.configuracionEquipoExtraccion.agregar();
            this.rutaEliminar = this.configuracionEquipoExtraccion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "equipoExtraccion", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "equipoExtraccion", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "idregistroExtraccion")) {
            campos["idregistroExtraccion"] = { editable: this.globalesService.aenable(this, "equipoExtraccion", "idregistroExtraccion"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this, "equipoExtraccion", "nombre"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this, "equipoExtraccion", "primerApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this, "equipoExtraccion", "segundoApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "equipoExtraccion", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "equipoExtraccion", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "equipoExtraccion", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "equipoExtraccion", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "equipoExtraccion", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionEquipoExtraccion.rutaActualizar,
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
            if (self.configuracionEquipoExtraccion.campoAgEl) {
                if (self.configuracionEquipoExtraccion.tipocampoAgEl == "EquipoExtraccionEquipoExtraccion")
                    self.configuracionEquipoExtraccion.campoAgEl.equipoExtraccion2 = options.models[0];
                else
                    self.configuracionEquipoExtraccion.campoAgEl.equipoExtraccion = options.models[0];
                return JSON.stringify(self.configuracionEquipoExtraccion.campoAgEl);
            }
            else if (est.options[operation].data.models.equipoExtraccion) {
                est.options[operation].data.models.equipoExtraccion2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    EquipoExtraccionListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "equipoExtraccion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "idregistroExtraccion")) {
            columnas.push({ field: "idregistroExtraccion", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "idregistroExtraccion"), editor: idregistroExtraccionDropDownEditor, template: " #if (idregistroExtraccion){#   #=idregistroExtraccion.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "nombre"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "primerApellido"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "segundoApellido"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "equipoExtraccion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "equipoExtraccion", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "equipoExtraccion"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "equipoExtraccion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "equipoExtraccion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "equipoExtraccion") && this.configuracionEquipoExtraccion.equipoExtraccionConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_equipoExtraccion_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_equipoExtraccion_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionEquipoExtraccion.altoComponente,
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
        this.grid = $("#grid_equipoExtraccion_" + this.nombregrid).data("kendoGrid");
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
    EquipoExtraccionListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_equipoExtraccion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.equipoExtraccionSeleccionado = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_3__["EquipoExtraccion"]();
        gridac.equipoExtraccionSeleccionado.from(dataItem);
        gridac.evtEquipoExtraccionSeleccionado.emit(gridac.equipoExtraccionSeleccionado);
        (gridac.equipoExtraccionSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_equipo_extraccion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarEquipoExtraccion"])
    ], EquipoExtraccionListKendoComponent.prototype, "configuracionEquipoExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EquipoExtraccionListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("equipoExtraccionSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EquipoExtraccionListKendoComponent.prototype, "evtEquipoExtraccionSeleccionado", void 0);
    EquipoExtraccionListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipo-extraccion-list-kendo',
            template: __webpack_require__(/*! ./equipo-extraccion-list-kendo.component.html */ "./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./equipo-extraccion-list-kendo.component.css */ "./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], EquipoExtraccionListKendoComponent);
    return EquipoExtraccionListKendoComponent;
}());



/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EquipoExtraccionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoExtraccionRoutingModule", function() { return EquipoExtraccionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _equipo_extracciones_equipo_extraccion_list_kendo_equipo_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component */ "./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.ts");
/* harmony import */ var _equipo_extracciones_equipo_extraccion_crud_equipo_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component */ "./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.ts");
/* harmony import */ var _equipo_extracciones_equipo_extraccion_table_equipo_extraccion_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component */ "./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'equipo-extraccion-list-kendo', component: _equipo_extracciones_equipo_extraccion_list_kendo_equipo_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["EquipoExtraccionListKendoComponent"] },
    { path: 'equipo-extraccion-crud', component: _equipo_extracciones_equipo_extraccion_crud_equipo_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_3__["EquipoExtraccionCrudComponent"] },
    { path: 'equipo-extraccion-table', component: _equipo_extracciones_equipo_extraccion_table_equipo_extraccion_table_component__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccionTableComponent"] },
];
var EquipoExtraccionRoutingModule = /** @class */ (function () {
    function EquipoExtraccionRoutingModule() {
    }
    EquipoExtraccionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EquipoExtraccionRoutingModule);
    return EquipoExtraccionRoutingModule;
}());



/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_equipoExtraccion\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','id')\" >{{aetiqueta('equipoExtraccion','id')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','idregistroExtraccion')\" >{{aetiqueta('equipoExtraccion','idregistroExtraccion')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','nombre')\" >{{aetiqueta('equipoExtraccion','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','primerApellido')\" >{{aetiqueta('equipoExtraccion','primerApellido')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','segundoApellido')\" >{{aetiqueta('equipoExtraccion','segundoApellido')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','fechaRegistro')\" >{{aetiqueta('equipoExtraccion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','fechaActualizacion')\" >{{aetiqueta('equipoExtraccion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','fechaBaja')\" >{{aetiqueta('equipoExtraccion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','usuarioUltMov')\" >{{aetiqueta('equipoExtraccion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','status')\" >{{aetiqueta('equipoExtraccion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','id')\" >{{aetiqueta('equipoExtraccion','id')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','idregistroExtraccion')\" >{{aetiqueta('equipoExtraccion','idregistroExtraccion')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','nombre')\" >{{aetiqueta('equipoExtraccion','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','primerApellido')\" >{{aetiqueta('equipoExtraccion','primerApellido')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','segundoApellido')\" >{{aetiqueta('equipoExtraccion','segundoApellido')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','fechaRegistro')\" >{{aetiqueta('equipoExtraccion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','fechaActualizacion')\" >{{aetiqueta('equipoExtraccion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','fechaBaja')\" >{{aetiqueta('equipoExtraccion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','usuarioUltMov')\" >{{aetiqueta('equipoExtraccion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('equipoExtraccion','status')\" >{{aetiqueta('equipoExtraccion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-equipo-extraccion [class.hidden]=\"primero\" [(equipoExtraccion)]=\"equipoExtraccionSeleccionado\" (equipoExtraccionTablaChange)=\"cambio_equipoExtraccion($event)\"> </app-equipo-extraccion>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EquipoExtraccionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoExtraccionTableComponent", function() { return EquipoExtraccionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/equipo-extraccion */ "./src/app/equipo-extracciones/shared/equipo-extraccion.ts");
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






var EquipoExtraccionTableComponent = /** @class */ (function () {
    function EquipoExtraccionTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "equipoExtraccion", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.equipoExtraccionSeleccionado = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__["EquipoExtraccion"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'equipoExtraccion'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    EquipoExtraccionTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'equipoExtraccion'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    EquipoExtraccionTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(EquipoExtraccionTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    EquipoExtraccionTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("equipoExtraccion", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("equipoExtraccion", "idregistroExtraccion"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idregistroExtraccion)
                    return "<span style=\"cursor: pointer\">" + oObj.idregistroExtraccion.tipoDonanteMultiorganico + "</span>";
                return "";
            }
        });
        if (!this.avisible("equipoExtraccion", "nombre"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "nombre" });
        if (!this.avisible("equipoExtraccion", "primerApellido"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "primerApellido" });
        if (!this.avisible("equipoExtraccion", "segundoApellido"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "segundoApellido" });
        if (!this.avisible("equipoExtraccion", "fechaRegistro"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("equipoExtraccion", "fechaActualizacion"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("equipoExtraccion", "fechaBaja"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("equipoExtraccion", "usuarioUltMov"))
            columnasNoVisibles.push(8);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("equipoExtraccion", "status"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("equipoExtraccion"))
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
        var tabla = $('#tabla_equipoExtraccion').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_equipoExtraccion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.equipoExtraccionSeleccionado = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__["EquipoExtraccion"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "equipoExtraccion/getEquipoExtracciones",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_equipoExtraccion tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_equipoExtraccion').DataTable().row(this).data();
                self.equipoExtraccionSeleccionado = new _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__["EquipoExtraccion"]();
                self.equipoExtraccionSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_equipoExtraccion').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    EquipoExtraccionTableComponent.prototype.ngOnInit = function () {
    };
    EquipoExtraccionTableComponent.prototype.cambio_equipoExtraccion = function (equipoExtraccion) {
        $('#tabla_equipoExtraccion').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    EquipoExtraccionTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    EquipoExtraccionTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    EquipoExtraccionTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    EquipoExtraccionTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    EquipoExtraccionTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    EquipoExtraccionTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    EquipoExtraccionTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    EquipoExtraccionTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    EquipoExtraccionTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    EquipoExtraccionTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    EquipoExtraccionTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    EquipoExtraccionTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    EquipoExtraccionTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    EquipoExtraccionTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    EquipoExtraccionTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    EquipoExtraccionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipo-extraccion-table',
            template: __webpack_require__(/*! ./equipo-extraccion-table.component.html */ "./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.html"),
            styles: [__webpack_require__(/*! ./equipo-extraccion-table.component.css */ "./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], EquipoExtraccionTableComponent);
    return EquipoExtraccionTableComponent;
}());



/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion.module.ts ***!
  \*****************************************************************/
/*! exports provided: EquipoExtraccionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoExtraccionModule", function() { return EquipoExtraccionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _equipo_extraccion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipo-extraccion-routing.module */ "./src/app/equipo-extracciones/equipo-extraccion-routing.module.ts");
/* harmony import */ var _equipo_extraccion_list_kendo_equipo_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component */ "./src/app/equipo-extracciones/equipo-extraccion-list-kendo/equipo-extraccion-list-kendo.component.ts");
/* harmony import */ var _equipo_extraccion_crud_equipo_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipo-extraccion-crud/equipo-extraccion-crud.component */ "./src/app/equipo-extracciones/equipo-extraccion-crud/equipo-extraccion-crud.component.ts");
/* harmony import */ var _equipo_extraccion_conjunto_equipo_extraccion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipo-extraccion-conjunto/equipo-extraccion-conjunto.component */ "./src/app/equipo-extracciones/equipo-extraccion-conjunto/equipo-extraccion-conjunto.component.ts");
/* harmony import */ var _equipo_extraccion_equipo_extraccion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./equipo-extraccion/equipo-extraccion.component */ "./src/app/equipo-extracciones/equipo-extraccion/equipo-extraccion.component.ts");
/* harmony import */ var _equipo_extraccion_table_equipo_extraccion_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./equipo-extraccion-table/equipo-extraccion-table.component */ "./src/app/equipo-extracciones/equipo-extraccion-table/equipo-extraccion-table.component.ts");
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












var EquipoExtraccionModule = /** @class */ (function () {
    function EquipoExtraccionModule(parentModule) {
        if (parentModule) {
            throw new Error('EquipoExtraccionModule is already loaded. Import it in the AppModule only');
        }
    }
    EquipoExtraccionModule_1 = EquipoExtraccionModule;
    EquipoExtraccionModule.forRoot = function () {
        return {
            ngModule: EquipoExtraccionModule_1,
            providers: []
        };
    };
    var EquipoExtraccionModule_1;
    EquipoExtraccionModule = EquipoExtraccionModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _equipo_extraccion_routing_module__WEBPACK_IMPORTED_MODULE_3__["EquipoExtraccionRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
                //, RegistroExtraccionModule
                ,
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"]
            ],
            declarations: [
                _equipo_extraccion_list_kendo_equipo_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccionListKendoComponent"],
                _equipo_extraccion_equipo_extraccion_component__WEBPACK_IMPORTED_MODULE_7__["EquipoExtraccionComponent"],
                _equipo_extraccion_crud_equipo_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_5__["EquipoExtraccionCrudComponent"],
                _equipo_extraccion_conjunto_equipo_extraccion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["EquipoExtraccionConjuntoComponent"],
                _equipo_extraccion_table_equipo_extraccion_table_component__WEBPACK_IMPORTED_MODULE_8__["EquipoExtraccionTableComponent"],
            ],
            exports: [
                _equipo_extraccion_list_kendo_equipo_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["EquipoExtraccionListKendoComponent"],
                _equipo_extraccion_equipo_extraccion_component__WEBPACK_IMPORTED_MODULE_7__["EquipoExtraccionComponent"],
                _equipo_extraccion_crud_equipo_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_5__["EquipoExtraccionCrudComponent"],
                _equipo_extraccion_conjunto_equipo_extraccion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["EquipoExtraccionConjuntoComponent"],
                _equipo_extraccion_table_equipo_extraccion_table_component__WEBPACK_IMPORTED_MODULE_8__["EquipoExtraccionTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [EquipoExtraccionModule])
    ], EquipoExtraccionModule);
    return EquipoExtraccionModule;
}());



/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion/equipo-extraccion.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion/equipo-extraccion.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion/equipo-extraccion.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion/equipo-extraccion.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4>{{ etiquetaGeneral }}</h4>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <!-- <app-componente-identificador [componente]=\"'equipoExtraccion'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"equipoExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosEquipoExtraccion['id']\"\n                                                   [(dato)]=\"equipoExtraccion.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'equipoExtraccion'\"\n                                               [atributo]=\"'idregistroExtraccion'\"\n                                               [buscar]=\"equipoExtraccionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosEquipoExtraccion['idregistroExtraccion']\"\n                                               [(dato)]=\"equipoExtraccion.idregistroExtraccion\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosEquipoExtraccion\"\n                                               [opciones]=\"lista_idregistroExtraccionEquipoExtraccion\"\n                                               [atributoVisible]=\"'tipoDonanteMultiorganico'\" [(objetoEdicion)]=\"idregistroExtraccionEquipoExtraccionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idregistroExtraccionEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'equipoExtraccion','idregistroExtraccion')\" >\n                                   <app-registro-extraccion-crud [nombre]=\"'idregistroExtraccion'\" [registroExtraccion]=\"equipoExtraccion.idregistroExtraccion\" (registroExtraccionChange)=\"evtIdregistroExtraccion($event)\"\n                                                           [ocultarConjuntosRegistroExtraccion]=\"'true'\" [class.hidden]=\"!idregistroExtraccionEditar\" ></app-registro-extraccion-crud>\n                            </div>\n                        </div>\n                    </div> -->\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <app-componente-cadena\n                [componente]=\"'equipoExtraccion'\"\n                [atributo]=\"'nombre'\"\n                [buscar]=\"equipoExtraccionBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosEquipoExtraccion['nombre']\"\n                [(dato)]=\"equipoExtraccion.nombre\"\n                class=\"w-100\"\n              >\n              </app-componente-cadena>\n            </div>\n            <div class=\"col-md-4\">\n              <app-componente-cadena\n                [componente]=\"'equipoExtraccion'\"\n                [atributo]=\"'primerApellido'\"\n                [buscar]=\"equipoExtraccionBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosEquipoExtraccion['primerApellido']\"\n                [(dato)]=\"equipoExtraccion.primerApellido\"\n                class=\"w-100\"\n              >\n              </app-componente-cadena>\n            </div>\n            <div class=\"col-md-4\">\n              <app-componente-cadena\n                [componente]=\"'equipoExtraccion'\"\n                [atributo]=\"'segundoApellido'\"\n                [buscar]=\"equipoExtraccionBuscar\"\n                [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosEquipoExtraccion['segundoApellido']\"\n                [(dato)]=\"equipoExtraccion.segundoApellido\"\n                class=\"w-100\"\n              >\n              </app-componente-cadena>\n            </div>\n          </div>\n          <!-- <app-componente-fecha [componente]=\"'equipoExtraccion'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"equipoExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosEquipoExtraccion['fechaRegistro']\"\n                                                   [(dato)]=\"equipoExtraccion.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'equipoExtraccion'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"equipoExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosEquipoExtraccion['fechaActualizacion']\"\n                                                   [(dato)]=\"equipoExtraccion.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'equipoExtraccion'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"equipoExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosEquipoExtraccion['fechaBaja']\"\n                                                   [(dato)]=\"equipoExtraccion.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >  -->\n          <!-- <div>\n                        <app-componente-objeto [componente]=\"'equipoExtraccion'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"equipoExtraccionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosEquipoExtraccion['usuarioUltMov']\"\n                                               [(dato)]=\"equipoExtraccion.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosEquipoExtraccion\"\n                                               [opciones]=\"lista_usuarioUltMovEquipoExtraccion\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovEquipoExtraccionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'equipoExtraccion','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"equipoExtraccion.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-radio [componente]=\"'equipoExtraccion'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"equipoExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosEquipoExtraccion['status']\"\n                                                   [(dato)]=\"equipoExtraccion.status\"   class=\"w-100\" >\n                    </app-componente-radio >  -->\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/equipo-extracciones/equipo-extraccion/equipo-extraccion.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/equipo-extracciones/equipo-extraccion/equipo-extraccion.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EquipoExtraccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoExtraccionComponent", function() { return EquipoExtraccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/equipo-extraccion */ "./src/app/equipo-extracciones/shared/equipo-extraccion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipoExtraccionComponent = /** @class */ (function () {
    function EquipoExtraccionComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.equipoExtraccionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovEquipoExtraccionUsuarioEditar = false;
        this.idregistroExtraccionEquipoExtraccionRegistroExtraccionEditar = false;
    }
    EquipoExtraccionComponent.prototype.actualizarEquipoExtraccion = function () {
        if (this.equipoExtraccion.id == null) {
            this.equipoExtraccionService.guardarEquipoExtraccion(this.equipoExtraccion, this.evtGuardar, this);
        }
        else {
            this.equipoExtraccionService.actualizarEquipoExtraccion(this.equipoExtraccion, this.evtActualiza, this);
        }
    };
    EquipoExtraccionComponent.prototype.evtGuardar = function (equipoExtraccion, obj) {
        obj.equipoExtraccion = equipoExtraccion;
        obj.equipoExtraccionChange.emit(obj.equipoExtraccion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    EquipoExtraccionComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.equipoExtraccionChange.emit(obj.equipoExtraccion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    EquipoExtraccionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarEquipoExtraccion();
            }
        }
    };
    EquipoExtraccionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "equipoExtraccionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "validosEquipoExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_1__["EquipoExtraccion"])
    ], EquipoExtraccionComponent.prototype, "equipoExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "equipoExtraccionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EquipoExtraccionComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "equipoExtraccionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "lista_usuarioUltMovEquipoExtraccionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipoExtraccionComponent.prototype, "lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion", void 0);
    EquipoExtraccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipo-extraccion',
            template: __webpack_require__(/*! ./equipo-extraccion.component.html */ "./src/app/equipo-extracciones/equipo-extraccion/equipo-extraccion.component.html"),
            styles: [__webpack_require__(/*! ./equipo-extraccion.component.css */ "./src/app/equipo-extracciones/equipo-extraccion/equipo-extraccion.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], EquipoExtraccionComponent);
    return EquipoExtraccionComponent;
}());



/***/ }),

/***/ "./src/app/equipo-extracciones/shared/configurar-equipo-extraccion.ts":
/*!****************************************************************************!*\
  !*** ./src/app/equipo-extracciones/shared/configurar-equipo-extraccion.ts ***!
  \****************************************************************************/
/*! exports provided: ConfigurarEquipoExtraccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarEquipoExtraccion", function() { return ConfigurarEquipoExtraccion; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarEquipoExtraccion = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarEquipoExtraccion() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "equipoExtraccion";
        this.rutaLista = this.crudServiceBaseUrl + "/getEquipoExtracciones";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarEquipoExtraccion";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarEquipoExtraccion";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarEquipoExtraccion";
        this.titulo = "Catálogo EquipoExtraccion";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.equipoExtraccionConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarEquipoExtraccion.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarEquipoExtraccion.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarEquipoExtraccion.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarEquipoExtraccion.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarEquipoExtraccion.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarEquipoExtraccion.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarEquipoExtraccion;
}());



/***/ }),

/***/ "./src/app/equipo-extracciones/shared/equipo-extraccion.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/equipo-extracciones/shared/equipo-extraccion.service.ts ***!
  \*************************************************************************/
/*! exports provided: EquipoExtraccionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoExtraccionService", function() { return EquipoExtraccionService; });
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


var EquipoExtraccionService = /** @class */ (function () {
    function EquipoExtraccionService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    EquipoExtraccionService.prototype.setEquipoExtraccion = function (equipoExtraccion) {
        this.equipoExtraccion = equipoExtraccion;
    };
    EquipoExtraccionService.prototype.getEquipoExtraccion = function () {
        return this.equipoExtraccion;
    };
    EquipoExtraccionService.prototype.guardarEquipoExtraccion = function (equipoExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(equipoExtraccion, 'equipoExtraccion/guardarEquipoExtraccion')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.actualizarEquipoExtraccion = function (equipoExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(equipoExtraccion, 'equipoExtraccion/actualizarEquipoExtraccion')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.eliminarEquipoExtraccion = function (equipoExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(equipoExtraccion, 'equipoExtraccion/eliminarEquipoExtraccion')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtracciondb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'equipoExtraccion/getEquipoExtraccion')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtracciones = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'equipoExtraccion/getEquipoExtracciones')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'equipoExtraccion/getEquipoExtraccionesActivos')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.lazyEquipoExtraccion = function (equipoExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(equipoExtraccion, 'equipoExtraccion/lazyEquipoExtraccion')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'equipoExtraccion/getEquipoExtraccionById')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'equipoExtraccion/getEquipoExtraccionesById')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'equipoExtraccion/getEquipoExtraccionByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'equipoExtraccion/getEquipoExtraccionesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'equipoExtraccion/getEquipoExtraccionByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'equipoExtraccion/getEquipoExtraccionesByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'equipoExtraccion/getEquipoExtraccionByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'equipoExtraccion/getEquipoExtraccionesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'equipoExtraccion/getEquipoExtraccionBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'equipoExtraccion/getEquipoExtraccionesBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'equipoExtraccion/getEquipoExtraccionByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'equipoExtraccion/getEquipoExtraccionesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'equipoExtraccion/getEquipoExtraccionByNombre')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'equipoExtraccion/getEquipoExtraccionesByNombre')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'equipoExtraccion/getEquipoExtraccionByStatus')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'equipoExtraccion/getEquipoExtraccionesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'equipoExtraccion/getEquipoExtraccionByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'equipoExtraccion/getEquipoExtraccionesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionByIdregistroExtraccion = function (idregistroExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'equipoExtraccion/getEquipoExtraccionByIdregistroExtraccion')
            .subscribe(function (data) {
            _evento(_this.equipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.equipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesByIdregistroExtraccion = function (idregistroExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idregistroExtraccion, 'equipoExtraccion/getEquipoExtraccionesByIdregistroExtraccion')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'equipoExtraccion/custom')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService.prototype.getEquipoExtraccionesByDto = function (p_equipoExtraccion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_equipoExtraccion, 'equipoExtraccion/getEquipoExtraccionesByDto')
            .subscribe(function (data) {
            _evento(_this.listaEquipoExtraccion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEquipoExtraccion);
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
    EquipoExtraccionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], EquipoExtraccionService);
    return EquipoExtraccionService;
}());



/***/ }),

/***/ "./src/app/equipo-extracciones/shared/equipo-extraccion.ts":
/*!*****************************************************************!*\
  !*** ./src/app/equipo-extracciones/shared/equipo-extraccion.ts ***!
  \*****************************************************************/
/*! exports provided: EquipoExtraccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoExtraccion", function() { return EquipoExtraccion; });
/**
 *
 * @author IstmoSoft
 */
var EquipoExtraccion = /** @class */ (function () {
    // atributos fin
    function EquipoExtraccion(source) {
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
    EquipoExtraccion.prototype.from = function (source) {
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
    EquipoExtraccion.prototype.isOk = function () {
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
    EquipoExtraccion.prototype.toDto = function () {
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
    return EquipoExtraccion;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-equipo-extracciones-equipo-extraccion-module~app-registro-extracciones-registro-extracci~edaef8cf.js.map