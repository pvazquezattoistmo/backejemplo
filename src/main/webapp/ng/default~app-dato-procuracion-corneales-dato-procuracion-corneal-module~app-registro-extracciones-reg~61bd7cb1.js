(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-dato-procuracion-corneales-dato-procuracion-corneal-module~app-registro-extracciones-reg~61bd7cb1"],{

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component.css":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let datoProcuracionCorneal of listaDatoProcuracionCorneal \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+datoProcuracionCorneal.id}\"\n        (click)=\"elegir(datoProcuracionCorneal,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{datoProcuracionCorneal.id}}\">{{datoProcuracionCorneal.id}}</a>\n    </li>\n    <li *ngFor =  \"let datoProcuracionCorneal of listaDatoProcuracionCornealN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+datoProcuracionCorneal.id}\"\n        (click)=\"elegir(datoProcuracionCorneal, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{datoProcuracionCorneal.id}}\">T-{{datoProcuracionCorneal.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let datoProcuracionCorneal of listaDatoProcuracionCorneal ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+datoProcuracionCorneal.id}\" id=\"tab-I-{{datoProcuracionCorneal.id}}\">\n\t\t\t<app-dato-procuracion-corneal [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [datoProcuracionCornealBuscar]=\"datoProcuracionCornealBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDatoProcuracionCorneal]=\"validosDatoProcuracionCorneal\"  \n\t\t\t\t\t\t  [datoProcuracionCornealService]=\"datoProcuracionCornealService\" [(opcion)]=\"opcionDatoProcuracionCorneal\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(datoProcuracionCorneal)]=\"listaDatoProcuracionCorneal[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDatoProcuracionCorneal\"\n                           [lista_usuarioUltMovDatoProcuracionCornealUsuario]=\"lista_usuarioUltMovDatoProcuracionCornealUsuario\" \n                           [lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal]=\"lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-dato-procuracion-corneal>\n        </div>\n        <div *ngFor = \"let datoProcuracionCorneal of listaDatoProcuracionCornealN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+datoProcuracionCorneal.id}\" id=\"tab-N-{{datoProcuracionCorneal.id}}\">\n\t\t\t<app-dato-procuracion-corneal [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [datoProcuracionCornealBuscar]=\"datoProcuracionCornealBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDatoProcuracionCorneal]=\"validosDatoProcuracionCorneal\"  \n\t\t\t\t\t\t  [datoProcuracionCornealService]=\"datoProcuracionCornealService\" [(opcion)]=\"opcionDatoProcuracionCorneal\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(datoProcuracionCorneal)]=\"listaDatoProcuracionCornealN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDatoProcuracionCorneal\"\n                           [lista_usuarioUltMovDatoProcuracionCornealUsuario]=\"lista_usuarioUltMovDatoProcuracionCornealUsuario\" \n                           [lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal]=\"lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-dato-procuracion-corneal>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DatoProcuracionCornealConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoProcuracionCornealConjuntoComponent", function() { return DatoProcuracionCornealConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatoProcuracionCornealConjuntoComponent = /** @class */ (function () {
    function DatoProcuracionCornealConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovDatoProcuracionCornealUsuarioEditar = false;
        this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEditar = false;
        this.listaDatoProcuracionCornealN = [];
        this.listaDatoProcuracionCorneal = [];
        this.listaDatoProcuracionCornealChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.datoProcuracionCornealN = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_1__["DatoProcuracionCorneal"]();
        this.datoProcuracionCornealNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    DatoProcuracionCornealConjuntoComponent.prototype.elegir = function (datoProcuracionCorneal, tipo) {
        this.idSeleccionado = tipo + "-" + datoProcuracionCorneal.id;
        this.datoProcuracionCornealN = datoProcuracionCorneal;
    };
    DatoProcuracionCornealConjuntoComponent.prototype.ngOnInit = function () {
        this.datoProcuracionCornealN.id = 0;
        this.listaDatoProcuracionCornealN.push(Object.assign({}, this.datoProcuracionCornealN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    DatoProcuracionCornealConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_1__["DatoProcuracionCorneal"]();
        pg.id = this.listaDatoProcuracionCornealN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDatoProcuracionCornealN.push(pg);
    };
    DatoProcuracionCornealConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaDatoProcuracionCorneal; _i < _a.length; _i++) {
            var datoProcuracionCorneal = _a[_i];
            this.datoProcuracionCornealService.actualizarDatoProcuracionCorneal(datoProcuracionCorneal, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaDatoProcuracionCornealN; _b < _c.length; _b++) {
            var datoProcuracionCorneal = _c[_b];
            datoProcuracionCorneal.id = null;
            this.datoProcuracionCornealService.guardarDatoProcuracionCorneal(datoProcuracionCorneal, this.evtGuardar, this);
        }
    };
    DatoProcuracionCornealConjuntoComponent.prototype.evtGuardar = function (datoProcuracionCorneal, obj) {
        obj.agregados++;
        obj.listaDatoProcuracionCorneal.push(datoProcuracionCorneal);
        if (obj.agregados >= obj.listaDatoProcuracionCornealN.length) {
            obj.datoProcuracionCornealN = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_1__["DatoProcuracionCorneal"]();
            obj.listaDatoProcuracionCornealN = [];
            obj.datoProcuracionCornealN.id = 0;
            obj.idSeleccionado = "N-" + obj.datoProcuracionCornealN.id;
            obj.listaDatoProcuracionCornealN.push(Object.assign({}, obj.datoProcuracionCornealN));
            obj.listaDatoProcuracionCornealChange.emit(obj.listaDatoProcuracionCorneal);
        }
        if (obj.agregados >= obj.listaDatoProcuracionCornealN.length &&
            obj.actualizados >= obj.listaDatoProcuracionCorneal.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DatoProcuracionCornealConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaDatoProcuracionCornealN.length &&
                obj.actualizados >= obj.listaDatoProcuracionCorneal.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    DatoProcuracionCornealConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], DatoProcuracionCornealConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "datoProcuracionCornealBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "validosDatoProcuracionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "ocultarConjuntosDatoProcuracionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "datoProcuracionCornealService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "lista_usuarioUltMovDatoProcuracionCornealUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "listaDatoProcuracionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "listaDatoProcuracionCornealChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_1__["DatoProcuracionCorneal"])
    ], DatoProcuracionCornealConjuntoComponent.prototype, "datoProcuracionCornealN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealConjuntoComponent.prototype, "datoProcuracionCornealNChange", void 0);
    DatoProcuracionCornealConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dato-procuracion-corneal-conjunto',
            template: __webpack_require__(/*! ./dato-procuracion-corneal-conjunto.component.html */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./dato-procuracion-corneal-conjunto.component.css */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DatoProcuracionCornealConjuntoComponent);
    return DatoProcuracionCornealConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <app-dato-procuracion-corneal\n    [usuariologueado]=\"usuariologueado\"\n    [etiquetaGeneral]=\"etiquetaGeneral\"\n    [datoProcuracionCornealBuscar]=\"datoProcuracionCornealBuscar\"\n    [permisosAtributos]=\"permisosAtributos\"\n    [permisosConjuntos]=\"permisosConjuntos\"\n    [validosDatoProcuracionCorneal]=\"validosDatoProcuracionCorneal\"\n    [datoProcuracionCornealService]=\"datoProcuracionCorneal_service\"\n    [(opcion)]=\"opcionDatoProcuracionCorneal\"\n    [globalesService]=\"globalesService\"\n    [(datoProcuracionCorneal)]=\"datoProcuracionCorneal\"\n    [ocultarConjuntos]=\"ocultarConjuntosDatoProcuracionCorneal\"\n    [lista_usuarioUltMovDatoProcuracionCornealUsuario]=\"\n      lista_usuarioUltMovDatoProcuracionCornealUsuario\n    \"\n    [lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal]=\"\n      lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal\n    \"\n    [minDate]=\"minDate\"\n    (changeIdCenatra) = \"evtChangeIdCenatra($event)\"\n  >\n  </app-dato-procuracion-corneal>\n\n  <!-- <div class=\"panel-footer\" style=\"text-align: center\">\n    <div style=\"display: inline-block;width: 90%;\">\n      <button\n        type=\"button\"\n        class=\"btn btn-primary btn-buscar\"\n        [class.hidden]=\"!datoProcuracionCornealBuscar\"\n        (click)=\"buscarDatoProcuracionCornealFront(formaGeneral)\"\n      >\n        <span class=\"fa fa-search\"></span> Buscar\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-success btn-agregar\"\n        [class.hidden]=\"!datoProcuracionCornealAgregar\"\n        (click)=\"nuevoDatoProcuracionCornealFront(formaGeneral)\"\n      >\n        <span class=\"fa fa-newspaper\"></span>Nuevo\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-warning btn-actualizar\"\n        [disabled]=\"!validaTodosc\"\n        [class.hidden]=\"!datoProcuracionCornealActualizar\"\n        (click)=\"actualizarDatoProcuracionCornealFront(formaGeneral)\"\n      >\n        <span class=\"fa fa-arrow-up\"></span> Actualizar\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-danger btn-eliminar\"\n        [class.hidden]=\"!datoProcuracionCornealEliminar\"\n        (click)=\"eliminarDatoProcuracionCornealFront(formaGeneral)\"\n      >\n        <span class=\"fa fa-trash\"></span>Eliminar\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-danger btn-guardar\"\n        [disabled]=\"!validaTodosc\"\n        [class.hidden]=\"!datoProcuracionCornealGuardar\"\n        (click)=\"guardarDatoProcuracionCornealFront(formaGeneral)\"\n      >\n        <span class=\"fa fa-floppy-disk\"></span>Guardar\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-danger btn-cancelar\"\n        [class.hidden]=\"!datoProcuracionCornealCancelar\"\n        (click)=\"cancelarDatoProcuracionCornealFront(formaGeneral)\"\n      >\n        <span class=\"fa fa-remove\"></span>Cancelar\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary btn-limpiar\"\n        (click)=\"limpiarCampos()\"\n      >\n        Limpiar Campos\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-warning btn-actualizar\"\n        [disabled]=\"!validaTodosc\"\n        [class.hidden]=\"datosReporteDatoProcuracionCornealWord\"\n        (click)=\"reporteDatoProcuracionCornealWord(formaGeneral)\"\n      >\n        <span class=\"fa fa-download-alt\"></span>Word\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-warning btn-actualizar\"\n        [disabled]=\"!validaTodosc\"\n        [class.hidden]=\"datosReporteDatoProcuracionCornealExcel\"\n        (click)=\"reporteDatoProcuracionCornealExcel(formaGeneral)\"\n      >\n        <span class=\"fa fa-download-alt\"></span> Excel\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-warning btn-actualizar\"\n        [disabled]=\"!validaTodosc\"\n        [class.hidden]=\"datosReporteDatoProcuracionCornealPdf\"\n        (click)=\"reporteDatoProcuracionCornealPdf(formaGeneral)\"\n      >\n        <span class=\"fa fa-download-alt\"></span> PDF\n      </button>\n    </div>\n  </div> -->\n</div>\n<!-- <div\n  class=\"modal fade\"\n  id=\"buscarDatoProcuracionCorneal_{{ nombre }}\"\n  role=\"dialog\"\n>\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-dato-procuracion-corneal-list-kendo\n          [nombregrid]=\"'buscar_' + nombre\"\n          [configuracionDatoProcuracionCorneal]=\"\n            configuracionDatoProcuracionCorneal\n          \"\n          (datoProcuracionCornealSeleccionado)=\"\n            evtDatoProcuracionCornealSeleccionado($event)\n          \"\n        >\n        </app-dato-procuracion-corneal-list-kendo>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div> -->\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: DatoProcuracionCornealCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoProcuracionCornealCrudComponent", function() { return DatoProcuracionCornealCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts");
/* harmony import */ var _shared_dato_procuracion_corneal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dato-procuracion-corneal.service */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.service.ts");
/* harmony import */ var _shared_configurar_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/configurar-dato-procuracion-corneal.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
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














var DatoProcuracionCornealCrudComponent = /** @class */ (function () {
    function DatoProcuracionCornealCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    datoProcuracionCorneal_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, hospital_service, entidadFederativa_service, perfil_service, solicitudEvaluacionCorneal_service, causaMuerte_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.datoProcuracionCorneal_service = datoProcuracionCorneal_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.opcionDatoProcuracionCorneal = 0;
        this.validosDatoProcuracionCorneal = {
            id: false,
            horaFin: false,
            fechaBaja: false,
            tipo: false,
            fechaInicio: false,
            idcenatra: false,
            fechaRegistro: false,
            fechaActualizacion: false,
            fechaFin: false,
            horaInicio: false,
            status: false,
            usuarioUltMov: false,
            idsolicitudEvaluacionCorneal: false,
        };
        this.ocultarConjuntosDatoProcuracionCorneal = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "datoProcuracionCorneal", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.datoProcuracionCornealLazy = false;
        this.datoProcuracionCornealPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.datoProcuracionCorneal = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"]();
        this.datoProcuracionCornealChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.datoProcuracionCornealTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_datoProcuracionCorneales = [];
        this.usuarioUltMovDatoProcuracionCornealUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovDatoProcuracionCornealUsuario = [];
        this.usuarioUltMovDatoProcuracionCornealUsuarioEditar = false;
        this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_14__["SolicitudEvaluacionCorneal"]();
        this.lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal = [];
        this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEditar = false;
        this.changeIdCenatra = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
        this.configuracionDatoProcuracionCorneal = new _shared_configurar_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDatoProcuracionCorneal"]();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDatoProcuracionCornealUsuario, this);
        //this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(this.evtGetIdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal, this);
        this.limpiarCampos();
    }
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "datoProcuracionCornealOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosDatoProcuracionCorneal)
                return true;
            return !this.datoProcuracionCornealActualizar;
        },
        enumerable: true,
        configurable: true
    });
    DatoProcuracionCornealCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.datoProcuracionCorneal && changes.datoProcuracionCorneal.currentValue == null &&
            this.datoProcuracionCorneal == null)
            this.datoProcuracionCorneal = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"]();
        else {
            var aux = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"]();
            if (this.datoProcuracionCorneal)
                aux.from(this.datoProcuracionCorneal);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealGuardar = false;
                this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = this.datoProcuracionCornealCancelar = true;
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
                this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealBuscar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
                this.datoProcuracionCornealGuardar = this.datoProcuracionCornealCancelar = true;
            }
        }
    };
    DatoProcuracionCornealCrudComponent.prototype.evtChangeIdCenatra = function (cambio) {
        this.changeIdCenatra.emit(cambio);
    };
    DatoProcuracionCornealCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "datoProcuracionCorneal",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "solicitudEvaluacionCorneal",
            "causaMuerte",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.datoProcuracionCornealPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DatoProcuracionCornealCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.datoProcuracionCornealPermisos = true;
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoAtributo && permisos.datoProcuracionCorneal.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.datoProcuracionCorneal.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoConjunto && permisos.datoProcuracionCorneal.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.datoProcuracionCorneal.PermisoConjunto;
        }
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoTabla && permisos.datoProcuracionCorneal.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.datoProcuracionCorneal.PermisoTabla[0];
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
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoAtributo && permisos.solicitudEvaluacionCorneal.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.solicitudEvaluacionCorneal.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.solicitudEvaluacionCorneal.PermisoAtributo);
        }
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoAtributo && permisos.solicitudEvaluacionCorneal.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.solicitudEvaluacionCorneal.PermisoConjunto);
        }
        if (permisos && permisos.solicitudEvaluacionCorneal && permisos.solicitudEvaluacionCorneal.PermisoTabla && permisos.solicitudEvaluacionCorneal.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.solicitudEvaluacionCorneal.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.solicitudEvaluacionCorneal.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DatoProcuracionCornealCrudComponent.prototype.evtGetUsuarioUltMovDatoProcuracionCornealUsuario = function (lista_usuarioUltMovDatoProcuracionCornealUsuario, obj) {
        obj.lista_usuarioUltMovDatoProcuracionCornealUsuario = lista_usuarioUltMovDatoProcuracionCornealUsuario;
        obj.actualizar_UsuarioUltMovDatoProcuracionCornealUsuario();
    };
    DatoProcuracionCornealCrudComponent.prototype.evtGetIdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal = function (lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal, obj) {
        obj.lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal = lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal;
        obj.actualizar_IdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal();
    };
    DatoProcuracionCornealCrudComponent.prototype.actualizar_UsuarioUltMovDatoProcuracionCornealUsuario = function () {
        if (this.usuarioUltMovDatoProcuracionCornealUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovDatoProcuracionCornealUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovDatoProcuracionCornealUsuarioEleccion.id) {
                    this.usuarioUltMovDatoProcuracionCornealUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    DatoProcuracionCornealCrudComponent.prototype.actualizar_IdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal = function () {
        if (this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion)
            for (var _i = 0, _a = this.lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion.id) {
                    this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion = eleme;
                    break;
                }
            }
    };
    DatoProcuracionCornealCrudComponent.prototype.ngDoCheck = function () {
    };
    DatoProcuracionCornealCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosDatoProcuracionCorneal['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosDatoProcuracionCorneal['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaHoraFin", {
        get: function () {
            return this.validosDatoProcuracionCorneal['horaFin'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosDatoProcuracionCorneal['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaTipo", {
        get: function () {
            return this.validosDatoProcuracionCorneal['tipo'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaFechaInicio", {
        get: function () {
            return this.validosDatoProcuracionCorneal['fechaInicio'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaIdcenatra", {
        get: function () {
            return this.validosDatoProcuracionCorneal['idcenatra'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosDatoProcuracionCorneal['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosDatoProcuracionCorneal['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaFechaFin", {
        get: function () {
            return this.validosDatoProcuracionCorneal['fechaFin'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaHoraInicio", {
        get: function () {
            return this.validosDatoProcuracionCorneal['horaInicio'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosDatoProcuracionCorneal['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosDatoProcuracionCorneal['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaIdsolicitudEvaluacionCorneal", {
        get: function () {
            return this.validosDatoProcuracionCorneal['idsolicitudEvaluacionCorneal'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaHoraFin && this.validaFechaBaja && this.validaTipo && this.validaFechaInicio && this.validaIdcenatra && this.validaFechaRegistro && this.validaFechaActualizacion && this.validaFechaFin && this.validaHoraInicio && this.validaStatus && this.validaUsuarioUltMov && this.validaIdsolicitudEvaluacionCorneal;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    DatoProcuracionCornealCrudComponent.prototype.obtenerDatoProcuracionCorneales = function (lista, objeto) {
        objeto.lista_datoProcuracionCorneales = lista;
        if (lista && lista.length > 0) {
            objeto.datoProcuracionCorneal.from(lista[0]);
            objeto.evtDatoProcuracionCornealSeleccionado(objeto.datoProcuracionCorneal);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    DatoProcuracionCornealCrudComponent.prototype.evn_lazy_datoProcuracionCorneal = function (datoProcuracionCorneal, objeto) {
        objeto.datoProcuracionCorneal = datoProcuracionCorneal;
        objeto.datoProcuracionCornealChange.emit(objeto.datoProcuracionCorneal);
        objeto.configuarCombosObjetos();
        objeto.datoProcuracionCornealLazy = true;
    };
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "datosReporteDatoProcuracionCornealWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.datoProcuracionCornealActualizar && this.datoProcuracionCornealLazy && this.globalesService.preporteWord(this, "datoProcuracionCorneal"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "datosReporteDatoProcuracionCornealExcel", {
        get: function () {
            return !(this.datoProcuracionCornealActualizar && this.datoProcuracionCornealLazy && this.globalesService.preporteExcel(this, "datoProcuracionCorneal"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealCrudComponent.prototype, "datosReporteDatoProcuracionCornealPdf", {
        get: function () {
            return !(this.datoProcuracionCornealActualizar && this.datoProcuracionCornealLazy && this.globalesService.preportePdf(this, "datoProcuracionCorneal"));
        },
        enumerable: true,
        configurable: true
    });
    DatoProcuracionCornealCrudComponent.prototype.reporteDatoProcuracionCornealExcel = function (form) {
        var nombre = "DatoProcuracionCorneal.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "datoProcuracionCorneal": this.datoProcuracionCorneal };
        parametros["plantilla"] = "DatoProcuracionCorneal.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DatoProcuracionCornealCrudComponent.prototype.reporteDatoProcuracionCornealWord = function (form) {
        var nombre = "DatoProcuracionCorneal.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "datoProcuracionCorneal": this.datoProcuracionCorneal };
        parametros["plantilla"] = "DatoProcuracionCorneal.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DatoProcuracionCornealCrudComponent.prototype.reporteDatoProcuracionCornealPdf = function (form) {
        var nombre = "DatoProcuracionCorneal.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "datoProcuracionCorneal": this.datoProcuracionCorneal };
        parametros["plantilla"] = "DatoProcuracionCorneal.docx";
        parametros["salida"] = "DatoProcuracionCorneal.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    DatoProcuracionCornealCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealCancelar = true;
    };
    DatoProcuracionCornealCrudComponent.prototype.buscarDatoProcuracionCornealFront = function (form) {
        this.accionesBuscar();
        var vdatoProcuracionCorneal = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"]();
        vdatoProcuracionCorneal.from(this.datoProcuracionCorneal);
        this.configuracionDatoProcuracionCorneal = new _shared_configurar_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDatoProcuracionCorneal"]();
        this.configuracionDatoProcuracionCorneal.permisosTabla = { "tabla": "datoProcuracionCorneal", "permiso": 8 };
        this.configuracionDatoProcuracionCorneal.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta = vdatoProcuracionCorneal;
        this.permisosacciones();
        $("#buscarDatoProcuracionCorneal_" + this.nombre).modal();
    };
    DatoProcuracionCornealCrudComponent.prototype.buscarDatoProcuracionCornealBack = function (datoProcuracionCorneal) {
        this.datoProcuracionCorneal_service.getDatoProcuracionCornealesByDto(datoProcuracionCorneal, this.eventoSrvDatoProcuracionCornealBuscar, this);
    };
    DatoProcuracionCornealCrudComponent.prototype.eventoSrvDatoProcuracionCornealBuscar = function (lista, objeto) {
        objeto.lista_datoProcuracionCorneales = lista;
        if (lista && lista.length > 0) {
            objeto.datoProcuracionCorneal = lista[0];
            objeto.datoProcuracionCornealLazy = false;
            objeto.datoProcuracionCorneal_service.lazyDatoProcuracionCorneal(objeto.datoProcuracionCorneal, objeto.evn_lazy_datoProcuracionCorneal, objeto);
        }
    };
    DatoProcuracionCornealCrudComponent.prototype.guardarDatoProcuracionCornealFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarDatoProcuracionCornealBack(this.datoProcuracionCorneal);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    DatoProcuracionCornealCrudComponent.prototype.guardarDatoProcuracionCornealBack = function (datoProcuracionCorneal) {
        if (datoProcuracionCorneal.usuarioUltMov == null)
            datoProcuracionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        if (datoProcuracionCorneal.status == null || datoProcuracionCorneal.status == "")
            datoProcuracionCorneal.status = 1;
        this.datoProcuracionCorneal_service.guardarDatoProcuracionCorneal(datoProcuracionCorneal, this.eventoSrvDatoProcuracionCornealGuardar, this);
    };
    DatoProcuracionCornealCrudComponent.prototype.eventoSrvDatoProcuracionCornealGuardar = function (datoProcuracionCorneal, obj) {
        obj.datoProcuracionCorneal = datoProcuracionCorneal;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"]();
        aux.from(datoProcuracionCorneal);
        obj.datoProcuracionCornealChange.emit(aux);
        obj.datoProcuracionCornealTablaChange.emit(aux);
        obj.datoProcuracionCornealLazy = false;
        obj.datoProcuracionCorneal_service.lazyDatoProcuracionCorneal(obj.datoProcuracionCorneal, obj.evn_lazy_datoProcuracionCorneal, obj);
        obj.accionesActualizar();
    };
    DatoProcuracionCornealCrudComponent.prototype.actualizarDatoProcuracionCornealFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarDatoProcuracionCornealBack(this.datoProcuracionCorneal);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    DatoProcuracionCornealCrudComponent.prototype.actualizarDatoProcuracionCornealBack = function (datoProcuracionCorneal) {
        datoProcuracionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        this.datoProcuracionCorneal_service.actualizarDatoProcuracionCorneal(datoProcuracionCorneal, this.eventoSrvDatoProcuracionCornealActualizar, this);
    };
    DatoProcuracionCornealCrudComponent.prototype.eventoSrvDatoProcuracionCornealActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.datoProcuracionCornealLazy = false;
            obj.datoProcuracionCorneal_service.lazyDatoProcuracionCorneal(obj.datoProcuracionCorneal, obj.evn_lazy_datoProcuracionCorneal, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.datoProcuracionCorneal);
            obj.datoProcuracionCornealChange.emit(aux);
            obj.datoProcuracionCornealTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    DatoProcuracionCornealCrudComponent.prototype.eliminarDatoProcuracionCornealFront = function (form) {
        this.accion = 4;
        this.eliminarDatoProcuracionCornealBack(this.datoProcuracionCorneal);
        this.permisosacciones();
        this.accionesBuscar();
    };
    DatoProcuracionCornealCrudComponent.prototype.eliminarDatoProcuracionCornealBack = function (datoProcuracionCorneal) {
        datoProcuracionCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        this.datoProcuracionCorneal_service.eliminarDatoProcuracionCorneal(datoProcuracionCorneal, this.eventoSrvDatoProcuracionCornealEliminar, this);
    };
    DatoProcuracionCornealCrudComponent.prototype.eventoSrvDatoProcuracionCornealEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.datoProcuracionCorneal = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"]();
            obj.datoProcuracionCornealChange.emit(obj.datoProcuracionCorneal);
            obj.datoProcuracionCornealTablaChange.emit(obj.datoProcuracionCorneal);
            obj.limpiarCampos();
        }
    };
    DatoProcuracionCornealCrudComponent.prototype.cancelarDatoProcuracionCornealFront = function (form) {
        this.accion = 6;
        this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = true;
        this.permisosacciones();
    };
    DatoProcuracionCornealCrudComponent.prototype.nuevoDatoProcuracionCornealFront = function (form) {
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
                this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealBuscar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false;
                this.datoProcuracionCornealGuardar = this.datoProcuracionCornealCancelar = true;
            }.bind(this)
        });
    };
    DatoProcuracionCornealCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovDatoProcuracionCornealUsuario = [];
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDatoProcuracionCornealUsuario, this);
        this.lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal = [];
        //this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(this.evtGetIdsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal, this);
    };
    DatoProcuracionCornealCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    DatoProcuracionCornealCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealGuardar = false;
        this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = this.datoProcuracionCornealCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    DatoProcuracionCornealCrudComponent.prototype.evtDatoProcuracionCornealSeleccionado = function (datoProcuracionCorneal) {
        this.datoProcuracionCorneal = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"]();
        this.datoProcuracionCorneal.from(datoProcuracionCorneal);
        this.datoProcuracionCornealLazy = false;
        this.datoProcuracionCorneal_service.lazyDatoProcuracionCorneal(this.datoProcuracionCorneal, this.evn_lazy_datoProcuracionCorneal, this);
        this.accion = 7;
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealGuardar = false;
        this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = this.datoProcuracionCornealCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDatoProcuracionCorneal_" + this.nombre).modal("hide");
    };
    DatoProcuracionCornealCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false; // ******************** maquina
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    DatoProcuracionCornealCrudComponent.prototype.permisosacciones = function () {
        if (this.datoProcuracionCornealBuscar)
            this.datoProcuracionCornealBuscar = this.globalesService.pbuscar(this, "datoProcuracionCorneal");
        if (this.datoProcuracionCornealActualizar)
            this.datoProcuracionCornealActualizar = (this.globalesService.pacutalizar(this, "datoProcuracionCorneal") && this.globalesService.pbuscar(this, "datoProcuracionCorneal"));
        if (this.datoProcuracionCornealEliminar)
            this.datoProcuracionCornealEliminar = (this.globalesService.peliminar(this, "datoProcuracionCorneal") && this.globalesService.pbuscar(this, "datoProcuracionCorneal"));
        if (this.datoProcuracionCornealAgregar)
            this.datoProcuracionCornealAgregar = this.globalesService.pagregar(this, "datoProcuracionCorneal");
    };
    DatoProcuracionCornealCrudComponent.prototype.permisosaccionesInicio = function () {
        this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false; // *************************** maquina
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    DatoProcuracionCornealCrudComponent.prototype.limpiarCampos = function () {
        this.datoProcuracionCorneal = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"]();
        this.usuarioUltMovDatoProcuracionCornealUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEleccion = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_14__["SolicitudEvaluacionCorneal"]();
        this.datoProcuracionCornealChange.emit(this.datoProcuracionCorneal);
        this.datoProcuracionCornealSeleccion = this.datoProcuracionCornealCancelar = this.datoProcuracionCornealGuardar = this.datoProcuracionCornealActualizar = this.datoProcuracionCornealEliminar = false; // *************************** maquina
        this.datoProcuracionCornealBuscar = this.datoProcuracionCornealAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DatoProcuracionCornealCrudComponent.prototype, "ocultarConjuntosDatoProcuracionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DatoProcuracionCornealCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DatoProcuracionCornealCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCorneal"])
    ], DatoProcuracionCornealCrudComponent.prototype, "datoProcuracionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealCrudComponent.prototype, "datoProcuracionCornealChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealCrudComponent.prototype, "datoProcuracionCornealTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealCrudComponent.prototype, "changeIdCenatra", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealCrudComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], DatoProcuracionCornealCrudComponent.prototype, "minDate", void 0);
    DatoProcuracionCornealCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dato-procuracion-corneal-crud',
            template: __webpack_require__(/*! ./dato-procuracion-corneal-crud.component.html */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.html"),
            styles: [__webpack_require__(/*! ./dato-procuracion-corneal-crud.component.css */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_dato_procuracion_corneal_service__WEBPACK_IMPORTED_MODULE_5__["DatoProcuracionCornealService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_15__["SolicitudEvaluacionCornealService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_16__["CausaMuerteService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_dato_procuracion_corneal_service__WEBPACK_IMPORTED_MODULE_5__["DatoProcuracionCornealService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_15__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_16__["CausaMuerteService"]])
    ], DatoProcuracionCornealCrudComponent);
    return DatoProcuracionCornealCrudComponent;
}());



/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.css":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para datoProcuracionCorneal-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionDatoProcuracionCorneal.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_datoProcuracionCorneal_{{nombregrid}}\">\n                <div id=\"grid_datoProcuracionCorneal_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: DatoProcuracionCornealListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoProcuracionCornealListKendoComponent", function() { return DatoProcuracionCornealListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts");
/* harmony import */ var _shared_configurar_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/configurar-dato-procuracion-corneal.ts");
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
var DatoProcuracionCornealListKendoComponent = /** @class */ (function () {
    function DatoProcuracionCornealListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.datoProcuracionCornealSeleccionado = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_3__["DatoProcuracionCorneal"]();
        this.configuracionDatoProcuracionCorneal = new _shared_configurar_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDatoProcuracionCorneal"]();
        this.nombregrid = "";
        this.evtDatoProcuracionCornealSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "datoProcuracionCorneal";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'datoProcuracionCorneal'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'datoProcuracionCorneal'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    DatoProcuracionCornealListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionDatoProcuracionCorneal.titulo.indexOf("Catálogo") != -1) {
            this.configuracionDatoProcuracionCorneal.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    DatoProcuracionCornealListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDatoProcuracionCorneal && changes.configuracionDatoProcuracionCorneal.currentValue &&
            (changes.configuracionDatoProcuracionCorneal.previousValue instanceof _shared_configurar_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDatoProcuracionCorneal"])) {
            if (changes.configuracionDatoProcuracionCorneal.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionDatoProcuracionCorneal.currentValue.permisosAtributos;
            if (changes.configuracionDatoProcuracionCorneal.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionDatoProcuracionCorneal.currentValue.permisosTabla;
            if ($("#grid_datoProcuracionCorneal_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    DatoProcuracionCornealListKendoComponent.prototype.ngOnInit = function () {
        self["grid_datoProcuracionCorneal_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionDatoProcuracionCorneal.permisosAtributos &&
            this.configuracionDatoProcuracionCorneal.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "datoProcuracionCorneal",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DatoProcuracionCorneal'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DatoProcuracionCorneal'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DatoProcuracionCorneal'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionDatoProcuracionCorneal.permisosAtributos)
            this.permisosAtributos = this.configuracionDatoProcuracionCorneal.permisosAtributos;
        if (this.configuracionDatoProcuracionCorneal.permisosTabla)
            this.permisosTabla = this.configuracionDatoProcuracionCorneal.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DatoProcuracionCornealListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoAtributo && permisos.datoProcuracionCorneal.PermisoAtributo.length > 0
            && !obj.configuracionDatoProcuracionCorneal.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.datoProcuracionCorneal.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.DatoProcuracionCorneal.PermisoAtributo ;
        }
        if (permisos && permisos.datoProcuracionCorneal && permisos.datoProcuracionCorneal.PermisoTabla && permisos.datoProcuracionCorneal.PermisoTabla.length > 0
            && !obj.configuracionDatoProcuracionCorneal.permisosTabla) {
            obj.globalesService.evtTablas(permisos.datoProcuracionCorneal.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.DatoProcuracionCorneal.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DatoProcuracionCornealListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_datoProcuracionCorneal_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    DatoProcuracionCornealListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionDatoProcuracionCorneal.campoAgEl != null
            && this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta
            && this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta.isOk
            && !this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta.isOk())
            return;
        if (this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta) {
            if (!this.configuracionDatoProcuracionCorneal.campoAgEl && this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta instanceof _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_3__["DatoProcuracionCorneal"])
                this.configuracionDatoProcuracionCorneal.rutaLista = this.crudServiceBaseUrl + "/getDatoProcuracionCornealesByDto";
            this.lista = this.configuracionDatoProcuracionCorneal.lecturaP(completar, this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta);
            if (this.configuracionDatoProcuracionCorneal.campoAgEl) {
                this.rutaAgregar = this.configuracionDatoProcuracionCorneal.agregarP(function () { }, this.configuracionDatoProcuracionCorneal.campoAgEl);
                this.rutaEliminar = this.configuracionDatoProcuracionCorneal.eliminarP(function () { }, this.configuracionDatoProcuracionCorneal.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionDatoProcuracionCorneal.agregarP(completar, this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta);
                this.rutaEliminar = this.configuracionDatoProcuracionCorneal.eliminarP(completar, this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta);
            }
        }
        else {
            this.lista = this.configuracionDatoProcuracionCorneal.lectura();
            this.rutaAgregar = this.configuracionDatoProcuracionCorneal.agregar();
            this.rutaEliminar = this.configuracionDatoProcuracionCorneal.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "idsolicitudEvaluacionCorneal")) {
            campos["idsolicitudEvaluacionCorneal"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "idsolicitudEvaluacionCorneal"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "idcenatra")) {
            campos["idcenatra"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "idcenatra"), nullable: true };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "tipo")) {
            campos["tipo"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "tipo"), nullable: true };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaInicio")) {
            campos["fechaInicio"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "fechaInicio"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaFin")) {
            campos["fechaFin"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "fechaFin"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "horaInicio")) {
            campos["horaInicio"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "horaInicio"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "horaFin")) {
            campos["horaFin"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "horaFin"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "datoProcuracionCorneal", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDatoProcuracionCorneal.rutaActualizar,
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
                        if (elem.horaFin && typeof elem.horaFin === "number") {
                            elem.horaFin = kendo.parseDate(new Date(elem.horaFin), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaBaja && typeof elem.fechaBaja === "number") {
                            elem.fechaBaja = kendo.parseDate(new Date(elem.fechaBaja), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaInicio && typeof elem.fechaInicio === "number") {
                            elem.fechaInicio = kendo.parseDate(new Date(elem.fechaInicio), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRegistro && typeof elem.fechaRegistro === "number") {
                            elem.fechaRegistro = kendo.parseDate(new Date(elem.fechaRegistro), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaActualizacion && typeof elem.fechaActualizacion === "number") {
                            elem.fechaActualizacion = kendo.parseDate(new Date(elem.fechaActualizacion), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaFin && typeof elem.fechaFin === "number") {
                            elem.fechaFin = kendo.parseDate(new Date(elem.fechaFin), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.horaInicio && typeof elem.horaInicio === "number") {
                            elem.horaInicio = kendo.parseDate(new Date(elem.horaInicio), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionDatoProcuracionCorneal.campoAgEl) {
                if (self.configuracionDatoProcuracionCorneal.tipocampoAgEl == "DatoProcuracionCornealDatoProcuracionCorneal")
                    self.configuracionDatoProcuracionCorneal.campoAgEl.datoProcuracionCorneal2 = options.models[0];
                else
                    self.configuracionDatoProcuracionCorneal.campoAgEl.datoProcuracionCorneal = options.models[0];
                return JSON.stringify(self.configuracionDatoProcuracionCorneal.campoAgEl);
            }
            else if (est.options[operation].data.models.datoProcuracionCorneal) {
                est.options[operation].data.models.datoProcuracionCorneal2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    DatoProcuracionCornealListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "idsolicitudEvaluacionCorneal")) {
            columnas.push({ field: "idsolicitudEvaluacionCorneal", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "idsolicitudEvaluacionCorneal"), editor: idsolicitudEvaluacionCornealDropDownEditor, template: " #if (idsolicitudEvaluacionCorneal){#   #=idsolicitudEvaluacionCorneal.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "idcenatra")) {
            columnas.push({ field: "idcenatra", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "idcenatra") });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "tipo")) {
            columnas.push({ field: "tipo", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "tipo") });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaInicio")) {
            columnas.push({ field: "fechaInicio", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "fechaInicio"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaFin")) {
            columnas.push({ field: "fechaFin", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "fechaFin"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "horaInicio")) {
            columnas.push({ field: "horaInicio", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "horaInicio"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "horaFin")) {
            columnas.push({ field: "horaFin", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "horaFin"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "datoProcuracionCorneal", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "datoProcuracionCorneal", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "datoProcuracionCorneal"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "datoProcuracionCorneal")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "datoProcuracionCorneal")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "datoProcuracionCorneal") && this.configuracionDatoProcuracionCorneal.datoProcuracionCornealConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_datoProcuracionCorneal_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_datoProcuracionCorneal_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDatoProcuracionCorneal.altoComponente,
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
        this.grid = $("#grid_datoProcuracionCorneal_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidsolicitudEvaluacionCorneal = this.urlprovider.serverURL + "solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesActivos1";
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
        function idsolicitudEvaluacionCornealDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "folioSolicitud",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidsolicitudEvaluacionCorneal,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    DatoProcuracionCornealListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_datoProcuracionCorneal_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.datoProcuracionCornealSeleccionado = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_3__["DatoProcuracionCorneal"]();
        gridac.datoProcuracionCornealSeleccionado.from(dataItem);
        gridac.evtDatoProcuracionCornealSeleccionado.emit(gridac.datoProcuracionCornealSeleccionado);
        (gridac.datoProcuracionCornealSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDatoProcuracionCorneal"])
    ], DatoProcuracionCornealListKendoComponent.prototype, "configuracionDatoProcuracionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DatoProcuracionCornealListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("datoProcuracionCornealSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DatoProcuracionCornealListKendoComponent.prototype, "evtDatoProcuracionCornealSeleccionado", void 0);
    DatoProcuracionCornealListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dato-procuracion-corneal-list-kendo',
            template: __webpack_require__(/*! ./dato-procuracion-corneal-list-kendo.component.html */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./dato-procuracion-corneal-list-kendo.component.css */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], DatoProcuracionCornealListKendoComponent);
    return DatoProcuracionCornealListKendoComponent;
}());



/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DatoProcuracionCornealRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoProcuracionCornealRoutingModule", function() { return DatoProcuracionCornealRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dato_procuracion_corneales_dato_procuracion_corneal_list_kendo_dato_procuracion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.ts");
/* harmony import */ var _dato_procuracion_corneales_dato_procuracion_corneal_crud_dato_procuracion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.ts");
/* harmony import */ var _dato_procuracion_corneales_dato_procuracion_corneal_table_dato_procuracion_corneal_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'dato-procuracion-corneal-list-kendo', component: _dato_procuracion_corneales_dato_procuracion_corneal_list_kendo_dato_procuracion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["DatoProcuracionCornealListKendoComponent"] },
    { path: 'dato-procuracion-corneal-crud', component: _dato_procuracion_corneales_dato_procuracion_corneal_crud_dato_procuracion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_3__["DatoProcuracionCornealCrudComponent"] },
    { path: 'dato-procuracion-corneal-table', component: _dato_procuracion_corneales_dato_procuracion_corneal_table_dato_procuracion_corneal_table_component__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCornealTableComponent"] },
];
var DatoProcuracionCornealRoutingModule = /** @class */ (function () {
    function DatoProcuracionCornealRoutingModule() {
    }
    DatoProcuracionCornealRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DatoProcuracionCornealRoutingModule);
    return DatoProcuracionCornealRoutingModule;
}());



/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n        <app-componente-cadena [componente]=\"'datoProcuracionCorneal'\"\n        [atributo]=\"'folioSolicitud'\"\n        [buscar]=\"datoProcuracionCornealBuscar\"\n        [permisosAtributos]=\"permisoFolio\"\n        [(valido)]=\"folioValido\"\n        [(dato)]=\"folioDato\" class=\"w-100\">\n        </app-componente-cadena>\n      </div>\n      <div class=\"col-md-6\">\n        <app-componente-cadena [componente]=\"'datoProcuracionCorneal'\"\n        [atributo]=\"'idcenatra'\"\n        [buscar]=\"datoProcuracionCornealBuscar\"\n        [permisosAtributos]=\"permisoIdCenatra\"\n        [(valido)]=\"idCenatraValido\"\n        [(dato)]=\"idcenatra\" class=\"w-100\">\n        </app-componente-cadena>\n      </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-componente-fecha [componente]=\"'datoProcuracionCorneal'\"\n      [atributo]=\"'fechaInicio'\"\n      [buscar]=\"datoProcuracionCornealBuscar\"\n      [permisosAtributos]=\"permisoFecha\"\n      [(valido)]=\"fechaValidaInicio\"\n      [(dato)]=\"fechaSeleccionInicio\" class=\"w-100\">\n      </app-componente-fecha>\n    </div>\n    <div class=\"col-md-5\">\n      <app-componente-fecha [componente]=\"'datoProcuracionCorneal'\"\n      [atributo]=\"'fechaFin'\"\n      [buscar]=\"datoProcuracionCornealBuscar\"\n      [permisosAtributos]=\"permisoFecha\"\n      [(valido)]=\"fechaValidaFin\"\n      [(dato)]=\"fechaSeleccionFin\" class=\"w-100\">\n      </app-componente-fecha>\n    </div>\n    <div class=\"col-md-2\">\n      <button (click)=\"buscarByfiltere()\" class=\"btn btn-primary\" style=\"margin-top: 25px;\">Buscar</button>\n    </div>\n    </div>\n<table *ngIf=\"muestraTabla\" id=\"tabla_datoProcuracionCorneal\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n          <th>Folio Solicitud</th>\n          <th>Id Cenatra</th>\n          <th>Nombre</th>\n          <th>Primer Apellido</th>\n          <th>Segundo Apellido</th>\n        </tr>\n    </thead>\n    <tfoot>\n\n    </tfoot>\n</table>\n</div>\n<!--app-dato-procuracion-corneal [class.hidden]=\"primero\" [(datoProcuracionCorneal)]=\"datoProcuracionCornealSeleccionado\" (datoProcuracionCornealTablaChange)=\"cambio_datoProcuracionCorneal($event)\"> </app-dato-procuracion-corneal-->\n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DatoProcuracionCornealTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoProcuracionCornealTableComponent", function() { return DatoProcuracionCornealTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts");
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






var DatoProcuracionCornealTableComponent = /** @class */ (function () {
    function DatoProcuracionCornealTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "datoProcuracionCorneal", "permiso": 0, "etiqueta": "" };
        this.permisoFecha = [{ "etiqueta": "Fecha Inicio", "validacion": null, "permiso": 7, "tabla": "datoProcuracionCorneal", "atributo": "fechaInicio" },
            { "etiqueta": "Fecha Fin", "validacion": null, "permiso": 7, "tabla": "datoProcuracionCorneal", "atributo": "fechaFin" }];
        this.permisoFolio = [{ "etiqueta": "Folio de Solicitud de Evaluacion Corneal", "validacion": null, "permiso": 7, "tabla": "datoProcuracionCorneal", "atributo": "folioSolicitud" }];
        this.permisoIdCenatra = [{ "etiqueta": "id Cenatra", "validacion": null, "permiso": 7, "tabla": "datoProcuracionCorneal", "atributo": "idcenatra" }];
        this.ptabla = false;
        this.pattr = false;
        this.fechaValidaInicio = false;
        this.fechaValidaFinal = false;
        this.url = this.urlProvider;
        this.datoProcuracionCornealSeleccionado = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_1__["DatoProcuracionCorneal"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'datoProcuracionCorneal'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    DatoProcuracionCornealTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'datoProcuracionCorneal'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    DatoProcuracionCornealTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(DatoProcuracionCornealTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    DatoProcuracionCornealTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        //if (!this.avisible("datoProcuracionCorneal", "id"))
        //columnasNoVisibles.push(0);
        columnas.push({ "data": "folioSolicitud" });
        columnas.push({ "data": "idcenatra" });
        columnas.push({ "data": "nombre" });
        columnas.push({ "data": "primerApellido" });
        columnas.push({ "data": "segundoApellido" });
        columnas.push({
            data: function (oObj) {
                return "<button class='btn btn-primary' onclick='borrar'><span class='glyphicon glyphicon-pencil'></span></button>";
            }
        });
        columnas.push({
            data: function (oObj) {
                return "<button class='btn btn-primary' onclick='borrar'><span class='glyphicon glyphicon-trash'></span></button>";
            }
        });
        /*columnas.push({
                "data": function(oObj) {
             if (oObj.idsolicitudEvaluacionCorneal)
                        return "<span style=\"cursor: pointer\">"+ oObj.idsolicitudEvaluacionCorneal.folioSolicitud +"</span>";
             return "";
                }
        });*/
        /*//if (!this.avisible("datoProcuracionCorneal", "idcenatra"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "idcenatra" } );
        //if (!this.avisible("datoProcuracionCorneal", "tipo"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "tipo" } );
        //if (!this.avisible("datoProcuracionCorneal", "fechaInicio"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "fechaInicio" } );
        if (!this.avisible("datoProcuracionCorneal", "fechaFin"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "fechaFin" } );
        if (!this.avisible("datoProcuracionCorneal", "horaInicio"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "horaInicio" } );
        if (!this.avisible("datoProcuracionCorneal", "horaFin"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "horaFin" } );
        if (!this.avisible("datoProcuracionCorneal", "fechaRegistro"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaRegistro" } );
        if (!this.avisible("datoProcuracionCorneal", "fechaActualizacion"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaActualizacion" } );
        if (!this.avisible("datoProcuracionCorneal", "fechaBaja"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "fechaBaja" } );
        if (!this.avisible("datoProcuracionCorneal", "usuarioUltMov"))
            columnasNoVisibles.push(11);
        columnas.push({
                "data": function(oObj) {
             if (oObj.usuarioUltMov)
                        return "<span style=\"cursor: pointer\">"+ oObj.usuarioUltMov.username +"</span>";
             return "";
                }
        });
        if (!this.avisible("datoProcuracionCorneal", "status"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "status" } );

        if (self.pacutalizar("datoProcuracionCorneal"))
            columnas.push({
                "data": function(oObj) {
                    return "<span style=\"cursor: pointer\">Editar</span>";
                }
            });*/
        var novisibles;
        novisibles = [
            {
                "targets": columnasNoVisibles,
                "visible": false,
                "searchable": false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_datoProcuracionCorneal').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_datoProcuracionCorneal_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.datoProcuracionCornealSeleccionado = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_1__["DatoProcuracionCorneal"]();
                    self.primero = false;
                });
            },
            /*"ajax": {
                "url": self.urlProvider.serverURL+"datoProcuracionCorneal/getDatoProcuracionCorneales",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },*/
            "columns": columnas,
        });
        this.llenadoInicial();
        $('#tabla_datoProcuracionCorneal tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_datoProcuracionCorneal').DataTable().row(this).data();
                self.datoProcuracionCornealSeleccionado = new _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_1__["DatoProcuracionCorneal"]();
                self.datoProcuracionCornealSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_datoProcuracionCorneal').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    DatoProcuracionCornealTableComponent.prototype.ngOnInit = function () {
    };
    DatoProcuracionCornealTableComponent.prototype.cambio_datoProcuracionCorneal = function (datoProcuracionCorneal) {
        $('#tabla_datoProcuracionCorneal').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S
    // **********************************************************************************
    // **********************************************************************************
    DatoProcuracionCornealTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    DatoProcuracionCornealTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    DatoProcuracionCornealTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    DatoProcuracionCornealTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    DatoProcuracionCornealTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    DatoProcuracionCornealTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    DatoProcuracionCornealTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    DatoProcuracionCornealTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    DatoProcuracionCornealTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    DatoProcuracionCornealTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    DatoProcuracionCornealTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    DatoProcuracionCornealTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    DatoProcuracionCornealTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    DatoProcuracionCornealTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    DatoProcuracionCornealTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    // **********************************************************************************
    // **********************************************************************************
    DatoProcuracionCornealTableComponent.prototype.llenadoInicial = function () {
        var dato = {};
        //this.tabla
        //.clear()
        //.draw();
        var tabla = $('#tabla_datoProcuracionCorneal').DataTable();
        tabla
            .clear()
            .draw();
        $.ajax({
            "url": this.url.serverURL + "datoProcuracionCorneal/getDatoProcuracionCornealesByFiltro",
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //let tabla = $('#tabla_solicitudEvaluCornealProcurador').DataTable();
                data.forEach(function (enty) {
                    var obj = {};
                    obj.folioSolicitud = enty.idsolicitudEvaluacionCorneal.folioSolicitud;
                    obj.idcenatra = enty.idcenatra;
                    obj.nombre = enty.idsolicitudEvaluacionCorneal.nombre;
                    obj.primerApellido = enty.idsolicitudEvaluacionCorneal.primerApellido;
                    obj.segundoApellido = enty.idsolicitudEvaluacionCorneal.segundoApellido;
                    /*obj.status = enty.status;
                    obj.hospitalSolicitanteCaja = enty.hospitalSolicitanteCaja;
                    obj.usuarioUltMov = enty.usuarioUltMov;
                    obj.datoReceptorSolicitante = enty.datoReceptorSolicitante;
                    obj.catalogoEstadoSolicitante = enty.catalogoEstadoSolicitante;*/
                    tabla.row.add(obj).draw(false);
                    //this.tabla.row.add(entry).draw();
                    //.rows.add( entry ).draw(false);
                });
                //this.tabla.rows.add( [data] ).draw();
                //$('#target').html(data.msg);
            },
            data: JSON.stringify(dato)
        });
    };
    DatoProcuracionCornealTableComponent.prototype.buscarByfiltere = function () {
        var dato = { "fechaInicio": this.fechaSeleccionInicio, "fechaFin": this.fechaSeleccionFin, "folio": this.folioDato, "idCenatra": this.idcenatra };
        //this.tabla
        //.clear()
        //.draw();
        var tabla = $('#tabla_datoProcuracionCorneal').DataTable();
        tabla
            .clear()
            .draw();
        $.ajax({
            "url": this.url.serverURL + "datoProcuracionCorneal/getDatoProcuracionCornealesByFiltro",
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //let tabla = $('#tabla_solicitudEvaluCornealProcurador').DataTable();
                data.forEach(function (enty) {
                    var obj = {};
                    obj.folioSolicitud = enty.idsolicitudEvaluacionCorneal.folioSolicitud;
                    obj.idcenatra = enty.idcenatra;
                    obj.nombre = enty.idsolicitudEvaluacionCorneal.nombre;
                    obj.primerApellido = enty.idsolicitudEvaluacionCorneal.primerApellido;
                    obj.segundoApellido = enty.idsolicitudEvaluacionCorneal.segundoApellido;
                    /*obj.status = enty.status;
                    obj.hospitalSolicitanteCaja = enty.hospitalSolicitanteCaja;
                    obj.usuarioUltMov = enty.usuarioUltMov;
                    obj.datoReceptorSolicitante = enty.datoReceptorSolicitante;
                    obj.catalogoEstadoSolicitante = enty.catalogoEstadoSolicitante;*/
                    tabla.row.add(obj).draw(false);
                    //this.tabla.row.add(entry).draw();
                    //.rows.add( entry ).draw(false);
                });
                //this.tabla.rows.add( [data] ).draw();
                //$('#target').html(data.msg);
            },
            data: JSON.stringify(dato)
        });
    };
    DatoProcuracionCornealTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dato-procuracion-corneal-table',
            template: __webpack_require__(/*! ./dato-procuracion-corneal-table.component.html */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.html"),
            styles: [__webpack_require__(/*! ./dato-procuracion-corneal-table.component.css */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], DatoProcuracionCornealTableComponent);
    return DatoProcuracionCornealTableComponent;
}());



/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DatoProcuracionCornealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoProcuracionCornealModule", function() { return DatoProcuracionCornealModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dato_procuracion_corneal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dato-procuracion-corneal-routing.module */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-routing.module.ts");
/* harmony import */ var _dato_procuracion_corneal_list_kendo_dato_procuracion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-list-kendo/dato-procuracion-corneal-list-kendo.component.ts");
/* harmony import */ var _dato_procuracion_corneal_crud_dato_procuracion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-crud/dato-procuracion-corneal-crud.component.ts");
/* harmony import */ var _dato_procuracion_corneal_conjunto_dato_procuracion_corneal_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-conjunto/dato-procuracion-corneal-conjunto.component.ts");
/* harmony import */ var _dato_procuracion_corneal_dato_procuracion_corneal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dato-procuracion-corneal/dato-procuracion-corneal.component */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal/dato-procuracion-corneal.component.ts");
/* harmony import */ var _dato_procuracion_corneal_table_dato_procuracion_corneal_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dato-procuracion-corneal-table/dato-procuracion-corneal-table.component */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal-table/dato-procuracion-corneal-table.component.ts");
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










//import { SolicitudEvaluacionCornealModule }   from '../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module';

var DatoProcuracionCornealModule = /** @class */ (function () {
    function DatoProcuracionCornealModule(parentModule) {
        if (parentModule) {
            throw new Error('DatoProcuracionCornealModule is already loaded. Import it in the AppModule only');
        }
    }
    DatoProcuracionCornealModule_1 = DatoProcuracionCornealModule;
    DatoProcuracionCornealModule.forRoot = function () {
        return {
            ngModule: DatoProcuracionCornealModule_1,
            providers: []
        };
    };
    var DatoProcuracionCornealModule_1;
    DatoProcuracionCornealModule = DatoProcuracionCornealModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _dato_procuracion_corneal_routing_module__WEBPACK_IMPORTED_MODULE_3__["DatoProcuracionCornealRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
                //, SolicitudEvaluacionCornealModule
            ],
            declarations: [
                _dato_procuracion_corneal_list_kendo_dato_procuracion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCornealListKendoComponent"],
                _dato_procuracion_corneal_dato_procuracion_corneal_component__WEBPACK_IMPORTED_MODULE_7__["DatoProcuracionCornealComponent"],
                _dato_procuracion_corneal_crud_dato_procuracion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_5__["DatoProcuracionCornealCrudComponent"],
                _dato_procuracion_corneal_conjunto_dato_procuracion_corneal_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DatoProcuracionCornealConjuntoComponent"],
                _dato_procuracion_corneal_table_dato_procuracion_corneal_table_component__WEBPACK_IMPORTED_MODULE_8__["DatoProcuracionCornealTableComponent"],
            ],
            exports: [
                _dato_procuracion_corneal_list_kendo_dato_procuracion_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DatoProcuracionCornealListKendoComponent"],
                _dato_procuracion_corneal_dato_procuracion_corneal_component__WEBPACK_IMPORTED_MODULE_7__["DatoProcuracionCornealComponent"],
                _dato_procuracion_corneal_crud_dato_procuracion_corneal_crud_component__WEBPACK_IMPORTED_MODULE_5__["DatoProcuracionCornealCrudComponent"],
                _dato_procuracion_corneal_conjunto_dato_procuracion_corneal_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DatoProcuracionCornealConjuntoComponent"],
                _dato_procuracion_corneal_table_dato_procuracion_corneal_table_component__WEBPACK_IMPORTED_MODULE_8__["DatoProcuracionCornealTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [DatoProcuracionCornealModule])
    ], DatoProcuracionCornealModule);
    return DatoProcuracionCornealModule;
}());



/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal/dato-procuracion-corneal.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal/dato-procuracion-corneal.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal/dato-procuracion-corneal.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal/dato-procuracion-corneal.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3>{{ etiquetaGeneral }}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <!-- <app-componente-identificador [componente]=\"'datoProcuracionCorneal'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"datoProcuracionCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDatoProcuracionCorneal['id']\"\n                                                   [(dato)]=\"datoProcuracionCorneal.id\"   class=\"w-100\" >\n                    </app-componente-identificador >  -->\n          <!-- <div>\n                        <app-componente-objeto [componente]=\"'datoProcuracionCorneal'\"\n                                               [atributo]=\"'idsolicitudEvaluacionCorneal'\"\n                                               [buscar]=\"datoProcuracionCornealBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosDatoProcuracionCorneal['idsolicitudEvaluacionCorneal']\"\n                                               [(dato)]=\"datoProcuracionCorneal.idsolicitudEvaluacionCorneal\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosDatoProcuracionCorneal\"\n                                               [opciones]=\"lista_idsolicitudEvaluacionCornealDatoProcuracionCorneal\"\n                                               [atributoVisible]=\"'folioSolicitud'\" [(objetoEdicion)]=\"idsolicitudEvaluacionCornealDatoProcuracionCornealEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idsolicitudEvaluacionCornealEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'datoProcuracionCorneal','idsolicitudEvaluacionCorneal')\" >\n                                   <app-solicitud-evaluacion-corneal-crud [nombre]=\"'idsolicitudEvaluacionCorneal'\" [solicitudEvaluacionCorneal]=\"datoProcuracionCorneal.idsolicitudEvaluacionCorneal\" (solicitudEvaluacionCornealChange)=\"evtIdsolicitudEvaluacionCorneal($event)\"\n                                                           [ocultarConjuntosSolicitudEvaluacionCorneal]=\"'true'\" [class.hidden]=\"!idsolicitudEvaluacionCornealEditar\" ></app-solicitud-evaluacion-corneal-crud>\n                            </div>\n                        </div>\n                    </div> -->\n          <app-componente-cadena\n            [componente]=\"'datoProcuracionCorneal'\"\n            [atributo]=\"'idcenatra'\"\n            [buscar]=\"datoProcuracionCornealBuscar\"\n            [maxlength]=\"10\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosDatoProcuracionCorneal['idcenatra']\"\n            [(dato)]=\"datoProcuracionCorneal.idcenatra\"\n            class=\"w-100\"\n            (datoChange)=\"idCenatraChange()\"\n          >\n          </app-componente-cadena>\n          <!-- <app-componente-cadena [componente]=\"'datoProcuracionCorneal'\"\n                                                   [atributo]=\"'tipo'\"\n                                                   [buscar]=\"datoProcuracionCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDatoProcuracionCorneal['tipo']\"\n                                                   [(dato)]=\"datoProcuracionCorneal.tipo\"   class=\"w-100\" >\n                    </app-componente-cadena > -->\n          <app-componente-fecha\n            [componente]=\"'datoProcuracionCorneal'\"\n            [atributo]=\"'fechaInicio'\"\n            [buscar]=\"datoProcuracionCornealBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosDatoProcuracionCorneal['fechaInicio']\"\n            [(dato)]=\"datoProcuracionCorneal.fechaInicio\"\n            class=\"w-100\"\n            [minDate]=\"minDate\"\n          >\n          </app-componente-fecha>\n          <app-componente-hora\n            [componente]=\"'datoProcuracionCorneal'\"\n            [atributo]=\"'horaInicio'\"\n            [buscar]=\"datoProcuracionCornealBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosDatoProcuracionCorneal['horaInicio']\"\n            [(dato)]=\"datoProcuracionCorneal.horaInicio\"\n            class=\"w-100\"\n          >\n          </app-componente-hora>\n          <app-componente-fecha\n            [componente]=\"'datoProcuracionCorneal'\"\n            [atributo]=\"'fechaFin'\"\n            [buscar]=\"datoProcuracionCornealBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosDatoProcuracionCorneal['fechaFin']\"\n            [(dato)]=\"datoProcuracionCorneal.fechaFin\"\n            class=\"w-100\"\n            [minDate]=\"minDateProcuracion\"\n          >\n          </app-componente-fecha>\n          <app-componente-hora\n            [componente]=\"'datoProcuracionCorneal'\"\n            [atributo]=\"'horaFin'\"\n            [buscar]=\"datoProcuracionCornealBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosDatoProcuracionCorneal['horaFin']\"\n            [(dato)]=\"datoProcuracionCorneal.horaFin\"\n            class=\"w-100\"\n          >\n          </app-componente-hora>\n          <!-- <app-componente-fecha [componente]=\"'datoProcuracionCorneal'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"datoProcuracionCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDatoProcuracionCorneal['fechaRegistro']\"\n                                                   [(dato)]=\"datoProcuracionCorneal.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'datoProcuracionCorneal'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"datoProcuracionCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDatoProcuracionCorneal['fechaActualizacion']\"\n                                                   [(dato)]=\"datoProcuracionCorneal.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'datoProcuracionCorneal'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"datoProcuracionCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDatoProcuracionCorneal['fechaBaja']\"\n                                                   [(dato)]=\"datoProcuracionCorneal.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >  -->\n          <!-- <div>\n                        <app-componente-objeto [componente]=\"'datoProcuracionCorneal'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"datoProcuracionCornealBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosDatoProcuracionCorneal['usuarioUltMov']\"\n                                               [(dato)]=\"datoProcuracionCorneal.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosDatoProcuracionCorneal\"\n                                               [opciones]=\"lista_usuarioUltMovDatoProcuracionCorneal\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovDatoProcuracionCornealEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'datoProcuracionCorneal','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"datoProcuracionCorneal.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div> -->\n          <!-- <app-componente-radio [componente]=\"'datoProcuracionCorneal'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"datoProcuracionCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDatoProcuracionCorneal['status']\"\n                                                   [(dato)]=\"datoProcuracionCorneal.status\"   class=\"w-100\" >\n                    </app-componente-radio >  -->\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal/dato-procuracion-corneal.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/dato-procuracion-corneal/dato-procuracion-corneal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DatoProcuracionCornealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoProcuracionCornealComponent", function() { return DatoProcuracionCornealComponent; });
/* harmony import */ var _shared_dato_procuracion_corneal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/dato-procuracion-corneal.service */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dato-procuracion-corneal */ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatoProcuracionCornealComponent = /** @class */ (function () {
    function DatoProcuracionCornealComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.datoProcuracionCornealChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeIdCenatra = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usuarioUltMovDatoProcuracionCornealUsuarioEditar = false;
        this.idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEditar = false;
        this.fechaActual = new Date();
    }
    DatoProcuracionCornealComponent.prototype.actualizarDatoProcuracionCorneal = function () {
        if (this.datoProcuracionCorneal.id == null) {
            this.datoProcuracionCornealService.guardarDatoProcuracionCorneal(this.datoProcuracionCorneal, this.evtGuardar, this);
        }
        else {
            this.datoProcuracionCornealService.actualizarDatoProcuracionCorneal(this.datoProcuracionCorneal, this.evtActualiza, this);
        }
    };
    DatoProcuracionCornealComponent.prototype.evtGuardar = function (datoProcuracionCorneal, obj) {
        obj.datoProcuracionCorneal = datoProcuracionCorneal;
        obj.datoProcuracionCornealChange.emit(obj.datoProcuracionCorneal);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    DatoProcuracionCornealComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.datoProcuracionCornealChange.emit(obj.datoProcuracionCorneal);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DatoProcuracionCornealComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarDatoProcuracionCorneal();
            }
        }
    };
    DatoProcuracionCornealComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DatoProcuracionCornealComponent.prototype, "minDateProcuracion", {
        get: function () {
            if (this.datoProcuracionCorneal.fechaInicio) {
                return new Date(this.datoProcuracionCorneal.fechaInicio);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatoProcuracionCornealComponent.prototype, "minHourProcuracion", {
        get: function () {
            if (this.datoProcuracionCorneal.fechaInicio && this.datoProcuracionCorneal.fechaFin && this.datoProcuracionCorneal.horaInicio) {
                if (this.datoProcuracionCorneal.fechaInicio === this.datoProcuracionCorneal.fechaFin) {
                    return new Date(this.datoProcuracionCorneal.horaInicio);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    DatoProcuracionCornealComponent.prototype.idCenatraChange = function () {
        (this.datoProcuracionCorneal.idcenatra);
        this.changeIdCenatra.emit(this.datoProcuracionCorneal.idcenatra);
        this.datoProcuracionCornealService.getDatoProcuracionCornealByIdcenatra(this.datoProcuracionCorneal.idcenatra, this.evtBuscarIdCenatra, this);
    };
    DatoProcuracionCornealComponent.prototype.evtBuscarIdCenatra = function (data, obj) {
        if (data.id) {
            (data.idcenatra);
            (obj.datoProcuracionCorneal.idcenatra);
            if (data.idcenatra == obj.datoProcuracionCorneal.idcenatra && data.id != obj.datoProcuracionCorneal.id) {
                bootbox.alert("El id cenatra ya existe.");
                obj.datoProcuracionCorneal.idcenatra = null;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "datoProcuracionCornealBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "validosDatoProcuracionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_dato_procuracion_corneal__WEBPACK_IMPORTED_MODULE_2__["DatoProcuracionCorneal"])
    ], DatoProcuracionCornealComponent.prototype, "datoProcuracionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_dato_procuracion_corneal_service__WEBPACK_IMPORTED_MODULE_0__["DatoProcuracionCornealService"])
    ], DatoProcuracionCornealComponent.prototype, "datoProcuracionCornealService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], DatoProcuracionCornealComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "datoProcuracionCornealChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "changeIdCenatra", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "lista_usuarioUltMovDatoProcuracionCornealUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], DatoProcuracionCornealComponent.prototype, "lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Date)
    ], DatoProcuracionCornealComponent.prototype, "minDate", void 0);
    DatoProcuracionCornealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dato-procuracion-corneal',
            template: __webpack_require__(/*! ./dato-procuracion-corneal.component.html */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal/dato-procuracion-corneal.component.html"),
            styles: [__webpack_require__(/*! ./dato-procuracion-corneal.component.css */ "./src/app/dato-procuracion-corneales/dato-procuracion-corneal/dato-procuracion-corneal.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DatoProcuracionCornealComponent);
    return DatoProcuracionCornealComponent;
}());



/***/ }),

/***/ "./src/app/dato-procuracion-corneales/shared/configurar-dato-procuracion-corneal.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/shared/configurar-dato-procuracion-corneal.ts ***!
  \******************************************************************************************/
/*! exports provided: ConfigurarDatoProcuracionCorneal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarDatoProcuracionCorneal", function() { return ConfigurarDatoProcuracionCorneal; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarDatoProcuracionCorneal = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarDatoProcuracionCorneal() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "datoProcuracionCorneal";
        this.rutaLista = this.crudServiceBaseUrl + "/getDatoProcuracionCorneales";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarDatoProcuracionCorneal";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarDatoProcuracionCorneal";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarDatoProcuracionCorneal";
        this.titulo = "Catálogo DatoProcuracionCorneal";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.datoProcuracionCornealConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarDatoProcuracionCorneal.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDatoProcuracionCorneal.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarDatoProcuracionCorneal.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDatoProcuracionCorneal.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarDatoProcuracionCorneal.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDatoProcuracionCorneal.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarDatoProcuracionCorneal;
}());



/***/ }),

/***/ "./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/dato-procuracion-corneales/shared/dato-procuracion-corneal.service.ts ***!
  \***************************************************************************************/
/*! exports provided: DatoProcuracionCornealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoProcuracionCornealService", function() { return DatoProcuracionCornealService; });
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


var DatoProcuracionCornealService = /** @class */ (function () {
    function DatoProcuracionCornealService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    DatoProcuracionCornealService.prototype.setDatoProcuracionCorneal = function (datoProcuracionCorneal) {
        this.datoProcuracionCorneal = datoProcuracionCorneal;
    };
    DatoProcuracionCornealService.prototype.getDatoProcuracionCorneal = function () {
        return this.datoProcuracionCorneal;
    };
    DatoProcuracionCornealService.prototype.guardarDatoProcuracionCorneal = function (datoProcuracionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(datoProcuracionCorneal, 'datoProcuracionCorneal/guardarDatoProcuracionCorneal')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.actualizarDatoProcuracionCorneal = function (datoProcuracionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(datoProcuracionCorneal, 'datoProcuracionCorneal/actualizarDatoProcuracionCorneal')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.eliminarDatoProcuracionCorneal = function (datoProcuracionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(datoProcuracionCorneal, 'datoProcuracionCorneal/eliminarDatoProcuracionCorneal')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealdb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'datoProcuracionCorneal/getDatoProcuracionCorneal')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCorneales = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'datoProcuracionCorneal/getDatoProcuracionCorneales')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'datoProcuracionCorneal/getDatoProcuracionCornealesActivos')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.lazyDatoProcuracionCorneal = function (datoProcuracionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(datoProcuracionCorneal, 'datoProcuracionCorneal/lazyDatoProcuracionCorneal')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'datoProcuracionCorneal/getDatoProcuracionCornealById')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'datoProcuracionCorneal/getDatoProcuracionCornealesById')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByHoraFin = function (horaFin, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaFin, 'datoProcuracionCorneal/getDatoProcuracionCornealByHoraFin')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByHoraFin = function (horaFin, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaFin, 'datoProcuracionCorneal/getDatoProcuracionCornealesByHoraFin')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByTipo = function (tipo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipo, 'datoProcuracionCorneal/getDatoProcuracionCornealByTipo')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByTipo = function (tipo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipo, 'datoProcuracionCorneal/getDatoProcuracionCornealesByTipo')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByFechaInicio = function (fechaInicio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaInicio, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaInicio')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByFechaInicio = function (fechaInicio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaInicio, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaInicio')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByIdcenatra = function (idcenatra, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idcenatra, 'datoProcuracionCorneal/getDatoProcuracionCornealByIdcenatra')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByIdcenatra = function (idcenatra, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idcenatra, 'datoProcuracionCorneal/getDatoProcuracionCornealesByIdcenatra')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByFechaFin = function (fechaFin, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaFin, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaFin')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByFechaFin = function (fechaFin, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaFin, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaFin')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByHoraInicio = function (horaInicio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaInicio, 'datoProcuracionCorneal/getDatoProcuracionCornealByHoraInicio')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByHoraInicio = function (horaInicio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaInicio, 'datoProcuracionCorneal/getDatoProcuracionCornealesByHoraInicio')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'datoProcuracionCorneal/getDatoProcuracionCornealByStatus')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'datoProcuracionCorneal/getDatoProcuracionCornealesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'datoProcuracionCorneal/getDatoProcuracionCornealByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'datoProcuracionCorneal/getDatoProcuracionCornealesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealByIdsolicitudEvaluacionCorneal = function (idsolicitudEvaluacionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'datoProcuracionCorneal/getDatoProcuracionCornealByIdsolicitudEvaluacionCorneal')
            .subscribe(function (data) {
            _evento(_this.datoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.datoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByIdsolicitudEvaluacionCorneal = function (idsolicitudEvaluacionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'datoProcuracionCorneal/getDatoProcuracionCornealesByIdsolicitudEvaluacionCorneal')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'datoProcuracionCorneal/custom')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService.prototype.getDatoProcuracionCornealesByDto = function (p_datoProcuracionCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_datoProcuracionCorneal, 'datoProcuracionCorneal/getDatoProcuracionCornealesByDto')
            .subscribe(function (data) {
            _evento(_this.listaDatoProcuracionCorneal = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDatoProcuracionCorneal);
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
    DatoProcuracionCornealService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], DatoProcuracionCornealService);
    return DatoProcuracionCornealService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-dato-procuracion-corneales-dato-procuracion-corneal-module~app-registro-extracciones-reg~61bd7cb1.js.map