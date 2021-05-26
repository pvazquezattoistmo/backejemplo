(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-registro-extracciones-registro-extraccion-module"],{

/***/ "./src/app/registro-extracciones/registro-extraccion-conjunto/registro-extraccion-conjunto.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-conjunto/registro-extraccion-conjunto.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-conjunto/registro-extraccion-conjunto.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-conjunto/registro-extraccion-conjunto.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let registroExtraccion of listaRegistroExtraccion \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+registroExtraccion.id}\"\n        (click)=\"elegir(registroExtraccion,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{registroExtraccion.id}}\">{{registroExtraccion.id}}</a>\n    </li>\n    <li *ngFor =  \"let registroExtraccion of listaRegistroExtraccionN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+registroExtraccion.id}\"\n        (click)=\"elegir(registroExtraccion, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{registroExtraccion.id}}\">T-{{registroExtraccion.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let registroExtraccion of listaRegistroExtraccion ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+registroExtraccion.id}\" id=\"tab-I-{{registroExtraccion.id}}\">\n\t\t\t<app-registro-extraccion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [registroExtraccionBuscar]=\"registroExtraccionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosRegistroExtraccion]=\"validosRegistroExtraccion\"  \n\t\t\t\t\t\t  [registroExtraccionService]=\"registroExtraccionService\" [(opcion)]=\"opcionRegistroExtraccion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(registroExtraccion)]=\"listaRegistroExtraccion[i]\"  [ocultarConjuntos]=\"ocultarConjuntosRegistroExtraccion\"\n                           [lista_usuarioUltMovRegistroExtraccionUsuario]=\"lista_usuarioUltMovRegistroExtraccionUsuario\" \n                           [lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal]=\"lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-registro-extraccion>\n        </div>\n        <div *ngFor = \"let registroExtraccion of listaRegistroExtraccionN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+registroExtraccion.id}\" id=\"tab-N-{{registroExtraccion.id}}\">\n\t\t\t<app-registro-extraccion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [registroExtraccionBuscar]=\"registroExtraccionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosRegistroExtraccion]=\"validosRegistroExtraccion\"  \n\t\t\t\t\t\t  [registroExtraccionService]=\"registroExtraccionService\" [(opcion)]=\"opcionRegistroExtraccion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(registroExtraccion)]=\"listaRegistroExtraccionN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosRegistroExtraccion\"\n                           [lista_usuarioUltMovRegistroExtraccionUsuario]=\"lista_usuarioUltMovRegistroExtraccionUsuario\" \n                           [lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal]=\"lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal\" \n\n\t\t\t\t\t  >\n\t\t\t</app-registro-extraccion>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-conjunto/registro-extraccion-conjunto.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-conjunto/registro-extraccion-conjunto.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: RegistroExtraccionConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroExtraccionConjuntoComponent", function() { return RegistroExtraccionConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/registro-extraccion */ "./src/app/registro-extracciones/shared/registro-extraccion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistroExtraccionConjuntoComponent = /** @class */ (function () {
    function RegistroExtraccionConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovRegistroExtraccionUsuarioEditar = false;
        this.idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEditar = false;
        this.listaRegistroExtraccionN = [];
        this.listaRegistroExtraccion = [];
        this.listaRegistroExtraccionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.registroExtraccionN = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_1__["RegistroExtraccion"]();
        this.registroExtraccionNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    RegistroExtraccionConjuntoComponent.prototype.elegir = function (registroExtraccion, tipo) {
        this.idSeleccionado = tipo + "-" + registroExtraccion.id;
        this.registroExtraccionN = registroExtraccion;
    };
    RegistroExtraccionConjuntoComponent.prototype.ngOnInit = function () {
        this.registroExtraccionN.id = 0;
        this.listaRegistroExtraccionN.push(Object.assign({}, this.registroExtraccionN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    RegistroExtraccionConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_1__["RegistroExtraccion"]();
        pg.id = this.listaRegistroExtraccionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaRegistroExtraccionN.push(pg);
    };
    RegistroExtraccionConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaRegistroExtraccion; _i < _a.length; _i++) {
            var registroExtraccion = _a[_i];
            this.registroExtraccionService.actualizarRegistroExtraccion(registroExtraccion, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaRegistroExtraccionN; _b < _c.length; _b++) {
            var registroExtraccion = _c[_b];
            registroExtraccion.id = null;
            this.registroExtraccionService.guardarRegistroExtraccion(registroExtraccion, this.evtGuardar, this);
        }
    };
    RegistroExtraccionConjuntoComponent.prototype.evtGuardar = function (registroExtraccion, obj) {
        obj.agregados++;
        obj.listaRegistroExtraccion.push(registroExtraccion);
        if (obj.agregados >= obj.listaRegistroExtraccionN.length) {
            obj.registroExtraccionN = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_1__["RegistroExtraccion"]();
            obj.listaRegistroExtraccionN = [];
            obj.registroExtraccionN.id = 0;
            obj.idSeleccionado = "N-" + obj.registroExtraccionN.id;
            obj.listaRegistroExtraccionN.push(Object.assign({}, obj.registroExtraccionN));
            obj.listaRegistroExtraccionChange.emit(obj.listaRegistroExtraccion);
        }
        if (obj.agregados >= obj.listaRegistroExtraccionN.length &&
            obj.actualizados >= obj.listaRegistroExtraccion.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    RegistroExtraccionConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaRegistroExtraccionN.length &&
                obj.actualizados >= obj.listaRegistroExtraccion.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    RegistroExtraccionConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], RegistroExtraccionConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "registroExtraccionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "validosRegistroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "ocultarConjuntosRegistroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "registroExtraccionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RegistroExtraccionConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "lista_usuarioUltMovRegistroExtraccionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RegistroExtraccionConjuntoComponent.prototype, "listaRegistroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "listaRegistroExtraccionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_1__["RegistroExtraccion"])
    ], RegistroExtraccionConjuntoComponent.prototype, "registroExtraccionN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionConjuntoComponent.prototype, "registroExtraccionNChange", void 0);
    RegistroExtraccionConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro-extraccion-conjunto',
            template: __webpack_require__(/*! ./registro-extraccion-conjunto.component.html */ "./src/app/registro-extracciones/registro-extraccion-conjunto/registro-extraccion-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./registro-extraccion-conjunto.component.css */ "./src/app/registro-extracciones/registro-extraccion-conjunto/registro-extraccion-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], RegistroExtraccionConjuntoComponent);
    return RegistroExtraccionConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <!-- <div class=\"panel-footer\" style=\"text-align: right\"> -->\n        <!-- <div style=\"display: inline-block;width: 90%; margin-right: 10%;\"> -->\n            <!-- <button type=\"button\" class=\"btn btn-guardar\" (click)=\"limpiarCampos()\">\n            <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n          </button> -->\n            <!-- <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudEvaluacionCornealBuscar\" (click)=\"buscarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n                              <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudEvaluacionCornealAgregar\" (click)=\"nuevoSolicitudEvaluacionCornealFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n                              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealActualizar\" (click)=\"actualizarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n                              <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudEvaluacionCornealEliminar\" (click)=\"eliminarSolicitudEvaluacionCornealFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n                              <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealGuardar\" (click)=\"guardarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n                              <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudEvaluacionCornealCancelar\" (click)=\"cancelarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n                              <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n                              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealWord\" (click)=\"reporteSolicitudEvaluacionCornealWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n                              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealExcel\" (click)=\"reporteSolicitudEvaluacionCornealExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n                              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealPdf\" (click)=\"reporteSolicitudEvaluacionCornealPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n                            -->\n        <!-- </div> -->\n    <!-- </div> -->\n    <app-registro-extraccion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"'REGISTRO DE DATOS DE LA EXTRACCIÓN'\" [registroExtraccionBuscar]=\"registroExtraccionBuscar\" [permisosAtributos]=\"permisosAtributos\" [permisosConjuntos]=\"permisosConjuntos\"\n        [validosRegistroExtraccion]=\"validosRegistroExtraccion\" [registroExtraccionService]=\"registroExtraccion_service\" [(opcion)]=\"opcionRegistroExtraccion\" [globalesService]=\"globalesService\" [(registroExtraccion)]=\"registroExtraccion\" [ocultarConjuntos]=\"ocultarConjuntosRegistroExtraccion\"\n        [lista_usuarioUltMovRegistroExtraccionUsuario]=\"\n      lista_usuarioUltMovRegistroExtraccionUsuario\n    \" [lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal]=\"\n      lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal\n    \" [(solicitudEvaluacionCorneal)]=\"solicitudEvaluacionCorneal\" [listaEquipoExtractor]=\"listaEquipoExtractor\" [listaCoordinadorExtraccion]=\"listaCoordinadorExtraccion\" [datoCorneaExtraccionCI]=\"datoCorneaExtraccionCI\" [datoCorneaExtraccionCD]=\"datoCorneaExtraccionCD\"\n        [esRequerido]=\"esRequerido\" [enableDerecha]=\"enableDerecha\" [enableIzquierda]=\"enableIzquierda\">\n    </app-registro-extraccion>\n\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n            <!-- <button\n        style=\"margin-right: 10px;\"\n        type=\"button\"\n        class=\"btn btn-guardar\"\n        [disabled]=\"!validaTodosc\"\n        (click)=\"guardarSolicitudEvaluacionCornealFront(formaGeneral)\"\n      >\n        <span class=\"fa fa-floppy-disk\"></span>Imprimir\n      </button> -->\n      <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-primary  btn-guardar\"  [disabled]=\"solicitudEvaluacionCorneal.folioSolicitud == null || recepcionSolicitudEvaluacion?.id \" (click)=\"doSave()\">\n          <!--[disabled]=\"recepcionSolicitudEvaluacion?.id != null && || !listoEnviar\"-->\n            <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n          </button>\n            <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-guardar\" [routerLink]=\"['/solicitud-evaluacion-corneal-crud/', solicitudEvaluacionCorneal?.id]\">\n        <span class=\"fa fa-floppy-disk\"></span>Atrás\n      </button>\n            <button type=\"button\" class=\"btn btn-success btn-guardar\" [disabled]=\"solicitudEvaluacionCorneal.folioSolicitud == null || recepcionSolicitudEvaluacion?.id || registroExtraccion.id == null\" (click)=\"doEnviar()\">\n      <span class=\"fa fa-floppy-disk\"></span>Enviar\n    </button>\n            <!-- <button\n        type=\"button\"\n        class=\"btn btn-primary btn-guardar\"\n        [disabled]=\"!validaTodosc\"\n        (click)=\"guardarSolicitudEvaluacionCornealFront(formaGeneral)\"\n      >\n        <span class=\"fa fa-floppy-disk\"></span>Enviar\n      </button> -->\n            <!-- <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudEvaluacionCornealBuscar\" (click)=\"buscarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n              <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudEvaluacionCornealAgregar\" (click)=\"nuevoSolicitudEvaluacionCornealFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealActualizar\" (click)=\"actualizarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n              <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudEvaluacionCornealEliminar\" (click)=\"eliminarSolicitudEvaluacionCornealFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n              <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealGuardar\" (click)=\"guardarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n              <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudEvaluacionCornealCancelar\" (click)=\"cancelarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n              <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealWord\" (click)=\"reporteSolicitudEvaluacionCornealWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealExcel\" (click)=\"reporteSolicitudEvaluacionCornealExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealPdf\" (click)=\"reporteSolicitudEvaluacionCornealPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n            -->\n        </div>\n    </div>\n</div>\n<!-- <div\n  class=\"modal fade\"\n  id=\"buscarRegistroExtraccion_{{ nombre }}\"\n  role=\"dialog\"\n>\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-registro-extraccion-list-kendo\n          [nombregrid]=\"'buscar_' + nombre\"\n          [configuracionRegistroExtraccion]=\"configuracionRegistroExtraccion\"\n          (registroExtraccionSeleccionado)=\"\n            evtRegistroExtraccionSeleccionado($event)\n          \"\n        >\n        </app-registro-extraccion-list-kendo>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div> -->\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RegistroExtraccionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroExtraccionCrudComponent", function() { return RegistroExtraccionCrudComponent; });
/* harmony import */ var _coordinador_extracciones_shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../coordinador-extracciones/shared/coordinador-extraccion */ "./src/app/coordinador-extracciones/shared/coordinador-extraccion.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/registro-extraccion */ "./src/app/registro-extracciones/shared/registro-extraccion.ts");
/* harmony import */ var _shared_registro_extraccion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/registro-extraccion.service */ "./src/app/registro-extracciones/shared/registro-extraccion.service.ts");
/* harmony import */ var _shared_configurar_registro_extraccion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/configurar-registro-extraccion */ "./src/app/registro-extracciones/shared/configurar-registro-extraccion.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
/* harmony import */ var _equipo_extracciones_shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../equipo-extracciones/shared/equipo-extraccion */ "./src/app/equipo-extracciones/shared/equipo-extraccion.ts");
/* harmony import */ var _dato_cornea_extracciones_shared_dato_cornea_extraccion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../dato-cornea-extracciones/shared/dato-cornea-extraccion */ "./src/app/dato-cornea-extracciones/shared/dato-cornea-extraccion.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
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


















var RegistroExtraccionCrudComponent = /** @class */ (function () {
    function RegistroExtraccionCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    registroExtraccion_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, hospital_service, entidadFederativa_service, perfil_service, solicitudEvaluacionCorneal_service, causaMuerte_service, activatedRoute, recepcionSolicitudEvaluacionService) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.registroExtraccion_service = registroExtraccion_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.activatedRoute = activatedRoute;
        this.recepcionSolicitudEvaluacionService = recepcionSolicitudEvaluacionService;
        this.opcionRegistroExtraccion = 0;
        this.validosRegistroExtraccion = {
            id: false,
            fechaBaja: false,
            fechaRegistro: false,
            tipoDonanteMultiorganico: false,
            panelViral: false,
            fechaActualizacion: false,
            telefonoContacto: false,
            observacion: true,
            status: false,
            usuarioUltMov: false,
            idsolicitudEvaluacionCorneal: false
        };
        this.ocultarConjuntosRegistroExtraccion = false;
        this.nombre = "";
        this.permisosTabla = {
            tabla: "registroExtraccion",
            permiso: 0,
            etiqueta: ""
        };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.registroExtraccionLazy = false;
        this.registroExtraccionPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.registroExtraccion = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
        this.registroExtraccionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.registroExtraccionTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lista_registroExtracciones = [];
        this.usuarioUltMovRegistroExtraccionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_9__["Usuario"]();
        this.lista_usuarioUltMovRegistroExtraccionUsuario = [];
        this.usuarioUltMovRegistroExtraccionUsuarioEditar = false;
        this.idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCorneal"]();
        this.lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal = [];
        this.idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEditar = false;
        this.solicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCorneal"]();
        this.listaEquipoExtractor = [];
        this.listaCoordinadorExtraccion = [];
        this.datoCorneaExtraccionCI = new _dato_cornea_extracciones_shared_dato_cornea_extraccion__WEBPACK_IMPORTED_MODULE_20__["DatoCorneaExtraccion"]();
        this.datoCorneaExtraccionCD = new _dato_cornea_extracciones_shared_dato_cornea_extraccion__WEBPACK_IMPORTED_MODULE_20__["DatoCorneaExtraccion"]();
        this.listoEnviar = false;
        this.enableIzquierda = true;
        this.enableDerecha = true;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.registroExtraccionSeleccion = this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
        this.configuracionRegistroExtraccion = new _shared_configurar_registro_extraccion__WEBPACK_IMPORTED_MODULE_8__["ConfigurarRegistroExtraccion"]();
        /*     this.usuario_service.getUsuariosActivos(
          this.evtGetUsuarioUltMovRegistroExtraccionUsuario,
          this
        );
        this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(
          this
            .evtGetIdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal,
          this
        ); */
        this.limpiarCampos();
    }
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "registroExtraccionOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosRegistroExtraccion)
                return true;
            return !this.registroExtraccionActualizar;
        },
        enumerable: true,
        configurable: true
    });
    RegistroExtraccionCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.registroExtraccion &&
            changes.registroExtraccion.currentValue == null &&
            this.registroExtraccion == null)
            this.registroExtraccion = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
        else {
            var aux = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
            if (this.registroExtraccion)
                aux.from(this.registroExtraccion);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionSeleccion = this.registroExtraccionGuardar = false;
                this.registroExtraccionActualizar = this.registroExtraccionEliminar = this.registroExtraccionCancelar = true;
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
                this.registroExtraccionSeleccion = this.registroExtraccionAgregar = this.registroExtraccionBuscar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
                this.registroExtraccionGuardar = this.registroExtraccionCancelar = true;
            }
        }
    };
    RegistroExtraccionCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "registroExtraccion",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "solicitudEvaluacionCorneal",
            "causaMuerte"
        ];
        var parametros = {
            id_usu: this.usuariologueado.id,
            tablas: tablas,
            id_exp: id_expe
        };
        this.registroExtraccionPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    RegistroExtraccionCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.registroExtraccionPermisos = true;
        if (permisos &&
            permisos.registroExtraccion &&
            permisos.registroExtraccion.PermisoAtributo &&
            permisos.registroExtraccion.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.registroExtraccion.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos &&
            permisos.registroExtraccion &&
            permisos.registroExtraccion.PermisoConjunto &&
            permisos.registroExtraccion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.registroExtraccion.PermisoConjunto;
        }
        if (permisos &&
            permisos.registroExtraccion &&
            permisos.registroExtraccion.PermisoTabla &&
            permisos.registroExtraccion.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.registroExtraccion.PermisoTabla[0];
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
            permisos.solicitudEvaluacionCorneal &&
            permisos.solicitudEvaluacionCorneal.PermisoAtributo &&
            permisos.solicitudEvaluacionCorneal.PermisoAtributo.length > 0) {
            //obj.configuracion$1=
            permisos.solicitudEvaluacionCorneal.PermisoAtributo;
            obj.permisosAtributos.push(permisos.solicitudEvaluacionCorneal.PermisoAtributo);
        }
        if (permisos &&
            permisos.solicitudEvaluacionCorneal &&
            permisos.solicitudEvaluacionCorneal.PermisoAtributo &&
            permisos.solicitudEvaluacionCorneal.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.solicitudEvaluacionCorneal.PermisoConjunto);
        }
        if (permisos &&
            permisos.solicitudEvaluacionCorneal &&
            permisos.solicitudEvaluacionCorneal.PermisoTabla &&
            permisos.solicitudEvaluacionCorneal.PermisoTabla.length > 0) {
            //obj.configuracion$1=
            permisos.solicitudEvaluacionCorneal.PermisoTabla[0];
            // obj.permisosTabla.push(
            //   permisos.solicitudEvaluacionCorneal.PermisoTabla[0]
            // );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    RegistroExtraccionCrudComponent.prototype.evtGetUsuarioUltMovRegistroExtraccionUsuario = function (lista_usuarioUltMovRegistroExtraccionUsuario, obj) {
        obj.lista_usuarioUltMovRegistroExtraccionUsuario = lista_usuarioUltMovRegistroExtraccionUsuario;
        obj.actualizar_UsuarioUltMovRegistroExtraccionUsuario();
    };
    RegistroExtraccionCrudComponent.prototype.evtGetIdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal = function (lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal, obj) {
        obj.lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal = lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal;
        obj.actualizar_IdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal();
    };
    RegistroExtraccionCrudComponent.prototype.actualizar_UsuarioUltMovRegistroExtraccionUsuario = function () {
        if (this.usuarioUltMovRegistroExtraccionUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovRegistroExtraccionUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovRegistroExtraccionUsuarioEleccion.id) {
                    this.usuarioUltMovRegistroExtraccionUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    RegistroExtraccionCrudComponent.prototype.actualizar_IdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal = function () {
        if (this
            .idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion)
            for (var _i = 0, _a = this
                .lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id ==
                    this
                        .idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion
                        .id) {
                    this.idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion = eleme;
                    break;
                }
            }
    };
    RegistroExtraccionCrudComponent.prototype.ngDoCheck = function () { };
    RegistroExtraccionCrudComponent.prototype.validaAcciones = function (vall) {
        return (this.accion == 0 ||
            this.accion == 1 ||
            this.accion == 4 ||
            this.accion == 6 ||
            (this.accion == 7 && vall) ||
            (this.accion == 2 && vall) ||
            (this.accion == 3 && vall) ||
            (this.accion == 5 && vall));
    };
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosRegistroExtraccion["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosRegistroExtraccion["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosRegistroExtraccion["fechaBaja"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosRegistroExtraccion["fechaRegistro"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaTipoDonanteMultiorganico", {
        get: function () {
            return this.validosRegistroExtraccion["tipoDonanteMultiorganico"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaPanelViral", {
        get: function () {
            return this.validosRegistroExtraccion["panelViral"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosRegistroExtraccion["fechaActualizacion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaTelefonoContacto", {
        get: function () {
            return this.validosRegistroExtraccion["telefonoContacto"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaObservacion", {
        get: function () {
            return this.validosRegistroExtraccion["observacion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosRegistroExtraccion["status"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosRegistroExtraccion["usuarioUltMov"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaIdsolicitudEvaluacionCorneal", {
        get: function () {
            return this.validosRegistroExtraccion["idsolicitudEvaluacionCorneal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId &&
                this.validaFechaBaja &&
                this.validaFechaRegistro &&
                this.validaTipoDonanteMultiorganico &&
                this.validaPanelViral &&
                this.validaFechaActualizacion &&
                this.validaTelefonoContacto &&
                this.validaObservacion &&
                this.validaStatus &&
                this.validaUsuarioUltMov &&
                this.validaIdsolicitudEvaluacionCorneal;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    RegistroExtraccionCrudComponent.prototype.obtenerRegistroExtracciones = function (lista, objeto) {
        objeto.lista_registroExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.registroExtraccion.from(lista[0]);
            objeto.evtRegistroExtraccionSeleccionado(objeto.registroExtraccion);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    RegistroExtraccionCrudComponent.prototype.evn_lazy_registroExtraccion = function (registroExtraccion, objeto) {
        objeto.listaCoordinadorExtraccion =
            registroExtraccion.coordinadorExtraccion;
        objeto.listaEquipoExtractor = registroExtraccion.equipoExtraccion;
        var datosCorneas = registroExtraccion.datoCorneaExtraccion;
        datosCorneas.forEach(function (element) {
            if (element.tipoCornea === 1) {
                objeto.datoCorneaExtraccionCI = element;
            }
            if (element.tipoCornea === 2) {
                objeto.datoCorneaExtraccionCD = element;
            }
        });
        objeto.registroExtraccion = registroExtraccion;
        objeto.registroExtraccionChange.emit(objeto.registroExtraccion);
        objeto.configuarCombosObjetos();
        objeto.registroExtraccionLazy = true;
        if (objeto.solicitudEvaluacionCorneal.idcausaMuerte.tipoCausaMuerte === 1) {
            objeto.registroExtraccion.tipoDonanteMultiorganico = 0;
        }
        else {
            objeto.registroExtraccion.tipoDonanteMultiorganico = 1;
        }
    };
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "datosReporteRegistroExtraccionWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.registroExtraccionActualizar &&
                this.registroExtraccionLazy &&
                this.globalesService.preporteWord(this, "registroExtraccion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "datosReporteRegistroExtraccionExcel", {
        get: function () {
            return !(this.registroExtraccionActualizar &&
                this.registroExtraccionLazy &&
                this.globalesService.preporteExcel(this, "registroExtraccion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroExtraccionCrudComponent.prototype, "datosReporteRegistroExtraccionPdf", {
        get: function () {
            return !(this.registroExtraccionActualizar &&
                this.registroExtraccionLazy &&
                this.globalesService.preportePdf(this, "registroExtraccion"));
        },
        enumerable: true,
        configurable: true
    });
    RegistroExtraccionCrudComponent.prototype.reporteRegistroExtraccionExcel = function (form) {
        var nombre = "RegistroExtraccion.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { registroExtraccion: this.registroExtraccion };
        parametros["plantilla"] = "RegistroExtraccion.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    RegistroExtraccionCrudComponent.prototype.reporteRegistroExtraccionWord = function (form) {
        var nombre = "RegistroExtraccion.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { registroExtraccion: this.registroExtraccion };
        parametros["plantilla"] = "RegistroExtraccion.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    RegistroExtraccionCrudComponent.prototype.reporteRegistroExtraccionPdf = function (form) {
        var nombre = "RegistroExtraccion.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { registroExtraccion: this.registroExtraccion };
        parametros["plantilla"] = "RegistroExtraccion.docx";
        parametros["salida"] = "RegistroExtraccion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    RegistroExtraccionCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
        this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionCancelar = true;
    };
    RegistroExtraccionCrudComponent.prototype.buscarRegistroExtraccionFront = function (form) {
        this.accionesBuscar();
        var vregistroExtraccion = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
        vregistroExtraccion.from(this.registroExtraccion);
        this.configuracionRegistroExtraccion = new _shared_configurar_registro_extraccion__WEBPACK_IMPORTED_MODULE_8__["ConfigurarRegistroExtraccion"]();
        this.configuracionRegistroExtraccion.permisosTabla = {
            tabla: "registroExtraccion",
            permiso: 8
        };
        this.configuracionRegistroExtraccion.titulo =
            "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionRegistroExtraccion.registroExtraccionConsulta = vregistroExtraccion;
        this.permisosacciones();
        $("#buscarRegistroExtraccion_" + this.nombre).modal();
    };
    RegistroExtraccionCrudComponent.prototype.buscarRegistroExtraccionBack = function (registroExtraccion) {
        this.registroExtraccion_service.getRegistroExtraccionesByDto(registroExtraccion, this.eventoSrvRegistroExtraccionBuscar, this);
    };
    RegistroExtraccionCrudComponent.prototype.eventoSrvRegistroExtraccionBuscar = function (lista, objeto) {
        objeto.lista_registroExtracciones = lista;
        if (lista && lista.length > 0) {
            objeto.registroExtraccion = lista[0];
            objeto.registroExtraccionLazy = false;
            objeto.registroExtraccion_service.lazyRegistroExtraccion(objeto.registroExtraccion, objeto.evn_lazy_registroExtraccion, objeto);
        }
    };
    RegistroExtraccionCrudComponent.prototype.guardarRegistroExtraccionFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarRegistroExtraccionBack(this.registroExtraccion);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    RegistroExtraccionCrudComponent.prototype.guardarRegistroExtraccionBack = function (registroExtraccion) {
        if (registroExtraccion.usuarioUltMov == null)
            registroExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        if (registroExtraccion.status == null || registroExtraccion.status == "")
            registroExtraccion.status = "1";
        this.registroExtraccion_service.guardarRegistroExtraccion(registroExtraccion, this.eventoSrvRegistroExtraccionGuardar, this);
    };
    RegistroExtraccionCrudComponent.prototype.eventoSrvRegistroExtraccionGuardar = function (registroExtraccion, obj) {
        obj.registroExtraccion = registroExtraccion;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
        aux.from(registroExtraccion);
        obj.registroExtraccionChange.emit(aux);
        obj.registroExtraccionTablaChange.emit(aux);
        obj.registroExtraccionLazy = false;
        obj.registroExtraccion_service.lazyRegistroExtraccion(obj.registroExtraccion, obj.evn_lazy_registroExtraccion, obj);
        obj.accionesActualizar();
    };
    RegistroExtraccionCrudComponent.prototype.actualizarRegistroExtraccionFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarRegistroExtraccionBack(this.registroExtraccion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    RegistroExtraccionCrudComponent.prototype.actualizarRegistroExtraccionBack = function (registroExtraccion) {
        registroExtraccion = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"](registroExtraccion);
        registroExtraccion.idsolicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCorneal"](registroExtraccion.idsolicitudEvaluacionCorneal);
        // auxSolev.id=registroExtraccion.idsolicitudEvaluacionCorneal.id;
        if (registroExtraccion.coordinadorExtraccion !== null) {
            for (var index = 0; index < registroExtraccion.coordinadorExtraccion.length; index++) {
                registroExtraccion.coordinadorExtraccion[index] = new _coordinador_extracciones_shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_0__["CoordinadorExtraccion"](registroExtraccion.coordinadorExtraccion[index]);
            }
        }
        if (registroExtraccion.equipoExtraccion !== null) {
            for (var index = 0; index < registroExtraccion.equipoExtraccion.length; index++) {
                registroExtraccion.equipoExtraccion[index] = new _equipo_extracciones_shared_equipo_extraccion__WEBPACK_IMPORTED_MODULE_19__["EquipoExtraccion"](registroExtraccion.equipoExtraccion[index]);
            }
        }
        if (registroExtraccion.datoCorneaExtraccion !== null) {
            for (var index = 0; index < registroExtraccion.datoCorneaExtraccion.length; index++) {
                registroExtraccion.datoCorneaExtraccion[index] = new _dato_cornea_extracciones_shared_dato_cornea_extraccion__WEBPACK_IMPORTED_MODULE_20__["DatoCorneaExtraccion"](registroExtraccion.datoCorneaExtraccion[index]);
            }
        }
        if (registroExtraccion.coordinadorExtraccion !== null) {
            for (var index = 0; index < registroExtraccion.coordinadorExtraccion.length; index++) {
                registroExtraccion.coordinadorExtraccion[index] = new _coordinador_extracciones_shared_coordinador_extraccion__WEBPACK_IMPORTED_MODULE_0__["CoordinadorExtraccion"](registroExtraccion.coordinadorExtraccion[index]);
            }
        }
        registroExtraccion.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_9__["Usuario"](this.globalesService.dameUsuario());
        this.registroExtraccion_service.actualizarRegistroExtraccion(registroExtraccion, this.eventoSrvRegistroExtraccionActualizar, this);
    };
    RegistroExtraccionCrudComponent.prototype.eventoSrvRegistroExtraccionActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.registroExtraccionLazy = false;
            obj.registroExtraccion_service.lazyRegistroExtraccion(obj.registroExtraccion, obj.evn_lazy_registroExtraccion, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.registroExtraccion);
            obj.registroExtraccionChange.emit(aux);
            obj.registroExtraccionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    RegistroExtraccionCrudComponent.prototype.eliminarRegistroExtraccionFront = function (form) {
        this.accion = 4;
        this.eliminarRegistroExtraccionBack(this.registroExtraccion);
        this.permisosacciones();
        this.accionesBuscar();
    };
    RegistroExtraccionCrudComponent.prototype.eliminarRegistroExtraccionBack = function (registroExtraccion) {
        registroExtraccion.usuarioUltMov = this.globalesService.dameUsuario();
        this.registroExtraccion_service.eliminarRegistroExtraccion(registroExtraccion, this.eventoSrvRegistroExtraccionEliminar, this);
    };
    RegistroExtraccionCrudComponent.prototype.eventoSrvRegistroExtraccionEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.registroExtraccion = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
            obj.registroExtraccionChange.emit(obj.registroExtraccion);
            obj.registroExtraccionTablaChange.emit(obj.registroExtraccion);
            obj.limpiarCampos();
        }
    };
    RegistroExtraccionCrudComponent.prototype.cancelarRegistroExtraccionFront = function (form) {
        this.accion = 6;
        this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
        this.registroExtraccionBuscar = this.registroExtraccionAgregar = true;
        this.permisosacciones();
    };
    RegistroExtraccionCrudComponent.prototype.nuevoRegistroExtraccionFront = function (form) {
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
                this.registroExtraccionSeleccion = this.registroExtraccionAgregar = this.registroExtraccionBuscar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false;
                this.registroExtraccionGuardar = this.registroExtraccionCancelar = true;
            }.bind(this)
        });
    };
    RegistroExtraccionCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovRegistroExtraccionUsuario = [];
        /*     this.usuario_service.getUsuariosActivos(
          this.evtGetUsuarioUltMovRegistroExtraccionUsuario,
          this
        );
        this.lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal = [];
        this.solicitudEvaluacionCorneal_service.getSolicitudEvaluacionCornealesActivos(
          this
            .evtGetIdsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal,
          this
        ); */
    };
    RegistroExtraccionCrudComponent.prototype.configurarTablasConjuntos = function () { };
    RegistroExtraccionCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionSeleccion = this.registroExtraccionGuardar = false;
        this.registroExtraccionActualizar = this.registroExtraccionEliminar = this.registroExtraccionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    RegistroExtraccionCrudComponent.prototype.evtRegistroExtraccionSeleccionado = function (registroExtraccion) {
        this.registroExtraccion = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
        this.registroExtraccion.from(registroExtraccion);
        this.registroExtraccionLazy = false;
        this.registroExtraccion_service.lazyRegistroExtraccion(this.registroExtraccion, this.evn_lazy_registroExtraccion, this);
        this.accion = 7;
        this.registroExtraccionBuscar = this.registroExtraccionAgregar = this.registroExtraccionSeleccion = this.registroExtraccionGuardar = false;
        this.registroExtraccionActualizar = this.registroExtraccionEliminar = this.registroExtraccionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarRegistroExtraccion_" + this.nombre).modal("hide");
    };
    RegistroExtraccionCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accion = 0; // *********************************************************************************************************** maquina
        this.registroExtraccionSeleccion = this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false; // ******************** maquina
        this.registroExtraccionBuscar = this.registroExtraccionAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
        var id = this.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            setTimeout(function () {
                _this.globalesService.registraIdRegistroExtracion(id);
                _this.globalesService.registraIdSolicitudEvaluacion(id);
            });
            this.solicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCorneal"]();
            this.solicitudEvaluacionCorneal.id = id;
            this.solicitudEvaluacionCorneal_service.lazySolicitudEvaluacionCorneal(this.solicitudEvaluacionCorneal, this.evn_lazy_solicitudEvaluacionCorneal, this);
        }
    };
    RegistroExtraccionCrudComponent.prototype.permisosacciones = function () {
        if (this.registroExtraccionBuscar)
            this.registroExtraccionBuscar = this.globalesService.pbuscar(this, "registroExtraccion");
        if (this.registroExtraccionActualizar)
            this.registroExtraccionActualizar =
                this.globalesService.pacutalizar(this, "registroExtraccion") &&
                    this.globalesService.pbuscar(this, "registroExtraccion");
        if (this.registroExtraccionEliminar)
            this.registroExtraccionEliminar =
                this.globalesService.peliminar(this, "registroExtraccion") &&
                    this.globalesService.pbuscar(this, "registroExtraccion");
        if (this.registroExtraccionAgregar)
            this.registroExtraccionAgregar = this.globalesService.pagregar(this, "registroExtraccion");
    };
    RegistroExtraccionCrudComponent.prototype.permisosaccionesInicio = function () {
        this.registroExtraccionSeleccion = this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false; // *************************** maquina
        this.registroExtraccionBuscar = this.registroExtraccionAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    RegistroExtraccionCrudComponent.prototype.limpiarCampos = function () {
        this.registroExtraccion = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
        this.usuarioUltMovRegistroExtraccionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_9__["Usuario"]();
        this.idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEleccion = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCorneal"]();
        this.registroExtraccionChange.emit(this.registroExtraccion);
        this.registroExtraccionSeleccion = this.registroExtraccionCancelar = this.registroExtraccionGuardar = this.registroExtraccionActualizar = this.registroExtraccionEliminar = false; // *************************** maquina
        this.registroExtraccionBuscar = this.registroExtraccionAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    RegistroExtraccionCrudComponent.prototype.evn_lazy_solicitudEvaluacionCorneal = function (solicitudEvaluacionCorneal, objeto) {
        objeto.solicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCorneal"](solicitudEvaluacionCorneal);
        objeto.enableIzquierda = null;
        objeto.enableDerecha = null;
        objeto.solicitudEvaluacionCorneal.datosProcuracionCorneal.forEach(function (element) {
            if (element.tipo === 1) {
                objeto.enableIzquierda = true;
            }
            if (element.tipo === 2) {
                objeto.enableDerecha = true;
            }
        });
        var parSolicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCorneal"](solicitudEvaluacionCorneal);
        //    parSolicitudEvaluacionCorneal.id = objeto.solicitudEvaluacionCorneal.id ;
        //parSolicitudEvaluacionCorneal.from(objeto.solicitudEvaluacionCorneal);
        objeto.recepcionSolicitudEvaluacionService.getRecepcionSolicitudEvaluacionByIdsolicitudEvaluacionCorneal(parSolicitudEvaluacionCorneal, objeto.evn_buscarRecepcion, objeto);
        objeto.registroExtraccion_service.getRegistroExtraccionByIdsolicitudEvaluacionCorneal(parSolicitudEvaluacionCorneal, objeto.evn_lazy_registroExtraccion, objeto);
        // objeto.solicitudEvaluacionCornealChange.emit(
        //   objeto.solicitudEvaluacionCorneal
        // );
        // objeto.configuarCombosObjetos();
        objeto.solicitudEvaluacionCornealLazy = true;
    };
    RegistroExtraccionCrudComponent.prototype.informacionCompleta = function () { };
    RegistroExtraccionCrudComponent.prototype.evtActSolCor = function (accion, obj) {
        if (accion) {
            (obj);
        }
    };
    RegistroExtraccionCrudComponent.prototype.doSave = function () {
        var auxRegExtracion = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"]();
        auxRegExtracion.from(this.registroExtraccion);
        auxRegExtracion.idsolicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCorneal"](this.solicitudEvaluacionCorneal);
        auxRegExtracion.coordinadorExtraccion = this.registroExtraccion.coordinadorExtraccion;
        auxRegExtracion.datoCorneaExtraccion = this.registroExtraccion.datoCorneaExtraccion;
        auxRegExtracion.equipoExtraccion = this.registroExtraccion.equipoExtraccion;
        auxRegExtracion.tipoDonanteMultiorganico = this.registroExtraccion.tipoDonanteMultiorganico;
        this.registroExtraccion = auxRegExtracion;
        // this.registroExtraccion.idsolicitudEvaluacionCorneal =  new SolicitudEvaluacionCorneal ( this.registroExtraccion.idsolicitudEvaluacionCorneal);
        // this.registroExtraccion.idsolicitudEvaluacionCorneal.from(this.solicitudEvaluacionCorneal);
        //  this.registroExtraccion.idsolicitudEvaluacionCorneal.id = this.solicitudEvaluacionCorneal.id;
        this.registroExtraccion.coordinadorExtraccion = this.listaCoordinadorExtraccion;
        this.registroExtraccion.equipoExtraccion = this.listaEquipoExtractor;
        this.registroExtraccion.usuarioUltMov = {};
        this.registroExtraccion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
        (this.registroExtraccion);
        if (this.registroExtraccion.tipoDonanteMultiorganico == null ||
            this.registroExtraccion.telefonoContacto == null ||
            !this.validaTelefonoContacto ||
            this.listaCoordinadorExtraccion.length == 0 ||
            this.listaEquipoExtractor.length == 0 ||
            this.registroExtraccion.panelViral == null ||
            this.registroExtraccion.observacion == null ||
            this.registroExtraccion.observacion == "") {
            // if (this.registroExtraccion.tipoDonanteMultiorganico == null) {
            //   this.esRequerido = false;
            //   return;
            // }
            this.esRequerido = true;
            bootbox.alert("Ingrese la información requerida.");
            return;
        }
        if (this.registroExtraccion.id == null) {
            this.datoCorneaExtraccionCI.tipoCornea = 1;
            this.datoCorneaExtraccionCD.tipoCornea = 2;
            this.registroExtraccion.datoCorneaExtraccion = [];
            this.registroExtraccion.datoCorneaExtraccion.push(this.datoCorneaExtraccionCI);
            this.registroExtraccion.datoCorneaExtraccion.push(this.datoCorneaExtraccionCD);
            this.listoEnviar = true;
            this.guardarRegistroExtraccionBack(this.registroExtraccion);
            this.solicitudEvaluacionCorneal_service.actualizarSolicitudEvaluacionCorneal(this.registroExtraccion.idsolicitudEvaluacionCorneal, this.evtActSolCor, this);
        }
        else {
            this.registroExtraccion.datoCorneaExtraccion = [];
            this.registroExtraccion.datoCorneaExtraccion.push(this.datoCorneaExtraccionCI);
            this.registroExtraccion.datoCorneaExtraccion.push(this.datoCorneaExtraccionCD);
            this.listoEnviar = true;
            (this.listoEnviar);
            this.actualizarRegistroExtraccionBack(this.registroExtraccion);
            this.solicitudEvaluacionCorneal_service.actualizarSolicitudEvaluacionCorneal(this.registroExtraccion.idsolicitudEvaluacionCorneal, this.evtActSolCor, this);
        }
    };
    RegistroExtraccionCrudComponent.prototype.verificaIDSCenatras = function () {
        var salida = false;
        if (this.solicitudEvaluacionCorneal == null) {
            salida = false;
        }
        else if (this.solicitudEvaluacionCorneal.datosProcuracionCorneal == null) {
            salida = false;
        }
        else if (this.solicitudEvaluacionCorneal.datosProcuracionCorneal.length === 0) {
            salida = false;
        }
        else {
            this.solicitudEvaluacionCorneal.datosProcuracionCorneal.forEach(function (element) {
                if (element.idcenatra !== null) {
                    salida = true;
                }
            });
        }
        return salida;
    };
    RegistroExtraccionCrudComponent.prototype.doEnviar = function () {
        if (this.verificaIDSCenatras() === false) {
            bootbox.alert("!En necesario por lo menos in ID Cenatra¡ Guarda y regresar a la solicitud para agregarlo");
            return;
        }
        bootbox.confirm({
            message: "¿Deseas enviar la solicitud a la bandeja de recepción de tejido?!Al enviar los datos a recepcion la información que no contenga id cenatra se eliminará!",
            buttons: {
                confirm: {
                    label: "Sí",
                    className: "btn-primary"
                },
                cancel: {
                    label: "No",
                    className: ""
                }
            },
            callback: function (result) {
                if (result) {
                    var recepcion = new _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_22__["RecepcionSolicitudEvaluacion"]();
                    recepcion.idsolicitudEvaluacionCorneal = {
                        id: this.solicitudEvaluacionCorneal.id
                    };
                    recepcion.usuarioUltMov = {};
                    recepcion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
                    (recepcion);
                    this.recepcionSolicitudEvaluacionService.guardarRecepcionSolicitudEvaluacion(recepcion, this.evn_guardarRecepcion, this);
                    //this.router.navigateByUrl('/solicitud-evaluacion-corneal-crud/');
                }
            }.bind(this)
        });
    };
    RegistroExtraccionCrudComponent.prototype.evn_buscarRecepcion = function (recepcionSolicitudEvaluacion, objeto) {
        objeto.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
    };
    RegistroExtraccionCrudComponent.prototype.evn_guardarRecepcion = function (recepcionSolicitudEvaluacion, objeto) {
        objeto.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
        bootbox.alert("Solicitud Enviada a Recepción.");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegistroExtraccionCrudComponent.prototype, "ocultarConjuntosRegistroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], RegistroExtraccionCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegistroExtraccionCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccion"])
    ], RegistroExtraccionCrudComponent.prototype, "registroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionCrudComponent.prototype, "registroExtraccionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionCrudComponent.prototype, "registroExtraccionTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCorneal"])
    ], RegistroExtraccionCrudComponent.prototype, "solicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], RegistroExtraccionCrudComponent.prototype, "listaEquipoExtractor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], RegistroExtraccionCrudComponent.prototype, "listaCoordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _dato_cornea_extracciones_shared_dato_cornea_extraccion__WEBPACK_IMPORTED_MODULE_20__["DatoCorneaExtraccion"])
    ], RegistroExtraccionCrudComponent.prototype, "datoCorneaExtraccionCI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _dato_cornea_extracciones_shared_dato_cornea_extraccion__WEBPACK_IMPORTED_MODULE_20__["DatoCorneaExtraccion"])
    ], RegistroExtraccionCrudComponent.prototype, "datoCorneaExtraccionCD", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegistroExtraccionCrudComponent.prototype, "esRequerido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionCrudComponent.prototype, "enableIzquierda", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionCrudComponent.prototype, "enableDerecha", void 0);
    RegistroExtraccionCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-registro-extraccion-crud",
            template: __webpack_require__(/*! ./registro-extraccion-crud.component.html */ "./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.html"),
            styles: [__webpack_require__(/*! ./registro-extraccion-crud.component.css */ "./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
                _shared_registro_extraccion_service__WEBPACK_IMPORTED_MODULE_7__["RegistroExtraccionService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_14__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_12__["PerfilRedIsssteService"],
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_13__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_15__["PerfilService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__["SolicitudEvaluacionCornealService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__["CausaMuerteService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_21__["RecepcionSolicitudEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _shared_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"],
            _shared_registro_extraccion_service__WEBPACK_IMPORTED_MODULE_7__["RegistroExtraccionService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_12__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_13__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_14__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_15__["PerfilService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__["CausaMuerteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_21__["RecepcionSolicitudEvaluacionService"]])
    ], RegistroExtraccionCrudComponent);
    return RegistroExtraccionCrudComponent;
}());



/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para registroExtraccion-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionRegistroExtraccion.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_registroExtraccion_{{nombregrid}}\">\n                <div id=\"grid_registroExtraccion_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: RegistroExtraccionListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroExtraccionListKendoComponent", function() { return RegistroExtraccionListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/registro-extraccion */ "./src/app/registro-extracciones/shared/registro-extraccion.ts");
/* harmony import */ var _shared_configurar_registro_extraccion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-registro-extraccion */ "./src/app/registro-extracciones/shared/configurar-registro-extraccion.ts");
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
var RegistroExtraccionListKendoComponent = /** @class */ (function () {
    function RegistroExtraccionListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.registroExtraccionSeleccionado = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_3__["RegistroExtraccion"]();
        this.configuracionRegistroExtraccion = new _shared_configurar_registro_extraccion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarRegistroExtraccion"]();
        this.nombregrid = "";
        this.evtRegistroExtraccionSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "registroExtraccion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'registroExtraccion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'registroExtraccion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    RegistroExtraccionListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionRegistroExtraccion.titulo.indexOf("Catálogo") != -1) {
            this.configuracionRegistroExtraccion.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    RegistroExtraccionListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionRegistroExtraccion && changes.configuracionRegistroExtraccion.currentValue &&
            (changes.configuracionRegistroExtraccion.previousValue instanceof _shared_configurar_registro_extraccion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarRegistroExtraccion"])) {
            if (changes.configuracionRegistroExtraccion.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionRegistroExtraccion.currentValue.permisosAtributos;
            if (changes.configuracionRegistroExtraccion.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionRegistroExtraccion.currentValue.permisosTabla;
            if ($("#grid_registroExtraccion_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    RegistroExtraccionListKendoComponent.prototype.ngOnInit = function () {
        self["grid_registroExtraccion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionRegistroExtraccion.permisosAtributos &&
            this.configuracionRegistroExtraccion.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "registroExtraccion",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RegistroExtraccion'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RegistroExtraccion'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'RegistroExtraccion'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionRegistroExtraccion.permisosAtributos)
            this.permisosAtributos = this.configuracionRegistroExtraccion.permisosAtributos;
        if (this.configuracionRegistroExtraccion.permisosTabla)
            this.permisosTabla = this.configuracionRegistroExtraccion.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    RegistroExtraccionListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoAtributo && permisos.registroExtraccion.PermisoAtributo.length > 0
            && !obj.configuracionRegistroExtraccion.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.registroExtraccion.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.RegistroExtraccion.PermisoAtributo ;
        }
        if (permisos && permisos.registroExtraccion && permisos.registroExtraccion.PermisoTabla && permisos.registroExtraccion.PermisoTabla.length > 0
            && !obj.configuracionRegistroExtraccion.permisosTabla) {
            obj.globalesService.evtTablas(permisos.registroExtraccion.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.RegistroExtraccion.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    RegistroExtraccionListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_registroExtraccion_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    RegistroExtraccionListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionRegistroExtraccion.campoAgEl != null
            && this.configuracionRegistroExtraccion.registroExtraccionConsulta
            && this.configuracionRegistroExtraccion.registroExtraccionConsulta.isOk
            && !this.configuracionRegistroExtraccion.registroExtraccionConsulta.isOk())
            return;
        if (this.configuracionRegistroExtraccion.registroExtraccionConsulta) {
            if (!this.configuracionRegistroExtraccion.campoAgEl && this.configuracionRegistroExtraccion.registroExtraccionConsulta instanceof _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_3__["RegistroExtraccion"])
                this.configuracionRegistroExtraccion.rutaLista = this.crudServiceBaseUrl + "/getRegistroExtraccionesByDto";
            this.lista = this.configuracionRegistroExtraccion.lecturaP(completar, this.configuracionRegistroExtraccion.registroExtraccionConsulta);
            if (this.configuracionRegistroExtraccion.campoAgEl) {
                this.rutaAgregar = this.configuracionRegistroExtraccion.agregarP(function () { }, this.configuracionRegistroExtraccion.campoAgEl);
                this.rutaEliminar = this.configuracionRegistroExtraccion.eliminarP(function () { }, this.configuracionRegistroExtraccion.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionRegistroExtraccion.agregarP(completar, this.configuracionRegistroExtraccion.registroExtraccionConsulta);
                this.rutaEliminar = this.configuracionRegistroExtraccion.eliminarP(completar, this.configuracionRegistroExtraccion.registroExtraccionConsulta);
            }
        }
        else {
            this.lista = this.configuracionRegistroExtraccion.lectura();
            this.rutaAgregar = this.configuracionRegistroExtraccion.agregar();
            this.rutaEliminar = this.configuracionRegistroExtraccion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "registroExtraccion", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "registroExtraccion", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "idsolicitudEvaluacionCorneal")) {
            campos["idsolicitudEvaluacionCorneal"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "idsolicitudEvaluacionCorneal"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "tipoDonanteMultiorganico")) {
            campos["tipoDonanteMultiorganico"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "tipoDonanteMultiorganico"), nullable: true };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "telefonoContacto")) {
            campos["telefonoContacto"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "telefonoContacto"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "panelViral")) {
            campos["panelViral"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "panelViral"), nullable: true };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "observacion")) {
            campos["observacion"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "observacion"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "registroExtraccion", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionRegistroExtraccion.rutaActualizar,
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
            if (self.configuracionRegistroExtraccion.campoAgEl) {
                if (self.configuracionRegistroExtraccion.tipocampoAgEl == "RegistroExtraccionRegistroExtraccion")
                    self.configuracionRegistroExtraccion.campoAgEl.registroExtraccion2 = options.models[0];
                else
                    self.configuracionRegistroExtraccion.campoAgEl.registroExtraccion = options.models[0];
                return JSON.stringify(self.configuracionRegistroExtraccion.campoAgEl);
            }
            else if (est.options[operation].data.models.registroExtraccion) {
                est.options[operation].data.models.registroExtraccion2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    RegistroExtraccionListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "registroExtraccion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "registroExtraccion", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "idsolicitudEvaluacionCorneal")) {
            columnas.push({ field: "idsolicitudEvaluacionCorneal", title: this.globalesService.aetiqueta(this, "registroExtraccion", "idsolicitudEvaluacionCorneal"), editor: idsolicitudEvaluacionCornealDropDownEditor, template: " #if (idsolicitudEvaluacionCorneal){#   #=idsolicitudEvaluacionCorneal.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "tipoDonanteMultiorganico")) {
            columnas.push({ field: "tipoDonanteMultiorganico", title: this.globalesService.aetiqueta(this, "registroExtraccion", "tipoDonanteMultiorganico") });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "telefonoContacto")) {
            columnas.push({ field: "telefonoContacto", title: this.globalesService.aetiqueta(this, "registroExtraccion", "telefonoContacto"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "panelViral")) {
            columnas.push({ field: "panelViral", title: this.globalesService.aetiqueta(this, "registroExtraccion", "panelViral") });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "observacion")) {
            columnas.push({ field: "observacion", title: this.globalesService.aetiqueta(this, "registroExtraccion", "observacion"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "registroExtraccion", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "registroExtraccion", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "registroExtraccion", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "registroExtraccion", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "registroExtraccion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "registroExtraccion", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "registroExtraccion"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "registroExtraccion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "registroExtraccion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "registroExtraccion") && this.configuracionRegistroExtraccion.registroExtraccionConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_registroExtraccion_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_registroExtraccion_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionRegistroExtraccion.altoComponente,
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
        this.grid = $("#grid_registroExtraccion_" + this.nombregrid).data("kendoGrid");
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
    RegistroExtraccionListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_registroExtraccion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.registroExtraccionSeleccionado = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_3__["RegistroExtraccion"]();
        gridac.registroExtraccionSeleccionado.from(dataItem);
        gridac.evtRegistroExtraccionSeleccionado.emit(gridac.registroExtraccionSeleccionado);
        (gridac.registroExtraccionSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_registro_extraccion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarRegistroExtraccion"])
    ], RegistroExtraccionListKendoComponent.prototype, "configuracionRegistroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegistroExtraccionListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("registroExtraccionSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RegistroExtraccionListKendoComponent.prototype, "evtRegistroExtraccionSeleccionado", void 0);
    RegistroExtraccionListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro-extraccion-list-kendo',
            template: __webpack_require__(/*! ./registro-extraccion-list-kendo.component.html */ "./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./registro-extraccion-list-kendo.component.css */ "./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], RegistroExtraccionListKendoComponent);
    return RegistroExtraccionListKendoComponent;
}());



/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistroExtraccionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroExtraccionRoutingModule", function() { return RegistroExtraccionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registro_extracciones_registro_extraccion_list_kendo_registro_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component */ "./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.ts");
/* harmony import */ var _registro_extracciones_registro_extraccion_crud_registro_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component */ "./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.ts");
/* harmony import */ var _registro_extracciones_registro_extraccion_table_registro_extraccion_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registro-extracciones/registro-extraccion-table/registro-extraccion-table.component */ "./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'registro-extraccion-list-kendo', component: _registro_extracciones_registro_extraccion_list_kendo_registro_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["RegistroExtraccionListKendoComponent"] },
    { path: 'registro-extraccion-crud/:id', component: _registro_extracciones_registro_extraccion_crud_registro_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_3__["RegistroExtraccionCrudComponent"] },
    { path: 'registro-extraccion-table', component: _registro_extracciones_registro_extraccion_table_registro_extraccion_table_component__WEBPACK_IMPORTED_MODULE_4__["RegistroExtraccionTableComponent"] },
];
var RegistroExtraccionRoutingModule = /** @class */ (function () {
    function RegistroExtraccionRoutingModule() {
    }
    RegistroExtraccionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistroExtraccionRoutingModule);
    return RegistroExtraccionRoutingModule;
}());



/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_registroExtraccion\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('registroExtraccion','id')\" >{{aetiqueta('registroExtraccion','id')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','idsolicitudEvaluacionCorneal')\" >{{aetiqueta('registroExtraccion','idsolicitudEvaluacionCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','tipoDonanteMultiorganico')\" >{{aetiqueta('registroExtraccion','tipoDonanteMultiorganico')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','telefonoContacto')\" >{{aetiqueta('registroExtraccion','telefonoContacto')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','panelViral')\" >{{aetiqueta('registroExtraccion','panelViral')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','observacion')\" >{{aetiqueta('registroExtraccion','observacion')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','fechaRegistro')\" >{{aetiqueta('registroExtraccion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','fechaActualizacion')\" >{{aetiqueta('registroExtraccion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','fechaBaja')\" >{{aetiqueta('registroExtraccion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','usuarioUltMov')\" >{{aetiqueta('registroExtraccion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','status')\" >{{aetiqueta('registroExtraccion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('registroExtraccion','id')\" >{{aetiqueta('registroExtraccion','id')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','idsolicitudEvaluacionCorneal')\" >{{aetiqueta('registroExtraccion','idsolicitudEvaluacionCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','tipoDonanteMultiorganico')\" >{{aetiqueta('registroExtraccion','tipoDonanteMultiorganico')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','telefonoContacto')\" >{{aetiqueta('registroExtraccion','telefonoContacto')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','panelViral')\" >{{aetiqueta('registroExtraccion','panelViral')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','observacion')\" >{{aetiqueta('registroExtraccion','observacion')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','fechaRegistro')\" >{{aetiqueta('registroExtraccion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','fechaActualizacion')\" >{{aetiqueta('registroExtraccion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','fechaBaja')\" >{{aetiqueta('registroExtraccion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','usuarioUltMov')\" >{{aetiqueta('registroExtraccion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('registroExtraccion','status')\" >{{aetiqueta('registroExtraccion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-registro-extraccion [class.hidden]=\"primero\" [(registroExtraccion)]=\"registroExtraccionSeleccionado\" (registroExtraccionTablaChange)=\"cambio_registroExtraccion($event)\"> </app-registro-extraccion>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: RegistroExtraccionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroExtraccionTableComponent", function() { return RegistroExtraccionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/registro-extraccion */ "./src/app/registro-extracciones/shared/registro-extraccion.ts");
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






var RegistroExtraccionTableComponent = /** @class */ (function () {
    function RegistroExtraccionTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "registroExtraccion", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.registroExtraccionSeleccionado = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_1__["RegistroExtraccion"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'registroExtraccion'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    RegistroExtraccionTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'registroExtraccion'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    RegistroExtraccionTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(RegistroExtraccionTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    RegistroExtraccionTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("registroExtraccion", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("registroExtraccion", "idsolicitudEvaluacionCorneal"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idsolicitudEvaluacionCorneal)
                    return "<span style=\"cursor: pointer\">" + oObj.idsolicitudEvaluacionCorneal.folioSolicitud + "</span>";
                return "";
            }
        });
        if (!this.avisible("registroExtraccion", "tipoDonanteMultiorganico"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "tipoDonanteMultiorganico" });
        if (!this.avisible("registroExtraccion", "telefonoContacto"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "telefonoContacto" });
        if (!this.avisible("registroExtraccion", "panelViral"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "panelViral" });
        if (!this.avisible("registroExtraccion", "observacion"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "observacion" });
        if (!this.avisible("registroExtraccion", "fechaRegistro"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("registroExtraccion", "fechaActualizacion"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("registroExtraccion", "fechaBaja"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("registroExtraccion", "usuarioUltMov"))
            columnasNoVisibles.push(9);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("registroExtraccion", "status"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("registroExtraccion"))
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
        var tabla = $('#tabla_registroExtraccion').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_registroExtraccion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.registroExtraccionSeleccionado = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_1__["RegistroExtraccion"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "registroExtraccion/getRegistroExtracciones",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_registroExtraccion tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_registroExtraccion').DataTable().row(this).data();
                self.registroExtraccionSeleccionado = new _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_1__["RegistroExtraccion"]();
                self.registroExtraccionSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_registroExtraccion').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    RegistroExtraccionTableComponent.prototype.ngOnInit = function () {
    };
    RegistroExtraccionTableComponent.prototype.cambio_registroExtraccion = function (registroExtraccion) {
        $('#tabla_registroExtraccion').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    RegistroExtraccionTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    RegistroExtraccionTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    RegistroExtraccionTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    RegistroExtraccionTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    RegistroExtraccionTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    RegistroExtraccionTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    RegistroExtraccionTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    RegistroExtraccionTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    RegistroExtraccionTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    RegistroExtraccionTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    RegistroExtraccionTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    RegistroExtraccionTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    RegistroExtraccionTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    RegistroExtraccionTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    RegistroExtraccionTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    RegistroExtraccionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro-extraccion-table',
            template: __webpack_require__(/*! ./registro-extraccion-table.component.html */ "./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.html"),
            styles: [__webpack_require__(/*! ./registro-extraccion-table.component.css */ "./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], RegistroExtraccionTableComponent);
    return RegistroExtraccionTableComponent;
}());



/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegistroExtraccionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroExtraccionModule", function() { return RegistroExtraccionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registro_extraccion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-extraccion-routing.module */ "./src/app/registro-extracciones/registro-extraccion-routing.module.ts");
/* harmony import */ var _registro_extraccion_list_kendo_registro_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registro-extraccion-list-kendo/registro-extraccion-list-kendo.component */ "./src/app/registro-extracciones/registro-extraccion-list-kendo/registro-extraccion-list-kendo.component.ts");
/* harmony import */ var _registro_extraccion_crud_registro_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-extraccion-crud/registro-extraccion-crud.component */ "./src/app/registro-extracciones/registro-extraccion-crud/registro-extraccion-crud.component.ts");
/* harmony import */ var _registro_extraccion_conjunto_registro_extraccion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-extraccion-conjunto/registro-extraccion-conjunto.component */ "./src/app/registro-extracciones/registro-extraccion-conjunto/registro-extraccion-conjunto.component.ts");
/* harmony import */ var _registro_extraccion_registro_extraccion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registro-extraccion/registro-extraccion.component */ "./src/app/registro-extracciones/registro-extraccion/registro-extraccion.component.ts");
/* harmony import */ var _registro_extraccion_table_registro_extraccion_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registro-extraccion-table/registro-extraccion-table.component */ "./src/app/registro-extracciones/registro-extraccion-table/registro-extraccion-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module */ "./src/app/solicitud-evaluacion-corneales/solicitud-evaluacion-corneal.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _equipo_extracciones_equipo_extraccion_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../equipo-extracciones/equipo-extraccion.module */ "./src/app/equipo-extracciones/equipo-extraccion.module.ts");
/* harmony import */ var _coordinador_extracciones_coordinador_extraccion_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../coordinador-extracciones/coordinador-extraccion.module */ "./src/app/coordinador-extracciones/coordinador-extraccion.module.ts");
/* harmony import */ var _dato_cornea_extracciones_dato_cornea_extraccion_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dato-cornea-extracciones/dato-cornea-extraccion.module */ "./src/app/dato-cornea-extracciones/dato-cornea-extraccion.module.ts");
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















var RegistroExtraccionModule = /** @class */ (function () {
    function RegistroExtraccionModule(parentModule) {
        if (parentModule) {
            throw new Error('RegistroExtraccionModule is already loaded. Import it in the AppModule only');
        }
    }
    RegistroExtraccionModule_1 = RegistroExtraccionModule;
    RegistroExtraccionModule.forRoot = function () {
        return {
            ngModule: RegistroExtraccionModule_1,
            providers: []
        };
    };
    var RegistroExtraccionModule_1;
    RegistroExtraccionModule = RegistroExtraccionModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"], _registro_extraccion_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistroExtraccionRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot(),
                _solicitud_evaluacion_corneales_solicitud_evaluacion_corneal_module__WEBPACK_IMPORTED_MODULE_10__["SolicitudEvaluacionCornealModule"],
                _equipo_extracciones_equipo_extraccion_module__WEBPACK_IMPORTED_MODULE_12__["EquipoExtraccionModule"].forRoot(),
                _coordinador_extracciones_coordinador_extraccion_module__WEBPACK_IMPORTED_MODULE_13__["CoordinadorExtraccionModule"].forRoot(),
                _dato_cornea_extracciones_dato_cornea_extraccion_module__WEBPACK_IMPORTED_MODULE_14__["DatoCorneaExtraccionModule"].forRoot()
            ],
            declarations: [
                _registro_extraccion_list_kendo_registro_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["RegistroExtraccionListKendoComponent"],
                _registro_extraccion_registro_extraccion_component__WEBPACK_IMPORTED_MODULE_7__["RegistroExtraccionComponent"],
                _registro_extraccion_crud_registro_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_5__["RegistroExtraccionCrudComponent"],
                _registro_extraccion_conjunto_registro_extraccion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccionConjuntoComponent"],
                _registro_extraccion_table_registro_extraccion_table_component__WEBPACK_IMPORTED_MODULE_8__["RegistroExtraccionTableComponent"],
            ],
            exports: [
                _registro_extraccion_list_kendo_registro_extraccion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["RegistroExtraccionListKendoComponent"],
                _registro_extraccion_registro_extraccion_component__WEBPACK_IMPORTED_MODULE_7__["RegistroExtraccionComponent"],
                _registro_extraccion_crud_registro_extraccion_crud_component__WEBPACK_IMPORTED_MODULE_5__["RegistroExtraccionCrudComponent"],
                _registro_extraccion_conjunto_registro_extraccion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["RegistroExtraccionConjuntoComponent"],
                _registro_extraccion_table_registro_extraccion_table_component__WEBPACK_IMPORTED_MODULE_8__["RegistroExtraccionTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [RegistroExtraccionModule])
    ], RegistroExtraccionModule);
    return RegistroExtraccionModule;
}());



/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion/registro-extraccion.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion/registro-extraccion.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion/registro-extraccion.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion/registro-extraccion.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h2>{{ etiquetaGeneral }}</h2>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <!-- <app-componente-identificador [componente]=\"'registroExtraccion'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"registroExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRegistroExtraccion['id']\"\n                                                   [(dato)]=\"registroExtraccion.id\"   class=\"w-100\" >\n                    </app-componente-identificador > -->\n                    <!-- <div>\n                        <app-componente-objeto [componente]=\"'registroExtraccion'\"\n                                               [atributo]=\"'idsolicitudEvaluacionCorneal'\"\n                                               [buscar]=\"registroExtraccionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosRegistroExtraccion['idsolicitudEvaluacionCorneal']\"\n                                               [(dato)]=\"registroExtraccion.idsolicitudEvaluacionCorneal\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosRegistroExtraccion\"\n                                               [opciones]=\"lista_idsolicitudEvaluacionCornealRegistroExtraccion\"\n                                               [atributoVisible]=\"'folioSolicitud'\" [(objetoEdicion)]=\"idsolicitudEvaluacionCornealRegistroExtraccionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idsolicitudEvaluacionCornealEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'registroExtraccion','idsolicitudEvaluacionCorneal')\" >\n                                   <app-solicitud-evaluacion-corneal-crud [nombre]=\"'idsolicitudEvaluacionCorneal'\" [solicitudEvaluacionCorneal]=\"registroExtraccion.idsolicitudEvaluacionCorneal\" (solicitudEvaluacionCornealChange)=\"evtIdsolicitudEvaluacionCorneal($event)\"\n                                                           [ocultarConjuntosSolicitudEvaluacionCorneal]=\"'true'\" [class.hidden]=\"!idsolicitudEvaluacionCornealEditar\" ></app-solicitud-evaluacion-corneal-crud>\n                            </div>\n                        </div>\n                    </div> -->\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-6\">\n                            <app-componente-cadena [componente]=\"'registroExtraccion'\" [atributo]=\"'idsolicitudEvaluacionCorneal'\" [buscar]=\"registroExtraccionBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"\n                  validosRegistroExtraccion['tipoDonanteMultiorganico']\n                \" [(dato)]=\"solicitudEvaluacionCorneal.folioSolicitud\" class=\"w-100\">\n                            </app-componente-cadena>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label class=\"form-text\">Tipo de Donante:*</label>\n                                <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                  <input\n                    type=\"radio\"\n                    name=\"tipo\"\n                    class=\"form-checkbox-input\"\n                    [value]=\"1\"\n                    [(ngModel)]=\"registroExtraccion.tipoDonanteMultiorganico\"\n                  />\n                  Donante Multiorgánico\n                </label>\n                                <label class=\"radio-inline\">\n                  <input\n                    type=\"radio\"\n                    name=\"tipo\"\n                    [value]=\"0\"\n                    class=\"form-checkbox-input\"\n                    [(ngModel)]=\"registroExtraccion.tipoDonanteMultiorganico\"\n                  />\n                  Donante de Tejido\n                </label>\n                                <!-- <div *ngIf=\"esRequerido\">\n                                    <small class=\"form-text form-text-error\">Este campo es requerido!</small>\n                                </div> -->\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- <app-componente-cadena\n            [componente]=\"'registroExtraccion'\"\n            [atributo]=\"'tipoDonanteMultiorganico'\"\n            [buscar]=\"registroExtraccionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosRegistroExtraccion['tipoDonanteMultiorganico']\"\n            [(dato)]=\"registroExtraccion.tipoDonanteMultiorganico\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Lugar de Extracción:</label>\n                        <!--input [disabled]=\"true\" [value]=\"solicitudEvaluacionCorneal.idhospital?.establecimiento\" class=\"form-control\" type=\"text\"-->\n                        <select  id=\"solicitudEvaluacionCorneal.idhospital\"\n                        name=\"solicitudEvaluacionCorneal.idhospital\" class=\"form-control\"\n                        [(ngModel)]=\"this.solicitudEvaluacionCorneal.idhospital\" #solicitudEvaluacionCorneal.idhospital>\n                        <option *ngFor=\"let hospital of lista_idhospitalSolicitudTejidoCornealHospital\" [ngValue]=\"hospital\">\n                          {{hospital?.nombre}}</option>\n                      </select>\n                    </div>\n\n                    <app-componente-cadena [componente]=\"'registroExtraccion'\" [atributo]=\"'telefonoContacto'\" [buscar]=\"registroExtraccionBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosRegistroExtraccion['telefonoContacto']\" [(dato)]=\"registroExtraccion.telefonoContacto\"\n                        [maxlength]=\"15\" class=\"w-100\">\n                    </app-componente-cadena>\n\n                    <app-equipo-extraccion-crud [listaEquipoExtractor]=\"listaEquipoExtractor\"></app-equipo-extraccion-crud>\n                    <app-coordinador-extraccion-crud [listaCoordinadorExtraccion]=\"listaCoordinadorExtraccion\"></app-coordinador-extraccion-crud>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <app-dato-cornea-extraccion-crud [datoCorneaExtraccion]=\"datoCorneaExtraccionCI\" [etiquetaGeneral]=\"'CÓRNEA IZQUIERDA'\" [enable]=\"enableIzquierda\"></app-dato-cornea-extraccion-crud>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <app-dato-cornea-extraccion-crud [datoCorneaExtraccion]=\"datoCorneaExtraccionCD\" [etiquetaGeneral]=\"'CÓRNEA DERECHA'\" [enable]=\"enableDerecha\"></app-dato-cornea-extraccion-crud>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label class=\"control-label\">Panel Viral:*</label>\n                            <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                <input\n                  type=\"radio\"\n                  name=\"panel\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"registroExtraccion.panelViral\"\n                />\n                Sí\n              </label>\n                            <label class=\"radio-inline\">\n                <input\n                  type=\"radio\"\n                  name=\"panel\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"registroExtraccion.panelViral\"\n                />\n                No\n              </label>\n                        </div>\n                    </div>\n\n                    <!-- <app-componente-cadena\n            [componente]=\"'registroExtraccion'\"\n            [atributo]=\"'panelViral'\"\n            [buscar]=\"registroExtraccionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosRegistroExtraccion['panelViral']\"\n            [(dato)]=\"registroExtraccion.panelViral\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n          <app-componente-cadena-larga\n            [componente]=\"'registroExtraccion'\"\n            [atributo]=\"'observacion'\"\n            [buscar]=\"registroExtraccionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosRegistroExtraccion['observacion']\"\n            [(dato)]=\"registroExtraccion.observacion\"\n            class=\"w-100\"\n            maxlength=\"200\"\n          >\n          </app-componente-cadena-larga>\n          <!-- <app-componente-fecha [componente]=\"'registroExtraccion'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"registroExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRegistroExtraccion['fechaRegistro']\"\n                                                   [(dato)]=\"registroExtraccion.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'registroExtraccion'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"registroExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRegistroExtraccion['fechaActualizacion']\"\n                                                   [(dato)]=\"registroExtraccion.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'registroExtraccion'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"registroExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRegistroExtraccion['fechaBaja']\"\n                                                   [(dato)]=\"registroExtraccion.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                    <div>\n                        <app-componente-objeto [componente]=\"'registroExtraccion'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"registroExtraccionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosRegistroExtraccion['usuarioUltMov']\"\n                                               [(dato)]=\"registroExtraccion.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosRegistroExtraccion\"\n                                               [opciones]=\"lista_usuarioUltMovRegistroExtraccion\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovRegistroExtraccionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'registroExtraccion','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"registroExtraccion.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-radio [componente]=\"'registroExtraccion'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"registroExtraccionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosRegistroExtraccion['status']\"\n                                                   [(dato)]=\"registroExtraccion.status\"   class=\"w-100\" >\n                    </app-componente-radio >  -->\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/registro-extracciones/registro-extraccion/registro-extraccion.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/registro-extracciones/registro-extraccion/registro-extraccion.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RegistroExtraccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroExtraccionComponent", function() { return RegistroExtraccionComponent; });
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/registro-extraccion */ "./src/app/registro-extracciones/shared/registro-extraccion.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _dato_cornea_extracciones_shared_dato_cornea_extraccion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dato-cornea-extracciones/shared/dato-cornea-extraccion */ "./src/app/dato-cornea-extracciones/shared/dato-cornea-extraccion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroExtraccionComponent = /** @class */ (function () {
    function RegistroExtraccionComponent(hospital_service) {
        this.hospital_service = hospital_service;
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.registroExtraccionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usuarioUltMovRegistroExtraccionUsuarioEditar = false;
        this.idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEditar = false;
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalSolicitudTejidoCornealHospital, this);
    }
    RegistroExtraccionComponent.prototype.evtGetIdhospitalSolicitudTejidoCornealHospital = function (lista_idhospitalSolicitudTejidoCornealHospital, obj) {
        obj.lista_idhospitalSolicitudTejidoCornealHospital = lista_idhospitalSolicitudTejidoCornealHospital;
        obj.actualizar_IdhospitalSolicitudTejidoCornealHospital();
    };
    RegistroExtraccionComponent.prototype.actualizar_IdhospitalSolicitudTejidoCornealHospital = function () {
        if (this.solicitudEvaluacionCorneal.idhospital)
            for (var _i = 0, _a = this.lista_idhospitalSolicitudTejidoCornealHospital; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.solicitudEvaluacionCorneal.idhospital.id) {
                    this.solicitudEvaluacionCorneal.idhospital = eleme;
                    break;
                }
            }
    };
    RegistroExtraccionComponent.prototype.actualizarRegistroExtraccion = function () {
        if (this.registroExtraccion.id == null) {
            this.registroExtraccionService.guardarRegistroExtraccion(this.registroExtraccion, this.evtGuardar, this);
        }
        else {
            this.registroExtraccionService.actualizarRegistroExtraccion(this.registroExtraccion, this.evtActualiza, this);
        }
    };
    RegistroExtraccionComponent.prototype.evtGuardar = function (registroExtraccion, obj) {
        obj.registroExtraccion = registroExtraccion;
        obj.registroExtraccionChange.emit(obj.registroExtraccion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    RegistroExtraccionComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.registroExtraccionChange.emit(obj.registroExtraccion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    RegistroExtraccionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarRegistroExtraccion();
            }
        }
        if (changes.solicitudEvaluacionCorneal || (changes.solicitudEvaluacionCorneal && changes.solicitudEvaluacionCorneal.idhospital)) {
            this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalSolicitudTejidoCornealHospital, this);
        }
        if (changes.permisosAtributos) {
            this.permisosAtributos.forEach(function (element) {
                if (element.id === 16) {
                    element.permiso = 2;
                }
                return element;
            });
        }
    };
    RegistroExtraccionComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "registroExtraccionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "validosRegistroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_registro_extraccion__WEBPACK_IMPORTED_MODULE_2__["RegistroExtraccion"])
    ], RegistroExtraccionComponent.prototype, "registroExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "registroExtraccionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], RegistroExtraccionComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "registroExtraccionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "lista_usuarioUltMovRegistroExtraccionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroExtraccionComponent.prototype, "lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_3__["SolicitudEvaluacionCorneal"])
    ], RegistroExtraccionComponent.prototype, "solicitudEvaluacionCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], RegistroExtraccionComponent.prototype, "listaEquipoExtractor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], RegistroExtraccionComponent.prototype, "listaCoordinadorExtraccion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _dato_cornea_extracciones_shared_dato_cornea_extraccion__WEBPACK_IMPORTED_MODULE_4__["DatoCorneaExtraccion"])
    ], RegistroExtraccionComponent.prototype, "datoCorneaExtraccionCI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _dato_cornea_extracciones_shared_dato_cornea_extraccion__WEBPACK_IMPORTED_MODULE_4__["DatoCorneaExtraccion"])
    ], RegistroExtraccionComponent.prototype, "datoCorneaExtraccionCD", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegistroExtraccionComponent.prototype, "esRequerido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegistroExtraccionComponent.prototype, "enableIzquierda", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegistroExtraccionComponent.prototype, "enableDerecha", void 0);
    RegistroExtraccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-registro-extraccion",
            template: __webpack_require__(/*! ./registro-extraccion.component.html */ "./src/app/registro-extracciones/registro-extraccion/registro-extraccion.component.html"),
            styles: [__webpack_require__(/*! ./registro-extraccion.component.css */ "./src/app/registro-extracciones/registro-extraccion/registro-extraccion.component.css")]
        }),
        __metadata("design:paramtypes", [_hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_0__["HospitalService"]])
    ], RegistroExtraccionComponent);
    return RegistroExtraccionComponent;
}());



/***/ }),

/***/ "./src/app/registro-extracciones/shared/configurar-registro-extraccion.ts":
/*!********************************************************************************!*\
  !*** ./src/app/registro-extracciones/shared/configurar-registro-extraccion.ts ***!
  \********************************************************************************/
/*! exports provided: ConfigurarRegistroExtraccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarRegistroExtraccion", function() { return ConfigurarRegistroExtraccion; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarRegistroExtraccion = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarRegistroExtraccion() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "registroExtraccion";
        this.rutaLista = this.crudServiceBaseUrl + "/getRegistroExtracciones";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarRegistroExtraccion";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarRegistroExtraccion";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarRegistroExtraccion";
        this.titulo = "Catálogo RegistroExtraccion";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.registroExtraccionConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarRegistroExtraccion.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarRegistroExtraccion.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarRegistroExtraccion.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarRegistroExtraccion.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarRegistroExtraccion.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarRegistroExtraccion.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarRegistroExtraccion;
}());



/***/ })

}]);
//# sourceMappingURL=app-registro-extracciones-registro-extraccion-module.js.map